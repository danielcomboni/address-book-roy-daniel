// const populateTable = require('./PopulateTable');
// const addressDAO = require('../dao/AddressDAOImpl');
import AddressDAOImpl from '../dao/AddressDAOImpl.js';
import PopulateTable from './PopulateTable.js';

class AddressController {

    static createNewAddress() {

        document.getElementById('address-form-id').addEventListener('submit', (e) => {

            e.preventDefault();

            const name = document.getElementById('name-id').value;
            const phoneNumber = document.getElementById('phone-id').value;
            
            if (AddressDAOImpl.getInstance().getAddressList().length === 0) {
                
                const theObject = AddressDAOImpl.createNewAddress(1, name, phoneNumber);
                document.getElementById('roy-daniel').appendChild(PopulateTable.feedTable(theObject));

            } 
            
            else {
            
                const sortedList =AddressDAOImpl.getInstance().getAddressList().sort((first, second) => first["id"] - second["id"]);
                const theObject = AddressDAOImpl.createNewAddress(sortedList[sortedList.length - 1]["id"] + 1, name, phoneNumber);
                document.getElementById('roy-daniel').appendChild(PopulateTable.feedTable(theObject));

            }

        });

    }

}

AddressController.createNewAddress();
