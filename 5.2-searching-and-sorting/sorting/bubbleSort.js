function compare(a, b) {
    return a - b;
}
//           
//       i   j
let x = [29,10,14,37,14]

function bubbleSort(arr, compare) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (compare(arr[i],arr[j]) > 0) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort(x, compare))
