// Code your solution in this file!
const drivers = ["David", "Erick", "Elizabeth", "Tony"];
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2)
}
console.log(returnFirstTwoDrivers(drivers));


const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}
console.log(returnLastTwoDrivers(drivers));


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers);


let int2 = 4
function createFareMultiplier(int){
  return function multiplier (int2){
    return int * int2
  }
  
}
const fareMultiplier = createFareMultiplier(int2)
console.log(fareMultiplier(20))


const fareDoubler = fareMultiplier()






function selectDifferentDrivers(drivers, driver2){
  return driver2(drivers)
}
selectDifferentDrivers(drivers, returnFirstTwoDrivers())