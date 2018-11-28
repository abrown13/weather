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

// Geolocation
// Geolocation Check
if ( 'geolocation' in navigator ) {
  
  $('#geolocation').show();
  
} else {
  
  $('#geolocation *').hide();
  $('#geolocation').html('<p>Not Available</p>');
 
}

// Get Weather
$('button').click( function(){
 
  navigator.geolocation.getCurrentPosition(function(position) {
   
   // Check lat/long coordinates
   var lat = position.coords.latitude;
   var long = position.coords.longitude;
   
   console.log(lat, long);
   
   // Get Weather
   getWeather( lat + ',' + long );
    
  });
});


// Define Get Weather
var getWeather = function( location ) {

console.log(location);

$.simpleWeather({
 location: location,
 unit: 'f',
 success: function(weather) {
   
   // Entire weather object
   // console.log(weather);
   
   // Display Data
   $('#geolocation .city').text(weather.city);
   $('#geolocation .temp').text(weather.temp);

 },
 error: function(error) {
   // Show if weather cannot be retreived
   console.log('Look Outside.');
 }

});
};
