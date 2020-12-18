const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}

//Union Type TS
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    } 
    return result;
};

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Tim', 'Cat');
console.log(combinedNames);



class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const accounting = new Department('Accounting');

console.log(accounting);


//custom type
type Combinable = number | string;
type Conversion = 'as-number' | 'as-text';

function combined(
    input1: Combinable, 
    input2: Combinable,
    resultConversion: Conversion
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    } 
    return result;
};

const combinedAge = combined(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combined('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedName = combined('Tim', 'Cat', 'as-text');
console.log(combinedNames);

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}

//never returns anything
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occured!', 500);

//decorator
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Cat";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);


function addNumber(n1: number, n2: number) {
   return n1 + n2; 
}

//: void because no return statement
function printResults(num: number) {
    console.log('Result:' + num);
}

printResults(addNumber(5, 12));


//Inteface w extend
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

let user1: Greetable;

class Person1 implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

user1 = new Person1("Cat");

user1.greet("Hi there - I am");
console.log(user1);
