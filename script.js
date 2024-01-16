let displayText="";

function getNumbers(string){
    return string.split(/[/ * \- +]/);
}

function getOperators(string){
    let stringArray=string.split("");
    let result = stringArray.filter( a => {
        switch (a) {
            case "+": return true;
            case "-": return true;
            case "/": return true;
            case "*": return true;
            default: return false;   
        }
    });
    return result;
}

function operate(a, operator, b){
    switch (operator){
        case "+": return Number(a)+Number(b);
        case "-": return Number(a)-Number(b);
        case "/": return Number(a)/Number(b);
        case "*": return Number(a)*Number(b);
    }
}


function calculate(string){
    let numbers = getNumbers(string);
    let operators = getOperators(string);
    let result=0;
    for (i=2; i<(numbers.length+2); i+=2){
        result = result + operate(numbers[i-2], operators[i-2], numbers[i-1]);
    }
    displayText = document.querySelector("#calcDisplay");
    displayText.textContent = updateDisplay(result);    
}

function updateDisplay(string){
    if (string.length > 14){
        return string.slice(0, 14)
    } else {
        return string;
    }
}

function clearDisplay(){
    displayText = document.querySelector("#calcDisplay");
    displayText.textContent = "";
}

function btnPushed(string){
    displayText = document.querySelector("#calcDisplay");
    displayText.textContent = updateDisplay(displayText.textContent + string);
}
//eventlistener for all button
    //numbers 0-9
    const btnOne = document.querySelector(".btnOne");
    btnOne.addEventListener("click", () => btnPushed("1"));

    const btnTwo = document.querySelector(".btnTwo");
    btnTwo.addEventListener("click", () => btnPushed("2"));

    const btnThree = document.querySelector(".btnThree");
    btnThree.addEventListener("click", () => btnPushed("3"));

    const btnFour = document.querySelector(".btnFour");
    btnFour.addEventListener("click", () => btnPushed("4"));

    const btnFive = document.querySelector(".btnFive");
    btnFive.addEventListener("click", () => btnPushed("5"));

    const btnSix = document.querySelector(".btnSix");
    btnSix.addEventListener("click", () => btnPushed("6"));

    const btnSeven = document.querySelector(".btnSeven");
    btnSeven.addEventListener("click", () => btnPushed("7"));

    const btnEight = document.querySelector(".btnEight");
    btnEight.addEventListener("click", () => btnPushed("8"));

    const btnNine = document.querySelector(".btnNine");
    btnNine.addEventListener("click", () => btnPushed("9"));

    const btnZero = document.querySelector(".btnZero");
    btnZero.addEventListener("click", () => btnPushed("0"));

    //operators
    const btnAdd = document.querySelector(".btnAdd");
    btnAdd.addEventListener("click", () => btnPushed("+"));    

    const btnSubtract = document.querySelector(".btnSubtract");
    btnSubtract.addEventListener("click", () => btnPushed("-"));

    const btnMultiply = document.querySelector(".btnMultiply");
    btnMultiply.addEventListener("click", () => btnPushed("*"));

    const btnDivide = document.querySelector(".btnDivide");
    btnDivide.addEventListener("click", () => btnPushed("/"));

    const btnClear = document.querySelector(".btnClear");
    btnClear.addEventListener("click", () => clearDisplay());

    const btnEval = document.querySelector(".btnEval");
    btnEval.addEventListener("click", () => calculate(displayText.textContent));