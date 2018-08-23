var keymap = {
  74: "j",
  75: "k" 
}

var handleKeydown = function(event) {
  switch (keymap[event.which]) {
    case "j":
    $.scrollify.next();
    break;
    
    case "k":
    $.scrollify.previous();
    break;
  }
  
  event.preventDefault();
};

$(function() {
  $(document).keydown(handleKeydown);
});