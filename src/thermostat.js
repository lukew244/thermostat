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
  if (this.checkMaximumTemp()){
    this.temperature = this.maximumTemp;
  }
  else {
    this.temperature++;
  }
}

Thermostat.prototype.down = function(){
  if (this.checkMinimumTemp()){
    this.temperature = this.minimumTemp;
  }
  else{
    this.temperature--;
  }
}

Thermostat.prototype.checkMinimumTemp = function(){
  return this.temperature <= MINIMUM_TEMP;
}

Thermostat.prototype.checkMaximumTemp = function(){
  return this.temperature >= this.maximumTemp;
}

Thermostat.prototype.togglePowerSaving = function(){
  if (this.powerSaving){
    this.powerSaving = false;
    this.maximumTemp = MAXIMUM_TEMP['noPowerSaving'];
  }
  else {
    this.powerSaving = true;
    this.maximumTemp = MAXIMUM_TEMP['powerSaving'];
  }
}

Thermostat.prototype.resetTemp = function(){
  this.temperature = DEFAULT_TEMP;
}

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < ENERGY['low']){
    return 'Low';
  }
  if (this.temperature < ENERGY['medium']){
    return 'Medium';
  }
  return 'High';
}
