export const name = 'stardew-ui'

export function apply(ctx) {
  let registered = false
  const disposers = []

  function tryRegister() {
    if (registered) return
    const fs = ctx.get('fs')
    const ws = ctx.get('webServer')
    if (!fs || !ws) return

    const BASES = ['.dsh/sdnot-sounds', 'C:/Users/Trouvaille/.dsh/sdnot-sounds']

    async function readSound(res, file) {
      if (!file || file.includes('..') || file.includes('/') || file.includes('\\')) {
        res.statusCode = 400
        res.end('bad name')
        return
      }
      for (const base of BASES) {
        try {
          const target = await fs.resolve(base + '/' + file)
          const bytes = await fs.readBytes(target, undefined, 32 * 1024 * 1024)
          const ext = file.slice(-4).toLowerCase()
          res.setHeader('Content-Type', ext === '.wav' ? 'audio/wav' : 'audio/mpeg')
          res.setHeader('Content-Length', String(bytes.length))
          res.setHeader('Cache-Control', 'public, max-age=3600')
          res.end(Buffer.from(bytes))
          return
        } catch (e) { /* try next base */ }
      }
      res.statusCode = 404
      res.end('not found')
    }

    disposers.push(ws.register({
      kind: 'prefix',
      path: '/@stardew/sounds',
      handler(req, res) {
        const path = (req.url || '').split('?')[0]
        const file = decodeURIComponent(path.split('/').pop() || '')
        readSound(res, file).catch(() => {
          res.statusCode = 500
          res.end('err')
        })
      },
    }))

    disposers.push(ws.register({
      kind: 'exact',
      path: '/@stardew/token-stats',
      handler(req, res) {
        const finish = (days) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ days }))
        }
        const sq = ctx.get('sessionQuery')
        const proj = ctx.get('sessionProjections')
        const cache = ctx.get('sessionProjectionCache')
        const sessions = ctx.get('sessions')
        if (!sq) { finish({}); return }
        sq.listSessions().then((recs) => {
          const days = {}
          recs.slice(0, 300).forEach((rec) => {
            let tu = null
            let h = null
            try {
              h = rec && rec.header
              if (!h) return
              const live = sessions ? sessions.get(rec.id) : undefined
              if (live && proj) {
                const snap = proj.snapshot(live)
                if (snap && snap.values) tu = snap.values.tokenUsage || null
              }
              if (!tu && cache) {
                const cs = cache.cachedSnapshot(h)
                if (cs && cs.values) tu = cs.values.tokenUsage || null
              }
            } catch (e) { /* skip session */ }
            if (!tu) return
            let d = null
            try { if (typeof h.createdAt === 'number') d = new Date(h.createdAt) } catch (e) { /* keep today */ }
            const key = d ? d.toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10)
            const b = days[key] || (days[key] = { inputMiss: 0, inputHit: 0, output: 0, total: 0 })
            const inp = tu.uncachedInputTokens || 0
            const hit = tu.cacheReadTokens || 0
            const wrt = tu.cacheWriteTokens || 0
            const out = tu.outputTokens || 0
            b.inputMiss += inp
            b.inputHit += hit
            b.output += out
            b.total += inp + hit + wrt + out
          })
          finish(days)
        }).catch(() => finish({}))
      },
    }))

    let queue = []
    const lastAt = {}
    const queueSound = (cat, cd) => {
      const now = Date.now()
      if (now - (lastAt[cat] || 0) < (cd || 1200)) return
      lastAt[cat] = now
      queue.push(cat)
      if (queue.length > 24) queue.shift()
    }

    disposers.push(ws.register({
      kind: 'exact',
      path: '/@stardew/pending-sounds',
      handler(req, res) {
        const q = queue
        queue = []
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ sounds: q }))
      },
    }))

    const on = (name, fn) => {
      const d = ctx.on(name, fn)
      if (d) disposers.push(d)
    }
    on('agent/turn-stopping', () => queueSound('done', 2500))
    on('subagent/end', () => queueSound('done', 1200))
    on('workflow/end', () => queueSound('done', 1200))
    on('agent/error', () => queueSound('error'))
    on('approval/request', (req, next) => { queueSound('attn'); return next() })
    on('agent/status', (p) => { if (p && p.status === 'running') queueSound('perm', 2000) })
    const jobs = ctx.get('jobs')
    if (jobs && jobs.onJobDone) {
      const jd = jobs.onJobDone(() => queueSound('done'))
      if (jd) disposers.push(jd)
    }

    registered = true
  }

  // try immediately; retry every 1s until services exist (bundle host may load before fs/webServer)
  tryRegister()
  if (!registered && typeof setTimeout === 'function') {
    let tries = 0
    const poll = () => {
      if (registered || tries >= 120) return
      tries += 1
      tryRegister()
      if (!registered) setTimeout(poll, 1000)
    }
    setTimeout(poll, 1000)
  }

  ctx.effect(() => () => {
    disposers.forEach((d) => { try { d() } catch (e) { /* ignore */ } })
  })
}