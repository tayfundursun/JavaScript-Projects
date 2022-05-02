let btnDOM = document.querySelectorAll(".btn");
let submitDOM = document.querySelector("#submit");
let selectedValue;

btnDOM.forEach(item => {
    item.addEventListener("click", function(){
        selectedValue = item.value;

        console.log(selectedValue, "---" , "btn clicked.");
    });
});


submitDOM.addEventListener("click", function() {
    if(selectedValue === undefined){

        console.log("warning");
        document.querySelector("#warning").classList.remove("hidden");
    } else {
        

        console.log("success");
    }
});

