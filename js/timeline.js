var Timeline = function(opts) {
  this.project = opts.project;
  this.mapsEl = opts.mapsEl;
  this.pagesEl = opts.pagesEl;
  this.init();
};

Timeline.prototype.init = function() {
  this.mapsEl.empty();
  this.pagesEl.empty();
  this.maps = [];
  this.pages = [];

  this.data = window.data[this.project];
  this.data.forEach(this.addPage.bind(this));

  this.maps[0] && this.maps[0].removeClass("hidden");
};

Timeline.prototype.addPage = function(page, index) {
  this.addMap(page, index);
  this.addPageSection(page, index);
};

Timeline.prototype.addMap = function(page, index) {
  if (!page.imageUrl) { return; }

  let mapEl = $("<div>")
                .addClass("map")
                .addClass("hidden")
                .data("page", index)

  let mapImgEl = $("<img>")
                .addClass("map-image")
                .attr("src", page.imageUrl);

  if(page.title) {
    let titleEl = $("<h1>")
    .addClass("map-title")
    .html(page.title);
    mapEl.append(titleEl);
  }
  if(page.subtitle) {
    let subtitleEl = $("<h2>")
    .addClass("map-subtitle")
    .html(page.subtitle);
    mapEl.append(subtitleEl);
  }


  this.maps.push(mapEl);
  mapEl.append(mapImgEl);

  this.mapsEl.append(mapEl);
};

Timeline.prototype.addPageSection = function(page, index) {
  let pageEl = $("<div>")
                .addClass("page")
                .data("page", index);
  this.pages.push(pageEl);
  this.pagesEl.append(pageEl);
};

Timeline.prototype.renderPage = function(pageNumber) {
  this.hideAllMaps();
  this.showMaps(pageNumber);
};

Timeline.prototype.hideAllMaps = function() {
  this.maps.forEach(function(map) { map.addClass("hidden") });
};

Timeline.prototype.showMaps = function(pageNumber) {
  let that = this;
  this.maps.forEach(function(map) {
    if (parseInt(map.data("page")) <= pageNumber) {
      that.hideAllMaps();
      map.removeClass("hidden");
    }
  });
};
