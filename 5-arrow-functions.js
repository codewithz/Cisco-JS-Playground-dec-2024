function sayHello(){
    console.log("Welcome to Arrow Functions")
}

sayHello();
//  =>  Fat Arrow
//  ->  Arrow

const myFirstArrow=()=>{
    console.log("Welcome to Arrow Functions")
}

myFirstArrow()

function sqaureTheNumber(number){
    return number*number;
}

(number)=>{
    return number*number;
}

// If the function have only one parameter, we can skip the ()
// 0 params -- ()
//1 param -- (optional)
//1+ params --()
number=>{
    return number*number;
}

// If the function have only one single statement 
// we can get rid of {} and return keyword 
// {} and return keyword will either be together or absent 

//  if the statment is console.log() -- it will be executed
// if the statement is value -- it will be returned 

number =>  number*number


function addMe(a,b,c){
    return a+b+c;
}


const addMe= (a,b,c)=>a+b+c;

function calculation(x,y,z){
    const a=x+3;
    const b=y+5;
    const c=z-b;

    return a+b+c;
}

 (x,y,z)=>{
    const a=x+3;
    const b=y+5;
    const c=z-b;

    return a+b+c;
}

