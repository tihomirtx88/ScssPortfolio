// ----------call---------
// let employy1 = { firstName: "pesho", lastName: "peshistiq"};
// let employy2 = { firstName: "asen", lastName: "asenov"};

// function invate(greeting1, greeting2){
//     console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
// }

// invate.call(employy1, "Hello", "How are you");
// invate.call(employy2, "Hello master", "From where you are");

// --------aply==========
// invate.apply(employy1, ["Hello","How are you"]);

//-------Bind----------
// let invatedEmplooy = invate.bind(employy1);
// let invatedGuest = invate.bind(employy2);

// invatedEmplooy("Hello","How are you");
// invatedGuest("Hello buster", "Tell me about bind");

// ------slice method
// let array = [1,2,3,4,5,6];
// let result = array.slice(0,2);
// console.log(result);
// let result1 = array.slice(2,5);
// console.log(result1);
// let result2 = array.slice(3);
// console.log(result2);

//---------splice----
// let numbers = [1,2,4,5,6,7,8];
// let numbers1 = [1,2,4,5,6,7,8];
// let numbers2 = [1,2,4,5,6,7,8];

// let coppy = numbers.splice(0, 2);
// console.log(coppy);
// let coppy1 = numbers1.splice(3);
// console.log(coppy1);
// let coppy2 = numbers2.splice(0,1,"a","b","c");
// console.log(coppy2);
// console.log(numbers2);

// ----------First class function------
// const handle  = () => console.log("i am just reused");
// const result = document.addEventListener("click", handle);

//First order dunction ---------
// const firstOrder = () => console.log("i am first order function");

// -----High order function-------
// const firstOrder1 = () => console.log("i am first order function");
// const highOrderFunction = (ReturFirstOrderFunction) => ReturFirstOrderFunction();
// highOrderFunction(firstOrder1);

// ------Curring function-----
const multiArgsFunction = (a,b,c) => a + b + c;
const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
console.log(curryUnaryFunction(1));
console.log(curryUnaryFunction(1)(2));
