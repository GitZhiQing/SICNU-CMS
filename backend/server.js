import express from "express";
import cors from "cors"; // 导入 cors 模块， 用于处理跨域请求
import fs from "fs"; // 导入 fs 模块，用于读写 json 数据文件

const app = express();
app.use(cors()); // 允许所有的跨域请求
app.use(express.json()); // 使用 express.json 中间件， 用于解析 JSON 格式的请求体

let data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
// 读取 "data.json" 文件的内容， 并将其解析为 JSON 对象， 并储存在 data 变量中
data.users = data.users || [];
data.notices = data.notices || [];
data.banners = data.banners || [];
data.articles = data.articles || [];

app.get('/api/users', (req, res) => {
    res.json(data.users);
});

app.get('/api/notices', (req, res) => {
    // 返回最新的1条公告
    res.json(data.notices.slice(-1));
});

app.post('/api/notices/new', (req, res) => {
    const {title, content} = req.body;
    const newNotice = {id: data.notices.length + 1, title, content, time: new Date().toLocaleString()};
    data.notices.push(newNotice);
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.json({msg: 'success'});
});

app.put('/api/notices/:id', (req, res) => {
    const {title, content} = req.body;
    const id = parseInt(req.params.id);
    const notice = data.notices.find(notice => notice.id === id);
    if (notice) {
        notice.title = title;
        notice.content = content;
        const newNotice = {id, title, content};
        data.notices = data.notices.map(notice => notice.id === id ? newNotice : notice);
        fs.writeFileSync('data.json', JSON.stringify(data));
        res.json({msg: 'success'});
    } else {
        res.json({msg: 'fail'});
    }
});

app.delete('/api/notices/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.notices.findIndex(notice => notice.id === id);
    if (index !== -1) {
        data.notices.splice(index, 1);
        fs.writeFileSync('data.json', JSON.stringify(data));
        res.json({msg: 'success'});
    } else {
        res.json({msg: 'fail'});
    }
});

app.get('/api/banners', (req, res) => {
    res.json(data.banners);
});

app.get('/api/article/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const article = data.articles.find(article => article.id === id);
    if (article) {
        res.json(article);
    } else {
        res.json({msg: 'fail'});
    }
});

app.get('/api/articles', (req, res) => {
    res.json(data.articles);
});

app.post('/api/articles/new', (req, res) => {
    const {title, content} = req.body;
    const newArticle = {
        id: data.articles.length + 1,
        title,
        content,
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString(),
        author: 'admin'
    };
    data.articles.push(newArticle);
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.json({msg: 'success'});
});

app.get('/api/articles/paginated', (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = data.articles.slice(startIndex, endIndex);

    res.json(result);
});

app.put('/api/articles/:id', (req, res) => {
    const {title, content} = req.body;
    const id = parseInt(req.params.id);
    const article = data.articles.find(article => article.id === id);
    if (article) {
        article.title = title;
        article.content = content;
        fs.writeFileSync('data.json', JSON.stringify(data));
        res.json({msg: 'success'});
    } else {
        res.json({msg: 'fail'});
    }
});

app.delete('/api/articles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.articles.findIndex(article => article.id === id);
    if (index !== -1) {
        data.articles.splice(index, 1);
        fs.writeFileSync('data.json', JSON.stringify(data));
        res.json({msg: 'success'});
    } else {
        res.json({msg: 'fail'});
    }
});

app.post('/api/login', (req, res) => {
    const {username, password} = req.body;
    const user = data.users.find(user => user.username === username && user.password === password);
    if (user) {
        res.json({msg: 'success', power: user.power});
    } else {
        res.json({msg: 'fail'});
    }
});

app.get('/api/logout', (req, res) => {
    res.json({msg: 'success'});
});

app.post('/api/register', (req, res) => {
    const {username, password} = req.body;
    const user = data.users.find(user => user.username === username);
    if (user) {
        res.status(400).json({msg: '用户名已经存在'});
    } else {
        const id = data.users.length ? Math.max(...data.users.map(user => user.id)) + 1 : 1;
        data.users.push({id, username, password, power: 1});
        fs.writeFileSync('data.json', JSON.stringify(data));
        res.json({msg: '注册成功'});
    }
});

app.listen(9999, () => {
    console.log('Server started on http://localhost:9999');
});