//Custom Object Type 

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

//Return Types / Void

function addNumber(n1: number, n2: number) {
   return n1 + n2; 
}

//: void because no return statement
function printResults(num: number) {
    console.log('Result:' + num);
}

printResults(addNumber(5, 12));



//TS this keyword

class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department ' + this.name);
    }
}

const accounting = new Department('Accounting');

console.log(accounting);

accounting.describe();




//TS Autobind Decorator

function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunc = originalMethod.bind(this);
      return boundFunc;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);
