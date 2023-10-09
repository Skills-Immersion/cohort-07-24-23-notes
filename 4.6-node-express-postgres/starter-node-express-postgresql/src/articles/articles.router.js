const articlesRouter = require("express").Router();
const { list, create, read, update, destroy } = require("./articles.controller");

articlesRouter.route(___).___(list);
articlesRouter.route(___).___(create);
articlesRouter.route(____).___(read);
articlesRouter.route(____).___(update);
articlesRouter.route(____).___(destroy);

module.exports = articlesRouter;