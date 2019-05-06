/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */


function rot13(str) { // LBH QVQ VG!
  let result = str.split('');
  let myRegex = /[A-Z]/g

  result = result.map(function(x) {
    if (x.match(myRegex) && (x.charCodeAt() > 77)) {
      return String.fromCharCode(x.charCodeAt() - 13);
    } else if (x.match(myRegex)) {
      return String.fromCharCode(x.charCodeAt() + 13);
    } return x;
  })

  return result.join('');
}

// Change the inputs below to test
rot13("SERR CVMMN!")