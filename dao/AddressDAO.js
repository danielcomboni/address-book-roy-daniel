// const Address = require('../model/Address.js');
import Address from '../model/Address.js';

export default class AddressDAO {

    constructor() {
        if (AddressDAO.instance) {
            return AddressDAO.instance;
        }
        AddressDAO.instance = this;
        this.addressList = new Array();
        return this;
    }

    static getInstance() {
        return new AddressDAO();
    }


    static createNewAddress(id, theName, theNumber) {
        const address = new Address(id, theName, theNumber);

        // const address = Address.Address.addressCreator(id, theName, theNumber);
        AddressDAO.addNewAddressToList(address);
        return address;
    }

    static updateAddress(index, id, theNewName, theNewNumber) {
        AddressDAO.getInstance().getAddressList()[index] = Address.Address.addressCreator(id, theNewName, theNewNumber);

    }

    static deleteAnAddress(index) {

        AddressDAO.getInstance().getAddressList().splice(index,1);
        

        // if (AddressDAO.getInstance().getAddressList().length > 1) {

        //     AddressDAO.getInstance().getAddressList().splice(index, 1);
        //     AddressDAO.storeLocally();

        // } else {

        //     localStorage.setItem("addressList", JSON.stringify(null));

        // }

    }

    setAddressList(aList) {
        this.addressList = aList;
    }

    getAddressList() {
        return this.addressList;
    }

    static addNewAddressToList(theNewAddress) {

        if (AddressDAO.getInstance().getAddressList() == null) {
            let newArray = new Array();
            AddressDAO.getInstance().setAddressList(newArray.push(theNewAddress));
        } else {
            AddressDAO.getInstance().getAddressList().push(theNewAddress);
        }

    }

}

// module.exports = {
//     AddressDAO
// }