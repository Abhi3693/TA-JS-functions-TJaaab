// Look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(numbers) {
  return numbers + 1 ;
}
addOne(25);// 25
typeof_return_value = number

// - Write a Function Expression

let addOne = function (numbers) {
   return numbers + 1;
}
addOne(100);// 100
typeof_return_value = number

// - Write an Arrow Function without curly brackets(if possible)


let addOne = (numbers) => string(numbers);
addOne(500) // 500
typeof_return_value = number


// - Write an Arrow Function with curly brackets

let addOne = (numbers) => {
  return numbers + 1;
}
addOne(1000)//1000
typeof_return_value = number

// - Execute the function

// - Execute the function and store the return value in a variable.

// - What is the typeof returnValue

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractone (number) {
  return number - 1 ;
}
substractone(100);// 99

// - Write a Function Expression

let substractOne = function (number) {
  return number - 1 ; 
}
substractOne(500);//499

// - Write an Arrow Function without curly brackets(if possible)

let substractOne = (numbers) => numbers - 1 ; 
substractOne(200) // 199

// - Write an Arrow Function with curly brackets

let substractOne = (numbers) => {
  return numbers - 1 ;
}

// - Execute the function

// - Execute the function and store the return value in a variable.

// - What is the typeof returnValue
`Number`

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(num1 , num2) {
  return num1 + num2;
}
sum(20, 20)

// - Write a Function Expression

let sum = function(num1 , num2) {
  return num1 + num2 ;
}

// - Write an Arrow Function without curly brackets(if possible)

let sum = (num1 , num2) => num1 + num2 ;


// - Write an Arrow Function with curly brackets

let sum = (num1 , num2) => {
  return num1 + num2;
}

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue
`Number`

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(number) {
  return number * number;
} 
square(15) // 225

// - Write a Function Expression

let square = function (number) {
  return number * number;
}


// - Write an Arrow Function without curly brackets(if possible)

let square = (number) => (number) * (number);

// - Write an Arrow Function with curly brackets

let square = (number) => {
  return (number) * (number);
}

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue
`Number`


/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(x , y) {
	if (x > y) {
    return true;
  } else {
    return false
  }
}

isGreater(30,50);


// - Write a Function Expression

let isGreater = function(x , y) {
  if (x > y) {
    return true;
  } else {
    return false
  }
}
  
isGreater(800,300);


// - Write an Arrow Function without curly brackets(if possible)

let isGreat = (x , y) => 
  x > y 
  ? true
  : false



// - Write an Arrow Function with curly brackets

let isGreter = (num1,num2) => {
  if (x > y) {
    return true;
  } else {
    return false
  }
}

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue
`true or false`

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(number) {
  if ( number % 2 == 0 ) {
    return `this even number`
  } else {
    return `this odd number`
  }
}

// - Write an anonymous Function Expression

let oddOrEven = function(number) {
  if ( number % 2 == 0 ) {
    return `this is even number`
  } else {
    return `this is odd number`
  }
}

// - Write an named Function Expression

let oddOrEven = function oddOrEven(number) {
  if ( number % 2 == 0 ) {
    return `this is even number`
  } else {
    return `this is odd number`
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddOrEven = (number) => 
  number % 2 == 0 
  ? `this is even number`
  : `this is odd number`

// - Write an Arrow Function with curly brackets

let oddOrEven = (number) => {
  if (number % 2 == 0 ) {
    return `this is even number`
  } else {
    return `this is odd number`
  }
}


// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue
"string"
