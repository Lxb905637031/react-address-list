document.documentElement.style.fontSize = (document.documentElement.clientWidth / 37.5) + 'px'

document.documentElement.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1) {
      e.preventDefault()
  }
})

window.addEventListener('resize', () => {
  document.documentElement.style.fontSize = (document.documentElement.clientWidth / 37.5) + 'px'
}, false)