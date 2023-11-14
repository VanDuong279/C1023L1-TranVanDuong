function myAddition() {
    let value1 = +document.getElementById("value1").value;
    let value2 = +document.getElementById("value2").value;

    addition = value1 + value2;
    document.getElementById("result").innerText = addition;
}
function mySubtraction() {
    let value1 = +document.getElementById("value1").value;
    let value2 = +document.getElementById("value2").value;

    subtraction = value1 - value2;
    document.getElementById("result").innerText = subtraction;
}
function myMultiplication() {
    let value1 = +document.getElementById("value1").value;
    let value2 = +document.getElementById("value2").value;

    multiplication = value1 * value2;
    document.getElementById("result").innerText = multiplication;
}
function myDivision() {
    let value1 = +document.getElementById("value1").value;
    let value2 = parseInt(document.getElementById("value2").value);

    division = value1 / value2;
    document.getElementById("result").innerText = division;
}