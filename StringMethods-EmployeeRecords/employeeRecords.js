var employees = []

var Joey = new EmployeeCon ("Joey","EntryDev","50k/year")

var Emma = new EmployeeCon ("Emma","Occupational Therapist", "80k/year")

var name3 = new EmployeeCon ("Jim","Salesman","50k/year")

function EmployeeCon(name,title,salary){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "Full-Time"
    function printEmployeeForm (name){
        console.log()
    }
}

employees.push(Joey,Emma,name3)

name3.status = "Part-Time"

console.log(employees)

