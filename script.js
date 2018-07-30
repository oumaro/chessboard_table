
var row = 0;
while(row < 17){
    var column = 0;
    while(column < 17){
        var square = document.createElement('div');
        if(row % 2 === 0){
            square.className = (column % 2 === 0) ? "white" : "black";
        }else{
            square.className = (column % 2 === 0) ? "black" : "white";
        }
  
    if(column === 0){
        square.className += " clear";
    }
        document.body.appendChild(square);
        column++;
    }
    row++;
}































