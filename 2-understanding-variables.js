console.log("------------------- var ------------------------")
// ReAssignment
// ReDeclaration
// No Block Scoped
function understandVar(){
    var name="Zartab"
    console.log(name)
    for(var i=1; i<=10;i++){
        console.log("I=",i)
    }

    console.log("Outside loop I=",i)
    var name="CodeWithZ"
    console.log(name)
}

understandVar()

// var -- let, const 
console.log("------------------- let ------------------------")
// ReAssignment
// No ReDeclaration
// Block Scoped
function understandLet(){
    let name="Zartab"
    console.log(name)
    for(let i=1; i<=10;i++){
        console.log("I=",i)
    }

    // console.log("Outside loop I=",i) ReferenceError: i is not defined
    name="CodeWithZ"
    console.log(name)
}

understandLet()

console.log("------------------- const ------------------------")

// No ReAssignment
// No ReDeclaration
// Block Scoped

const employeeCount=2000
console.log(employeeCount)
updatedCount=employeeCount+1000
console.log(updatedCount)

// employeeCount=updatedCount
// ^

// TypeError: Assignment to constant variable.
