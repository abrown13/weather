// Geolocation
// Get Weather
$('button').click( function(){
 
  navigator.geolocation.getCurrentPosition(function(position) {
   
   // Check lat/long coordinates
   var lat = position.coords.latitude;
   var long = position.coords.longitude;
   
   // Get weather
   var location = lat + ',' + long ;
    
  });
});

$.simpleWeather({
 location: location,
 unit: 'f',
 success: function(weather) {
   
   // Entire weather object
    console.log(weather);
   
   // Display Data
   $('#geolocation .city').text(weather.city);
   $('#geolocation .temp').text(weather.temp);
   $('#geolocation .temp').text(weather.high);
   $('#geolocation .temp').text(weather.low);

 },
 error: function(error) {
   // Show if weather cannot be retreived
   console.log('Look Outside.');
 }

});


// City One
$.simpleWeather({
    location: 99031,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('i').addClass('icon-' + weather.code);
      $('#city1 .city').text(weather.city);
      $('#city1 .temp').text(weather.temp);

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// City Two
$.simpleWeather({
    location: 'Spokane, WA',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('i').addClass('icon-' + weather.code);
      $('#city2 .city').text(weather.city);
      $('#city2 .temp').text(weather.temp);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });
