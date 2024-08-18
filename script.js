// GSAP Animations
gsap.registerPlugin(ScrollTrigger);
const animate = gsap.timeline();

animate.from("h2", {
  x: -30,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});

animate.from(".navbar li a", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});

animate.from('.homePage', {
  opacity: 0,
  y: -100,
  x: -70,
  duration: 0.6,
});

animate.from('.aboutMe', {
  opacity: 0,
  y: -150,
  x: 100,
  duration: 2,
  scrollTrigger: {
    trigger: '.aboutMe',
    scroller: "body",
    start: "top 40%",
    end: "top 50%",
    scrub: 3,
    // markers: true,
    // pin: true,
  }
});

gsap.to(".projectPage .projectWrapper", {
  transform: "translate(-520%)",
  scrollTrigger: {
    trigger: ".projectPage",
    scroller: "body",
    start: "top 0%",
    end: "top -200%",  // Increased end value to slow down the scroll
    scrub: 1,         // Increased scrub value for a smoother and slower effect
    pin: true,
    // markers: true,
  },
});
gsap.to(".box1", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top 0%",
    end: "top -100%",
    scrub: true,
    pin: true,
  },
  top: "14%",
  right: "35%",
  scale: 1.3,
});

gsap.to(".box2", {
  scrollTrigger: {
    trigger: ".box2",
    start: "top 0%",
    end: "top -100%",
    scrub: true,
  },
  top: "14%",
  left: "25%",
  scale: 1.5,
  // markers: true,
});

gsap.to(".box3", {
  scrollTrigger: {
    trigger: ".box3",
    start: "top 0%",
    end: "top -100%",
    scrub: true,
  },
  top: "20%",
  right: "20%",
  scale: 1.58,
});

gsap.to(".box4", {
  scrollTrigger: {
    trigger: ".box4",
    start: "top 0%",
    end: "top -100%",
    scrub: true,
  },
  top: "54%",
  left: "20%",
  scale: 1.6,
});

gsap.to(".box5", {
  scrollTrigger: {
    trigger: ".box5",
    start: "top 0%",
    end: "top -100%",
    scrub: true,
  },
  top: "50%",
  right: "25%",
  scale: 1.89,
});

gsap.to(".box6", {
  scrollTrigger: {
    trigger: ".box6",
    start: "top 0%",
    end: "top -100%",
    scrub: true,
  },
  top: "64%",
  left: "50%",
  scale: 1.6,
});

gsap.to(".box7", {
  scrollTrigger: {
    trigger: ".box7",
    start: "top 0%",
    end: "top -100%",
    scrub: true,
  },
  top: "77%",
  left: "62%",

  scale: 1.29,
});

gsap.to(".box8", {
  scrollTrigger: {
    trigger: ".box8",
    start: "top 0%",
    end: "top -100%",
    scrub: true,
  },
  top: "19%",
  left: "42%",
  scale: 1.89,
});
gsap.to(".box9", {
  scrollTrigger: {
    trigger: ".box9",
    start: "top 0%",
    end: "top -100%",
    scrub: true,
  },
  top: "69%",
  left: "35%",
  markers: true,
  scale: 1.3,
});


// animate.from('.connect', {
//   opacity: 0,
//   y: -150,
//   x: -50,
//   duration: 2,
//   scrollTrigger: {
//     trigger: '.connect',
//     scroller: "body",
//     start: "top 40%",
//     end: "top 50%",
//     scrub: 3,
//     // markers: true,
//     // pin: true,
//   }
// });

// animate.from(".socialMedia", {
//   y: -50,
//   x: -30,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.6,
//   scrollTrigger: {
//     trigger: '.socialMedia',
//     scroller: "body",
//     start: "top 40%",
//     end: "top 50%",
//     scrub: 3,
//     // markers: true,
//     // pin: true,
//   }
// });


// Eye-following Cursor Effect
const pupils = document.querySelectorAll("span");

document.addEventListener('mousemove', (event) => {
  pupils.forEach((pupil) => {
    const eye = pupil.parentElement;
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
    const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);

    const pupilX = distance * Math.cos(angle);
    const pupilY = distance * Math.sin(angle);

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});
