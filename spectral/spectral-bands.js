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

var bands = {
    'A': {
        'common_name': 'coastal',
        'long_name': 'Aersols',
        'max_wavelength': 455,
        'min_wavelength': 400,
        'platforms': {
            'landsat8': {
                'band': 'B1',
                'bandwidth': 20.0,
                'name': 'Coastal Aerosol',
                'platform': 'Landsat 8',
                'wavelength': 440.0
            },
            'landsat9': {
                'band': 'B1',
                'bandwidth': 20.0,
                'name': 'Coastal Aerosol',
                'platform': 'Landsat 8',
                'wavelength': 440.0
            },
            'planetscope': {
                'band': 'B1',
                'bandwidth': 21.0,
                'name': 'Coastal Blue',
                'platform': 'PlanetScope',
                'wavelength': 441.5
            },
            'sentinel2a': {
                'band': 'B1',
                'bandwidth': 21,
                'name': 'Aerosols',
                'platform': 'Sentinel-2A',
                'wavelength': 442.7
            },
            'sentinel2b': {
                'band': 'B1',
                'bandwidth': 21,
                'name': 'Aerosols',
                'platform': 'Sentinel-2B',
                'wavelength': 442.3
            },
            'wv2': {
                'band': 'B1',
                'bandwidth': 50.0,
                'name': 'Coastal Blue',
                'platform': 'WorldView-2',
                'wavelength': 425.0
            },
            'wv3': {
                'band': 'B1',
                'bandwidth': 50.0,
                'name': 'Coastal Blue',
                'platform': 'WorldView-3',
                'wavelength': 425.0
            }
        },
        'short_name': 'A'
    },
    'B': {
        'common_name': 'blue',
        'long_name': 'Blue',
        'max_wavelength': 530,
        'min_wavelength': 450,
        'platforms': {
            'landsat4': {
                'band': 'B1',
                'bandwidth': 70.0,
                'name': 'Blue',
                'platform': 'Landsat 4',
                'wavelength': 485.0
            },
            'landsat5': {
                'band': 'B1',
                'bandwidth': 70.0,
                'name': 'Blue',
                'platform': 'Landsat 5',
                'wavelength': 485.0
            },
            'landsat7': {
                'band': 'B1',
                'bandwidth': 70.0,
                'name': 'Blue',
                'platform': 'Landsat 7',
                'wavelength': 485.0
            },
            'landsat8': {
                'band': 'B2',
                'bandwidth': 60.0,
                'name': 'Blue',
                'platform': 'Landsat 8',
                'wavelength': 480.0
            },
            'landsat9': {
                'band': 'B2',
                'bandwidth': 60.0,
                'name': 'Blue',
                'platform': 'Landsat 9',
                'wavelength': 480.0
            },
            'modis': {
                'band': 'B3',
                'bandwidth': 20.0,
                'name': 'Blue',
                'platform': 'Terra/Aqua: MODIS',
                'wavelength': 469.0
            },
            'planetscope': {
                'band': 'B2',
                'bandwidth': 50.0,
                'name': 'Blue',
                'platform': 'PlanetScope',
                'wavelength': 490.0
            },
            'sentinel2a': {
                'band': 'B2',
                'bandwidth': 66.0,
                'name': 'Blue',
                'platform': 'Sentinel-2A',
                'wavelength': 492.4
            },
            'sentinel2b': {
                'band': 'B2',
                'bandwidth': 66.0,
                'name': 'Blue',
                'platform': 'Sentinel-2B',
                'wavelength': 492.1
            },
            'wv2': {
                'band': 'B2',
                'bandwidth': 60.0,
                'name': 'Blue',
                'platform': 'WorldView-2',
                'wavelength': 480.0
            },
            'wv3': {
                'band': 'B2',
                'bandwidth': 60.0,
                'name': 'Blue',
                'platform': 'WorldView-3',
                'wavelength': 480.0
            }
        },
        'short_name': 'B'
    },
    'G': {
        'common_name': 'green',
        'long_name': 'Green',
        'max_wavelength': 600,
        'min_wavelength': 510,
        'platforms': {
            'landsat4': {
                'band': 'B2',
                'bandwidth': 80.0,
                'name': 'Green',
                'platform': 'Landsat 4',
                'wavelength': 560.0
            },
            'landsat5': {
                'band': 'B2',
                'bandwidth': 80.0,
                'name': 'Green',
                'platform': 'Landsat 5',
                'wavelength': 560.0
            },
            'landsat7': {
                'band': 'B2',
                'bandwidth': 80.0,
                'name': 'Green',
                'platform': 'Landsat 7',
                'wavelength': 560.0
            },
            'landsat8': {
                'band': 'B3',
                'bandwidth': 60.0,
                'name': 'Green',
                'platform': 'Landsat 8',
                'wavelength': 560.0
            },
            'landsat9': {
                'band': 'B3',
                'bandwidth': 60.0,
                'name': 'Green',
                'platform': 'Landsat 9',
                'wavelength': 560.0
            },
            'modis': {
                'band': 'B4',
                'bandwidth': 20.0,
                'name': 'Green',
                'platform': 'Terra/Aqua: MODIS',
                'wavelength': 555.0
            },
            'planetscope': {
                'band': 'B4',
                'bandwidth': 36.0,
                'name': 'Green',
                'platform': 'PlanetScope',
                'wavelength': 565.0
            },
            'sentinel2a': {
                'band': 'B3',
                'bandwidth': 36.0,
                'name': 'Green',
                'platform': 'Sentinel-2A',
                'wavelength': 559.8
            },
            'sentinel2b': {
                'band': 'B3',
                'bandwidth': 36.0,
                'name': 'Green',
                'platform': 'Sentinel-2B',
                'wavelength': 559.0
            },
            'wv2': {
                'band': 'B3',
                'bandwidth': 70.0,
                'name': 'Green',
                'platform': 'WorldView-2',
                'wavelength': 545.0
            },
            'wv3': {
                'band': 'B3',
                'bandwidth': 70.0,
                'name': 'Green',
                'platform': 'WorldView-3',
                'wavelength': 545.0
            }
        },
        'short_name': 'G'
    },
    'G1': {
        'common_name': 'green',
        'long_name': 'Green 1',
        'max_wavelength': 550,
        'min_wavelength': 510,
        'platforms': {
            'modis': {
                'band': 'B11',
                'bandwidth': 10.0,
                'name': 'Green',
                'platform': 'Terra/Aqua: MODIS',
                'wavelength': 531.0
            },
            'planetscope': {
                'band': 'B3',
                'bandwidth': 36.0,
                'name': 'Green',
                'platform': 'PlanetScope',
                'wavelength': 531.0
            }
        },
        'short_name': 'G1'
    },
    'N': {
        'common_name': 'nir',
        'long_name': 'Near-Infrared (NIR)',
        'max_wavelength': 900,
        'min_wavelength': 760,
        'platforms': {
            'landsat4': {
                'band': 'B4',
                'bandwidth': 140.0,
                'name': 'Near-Infrared (NIR)',
                'platform': 'Landsat 4',
                'wavelength': 830.0
            },
            'landsat5': {
                'band': 'B4',
                'bandwidth': 140.0,
                'name': 'Near-Infrared (NIR)',
                'platform': 'Landsat 5',
                'wavelength': 830.0
            },
            'landsat7': {
                'band': 'B4',
                'bandwidth': 130.0,
                'name': 'Near-Infrared (NIR)',
                'platform': 'Landsat 7',
                'wavelength': 835.0
            },
            'landsat8': {
                'band': 'B5',
                'bandwidth': 30.0,
                'name': 'Near-Infrared (NIR)',
                'platform': 'Landsat 8',
                'wavelength': 865.0
            },
            'landsat9': {
                'band': 'B5',
                'bandwidth': 30.0,
                'name': 'Near-Infrared (NIR)',
                'platform': 'Landsat 9',
                'wavelength': 865.0
            },
            'modis': {
                'band': 'B2',
                'bandwidth': 35.0,
                'name': 'Near-Infrared (NIR)',
                'platform': 'Terra/Aqua: MODIS',
                'wavelength': 858.5
            },
            'planetscope': {
                'band': 'B8',
                'bandwidth': 40.0,
                'name': 'Near-Infrared (NIR)',
                'platform': 'PlanetScope',
                'wavelength': 865.0
            },
            'sentinel2a': {
                'band': 'B8',
                'bandwidth': 106.0,
                'name': 'Near-Infrared (NIR)',
                'platform': 'Sentinel-2A',
                'wavelength': 832.8
            },
            'sentinel2b': {
                'band': 'B8',
                'bandwidth': 106.0,
                'name': 'Near-Infrared (NIR)',
                'platform': 'Sentinel-2B',
                'wavelength': 833.0
            },
            'wv2': {
                'band': 'B7',
                'bandwidth': 125.0,
                'name': 'Near-IR1',
                'platform': 'WorldView-2',
                'wavelength': 832.5
            },
            'wv3': {
                'band': 'B7',
                'bandwidth': 125.0,
                'name': 'Near-IR1',
                'platform': 'WorldView-3',
                'wavelength': 832.5
            }
        },
        'short_name': 'N'
    },
    'N2': {
        'common_name': 'nir08',
        'long_name': 'Near-Infrared (NIR) 2',
        'max_wavelength': 880,
        'min_wavelength': 850,
        'platforms': {
            'sentinel2a': {
                'band': 'B8A',
                'bandwidth': 21.0,
                'name': 'Near-Infrared (NIR) 2 (Red Edge 4 in Google Earth Engine)',
                'platform': 'Sentinel-2A',
                'wavelength': 864.7
            },
            'sentinel2b': {
                'band': 'B8A',
                'bandwidth': 21.0,
                'name': 'Near-Infrared (NIR) 2 (Red Edge 4 in Google Earth Engine)',
                'platform': 'Sentinel-2B',
                'wavelength': 864.0
            }
        },
        'short_name': 'N2'
    },
    'R': {
        'common_name': 'red',
        'long_name': 'Red',
        'max_wavelength': 690,
        'min_wavelength': 620,
        'platforms': {
            'landsat4': {
                'band': 'B3',
                'bandwidth': 60.0,
                'name': 'Red',
                'platform': 'Landsat 4',
                'wavelength': 660.0
            },
            'landsat5': {
                'band': 'B3',
                'bandwidth': 60.0,
                'name': 'Red',
                'platform': 'Landsat 5',
                'wavelength': 660.0
            },
            'landsat7': {
                'band': 'B3',
                'bandwidth': 60.0,
                'name': 'Red',
                'platform': 'Landsat 7',
                'wavelength': 660.0
            },
            'landsat8': {
                'band': 'B4',
                'bandwidth': 30.0,
                'name': 'Red',
                'platform': 'Landsat 8',
                'wavelength': 655.0
            },
            'landsat9': {
                'band': 'B4',
                'bandwidth': 30.0,
                'name': 'Red',
                'platform': 'Landsat 9',
                'wavelength': 655.0
            },
            'modis': {
                'band': 'B1',
                'bandwidth': 50.0,
                'name': 'Red',
                'platform': 'Terra/Aqua: MODIS',
                'wavelength': 645.0
            },
            'planetscope': {
                'band': 'B6',
                'bandwidth': 30.0,
                'name': 'Red',
                'platform': 'PlanetScope',
                'wavelength': 665.0
            },
            'sentinel2a': {
                'band': 'B4',
                'bandwidth': 31.0,
                'name': 'Red',
                'platform': 'Sentinel-2A',
                'wavelength': 664.6
            },
            'sentinel2b': {
                'band': 'B4',
                'bandwidth': 31.0,
                'name': 'Red',
                'platform': 'Sentinel-2B',
                'wavelength': 665.0
            },
            'wv2': {
                'band': 'B5',
                'bandwidth': 60.0,
                'name': 'Red',
                'platform': 'WorldView-2',
                'wavelength': 660.0
            },
            'wv3': {
                'band': 'B5',
                'bandwidth': 60.0,
                'name': 'Red',
                'platform': 'WorldView-3',
                'wavelength': 660.0
            }
        },
        'short_name': 'R'
    },
    'RE1': {
        'common_name': 'rededge',
        'long_name': 'Red Edge 1',
        'max_wavelength': 715,
        'min_wavelength': 695,
        'platforms': {
            'planetscope': {
                'band': 'B7',
                'bandwidth': 16.0,
                'name': 'Red Edge',
                'platform': 'PlanetScope',
                'wavelength': 705.0
            },
            'sentinel2a': {
                'band': 'B5',
                'bandwidth': 15.0,
                'name': 'Red Edge 1',
                'platform': 'Sentinel-2A',
                'wavelength': 704.1
            },
            'sentinel2b': {
                'band': 'B5',
                'bandwidth': 15.0,
                'name': 'Red Edge 1',
                'platform': 'Sentinel-2B',
                'wavelength': 703.8
            }
        },
        'short_name': 'RE1'
    },
    'RE2': {
        'common_name': 'rededge',
        'long_name': 'Red Edge 2',
        'max_wavelength': 750,
        'min_wavelength': 730,
        'platforms': {
            'sentinel2a': {
                'band': 'B6',
                'bandwidth': 15.0,
                'name': 'Red Edge 2',
                'platform': 'Sentinel-2A',
                'wavelength': 740.5
            },
            'sentinel2b': {
                'band': 'B6',
                'bandwidth': 15.0,
                'name': 'Red Edge 2',
                'platform': 'Sentinel-2B',
                'wavelength': 739.1
            }
        },
        'short_name': 'RE2'
    },
    'RE3': {
        'common_name': 'rededge',
        'long_name': 'Red Edge 3',
        'max_wavelength': 795,
        'min_wavelength': 765,
        'platforms': {
            'sentinel2a': {
                'band': 'B7',
                'bandwidth': 20.0,
                'name': 'Red Edge 3',
                'platform': 'Sentinel-2A',
                'wavelength': 782.8
            },
            'sentinel2b': {
                'band': 'B7',
                'bandwidth': 20.0,
                'name': 'Red Edge 3',
                'platform': 'Sentinel-2B',
                'wavelength': 779.7
            }
        },
        'short_name': 'RE3'
    },
    'S1': {
        'common_name': 'swir16',
        'long_name': 'Short-wave Infrared (SWIR) 1',
        'max_wavelength': 1750,
        'min_wavelength': 1550,
        'platforms': {
            'landsat4': {
                'band': 'B5',
                'bandwidth': 200.0,
                'name': 'Short-wave Infrared (SWIR) 1',
                'platform': 'Landsat 4',
                'wavelength': 1650.0
            },
            'landsat5': {
                'band': 'B5',
                'bandwidth': 200.0,
                'name': 'Short-wave Infrared (SWIR) 1',
                'platform': 'Landsat 5',
                'wavelength': 1650.0
            },
            'landsat7': {
                'band': 'B5',
                'bandwidth': 200.0,
                'name': 'Short-wave Infrared (SWIR) 1',
                'platform': 'Landsat 7',
                'wavelength': 1650.0
            },
            'landsat8': {
                'band': 'B6',
                'bandwidth': 80.0,
                'name': 'Short-wave Infrared (SWIR) 1',
                'platform': 'Landsat 8',
                'wavelength': 1610.0
            },
            'landsat9': {
                'band': 'B6',
                'bandwidth': 80.0,
                'name': 'Short-wave Infrared (SWIR) 1',
                'platform': 'Landsat 9',
                'wavelength': 1610.0
            },
            'modis': {
                'band': 'B6',
                'bandwidth': 24.0,
                'name': 'Short-wave Infrared (SWIR) 1',
                'platform': 'Terra/Aqua: MODIS',
                'wavelength': 1640.0
            },
            'sentinel2a': {
                'band': 'B11',
                'bandwidth': 91.0,
                'name': 'Short-wave Infrared (SWIR) 1',
                'platform': 'Sentinel-2A',
                'wavelength': 1613.7
            },
            'sentinel2b': {
                'band': 'B11',
                'bandwidth': 94.0,
                'name': 'Short-wave Infrared (SWIR) 1',
                'platform': 'Sentinel-2B',
                'wavelength': 1610.4
            }
        },
        'short_name': 'S1'
    },
    'S2': {
        'common_name': 'swir22',
        'long_name': 'Short-wave Infrared (SWIR) 2',
        'max_wavelength': 2350,
        'min_wavelength': 2080,
        'platforms': {
            'landsat4': {
                'band': 'B7',
                'bandwidth': 270.0,
                'name': 'Short-wave Infrared (SWIR) 2',
                'platform': 'Landsat 4',
                'wavelength': 2215.0
            },
            'landsat5': {
                'band': 'B7',
                'bandwidth': 270.0,
                'name': 'Short-wave Infrared (SWIR) 2',
                'platform': 'Landsat 5',
                'wavelength': 2215.0
            },
            'landsat7': {
                'band': 'B7',
                'bandwidth': 260.0,
                'name': 'Short-wave Infrared (SWIR) 2',
                'platform': 'Landsat 7',
                'wavelength': 2220.0
            },
            'landsat8': {
                'band': 'B7',
                'bandwidth': 180.0,
                'name': 'Short-wave Infrared (SWIR) 2',
                'platform': 'Landsat 8',
                'wavelength': 2200.0
            },
            'landsat9': {
                'band': 'B7',
                'bandwidth': 180.0,
                'name': 'Short-wave Infrared (SWIR) 2',
                'platform': 'Landsat 9',
                'wavelength': 2200.0
            },
            'modis': {
                'band': 'B7',
                'bandwidth': 50.0,
                'name': 'Short-wave Infrared (SWIR) 2',
                'platform': 'Terra/Aqua: MODIS',
                'wavelength': 2130.0
            },
            'sentinel2a': {
                'band': 'B12',
                'bandwidth': 175.0,
                'name': 'Short-wave Infrared (SWIR) 2',
                'platform': 'Sentinel-2A',
                'wavelength': 2202.4
            },
            'sentinel2b': {
                'band': 'B12',
                'bandwidth': 185.0,
                'name': 'Short-wave Infrared (SWIR) 2',
                'platform': 'Sentinel-2B',
                'wavelength': 2185.7
            }
        },
        'short_name': 'S2'
    },
    'T': {
        'common_name': 'lwir',
        'long_name': 'Thermal Infrared',
        'max_wavelength': 12500,
        'min_wavelength': 10400,
        'platforms': {
            'landsat4': {
                'band': 'B6',
                'bandwidth': 2100.0,
                'name': 'Thermal Infrared',
                'platform': 'Landsat 4',
                'wavelength': 11450.0
            },
            'landsat5': {
                'band': 'B6',
                'bandwidth': 2100.0,
                'name': 'Thermal Infrared',
                'platform': 'Landsat 5',
                'wavelength': 11450.0
            },
            'landsat7': {
                'band': 'B6',
                'bandwidth': 2100.0,
                'name': 'Thermal Infrared',
                'platform': 'Landsat 7',
                'wavelength': 11450.0
            }
        },
        'short_name': 'T'
    },
    'T1': {
        'common_name': 'lwir11',
        'long_name': 'Thermal Infrared 1',
        'max_wavelength': 11190,
        'min_wavelength': 10600,
        'platforms': {
            'landsat8': {
                'band': 'B10',
                'bandwidth': 590.0,
                'name': 'Thermal Infrared 1',
                'platform': 'Landsat 8',
                'wavelength': 10895.0
            },
            'landsat9': {
                'band': 'B10',
                'bandwidth': 590.0,
                'name': 'Thermal Infrared 1',
                'platform': 'Landsat 9',
                'wavelength': 10895.0
            }
        },
        'short_name': 'T1'
    },
    'T2': {
        'common_name': 'lwir12',
        'long_name': 'Thermal Infrared 2',
        'max_wavelength': 12510,
        'min_wavelength': 11500,
        'platforms': {
            'landsat8': {
                'band': 'B11',
                'bandwidth': 1010.0,
                'name': 'Thermal Infrared 2',
                'platform': 'Landsat 8',
                'wavelength': 12005.0
            },
            'landsat9': {
                'band': 'B11',
                'bandwidth': 1010.0,
                'name': 'Thermal Infrared 2',
                'platform': 'Landsat 9',
                'wavelength': 12005.0
            }
        },
        'short_name': 'T2'
    },
    'WV': {
        'common_name': 'nir09',
        'long_name': 'Water Vapour',
        'max_wavelength': 960,
        'min_wavelength': 930,
        'platforms': {
            'sentinel2a': {
                'band': 'B9',
                'bandwidth': 20.0,
                'name': 'Water Vapour',
                'platform': 'Sentinel-2A',
                'wavelength': 945.1
            },
            'sentinel2b': {
                'band': 'B9',
                'bandwidth': 21.0,
                'name': 'Water Vapour',
                'platform': 'Sentinel-2B',
                'wavelength': 943.2
            }
        },
        'short_name': 'WV'
    },
    'Y': {
        'common_name': 'yellow',
        'long_name': 'Yellow',
        'max_wavelength': 625,
        'min_wavelength': 585,
        'platforms': {
            'planetscope': {
                'band': 'B5',
                'bandwidth': 20.0,
                'name': 'Yellow',
                'platform': 'PlanetScope',
                'wavelength': 610.0
            },
            'wv2': {
                'band': 'B4',
                'bandwidth': 40.0,
                'name': 'Yellow',
                'platform': 'WorldView-2',
                'wavelength': 605.0
            },
            'wv3': {
                'band': 'B4',
                'bandwidth': 40.0,
                'name': 'Yellow',
                'platform': 'WorldView-3',
                'wavelength': 605.0
            }
        },
        'short_name': 'Y'
    }
};

/*
=======
Exports
=======
*/

exports.bands = bands;