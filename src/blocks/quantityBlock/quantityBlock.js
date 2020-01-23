$(function() {
    (function quantityProducts() {
      var $quantityArrowMinus = $(".quantity__arrow_minus");
      var $quantityArrowPlus = $(".quantity__arrow_plus");

      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);

      function quantityMinus() {
        var $quantityNum = $(this).parent().find(".quantity__num");
        if ($quantityNum.val() >= 1) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
      }

      function quantityPlus() {
        var $quantityNum = $(this).parent().find(".quantity__num");
        $quantityNum.val(+$quantityNum.val() + 1);
      }
    })();
});