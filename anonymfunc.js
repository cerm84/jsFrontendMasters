var add = function(a, b) {
    return a + b;
}

var substract = function(a, b) {
    return a - b;
}

var math = function(a, b, operate) {
    return operate(a, b);
}

document.write(math(1, 4, add));
document.write("<br>");
document.write(math(5, 1, substract));
document.write("<br>");

//the function below is an anonimous function is call qith answer and then  dissapear
var answer = math(4, 5, function(a, b) {
    return a * b
});
document.write(answer);
