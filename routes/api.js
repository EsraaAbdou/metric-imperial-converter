'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    const input = req.query.input;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    let data = { initNum, initUnit, returnNum, returnUnit, string };
    if(initUnit === 'invalid unit') data = 'invalid unit';
    if(initNum === 'invalid number') data = 'invalid number';
    if(initUnit === 'invalid unit' && initNum === 'invalid number') data = 'invalid number and unit';
    // console.log(data);
    res.send(data);
  });

};
