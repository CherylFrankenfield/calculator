var add = function(number1, number2) {
	return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter Another Number:"));
var result = add(number1, number2);
alert(result);


var andser = function(me) {
	alert(me);
}
var andserTwo = function(me) {
	alert(me);
}


 var multiple = function(number1, number2) {
 		subtract = (number1 * number2);
 		return subtract;
 }
 var multipleAgain = function(number3, number4){
 	multipleAgain = (number3 * number4);
  return multipleAgain;
 }


	var numberOne = function(number1) {
  number1 = parseInt(prompt("imput a number"));
  return number1;
  }
  	var numberTwo = function(number2) {
  number2 = parseInt(prompt("imput a number"));
  return number2;
  }

  	var numberThree = function(number3) {
  number3 = parseInt(prompt("imput a number"));
  return number3;
  }


var imputOne = numberOne();
var imputTwo = numberTwo();
var imputThree = numberThree();

var equation = multiple(imputOne, imputTwo);

var equationTwo = multipleAgain(imputThree, equation);

 andser("your addser is for the first equation" + equation + ". " + "the secont is" + equationTwo + "." );

imputOne = numberOne();
imputTwo = numberTwo();
imputThree = numberThree();

var griffin = multiple(imputOne, imputTwo);

var longtin = multipleAgain(imputThree, griffin);

andserTwo("your addser is for the first equation" + griffin + ". " + "the secont is" + longtin + "." );
