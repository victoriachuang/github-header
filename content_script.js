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
]

var randomColor = colors[Math.floor((Math.random() * colors.length))];
document.getElementsByClassName('header')[0].style.backgroundColor = randomColor;
document.getElementsByClassName('header-search-scope')[0].style.borderRightColor = randomColor;
document.getElementsByClassName('mail-status')[0].style.borderColor = randomColor;
