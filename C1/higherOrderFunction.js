
//A function that returns a function

function createFunction(){
    function multiplyBy2(num){
        return num * 2;
    }
    return multiplyBy2(3);
}

//A function that accepts another function as an argument 

function addBy2(num){
    return num + 2 ;
}

function callFunc(func){
    return func(3);
}

console.log(callFunc(addBy2));

//A function that returns an object with a function as one of its properties
// example of closures

function easterEggs(){

    let eggs = 0; 

    return {
        collectEgg: function (){
            eggs++
        },
        reportEggs: function (){
            return eggs;
        }

    };
}

const game = easterEggs();

 game.collectEgg(); // eggs++
 game.collectEgg(); // eggs++

console.log(game.reportEggs()); 