const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {
    // getNum() tests
    test('convertHandler should correctly read a whole number input', function () {
        const x = "12L"; 
        assert.isNumber(convertHandler.getNum(x), 'convertHandler.getNum() should return a number');
    });
    test('convertHandler should correctly read a decimal number input', function () {
        const x = "12.1L"; 
        assert.isNumber(convertHandler.getNum(x), 'convertHandler.getNum() should return a number');
    });
    test('convertHandler should correctly read a fractional input', function () {
        const x = "12/2L"; 
        assert.isNumber(convertHandler.getNum(x), 'convertHandler.getNum() should return a number');
    });
    test('convertHandler should correctly read a fractional input with a decimal', function () {
        const x = "12.2/2.3L"; 
        assert.isNumber(convertHandler.getNum(x), 'convertHandler.getNum() should return a number');
    });
    test('convertHandler should correctly return an error on a double-fraction', function () {
        const x = "3/2/3L"; 
        assert.strictEqual(convertHandler.getNum(x), 'invalid number', 'convertHandler.getNum() should return "invalid number"');
    });
    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', function () {
        const x = "L"; 
        assert.strictEqual(convertHandler.getNum(x), 1, 'convertHandler.getNum() should return 1');
    });
    // getUnit() tests
    test('convertHandler should correctly read each valid input unit', function () {
        assert.strictEqual(convertHandler.getUnit('1gal'), 'gal', 'convertHandler.getUnit() should return a "gal"');
        assert.strictEqual(convertHandler.getUnit('1Gal'), 'gal', 'convertHandler.getUnit() should return a "gal"');
        assert.strictEqual(convertHandler.getUnit('1gaL'), 'gal', 'convertHandler.getUnit() should return a "gal"');
        assert.strictEqual(convertHandler.getUnit('1gAl'), 'gal', 'convertHandler.getUnit() should return a "gal"');
        assert.strictEqual(convertHandler.getUnit('1gAL'), 'gal', 'convertHandler.getUnit() should return a "gal"');
        assert.strictEqual(convertHandler.getUnit('1GaL'), 'gal', 'convertHandler.getUnit() should return a "gal"');
        assert.strictEqual(convertHandler.getUnit('1GAl'), 'gal', 'convertHandler.getUnit() should return a "gal"');
        assert.strictEqual(convertHandler.getUnit('1GAl'), 'gal', 'convertHandler.getUnit() should return a "gal"');

        assert.strictEqual(convertHandler.getUnit('1l'), 'L', 'convertHandler.getUnit() should return a "L"');
        assert.strictEqual(convertHandler.getUnit('1L'), 'L', 'convertHandler.getUnit() should return a "L"');

        assert.strictEqual(convertHandler.getUnit('1lbs'), 'lbs', 'convertHandler.getUnit() should return a "lbs"');
        assert.strictEqual(convertHandler.getUnit('1Lbs'), 'lbs', 'convertHandler.getUnit() should return a "lbs"');
        assert.strictEqual(convertHandler.getUnit('1lbS'), 'lbs', 'convertHandler.getUnit() should return a "lbs"');
        assert.strictEqual(convertHandler.getUnit('1lBs'), 'lbs', 'convertHandler.getUnit() should return a "lbs"');
        assert.strictEqual(convertHandler.getUnit('1lBS'), 'lbs', 'convertHandler.getUnit() should return a "lbs"');
        assert.strictEqual(convertHandler.getUnit('1LbS'), 'lbs', 'convertHandler.getUnit() should return a "lbs"');
        assert.strictEqual(convertHandler.getUnit('1LBs'), 'lbs', 'convertHandler.getUnit() should return a "lbs"');
        assert.strictEqual(convertHandler.getUnit('1LBS'), 'lbs', 'convertHandler.getUnit() should return a "lbs"');

        assert.strictEqual(convertHandler.getUnit('1kg'), 'kg', 'convertHandler.getUnit() should return a "kg"');
        assert.strictEqual(convertHandler.getUnit('1Kg'), 'kg', 'convertHandler.getUnit() should return a "kg"');
        assert.strictEqual(convertHandler.getUnit('1kG'), 'kg', 'convertHandler.getUnit() should return a "kg"');
        assert.strictEqual(convertHandler.getUnit('1KG'), 'kg', 'convertHandler.getUnit() should return a "kg"');

        assert.strictEqual(convertHandler.getUnit('1mi'), 'mi', 'convertHandler.getUnit() should return a "mi"');
        assert.strictEqual(convertHandler.getUnit('1Mi'), 'mi', 'convertHandler.getUnit() should return a "mi"');
        assert.strictEqual(convertHandler.getUnit('1mI'), 'mi', 'convertHandler.getUnit() should return a "mi"');
        assert.strictEqual(convertHandler.getUnit('1MI'), 'mi', 'convertHandler.getUnit() should return a "mi"');

        assert.strictEqual(convertHandler.getUnit('1km'), 'km', 'convertHandler.getUnit() should return a "km"');
        assert.strictEqual(convertHandler.getUnit('1Km'), 'km', 'convertHandler.getUnit() should return a "km"');
        assert.strictEqual(convertHandler.getUnit('1kM'), 'km', 'convertHandler.getUnit() should return a "km"');
        assert.strictEqual(convertHandler.getUnit('1KM'), 'km', 'convertHandler.getUnit() should return a "km"');
    });
    // getReturnUnit() tests
    test('convertHandler should correctly return an error for an invalid input unit', function () {
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1gal')), 'L', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "L"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1Gal')), 'L', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "L"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1gaL')), 'L', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "L"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1gAl')), 'L', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "L"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1gAL')), 'L', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "L"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1GaL')), 'L', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "L"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1GAl')), 'L', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "L"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1GAl')), 'L', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "L"');

        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1l')), 'gal', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "gal"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1L')), 'gal', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "gal"');

        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1lbs')), 'kg', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "kg"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1Lbs')), 'kg', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "kg"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1lbS')), 'kg', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "kg"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1lBs')), 'kg', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "kg"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1lBS')), 'kg', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "kg"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1LbS')), 'kg', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "kg"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1LBs')), 'kg', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "kg"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1LBS')), 'kg', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "kg"');

        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1kg')), 'lbs', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "lbs"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1Kg')), 'lbs', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "lbs"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1kG')), 'lbs', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "lbs"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1KG')), 'lbs', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "lbs"');

        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1mi')), 'km', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "km"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1Mi')), 'km', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "km"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1mI')), 'km', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "km"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1MI')), 'km', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "km"');

        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1km')), 'mi', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "mi"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1Km')), 'mi', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "mi"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1kM')), 'mi', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "mi"');
        assert.strictEqual(convertHandler.getReturnUnit(convertHandler.getUnit('1KM')), 'mi', 'convertHandler.getReturnUnit(convertHandler.getUnit()) should return a "mi"');
    });

    test('should return the correct return unit for each valid input unit.', function () {
        assert.strictEqual(convertHandler.getReturnUnit('mil'), 'invalid unit', 'convertHandler.getReturnUnit() should return an "invalid unit"');
    });

    test('convertHandler should correctly convert gal to L', function () {
        assert.strictEqual(convertHandler.getReturnUnit('gal'), 'L', 'convertHandler.getReturnUnit() should return an "L"');
    });
    test('convertHandler should correctly convert L to gal', function () {
        assert.strictEqual(convertHandler.getReturnUnit('L'), 'gal', 'convertHandler.getReturnUnit() should return an "gal"');
    });
    test('convertHandler should correctly convert mi to km', function () {
        assert.strictEqual(convertHandler.getReturnUnit('lbs'), 'kg', 'convertHandler.getReturnUnit() should return an "kg"');
    });
    test('convertHandler should correctly convert km to mi', function () {
        assert.strictEqual(convertHandler.getReturnUnit('kg'), 'lbs', 'convertHandler.getReturnUnit() should return an "lbs"');
    });
    test('convertHandler should correctly convert lbs to kg', function () {
        assert.strictEqual(convertHandler.getReturnUnit('mi'), 'km', 'convertHandler.getReturnUnit() should return an "km"');
    });
    test('convertHandler should correctly convert kg to lbs', function () {
        assert.strictEqual(convertHandler.getReturnUnit('km'), 'mi', 'convertHandler.getReturnUnit() should return an "mi"');
    });



    test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function () {
        assert.strictEqual(convertHandler.spellOutUnit('gal'), 'gallons', 'convertHandler.getReturnUnit() should return an "gallons"');
        assert.strictEqual(convertHandler.spellOutUnit('L'), 'liters', 'convertHandler.getReturnUnit() should return an "liters"');
        assert.strictEqual(convertHandler.spellOutUnit('lbs'), 'pounds', 'convertHandler.getReturnUnit() should return an "pounds"');
        assert.strictEqual(convertHandler.spellOutUnit('kg'), 'kilograms', 'convertHandler.getReturnUnit() should return an "kilograms"');
        assert.strictEqual(convertHandler.spellOutUnit('mi'), 'miles', 'convertHandler.getReturnUnit() should return an "miles"');
        assert.strictEqual(convertHandler.spellOutUnit('km'), 'kilometers', 'convertHandler.getReturnUnit() should return an "kilometers"');
    });

    

});