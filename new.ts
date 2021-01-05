//Custom Object Type 

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}