function compare(leftElement, rightElement, arr) {
    return leftElement - rightElement
}

// + greater
// - less
// 0 equal

//       l  m  u            
let x = [7,12,15,21,22,43,69];

function binarySearch(arr, cb, value) {
    // declare our lower bound and upper bound
    let lowerBound = 0;
    let upperBound = arr.length - 1;

    // play the game
    while (lowerBound <= upperBound) { // in bounds
        //guess the middle point
        let midpoint = Math.floor((lowerBound + upperBound) / 2);
        let compareValue = cb(arr[midpoint], value); 
        // when our guess is right
        if (compareValue === 0) return midpoint;
        else if ( compareValue > 0 ) upperBound = midpoint - 1;
        else lowerBound = midpoint + 1;
    }
}