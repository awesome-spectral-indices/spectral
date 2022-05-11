import json
import jsbeautifier
import requests

# Request ee scale offset catalog
bands = requests.get(
    "https://raw.githubusercontent.com/awesome-spectral-indices/awesome-spectral-indices/main/output/bands.json"
).json()

constants = requests.get(
    "https://raw.githubusercontent.com/awesome-spectral-indices/awesome-spectral-indices/main/output/constants.json"
).json()

# MIT License
previousCode = """/*
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

spectral module: https://github.com/awesome-spectral-indices/spectral
Awesome Spectral Indices: https://github.com/awesome-spectral-indices/awesome-spectral-indices
*/

/*
==========
Attributes
==========
*/
"""

# Exporting the parameters
nextCodeBands = """
/*
=======
Exports
=======
*/

exports.bands = bands;
"""

# Exporting the parameters
nextCodeConstants = """
/*
=======
Exports
=======
*/

exports.constants = constants;
"""

# Saving the parameters
codeBands = "var bands = " + str(bands)
codeConstants = "var constants = " + str(constants)

# Beautifying JS
resBands = jsbeautifier.beautify(previousCode + "\n" + codeBands + ";\n" + nextCodeBands)
resConstants = jsbeautifier.beautify(previousCode + "\n" + codeConstants + ";\n" + nextCodeConstants)

# Saving the code into the JS file
with open("./spectral/spectral-bands.js", "w") as fp:
    fp.write(resBands)

with open("./spectral/spectral-constants.js", "w") as fp:
    fp.write(resConstants)