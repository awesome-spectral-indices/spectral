/*
========
SPECTRAL
========

---------------------------------------------------
Example 5: Mapping Indices Over an Image Collection
---------------------------------------------------

=================
GitHub Repository
=================

spectral module: https://github.com/davemlz/spectral
Awesome Spectral Indices for GEE: https://github.com/davemlz/awesome-ee-spectral-indices
*/

// REQUIRE THE SPECTRAL MODULE
var spectral = require("users/dmlmont/spectral:spectral");

// LOCATION OF INTEREST
var pivot = ee.Geometry.Point([27.724714088249822, 26.485182349687395]).buffer(250);

// CHECK THE REQUIRED BANDS FOR NDVI, GNDVI and SeLI
print('Required bands for NDVI',spectral.indices.NDVI.bands);
print('Required bands for GNDVI',spectral.indices.GNDVI.bands);
print('Required bands for SeLI',spectral.indices.SeLI.bands);

// DATASET TO USE: SENTINEL-2 SR
var dataset = 'COPERNICUS/S2_SR';

// FUNCTION TO MAP OVER AN IMAGE COLLECTION
function addIndices(img) {
  
  // REQUIRED PARAMETERS ACCORDING TO THE REQUIRED BANDS
  var parameters = {
    "N": img.select("B8"),
    "R": img.select("B4"),
    "G": img.select("B3"),
    "RE1": img.select("B5"),
    "N2": img.select("B8A"),
  };
  
  // SCALE THE IMAGE
  img = spectral.scale(img,dataset);
  
  // COMPUTE THE NDVI, GNDVI and SeLI
  return spectral.computeIndex(img,["NDVI","GNDVI","SeLI"],parameters);
  
}

// FILTER THE DATASET AND COMPUTE THE INDICES
var S2 = ee.ImageCollection(dataset)
  .filterBounds(pivot)
  .filterDate('2018-01-01','2021-01-01')
  .map(addIndices); // Mapping indices
  
// CREATE TIME SERIES
var ts = ui.Chart.image.series({
  imageCollection: S2.select(["NDVI","GNDVI","SeLI"]),
  region: pivot,
  reducer: ee.Reducer.median(),
  scale: 10,
  xProperty: "system:time_start"
});

// PRINT TIME SERIES
print("TIME SERIES",ts);