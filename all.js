;(function() {
  const secondHand = document.querySelector('.second-hand')
  const minsHand = document.querySelector('.min-hand')
  const hourHand = document.querySelector('.hour-hand')

  function getTime() {
    const now = new Date()

    const seconds = now.getSeconds()
    const secondSDegrees = (360 / 60) * seconds + 180
    secondHand.style.transform = `rotate(${secondSDegrees}deg)`

    const mins = now.getMinutes()
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6
    minsHand.style.transform = `rotate(${minsDegrees}deg)`

    const hour = now.getHours()
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 270
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
  }

  setInterval(getTime, 1000)
})()
