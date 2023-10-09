const db = require("../db/connection");

function getAllArticles() {
    return db("articles").select("*");
}

function createArticle(newArticle) {
    return db("articles")
        .insert(newArticle)
        .returning("*")
        .then(rows => {
            console.log(rows);
            return rows[0]
        });
}

function readArticle(article_id) {
    return db("articles")
        .where({ article_id })
        .first(); // Ensures that we get a single article object, not an array.
}

function destroyArticle(articleId) {
    return db("articles")
        .where("article_id", articleId)
        .delete();
}

function updateArticle(article_id, updatedArticle) {
    return db("articles")
        .where({ article_id })
        .update(updatedArticle, "*")
        .then((updatedRecords) => updatedRecords[0]);
}

module.exports = {
    getAllArticles,
    createArticle,
    readArticle,
    destroyArticle,
    updateArticle
};


