'use strict';

const DEFAULT_TEMP = 20;
const MINIMUM_TEMP = 10;
const MAXIMUM_TEMP = {powerSaving: 25, noPowerSaving: 32}
const ENERGY = {low: 18, medium: 25}

var Thermostat = function(temperature = DEFAULT_TEMP){
  this.temperature = temperature;
  this.powerSaving = true;
  this.maximumTemp = MAXIMUM_TEMP['powerSaving'];
  this.minimumTemp = MINIMUM_TEMP;
}

Thermostat.prototype.up = function(){
  if (this.checkMaximumTemp() === false){
    this.temperature++;
  }
}

Thermostat.prototype.down = function(){
  if (this.checkMinimumTemp() === false){
    this.temperature--;
  }
}

Thermostat.prototype.checkMinimumTemp = function(){
  if (this.temperature <= this.minimumTemp) {
    this.temperature = this.minimumTemp;
    return true;
  }
  return false;
}

Thermostat.prototype.checkMaximumTemp = function(){
  if (this.temperature >= this.maximumTemp) {
    this.temperature = this.maximumTemp;
    return true;
  }
  return false;
}

Thermostat.prototype.powerSavingOn = function(){
  this.powerSaving = true;
  this.maximumTemp = MAXIMUM_TEMP['powerSaving'];
  this.checkMaximumTemp();
}

Thermostat.prototype.powerSavingOff = function(){
  this.powerSaving = false;
  this.maximumTemp = MAXIMUM_TEMP['noPowerSaving'];
  this.checkMaximumTemp();
}

Thermostat.prototype.resetTemp = function(){
  this.temperature = DEFAULT_TEMP;
}

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < ENERGY['low']){
    return 'low';
  }
  if (this.temperature < ENERGY['medium']){
    return 'medium';
  }
  return 'high';
}
