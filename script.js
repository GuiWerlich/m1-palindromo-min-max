function isPalindrome(word) {
    word = word.toLowerCase().replace(/\s/g, '');
  
    let start = 0;
    let end = word.length - 1;
  
    while (start < end) {
      if (word[start] !== word[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
       

function arrayMaxMin(arr) {

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}

return [min, max];
}