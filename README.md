# ONE BRAIN · MANY SCALES — R9 模块化开源项目

此项目从用户确认的 **R9 双图预览版** 还原，保留原页面主题、14 个章节、行为学和 SERS 各一页双图，以及所有演示交互。**网页代码和科研图片分别存放，便于长期修改。**

## GitHub Pages 部署

仓库：`luyueyang90-maker/one-brain-many-scales`

- 分支：`main`
- Pages 发布目录：`/docs`
- 网站地址：<https://luyueyang90-maker.github.io/one-brain-many-scales/>

**你已经配置过 Pages，无需更改设置。** 本更新包是整个仓库的文件树，不是上传一个 ZIP。

### 通过 GitHub 网页更新

1. 打开仓库根目录 `https://github.com/luyueyang90-maker/one-brain-many-scales`，确保在 `main` 分支。
2. 点击 `Add file` → `Upload files`。
3. 解压 ZIP，然后**进入解压得到的文件夹内部**。上传其中的 `docs`、`README.md`、`LICENSE` 和 `ASSET_RIGHTS.md` 等项目，不要上传最外层文件夹，也不要仅上传 `index.html`。
4. 上传列表里应出现 `/docs/index.html`、`/docs/data/research-content.js`、`/docs/assets/js/research-pages.js`、`/docs/assets/css/research.css`、`/docs/assets/images/behavior_cell20.jpg` 等文件。
5. 提交到 `main`，建议提交说明：`Publish R9 modular research website`。
6. 等 `Actions → pages build and deployment` 变为绿色成功，然后访问原网址。

### 本地预览

若双击 `docs/index.html` 后浏览器对本地脚本或资源有所限制，可在仓库根目录运行：

```bash
python3 -m http.server 8000 --directory docs
```

然后在浏览器打开 `http://localhost:8000/`。

## 项目文件结构

```text
README.md
LICENSE
ASSET_RIGHTS.md
docs/
  index.html                     网站页面结构；只引用外部资源
  data/
    site-data.js                 14 个章节、文字、图片标题与顺序
    research-content.js          行为学与 SERS 双图页的科学内容、指标、图选择
  assets/
    css/
      main.css                    基础布局与演示模式
      refinements.css             文字与展示细节
      research.css                行为学 / SERS 的双图版式
    js/
      research-pages.js           科研结果页呈现组件
      app.js                      全站导航、画廊、演示模式
      bridge-v7-runtime.js        研究提案的交互部分
    images/                       30 个独立科研图、动画或示意图
```

## 以后怎么修改

- **修改行为学与 SERS 描述/数据/配图**：编辑 `docs/data/research-content.js`。
- **修改页面标题、导航、其余章节文字与图片顺序**：编辑 `docs/data/site-data.js`。
- **更换图片**：替换 `docs/assets/images/` 中的同名文件，并在需要时修改 `site-data.js` 的 `src`。
- **修改样式/交互**：编辑 `docs/assets/css/` 或 `docs/assets/js/`。
- **发布**：把修改提交到 `main`，仍由 Pages 从 `/docs` 自动发布。

页面引用 CSS 和 JS 时使用了 `?v=r9-modular-20261120` 避免旧缓存。以后大幅修改时可以更新 `docs/index.html` 中这些版本参数。

## 数据与版权边界

此版本的行为学与 SERS 图片、指标和说明来自用户提供的 R9 预览。行为学是**选定神经元**的响应示例，不是独立测试集的分类性能；SERS 指标来自公开的**腺嘌呤**光谱分析，不是未来 CD45+ EV 实验的已验证结果。完整出处与限定说明可在网站 **Sources & scope** 中查看。

`LICENSE` 的 MIT 许可**只适用于网站代码和文档**，不覆盖第三方科研论文图像或用户提供的科研图片。请在公开发布前检查相关图像的再发布权利，参见 `ASSET_RIGHTS.md`。
