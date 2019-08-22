/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global object binding - when "this" keyword is used outside of a function scope.
* 2. new binding - when "this" keyword is used to instantiate a new object.
* 3. implicit binding - when "this" keyword is used implicitly(as the name implies) within a function scope level.
* 4. explicit binding - Using 'call' and 'apply' method to explicitly call constructor objects.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let myOuterVariable = 21;

console.log(this);

// Principle 2

// code example for Implicit Binding

let food = {
    name: "rice",
    type: "grain",
    speak :function (){
        return `this ${this.name} is sooweet`; 
    },
}
console.log (food.speak());



// Principle 3

// code example for New Binding

function Mystuff(){
    this.name = 'soap';
}
let toiletries = new Mystuff ();

console.log(toiletries.name);

// Principle 4

// code example for Explicit Binding

function itsOladimeji(name, age){

    return `Hi, my name is ${name}, and i am ${age} years old`
}

itsOladimeji.call('itsDurotolu', 'duro', 29);
itsOladimeji.apply('itsDurotolu', ['duro', 29]);
var copyOfOladimeji = itsOladimeji.bind('itsDurotolu');

console.log (itsOladimeji('duro',29));
console.log(copyOfOladimeji('duro', 29));