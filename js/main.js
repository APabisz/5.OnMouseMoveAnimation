document.addEventListener("DOMContentLoaded", () => {
  const animation = new Animation(".animation__img")

  document.addEventListener("mousemove", animation.listenCursorMove)
})
