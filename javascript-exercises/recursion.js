// sumRange

const sumRange = (num) => {
    if(num === 1) {
      return num;
    } else {
      return num + sumRange(num-1);
    }
    
};

console.log(sumRange(3));



// Power

const power = (num1, num2, count = 1) => {

    if(num2 === 0) {
        return 1;
    }

    if(num2 === count) {
        return num1;
    } 

    count++;
    return num1 * power(num1, num2, count);

}

console.log(power(2, 2));



// factorial

const factorial = (num) => {
    if(num === 1) {
      return num;
    }
  
    return num * factorial(num - 1);
  }
  
console.log(factorial(5));

