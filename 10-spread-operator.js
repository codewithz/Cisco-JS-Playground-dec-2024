// denoted by ...
// can be applied to an array or an object
//  array -- [...]
//object -- {...}

const first=[1,2,3]
console.log("First:",first)
const second=[4,5,6]
console.log("Second:",second)


const combined1=first.concat(second)
console.log("Combined:",combined1)
// [1,2,3,4,5,6,]

//[1,2,3,a,4,5,6,b]

const combined2=first.concat('a').concat(second).concat('b')
console.log("Combined 2:",combined2)

const output=[first,'a',second,'b']
console.log("Combined 3:",output)

const spreaded=[...first,'a',...second,'b']
console.log("Combined 4:",spreaded)

// [1, 2, 3, 'a',4, 5, 6, 'b' ]
// [ [ 1, 2, 3 ], 'a', [ 4, 5, 6 ], 'b' ]

//Problem Statment 
// const grades=["A","B","D","C"]
// console.log("Grades:",grades)
// const sorted=grades.sort()
// console.log("Sorted:",sorted)
// console.log("After Sorting, Original is :",grades)

// Solved
const grades=["A","B","D","C"]
console.log("Grades:",grades)
const sorted=[...grades,'Z','X','Y'].sort()
console.log("Sorted:",sorted)
console.log("After Sorting, Original is :",grades)

console.log("------------ Spread Operator with Objects ----------")

const personal={
    name:'Tom',age:25,gender:'M'
}

const professional={
    company:'CWZ',dept:'IT',position:'Developer'
}


const details={...personal,...professional,country:"India"}
console.log(details)
