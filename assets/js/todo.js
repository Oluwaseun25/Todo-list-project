$(document).ready(function() {
    function toggleListItemClass() {
      $(this).toggleClass("listDesign");
    }
  
    function removeListItem(event) {
      $(this)
        .parent()
        .fadeOut(400, function() {
          $(this).remove();
        });
      event.stopPropagation();
    }
  
    function addNewTodoItem(event) {
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
    }
  
    function toggleInputVisibility() {
      $("input[type='text']").fadeToggle(400);
    }
  
    $("ul").on("click", "li", toggleListItemClass);
    $("ul").on("click", "span", removeListItem);
    $("input[type='text']").on("keypress", addNewTodoItem);
    $("h1 > i").on("click", toggleInputVisibility);
  });
  