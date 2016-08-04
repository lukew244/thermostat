'use strict';

describe('Thermostat', function(){
  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat;
  })

  var setMinTemp = function(){
    for(var i = 0; i < MINIMUM_TEMP; i++){
      thermostat.down();
    }
  }

  var setMaxTemp = function(){
    for(var i = 0; i < (thermostat.maximumTemp - DEFAULT_TEMP); i++){
      thermostat.up();
    }
  }

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

    it('cannot go above maximum temperature', function(){
      setMaxTemp();
      thermostat.up(); //trying to go above max temp
      expect(thermostat.temperature).toEqual(thermostat.maximumTemp);
    })
  })

  describe('down button', function(){
    it('decreases the temperature by 1', function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMP - 1);
    })

    it('cannot go below minimum temperature',function(){
      setMinTemp();
      thermostat.down(); //trying to go below min temp
      expect(thermostat.temperature).toEqual(thermostat.minimumTemp);
    })
  })

  describe('powerSaving', function(){
    it('changes maximum temperature when power saving', function(){
      thermostat.powerSavingOn();
      expect(thermostat.maximumTemp).toEqual(MAXIMUM_TEMP['powerSaving']);
    })

    it('changes maximum temperature when not power saving', function(){
      thermostat.powerSavingOff();
      expect(thermostat.maximumTemp).toEqual(MAXIMUM_TEMP['noPowerSaving']);
    })

    it('resets temperature if over max temp', function(){
      thermostat.powerSavingOff();
      setMaxTemp();
      expect(thermostat.temperature).toEqual(MAXIMUM_TEMP['noPowerSaving']);
      thermostat.powerSavingOn();
      expect(thermostat.temperature).toEqual(MAXIMUM_TEMP['powerSaving']);
    })
  })

  describe('reset temperature', function(){
    it('sets the temperature to default temperature', function(){
      setMinTemp();
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMP);
    })
  })

  describe('energy usage', function(){
    it('shows low for low usage', function(){
      setMinTemp();
      expect(thermostat.energyUsage()).toEqual('low');
    })

    it('shows medium for medium usage', function(){
      expect(thermostat.energyUsage()).toEqual('medium');
    })

    it('shows high for high usage', function(){
      setMaxTemp();
      expect(thermostat.energyUsage()).toEqual('high');
    })
  })
})
