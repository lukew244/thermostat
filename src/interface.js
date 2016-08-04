$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#tempDown').on('click', function(){
    thermostat.down();
    updateTemperature();
  })

  $('#tempUp').on('click', function(){
    thermostat.up();
    updateTemperature();
  })

  $('#resetTemp').on('click', function(){
    thermostat.resetTemp();
    updateTemperature();
  })

  $('#powerSavingOn').on('click', function(){
    thermostat.powerSavingOn();
    updateTemperature();
  })

  $('#powerSavingOff').on('click', function(){
    thermostat.powerSavingOff();
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});
