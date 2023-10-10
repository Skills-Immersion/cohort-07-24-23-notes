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

function formatPrice(price) {
    return Number(parseFloat(price).toFixed(2));
}

function transformPriceToNumber(item) {
    return {
        supplier_id: item.supplier_id,
        min_price: formatPrice(item.min_price),
        max_price: formatPrice(item.max_price),
        avg_price: formatPrice(item.avg_price)
    };
}

module.exports = {
    mapProperties,
    transformPriceToNumber
};