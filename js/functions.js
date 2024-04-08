function addListener(divButton){
    const buttonNumber = divNumber.querySelectorAll("button");

    console.log(divNumber);
    console.log(buttonNumber);
    buttonNumber[cont].addEventListener("click", function(){
    
        console.log("ciao");
        console.log(this.innerHTML);
})
}