// Popper
$(document).ready(function() {
  $('.materials-item-btn').on('click', function(e) {
    e.stopPropagation();
    var $popover = $(this).next('.materials-popover');

    $('.materials-popover').not($popover).hide();

    $popover.toggle();
  });

  $(document).on('click', function(e) {
    $('.materials-popover').each(function() {
      var $pop = $(this);
      var $btn = $pop.prev('.materials-item-btn');

      if (!$pop.is(e.target) && $pop.has(e.target).length === 0 &&
          !$btn.is(e.target) && $btn.has(e.target).length === 0) {
        $pop.hide();
      }
    });
  });
});