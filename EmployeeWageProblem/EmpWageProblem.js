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

//UC-6
let IS_FULL_TIME=1;
let IS_PART_TIME=2;
let EMP_RATE_PER_HR=20;
const MAX_WORKING_DAYS=20;
const MAX_WORKING_HRS=160;
let day=0;
let empHrs=0,totalEmpHrs=0;
let empWage=0,totalEmpWage=0;

let empDailyWageArray=new Array();


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
    empDailyWageArray.push(computeEmpDailyWage(empHrs));
    day++;
}
function computeEmpDailyWage(empHrs)
{
    return empHrs*EMP_RATE_PER_HR;
}
console.log("employee daily wage is :\n"+empDailyWageArray);
totalEmpWage=totalEmpHrs*EMP_RATE_PER_HR;
console.log("Total Employee wage for "+(day-1)+" days or "+(totalEmpHrs)+" working Hrs is:"+totalEmpWage);
*/
//UC-7

let IS_FULL_TIME=1;
let IS_PART_TIME=2;
let EMP_RATE_PER_HR=20;
const MAX_WORKING_DAYS=20;
const MAX_WORKING_HRS=160;
let day=0;
let empHrs=0,totalEmpHrs=0;
let empWage=0,totalEmpWage=0;

let empDailyWageArray=new Array();


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
    empDailyWageArray.push(empWage);
    day++;
}
console.log("employee daily wage is :\n"+empDailyWageArray);
totalEmpWage=totalEmpHrs*EMP_RATE_PER_HR;
console.log("Total Employee wage for "+(day-1)+" days or "+(totalEmpHrs)+" working Hrs is:"+totalEmpWage);


let total=0;
function getTotalWage(dailyWage)
{
    total+=dailyWage;
}
empDailyWageArray.forEach(getTotalWage);
console.log(" Total Wage using Array forEach helper func: "+total);


function getTotalWageUsingReduce(dailyWage,totalWage)
{
    return totalWage+=dailyWage;
}
console.log(" Total Wage using Array reduce helper func : "+empDailyWageArray.reduce(getTotalWageUsingReduce,0));


let dayCount=0;
function mapDayWithWage(dailyWage)
{
    dayCount++;
    return "Day:"+dayCount+" Wage:"+dailyWage;
}
let mapDayWithWageArray=empDailyWageArray.map(mapDayWithWage);
console.log("Show the Day along with Daily Wage using Array map helper function\n");
console.log(mapDayWithWageArray);


function showFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArray=mapDayWithWageArray.filter(showFullTimeWage);
console.log("Show Days when Full time wage:");
console.log(fullDayWageArray);

function findFirstFullTime(dailyWage)
{
    return dailyWage.includes("160")
}
console.log(" first occurrence of Full Time Wage :\n"+mapDayWithWageArray.find(findFirstFullTime));
console.log(" Check if Every Element of Full Time Wage is truly holding Full time wage:\n"+fullDayWageArray.every(findFirstFullTime));


function isAnyPartTime(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("Check if there is any Part Time Wage :\n"+mapDayWithWageArray.some(isAnyPartTime));


function howManyDaysWorked(days,dailyWage)
{
    if(dailyWage>0)  
        return days=days+1
    else
        return days;
}
console.log(" How many days employee worked");
console.log(empDailyWageArray.reduce(howManyDaysWorked,0));