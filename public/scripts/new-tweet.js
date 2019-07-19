//post request for new tweet
const submitForm = () => {
  $('form').on('submit', function(event) {
    event.preventDefault();
    let $newTweetInput = $('#new-tweet-input');
    let charsLeft = 140 - $newTweetInput.val().length;
    if (charsLeft < 0) {
      $('.error-msg-span').text('Error. Maximum limit of 140 exceeded.');
      $('.error-msg').slideDown(200);
    } else if (charsLeft === 140) {
      $('.error-msg-span').text('Error. Please input message.');
      $('.error-msg').slideDown(200);
    } else {
      $('.error-msg').hide();
      $.ajax({
        type: 'POST',
        url: '/tweets/',
        data: $(this).serialize(),
        dataType: 'text'
      }).done(() => {
        loadTweet();
        $newTweetInput.val('');
        $('.counter').text('140');
      });
    }
  });
};

//toggles display of new tweet input area
const hideNewSection = () => {
  $('img.new-tweet-icon').on('click', function(event) {
    $('section.new-tweet').slideToggle(500);
    $('#new-tweet-input').focus();
  });
};

$(document).ready(function() {
  submitForm();
  hideNewSection();
});
