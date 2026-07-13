window.addEventListener('wheel', function (dets) {
  //console.log(dets.deltaY)  // -ve scroll up +ve scroll down
  
  if (dets.deltaY > 0) {
    // console.log('scrolling up')
    gsap.to('.marque', {
      transform: 'translateX(-100%)',
      duration: 4,
      ease: 'none',
      repeat: -1
    })

    gsap.to('.marque img', {
      rotate: 180
    })


  } else {
    gsap.to('.marque', {
      transform: 'translateX(0%)',
      duration: 4,
      ease: 'none',
      repeat: -1
    })

    gsap.to(".marque img", {
      rotate: 0,
    });
  }
})



























