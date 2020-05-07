$(document).ready(function() {
    console.log('js/index.js loaded');

    $('#urlForm').submit(function(event) {
      event.preventDefault();

      const data = { 'url': $('input[name=url]').val() };

      $.ajax({
        type: 'POST',
        url: '/shorten',
        data: data,
      }).done(function(data) {
        $('#result').text(window.location.origin + '/' + data['hash']);
        $(".newUrl").css("display", "block");
      }).fail(function(xhr, textStatus, errorThrown) {
        console.log(errorThrown);
      });
    });

    $(".copy").click(function() {
        var temp = $("<input>");
        $("body").append(temp);
        temp.val($("#result").text()).select();
        document.execCommand("Copy");
        temp.remove();
    })
});
