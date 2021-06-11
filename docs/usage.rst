Getting Started
==========================

1. Accept the spectral module `HERE <https://code.earthengine.google.com/?accept_repo=users/dmlmont/spectral>`_.

2. Open a new script in the `GEE JavaScript Code Editor <https://code.earthengine.google.com/>`_ and require the spectral module:

.. code-block:: javascript

   var spectral = require("users/dmlmont/spectral:spectral");

3. Define the dataset and image to use. Let's use the first image of the Sentinel-2 SR Product:

.. code-block:: javascript

   var dataset = "COPERNICUS/S2_SR";
   var S2 = ee.ImageCollection(dataset).first()
   
4. Scale the image:

.. code-block:: javascript

   var S2 = spectral.scale(S2, dataset);
   
5. If required, offset the image (Note: it is not required to offset the Sentinel-2 SR Product, but here it is shown as an example):

.. code-block:: javascript

   var S2 = spectral.offset(S2, dataset);

6. Define your index or indices to use. Let's use the NDVI.

7. Check the required bands for the NDVI computation:

.. code-block:: javascript

   print(spectral.indices.NDVI.bands); // ["N","R"]
   
8. Now, check the description of the required bands:

.. code-block:: javascript

   print(spectral.describeParameters); // Bands: { N: "Near Infrared band", R: "Red band" }
   
9. Create a dictionary assigning the required bands:

.. code-block:: javascript
   
   var parameters = {
       "N": S2.select("B8"),
       "R": S2.select("B4"),       
   };

10. Compute the index (it is added as a new band):

.. code-block:: javascript
   
   var S2 = spectral.computeIndex(S2, "NDVI", parameters);