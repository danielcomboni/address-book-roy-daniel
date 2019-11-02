/**
 * @author Roy Comboni.
 */

// const contacts = require('../dao/AddressDAOImpl');
// const Messages = require('./Messages')
// const dao = require('../dao/AddressDAOImpl')
import AddressDAOImpl from '../dao/AddressDAOImpl.js';

export default class PopulateTable {

    static createElement(anElement) {
        return document.createElement(anElement);
    }

    static deleteAnAddress(id) {
        AddressDAOImpl.deleteAnAddress(id);
        document.getElementById(id).remove();
    }

    static createBtn(text, className, id) {
        const btn = PopulateTable.createElement('button');
        btn.textContent = text;
        btn.id = id;
        btn.className = className;
        btn.addEventListener('click', () => PopulateTable.deleteAnAddress(id));
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

        aRow.appendChild(PopulateTable.createBtn('Edit', 'btn btn-success'));

        aRow.appendChild(PopulateTable.createBtn('Delete', 'btn btn-danger', anObject["id"]));
        // Messages.Messages.showToast('center', 'saved', 'success');
        return aRow;
    }

}

// PopulateTable.checkUponRefresh();

// dao.AddressDAOImpl.printAllAddresses();

// module.exports = {
//     PopulateTable
// }