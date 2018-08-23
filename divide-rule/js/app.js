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
}

var showMaps = function(pageNumber) {
  maps.each(function(map) {
    var map = $(this);
    
    if (parseInt(map.data("page")) <= pageNumber) {
      map.removeClass("hidden");
    }
  });
}

$(function() {
  maps = $(mapSelector);
  pages = $(pageSelector);
  
  $.scrollify({
    section : pageSelector,
    before: renderPage
  });
});
