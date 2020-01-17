$( function() {
    $( "#slider-range" ).slider({
      range: true,
      step: 500,
      min: 500,
      max: 15000,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + "₽ - " + ui.values[ 1 ] + "₽");
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
      "₽ - " + $( "#slider-range" ).slider( "values", 1 ) + "₽" );
  } );