/*
========
SPECTRAL
========

-------------------------------------
Example 1: Exploring spectral indices
-------------------------------------

=================
GitHub Repository
=================

spectral module: https://github.com/davemlz/spectral
Awesome Spectral Indices for GEE: https://github.com/davemlz/awesome-ee-spectral-indices
*/

// REQUIRE THE SPECTRAL MODULE
var spectral = require("users/dmlmont/spectral:spectral");

// PRINT ALL AVAILABLE SPECTRAL INDICES
print('Spectral Indices',spectral.indices);

// PRINT ATTRIBUTES OF AN INDEX USING DOT NOTATION
print('Attributes of NDVI',spectral.indices.NDVI);

// PRINT ATTRIBUTES OF AN INDEX USING KEYS
print('Attributes of SAVI',spectral.indices["SAVI"]);

// PRINT SPECIFIC ATTRIBUTES OF AN INDEX
print('Reference of BAIS2',spectral.indices.BAIS2.long_name);
print('Type of BAIS2',spectral.indices.BAIS2.type);
print('Formula of BAIS2',spectral.indices.BAIS2.formula);
print('Required bands of BAIS2',spectral.indices.BAIS2.bands);
print('Reference of BAIS2',spectral.indices.BAIS2.reference);
print('Contributor of BAIS2',spectral.indices.BAIS2.contributor);

// PRINT THE DESCRIPTION OF VARIABLES: BANDS AND ADDITIONAL PARAMETERS
print('Parameters Description',spectral.describeParameters);

// PRINT THE DEFAULT VALUES OF THE ADDITIONAL PARAMETERS
print('Additional Parameters',spectral.defaultParameters);

// PRINT ALL SCALE PARAMETERS
print('All Scale Parameters',spectral.scaleParameters);

// PRINT ALL OFFSET PARAMETERS
print('All Offset Parameters',spectral.offsetParameters);