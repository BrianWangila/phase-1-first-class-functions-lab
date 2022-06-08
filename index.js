// Code your solution in this file!
const drivers = ["David", "Erick", "Elizabeth", "Tony"];
const returnFirstTwoDrivers = function(drivers){
  let truck = drivers.slice(0, 2)
  return truck
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






function selectDifferentDrivers(drivers, cb){
  return cb(drivers)
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers()))