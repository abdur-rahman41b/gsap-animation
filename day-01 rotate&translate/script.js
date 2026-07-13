// // from initial position to new position
// gsap.to("#box1", {
//   duration: 2,
//   x: 350,
//   delay: .5,
//   rotation: 180,
//   backgroundColor: 'orange',
//   borderRadius: '50%',
//   scale: 0.8,
//   repeat: -1, // -1 for infinite, 0 for no repeat, 1 for one repeat
//   yoyo: true, // reverse animation on repeat
// });


// // from new position to initial position
// gsap.from("#box2", {
//   duration: 2,
//   y: 300,
//   delay: 0.5,
//   borderRadius: '50%',
//   backgroundColor: 'purple',
//   scale: .5,
// })


// // gsap animation for multiple elements
// // from new position to initial position
gsap.from(".h1", {
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: .5,
})





// gsap animation with timeline
// in synchronous way // one after another
let tl = gsap.timeline()

tl.from(".title", {
  duration: .7,
  y: -20,
  opacity: 0,
  scale: .1,
  color: 'black'
})

tl.to("#box1", { // initial to new position
  duration: 2,
  x: 350,
  rotation: 180,
  backgroundColor: 'orange',
  borderRadius: '50%',
  scale: 0.8,
})

tl.from("#box2", { // new to initial position
  duration: 1.5,
  y: 350,
  rotation: 180,
  backgroundColor: 'orange',
  borderRadius: '50%',
  scale: 0.8,
})