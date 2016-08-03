
function Thermostat(){
  this.temperature = 20;
  this.powerSave = true;
  this.MAX_LIMIT_PS = 25;
  this.MAX_LIMIT_PSOFF = 32;
  this.MEDIUM_USAGE = 18;
  this.usage = 'medium-usage';
};

Thermostat.prototype.upButton = function(){
  if (this.maxTemperature()) {
    throw new Error('temp too high')
  };
  this.temperature += 1
  };

Thermostat.prototype.downButton = function(){
  if (this.temperature <= 10) {
    throw new Error('temp too low')
  };
  this.temperature -= 1
};

Thermostat.prototype.powerSaveOff = function(){
  this.powerSave = false
};
Thermostat.prototype.powerSaveOn = function(){
  this.powerSave = true
};

Thermostat.prototype.maxTemperature = function(){
    if (this.powerSave === true) {
    return this.temperature === this.MAX_LIMIT_PS
    };
    return this.temperature === this.MAX_LIMIT_PSOFF
  };

Thermostat.prototype.reset = function(){
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < this.MEDIUM_USAGE ) {
    return this.usage = 'low-usage';
  }
  if (this.temperature >= this.MEDIUM_USAGE && this.temperature <= this.MAX_LIMIT_PS) {
    return this.usage = 'medium-usage';
  }
  return this.usage = 'high-usage';
}

Thermostat.prototype.colour = function() {
  if (this.usage == 'low-usage') {
    return 'Green'
  }
  if (this.usage == 'medium-usage') {
    return 'Orange'
  }
  return 'Red';
};
