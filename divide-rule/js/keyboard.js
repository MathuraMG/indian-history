var keymap = {
  74: "j",
  75: "k"
}

var handleKeydown = function(event) {
  switch (keymap[event.which]) {
    case "j":
    $.scrollify.next();
    event.preventDefault();
    break;

    case "k":
    $.scrollify.previous();
    event.preventDefault();
    break;
  }
};

$(function() {
  $(document).keydown(handleKeydown);
});
