const {
    getAllArticles,
    createArticle,
    readArticle,
    updateArticle,
    destroyArticle
} = require("./articles.service");

// try {
//     async function list(req , res , _next) {
//         let data = await getAllArticles();
//         res.json({data});
//     }
//     async function read(req , res , _next) {
//         let data = await getAllArticles();
//         res.json({data});
//     }
//     async function update(req , res , _next) {
//         let data = await getAllArticles();
//         res.json({data});
//     }
//     async function destroy(req , res , _next) {
//         let data = await getAllArticles();
//         res.json({data});
//     }
// } catch (error) {
//     console.log(error);
// }

async function list(req , res , _next) {
    let data = await getAllArticles();
    res.json({data});
}

async function create(req , res , _next) {
    let data = await createArticle(req.body);
    res.json({data});
}

async function destroy(req , res , _next) {
    let data = await destroyArticle(req.params.article_id);
    res.json({data});
}

async function update(req , res , _next) {
    let data = await updateArticle(req.params.article_id, req.body);
    res.json({data});
}

async function read(req , res , _next) {
    let data = await readArticle(req.params.article_id);
    res.json({data});
}

module.exports = {
    list,
    create,
    read,
    update,
    destroy
}