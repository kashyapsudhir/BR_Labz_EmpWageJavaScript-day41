console.log("Welcome to employee Wage Problem day41");
/*
//UC-1
const Is_Absent = 0;
let employeeCheck = Math.floor(Math.random()*10)%2;
if(employeeCheck == Is_Absent)
{
    console.log("Employee is Absent");
    return;


}
else
{
    console.log("Employee is Present")

}

//UC-2
let IS_FULL_TIME=1;
let IS_PART_TIME=2;
let EMP_RATE_PER_HR=20;
let empHrs=0;
let empWage=0;
let empInput=Math.floor((Math.random()*10)%3);

switch(empInput)
{
    case IS_FULL_TIME:
        console.log("Employee present full time");
        empHrs=8;
        break;
    case IS_PART_TIME:
        console.log("Employee present part time");
        empHrs=4;
        break;
    default:
        console.log("Employee is absent");
        empHrs=0;
}
empWage=EMP_RATE_PER_HR*empHrs;
console.log("Employee wage is:",empWage);



//UC-3

let IS_FULL_TIME=1;
let IS_PART_TIME=2;
let EMP_RATE_PER_HR=20;
let empHrs=0;
let empWage=0;
let empInput=Math.floor((Math.random()*10)%3);

switch(empInput)
{
    case IS_FULL_TIME:
        console.log("Employee present full time");
        empHrs=8;
        break;
    case IS_PART_TIME:
        console.log("Employee present part time");
        empHrs=4;
        break;
    default:
        console.log("Employee is absent");
        empHrs=0;
}
empWage=EMP_RATE_PER_HR*empHrs;
console.log("Employee wage is:",empWage);

//UC-4

let IS_FULL_TIME=1;
let IS_PART_TIME=2;
let EMP_RATE_PER_HR=20;
const MAX_WORKING_DAYS=20;
let empHrs=0,totalEmpHrs=0;
let empWage=0,totalEmpWage=0;
let empInput=Math.floor((Math.random()*10)%3);

function GetEmpHours(empInput)
{ 
    switch(empInput)
    {
        case IS_FULL_TIME:
            console.log("Employee present full time");
            return empHrs=8;
            
        case IS_PART_TIME:
            console.log("Employee present part time");
            return empHrs=4;
            
        default:
            console.log("Employee is absent");
            return empHrs=0;
    }
}
for(var day=0;day<=MAX_WORKING_DAYS;day++)
{
    let empInput=Math.floor((Math.random()*10)%3);
    empWage=EMP_RATE_PER_HR*GetEmpHours(empInput);
    console.log("Employee day "+day+" and wage is "+(empHrs*EMP_RATE_PER_HR))
    totalEmpHrs+=empHrs;
}
totalEmpWage=totalEmpHrs*EMP_RATE_PER_HR;
console.log("Total Employee wage is:",totalEmpWage);
*/
//UC-5

let IS_FULL_TIME=1;
let IS_PART_TIME=2;
let EMP_RATE_PER_HR=20;
const MAX_WORKING_DAYS=20;
const MAX_WORKING_HRS=160;
let day=0;
let empHrs=0,totalEmpHrs=0;
let empWage=0,totalEmpWage=0;
let empInput=Math.floor((Math.random()*10)%3);

function GetEmpHours(empInput)
{ 
    switch(empInput)
    {
        case IS_FULL_TIME:
            
            return empHrs=8;
            
        case IS_PART_TIME:
            
            return empHrs=4;
            
        default:
            
            return empHrs=0;
    }
}
while(day<=MAX_WORKING_DAYS && totalEmpHrs<=MAX_WORKING_HRS)
{
    let empInput=Math.floor((Math.random()*10)%3);
    empWage=EMP_RATE_PER_HR*GetEmpHours(empInput);
    totalEmpHrs+=empHrs;
    day++;
}
totalEmpWage=totalEmpHrs*EMP_RATE_PER_HR;
console.log("Total Employee wage for "+(day-1)+" days or "+(totalEmpHrs)+" working Hrs is:"+totalEmpWage);