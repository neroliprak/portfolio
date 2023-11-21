document.addEventListener("DOMContentLoaded", function () {

    /* Mode small */
  
    var menu = document.querySelector(".menu");
    var navLinks = document.querySelector("ul");
  
  
    /* Lorsque je clique sur le menu, cela permet d'afficher et quand on reclique de le faire disparaître */
    menu.addEventListener("click", function (e) {
      navLinks.classList.toggle("small");
    });
  
  });
  