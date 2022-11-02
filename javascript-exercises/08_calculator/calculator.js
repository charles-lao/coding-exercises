const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a -b;
};

const sum = function(numbers) {
	let total = 0;
  for(number of numbers) {
    if(isNaN(parseInt(number))){
      total += 0;
    } else {
      total += parseInt(number);
    }
  }
  return total;
};

const multiply = function(numbers) {
  let product = 1;
  for(number of numbers) {
    if(isNaN(parseInt(number))){
    } else {
      product *= parseInt(number);
    }
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  let factorializedNum = 1;

	if(number === 0 || number === 1) {
    return factorializedNum;
  } else {
    for(number; number>0; number--) {
      factorializedNum *= number;
    }

    return factorializedNum;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
