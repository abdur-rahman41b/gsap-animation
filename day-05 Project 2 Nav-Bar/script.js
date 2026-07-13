let menuBtn = document.querySelector("#menu")
let closeBtn = document.querySelector("#close")
let full = document.querySelector("#full")

let tl = gsap.timeline()
tl.pause()

menuBtn.addEventListener("click", () => { 
  tl.play()
})

tl.to("#full", {
  right: 0,
  // ease: "power4.out",
  duration: 0.5
})

tl.from("#full h4", {
  x: 200,
  // delay: .4,
  duration: .4,
  stagger: 0.2,// helps nav links to come one by one
  opacity: 0
})

tl.from("#full i", {
  y: -80,
  opacity: 0,
})


closeBtn.addEventListener("click", () => {
  tl.reverse()
})













