var myMap;
var canvas;
var mapLocations = [];
var mappa = new Mappa('Leaflet');
var options = {
  lat: 20,
  lng: 80,
  zoom: 5,
  style: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
}
var battlesUrl = "https://raw.githubusercontent.com/MathuraMG/indian-history/master/battles.json";
var battles = [];
var filteredBattles = [];

function preload() {
  loadJSON(battlesUrl, gotData);
}

function setup(){
  canvas = createCanvas(window.innerWidth,window.innerHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas)
  fill(200, 100, 100);
  // Only redraw the point when the map change and not every frame.
  myMap.onChange(drawPoint);
  select(".battle").hide();
  select(".heading__year").html(select("#yearSlider").value());
}

function draw(){
}

// We moved everything to this custom function that
// will be trigger only when the map moves
function drawPoint(){
  clear();
  selectAll(".locations").forEach(location => location.hide());
  select(".heading__year").html(select("#yearSlider").value());
  filteredBattles = filterData(document.getElementById("yearSlider").value);
  for(var j =0; j<filteredBattles.length;j++) {
    if(filteredBattles[j].coord[0]) {
      var temp = myMap.latLngToPixel(filteredBattles[j].coord[0], filteredBattles[j].coord[1]);
      mapLocations[filteredBattles[j].id].updateLocation(temp.x,temp.y);
      mapLocations[filteredBattles[j].id].drawLocation();
    }
  }
}

function gotData(data) {
  for(var i =0; i<data.length;i++) {
    battles.push(data[i]);
    //make a constructor for all the map points
    console.log(data[i]);
    mapLocations.push(new mapLocation(i,data[i].coord[0], data[i].coord[1], data[i].year, data[i].name, data[i].dates, data[i].war, data[i].link));
  }
}

function filterData(year) {
  return mapLocations.filter(battle => parseInt(battle.year)==year);
}

class mapLocation {
  constructor(id,x,y,year,name,dates,war,link) {
    this.id = id;
    this.coord = [x, y];
    this.year = year;
    this.name = name;
    this.dates = dates;
    this.war = war;
    this.link = link;
    this.mapButton = createButton(this.name);
    this.mapButton.hide();
    this.mapButton.mousePressed(() => this.updateDetails(this.name, this.dates, this.war, this.link));
    this.mapButton.id("location"+this.id);
    this.mapButton.class("locations");
  }
  updateLocation(posx, posy) {
    this.posx = posx;
    this.posy = posy;
  }
  drawLocation() {
    fill("#b54848");
    rect(this.posx, this.posy, 20, 20);
    this.mapButton.show();
    this.mapButton.position(this.posx+ canvas.elt.getBoundingClientRect().x, this.posy +canvas.elt.getBoundingClientRect().y);
  }
  updateDetails(name,dates, war, link) {
    select(".battle").show();
    select(".battle__name").html(name);
    select(".battle__war").html(war);
    select(".battle__dates").html(dates);
    select(".battle__link").attribute("href",link);
  }
}
