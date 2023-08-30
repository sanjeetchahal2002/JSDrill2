// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.


function getBMWAndAudi(inventory){
    const bmwAndAudi = inventory.filter((ele) => {
        return ele.car_make == "Audi" || ele.car_make == "BMW" 
    })
    return bmwAndAudi
}

module.exports = getBMWAndAudi

