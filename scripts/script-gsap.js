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