Welcome to Spectral!
====================

.. image:: https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
        :target: https://github.com/sindresorhus/awesome

.. image:: https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/davemlz/5e9f08fa6a45d9d486e29d9d85ad5c84/raw/spectral.json
        :target: https://github.com/davemlz/awesome-ee-spectral-indices/blob/main/output/spectral-indices-dict.json
        
.. image:: https://img.shields.io/badge/License-MIT-blue.svg
        :target: https://opensource.org/licenses/MIT

.. image:: https://readthedocs.org/projects/ee-spectral/badge/?version=latest
        :target: https://ee-spectral.readthedocs.io/en/latest/?badge=latest
        :alt: Documentation Status
    
.. image:: https://img.shields.io/badge/Donate-buy%20me%20a%20coffee-yellow.svg
        :target: https://www.buymeacoffee.com/davemlz
    
.. image:: https://img.shields.io/twitter/follow/dmlmont?style=social
        :target: https://twitter.com/dmlmont
    
.. image:: https://img.shields.io/github/stars/davemlz/spectral?style=social

**Awesome Spectral Indices for the Google Earth Engine JavaScript API (Code Editor).**

.. toctree::   
   :maxdepth: 2
   :caption: Contents
   :hidden:
   
   usage
   methods   
   examples
   contributing

- GitHub: `https://github.com/davemlz/spectral <https://github.com/davemlz/spectral>`_
- Documentation: `https://ee-spectral.readthedocs.io/ <https://ee-spectral.readthedocs.io/>`_
- Awesome Spectral Indices for GEE: `https://github.com/davemlz/awesome-ee-spectral-indices <https://github.com/davemlz/awesome-ee-spectral-indices>`_
- Examples/Tutorials: `https://github.com/davemlz/spectral/tree/main/examples <https://github.com/davemlz/spectral/tree/main/examples>`_

Overview
-------------------

`Google Earth Engine <https://earthengine.google.com/>`_ (GEE) is a cloud-based service for geospatial processing of vector and raster data. The Earth Engine platform has a `JavaScript and a Python API <https://developers.google.com/earth-engine/guides>`_ with different methods to process geospatial objects. Google Earth Engine also provides a `HUGE PETABYTE-SCALE CATALOG <https://developers.google.com/earth-engine/datasets/>`_ of raster and vector data that users can process online. The `Awesome Spectral Indices for GEE <https://github.com/davemlz/awesome-ee-spectral-indices>`_ is a standardized ready-to-use curated list of spectral indices that can be used as expressions for computing spectral indices in GEE. The spectral module extends the GEE JavaScript API with new functions to access and compute spectral indices from the `Awesome List of Spectral Indices <https://github.com/davemlz/awesome-ee-spectral-indices>`_.

Check the simple usage of spectral here:

.. code-block:: javascript

   var spectral = require("users/dmlmont/spectral:spectral");
   
   var dataset = "COPERNICUS/S2_SR";

   var S2 = ee.ImageCollection(dataset).first();
   var S2 = spectral.scale(S2,dataset);
   
   var parameters = {
       "N": S2.select("B8"),
       "R": S2.select("B4"),
       "G": S2.select("B3"),
       "L": 0.5
   };
   
   var S2 = spectral.computeIndex(S2,["NDVI","GNDVI","SAVI"],parameters);
   
List
-------

Check the full list of spectral indices `here <https://github.com/davemlz/awesome-ee-spectral-indices/blob/main/output/spectral-indices-table.csv>`_.

How does it work?
-----------------------

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
- :code:`formula`: Expression/formula of the index (e.g. :code:`"(G - N)/(G + N)"`).
- :code:`bands`: List of required bands/parameters for the index computation (e.g. :code:`["N","G"]`).
- :code:`reference`: Link to the index reference/paper/doi (e.g. :code:`"https://doi.org/10.1080/01431169608948714"`).
- :code:`type`: Type/application of the index (e.g. :code:`"water"`).
- :code:`date_of_addition`: Date of addition to the list (e.g. :code:`"2021-04-07"`).
- :code:`contributor`: GitHub user link of the contributor (e.g. :code:`"https://github.com/davemlz"`).

Finally, an index (e.g. NDVI) can be computed using the :code:`computeIndex(img, index, params)` function:

.. code-block:: javascript

   var dataset = "COPERNICUS/S2_SR";
   
   var S2 = ee.ImageCollection(dataset).first()
   var S2 = spectral.scale(S2,dataset);
   
   var parameters = {
       "N": S2.select("B8"),
       "R": S2.select("B4"),
   };
   
   var S2 = spectral.computeIndex(S2,"NDVI",parameters);

And multiple indices can be computed using an array of indices:

.. code-block:: javascript

   var dataset = "COPERNICUS/S2_SR";
   
   var S2 = ee.ImageCollection(dataset).first()
   var S2 = spectral.scale(S2,dataset);
   
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