//scroll to top of the page
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
