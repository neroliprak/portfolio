// Animation de clavier
const textes = [
    "Développeuse web|",
    "UI / UX designer|",
    "Sympatoche|",
    "Néro|",
  ];
  
  let timelineText = gsap.timeline({ repeat: -1 });
  
  textes.forEach((text) => {
    let timeText = gsap.timeline({ repeat: 1, yoyo: true });
    timeText.to(".subtitle2", {
      duration: 1,
      text: text,
    });
    timelineText.add(timeText);
  });


//   Animation du titre "ma quête" (GAUCHE à DROITE)
  let tlQuete = gsap.timeline({
    scrollTrigger: {
      trigger: ".goal-title-desktop",
      start: "-100px center",
      end: "50px",
      scrub: true,
      markers: false,
    },
  });


  tlQuete.to(".goal-title-desktop", {
    x:800,
    opacity: 1,
  });

  let tlQuetePhone = gsap.timeline({
    scrollTrigger: {
      trigger: ".goal-title-phone",
      start: "-180px center",
      end: "50px",
      scrub: true,
      markers: false,
    },
  });


  tlQuetePhone.to(".goal-title-phone", {
    x:300,
    opacity: 1,
  });




tlApropos = gsap.timeline({
  scrollTrigger: {
    trigger: ".apropos-titre",
    start: "-600px center",
    end: "200px center",
    scrub: true,
    markers: true,
  },
});

tlApropos.from(".apropos-titre", {
  x: 1000,
  opacity: 1,
});

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apropos-photo",
    start: "-500px center",
    end: "50px center",
    scrub: true,
    markers: true,
  },
});

tl1.from(".apropos-photo, .apropos-texte", {
  y: 200,
  opacity:0,
});
