let displayText="0";

function getNumbers(string){
    if (string == undefined){return}
    return string.split(/[/ * \- +]/);
}

function getOperators(string){
    if (string == undefined){return}
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
        case "/": {
            if (Number(b) != 0){
                return Number((Number(a)/Number(b)).toFixed(12));
            } else {
                return "can't / with 0";
            }
        }
        case "*": return Number(a)*Number(b);
    }
}

function calculate(string){
    if (string == undefined){return}
    let numbers = getNumbers(string);
    let operators = getOperators(string);
    if (operators.length == 0){
        displayText.textContent = numbers[0];
        return
    }
    let result=operate(numbers[0], operators[0], numbers[1])
    for (i=2; i<(numbers.length); i++){
        result = operate(result, operators[(i-1)], numbers[i]);
    }
    displayText = document.querySelector("#calcDisplay");
    displayText.textContent = updateDisplay(result);    
}

function updateDisplay(string){
    if (string == undefined){return}
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

function isNumber(string){
    string=Number(string);
    return typeof string === "number" && !Number.isNaN(string)
}

function lastIsOperator(string){
    console.log(string)
    if (string.slice(-1) == "*" ||
        string.slice(-1) == "-" ||
        string.slice(-1) == "/" ||
        string.slice(-1) == "." ||
        string.slice(-1) == "+"  )
        {
            return true;
        } else {
            return false;
        }
}
function rmLastChar(){
    displayText = document.querySelector("#calcDisplay");
    displayText.textContent = displayText.textContent.slice(0,displayText.textContent.length-1);
}

function btnPushed(string){
    displayText = document.querySelector("#calcDisplay");
    if( !isNumber(string) && lastIsOperator(displayText.textContent)){ 
        return;
    } else {
            displayText.textContent = updateDisplay(displayText.textContent + string);
    }
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

    const btnPoint = document.querySelector(".btnPoint");
    btnPoint.addEventListener("click", () => btnPushed("."));

    const btnBackspace = document.querySelector(".btnBackspace");
    btnBackspace.addEventListener("click", () => rmLastChar());

//keyboard support
window.addEventListener("keydown", (a) => {
    switch (a.key){
        
        case "1": btnPushed("1"); break;
        case "2": btnPushed("2"); break;
        case "3": btnPushed("3"); break;
        case "4": btnPushed("4"); break;
        case "5": btnPushed("5"); break;
        case "6": btnPushed("6"); break;
        case "7": btnPushed("7"); break;
        case "8": btnPushed("8"); break;
        case "9": btnPushed("9"); break;
        case "0": btnPushed("0"); break;
        case "+": btnPushed("+"); break;
        case "-": btnPushed("-"); break;
        case "*": btnPushed("*"); break;
        case "/": btnPushed("/"); break;
        case ",": btnPushed("."); break;
        case ".": btnPushed("."); break;
        case "Enter": calculate(displayText.textContent); break;
        case "Delete": clearDisplay(); break;
        case "Backspace": rmLastChar();break;
    
    }
});

