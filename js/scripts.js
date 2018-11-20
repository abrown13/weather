// City One
$.simpleWeather({
    location: 99031,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('i').addClass('icon-' + weather.code);
      $('.spangle').text(weather.city);
      $('.spangle-temp').text(weather.temp);
      
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
      $('.spokane').text(weather.city);
      $('.spokane-temp').text(weather.temp);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Geolocation