$(document).ready(function() {
    $('#urlForm').submit(function(event) {
      event.preventDefault();

      const data = { 'url': $('input[name=url]').val() };

      $.ajax({
        type: 'POST',
        url: '/shorten',
        data: data,
      }).done(function(data) {
        $('#result').text(data['hash']);
      }).fail(function(xhr, textStatus, errorThrown) {
        console.log(errorThrown);
      });
    })
});