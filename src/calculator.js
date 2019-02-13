function Calculator(){}

Calculator.prototype.add = function(num1, num2){
  if(typeof num1 === "number" && typeof num2 === "number"){
    return num1 + num2
  }
  return new Error("Can not handle Non-number")
}

var calculator = new Calculator()

module.exports = calculator
