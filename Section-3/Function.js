function logger() {
   console.log("my name is shweta");
}

logger(); //invoke/call/running function
logger();
logger()

function fruitProcessor(apple,oranges){
    console.log(apple,oranges);
    const juices=`Juices with ${apple} apples a ${oranges} oranges `
    return juices
}
const get=fruitProcessor(2,4)
console.log(get)


const appleAndOrange=fruitProcessor(3,5);
console.log(appleAndOrange);
