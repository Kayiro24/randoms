let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let btnOpen = document.querySelectorAll(".show-modal");
let btnClose = document.querySelector(".close-modal");

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

const showModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

for(let i=0; i<btnOpen.length; i++){
    btnOpen[i].addEventListener("click", showModal);
};

btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal();
    }
});