var mapSelector = ".map";
var pageSelector = ".page";

var maps;
var pages;

var renderPage = function(pageNumber) {
  hideAllMaps();
  showMaps(pageNumber);
};

var hideAllMaps = function() {
  maps.addClass("hidden");
};

var showMaps = function(pageNumber) {
  maps.each(function(map) {
    var map = $(this);

    if (parseInt(map.data("page")) <= pageNumber) {
      map.removeClass("hidden");
    }
  });
};

var Timeline = function(opts) {
  this.project = opts.project;
  this.mapsEl = opts.mapsEl;
  this.pagesEl = opts.pagesEl;
};

Timeline.prototype.init = function() {
  var data = window.data[this.project];

  data.forEach(this.addPage.bind(this));
};

Timeline.prototype.addPage = function(page, index) {
  if (page.imageUrl) {
    var pageEl = $("<div>").addClass("page").data("page", index);

    this.pagesEl.append(pageEl);
  }
}

$(function() {
  var timeline = new Timeline({
    project: "divideRule",
    mapsEl: $(".view"),
    pagesEl: $(".pages")
  });

  timeline.init();

  maps = $(mapSelector);
  pages = $(pageSelector);

  $.scrollify({
    section : pageSelector,
    before: renderPage
  });
});
