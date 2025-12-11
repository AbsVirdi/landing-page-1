ScrollSmoother.create({
  smooth: 1,
  effects: true,
});

gsap.from(".nav ul", {
  y: -10,
  duration: 1,
});

gsap.from(".hero-img img", {
  y: 100,
  duration: 1,
});

gsap.to(".scroll-up p", {
  y: -20,
  // rotate: -10,
  delay: 2,
  duration: 2,
  repeat: -1,
  yoyo: 2,
});

gsap.from(".hero div", {
  y: 50,
  opacity: 0,
  duration: 2,
  // scrollTrigger: {
  //   trigger: ".hero div",
  //   start: "top 90%",
  //   end: "top 85%",
  //   scrub: 4,
  //   // markers: true,
  //   // pin: true,
  // },
});

gsap.from(".intro img", {
  y: 200,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".intro img",
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
    // markers: true,
  },
});

gsap.from(".intro-text h1", {
  x: -200,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".intro-text h1",
    start: "top 90%",
    end: "top 60%",
    // markers: true,
    scrub: 2,
  },
});

gsap.from(".works .works-text-left", {
  x: -200,
  // opacity: 0,
  duration: 4,
  scrollTrigger: {
    trigger: ".works h1",
    start: "top 90%",
    end: "top 60%",
    // markers: true,
    scrub: 2,
  },
});

gsap.from(".works .works-text-right", {
  x: 200,
  // opacity: 0,
  duration: 4,
  scrollTrigger: {
    trigger: ".works h1",
    start: "top 90%",
    end: "top 40%",
    // markers: true,
    scrub: 2,
  },
});

// gsap.from(".showcase", {
//   y: 100,
//   opacity: 0,
//   duration: 2,
//   stagger: 4,
//   scrollTrigger: {
//     trigger: ".showcase",
//     start: "top 70%",
//     end: "top 30%",
//     markers: true,
//     scrub: 2,
//   },
// });

// var showcaseTL = gsap.timeline({
//   scrolltrigger: {
//     trigger: ".works-showcase",
//     delay: 0.5,
//     start: "top 50%",
//     end: "top 25%",
//     scrub: 2,
//   },
// });

// showcaseTL.from(".showcase", {
//   y: 20,
//   opacity: 0,
// });

// showcase gsap
gsap.from(".proj1", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".proj1",
    delay: 0.5,
    start: "top 50%",
    end: "top 25%",
    scrub: 2,
  },
});

gsap.from(".proj2", {
  y: 200,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".proj2",
    delay: 0.5,
    start: "top 50%",
    end: "top 25%",
    scrub: 2,
  },
});

gsap.from(".proj3", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".proj3",
    delay: 0.5,
    start: "top 50%",
    end: "top 25%",
    scrub: 2,
  },
});

gsap.from(".proj4", {
  y: 200,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".proj4",
    delay: 0.5,
    start: "top 50%",
    end: "top 25%",
    scrub: 2,
  },
});

gsap.from(".proj5", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".proj5",
    delay: 0.5,
    start: "top 50%",
    end: "top 25%",
    scrub: 2,
  },
});

// gsap.from(".ideation-topics", {
//   x: 600,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".ideation-topics",
//     start: "top 50%",
//     end: "top 20%",
//     scrub: 2,
//   },
// });

gsap.from(".idea1", {
  x: 400,
  duration: 4,
  scrollTrigger: {
    trigger: ".idea1",
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
});
gsap.from(".idea2", {
  x: 400,
  duration: 4,
  scrollTrigger: {
    trigger: ".idea2",
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
});
gsap.from(".idea3", {
  x: 400,
  duration: 4,
  scrollTrigger: {
    trigger: ".idea3",
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
});
gsap.from(".idea4", {
  x: 400,
  duration: 4,
  scrollTrigger: {
    trigger: ".idea4",
    start: "top 80%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.to(".marquee div", {
  x: -1000,
  duration: 1,
  ease: "linear",
  scrollTrigger: {
    trigger: ".marquee div",
    start: "top 80%",
    end: "top 10%",
    scrub: 2,
    markers: true,
  },
});

gsap.from(".feed-card img", {
  y: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".feed-card",
    delay: 0.5,
    start: "top 50%",
    end: "top 25%",
    scrub: 2,
  },
});

gsap.from(".feed-text", {
  y: 50,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".feed-text",
    delay: 0.5,
    start: "top 90%",
    end: "top 89%",
    scrub: 2,
  },
});

gsap.from("footer img", {
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: "footer img",
    start: "top 70%",
    end: "top 40%",
    markers: true,
    scrub: 2,
  },
});

gsap.from("footer div", {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: "footer div",
    start: "top 70%",
    end: "top 40%",
    // markers: true,
    scrub: 2,
  },
});

// gsap.from(".ideation-topics div", {
//   stagger: 0.5,
//   scrollTrigger: {
//     trigger: ".ideation-topics div",
//     start: "top 50%",
//     end: "top 20%",
//     scrub: 2,
//   },
// });

function displayTime() {
  //   var currentDate = new Date().toLocaleDateString();
  var currentTime = new Date().toLocaleTimeString();
  document.getElementById("time").innerHTML = `${currentTime}`;
}
setInterval(function () {
  displayTime();
}, 1000);
