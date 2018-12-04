let buttons = document.getElementsByClassName('button');
for (let button of buttons) {
    button.addEventListener("click", clickHandler);
}

let screenContents = "";
let screenDisplay = document.getElementById('screen');


function updateScreen(term) {
    screenContents = term;
    screenDisplay.innerText = screenContents
}

function clickHandler(event) {
    let buttonContent = event.target.innerText;
    if (buttonContent.match(/\d/)) {
        screenContents += buttonContent;
        screenDisplay.innerText = screenContents;
    }
    if (buttonContent.match(/[x\/\+\-]/)) {
        screenContents += buttonContent;
        screenDisplay.innerText = screenContents;

    }
    if (buttonContent === "X") {
        screenContents += '*';
        screenDisplay.innerText = screenContents;
    }
    if (buttonContent === ".") {
        screenContents += '.';
        screenDisplay.innerText = screenContents;
    }
}   

let clear = document.getElementById('clear');
clear.addEventListener("click", function() {
    screenContents = "";
    screenDisplay.innerText = screenContents;
});

document.getElementById('equal').addEventListener("click", function(){
    screenContents = eval(screenContents);
    screenDisplay.innerText = screenContents;

})


