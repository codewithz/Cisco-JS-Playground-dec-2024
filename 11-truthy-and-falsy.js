// Value will be considered falsy -- evaluate to false 

// 1. false [boolean false]
// 2. 0 [the number zero]
// 3. "" or  '' [Empty String]
// null
// undefined
// NaN [Not a  Number]



function testTruthyOrFalsy(value){
    if(value){
        console.log("Truthy")
    }else{
        console.log("Falsy")
    }
}

let numberZero=0
testTruthyOrFalsy(numberZero)

let number100=100
testTruthyOrFalsy(number100)

let emptyString=''
testTruthyOrFalsy(emptyString)

let filledString='a'
testTruthyOrFalsy(filledString)

let numbers=[]
testTruthyOrFalsy(numbers)

let bFalse=false
testTruthyOrFalsy(bFalse)

let object={}
testTruthyOrFalsy(object)


// const data=null --> will ne populated in backend -- API will be called and data will be filled 

// if(data){
//     display table
// }else{
//     display a loader
// }

