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

  $('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
})


  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

});
