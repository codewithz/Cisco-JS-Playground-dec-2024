console.log("Before")

const user=getUser(1001)
console.log(user)
console.log("After")


function getUser(id){
    // setTimeout(executesThisArrowFunction,afterWaitingForThisManyMilliseconds)
    setTimeout(()=>{
        console.log("Reading Id from Database ....")
        return {id:id,gitUser:'codewithz'}
    },2000)
}


// Solutions 

// 1. Callback
// 2. Promise
// 3. promise with async await