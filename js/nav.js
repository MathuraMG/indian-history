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
  $($(".nav-button")[this.currentIndex]).addClass('nav-button--selected');
  let that = this;
  $(document).keydown(function() {
    console.log(that.currentIndex);
    $($(".nav-button")[that.currentIndex]).removeClass('nav-button--selected');
    that.currentIndex = $.scrollify.currentIndex();
    console.log($.scrollify.currentIndex());
    $($(".nav-button")[that.currentIndex]).addClass('nav-button--selected');
  });
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
  $($(".nav-button")[this.currentIndex]).removeClass('nav-button--selected');
  this.currentIndex = index;
  $($(".nav-button")[this.currentIndex]).addClass('nav-button--selected');
}

// $(function() {
//   console.log('loooo');
//   $(document).keydown(handleKeydown1);
// });
//
// var handleKeydown1 = function(event) {
//   console.log(Nav);
//   console.log(this.currentIndex);
//   $($(".nav-button")[this.currentIndex]).removeClass('nav-button--selected');
//   this.currentIndex = index;
//   $($(".nav-button")[this.currentIndex]).addClass('nav-button--selected');
// };
