let a:number=10
a=20
a=20.3

console.log(a);

let myName:string="Balaji"

console.log(myName)
console.log(myName.toUpperCase())

let check:boolean=true


// not recommended 
let value:any=3343434
value="jack"
value=true

value="sdds"
// value=45
// console.log(value.toUpperCase())




//safer than any type bcs we need to type check 
let value1:unknown
value1=3455

if(typeof value1==="number")
{
    console.log(value1+value1);
}


let value2:undefined

let value3: string | undefined = undefined
value3="bala"


let employee:{
    "id":number,
    "name":string,
    "salary":number[]
}

employee={"id":34,"name":"jack","salary":[4545,88]}

console.log(employee.id)
console.log(typeof employee);

// create an object type for appium --> platformName=android, devicename=oneplus,noreset=true

// type alias 

// let numberOrString1: number | string 


//creating your own datatype
type numberOrStringType=number | string 

let z:numberOrStringType 

type demoFile1={
"files1":string
}

type demoFile2={
    "file2":string
}


export type consolidatedFile=demoFile1 & demoFile2




