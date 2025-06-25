console.log('Hello World');

function multiply(a, b) {
  let result = a * b;
  return result;
}

function calculate() {
  let x = 5;
  let y = 10;
  
  console.log("Before multiplication");


  let total = multiply(x, y);

  console.log("After multiplication, Total:", total);
}

calculate();
