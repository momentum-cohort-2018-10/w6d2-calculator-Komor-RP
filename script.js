let buttons = document.getElementsByClassName('button');
for (let button of buttons) {
    button.addEventListener("click", clickHandler);
}

let operation = "";
let screenContents = "";
var inputs = [];
let screenDisplay = document.getElementById('screen');


function clickHandler(event) {
    let buttonContent = event.target.innerText;
    if (buttonContent.match(/\d/)) {
        screenContents += buttonContent;
        screenDisplay.innerText = screenContents;
    } else if ((buttonContent.match(/[X\/\+\-]/)) && operation){
        enterPress(buttonContent);
        operation = buttonContent;
        inputs.push(screenContents);
        screenContents = "";

    } else if (buttonContent.match(/[X\/\+\-]/)){
        inputs.push(screenContents);
        operation = buttonContent;
        screenContents = "";
        screenDisplay.innerText = screenContents;

    } else if ((buttonContent === ".") && !(screenContents.includes("."))){
        screenContents += '.';
        screenDisplay.innerText = screenContents;
    }

}

function enterPress(input) {
    inputs.push(screenContents);
    inputs.forEach(input => Number(input));

    switch(operation) {
        case "+":
            operation = "";
            result = add(Number(inputs.pop()), Number(inputs.pop()));
            break;
        case "-":
            operation = "";
            let first = Number(inputs.pop());
            let second = Number(inputs.pop());
            result = subtract(second, first);
            break;
        case "/":
            operation = "";
            result = divide(Number(inputs.pop()), Number(inputs.pop()));
            break;
        case "X":
            operation = "";
            result = multiply(Number(inputs.pop()), Number(inputs.pop()));
            break;
        default:
            result = Number(screenContents);
            break;
    }

    screenContents = String(result);
    screenDisplay.innerText = screenContents;
}

let clear = document.getElementById('clear');
clear.addEventListener("click", function() {
    screenContents = "";
    screenDisplay.innerText = screenContents;
});

document.getElementById('equal').addEventListener("click", enterPress);

let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
function divide(a, b) {
    if (a == 0) {
        return "ERROR";
    }
    return b / a;
}
let multiply = (a,b) => a * b;

  