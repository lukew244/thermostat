function Thermostat () {
  this.DEFAULT_TEMPERATURE = 20;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 32;
  this.POWERSAVING_MAX_TEMPERATURE = 25;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSaving = true;
  this.max = this.POWERSAVING_MAX_TEMPERATURE;

}
Thermostat.prototype = {
  up : function () {
    if (this.temperature === this.max) {
      throw new Error('Temperature cannot go above ' + this.max);}
  this.temperature += 1;
  },
  down : function () {
    if (this.temperature === 10) {
      throw new Error('Temperature cannot go below 10');}
  this.temperature -= 1;
    this.changeColour();
},
  powerSavingOff : function() {
    this.powerSaving = false;
    this.max = this.MAX_TEMPERATURE;
    this.changeColour();
  },
  powerSavingOn : function() {
    this.powerSaving = true;
    this.max = this.POWERSAVING_MAX_TEMPERATURE;
    this.changeColour();
  },
  reset : function () {
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.changeColour();
  },
  changeColour : function(){
    if (this.temperature < 18) {
      document.body.style.backgroundColor = "green";
    }
    else if (this.temperature < 25) {
      document.body.style.backgroundColor = "gold";
    }
    else {
      document.body.style.backgroundColor = "crimson";
    }
  }
};
