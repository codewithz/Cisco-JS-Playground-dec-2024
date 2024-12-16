const numbers=[1,2,3,4,5,6,7,8,9,10]

const evenNumbers=[]

for(let index=0;index<=numbers.length;index++){
    const number=numbers[index]

    if(number%2==0){
        evenNumbers.push(number)
    }
}

console.log("Original:",numbers)
console.log("Even Numbers:",evenNumbers)


// Higher Order Function -- are when we pass one function to another 

// 1. What -- Filter -- Array.filter -- Higher Order Function -- it will accept a function as an input for filtering 

// 2. How -- Filter Even Number | Filter Odd Numbers | Filter All Prime Numbers 

function filterOdd(number){
    return number%2==1
}

const oddNumbers=numbers.filter(filterOdd)
console.log("Odd Numbers:",oddNumbers)

// Numbers  --> filter only those numbers %3 




const divisibleByThree=numbers.filter( (number)=>number%3==0)
console.log("Three:",divisibleByThree)