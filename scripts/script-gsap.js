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
      trigger: ".goal-title",
      start: "-100px center",
      end: "50px center",
      scrub: true,
      markers: false,
    },
  });
  
  tlQuete.to(".goal-title", {
    x:300,
    opacity: 1,
  });