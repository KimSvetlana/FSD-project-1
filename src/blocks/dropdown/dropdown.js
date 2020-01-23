
$('.dropdown__select').click(function(){

    // Найдем id дропдауна

    var idElement = $(this).parent().attr('id');

    var thisSelector = $(this);

    var dropdownIcon =  $(this).find(".dropdown__icon")
   

    /* Заносим выпадающий список в переменную */
    var dropBlock = $(this).parent().find('.dropdown__child');
    
    /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
    if( dropBlock.is(':hidden') ) {
      dropBlock.slideDown();
      
      /* Выделяем ссылку открывающую select */
      $(this).addClass('active'); 
      
      dropdownIcon.addClass("active");    

      var childItems = dropBlock.find('.child__item');
      
      // При клике по каждому элементу
      childItems.click(function(){

        // Обходим все элементы и суммируем значения
        quantitySum = 0;
        childItems.each(function(){
          var quantityNum = $(this).find('.quantity__num').val();
          quantitySum += +quantityNum;
        });


        var quantityBedrooms = dropBlock.find('.child__item:first-child').find('.quantity__num').val();
        var quantityBeds = dropBlock.find('.child__item:nth-child(2)').find('.quantity__num').val();
        var quantityBathrooms = dropBlock.find('.child__item:last-child').find('.quantity__num').val();
        console.log(quantityBedrooms, quantityBeds, quantityBathrooms);

        // Записываем сумму гостей в селектор
        if(idElement === "dropdown-guests"){

          if (quantitySum < 1){
            thisSelector.find('p').html("Сколько гостей");
          }

          thisSelector.find('p').html(quantitySum + " гостей");
        }
        else{
          
          if (quantityBedrooms < 1 && quantityBeds < 1 && quantityBathrooms < 1 ) {
            thisSelector.find('p').html("Удобства номера");
          }
          else{
            thisSelector.find('p').html(quantityBedrooms + " спальни, " + quantityBeds + " кровати, " + quantityBathrooms + " ванные комнаты" )
          }
        }
        
        
        // if (quantitySum < 1){
        //   thisSelector.find('p').html("Сколько гостей");
        // }
       
        // Кнопка Очистки появлется, когда гостей больше 0
        var resetButton = dropBlock.find(".dropdown__button_reset");
        if (quantitySum > 0) {
          resetButton.show();
        }
        else {
          resetButton.hide();
        }

        resetButton.click(function () {
          thisSelector.find('p').html('Сколько гостей');
          childItems.each(function () {
            $(this).find('.quantity__num').val('0');
          })
          resetButton.hide();
        })

      });

      /* Скрываем выпадающий блок */
      dropBlock.find('.dropdown__button_save').click(function(){
        thisSelector.removeClass('active');
        dropdownIcon.removeClass("active"); 
        dropBlock.slideUp();
      });

      /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
    } else {
      $(this).removeClass('active'); 
      dropBlock.slideUp();
      dropdownIcon.removeClass("active"); 
    }
    
    /* Предотвращаем обычное поведение ссылки при клике */
    return false;
});