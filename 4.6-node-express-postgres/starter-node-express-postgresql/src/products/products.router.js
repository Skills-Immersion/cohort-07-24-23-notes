const router = require("express").Router();
const { list, listOutOfStockCount, listPriceSummary, read } = require("./products.controller");

const methodsAllowed = cors({
    methods: ['GET', 'PUT', 'POST']
})
 
router.route("/").get(methodsAllowed, list);
router.route("/out-of-stock-count").get(listOutOfStockCount);
router.route("/price-summary").get(listPriceSummary);
router.route("/:productId").get(read);


module.exports = router;