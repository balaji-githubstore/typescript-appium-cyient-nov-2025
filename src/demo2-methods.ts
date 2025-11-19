import {consolidatedFile} from "./demo1-types"

let valueZ:consolidatedFile

valueZ={file2:"",files1:""}

valueZ={
    "files1":"path1",
    "file2":"path2"
}


function add(a:number,b:number,c:number=2,d?:string):number{
    return a+b+c;
}

// named parameter 
function add_numbers({num1,num2}:{num1:number,num2:number}):number{
    return num2+num1;
}

//async await 

console.log(add(1,1,4));

console.log(add_numbers({num1:12,num2:32}));


async function getNumber():Promise<number>{
    //opening excel 
    return 10;
}


async function getOutput() {
    console.log(await getNumber()); 
}


getOutput()