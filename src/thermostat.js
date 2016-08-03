function Thermostat () {
  this.temperature = 20;
  this.powerSaving = true;
  this.max = 25;
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
    this.max = 32
    this.changeColour();
  },
  powerSavingOn : function() {
    this.powerSaving = true;
    this.max = 25;
    this.changeColour();
  },
  reset : function () {
    this.temperature = 20;
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
