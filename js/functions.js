

function addListener(divButton){
    const buttonNumber = divButton.querySelectorAll("button");
    let calcNumber = "";
    console.log(divButton);
    console.log(buttonNumber);

    for (let i = 0; i < buttonNumber.length; i++) {
        const number = buttonNumber[i];
        number.addEventListener("click", calculator);
    }

}
