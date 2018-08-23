let mapFiles = ['1812', '1833', '1837-38', '1854', '1860-61', '1865-66', '1866-69', '1873-74', '1876-78'];

function createInputs() {
  mapFiles.forEach(function(mapFile) {
    let inputBox = $('<input>').addClass('famine__input');
    inputBox.attr('id', mapFile);
    inputBox.attr('type', 'checkbox');
    let inputLabel = $('<label>').attr('for', mapFile);
    inputLabel.append(mapFile);
    $('.famines__inputs').append(inputBox);
    $('.famines__inputs').append(inputLabel);
    inputBox.on('click', function(){
      let imgLink = '#' + this.id + '-image';
       if ( $(this).is(':checked') ) {
        console.log('poop');
        $(imgLink).show();
       }
       else {
        console.log('not poop');
        $(imgLink).hide();
       }
    });
  });
}

function createMaps() {
  mapFiles.forEach(function(mapFile) {
    let mapURL = 'assets/' + mapFile + '.png';
    let mapImage = $('<img>').addClass('famine__image');
    mapImage.attr('src', mapURL);
    mapImage.attr('id', mapFile + '-image');
    $('.famines__container').append(mapImage);
  });
}

window.onload = function() {
  createInputs();
  createMaps();
}