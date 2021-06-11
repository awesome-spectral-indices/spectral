/*
========
SPECTRAL
========

-------------------------------------
Example 3: Computing Multiple Indices
-------------------------------------

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

// VIRIDIS PALETTE
var viridis = palettes.matplotlib.viridis[7];

// LOCATION OF INTEREST
var malta = ee.Geometry.Point([14.387,35.921]);

// DATASET TO USE: SENTINEL-2 SR
var dataset = 'COPERNICUS/S2_SR';

// FILTER THE DATASET
var S2 = ee.ImageCollection(dataset)
  .filterBounds(malta)
  .filterDate('2020-01-01','2021-01-01')
  .first();
  
// SCALE THE IMAGE
var S2 = spectral.scale(S2,dataset);

// CHECK THE REQUIRED BANDS FOR NDVI and SAVI
print('Required bands for NDVI',spectral.indices.NDVI.bands);
print('Required bands for SAVI',spectral.indices.SAVI.bands);

// REQUIRED PARAMETERS ACCORDING TO THE REQUIRED BANDS
var parameters = {
  "N": S2.select("B8"),
  "R": S2.select("B4"),
  "L": 0.5, // Default Canopy Background for SAVI
};

// COMPUTE THE NDVI and SAVI
var S2_NDVI_SAVI = spectral.computeIndex(S2,["NDVI","SAVI"],parameters);

// CHECK THE NEW BANDS: NDVI, SAVI
print("New bands added: NDVI, SAVI",S2_NDVI_SAVI.bandNames());

// ADD THE NEW BAND TO THE MAP
Map.addLayer(S2_NDVI_SAVI,{"min":0,"max":1,"bands":"NDVI","palette":viridis},"NDVI");
Map.addLayer(S2_NDVI_SAVI,{"min":0,"max":1,"bands":"SAVI","palette":viridis},"SAVI");
Map.centerObject(S2_NDVI_SAVI);