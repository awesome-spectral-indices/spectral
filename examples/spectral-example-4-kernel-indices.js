/*
========
SPECTRAL
========

-----------------------------------
Example 4: Computing Kernel Indices
-----------------------------------

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

// SPEED PALETTE
var speed = palettes.cmocean.Speed[7];

// DATASET TO USE: SENTINEL-2 SR
var dataset = 'COPERNICUS/S2_SR';

// FILTER THE DATASET
var S2 = ee.ImageCollection(dataset).first();

// SCALE THE IMAGE
var S2 = spectral.scale(S2,dataset);

// CHECK THE REQUIRED BANDS FOR NDVI and EVI
print('Required bands for NDVI',spectral.indices.NDVI.bands);
print('Required bands for kNDVI',spectral.indices.kNDVI.bands);

// CREATE SIMPLE VARIABLES FOR THE REQUIRED BANDS
var N = S2.select("B8");
var R = S2.select("B4");

// KERNEL TO USE
var kernel = "RBF";

// REQUIRED PARAMETERS ACCORDING TO THE REQUIRED BANDS
var parameters = {
  // Required bands for NDVI:
  "N": N, 
  "R": R,
  // Required bands for kNDVI: k(N,N) and k(N,R)
  // When using the RBF kernel, k(N,N) = 1.0
  "kNN": 1.0,
  "kNR": spectral.computeKernel(S2,kernel,{
    "a": N,
    "b": R,
    "sigma": N.add(R).divide(2),
  })
};

// COMPUTE THE NDVI and kNDVI
var S2_NDVI_kNDVI = spectral.computeIndex(S2,["NDVI","kNDVI"],parameters);

// CHECK THE NEW BANDS: NDVI, kNDVI
print("New bands added: NDVI, kNDVI",S2_NDVI_kNDVI.bandNames());

// ADD THE NEW BAND TO THE MAP
Map.addLayer(S2_NDVI_kNDVI,{"min":0,"max":1,"bands":"NDVI","palette":speed},"NDVI");
Map.addLayer(S2_NDVI_kNDVI,{"min":0,"max":1,"bands":"kNDVI","palette":speed},"kNDVI");
Map.centerObject(S2_NDVI_kNDVI);