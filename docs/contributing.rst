Contributing
=============

Contributions to spectral are welcome! Here you will find how to do it:

- **Bugs:** If you find a bug, please report it by opening an issue. if possible, attach the error, code, version, and other details. 

- **Fixing Issues:** If you want to contributte by fixing an issue, please check the spectral issues: contributions are welcome for open issues with labels :code:`bug` and :code:`help wanted`.

- **Enhancement:** New features and are welcome! You can check the spectral issues: contributions are welcome for open issues with labels :code:`enhancement` and :code:`help wanted`.

- **Documentation:** You can add examples, notes and references to the spectral documentation by creating blogs, tutorials or papers.

Contribution Steps
-----------------------

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
