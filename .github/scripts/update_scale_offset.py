import json
import jsbeautifier
import requests

# Request ee scale offset catalog
eeCatalogScaleOffset = requests.get(
    "https://raw.githubusercontent.com/davemlz/ee-catalog-scale-offset-params/main/list/ee-catalog-scale-offset-parameters.json"
).json()

# Get the datasets
eeScaleDict = dict()
eeOffsetDict = dict()
datasets = list(eeCatalogScaleOffset.keys())
for dataset in datasets:
    datasetScaleDict = dict()
    datasetOffsetDict = dict()
    bands = list(eeCatalogScaleOffset[dataset].keys())
    for band in bands:
        datasetScaleDict[band] = eeCatalogScaleOffset[dataset][band]["scale"]
        datasetOffsetDict[band] = eeCatalogScaleOffset[dataset][band]["offset"]
    eeScaleDict[dataset] = datasetScaleDict
    eeOffsetDict[dataset] = datasetOffsetDict

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
nextCodeOffset = """
/*
=======
Exports
=======
*/

exports.offsetParams = offsetParams;
"""

# Exporting the parameters
nextCodeScale = """
/*
=======
Exports
=======
*/

exports.scaleParams = scaleParams;
"""

# Saving the parameters
codeOffset = "var offsetParams = " + str(eeOffsetDict)
codeScale = "var scaleParams = " + str(eeScaleDict)

# Beautifying JS
resOffset = jsbeautifier.beautify(previousCode + "\n" + codeOffset + ";\n" + nextCodeOffset)
resScale = jsbeautifier.beautify(previousCode + "\n" + codeScale + ";\n" + nextCodeScale)

# Saving the code into the JS file
with open("./spectral/spectral-offset-parameters.js", "w") as fp:
    fp.write(resOffset)

with open("./spectral/spectral-scale-parameters.js", "w") as fp:
    fp.write(resScale)
