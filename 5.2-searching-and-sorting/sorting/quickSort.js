/*time complexity  
                 p   
                [5,2,1,8,4,7,6,3]
                       5              5 is in the right spot idx of 4
              p                       do the same on the left side
              3,2,1,4      7,6,8
                3                     3 is in the right spot idx of 2
            p      
            1,2   4
            1                         1 is in the right spot idx of 0  
              2 
                          p
                          7,6,8      time for the right side
                          7          7 is in the right spot idx of 6
                        6   8 
            1 , 2 ,3 ,4 ,5 ,6 ,7 ,8
*/ 


function compare(a, b) {
    return a - b;
}

function quickSort(arr, compare, lowerIndex = 0, upperIndex = arr.length -1) {
    // base case 
    if ( lowerIndex < upperIndex ) {
        // recursive case
        const index = partition(arr, compare, lowerIndex, upperIndex); 
        // sort to the left
        quickSort(arr, compare,lowerIndex,index -1);
        //sort to the right
        quickSort(arr, compare,index + 1,upperIndex)
    }
    return arr;
}

//                  i              
//  p       s                             p        
// [5,1,2,6,9,7,6,8]      -----> [5,1,2,7,6,9,6,8]
//  l             u
function partition(arr, compare, lowerIndex = 0, upperIndex = arr.length - 1) {
    // choose the pivot value (does affect the time complexity)
    let pivotValue = arr[lowerIndex];
    // keep track of how many things are less than the pivot value
    let partitionIndex = lowerIndex + 1;
    for (let i = lowerIndex + 1; i <= upperIndex; i++) {
        const comparison = compare(arr[i], pivotValue);
        if ( comparison < 0 ) { // it must be less than the pivot
            [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]] // [a,b] = [b,a]
            partitionIndex++
        }
    }
    // at the end swap our pivotvalue with left of partionIdx
    [arr[lowerIndex], arr[partitionIndex - 1]] = [arr[partitionIndex -1], arr[lowerIndex]]
    return partitionIndex - 1;
}


console.log(quickSort([29,10,14,37,14], compare));