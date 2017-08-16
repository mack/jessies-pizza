(function() {

  var lockedScroll = false;

  function setup() {
    $('#view_order_btn, #cart, .item_notif').click(function() {
      $('.order-bg').fadeIn(200, function() {
        toggleScroll();
      });
    });
    $('.order-bg, #close-order-from-btn').on('click', function(e) {
      if (e.target !== this)
        return;

      $('.order-bg').fadeOut(100, function() {
        toggleScroll();
      });
    });
    $('.slider-controls > span').click(function() {
      var width = $('.deal_main_n1 ul li').width()

      $('.deal_main_n1 ul').animate({
        scrollLeft: width
      }, 900)

    })
  }

  function toggleScroll() {
    if (lockedScroll == false) {
      $('body').addClass('stop-scrolling')
      lockedScroll = true;
    } else {
      lockedScroll = false;
      $('body').removeClass('stop-scrolling')
    }
  }

  window.onload = setup;

})()
