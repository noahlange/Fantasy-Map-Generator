import jQuery from "jQuery";
import * as d3 from "d3";

const graphWidth = +mapWidthInput.value;
const graphHeight = +mapHeightInput.value;

Object.assign(window, {
  jQuery,
  $: jQuery,
  d3,
  mapWidthInput,
  mapHeightInput,
  // voronoi graph extention, cannot be changed arter generation
  graphWidth,
  graphHeight,
  // svg canvas resolution, can be changed
  svgWidth: graphWidth,
  svgHeight: graphHeight,
});
