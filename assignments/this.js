/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global object binding 
* 2. new binding 
* 3. implicit binding 
* 4. explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let myOuterVariable = 21;

console.log(myOuterVariable);

// Principle 2

// code example for Implicit Binding

let food = {
    name: "rice",
    type: "grain",
    speak :function (){
        return `this ${this.name} is sooweet`; 
    },
}
console.log (food.speak(this));



// Principle 3

// code example for New Binding

function Mystuff(){
    this.name = 'soap';
}
let myThings = new Mystuff (name);

console.log(myThings.name);

// Principle 4

// code example for Explicit Binding