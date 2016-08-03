'use strict';

describe('Thermostat', function(){
  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat;
  })

  describe('initial state',function(){
    it('starts at 20 degrees', function(){
      expect(thermostat.temperature).toEqual(DEFAULT_TEMP);
    })
  })

  describe('up button', function(){
    it('increases the temperature by 1', function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMP + 1);
    })
  })

  describe('down button', function(){
    it('decreases the temperature by 1', function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMP - 1);
    })

    it('cannot go below minimum temperature',function(){
      for(var i = 0; i < 10; i++){
        console.log(i);
        thermostat.down();
      }
      expect(function(){
        thermostat.down();
      }).toThrowError("Cannot go below minimum temperature");
    })
  })
})
