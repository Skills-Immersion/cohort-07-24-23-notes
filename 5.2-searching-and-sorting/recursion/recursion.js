// function countDown(n) {
//     // for (let i = n; n < 0; i--) {
//     //     console.log(i);
//     // }
    // base case 
    // if ( n < 1 ) return;
    // // recursive case
    // console.log(n);
    // countDown(n - 1);
// }

// console.log(countDown(5));

// function fibonacciIterative(n) {
//     if (n <= 1) return n;

//     let prev = 0, current = 1;
//     for (let i = 2; i <= n; i++) {
//         let next = prev + current;
//         prev = current;
//         current = next;
//     }
//     return current;
// }


// // Fn = F(n-1) + F(n-2)
// function fibRecursive(n) {
//     if ( n <= 1) return n;
//     return fibRecursive(n-1) + fibRecursive(n-2);
// }
// //time O(2^n) space O(n)
// fibRecursive(50)

// arrayDoubler([1, 2, 3])  -> [2, 4, 6]

function arrayDoubler(arr, result = []) {
    // base case
    if (arr.length === 0) return result;
    // look at an el and * 2
    result.push(arr[0] * 2)
    return arrayDoubler(arr.slice(1), result)
}
arrayDoubler([1,2,3])

