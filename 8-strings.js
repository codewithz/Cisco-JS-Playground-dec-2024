const name="Thomas"
const city="London"

const sentence=name+" lives in "+city
console.log(sentence)

// ""  | ''  | ``
const paragraph=` Variable by definition is how you store values which can be changed later on.
 
When dealing with variables in JavaScript you must have heard about the keyword var which was used extensively 
(as it was the only way to declare a variable in JavaScript before ES6) and in`

console.log(paragraph)
console.log("------------------- Interpolation--------------------")
const nameOfEmployee="Thomas"
const company="Code With Z"
const employeeCode="CWZ0001"

// Thomas works for Code With Z and his employee code is CWZ0001

const line=nameOfEmployee+" works for "+company+" and his employee code is "+employeeCode
console.log(line)

const iLine=`${nameOfEmployee} works for ${company} and his employee code is ${employeeCode}`
console.log(iLine)