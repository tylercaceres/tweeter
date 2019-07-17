$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    let charsLeft = 140 - $('#new-tweet-input').val().length;
    if (charsLeft < 0) {
      alert('Too many characters. Please reduce.');
    } else if (charsLeft === 140) {
      alert('No message entered');
    } else {
      $.ajax({
        type: 'POST',
        url: '/tweets/',
        data: $(this).serialize(),
        dataType: 'text'
      }).done(() => {
        loadTweet();
      });
    }
  });
});
