function arrowFuncOne(){
    arrowOneImage();
    arrowOneSelected(); 
}
function arrowFuncTwo(){
   arrowTwoImage();
   arrowTwoSelected();
}
function arrowFuncThree(){
    arrowThreeImage();
    arrowThreeSelected();
}

function arrowOneImage(){
    document.getElementById('carouselTop').style.backgroundImage="url(./images/project1.jpg)"; 
}
function arrowTwoImage(){
    document.getElementById('carouselTop').style.backgroundImage="url(./images/project2.jpg)"; 
}
function arrowThreeImage(){
    document.getElementById('carouselTop').style.backgroundImage="url(./images/project3.jpg)"; 
}

function arrowOneSelected(){
    document.getElementById("arrowOne").classList.add("active-arrow");
    document.getElementById("arrowTwo").classList.remove("active-arrow");
    document.getElementById("arrowThree").classList.remove("active-arrow");
}
function arrowTwoSelected(){
    document.getElementById("arrowOne").classList.remove("active-arrow");
    document.getElementById("arrowTwo").classList.add("active-arrow");
    document.getElementById("arrowThree").classList.remove("active-arrow");
}
function arrowThreeSelected(){
    document.getElementById("arrowOne").classList.remove("active-arrow");
    document.getElementById("arrowTwo").classList.remove("active-arrow");
    document.getElementById("arrowThree").classList.add("active-arrow");
}

