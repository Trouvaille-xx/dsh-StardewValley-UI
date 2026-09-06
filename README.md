# dsh-stardew

把星露谷物语的像素风和音效带进 **DeepSeek Harness（DSH）** 的 Web GUI。设置页新增「星露谷 Stardew Valley」分页，提供：

- **UI 风格**：11 个像素预设 —— 春 / 夏 / 秋 / 冬 + 海边（白天/夜晚）、沙漠、姜岛、谜语森林、温馨小家、丰收秋田。点击套用主题（配色 + 侧栏横幅 + 卡片装饰），横幅颜色跟随每个主题的主色，带像素切角与像素投影。
- **提醒音效**：五类可开关的自动触发音效（常驻 / 注意 / 完成 / 错误 / 点击），点击「新会话」响起木箱放置音效（`openBox`）。
- **背景 OST**：星露谷原声列表（曲目文件由用户自备），开启「播放背景音乐」循环播放，点击曲目试听 / 切换。
- **像素字体**：一键切换全局像素字体（Fusion Pixel SC / Silkscreen，需自行安装字体）。
- **总 Token 计数**：GitHub 风格热力图 + 月历视图（按会话日期聚合真实用量：总计 / 输入未命中 / 输入缓存命中 / 输出）。点击日期同时展示 **当天 / 当周 / 当月** 的 Token 消耗（数字 + 占比进度条）。
- **天气**：Canvas 像素粒子 —— 雨（蓝色斜丝 + 落地涟漪）、雪（冰蓝六角雪花自转飘落），天气 tint 罩层 + 环境音低音量常开；「冬」预设自动联动大雪，切到其他预设回到晴天。

> 早前还做过一个对话/轨迹旁的像素农场视图，因为像素美术太糙已被移除（`git log` 可考古）。

## 安装

1. 克隆到 web profile 的 node_modules 下：

   ```bash
   git clone https://github.com/Trouvaille-xx/dsh-stardew.git "$HOME/.dsh/profiles/web/node_modules/dsh-stardew"
   ```

   （Windows PowerShell：`git clone https://github.com/Trouvaille-xx/dsh-stardew.git "$env:USERPROFILE\.dsh\profiles\web\node_modules\dsh-stardew"`）

2. 打开 `profiles/web/package.json`，把 `"dsh-stardew"` 加进 `dsh.profile.bundles`：

   ```json
   "dsh": {
     "profile": {
       "bundles": ["dsh-skin-longterm", "dsh-stardew"]
     }
   }
   ```

3. **完全重启 DSH**（宿主代码只在启动时加载）。设置 → 星露谷 即可使用。

## 音效准备（重要）

仓库**不含任何星露谷音频** —— 游戏音频版权归 ConcernedApe，MIT 许可不覆盖音频。你需要自己准备一份音效目录 `~/.dsh/sdnot-sounds/`（即 `$DSH_HOME/.dsh/sdnot-sounds`），规则：

- 提醒音效：`perm--*.wav`、`attn--*.wav`、`done--*.wav`、`error--*.wav`（文件名随意，在设置页里挑）；
- 背景音乐：`bgm--*.mp3`；
- 天气环境音：`bgm--rain.wav`（雨）、`bgm--winter_day.wav`（雪）。

**自己动手从游戏里提取（推荐）**：见 [`tools/extract_sounds.md`](tools/extract_sounds.md) —— 用 vgmstream 直接解析你本机《星露谷物语》的 `Content/XACT/Wave Bank.xwb`，几秒钟抽出全部 437 条音效，无需联网下载。

## 结构

```
dsh-stardew/
├── cordis.patch.yml      # bundle 挂载补丁（插入 stardew-ui 行）
├── lib/
│   ├── index.js          # 宿主：/@stardew/sounds、token-stats、pending-sounds 路由 + 事件监听
│   └── client.js         # 客户端：设置页 UI、音效引擎、天气粒子、Token 月历
└── tools/
    └── extract_sounds.md # vgmstream 提取指南 + cue 索引表
```

- **宿主**注册三个 HTTP 端点：`/@stardew/sounds/*`（读本地音频文件）、`/@stardew/token-stats`（会话 tokenUsage 投影按 `createdAt` 分桶）、`/@stardew/pending-sounds`（提醒音效事件队列）。宿主在启动早期可能先于 `fs`/`webServer` 就绪，内置了 1s/次的轮询重试。
- **客户端**通过 `fetch` + blob URL 播放音频（三通道：音效 / 背景乐 / 天气环境音，带代际计数器防串扰），天气用 Canvas 2D 逐粒子渲染，尊重 `prefers-reduced-motion`。

## 许可

MIT —— 仅限本仓库代码。不隶属于 ConcernedApe，也未经其认可（fan-made）。字体、音频等第三方资产请自行准备。