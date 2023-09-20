gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro", // Start the animation when #box1 enters the viewport
    // markers: true,
    scrub: 1,
    start: "top 0%",
    end: "bottom 0%",
    pin: true
  },
});


timeline.to(".intro__text__heading1", {
  opacity: 0,
  duration: 0.1
});
timeline.to(".intro__scroll", {
  opacity: 0,
  display: 'none',
  duration: 0.1
}, "-=0.1");
timeline.to(".header", {
  opacity: 0,
  duration: 0.1
}, "-=0.1");
timeline.to(".intro__text__heading2", {
    opacity: 1,
    duration: 0.1
}, "-=0.05");
timeline.to(".intro__text__heading2", {
    opacity: 0,
    duration: 0.1
});
timeline.to(".intro__text__heading3", {
    opacity: 1,
    duration: 0.1
}, "-=0.05");

// fade out 'this is my portfolio'
gsap.to(".intro__text__heading3", {
    scrollTrigger: {
    trigger: ".projects__heading", 
    scrub: 1,
    start: "top 60%",
    end: "bottom 65%",
  },

  color: 'rgba(0,0,0,0)',
  duration: 0.1
})
// end fade out 'this is my portfolio

gsap.to('.projects__heading', {
    scrollTrigger: {
    trigger: ".projects__heading", 
    scrub: 1,
    start: "top 30%",
    end: "bottom 10%"
  },

  opacity: 1,
  duration: 1
})

gsap.to('.projects__heading', {
    scrollTrigger: {
    trigger: ".projects__images", 
    scrub: 1,
    start: "top 0%",
  },

  color: 'rgba(0,0,0,0)',
  duration: 1
})

// contact pop up

var timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    pin: true,
    start: "top 0",
    end: "bottom 0",
    scrub: "1",
    markers: true
  },

});

timeline3.to(".about__text", {
  opacity: 1,
  duration: 1
})
timeline3.to(".about__text", {
  opacity: 0,
  translateX: -300,
  duration: 1
})
timeline3.to(".contact-wrapper", {
  opacity: 1,
  translateX: 0,
  duration: 1
})
timeline3.from(".footer", {
  opacity: 0,
  translateY: 100,
  duration: 1
}, "-=0.8")








