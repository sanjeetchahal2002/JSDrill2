// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.



function getYears(inventory){
    const yearArr = inventory.map((ele) => {
        return ele.car_year
    })
    return yearArr
}

module.exports = getYears