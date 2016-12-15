$(document).ready(() => {
  const id = parseInt(window.location.search.replace(/\D/g,''));
  var body = {};
  $('#form-submit').click(() => {
    body.name = $('#name').val();
    body.comment = $('#comment').val();
    body.email = $('#email').val();
    $.ajax({
      url: `http://localhost:3000/api/${id}`,
      type: 'PUT',
      data: body,
      success: function(id) {
        console.log(id);
      }
    });
  });
});
