
export default class Address {

    constructor(id,name, number){
        this.id = id;
        this.name = name;
        this.number = number;
    }

    setId(id){
        this.id = id;
    }

    getId(){
        return this.id;
    }

    setName(aName){
        this.name = aName;
    }

    getName(){
        return this.name;
    }

    setNumber(aNumber){
        this.number = aNumber;
    }
    getNumber(){
        return this.number
    }

    static addressCreator(id, name, number){
        return new Address(id, name,number);
    }

}

