const knex = require("../db/connection");
const { transformPriceToNumber, mapProperties } = require("../utils/mapProperties")

const addSupplier = mapProperties({
    supplier_id: "supplier.supplier_id",
    supplier_name: "supplier.supplier_name",
    supplier_city:  "supplier.supplier_city"
});

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


function readService(product_id) {
    // SELECT * FROM products JOIN suppliers ON products.supplier_id = suppliers.supplier_id WHERE products.product_id = products.product_id
    return knex("products")
        .select("*")
        .join("suppliers", "products.supplier_id", "suppliers.supplier_id" )
        .where({product_id})
        .first()
        .then(addSupplier)
}

module.exports = {
    listAll,
    listOutOfStockCountService,
    listPriceSummaryService,
    readService
}