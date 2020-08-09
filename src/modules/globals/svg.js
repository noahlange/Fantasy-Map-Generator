// append svg layers (in default order)
window.svg = d3.select("#map");
window.viewbox = svg.select("#viewbox");
window.legend = svg.append("g").attr("id", "legend");
window.defs = svg.select("#deftemp");
window.scaleBar = svg.select("#scaleBar");
window.ocean = viewbox.append("g").attr("id", "ocean");
window.oceanLayers = ocean.append("g").attr("id", "oceanLayers");
window.oceanPattern = ocean.append("g").attr("id", "oceanPattern");
window.lakes = viewbox.append("g").attr("id", "lakes");
window.landmass = viewbox.append("g").attr("id", "landmass");
window.texture = viewbox.append("g").attr("id", "texture");
window.terrs = viewbox.append("g").attr("id", "terrs");
window.biomes = viewbox.append("g").attr("id", "biomes");
window.cells = viewbox.append("g").attr("id", "cells");
window.gridOverlay = viewbox.append("g").attr("id", "gridOverlay");
window.coordinates = viewbox.append("g").attr("id", "coordinates");
window.compass = viewbox.append("g").attr("id", "compass");
window.rivers = viewbox.append("g").attr("id", "rivers");
window.terrain = viewbox.append("g").attr("id", "terrain");
window.relig = viewbox.append("g").attr("id", "relig");
window.cults = viewbox.append("g").attr("id", "cults");
window.regions = viewbox.append("g").attr("id", "regions");
window.statesBody = regions.append("g").attr("id", "statesBody");
window.statesHalo = regions.append("g").attr("id", "statesHalo");
window.provs = viewbox.append("g").attr("id", "provs");
window.zones = viewbox.append("g").attr("id", "zones").style("display", "none");
window.borders = viewbox.append("g").attr("id", "borders");
window.stateBorders = borders.append("g").attr("id", "stateBorders");
window.provinceBorders = borders.append("g").attr("id", "provinceBorders");
window.routes = viewbox.append("g").attr("id", "routes");
window.roads = routes.append("g").attr("id", "roads");
window.trails = routes.append("g").attr("id", "trails");
window.searoutes = routes.append("g").attr("id", "searoutes");
window.temperature = viewbox.append("g").attr("id", "temperature");
window.coastline = viewbox.append("g").attr("id", "coastline");
window.ice = viewbox.append("g").attr("id", "ice").style("display", "none");
window.prec = viewbox.append("g").attr("id", "prec").style("display", "none");
window.population = viewbox.append("g").attr("id", "population");
window.labels = viewbox.append("g").attr("id", "labels");
window.icons = viewbox.append("g").attr("id", "icons");
window.burgIcons = icons.append("g").attr("id", "burgIcons");
window.anchors = icons.append("g").attr("id", "anchors");
window.armies = viewbox
  .append("g")
  .attr("id", "armies")
  .style("display", "none");
window.markers = viewbox
  .append("g")
  .attr("id", "markers")
  .style("display", "none");
window.fogging = viewbox
  .append("g")
  .attr("id", "fogging-cont")
  .attr("mask", "url(#fog)")
  .append("g")
  .attr("id", "fogging")
  .style("display", "none");
window.ruler = viewbox.append("g").attr("id", "ruler").style("display", "none");
window.debug = viewbox.append("g").attr("id", "debug");
window.burgLabels = labels.append("g").attr("id", "burgLabels");
