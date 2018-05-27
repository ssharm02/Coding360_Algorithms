const exampleArray = [2, 3, 5, 6, 7, 8].map(function(element) {
  return element + 1; 
});

console.log(exampleArray);

// Arrow function transformation

const exampleArray2 = [1, 2, 3, 4, 5].map((element, index)  => { 
  if (true) {
    return true;
  }
  return element + 1});
console.log(exampleArray2);

function noParamsEntered (x, y = 10) {
  console.log(x);
  console.log(y);
  return x + y;
}

noParamsEntered(5);

(function() {
  console.log('hello world');
})();

function add() {
  let array = [];
  for (let i = 0; i < arguments.length; i++) {
    array.push(arguments[i]);
  }
  console.log(array);
} // OR

function add(...array) {
  console.log(array);
}

add(5);
add(51, 6);
add(611, 6, 7);

// closure
let total = 0;
function add3(num) {
total += num;
console.log(total);
}
add3(1);
add3(1);
add3(1);

let addEx = (function() {
    let total = 0;
   
    return function(param1) {
      return total+= param1;
    }
  })();


console.log(addEx(5));
console.log(addEx(15));
console.log(addEx(20));

console.log(Math.min(10, 0, -110, -2000, 30000)); // or math.max

console.log(Math.random()) 
console.log(Math.floor(Math.random() * 10) + 1)

const exDate = new Date()
console.log(exDate);
console.log(new Date()) 

function splitAdd(num) {
  // array will hold numbers
  var arr1 = [];
  var sum = 0;
  var numString = num.toString();

  arr1 = numString.split('');
  console.log(arr1);
  arr1 = arr1.reduce((num1, num2) => parseInt(num1) + parseInt(num2));
  return arr1;
}
console.log(splitAdd(29));

function diffArray(arr1, arr2) {
  let specialArray = [];

  for (let val of arr1) {
    if(!arr2.includes(val) && !specialArray.includes(val)) {
      specialArray.push(val);
    }
  }
  for (let val of arr2) {
    if (!arr1.includes(val) && !specialArray.includes(val)) {
      specialArray.push(val);
    }
  }
  return specialArray;
  }
console.log(diffArray([1,2,3,4,5], [1,2,3,6,5]));

function sumofNum(arr) {
  var minNum = 0;
  var maxNum = 0;
  var sum = 0;
  minNum = Math.min.apply(null, arr);
  maxNum = Math.max.apply(null, arr);
  for (var i = minNum; i <= maxNum; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumofNum([10,5]));
console.log(sumofNum([3, 7]));

function stringSplit(str) {
  var splitArr = str.match(/[A-Z][a-z]+|[0-9]+/g).join(" ").toLowerCase();
  console.log(splitArr);
}
stringSplit("Ain'tNoFunIfTheHomieDon'tCodeNoe");

function firstDuplicate(numArray) {
  let duplicateObject = {};

  for (let num of numArray) {
    if (duplicateObject.hasOwnProperty(num)) {
      return num;
    }
    duplicateObject[num] = num;
  }
}
console.log(firstDuplicate([2,3,3,1,5,2]));
console.log(firstDuplicate([2,2]));

function isDuplicated(numArray) {
  const sortedNums = numArray.sort((num1, num2) => {
    return num1 - num2;
  });
  

  for (let i = 0; i < sortedNums.length; i++) {
    if(sortedNums[i] === sortedNums[i+1]) {
      return true;
    }
  }

  return false;

}

console.log(isDuplicated([1,2,3,1]));

function isValidTime(time) {
  let timeArray = time.split(':');

  if (Number(timeArray[0]) > 23) {
    return false;
  } else if (Number(timeArray[1] > 59)) {
    return false;
  }
  return true;
}
console.log(isValidTime('24:00'));
console.log(isValidTime('23:31'));
console.log(isValidTime('23:89'));


function missingNumber(numArr) {
 // sort the array
 const sortedNums = numArr.sort((num1, num2) => {
  return num1 - num2;
});

for (let i = 0; i < sortedNums.lenght; i++) {
  if(i !== sortedNums[i]) {
    return i;
  }
}
 // console.log(sortedNums);
}

console.log(missingNumber([2,4,1,6,7,1,3]));

function largestWord(str) {
  let filteredArray = str.toString().replace(/[\W_]/g, ' ').split(' ');
  let largest = '';
  filteredArray.forEach((word) => {
   largest = word.length > largest.length ? word : largest;
  })

  return largest;

}

console.log(largestWord(['Ready', 'Steady', 'go!']));

function repeatString(str, num) {
  var repeatedString = '';

  while (num > 0) {
    repeatedString = repeatedString.concat(str);
    num--;
  }
  return repeatedString;
}
console.log(repeatString('codinggod',2));

function isDigit(str) {
  const digitArray = ["0", "1", "3", "4", "5", "6", "7", "8", "9"];
  return digitArray.includes(str);
}

console.log(isDigit("7"));
console.log(isDigit('d'));

function titleCase(str) {
  let titleCase = str.split(' ');

  titleCase = titleCase.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();

    word = firstLetter.concat(word.slice(1, word.length));

    return word;
  })

  titleCase = titleCase.join(' ');
  return titleCase;;
}
console.log(titleCase('I am a coding god'));

console.log(titleCase('I awould like to work for google'));

function findLongestWord(str) {
 
  //split the string and place it into array
  var splitArray = str.split(' ');
  //max word counts the length of the words inside the for loop
  var maxWord = 0;
  
  //for loop goes through the lenght of all the words in the array
  for (var i = 0; i < splitArray.length; i++) {
    //if the length of the word is higher than whatever value in the maxWord at the time
    if (splitArray[i].length > maxWord) {
      //set it to maxWord
      maxWord = splitArray[i].length;
    }
  }
  return maxWord;
  }

console.log(findLongestWord('I would like to work at RBC'));

function isPalindrome(str) {
  let forwardStr = str.toLowerCase().replace(/[W_]/g, '');;
  let reversedStr = forwardStr.split('').reverse().join('');

  
  return forwardStr === reversedStr;
}

console.log(isPalindrome('_codegod'));
