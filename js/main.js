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
      $('.slider-controls span').removeClass("selected")
      $(this).addClass('selected')
      var width = $('.deal_main_n1 ul li').width()
      getSelectedAdIndex(function(el){
        var xPos = el * width
        $('.deal_main_n1 ul').animate({
          scrollLeft: xPos
        }, 900)
      })
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

  function getSelectedAdIndex(callback) {
    $('.slider-controls span').each(function(idx, el){
      if ($(el).hasClass("selected")) {
        callback(idx)
      }
    });
  }

  window.onload = setup;

})()
