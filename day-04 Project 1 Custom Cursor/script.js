let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (dets) => {
  // console.log(dets)
  // cursor.style.left = dets.x + "px";
  // cursor.style.top = dets.y + "px";
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out"
  })
})

imageDiv.addEventListener("mouseenter", (dets) => {
  cursor.innerHTML = 'View More'
  gsap.to(cursor, {
    scale: 4,
    duration: 1
  })
})

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = ''
  gsap.to(cursor, {
    scale: 1,
    duration: 1
  })
})




























