
const carouselTop = document.getElementById("carouselTop")
const interestDetail = document.getElementById("interestDetail")
const interestDetailInfo = document.getElementById("interestDetailInfo")

carouselTop.addEventListener("click",activeCheck)

let selectedInterest = "blank"

function interestOneClicked(){
    if(selectedInterest=="blank" || selectedInterest =="two"){        
        interestDetail.style.backgroundImage="url(./images/gameDev.png)";
        interestDetailInfo.innerText="Passionate about game design, I am deeply interested in creating immersive experiences that captivate players. My experience with Unity, along with my exploration of Godot and Unreal Engine, fuels my ambition to craft unique and engaging games. Currently, I am honing my skills in JavaScript to design captivating and innovative games."
        selectedInterest ="one"
        interestDetail.style.opacity =1;
    }else{
        interestDetail.style.backgroundImage="";
        interestDetailInfo.innerText=""
        selectedInterest ="blank"
        interestDetail.style.opacity =0;

    }
}
function interestTwoClicked(){
    if(selectedInterest=="blank" || selectedInterest =="one"){
        interestDetail.style.backgroundImage="url(./images/webDev.png)";
        interestDetailInfo.innerText="For over a year, I have been dedicatedly immersing myself in the world of web design. Mastering HTML, CSS, JS, and Bootstrap was just the beginning as I ventured into React. With each new project, I am driven to push the boundaries of web development, fueled by a relentless passion for creating captivating digital experiences."
        selectedInterest ="Two"
        interestDetail.style.opacity =1;
    }else{
        interestDetail.style.backgroundImage="";
        interestDetailInfo.innerText=""
        selectedInterest ="blank"
        interestDetail.style.opacity =0;

    }     
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



