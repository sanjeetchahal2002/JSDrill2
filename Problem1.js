function findCarById(inventory, id) {
    
    const carId = inventory.filter(inventory => inventory.id === id)[0]
    return carId
  }
  
module.exports = findCarById;
  