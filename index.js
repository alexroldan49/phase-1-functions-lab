// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return blocks > 42 ? blocks - 42 : 42 - blocks;
} distanceFromHqInBlocks(43)

function distanceFromHqInFeet (street) {
    return distanceFromHqInBlocks(street)*264
} distanceFromHqInFeet(40);

function distanceTravelledInFeet(begin, end) {
    return begin > end ? (begin-end)*264 : (end-begin)*264;   
} distanceTravelledInFeet(42, 35)

function calculatesFarePrice(begin, end){
    if (distanceTravelledInFeet(begin, end) < 400){
        return 0
    }else if (distanceTravelledInFeet(begin, end) > 2000 && distanceTravelledInFeet(begin,end) < 2500){
        return 25
    }else if (distanceTravelledInFeet(begin,end) > 400 && distanceTravelledInFeet(begin,end) < 2000){
        return 2.56
    }else (distanceTravelledInFeet(begin,end) > 2500) 
        return 'cannot travel that far'
}
// 2 cents per foot, no charge first 400 feet, flat rate 2000-2500 feet $25