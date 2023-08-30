const inventory = require('../inventory')
const getSorted = require('../Problem3')
const result = getSorted(inventory)

for(let i=0;i<result.length;i++){
    console.log(result[i] + " ")
}