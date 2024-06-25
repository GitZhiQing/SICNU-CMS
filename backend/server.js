import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

// 读取数据
let data = JSON.parse(fs.readFileSync('backend/data.json', 'utf8'));
data.users = data.users || [];
data.notices = data.notices || [];
data.banners = data.banners || [];
data.articles = data.articles || [];

// 获取用户列表
// 返回所有用户的列表
app.get('/api/users', (req, res) => {
    res.json(data.users);
});

// 获取公告列表
// 返回所有公告的列表
app.get('/api/notices', (req, res) => {
    res.json(data.notices);
});

// 获取轮播图列表
// 返回所有轮播图的列表
app.get('/api/banners', (req, res) => {
    res.json(data.banners);
});

// 根据 id 获取文章
// 如果找到了对应的文章，返回文章的内容
// 如果没有找到对应的文章，返回一个包含错误信息的对象
app.get('/api/article/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const article = data.articles.find(article => article.id === id);
    if (article) {
        res.json(article);
    } else {
        res.json({msg: 'fail'});
    }
});

// 新增公告
// 从请求体中获取公告的内容，然后创建一个新的公告对象并添加到公告列表中
// 最后，将新的公告列表写入到数据文件中，并返回一个包含成功信息的对象
app.post('/api/notices/new', (req, res) => {
    const {content} = req.body;
    const newNotice = {id: data.notices.length + 1, content};
    data.notices.push(newNotice);
    fs.writeFileSync('backend/data.json', JSON.stringify(data));
    res.json({msg: 'success'});
});

// 新增文章
// 从请求体中获取文章的标题和内容，然后创建一个新的文章对象并添加到文章列表中
// 最后，将新的文章列表写入到数据文件中，并返回一个包含成功信息的对象
app.post('/api/articles/new', (req, res) => {
    const {title, content} = req.body;
    const newArticle = {id: data.articles.length + 1, title, content};
    data.articles.push(newArticle);
    fs.writeFileSync('backend/data.json', JSON.stringify(data));
    res.json({msg: 'success'});
});

// 更新公告
// 从请求体中获取新的公告内容，然后找到对应的公告并更新其内容
// 最后，将新的公告列表写入到数据文件中，并返回一个包含成功信息的对象
// 如果没有找到对应的公告，返回一个包含错误信息的对象
app.put('/api/notices/:id', (req, res) => {
    const {content} = req.body;
    const id = parseInt(req.params.id);
    const notice = data.notices.find(notice => notice.id === id);
    if (notice) {
        notice.content = content;
        fs.writeFileSync('backend/data.json', JSON.stringify(data));
        res.json({msg: 'success'});
    } else {
        res.json({msg: 'fail'});
    }
});

// 获取所有文章
// 返回所有文章的列表
app.get('/api/articles', (req, res) => {
    res.json(data.articles);
});

// 分页获取文章
// 根据请求的页码和每页的数量，返回对应的文章列表
app.get('/api/articles/paginated', (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = data.articles.slice(startIndex, endIndex);

    res.json(result);
});

// 用户登录
// 从请求体中获取用户名和密码，然后查找对应的用户
// 如果找到了对应的用户并且密码正确，返回一个包含成功信息和用户权限的对象
// 如果没有找到对应的用户或者密码不正确，返回一个包含错误信息的对象
app.post('/api/login', (req, res) => {
    const {username, password} = req.body;
    const user = data.users.find(user => user.username === username && user.password === password);
    if (user) {
        res.json({msg: 'success', power: user.power});
    } else {
        res.json({msg: 'fail'});
    }
});

// 用户注销
// 返回一个包含成功信息的对象
app.get('/api/logout', (req, res) => {
    res.json({msg: 'success'});
});

// 用户注册
// 从请求体中获取用户名和密码，然后查找是否已经存在对应的用户
// 如果已经存在对应的用户，返回一个包含错误信息的对象
// 如果没有存在对应的用户，创建一个新的用户对象并添加到用户列表中
// 最后，将新的用户列表写入到数据文件中，并返回一个包含成功信息的对象
app.post('/api/register', (req, res) => {
    const {username, password} = req.body;
    const user = data.users.find(user => user.username === username);
    if (user) {
        res.status(400).json({msg: '用户名已经存在'});
    } else {
        const id = data.users.length ? Math.max(...data.users.map(user => user.id)) + 1 : 1;
        data.users.push({id, username, password, power: 1});
        fs.writeFileSync('backend/data.json', JSON.stringify(data));
        res.json({msg: '注册成功'});
    }
});

// 更新文章
// 从请求体中获取新的文章标题和内容，然后找到对应的文章并更新其标题和内容
// 最后，将新的文章列表写入到数据文件中，并返回一个包含成功信息的对象
// 如果没有找到对应的文章，返回一个包含错误信息的对象
app.put('/api/articles/:id', (req, res) => {
    const {title, content} = req.body;
    const id = parseInt(req.params.id);
    const article = data.articles.find(article => article.id === id);
    if (article) {
        article.title = title;
        article.content = content;
        fs.writeFileSync('backend/data.json', JSON.stringify(data));
        res.json({msg: 'success'});
    } else {
        res.json({msg: 'fail'});
    }
});

// 删除文章
// 根据 id 找到对应的文章并从文章列表中删除
// 最后，将新的文章列表写入到数据文件中，并返回一个包含成功信息的对象
// 如果没有找到对应的文章，返回一个包含错误信息的对象
app.delete('/api/articles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.articles.findIndex(article => article.id === id);
    if (index !== -1) {
        data.articles.splice(index, 1);
        fs.writeFileSync('backend/data.json', JSON.stringify(data));
        res.json({msg: 'success'});
    } else {
        res.json({msg: 'fail'});
    }
});

app.listen(9999, () => {
    console.log('Server is running on http://localhost:9999');
});