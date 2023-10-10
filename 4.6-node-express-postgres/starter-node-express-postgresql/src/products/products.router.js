const router = require("express").Router();
const { list, listOutOfStockCount, listPriceSummary, read } = require("./products.controller");

router.route("/").get(list);
router.route("/out-of-stock-count").get(listOutOfStockCount);
router.route("/price-summary").get(listPriceSummary);
router.route("/:productId").get(read);


module.exports = router;