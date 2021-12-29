var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");




function clickEventHandler () 
{
    outputDiv.innerText = "bananannannanananan " + textInput.value;

}

btnTranslate.addEventListener("click",clickEventHandler)



