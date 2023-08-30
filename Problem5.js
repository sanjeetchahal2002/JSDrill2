// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

function getOldCars(cars) {
    const oldCarCount = cars.filter((ele) => {
        return ele < 2000
    })
    return oldCarCount.length;
}

module.exports = getOldCars;
