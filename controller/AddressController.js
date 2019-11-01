const populateTable = require('./PopulateTable');
const addressDAO = require('../dao/AddressDAOImpl');

class AddressController {

    static createNewAddress() {

        document.getElementById('address-form-id').addEventListener('submit', (e) => {

            e.preventDefault();

            const name = document.getElementById('name-id').value;
            const phoneNumber = document.getElementById('phone-id').value;
            
            if (addressDAO.AddressDAOImpl.getInstance().getAddressList().length === 0) {
                
                const theObject = addressDAO.AddressDAOImpl.createNewAddress(1, name, phoneNumber);
                document.getElementById('roy-daniel').appendChild(populateTable.PopulateTable.feedTable(theObject));

            } 
            
            else {
            
                const sortedList = addressDAO.AddressDAOImpl.getInstance().getAddressList().sort((first, second) => first["id"] - second["id"]);
                const theObject = addressDAO.AddressDAOImpl.createNewAddress(sortedList[sortedList.length - 1]["id"] + 1, name, phoneNumber);
                document.getElementById('roy-daniel').appendChild(populateTable.PopulateTable.feedTable(theObject));

            }

        });

    }

}

AddressController.createNewAddress();
