// primitive datatype

// all primitive datatype is call by value. 

// String,number,boolean,null,undefined,symbol,bigInt

//symbol= is used to make veriable as unique 

const id=Symbol("123")
const anotherId=Symbol("123")

console.log(id)
console.log(anotherId)
console.log(id===anotherId)//print false because its seen as same but not actually

// here in above it will print different id  even though we assigned same value because we used symbol


//Reference Data type(non primitive)

//all non primitive datatype is call by reference

//Array,object,functions




//note:- JavaScript is a dynamically typed language.
//Variables can hold values of different types: You can assign a number to a variable,
//  then later reassign a string or an object to the same variable without any explicit type declarations. 
// The JavaScript engine infers the type based on the value assigned at that moment