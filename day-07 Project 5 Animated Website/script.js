let tl = gsap.timeline()

// gsap.from("nav h1", {
//   y: -20,
//   duration: 0.6,
//   delay: 0.5,
//   opacity: 0,
// })

tl.from("nav h1, nav .nav-links", {
  y: -20,
  duration: .8,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
})

tl.from(".hero-top-left h1, .hero-top-left p, .hero-top-left", {
  x: -20,
  duration: .8,
  opacity: 0,
  stagger: .2,
}, "-=.25")

tl.from(".hero-section .hero-top-right", {
  y: 20,
  duration: .4,
  opacity: 0,
}, "-=.25")

tl.from(".hero-bottom .brand-logo", {
  y: 30,
  duration: .8,
  opacity: 0,
  stagger: .2
}, "-=.25")


gsap.from(".service-top h1", {
  y: -80,
  duration: .8,
  opacity: 0,
  scrollTrigger: {
    trigger: ".service-top h1",
    scroller: 'body',
    start: "top 80%",
    end: 'top 65%',
    scrub: 2,
  }
})

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".card-container",
    scroller: 'body',
    start: "top 65%",
    end: 'top 40%',
    scrub: 2,
    // markers: true,
  }
})

tl2.from(".card.line1-left", {
  x: -100,
  duration: .8,
  opacity: 0,
  delay: .4,
  stagger: .2
})
tl2.from(".card.line1-right", {
  x: 100,
  duration: .8,
  opacity: 0,
  stagger: .2,
  // markers: true,
})

tl2.from(".card.line2-left", {
  x: -100,
  duration: 0.8,
  opacity: 0,
  stagger: 0.2,
  // markers: true,
});

tl2.from(".card.line2-right", {
  x: 100,
  duration: 0.8,
  opacity: 0,
  stagger: 0.2,
  // markers: true,
});








