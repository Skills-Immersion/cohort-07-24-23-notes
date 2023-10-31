function indexOf(array, cbIsMatch) {
    for (let i = 0; i < array.length; i++) {
        if ( cbIsMatch(array[i], i, array) ) return i;
    }
    return -1;
}

let x = [
    {name:"Clarisse", hobby:"Basket Ball"},
    {name:"Travis", hobby:"Chess"},
    {name:"Julian", hobby:"Thrifting"}
    ]

console.log(indexOf(x, (element, index, array) => element.name === "Julian"));

