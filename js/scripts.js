// Carousel
var carousels = bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances

// Geolocation
// Geolocation Check
if ( 'geolocation' in navigator ) {
  
  $('#geolocation').show();
  
} else {
  
  $('#geolocation *').hide();
  $('#geolocation').html('<p>Not Available</p>');
 
}

// Get Weather

 
  navigator.geolocation.getCurrentPosition(function(position) {
   
   // Check lat/long coordinates
   var lat = position.coords.latitude;
   var long = position.coords.longitude;
   var location = lat + ',' + long;
    
    // Define Get Weather Function

  $.simpleWeather({

    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Entire weather object
      // console.log(weather);
      
      // Display Data

      // raincoat
      if ( weather.code >= 0 && weather.code <= 18 ) {
        $('#geolocation .image img').addClass('raincoat' );
    }

      if ( weather.code >= 37 && weather.code <= 47 ) {
        $('#geolocation .image img').addClass('raincoat' );
    }

      if ( weather.code = 35 ) {
        $('#geolocation .image img').addClass('raincoat' );
    }

      // hoodie
      if ( weather.code >= 19 && weather.code <= 30 ) {
        $('#geolocation .image img').addClass('hoodie' );
    }

       // tshirt
      if ( weather.code >= 31 && weather.code <= 34 ) {
        $('#geolocation .image img').addClass('tshirt' );
    }

      if ( weather.code = 36 ) {
        $('#geolocation .image img').addClass('tshirt' );
    }

      $('#geolocation .city').text(weather.city);
      $('#geolocation .temp').text(weather.temp+'°');
      $('#geolocation .currently').text(weather.currently);
      $('#geolocation .high').text('H:'+weather.high);
      $('#geolocation .low').text('L:'+weather.low);

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }

  });

});

// Primary
$.simpleWeather({
    location: 'Spokane, WA',
    success: function(weather) {
      
      // raincoat
      if ( weather.code >= 0 && weather.code <= 18 ) {
        $('#primary .image img').addClass('raincoat' );
    }

      if ( weather.code >= 37 && weather.code <= 47 ) {
        $('#primary .image img').addClass('raincoat' );
    }

      if ( weather.code = 35 ) {
        $('#primary .image img').addClass('raincoat' );
    }

      // hoodie
      if ( weather.code >= 19 && weather.code <= 30 ) {
        $('#primary .image img').addClass('hoodie' );
    }

      // tshirt
      if ( weather.code >= 31 && weather.code <= 34 ) {
        $('#primary .image img').addClass('tshirt' );
    }

      if ( weather.code = 36 ) {
        $('#primary .image img').addClass('tshirt' );
    }
    
      $('#primary .city').text(weather.city);
      $('#primary .temp').text(weather.temp+'°');
      $('#primary .currently').text(weather.currently);
      $('#primary .high').text('H:'+weather.high);
      $('#primary .low').text('L:'+weather.low);

    }, 
    error: function(error) {
      console.log('Go outside!');
    }
 });

//  Secondary
$.simpleWeather({
  location: 'Leavenworth, WA',
  success: function(weather) {

    // raincoat
    if ( weather.code >= 0 && weather.code <= 18 ) {
      $('#secondary .image img').addClass('raincoat' );
  }

    if ( weather.code >= 37 && weather.code <= 47 ) {
      $('#secondary .image img').addClass('raincoat' );
  }

    if ( weather.code = 35 ) {
      $('#secondary .image img').addClass('raincoat' );
  }

    // hoodie
    if ( weather.code >= 19 && weather.code <= 30 ) {
      $('#secondary .image img').addClass('hoodie' );
  }
     
    // tshirt
    if ( weather.code >= 31 && weather.code <= 34 ) {
      $('#secondary .image img').addClass('tshirt' );
  }

    if ( weather.code = 36 ) {
      $('#secondary .image img').addClass('tshirt' );
  }

    $('#secondary .city').text(weather.city);
    $('#secondary .temp').text(weather.temp+'°');
    $('#secondary .currently').text(weather.currently);
    $('#secondary .high').text('H:'+weather.high);
    $('#secondary .low').text('L:'+weather.low);

  }, 
  error: function(error) {
    console.log('Go outside!');
  }
});
