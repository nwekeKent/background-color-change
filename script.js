var button = document.querySelector('button')
var body = document.querySelector('body')
var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','teal','biege','lightblue','black']

body.style.backgroundColor = 'teal'
button.addEventListener('click', changeBackground)

function changeBackground(){
var colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}
