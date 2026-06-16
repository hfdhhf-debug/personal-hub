# Static Site Deployment

当前 V1 可以作为纯静态站部署。

## Files To Publish

发布时需要包含：

- `index.html`
- `src/styles/global.css`
- `public/favicon.svg`
- `public/site.webmanifest`
- `public/robots.txt`
- `public/sitemap.xml`

## Before Publishing

发布前替换以下示例内容：

- `example.com`
- `blog.example.com`
- `nav.example.com`
- `work.example.com`
- `tools.example.com`
- `snippets.example.com`
- `links.example.com`
- `hello@example.com`
- GitHub 链接

## Deployment Targets

可直接上传到：

- Cloudflare Pages
- Vercel 静态项目
- Netlify
- GitHub Pages
- 任何支持静态文件的网站空间

## Astro Path

等 npm registry 可访问后：

```powershell
npm install
npm run build
```

构建通过后可改用 Astro 输出的 `dist/` 目录发布。
