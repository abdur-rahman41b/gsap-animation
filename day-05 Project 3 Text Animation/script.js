function breakTheText() {
  let h1 = document.querySelector(".title")
  let title = h1.textContent

  let splittedText = title.split(""); // split the text into an array of characters
  
  let clutter = ""
  
  // splittedText.forEach((el, idx) => {
  //   clutter += `<span class="char">${el}</span>`
  // })

  // let i = splittedText.length / 2

  splittedText.forEach((el, idx) => {
    if (idx % 2 == 0) {
      clutter += `<span class="a">${el}</span>`
    } else {
      clutter += `<span class="b">${el}</span>`
    }
  })

  h1.innerHTML = clutter
}

breakTheText()


gsap.from(".title .a", {
  display: "inline-block",
  y: 50,
  color: 'red',
  duration: .8,
  opacity: 0,
  stagger: 0.2
})
gsap.from(".title .b", {
  display: "inline-block",
  color: 'green', 
  y: -50,
  duration: .8,
  opacity: 0,
  stagger: -0.2
})









