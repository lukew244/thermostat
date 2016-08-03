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

    it('cannot go above maximum temperature', function(){
      for(var i = 0; i < (thermostat.maximumTemp - DEFAULT_TEMP); i++){
        thermostat.up();
      }
      expect(function(){
        thermostat.up();
      }).toThrowError("Cannot go above maximum temperature");
    })
  })

  describe('down button', function(){
    it('decreases the temperature by 1', function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMP - 1);
    })

    it('cannot go below minimum temperature',function(){
      for(var i = 0; i < MINIMUM_TEMP; i++){
        thermostat.down();
      }
      expect(function(){
        thermostat.down();
      }).toThrowError("Cannot go below minimum temperature");
    })
  })

  describe('powerSaving', function(){
    it('changes maximum temperature when power saving', function(){
      expect(thermostat.maximumTemp).toEqual(MAXIMUM_TEMP['powerSaving']);
    })

    it('changes maximum temperature when not power saving', function(){
      thermostat.togglePowerSaving();
      expect(thermostat.maximumTemp).toEqual(MAXIMUM_TEMP['noPowerSaving']);
    })
  })

  describe('reset temperature', function(){
    it('sets the temperature to default temperature', function(){
      for(var i = 0; i < MINIMUM_TEMP; i++){
        thermostat.down();
      }
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(DEFAULT_TEMP);
    })
  })

  describe('energy usage', function(){
    it('shows low for low usage', function(){
      for(var i = 0; i < MINIMUM_TEMP; i++){
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('Low');
    })

    it('shows medium for medium usage', function(){
      expect(thermostat.energyUsage()).toEqual('Medium');
    })

    it('shows high for high usage', function(){
      for(var i = 0; i < (thermostat.maximumTemp - DEFAULT_TEMP); i++){
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('High');
    })
  })
})
