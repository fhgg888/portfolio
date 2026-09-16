# 吴杰 · 研究与工程作品集

基于个人简历、作品集和提供的研究资料整理的静态个人网站，包含项目详情、真机视频、教育经历和邮箱联系入口。使用原生 HTML、CSS、JavaScript，无需 npm、依赖安装或构建步骤。

## 本地预览

直接双击 `index.html` 即可查看。也可以在本目录打开终端，运行：

```powershell
python -m http.server 8000
```

然后访问 <http://localhost:8000>；按 `Ctrl+C` 停止服务。

## 发布到 GitHub Pages

项目仓库：<https://github.com/fhgg888/portfolio>。启用 GitHub Pages 后，网站地址为 <https://fhgg888.github.io/portfolio/>。

1. 登录自己的 GitHub，创建公开仓库。若希望地址为 `https://你的用户名.github.io/`，仓库名应为 `你的用户名.github.io`；也可使用 `portfolio` 等普通仓库名，对应地址为 `https://你的用户名.github.io/仓库名/`。
2. 上传**本目录内的文件与文件夹**，让 `index.html`、`styles.css`、`app.js`、`.nojekyll` 和 `assets` 直接位于仓库根目录。不要把外层“求职github网页”目录整体套进去，也无需上传工作区里的原始 PPTX、ZIP、论文草稿或审阅文件。
3. 打开仓库 **Settings → Pages**，在 **Build and deployment** 中选择 **Deploy from a branch**。
4. Branch 选择 **main**，文件夹选择 **/ (root)**，点击 **Save**。
5. 等待部署完成后，使用 Pages 页面给出的地址访问。普通仓库路径同样适用，网站资源使用相对路径。

网页中的 GitHub 链接为 `https://github.com/fhgg888`，与本项目仓库账号一致。

也可使用 Git 上传。以下命令应在**网站目录**执行，并先把 `YOUR_GITHUB_USERNAME`、`YOUR_REPOSITORY` 两个占位符替换成实际值；先在 GitHub 创建空仓库：

```powershell
git init
git add .
git commit -m "Create personal portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## 修改内容

| 文件 | 用途 |
| --- | --- |
| `index.html` | 首页、项目卡片、教育与实习经历、邮箱及 GitHub 链接 |
| `styles.css` | 配色、字体、布局与移动端样式 |
| `app.js` | 项目详情与演示数据、筛选、视频弹窗等交互 |
| `assets/images/` | 作品图片、头像和视频封面 |
| `assets/videos/` | 本地 MP4 演示视频 |
| `assets/docs/resume.pdf` | 用户提供的原始简历 PDF |
| `assets/docs/portfolio.pdf` | 用户提供的原始作品集 PDF |
| `.nojekyll` | 让 GitHub Pages 直接提供静态文件 |

论文按提供材料标注为“在投”，不代表已经录用或发表；状态基准为 2026 年 9 月。GRASP 文稿中存在共同贡献标记，页面使用“第一作者（共同贡献）”；味觉项目采用简历中的“共同作者”。GRASP 仅展示各材料一致的指标，例如 2,000 Hz 采样率；识别率、响应时间等存在版本差异的数值暂不展示。更新论文进展时，请同步修改首页和项目详情。

页面正文仅展示邮箱联系。下载区按提供原样包含简历和作品集 PDF，其中仍有电话、出生日期等联系及个人信息；这些附件会随网站一同公开。需要替换公开版本时，保留上述两个 PDF 文件名即可。
