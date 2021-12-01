const card = document.querySelector("#card");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

const f1 = document.querySelector("#f1")
const b1 = document.querySelector("#b1")
const f2 = document.querySelector("#f2")
const b2 = document.querySelector("#b2")



f1.addEventListener("click", goNextPage);
f2.addEventListener("click", goNextPage);
b1.addEventListener("click", goPrevPage);
b2.addEventListener("click", goPrevPage);



let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openCard() {
    card.style.transform = "translateX(50%)";
}

function closeCard(isAtBeginning) {
    if(isAtBeginning) {
        card.style.transform = "translateX(0%)";
    } else {
        card.style.transform = "translateX(100%)";
    }
    
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openCard();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeCard(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeCard(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openCard();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}