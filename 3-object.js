

// const nameOfObject={
//     key:value,
//     key:value
// }

const person={
    name: 'Zartab M Nakhwa',
    age:34,
    blog:'www.codewithz.com',
    isMarried:true,
    letsCode(){
        console.log("Lets Start Coding")
    }
}

console.log(person)
person.letsCode()

// ------------Modify an Object 
// 1. Dot  Operator 

person.degree="Masters of IT"

console.log(person)

// 2. Square Brackets 
person["color"]="Black"

console.log(person)

let propertyName="city"
let propertyValue="Mumbai"

person[propertyName]=propertyValue

console.log(person)

propertyName="techStack"
propertyValue=["JS","Java","Big Data","Cloud"]

person[propertyName]=propertyValue

console.log(person)

const x={

}

const countries=["India","Russia","Sri Lanka"]
const capitals=["New Delhi","Moscow","Colombo"]

let counter=0
for(let country of countries){
    console.log(country)
    x[country]=capitals[counter]
    counter++;
}

console.log(x)