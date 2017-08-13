(function() {

  var lockedScroll = false;

  function setup() {
    $('#view_order_btn, #cart, .item_notif').click(function() {
      $('.order-bg').toggle();
      toggleScroll();
    });
    $('.order-bg').on('click', function(e) {
      if (e.target !== this)
        return;

      toggleScroll();
      $('.order-bg').toggle();
    });
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
