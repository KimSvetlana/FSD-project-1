$('#dateFrom').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Bc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
});
var monthNames = $( "#dateFrom" ).datepicker( "option", "monthNames" );
$( "#dateFrom" ).datepicker( "option", "monthNames", [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ] );
  
$('#dateTo').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Bc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
});
var monthNames = $( "#dateTo" ).datepicker( "option", "monthNames" );
$( "#dateTo" ).datepicker( "option", "monthNames", [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ] );

var dates = $("#dateFrom, #dateTo").datepicker({
    onSelect: function(selectedDate){
      var option = this.id == "from" ? "minDate" : "maxDate",
      instance = $( this ).data( "datepicker" ),
      date = $.datepicker.parseDate(
      instance.settings.dateFormat || $.datepicker._defaults.dateFormat,
      selectedDate, instance.settings);
      dates.not(this).datepicker("option", option, date);
    }
});