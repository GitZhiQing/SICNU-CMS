# Web 开发期末作业 - SICNU CMS - 答辩稿

主要技术栈：

- Vue
- Node.js（临时后端）
- Bootstrap5（用于轮播图实现）

SICNU CMS 是一个 内容管理系统（英语：content management system，缩写为 CMS）的简单实现，主要功能有：

- 用户登录
- 发布文章、公告、展板
- 后台管理

---

## 后端

技术栈：Node.js

尽管本课程以前端为主，但是为了保证一些功能的实现，我们使用了 Node.js 作为一个临时后端提供一些简单的 API。考虑到工作量和工作重心，我们没有使用数据库，仅使用了一个 JSON 文件来存储数据，然后通过 Node.js 的 fs 模块来读写数据。

以下是后端关键代码：

```javascript
import express from "express";
import cors from "cors"; // 导入 cors 模块，用于处理跨域请求
import fs from "fs"; // 导入 fs 模块，用于读取 json 数据文件

const app = express();
app.use(cors()); // 允许所有的跨域请求
app.use(express.json()); // 使用 express.json 中间件，用于解析 JSON 格式的请求体

// 读取 "backend/data.json" 文件的内容，将其解析为 JSON 对象，并存储在 data 变量中
let data = JSON.parse(fs.readFileSync("backend/data.json", "utf8"));

app.get("/api/users", (req, res) => {
  res.json(data.users);
});
```

## 前端
