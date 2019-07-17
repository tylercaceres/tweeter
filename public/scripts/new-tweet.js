$(document).ready(function() {
  $('form').submit(function(event) {
    let charsLeft = 140 - $('this textarea').val().length;
    console.log(charsLeft);

    console.log($(this).serialize());
    event.preventDefault();
    $.ajax('/tweets/', {
      type: 'POST',
      data: $(this).serialize(),
      dataType: 'text'
    });
  });
});
