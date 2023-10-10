const { 
  listAll, 
  listOutOfStockCountService, 
  listPriceSummaryService, 
  // readService
} = require("./products.service");

const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function list(req, res, _next) {
    const data = await listAll();
    res.json({ data });
}


// async function read(req, res, _next) {
//   const { productId } = req.params;
//   const data = await readService(productId); // test with await readService(productId) in res.json
//   res.json({data});
// }


async function listOutOfStockCount(req, res, _next) {
  const data = await listOutOfStockCountService();
  res.json({data});
}


async function listPriceSummary(req, res, _next) {
  const data = await listPriceSummaryService();
  res.json({data});
}

module.exports = {
    list: asyncErrorBoundary(list),
    listOutOfStockCount: asyncErrorBoundary(listOutOfStockCount),
    listPriceSummary: asyncErrorBoundary(listPriceSummary),
    //read: asyncErrorBoundary(read),
};
