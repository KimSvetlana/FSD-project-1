

$('.datepicker_input.сheck-in').datepicker({
    clearButton: true,
    keyboardNav: false,
    prevHtml: '<svg><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>',
    nextHtml: '<svg><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>',
    offset: 6 ,

    altField: ".datepicker_input.check-out",
    altFieldDateFormat: "dd mm yyyy",
    
    navTitles: {
        days: 'MM <i>yyyy</i>'
    },

    onChangeMonth: function(month, year) {
        var heightContent = $(".datepicker").find(".datepicker--days.datepicker--body").height();
        console.log(heightContent);
        var expectedContentHeight = 227;
        var adjustment = heightContent - expectedContentHeight;
        var normalDatepickerHeight = 369;
        var adjustedDatepickerHeight = normalDatepickerHeight + adjustment;
        $(".datepickers-container .datepicker").height(adjustedDatepickerHeight);
    },

    onHide: function(inst, animationCompleted) {
        if (animationCompleted)
            return;
        // animationCompletedboolean: false;

        // var allDays = $('.datepicker_input.сheck-in').data('datepicker').selectedDates
        // console.log(allDays)

        var datesText = $('.datepicker_input.сheck-in').val();
        // console.log(datesText);
        var dates = datesText.split(',');
        // console.log("dates = " + dates);

        if (dates.length > 0) {
            $('#check_in').val(dates[0]);
        }

        if (dates.length > 1) {
            $('#check_out').val(dates[1]);
            // console.log($('#check_out'));
        }
    },
});

$(".datepicker--buttons").append("<span class='datepicker--button -save-' data-action='hide'>Применить</a></div>");

$('.datepicker_input.check-out').click(function(){
    var dp = $('.datepicker_input.сheck-in').data('datepicker');
    dp.show();
});

$('.datepicker_input.filter__datepicker').datepicker({
    dateFormat: "dd M",
})