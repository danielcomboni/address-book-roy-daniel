
const dao = require('./dao/AddressDAOImpl.js');
const address = require('./model/Address.js');
const obj = require('./ObjectIteration.js');

const assert = require('chai').assert;
const expect = require('chai').expect;    
    

obj.ObjectIteration.iterateInput(dao.AddressDAOImpl.createNewAddress('Daniel', '0781'), new Object({ name: 'Daniel', number: '0781' }));
