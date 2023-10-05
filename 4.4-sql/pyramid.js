function pyramid(n) {
  // string variable to hold our answer
  let ans = '';
  // loop once for each row (n)
  for (let i = 1; i <= n; i++) {
    // make a string that is as many asterisks as the current row
    ans += '*'.repeat(i)
    if (i < n) {
      ans += '\n'
    }
  }
  return ans;
  // return that string
}

module.exports = pyramid;


let pyramid2 = n => Array(n)
  .fill('')
  .map((_, i) => '*'.repeat(i + 1))
  .join('\n');
  
// run length encoding
// 'aaaaaabbbbccaaa'
// 'a6b4c2a3'
