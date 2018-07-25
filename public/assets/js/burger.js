
$(document).ready(function () {

  // UPDATE
  $(".devBtn").on("click", function (e) {
    e.preventDefault();
    var id = $(this).data("id");
    console.log("DEVOUR", id);
    //
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: { devoured: true }
    }).then(function () {
      console.log("Ate the burger!");
      location.reload();
    });
  });

  // CREATE
  $("#create-burger").on("submit", function (e) {
    e.preventDefault();

    $.ajax("/api/burgers", {
      type: "POST",
      data: { burger_name: $("#burgerName").val().trim() }
    }).then(function () {
      console.log("NEW BURGER");
      location.reload();
    })
  });

  //
  //
  // end
});


