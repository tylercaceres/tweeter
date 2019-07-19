//toggling of visibility between compose tweet and top of page button
const windowScroll = () => {
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $('#scroll-to-top-btn').addClass('scrollVisible');
      $('nav>div.new-tweet-div').addClass('scrollHidden');
    } else {
      $('#scroll-to-top-btn').removeClass('scrollVisible');
      $('nav>div.new-tweet-div').removeClass('scrollHidden');
    }
  });
};

//clicking arrow button sends to top of page
const scrollToTop = () => {
  $('#scroll-to-top-btn').on('click', function(event) {
    $(window).scrollTop(0);
    $('#new-tweet-input').focus();
  });
};

$(document).ready(function() {
  windowScroll();
  scrollToTop();
});
