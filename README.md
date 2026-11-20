# ONE BRAIN. MANY SCALES. — GitHub 网页上传版

这是从科研展示网页改造的静态网站，可使用 **GitHub Pages** 免费托管。

## 第一次上传（不需要终端、不需要隐藏文件）

1. 在 Mac 上双击解压下载的 ZIP。
2. **进入解压得到的文件夹里面**；按 `Command + A` 全选 `docs`、`README.md`、`LICENSE` 和 `ASSET_RIGHTS.md`。**拖动这些项目，而不是拖动它们的外层文件夹。**
3. 在 GitHub 仓库 `Code` 页面中点击 `uploading an existing file`（空仓库）或 `Add file → Upload files`；把这些项目拖进去。
4. 上传预览列表里应当看到 **`/docs/index.html`**、`/docs/assets/...`、`/README.md`。**不能出现 `/one-brain-many-scales-web-upload/docs/index.html`**，否则说明多拖进了一层外层文件夹。错误时先取消本次上传再重试。
5. 点击底部 `Commit changes`，提交到 `main`。
6. 进入 `Settings → Pages → Build and deployment`，设置 **Source = Deploy from a branch**，**Branch = main**，**Folder = /docs**，点击 **Save**。
7. 等 Pages 发布成功后，固定网址是 `https://你的用户名.github.io/one-brain-many-scales/`（用户名和仓库名称要与实际一致）。

将来只需在 GitHub 编辑并提交 `main` 分支里的文件，Pages 就会用**相同的网址**发布更新版。无需单独创建 GitHub Actions 工作流。

## 重要说明

* 本版本故意没有 `.github`、`.gitignore`、`.nojekyll` 等隐藏文件，适合从 GitHub 网页上传。
* 这是 **`main /docs`** 发布方案，不要选 `GitHub Actions`；如果之前选了 GitHub Actions，请改成 **Deploy from a branch**。
* `docs/index.html` 是网页入口。文本内容在 `docs/data/site-data.js`，外观在 `docs/assets/css/`，交互在 `docs/assets/js/`，29 个图像资源在 `docs/assets/images/`。
* `.nojekyll` 没有必要：本项目不依赖 Jekyll，没有需要保留的特殊下划线目录名。
* 页面里的研究计划编辑器使用浏览器的本地存储，**修改网页输入框不等于提交网站源码**；要公开更新，需要编辑项目文件并提交到 GitHub。
* 项目代码许可证见 `LICENSE`。第三方论文图像的权利不随源代码许可一起授予，请阅读 `ASSET_RIGHTS.md` 并核对公开再分发权限。

## 本地预览

在仓库根目录运行 `python3 -m http.server 8000 --directory docs`，访问 `http://localhost:8000/`。
