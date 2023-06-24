$(document).ready(function() {
    // Event handler for toggling class on li elements
    $("ul").on("click", "li", function() {
      $(this).toggleClass("listDesign");
    });
  
    // Event handler for removing li elements
    $("ul").on("click", "span", function(event) {
      $(this)
        .parent()
        .fadeOut(400, function() {
          $(this).remove();
        });
      event.stopPropagation();
    });
  
    // Event handler for adding new todo items
    $("input[type='text']").on("keypress", function(event) {
      if (event.which === 13) {
        var todoText = $(this).val().trim();
  
        if (todoText) {
          $(this).val("");
  
          var newTodo = $("<li>").html(`
            <span><i class="fa fa-trash"></i></span>
            ${todoText}
          `);
  
          $("ul").append(newTodo);
        }
      }
    });
  
    // Event handler for toggling input visibility
    $("h1 > i").on("click", function() {
      $("input[type='text']").fadeToggle(400);
    });
  });
  