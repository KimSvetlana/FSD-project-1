$(function(){
    var registrationForm = $('.registration-form');

    $('.button_header_registration').click(function(){
        registrationForm.addClass('active');
    });

    $('.button_form_create').click(function(){
        registrationForm.addClass('active');
    });
        
    $('.button_form_login').click (function(){
        registrationForm.removeClass('active');
    });
});
