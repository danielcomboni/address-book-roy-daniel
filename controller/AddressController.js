import AddressDAOImpl from '../dao/AddressDAOImpl.js';
import PopulateTable from './PopulateTable.js';
import Messages from '../controller/Messages.js';
import AddressTest from './AddressTest.js';
import ObjectIteration from '../ObjectIteration.js';

class AddressController {

    static async createNewAddress() {

        document.getElementById('address-form-id').addEventListener('submit', (e) => {

            e.preventDefault();

            if (document.getElementById('save').value === 'save') {


                const name = document.getElementById('name-id').value;
                const phoneNumber = document.getElementById('phone-id').value;

                const nameExpected = document.getElementById('name-expected-id').value;
                const phoneNumberExpected = document.getElementById('phone-expected-id').value;

                if (name == null || name === '') {
                    Messages.showToast('center', 'actual name can\'t be empy', 'warning');
                    return;
                }

                if (nameExpected == null || nameExpected === '') {
                    Messages.showToast('center', 'expected name can\'t be empy', 'warning');
                    return;
                }

                if (phoneNumber == null || phoneNumber === '') {
                    Messages.showToast('center', 'actual phone number can\'t be empy', 'warning');
                    return;
                }

                if (phoneNumberExpected == null || phoneNumberExpected === '') {
                    Messages.showToast('center', 'expectd phone number can\'t be empy', 'warning');
                    return;
                }

                ObjectIteration.iterateInput(new Object({
                    name: name,
                    phoneNumber: phoneNumber
                }),

                    new Object({
                        name: nameExpected,
                        phoneNumber: phoneNumberExpected
                    })
                ); // end test

                AddressTest.runTest();

                if (AddressDAOImpl.getInstance().getAddressList().length === 0) {
                    const theObject = AddressDAOImpl.createNewAddress(1, name, phoneNumber);
                    document.getElementById('roy-daniel').appendChild(PopulateTable.feedTable(theObject));
                    PopulateTable.clearInputsField();
                }
                else {
                    const sortedList = AddressDAOImpl.getInstance().getAddressList().sort((first, second) => first["id"] - second["id"]);
                    const theObject = AddressDAOImpl.createNewAddress(sortedList[sortedList.length - 1]["id"] + 1, name, phoneNumber);
                    document.getElementById('roy-daniel').appendChild(PopulateTable.feedTable(theObject));
                    PopulateTable.clearInputsField();
                } // end else

            } // end the if statment for the save/update

            else{
                PopulateTable.updateAddress();
            }

        }); // end submit

    }

}

AddressController.createNewAddress();
