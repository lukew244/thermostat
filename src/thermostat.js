'use strict';

const DEFAULT_TEMP = 20;

var Thermostat = function(temperature = DEFAULT_TEMP){
  this.temperature = temperature;
}

Thermostat.prototype.up = function(){
  this.temperature += 1;
}

Thermostat.prototype.down = function(){
  if (this.minimum_temp()){
    throw new Error("Cannot go below minimum temperature");
  }
  this.temperature -= 1;
}

Thermostat.prototype.minimum_temp = function(){
  return this.temperature <= 10;
}
