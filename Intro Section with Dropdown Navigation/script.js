let featuresDOM = document.querySelector("#features");
let companyDOM = document.querySelector("#company");

let featuresLIST = document.querySelector("#features-list");
let companyLIST = document.querySelector("#company-list");

let featuresArrowDOM = document.querySelector("#features-arrow");
let featuresArrowBoolean = true;
let companyArrowDOM = document.querySelector("#company-arrow");
let companyArrowBoolean = true;

featuresDOM.addEventListener("click", event => {
    if(featuresArrowBoolean){
        featuresArrowDOM.src = "./images/icon-arrow-up.svg";
        featuresArrowBoolean = false;
    } else {
        featuresArrowDOM.src = "./images/icon-arrow-down.svg";
        featuresArrowBoolean = true;
    }
    
    featuresLIST.classList.toggle("hidden");
});

companyDOM.addEventListener("click", event => {
    if(companyArrowBoolean){
        companyArrowDOM.src = "./images/icon-arrow-up.svg";
        companyArrowBoolean = false;
    } else {
        companyArrowDOM.src = "./images/icon-arrow-down.svg";
        companyArrowBoolean = true;
    }

    companyLIST.classList.toggle("hidden");
});
