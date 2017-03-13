var colors = [
  // reds
  "#F88379", // tea rose
  "#EF597B", // rose
  "#640621", // burgundy
  "#660033", // deep magenta
  "#9C2542", // ruby

  // oranges
  "#FF7034", // tangerine
  "#FF9900", // pumpkin
  "#FCC006", // marigold

  // greens
  "#00A86B", // jade

  // blues
  "#8EA5EB", // periwinkle
  "#4267B2", //  blue
  "#B378D3", // violet
  "#6495ED", // cornflower blue
]

var randomColor = colors[Math.floor((Math.random() * colors.length))];
document.querySelector('.notification-indicator .mail-status').style.borderColor = randomColor;
document.getElementsByClassName('header')[0].style.backgroundColor = randomColor;
document.getElementsByClassName('header-search-scope')[0].style.borderRightColor = randomColor;
document.getElementsByClassName('mail-status')[0].style.borderColor = randomColor;
