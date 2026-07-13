let tl = gsap.timeline({scrollTrigger: {
  trigger: ".two",
  start: "0% 95%",
  end: "50% 50%",
  scrub: 2,
  // markers: true,
}
})

// to move fanta
tl.to("#fanta", {
  top: "115%", // going towards bottom 115%
  left: "4%",
  scale: 0.8,
  zIndex: 4,
  ease: "power2.out",
}, "fanta-orange-leaf");

tl.to("#orange-slice", {
  top: "142%",
  left: "24%",
  scale: 0.9,
  zIndex: 2,
}, "fanta-orange-leaf");

tl.to("#oranges", {
    // rotation: "360",
    top: "160%",
    left: "58%",
    scale: 0.7,
    zIndex: 2,
  },
  "fanta-orange-leaf"
);

tl.to("#leaf2", {
  rotation: "410",
  top: "112%",
  left: "80%",
  scale: .6,
}, "fanta-orange-leaf");


tl.to("#leaf1", {
  rotation: "100deg",
  top: "112%",
  left: "2%",
  scale: .8,
}, "fanta-orange-leaf");








let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "50% 50%",
    scrub: 2,
    // markers: true,
  },
});

tl2.from("#stwbry", {
  rotation: "-60deg",
  top: "-20%",
  left: "0%",
  scale: .5,
  opacity: 0,
}, "bottom-all");

tl2.from("#cocacola", {
  rotation: "-20deg",
  top: "-11%",
  left: "0",
  scale: 0.5,
  opacity: 0,
}, "bottom-all");

tl2.from("#lemon", {
    rotation: "60deg",
    top: "-20%",
    right: "0%",
    scale: 0.5,
    opacity: 0,
}, "bottom-all");

tl2.from("#pepsi", {
    rotation: "20deg",
    top: "-11%",
    right: "0",
    scale: 0.5,
    opacity: 0,
}, "bottom-all");



tl2.to("#orange-slice", {
  top: '206%',
  left: '41%',
  rotation: "195deg",
  scale: 1.1,
}, "bottom-all");

tl2.to("#fanta", {
  top: '204.5%',
  left: "30%",
  scale: .74
}, "bottom-all");
  


