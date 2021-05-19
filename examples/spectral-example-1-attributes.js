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