/*
========
SPECTRAL
========

------------------------------
Example 2: Computing One Index
------------------------------

=================
GitHub Repository
=================

spectral module: https://github.com/davemlz/spectral
Awesome Spectral Indices for GEE: https://github.com/davemlz/awesome-ee-spectral-indices
*/

// REQUIRE THE SPECTRAL MODULE
var spectral = require("users/dmlmont/spectral:spectral");

// REQUIRE THE PALETTES MODULE
var palettes = require('users/gena/packages:palettes');

// HALINE PALETTE
var haline = palettes.cmocean.Haline[7];

// LOCATION OF INTEREST
var virginIslands = ee.Geometry.Point([-64.629,18.431]);

// DATASET TO USE: SENTINEL-2 SR
var S2 = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterBounds(virginIslands)
  .filterDate('2020-01-01','2021-01-01')
  .first();

// CHECK THE REQUIRED BANDS FOR NDVI
print('Required bands for NDVI',spectral.indices.NDVI.bands);

// REQUIRED PARAMETERS ACCORDING TO THE REQUIRED BANDS
var parameters = {
  "N": S2.select("B8"),
  "R": S2.select("B4")
};

// COMPUTE THE NDVI
var S2_NDVI = spectral.computeIndex(S2,"NDVI",parameters);

// CHECK THE NEW BAND: NDVI
print("New band added: NDVI",S2_NDVI.bandNames());

// ADD THE NEW BAND TO THE MAP
Map.addLayer(S2_NDVI,{"min":0,"max":1,"bands":"NDVI","palette":haline},"NDVI");
Map.centerObject(S2_NDVI);