for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 16; j++) {
        var newDiv = document.createElement('div');
        newDiv.className = "mydiv";
        var container = document.getElementById('container');
        container.appendChild(newDiv);
        
    }
}
document.querySelectorAll('.mydiv').forEach(item => {
    item.addEventListener('mouseenter', event => {
      const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      event.target.style.backgroundColor = randomColor;
    });
  });
  
