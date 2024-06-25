import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

// 读取数据
let data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

app.get('/api/users', (req, res) => {
    res.json(data.users);
});

app.get('/api/notices', (req, res) => {
    res.json(data.notices);
});

app.get('/api/banners', (req, res) => {
    res.json(data.banners);
});

app.get('/api/articles', (req, res) => {
    res.json(data.articles);
});

// 分页请求文章
// /api/articles/paginated?page={page}&limit={limit}
app.get('/api/articles/paginated', (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = data.articles.slice(startIndex, endIndex);

    res.json(result);
});

// articles 数据更新
app.post('/api/articles', (req, res) => {
    data.articles = req.body;
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.json({status: 'success'});
});

app.post('/api/login', (req, res) => {
    const {username, password} = req.body;
    const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    const user = data.users.find(user => user.username === username && user.password === password);
    if (user) {
        res.json({msg: 'success', power: user.power});
    } else {
        res.json({msg: 'fail'});
    }
});

// 用户注销
app.get('/api/logout', (req, res) => {
    res.json({msg: 'success'});
});

// 用户注册
app.post('/api/register', (req, res) => {
    const {username, password} = req.body;
    // 输入验证
    if (!username || !password) {
        res.status(400).json({msg: '请输入用户名和密码'});
        return;
    }
    const user = data.users.find(user => user.username === username);
    // 检查用户名是否已经存在
    if (user) {
        res.status(400).json({msg: '用户名已经存在'});
    } else {
        // 自增 id，power 默认为 1
        const id = data.users.length ? Math.max(...data.users.map(user => user.id)) + 1 : 1;
        data.users.push({id, username, password, power: 1});
        fs.writeFileSync('data.json', JSON.stringify(data));
        res.json({msg: '注册成功'});
    }
});

// 创建文章
app.post('/api/articles/new', (req, res) => {
    const {title, content} = req.body;
    const newArticle = {id: data.articles.length + 1, title, content};
    data.articles.push(newArticle);
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.json({msg: 'success'});
});

// 更新文章
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

// 删除文章
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

app.listen(9999, () => {
    console.log('Server is running at http://localhost:9999');
});