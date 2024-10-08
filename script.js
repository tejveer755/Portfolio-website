// GSAP Animations
gsap.registerPlugin(ScrollTrigger);
const animate = gsap.timeline();

animate.from(".homePage", {
  opacity: 0,
  y: -100,
  x: -70,
  duration: 0.6,
});

animate.from(".aboutMe", {
  opacity: 0,
  y: -150,
  x: 100,
  duration: 2,
  scrollTrigger: {
    trigger: ".aboutMe",
    scroller: "body",
    start: "top 40%",
    end: "top 40%",
    scrub: 3,
    // markers: true,
  },
});

const width = window.innerWidth;

function projectAnimate() {
  if (width > 830) {
    gsap.to(".projectPage .projectWrapper", {
      transform: "translate(-600%)",
      scrollTrigger: {
        trigger: ".projectPage",
        scroller: "body",

        scrub: true,
        pin: true,
        // markers: true,
      },
    });
  }
  console.log(width);
}

projectAnimate();

window.addEventListener("resize", projectAnimate);

// Reusable GSAP animation function
function animateBox(selector, topValue, sideValue, side, scaleValue) {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: selector === ".box1" ? ".skills" : selector,
      start: "top 100%",
      scrub: true,
      // scroller: ".skills"
      // markers: true,
      // pin: selector === ".box1", // Pin only for the first box
    },
    top: topValue,
    [side]: sideValue, // Dynamically set left or right based on the side argument
    scale: scaleValue,
    // markers: true,
  });
}

// Function to trigger animations based on screen width
function triggerAnimations() {
  if (width >= 1024) {
    // Desktop
    animateBox(".box1", "13%", "40%", "right", 1.3);
    animateBox(".box2", "14%", "25%", "left", 1.5);
    animateBox(".box3", "24%", "20%", "right", 1.58);
    animateBox(".box4", "52%", "18%", "left", 1.6);
    animateBox(".box5", "50%", "19%", "right", 1.89);
    animateBox(".box6", "70%", "50%", "left", 1.6);
    animateBox(".box7", "77%", "62%", "left", 1.29);
    animateBox(".box8", "10%", "42%", "left", 1.89);
    animateBox(".box9", "75%", "35%", "left", 1.3);
  } else if (width >= 768 && width < 1024) {
    // Tablet
    animateBox(".box1", "15%", "30%", "right", 1.2);
    animateBox(".box2", "16%", "20%", "left", 1.4);
    animateBox(".box3", "25%", "15%", "right", 1.5);
    animateBox(".box4", "55%", "22%", "left", 1.55);
    animateBox(".box5", "48%", "18%", "right", 1.75);
    animateBox(".box6", "72%", "45%", "left", 1.5);
    animateBox(".box7", "78%", "60%", "left", 1.25);
    animateBox(".box8", "12%", "40%", "left", 1.75);
    animateBox(".box9", "70%", "30%", "left", 1.2);
  } else {
    // Mobile
    animateBox(".box1", "35%", "25%", "right", 1.1);
    animateBox(".box2", "34%", "12%", "left", 1.3);
    animateBox(".box3", "43%", "10%", "right", 1.45);
    animateBox(".box4", "48%", "13%", "left", 1.45);
    animateBox(".box5", "55%", "12%", "right", 1.65);
    animateBox(".box6", "60%", "46%", "left", 1.4);
    animateBox(".box7", "65%", "15%", "right", 1.2);
    animateBox(".box8", "30%", "35%", "left", 1.7);
    animateBox(".box9", "65%", "22%", "left", 1.7);
  }
}

// Initial animation trigger on page load
triggerAnimations();

// Re-run animations on window resize
window.addEventListener("resize", triggerAnimations);

gsap.from(".socialMedia", {
  y: -50,
  x: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.6,
  scrollTrigger: {
    trigger: ".socialMedia",
    scroller: "body",
    start: "top 40%",
    end: "top 50%",
    scrub: 3,
    // markers: true,
    // pin: true,
  },
});

// Eye-following Cursor Effect
const pupils = document.querySelectorAll("span");

document.addEventListener("mousemove", (event) => {
  pupils.forEach((pupil) => {
    const eye = pupil.parentElement;
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(
      event.clientY - eyeCenterY,
      event.clientX - eyeCenterX
    );
    const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);

    const pupilX = distance * Math.cos(angle);
    const pupilY = distance * Math.sin(angle);

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});

// Event listener for the toggle button
const open_btn = document.querySelector(".menu-toggle");
const close_btn = document.querySelector(".close_btn");
const navbar = document.querySelector(".menu");

const hideNav = () => (navbar.style.right = "-70%");

open_btn.addEventListener("click", () => (navbar.style.right = "0"));
close_btn.addEventListener("click", close_nav());
