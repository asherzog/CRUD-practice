$(document).ready(() => {
  var id = parseInt(window.location.search.replace(/\D/g,''));
  $.get(`http://localhost:3000/api/${id}`, showAll);
});


function showAll(data) {
  data.forEach(function(posting){
    var name = posting.name;
    var comment = posting.comment;
    var email = posting.email;
    var date = posting.date;
    var id = posting.id;
    $('body').append(`
      <div class="row">
        <div class="card horizontal">
          <div class = "col s2">
            <h4>${name}</h4>
            <p>${date}</p>
            <p>${email}</p>
          </div>
          <div class= "col s8 offset-2">
            <p>${comment}</p>
            <a href="../" class="btn">Back</a>
            <a href="../edit?id=${id}" class="btn">Edit</a>
            <a href="../delete?id=${id}" class="btn" id="delete">Delete</a>
          </div>
        </div>
      </div>
    `);
  });
}
