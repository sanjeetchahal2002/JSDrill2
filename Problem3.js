// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
function getSorted(inventory){
   const modelArr = inventory.map((ele) => {
      return ele.car_model
   })
   return modelArr.sort()
}
module.exports = getSorted