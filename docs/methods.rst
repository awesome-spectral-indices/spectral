Methods
===========

spectral.computeIndex
------------------------

.. js:function:: spectral.computeIndex(img, index, params)

   Computes an index, or a list of indices, on an image and adds it as a new band.

   :param ee.Image img: Image to compute indices on.
   :param string index: Index or list of indices to compute.
   :param object params: Parameters to use for index computation.   
   :returns: Image with indices added as new bands.

**Examples**

.. code-block:: javascript

   var spectral = require("users/dmlmont/spectral:spectral");
   
   var L8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_SR").first();   
   
Computing one index:
   
.. code-block:: javascript   
   
   var parameters = {
       "N": L8.select("B5"),
       "R": L8.select("B4"),       
   };
   
   var L8 = spectral.computeIndex(L8, "NDVI", parameters);
   
Computing multiple indices:
   
.. code-block:: javascript   
   
   var parameters = {
       "N": L8.select("B5"),
       "R": L8.select("B4"),
       "G": L8.select("B3"),
       "B": L8.select("B2"),
   };
   
   var L8 = spectral.computeIndex(L8,["NDVI","GNDVI","BNDVI"], parameters);
   
Computing indices with additional parameters:
   
.. code-block:: javascript   
   
   var parameters = {
       "N": L8.select("B5"),
       "R": L8.select("B4"),
       "L": 0.5
   };
   
   var L8 = spectral.computeIndex(L8, "SAVI", parameters);

spectral.computeKernel
------------------------

.. js:function:: spectral.computeKernel(img, kernel, params)

   Computes a kernel image: k(a,b).

   :param ee.Image img: Image to compute the kernel on.
   :param string kernel: Kernel to use. One of 'linear', 'poly' or 'RBF'.
   :param object params:
            Parameters to use for the kernel computation.
            For kernel = 'linear', the parameters 'a' (band A) and 'b' (band B) must be declared.
            For kernel = 'RBF', the parameters 'a' (band A), 'b' (band B) and 'sigma' (length-scale)
            must be declared.
            For kernel = 'poly', the parameters 'a' (band A), 'b' (band B), 'p' (kernel degree) and
            'c' (trade-off) must be declared.   
   :returns: Kernel image.

**Examples**

.. code-block:: javascript

   var spectral = require("users/dmlmont/spectral:spectral");
   
   var L8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_SR").first();

Computing the linear kernel:

.. code-block:: javascript
   
   var parameters = {
       "kNN": spectral.computeKernel(L8, "linear", {
           "a": L8.select("B5"),
           "b": L8.select("B5")
       }),
       "kNR": spectral.computeKernel(L8, "linear", {
           "a": L8.select("B5"),
           "b": L8.select("B4")
       })
   };
   
   var L8 = spectral.computeIndex(L8, "kNDVI", parameters);

Computing the RBF kernel:

.. code-block:: javascript
   
   var parameters = {
       "kNN": 1.0,
       "kNR": spectral.computeKernel(L8, "RBF", {
           "a": L8.select("B5"),
           "b": L8.select("B4"),
           "sigma": L8.select("B5").add(L8.select("B4")).divide(2.0)
       }),      
   };
   
   var L8 = spectral.computeIndex(L8, "kNDVI", parameters);
   
Computing the polynomial kernel:

.. code-block:: javascript
   
   var parameters = {
       "kNN": spectral.computeKernel(L8, "poly", {
           "a": L8.select("B5"),
           "b": L8.select("B5"),
           "c": spectral.defaultParameters.c,
           "p": 3.0
       }),
       "kNR": spectral.computeKernel(L8, "poly", {
           "a": L8.select("B5"),
           "b": L8.select("B4"),
           "c": spectral.defaultParameters.c,
           "p": 3.0
       })
   };
   
   var L8 = spectral.computeIndex(L8, "kNDVI", parameters);

spectral.defaultParameters
----------------------------

.. js:attribute:: spectral.defaultParameters

   Returns the default values for the additional parameters.

   :returns: Dictionary of default values.
   
**Examples**

.. code-block:: javascript

   var spectral = require("users/dmlmont/spectral:spectral");
   
   print(spectral.defaultParameters);
   print(spectral.defaultParameters.p);
   
spectral.describeParameters
----------------------------

.. js:attribute:: spectral.describeParameters

   Returns the description of all parameters.

   :returns: Dictionary of parameters and their description.
   
**Examples**

.. code-block:: javascript

   var spectral = require("users/dmlmont/spectral:spectral");
   
   print(spectral.describeParameters);
   print(spectral.describeParameters.Bands);
   print(spectral.describeParameters.Bands.N);

spectral.indices
------------------------

.. js:attribute:: spectral.indices

   Returns the dictionary of spectral indices.

   :returns: Dictionary of indices.

**Examples**

.. code-block:: javascript

   var spectral = require("users/dmlmont/spectral:spectral");
   
   print(spectral.indices);
   print(spectral.indices.NDVI);
   print(spectral.indices.NDVI.reference);