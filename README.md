# 小站总站

这是个人总站 V1：一个“个人品牌门面 + 导航门户”的主页。

当前有两套形态：

- `index.html`：无依赖静态预览版，可直接双击打开。
- `src/`：Astro 项目结构，等 npm registry 网络可用后可安装依赖并正式构建。

## 预览

直接打开：

```text
D:\xiaowork.dev\index.html
```

## 修改入口内容

Astro 版的数据在：

```text
src/data/sites.ts
```

静态预览版的数据暂时写在：

```text
index.html
```

后续 npm 依赖安装成功后，建议以 `src/data/sites.ts` 为唯一数据源，移除静态页里的重复内容。

静态页目前包含三层入口：

- 首屏轨道入口：博客、导航、作品、工具。
- 精选入口：最值得优先点击的站点。
- 全部入口：按分类列出所有站点和状态。

## 设计方向

选中的视觉方向是“极简轨道”：

- 左侧建立个人身份和说明。
- 右侧用轨道式布局展示博客、导航、作品、工具四个入口。
- 下方用精选入口承接继续浏览。

参考图：

```text
docs/design-references/personal-hub-v1-selected-style.png
```

## 后续待办

- 替换真实姓名、邮箱、GitHub 和站点链接。
- npm registry 网络恢复后运行 `npm install`。
- 运行 `npm run build` 检查 Astro 构建。
- 用浏览器做桌面和移动端视觉 QA。

静态部署说明见：

```text
docs/deploy/static-site.md
```
