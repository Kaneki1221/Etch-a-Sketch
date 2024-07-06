function createGrid() {
  var gridSize = parseInt(document.getElementById('gridSizeInput').value);
  
  
  if (isNaN(gridSize) || gridSize <= 0 || gridSize >100) {
    alert("Please enter a valid grid size (1-100).");
    return;
  }


  var container = document.getElementById('container');
  container.innerHTML = '';

  var cellSize = 800 / gridSize; 
  var cellSizePercent = (cellSize / 800) * 100; 

  
  for (var i = 0; i < gridSize; i++) {
    for (var j = 0; j < gridSize; j++) {
      var newDiv = document.createElement('div');
      newDiv.className = "mydiv";
      newDiv.style.width = cellSizePercent + '%'; 
      newDiv.style.height = cellSizePercent + '%'; 
      
      newDiv.addEventListener('mouseenter', function(event) {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = randomColor;
      });

      container.appendChild(newDiv);
    }
  }
}
