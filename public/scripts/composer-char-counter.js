//character function counter
const characterCounter = () => {
  $('#new-tweet-input').on('keyup', function() {
    let $counter = $(this)
      .siblings('div')
      .children('.counter');

    let charsLeft = 140 - $(this).val().length;
    $counter.text(charsLeft);
    if (charsLeft < 0) {
      $counter.addClass('invalid-font');
    } else {
      $counter.removeClass('invalid-font');
    }
  });
};

$(document).ready(function() {
  characterCounter();
});

export.modules = {characterCount};