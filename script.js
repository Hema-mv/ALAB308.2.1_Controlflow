console.log("**************************************************************************")
console.log("                        Part 1: Math Problems  ")
console.log("**************************************************************************")

const n1 = 20;
const n2 = 33;
const n3 = 2;
const n4 = 5;

//1. All Numbers are divisible by 5

const AllnumDiv5= (n1%2==0 && n2%2==0 && n3%2==0&& n4%2==0&& n5%2==0)
console.log("1. All numbers divisible by 5:", AllnumDiv5);
// 22. Check if the first number is larger than the last
const IsFirstlargerLast = n1>n4
console.log("2. First number is larger than the last:", IsFirstlargerLast);

// 3.Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.


const arithChainval = ((n2 - n1) * n3) % n4;
console.log("3. Result of the arithmetic chain:", arithChainval);

// 4. Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) 
// in other logic comparisons. Rename the variable as appropriate.
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnderarequal25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;
console.log("4. Number is Less that or equal to 25: ", isUnderarequal25);

const isValid = AllnumDiv5 && IsFirstlargerLast && isUnderarequal25 

if(isValid)
{
  console.log("5.The four numbers are valid according to the provided criteria: ${isValid}")
}

console.log("**************************************************************************")
console.log("                        Part 2: Math Problems  ")
console.log("**************************************************************************")


const fuelBudget=175;
const fuelCostPerGallon=3;
const distance=1500;


const fuelEfficiency = [
    { mph: 55, mpg: 30 },
    { mph: 60, mpg: 28 },
    { mph: 75, mpg: 23 }
];

let mph=55; let mpg=30;

let gallonsNeeded = distance / mpg
let totFuelCost = gallonsNeeded * fuelCostPerGallon;
let BudgetEnough = totalFuelCost <= fuelBudget;
let Totaltriptime = distance / mph;

console.log(`At ${mph} mph:`);
console.log(`- Gallons needed: ${gallonsNeeded}`);
console.log(`- Total fuel cost: $${totFuelCost}`);
console.log(`- Budget enough: ${BudgetEnough ? 'Yes' : 'No'}`);
console.log(`- Total trip time: ${travelTime} hours`);
console.log('-------------------------');


 mph=60;  mpg=28;

 gallonsNeeded = distance / mpg
 totalFuelCost = gallonsNeeded * fuelCostPerGallon;
 isBudgetEnough = totalFuelCost <= fuelBudget;
 Totaltriptime = distance / mph;

console.log(`At ${mph} mph:`);
console.log(`- Gallons needed: ${gallonsNeeded}`);
console.log(`- Total fuel cost: $${totalFuelCost}`);
console.log(`- Budget enough: ${isBudgetEnough ? 'Yes' : 'No'}`);
console.log(`- Total trip time: ${travelTime} hours`);
console.log('-------------------------');


 mph=75;  mpg=23;

 gallonsNeeded = distance / mpg
 totalFuelCost = gallonsNeeded * fuelCostPerGallon;
 isBudgetEnough = (totalFuelCost <= fuelBudget);
 Totaltriptime = distance / mph;

console.log(`At ${mph} mph:`);
console.log(`- Gallons needed: ${gallonsNeeded}`);
console.log(`- Total fuel cost: $${totalFuelCost}`);
console.log(`- Budget enough: ${isBudgetEnough ? 'Yes' : 'No'}`);
console.log(`- Total trip time: ${travelTime} hours`);
console.log('-------------------------');


console.log("**************************************************************************")
console.log("                        Part 3: Math Problems  ")
console.log("**************************************************************************")

