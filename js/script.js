"use strict"
//Variabili Globale
let calcNumber = "";
let operation = "";
let calcNumber2 = "";
let calcText = "";
const divNumber = document.querySelector(".numbers");
const divOperation = document.querySelector(".operation");
const spanDisplay = document.querySelector(".display");



addListener(divNumber);
addListener(divOperation);

//Funzioni non pure
function clearAll(){
    calcNumber = "";
    calcNumber2 = "";
    operation = "";  
}


function calculator(){
    const elemValue = this.innerHTML;
    
    console.log("Confrotn", !isNaN(elemValue));
    console.log("Confronto operation", operation != "");
    
    if(!isNaN(parseInt(elemValue)) && operation == ""){//Controllo che il valore del button sia un numero.
        console.log(elemValue);
        calcNumber += elemValue;
        calcText = calcNumber;

    }else if(calcNumber != "" && isNaN(elemValue) && elemValue != "=" && elemValue != "C"){
        console.log("operation", elemValue)
        operation = elemValue;

        calcText = elemValue;
        
    }else if(elemValue == "C"){
        console.log("operation", elemValue);
        clearAll();
        calcText = "0";
    }

    if(!isNaN(parseInt(elemValue)) && operation != ""){
        calcNumber2 += elemValue;
        calcText = calcNumber2;
    }

    console.log("Confronto operation=", elemValue == "=");
    console.log("Confronto calcnumber2", calcNumber2 != "");
    
    if(elemValue == "="){
        calcNumber = parseInt(calcNumber);
        
        calcNumber2 = parseInt(calcNumber2);

        console.log("operation: ", operation);

        switch (operation) {
            case "+":
            calcNumber = calcNumber + calcNumber2;
            break;  
            
            case "-":
            calcNumber = calcNumber - calcNumber2;
            break;  

            case "x":
                calcNumber = calcNumber * calcNumber2;
                break;
            
            case "÷":
                calcNumber = calcNumber / calcNumber2;
                break;
                
        }

        if(calcNumber == Infinity){
            calcText = "ERROR";
        }else if(isNaN(calcNumber)){
            calcText = "0";
        }else{
            calcText = calcNumber;
        }
        //Per riutilizzare il risultato
        const middle = calcNumber;
        clearAll();
        calcNumber = middle;
    }
    
     
    console.log("calc1", calcNumber);
    console.log("calc2", calcNumber2);
    
    spanDisplay.innerHTML = calcText;
    
}