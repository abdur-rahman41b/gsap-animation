// Scroll Trigger Animation

gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
})
gsap.from("#page2 #box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
  backgroundColor: 'purple',
  scrollTrigger: {
    trigger: "#page2 #box",
    start: "top 60%", // top se 60%
    end: "top 30%",
    scrub: 2,
    markers: true,
  }
})
gsap.to("#page3 #experience", {
  transform: "translateX(-31%)",
  scrollTrigger: {
    trigger: "#page3", 
    scroller: "body", // locomotive-scroll
    markers: true,
    start: "top 0%", // top se 60%
    end: "top -150%",
    scrub: 3,
    pin: true // pin the section until it ends its animation
  }
})