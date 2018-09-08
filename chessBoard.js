function chessBoard(width, height) {
  var board = "";
  for(var i = 0; i < height; i++){
    for(var a = 0; a < width; a++){
      board += (a % 2) == (i % 2) ? "#" : " ";
    }
    board += "\n";
  }
  console.log(board);
}