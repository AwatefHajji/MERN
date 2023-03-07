// GIVEN
// console.log(example);
// var example = "I'm the example!";
/*AFTER HOISTING BY THE INTERPRETER*/
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!
//console.log(example);
//let example = "I'm the example!";    
//'example' before initialization
/*snipped1*/
// console.log(hello);                                   
// var hello = 'world'; 
// console.log(hello); 
//var hello;
//console.log(hello); //  undefined  
// var hello = 'world'; assigned 'world' to the variable hello  
// console 'world'
/*snipped2*/
// var needle = 'haystack';// assigned 'haystack' to the variable needle
// test(); // appel the test function how will return the local variable needle 'magnet
// function test(){
//     var needle = 'magnet'; // assigned 'magnet' to the variable needle
//     console.log(needle); // prints 'magnet'
// }
// /*snipped3*/
// var brendan = 'super cool';// assigned 'super cool' to the variable brendan
// function print(){ // create function print but we dont appel the function so it will not execute
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);// 'super cool'
/*snipped4*/
var food = 'chicken';
console.log(food);
eat();
function eat(){
    
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// /*AFTER HOISTING BY THE INTERPRETER*/
// var food = 'chicken';
// console.log(food); // prints 'chicken'
// eat();
// function eat(){
//     var food;// hosted variable

//     food = 'half-chicken';
//     console.log(food); // prints 'half-chicken'
//     var food = 'gone'; // assigned food to 'gone
// }
/*snipped5*/
// var mean; //hosting function mean
// mean();// mean is not a function
 // console.log(food);// food not declared as a global variable
// var mean = function() {
//     var food; // hosting food variable
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }

// console.log(food); // not defined

/*snipped6*/
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
/*AFTER HOISTING BY THE INTERPRETER*/
// var genre;
// console.log(genre); // output undifined
// var genre = "disco";
// rewind();
// function rewind() {
//     var genre;// hosting genre variable
//     genre = "rock";
//     console.log(genre);// output rock
//     var genre = "r&b";
//     console.log(genre);// output r&b
// }
// console.log(genre);// output disco

/*snipped7*/
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
/*AFTER HOISTING BY THE INTERPRETER*/
// dojo = "san jose";
// console.log(dojo);// output san jose
// learn(); // appel function 
// function learn() {
//     var dojo;// hosting dojo variable
//         dojo = "seattle";
//         console.log(dojo); // output seattle
//         var dojo = "burbank";
//         console.log(dojo);// output burbank
//     }
//     console.log(dojo); // output san jose

/*snipped8*/
console.log(makeDojo("Chicago", 65));//output {name: chicago,students:65,hiring: true}
console.log(makeDojo("Berkeley", 0));//error output
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";// w can't do an assignment for a constant variable
    }
    return dojo;
}





