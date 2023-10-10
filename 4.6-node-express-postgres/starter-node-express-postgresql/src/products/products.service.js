const knex = require("../db/connection");
const { transformPriceToNumber } = require("../utils/mapProperties")

function listAll() {
    // SELECT * FROM products
    return knex("products").select("*");
}

function listOutOfStockCountService() {
    // SELECT COUNT(*) FROM products WHERE product_quantity_in_stock = 0 GROUP BY product_quantity_in_stock
    return knex("products")
        .count("product_quantity_in_stock")
        .where({ product_quantity_in_stock: 0 })
        .first();
}

function listPriceSummaryService() {
    // SELECT min(product_price), max(product_price), avg(product_price) FROM products GROUP_BY supplier_id
    return knex("products")
        .select("supplier_id")
        .min("product_price as minimum_product_price")
        .max("product_price as maximum_product_price")
        .avg("product_price as average_product_price")
        .groupBy("supplier_id")
        .then( resultArray => resultArray.map(transformPriceToNumber))
}

module.exports = {
    listAll,
    listOutOfStockCountService,
    listPriceSummaryService
}