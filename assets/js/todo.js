// nb+\=-&_ 

$("ul").on("click","li",function(){
    $(this).toggleClass("listDesign");
});

$("ul").on("click","span",function(event){ 
    // $(this).parent().remove(); use fade instead of remove
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
    event.stopPropagation();
    // event propagation is used to stop event bubblin
});

$("input[type = 'text'").on("keypress", function(event){
    if(event.which === 13){
        // get new todo text from input
        var todoText = $(this).val();
        // remove value from input after pressin enter
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "  + todoText + " </li>" )
    } 
});

$("h1 > i").on("click",function(){
    $("input[type = 'text'").fadeToggle(400);
})