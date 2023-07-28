function addProductToCart(product, cart={}) {
	const {name, priceInCents} = product;
	if(cart[name]){
		cart[name] = {
			priceInCents,
			quantity: cart[name].quantity+1
		}
	}else{
		cart[name] = {
			priceInCents,
			quantity: 1
		}
	}
	return cart;
}



const product = {
    name: "iphone",
    priceInCents: 8800,
    availableSizes: [ 6, 8, 10, 11, 12 ]
}

const cart = {
    "Court Sneaker": {
      priceInCents: 8800,
      quantity: 1
    },
    "iphone": {
        priceInCents: 100,
        quantity: 2
    }
}

console.log(addProductToCart(product, cart))




'1xSquare-Neck Jumpsuit - $88.00\n2xRelaxed Silk Shirt - $196.00\n$284.00'
'1xSquare-Neck Jumpsuit - $88.00\n2xRelaxed Silk Shirt - $196.00\nTotal: $284.00'