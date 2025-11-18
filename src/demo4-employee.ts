class Employee 
{
    public id:number;
    public name:string;
    public static companyName:string;

    constructor(id1:number,name:string)
    {
        this.id=id1,
        this.name=name
    }

    public printEmployeeDetails():void{

        console.log(this.id);
        console.log(this.name);
    }
}

Employee.companyName="Cyient"

let emp1=new Employee(101,"jack")
let emp2=new Employee(102,"peter")

emp2.printEmployeeDetails()
console.log(emp1);




