let str1="hello "
let str2=" pruthvi"
console.log(str1+str2)

console.log("1"+5)
console.log("1"+5+3+7)//here it will also not added it will treated as string and concatinate as =1537 because first element is String
console.log(3+1+"3")//here it will add first two number because it is type of integer and string come so after addition it concatinate
console.log(3+1+"3"+5+3)// we have seen that if element is come as string then other element is considered as string and then it will concatinate it

console.log("------------------------------------------------------");

//prefix and postfix

let a=2
let b=++a
console.log(a,b)//firstly increment and then print 

let x=4
let y=x++
console.log(x,y)//firstly print then increament

