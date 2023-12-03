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
  x: 800,
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
  x: 300,
  opacity: 1,
});

// À PROPOS DE MOI
// apropos-titre-tablette

tlApropos = gsap.timeline({
  scrollTrigger: {
    trigger: ".apropos-titre-desktop",
    start: "-600px center",
    end: "200px center",
    scrub: true,
    markers: false,
  },
});

tlApropos.from(".apropos-titre-desktop", {
  x: 1000,
  opacity: 1,
});

tlAproposTablette = gsap.timeline({
  scrollTrigger: {
    trigger: ".apropos-titre-tablette",
    start: "-300px center",
    end: "300px center",
    scrub: true,
    markers: true,
  },
});

tlAproposTablette.from(".apropos-titre-tablette", {
  x: 800,
  opacity: 1,
});

tlAproposPhone = gsap.timeline({
  scrollTrigger: {
    trigger: ".apropos-titre-phone",
    start: "-300px center",
    end: "300px center",
    scrub: true,
    markers: true,
  },
});
tlAproposPhone.from(".apropos-titre-phone", {
  x: 500,
  opacity: 1,
});

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apropos-photo",
    start: "-650px center",
    end: "100px center",
    scrub: true,
    markers: false,
  },
});

tl1.from(".apropos-photo", {
  y: 200,
  opacity: 0,
});

tl1.from(".apropos-texte", {
  y: 500,
  opacity: 0,
});

// Animation du titre Mes projets

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projet",
    start: "top center",
    end: "300px center",
    scrub: true,
    markers: false,
  },
});

tl3.to(".competence", {
  y: 200,
  scale: 2.5,
  opacity: 1,
});

let tlCompetence = gsap.timeline({
  scrollTrigger: {
    trigger: ".projet",
    start: "-250px center",
    end: "300px center",
    scrub: true,
    markers: false,
  },
});

tlCompetence.to(".competence-desktop", {
  y: 200,
  scale: 5,
  opacity: 1,
});

// Savoir-être

let tlfantom1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mais-aussi-phone p",
    start: "-250px center",
    end: "200px center",
    scrub: true,
    markers: false,
  },
});

tlfantom1.to(".mais-aussi-phone p ", {
  x: -410,
  opacity: 1,
});
let tlfantom = gsap.timeline({
  scrollTrigger: {
    trigger: ".mais-aussi1",
    start: "-150px center",
    end: "400px center",
    scrub: true,
    markers: true,
  },
});

tlfantom.to(".mais-aussi1", {
  x:-1800,
  opacity: 1,
});

let tlfantom2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mais-aussi2",
    start: "-250px center",
    end: "200px center",
    scrub: true,
    markers: true,
  },
});

tlfantom2.to(".mais-aussi2", {
  x:-1550,
  opacity: 1,
});


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".animated-element-phone",
    start: "100px",
    end: "1000px ",
    scrub: true,
    markers: true,
  },
});
const wavePath =
  "M143.563 1C168.075 106.544 398.59 313.142 668.323 306.694C726.185 310.532 807.192 338.357 668.323 418.954C494.737 519.701 149.515 438.365 118.5 591.5C87.4846 744.635 594.787 635.931 668.323 693.5C741.86 751.069 696.837 924.414 162.573 899.659C118.372 913.433 56.492 1048.69 162.573 1106C295.173 1177.63 618.641 944.959 722.85 1088.22C806.218 1202.84 168.573 1320 0.5 1441";
tl.to(".animated-element-phone", {
  ease: "slow",
  motionPath: {
    path: wavePath,
    align: "self",
  },
});

const wavePathPlaneTablette =
  "M38.5018 1C82.4372 196.241 711.068 146.436 1194.54 134.509C1298.25 141.609 1443.44 193.081 1194.54 342.175C883.402 528.542 264.629 378.083 209.037 661.36C153.445 944.638 1062.73 743.55 1194.54 850.045C1326.34 956.541 1245.65 1277.2 288.033 1231.41C208.808 1256.89 97.8943 1507.1 288.032 1613.11C525.705 1745.62 1139.22 1494.48 1326 1759.5C1475.43 1971.52 339.754 1871.17 38.5019 2095C-12.7868 2123.32 -22.8312 2223.15 79 2335.5C206.289 2475.94 1092.8 2016.64 1326 2335.5C1512.56 2590.58 1576.66 2334.29 1705.5 2228";
  let tlPlaneTablette = gsap.timeline({
    scrollTrigger: {
      trigger: ".animated-element-tablette",
      start: "000px",
      end: "2800px ",
      scrub: true,
      markers: false,
    },
  });
  tlPlaneTablette .to(".animated-element-tablette", {
    ease: "slow",
    motionPath: {
      path: wavePathPlaneTablette,
      align: "self",
    },
  });