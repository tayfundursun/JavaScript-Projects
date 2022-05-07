let featuresDOM = document.querySelector("#features");
let companyDOM = document.querySelector("#company");

let featuresLIST = document.querySelector("#features-list");
let companyLIST = document.querySelector("#company-list");

let arrowDOM = document.querySelector(".arrow");
let arrowBoolean = true;

featuresDOM.addEventListener("click", event => {
    
    if(arrowBoolean){
        arrowDOM.src = "./images/icon-arrow-up.svg";
        arrowBoolean = false;
    } else {
        arrowDOM.src = "./images/icon-arrow-down.svg";
        arrowBoolean = true;
    }
    
    
    featuresLIST.classList.toggle("hidden");

   

});

companyDOM.addEventListener("click", event => {

    companyLIST.classList.toggle("hidden");
    
});

