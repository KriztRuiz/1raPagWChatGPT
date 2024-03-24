document.getElementById('colorButton').addEventListener('click', function() {
    var button = document.getElementById('colorButton');
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    button.style.backgroundColor = randomColor;
});
