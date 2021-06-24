let chessPiece = "bishop";

switch (chessPiece.toLowerCase()) {
  case "king":
    console.log("Just one step to any direction");
    break;
  case "queen":
    console.log("Any direction, except in L");
    break;
  case "bishop":
    console.log("diagonals");
    break;
  case "pawn":
    console.log("one step ahead or diagonal");
    break;
  case "horse":
    console.log("moviment in L");
    break;
  default:
    console.log("Peça inválida");
    break;
}