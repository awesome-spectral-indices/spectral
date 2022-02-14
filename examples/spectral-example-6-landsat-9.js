/*
========
SPECTRAL
========

-----------------------------------------
Example 6: Spectral Indices for Landsat-9
-----------------------------------------

=================
GitHub Repository
=================

spectral module: https://github.com/davemlz/spectral
Awesome Spectral Indices for GEE: https://github.com/davemlz/awesome-spectral-indices
*/

// REQUIRE THE SPECTRAL MODULE
var spectral = require("users/dmlmont/spectral:spectral");

// REQUIRE THE PALETTES MODULE
var palettes = require('users/gena/packages:palettes');

// VIRIDIS PALETTE
var viridis = palettes.matplotlib.viridis[7];

// LOCATION OF INTEREST
var palomino = ee.Geometry.Point([-73.5549,11.2503]);

// DATASET TO USE: LANDSAT-9
var dataset = 'LANDSAT/LC09/C02/T1_L2';

// FILTER THE DATASET
var L9 = ee.ImageCollection(dataset)
  .filterBounds(palomino)
  .sort('CLOUD_COVER')
  .first();

// SCALE THE IMAGE (LANDSAT 9 PARAMETERS ARE THE SAME AS LANDSAT 8)
var L9 = spectral.scale(L9,'LANDSAT/LC08/C02/T1_L2');
var L9 = spectral.offset(L9,'LANDSAT/LC08/C02/T1_L2');

// CHECK THE REQUIRED BANDS FOR NIRv
print('Required bands for NIRv',spectral.indices.NIRv.bands);

// REQUIRED PARAMETERS ACCORDING TO THE REQUIRED BANDS
var parameters = {
  "N": L9.select("SR_B5"),
  "R": L9.select("SR_B4")
};

// COMPUTE THE NIRv
var L9 = spectral.computeIndex(L9,"NIRv",parameters);

// CHECK THE NEW BANDS: NIRv
print("New bands added: NIRv",L9.bandNames());

// ADD THE NEW BAND TO THE MAP
Map.addLayer(L9,{"min":0,"max":0.3,"bands":["SR_B4","SR_B3","SR_B2"]},"RGB");
Map.addLayer(L9,{"min":0,"max":0.5,"bands":"NIRv","palette":viridis},"NIRv");
Map.centerObject(L9);