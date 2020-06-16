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
    weight: 'pes',
    label: 'etiqueta',
    fillColor: 'color fons',
    color: 'color',
    strokeColor: 'color de traç',
    radius: 'radi',
    outline: 'outline',
    stroke: 'traç',
    density: 'densitat',
    height: 'alçada',
    sum: 'suma',
    pointCount: 'Recompte de Punts'
  },
  placeholder: {
    search: 'Cerca',
    selectField: 'Selecciona un camp',
    yAxis: 'Eix Y',
    selectType: 'Selecciona un Tipus',
    selectValue: 'Selecciona un Valor',
    enterValue: 'Entra un valor',
    empty: 'buit'
  },
  misc: {
    by: '',
    valuesIn: 'Valors a',
    valueEquals: 'Valor igual a',
    dataSource: 'Font de dades',
    brushRadius: 'Radi del pinzell (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Capes del mapa',
    label: 'Etiqueta',
    road: 'Carretera',
    border: 'Frontera',
    building: 'Edifici',
    water: 'Aigua',
    land: 'Terra',
    '3dBuilding': 'Edifici 3D'
  },
  panel: {
    text: {
      label: 'etiqueta',
      labelWithId: 'Etiqueta {labelId}',
      fontSize: 'Mida de la font',
      fontColor: 'Color de la font',
      textAnchor: 'Àncora del text',
      alignment: 'Alineació',
      addMoreLabel: 'Afegeix més etiquetes'
    }
  },
  sidebar: {
    panels: {
      layer: 'Capes',
      filter: 'Filtres',
      interaction: 'Interaccions',
      basemap: 'Mapa base'
    }
  },
  layer: {
    required: 'Requerit*',
    radius: 'Radi',
    color: 'Color',
    fillColor: 'Color fons',
    outline: 'Contorn',
    weight: 'Gruix',
    propertyBasedOn: '{property} basada en',
    coverage: 'Cobertura',
    stroke: 'Traç',
    strokeWidth: 'Amplada de traç',
    strokeColor: 'Color de traç',
    basic: 'Basic',
    trailLength: 'Longitud de pista',
    trailLengthDescription: 'Nombre de segons fins que desapareix el camí',
    newLayer: 'nova capa',
    elevationByDescription: "Si desactivat, l'alçada es basa en el recompte de punts",
    colorByDescription: 'Si desactivat, el color es basa en el recompte de punts',
    aggregateBy: '{field} agregat per',
    '3DModel': 'Model 3D',
    '3DModelOptions': 'Opcions del model 3D',
    type: {
      point: 'punt',
      arc: 'arc',
      line: 'línia',
      grid: 'malla',
      hexbin: 'hexbin',
      polygon: 'polígon',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icona',
      heatmap: 'heatmap',
      hexagon: 'hexàgon',
      hexagonid: 'H3',
      trip: 'viatge',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    strokeWidth: 'Amplada traç',
    strokeWidthRange: 'Rang amplada de traç',
    radius: 'Radi',
    fixedRadius: 'Radi fixe a mesurar',
    fixedRadiusDescription: 'Ajusta el radi al radi absolut en metres, p.ex 5 a 5 metres',
    radiusRange: 'Rang de radi',
    clusterRadius: 'Radi Cluster en Pixels',
    radiusRangePixels: 'Rang del radi en pixels',
    opacity: 'Opacitat',
    coverage: 'Cobertura',
    outline: 'Outline',
    colorRange: 'Rang de color',
    stroke: 'Traç',
    strokeColor: 'Color de traç',
    strokeColorRange: 'Rang de color de traç',
    targetColor: 'Color destí',
    colorAggregation: 'Agregació de color',
    heightAggregation: 'Agregació alçada',
    resolutionRange: 'Rang de resolució',
    sizeScale: 'Mida escala',
    worldUnitSize: 'Mida de la unitat mundial',
    elevationScale: 'Escala elevació',
    heightScale: 'Escala alçada',
    coverageRange: 'Rang ed cobertura',
    highPrecisionRendering: 'Representació alta precisió',
    highPrecisionRenderingDescription: 'La precisió alta tindrà rendiment més baix',
    height: 'Alçada',
    heightDescription: 'Fes clic al botó a dalt a la dreta del mapa per canviar a vista 3D',
    fill: 'Omple',
    enablePolygonHeight: 'Activa alçada del polígon',
    showWireframe: 'Mostra Wireframe',
    weightIntensity: 'Intensitat de pes',
    zoomScale: 'Escala de zoom',
    heightRange: 'Rang alçada'
  },
  layerManager: {
    addData: 'Afegeix Dades',
    addLayer: 'Afegeix Capes',
    layerBlending: 'Combinar capes'
  },
  mapManager: {
    mapStyle: 'Estil de mapa',
    addMapStyle: 'Afegeix estils de mapa',
    '3dBuildingColor': 'Color edifici 3D'
  },
  layerConfiguration: {
    defaultDescription: 'Calcula {property} segons el camp seleccionat',
    howTo: 'How to'
  },
  filterManager: {
    addFilter: 'Afegeix Filtre'
  },
  datasetTitle: {
    showDataTable: 'Mostra taula de dades',
    removeDataset: 'Elimina conjunt de dades'
  },
  datasetInfo: {
    rowCount: '{rowCount} files'
  },
  tooltip: {
    hideLayer: 'oculta la capa',
    showLayer: 'mostra la capa',
    hideFeature: "Amaga l'objecte",
    showFeature: "Mostra l'objecte",
    hide: 'amaga',
    show: 'mostra',
    removeLayer: 'Elimina capa',
    layerSettings: 'Configuració de capa',
    closePanel: 'Tanca panel actual',
    switchToDualView: 'Canvia a la vista de mapa dual',
    showLegend: 'mostra llegenda',
    disable3DMap: 'Desactiva mapa 3D',
    DrawOnMap: 'Dibuixa al mapa',
    selectLocale: 'Selecciona configuració regional',
    hideLayerPanel: 'Oculta el tauler de capes',
    showLayerPanel: 'Mostra el tauler de capes',
    moveToTop: 'Desplaça a dalt de tot de les capes de dades',
    selectBaseMapStyle: 'Selecciona estil de mapa base',
    "delete": 'Esborra',
    timePlayback: 'Reproducció de temps',
    cloudStorage: 'Emmagatzematge al núvol',
    '3DMap': 'Mapa 3D'
  },
  toolbar: _objectSpread({
    exportImage: 'Exporta imatge',
    exportData: 'Exporta dades',
    exportMap: 'Exporta mapa',
    shareMapURL: 'Comparteix URL del mapa',
    saveMap: 'Desa mapa',
    select: 'selecciona',
    polygon: 'polígon',
    rectangle: 'rectangle',
    hide: 'amaga',
    show: 'mostra'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Esborra conjunt de dades',
      addDataToMap: 'Afegeix dades al mapa',
      exportImage: 'Exporta imatge',
      exportData: 'Exporta dades',
      exportMap: 'Exporta mapa',
      addCustomMapboxStyle: 'Afegeix estil Mapbox propi',
      saveMap: 'Desa mapa',
      shareURL: 'Comparteix URL'
    },
    button: {
      "delete": 'Esborra',
      download: 'Descarrega',
      "export": 'Exporta',
      addStyle: 'Afegeix estil',
      save: 'Desa',
      defaultCancel: 'Cancel·la',
      defaultConfirm: 'Confirma'
    },
    exportImage: {
      ratioTitle: 'Ràtio',
      ratioDescription: 'Escull ràtio per diversos usos.',
      ratioOriginalScreen: 'Pantalla original',
      ratioCustom: 'Personalitzat',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolució',
      resolutionDescription: 'Alta resolució és millor per a les impressions.',
      mapLegendTitle: 'Llegenda del mapa',
      mapLegendAdd: 'Afegir llegenda al mapa'
    },
    exportData: {
      datasetTitle: 'Conjunt de dades',
      datasetSubtitle: 'Escull els conjunts de dades que vols exportar',
      allDatasets: 'Tots',
      dataTypeTitle: 'Tipus de dades',
      dataTypeSubtitle: 'Escull els tipus de dades que vols exportar',
      filterDataTitle: 'Filtra dades',
      filterDataSubtitle: 'Pots escollir exportar les dades originals o les filtrades',
      filteredData: 'Dades filtrades',
      unfilteredData: 'Dades sense filtrar',
      fileCount: '{fileCount} Arxius',
      rowCount: '{rowCount} Files'
    },
    deleteData: {
      warning: "estàs a punt d'esborrar aquest conjunt de dades. Afectarà {length} capes"
    },
    addStyle: {
      publishTitle: "1. Publica el teu estil a Mapbox o proporciona el token d'accés",
      publishSubtitle1: 'Pots crear el teu propi estil de mapa a',
      publishSubtitle2: 'i',
      publishSubtitle3: 'publicar',
      publishSubtitle4: 'ho.',
      publishSubtitle5: 'Per utilitzar un estil privat, enganxa el teu',
      publishSubtitle6: "token d'accés",
      publishSubtitle7: 'aquí. *kepler.gl és una aplicació client, les dades romanen al teu navegador..',
      exampleToken: 'p.ex. pk.abcdefg.xxxxxx',
      pasteTitle: "2. Enganxa la URL de l'estil",
      pasteSubtitle1: 'Què és un',
      pasteSubtitle2: "URL de l'estil",
      namingTitle: '3. Posa nom al teu estil'
    },
    shareMap: {
      shareUriTitle: 'Comparteix URL del mapa',
      shareUriSubtitle: 'Genera una URL del mapa per compartir amb altri',
      cloudTitle: 'Emmagatzematge al núvol',
      cloudSubtitle: 'Accedeix i carrega dades de mapa al teu emmagatzematge al núvol personal',
      shareDisclaimer: 'kepler.gl desarà les dades del mapa al teu emmagatzematge al núvol personal, només qui tingui la URL podrà accedir al mapa i a les dades . ' + "Pots editar/esborrar l'arxiu de dades en el teu compte al núvol en qualsevol moment.",
      gotoPage: 'Ves a la pàgina de {currentProvider} de Kepler.gl'
    },
    statusPanel: {
      mapUploading: 'Carregar un mapa',
      error: 'Error'
    },
    saveMap: {
      title: 'Emmagatzematge al núvol',
      subtitle: 'Accedeix per desar el mapa al teu emmagatzematge al núvol'
    },
    exportMap: {
      formatTitle: 'Format de mapa',
      formatSubtitle: 'Escull el format amb què vols exportar el teu mapa',
      html: {
        selection: 'Exporta el teu mapa com un arxiu HTML interactiu.',
        tokenTitle: "Token d'accés de Mapbox",
        tokenSubtitle: "Utilitza el teu token d'accés de Mapbox a l'arxiu HTML (opcional)",
        tokenPlaceholder: "Enganxa el teu token d'accés a Mapbox",
        tokenMisuseWarning: '* Si no proporciones el teu propi token, el mapa podria fallar en qualsevol moment quan reemplacem el nostre token per evitar abusos. ',
        tokenDisclaimer: 'Pots canviar el toke de Mapbox més endavant fent servir aquestes instruccions: ',
        tokenUpdate: 'Com actualitzar un token preexistent.',
        modeTitle: 'Mode mapa',
        modeSubtitle1: 'Selecciona mode app. Més ',
        modeSubtitle2: 'informació',
        modeDescription: 'Permet als usuaris {mode} el mapa',
        read: 'llegir',
        edit: 'editar'
      },
      json: {
        configTitle: 'Configuració del mapa',
        configDisclaimer: "La configuració del mapa s'inclourà a l'arxiu Json. Si utilitzes kepler.gl a la teva pròpia app pots copiar aquesta configuració i passar-la a  ",
        selection: 'Exporta les dades del mapa i la configuració en un sol arxiu Json. Més endavant pots obrir aquest mateix mapa carregant aquest mateix arxiu a kepler.gl.',
        disclaimer: "* La configuració del mapa es combina amb els conjunts de dades carregats. ‘dataId’ s'utilitza per lligar capes, filtres i suggeriments a un conjunt de dades específic. " + "Quan passis aquesta configuració a addDataToMap, assegura que l'identificador del conjunt de dades coincideixi amb els ‘dataId’ d'aquesta configuració."
      }
    },
    loadingDialog: {
      loading: 'Carregant...'
    },
    loadData: {
      upload: 'Carregar arxius',
      storage: "Carregar des d'emmagatzematge"
    },
    tripInfo: {
      title: 'Com habilitar l’animació de viatge',
      description1: 'Per animar la ruta, les dades geoJSON han de contenir `LineString` en la seva geometria i les coordenades de LineString han de tenir 4 elements en els formats de ',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2: 'i el darrer element ha de ser la marca de temps. Els formats vàlids per a la marca de temps inclouen Unix en segons com `1564184363` o en milisegons com `1564184363000`.',
      example: 'Exemple:'
    },
    iconInfo: {
      title: 'Com dibuixar icones',
      description1: "En el teu CSV crea una columna i posa-hi el nom de la icona que vols dibuixar. Pots deixar la cel·la buida quan no vulguis que es mostri per a certs punts. Quan la columna s'anomena",
      code: 'icon',
      description2: " kepler.gl automàticament crearà una capa d'icona.",
      example: 'Exemple:',
      icons: 'Icones'
    },
    storageMapViewer: {
      lastModified: 'Darrera modificació fa {lastUpdated}',
      back: 'Enrere'
    },
    overwriteMap: {
      title: 'Desant mapa...',
      alreadyExists: 'ja existeix a {mapSaved}. El vols sobreescriure?'
    },
    loadStorageMap: {
      back: 'Enrere',
      goToPage: 'Ves a la pàgina {displayName} de Kepler.gl',
      storageMaps: 'Emmagatzematge / Mapes',
      noSavedMaps: 'Cap mapa desat encara'
    }
  },
  header: {
    visibleLayers: 'Capes visibles',
    layerLegend: 'Llegenda de capes'
  },
  interactions: {
    tooltip: 'Suggeriment',
    brush: 'Pinzell',
    coordinate: 'Coordenades'
  },
  layerBlending: {
    title: 'Combinació de capes',
    additive: 'additiva',
    normal: 'normal',
    subtractive: 'substractiva'
  },
  columns: {
    title: 'Columnes',
    lat: 'lat',
    lng: 'lon',
    altitude: 'alçada',
    icon: 'icona',
    geojson: 'geojson',
    arc: {
      lat0: 'lat origen',
      lng0: 'lng origen ',
      lat1: 'lat destinació',
      lng1: 'lng destinació'
    },
    grid: {
      worldUnitSize: 'Mida de malla (km)'
    },
    hexagon: {
      worldUnitSize: "Radi d'hexàgon (km)"
    }
  },
  color: {
    customPalette: 'Paleta personalitzada',
    steps: 'intervals',
    type: 'tipus',
    reversed: 'invertida'
  },
  scale: {
    colorScale: 'Escala de color',
    sizeScale: 'Escala de mides',
    strokeScale: 'Escala de traç',
    scale: 'Escala'
  },
  fileUploader: {
    message: "Arrossega i deixa anar l'arxiu aquí",
    chromeMessage: '*usuari de Chrome: la mida màxima són 250mb, si has de carrgar un arxiu més gran fes servir Safari',
    disclaimer: '*kepler.gl és una aplicació a la banda client que no es recolza en cap servidor. Les dades només existeixen a la teva màquina/navegador. ' + "No s'envien dades ni mapes a cap servidor.",
    configUploadMessage: 'Carrega **CSV**, **GeoJson** o un mapa desat en **Json**. Més informació sobre [**supported file formats**]',
    browseFiles: 'navega pels teus arxius',
    uploading: 'Carregant',
    fileNotSupported: "L'arxiu {errorFiles} no és compatible.",
    or: 'o'
  },
  density: 'densitat',
  'Bug Report': "Informe d'errors",
  'User Guide': "Guia d'usuari",
  Save: 'Desa',
  Share: 'Comparteix'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vY2EuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJ3ZWlnaHQiLCJsYWJlbCIsImZpbGxDb2xvciIsImNvbG9yIiwic3Ryb2tlQ29sb3IiLCJyYWRpdXMiLCJvdXRsaW5lIiwic3Ryb2tlIiwiZGVuc2l0eSIsImhlaWdodCIsInN1bSIsInBvaW50Q291bnQiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInNlbGVjdEZpZWxkIiwieUF4aXMiLCJzZWxlY3RUeXBlIiwic2VsZWN0VmFsdWUiLCJlbnRlclZhbHVlIiwiZW1wdHkiLCJtaXNjIiwiYnkiLCJ2YWx1ZXNJbiIsInZhbHVlRXF1YWxzIiwiZGF0YVNvdXJjZSIsImJydXNoUmFkaXVzIiwibWFwTGF5ZXJzIiwidGl0bGUiLCJyb2FkIiwiYm9yZGVyIiwiYnVpbGRpbmciLCJ3YXRlciIsImxhbmQiLCJwYW5lbCIsInRleHQiLCJsYWJlbFdpdGhJZCIsImZvbnRTaXplIiwiZm9udENvbG9yIiwidGV4dEFuY2hvciIsImFsaWdubWVudCIsImFkZE1vcmVMYWJlbCIsInNpZGViYXIiLCJwYW5lbHMiLCJsYXllciIsImZpbHRlciIsImludGVyYWN0aW9uIiwiYmFzZW1hcCIsInJlcXVpcmVkIiwicHJvcGVydHlCYXNlZE9uIiwiY292ZXJhZ2UiLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVmlzQ29uZmlncyIsInN0cm9rZVdpZHRoUmFuZ2UiLCJmaXhlZFJhZGl1cyIsImZpeGVkUmFkaXVzRGVzY3JpcHRpb24iLCJyYWRpdXNSYW5nZSIsImNsdXN0ZXJSYWRpdXMiLCJyYWRpdXNSYW5nZVBpeGVscyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInRhcmdldENvbG9yIiwiY29sb3JBZ2dyZWdhdGlvbiIsImhlaWdodEFnZ3JlZ2F0aW9uIiwicmVzb2x1dGlvblJhbmdlIiwic2l6ZVNjYWxlIiwid29ybGRVbml0U2l6ZSIsImVsZXZhdGlvblNjYWxlIiwiaGVpZ2h0U2NhbGUiLCJjb3ZlcmFnZVJhbmdlIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZyIsImhpZ2hQcmVjaXNpb25SZW5kZXJpbmdEZXNjcmlwdGlvbiIsImhlaWdodERlc2NyaXB0aW9uIiwiZmlsbCIsImVuYWJsZVBvbHlnb25IZWlnaHQiLCJzaG93V2lyZWZyYW1lIiwid2VpZ2h0SW50ZW5zaXR5Iiwiem9vbVNjYWxlIiwiaGVpZ2h0UmFuZ2UiLCJsYXllck1hbmFnZXIiLCJhZGREYXRhIiwiYWRkTGF5ZXIiLCJsYXllckJsZW5kaW5nIiwibWFwTWFuYWdlciIsIm1hcFN0eWxlIiwiYWRkTWFwU3R5bGUiLCJsYXllckNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJob3dUbyIsImZpbHRlck1hbmFnZXIiLCJhZGRGaWx0ZXIiLCJkYXRhc2V0VGl0bGUiLCJzaG93RGF0YVRhYmxlIiwicmVtb3ZlRGF0YXNldCIsImRhdGFzZXRJbmZvIiwicm93Q291bnQiLCJ0b29sdGlwIiwiaGlkZUxheWVyIiwic2hvd0xheWVyIiwiaGlkZUZlYXR1cmUiLCJzaG93RmVhdHVyZSIsImhpZGUiLCJzaG93IiwicmVtb3ZlTGF5ZXIiLCJsYXllclNldHRpbmdzIiwiY2xvc2VQYW5lbCIsInN3aXRjaFRvRHVhbFZpZXciLCJzaG93TGVnZW5kIiwiZGlzYWJsZTNETWFwIiwiRHJhd09uTWFwIiwic2VsZWN0TG9jYWxlIiwiaGlkZUxheWVyUGFuZWwiLCJzaG93TGF5ZXJQYW5lbCIsIm1vdmVUb1RvcCIsInNlbGVjdEJhc2VNYXBTdHlsZSIsInRpbWVQbGF5YmFjayIsImNsb3VkU3RvcmFnZSIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwibW9kYWwiLCJkZWxldGVEYXRhc2V0IiwiYWRkRGF0YVRvTWFwIiwiYWRkQ3VzdG9tTWFwYm94U3R5bGUiLCJzaGFyZVVSTCIsImJ1dHRvbiIsImRvd25sb2FkIiwiYWRkU3R5bGUiLCJzYXZlIiwiZGVmYXVsdENhbmNlbCIsImRlZmF1bHRDb25maXJtIiwicmF0aW9UaXRsZSIsInJhdGlvRGVzY3JpcHRpb24iLCJyYXRpb09yaWdpbmFsU2NyZWVuIiwicmF0aW9DdXN0b20iLCJyYXRpbzRfMyIsInJhdGlvMTZfOSIsInJlc29sdXRpb25UaXRsZSIsInJlc29sdXRpb25EZXNjcmlwdGlvbiIsIm1hcExlZ2VuZFRpdGxlIiwibWFwTGVnZW5kQWRkIiwiZGF0YXNldFN1YnRpdGxlIiwiYWxsRGF0YXNldHMiLCJkYXRhVHlwZVRpdGxlIiwiZGF0YVR5cGVTdWJ0aXRsZSIsImZpbHRlckRhdGFUaXRsZSIsImZpbHRlckRhdGFTdWJ0aXRsZSIsImZpbHRlcmVkRGF0YSIsInVuZmlsdGVyZWREYXRhIiwiZmlsZUNvdW50IiwiZGVsZXRlRGF0YSIsIndhcm5pbmciLCJwdWJsaXNoVGl0bGUiLCJwdWJsaXNoU3VidGl0bGUxIiwicHVibGlzaFN1YnRpdGxlMiIsInB1Ymxpc2hTdWJ0aXRsZTMiLCJwdWJsaXNoU3VidGl0bGU0IiwicHVibGlzaFN1YnRpdGxlNSIsInB1Ymxpc2hTdWJ0aXRsZTYiLCJwdWJsaXNoU3VidGl0bGU3IiwiZXhhbXBsZVRva2VuIiwicGFzdGVUaXRsZSIsInBhc3RlU3VidGl0bGUxIiwicGFzdGVTdWJ0aXRsZTIiLCJuYW1pbmdUaXRsZSIsInNoYXJlTWFwIiwic2hhcmVVcmlUaXRsZSIsInNoYXJlVXJpU3VidGl0bGUiLCJjbG91ZFRpdGxlIiwiY2xvdWRTdWJ0aXRsZSIsInNoYXJlRGlzY2xhaW1lciIsImdvdG9QYWdlIiwic3RhdHVzUGFuZWwiLCJtYXBVcGxvYWRpbmciLCJlcnJvciIsInN1YnRpdGxlIiwiZm9ybWF0VGl0bGUiLCJmb3JtYXRTdWJ0aXRsZSIsImh0bWwiLCJzZWxlY3Rpb24iLCJ0b2tlblRpdGxlIiwidG9rZW5TdWJ0aXRsZSIsInRva2VuUGxhY2Vob2xkZXIiLCJ0b2tlbk1pc3VzZVdhcm5pbmciLCJ0b2tlbkRpc2NsYWltZXIiLCJ0b2tlblVwZGF0ZSIsIm1vZGVUaXRsZSIsIm1vZGVTdWJ0aXRsZTEiLCJtb2RlU3VidGl0bGUyIiwibW9kZURlc2NyaXB0aW9uIiwicmVhZCIsImVkaXQiLCJqc29uIiwiY29uZmlnVGl0bGUiLCJjb25maWdEaXNjbGFpbWVyIiwiZGlzY2xhaW1lciIsImxvYWRpbmdEaWFsb2ciLCJsb2FkaW5nIiwibG9hZERhdGEiLCJ1cGxvYWQiLCJzdG9yYWdlIiwidHJpcEluZm8iLCJkZXNjcmlwdGlvbjEiLCJjb2RlIiwiZGVzY3JpcHRpb24yIiwiZXhhbXBsZSIsImljb25JbmZvIiwiaWNvbnMiLCJzdG9yYWdlTWFwVmlld2VyIiwibGFzdE1vZGlmaWVkIiwiYmFjayIsIm92ZXJ3cml0ZU1hcCIsImFscmVhZHlFeGlzdHMiLCJsb2FkU3RvcmFnZU1hcCIsImdvVG9QYWdlIiwic3RvcmFnZU1hcHMiLCJub1NhdmVkTWFwcyIsImhlYWRlciIsInZpc2libGVMYXllcnMiLCJsYXllckxlZ2VuZCIsImludGVyYWN0aW9ucyIsImJydXNoIiwiY29vcmRpbmF0ZSIsImFkZGl0aXZlIiwibm9ybWFsIiwic3VidHJhY3RpdmUiLCJjb2x1bW5zIiwibGF0IiwibG5nIiwiYWx0aXR1ZGUiLCJsYXQwIiwibG5nMCIsImxhdDEiLCJsbmcxIiwiY3VzdG9tUGFsZXR0ZSIsInN0ZXBzIiwicmV2ZXJzZWQiLCJzY2FsZSIsImNvbG9yU2NhbGUiLCJzdHJva2VTY2FsZSIsImZpbGVVcGxvYWRlciIsIm1lc3NhZ2UiLCJjaHJvbWVNZXNzYWdlIiwiY29uZmlnVXBsb2FkTWVzc2FnZSIsImJyb3dzZUZpbGVzIiwidXBsb2FkaW5nIiwiZmlsZU5vdFN1cHBvcnRlZCIsIm9yIiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxLQURBO0FBRVJDLElBQUFBLEtBQUssRUFBRSxVQUZDO0FBR1JDLElBQUFBLFNBQVMsRUFBRSxZQUhIO0FBSVJDLElBQUFBLEtBQUssRUFBRSxPQUpDO0FBS1JDLElBQUFBLFdBQVcsRUFBRSxlQUxMO0FBTVJDLElBQUFBLE1BQU0sRUFBRSxNQU5BO0FBT1JDLElBQUFBLE9BQU8sRUFBRSxTQVBEO0FBUVJDLElBQUFBLE1BQU0sRUFBRSxNQVJBO0FBU1JDLElBQUFBLE9BQU8sRUFBRSxVQVREO0FBVVJDLElBQUFBLE1BQU0sRUFBRSxRQVZBO0FBV1JDLElBQUFBLEdBQUcsRUFBRSxNQVhHO0FBWVJDLElBQUFBLFVBQVUsRUFBRTtBQVpKLEdBREc7QUFlYkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLE1BQU0sRUFBRSxPQURHO0FBRVhDLElBQUFBLFdBQVcsRUFBRSxvQkFGRjtBQUdYQyxJQUFBQSxLQUFLLEVBQUUsT0FISTtBQUlYQyxJQUFBQSxVQUFVLEVBQUUscUJBSkQ7QUFLWEMsSUFBQUEsV0FBVyxFQUFFLHFCQUxGO0FBTVhDLElBQUFBLFVBQVUsRUFBRSxnQkFORDtBQU9YQyxJQUFBQSxLQUFLLEVBQUU7QUFQSSxHQWZBO0FBd0JiQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsRUFBRSxFQUFFLEVBREE7QUFFSkMsSUFBQUEsUUFBUSxFQUFFLFVBRk47QUFHSkMsSUFBQUEsV0FBVyxFQUFFLGVBSFQ7QUFJSkMsSUFBQUEsVUFBVSxFQUFFLGVBSlI7QUFLSkMsSUFBQUEs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QSxJQUFJLEVBQUUsTUE5Wk87QUErWmJDLEVBQUFBLEtBQUssRUFBRTtBQS9aTSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtMT0NBTEVTfSBmcm9tICcuL2xvY2FsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BlcnR5OiB7XHJcbiAgICB3ZWlnaHQ6ICdwZXMnLFxyXG4gICAgbGFiZWw6ICdldGlxdWV0YScsXHJcbiAgICBmaWxsQ29sb3I6ICdjb2xvciBmb25zJyxcclxuICAgIGNvbG9yOiAnY29sb3InLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICdjb2xvciBkZSB0cmHDpycsXHJcbiAgICByYWRpdXM6ICdyYWRpJyxcclxuICAgIG91dGxpbmU6ICdvdXRsaW5lJyxcclxuICAgIHN0cm9rZTogJ3RyYcOnJyxcclxuICAgIGRlbnNpdHk6ICdkZW5zaXRhdCcsXHJcbiAgICBoZWlnaHQ6ICdhbMOnYWRhJyxcclxuICAgIHN1bTogJ3N1bWEnLFxyXG4gICAgcG9pbnRDb3VudDogJ1JlY29tcHRlIGRlIFB1bnRzJ1xyXG4gIH0sXHJcbiAgcGxhY2Vob2xkZXI6IHtcclxuICAgIHNlYXJjaDogJ0NlcmNhJyxcclxuICAgIHNlbGVjdEZpZWxkOiAnU2VsZWNjaW9uYSB1biBjYW1wJyxcclxuICAgIHlBeGlzOiAnRWl4IFknLFxyXG4gICAgc2VsZWN0VHlwZTogJ1NlbGVjY2lvbmEgdW4gVGlwdXMnLFxyXG4gICAgc2VsZWN0VmFsdWU6ICdTZWxlY2Npb25hIHVuIFZhbG9yJyxcclxuICAgIGVudGVyVmFsdWU6ICdFbnRyYSB1biB2YWxvcicsXHJcbiAgICBlbXB0eTogJ2J1aXQnXHJcbiAgfSxcclxuICBtaXNjOiB7XHJcbiAgICBieTogJycsXHJcbiAgICB2YWx1ZXNJbjogJ1ZhbG9ycyBhJyxcclxuICAgIHZhbHVlRXF1YWxzOiAnVmFsb3IgaWd1YWwgYScsXHJcbiAgICBkYXRhU291cmNlOiAnRm9udCBkZSBkYWRlcycsXHJcbiAgICBicnVzaFJhZGl1czogJ1JhZGkgZGVsIHBpbnplbGwgKGttKScsXHJcbiAgICBlbXB0eTogJyAnXHJcbiAgfSxcclxuICBtYXBMYXllcnM6IHtcclxuICAgIHRpdGxlOiAnQ2FwZXMgZGVsIG1hcGEnLFxyXG4gICAgbGFiZWw6ICdFdGlxdWV0YScsXHJcbiAgICByb2FkOiAnQ2FycmV0ZXJhJyxcclxuICAgIGJvcmRlcjogJ0Zyb250ZXJhJyxcclxuICAgIGJ1aWxkaW5nOiAnRWRpZmljaScsXHJcbiAgICB3YXRlcjogJ0FpZ3VhJyxcclxuICAgIGxhbmQ6ICdUZXJyYScsXHJcbiAgICAnM2RCdWlsZGluZyc6ICdFZGlmaWNpIDNEJ1xyXG4gIH0sXHJcbiAgcGFuZWw6IHtcclxuICAgIHRleHQ6IHtcclxuICAgICAgbGFiZWw6ICdldGlxdWV0YScsXHJcbiAgICAgIGxhYmVsV2l0aElkOiAnRXRpcXVldGEge2xhYmVsSWR9JyxcclxuICAgICAgZm9udFNpemU6ICdNaWRhIGRlIGxhIGZvbnQnLFxyXG4gICAgICBmb250Q29sb3I6ICdDb2xvciBkZSBsYSBmb250JyxcclxuICAgICAgdGV4dEFuY2hvcjogJ8OAbmNvcmEgZGVsIHRleHQnLFxyXG4gICAgICBhbGlnbm1lbnQ6ICdBbGluZWFjacOzJyxcclxuICAgICAgYWRkTW9yZUxhYmVsOiAnQWZlZ2VpeCBtw6lzIGV0aXF1ZXRlcydcclxuICAgIH1cclxuICB9LFxyXG4gIHNpZGViYXI6IHtcclxuICAgIHBhbmVsczoge1xyXG4gICAgICBsYXllcjogJ0NhcGVzJyxcclxuICAgICAgZmlsdGVyOiAnRmlsdHJlcycsXHJcbiAgICAgIGludGVyYWN0aW9uOiAnSW50ZXJhY2Npb25zJyxcclxuICAgICAgYmFzZW1hcDogJ01hcGEgYmFzZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGxheWVyOiB7XHJcbiAgICByZXF1aXJlZDogJ1JlcXVlcml0KicsXHJcbiAgICByYWRpdXM6ICdSYWRpJyxcclxuICAgIGNvbG9yOiAnQ29sb3InLFxyXG4gICAgZmlsbENvbG9yOiAnQ29sb3IgZm9ucycsXHJcbiAgICBvdXRsaW5lOiAnQ29udG9ybicsXHJcbiAgICB3ZWlnaHQ6ICdHcnVpeCcsXHJcbiAgICBwcm9wZXJ0eUJhc2VkT246ICd7cHJvcGVydHl9IGJhc2FkYSBlbicsXHJcbiAgICBjb3ZlcmFnZTogJ0NvYmVydHVyYScsXHJcbiAgICBzdHJva2U6ICdUcmHDpycsXHJcbiAgICBzdHJva2VXaWR0aDogJ0FtcGxhZGEgZGUgdHJhw6cnLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICdDb2xvciBkZSB0cmHDpycsXHJcbiAgICBiYXNpYzogJ0Jhc2ljJyxcclxuICAgIHRyYWlsTGVuZ3RoOiAnTG9uZ2l0dWQgZGUgcGlzdGEnLFxyXG4gICAgdHJhaWxMZW5ndGhEZXNjcmlwdGlvbjogJ05vbWJyZSBkZSBzZWdvbnMgZmlucyBxdWUgZGVzYXBhcmVpeCBlbCBjYW3DrScsXHJcbiAgICBuZXdMYXllcjogJ25vdmEgY2FwYScsXHJcbiAgICBlbGV2YXRpb25CeURlc2NyaXB0aW9uOiBcIlNpIGRlc2FjdGl2YXQsIGwnYWzDp2FkYSBlcyBiYXNhIGVuIGVsIHJlY29tcHRlIGRlIHB1bnRzXCIsXHJcbiAgICBjb2xvckJ5RGVzY3JpcHRpb246ICdTaSBkZXNhY3RpdmF0LCBlbCBjb2xvciBlcyBiYXNhIGVuIGVsIHJlY29tcHRlIGRlIHB1bnRzJyxcclxuICAgIGFnZ3JlZ2F0ZUJ5OiAne2ZpZWxkfSBhZ3JlZ2F0IHBlcicsXHJcbiAgICAnM0RNb2RlbCc6ICdNb2RlbCAzRCcsXHJcbiAgICAnM0RNb2RlbE9wdGlvbnMnOiAnT3BjaW9ucyBkZWwgbW9kZWwgM0QnLFxyXG4gICAgdHlwZToge1xyXG4gICAgICBwb2ludDogJ3B1bnQnLFxyXG4gICAgICBhcmM6ICdhcmMnLFxyXG4gICAgICBsaW5lOiAnbMOtbmlhJyxcclxuICAgICAgZ3JpZDogJ21hbGxhJyxcclxuICAgICAgaGV4YmluOiAnaGV4YmluJyxcclxuICAgICAgcG9seWdvbjogJ3BvbMOtZ29uJyxcclxuICAgICAgZ2VvanNvbjogJ2dlb2pzb24nLFxyXG4gICAgICBjbHVzdGVyOiAnY2x1c3RlcicsXHJcbiAgICAgIGljb246ICdpY29uYScsXHJcbiAgICAgIGhlYXRtYXA6ICdoZWF0bWFwJyxcclxuICAgICAgaGV4YWdvbjogJ2hleMOgZ29uJyxcclxuICAgICAgaGV4YWdvbmlkOiAnSDMnLFxyXG4gICAgICB0cmlwOiAndmlhdGdlJyxcclxuICAgICAgczI6ICdTMicsXHJcbiAgICAgICczZCc6ICczRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGxheWVyVmlzQ29uZmlnczoge1xyXG4gICAgc3Ryb2tlV2lkdGg6ICdBbXBsYWRhIHRyYcOnJyxcclxuICAgIHN0cm9rZVdpZHRoUmFuZ2U6ICdSYW5nIGFtcGxhZGEgZGUgdHJhw6cnLFxyXG4gICAgcmFkaXVzOiAnUmFkaScsXHJcbiAgICBmaXhlZFJhZGl1czogJ1JhZGkgZml4ZSBhIG1lc3VyYXInLFxyXG4gICAgZml4ZWRSYWRpdXNEZXNjcmlwdGlvbjogJ0FqdXN0YSBlbCByYWRpIGFsIHJhZGkgYWJzb2x1dCBlbiBtZXRyZXMsIHAuZXggNSBhIDUgbWV0cmVzJyxcclxuICAgIHJhZGl1c1JhbmdlOiAnUmFuZyBkZSByYWRpJyxcclxuICAgIGNsdXN0ZXJSYWRpdXM6ICdSYWRpIENsdXN0ZXIgZW4gUGl4ZWxzJyxcclxuICAgIHJhZGl1c1JhbmdlUGl4ZWxzOiAnUmFuZyBkZWwgcmFkaSBlbiBwaXhlbHMnLFxyXG4gICAgb3BhY2l0eTogJ09wYWNpdGF0JyxcclxuICAgIGNvdmVyYWdlOiAnQ29iZXJ0dXJhJyxcclxuICAgIG91dGxpbmU6ICdPdXRsaW5lJyxcclxuICAgIGNvbG9yUmFuZ2U6ICdSYW5nIGRlIGNvbG9yJyxcclxuICAgIHN0cm9rZTogJ1RyYcOnJyxcclxuICAgIHN0cm9rZUNvbG9yOiAnQ29sb3IgZGUgdHJhw6cnLFxyXG4gICAgc3Ryb2tlQ29sb3JSYW5nZTogJ1JhbmcgZGUgY29sb3IgZGUgdHJhw6cnLFxyXG4gICAgdGFyZ2V0Q29sb3I6ICdDb2xvciBkZXN0w60nLFxyXG4gICAgY29sb3JBZ2dyZWdhdGlvbjogJ0FncmVnYWNpw7MgZGUgY29sb3InLFxyXG4gICAgaGVpZ2h0QWdncmVnYXRpb246ICdBZ3JlZ2FjacOzIGFsw6dhZGEnLFxyXG4gICAgcmVzb2x1dGlvblJhbmdlOiAnUmFuZyBkZSByZXNvbHVjacOzJyxcclxuICAgIHNpemVTY2FsZTogJ01pZGEgZXNjYWxhJyxcclxuICAgIHdvcmxkVW5pdFNpemU6ICdNaWRhIGRlIGxhIHVuaXRhdCBtdW5kaWFsJyxcclxuICAgIGVsZXZhdGlvblNjYWxlOiAnRXNjYWxhIGVsZXZhY2nDsycsXHJcbiAgICBoZWlnaHRTY2FsZTogJ0VzY2FsYSBhbMOnYWRhJyxcclxuICAgIGNvdmVyYWdlUmFuZ2U6ICdSYW5nIGVkIGNvYmVydHVyYScsXHJcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nOiAnUmVwcmVzZW50YWNpw7MgYWx0YSBwcmVjaXNpw7MnLFxyXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uOiAnTGEgcHJlY2lzacOzIGFsdGEgdGluZHLDoCByZW5kaW1lbnQgbcOpcyBiYWl4JyxcclxuICAgIGhlaWdodDogJ0Fsw6dhZGEnLFxyXG4gICAgaGVpZ2h0RGVzY3JpcHRpb246ICdGZXMgY2xpYyBhbCBib3TDsyBhIGRhbHQgYSBsYSBkcmV0YSBkZWwgbWFwYSBwZXIgY2FudmlhciBhIHZpc3RhIDNEJyxcclxuICAgIGZpbGw6ICdPbXBsZScsXHJcbiAgICBlbmFibGVQb2x5Z29uSGVpZ2h0OiAnQWN0aXZhIGFsw6dhZGEgZGVsIHBvbMOtZ29uJyxcclxuICAgIHNob3dXaXJlZnJhbWU6ICdNb3N0cmEgV2lyZWZyYW1lJyxcclxuICAgIHdlaWdodEludGVuc2l0eTogJ0ludGVuc2l0YXQgZGUgcGVzJyxcclxuICAgIHpvb21TY2FsZTogJ0VzY2FsYSBkZSB6b29tJyxcclxuICAgIGhlaWdodFJhbmdlOiAnUmFuZyBhbMOnYWRhJ1xyXG4gIH0sXHJcbiAgbGF5ZXJNYW5hZ2VyOiB7XHJcbiAgICBhZGREYXRhOiAnQWZlZ2VpeCBEYWRlcycsXHJcbiAgICBhZGRMYXllcjogJ0FmZWdlaXggQ2FwZXMnLFxyXG4gICAgbGF5ZXJCbGVuZGluZzogJ0NvbWJpbmFyIGNhcGVzJ1xyXG4gIH0sXHJcbiAgbWFwTWFuYWdlcjoge1xyXG4gICAgbWFwU3R5bGU6ICdFc3RpbCBkZSBtYXBhJyxcclxuICAgIGFkZE1hcFN0eWxlOiAnQWZlZ2VpeCBlc3RpbHMgZGUgbWFwYScsXHJcbiAgICAnM2RCdWlsZGluZ0NvbG9yJzogJ0NvbG9yIGVkaWZpY2kgM0QnXHJcbiAgfSxcclxuICBsYXllckNvbmZpZ3VyYXRpb246IHtcclxuICAgIGRlZmF1bHREZXNjcmlwdGlvbjogJ0NhbGN1bGEge3Byb3BlcnR5fSBzZWdvbnMgZWwgY2FtcCBzZWxlY2Npb25hdCcsXHJcbiAgICBob3dUbzogJ0hvdyB0bydcclxuICB9LFxyXG4gIGZpbHRlck1hbmFnZXI6IHtcclxuICAgIGFkZEZpbHRlcjogJ0FmZWdlaXggRmlsdHJlJ1xyXG4gIH0sXHJcbiAgZGF0YXNldFRpdGxlOiB7XHJcbiAgICBzaG93RGF0YVRhYmxlOiAnTW9zdHJhIHRhdWxhIGRlIGRhZGVzJyxcclxuICAgIHJlbW92ZURhdGFzZXQ6ICdFbGltaW5hIGNvbmp1bnQgZGUgZGFkZXMnXHJcbiAgfSxcclxuICBkYXRhc2V0SW5mbzoge1xyXG4gICAgcm93Q291bnQ6ICd7cm93Q291bnR9IGZpbGVzJ1xyXG4gIH0sXHJcbiAgdG9vbHRpcDoge1xyXG4gICAgaGlkZUxheWVyOiAnb2N1bHRhIGxhIGNhcGEnLFxyXG4gICAgc2hvd0xheWVyOiAnbW9zdHJhIGxhIGNhcGEnLFxyXG4gICAgaGlkZUZlYXR1cmU6IFwiQW1hZ2EgbCdvYmplY3RlXCIsXHJcbiAgICBzaG93RmVhdHVyZTogXCJNb3N0cmEgbCdvYmplY3RlXCIsXHJcbiAgICBoaWRlOiAnYW1hZ2EnLFxyXG4gICAgc2hvdzogJ21vc3RyYScsXHJcbiAgICByZW1vdmVMYXllcjogJ0VsaW1pbmEgY2FwYScsXHJcbiAgICBsYXllclNldHRpbmdzOiAnQ29uZmlndXJhY2nDsyBkZSBjYXBhJyxcclxuICAgIGNsb3NlUGFuZWw6ICdUYW5jYSBwYW5lbCBhY3R1YWwnLFxyXG4gICAgc3dpdGNoVG9EdWFsVmlldzogJ0NhbnZpYSBhIGxhIHZpc3RhIGRlIG1hcGEgZHVhbCcsXHJcbiAgICBzaG93TGVnZW5kOiAnbW9zdHJhIGxsZWdlbmRhJyxcclxuICAgIGRpc2FibGUzRE1hcDogJ0Rlc2FjdGl2YSBtYXBhIDNEJyxcclxuICAgIERyYXdPbk1hcDogJ0RpYnVpeGEgYWwgbWFwYScsXHJcbiAgICBzZWxlY3RMb2NhbGU6ICdTZWxlY2Npb25hIGNvbmZpZ3VyYWNpw7MgcmVnaW9uYWwnLFxyXG4gICAgaGlkZUxheWVyUGFuZWw6ICdPY3VsdGEgZWwgdGF1bGVyIGRlIGNhcGVzJyxcclxuICAgIHNob3dMYXllclBhbmVsOiAnTW9zdHJhIGVsIHRhdWxlciBkZSBjYXBlcycsXHJcbiAgICBtb3ZlVG9Ub3A6ICdEZXNwbGHDp2EgYSBkYWx0IGRlIHRvdCBkZSBsZXMgY2FwZXMgZGUgZGFkZXMnLFxyXG4gICAgc2VsZWN0QmFzZU1hcFN0eWxlOiAnU2VsZWNjaW9uYSBlc3RpbCBkZSBtYXBhIGJhc2UnLFxyXG4gICAgZGVsZXRlOiAnRXNib3JyYScsXHJcbiAgICB0aW1lUGxheWJhY2s6ICdSZXByb2R1Y2Npw7MgZGUgdGVtcHMnLFxyXG4gICAgY2xvdWRTdG9yYWdlOiAnRW1tYWdhdHplbWF0Z2UgYWwgbsO6dm9sJyxcclxuICAgICczRE1hcCc6ICdNYXBhIDNEJ1xyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgZXhwb3J0SW1hZ2U6ICdFeHBvcnRhIGltYXRnZScsXHJcbiAgICBleHBvcnREYXRhOiAnRXhwb3J0YSBkYWRlcycsXHJcbiAgICBleHBvcnRNYXA6ICdFeHBvcnRhIG1hcGEnLFxyXG4gICAgc2hhcmVNYXBVUkw6ICdDb21wYXJ0ZWl4IFVSTCBkZWwgbWFwYScsXHJcbiAgICBzYXZlTWFwOiAnRGVzYSBtYXBhJyxcclxuICAgIHNlbGVjdDogJ3NlbGVjY2lvbmEnLFxyXG4gICAgcG9seWdvbjogJ3BvbMOtZ29uJyxcclxuICAgIHJlY3RhbmdsZTogJ3JlY3RhbmdsZScsXHJcbiAgICBoaWRlOiAnYW1hZ2EnLFxyXG4gICAgc2hvdzogJ21vc3RyYScsXHJcbiAgICAuLi5MT0NBTEVTXHJcbiAgfSxcclxuICBtb2RhbDoge1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZGVsZXRlRGF0YXNldDogJ0VzYm9ycmEgY29uanVudCBkZSBkYWRlcycsXHJcbiAgICAgIGFkZERhdGFUb01hcDogJ0FmZWdlaXggZGFkZXMgYWwgbWFwYScsXHJcbiAgICAgIGV4cG9ydEltYWdlOiAnRXhwb3J0YSBpbWF0Z2UnLFxyXG4gICAgICBleHBvcnREYXRhOiAnRXhwb3J0YSBkYWRlcycsXHJcbiAgICAgIGV4cG9ydE1hcDogJ0V4cG9ydGEgbWFwYScsXHJcbiAgICAgIGFkZEN1c3RvbU1hcGJveFN0eWxlOiAnQWZlZ2VpeCBlc3RpbCBNYXBib3ggcHJvcGknLFxyXG4gICAgICBzYXZlTWFwOiAnRGVzYSBtYXBhJyxcclxuICAgICAgc2hhcmVVUkw6ICdDb21wYXJ0ZWl4IFVSTCdcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgZGVsZXRlOiAnRXNib3JyYScsXHJcbiAgICAgIGRvd25sb2FkOiAnRGVzY2FycmVnYScsXHJcbiAgICAgIGV4cG9ydDogJ0V4cG9ydGEnLFxyXG4gICAgICBhZGRTdHlsZTogJ0FmZWdlaXggZXN0aWwnLFxyXG4gICAgICBzYXZlOiAnRGVzYScsXHJcbiAgICAgIGRlZmF1bHRDYW5jZWw6ICdDYW5jZWzCt2xhJyxcclxuICAgICAgZGVmYXVsdENvbmZpcm06ICdDb25maXJtYSdcclxuICAgIH0sXHJcbiAgICBleHBvcnRJbWFnZToge1xyXG4gICAgICByYXRpb1RpdGxlOiAnUsOgdGlvJyxcclxuICAgICAgcmF0aW9EZXNjcmlwdGlvbjogJ0VzY3VsbCByw6B0aW8gcGVyIGRpdmVyc29zIHVzb3MuJyxcclxuICAgICAgcmF0aW9PcmlnaW5hbFNjcmVlbjogJ1BhbnRhbGxhIG9yaWdpbmFsJyxcclxuICAgICAgcmF0aW9DdXN0b206ICdQZXJzb25hbGl0emF0JyxcclxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxyXG4gICAgICByYXRpbzE2Xzk6ICcxNjo5JyxcclxuICAgICAgcmVzb2x1dGlvblRpdGxlOiAnUmVzb2x1Y2nDsycsXHJcbiAgICAgIHJlc29sdXRpb25EZXNjcmlwdGlvbjogJ0FsdGEgcmVzb2x1Y2nDsyDDqXMgbWlsbG9yIHBlciBhIGxlcyBpbXByZXNzaW9ucy4nLFxyXG4gICAgICBtYXBMZWdlbmRUaXRsZTogJ0xsZWdlbmRhIGRlbCBtYXBhJyxcclxuICAgICAgbWFwTGVnZW5kQWRkOiAnQWZlZ2lyIGxsZWdlbmRhIGFsIG1hcGEnXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0RGF0YToge1xyXG4gICAgICBkYXRhc2V0VGl0bGU6ICdDb25qdW50IGRlIGRhZGVzJyxcclxuICAgICAgZGF0YXNldFN1YnRpdGxlOiAnRXNjdWxsIGVscyBjb25qdW50cyBkZSBkYWRlcyBxdWUgdm9scyBleHBvcnRhcicsXHJcbiAgICAgIGFsbERhdGFzZXRzOiAnVG90cycsXHJcbiAgICAgIGRhdGFUeXBlVGl0bGU6ICdUaXB1cyBkZSBkYWRlcycsXHJcbiAgICAgIGRhdGFUeXBlU3VidGl0bGU6ICdFc2N1bGwgZWxzIHRpcHVzIGRlIGRhZGVzIHF1ZSB2b2xzIGV4cG9ydGFyJyxcclxuICAgICAgZmlsdGVyRGF0YVRpdGxlOiAnRmlsdHJhIGRhZGVzJyxcclxuICAgICAgZmlsdGVyRGF0YVN1YnRpdGxlOiAnUG90cyBlc2NvbGxpciBleHBvcnRhciBsZXMgZGFkZXMgb3JpZ2luYWxzIG8gbGVzIGZpbHRyYWRlcycsXHJcbiAgICAgIGZpbHRlcmVkRGF0YTogJ0RhZGVzIGZpbHRyYWRlcycsXHJcbiAgICAgIHVuZmlsdGVyZWREYXRhOiAnRGFkZXMgc2Vuc2UgZmlsdHJhcicsXHJcbiAgICAgIGZpbGVDb3VudDogJ3tmaWxlQ291bnR9IEFyeGl1cycsXHJcbiAgICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSBGaWxlcydcclxuICAgIH0sXHJcbiAgICBkZWxldGVEYXRhOiB7XHJcbiAgICAgIHdhcm5pbmc6IFwiZXN0w6BzIGEgcHVudCBkJ2VzYm9ycmFyIGFxdWVzdCBjb25qdW50IGRlIGRhZGVzLiBBZmVjdGFyw6Age2xlbmd0aH0gY2FwZXNcIlxyXG4gICAgfSxcclxuICAgIGFkZFN0eWxlOiB7XHJcbiAgICAgIHB1Ymxpc2hUaXRsZTogXCIxLiBQdWJsaWNhIGVsIHRldSBlc3RpbCBhIE1hcGJveCBvIHByb3BvcmNpb25hIGVsIHRva2VuIGQnYWNjw6lzXCIsXHJcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTE6ICdQb3RzIGNyZWFyIGVsIHRldSBwcm9waSBlc3RpbCBkZSBtYXBhIGEnLFxyXG4gICAgICBwdWJsaXNoU3VidGl0bGUyOiAnaScsXHJcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTM6ICdwdWJsaWNhcicsXHJcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTQ6ICdoby4nLFxyXG4gICAgICBwdWJsaXNoU3VidGl0bGU1OiAnUGVyIHV0aWxpdHphciB1biBlc3RpbCBwcml2YXQsIGVuZ2FueGEgZWwgdGV1JyxcclxuICAgICAgcHVibGlzaFN1YnRpdGxlNjogXCJ0b2tlbiBkJ2FjY8Opc1wiLFxyXG4gICAgICBwdWJsaXNoU3VidGl0bGU3OlxyXG4gICAgICAgICdhcXXDrS4gKmtlcGxlci5nbCDDqXMgdW5hIGFwbGljYWNpw7MgY2xpZW50LCBsZXMgZGFkZXMgcm9tYW5lbiBhbCB0ZXUgbmF2ZWdhZG9yLi4nLFxyXG4gICAgICBleGFtcGxlVG9rZW46ICdwLmV4LiBway5hYmNkZWZnLnh4eHh4eCcsXHJcbiAgICAgIHBhc3RlVGl0bGU6IFwiMi4gRW5nYW54YSBsYSBVUkwgZGUgbCdlc3RpbFwiLFxyXG4gICAgICBwYXN0ZVN1YnRpdGxlMTogJ1F1w6ggw6lzIHVuJyxcclxuICAgICAgcGFzdGVTdWJ0aXRsZTI6IFwiVVJMIGRlIGwnZXN0aWxcIixcclxuICAgICAgbmFtaW5nVGl0bGU6ICczLiBQb3NhIG5vbSBhbCB0ZXUgZXN0aWwnXHJcbiAgICB9LFxyXG4gICAgc2hhcmVNYXA6IHtcclxuICAgICAgc2hhcmVVcmlUaXRsZTogJ0NvbXBhcnRlaXggVVJMIGRlbCBtYXBhJyxcclxuICAgICAgc2hhcmVVcmlTdWJ0aXRsZTogJ0dlbmVyYSB1bmEgVVJMIGRlbCBtYXBhIHBlciBjb21wYXJ0aXIgYW1iIGFsdHJpJyxcclxuICAgICAgY2xvdWRUaXRsZTogJ0VtbWFnYXR6ZW1hdGdlIGFsIG7DunZvbCcsXHJcbiAgICAgIGNsb3VkU3VidGl0bGU6ICdBY2NlZGVpeCBpIGNhcnJlZ2EgZGFkZXMgZGUgbWFwYSBhbCB0ZXUgZW1tYWdhdHplbWF0Z2UgYWwgbsO6dm9sIHBlcnNvbmFsJyxcclxuICAgICAgc2hhcmVEaXNjbGFpbWVyOlxyXG4gICAgICAgICdrZXBsZXIuZ2wgZGVzYXLDoCBsZXMgZGFkZXMgZGVsIG1hcGEgYWwgdGV1IGVtbWFnYXR6ZW1hdGdlIGFsIG7DunZvbCBwZXJzb25hbCwgbm9tw6lzIHF1aSB0aW5ndWkgbGEgVVJMIHBvZHLDoCBhY2NlZGlyIGFsIG1hcGEgaSBhIGxlcyBkYWRlcyAuICcgK1xyXG4gICAgICAgIFwiUG90cyBlZGl0YXIvZXNib3JyYXIgbCdhcnhpdSBkZSBkYWRlcyBlbiBlbCB0ZXUgY29tcHRlIGFsIG7DunZvbCBlbiBxdWFsc2V2b2wgbW9tZW50LlwiLFxyXG4gICAgICBnb3RvUGFnZTogJ1ZlcyBhIGxhIHDDoGdpbmEgZGUge2N1cnJlbnRQcm92aWRlcn0gZGUgS2VwbGVyLmdsJ1xyXG4gICAgfSxcclxuICAgIHN0YXR1c1BhbmVsOiB7XHJcbiAgICAgIG1hcFVwbG9hZGluZzogJ0NhcnJlZ2FyIHVuIG1hcGEnLFxyXG4gICAgICBlcnJvcjogJ0Vycm9yJ1xyXG4gICAgfSxcclxuICAgIHNhdmVNYXA6IHtcclxuICAgICAgdGl0bGU6ICdFbW1hZ2F0emVtYXRnZSBhbCBuw7p2b2wnLFxyXG4gICAgICBzdWJ0aXRsZTogJ0FjY2VkZWl4IHBlciBkZXNhciBlbCBtYXBhIGFsIHRldSBlbW1hZ2F0emVtYXRnZSBhbCBuw7p2b2wnXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0TWFwOiB7XHJcbiAgICAgIGZvcm1hdFRpdGxlOiAnRm9ybWF0IGRlIG1hcGEnLFxyXG4gICAgICBmb3JtYXRTdWJ0aXRsZTogJ0VzY3VsbCBlbCBmb3JtYXQgYW1iIHF1w6ggdm9scyBleHBvcnRhciBlbCB0ZXUgbWFwYScsXHJcbiAgICAgIGh0bWw6IHtcclxuICAgICAgICBzZWxlY3Rpb246ICdFeHBvcnRhIGVsIHRldSBtYXBhIGNvbSB1biBhcnhpdSBIVE1MIGludGVyYWN0aXUuJyxcclxuICAgICAgICB0b2tlblRpdGxlOiBcIlRva2VuIGQnYWNjw6lzIGRlIE1hcGJveFwiLFxyXG4gICAgICAgIHRva2VuU3VidGl0bGU6IFwiVXRpbGl0emEgZWwgdGV1IHRva2VuIGQnYWNjw6lzIGRlIE1hcGJveCBhIGwnYXJ4aXUgSFRNTCAob3BjaW9uYWwpXCIsXHJcbiAgICAgICAgdG9rZW5QbGFjZWhvbGRlcjogXCJFbmdhbnhhIGVsIHRldSB0b2tlbiBkJ2FjY8OpcyBhIE1hcGJveFwiLFxyXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcclxuICAgICAgICAgICcqIFNpIG5vIHByb3BvcmNpb25lcyBlbCB0ZXUgcHJvcGkgdG9rZW4sIGVsIG1hcGEgcG9kcmlhIGZhbGxhciBlbiBxdWFsc2V2b2wgbW9tZW50IHF1YW4gcmVlbXBsYWNlbSBlbCBub3N0cmUgdG9rZW4gcGVyIGV2aXRhciBhYnVzb3MuICcsXHJcbiAgICAgICAgdG9rZW5EaXNjbGFpbWVyOlxyXG4gICAgICAgICAgJ1BvdHMgY2FudmlhciBlbCB0b2tlIGRlIE1hcGJveCBtw6lzIGVuZGF2YW50IGZlbnQgc2VydmlyIGFxdWVzdGVzIGluc3RydWNjaW9uczogJyxcclxuICAgICAgICB0b2tlblVwZGF0ZTogJ0NvbSBhY3R1YWxpdHphciB1biB0b2tlbiBwcmVleGlzdGVudC4nLFxyXG4gICAgICAgIG1vZGVUaXRsZTogJ01vZGUgbWFwYScsXHJcbiAgICAgICAgbW9kZVN1YnRpdGxlMTogJ1NlbGVjY2lvbmEgbW9kZSBhcHAuIE3DqXMgJyxcclxuICAgICAgICBtb2RlU3VidGl0bGUyOiAnaW5mb3JtYWNpw7MnLFxyXG4gICAgICAgIG1vZGVEZXNjcmlwdGlvbjogJ1Blcm1ldCBhbHMgdXN1YXJpcyB7bW9kZX0gZWwgbWFwYScsXHJcbiAgICAgICAgcmVhZDogJ2xsZWdpcicsXHJcbiAgICAgICAgZWRpdDogJ2VkaXRhcidcclxuICAgICAgfSxcclxuICAgICAganNvbjoge1xyXG4gICAgICAgIGNvbmZpZ1RpdGxlOiAnQ29uZmlndXJhY2nDsyBkZWwgbWFwYScsXHJcbiAgICAgICAgY29uZmlnRGlzY2xhaW1lcjpcclxuICAgICAgICAgIFwiTGEgY29uZmlndXJhY2nDsyBkZWwgbWFwYSBzJ2luY2xvdXLDoCBhIGwnYXJ4aXUgSnNvbi4gU2kgdXRpbGl0emVzIGtlcGxlci5nbCBhIGxhIHRldmEgcHLDsnBpYSBhcHAgcG90cyBjb3BpYXIgYXF1ZXN0YSBjb25maWd1cmFjacOzIGkgcGFzc2FyLWxhIGEgIFwiLFxyXG4gICAgICAgIHNlbGVjdGlvbjpcclxuICAgICAgICAgICdFeHBvcnRhIGxlcyBkYWRlcyBkZWwgbWFwYSBpIGxhIGNvbmZpZ3VyYWNpw7MgZW4gdW4gc29sIGFyeGl1IEpzb24uIE3DqXMgZW5kYXZhbnQgcG90cyBvYnJpciBhcXVlc3QgbWF0ZWl4IG1hcGEgY2FycmVnYW50IGFxdWVzdCBtYXRlaXggYXJ4aXUgYSBrZXBsZXIuZ2wuJyxcclxuICAgICAgICBkaXNjbGFpbWVyOlxyXG4gICAgICAgICAgXCIqIExhIGNvbmZpZ3VyYWNpw7MgZGVsIG1hcGEgZXMgY29tYmluYSBhbWIgZWxzIGNvbmp1bnRzIGRlIGRhZGVzIGNhcnJlZ2F0cy4g4oCYZGF0YUlk4oCZIHMndXRpbGl0emEgcGVyIGxsaWdhciBjYXBlcywgZmlsdHJlcyBpIHN1Z2dlcmltZW50cyBhIHVuIGNvbmp1bnQgZGUgZGFkZXMgZXNwZWPDrWZpYy4gXCIgK1xyXG4gICAgICAgICAgXCJRdWFuIHBhc3NpcyBhcXVlc3RhIGNvbmZpZ3VyYWNpw7MgYSBhZGREYXRhVG9NYXAsIGFzc2VndXJhIHF1ZSBsJ2lkZW50aWZpY2Fkb3IgZGVsIGNvbmp1bnQgZGUgZGFkZXMgY29pbmNpZGVpeGkgYW1iIGVscyDigJhkYXRhSWTigJkgZCdhcXVlc3RhIGNvbmZpZ3VyYWNpw7MuXCJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxvYWRpbmdEaWFsb2c6IHtcclxuICAgICAgbG9hZGluZzogJ0NhcnJlZ2FudC4uLidcclxuICAgIH0sXHJcbiAgICBsb2FkRGF0YToge1xyXG4gICAgICB1cGxvYWQ6ICdDYXJyZWdhciBhcnhpdXMnLFxyXG4gICAgICBzdG9yYWdlOiBcIkNhcnJlZ2FyIGRlcyBkJ2VtbWFnYXR6ZW1hdGdlXCJcclxuICAgIH0sXHJcbiAgICB0cmlwSW5mbzoge1xyXG4gICAgICB0aXRsZTogJ0NvbSBoYWJpbGl0YXIgbOKAmWFuaW1hY2nDsyBkZSB2aWF0Z2UnLFxyXG4gICAgICBkZXNjcmlwdGlvbjE6XHJcbiAgICAgICAgJ1BlciBhbmltYXIgbGEgcnV0YSwgbGVzIGRhZGVzIGdlb0pTT04gaGFuIGRlIGNvbnRlbmlyIGBMaW5lU3RyaW5nYCBlbiBsYSBzZXZhIGdlb21ldHJpYSBpIGxlcyBjb29yZGVuYWRlcyBkZSBMaW5lU3RyaW5nIGhhbiBkZSB0ZW5pciA0IGVsZW1lbnRzIGVuIGVscyBmb3JtYXRzIGRlICcsXHJcbiAgICAgIGNvZGU6ICcgW2xvbmdpdHVkZSwgbGF0aXR1ZGUsIGFsdGl0dWRlLCB0aW1lc3RhbXBdICcsXHJcbiAgICAgIGRlc2NyaXB0aW9uMjpcclxuICAgICAgICAnaSBlbCBkYXJyZXIgZWxlbWVudCBoYSBkZSBzZXIgbGEgbWFyY2EgZGUgdGVtcHMuIEVscyBmb3JtYXRzIHbDoGxpZHMgcGVyIGEgbGEgbWFyY2EgZGUgdGVtcHMgaW5jbG91ZW4gVW5peCBlbiBzZWdvbnMgY29tIGAxNTY0MTg0MzYzYCBvIGVuIG1pbGlzZWdvbnMgY29tIGAxNTY0MTg0MzYzMDAwYC4nLFxyXG4gICAgICBleGFtcGxlOiAnRXhlbXBsZTonXHJcbiAgICB9LFxyXG4gICAgaWNvbkluZm86IHtcclxuICAgICAgdGl0bGU6ICdDb20gZGlidWl4YXIgaWNvbmVzJyxcclxuICAgICAgZGVzY3JpcHRpb24xOlxyXG4gICAgICAgIFwiRW4gZWwgdGV1IENTViBjcmVhIHVuYSBjb2x1bW5hIGkgcG9zYS1oaSBlbCBub20gZGUgbGEgaWNvbmEgcXVlIHZvbHMgZGlidWl4YXIuIFBvdHMgZGVpeGFyIGxhIGNlbMK3bGEgYnVpZGEgcXVhbiBubyB2dWxndWlzIHF1ZSBlcyBtb3N0cmkgcGVyIGEgY2VydHMgcHVudHMuIFF1YW4gbGEgY29sdW1uYSBzJ2Fub21lbmFcIixcclxuICAgICAgY29kZTogJ2ljb24nLFxyXG4gICAgICBkZXNjcmlwdGlvbjI6IFwiIGtlcGxlci5nbCBhdXRvbcOgdGljYW1lbnQgY3JlYXLDoCB1bmEgY2FwYSBkJ2ljb25hLlwiLFxyXG4gICAgICBleGFtcGxlOiAnRXhlbXBsZTonLFxyXG4gICAgICBpY29uczogJ0ljb25lcydcclxuICAgIH0sXHJcbiAgICBzdG9yYWdlTWFwVmlld2VyOiB7XHJcbiAgICAgIGxhc3RNb2RpZmllZDogJ0RhcnJlcmEgbW9kaWZpY2FjacOzIGZhIHtsYXN0VXBkYXRlZH0nLFxyXG4gICAgICBiYWNrOiAnRW5yZXJlJ1xyXG4gICAgfSxcclxuICAgIG92ZXJ3cml0ZU1hcDoge1xyXG4gICAgICB0aXRsZTogJ0Rlc2FudCBtYXBhLi4uJyxcclxuICAgICAgYWxyZWFkeUV4aXN0czogJ2phIGV4aXN0ZWl4IGEge21hcFNhdmVkfS4gRWwgdm9scyBzb2JyZWVzY3JpdXJlPydcclxuICAgIH0sXHJcbiAgICBsb2FkU3RvcmFnZU1hcDoge1xyXG4gICAgICBiYWNrOiAnRW5yZXJlJyxcclxuICAgICAgZ29Ub1BhZ2U6ICdWZXMgYSBsYSBww6BnaW5hIHtkaXNwbGF5TmFtZX0gZGUgS2VwbGVyLmdsJyxcclxuICAgICAgc3RvcmFnZU1hcHM6ICdFbW1hZ2F0emVtYXRnZSAvIE1hcGVzJyxcclxuICAgICAgbm9TYXZlZE1hcHM6ICdDYXAgbWFwYSBkZXNhdCBlbmNhcmEnXHJcbiAgICB9XHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIHZpc2libGVMYXllcnM6ICdDYXBlcyB2aXNpYmxlcycsXHJcbiAgICBsYXllckxlZ2VuZDogJ0xsZWdlbmRhIGRlIGNhcGVzJ1xyXG4gIH0sXHJcbiAgaW50ZXJhY3Rpb25zOiB7XHJcbiAgICB0b29sdGlwOiAnU3VnZ2VyaW1lbnQnLFxyXG4gICAgYnJ1c2g6ICdQaW56ZWxsJyxcclxuICAgIGNvb3JkaW5hdGU6ICdDb29yZGVuYWRlcydcclxuICB9LFxyXG4gIGxheWVyQmxlbmRpbmc6IHtcclxuICAgIHRpdGxlOiAnQ29tYmluYWNpw7MgZGUgY2FwZXMnLFxyXG4gICAgYWRkaXRpdmU6ICdhZGRpdGl2YScsXHJcbiAgICBub3JtYWw6ICdub3JtYWwnLFxyXG4gICAgc3VidHJhY3RpdmU6ICdzdWJzdHJhY3RpdmEnXHJcbiAgfSxcclxuICBjb2x1bW5zOiB7XHJcbiAgICB0aXRsZTogJ0NvbHVtbmVzJyxcclxuICAgIGxhdDogJ2xhdCcsXHJcbiAgICBsbmc6ICdsb24nLFxyXG4gICAgYWx0aXR1ZGU6ICdhbMOnYWRhJyxcclxuICAgIGljb246ICdpY29uYScsXHJcbiAgICBnZW9qc29uOiAnZ2VvanNvbicsXHJcbiAgICBhcmM6IHtcclxuICAgICAgbGF0MDogJ2xhdCBvcmlnZW4nLFxyXG4gICAgICBsbmcwOiAnbG5nIG9yaWdlbiAnLFxyXG4gICAgICBsYXQxOiAnbGF0IGRlc3RpbmFjacOzJyxcclxuICAgICAgbG5nMTogJ2xuZyBkZXN0aW5hY2nDsydcclxuICAgIH0sXHJcbiAgICBncmlkOiB7XHJcbiAgICAgIHdvcmxkVW5pdFNpemU6ICdNaWRhIGRlIG1hbGxhIChrbSknXHJcbiAgICB9LFxyXG4gICAgaGV4YWdvbjoge1xyXG4gICAgICB3b3JsZFVuaXRTaXplOiBcIlJhZGkgZCdoZXjDoGdvbiAoa20pXCJcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbG9yOiB7XHJcbiAgICBjdXN0b21QYWxldHRlOiAnUGFsZXRhIHBlcnNvbmFsaXR6YWRhJyxcclxuICAgIHN0ZXBzOiAnaW50ZXJ2YWxzJyxcclxuICAgIHR5cGU6ICd0aXB1cycsXHJcbiAgICByZXZlcnNlZDogJ2ludmVydGlkYSdcclxuICB9LFxyXG4gIHNjYWxlOiB7XHJcbiAgICBjb2xvclNjYWxlOiAnRXNjYWxhIGRlIGNvbG9yJyxcclxuICAgIHNpemVTY2FsZTogJ0VzY2FsYSBkZSBtaWRlcycsXHJcbiAgICBzdHJva2VTY2FsZTogJ0VzY2FsYSBkZSB0cmHDpycsXHJcbiAgICBzY2FsZTogJ0VzY2FsYSdcclxuICB9LFxyXG4gIGZpbGVVcGxvYWRlcjoge1xyXG4gICAgbWVzc2FnZTogXCJBcnJvc3NlZ2EgaSBkZWl4YSBhbmFyIGwnYXJ4aXUgYXF1w61cIixcclxuICAgIGNocm9tZU1lc3NhZ2U6XHJcbiAgICAgICcqdXN1YXJpIGRlIENocm9tZTogbGEgbWlkYSBtw6B4aW1hIHPDs24gMjUwbWIsIHNpIGhhcyBkZSBjYXJyZ2FyIHVuIGFyeGl1IG3DqXMgZ3JhbiBmZXMgc2VydmlyIFNhZmFyaScsXHJcbiAgICBkaXNjbGFpbWVyOlxyXG4gICAgICAnKmtlcGxlci5nbCDDqXMgdW5hIGFwbGljYWNpw7MgYSBsYSBiYW5kYSBjbGllbnQgcXVlIG5vIGVzIHJlY29semEgZW4gY2FwIHNlcnZpZG9yLiBMZXMgZGFkZXMgbm9tw6lzIGV4aXN0ZWl4ZW4gYSBsYSB0ZXZhIG3DoHF1aW5hL25hdmVnYWRvci4gJyArXHJcbiAgICAgIFwiTm8gcydlbnZpZW4gZGFkZXMgbmkgbWFwZXMgYSBjYXAgc2Vydmlkb3IuXCIsXHJcbiAgICBjb25maWdVcGxvYWRNZXNzYWdlOlxyXG4gICAgICAnQ2FycmVnYSAqKkNTVioqLCAqKkdlb0pzb24qKiBvIHVuIG1hcGEgZGVzYXQgZW4gKipKc29uKiouIE3DqXMgaW5mb3JtYWNpw7Mgc29icmUgWyoqc3VwcG9ydGVkIGZpbGUgZm9ybWF0cyoqXScsXHJcbiAgICBicm93c2VGaWxlczogJ25hdmVnYSBwZWxzIHRldXMgYXJ4aXVzJyxcclxuICAgIHVwbG9hZGluZzogJ0NhcnJlZ2FudCcsXHJcbiAgICBmaWxlTm90U3VwcG9ydGVkOiBcIkwnYXJ4aXUge2Vycm9yRmlsZXN9IG5vIMOpcyBjb21wYXRpYmxlLlwiLFxyXG4gICAgb3I6ICdvJ1xyXG4gIH0sXHJcbiAgZGVuc2l0eTogJ2RlbnNpdGF0JyxcclxuICAnQnVnIFJlcG9ydCc6IFwiSW5mb3JtZSBkJ2Vycm9yc1wiLFxyXG4gICdVc2VyIEd1aWRlJzogXCJHdWlhIGQndXN1YXJpXCIsXHJcbiAgU2F2ZTogJ0Rlc2EnLFxyXG4gIFNoYXJlOiAnQ29tcGFydGVpeCdcclxufTtcclxuIl19