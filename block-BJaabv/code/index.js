// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge( year, conversion_rate=7) {
  return year * conversion_rate;
}
calculateDogAge(8 );


/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/


  const maxAge = 70;


function calculateMovieWatch(age, movies_per_week) {
    
  let  noOfMovies = (maxAge - age) * 12 * 4 * movies_per_week
    
  return noOfMovies ;
}
calculateMovieWatch(28 , 2 );

 


/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temp as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

 function celsiusToFahrenheit(temp) {
  let fahrenheit = (temp * 9) / 5 +32 ; 
  return `${temp}°F is ${fahrenheit}°C`
}
celsiusToFahrenheit(10);

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temp as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(fahrenheit) {
  let celcius = (fahrenheit - 32) * 5/9;
  return `${fahrenheit}°F is ${celcius}°C`
}
celsiusToFahrenheit(50);

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n, x) {
  if (n < 1 ) {
    alert("The number below 1 is not allowed")
  } else {
    alert (n ** x);
    return n ** x ;
  }
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN( num , operation ) {
let sum = 0;
    if (operation === "sum") {      
      for (let i = 0; i <= num ; i++) {
      sum += i;
    }
    return sum;
  } else if (operation === "product") {
    let product = 1;
      for (let i = 1; i <= num ; i++) {
      product *= i;
      console.log(product);   
    } 
    return product;
  }
}

  
sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/


let sum = 0 ;

function sumOfN(number) {

  for (let i = 1; i <= number; i++) {
    sum = sum + i;
    console.log(sum)
    
  }return (sum);
}
    
sumOfN(10);

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

let sum = 0 ;

function sumOfNWithfive(number) {

  for (let i = 1; i <= number; i++) {
    if ( i % 5 === 0 || i % 7 === 0 ){
      sum = sum + i;
    }
  }
  return (sum);
}
    
sumOfNWithfive(20)


/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a , b) {
  if ( a < b ) {
    return a;
  } else {
    return b;
  }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(x) {
  alert(typeof(x));
  return typeof(x);
  
}
typeCheck(12);