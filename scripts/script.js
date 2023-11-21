const clickCercle = document.querySelector("button");
const textApp = document.querySelector(".version-print");
const persoGandalf1 = document.querySelector(".gandalf1");
const persoGandalf2 = document.querySelector(".gandalf2");

let persoGandalfActif = false;

clickCercle.addEventListener("click",function(){
    textApp.classList.toggle("display-none");
    if (persoGandalfActif === false){
        persoGandalf1.classList.add("display-none");
        persoGandalf2.classList.remove("display-none");
        persoGandalfActif = true;
    }
    else{
        persoGandalf1.classList.remove("display-none");
        persoGandalf2.classList.add("display-none");
        persoGandalfActif = false;
    }
    
})


