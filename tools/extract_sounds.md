# 从本地《星露谷物语》提取音效

仓库不打包任何游戏音频（版权归 ConcernedApe）。如果你拥有游戏，可以用 vgmstream 从本地安装目录直接提取全部音效，几秒钟搞定。

## 1. 获取 vgmstream

vgmstream 是开源音频解码器（MIT），自带 XACT（XWB/XSB）支持：

- 下载 Windows 版：`https://github.com/vgmstream/vgmstream/releases/download/r2117/vgmstream-win64.zip`
- 解压后得到 `vgmstream-cli.exe`（放在任意目录，下面用 `$VGM` 指代）。

## 2. 找到游戏的音频银行

《星露谷物语》的音效在：

```
<游戏安装目录>/Content/XACT/Wave Bank.xwb
```

Steam 常见位置：`E:\SteamLibrary\steamapps\common\Stardew Valley\Content\XACT\`
（可用 Steam 库文件夹定位：Steam → 设置 → 下载 → Steam 库文件夹）

## 3. 列出音效名（437 条）

```bash
for i in $(seq 1 437); do
  vgmstream-cli -m -s $i "Wave Bank.xwb" | grep "stream name"
done
```

PowerShell：

```powershell
for ($i = 1; $i -le 437; $i++) {
  & $VGM\vgmstream-cli.exe -m -s $i "Wave Bank.xwb" | Select-String 'stream name'
}
```

## 4. 提取想要的音效

```powershell
$VGM\vgmstream-cli.exe -o "$env:USERPROFILE\.dsh\sdnot-sounds\perm--openBox.wav" -i -s 15 "Wave Bank.xwb"
```

- `-s N`：流索引；`-i`：忽略循环（音效一次播完）；`-o`：输出路径。
- 输出文件放进 `~/.dsh/sdnot-sounds/`（= `$DSH_HOME/.dsh/sdnot-sounds`），设置页即可选择。

### 常用音效索引（Wave Bank.xwb v46）

| 索引 | 名字 | 用途建议 |
|---:|---|---|
| 15 | openBox | 把东西放进木箱（本项目「新会话」默认音） |
| 162 | openChest | 打开木箱 |
| 97 | Ship | 出货箱投放 |
| 16 | pickUpItem | 拾取物品 |
| 6 | coin | 金币 |

### 音乐（OST）

OST 的 mp3 不在 WaveBank 里（Steam 版以独立音频文件存放，或自行采购原声专辑）。按 `bgm--名字.mp3` 命名放入同一目录即可。

## 5. 完成后

完全重启 DSH，设置 → 星露谷 → 提醒音效 / 背景 OST / 天气 即可选择这些音频。