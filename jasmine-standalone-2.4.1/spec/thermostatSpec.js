'use strict';
// HELLO

describe('Thermostat', function(){
  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat
  });

  it('has a default temp of 20', function(){
    expect(thermostat.temperature).toBe(20)
  });

  it('has a minimum tempterature of 10 degrees', function(){
    for (var temp = 1; temp <=10; temp ++) {
      thermostat.downButton()
    }
    expect(function(){thermostat.downButton();}).toThrowError('temp too low')
  });

  it('can increase by 1 degree using the up button', function(){
    thermostat.upButton()
    expect(thermostat.temperature).toBe(21)
  });

  it('can be decrease by 1 degree using the down button', function(){
    thermostat.downButton()
    expect(thermostat.temperature).toBe(19)
  });

  it('has a power saving mode where max temp is 25', function(){
    for (var temp = 1; temp <=5; temp ++) {
      thermostat.upButton()
    }
    expect(function(){thermostat.upButton();}).toThrowError('temp too high')
  });

  it('has power save on by default', function(){
    expect(thermostat.powerSave).toBe(true)
  });

  it('can turn off power save mode', function(){
    thermostat.powerSaveOff()
    expect(thermostat.powerSave).toBe(false)
  })
  it('can turn power save mode back on', function(){
    thermostat.powerSaveOff()
    thermostat.powerSaveOn()
    expect(thermostat.powerSave).toBe(true)
  })

  it('when power save is off, max temp is 32', function(){
    thermostat.powerSaveOff()
    for (var temp = 1; temp <=12; temp ++) {
      thermostat.upButton()
    }
    expect(function(){thermostat.upButton();}).toThrowError('temp too high')
  });

  it('has reset button', function(){
    thermostat.upButton();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20)
  })

  it('starts at medium usage', function(){
    expect(thermostat.colour()).toEqual('Orange')
  })

  it('starts at medium usage', function(){
    expect(thermostat.energyUsage()).toEqual('medium-usage')
  })


});
