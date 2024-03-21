// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    const hqstreet = 42;
    if (pickup > 42) {
        let distanceFromHqInBlocks = pickup - hqstreet;
        return distanceFromHqInBlocks;
        
    } else {
        let distanceFromHqInBlocks = hqstreet - pickup;
        return distanceFromHqInBlocks;
    } 
}
distanceFromHqInBlocks()


function distanceFromHqInFeet(value){
    let distanceFromHqInFeet = distanceFromHqInBlocks(value) * 264;
    return distanceFromHqInFeet;
}
function distanceTravelledInFeet(start, end){
     if(start > 42){
        let distanceTravelledInFeet = (end -start) * 264;
        return distanceTravelledInFeet;
      
     } else {
        let distanceTravelledInFeet = (start - end) * 264;
        return distanceTravelledInFeet;
     }
}
// Function to calculate fare price based on distance traveled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    // First 400 feet are free
    if (distance <= 400) {
        return 0;
    }
    // Distance between 400 and 2000 feet
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    // Distance over 2000 feet
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    // Distance over 2500 feet
    else {
        return 'cannot travel that far';
    }
}