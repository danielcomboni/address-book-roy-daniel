const  AddressDAOCaller =   require( './AddressDAO.js');

class AddressDAOImpl extends AddressDAOCaller.AddressDAO{
    
}

module.exports = {
    AddressDAOImpl
}

// AddressDAOImpl.createNewAddress('Daniel', '0781');
// console.log(AddressDAOImpl.getInstance());

// AddressDAOImpl.createNewAddress('Samson', '079');
// console.log(AddressDAOImpl.getInstance());

// AddressDAOImpl.deleteAnAddress(0);
// console.log(AddressDAOImpl.getInstance());

// AddressDAOImpl.updateAddress(0,'Kibrom','0799999');
// console.log(AddressDAOImpl.getInstance());