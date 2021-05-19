/*
==============
SPECTRAL 0.0.1
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

/*
==========
Attributes
==========
*/

/**
 * Returns the dictionary of spectral indices.
 */
var indices = spectralIndices.indices;

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

/*
=======
Exports
=======
*/

exports.indices = indices;
exports.computeIndex = computeIndex;
exports.computeKernel = computeKernel;