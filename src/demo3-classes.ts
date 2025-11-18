class Employee 
{
    //static variable or class variable
    public static aS:number=10   
    public static bS:number=20

    //non-static variable or instance variable 
    public aNS:number=10
    public bNS:number=20

   


}


Employee.aS=3000
console.log(Employee.aS);
console.log(Employee.bS);


let emp1:Employee=new Employee()
let emp2:Employee=new Employee()

emp1.aNS=2000
emp1=emp2

console.log(emp1.aNS);
console.log(emp1.bNS);

console.log(emp2.aNS);
console.log(emp2.bNS);



