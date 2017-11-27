var colors = [
  // reds
  "#F88379", // tea rose
  "#EF597B", // rose
  "#640621", // burgundy
  "#660033", // deep magenta
  "#9C2542", // ruby
  "#DE5D94", // fuchsia
  "#DE5D5A", // persimmon

  // oranges
  "#FF7034", // tangerine
  "#FF9900", // pumpkin
  "#FCC006", // marigold
  "#FFA48E", // papaya
  "#F8981D", // poppy

  // greens
  "#00A86B", // jade

  // blues
  "#8EA5EB", // periwinkle
  "#4267B2", //  blue
  "#B378D3", // violet
  "#6495ED", // cornflower blue
  "#8FDDEA", // pool
  "#62A9E3", // lake
  "#008289", // peacock
  "#3C536F", // night
  "#0065A9", // royal blue

  // purples
  "#9D549C", // beet
];

var ls = localStorage;
var lsNamespace = 'CE.GITHUB_HEADER';
var opts = {
  partyMode: localStorage[lsNamespace + '.PARTY_MODE'] === 'true',
  colorChangeDelay: Number(localStorage[lsNamespace + '.COLOR_CHANGE_DELAY']) || 200,
  animationSpeed: localStorage[lsNamespace + '.HEADER_SWIRL_DURATION'] || '1s'
};

function pickColor() {
  var randomColor = colors[Math.floor((Math.random() * colors.length))];
  document.getElementsByClassName('Header')[0].style.backgroundColor = randomColor;
  document.getElementsByClassName('header-search-scope')[0].style.borderRightColor = randomColor;
  document.getElementsByClassName('mail-status')[0].style.borderColor = randomColor;
}

function alternateColors() {
  setTimeout(function() {
    pickColor();
    alternateColors();
  }, opts.colorChangeDelay);
};

function rotateHeader() {
  var header = document.querySelector('.Header');
  header.style['z-index'] = 1000;
  header.style.position = 'relative';
  header.style.animation = 'circle ' + opts.animationSpeed + ' infinite linear';
}

function startTheParty() {
  alternateColors();
  rotateHeader();
}

if(opts.partyMode) {
  startTheParty()
} else {
  pickColor();
}
