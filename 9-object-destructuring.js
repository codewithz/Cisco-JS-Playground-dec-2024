const state="Maharashtra"
const address={
    city:'Mumbai',
    state:'MH',
    pincode:400001,
    country:'India'
}

// Traditional Way
// const city=address.city
// const state=address.state
// const pincode=address.pincode
// const country=address.country

// Object Destructuring

const {city,state:st}=address
const {country,pincode}=address

console.log(city,'--',st,'--',state,'--',country,'--',pincode)

console.log("------------------- Function and Destructuring ----------------------")

function displayAddress(address){
    console.log(address.city)
    console.log(address.state)
    console.log(address.country)
    console.log(address.pincode)
}

displayAddress(address)
console.log("----------------------------------------------------")
function displayAddressWithDestructuredObject({state,city,pincode,country}){
    console.log(city)
    console.log(state)
    console.log(country)
    console.log(pincode)
}

displayAddressWithDestructuredObject(address)


// Component1 --> data [props--object [keysssssssssss]]--> Component2

// Component2({key1,key2,key3})