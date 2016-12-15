$(document).ready(() => {
  $.getJSON('http://localhost:3000/api', appendPage)
});

function appendPage(data) {
  data.forEach(function(posting){
    var name = posting.name;
    var comment = posting.comment;
    var id = posting.id;
    $('body').append(`
      <div class="row">
        <div class="card horizontal">
          <div class = "col s2">
            <h4>${name}</h4>
          </div>
          <div class= "col s8 offset-2">
            <p>${comment}</p>
            <a href="./id?id=${id}" class="btn">Full Post</a>
          </div>
        </div>
      </div>
    `);
  });
}
