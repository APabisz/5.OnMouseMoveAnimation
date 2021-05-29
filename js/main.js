document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animation__img")
  console.log(elements)

  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    elements.forEach((el) => {
      const ratioX = el.getAttribute("ratioX")
      const ratioY = el.getAttribute("ratioY")
      const moveX = -((clientX - centerX) * ratioX)
      const moveY = -((clientY - centerY) * ratioY)

      el.style.transform = `translate(${moveX}px, ${moveY}px)`
    })
  })
})
