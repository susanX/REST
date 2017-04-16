// This is your client js code
// This is where we do our request from and manipulate the html page
$(function(){

  // Using jQuery we are access elements and assigning the Handlebars template
  var $carsList = $('#cars-list');//
  var source = $('#car-template').html();//a
  var templateFn = Handlebars.compile(source);//b

  // GET request to the Server 'server.js'
  $.ajax({
      method: 'GET',
      // We need an absolute path here because its been called from the client side
      url: 'http://localhost:3333/cars',
    }).done(function(cars){


        // Loop through the response which we have called cars
        cars.forEach(function(car){
          // Use Handlebars template and insert data for that car in loop
          var newHTML = templateFn(car);
          // Get the cars list we defined above and append the Handlebars template
          $carsList.append(newHTML);
        });


      }).fail(function(err){ //just to show you how to error catch
        console.log('Error', err.message);
      });
})
