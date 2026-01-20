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

//Сurrency Еxchange
$(function () {
  const RATE = 70;

  function formatPrice(value) {
    return value.toLocaleString('ru-RU');
  }

  function setRub($card) {
    const oldPrice = Number($card.data('old'));
    const newPrice = Number($card.data('new'));

    $card.find('.tariff-old-price').text(formatPrice(oldPrice));
    $card.find('.tariff-new-price').text(formatPrice(newPrice));
    $card.find('.tariff-currency').text('₽');

    $card.find('.is-rub').addClass('is-active');
    $card.find('.is-usd').removeClass('is-active');
  }

  function setUsd($card) {
    const oldPrice = Math.round(Number($card.data('old')) / RATE);
    const newPrice = Math.round(Number($card.data('new')) / RATE);

    $card.find('.tariff-old-price').text(formatPrice(oldPrice));
    $card.find('.tariff-new-price').text(formatPrice(newPrice));
    $card.find('.tariff-currency').text('$');

    $card.find('.is-usd').addClass('is-active');
    $card.find('.is-rub').removeClass('is-active');
  }

  $('.tariffs-card').each(function () {
    setRub($(this));
  });

  $(document).on('click', '.is-rub', function () {
    setRub($(this).closest('.tariffs-card'));
  });

  $(document).on('click', '.is-usd', function () {
    setUsd($(this).closest('.tariffs-card'));
  });
});

// Smooth Scroll
$(function () {
  const HEADER_HEIGHT = $('.navbar').outerHeight();

  $('a[href^="#"]').on('click', function (e) {
    const targetId = $(this).attr('href');

    if (targetId.length > 1 && $(targetId).length) {
      e.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $(targetId).offset().top - HEADER_HEIGHT
        },
        600
      );

      $('.navbar-collapse').collapse('hide');
    }
  });
});