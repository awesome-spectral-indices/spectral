/*
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

var constants = {
    'C1': {
        'default': 6.0,
        'description': 'Coefficient 1 for the aerosol resistance term',
        'short_name': 'C1'
    },
    'C2': {
        'default': 7.5,
        'description': 'Coefficient 2 for the aerosol resistance term',
        'short_name': 'C2'
    },
    'L': {
        'default': 1.0,
        'description': 'Canopy background adjustment',
        'short_name': 'L'
    },
    'PAR': {
        'default': None,
        'description': 'Photosynthetically Active Radiation',
        'short_name': 'PAR'
    },
    'alpha': {
        'default': 0.1,
        'description': 'Weighting coefficient used for WDRVI',
        'short_name': 'alpha'
    },
    'beta': {
        'default': 0.05,
        'description': 'Calibration parameter used for NDSInw',
        'short_name': 'beta'
    },
    'c': {
        'default': 1.0,
        'description': 'Trade-off parameter in the polynomial kernel',
        'short_name': 'c'
    },
    'cexp': {
        'default': 1.16,
        'description': 'Exponent used for OCVI',
        'short_name': 'cexp'
    },
    'epsilon': {
        'default': 1,
        'description': 'Adjustment constant used for EBI',
        'short_name': 'epsilon'
    },
    'fdelta': {
        'default': 0.581,
        'description': 'Adjustment factor used for SEVI',
        'short_name': 'fdelta'
    },
    'g': {
        'default': 2.5,
        'description': 'Gain factor',
        'short_name': 'g'
    },
    'gamma': {
        'default': 1.0,
        'description': 'Weighting coefficient used for ARVI',
        'short_name': 'gamma'
    },
    'k': {
        'default': 0.0,
        'description': 'Slope parameter by soil used for NIRvH2',
        'short_name': 'k'
    },
    'lambdaG': {
        'default': None,
        'description': 'Green central wavelength (nm)',
        'short_name': 'lambdaG'
    },
    'lambdaN': {
        'default': None,
        'description': 'NIR central wavelength (nm)',
        'short_name': 'lambdaN'
    },
    'lambdaN2': {
        'default': None,
        'description': 'NIR2 central wavelength (nm)',
        'short_name': 'lambdaN2'
    },
    'lambdaR': {
        'default': None,
        'description': 'Red central wavelength (nm)',
        'short_name': 'lambdaR'
    },
    'lambdaS1': {
        'default': None,
        'description': 'SWIR1 central wavelength (nm)',
        'short_name': 'lambdaS1'
    },
    'lambdaS2': {
        'default': None,
        'description': 'SWIR2 central wavelength (nm)',
        'short_name': 'lambdaS2'
    },
    'nexp': {
        'default': 2.0,
        'description': 'Exponent used for GDVI',
        'short_name': 'nexp'
    },
    'omega': {
        'default': 2.0,
        'description': 'Weighting coefficient used for MBWI',
        'short_name': 'omega'
    },
    'p': {
        'default': 2.0,
        'description': 'Kernel degree in the polynomial kernel',
        'short_name': 'p'
    },
    'sigma': {
        'default': 0.5,
        'description': 'Length-scale parameter in the RBF kernel',
        'short_name': 'sigma'
    },
    'sla': {
        'default': 1.0,
        'description': 'Soil line slope',
        'short_name': 'sla'
    },
    'slb': {
        'default': 0.0,
        'description': 'Soil line intercept',
        'short_name': 'slb'
    }
};

/*
=======
Exports
=======
*/

exports.constants = constants;