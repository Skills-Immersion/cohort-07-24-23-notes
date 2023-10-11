const lodash = require("lodash");

function mapProperties(configuration) {
  return (data) => {
    if (data) {
      return Object.entries(data).reduce((accumulator, [key, value]) => {
        return lodash.set(accumulator, configuration[key] || key, value);
      }, {});
    }
    return data;
  };
}

function formatPrice(priceString) {
    return Number(parseFloat(priceString).toFixed(2));
}

function transformPriceToNumber(priceObj) {
    return {
        supplier_id: priceObj.supplier_id,
        minimum_product_price: formatPrice(priceObj.minimum_product_price),
        maximum_product_price: formatPrice(priceObj.maximum_product_price),
        average_product_price: formatPrice(priceObj.average_product_price)
    }
}


module.exports = {
    mapProperties,
    transformPriceToNumber
};