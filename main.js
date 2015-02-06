var fizzCounter = 0;
var buzzCounter = 0;
var fizzBuzzCounter = 0;

function fizzBuzz(){
  for (var i = 1; i<=100; i++){
    if(i % 3 === 0){
      if(i % 5 === 0){
        fizzBuzzCounter++;
        console.log(i + " FizzBuzz");
        continue;
      } 
        fizzCounter++;
        console.log(i + " Fizz");
    };
        
    if(i % 5 === 0){
        buzzCounter++;
        console.log(i + " Buzz");
    };
  };
}
fizzBuzz();
console.log("Fizz Count = " + fizzCounter);
console.log("Buzz Count = " +  buzzCounter);
console.log("FIZZBUZZ Count = " + fizzBuzzCounter);

