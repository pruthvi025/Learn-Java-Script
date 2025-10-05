
console.log(2>5)
console.log(2<5)
console.log(2==5)

console.log("---------------------------------------------")

console.log("2"<5)
console.log(5>"2")// bydefault js recognize or we can say convert the number string to the Integer type and perform the conversion operation
console.log("---------------------------------------------")

console.log("a"<2)//it will not rise the error give output as false
console.log("---------------------------------------------")

console.log(null==0);//it will return false 
console.log(null>0);//it will return false 
console.log(null<0);//it will return false 
console.log(null>=0);//it will return true because it convert null to 0 

console.log("---------------------------------------------")



console.log(undefined==0);//it will return false 
console.log(undefined>0);//it will return false 
console.log(undefined<0);//it will return false 
console.log(undefined>=0);//it will return false 

//undefined → variable declared but not assigned (default).
// null → intentional absence of value (set manually).

let x;          // undefined
let y = null;   // null and type is object

if(x==undefined){
     console.log("a is undefined")
}

// strict check = "==="
//it will check strictly with value and datatype
