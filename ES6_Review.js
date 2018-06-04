const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  let squaredIntegers = arr.filter(num => Number.isInteger(num));
  console.log(squaredIntegers);
  squaredIntegers = squaredIntegers.map(square => square*square);  // change code
  console.log(squaredIntegers); 
  // above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const sum = (function() {
  "use strict";
  return function sum(...args) {
    console.log(args.length);
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
  console.log(arr2);
})();
console.log(arr2);
function getLength(str) {
  "use strict";

  // change code below this line
  const {length : len} = str;
  console.log(len);
  return len; // you must assign length to len in line

}

console.log(getLength('FreeCodeCamp'));

const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
  };
  const { start : { x: startX, y: startY }} = a;
  const { end: { x: endX, y: endY}} = a;
  console.log(endX, endY);
  console.log(startX, startY); // 5, 6

  const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    const {tomorrow: { min: tomMin, max: tomMax}} = LOCAL_FORECAST; // change 
    return tomMax;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

  const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
const [a,b,...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
// const half = () => {
//   "use strict"; // do not change this line
// const {max, standard_deviation, median, mode, min, average} = stats;
// console.log('stats are ', max);
// return (max + min) / 2.0;

// };
// console.log(stats); // should be object
// console.log(half(stats)); // should be 28.015

const half = ({max, min}) => {

console.log('stats are ', max);
return (max + min) / 2.0;

};
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
const resultDisplayArray = result.failure.map(x => `<li class="text-warning">${x}</li>`);    

//console.log(resultDisplayArray);                               
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ <li class="text-warning">no-var</li>,
 *   <li class="text-warning">var-on-top</li>, 
 *   <li class="text-warning">linebreak</li> ]
 **/
const resultDisplayArray = makeList(result.failure);

const getMousePosition = (x, y) => ({ x, y });

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
const createPerson = (name, age, gender) => ({name, age, gender});
  // change code above this line
};
console.log(createPerson("Sarthak", 56, "male")); // returns a proper object

const person1 = {
  name: "Taylor",
  sayHello: function() {
  return `Hello! My name is ${this.name}.`;
  }
  };

  // es6
  const person2 = {
    name: "Taylor",
    sayHello() {
    return `Hello! My name is ${this.name}.`;
    }
    };
    
    const bicycle = {
      gear: 2,
      setGear (newGear) {
        "use strict";
        this.gear = newGear;
      }
    };
    // change code above this line
    bicycle.setGear(3);
    console.log(bicycle.gear);
    function makeClass() {
      "use strict";
      /* Alter code below this line */
    class Vegetable {
      constructor() {
        
      }
    }
      /* Alter code above this line */
      return Vegetable;
    }
    const Vegetable = makeClass();
    const carrot = new Vegetable('carrot');
    console.log(carrot.name); // => should be 'carrot'

    export default function subtract(x,y) {return x - y;}
