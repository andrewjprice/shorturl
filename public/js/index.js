$(document).ready(function() {
    $('#urlForm').submit(function(event) {
      event.preventDefault();

      const data = { 'url': $('input[name=url]').val() };

      $.ajax({
        type: 'POST',
        url: '/url',
        data: data,
      }).done(function(data) {
        $('#result').text(data);
      }).fail(function(xhr, textStatus, errorThrown) {
        console.log(errorThrown);
      });
    })
});