

$(document).ready(function() {
var thermostat = new Thermostat
  updateTemperature()

  $('#temp-up').click(function () {
    thermostat.upButton();
    updateTemperature()
  });
  $('#temp-down').click(function (){
    thermostat.downButton();
    updateTemperature()
  });
  $('#temp-reset').click(function(){
    thermostat.reset();
    updateTemperature()
  });

  $('#powersaving-on').click(function(){
    thermostat.powerSaveOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });
  $('#powersaving-off').click(function(){
    thermostat.powerSaveOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

  $('#select-city').submit(function(event){
    event.preventDefault();
    updateDisplay(getCity());
  });

  var sanitizedCity = function(city) {
    return city.length == 0 ? "Narnia" : city
  }

  var getCity = function() {
    var city = $('#current-city').val();
    return sanitizedCity(city);
  }

  function updateDisplay(city) {
    setCityText(city);
    displayWeather(city);
  }

  function setCityText(text) {
    $('#outside_city').text(text);
  }

  function displayWeather(city) {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city +  '&appid=5108122d69c52aec387cbf328f23f62d&units=metric', function(data) {
      $('#outside_temp').text(data.main.temp);
  });
};

  function randomCity() {
    var cities = ['London', 'Yakutsk', 'Reykjavik', 'Kuwait']
    var narnia = cities[Math.floor(Math.random() * cities.length)];
    return narnia;
  };


  function updateTemperature() {
    $('#temperature').text(thermostat.temperature)
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});
