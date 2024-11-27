//JAVASCRIP REVIEW
// 0. PRINTING OUTPUT TO THE CONSOLE/TERMINAL (screen input/output device) or emulator.

console.log("Hello World!!!"); //uses the console object's log method to print Hello World !!!

// 1. variables - like a labeled jar, value is like the contents of the jar 

x = 123 // x is the identifier (name) and 123 is the value

camelCase = "used fpr most variables" //most variables shouldnhave twomwords not less or more if you can help it

TitleCase = "used for class names and module names"

TAX_RATE = 0.08 //all capitals is used for true constants like PI or TAX_RATE

// Data Types - name of shape/size of the data in memory

//basic/ primative date types

n = 123.456 //NUMBER
s = "" //STRING
boolean = true //logic and reasoning true/false 
d = new Date() // defaults to now and holds both date & time using unit timestamos internally ms 1/1/70

//complex data types 
list = [] //ARRY- an ordered list of values can be accessed by index
dict = {} //OBJECT- key value pairs like a dictionary whwre values can be pulled out by key/name

//EXPRESSIONS
// MATHMATICAL EXPRESSIONS
e = 6 * 7;

result = false || true //expression is true if either is true as || can be read as OR
console.log (result === true) // will print true as result will be true 

//logical expressions and logical operators && is AND, || is OR, ! is NOT

//COMPARISONS - LOGIC PT2
a = 123
b = 456
a == b // equal value - loose e.g "123" == 123 is true
a === b // same value and same data type - exact 
a < b // less than
a > b // greater than
a >= b //greater than or equal to
a <= b //less than or equal to
a != b // not equal to

//4. CONDTIONAL STATEMENTS - IF/ELSE/ELSE IF, OR SWITCH/CASE/BREAK
allGood = true
if (allGood) {
    console.log("awesome")
} else {
    console.log("awww")
}
limit = 10

//5. LOOPS - FOR, WHILE, DO WHILE
for (let i = 0; i < limit; i++) {
    console.log(i);
}

fruit = ["apple", "banana", "cherry"]
for (let fruitIndex = 0; fruitIndex < fruit.length; fruitIndex++) {
    console.log(fruitIndex, fruit[fruitIndex]);
}

//6. FUNCTION DEFENITIONS - CODE ORGANIZATION PT 1 - NAME BLOCKS OF CODE
function add (a,b) { // a and b are postional input parameters recieve
    return a+b; // return a single value
}
console.log(add(6,7)) // 13 because we passed to literal numbers as arguments

const multiply = (a,b) => a * b; // assign a indentifier to 