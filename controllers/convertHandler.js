const { json } = require("body-parser");

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.split(/[a-zA-Z]/)[0];
    if(result === '') result = "1";
    const fractionArr = result.split("/");
    const numberofFrac = fractionArr.length;
    const numberofPoints1 = fractionArr[0].split(".").length;
    if(numberofPoints1 > 2) result = ''; // number invalid
    if(numberofFrac === 2) {
      const numberofPoints2 = fractionArr[1].split(".").length;
      if(numberofPoints2 > 2) result = ''; // number invalid
      result = fractionArr[0] / fractionArr[1];
    } else if(numberofFrac > 2) result = ''; // number invalid

    result = parseFloat(result);
    if(isNaN(result)) result = 'invalid number';
    return result;
  };
  
  this.getUnit = function(input) {
    const validUnits = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
    const split = input.split(/[0-9]/);
    let result = split[split.length-1].toLowerCase();
    if(result === 'l') result = 'L';
    if(!validUnits.includes(result)) result = 'invalid unit';
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit) {
      case 'gal': result = 'L';
        break;
      case 'L': result = 'gal';
        break;
      case 'lbs': result = 'kg';
        break;
      case 'kg': result = 'lbs';
        break;
      case 'mi': result = 'km';
        break;
      case 'km': result = 'mi';
        break;
      default: result = 'invalid unit';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result
    switch(unit) {
      case 'gal': result = 'gallons';
        break;
      case 'L': result = 'liters';
        break;
      case 'lbs': result = 'pounds';
        break;
      case 'kg': result = 'kilograms';
        break;
      case 'mi': result = 'miles';
        break;
      case 'km': result = 'kilometers';
        break;
      // default 'mi': result = '';
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit) {
      case 'gal': result = initNum * galToL;
        break;
      case 'L': result = initNum / galToL;
        break;
      case 'lbs': result = initNum * lbsToKg;
        break;
      case 'kg': result = initNum / lbsToKg;
        break;
      case 'mi': result = initNum * miToKm;
        break;
      case 'km': result = initNum / miToKm;
        break;
      default: result = 1;
    }
    const precision = 100000; // 5 decimal precision
    result = Math.round((result + Number.EPSILON) * precision) / precision;
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    return result;
  };
  
}

module.exports = ConvertHandler;
