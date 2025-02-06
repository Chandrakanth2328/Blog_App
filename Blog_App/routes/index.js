import express from 'express';
const router = express.Router();

let posts = [];

router.get('/', (req, res) => {
    res.render('index', { posts });
});

router.get('/new-post', (req, res) => {
    res.render('new-post');
});

router.post('/new-post', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content });
    res.redirect('/');
});

router.get('/edit-post/:index', (req, res) => {
    const post = posts[req.params.index];
    res.render('edit-post', { post, index: req.params.index });
});

router.post('/edit-post/:index', (req, res) => {
    const { title, content } = req.body;
    posts[req.params.index] = { title, content };
    res.redirect('/');
});

router.post('/delete-post/:index', (req, res) => {
    posts.splice(req.params.index, 1);
    res.redirect('/');
});

export { router };
