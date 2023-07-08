
const carouselTop = document.getElementById("carouselTop")
const interestSelected = document.getElementById("interestSelected")

carouselTop.addEventListener("click",activeCheck)

function interestOneClicked(){
    interestSelected.classList.toggle("visible")
    interestSelected.style.backgroundImage = "url('./images/coding-man.jpg')";
    interestSelected.style.setProperty("--before-content", "'Web development'");
    interestSelected.style.setProperty("--after-content", "'web web web web web web'");


}
function interestTwoClicked(){
    interestSelected.classList.toggle("visible")
    interestSelected.style.backgroundImage = "url('./images/celeste-game.avif')";
    interestSelected.style.setProperty("--before-content", "'Game development'");
    interestSelected.style.setProperty("--after-content", "'game game game game '");
}

function activeCheck(){
    console.log("clicked")

    let currentActiveArrow = document.getElementsByClassName("active-arrow")[0]
    console.log(currentActiveArrow)
    if(currentActiveArrow.id=="arrowOne"){
        console.log("birinci")
    }else if(currentActiveArrow.id=="arrowTwo"){
        console.log("ikinci")
        window.open("https://mericnam.github.io/MRC-shop/", "_blank");
    }else if(currentActiveArrow.id=="arrowThree"){
        console.log("ücüncü")
        window.open("https://github.com/mericnam/MRC-Games", "_blank");
    }
    // document.getElementById("carouselTop").setAttribute("onclick",goSecondSite());
}

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
    document.getElementById('carouselTop').style.backgroundImage="url(./images/MRCshop.png)"; 
}
function arrowThreeImage(){
    document.getElementById('carouselTop').style.backgroundImage="url(./images/MericGames.png)"; 
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







