function createGrid() {
  var gridSize = parseInt(document.getElementById('gridSizeInput').value);
  if (isNaN(gridSize) || gridSize <= 0) {
    alert("Please enter a valid grid size (greater than 0).");
    return;
  }
}
var gridSize=16;


for (var i = 0; i < gridSize; i++) {
  for (var j = 0; j < gridSize; j++) {
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
