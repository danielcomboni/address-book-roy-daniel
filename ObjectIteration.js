const assert = require('assert');

class ObjectIteration {

    static theTest(title, valueToTest, expectedValue){
        it(title, ()=>{
            assert.equal(valueToTest, expectedValue);
        });
    }

    static iterateInput(inputObject, expectedObject) {
        for(let [key, value] of Object.entries(inputObject)){
            ObjectIteration.theTest(key,value, expectedObject[key]);
        }
    }

}

module.exports = {
    ObjectIteration
}