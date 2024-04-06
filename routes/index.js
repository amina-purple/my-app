const express = require('express')
const router = express.Router()
const Article = require("../model/article");

router.get('/articles', async (req, res) => {
    try {
        const articles = await Article.find()
        console.log(articles)
        res.status(200).json(articles);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error" })
    }
})

router.get('/article/:id', async (req, res) => {
    const articleId = req.params.id
    try {
        const articles = await Article.find(articleId, {
            title: 1,
            text: 1,
        })
        res.status(200).json(articles);
    } catch (err) {
        res.status(500).json({ message: "Internal server error" })
    }
})

router.post('/article/create', async (req, res) => {
    const {title, text} = req.body;
    
    const newArticle = new Article({
        title, 
        text,
    })

    try {
        await newArticle.save()
        res.status(200).json({message: "Created Successfully!"})
    } catch (err) {
        res.status(500).json({message: "Internal server error"})
    }
})

router.post('/article/delete/:id', async (req, res) => {
    const articleId = req.params.id;
    try {
        const article = await Article.findOneAndDelete(articleId);
        res.redirect('/')
    } catch (err) {
        res.status(500).json({message: "Internal server error"})
    }
})

module.exports = router