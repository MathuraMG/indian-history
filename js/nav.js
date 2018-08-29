var Nav = function(opts) {
  this.project = opts.project;
  this.navEl = opts.navEl;
  this.currentIndex = opts.currentIndex;
  this.init();
};

Nav.prototype.init = function() {
  this.navEl.empty();
  this.navItems = [];
  this.data = window.data[this.project];
  this.data.forEach(this.addNavButtons.bind(this));
  console.log(this.currentIndex);
  // debugger;
  console.log($.scrollify.currentIndex());
  $($(".nav-button")[this.currentIndex]).addClass('nav-button--selected');
  // $(".nav-button")[this.currentIndex].addClass('nav-button--selected');
};


Nav.prototype.addNavButtons = function(page, index) {
  let that = this;
  if (!page.imageUrl) { return; }

  let buttonEl = $("<button>")
                .addClass("nav-button")
                .html(page.title)
                .click(function(){that.navigate(index)})

  //
  this.navItems.push(buttonEl);
  // mapEl.append(mapImgEl);

  this.navEl.append(buttonEl);
};
//
Nav.prototype.navigate = function(index)
{
  let indexStr = '#' + (parseInt(index)+1)
  $.scrollify.move(indexStr);
  console.log(this.currentIndex);
  $($(".nav-button")[this.currentIndex]).removeClass('nav-button--selected');
  this.currentIndex = index;
  $($(".nav-button")[this.currentIndex]).addClass('nav-button--selected');
}
