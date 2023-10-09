const articlesRouter = require("express").Router();
const { list, create, read, update, destroy } = require("./articles.controller");

articlesRouter.route("/").get(list);
articlesRouter.route("/").post(create);
articlesRouter.route("/:article_id").get(read);
articlesRouter.route("/:article_id").put(update);
articlesRouter.route("/:article_id").delete(destroy);

module.exports = articlesRouter;