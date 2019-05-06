/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
  let numArr = num.toString().split('').reverse();
  let result = [];
  let roman = [
    ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM', 'MV', 'V', 'VM', 'VMM', 'VMMM', 'MX']
  ];

  if (typeof num != 'number' || num >= 5000 ) {
    return 'Please enter a valid number';
  }
  
  for (let i = 0; i < numArr.length; i++) {
      result.push(roman[i][numArr[i]])
    }

  return result.reverse().join('');
}

convertToRoman(3999);