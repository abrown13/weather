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
      
      if ( weather.code >= 23 && weather.code <= 30 ) {
        $('.card-image').addClass('windy');
    }

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




// Change Image
    //   if ( weather.code >= 0 && weather.code <= 12 ) {
    //     $('.card-image').addClass('rainy');
    // }

    //   if ( weather.code >= 13 && weather.code <= 18 ) {
    //     $('.card-image').addClass('snowy');
    // }

    //   if ( weather.code >= 23 && weather.code <= 30 ) {
    //     $('.card-image').addClass('windy');
    // }

    //   if ( weather.code >= 31 && weather.code <= 34 ) {
    //     $('.card-image').addClass('sunny');
    // }