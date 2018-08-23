$(function() {
  var timeline = new Timeline({
    project: "divideRule",
    mapsEl: $(".view"),
    pagesEl: $(".pages")
  });

  $.scrollify({
    section : ".page",
    before: timeline.renderPage.bind(timeline)
  });
});
