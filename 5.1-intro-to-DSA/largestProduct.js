// R - Repeat problem
// E - Example input/output & Error driven devolopment
// A - Approach
// C - Coding
// T - Testing / Code review
// O - Optimization / Follow-up questions


// Given an array of numbers, find the largest product formed by two of the numbers. For example, 
// if the input array is [1, 5, 3, 4, 2,], the largest product that can be formed by two of the numbers is 20, 
// which is the product of 5 and 4. Can you write code to solve this problem?

// if there is less than two nums throw me an error
// there can be negative nums




function largestProduct(inputArray) {
    if (inputArray.length < 2) {
        return ("need at least two number")
    }
    let tempMax = 0;
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            const checkOne = inputArray[i]
            const checkTwo = inputArray[j]
            let tempMaxCheck = checkOne * checkTwo;
            if (tempMaxCheck > tempMax) {
                tempMax = tempMaxCheck
            }
        }
    }
    return tempMax;
}

let x = [1, 5, 3, 4, 2]
console.log(largestProduct(x));

function largestProduct(arr) {  // n log n
    if (arr.length < 2) {
        throw error;
    }
    const sortedArr = arr.sort((A, B) => {
        return B - A;
    })
    const product = sortedArr[0] * sortedArr[1];
    const leastProduct = sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2];
    return product > leastProduct ? product : leastProduct;
}



// assume we know the largest and secondlargest
// we know the smallest and second smallest

// and then ask if what we are looking at is the largest or smallest


function largestProduct(arr) {
    if (arr.length < 2) {
      return undefined;
    }
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      if (value > largest) {
        secondLargest = largest;
        largest = value;
      } else if (value > secondLargest) {
        secondLargest = value;
      }
      if (value < smallest) {
        secondSmallest = smallest;
        smallest = value;
      } else if (value < secondSmallest) {
        secondSmallest = value;
      }
    }
  
    const largestProduct = largest * secondLargest;
    const smallestProduct = smallest * secondSmallest;
  
    if (largestProduct > smallestProduct) {
      return largestProduct;
    }
    else {
      return smallestProduct;
    }
  }