function findCarById(inventory, id) {
    
    const carId = inventory.filter(inventory => inventory.id === id)
    if(carId == null){
      return NULL
    }
    else{
      return carId[0]
    }
    return carId
  }
  
module.exports = findCarById;
  