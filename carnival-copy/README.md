# 新手村奇遇嘉年华 · 文案抽取网页
访问路径：/xinshoucun-skill-library/carnival-copy/
- index.html：手机网页，参考像素游戏主题，选平台→抽取→重抽→复制
- texts.json：小红书/朋友圈各1000条预设宣传文案（合计2000）
- assets/pixel-scene.svg：原创像素风矢量背景
- worker.js 与 schema.sql：可选的Cloudflare Worker + D1 全局不重复编号系统，需要单独部署和配置
## 关于不重复
默认免费静态版只保证同设备同浏览器、同平台抽过的编号不重复。跨设备/跨用户全局不重复必须配置 worker.js 和 D1 数据库，并把 index.html 的 API_BASE 改成 Worker HTTPS URL。该云端模式保证不同**成功分配请求**的编号唯一（同一人仍可能多次领、断线可能损耗号码）。
## 发布
仓库如果已经将 main 根目录用于 GitHub Pages，会自动通过相对路径发布此子目录；如果 Pages 尚未开启，在仓库 Settings→Pages 设置 Deploy from a branch / main / root。
**请使用两部不同手机测试正式网址及校园网络连通性。** GitHub Pages/Cloudflare Worker 可能在大陆网络不可达。
## 时间地点
10月28日 16:00—22:00；互动集章16:00—19:00；19:00起舞台展演及抽奖；东莞职业技术学院田径场。
## 文案说明
预设文案根据用户提供的信息制作，去重只保证每个平台1000条字符串不相同，表达和事实点仍可能相近；不应包装成真实用户的亲历评价或诱导批量刷屏。奖项、学分及规则以主办方实际通知为准。