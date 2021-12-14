const divs = document.getElementsByTagName('div')
const winWidth = window.innerWidth
const winHeight = window.innerHeight

for ( let i = 0; i < divs.length; i++ ) {

    const thisDiv = divs[i]

    const randomTop = getRandomNumber(0, winHeight)
    const randomLeft = getRandomNumber(0, winWidth)

    thisDiv.style.top = randomTop +"px"
    thisDiv.style.left = randomLeft +"px"

}

function getRandomNumber(min, max) {

  return Math.random() * (max - min) + min

}