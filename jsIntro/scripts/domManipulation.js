let pageTitle = document.getElementById("pageTitle");
console.log(pageTitle);


function changeTitleColor(){
    document.getElementById("pageTitle").classList.remove("red");
    document.getElementById("pageTitle").classList.add("blue");
}

function changeParagraphToBold(){
    document.getElementById("paragraph1").classList.add("bold");
}

function changeParagraphContent(){
    document.getElementById("paragraph2").innerHTML = "This content has been changed.";
}