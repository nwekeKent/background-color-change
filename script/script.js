var button = $('#btn');
var body = $('body');
var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'teal', 'biege', 'lightblue', 'black']

body.css({
    backgroundColor: 'teal'
})
button.click(changeBackground)

function changeBackground() {
    var colorIndex = parseInt(Math.random() * colors.length)
    body.css({
        backgroundColor: colors[colorIndex]
    });

    button.css({
        backgroundColor: colors[colorIndex]
    });
}