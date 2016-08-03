/*jslint node: true */
//'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
    thermostat.powerSavingOff();
  });
  describe('temperature', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });
  describe('up', function() {
    it('increases temperature by 1', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
    it('cannot go above 32 degrees', function() {
      thermostat.temperature = 32;
      expect(function() {thermostat.up();}).toThrowError('Temperature cannot go above 32');
    });
  });
  describe('down', function() {
    it('decreases temperature by 1', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
    it('cannot go below 10 degrees', function() {
      thermostat.temperature = 10;
      expect(function() {thermostat.down();}).toThrowError('Temperature cannot go below 10');
    });
  });
  describe('powerSaving',function() {
    beforeEach(function(){
      thermostat.powerSavingOn();
    });
    it('it is on by default', function() {
      var newThermostat = new Thermostat();
      expect(newThermostat.powerSaving).toEqual(true);
    });
    it('limits max temp to 25', function() {
      thermostat.temperature = 25;
      expect(function() {thermostat.up();}).toThrowError('Temperature cannot go above 25');
    });
  });
  describe('reset', function(){
    it('resets the temperature to 20', function(){
      thermostat.temperature = 25;
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });
  describe('colour coding the screen', function() {
    it('changes colour to green if temperature is < 18', function() {
      thermostat.temperature = 17
      thermostat.changeColour();
      expect(document.body.style.backgroundColor).toEqual('green')
    })
    it('changes colour to gold if temperature is < 25', function() {
      thermostat.temperature = 24;
      thermostat.changeColour();
      expect(document.body.style.backgroundColor).toEqual('gold');
    });
    it('changes colour to crimson if temperature is  greater 25', function() {
      thermostat.temperature = 28;
      thermostat.changeColour();
      expect(document.body.style.backgroundColor).toEqual('crimson');
    });
  });
});
