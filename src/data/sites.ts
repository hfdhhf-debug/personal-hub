export type SiteCategory = "blog" | "nav" | "works" | "tools";

export type SiteStatus = "online" | "building" | "planned";

export interface SiteCategoryMeta {
  id: SiteCategory;
  label: string;
  title: string;
  description: string;
  href: string;
  accent: "blue" | "green" | "orange" | "ink";
}

export interface SiteEntry {
  title: string;
  category: SiteCategory;
  description: string;
  href: string;
  displayUrl: string;
  tags: string[];
  status: SiteStatus;
  featured: boolean;
}

export const categories: SiteCategoryMeta[] = [
  {
    id: "blog",
    label: "博客",
    title: "博客",
    description: "技术文章与思考记录",
    href: "#blog",
    accent: "blue"
  },
  {
    id: "nav",
    label: "导航",
    title: "导航",
    description: "精选资源与网站导航",
    href: "#nav",
    accent: "green"
  },
  {
    id: "works",
    label: "作品",
    title: "作品",
    description: "个人项目与开源实践",
    href: "#works",
    accent: "orange"
  },
  {
    id: "tools",
    label: "工具",
    title: "工具",
    description: "效率工具与在线服务",
    href: "#tools",
    accent: "ink"
  }
];

export const sites: SiteEntry[] = [
  {
    title: "技术博客",
    category: "blog",
    description: "记录 Web 技术、工程实践与长期思考。",
    href: "https://blog.example.com",
    displayUrl: "blog.example.com",
    tags: ["博客", "技术"],
    status: "online",
    featured: true
  },
  {
    title: "开发者导航",
    category: "nav",
    description: "整理常用开发资源、文档与实用网站。",
    href: "https://nav.example.com",
    displayUrl: "nav.example.com",
    tags: ["导航", "资源"],
    status: "online",
    featured: true
  },
  {
    title: "作品集",
    category: "works",
    description: "收纳个人项目、实验作品与开源实践。",
    href: "https://work.example.com",
    displayUrl: "work.example.com",
    tags: ["作品", "项目"],
    status: "online",
    featured: true
  },
  {
    title: "工具箱",
    category: "tools",
    description: "一些可直接使用的小工具与效率服务。",
    href: "https://tools.example.com",
    displayUrl: "tools.example.com",
    tags: ["工具", "效率"],
    status: "building",
    featured: true
  },
  {
    title: "代码片段库",
    category: "tools",
    description: "常用代码片段、命令与配置模板。",
    href: "https://snippets.example.com",
    displayUrl: "snippets.example.com",
    tags: ["工具", "代码"],
    status: "planned",
    featured: false
  },
  {
    title: "资源收藏夹",
    category: "nav",
    description: "长期收藏的设计、开发、效率资源。",
    href: "https://links.example.com",
    displayUrl: "links.example.com",
    tags: ["导航", "收藏"],
    status: "building",
    featured: false
  }
];

export const featuredSites = sites.filter((site) => site.featured);

export const statusLabels: Record<SiteStatus, string> = {
  online: "在线",
  building: "建设中",
  planned: "计划中"
};
