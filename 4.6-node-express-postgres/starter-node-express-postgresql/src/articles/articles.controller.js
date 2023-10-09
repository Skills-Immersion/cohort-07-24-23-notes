const {
    getAllArticles,
    createArticle,
    readArticle,
    updateArticle,
    destroyArticle
} = ___("./articles.service");

async function list(___ , ___ , ___) {
    let data = await ___();
    ___.json({data});
}

async function create(___ , ___ , ___) {
    let data = await ___(___.___);
    ___.json({data});
}

async function destroy(___ , ___ , ___) {
    let data = await ___(___.___._______);
    ___.json({data});
}

async function update(___ , ___ , ___) {
    let data = await ___(___.___._______, ___.___);
    ___.json({data});
}

async function read(___ , ___ , ___) {
    let data = await ___(___.___._______);
    ___.json({data});
}

module.exports = {
    list,
    create,
    read,
    update,
    destroy
}