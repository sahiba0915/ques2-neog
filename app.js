const input = document.querySelector('.userInput');
const increaseBtn = document.querySelector('.btn1-translate');
const decreaseBtn = document.querySelector('.btn2-translate');
const output = document.querySelector('.output');


function handleInput(){
    var inputTxt = input.value;
    output.innerHTML = inputTxt;
    
}

function increaseFont(){
    var txt = output;
    var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseFont(){
    var txt = output;
    var style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 2) + 'px';
}

input.addEventListener("input", handleInput);

increaseBtn.addEventListener("click", increaseFont);

decreaseBtn.addEventListener("click", decreaseFont);
