/**
 * @author Mukunde Roy
 * @author Daniel Comboni.
 */

import AddressDAOImpl from '../dao/AddressDAOImpl.js';
import Messages from './Messages.js';

export default class PopulateTable {

    constructor() {
        if (PopulateTable.instance) {
            return PopulateTable.instance;
        }
        PopulateTable.instance = this;
        this.id = 0;
        this.name = null;
        this.number = null;
    }

    static getInstance() {
        return new PopulateTable();
    }

    static createElement(anElement) {
        return document.createElement(anElement);
    }

    static clearInputsField() {
        document.getElementById('name-id').value = '';
        document.getElementById('phone-id').value = '';
        document.getElementById('name-expected-id').value = '';
        document.getElementById('phone-expected-id').value = '';
    }

    static populateFieldsForUpdate(id) {
        AddressDAOImpl.getInstance().getAddressList().forEach(e => {
            if (e["id"] == id) {
                document.getElementById('name-id').value = e["name"];
                document.getElementById('phone-id').value = e["number"];
                PopulateTable.getInstance().id = id;
                PopulateTable.getInstance().name = e["name"];
                PopulateTable.getInstance().number = e["number"];
            }
        });

        document.getElementById('save').value = 'save changes';

        const btnCancel = document.createElement('input');
        btnCancel.type = 'button';
        btnCancel.className = 'btn btn-danger';
        btnCancel.value = 'cancel';
        btnCancel.id = 'cancel-id'

        btnCancel.addEventListener('click', () => {
            PopulateTable.clearInputsField();
            document.getElementById('cancel-id').remove();
            document.getElementById('save').value = 'save';
        });

        document.getElementById('save-div-id').appendChild(btnCancel);

    }

    static updateAddress() {

        if (document.getElementById('save').value === 'save changes') {
            const name = document.getElementById('name-id').value;
            const phoneNumber = document.getElementById('phone-id').value;

            if (name == null || name === '') {
                Messages.showToast('center', 'new name can\'t be empy', 'warning');
                return;
            }

            if (phoneNumber == null || phoneNumber === '') {
                Messages.showToast('center', 'new phone number can\'t be empy', 'warning');
                return;
            }

            if (name === PopulateTable.getInstance().name && phoneNumber === PopulateTable.getInstance().number) {
                Messages.showToast('center', 'no changes made', 'info');
                PopulateTable.clearInputsField();
                document.getElementById('cancel-id').remove();
                document.getElementById('save').value = 'save';
            } else {

                Messages.decide(() => {

                    AddressDAOImpl.getInstance().getAddressList().forEach(e => {
                        if (e["id"] == PopulateTable.getInstance().id) {
                            e["name"] = name;
                            e["number"] = phoneNumber;
                        }
                    });


                    document.getElementById('roy-daniel').innerHTML = '';
                    document.getElementById('cancel-id').remove();
                    document.getElementById('save').value = 'save';
                    console.log(AddressDAOImpl.getInstance().getAddressList());

                    AddressDAOImpl.getInstance().getAddressList().forEach(e => {
                        document.getElementById('roy-daniel').appendChild(PopulateTable.feedTable(e));
                    });

                }, null, 'wonna save changes?');


            }

        }
    }

    static deleteAnAddress(id) {
        AddressDAOImpl.deleteAnAddress(id);
        document.getElementById(id).remove();
    }

    static createBtn(text, className, id, eventListener) {
        const btn = PopulateTable.createElement('button');
        btn.textContent = text;
        btn.id = id;
        btn.className = className;
        btn.addEventListener('click', () => eventListener());
        const td = PopulateTable.createElement('td');
        td.appendChild(btn);
        return td;
    }

    static feedTable(anObject) {

        const aRow = PopulateTable.createElement('tr');

        const tdId = PopulateTable.createElement('td');
        tdId.textContent = anObject["id"];
        aRow.appendChild(tdId);

        aRow.id = anObject["id"];

        const tdName = PopulateTable.createElement('td');
        tdName.textContent = anObject["name"];
        aRow.appendChild(tdName);

        const tdPhone = PopulateTable.createElement('td');
        tdPhone.textContent = anObject["number"];
        aRow.appendChild(tdPhone);

        aRow.appendChild(PopulateTable.createBtn('Edit', 'btn btn-success', anObject["id"], () => {
            PopulateTable.populateFieldsForUpdate(anObject["id"]);
        }));

        aRow.appendChild(PopulateTable.createBtn('Delete', 'btn btn-danger', anObject["id"], () => {
            Messages.decide(PopulateTable.deleteAnAddress, anObject["id"], 'continue');
        }));

        return aRow;
    }

}
// console.log(document.getElementById('roy-daniel'))