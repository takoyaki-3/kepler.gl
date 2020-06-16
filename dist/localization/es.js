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
    weight: 'peso',
    label: 'etiqueta',
    fillColor: 'color de relleno',
    color: 'color',
    strokeColor: 'color de trazo',
    radius: 'radio',
    outline: 'contorno',
    stroke: 'trazo',
    density: 'densidad',
    height: 'altura',
    sum: 'suma',
    pointCount: 'Recuento de puntos'
  },
  placeholder: {
    search: 'Busqueda',
    selectField: 'Selecciona un campo',
    yAxis: 'Eje Y',
    selectType: 'Selecciona un Tipo',
    selectValue: 'Selecciona un Valor',
    enterValue: 'Entra un valor',
    empty: 'vacio'
  },
  misc: {
    by: '',
    valuesIn: 'Valores en',
    valueEquals: 'Valor igual a',
    dataSource: 'Fuente de datos',
    brushRadius: 'Radio del pincel (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Capas del mapa',
    label: 'Etiqueta',
    road: 'Carretera',
    border: 'Frontera',
    building: 'Edificio',
    water: 'Agua',
    land: 'Tierra',
    '3dBuilding': 'Edificio 3D'
  },
  panel: {
    text: {
      label: 'etiqueta',
      labelWithId: 'Etiqueta {labelId}',
      fontSize: 'Tamaño de fuente',
      fontColor: 'Color de fuente',
      textAnchor: 'Anclaje del texto',
      alignment: 'Alineación',
      addMoreLabel: 'Añadir más etiquetas'
    }
  },
  sidebar: {
    panels: {
      layer: 'Capas',
      filter: 'Filtros',
      interaction: 'Interacciones',
      basemap: 'Mapa base'
    }
  },
  layer: {
    required: 'Requerido*',
    radius: 'Radio',
    color: 'Color',
    fillColor: 'Color de relleno',
    outline: 'Contorno',
    weight: 'Grueso',
    propertyBasedOn: '{property} basado en',
    coverage: 'Cobertura',
    stroke: 'Trazo',
    strokeWidth: 'Grosor de trazo',
    strokeColor: 'Color de trazo',
    basic: 'Básico',
    trailLength: 'Longitud de pista',
    trailLengthDescription: 'Numero de segundos hasta que desaparezca el camino',
    newLayer: 'nueva capa',
    elevationByDescription: 'Si desactivado, la altura se basa en el recuento de puntos',
    colorByDescription: 'Si desactivado, el color se basa en el recuento de puntos',
    aggregateBy: '{field} agregado por',
    '3DModel': 'Modelo 3D',
    '3DModelOptions': 'Opciones del modelo 3D',
    type: {
      point: 'punto',
      arc: 'arco',
      line: 'línea',
      grid: 'malla',
      hexbin: 'hexbin',
      polygon: 'polígono',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icono',
      heatmap: 'concentración',
      hexagon: 'hexágono',
      hexagonid: 'H3',
      trip: 'viaje',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    strokeWidth: 'Ancho del trazo',
    strokeWidthRange: 'Rango del ancho del trazo',
    radius: 'Radio',
    fixedRadius: 'Radio fijo a medir',
    fixedRadiusDescription: 'Ajustar el radio al radio absoluto en metros, p.e. 5 a 5 metros',
    radiusRange: 'Rango de radio',
    clusterRadius: 'Radio del cluster en píxeles',
    radiusRangePixels: 'Rango del radio en píxeles',
    opacity: 'Opacidad',
    coverage: 'Cobertura',
    outline: 'Contorno',
    colorRange: 'Rango de color',
    stroke: 'Trazo',
    strokeColor: 'Color de trazo',
    strokeColorRange: 'Rango de color de trazo',
    targetColor: 'Color destino',
    colorAggregation: 'Agregación de color',
    heightAggregation: 'Agregación de la altura',
    resolutionRange: 'Rango de resolución',
    sizeScale: 'Medida de escala',
    worldUnitSize: 'Medida de la unidad mundial',
    elevationScale: 'Escala de elevación',
    heightScale: 'Escala de altura',
    coverageRange: 'Rango de cobertura',
    highPrecisionRendering: 'Representación de alta precisión',
    highPrecisionRenderingDescription: 'La precisión alta tendrá un rendimiento más bajo',
    height: 'Altura',
    heightDescription: 'Haz clic en el botón de arriba a la derecha del mapa per cambiar a vista 3D',
    fill: 'Rellenar',
    enablePolygonHeight: 'Activar la altura del polígono',
    showWireframe: 'Muestra esquemàtico',
    weightIntensity: 'Intensidad de peso',
    zoomScale: 'Escala de zoom',
    heightRange: 'Rango de alturas'
  },
  layerManager: {
    addData: 'Añadir datos',
    addLayer: 'Añadir capa',
    layerBlending: 'Combinar capas'
  },
  mapManager: {
    mapStyle: 'Estilo de mapa',
    addMapStyle: 'Añadir estilo de mapa',
    '3dBuildingColor': 'Color edificios 3D'
  },
  layerConfiguration: {
    defaultDescription: 'Calcular {property} según el campo seleccionado',
    howTo: 'How to'
  },
  filterManager: {
    addFilter: 'Añadir filtro'
  },
  datasetTitle: {
    showDataTable: 'Mostar la tabla de datos',
    removeDataset: 'Eliminar conjunto de datos'
  },
  datasetInfo: {
    rowCount: '{rowCount} files'
  },
  tooltip: {
    hideLayer: 'Ocultar la capa',
    showLayer: 'Mostrar la capa',
    hideFeature: 'Ocultar el objeto',
    showFeature: 'Mostrar el objeto',
    hide: 'Ocultar',
    show: 'Mostrar',
    removeLayer: 'Eliminar capa',
    layerSettings: 'Configuración de capa',
    closePanel: 'Cerrar el panel actual',
    switchToDualView: 'Cambiar a la vista de mapa dual',
    showLegend: 'Mostrar leyenda',
    disable3DMap: 'Desactivar mapa 3D',
    DrawOnMap: 'Dibujar en el mapa',
    selectLocale: 'Seleccionar configuración regional',
    hideLayerPanel: 'Ocultar la tabla de capas',
    showLayerPanel: 'Mostrar la tabla  de capas',
    moveToTop: 'Desplazar arriba de las capas de datos',
    selectBaseMapStyle: 'Seleccionar estilo de mapa base',
    "delete": 'Borrar',
    timePlayback: 'Reproducción de tiempo',
    cloudStorage: 'Almacenaje en la nube',
    '3DMap': 'Mapa 3D'
  },
  toolbar: _objectSpread({
    exportImage: 'Exportar imagen',
    exportData: 'Exportar datos',
    exportMap: 'Exportar mapa',
    shareMapURL: 'Compartir el enlace del mapa',
    saveMap: 'Guardar mapa',
    select: 'selecciona',
    polygon: 'polígono',
    rectangle: 'rectángulo',
    hide: 'esconder',
    show: 'mostrar'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Borrar conjunto de datos',
      addDataToMap: 'Añadir datos al mapa',
      exportImage: 'Exportar imagen',
      exportData: 'Exportar datos',
      exportMap: 'Exportar mapa',
      addCustomMapboxStyle: 'Añadir estilo de Mapbox propio',
      saveMap: 'Guardar mapa',
      shareURL: 'Compartir enlace'
    },
    button: {
      "delete": 'Borrar',
      download: 'Descargar',
      "export": 'Exportar',
      addStyle: 'Añadir estilo',
      save: 'Guardar',
      defaultCancel: 'Cancelar',
      defaultConfirm: 'Confirmar'
    },
    exportImage: {
      ratioTitle: 'Ratio',
      ratioDescription: 'Esoger ratio por diversos usos.',
      ratioOriginalScreen: 'Pantalla original',
      ratioCustom: 'Personalizado',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolución',
      resolutionDescription: 'Una alta resolución es mejor para las impresiones.',
      mapLegendTitle: 'Leyenda del mapa',
      mapLegendAdd: 'Añadir leyenda al mapa'
    },
    exportData: {
      datasetTitle: 'Conjunto de datos',
      datasetSubtitle: 'Escoger los conjuntos de datos a exportar',
      allDatasets: 'Todos',
      dataTypeTitle: 'Tipo de datos',
      dataTypeSubtitle: 'Escoger el tipo de datos a exportar',
      filterDataTitle: 'Filtrar datos',
      filterDataSubtitle: 'Se puede escoger exportar los datos originales o filtrados',
      filteredData: 'Datos filtrados',
      unfilteredData: 'Datos sin filtrar',
      fileCount: '{fileCount} Archivos',
      rowCount: '{rowCount} Files'
    },
    deleteData: {
      warning: 'estás a punto de borrar este conjunto de datos. Afectará a {length} capas'
    },
    addStyle: {
      publishTitle: '1. Publicar tu estilo en Mapbox o proporcionar el token de acceso',
      publishSubtitle1: 'Puedes crear el tu propio estilo de mapa en',
      publishSubtitle2: 'y',
      publishSubtitle3: 'publicar',
      publishSubtitle4: 'lo.',
      publishSubtitle5: 'Para utilizar un estilo privado, engancha tu',
      publishSubtitle6: 'token de acceso',
      publishSubtitle7: 'aquí. *kepler.gl es una aplicación cliente, los datos quedan en tu navegador..',
      exampleToken: 'p.e. pk.abcdefg.xxxxxx',
      pasteTitle: '2. Engancha el enlace del estilo',
      pasteSubtitle1: 'Qué es un',
      pasteSubtitle2: 'enlace del estilo',
      namingTitle: '3. Poner nombre a tu estilo'
    },
    shareMap: {
      shareUriTitle: 'Compartir el enlace del mapa',
      shareUriSubtitle: 'Generar un enlace del mapa para compartir con otros',
      cloudTitle: 'Almacenage en la nube',
      cloudSubtitle: 'Acceder y cargar datos del mapa a tu almacenage a la nube personal',
      shareDisclaimer: 'kepler.gl guardará los datos del mapa en el almacenage de tu nube personal, sólo quien tenga el enlace podra acceder al mapa y a los datos . ' + 'Puedes editar/borrar el archivo de datos en tu cuenta en la nube en cualquier momento.',
      gotoPage: 'Ves a la página de {currentProvider} de Kepler.gl'
    },
    statusPanel: {
      mapUploading: 'Cargar un mapa',
      error: 'Error'
    },
    saveMap: {
      title: 'Almacentage en la nube',
      subtitle: 'Acceder para guardar el mapa en teu almacenage en la nube'
    },
    exportMap: {
      formatTitle: 'Formato de mapa',
      formatSubtitle: 'Escoger el formato al que se desea exportar el mapa',
      html: {
        selection: 'Exportar tu mapa como un archivo HTML interactivo.',
        tokenTitle: 'Token de acceso de Mapbox',
        tokenSubtitle: 'Utilizar tu token de acceso a Mapbox al archivo HTML (opcional)',
        tokenPlaceholder: 'Enganchar tu token de acceso a Mapbox',
        tokenMisuseWarning: '* Si no proporcionas tu propio token, el mapa podría fallar en cualquier momento cuando reemplacemos nuestro token para evitar abusos. ',
        tokenDisclaimer: 'Puedes cambiar el token de Mapbox posteriormente utilizando estas instrucciones: ',
        tokenUpdate: 'Como actualitzar un token preexistente.',
        modeTitle: 'Modo mapa',
        modeSubtitle1: 'Seleccionar modo app. Más ',
        modeSubtitle2: 'información',
        modeDescription: 'Permmite a los usuarios {modo} el mapa',
        read: 'leer',
        edit: 'editar'
      },
      json: {
        configTitle: 'Configuración del mapa',
        configDisclaimer: 'La configuración del mapa será incluida en el archivo Json. Si utilitzas kepler.gl en tu propia app puedes copiar esta configuración y pasarla a  ',
        selection: 'Exportar los datos del mapa y la configuración en un solo archivo Json. Posteriormente puedes abrir este mismo mapa cargando este mismo archivo a kepler.gl.',
        disclaimer: '* La configuración del mapa se combina con los conjuntos de datos cargados. ‘dataId’ se utiliza para vincular capas, filtros y sugerencias a un conjunto de datos específico. ' + 'Cuando pases esta configuración a addDataToMap, asegura que el identificador del conjunto de datos coincida con los ‘dataId’ de esta configuración.'
      }
    },
    loadingDialog: {
      loading: 'Cargando...'
    },
    loadData: {
      upload: 'Cargar archivos',
      storage: 'Cargar desde almacenage'
    },
    tripInfo: {
      title: 'Como habilitar la animación de viaje',
      description1: 'Para animar la ruta, los datos geoJSON han de contener `LineString` en su geometría y las coordenadas de LineString deben tener 4 elementos en los formats de ',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2: 'y el último elemento debe ser la marca del tiempo. Los formatos válidos para la marca de tiempo incluyen Unix en segundos como `1564184363` o en milisegundos como `1564184363000`.',
      example: 'Ejemplo:'
    },
    iconInfo: {
      title: 'Como dibujar íconos',
      description1: 'En tu CSV crea una columna y pon el nombre del ícono que quieres dibujar. Puedes dejar la celda vacía cuando no quieras que se muestre para ciertos puntos. Cuando la columna se llama',
      code: 'ícono',
      description2: ' kepler.gl automáticamente creará una capa de ícono.',
      example: 'Ejemplo:',
      icons: 'Iconos'
    },
    storageMapViewer: {
      lastModified: 'Última modificación hace {lastUpdated}',
      back: 'Atrás'
    },
    overwriteMap: {
      title: 'Guardando el mapa...',
      alreadyExists: 'ja existe en {mapSaved}. Lo quieres sobreescrivir?'
    },
    loadStorageMap: {
      back: 'Atrás',
      goToPage: 'Ves a la página {displayName} de Kepler.gl',
      storageMaps: 'Almancenage / Mapas',
      noSavedMaps: 'No hay ningún mapa guardado todavía'
    }
  },
  header: {
    visibleLayers: 'Capas visibles',
    layerLegend: 'Capa de leyenda'
  },
  interactions: {
    tooltip: 'Sugerencias',
    brush: 'Pincel',
    coordinate: 'Coordenadas'
  },
  layerBlending: {
    title: 'Combinación de capas',
    additive: 'aditiva',
    normal: 'normal',
    subtractive: 'substractiva'
  },
  columns: {
    title: 'Columnas',
    lat: 'lat',
    lng: 'lon',
    altitude: 'altura',
    icon: 'ícono',
    geojson: 'geojson',
    arc: {
      lat0: 'lat origen',
      lng0: 'lng origen ',
      lat1: 'lat destino',
      lng1: 'lng destino'
    },
    grid: {
      worldUnitSize: 'Tamaño de la malla (km)'
    },
    hexagon: {
      worldUnitSize: 'Radio de hexágono (km)'
    }
  },
  color: {
    customPalette: 'Paleta personalizada',
    steps: 'pasos',
    type: 'tipo',
    reversed: 'invertida'
  },
  scale: {
    colorScale: 'Escala de color',
    sizeScale: 'Escala de medidas',
    strokeScale: 'Escala de trazo',
    scale: 'Escala'
  },
  fileUploader: {
    message: 'Arrastra y suelta el archivo aquí',
    chromeMessage: '*usuario de Chrome: la medida máxima son 250mb, si debes cargar un archivo más grande utiliza Safari',
    disclaimer: '*kepler.gl es una aplicación al lado cliente que no utiliza ningún servidor. Los datos sólo existen en tu máquina/navegador. ' + 'No se envian datos ni mapas a ningún servidor.',
    configUploadMessage: 'Cargar **CSV**, **GeoJson** o un mapa guardado en **Json**. Más información sobre [**supported file formats**]',
    browseFiles: 'navega por tus archivos',
    uploading: 'Cargando',
    fileNotSupported: 'El archivo {errorFiles} no es compatible.',
    or: 'o'
  },
  density: 'densidad',
  'Bug Report': 'Informe de errores',
  'User Guide': 'Guía de usuario',
  Save: 'Guadar',
  Share: 'Compartir'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vZXMuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJ3ZWlnaHQiLCJsYWJlbCIsImZpbGxDb2xvciIsImNvbG9yIiwic3Ryb2tlQ29sb3IiLCJyYWRpdXMiLCJvdXRsaW5lIiwic3Ryb2tlIiwiZGVuc2l0eSIsImhlaWdodCIsInN1bSIsInBvaW50Q291bnQiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInNlbGVjdEZpZWxkIiwieUF4aXMiLCJzZWxlY3RUeXBlIiwic2VsZWN0VmFsdWUiLCJlbnRlclZhbHVlIiwiZW1wdHkiLCJtaXNjIiwiYnkiLCJ2YWx1ZXNJbiIsInZhbHVlRXF1YWxzIiwiZGF0YVNvdXJjZSIsImJydXNoUmFkaXVzIiwibWFwTGF5ZXJzIiwidGl0bGUiLCJyb2FkIiwiYm9yZGVyIiwiYnVpbGRpbmciLCJ3YXRlciIsImxhbmQiLCJwYW5lbCIsInRleHQiLCJsYWJlbFdpdGhJZCIsImZvbnRTaXplIiwiZm9udENvbG9yIiwidGV4dEFuY2hvciIsImFsaWdubWVudCIsImFkZE1vcmVMYWJlbCIsInNpZGViYXIiLCJwYW5lbHMiLCJsYXllciIsImZpbHRlciIsImludGVyYWN0aW9uIiwiYmFzZW1hcCIsInJlcXVpcmVkIiwicHJvcGVydHlCYXNlZE9uIiwiY292ZXJhZ2UiLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVmlzQ29uZmlncyIsInN0cm9rZVdpZHRoUmFuZ2UiLCJmaXhlZFJhZGl1cyIsImZpeGVkUmFkaXVzRGVzY3JpcHRpb24iLCJyYWRpdXNSYW5nZSIsImNsdXN0ZXJSYWRpdXMiLCJyYWRpdXNSYW5nZVBpeGVscyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInRhcmdldENvbG9yIiwiY29sb3JBZ2dyZWdhdGlvbiIsImhlaWdodEFnZ3JlZ2F0aW9uIiwicmVzb2x1dGlvblJhbmdlIiwic2l6ZVNjYWxlIiwid29ybGRVbml0U2l6ZSIsImVsZXZhdGlvblNjYWxlIiwiaGVpZ2h0U2NhbGUiLCJjb3ZlcmFnZVJhbmdlIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZyIsImhpZ2hQcmVjaXNpb25SZW5kZXJpbmdEZXNjcmlwdGlvbiIsImhlaWdodERlc2NyaXB0aW9uIiwiZmlsbCIsImVuYWJsZVBvbHlnb25IZWlnaHQiLCJzaG93V2lyZWZyYW1lIiwid2VpZ2h0SW50ZW5zaXR5Iiwiem9vbVNjYWxlIiwiaGVpZ2h0UmFuZ2UiLCJsYXllck1hbmFnZXIiLCJhZGREYXRhIiwiYWRkTGF5ZXIiLCJsYXllckJsZW5kaW5nIiwibWFwTWFuYWdlciIsIm1hcFN0eWxlIiwiYWRkTWFwU3R5bGUiLCJsYXllckNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJob3dUbyIsImZpbHRlck1hbmFnZXIiLCJhZGRGaWx0ZXIiLCJkYXRhc2V0VGl0bGUiLCJzaG93RGF0YVRhYmxlIiwicmVtb3ZlRGF0YXNldCIsImRhdGFzZXRJbmZvIiwicm93Q291bnQiLCJ0b29sdGlwIiwiaGlkZUxheWVyIiwic2hvd0xheWVyIiwiaGlkZUZlYXR1cmUiLCJzaG93RmVhdHVyZSIsImhpZGUiLCJzaG93IiwicmVtb3ZlTGF5ZXIiLCJsYXllclNldHRpbmdzIiwiY2xvc2VQYW5lbCIsInN3aXRjaFRvRHVhbFZpZXciLCJzaG93TGVnZW5kIiwiZGlzYWJsZTNETWFwIiwiRHJhd09uTWFwIiwic2VsZWN0TG9jYWxlIiwiaGlkZUxheWVyUGFuZWwiLCJzaG93TGF5ZXJQYW5lbCIsIm1vdmVUb1RvcCIsInNlbGVjdEJhc2VNYXBTdHlsZSIsInRpbWVQbGF5YmFjayIsImNsb3VkU3RvcmFnZSIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwibW9kYWwiLCJkZWxldGVEYXRhc2V0IiwiYWRkRGF0YVRvTWFwIiwiYWRkQ3VzdG9tTWFwYm94U3R5bGUiLCJzaGFyZVVSTCIsImJ1dHRvbiIsImRvd25sb2FkIiwiYWRkU3R5bGUiLCJzYXZlIiwiZGVmYXVsdENhbmNlbCIsImRlZmF1bHRDb25maXJtIiwicmF0aW9UaXRsZSIsInJhdGlvRGVzY3JpcHRpb24iLCJyYXRpb09yaWdpbmFsU2NyZWVuIiwicmF0aW9DdXN0b20iLCJyYXRpbzRfMyIsInJhdGlvMTZfOSIsInJlc29sdXRpb25UaXRsZSIsInJlc29sdXRpb25EZXNjcmlwdGlvbiIsIm1hcExlZ2VuZFRpdGxlIiwibWFwTGVnZW5kQWRkIiwiZGF0YXNldFN1YnRpdGxlIiwiYWxsRGF0YXNldHMiLCJkYXRhVHlwZVRpdGxlIiwiZGF0YVR5cGVTdWJ0aXRsZSIsImZpbHRlckRhdGFUaXRsZSIsImZpbHRlckRhdGFTdWJ0aXRsZSIsImZpbHRlcmVkRGF0YSIsInVuZmlsdGVyZWREYXRhIiwiZmlsZUNvdW50IiwiZGVsZXRlRGF0YSIsIndhcm5pbmciLCJwdWJsaXNoVGl0bGUiLCJwdWJsaXNoU3VidGl0bGUxIiwicHVibGlzaFN1YnRpdGxlMiIsInB1Ymxpc2hTdWJ0aXRsZTMiLCJwdWJsaXNoU3VidGl0bGU0IiwicHVibGlzaFN1YnRpdGxlNSIsInB1Ymxpc2hTdWJ0aXRsZTYiLCJwdWJsaXNoU3VidGl0bGU3IiwiZXhhbXBsZVRva2VuIiwicGFzdGVUaXRsZSIsInBhc3RlU3VidGl0bGUxIiwicGFzdGVTdWJ0aXRsZTIiLCJuYW1pbmdUaXRsZSIsInNoYXJlTWFwIiwic2hhcmVVcmlUaXRsZSIsInNoYXJlVXJpU3VidGl0bGUiLCJjbG91ZFRpdGxlIiwiY2xvdWRTdWJ0aXRsZSIsInNoYXJlRGlzY2xhaW1lciIsImdvdG9QYWdlIiwic3RhdHVzUGFuZWwiLCJtYXBVcGxvYWRpbmciLCJlcnJvciIsInN1YnRpdGxlIiwiZm9ybWF0VGl0bGUiLCJmb3JtYXRTdWJ0aXRsZSIsImh0bWwiLCJzZWxlY3Rpb24iLCJ0b2tlblRpdGxlIiwidG9rZW5TdWJ0aXRsZSIsInRva2VuUGxhY2Vob2xkZXIiLCJ0b2tlbk1pc3VzZVdhcm5pbmciLCJ0b2tlbkRpc2NsYWltZXIiLCJ0b2tlblVwZGF0ZSIsIm1vZGVUaXRsZSIsIm1vZGVTdWJ0aXRsZTEiLCJtb2RlU3VidGl0bGUyIiwibW9kZURlc2NyaXB0aW9uIiwicmVhZCIsImVkaXQiLCJqc29uIiwiY29uZmlnVGl0bGUiLCJjb25maWdEaXNjbGFpbWVyIiwiZGlzY2xhaW1lciIsImxvYWRpbmdEaWFsb2ciLCJsb2FkaW5nIiwibG9hZERhdGEiLCJ1cGxvYWQiLCJzdG9yYWdlIiwidHJpcEluZm8iLCJkZXNjcmlwdGlvbjEiLCJjb2RlIiwiZGVzY3JpcHRpb24yIiwiZXhhbXBsZSIsImljb25JbmZvIiwiaWNvbnMiLCJzdG9yYWdlTWFwVmlld2VyIiwibGFzdE1vZGlmaWVkIiwiYmFjayIsIm92ZXJ3cml0ZU1hcCIsImFscmVhZHlFeGlzdHMiLCJsb2FkU3RvcmFnZU1hcCIsImdvVG9QYWdlIiwic3RvcmFnZU1hcHMiLCJub1NhdmVkTWFwcyIsImhlYWRlciIsInZpc2libGVMYXllcnMiLCJsYXllckxlZ2VuZCIsImludGVyYWN0aW9ucyIsImJydXNoIiwiY29vcmRpbmF0ZSIsImFkZGl0aXZlIiwibm9ybWFsIiwic3VidHJhY3RpdmUiLCJjb2x1bW5zIiwibGF0IiwibG5nIiwiYWx0aXR1ZGUiLCJsYXQwIiwibG5nMCIsImxhdDEiLCJsbmcxIiwiY3VzdG9tUGFsZXR0ZSIsInN0ZXBzIiwicmV2ZXJzZWQiLCJzY2FsZSIsImNvbG9yU2NhbGUiLCJzdHJva2VTY2FsZSIsImZpbGVVcGxvYWRlciIsIm1lc3NhZ2UiLCJjaHJvbWVNZXNzYWdlIiwiY29uZmlnVXBsb2FkTWVzc2FnZSIsImJyb3dzZUZpbGVzIiwidXBsb2FkaW5nIiwiZmlsZU5vdFN1cHBvcnRlZCIsIm9yIiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxNQURBO0FBRVJDLElBQUFBLEtBQUssRUFBRSxVQUZDO0FBR1JDLElBQUFBLFNBQVMsRUFBRSxrQkFISDtBQUlSQyxJQUFBQSxLQUFLLEVBQUUsT0FKQztBQUtSQyxJQUFBQSxXQUFXLEVBQUUsZ0JBTEw7QUFNUkMsSUFBQUEsTUFBTSxFQUFFLE9BTkE7QUFPUkMsSUFBQUEsT0FBTyxFQUFFLFVBUEQ7QUFRUkMsSUFBQUEsTUFBTSxFQUFFLE9BUkE7QUFTUkMsSUFBQUEsT0FBTyxFQUFFLFVBVEQ7QUFVUkMsSUFBQUEsTUFBTSxFQUFFLFFBVkE7QUFXUkMsSUFBQUEsR0FBRyxFQUFFLE1BWEc7QUFZUkMsSUFBQUEsVUFBVSxFQUFFO0FBWkosR0FERztBQWViQyxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsTUFBTSxFQUFFLFVBREc7QUFFWEMsSUFBQUEsV0FBVyxFQUFFLHFCQUZGO0FBR1hDLElBQUFBLEtBQUssRUFBRSxPQUhJO0FBSVhDLElBQUFBLFVBQVUsRUFBRSxvQkFKRDtBQUtYQyxJQUFBQSxXQUFXLEVBQUUscUJBTEY7QUFNWEMsSUFBQUEsVUFBVSxFQUFFLGdCQU5EO0FBT1hDLElBQUFBLEtBQUssRUFBRTtBQVBJLEdBZkE7QUF3QmJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxFQUFFLEVBQUUsRUFEQTtBQUVKQyxJQUFBQSxRQUFRLEVBQUUsWUFGTjtBQUdKQyxJQUFBQSxXQUFXLEVBQUUsZUFIVDtBQUlKQyxJQUFBQSxVQUFVLEVBQUUsaUJBSlI7QUFLSkMsSUFB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RDtBQStaYjRRLEVBQUFBLElBQUksRUFBRSxRQS9aTztBQWdhYkMsRUFBQUEsS0FBSyxFQUFFO0FBaGFNLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0xPQ0FMRVN9IGZyb20gJy4vbG9jYWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcGVydHk6IHtcclxuICAgIHdlaWdodDogJ3Blc28nLFxyXG4gICAgbGFiZWw6ICdldGlxdWV0YScsXHJcbiAgICBmaWxsQ29sb3I6ICdjb2xvciBkZSByZWxsZW5vJyxcclxuICAgIGNvbG9yOiAnY29sb3InLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICdjb2xvciBkZSB0cmF6bycsXHJcbiAgICByYWRpdXM6ICdyYWRpbycsXHJcbiAgICBvdXRsaW5lOiAnY29udG9ybm8nLFxyXG4gICAgc3Ryb2tlOiAndHJhem8nLFxyXG4gICAgZGVuc2l0eTogJ2RlbnNpZGFkJyxcclxuICAgIGhlaWdodDogJ2FsdHVyYScsXHJcbiAgICBzdW06ICdzdW1hJyxcclxuICAgIHBvaW50Q291bnQ6ICdSZWN1ZW50byBkZSBwdW50b3MnXHJcbiAgfSxcclxuICBwbGFjZWhvbGRlcjoge1xyXG4gICAgc2VhcmNoOiAnQnVzcXVlZGEnLFxyXG4gICAgc2VsZWN0RmllbGQ6ICdTZWxlY2Npb25hIHVuIGNhbXBvJyxcclxuICAgIHlBeGlzOiAnRWplIFknLFxyXG4gICAgc2VsZWN0VHlwZTogJ1NlbGVjY2lvbmEgdW4gVGlwbycsXHJcbiAgICBzZWxlY3RWYWx1ZTogJ1NlbGVjY2lvbmEgdW4gVmFsb3InLFxyXG4gICAgZW50ZXJWYWx1ZTogJ0VudHJhIHVuIHZhbG9yJyxcclxuICAgIGVtcHR5OiAndmFjaW8nXHJcbiAgfSxcclxuICBtaXNjOiB7XHJcbiAgICBieTogJycsXHJcbiAgICB2YWx1ZXNJbjogJ1ZhbG9yZXMgZW4nLFxyXG4gICAgdmFsdWVFcXVhbHM6ICdWYWxvciBpZ3VhbCBhJyxcclxuICAgIGRhdGFTb3VyY2U6ICdGdWVudGUgZGUgZGF0b3MnLFxyXG4gICAgYnJ1c2hSYWRpdXM6ICdSYWRpbyBkZWwgcGluY2VsIChrbSknLFxyXG4gICAgZW1wdHk6ICcgJ1xyXG4gIH0sXHJcbiAgbWFwTGF5ZXJzOiB7XHJcbiAgICB0aXRsZTogJ0NhcGFzIGRlbCBtYXBhJyxcclxuICAgIGxhYmVsOiAnRXRpcXVldGEnLFxyXG4gICAgcm9hZDogJ0NhcnJldGVyYScsXHJcbiAgICBib3JkZXI6ICdGcm9udGVyYScsXHJcbiAgICBidWlsZGluZzogJ0VkaWZpY2lvJyxcclxuICAgIHdhdGVyOiAnQWd1YScsXHJcbiAgICBsYW5kOiAnVGllcnJhJyxcclxuICAgICczZEJ1aWxkaW5nJzogJ0VkaWZpY2lvIDNEJ1xyXG4gIH0sXHJcbiAgcGFuZWw6IHtcclxuICAgIHRleHQ6IHtcclxuICAgICAgbGFiZWw6ICdldGlxdWV0YScsXHJcbiAgICAgIGxhYmVsV2l0aElkOiAnRXRpcXVldGEge2xhYmVsSWR9JyxcclxuICAgICAgZm9udFNpemU6ICdUYW1hw7FvIGRlIGZ1ZW50ZScsXHJcbiAgICAgIGZvbnRDb2xvcjogJ0NvbG9yIGRlIGZ1ZW50ZScsXHJcbiAgICAgIHRleHRBbmNob3I6ICdBbmNsYWplIGRlbCB0ZXh0bycsXHJcbiAgICAgIGFsaWdubWVudDogJ0FsaW5lYWNpw7NuJyxcclxuICAgICAgYWRkTW9yZUxhYmVsOiAnQcOxYWRpciBtw6FzIGV0aXF1ZXRhcydcclxuICAgIH1cclxuICB9LFxyXG4gIHNpZGViYXI6IHtcclxuICAgIHBhbmVsczoge1xyXG4gICAgICBsYXllcjogJ0NhcGFzJyxcclxuICAgICAgZmlsdGVyOiAnRmlsdHJvcycsXHJcbiAgICAgIGludGVyYWN0aW9uOiAnSW50ZXJhY2Npb25lcycsXHJcbiAgICAgIGJhc2VtYXA6ICdNYXBhIGJhc2UnXHJcbiAgICB9XHJcbiAgfSxcclxuICBsYXllcjoge1xyXG4gICAgcmVxdWlyZWQ6ICdSZXF1ZXJpZG8qJyxcclxuICAgIHJhZGl1czogJ1JhZGlvJyxcclxuICAgIGNvbG9yOiAnQ29sb3InLFxyXG4gICAgZmlsbENvbG9yOiAnQ29sb3IgZGUgcmVsbGVubycsXHJcbiAgICBvdXRsaW5lOiAnQ29udG9ybm8nLFxyXG4gICAgd2VpZ2h0OiAnR3J1ZXNvJyxcclxuICAgIHByb3BlcnR5QmFzZWRPbjogJ3twcm9wZXJ0eX0gYmFzYWRvIGVuJyxcclxuICAgIGNvdmVyYWdlOiAnQ29iZXJ0dXJhJyxcclxuICAgIHN0cm9rZTogJ1RyYXpvJyxcclxuICAgIHN0cm9rZVdpZHRoOiAnR3Jvc29yIGRlIHRyYXpvJyxcclxuICAgIHN0cm9rZUNvbG9yOiAnQ29sb3IgZGUgdHJhem8nLFxyXG4gICAgYmFzaWM6ICdCw6FzaWNvJyxcclxuICAgIHRyYWlsTGVuZ3RoOiAnTG9uZ2l0dWQgZGUgcGlzdGEnLFxyXG4gICAgdHJhaWxMZW5ndGhEZXNjcmlwdGlvbjogJ051bWVybyBkZSBzZWd1bmRvcyBoYXN0YSBxdWUgZGVzYXBhcmV6Y2EgZWwgY2FtaW5vJyxcclxuICAgIG5ld0xheWVyOiAnbnVldmEgY2FwYScsXHJcbiAgICBlbGV2YXRpb25CeURlc2NyaXB0aW9uOiAnU2kgZGVzYWN0aXZhZG8sIGxhIGFsdHVyYSBzZSBiYXNhIGVuIGVsIHJlY3VlbnRvIGRlIHB1bnRvcycsXHJcbiAgICBjb2xvckJ5RGVzY3JpcHRpb246ICdTaSBkZXNhY3RpdmFkbywgZWwgY29sb3Igc2UgYmFzYSBlbiBlbCByZWN1ZW50byBkZSBwdW50b3MnLFxyXG4gICAgYWdncmVnYXRlQnk6ICd7ZmllbGR9IGFncmVnYWRvIHBvcicsXHJcbiAgICAnM0RNb2RlbCc6ICdNb2RlbG8gM0QnLFxyXG4gICAgJzNETW9kZWxPcHRpb25zJzogJ09wY2lvbmVzIGRlbCBtb2RlbG8gM0QnLFxyXG4gICAgdHlwZToge1xyXG4gICAgICBwb2ludDogJ3B1bnRvJyxcclxuICAgICAgYXJjOiAnYXJjbycsXHJcbiAgICAgIGxpbmU6ICdsw61uZWEnLFxyXG4gICAgICBncmlkOiAnbWFsbGEnLFxyXG4gICAgICBoZXhiaW46ICdoZXhiaW4nLFxyXG4gICAgICBwb2x5Z29uOiAncG9sw61nb25vJyxcclxuICAgICAgZ2VvanNvbjogJ2dlb2pzb24nLFxyXG4gICAgICBjbHVzdGVyOiAnY2x1c3RlcicsXHJcbiAgICAgIGljb246ICdpY29ubycsXHJcbiAgICAgIGhlYXRtYXA6ICdjb25jZW50cmFjacOzbicsXHJcbiAgICAgIGhleGFnb246ICdoZXjDoWdvbm8nLFxyXG4gICAgICBoZXhhZ29uaWQ6ICdIMycsXHJcbiAgICAgIHRyaXA6ICd2aWFqZScsXHJcbiAgICAgIHMyOiAnUzInLFxyXG4gICAgICAnM2QnOiAnM0QnXHJcbiAgICB9XHJcbiAgfSxcclxuICBsYXllclZpc0NvbmZpZ3M6IHtcclxuICAgIHN0cm9rZVdpZHRoOiAnQW5jaG8gZGVsIHRyYXpvJyxcclxuICAgIHN0cm9rZVdpZHRoUmFuZ2U6ICdSYW5nbyBkZWwgYW5jaG8gZGVsIHRyYXpvJyxcclxuICAgIHJhZGl1czogJ1JhZGlvJyxcclxuICAgIGZpeGVkUmFkaXVzOiAnUmFkaW8gZmlqbyBhIG1lZGlyJyxcclxuICAgIGZpeGVkUmFkaXVzRGVzY3JpcHRpb246ICdBanVzdGFyIGVsIHJhZGlvIGFsIHJhZGlvIGFic29sdXRvIGVuIG1ldHJvcywgcC5lLiA1IGEgNSBtZXRyb3MnLFxyXG4gICAgcmFkaXVzUmFuZ2U6ICdSYW5nbyBkZSByYWRpbycsXHJcbiAgICBjbHVzdGVyUmFkaXVzOiAnUmFkaW8gZGVsIGNsdXN0ZXIgZW4gcMOteGVsZXMnLFxyXG4gICAgcmFkaXVzUmFuZ2VQaXhlbHM6ICdSYW5nbyBkZWwgcmFkaW8gZW4gcMOteGVsZXMnLFxyXG4gICAgb3BhY2l0eTogJ09wYWNpZGFkJyxcclxuICAgIGNvdmVyYWdlOiAnQ29iZXJ0dXJhJyxcclxuICAgIG91dGxpbmU6ICdDb250b3JubycsXHJcbiAgICBjb2xvclJhbmdlOiAnUmFuZ28gZGUgY29sb3InLFxyXG4gICAgc3Ryb2tlOiAnVHJhem8nLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICdDb2xvciBkZSB0cmF6bycsXHJcbiAgICBzdHJva2VDb2xvclJhbmdlOiAnUmFuZ28gZGUgY29sb3IgZGUgdHJhem8nLFxyXG4gICAgdGFyZ2V0Q29sb3I6ICdDb2xvciBkZXN0aW5vJyxcclxuICAgIGNvbG9yQWdncmVnYXRpb246ICdBZ3JlZ2FjacOzbiBkZSBjb2xvcicsXHJcbiAgICBoZWlnaHRBZ2dyZWdhdGlvbjogJ0FncmVnYWNpw7NuIGRlIGxhIGFsdHVyYScsXHJcbiAgICByZXNvbHV0aW9uUmFuZ2U6ICdSYW5nbyBkZSByZXNvbHVjacOzbicsXHJcbiAgICBzaXplU2NhbGU6ICdNZWRpZGEgZGUgZXNjYWxhJyxcclxuICAgIHdvcmxkVW5pdFNpemU6ICdNZWRpZGEgZGUgbGEgdW5pZGFkIG11bmRpYWwnLFxyXG4gICAgZWxldmF0aW9uU2NhbGU6ICdFc2NhbGEgZGUgZWxldmFjacOzbicsXHJcbiAgICBoZWlnaHRTY2FsZTogJ0VzY2FsYSBkZSBhbHR1cmEnLFxyXG4gICAgY292ZXJhZ2VSYW5nZTogJ1JhbmdvIGRlIGNvYmVydHVyYScsXHJcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nOiAnUmVwcmVzZW50YWNpw7NuIGRlIGFsdGEgcHJlY2lzacOzbicsXHJcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb246ICdMYSBwcmVjaXNpw7NuIGFsdGEgdGVuZHLDoSB1biByZW5kaW1pZW50byBtw6FzIGJham8nLFxyXG4gICAgaGVpZ2h0OiAnQWx0dXJhJyxcclxuICAgIGhlaWdodERlc2NyaXB0aW9uOlxyXG4gICAgICAnSGF6IGNsaWMgZW4gZWwgYm90w7NuIGRlIGFycmliYSBhIGxhIGRlcmVjaGEgZGVsIG1hcGEgcGVyIGNhbWJpYXIgYSB2aXN0YSAzRCcsXHJcbiAgICBmaWxsOiAnUmVsbGVuYXInLFxyXG4gICAgZW5hYmxlUG9seWdvbkhlaWdodDogJ0FjdGl2YXIgbGEgYWx0dXJhIGRlbCBwb2zDrWdvbm8nLFxyXG4gICAgc2hvd1dpcmVmcmFtZTogJ011ZXN0cmEgZXNxdWVtw6B0aWNvJyxcclxuICAgIHdlaWdodEludGVuc2l0eTogJ0ludGVuc2lkYWQgZGUgcGVzbycsXHJcbiAgICB6b29tU2NhbGU6ICdFc2NhbGEgZGUgem9vbScsXHJcbiAgICBoZWlnaHRSYW5nZTogJ1JhbmdvIGRlIGFsdHVyYXMnXHJcbiAgfSxcclxuICBsYXllck1hbmFnZXI6IHtcclxuICAgIGFkZERhdGE6ICdBw7FhZGlyIGRhdG9zJyxcclxuICAgIGFkZExheWVyOiAnQcOxYWRpciBjYXBhJyxcclxuICAgIGxheWVyQmxlbmRpbmc6ICdDb21iaW5hciBjYXBhcydcclxuICB9LFxyXG4gIG1hcE1hbmFnZXI6IHtcclxuICAgIG1hcFN0eWxlOiAnRXN0aWxvIGRlIG1hcGEnLFxyXG4gICAgYWRkTWFwU3R5bGU6ICdBw7FhZGlyIGVzdGlsbyBkZSBtYXBhJyxcclxuICAgICczZEJ1aWxkaW5nQ29sb3InOiAnQ29sb3IgZWRpZmljaW9zIDNEJ1xyXG4gIH0sXHJcbiAgbGF5ZXJDb25maWd1cmF0aW9uOiB7XHJcbiAgICBkZWZhdWx0RGVzY3JpcHRpb246ICdDYWxjdWxhciB7cHJvcGVydHl9IHNlZ8O6biBlbCBjYW1wbyBzZWxlY2Npb25hZG8nLFxyXG4gICAgaG93VG86ICdIb3cgdG8nXHJcbiAgfSxcclxuICBmaWx0ZXJNYW5hZ2VyOiB7XHJcbiAgICBhZGRGaWx0ZXI6ICdBw7FhZGlyIGZpbHRybydcclxuICB9LFxyXG4gIGRhdGFzZXRUaXRsZToge1xyXG4gICAgc2hvd0RhdGFUYWJsZTogJ01vc3RhciBsYSB0YWJsYSBkZSBkYXRvcycsXHJcbiAgICByZW1vdmVEYXRhc2V0OiAnRWxpbWluYXIgY29uanVudG8gZGUgZGF0b3MnXHJcbiAgfSxcclxuICBkYXRhc2V0SW5mbzoge1xyXG4gICAgcm93Q291bnQ6ICd7cm93Q291bnR9IGZpbGVzJ1xyXG4gIH0sXHJcbiAgdG9vbHRpcDoge1xyXG4gICAgaGlkZUxheWVyOiAnT2N1bHRhciBsYSBjYXBhJyxcclxuICAgIHNob3dMYXllcjogJ01vc3RyYXIgbGEgY2FwYScsXHJcbiAgICBoaWRlRmVhdHVyZTogJ09jdWx0YXIgZWwgb2JqZXRvJyxcclxuICAgIHNob3dGZWF0dXJlOiAnTW9zdHJhciBlbCBvYmpldG8nLFxyXG4gICAgaGlkZTogJ09jdWx0YXInLFxyXG4gICAgc2hvdzogJ01vc3RyYXInLFxyXG4gICAgcmVtb3ZlTGF5ZXI6ICdFbGltaW5hciBjYXBhJyxcclxuICAgIGxheWVyU2V0dGluZ3M6ICdDb25maWd1cmFjacOzbiBkZSBjYXBhJyxcclxuICAgIGNsb3NlUGFuZWw6ICdDZXJyYXIgZWwgcGFuZWwgYWN0dWFsJyxcclxuICAgIHN3aXRjaFRvRHVhbFZpZXc6ICdDYW1iaWFyIGEgbGEgdmlzdGEgZGUgbWFwYSBkdWFsJyxcclxuICAgIHNob3dMZWdlbmQ6ICdNb3N0cmFyIGxleWVuZGEnLFxyXG4gICAgZGlzYWJsZTNETWFwOiAnRGVzYWN0aXZhciBtYXBhIDNEJyxcclxuICAgIERyYXdPbk1hcDogJ0RpYnVqYXIgZW4gZWwgbWFwYScsXHJcbiAgICBzZWxlY3RMb2NhbGU6ICdTZWxlY2Npb25hciBjb25maWd1cmFjacOzbiByZWdpb25hbCcsXHJcbiAgICBoaWRlTGF5ZXJQYW5lbDogJ09jdWx0YXIgbGEgdGFibGEgZGUgY2FwYXMnLFxyXG4gICAgc2hvd0xheWVyUGFuZWw6ICdNb3N0cmFyIGxhIHRhYmxhICBkZSBjYXBhcycsXHJcbiAgICBtb3ZlVG9Ub3A6ICdEZXNwbGF6YXIgYXJyaWJhIGRlIGxhcyBjYXBhcyBkZSBkYXRvcycsXHJcbiAgICBzZWxlY3RCYXNlTWFwU3R5bGU6ICdTZWxlY2Npb25hciBlc3RpbG8gZGUgbWFwYSBiYXNlJyxcclxuICAgIGRlbGV0ZTogJ0JvcnJhcicsXHJcbiAgICB0aW1lUGxheWJhY2s6ICdSZXByb2R1Y2Npw7NuIGRlIHRpZW1wbycsXHJcbiAgICBjbG91ZFN0b3JhZ2U6ICdBbG1hY2VuYWplIGVuIGxhIG51YmUnLFxyXG4gICAgJzNETWFwJzogJ01hcGEgM0QnXHJcbiAgfSxcclxuICB0b29sYmFyOiB7XHJcbiAgICBleHBvcnRJbWFnZTogJ0V4cG9ydGFyIGltYWdlbicsXHJcbiAgICBleHBvcnREYXRhOiAnRXhwb3J0YXIgZGF0b3MnLFxyXG4gICAgZXhwb3J0TWFwOiAnRXhwb3J0YXIgbWFwYScsXHJcbiAgICBzaGFyZU1hcFVSTDogJ0NvbXBhcnRpciBlbCBlbmxhY2UgZGVsIG1hcGEnLFxyXG4gICAgc2F2ZU1hcDogJ0d1YXJkYXIgbWFwYScsXHJcbiAgICBzZWxlY3Q6ICdzZWxlY2Npb25hJyxcclxuICAgIHBvbHlnb246ICdwb2zDrWdvbm8nLFxyXG4gICAgcmVjdGFuZ2xlOiAncmVjdMOhbmd1bG8nLFxyXG4gICAgaGlkZTogJ2VzY29uZGVyJyxcclxuICAgIHNob3c6ICdtb3N0cmFyJyxcclxuICAgIC4uLkxPQ0FMRVNcclxuICB9LFxyXG4gIG1vZGFsOiB7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICBkZWxldGVEYXRhc2V0OiAnQm9ycmFyIGNvbmp1bnRvIGRlIGRhdG9zJyxcclxuICAgICAgYWRkRGF0YVRvTWFwOiAnQcOxYWRpciBkYXRvcyBhbCBtYXBhJyxcclxuICAgICAgZXhwb3J0SW1hZ2U6ICdFeHBvcnRhciBpbWFnZW4nLFxyXG4gICAgICBleHBvcnREYXRhOiAnRXhwb3J0YXIgZGF0b3MnLFxyXG4gICAgICBleHBvcnRNYXA6ICdFeHBvcnRhciBtYXBhJyxcclxuICAgICAgYWRkQ3VzdG9tTWFwYm94U3R5bGU6ICdBw7FhZGlyIGVzdGlsbyBkZSBNYXBib3ggcHJvcGlvJyxcclxuICAgICAgc2F2ZU1hcDogJ0d1YXJkYXIgbWFwYScsXHJcbiAgICAgIHNoYXJlVVJMOiAnQ29tcGFydGlyIGVubGFjZSdcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgZGVsZXRlOiAnQm9ycmFyJyxcclxuICAgICAgZG93bmxvYWQ6ICdEZXNjYXJnYXInLFxyXG4gICAgICBleHBvcnQ6ICdFeHBvcnRhcicsXHJcbiAgICAgIGFkZFN0eWxlOiAnQcOxYWRpciBlc3RpbG8nLFxyXG4gICAgICBzYXZlOiAnR3VhcmRhcicsXHJcbiAgICAgIGRlZmF1bHRDYW5jZWw6ICdDYW5jZWxhcicsXHJcbiAgICAgIGRlZmF1bHRDb25maXJtOiAnQ29uZmlybWFyJ1xyXG4gICAgfSxcclxuICAgIGV4cG9ydEltYWdlOiB7XHJcbiAgICAgIHJhdGlvVGl0bGU6ICdSYXRpbycsXHJcbiAgICAgIHJhdGlvRGVzY3JpcHRpb246ICdFc29nZXIgcmF0aW8gcG9yIGRpdmVyc29zIHVzb3MuJyxcclxuICAgICAgcmF0aW9PcmlnaW5hbFNjcmVlbjogJ1BhbnRhbGxhIG9yaWdpbmFsJyxcclxuICAgICAgcmF0aW9DdXN0b206ICdQZXJzb25hbGl6YWRvJyxcclxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxyXG4gICAgICByYXRpbzE2Xzk6ICcxNjo5JyxcclxuICAgICAgcmVzb2x1dGlvblRpdGxlOiAnUmVzb2x1Y2nDs24nLFxyXG4gICAgICByZXNvbHV0aW9uRGVzY3JpcHRpb246ICdVbmEgYWx0YSByZXNvbHVjacOzbiBlcyBtZWpvciBwYXJhIGxhcyBpbXByZXNpb25lcy4nLFxyXG4gICAgICBtYXBMZWdlbmRUaXRsZTogJ0xleWVuZGEgZGVsIG1hcGEnLFxyXG4gICAgICBtYXBMZWdlbmRBZGQ6ICdBw7FhZGlyIGxleWVuZGEgYWwgbWFwYSdcclxuICAgIH0sXHJcbiAgICBleHBvcnREYXRhOiB7XHJcbiAgICAgIGRhdGFzZXRUaXRsZTogJ0Nvbmp1bnRvIGRlIGRhdG9zJyxcclxuICAgICAgZGF0YXNldFN1YnRpdGxlOiAnRXNjb2dlciBsb3MgY29uanVudG9zIGRlIGRhdG9zIGEgZXhwb3J0YXInLFxyXG4gICAgICBhbGxEYXRhc2V0czogJ1RvZG9zJyxcclxuICAgICAgZGF0YVR5cGVUaXRsZTogJ1RpcG8gZGUgZGF0b3MnLFxyXG4gICAgICBkYXRhVHlwZVN1YnRpdGxlOiAnRXNjb2dlciBlbCB0aXBvIGRlIGRhdG9zIGEgZXhwb3J0YXInLFxyXG4gICAgICBmaWx0ZXJEYXRhVGl0bGU6ICdGaWx0cmFyIGRhdG9zJyxcclxuICAgICAgZmlsdGVyRGF0YVN1YnRpdGxlOiAnU2UgcHVlZGUgZXNjb2dlciBleHBvcnRhciBsb3MgZGF0b3Mgb3JpZ2luYWxlcyBvIGZpbHRyYWRvcycsXHJcbiAgICAgIGZpbHRlcmVkRGF0YTogJ0RhdG9zIGZpbHRyYWRvcycsXHJcbiAgICAgIHVuZmlsdGVyZWREYXRhOiAnRGF0b3Mgc2luIGZpbHRyYXInLFxyXG4gICAgICBmaWxlQ291bnQ6ICd7ZmlsZUNvdW50fSBBcmNoaXZvcycsXHJcbiAgICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSBGaWxlcydcclxuICAgIH0sXHJcbiAgICBkZWxldGVEYXRhOiB7XHJcbiAgICAgIHdhcm5pbmc6ICdlc3TDoXMgYSBwdW50byBkZSBib3JyYXIgZXN0ZSBjb25qdW50byBkZSBkYXRvcy4gQWZlY3RhcsOhIGEge2xlbmd0aH0gY2FwYXMnXHJcbiAgICB9LFxyXG4gICAgYWRkU3R5bGU6IHtcclxuICAgICAgcHVibGlzaFRpdGxlOiAnMS4gUHVibGljYXIgdHUgZXN0aWxvIGVuIE1hcGJveCBvIHByb3BvcmNpb25hciBlbCB0b2tlbiBkZSBhY2Nlc28nLFxyXG4gICAgICBwdWJsaXNoU3VidGl0bGUxOiAnUHVlZGVzIGNyZWFyIGVsIHR1IHByb3BpbyBlc3RpbG8gZGUgbWFwYSBlbicsXHJcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTI6ICd5JyxcclxuICAgICAgcHVibGlzaFN1YnRpdGxlMzogJ3B1YmxpY2FyJyxcclxuICAgICAgcHVibGlzaFN1YnRpdGxlNDogJ2xvLicsXHJcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTU6ICdQYXJhIHV0aWxpemFyIHVuIGVzdGlsbyBwcml2YWRvLCBlbmdhbmNoYSB0dScsXHJcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTY6ICd0b2tlbiBkZSBhY2Nlc28nLFxyXG4gICAgICBwdWJsaXNoU3VidGl0bGU3OlxyXG4gICAgICAgICdhcXXDrS4gKmtlcGxlci5nbCBlcyB1bmEgYXBsaWNhY2nDs24gY2xpZW50ZSwgbG9zIGRhdG9zIHF1ZWRhbiBlbiB0dSBuYXZlZ2Fkb3IuLicsXHJcbiAgICAgIGV4YW1wbGVUb2tlbjogJ3AuZS4gcGsuYWJjZGVmZy54eHh4eHgnLFxyXG4gICAgICBwYXN0ZVRpdGxlOiAnMi4gRW5nYW5jaGEgZWwgZW5sYWNlIGRlbCBlc3RpbG8nLFxyXG4gICAgICBwYXN0ZVN1YnRpdGxlMTogJ1F1w6kgZXMgdW4nLFxyXG4gICAgICBwYXN0ZVN1YnRpdGxlMjogJ2VubGFjZSBkZWwgZXN0aWxvJyxcclxuICAgICAgbmFtaW5nVGl0bGU6ICczLiBQb25lciBub21icmUgYSB0dSBlc3RpbG8nXHJcbiAgICB9LFxyXG4gICAgc2hhcmVNYXA6IHtcclxuICAgICAgc2hhcmVVcmlUaXRsZTogJ0NvbXBhcnRpciBlbCBlbmxhY2UgZGVsIG1hcGEnLFxyXG4gICAgICBzaGFyZVVyaVN1YnRpdGxlOiAnR2VuZXJhciB1biBlbmxhY2UgZGVsIG1hcGEgcGFyYSBjb21wYXJ0aXIgY29uIG90cm9zJyxcclxuICAgICAgY2xvdWRUaXRsZTogJ0FsbWFjZW5hZ2UgZW4gbGEgbnViZScsXHJcbiAgICAgIGNsb3VkU3VidGl0bGU6ICdBY2NlZGVyIHkgY2FyZ2FyIGRhdG9zIGRlbCBtYXBhIGEgdHUgYWxtYWNlbmFnZSBhIGxhIG51YmUgcGVyc29uYWwnLFxyXG4gICAgICBzaGFyZURpc2NsYWltZXI6XHJcbiAgICAgICAgJ2tlcGxlci5nbCBndWFyZGFyw6EgbG9zIGRhdG9zIGRlbCBtYXBhIGVuIGVsIGFsbWFjZW5hZ2UgZGUgdHUgbnViZSBwZXJzb25hbCwgc8OzbG8gcXVpZW4gdGVuZ2EgZWwgZW5sYWNlIHBvZHJhIGFjY2VkZXIgYWwgbWFwYSB5IGEgbG9zIGRhdG9zIC4gJyArXHJcbiAgICAgICAgJ1B1ZWRlcyBlZGl0YXIvYm9ycmFyIGVsIGFyY2hpdm8gZGUgZGF0b3MgZW4gdHUgY3VlbnRhIGVuIGxhIG51YmUgZW4gY3VhbHF1aWVyIG1vbWVudG8uJyxcclxuICAgICAgZ290b1BhZ2U6ICdWZXMgYSBsYSBww6FnaW5hIGRlIHtjdXJyZW50UHJvdmlkZXJ9IGRlIEtlcGxlci5nbCdcclxuICAgIH0sXHJcbiAgICBzdGF0dXNQYW5lbDoge1xyXG4gICAgICBtYXBVcGxvYWRpbmc6ICdDYXJnYXIgdW4gbWFwYScsXHJcbiAgICAgIGVycm9yOiAnRXJyb3InXHJcbiAgICB9LFxyXG4gICAgc2F2ZU1hcDoge1xyXG4gICAgICB0aXRsZTogJ0FsbWFjZW50YWdlIGVuIGxhIG51YmUnLFxyXG4gICAgICBzdWJ0aXRsZTogJ0FjY2VkZXIgcGFyYSBndWFyZGFyIGVsIG1hcGEgZW4gdGV1IGFsbWFjZW5hZ2UgZW4gbGEgbnViZSdcclxuICAgIH0sXHJcbiAgICBleHBvcnRNYXA6IHtcclxuICAgICAgZm9ybWF0VGl0bGU6ICdGb3JtYXRvIGRlIG1hcGEnLFxyXG4gICAgICBmb3JtYXRTdWJ0aXRsZTogJ0VzY29nZXIgZWwgZm9ybWF0byBhbCBxdWUgc2UgZGVzZWEgZXhwb3J0YXIgZWwgbWFwYScsXHJcbiAgICAgIGh0bWw6IHtcclxuICAgICAgICBzZWxlY3Rpb246ICdFeHBvcnRhciB0dSBtYXBhIGNvbW8gdW4gYXJjaGl2byBIVE1MIGludGVyYWN0aXZvLicsXHJcbiAgICAgICAgdG9rZW5UaXRsZTogJ1Rva2VuIGRlIGFjY2VzbyBkZSBNYXBib3gnLFxyXG4gICAgICAgIHRva2VuU3VidGl0bGU6ICdVdGlsaXphciB0dSB0b2tlbiBkZSBhY2Nlc28gYSBNYXBib3ggYWwgYXJjaGl2byBIVE1MIChvcGNpb25hbCknLFxyXG4gICAgICAgIHRva2VuUGxhY2Vob2xkZXI6ICdFbmdhbmNoYXIgdHUgdG9rZW4gZGUgYWNjZXNvIGEgTWFwYm94JyxcclxuICAgICAgICB0b2tlbk1pc3VzZVdhcm5pbmc6XHJcbiAgICAgICAgICAnKiBTaSBubyBwcm9wb3JjaW9uYXMgdHUgcHJvcGlvIHRva2VuLCBlbCBtYXBhIHBvZHLDrWEgZmFsbGFyIGVuIGN1YWxxdWllciBtb21lbnRvIGN1YW5kbyByZWVtcGxhY2Vtb3MgbnVlc3RybyB0b2tlbiBwYXJhIGV2aXRhciBhYnVzb3MuICcsXHJcbiAgICAgICAgdG9rZW5EaXNjbGFpbWVyOlxyXG4gICAgICAgICAgJ1B1ZWRlcyBjYW1iaWFyIGVsIHRva2VuIGRlIE1hcGJveCBwb3N0ZXJpb3JtZW50ZSB1dGlsaXphbmRvIGVzdGFzIGluc3RydWNjaW9uZXM6ICcsXHJcbiAgICAgICAgdG9rZW5VcGRhdGU6ICdDb21vIGFjdHVhbGl0emFyIHVuIHRva2VuIHByZWV4aXN0ZW50ZS4nLFxyXG4gICAgICAgIG1vZGVUaXRsZTogJ01vZG8gbWFwYScsXHJcbiAgICAgICAgbW9kZVN1YnRpdGxlMTogJ1NlbGVjY2lvbmFyIG1vZG8gYXBwLiBNw6FzICcsXHJcbiAgICAgICAgbW9kZVN1YnRpdGxlMjogJ2luZm9ybWFjacOzbicsXHJcbiAgICAgICAgbW9kZURlc2NyaXB0aW9uOiAnUGVybW1pdGUgYSBsb3MgdXN1YXJpb3Mge21vZG99IGVsIG1hcGEnLFxyXG4gICAgICAgIHJlYWQ6ICdsZWVyJyxcclxuICAgICAgICBlZGl0OiAnZWRpdGFyJ1xyXG4gICAgICB9LFxyXG4gICAgICBqc29uOiB7XHJcbiAgICAgICAgY29uZmlnVGl0bGU6ICdDb25maWd1cmFjacOzbiBkZWwgbWFwYScsXHJcbiAgICAgICAgY29uZmlnRGlzY2xhaW1lcjpcclxuICAgICAgICAgICdMYSBjb25maWd1cmFjacOzbiBkZWwgbWFwYSBzZXLDoSBpbmNsdWlkYSBlbiBlbCBhcmNoaXZvIEpzb24uIFNpIHV0aWxpdHphcyBrZXBsZXIuZ2wgZW4gdHUgcHJvcGlhIGFwcCBwdWVkZXMgY29waWFyIGVzdGEgY29uZmlndXJhY2nDs24geSBwYXNhcmxhIGEgICcsXHJcbiAgICAgICAgc2VsZWN0aW9uOlxyXG4gICAgICAgICAgJ0V4cG9ydGFyIGxvcyBkYXRvcyBkZWwgbWFwYSB5IGxhIGNvbmZpZ3VyYWNpw7NuIGVuIHVuIHNvbG8gYXJjaGl2byBKc29uLiBQb3N0ZXJpb3JtZW50ZSBwdWVkZXMgYWJyaXIgZXN0ZSBtaXNtbyBtYXBhIGNhcmdhbmRvIGVzdGUgbWlzbW8gYXJjaGl2byBhIGtlcGxlci5nbC4nLFxyXG4gICAgICAgIGRpc2NsYWltZXI6XHJcbiAgICAgICAgICAnKiBMYSBjb25maWd1cmFjacOzbiBkZWwgbWFwYSBzZSBjb21iaW5hIGNvbiBsb3MgY29uanVudG9zIGRlIGRhdG9zIGNhcmdhZG9zLiDigJhkYXRhSWTigJkgc2UgdXRpbGl6YSBwYXJhIHZpbmN1bGFyIGNhcGFzLCBmaWx0cm9zIHkgc3VnZXJlbmNpYXMgYSB1biBjb25qdW50byBkZSBkYXRvcyBlc3BlY8OtZmljby4gJyArXHJcbiAgICAgICAgICAnQ3VhbmRvIHBhc2VzIGVzdGEgY29uZmlndXJhY2nDs24gYSBhZGREYXRhVG9NYXAsIGFzZWd1cmEgcXVlIGVsIGlkZW50aWZpY2Fkb3IgZGVsIGNvbmp1bnRvIGRlIGRhdG9zIGNvaW5jaWRhIGNvbiBsb3Mg4oCYZGF0YUlk4oCZIGRlIGVzdGEgY29uZmlndXJhY2nDs24uJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbG9hZGluZ0RpYWxvZzoge1xyXG4gICAgICBsb2FkaW5nOiAnQ2FyZ2FuZG8uLi4nXHJcbiAgICB9LFxyXG4gICAgbG9hZERhdGE6IHtcclxuICAgICAgdXBsb2FkOiAnQ2FyZ2FyIGFyY2hpdm9zJyxcclxuICAgICAgc3RvcmFnZTogJ0NhcmdhciBkZXNkZSBhbG1hY2VuYWdlJ1xyXG4gICAgfSxcclxuICAgIHRyaXBJbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnQ29tbyBoYWJpbGl0YXIgbGEgYW5pbWFjacOzbiBkZSB2aWFqZScsXHJcbiAgICAgIGRlc2NyaXB0aW9uMTpcclxuICAgICAgICAnUGFyYSBhbmltYXIgbGEgcnV0YSwgbG9zIGRhdG9zIGdlb0pTT04gaGFuIGRlIGNvbnRlbmVyIGBMaW5lU3RyaW5nYCBlbiBzdSBnZW9tZXRyw61hIHkgbGFzIGNvb3JkZW5hZGFzIGRlIExpbmVTdHJpbmcgZGViZW4gdGVuZXIgNCBlbGVtZW50b3MgZW4gbG9zIGZvcm1hdHMgZGUgJyxcclxuICAgICAgY29kZTogJyBbbG9uZ2l0dWRlLCBsYXRpdHVkZSwgYWx0aXR1ZGUsIHRpbWVzdGFtcF0gJyxcclxuICAgICAgZGVzY3JpcHRpb24yOlxyXG4gICAgICAgICd5IGVsIMO6bHRpbW8gZWxlbWVudG8gZGViZSBzZXIgbGEgbWFyY2EgZGVsIHRpZW1wby4gTG9zIGZvcm1hdG9zIHbDoWxpZG9zIHBhcmEgbGEgbWFyY2EgZGUgdGllbXBvIGluY2x1eWVuIFVuaXggZW4gc2VndW5kb3MgY29tbyBgMTU2NDE4NDM2M2AgbyBlbiBtaWxpc2VndW5kb3MgY29tbyBgMTU2NDE4NDM2MzAwMGAuJyxcclxuICAgICAgZXhhbXBsZTogJ0VqZW1wbG86J1xyXG4gICAgfSxcclxuICAgIGljb25JbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnQ29tbyBkaWJ1amFyIMOtY29ub3MnLFxyXG4gICAgICBkZXNjcmlwdGlvbjE6XHJcbiAgICAgICAgJ0VuIHR1IENTViBjcmVhIHVuYSBjb2x1bW5hIHkgcG9uIGVsIG5vbWJyZSBkZWwgw61jb25vIHF1ZSBxdWllcmVzIGRpYnVqYXIuIFB1ZWRlcyBkZWphciBsYSBjZWxkYSB2YWPDrWEgY3VhbmRvIG5vIHF1aWVyYXMgcXVlIHNlIG11ZXN0cmUgcGFyYSBjaWVydG9zIHB1bnRvcy4gQ3VhbmRvIGxhIGNvbHVtbmEgc2UgbGxhbWEnLFxyXG4gICAgICBjb2RlOiAnw61jb25vJyxcclxuICAgICAgZGVzY3JpcHRpb24yOiAnIGtlcGxlci5nbCBhdXRvbcOhdGljYW1lbnRlIGNyZWFyw6EgdW5hIGNhcGEgZGUgw61jb25vLicsXHJcbiAgICAgIGV4YW1wbGU6ICdFamVtcGxvOicsXHJcbiAgICAgIGljb25zOiAnSWNvbm9zJ1xyXG4gICAgfSxcclxuICAgIHN0b3JhZ2VNYXBWaWV3ZXI6IHtcclxuICAgICAgbGFzdE1vZGlmaWVkOiAnw5psdGltYSBtb2RpZmljYWNpw7NuIGhhY2Uge2xhc3RVcGRhdGVkfScsXHJcbiAgICAgIGJhY2s6ICdBdHLDoXMnXHJcbiAgICB9LFxyXG4gICAgb3ZlcndyaXRlTWFwOiB7XHJcbiAgICAgIHRpdGxlOiAnR3VhcmRhbmRvIGVsIG1hcGEuLi4nLFxyXG4gICAgICBhbHJlYWR5RXhpc3RzOiAnamEgZXhpc3RlIGVuIHttYXBTYXZlZH0uIExvIHF1aWVyZXMgc29icmVlc2NyaXZpcj8nXHJcbiAgICB9LFxyXG4gICAgbG9hZFN0b3JhZ2VNYXA6IHtcclxuICAgICAgYmFjazogJ0F0csOhcycsXHJcbiAgICAgIGdvVG9QYWdlOiAnVmVzIGEgbGEgcMOhZ2luYSB7ZGlzcGxheU5hbWV9IGRlIEtlcGxlci5nbCcsXHJcbiAgICAgIHN0b3JhZ2VNYXBzOiAnQWxtYW5jZW5hZ2UgLyBNYXBhcycsXHJcbiAgICAgIG5vU2F2ZWRNYXBzOiAnTm8gaGF5IG5pbmfDum4gbWFwYSBndWFyZGFkbyB0b2RhdsOtYSdcclxuICAgIH1cclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgdmlzaWJsZUxheWVyczogJ0NhcGFzIHZpc2libGVzJyxcclxuICAgIGxheWVyTGVnZW5kOiAnQ2FwYSBkZSBsZXllbmRhJ1xyXG4gIH0sXHJcbiAgaW50ZXJhY3Rpb25zOiB7XHJcbiAgICB0b29sdGlwOiAnU3VnZXJlbmNpYXMnLFxyXG4gICAgYnJ1c2g6ICdQaW5jZWwnLFxyXG4gICAgY29vcmRpbmF0ZTogJ0Nvb3JkZW5hZGFzJ1xyXG4gIH0sXHJcbiAgbGF5ZXJCbGVuZGluZzoge1xyXG4gICAgdGl0bGU6ICdDb21iaW5hY2nDs24gZGUgY2FwYXMnLFxyXG4gICAgYWRkaXRpdmU6ICdhZGl0aXZhJyxcclxuICAgIG5vcm1hbDogJ25vcm1hbCcsXHJcbiAgICBzdWJ0cmFjdGl2ZTogJ3N1YnN0cmFjdGl2YSdcclxuICB9LFxyXG4gIGNvbHVtbnM6IHtcclxuICAgIHRpdGxlOiAnQ29sdW1uYXMnLFxyXG4gICAgbGF0OiAnbGF0JyxcclxuICAgIGxuZzogJ2xvbicsXHJcbiAgICBhbHRpdHVkZTogJ2FsdHVyYScsXHJcbiAgICBpY29uOiAnw61jb25vJyxcclxuICAgIGdlb2pzb246ICdnZW9qc29uJyxcclxuICAgIGFyYzoge1xyXG4gICAgICBsYXQwOiAnbGF0IG9yaWdlbicsXHJcbiAgICAgIGxuZzA6ICdsbmcgb3JpZ2VuICcsXHJcbiAgICAgIGxhdDE6ICdsYXQgZGVzdGlubycsXHJcbiAgICAgIGxuZzE6ICdsbmcgZGVzdGlubydcclxuICAgIH0sXHJcbiAgICBncmlkOiB7XHJcbiAgICAgIHdvcmxkVW5pdFNpemU6ICdUYW1hw7FvIGRlIGxhIG1hbGxhIChrbSknXHJcbiAgICB9LFxyXG4gICAgaGV4YWdvbjoge1xyXG4gICAgICB3b3JsZFVuaXRTaXplOiAnUmFkaW8gZGUgaGV4w6Fnb25vIChrbSknXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb2xvcjoge1xyXG4gICAgY3VzdG9tUGFsZXR0ZTogJ1BhbGV0YSBwZXJzb25hbGl6YWRhJyxcclxuICAgIHN0ZXBzOiAncGFzb3MnLFxyXG4gICAgdHlwZTogJ3RpcG8nLFxyXG4gICAgcmV2ZXJzZWQ6ICdpbnZlcnRpZGEnXHJcbiAgfSxcclxuICBzY2FsZToge1xyXG4gICAgY29sb3JTY2FsZTogJ0VzY2FsYSBkZSBjb2xvcicsXHJcbiAgICBzaXplU2NhbGU6ICdFc2NhbGEgZGUgbWVkaWRhcycsXHJcbiAgICBzdHJva2VTY2FsZTogJ0VzY2FsYSBkZSB0cmF6bycsXHJcbiAgICBzY2FsZTogJ0VzY2FsYSdcclxuICB9LFxyXG4gIGZpbGVVcGxvYWRlcjoge1xyXG4gICAgbWVzc2FnZTogJ0FycmFzdHJhIHkgc3VlbHRhIGVsIGFyY2hpdm8gYXF1w60nLFxyXG4gICAgY2hyb21lTWVzc2FnZTpcclxuICAgICAgJyp1c3VhcmlvIGRlIENocm9tZTogbGEgbWVkaWRhIG3DoXhpbWEgc29uIDI1MG1iLCBzaSBkZWJlcyBjYXJnYXIgdW4gYXJjaGl2byBtw6FzIGdyYW5kZSB1dGlsaXphIFNhZmFyaScsXHJcbiAgICBkaXNjbGFpbWVyOlxyXG4gICAgICAnKmtlcGxlci5nbCBlcyB1bmEgYXBsaWNhY2nDs24gYWwgbGFkbyBjbGllbnRlIHF1ZSBubyB1dGlsaXphIG5pbmfDum4gc2Vydmlkb3IuIExvcyBkYXRvcyBzw7NsbyBleGlzdGVuIGVuIHR1IG3DoXF1aW5hL25hdmVnYWRvci4gJyArXHJcbiAgICAgICdObyBzZSBlbnZpYW4gZGF0b3MgbmkgbWFwYXMgYSBuaW5nw7puIHNlcnZpZG9yLicsXHJcbiAgICBjb25maWdVcGxvYWRNZXNzYWdlOlxyXG4gICAgICAnQ2FyZ2FyICoqQ1NWKiosICoqR2VvSnNvbioqIG8gdW4gbWFwYSBndWFyZGFkbyBlbiAqKkpzb24qKi4gTcOhcyBpbmZvcm1hY2nDs24gc29icmUgWyoqc3VwcG9ydGVkIGZpbGUgZm9ybWF0cyoqXScsXHJcbiAgICBicm93c2VGaWxlczogJ25hdmVnYSBwb3IgdHVzIGFyY2hpdm9zJyxcclxuICAgIHVwbG9hZGluZzogJ0NhcmdhbmRvJyxcclxuICAgIGZpbGVOb3RTdXBwb3J0ZWQ6ICdFbCBhcmNoaXZvIHtlcnJvckZpbGVzfSBubyBlcyBjb21wYXRpYmxlLicsXHJcbiAgICBvcjogJ28nXHJcbiAgfSxcclxuICBkZW5zaXR5OiAnZGVuc2lkYWQnLFxyXG4gICdCdWcgUmVwb3J0JzogJ0luZm9ybWUgZGUgZXJyb3JlcycsXHJcbiAgJ1VzZXIgR3VpZGUnOiAnR3XDrWEgZGUgdXN1YXJpbycsXHJcbiAgU2F2ZTogJ0d1YWRhcicsXHJcbiAgU2hhcmU6ICdDb21wYXJ0aXInXHJcbn07XHJcbiJdfQ==