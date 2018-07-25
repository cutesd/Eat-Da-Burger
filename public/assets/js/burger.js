$(document).ready(function () {
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
});


/*
 // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
*/