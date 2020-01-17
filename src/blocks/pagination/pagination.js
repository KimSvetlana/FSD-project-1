window.onload = function(){
    var paginationPage = parseInt($('.cp').attr('actpage'), 10);
    $('.cp_i').on('click', function(){
      var go = $(this).attr('href').replace('#!', '');
      if (go === '+1') {
        paginationPage++;
      } else if (go === '-1') {
        paginationPage--;
      }else{
        paginationPage = parseInt(go, 10);
      }
    $('.cp').attr('actpage', paginationPage);
    });
};