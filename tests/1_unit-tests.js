const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {
    suite('getNum() tests', function () {
        test('convertHandler should correctly read a whole number input', function () {
            assert.isNumber(convertHandler.getNum("12L"), 'convertHandler.getNum() should return a number');
        });
        test('convertHandler should correctly read a decimal number input', function () {
            assert.isNumber(convertHandler.getNum("12.1L"), 'convertHandler.getNum() should return a number');
        });
        test('convertHandler should correctly read a fractional input', function () {
            assert.isNumber(convertHandler.getNum("12/2L"), 'convertHandler.getNum() should return a number');
        });
        test('convertHandler should correctly read a fractional input with a decimal', function () {
            assert.isNumber(convertHandler.getNum("12.2/2.3L"), 'convertHandler.getNum() should return a number');
        });
        test('convertHandler should correctly return an error on a double-fraction', function () {
            assert.strictEqual(convertHandler.getNum("3/2/3L"), 'invalid number', 'convertHandler.getNum() should return "invalid number"');
        });
        test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', function () {
            assert.strictEqual(convertHandler.getNum("L"), 1, 'convertHandler.getNum() should return 1');
        });
    });
    
    suite('getUnit() tests', function() {
        test('convertHandler should correctly read each valid input unit', function () {
            assert.strictEqual(convertHandler.getUnit('1gal'), 'gal', 'convertHandler.getUnit() should return a "gal"');
            assert.strictEqual(convertHandler.getUnit('1GAl'), 'gal', 'convertHandler.getUnit() should return a "gal"');

            assert.strictEqual(convertHandler.getUnit('1l'), 'L', 'convertHandler.getUnit() should return a "L"');
            assert.strictEqual(convertHandler.getUnit('1L'), 'L', 'convertHandler.getUnit() should return a "L"');

            assert.strictEqual(convertHandler.getUnit('1lbs'), 'lbs', 'convertHandler.getUnit() should return a "lbs"');
            assert.strictEqual(convertHandler.getUnit('1LBS'), 'lbs', 'convertHandler.getUnit() should return a "lbs"');

            assert.strictEqual(convertHandler.getUnit('1kg'), 'kg', 'convertHandler.getUnit() should return a "kg"');
            assert.strictEqual(convertHandler.getUnit('1KG'), 'kg', 'convertHandler.getUnit() should return a "kg"');

            assert.strictEqual(convertHandler.getUnit('1mi'), 'mi', 'convertHandler.getUnit() should return a "mi"');
            assert.strictEqual(convertHandler.getUnit('1MI'), 'mi', 'convertHandler.getUnit() should return a "mi"');

            assert.strictEqual(convertHandler.getUnit('1km'), 'km', 'convertHandler.getUnit() should return a "km"');
            assert.strictEqual(convertHandler.getUnit('1KM'), 'km', 'convertHandler.getUnit() should return a "km"');
        });
        test('convertHandler should correctly return an error for an invalid input unit', function () {
            assert.strictEqual(convertHandler.getUnit('mil'), 'invalid unit', 'convertHandler.getUnit() should return "invalid unit"');
        });
    });
    
    suite('getReturnUnit() tests', function() {
        test('convertHandler should return the correct return unit for each valid input unit.', function () {
            assert.strictEqual(convertHandler.getReturnUnit('gal'), 'L', 'convertHandler.getReturnUnit() should return a "L"');
            assert.strictEqual(convertHandler.getReturnUnit('L'), 'gal', 'convertHandler.getReturnUnit() should return a "gal"');
            assert.strictEqual(convertHandler.getReturnUnit('lbs'), 'kg', 'convertHandler.getReturnUnit() should return a "kg"');
            assert.strictEqual(convertHandler.getReturnUnit('kg'), 'lbs', 'convertHandler.getReturnUnit() should return a "lbs"');
            assert.strictEqual(convertHandler.getReturnUnit('mi'), 'km', 'convertHandler.getReturnUnit() should return a "km"');
            assert.strictEqual(convertHandler.getReturnUnit('km'), 'mi', 'convertHandler.getReturnUnit() should return a "mi"');
        });
    });

    suite('spellOutUnit()', function() {
        test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function () {
            assert.strictEqual(convertHandler.spellOutUnit('gal'), 'gallons', 'convertHandler.spellOutUnit() should return an "gallons"');
            assert.strictEqual(convertHandler.spellOutUnit('L'), 'liters', 'convertHandler.spellOutUnit() should return an "liters"');
            assert.strictEqual(convertHandler.spellOutUnit('lbs'), 'pounds', 'convertHandler.spellOutUnit() should return an "pounds"');
            assert.strictEqual(convertHandler.spellOutUnit('kg'), 'kilograms', 'convertHandler.spellOutUnit() should return an "kilograms"');
            assert.strictEqual(convertHandler.spellOutUnit('mi'), 'miles', 'convertHandler.spellOutUnit() should return an "miles"');
            assert.strictEqual(convertHandler.spellOutUnit('km'), 'kilometers', 'convertHandler.spellOutUnit() should return an "kilometers"');
        });
    });


    suite('convert() tests', function() {
        test('convertHandler should correctly convert gal to L', function () {
            assert.strictEqual(convertHandler.convert(1, 'gal'), 3.78541 , 'convertHandler.convert() should return 3.78541');
        });
        test('convertHandler should correctly convert L to gal', function () {
            assert.strictEqual(convertHandler.convert(1, 'L'), 0.26417, 'convertHandler.convert() should return 0.26417');
        });
        test('convertHandler should correctly convert mi to km', function () {
            assert.strictEqual(convertHandler.convert(1, 'lbs'), 0.45359, 'convertHandler.convert() should return 0.45359');
        });
        test('convertHandler should correctly convert km to mi', function () {
            assert.strictEqual(convertHandler.convert(1, 'kg'), 2.20462, 'convertHandler.convert() should return an 2.20462');
        });
        test('convertHandler should correctly convert lbs to kg', function () {
            assert.strictEqual(convertHandler.convert(1, 'mi'), 1.60934, 'convertHandler.convert() should return an 1.60934');
        });
        test('convertHandler should correctly convert kg to lbs', function () {
            assert.strictEqual(convertHandler.convert(1, 'km'), 0.62137, 'convertHandler.convert() should return 0.62137');
        });
    });
});