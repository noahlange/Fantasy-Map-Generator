// d3 zoom behavior
window.scale = 1;
window.viewX = 0;
window.viewY = 0;
window.zoom = d3.zoom().scaleExtent([1, 20]).on("zoom", zoomed);
