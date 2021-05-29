class Animation {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector)
  }

  listenCursorMove = (e) => {
    const { clientX, clientY } = e
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    const moveX = -(clientX - centerX)
    const moveY = -(clientY - centerY)

    this.elements.forEach((el) => this.moveElement(el, moveX, moveY))
  }

  moveElement = (el, posX, posY) => {
    const ratioX = el.getAttribute("ratioX")
    const ratioY = el.getAttribute("ratioY")

    el.style.transform = `translate(${posX * ratioX}px, ${posY * ratioY}px)`
  }
}
