for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 16; j++) {
        var newDiv = document.createElement('div');
        newDiv.className = "mydiv";
        var container = document.getElementById('container');
        container.appendChild(newDiv);
        newDiv.innerText=j;
    }
}
