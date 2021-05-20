Getting Started
==========================

1. Accept the spectral module `HERE <https://code.earthengine.google.com/?accept_repo=users/dmlmont/spectral>`_.

2. Open a new script in the `GEE JavaScript Code Editor <https://code.earthengine.google.com/>`_ and require the spectral module:

.. code-block:: javascript

   var spectral = require("users/dmlmont/spectral:spectral");

3. Define the dataset and image to use. Let's use the first image of the Sentinel-2 SR Product:

.. code-block:: javascript

   var S2 = ee.ImageCollection("COPERNICUS/S2_SR").first()

4. Define your index or indices to use. Let's use the NDVI.

5. Check the required bands for the NDVI computation:

.. code-block:: javascript

   print(spectral.indices.NDVI.bands); // ["N","R"]
   
6. Now, check the description of the required bands:

.. code-block:: javascript

   print(spectral.describeParameters); // Bands: { N: "Near Infrared band", R: "Red band" }
   
7. Create a dictionary assigning the required bands:

.. code-block:: javascript
   
   var parameters = {
       "N": S2.select("B8"),
       "R": S2.select("B4"),       
   };

8. Compute the index (it is added as a new band):

.. code-block:: javascript
   
   var S2 = spectral.computeIndex(S2, "NDVI", parameters);