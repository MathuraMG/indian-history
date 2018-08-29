$(function() {
  let timeline = new Timeline({
    project: "famine",
    mapsEl: $(".view"),
    pagesEl: $(".pages")
  });

  $.scrollify({
    section : ".page",
    before: timeline.renderPage.bind(timeline)
  });
  
  let nav = new Nav({
    project: "famine",
    navEl: $(".nav-content"),
    currentIndex: $.scrollify.currentIndex()
  });



});
