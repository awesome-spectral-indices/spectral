/*
==============
SPECTRAL 0.0.4
==============

---------------------------------------------------------------------------------
Awesome Spectral Indices for the Google Earth Engine JavaScript API (Code Editor)
---------------------------------------------------------------------------------

===========
MIT License
===========

Copyright (c) 2021 David Montero Loaiza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


=================
GitHub Repository
=================

spectral module: https://github.com/davemlz/spectral
Awesome Spectral Indices for GEE: https://github.com/davemlz/awesome-ee-spectral-indices
*/

/*
=======
Imports
=======
*/

var spectralIndices = require("users/dmlmont/spectral:spectral-indices");
var scaling = require("users/dmlmont/spectral:spectral-scale-parameters");
var offsetting = require("users/dmlmont/spectral:spectral-offset-parameters");

/*
==========
Attributes
==========
*/

/**
 * Returns the dictionary of spectral indices.
 */
var indices = spectralIndices.indices;

/**
 * Returns the dictionary of scale parameters.
 */
var scaleParams = scaling.scaleParams;

/**
 * Returns the dictionary of offset parameters.
 */
var offsetParams = offsetting.offsetParams;

/**
 * Returns the default values for the additional parameters.
 */
var defaultParameters = {
  "L": 1.0,
  "g": 2.5,
  "C1": 6.0,
  "C2": 7.5,
  "cexp": 1.16,
  "nexp": 2.0,
  "alpha": 0.1,
  "gamma": 1.0,
  "omega": 2.0,
  "sla": 1.0,
  "slb": 0.0,
  "p": 2.0,
  "c": 1.0
};

/**
 * Returns the description of all parameters.
 */
var describeParameters = {
  "Bands": {
    "A": "Aerosols band",
    "B": "Blue band",
    "G": "Green band",
    "R": "Red band",
    "RE1": "Red Edge band 1",
    "RE2": "Red Edge band 2",
    "RE3": "Red Edge band 3",
    "RE4": "Red Edge band 4",
    "N": "Near Infrared band",
    "S1": "SWIR band 1",
    "S2": "SWIR band 2",
    "T1": "Thermal band 1",
    "T2": "Thermal band 2"
  },
  "Additional Parameters": {
    "Index Parameters": {
      "L": "Canopy background adjustment",
      "g": "Gain factor",
      "C1": "Coefficient 1 for the aerosol resistance term",
      "C2": "Coefficient 2 for the aerosol resistance term",
      "cexp": "Exponent used for OCVI",
      "nexp": "Exponent used for GDVI",
      "alpha": "Weighting coefficient used for WDRVI",
      "gamma": "Weighting coefficient used for ARVI",
      "omega": "Weighting coefficient used for MBWI",
      "sla": "Soil line slope",
      "slb": "Soil line intercept",
      "PAR": "Photosynthetically Active Radiation"
    },
    "Kernel Parameters": {
      "sigma": "Length-scale parameter in the RBF kernel",
      "p": "Kernel degree in the polynomial kernel",
      "c": "Trade-off parameter in the polynomial kernel"
    }
  }
};

/*
=======
Methods
=======
*/

/**
 * Computes an index, or a list of indices, on an image and adds it as a new band.
 * 
 * @param {ee.Image} img - Image to compute indices on.
 * @param {string|Array} index - Index or list of indices to compute.
 * @param {dict} params - Parameters to use for index computation.
 */
function computeIndex(img,index,params){
  
  if (!Array.isArray(index)) {
    index = [index];
  }
  
  for (var i = 0; i < index.length; i++) {
    img = img.addBands(img.expression(indices[index[i]].formula,params).rename(index[i]));
  }
  
  return img;
  
}

/**
 * Computes a kernel image: k(a,b).
 * 
 * @param {ee.Image} img - Image to compute the kernel on.
 * @param {string} kernel - Kernel to use. One of 'linear', 'poly' or 'RBF'.
 * @param {dict} params - Parameters to use for the kernel computation.
 *      For kernel = 'linear', the parameters 'a' (band A) and 'b' (band B) must be declared.
 *      For kernel = 'RBF', the parameters 'a' (band A), 'b' (band B) and 'sigma' (length-scale)
 *      must be declared.
 *      For kernel = 'poly', the parameters 'a' (band A), 'b' (band B), 'p' (kernel degree) and
 *      'c' (trade-off) must be declared.
 */
function computeKernel(img,kernel,params){
  
  var kernels = {
    "linear": "a * b",
    "RBF": "exp((-1.0 * (a - b) ** 2.0)/(2.0 * sigma ** 2.0))",
    "poly": "((a * b) + c) ** p"
  };
  
  return img.expression(kernels[kernel],params);
  
}

/**
 * Offsets an image using the offset parameters of the dataset.
 * 
 * @param {ee.Image} img - Image to offset.
 * @param {string} dataset - Dataset to get parameters from.
 */
function offset(img,dataset){
  
  var bands = img.bandNames();
  var params = ee.Dictionary(offsetting.offsetParams[dataset]);
  var paramsImage = params.toImage().select(bands);
  var offsetImage = img.add(paramsImage);
  
  return ee.Image(offsetImage.copyProperties(img,img.propertyNames()));
  
}

/**
 * Scales an image using the scale parameters of the dataset.
 * 
 * @param {ee.Image} img - Image to scale.
 * @param {string} dataset - Dataset to get parameters from.
 */
function scale(img,dataset){
  
  var bands = img.bandNames();
  var params = ee.Dictionary(scaling.scaleParams[dataset]);
  var paramsImage = params.toImage().select(bands);
  var scaledImage = img.multiply(paramsImage);
  
  return ee.Image(scaledImage.copyProperties(img,img.propertyNames()));
  
}

/*
=======
Exports
=======
*/

exports.indices = indices;
exports.scaleParameters = scaleParams;
exports.offsetParameters = offsetParams;
exports.defaultParameters = defaultParameters;
exports.describeParameters = describeParameters;
exports.computeIndex = computeIndex;
exports.computeKernel = computeKernel;
exports.offset = offset;
exports.scale = scale;