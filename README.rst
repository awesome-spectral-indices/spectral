Spectral
========

**Awesome Spectral Indices for the Google Earth Engine JavaScript API (Code Editor).**

**Table of Contents**

- `Overview`_
- `How does it work?`_
- `License`_
- `Contributing`_

Overview
-------------------

`Google Earth Engine <https://earthengine.google.com/>`_ (GEE) is a cloud-based service for geospatial processing of vector and raster data. The Earth Engine platform has a `JavaScript and a Python API <https://developers.google.com/earth-engine/guides>`_ with different methods to process geospatial objects. Google Earth Engine also provides a `HUGE PETABYTE-SCALE CATALOG <https://developers.google.com/earth-engine/datasets/>`_ of raster and vector data that users can process online. The `Awesome Spectral Indices for GEE <https://github.com/davemlz/awesome-ee-spectral-indices>`_ is a standardized ready-to-use curated list of spectral indices that can be used as expressions for computing spectral indices in GEE. The spectral module extends the GEE JavaScript API with new functions to access and compute spectral indices from the `Awesome List of Spectral Indices <https://github.com/davemlz/awesome-ee-spectral-indices>`_.

How does it work?
-------------------

The spectral module can be accepted `HERE <https://code.earthengine.google.com/?accept_repo=users/dmlmont/spectral>`_. Once accepted, it can be required by running the following line in the `GEE JavaScript Code Editor <https://code.earthengine.google.com/>`_:

.. code-block:: javascript

   var spectral = require("users/dmlmont/spectral:spectral");

The complete list of spectral indices can be accessed by using the :code:`indices` attribute:

.. code-block:: javascript

   print(spectral.indices);

The list of available attributes for a specific index can be accessed using dot notation:

.. code-block:: javascript

   print(spectral.indices.NDVI);
   
Or by using a key:

.. code-block:: javascript

   print(spectral.indices["NDVI"]);
   
An attribute can be accessed using also dot notation:

.. code-block:: javascript

   print(spectral.indices.NDVI.formula);
   
Or by using a key:

.. code-block:: javascript

   print(spectral.indices.NDVI["formula"]);
   
The available attributes of an index are:

- :code:`short_name`: Short name of the index (e.g. :code:`"NDWI"`).
- :code:`long_name`: Long name of the index (e.g. :code:`"Normalized Difference Water Index"`).
- :code:`formula`: Expression/formula of the index (e.g. :code:`"(N - G)/(N + G)"`).
- :code:`bands`: List of required bands/parameters for the index computation (e.g. :code:`["N","G"]`).
- :code:`reference`: Link to the index reference/paper/doi (e.g. :code:`"https://doi.org/10.1080/01431169608948714"`).
- :code:`type`: Type/application of the index (e.g. :code:`"water"`).
- :code:`date_of_addition`: Date of addition to the list (e.g. :code:`"2021-04-07"`).
- :code:`contributor`: GitHub user link of the contributor (e.g. :code:`"https://github.com/davemlz"`).

Finally, an index (e.g. NDVI) can be computed using the :code:`computeIndex(img, index, params)` function:

.. code-block:: javascript

   var S2 = ee.ImageCollection("COPERNICUS/S2_SR").first()
   
   var parameters = {
       "N": S2.select("B8"),
       "R": S2.select("B4"),
   };
   
   var S2 = spectral.computeIndex(S2,"NDVI",parameters);

And multiple indices can be computed using an array of indices:

.. code-block:: javascript

   var S2 = ee.ImageCollection("COPERNICUS/S2_SR").first()
   
   var parameters = {
       "N": S2.select("B8"),
       "R": S2.select("B4"),
       "G": S2.select("B3"),
       "L": 0.5
   };
   
   var S2 = spectral.computeIndex(S2,["NDVI","GNDVI","SAVI"],parameters);

All specified indices are added as new bands.

License
-------

The project is licensed under the MIT license.

Contributing
------------------

Contributions to spectral are welcome! Here you will find how to do it:

- **Bugs:** If you find a bug, please report it by opening an issue. if possible, attach the error, code, version, and other details. 

- **Fixing Issues:** If you want to contributte by fixing an issue, please check the spectral issues: contributions are welcome for open issues with labels :code:`bug` and :code:`help wanted`.

- **Enhancement:** New features and are welcome! You can check the spectral issues: contributions are welcome for open issues with labels :code:`enhancement` and :code:`help wanted`.

- **Documentation:** You can add examples, notes and references to the spectral documentation by creating blogs, tutorials or papers.

Contribution Steps
~~~~~~~~~~~~~~~~~~~~~~~~

First, fork the `spectral <https://github.com/davemlz/spectral>`_ repository and clone it to your local machine. Then, create a development branch::

   git checkout -b name-of-dev-branch
   
Create a new feature, or fix a bug. Please use the `JSDoc standards <https://jsdoc.app/>`_ when documenting new features:

.. code-block:: javascript

   /**
    * Returns an awesome result.
    * 
    * @param {ee.Image} img - Image to use.
    * @param {string} text - Text to use.    
    */
   function awesomeFeature(img, text) {     

     return img.set({awesomeResult: text});

   }
   
   exports.awesomeFeature = awesomeFeature;

Now it's time to commit your changes and push your development branch::

   git add .
   git commit -m "Description of your work"
   git push origin name-of-dev-branch
  
And finally, submit a pull request.