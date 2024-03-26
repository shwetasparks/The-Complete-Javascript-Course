const cutPieces=function(fruit){
    return fruit*4;
}

const fruitProcessor= function (apples,oranges){
    const applePiece=cutPieces(apples)
    const orangesPieces=cutPieces(oranges);
    const juice=`Juice with ${applePiece} piece of apple and ${orangesPieces} piece of oranges`
    return juice;
}

console.log(fruitProcessor(2,3));




 