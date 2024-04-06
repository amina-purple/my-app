const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    file: {
        type: String
    },
}, { collection: 'articles' });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
