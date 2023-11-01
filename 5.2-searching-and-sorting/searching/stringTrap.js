function liveOrDie(str, arr) {
    // make your choice
    // palindrome checker
    let frontLetter = 0;
    let backLetter = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[frontLetter] !== str[backLetter]) {
            return false;
        }
        frontLetter += 1;
        backLetter -= 1;
    }

    return true;
}       

// O (n + m)

//   function liveOrDie(str) {
//     let len = str.length;
//     let palinCheck = true;
//     let count = 0;
//     while (palinCheck=== true && count < len){
//         if (str[count] !== str[len - count - 1]) {
//             palinCheck = false;
//         }
//         count++;
//     }
//     return palinCheck;

// }

function findCorrectKey(keys) {
    for (const key of keys) {
        // break the loop, find the key, liveOrDie
        if (liveOrDie(key.hint)) {
            return key;
        }
    }
    return null;
}

const keys = [
    { id: 1, hint: "a" },
    { id: 2, hint: "madams" },
    { id: 3, hint: "Nope, try again" },
    { id: 4, hint: "tacocat" },
    { id: 5, hint: "This key won't work either" },
    { id: 6, hint: "Racecar goes fast" },
    { id: 7, hint: "Almost there, but not quite" },
    { id: 8, hint: "A man, a plan, no luck" },
];

console.log(findCorrectKey(keys));
