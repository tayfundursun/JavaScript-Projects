let btnDOM = document.querySelectorAll(".btn");
let submitDOM = document.querySelector("#submit");
let ratingDOM = document.querySelector("#rating");
let selectedValue;

btnDOM.forEach(btn => {
    btn.addEventListener("click", function(){
        selectedValue = btn.value;
    });
});

submitDOM.addEventListener("click", function() {
    if(selectedValue === undefined){
        document.querySelector("#warning").classList.remove("hidden");
    } else {
        setTimeout( 
            function() {
                document.querySelector("#rating-section").classList.add("hidden");
                document.querySelector("#thankyou-section").classList.remove("hidden");
                
                ratingDOM.innerHTML = (`You selected ${selectedValue} out of 5`);
            } 
        , 350)      
    }
});
