"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _locales = require("./locales");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  property: {
    weight: 'weight',
    label: 'label',
    fillColor: 'fill color',
    color: 'color',
    coverage: 'coverage',
    strokeColor: 'stroke color',
    radius: 'radius',
    outline: 'outline',
    stroke: 'stroke',
    density: 'density',
    height: 'height',
    sum: 'sum',
    pointCount: 'Point Count'
  },
  placeholder: {
    search: 'Search',
    selectField: 'Select a field',
    yAxis: 'Y Axis',
    selectType: 'Select A Type',
    selectValue: 'Select A Value',
    enterValue: 'Enter a value',
    empty: 'empty'
  },
  misc: {
    by: '',
    valuesIn: 'Values in',
    valueEquals: 'Value equals',
    dataSource: 'Data Source',
    brushRadius: 'Brush Radius (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Map Layers',
    label: 'Label',
    road: 'Road',
    border: 'Border',
    building: 'Building',
    water: 'Water',
    land: 'Land',
    '3dBuilding': '3d Building'
  },
  panel: {
    text: {
      label: 'label',
      labelWithId: 'Label {labelId}',
      fontSize: 'Font size',
      fontColor: 'Font color',
      textAnchor: 'Text anchor',
      alignment: 'Alignment',
      addMoreLabel: 'Add More Label'
    }
  },
  sidebar: {
    panels: {
      layer: 'Layers',
      filter: 'Filters',
      interaction: 'Interactions',
      basemap: 'Base map'
    }
  },
  layer: {
    required: 'Required*',
    radius: 'Radius',
    color: 'Color',
    fillColor: 'Fill Color',
    outline: 'Outline',
    weight: 'Weight',
    propertyBasedOn: '{property} based on',
    coverage: 'Coverage',
    stroke: 'Stroke',
    strokeWidth: 'Stroke Width',
    strokeColor: 'Stroke Color',
    basic: 'Basic',
    trailLength: 'Trail Length',
    trailLengthDescription: 'Number of seconds for a path to completely fade out',
    newLayer: 'new layer',
    elevationByDescription: 'When off, height is based on count of points',
    colorByDescription: 'When off, color is based on count of points',
    aggregateBy: 'Aggregate {field} by',
    '3DModel': '3D Model',
    '3DModelOptions': '3D Model Options',
    type: {
      point: 'point',
      arc: 'arc',
      line: 'line',
      grid: 'grid',
      hexbin: 'hexbin',
      polygon: 'polygon',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icon',
      heatmap: 'heatmap',
      hexagon: 'hexagon',
      hexagonid: 'H3',
      trip: 'trip',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    angle: 'Angle',
    strokeWidth: 'Stroke Width (Pixels)',
    strokeWidthRange: 'Stroke Width Range',
    radius: 'Radius',
    fixedRadius: 'Fixed Radius to meter',
    fixedRadiusDescription: 'Map radius to absolute radius in meters, e.g. 5 to 5 meters',
    radiusRange: 'Radius Range',
    clusterRadius: 'Cluster Radius in Pixels',
    radiusRangePixels: 'Radius Range in pixels',
    opacity: 'Opacity',
    coverage: 'Coverage',
    outline: 'Outline',
    colorRange: 'Color range',
    stroke: 'Stroke',
    strokeColor: 'Stroke Color',
    strokeColorRange: 'Stroke Color range',
    targetColor: 'Target Color',
    colorAggregation: 'Color Aggregation',
    heightAggregation: 'Height Aggregation',
    resolutionRange: 'Resolution range',
    sizeScale: 'Size Scale',
    worldUnitSize: 'World Unit Size',
    elevationScale: 'Elevation Scale',
    heightScale: 'Height Scale',
    coverageRange: 'Coverage Range',
    highPrecisionRendering: 'High Precision Rendering',
    highPrecisionRenderingDescription: 'High precision will result in slower performance',
    height: 'Height',
    heightDescription: 'Click button at top right of the map to switch to 3d view',
    fill: 'Fill',
    enablePolygonHeight: 'Enable Polygon Height',
    showWireframe: 'Show Wireframe',
    weightIntensity: 'Weight Intensity',
    zoomScale: 'Zoom Scale',
    heightRange: 'Height Range'
  },
  layerManager: {
    addData: 'Add Data',
    addLayer: 'Add Layer',
    layerBlending: 'Layer Blending'
  },
  mapManager: {
    mapStyle: 'Map style',
    addMapStyle: 'Add Map Style',
    '3dBuildingColor': '3D Building Color'
  },
  layerConfiguration: {
    defaultDescription: 'Calculate {property} based on selected field',
    howTo: 'How to'
  },
  filterManager: {
    addFilter: 'Add Filter'
  },
  datasetTitle: {
    showDataTable: 'Show data table',
    removeDataset: 'Remove dataset'
  },
  datasetInfo: {
    rowCount: '{rowCount} rows'
  },
  tooltip: {
    hideLayer: 'hide layer',
    showLayer: 'show layer',
    hideFeature: 'Hide Feature',
    showFeature: 'Show feature',
    hide: 'hide',
    show: 'show',
    removeLayer: 'Remove layer',
    layerSettings: 'Layer settings',
    closePanel: 'Close current panel',
    switchToDualView: 'Switch to dual map view',
    showLegend: 'show legend',
    disable3DMap: 'Disable 3D Map',
    DrawOnMap: 'Draw on map',
    selectLocale: 'Select locale',
    hideLayerPanel: 'Hide layer panel',
    showLayerPanel: 'Show layer panel',
    moveToTop: 'Move to top of data layers',
    selectBaseMapStyle: 'Select Base Map Style',
    "delete": 'Delete',
    timePlayback: 'Time Playback',
    cloudStorage: 'Cloud Storage',
    '3DMap': '3D Map'
  },
  toolbar: _objectSpread({
    exportImage: 'Export Image',
    exportData: 'Export Data',
    exportMap: 'Export Map',
    shareMapURL: 'Share Map URL',
    saveMap: 'Save Map',
    select: 'select',
    polygon: 'polygon',
    rectangle: 'rectangle',
    hide: 'hide',
    show: 'show'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Delete Dataset',
      addDataToMap: 'Add Data To Map',
      exportImage: 'Export Image',
      exportData: 'Export Data',
      exportMap: 'Export Map',
      addCustomMapboxStyle: 'Add Custom Mapbox Style',
      saveMap: 'Save Map',
      shareURL: 'Share URL'
    },
    button: {
      "delete": 'Delete',
      download: 'Download',
      "export": 'Export',
      addStyle: 'Add Style',
      save: 'Save',
      defaultCancel: 'Cancel',
      defaultConfirm: 'Confirm'
    },
    exportImage: {
      ratioTitle: 'Ratio',
      ratioDescription: 'Choose the ratio for various usages.',
      ratioOriginalScreen: 'Original Screen',
      ratioCustom: 'Custom',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolution',
      resolutionDescription: 'High resolution is better for prints.',
      mapLegendTitle: 'Map Legend',
      mapLegendAdd: 'Add legend on map'
    },
    exportData: {
      datasetTitle: 'Dataset',
      datasetSubtitle: 'Choose the datasets you want to export',
      allDatasets: 'All',
      dataTypeTitle: 'Data Type',
      dataTypeSubtitle: 'Choose the type of data you want to export',
      filterDataTitle: 'Filter Data',
      filterDataSubtitle: 'You can choose exporting original data or filtered data',
      filteredData: 'Filtered data',
      unfilteredData: 'Unfiltered Data',
      fileCount: '{fileCount} Files',
      rowCount: '{rowCount} Rows'
    },
    deleteData: {
      warning: 'you are going to delete this dataset. It will affect {length} layers'
    },
    addStyle: {
      publishTitle: '1. Publish your style at mapbox or provide access token',
      publishSubtitle1: 'You can create your own map style at',
      publishSubtitle2: 'and',
      publishSubtitle3: 'publish',
      publishSubtitle4: 'it.',
      publishSubtitle5: 'To use private style, paste your',
      publishSubtitle6: 'access token',
      publishSubtitle7: 'here. *kepler.gl is a client-side application, data stays in your browser..',
      exampleToken: 'e.g. pk.abcdefg.xxxxxx',
      pasteTitle: '2. Paste style url',
      pasteSubtitle1: 'What is a',
      pasteSubtitle2: 'style URL',
      namingTitle: '3. Name your style'
    },
    shareMap: {
      shareUriTitle: 'Share Map Url',
      shareUriSubtitle: 'Generate a map url to share with others',
      cloudTitle: 'Cloud storage',
      cloudSubtitle: 'Login and upload map data to your personal cloud storage',
      shareDisclaimer: 'kepler.gl will save your map data to your personal cloud storage, only people with the URL can access your map and data. ' + 'You can edit/delete the data file in your cloud account anytime.',
      gotoPage: 'Go to your Kepler.gl {currentProvider} page'
    },
    statusPanel: {
      mapUploading: 'Map Uploading',
      error: 'Error'
    },
    saveMap: {
      title: 'Cloud storage',
      subtitle: 'Login to save map to your personal cloud storage'
    },
    exportMap: {
      formatTitle: 'Map format',
      formatSubtitle: 'Choose the format to export your map to',
      html: {
        selection: 'Export your map into an interactive html file.',
        tokenTitle: 'Mapbox access token',
        tokenSubtitle: 'Use your own Mapbox access token in the html (optional)',
        tokenPlaceholder: 'Paste your Mapbox access token',
        tokenMisuseWarning: '* If you do not provide your own token, the map may fail to display at any time when we replace ours to avoid misuse. ',
        tokenDisclaimer: 'You can change the Mapbox token later using the following instructions: ',
        tokenUpdate: 'How to update an existing map token.',
        modeTitle: 'Map Mode',
        modeSubtitle1: 'Select the app mode. More ',
        modeSubtitle2: 'info',
        modeDescription: 'Allow users to {mode} the map',
        read: 'read',
        edit: 'edit'
      },
      json: {
        configTitle: 'Map Config',
        configDisclaimer: 'Map config will be included in the Json file. If you are using kepler.gl in your own app. You can copy this config and pass it to ',
        selection: 'Export current map data and config into a single Json file. You can later open the same map by uploading this file to kepler.gl.',
        disclaimer: '* Map config is coupled with loaded datasets. ‘dataId’ is used to bind layers, filters, and tooltips to a specific dataset. ' + 'When passing this config to addDataToMap, make sure the dataset id matches the dataId/s in this config.'
      }
    },
    loadingDialog: {
      loading: 'Loading...'
    },
    loadData: {
      upload: 'Load Files',
      storage: 'Load from Storage'
    },
    tripInfo: {
      title: 'How to enable trip animation',
      description1: 'In order to animate the path, the geoJSON data needs to contain `LineString` in its feature geometry, and the coordinates in the LineString need to have 4 elements in the formats of',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2: 'with the last element being a timestamp. Valid timestamp formats include unix in seconds such as `1564184363` or in milliseconds such as `1564184363000`.',
      example: 'Example:'
    },
    iconInfo: {
      title: 'How to draw icons',
      description1: 'In your csv, create a column, put the name of the icon you want to draw in it. You can leave the cell empty if you do not want the icon to show for some points. When the column is named',
      code: 'icon',
      description2: ' kepler.gl will automatically create a icon layer for you.',
      example: 'Example:',
      icons: 'Icons'
    },
    storageMapViewer: {
      lastModified: 'Last modified {lastUpdated} ago',
      back: 'Back'
    },
    overwriteMap: {
      title: 'Saving map...',
      alreadyExists: 'already exists in your {mapSaved}. Would you like to overwrite it?'
    },
    loadStorageMap: {
      back: 'Back',
      goToPage: 'Go to your Kepler.gl {displayName} page',
      storageMaps: 'Storage / Maps',
      noSavedMaps: 'No saved maps yet'
    }
  },
  header: {
    visibleLayers: 'Visible layers',
    layerLegend: 'Layer Legend'
  },
  interactions: {
    tooltip: 'Tooltip',
    brush: 'Brush',
    coordinate: 'Coordinates',
    geocoder: 'Geocoder'
  },
  layerBlending: {
    title: 'Layer Blending',
    additive: 'additive',
    normal: 'normal',
    subtractive: 'subtractive'
  },
  columns: {
    title: 'Columns',
    lat: 'lat',
    lng: 'lon',
    altitude: 'altitude',
    icon: 'icon',
    geojson: 'geojson',
    arc: {
      lat0: 'source lat',
      lng0: 'source lng',
      lat1: 'target lat',
      lng1: 'target lng'
    },
    grid: {
      worldUnitSize: 'Grid Size (km)'
    },
    hexagon: {
      worldUnitSize: 'Hexagon Radius (km)'
    },
    hex_id: 'hex id'
  },
  color: {
    customPalette: 'Custom Palette',
    steps: 'steps',
    type: 'type',
    reversed: 'reversed'
  },
  scale: {
    colorScale: 'Color Scale',
    sizeScale: 'Size Scale',
    strokeScale: 'Stroke Scale',
    scale: 'Scale'
  },
  fileUploader: {
    message: 'Drag & Drop Your File(s) Here',
    chromeMessage: '*Chrome user: Limit file size to 250mb, if need to upload larger file, try Safari',
    disclaimer: '*kepler.gl is a client-side application with no server backend. Data lives only on your machine/browser. ' + 'No information or map data is sent to any server.',
    configUploadMessage: 'Upload **CSV**, **GeoJson** or saved map **Json**. Read more about [**supported file formats**]',
    browseFiles: 'browse your files',
    uploading: 'Uploading',
    fileNotSupported: 'File {errorFiles} is not supported.',
    or: 'or'
  },
  geocoder: {
    title: 'Geocoder'
  },
  fieldSelector: {
    clearAll: 'Clear All',
    formatting: 'Formatting'
  },
  density: 'density',
  'Bug Report': 'Bug Report',
  'User Guide': 'User Guide',
  Save: 'Save',
  Share: 'Share'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vZW4uanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJ3ZWlnaHQiLCJsYWJlbCIsImZpbGxDb2xvciIsImNvbG9yIiwiY292ZXJhZ2UiLCJzdHJva2VDb2xvciIsInJhZGl1cyIsIm91dGxpbmUiLCJzdHJva2UiLCJkZW5zaXR5IiwiaGVpZ2h0Iiwic3VtIiwicG9pbnRDb3VudCIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic2VsZWN0RmllbGQiLCJ5QXhpcyIsInNlbGVjdFR5cGUiLCJzZWxlY3RWYWx1ZSIsImVudGVyVmFsdWUiLCJlbXB0eSIsIm1pc2MiLCJieSIsInZhbHVlc0luIiwidmFsdWVFcXVhbHMiLCJkYXRhU291cmNlIiwiYnJ1c2hSYWRpdXMiLCJtYXBMYXllcnMiLCJ0aXRsZSIsInJvYWQiLCJib3JkZXIiLCJidWlsZGluZyIsIndhdGVyIiwibGFuZCIsInBhbmVsIiwidGV4dCIsImxhYmVsV2l0aElkIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYWxpZ25tZW50IiwiYWRkTW9yZUxhYmVsIiwic2lkZWJhciIsInBhbmVscyIsImxheWVyIiwiZmlsdGVyIiwiaW50ZXJhY3Rpb24iLCJiYXNlbWFwIiwicmVxdWlyZWQiLCJwcm9wZXJ0eUJhc2VkT24iLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVmlzQ29uZmlncyIsImFuZ2xlIiwic3Ryb2tlV2lkdGhSYW5nZSIsImZpeGVkUmFkaXVzIiwiZml4ZWRSYWRpdXNEZXNjcmlwdGlvbiIsInJhZGl1c1JhbmdlIiwiY2x1c3RlclJhZGl1cyIsInJhZGl1c1JhbmdlUGl4ZWxzIiwib3BhY2l0eSIsImNvbG9yUmFuZ2UiLCJzdHJva2VDb2xvclJhbmdlIiwidGFyZ2V0Q29sb3IiLCJjb2xvckFnZ3JlZ2F0aW9uIiwiaGVpZ2h0QWdncmVnYXRpb24iLCJyZXNvbHV0aW9uUmFuZ2UiLCJzaXplU2NhbGUiLCJ3b3JsZFVuaXRTaXplIiwiZWxldmF0aW9uU2NhbGUiLCJoZWlnaHRTY2FsZSIsImNvdmVyYWdlUmFuZ2UiLCJoaWdoUHJlY2lzaW9uUmVuZGVyaW5nIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uIiwiaGVpZ2h0RGVzY3JpcHRpb24iLCJmaWxsIiwiZW5hYmxlUG9seWdvbkhlaWdodCIsInNob3dXaXJlZnJhbWUiLCJ3ZWlnaHRJbnRlbnNpdHkiLCJ6b29tU2NhbGUiLCJoZWlnaHRSYW5nZSIsImxheWVyTWFuYWdlciIsImFkZERhdGEiLCJhZGRMYXllciIsImxheWVyQmxlbmRpbmciLCJtYXBNYW5hZ2VyIiwibWFwU3R5bGUiLCJhZGRNYXBTdHlsZSIsImxheWVyQ29uZmlndXJhdGlvbiIsImRlZmF1bHREZXNjcmlwdGlvbiIsImhvd1RvIiwiZmlsdGVyTWFuYWdlciIsImFkZEZpbHRlciIsImRhdGFzZXRUaXRsZSIsInNob3dEYXRhVGFibGUiLCJyZW1vdmVEYXRhc2V0IiwiZGF0YXNldEluZm8iLCJyb3dDb3VudCIsInRvb2x0aXAiLCJoaWRlTGF5ZXIiLCJzaG93TGF5ZXIiLCJoaWRlRmVhdHVyZSIsInNob3dGZWF0dXJlIiwiaGlkZSIsInNob3ciLCJyZW1vdmVMYXllciIsImxheWVyU2V0dGluZ3MiLCJjbG9zZVBhbmVsIiwic3dpdGNoVG9EdWFsVmlldyIsInNob3dMZWdlbmQiLCJkaXNhYmxlM0RNYXAiLCJEcmF3T25NYXAiLCJzZWxlY3RMb2NhbGUiLCJoaWRlTGF5ZXJQYW5lbCIsInNob3dMYXllclBhbmVsIiwibW92ZVRvVG9wIiwic2VsZWN0QmFzZU1hcFN0eWxlIiwidGltZVBsYXliYWNrIiwiY2xvdWRTdG9yYWdlIiwidG9vbGJhciIsImV4cG9ydEltYWdlIiwiZXhwb3J0RGF0YSIsImV4cG9ydE1hcCIsInNoYXJlTWFwVVJMIiwic2F2ZU1hcCIsInNlbGVjdCIsInJlY3RhbmdsZSIsIkxPQ0FMRVMiLCJtb2RhbCIsImRlbGV0ZURhdGFzZXQiLCJhZGREYXRhVG9NYXAiLCJhZGRDdXN0b21NYXBib3hTdHlsZSIsInNoYXJlVVJMIiwiYnV0dG9uIiwiZG93bmxvYWQiLCJhZGRTdHlsZSIsInNhdmUiLCJkZWZhdWx0Q2FuY2VsIiwiZGVmYXVsdENvbmZpcm0iLCJyYXRpb1RpdGxlIiwicmF0aW9EZXNjcmlwdGlvbiIsInJhdGlvT3JpZ2luYWxTY3JlZW4iLCJyYXRpb0N1c3RvbSIsInJhdGlvNF8zIiwicmF0aW8xNl85IiwicmVzb2x1dGlvblRpdGxlIiwicmVzb2x1dGlvbkRlc2NyaXB0aW9uIiwibWFwTGVnZW5kVGl0bGUiLCJtYXBMZWdlbmRBZGQiLCJkYXRhc2V0U3VidGl0bGUiLCJhbGxEYXRhc2V0cyIsImRhdGFUeXBlVGl0bGUiLCJkYXRhVHlwZVN1YnRpdGxlIiwiZmlsdGVyRGF0YVRpdGxlIiwiZmlsdGVyRGF0YVN1YnRpdGxlIiwiZmlsdGVyZWREYXRhIiwidW5maWx0ZXJlZERhdGEiLCJmaWxlQ291bnQiLCJkZWxldGVEYXRhIiwid2FybmluZyIsInB1Ymxpc2hUaXRsZSIsInB1Ymxpc2hTdWJ0aXRsZTEiLCJwdWJsaXNoU3VidGl0bGUyIiwicHVibGlzaFN1YnRpdGxlMyIsInB1Ymxpc2hTdWJ0aXRsZTQiLCJwdWJsaXNoU3VidGl0bGU1IiwicHVibGlzaFN1YnRpdGxlNiIsInB1Ymxpc2hTdWJ0aXRsZTciLCJleGFtcGxlVG9rZW4iLCJwYXN0ZVRpdGxlIiwicGFzdGVTdWJ0aXRsZTEiLCJwYXN0ZVN1YnRpdGxlMiIsIm5hbWluZ1RpdGxlIiwic2hhcmVNYXAiLCJzaGFyZVVyaVRpdGxlIiwic2hhcmVVcmlTdWJ0aXRsZSIsImNsb3VkVGl0bGUiLCJjbG91ZFN1YnRpdGxlIiwic2hhcmVEaXNjbGFpbWVyIiwiZ290b1BhZ2UiLCJzdGF0dXNQYW5lbCIsIm1hcFVwbG9hZGluZyIsImVycm9yIiwic3VidGl0bGUiLCJmb3JtYXRUaXRsZSIsImZvcm1hdFN1YnRpdGxlIiwiaHRtbCIsInNlbGVjdGlvbiIsInRva2VuVGl0bGUiLCJ0b2tlblN1YnRpdGxlIiwidG9rZW5QbGFjZWhvbGRlciIsInRva2VuTWlzdXNlV2FybmluZyIsInRva2VuRGlzY2xhaW1lciIsInRva2VuVXBkYXRlIiwibW9kZVRpdGxlIiwibW9kZVN1YnRpdGxlMSIsIm1vZGVTdWJ0aXRsZTIiLCJtb2RlRGVzY3JpcHRpb24iLCJyZWFkIiwiZWRpdCIsImpzb24iLCJjb25maWdUaXRsZSIsImNvbmZpZ0Rpc2NsYWltZXIiLCJkaXNjbGFpbWVyIiwibG9hZGluZ0RpYWxvZyIsImxvYWRpbmciLCJsb2FkRGF0YSIsInVwbG9hZCIsInN0b3JhZ2UiLCJ0cmlwSW5mbyIsImRlc2NyaXB0aW9uMSIsImNvZGUiLCJkZXNjcmlwdGlvbjIiLCJleGFtcGxlIiwiaWNvbkluZm8iLCJpY29ucyIsInN0b3JhZ2VNYXBWaWV3ZXIiLCJsYXN0TW9kaWZpZWQiLCJiYWNrIiwib3ZlcndyaXRlTWFwIiwiYWxyZWFkeUV4aXN0cyIsImxvYWRTdG9yYWdlTWFwIiwiZ29Ub1BhZ2UiLCJzdG9yYWdlTWFwcyIsIm5vU2F2ZWRNYXBzIiwiaGVhZGVyIiwidmlzaWJsZUxheWVycyIsImxheWVyTGVnZW5kIiwiaW50ZXJhY3Rpb25zIiwiYnJ1c2giLCJjb29yZGluYXRlIiwiZ2VvY29kZXIiLCJhZGRpdGl2ZSIsIm5vcm1hbCIsInN1YnRyYWN0aXZlIiwiY29sdW1ucyIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwibGF0MCIsImxuZzAiLCJsYXQxIiwibG5nMSIsImhleF9pZCIsImN1c3RvbVBhbGV0dGUiLCJzdGVwcyIsInJldmVyc2VkIiwic2NhbGUiLCJjb2xvclNjYWxlIiwic3Ryb2tlU2NhbGUiLCJmaWxlVXBsb2FkZXIiLCJtZXNzYWdlIiwiY2hyb21lTWVzc2FnZSIsImNvbmZpZ1VwbG9hZE1lc3NhZ2UiLCJicm93c2VGaWxlcyIsInVwbG9hZGluZyIsImZpbGVOb3RTdXBwb3J0ZWQiLCJvciIsImZpZWxkU2VsZWN0b3IiLCJjbGVhckFsbCIsImZvcm1hdHRpbmciLCJTYXZlIiwiU2hhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOzs7Ozs7ZUFFZTtBQUNiQSxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFLFFBREE7QUFFUkMsSUFBQUEsS0FBSyxFQUFFLE9BRkM7QUFHUkMsSUFBQUEsU0FBUyxFQUFFLFlBSEg7QUFJUkMsSUFBQUEsS0FBSyxFQUFFLE9BSkM7QUFLUkMsSUFBQUEsUUFBUSxFQUFFLFVBTEY7QUFNUkMsSUFBQUEsV0FBVyxFQUFFLGNBTkw7QUFPUkMsSUFBQUEsTUFBTSxFQUFFLFFBUEE7QUFRUkMsSUFBQUEsT0FBTyxFQUFFLFNBUkQ7QUFTUkMsSUFBQUEsTUFBTSxFQUFFLFFBVEE7QUFVUkMsSUFBQUEsT0FBTyxFQUFFLFNBVkQ7QUFXUkMsSUFBQUEsTUFBTSxFQUFFLFFBWEE7QUFZUkMsSUFBQUEsR0FBRyxFQUFFLEtBWkc7QUFhUkMsSUFBQUEsVUFBVSxFQUFFO0FBYkosR0FERztBQWdCYkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLE1BQU0sRUFBRSxRQURHO0FBRVhDLElBQUFBLFdBQVcsRUFBRSxnQkFGRjtBQUdYQyxJQUFBQSxLQUFLLEVBQUUsUUFISTtBQUlYQyxJQUFBQSxVQUFVLEVBQUUsZUFKRDtBQUtYQyxJQUFBQSxXQUFXLEVBQUUsZ0JBTEY7QUFNWEMsSUFBQUEsVUFBVSxFQUFFLGVBTkQ7QUFPWEMsSUFBQUEsS0FBSyxFQUFFO0FBUEksR0FoQkE7QUF5QmJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxFQUFFLEVBQUUsRUFE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QztBQVdaQyxJQUFBQSxnQkFBZ0IsRUFBRSxxQ0FYTjtBQVlaQyxJQUFBQSxFQUFFLEVBQUU7QUFaUSxHQWhaRDtBQThaYjFCLEVBQUFBLFFBQVEsRUFBRTtBQUNSaE8sSUFBQUEsS0FBSyxFQUFFO0FBREMsR0E5Wkc7QUFpYWIyUCxFQUFBQSxhQUFhLEVBQUU7QUFDYkMsSUFBQUEsUUFBUSxFQUFFLFdBREc7QUFFYkMsSUFBQUEsVUFBVSxFQUFFO0FBRkMsR0FqYUY7QUFxYWJoUixFQUFBQSxPQUFPLEVBQUUsU0FyYUk7QUFzYWIsZ0JBQWMsWUF0YUQ7QUF1YWIsZ0JBQWMsWUF2YUQ7QUF3YWJpUixFQUFBQSxJQUFJLEVBQUUsTUF4YU87QUF5YWJDLEVBQUFBLEtBQUssRUFBRTtBQXphTSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtMT0NBTEVTfSBmcm9tICcuL2xvY2FsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BlcnR5OiB7XHJcbiAgICB3ZWlnaHQ6ICd3ZWlnaHQnLFxyXG4gICAgbGFiZWw6ICdsYWJlbCcsXHJcbiAgICBmaWxsQ29sb3I6ICdmaWxsIGNvbG9yJyxcclxuICAgIGNvbG9yOiAnY29sb3InLFxyXG4gICAgY292ZXJhZ2U6ICdjb3ZlcmFnZScsXHJcbiAgICBzdHJva2VDb2xvcjogJ3N0cm9rZSBjb2xvcicsXHJcbiAgICByYWRpdXM6ICdyYWRpdXMnLFxyXG4gICAgb3V0bGluZTogJ291dGxpbmUnLFxyXG4gICAgc3Ryb2tlOiAnc3Ryb2tlJyxcclxuICAgIGRlbnNpdHk6ICdkZW5zaXR5JyxcclxuICAgIGhlaWdodDogJ2hlaWdodCcsXHJcbiAgICBzdW06ICdzdW0nLFxyXG4gICAgcG9pbnRDb3VudDogJ1BvaW50IENvdW50J1xyXG4gIH0sXHJcbiAgcGxhY2Vob2xkZXI6IHtcclxuICAgIHNlYXJjaDogJ1NlYXJjaCcsXHJcbiAgICBzZWxlY3RGaWVsZDogJ1NlbGVjdCBhIGZpZWxkJyxcclxuICAgIHlBeGlzOiAnWSBBeGlzJyxcclxuICAgIHNlbGVjdFR5cGU6ICdTZWxlY3QgQSBUeXBlJyxcclxuICAgIHNlbGVjdFZhbHVlOiAnU2VsZWN0IEEgVmFsdWUnLFxyXG4gICAgZW50ZXJWYWx1ZTogJ0VudGVyIGEgdmFsdWUnLFxyXG4gICAgZW1wdHk6ICdlbXB0eSdcclxuICB9LFxyXG4gIG1pc2M6IHtcclxuICAgIGJ5OiAnJyxcclxuICAgIHZhbHVlc0luOiAnVmFsdWVzIGluJyxcclxuICAgIHZhbHVlRXF1YWxzOiAnVmFsdWUgZXF1YWxzJyxcclxuICAgIGRhdGFTb3VyY2U6ICdEYXRhIFNvdXJjZScsXHJcbiAgICBicnVzaFJhZGl1czogJ0JydXNoIFJhZGl1cyAoa20pJyxcclxuICAgIGVtcHR5OiAnICdcclxuICB9LFxyXG4gIG1hcExheWVyczoge1xyXG4gICAgdGl0bGU6ICdNYXAgTGF5ZXJzJyxcclxuICAgIGxhYmVsOiAnTGFiZWwnLFxyXG4gICAgcm9hZDogJ1JvYWQnLFxyXG4gICAgYm9yZGVyOiAnQm9yZGVyJyxcclxuICAgIGJ1aWxkaW5nOiAnQnVpbGRpbmcnLFxyXG4gICAgd2F0ZXI6ICdXYXRlcicsXHJcbiAgICBsYW5kOiAnTGFuZCcsXHJcbiAgICAnM2RCdWlsZGluZyc6ICczZCBCdWlsZGluZydcclxuICB9LFxyXG4gIHBhbmVsOiB7XHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxyXG4gICAgICBsYWJlbFdpdGhJZDogJ0xhYmVsIHtsYWJlbElkfScsXHJcbiAgICAgIGZvbnRTaXplOiAnRm9udCBzaXplJyxcclxuICAgICAgZm9udENvbG9yOiAnRm9udCBjb2xvcicsXHJcbiAgICAgIHRleHRBbmNob3I6ICdUZXh0IGFuY2hvcicsXHJcbiAgICAgIGFsaWdubWVudDogJ0FsaWdubWVudCcsXHJcbiAgICAgIGFkZE1vcmVMYWJlbDogJ0FkZCBNb3JlIExhYmVsJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2lkZWJhcjoge1xyXG4gICAgcGFuZWxzOiB7XHJcbiAgICAgIGxheWVyOiAnTGF5ZXJzJyxcclxuICAgICAgZmlsdGVyOiAnRmlsdGVycycsXHJcbiAgICAgIGludGVyYWN0aW9uOiAnSW50ZXJhY3Rpb25zJyxcclxuICAgICAgYmFzZW1hcDogJ0Jhc2UgbWFwJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGF5ZXI6IHtcclxuICAgIHJlcXVpcmVkOiAnUmVxdWlyZWQqJyxcclxuICAgIHJhZGl1czogJ1JhZGl1cycsXHJcbiAgICBjb2xvcjogJ0NvbG9yJyxcclxuICAgIGZpbGxDb2xvcjogJ0ZpbGwgQ29sb3InLFxyXG4gICAgb3V0bGluZTogJ091dGxpbmUnLFxyXG4gICAgd2VpZ2h0OiAnV2VpZ2h0JyxcclxuICAgIHByb3BlcnR5QmFzZWRPbjogJ3twcm9wZXJ0eX0gYmFzZWQgb24nLFxyXG4gICAgY292ZXJhZ2U6ICdDb3ZlcmFnZScsXHJcbiAgICBzdHJva2U6ICdTdHJva2UnLFxyXG4gICAgc3Ryb2tlV2lkdGg6ICdTdHJva2UgV2lkdGgnLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICdTdHJva2UgQ29sb3InLFxyXG4gICAgYmFzaWM6ICdCYXNpYycsXHJcbiAgICB0cmFpbExlbmd0aDogJ1RyYWlsIExlbmd0aCcsXHJcbiAgICB0cmFpbExlbmd0aERlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHNlY29uZHMgZm9yIGEgcGF0aCB0byBjb21wbGV0ZWx5IGZhZGUgb3V0JyxcclxuICAgIG5ld0xheWVyOiAnbmV3IGxheWVyJyxcclxuICAgIGVsZXZhdGlvbkJ5RGVzY3JpcHRpb246ICdXaGVuIG9mZiwgaGVpZ2h0IGlzIGJhc2VkIG9uIGNvdW50IG9mIHBvaW50cycsXHJcbiAgICBjb2xvckJ5RGVzY3JpcHRpb246ICdXaGVuIG9mZiwgY29sb3IgaXMgYmFzZWQgb24gY291bnQgb2YgcG9pbnRzJyxcclxuICAgIGFnZ3JlZ2F0ZUJ5OiAnQWdncmVnYXRlIHtmaWVsZH0gYnknLFxyXG4gICAgJzNETW9kZWwnOiAnM0QgTW9kZWwnLFxyXG4gICAgJzNETW9kZWxPcHRpb25zJzogJzNEIE1vZGVsIE9wdGlvbnMnLFxyXG4gICAgdHlwZToge1xyXG4gICAgICBwb2ludDogJ3BvaW50JyxcclxuICAgICAgYXJjOiAnYXJjJyxcclxuICAgICAgbGluZTogJ2xpbmUnLFxyXG4gICAgICBncmlkOiAnZ3JpZCcsXHJcbiAgICAgIGhleGJpbjogJ2hleGJpbicsXHJcbiAgICAgIHBvbHlnb246ICdwb2x5Z29uJyxcclxuICAgICAgZ2VvanNvbjogJ2dlb2pzb24nLFxyXG4gICAgICBjbHVzdGVyOiAnY2x1c3RlcicsXHJcbiAgICAgIGljb246ICdpY29uJyxcclxuICAgICAgaGVhdG1hcDogJ2hlYXRtYXAnLFxyXG4gICAgICBoZXhhZ29uOiAnaGV4YWdvbicsXHJcbiAgICAgIGhleGFnb25pZDogJ0gzJyxcclxuICAgICAgdHJpcDogJ3RyaXAnLFxyXG4gICAgICBzMjogJ1MyJyxcclxuICAgICAgJzNkJzogJzNEJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGF5ZXJWaXNDb25maWdzOiB7XHJcbiAgICBhbmdsZTogJ0FuZ2xlJyxcclxuICAgIHN0cm9rZVdpZHRoOiAnU3Ryb2tlIFdpZHRoIChQaXhlbHMpJyxcclxuICAgIHN0cm9rZVdpZHRoUmFuZ2U6ICdTdHJva2UgV2lkdGggUmFuZ2UnLFxyXG4gICAgcmFkaXVzOiAnUmFkaXVzJyxcclxuICAgIGZpeGVkUmFkaXVzOiAnRml4ZWQgUmFkaXVzIHRvIG1ldGVyJyxcclxuICAgIGZpeGVkUmFkaXVzRGVzY3JpcHRpb246ICdNYXAgcmFkaXVzIHRvIGFic29sdXRlIHJhZGl1cyBpbiBtZXRlcnMsIGUuZy4gNSB0byA1IG1ldGVycycsXHJcbiAgICByYWRpdXNSYW5nZTogJ1JhZGl1cyBSYW5nZScsXHJcbiAgICBjbHVzdGVyUmFkaXVzOiAnQ2x1c3RlciBSYWRpdXMgaW4gUGl4ZWxzJyxcclxuICAgIHJhZGl1c1JhbmdlUGl4ZWxzOiAnUmFkaXVzIFJhbmdlIGluIHBpeGVscycsXHJcbiAgICBvcGFjaXR5OiAnT3BhY2l0eScsXHJcbiAgICBjb3ZlcmFnZTogJ0NvdmVyYWdlJyxcclxuICAgIG91dGxpbmU6ICdPdXRsaW5lJyxcclxuICAgIGNvbG9yUmFuZ2U6ICdDb2xvciByYW5nZScsXHJcbiAgICBzdHJva2U6ICdTdHJva2UnLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICdTdHJva2UgQ29sb3InLFxyXG4gICAgc3Ryb2tlQ29sb3JSYW5nZTogJ1N0cm9rZSBDb2xvciByYW5nZScsXHJcbiAgICB0YXJnZXRDb2xvcjogJ1RhcmdldCBDb2xvcicsXHJcbiAgICBjb2xvckFnZ3JlZ2F0aW9uOiAnQ29sb3IgQWdncmVnYXRpb24nLFxyXG4gICAgaGVpZ2h0QWdncmVnYXRpb246ICdIZWlnaHQgQWdncmVnYXRpb24nLFxyXG4gICAgcmVzb2x1dGlvblJhbmdlOiAnUmVzb2x1dGlvbiByYW5nZScsXHJcbiAgICBzaXplU2NhbGU6ICdTaXplIFNjYWxlJyxcclxuICAgIHdvcmxkVW5pdFNpemU6ICdXb3JsZCBVbml0IFNpemUnLFxyXG4gICAgZWxldmF0aW9uU2NhbGU6ICdFbGV2YXRpb24gU2NhbGUnLFxyXG4gICAgaGVpZ2h0U2NhbGU6ICdIZWlnaHQgU2NhbGUnLFxyXG4gICAgY292ZXJhZ2VSYW5nZTogJ0NvdmVyYWdlIFJhbmdlJyxcclxuICAgIGhpZ2hQcmVjaXNpb25SZW5kZXJpbmc6ICdIaWdoIFByZWNpc2lvbiBSZW5kZXJpbmcnLFxyXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uOiAnSGlnaCBwcmVjaXNpb24gd2lsbCByZXN1bHQgaW4gc2xvd2VyIHBlcmZvcm1hbmNlJyxcclxuICAgIGhlaWdodDogJ0hlaWdodCcsXHJcbiAgICBoZWlnaHREZXNjcmlwdGlvbjogJ0NsaWNrIGJ1dHRvbiBhdCB0b3AgcmlnaHQgb2YgdGhlIG1hcCB0byBzd2l0Y2ggdG8gM2QgdmlldycsXHJcbiAgICBmaWxsOiAnRmlsbCcsXHJcbiAgICBlbmFibGVQb2x5Z29uSGVpZ2h0OiAnRW5hYmxlIFBvbHlnb24gSGVpZ2h0JyxcclxuICAgIHNob3dXaXJlZnJhbWU6ICdTaG93IFdpcmVmcmFtZScsXHJcbiAgICB3ZWlnaHRJbnRlbnNpdHk6ICdXZWlnaHQgSW50ZW5zaXR5JyxcclxuICAgIHpvb21TY2FsZTogJ1pvb20gU2NhbGUnLFxyXG4gICAgaGVpZ2h0UmFuZ2U6ICdIZWlnaHQgUmFuZ2UnXHJcbiAgfSxcclxuICBsYXllck1hbmFnZXI6IHtcclxuICAgIGFkZERhdGE6ICdBZGQgRGF0YScsXHJcbiAgICBhZGRMYXllcjogJ0FkZCBMYXllcicsXHJcbiAgICBsYXllckJsZW5kaW5nOiAnTGF5ZXIgQmxlbmRpbmcnXHJcbiAgfSxcclxuICBtYXBNYW5hZ2VyOiB7XHJcbiAgICBtYXBTdHlsZTogJ01hcCBzdHlsZScsXHJcbiAgICBhZGRNYXBTdHlsZTogJ0FkZCBNYXAgU3R5bGUnLFxyXG4gICAgJzNkQnVpbGRpbmdDb2xvcic6ICczRCBCdWlsZGluZyBDb2xvcidcclxuICB9LFxyXG4gIGxheWVyQ29uZmlndXJhdGlvbjoge1xyXG4gICAgZGVmYXVsdERlc2NyaXB0aW9uOiAnQ2FsY3VsYXRlIHtwcm9wZXJ0eX0gYmFzZWQgb24gc2VsZWN0ZWQgZmllbGQnLFxyXG4gICAgaG93VG86ICdIb3cgdG8nXHJcbiAgfSxcclxuICBmaWx0ZXJNYW5hZ2VyOiB7XHJcbiAgICBhZGRGaWx0ZXI6ICdBZGQgRmlsdGVyJ1xyXG4gIH0sXHJcbiAgZGF0YXNldFRpdGxlOiB7XHJcbiAgICBzaG93RGF0YVRhYmxlOiAnU2hvdyBkYXRhIHRhYmxlJyxcclxuICAgIHJlbW92ZURhdGFzZXQ6ICdSZW1vdmUgZGF0YXNldCdcclxuICB9LFxyXG4gIGRhdGFzZXRJbmZvOiB7XHJcbiAgICByb3dDb3VudDogJ3tyb3dDb3VudH0gcm93cydcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIGhpZGVMYXllcjogJ2hpZGUgbGF5ZXInLFxyXG4gICAgc2hvd0xheWVyOiAnc2hvdyBsYXllcicsXHJcbiAgICBoaWRlRmVhdHVyZTogJ0hpZGUgRmVhdHVyZScsXHJcbiAgICBzaG93RmVhdHVyZTogJ1Nob3cgZmVhdHVyZScsXHJcbiAgICBoaWRlOiAnaGlkZScsXHJcbiAgICBzaG93OiAnc2hvdycsXHJcbiAgICByZW1vdmVMYXllcjogJ1JlbW92ZSBsYXllcicsXHJcbiAgICBsYXllclNldHRpbmdzOiAnTGF5ZXIgc2V0dGluZ3MnLFxyXG4gICAgY2xvc2VQYW5lbDogJ0Nsb3NlIGN1cnJlbnQgcGFuZWwnLFxyXG4gICAgc3dpdGNoVG9EdWFsVmlldzogJ1N3aXRjaCB0byBkdWFsIG1hcCB2aWV3JyxcclxuICAgIHNob3dMZWdlbmQ6ICdzaG93IGxlZ2VuZCcsXHJcbiAgICBkaXNhYmxlM0RNYXA6ICdEaXNhYmxlIDNEIE1hcCcsXHJcbiAgICBEcmF3T25NYXA6ICdEcmF3IG9uIG1hcCcsXHJcbiAgICBzZWxlY3RMb2NhbGU6ICdTZWxlY3QgbG9jYWxlJyxcclxuICAgIGhpZGVMYXllclBhbmVsOiAnSGlkZSBsYXllciBwYW5lbCcsXHJcbiAgICBzaG93TGF5ZXJQYW5lbDogJ1Nob3cgbGF5ZXIgcGFuZWwnLFxyXG4gICAgbW92ZVRvVG9wOiAnTW92ZSB0byB0b3Agb2YgZGF0YSBsYXllcnMnLFxyXG4gICAgc2VsZWN0QmFzZU1hcFN0eWxlOiAnU2VsZWN0IEJhc2UgTWFwIFN0eWxlJyxcclxuICAgIGRlbGV0ZTogJ0RlbGV0ZScsXHJcbiAgICB0aW1lUGxheWJhY2s6ICdUaW1lIFBsYXliYWNrJyxcclxuICAgIGNsb3VkU3RvcmFnZTogJ0Nsb3VkIFN0b3JhZ2UnLFxyXG4gICAgJzNETWFwJzogJzNEIE1hcCdcclxuICB9LFxyXG4gIHRvb2xiYXI6IHtcclxuICAgIGV4cG9ydEltYWdlOiAnRXhwb3J0IEltYWdlJyxcclxuICAgIGV4cG9ydERhdGE6ICdFeHBvcnQgRGF0YScsXHJcbiAgICBleHBvcnRNYXA6ICdFeHBvcnQgTWFwJyxcclxuICAgIHNoYXJlTWFwVVJMOiAnU2hhcmUgTWFwIFVSTCcsXHJcbiAgICBzYXZlTWFwOiAnU2F2ZSBNYXAnLFxyXG4gICAgc2VsZWN0OiAnc2VsZWN0JyxcclxuICAgIHBvbHlnb246ICdwb2x5Z29uJyxcclxuICAgIHJlY3RhbmdsZTogJ3JlY3RhbmdsZScsXHJcbiAgICBoaWRlOiAnaGlkZScsXHJcbiAgICBzaG93OiAnc2hvdycsXHJcbiAgICAuLi5MT0NBTEVTXHJcbiAgfSxcclxuICBtb2RhbDoge1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZGVsZXRlRGF0YXNldDogJ0RlbGV0ZSBEYXRhc2V0JyxcclxuICAgICAgYWRkRGF0YVRvTWFwOiAnQWRkIERhdGEgVG8gTWFwJyxcclxuICAgICAgZXhwb3J0SW1hZ2U6ICdFeHBvcnQgSW1hZ2UnLFxyXG4gICAgICBleHBvcnREYXRhOiAnRXhwb3J0IERhdGEnLFxyXG4gICAgICBleHBvcnRNYXA6ICdFeHBvcnQgTWFwJyxcclxuICAgICAgYWRkQ3VzdG9tTWFwYm94U3R5bGU6ICdBZGQgQ3VzdG9tIE1hcGJveCBTdHlsZScsXHJcbiAgICAgIHNhdmVNYXA6ICdTYXZlIE1hcCcsXHJcbiAgICAgIHNoYXJlVVJMOiAnU2hhcmUgVVJMJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBkZWxldGU6ICdEZWxldGUnLFxyXG4gICAgICBkb3dubG9hZDogJ0Rvd25sb2FkJyxcclxuICAgICAgZXhwb3J0OiAnRXhwb3J0JyxcclxuICAgICAgYWRkU3R5bGU6ICdBZGQgU3R5bGUnLFxyXG4gICAgICBzYXZlOiAnU2F2ZScsXHJcbiAgICAgIGRlZmF1bHRDYW5jZWw6ICdDYW5jZWwnLFxyXG4gICAgICBkZWZhdWx0Q29uZmlybTogJ0NvbmZpcm0nXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0SW1hZ2U6IHtcclxuICAgICAgcmF0aW9UaXRsZTogJ1JhdGlvJyxcclxuICAgICAgcmF0aW9EZXNjcmlwdGlvbjogJ0Nob29zZSB0aGUgcmF0aW8gZm9yIHZhcmlvdXMgdXNhZ2VzLicsXHJcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICdPcmlnaW5hbCBTY3JlZW4nLFxyXG4gICAgICByYXRpb0N1c3RvbTogJ0N1c3RvbScsXHJcbiAgICAgIHJhdGlvNF8zOiAnNDozJyxcclxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXHJcbiAgICAgIHJlc29sdXRpb25UaXRsZTogJ1Jlc29sdXRpb24nLFxyXG4gICAgICByZXNvbHV0aW9uRGVzY3JpcHRpb246ICdIaWdoIHJlc29sdXRpb24gaXMgYmV0dGVyIGZvciBwcmludHMuJyxcclxuICAgICAgbWFwTGVnZW5kVGl0bGU6ICdNYXAgTGVnZW5kJyxcclxuICAgICAgbWFwTGVnZW5kQWRkOiAnQWRkIGxlZ2VuZCBvbiBtYXAnXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0RGF0YToge1xyXG4gICAgICBkYXRhc2V0VGl0bGU6ICdEYXRhc2V0JyxcclxuICAgICAgZGF0YXNldFN1YnRpdGxlOiAnQ2hvb3NlIHRoZSBkYXRhc2V0cyB5b3Ugd2FudCB0byBleHBvcnQnLFxyXG4gICAgICBhbGxEYXRhc2V0czogJ0FsbCcsXHJcbiAgICAgIGRhdGFUeXBlVGl0bGU6ICdEYXRhIFR5cGUnLFxyXG4gICAgICBkYXRhVHlwZVN1YnRpdGxlOiAnQ2hvb3NlIHRoZSB0eXBlIG9mIGRhdGEgeW91IHdhbnQgdG8gZXhwb3J0JyxcclxuICAgICAgZmlsdGVyRGF0YVRpdGxlOiAnRmlsdGVyIERhdGEnLFxyXG4gICAgICBmaWx0ZXJEYXRhU3VidGl0bGU6ICdZb3UgY2FuIGNob29zZSBleHBvcnRpbmcgb3JpZ2luYWwgZGF0YSBvciBmaWx0ZXJlZCBkYXRhJyxcclxuICAgICAgZmlsdGVyZWREYXRhOiAnRmlsdGVyZWQgZGF0YScsXHJcbiAgICAgIHVuZmlsdGVyZWREYXRhOiAnVW5maWx0ZXJlZCBEYXRhJyxcclxuICAgICAgZmlsZUNvdW50OiAne2ZpbGVDb3VudH0gRmlsZXMnLFxyXG4gICAgICByb3dDb3VudDogJ3tyb3dDb3VudH0gUm93cydcclxuICAgIH0sXHJcbiAgICBkZWxldGVEYXRhOiB7XHJcbiAgICAgIHdhcm5pbmc6ICd5b3UgYXJlIGdvaW5nIHRvIGRlbGV0ZSB0aGlzIGRhdGFzZXQuIEl0IHdpbGwgYWZmZWN0IHtsZW5ndGh9IGxheWVycydcclxuICAgIH0sXHJcbiAgICBhZGRTdHlsZToge1xyXG4gICAgICBwdWJsaXNoVGl0bGU6ICcxLiBQdWJsaXNoIHlvdXIgc3R5bGUgYXQgbWFwYm94IG9yIHByb3ZpZGUgYWNjZXNzIHRva2VuJyxcclxuICAgICAgcHVibGlzaFN1YnRpdGxlMTogJ1lvdSBjYW4gY3JlYXRlIHlvdXIgb3duIG1hcCBzdHlsZSBhdCcsXHJcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTI6ICdhbmQnLFxyXG4gICAgICBwdWJsaXNoU3VidGl0bGUzOiAncHVibGlzaCcsXHJcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTQ6ICdpdC4nLFxyXG4gICAgICBwdWJsaXNoU3VidGl0bGU1OiAnVG8gdXNlIHByaXZhdGUgc3R5bGUsIHBhc3RlIHlvdXInLFxyXG4gICAgICBwdWJsaXNoU3VidGl0bGU2OiAnYWNjZXNzIHRva2VuJyxcclxuICAgICAgcHVibGlzaFN1YnRpdGxlNzpcclxuICAgICAgICAnaGVyZS4gKmtlcGxlci5nbCBpcyBhIGNsaWVudC1zaWRlIGFwcGxpY2F0aW9uLCBkYXRhIHN0YXlzIGluIHlvdXIgYnJvd3Nlci4uJyxcclxuICAgICAgZXhhbXBsZVRva2VuOiAnZS5nLiBway5hYmNkZWZnLnh4eHh4eCcsXHJcbiAgICAgIHBhc3RlVGl0bGU6ICcyLiBQYXN0ZSBzdHlsZSB1cmwnLFxyXG4gICAgICBwYXN0ZVN1YnRpdGxlMTogJ1doYXQgaXMgYScsXHJcbiAgICAgIHBhc3RlU3VidGl0bGUyOiAnc3R5bGUgVVJMJyxcclxuICAgICAgbmFtaW5nVGl0bGU6ICczLiBOYW1lIHlvdXIgc3R5bGUnXHJcbiAgICB9LFxyXG4gICAgc2hhcmVNYXA6IHtcclxuICAgICAgc2hhcmVVcmlUaXRsZTogJ1NoYXJlIE1hcCBVcmwnLFxyXG4gICAgICBzaGFyZVVyaVN1YnRpdGxlOiAnR2VuZXJhdGUgYSBtYXAgdXJsIHRvIHNoYXJlIHdpdGggb3RoZXJzJyxcclxuICAgICAgY2xvdWRUaXRsZTogJ0Nsb3VkIHN0b3JhZ2UnLFxyXG4gICAgICBjbG91ZFN1YnRpdGxlOiAnTG9naW4gYW5kIHVwbG9hZCBtYXAgZGF0YSB0byB5b3VyIHBlcnNvbmFsIGNsb3VkIHN0b3JhZ2UnLFxyXG4gICAgICBzaGFyZURpc2NsYWltZXI6XHJcbiAgICAgICAgJ2tlcGxlci5nbCB3aWxsIHNhdmUgeW91ciBtYXAgZGF0YSB0byB5b3VyIHBlcnNvbmFsIGNsb3VkIHN0b3JhZ2UsIG9ubHkgcGVvcGxlIHdpdGggdGhlIFVSTCBjYW4gYWNjZXNzIHlvdXIgbWFwIGFuZCBkYXRhLiAnICtcclxuICAgICAgICAnWW91IGNhbiBlZGl0L2RlbGV0ZSB0aGUgZGF0YSBmaWxlIGluIHlvdXIgY2xvdWQgYWNjb3VudCBhbnl0aW1lLicsXHJcbiAgICAgIGdvdG9QYWdlOiAnR28gdG8geW91ciBLZXBsZXIuZ2wge2N1cnJlbnRQcm92aWRlcn0gcGFnZSdcclxuICAgIH0sXHJcbiAgICBzdGF0dXNQYW5lbDoge1xyXG4gICAgICBtYXBVcGxvYWRpbmc6ICdNYXAgVXBsb2FkaW5nJyxcclxuICAgICAgZXJyb3I6ICdFcnJvcidcclxuICAgIH0sXHJcbiAgICBzYXZlTWFwOiB7XHJcbiAgICAgIHRpdGxlOiAnQ2xvdWQgc3RvcmFnZScsXHJcbiAgICAgIHN1YnRpdGxlOiAnTG9naW4gdG8gc2F2ZSBtYXAgdG8geW91ciBwZXJzb25hbCBjbG91ZCBzdG9yYWdlJ1xyXG4gICAgfSxcclxuICAgIGV4cG9ydE1hcDoge1xyXG4gICAgICBmb3JtYXRUaXRsZTogJ01hcCBmb3JtYXQnLFxyXG4gICAgICBmb3JtYXRTdWJ0aXRsZTogJ0Nob29zZSB0aGUgZm9ybWF0IHRvIGV4cG9ydCB5b3VyIG1hcCB0bycsXHJcbiAgICAgIGh0bWw6IHtcclxuICAgICAgICBzZWxlY3Rpb246ICdFeHBvcnQgeW91ciBtYXAgaW50byBhbiBpbnRlcmFjdGl2ZSBodG1sIGZpbGUuJyxcclxuICAgICAgICB0b2tlblRpdGxlOiAnTWFwYm94IGFjY2VzcyB0b2tlbicsXHJcbiAgICAgICAgdG9rZW5TdWJ0aXRsZTogJ1VzZSB5b3VyIG93biBNYXBib3ggYWNjZXNzIHRva2VuIGluIHRoZSBodG1sIChvcHRpb25hbCknLFxyXG4gICAgICAgIHRva2VuUGxhY2Vob2xkZXI6ICdQYXN0ZSB5b3VyIE1hcGJveCBhY2Nlc3MgdG9rZW4nLFxyXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcclxuICAgICAgICAgICcqIElmIHlvdSBkbyBub3QgcHJvdmlkZSB5b3VyIG93biB0b2tlbiwgdGhlIG1hcCBtYXkgZmFpbCB0byBkaXNwbGF5IGF0IGFueSB0aW1lIHdoZW4gd2UgcmVwbGFjZSBvdXJzIHRvIGF2b2lkIG1pc3VzZS4gJyxcclxuICAgICAgICB0b2tlbkRpc2NsYWltZXI6ICdZb3UgY2FuIGNoYW5nZSB0aGUgTWFwYm94IHRva2VuIGxhdGVyIHVzaW5nIHRoZSBmb2xsb3dpbmcgaW5zdHJ1Y3Rpb25zOiAnLFxyXG4gICAgICAgIHRva2VuVXBkYXRlOiAnSG93IHRvIHVwZGF0ZSBhbiBleGlzdGluZyBtYXAgdG9rZW4uJyxcclxuICAgICAgICBtb2RlVGl0bGU6ICdNYXAgTW9kZScsXHJcbiAgICAgICAgbW9kZVN1YnRpdGxlMTogJ1NlbGVjdCB0aGUgYXBwIG1vZGUuIE1vcmUgJyxcclxuICAgICAgICBtb2RlU3VidGl0bGUyOiAnaW5mbycsXHJcbiAgICAgICAgbW9kZURlc2NyaXB0aW9uOiAnQWxsb3cgdXNlcnMgdG8ge21vZGV9IHRoZSBtYXAnLFxyXG4gICAgICAgIHJlYWQ6ICdyZWFkJyxcclxuICAgICAgICBlZGl0OiAnZWRpdCdcclxuICAgICAgfSxcclxuICAgICAganNvbjoge1xyXG4gICAgICAgIGNvbmZpZ1RpdGxlOiAnTWFwIENvbmZpZycsXHJcbiAgICAgICAgY29uZmlnRGlzY2xhaW1lcjpcclxuICAgICAgICAgICdNYXAgY29uZmlnIHdpbGwgYmUgaW5jbHVkZWQgaW4gdGhlIEpzb24gZmlsZS4gSWYgeW91IGFyZSB1c2luZyBrZXBsZXIuZ2wgaW4geW91ciBvd24gYXBwLiBZb3UgY2FuIGNvcHkgdGhpcyBjb25maWcgYW5kIHBhc3MgaXQgdG8gJyxcclxuICAgICAgICBzZWxlY3Rpb246XHJcbiAgICAgICAgICAnRXhwb3J0IGN1cnJlbnQgbWFwIGRhdGEgYW5kIGNvbmZpZyBpbnRvIGEgc2luZ2xlIEpzb24gZmlsZS4gWW91IGNhbiBsYXRlciBvcGVuIHRoZSBzYW1lIG1hcCBieSB1cGxvYWRpbmcgdGhpcyBmaWxlIHRvIGtlcGxlci5nbC4nLFxyXG4gICAgICAgIGRpc2NsYWltZXI6XHJcbiAgICAgICAgICAnKiBNYXAgY29uZmlnIGlzIGNvdXBsZWQgd2l0aCBsb2FkZWQgZGF0YXNldHMuIOKAmGRhdGFJZOKAmSBpcyB1c2VkIHRvIGJpbmQgbGF5ZXJzLCBmaWx0ZXJzLCBhbmQgdG9vbHRpcHMgdG8gYSBzcGVjaWZpYyBkYXRhc2V0LiAnICtcclxuICAgICAgICAgICdXaGVuIHBhc3NpbmcgdGhpcyBjb25maWcgdG8gYWRkRGF0YVRvTWFwLCBtYWtlIHN1cmUgdGhlIGRhdGFzZXQgaWQgbWF0Y2hlcyB0aGUgZGF0YUlkL3MgaW4gdGhpcyBjb25maWcuJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbG9hZGluZ0RpYWxvZzoge1xyXG4gICAgICBsb2FkaW5nOiAnTG9hZGluZy4uLidcclxuICAgIH0sXHJcbiAgICBsb2FkRGF0YToge1xyXG4gICAgICB1cGxvYWQ6ICdMb2FkIEZpbGVzJyxcclxuICAgICAgc3RvcmFnZTogJ0xvYWQgZnJvbSBTdG9yYWdlJ1xyXG4gICAgfSxcclxuICAgIHRyaXBJbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnSG93IHRvIGVuYWJsZSB0cmlwIGFuaW1hdGlvbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uMTpcclxuICAgICAgICAnSW4gb3JkZXIgdG8gYW5pbWF0ZSB0aGUgcGF0aCwgdGhlIGdlb0pTT04gZGF0YSBuZWVkcyB0byBjb250YWluIGBMaW5lU3RyaW5nYCBpbiBpdHMgZmVhdHVyZSBnZW9tZXRyeSwgYW5kIHRoZSBjb29yZGluYXRlcyBpbiB0aGUgTGluZVN0cmluZyBuZWVkIHRvIGhhdmUgNCBlbGVtZW50cyBpbiB0aGUgZm9ybWF0cyBvZicsXHJcbiAgICAgIGNvZGU6ICcgW2xvbmdpdHVkZSwgbGF0aXR1ZGUsIGFsdGl0dWRlLCB0aW1lc3RhbXBdICcsXHJcbiAgICAgIGRlc2NyaXB0aW9uMjpcclxuICAgICAgICAnd2l0aCB0aGUgbGFzdCBlbGVtZW50IGJlaW5nIGEgdGltZXN0YW1wLiBWYWxpZCB0aW1lc3RhbXAgZm9ybWF0cyBpbmNsdWRlIHVuaXggaW4gc2Vjb25kcyBzdWNoIGFzIGAxNTY0MTg0MzYzYCBvciBpbiBtaWxsaXNlY29uZHMgc3VjaCBhcyBgMTU2NDE4NDM2MzAwMGAuJyxcclxuICAgICAgZXhhbXBsZTogJ0V4YW1wbGU6J1xyXG4gICAgfSxcclxuICAgIGljb25JbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnSG93IHRvIGRyYXcgaWNvbnMnLFxyXG4gICAgICBkZXNjcmlwdGlvbjE6XHJcbiAgICAgICAgJ0luIHlvdXIgY3N2LCBjcmVhdGUgYSBjb2x1bW4sIHB1dCB0aGUgbmFtZSBvZiB0aGUgaWNvbiB5b3Ugd2FudCB0byBkcmF3IGluIGl0LiBZb3UgY2FuIGxlYXZlIHRoZSBjZWxsIGVtcHR5IGlmIHlvdSBkbyBub3Qgd2FudCB0aGUgaWNvbiB0byBzaG93IGZvciBzb21lIHBvaW50cy4gV2hlbiB0aGUgY29sdW1uIGlzIG5hbWVkJyxcclxuICAgICAgY29kZTogJ2ljb24nLFxyXG4gICAgICBkZXNjcmlwdGlvbjI6ICcga2VwbGVyLmdsIHdpbGwgYXV0b21hdGljYWxseSBjcmVhdGUgYSBpY29uIGxheWVyIGZvciB5b3UuJyxcclxuICAgICAgZXhhbXBsZTogJ0V4YW1wbGU6JyxcclxuICAgICAgaWNvbnM6ICdJY29ucydcclxuICAgIH0sXHJcbiAgICBzdG9yYWdlTWFwVmlld2VyOiB7XHJcbiAgICAgIGxhc3RNb2RpZmllZDogJ0xhc3QgbW9kaWZpZWQge2xhc3RVcGRhdGVkfSBhZ28nLFxyXG4gICAgICBiYWNrOiAnQmFjaydcclxuICAgIH0sXHJcbiAgICBvdmVyd3JpdGVNYXA6IHtcclxuICAgICAgdGl0bGU6ICdTYXZpbmcgbWFwLi4uJyxcclxuICAgICAgYWxyZWFkeUV4aXN0czogJ2FscmVhZHkgZXhpc3RzIGluIHlvdXIge21hcFNhdmVkfS4gV291bGQgeW91IGxpa2UgdG8gb3ZlcndyaXRlIGl0PydcclxuICAgIH0sXHJcbiAgICBsb2FkU3RvcmFnZU1hcDoge1xyXG4gICAgICBiYWNrOiAnQmFjaycsXHJcbiAgICAgIGdvVG9QYWdlOiAnR28gdG8geW91ciBLZXBsZXIuZ2wge2Rpc3BsYXlOYW1lfSBwYWdlJyxcclxuICAgICAgc3RvcmFnZU1hcHM6ICdTdG9yYWdlIC8gTWFwcycsXHJcbiAgICAgIG5vU2F2ZWRNYXBzOiAnTm8gc2F2ZWQgbWFwcyB5ZXQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIHZpc2libGVMYXllcnM6ICdWaXNpYmxlIGxheWVycycsXHJcbiAgICBsYXllckxlZ2VuZDogJ0xheWVyIExlZ2VuZCdcclxuICB9LFxyXG4gIGludGVyYWN0aW9uczoge1xyXG4gICAgdG9vbHRpcDogJ1Rvb2x0aXAnLFxyXG4gICAgYnJ1c2g6ICdCcnVzaCcsXHJcbiAgICBjb29yZGluYXRlOiAnQ29vcmRpbmF0ZXMnLFxyXG4gICAgZ2VvY29kZXI6ICdHZW9jb2RlcidcclxuICB9LFxyXG4gIGxheWVyQmxlbmRpbmc6IHtcclxuICAgIHRpdGxlOiAnTGF5ZXIgQmxlbmRpbmcnLFxyXG4gICAgYWRkaXRpdmU6ICdhZGRpdGl2ZScsXHJcbiAgICBub3JtYWw6ICdub3JtYWwnLFxyXG4gICAgc3VidHJhY3RpdmU6ICdzdWJ0cmFjdGl2ZSdcclxuICB9LFxyXG4gIGNvbHVtbnM6IHtcclxuICAgIHRpdGxlOiAnQ29sdW1ucycsXHJcbiAgICBsYXQ6ICdsYXQnLFxyXG4gICAgbG5nOiAnbG9uJyxcclxuICAgIGFsdGl0dWRlOiAnYWx0aXR1ZGUnLFxyXG4gICAgaWNvbjogJ2ljb24nLFxyXG4gICAgZ2VvanNvbjogJ2dlb2pzb24nLFxyXG4gICAgYXJjOiB7XHJcbiAgICAgIGxhdDA6ICdzb3VyY2UgbGF0JyxcclxuICAgICAgbG5nMDogJ3NvdXJjZSBsbmcnLFxyXG4gICAgICBsYXQxOiAndGFyZ2V0IGxhdCcsXHJcbiAgICAgIGxuZzE6ICd0YXJnZXQgbG5nJ1xyXG4gICAgfSxcclxuICAgIGdyaWQ6IHtcclxuICAgICAgd29ybGRVbml0U2l6ZTogJ0dyaWQgU2l6ZSAoa20pJ1xyXG4gICAgfSxcclxuICAgIGhleGFnb246IHtcclxuICAgICAgd29ybGRVbml0U2l6ZTogJ0hleGFnb24gUmFkaXVzIChrbSknXHJcbiAgICB9LFxyXG4gICAgaGV4X2lkOiAnaGV4IGlkJ1xyXG4gIH0sXHJcbiAgY29sb3I6IHtcclxuICAgIGN1c3RvbVBhbGV0dGU6ICdDdXN0b20gUGFsZXR0ZScsXHJcbiAgICBzdGVwczogJ3N0ZXBzJyxcclxuICAgIHR5cGU6ICd0eXBlJyxcclxuICAgIHJldmVyc2VkOiAncmV2ZXJzZWQnXHJcbiAgfSxcclxuICBzY2FsZToge1xyXG4gICAgY29sb3JTY2FsZTogJ0NvbG9yIFNjYWxlJyxcclxuICAgIHNpemVTY2FsZTogJ1NpemUgU2NhbGUnLFxyXG4gICAgc3Ryb2tlU2NhbGU6ICdTdHJva2UgU2NhbGUnLFxyXG4gICAgc2NhbGU6ICdTY2FsZSdcclxuICB9LFxyXG4gIGZpbGVVcGxvYWRlcjoge1xyXG4gICAgbWVzc2FnZTogJ0RyYWcgJiBEcm9wIFlvdXIgRmlsZShzKSBIZXJlJyxcclxuICAgIGNocm9tZU1lc3NhZ2U6XHJcbiAgICAgICcqQ2hyb21lIHVzZXI6IExpbWl0IGZpbGUgc2l6ZSB0byAyNTBtYiwgaWYgbmVlZCB0byB1cGxvYWQgbGFyZ2VyIGZpbGUsIHRyeSBTYWZhcmknLFxyXG4gICAgZGlzY2xhaW1lcjpcclxuICAgICAgJyprZXBsZXIuZ2wgaXMgYSBjbGllbnQtc2lkZSBhcHBsaWNhdGlvbiB3aXRoIG5vIHNlcnZlciBiYWNrZW5kLiBEYXRhIGxpdmVzIG9ubHkgb24geW91ciBtYWNoaW5lL2Jyb3dzZXIuICcgK1xyXG4gICAgICAnTm8gaW5mb3JtYXRpb24gb3IgbWFwIGRhdGEgaXMgc2VudCB0byBhbnkgc2VydmVyLicsXHJcbiAgICBjb25maWdVcGxvYWRNZXNzYWdlOlxyXG4gICAgICAnVXBsb2FkICoqQ1NWKiosICoqR2VvSnNvbioqIG9yIHNhdmVkIG1hcCAqKkpzb24qKi4gUmVhZCBtb3JlIGFib3V0IFsqKnN1cHBvcnRlZCBmaWxlIGZvcm1hdHMqKl0nLFxyXG4gICAgYnJvd3NlRmlsZXM6ICdicm93c2UgeW91ciBmaWxlcycsXHJcbiAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcnLFxyXG4gICAgZmlsZU5vdFN1cHBvcnRlZDogJ0ZpbGUge2Vycm9yRmlsZXN9IGlzIG5vdCBzdXBwb3J0ZWQuJyxcclxuICAgIG9yOiAnb3InXHJcbiAgfSxcclxuICBnZW9jb2Rlcjoge1xyXG4gICAgdGl0bGU6ICdHZW9jb2RlcidcclxuICB9LFxyXG4gIGZpZWxkU2VsZWN0b3I6IHtcclxuICAgIGNsZWFyQWxsOiAnQ2xlYXIgQWxsJyxcclxuICAgIGZvcm1hdHRpbmc6ICdGb3JtYXR0aW5nJ1xyXG4gIH0sXHJcbiAgZGVuc2l0eTogJ2RlbnNpdHknLFxyXG4gICdCdWcgUmVwb3J0JzogJ0J1ZyBSZXBvcnQnLFxyXG4gICdVc2VyIEd1aWRlJzogJ1VzZXIgR3VpZGUnLFxyXG4gIFNhdmU6ICdTYXZlJyxcclxuICBTaGFyZTogJ1NoYXJlJ1xyXG59O1xyXG4iXX0=