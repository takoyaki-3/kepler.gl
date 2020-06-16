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
    weight: 'painotus',
    label: 'nimiö',
    fillColor: 'täyttöväri',
    color: 'väri',
    strokeColor: 'viivan väri',
    radius: 'säde',
    outline: 'ääriviiva',
    stroke: 'viiva',
    density: 'tiheys',
    coverage: 'kattavuus',
    sum: 'summa',
    pointCount: 'pisteiden lukumäärä'
  },
  placeholder: {
    search: 'Etsi',
    selectField: 'Valitse kenttä',
    yAxis: 'Y-akseli',
    selectType: 'Valitse tyyppi',
    selectValue: 'Valitse arvo',
    enterValue: 'Anna arvo',
    empty: 'tyhjä'
  },
  misc: {
    by: '',
    valuesIn: 'Arvot joukossa:',
    valueEquals: 'Arvo on yhtäsuuri kuin',
    dataSource: 'Aineistolähde',
    brushRadius: 'Harjan säde (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Kartan tasot',
    label: 'Nimiöt',
    road: 'Tiet',
    border: 'Rajat',
    building: 'Rakennukset',
    water: 'Vesi',
    land: 'Maa',
    '3dBuilding': '3d-rakennukset'
  },
  panel: {
    text: {
      label: 'Nimiö',
      labelWithId: 'Nimiö {labelId}',
      fontSize: 'Fontin koko',
      fontColor: 'Fontin väri',
      textAnchor: 'Tekstin ankkuri',
      alignment: 'Sijoittelu',
      addMoreLabel: 'Lisää uusia nimiöitä'
    }
  },
  sidebar: {
    panels: {
      layer: 'Tasot',
      filter: 'Suodattimet',
      interaction: 'Interaktiot',
      basemap: 'Taustakartta'
    }
  },
  layer: {
    required: 'Pakollinen*',
    radius: 'Säde',
    weight: 'Painotus',
    propertyBasedOn: '{property} perustuen arvoon',
    color: 'Väri',
    fillColor: 'Täytön väri',
    outline: 'ääriviiva',
    coverage: 'Kattavuus',
    stroke: 'Viiva',
    strokeWidth: 'Viivan paksuus',
    strokeColor: 'Viivan väri',
    basic: 'Perus',
    trailLength: 'Jäljen pituus',
    trailLengthDescription: 'Jäljen kesto sekunteina, ennenkuin se himmenee näkyvistä',
    newLayer: 'uusi taso',
    elevationByDescription: 'Kun asetus on pois päältä, korkeus perustuu pisteiden määrään',
    colorByDescription: 'Kun asetus on pois päältä, väri perustuu pisteiden määrään',
    aggregateBy: 'Aggregoi kenttä {field} by',
    '3DModel': '3D-malli',
    '3DModelOptions': '3D-mallin asetukset',
    type: {
      point: 'piste',
      arc: 'kaari',
      line: 'viiva',
      grid: 'ruudukko',
      hexbin: 'hexbin',
      polygon: 'polygoni',
      geojson: 'geojson',
      cluster: 'klusteri',
      icon: 'kuva',
      heatmap: 'lämpökartta',
      hexagon: 'kuusikulmio',
      hexagonid: 'H3',
      trip: 'matka',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    strokeWidth: 'Viivan paksuus',
    strokeWidthRange: 'Viivan paksuuden rajat',
    radius: 'Säde',
    fixedRadius: 'Vakiosäde metreinä',
    fixedRadiusDescription: 'Kartan säde absoluuttiseksi säteeksi metreinä, esim. 5 -> 5 metriin',
    radiusRange: 'Säteen rajat',
    clusterRadius: 'Klusterien säde pikseleinä',
    radiusRangePixels: 'Säteen rajat pikseleinä',
    opacity: 'Läpinäkyvyys',
    coverage: 'Kattavuus',
    outline: 'Ääriviiva',
    colorRange: 'Värien rajat',
    stroke: 'Viiva',
    strokeColor: 'Viivan väri',
    strokeColorRange: 'Viivan värin rajat',
    targetColor: 'Kohteen väri',
    colorAggregation: 'Värien aggregointi',
    heightAggregation: 'Korkeuden aggregointi',
    resolutionRange: 'Resoluution rajat',
    sizeScale: 'Koon skaala',
    worldUnitSize: 'Yksikkö',
    elevationScale: 'Korottamisen skaala',
    heightScale: 'Korkeuden skaala',
    coverageRange: 'Peittävyyden rajat',
    highPrecisionRendering: 'Tarkka renderöinti',
    highPrecisionRenderingDescription: 'Tarkka renderöinti johtaa hitaampaan suorittamiseen',
    height: 'Korkeus',
    heightDescription: 'Klikkaa oikeasta ylänurkasta nappia vaihtaaksesi 3D-näkymään',
    fill: 'Täyttö',
    enablePolygonHeight: 'Salli polygonien korkeus',
    showWireframe: 'Näytä rautalankamalli',
    weightIntensity: 'Painotuksen intensiteetti',
    zoomScale: 'Zoomausskaala',
    heightRange: 'Korkeuden rajat'
  },
  layerManager: {
    addData: 'Lisää aineisto',
    addLayer: 'Lisää taso',
    layerBlending: 'Tasojen sekoittuvuus'
  },
  mapManager: {
    mapStyle: 'Kartan tyyli',
    addMapStyle: 'Lisää tyyli kartalle',
    '3dBuildingColor': '3D-rakennusten väri'
  },
  layerConfiguration: {
    defaultDescription: 'Laske suureen {property} arvo valitun kentän perusteella',
    howTo: 'Miten toimii'
  },
  filterManager: {
    addFilter: 'Lisää suodatin'
  },
  datasetTitle: {
    showDataTable: 'Näytä attribuuttitaulu',
    removeDataset: 'Poista aineisto'
  },
  datasetInfo: {
    rowCount: '{rowCount} riviä'
  },
  tooltip: {
    hideLayer: 'Piilota taso',
    showLayer: 'Näytä taso',
    hideFeature: 'Piilota kohde',
    showFeature: 'Näytä kohde',
    hide: 'piilota',
    show: 'näytä',
    removeLayer: 'Poista taso',
    layerSettings: 'Tason asetukset',
    closePanel: 'Sulje paneeli',
    switchToDualView: 'Vaihda kaksoiskarrtanäkymään',
    showLegend: 'Näytä selite',
    disable3DMap: 'Poistu 3D-näkymästä',
    DrawOnMap: 'Piirrä kartalle',
    selectLocale: 'Valitse kielisyys',
    hideLayerPanel: 'Piilota tasopaneeli',
    showLayerPanel: 'Näytä tasopaneeli',
    moveToTop: 'Siirrä tasojen päällimmäiseksi',
    selectBaseMapStyle: 'Valitse taustakarttatyyli',
    "delete": 'Poista',
    timePlayback: 'Ajan animointi',
    cloudStorage: 'Pilvitallennus',
    '3DMap': '3D-näkymä'
  },
  toolbar: _objectSpread({
    exportImage: 'Vie kuva',
    exportData: 'Vie aineistot',
    exportMap: 'Vie kartta',
    shareMapURL: 'Jaa kartan URL',
    saveMap: 'Tallenna kartta',
    select: 'valitse',
    polygon: 'polygoni',
    rectangle: 'nelikulmio',
    hide: 'piilota',
    show: 'näytä'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Poista aineisto',
      addDataToMap: 'Lisää aineistoja kartalle',
      exportImage: 'Vie kuva',
      exportData: 'Vie aineistot',
      exportMap: 'Vie kartta',
      addCustomMapboxStyle: 'Lisää oma Mapbox-tyyli',
      saveMap: 'Tallenna kartta',
      shareURL: 'Jaa URL'
    },
    button: {
      "delete": 'Poista',
      download: 'Lataa',
      "export": 'Vie',
      addStyle: 'Lisää tyyli',
      save: 'Tallenna',
      defaultCancel: 'Peru',
      defaultConfirm: 'Vahvista'
    },
    exportImage: {
      ratioTitle: 'Kuvasuhde',
      ratioDescription: 'Valitse sopiva kuvasuhde käyttötapaustasi varten.',
      ratioOriginalScreen: 'Alkuperäinen näyttö',
      ratioCustom: 'Kustomoitu',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resoluutio',
      resolutionDescription: 'Korkea resoluutio on parempi tulostamista varten.',
      mapLegendTitle: 'Kartan selite',
      mapLegendAdd: 'Lisää selite karttaan'
    },
    exportData: {
      datasetTitle: 'Aineistot',
      datasetSubtitle: 'Valitse aineisto, jonka aiot viedä',
      allDatasets: 'Kaikki',
      dataTypeTitle: 'Aineistojen formaatti',
      dataTypeSubtitle: 'Valitse aineistoformaatti valitsemillesi aineistoille',
      filterDataTitle: 'Suodata aineistoja',
      filterDataSubtitle: 'Voit viedä joko alkuperäiset aineistot tai suodatetut aineistot',
      filteredData: 'Suodatetut aineistot',
      unfilteredData: 'Suodattamattomat aineistot',
      fileCount: '{fileCount} tiedostoa',
      rowCount: '{rowCount} riviä'
    },
    deleteData: {
      warning: 'aiot poistaa tämän aineiston. Aineostoa käyttävien tasojen lukumäärä: {length}'
    },
    addStyle: {
      publishTitle: '1. Julkaise tyylisi Mapboxissa tai anna tunniste',
      publishSubtitle1: 'Voit luoda oman karttatyylisi sivulla',
      publishSubtitle2: 'ja',
      publishSubtitle3: 'julkaista',
      publishSubtitle4: 'sen.',
      publishSubtitle5: 'Käyttääksesi yksityistä tyyliä, liitä',
      publishSubtitle6: 'tunnisteesi',
      publishSubtitle7: 'tänne. *kepler.gl on client-side sovellus, data pysyy vain selaimessasi...',
      exampleToken: 'esim. pk.abcdefg.xxxxxx',
      pasteTitle: '2. Liitä tyyli-URL',
      pasteSubtitle1: 'Mikä on',
      pasteSubtitle2: 'tyyli-URL?',
      namingTitle: '3. Nimeä tyylisi'
    },
    shareMap: {
      shareUriTitle: 'Jaa kartan URL',
      shareUriSubtitle: 'Luo kartalle URL, jonka voit jakaa muiden kanssa',
      cloudTitle: 'Pilvitallennus',
      cloudSubtitle: 'Kirjaudu sisään ja lataa kartta ja aineistot henkilökohtaiseen pilvipalveluun',
      shareDisclaimer: 'kepler.gl tallentaa kartan datan henkilökohtaiseen pilvitallennustilaasi, vain ihmiset, joilla on URL, voivat päästä käsiksi karttaan ja aineistoihin. ' + 'Voit muokata tiedostoja tai poistaa ne pilvipalvelustasi milloin vain.',
      gotoPage: 'Mene Kepler.gl {currentProvider} sivullesi'
    },
    statusPanel: {
      mapUploading: 'Karttaa ladataan',
      error: 'Virhe'
    },
    saveMap: {
      title: 'Pilvitallennus',
      subtitle: 'Kirjaudu sisään pilvipalveluusi tallentaaksesi kartan'
    },
    exportMap: {
      formatTitle: 'Kartan formaatti',
      formatSubtitle: 'Valitse formaatti, jossa viet kartan',
      html: {
        selection: 'Vie kartta interaktiivisena html-tiedostona',
        tokenTitle: 'Mapbox-tunniste',
        tokenSubtitle: 'Käytä omaa Mapbox-tunnistettasi html-tiedostossa (valinnainen)',
        tokenPlaceholder: 'Liitä Mapbox-tunnisteesi',
        tokenMisuseWarning: '* Jos et käytä omaa tunnistettasi, kartta voi lakata toimimasta milloin vain kun vaihdamme omaa tunnistettamme väärinkäytön estämiseksi. ',
        tokenDisclaimer: 'Voit vaihtaa Mapbox-tunnisteesi näiden ohjeiden avulla: ',
        tokenUpdate: 'Kuinka vaihtaa olemassaoleva Mapbox-tunniste',
        modeTitle: 'Kartan tila',
        modeSubtitle1: 'Valitse kartan tila.',
        modeSubtitle2: 'Lisätietoja',
        modeDescription: 'Anna käyttäjien {mode} karttaa',
        read: 'lukea',
        edit: 'muokata'
      },
      json: {
        configTitle: 'Kartan asetukset',
        configDisclaimer: 'Kartan asetukset sisältyvät Json-tiedostoon. Jos käytät kirjastoa kepler.gl omassa sovelluksessasi. Voit kopioida asetukset ja antaa ne funktiolle: ',
        selection: 'Vie kyseisen kartan aineistot ja asetukset yhdessä json-tiedostossa. Voit myöhemmin avata saman kartan lataamalla tiedoston kepler.gl:n',
        disclaimer: '* Kartan asetukset ovat sidoksissa ladattuihin aineistoihin. Arvoa ‘dataId’ käytetään tasojen, suodattimien ja vihjeiden liittämiseksi tiettyyn aineistoon. ' + 'Varmista, että aineiston dataId:t vastaavat asetusten arvoja jos lataat asetukset käyttäen `addDataToMap`-funktiolle.'
      }
    },
    loadingDialog: {
      loading: 'Ladataan...'
    },
    loadData: {
      upload: 'Lataa tiedostot',
      storage: 'Lataa tallennustilasta'
    },
    tripInfo: {
      title: 'Kuinka käyttää matka-animaatiota',
      description1: 'Reitin animoimiseksi geoJSON-aineiston täytyy olla geometriatyypiltään `LineString`, LineString-koordinaattien täytyy sisältää 4 elementtiä formaatissa:',
      code: ' [pituusaste, leveysaste, korkeus, aikaleima] ',
      description2: 'siten, että viimeinen elementti on aikaleima. Aikaleima voi olla muodoltaan unix-sekunteja, kuten `1564184363` tai millisekunteja, kuten `1564184363000`.',
      example: 'Esimerkki:'
    },
    iconInfo: {
      title: 'Miten piirtää kuvia',
      description1: 'csv-tiedostossasi, luo sarake nimeltä icon. Voit jättää sen tyhjäksi jos et halua piirtää kuvaa joillain pisteillä. Kun sarakkeen nimi on ',
      code: 'icon',
      description2: ' kepler.gl luo automaattisesti kuvatason sinua varten.',
      example: 'Esimerkki:',
      icons: 'Kuvat'
    },
    storageMapViewer: {
      lastModified: 'Viimeksi muokattu {lastUpdated} sitten',
      back: 'Takaisin'
    },
    overwriteMap: {
      title: 'Tallennetaan karttaa...',
      alreadyExists: 'on jo {mapSaved}:ssa. Haluatko ylikirjoittaa sen?'
    },
    loadStorageMap: {
      back: 'Takaisin',
      goToPage: 'Mene Kepler.gl {displayName} sivullesi',
      storageMaps: 'Tallennus / Kartat',
      noSavedMaps: 'Ei tallennettuja karttoja vielä'
    }
  },
  header: {
    visibleLayers: 'Näkyvissä olevat tasot',
    layerLegend: 'Tason selite'
  },
  interactions: {
    tooltip: 'Vihje',
    brush: 'Harja',
    coordinate: 'Koordinaatit'
  },
  layerBlending: {
    title: 'Tasojen sekoittuvuus',
    additive: 'lisäävä',
    normal: 'normaali',
    subtractive: 'vähentävä'
  },
  columns: {
    title: 'Sarakkeet',
    lat: 'lat',
    lng: 'lng',
    altitude: 'korkeus',
    icon: 'kuva',
    geojson: 'geojson',
    arc: {
      lat0: 'lähdön lat',
      lng0: 'lähdön lng',
      lat1: 'kohteen lat',
      lng1: 'kohteen lng'
    },
    grid: {
      worldUnitSize: 'Ruutujen koko (km)'
    },
    hexagon: {
      worldUnitSize: 'Hexagonien säde (km)'
    }
  },
  color: {
    customPalette: 'Mukautettu paletti',
    steps: 'askeleet',
    type: 'tyyppi',
    reversed: 'käänteinen'
  },
  scale: {
    colorScale: 'Värin skaala',
    sizeScale: 'Koon skaala',
    strokeScale: 'Viivan paksuuden skaala',
    scale: 'Skaala'
  },
  fileUploader: {
    message: 'Raahaa ja pudota tiedostosi tänne',
    chromeMessage: '*Chromen käyttäjä: Rajoita tiedostokokosi 250Mb:hen. Jos haluat suurempia tiedostoja, kokeile Safaria',
    disclaimer: '*kepler.gl on client-side sovellus, data pysyy vain selaimessasi...' + 'Tietoja ei lähetetä palvelimelle.',
    configUploadMessage: 'Lisää **CSV**, **GeoJson** tai tallennettu kartta **Json**. Lue lisää [**tuetuista formaateista**]',
    browseFiles: 'selaa tiedostojasi',
    uploading: 'ladataan',
    fileNotSupported: 'Tiedosto {errorFiles} ei ole tuettu.',
    or: 'tai'
  },
  density: 'tiheys',
  'Bug Report': 'Bugiraportointi',
  'User Guide': 'Opas',
  Save: 'Tallenna',
  Share: 'Jaa'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vZmkuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJ3ZWlnaHQiLCJsYWJlbCIsImZpbGxDb2xvciIsImNvbG9yIiwic3Ryb2tlQ29sb3IiLCJyYWRpdXMiLCJvdXRsaW5lIiwic3Ryb2tlIiwiZGVuc2l0eSIsImNvdmVyYWdlIiwic3VtIiwicG9pbnRDb3VudCIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic2VsZWN0RmllbGQiLCJ5QXhpcyIsInNlbGVjdFR5cGUiLCJzZWxlY3RWYWx1ZSIsImVudGVyVmFsdWUiLCJlbXB0eSIsIm1pc2MiLCJieSIsInZhbHVlc0luIiwidmFsdWVFcXVhbHMiLCJkYXRhU291cmNlIiwiYnJ1c2hSYWRpdXMiLCJtYXBMYXllcnMiLCJ0aXRsZSIsInJvYWQiLCJib3JkZXIiLCJidWlsZGluZyIsIndhdGVyIiwibGFuZCIsInBhbmVsIiwidGV4dCIsImxhYmVsV2l0aElkIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYWxpZ25tZW50IiwiYWRkTW9yZUxhYmVsIiwic2lkZWJhciIsInBhbmVscyIsImxheWVyIiwiZmlsdGVyIiwiaW50ZXJhY3Rpb24iLCJiYXNlbWFwIiwicmVxdWlyZWQiLCJwcm9wZXJ0eUJhc2VkT24iLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVmlzQ29uZmlncyIsInN0cm9rZVdpZHRoUmFuZ2UiLCJmaXhlZFJhZGl1cyIsImZpeGVkUmFkaXVzRGVzY3JpcHRpb24iLCJyYWRpdXNSYW5nZSIsImNsdXN0ZXJSYWRpdXMiLCJyYWRpdXNSYW5nZVBpeGVscyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInRhcmdldENvbG9yIiwiY29sb3JBZ2dyZWdhdGlvbiIsImhlaWdodEFnZ3JlZ2F0aW9uIiwicmVzb2x1dGlvblJhbmdlIiwic2l6ZVNjYWxlIiwid29ybGRVbml0U2l6ZSIsImVsZXZhdGlvblNjYWxlIiwiaGVpZ2h0U2NhbGUiLCJjb3ZlcmFnZVJhbmdlIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZyIsImhpZ2hQcmVjaXNpb25SZW5kZXJpbmdEZXNjcmlwdGlvbiIsImhlaWdodCIsImhlaWdodERlc2NyaXB0aW9uIiwiZmlsbCIsImVuYWJsZVBvbHlnb25IZWlnaHQiLCJzaG93V2lyZWZyYW1lIiwid2VpZ2h0SW50ZW5zaXR5Iiwiem9vbVNjYWxlIiwiaGVpZ2h0UmFuZ2UiLCJsYXllck1hbmFnZXIiLCJhZGREYXRhIiwiYWRkTGF5ZXIiLCJsYXllckJsZW5kaW5nIiwibWFwTWFuYWdlciIsIm1hcFN0eWxlIiwiYWRkTWFwU3R5bGUiLCJsYXllckNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJob3dUbyIsImZpbHRlck1hbmFnZXIiLCJhZGRGaWx0ZXIiLCJkYXRhc2V0VGl0bGUiLCJzaG93RGF0YVRhYmxlIiwicmVtb3ZlRGF0YXNldCIsImRhdGFzZXRJbmZvIiwicm93Q291bnQiLCJ0b29sdGlwIiwiaGlkZUxheWVyIiwic2hvd0xheWVyIiwiaGlkZUZlYXR1cmUiLCJzaG93RmVhdHVyZSIsImhpZGUiLCJzaG93IiwicmVtb3ZlTGF5ZXIiLCJsYXllclNldHRpbmdzIiwiY2xvc2VQYW5lbCIsInN3aXRjaFRvRHVhbFZpZXciLCJzaG93TGVnZW5kIiwiZGlzYWJsZTNETWFwIiwiRHJhd09uTWFwIiwic2VsZWN0TG9jYWxlIiwiaGlkZUxheWVyUGFuZWwiLCJzaG93TGF5ZXJQYW5lbCIsIm1vdmVUb1RvcCIsInNlbGVjdEJhc2VNYXBTdHlsZSIsInRpbWVQbGF5YmFjayIsImNsb3VkU3RvcmFnZSIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwibW9kYWwiLCJkZWxldGVEYXRhc2V0IiwiYWRkRGF0YVRvTWFwIiwiYWRkQ3VzdG9tTWFwYm94U3R5bGUiLCJzaGFyZVVSTCIsImJ1dHRvbiIsImRvd25sb2FkIiwiYWRkU3R5bGUiLCJzYXZlIiwiZGVmYXVsdENhbmNlbCIsImRlZmF1bHRDb25maXJtIiwicmF0aW9UaXRsZSIsInJhdGlvRGVzY3JpcHRpb24iLCJyYXRpb09yaWdpbmFsU2NyZWVuIiwicmF0aW9DdXN0b20iLCJyYXRpbzRfMyIsInJhdGlvMTZfOSIsInJlc29sdXRpb25UaXRsZSIsInJlc29sdXRpb25EZXNjcmlwdGlvbiIsIm1hcExlZ2VuZFRpdGxlIiwibWFwTGVnZW5kQWRkIiwiZGF0YXNldFN1YnRpdGxlIiwiYWxsRGF0YXNldHMiLCJkYXRhVHlwZVRpdGxlIiwiZGF0YVR5cGVTdWJ0aXRsZSIsImZpbHRlckRhdGFUaXRsZSIsImZpbHRlckRhdGFTdWJ0aXRsZSIsImZpbHRlcmVkRGF0YSIsInVuZmlsdGVyZWREYXRhIiwiZmlsZUNvdW50IiwiZGVsZXRlRGF0YSIsIndhcm5pbmciLCJwdWJsaXNoVGl0bGUiLCJwdWJsaXNoU3VidGl0bGUxIiwicHVibGlzaFN1YnRpdGxlMiIsInB1Ymxpc2hTdWJ0aXRsZTMiLCJwdWJsaXNoU3VidGl0bGU0IiwicHVibGlzaFN1YnRpdGxlNSIsInB1Ymxpc2hTdWJ0aXRsZTYiLCJwdWJsaXNoU3VidGl0bGU3IiwiZXhhbXBsZVRva2VuIiwicGFzdGVUaXRsZSIsInBhc3RlU3VidGl0bGUxIiwicGFzdGVTdWJ0aXRsZTIiLCJuYW1pbmdUaXRsZSIsInNoYXJlTWFwIiwic2hhcmVVcmlUaXRsZSIsInNoYXJlVXJpU3VidGl0bGUiLCJjbG91ZFRpdGxlIiwiY2xvdWRTdWJ0aXRsZSIsInNoYXJlRGlzY2xhaW1lciIsImdvdG9QYWdlIiwic3RhdHVzUGFuZWwiLCJtYXBVcGxvYWRpbmciLCJlcnJvciIsInN1YnRpdGxlIiwiZm9ybWF0VGl0bGUiLCJmb3JtYXRTdWJ0aXRsZSIsImh0bWwiLCJzZWxlY3Rpb24iLCJ0b2tlblRpdGxlIiwidG9rZW5TdWJ0aXRsZSIsInRva2VuUGxhY2Vob2xkZXIiLCJ0b2tlbk1pc3VzZVdhcm5pbmciLCJ0b2tlbkRpc2NsYWltZXIiLCJ0b2tlblVwZGF0ZSIsIm1vZGVUaXRsZSIsIm1vZGVTdWJ0aXRsZTEiLCJtb2RlU3VidGl0bGUyIiwibW9kZURlc2NyaXB0aW9uIiwicmVhZCIsImVkaXQiLCJqc29uIiwiY29uZmlnVGl0bGUiLCJjb25maWdEaXNjbGFpbWVyIiwiZGlzY2xhaW1lciIsImxvYWRpbmdEaWFsb2ciLCJsb2FkaW5nIiwibG9hZERhdGEiLCJ1cGxvYWQiLCJzdG9yYWdlIiwidHJpcEluZm8iLCJkZXNjcmlwdGlvbjEiLCJjb2RlIiwiZGVzY3JpcHRpb24yIiwiZXhhbXBsZSIsImljb25JbmZvIiwiaWNvbnMiLCJzdG9yYWdlTWFwVmlld2VyIiwibGFzdE1vZGlmaWVkIiwiYmFjayIsIm92ZXJ3cml0ZU1hcCIsImFscmVhZHlFeGlzdHMiLCJsb2FkU3RvcmFnZU1hcCIsImdvVG9QYWdlIiwic3RvcmFnZU1hcHMiLCJub1NhdmVkTWFwcyIsImhlYWRlciIsInZpc2libGVMYXllcnMiLCJsYXllckxlZ2VuZCIsImludGVyYWN0aW9ucyIsImJydXNoIiwiY29vcmRpbmF0ZSIsImFkZGl0aXZlIiwibm9ybWFsIiwic3VidHJhY3RpdmUiLCJjb2x1bW5zIiwibGF0IiwibG5nIiwiYWx0aXR1ZGUiLCJsYXQwIiwibG5nMCIsImxhdDEiLCJsbmcxIiwiY3VzdG9tUGFsZXR0ZSIsInN0ZXBzIiwicmV2ZXJzZWQiLCJzY2FsZSIsImNvbG9yU2NhbGUiLCJzdHJva2VTY2FsZSIsImZpbGVVcGxvYWRlciIsIm1lc3NhZ2UiLCJjaHJvbWVNZXNzYWdlIiwiY29uZmlnVXBsb2FkTWVzc2FnZSIsImJyb3dzZUZpbGVzIiwidXBsb2FkaW5nIiwiZmlsZU5vdFN1cHBvcnRlZCIsIm9yIiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxVQURBO0FBRVJDLElBQUFBLEtBQUssRUFBRSxPQUZDO0FBR1JDLElBQUFBLFNBQVMsRUFBRSxZQUhIO0FBSVJDLElBQUFBLEtBQUssRUFBRSxNQUpDO0FBS1JDLElBQUFBLFdBQVcsRUFBRSxhQUxMO0FBTVJDLElBQUFBLE1BQU0sRUFBRSxNQU5BO0FBT1JDLElBQUFBLE9BQU8sRUFBRSxXQVBEO0FBUVJDLElBQUFBLE1BQU0sRUFBRSxPQVJBO0FBU1JDLElBQUFBLE9BQU8sRUFBRSxRQVREO0FBVVJDLElBQUFBLFFBQVEsRUFBRSxXQVZGO0FBV1JDLElBQUFBLEdBQUcsRUFBRSxPQVhHO0FBWVJDLElBQUFBLFVBQVUsRUFBRTtBQVpKLEdBREc7QUFlYkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLE1BQU0sRUFBRSxNQURHO0FBRVhDLElBQUFBLFdBQVcsRUFBRSxnQkFGRjtBQUdYQyxJQUFBQSxLQUFLLEVBQUUsVUFISTtBQUlYQyxJQUFBQSxVQUFVLEVBQUUsZ0JBSkQ7QUFLWEMsSUFBQUEsV0FBVyxFQUFFLGNBTEY7QUFNWEMsSUFBQUEsVUFBVSxFQUFFLFdBTkQ7QUFPWEMsSUFBQUEsS0FBSyxFQUFFO0FBUEksR0FmQTtBQXdCYkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLEVBQUUsRUFBRSxFQURBO0FBRUpDLElBQUFBLFFBQVEsRUFBRSxpQkFGTjtBQUdKQyxJQUFBQSxXQUFXLEVBQUUsd0JBSFQ7QUFJSkMsSUFBQUEsVUFBVSxFQUFFLGVBSlI7QUFLSkMsSUFBQUEs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O0FBK1piQyxFQUFBQSxLQUFLLEVBQUU7QUEvWk0sQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7TE9DQUxFU30gZnJvbSAnLi9sb2NhbGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wZXJ0eToge1xyXG4gICAgd2VpZ2h0OiAncGFpbm90dXMnLFxyXG4gICAgbGFiZWw6ICduaW1pw7YnLFxyXG4gICAgZmlsbENvbG9yOiAndMOkeXR0w7Z2w6RyaScsXHJcbiAgICBjb2xvcjogJ3bDpHJpJyxcclxuICAgIHN0cm9rZUNvbG9yOiAndmlpdmFuIHbDpHJpJyxcclxuICAgIHJhZGl1czogJ3PDpGRlJyxcclxuICAgIG91dGxpbmU6ICfDpMOkcml2aWl2YScsXHJcbiAgICBzdHJva2U6ICd2aWl2YScsXHJcbiAgICBkZW5zaXR5OiAndGloZXlzJyxcclxuICAgIGNvdmVyYWdlOiAna2F0dGF2dXVzJyxcclxuICAgIHN1bTogJ3N1bW1hJyxcclxuICAgIHBvaW50Q291bnQ6ICdwaXN0ZWlkZW4gbHVrdW3DpMOkcsOkJ1xyXG4gIH0sXHJcbiAgcGxhY2Vob2xkZXI6IHtcclxuICAgIHNlYXJjaDogJ0V0c2knLFxyXG4gICAgc2VsZWN0RmllbGQ6ICdWYWxpdHNlIGtlbnR0w6QnLFxyXG4gICAgeUF4aXM6ICdZLWFrc2VsaScsXHJcbiAgICBzZWxlY3RUeXBlOiAnVmFsaXRzZSB0eXlwcGknLFxyXG4gICAgc2VsZWN0VmFsdWU6ICdWYWxpdHNlIGFydm8nLFxyXG4gICAgZW50ZXJWYWx1ZTogJ0FubmEgYXJ2bycsXHJcbiAgICBlbXB0eTogJ3R5aGrDpCdcclxuICB9LFxyXG4gIG1pc2M6IHtcclxuICAgIGJ5OiAnJyxcclxuICAgIHZhbHVlc0luOiAnQXJ2b3Qgam91a29zc2E6JyxcclxuICAgIHZhbHVlRXF1YWxzOiAnQXJ2byBvbiB5aHTDpHN1dXJpIGt1aW4nLFxyXG4gICAgZGF0YVNvdXJjZTogJ0FpbmVpc3RvbMOkaGRlJyxcclxuICAgIGJydXNoUmFkaXVzOiAnSGFyamFuIHPDpGRlIChrbSknLFxyXG4gICAgZW1wdHk6ICcgJ1xyXG4gIH0sXHJcbiAgbWFwTGF5ZXJzOiB7XHJcbiAgICB0aXRsZTogJ0thcnRhbiB0YXNvdCcsXHJcbiAgICBsYWJlbDogJ05pbWnDtnQnLFxyXG4gICAgcm9hZDogJ1RpZXQnLFxyXG4gICAgYm9yZGVyOiAnUmFqYXQnLFxyXG4gICAgYnVpbGRpbmc6ICdSYWtlbm51a3NldCcsXHJcbiAgICB3YXRlcjogJ1Zlc2knLFxyXG4gICAgbGFuZDogJ01hYScsXHJcbiAgICAnM2RCdWlsZGluZyc6ICczZC1yYWtlbm51a3NldCdcclxuICB9LFxyXG4gIHBhbmVsOiB7XHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgIGxhYmVsOiAnTmltacO2JyxcclxuICAgICAgbGFiZWxXaXRoSWQ6ICdOaW1pw7Yge2xhYmVsSWR9JyxcclxuICAgICAgZm9udFNpemU6ICdGb250aW4ga29rbycsXHJcbiAgICAgIGZvbnRDb2xvcjogJ0ZvbnRpbiB2w6RyaScsXHJcbiAgICAgIHRleHRBbmNob3I6ICdUZWtzdGluIGFua2t1cmknLFxyXG4gICAgICBhbGlnbm1lbnQ6ICdTaWpvaXR0ZWx1JyxcclxuICAgICAgYWRkTW9yZUxhYmVsOiAnTGlzw6TDpCB1dXNpYSBuaW1pw7ZpdMOkJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2lkZWJhcjoge1xyXG4gICAgcGFuZWxzOiB7XHJcbiAgICAgIGxheWVyOiAnVGFzb3QnLFxyXG4gICAgICBmaWx0ZXI6ICdTdW9kYXR0aW1ldCcsXHJcbiAgICAgIGludGVyYWN0aW9uOiAnSW50ZXJha3Rpb3QnLFxyXG4gICAgICBiYXNlbWFwOiAnVGF1c3Rha2FydHRhJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGF5ZXI6IHtcclxuICAgIHJlcXVpcmVkOiAnUGFrb2xsaW5lbionLFxyXG4gICAgcmFkaXVzOiAnU8OkZGUnLFxyXG4gICAgd2VpZ2h0OiAnUGFpbm90dXMnLFxyXG4gICAgcHJvcGVydHlCYXNlZE9uOiAne3Byb3BlcnR5fSBwZXJ1c3R1ZW4gYXJ2b29uJyxcclxuICAgIGNvbG9yOiAnVsOkcmknLFxyXG4gICAgZmlsbENvbG9yOiAnVMOkeXTDtm4gdsOkcmknLFxyXG4gICAgb3V0bGluZTogJ8Okw6RyaXZpaXZhJyxcclxuICAgIGNvdmVyYWdlOiAnS2F0dGF2dXVzJyxcclxuICAgIHN0cm9rZTogJ1ZpaXZhJyxcclxuICAgIHN0cm9rZVdpZHRoOiAnVmlpdmFuIHBha3N1dXMnLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICdWaWl2YW4gdsOkcmknLFxyXG4gICAgYmFzaWM6ICdQZXJ1cycsXHJcbiAgICB0cmFpbExlbmd0aDogJ0rDpGxqZW4gcGl0dXVzJyxcclxuICAgIHRyYWlsTGVuZ3RoRGVzY3JpcHRpb246ICdKw6RsamVuIGtlc3RvIHNla3VudGVpbmEsIGVubmVua3VpbiBzZSBoaW1tZW5lZSBuw6RreXZpc3TDpCcsXHJcbiAgICBuZXdMYXllcjogJ3V1c2kgdGFzbycsXHJcbiAgICBlbGV2YXRpb25CeURlc2NyaXB0aW9uOiAnS3VuIGFzZXR1cyBvbiBwb2lzIHDDpMOkbHTDpCwga29ya2V1cyBwZXJ1c3R1dSBwaXN0ZWlkZW4gbcOkw6Ryw6TDpG4nLFxyXG4gICAgY29sb3JCeURlc2NyaXB0aW9uOiAnS3VuIGFzZXR1cyBvbiBwb2lzIHDDpMOkbHTDpCwgdsOkcmkgcGVydXN0dXUgcGlzdGVpZGVuIG3DpMOkcsOkw6RuJyxcclxuICAgIGFnZ3JlZ2F0ZUJ5OiAnQWdncmVnb2kga2VudHTDpCB7ZmllbGR9IGJ5JyxcclxuICAgICczRE1vZGVsJzogJzNELW1hbGxpJyxcclxuICAgICczRE1vZGVsT3B0aW9ucyc6ICczRC1tYWxsaW4gYXNldHVrc2V0JyxcclxuICAgIHR5cGU6IHtcclxuICAgICAgcG9pbnQ6ICdwaXN0ZScsXHJcbiAgICAgIGFyYzogJ2thYXJpJyxcclxuICAgICAgbGluZTogJ3ZpaXZhJyxcclxuICAgICAgZ3JpZDogJ3J1dWR1a2tvJyxcclxuICAgICAgaGV4YmluOiAnaGV4YmluJyxcclxuICAgICAgcG9seWdvbjogJ3BvbHlnb25pJyxcclxuICAgICAgZ2VvanNvbjogJ2dlb2pzb24nLFxyXG4gICAgICBjbHVzdGVyOiAna2x1c3RlcmknLFxyXG4gICAgICBpY29uOiAna3V2YScsXHJcbiAgICAgIGhlYXRtYXA6ICdsw6RtcMO2a2FydHRhJyxcclxuICAgICAgaGV4YWdvbjogJ2t1dXNpa3VsbWlvJyxcclxuICAgICAgaGV4YWdvbmlkOiAnSDMnLFxyXG4gICAgICB0cmlwOiAnbWF0a2EnLFxyXG4gICAgICBzMjogJ1MyJyxcclxuICAgICAgJzNkJzogJzNEJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGF5ZXJWaXNDb25maWdzOiB7XHJcbiAgICBzdHJva2VXaWR0aDogJ1ZpaXZhbiBwYWtzdXVzJyxcclxuICAgIHN0cm9rZVdpZHRoUmFuZ2U6ICdWaWl2YW4gcGFrc3V1ZGVuIHJhamF0JyxcclxuICAgIHJhZGl1czogJ1PDpGRlJyxcclxuICAgIGZpeGVkUmFkaXVzOiAnVmFraW9zw6RkZSBtZXRyZWluw6QnLFxyXG4gICAgZml4ZWRSYWRpdXNEZXNjcmlwdGlvbjogJ0thcnRhbiBzw6RkZSBhYnNvbHV1dHRpc2Vrc2kgc8OkdGVla3NpIG1ldHJlaW7DpCwgZXNpbS4gNSAtPiA1IG1ldHJpaW4nLFxyXG4gICAgcmFkaXVzUmFuZ2U6ICdTw6R0ZWVuIHJhamF0JyxcclxuICAgIGNsdXN0ZXJSYWRpdXM6ICdLbHVzdGVyaWVuIHPDpGRlIHBpa3NlbGVpbsOkJyxcclxuICAgIHJhZGl1c1JhbmdlUGl4ZWxzOiAnU8OkdGVlbiByYWphdCBwaWtzZWxlaW7DpCcsXHJcbiAgICBvcGFjaXR5OiAnTMOkcGluw6RreXZ5eXMnLFxyXG4gICAgY292ZXJhZ2U6ICdLYXR0YXZ1dXMnLFxyXG4gICAgb3V0bGluZTogJ8OEw6RyaXZpaXZhJyxcclxuICAgIGNvbG9yUmFuZ2U6ICdWw6RyaWVuIHJhamF0JyxcclxuICAgIHN0cm9rZTogJ1ZpaXZhJyxcclxuICAgIHN0cm9rZUNvbG9yOiAnVmlpdmFuIHbDpHJpJyxcclxuICAgIHN0cm9rZUNvbG9yUmFuZ2U6ICdWaWl2YW4gdsOkcmluIHJhamF0JyxcclxuICAgIHRhcmdldENvbG9yOiAnS29odGVlbiB2w6RyaScsXHJcbiAgICBjb2xvckFnZ3JlZ2F0aW9uOiAnVsOkcmllbiBhZ2dyZWdvaW50aScsXHJcbiAgICBoZWlnaHRBZ2dyZWdhdGlvbjogJ0tvcmtldWRlbiBhZ2dyZWdvaW50aScsXHJcbiAgICByZXNvbHV0aW9uUmFuZ2U6ICdSZXNvbHV1dGlvbiByYWphdCcsXHJcbiAgICBzaXplU2NhbGU6ICdLb29uIHNrYWFsYScsXHJcbiAgICB3b3JsZFVuaXRTaXplOiAnWWtzaWtrw7YnLFxyXG4gICAgZWxldmF0aW9uU2NhbGU6ICdLb3JvdHRhbWlzZW4gc2thYWxhJyxcclxuICAgIGhlaWdodFNjYWxlOiAnS29ya2V1ZGVuIHNrYWFsYScsXHJcbiAgICBjb3ZlcmFnZVJhbmdlOiAnUGVpdHTDpHZ5eWRlbiByYWphdCcsXHJcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nOiAnVGFya2thIHJlbmRlcsO2aW50aScsXHJcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb246ICdUYXJra2EgcmVuZGVyw7ZpbnRpIGpvaHRhYSBoaXRhYW1wYWFuIHN1b3JpdHRhbWlzZWVuJyxcclxuICAgIGhlaWdodDogJ0tvcmtldXMnLFxyXG4gICAgaGVpZ2h0RGVzY3JpcHRpb246ICdLbGlra2FhIG9pa2Vhc3RhIHlsw6RudXJrYXN0YSBuYXBwaWEgdmFpaHRhYWtzZXNpIDNELW7DpGt5bcOkw6RuJyxcclxuICAgIGZpbGw6ICdUw6R5dHTDticsXHJcbiAgICBlbmFibGVQb2x5Z29uSGVpZ2h0OiAnU2FsbGkgcG9seWdvbmllbiBrb3JrZXVzJyxcclxuICAgIHNob3dXaXJlZnJhbWU6ICdOw6R5dMOkIHJhdXRhbGFua2FtYWxsaScsXHJcbiAgICB3ZWlnaHRJbnRlbnNpdHk6ICdQYWlub3R1a3NlbiBpbnRlbnNpdGVldHRpJyxcclxuICAgIHpvb21TY2FsZTogJ1pvb21hdXNza2FhbGEnLFxyXG4gICAgaGVpZ2h0UmFuZ2U6ICdLb3JrZXVkZW4gcmFqYXQnXHJcbiAgfSxcclxuICBsYXllck1hbmFnZXI6IHtcclxuICAgIGFkZERhdGE6ICdMaXPDpMOkIGFpbmVpc3RvJyxcclxuICAgIGFkZExheWVyOiAnTGlzw6TDpCB0YXNvJyxcclxuICAgIGxheWVyQmxlbmRpbmc6ICdUYXNvamVuIHNla29pdHR1dnV1cydcclxuICB9LFxyXG4gIG1hcE1hbmFnZXI6IHtcclxuICAgIG1hcFN0eWxlOiAnS2FydGFuIHR5eWxpJyxcclxuICAgIGFkZE1hcFN0eWxlOiAnTGlzw6TDpCB0eXlsaSBrYXJ0YWxsZScsXHJcbiAgICAnM2RCdWlsZGluZ0NvbG9yJzogJzNELXJha2VubnVzdGVuIHbDpHJpJ1xyXG4gIH0sXHJcbiAgbGF5ZXJDb25maWd1cmF0aW9uOiB7XHJcbiAgICBkZWZhdWx0RGVzY3JpcHRpb246ICdMYXNrZSBzdXVyZWVuIHtwcm9wZXJ0eX0gYXJ2byB2YWxpdHVuIGtlbnTDpG4gcGVydXN0ZWVsbGEnLFxyXG4gICAgaG93VG86ICdNaXRlbiB0b2ltaWknXHJcbiAgfSxcclxuICBmaWx0ZXJNYW5hZ2VyOiB7XHJcbiAgICBhZGRGaWx0ZXI6ICdMaXPDpMOkIHN1b2RhdGluJ1xyXG4gIH0sXHJcbiAgZGF0YXNldFRpdGxlOiB7XHJcbiAgICBzaG93RGF0YVRhYmxlOiAnTsOkeXTDpCBhdHRyaWJ1dXR0aXRhdWx1JyxcclxuICAgIHJlbW92ZURhdGFzZXQ6ICdQb2lzdGEgYWluZWlzdG8nXHJcbiAgfSxcclxuICBkYXRhc2V0SW5mbzoge1xyXG4gICAgcm93Q291bnQ6ICd7cm93Q291bnR9IHJpdmnDpCdcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIGhpZGVMYXllcjogJ1BpaWxvdGEgdGFzbycsXHJcbiAgICBzaG93TGF5ZXI6ICdOw6R5dMOkIHRhc28nLFxyXG4gICAgaGlkZUZlYXR1cmU6ICdQaWlsb3RhIGtvaGRlJyxcclxuICAgIHNob3dGZWF0dXJlOiAnTsOkeXTDpCBrb2hkZScsXHJcbiAgICBoaWRlOiAncGlpbG90YScsXHJcbiAgICBzaG93OiAnbsOkeXTDpCcsXHJcbiAgICByZW1vdmVMYXllcjogJ1BvaXN0YSB0YXNvJyxcclxuICAgIGxheWVyU2V0dGluZ3M6ICdUYXNvbiBhc2V0dWtzZXQnLFxyXG4gICAgY2xvc2VQYW5lbDogJ1N1bGplIHBhbmVlbGknLFxyXG4gICAgc3dpdGNoVG9EdWFsVmlldzogJ1ZhaWhkYSBrYWtzb2lza2FycnRhbsOka3ltw6TDpG4nLFxyXG4gICAgc2hvd0xlZ2VuZDogJ07DpHl0w6Qgc2VsaXRlJyxcclxuICAgIGRpc2FibGUzRE1hcDogJ1BvaXN0dSAzRC1uw6RreW3DpHN0w6QnLFxyXG4gICAgRHJhd09uTWFwOiAnUGlpcnLDpCBrYXJ0YWxsZScsXHJcbiAgICBzZWxlY3RMb2NhbGU6ICdWYWxpdHNlIGtpZWxpc3l5cycsXHJcbiAgICBoaWRlTGF5ZXJQYW5lbDogJ1BpaWxvdGEgdGFzb3BhbmVlbGknLFxyXG4gICAgc2hvd0xheWVyUGFuZWw6ICdOw6R5dMOkIHRhc29wYW5lZWxpJyxcclxuICAgIG1vdmVUb1RvcDogJ1NpaXJyw6QgdGFzb2plbiBww6TDpGxsaW1tw6Rpc2Vrc2knLFxyXG4gICAgc2VsZWN0QmFzZU1hcFN0eWxlOiAnVmFsaXRzZSB0YXVzdGFrYXJ0dGF0eXlsaScsXHJcbiAgICBkZWxldGU6ICdQb2lzdGEnLFxyXG4gICAgdGltZVBsYXliYWNrOiAnQWphbiBhbmltb2ludGknLFxyXG4gICAgY2xvdWRTdG9yYWdlOiAnUGlsdml0YWxsZW5udXMnLFxyXG4gICAgJzNETWFwJzogJzNELW7DpGt5bcOkJ1xyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgZXhwb3J0SW1hZ2U6ICdWaWUga3V2YScsXHJcbiAgICBleHBvcnREYXRhOiAnVmllIGFpbmVpc3RvdCcsXHJcbiAgICBleHBvcnRNYXA6ICdWaWUga2FydHRhJyxcclxuICAgIHNoYXJlTWFwVVJMOiAnSmFhIGthcnRhbiBVUkwnLFxyXG4gICAgc2F2ZU1hcDogJ1RhbGxlbm5hIGthcnR0YScsXHJcbiAgICBzZWxlY3Q6ICd2YWxpdHNlJyxcclxuICAgIHBvbHlnb246ICdwb2x5Z29uaScsXHJcbiAgICByZWN0YW5nbGU6ICduZWxpa3VsbWlvJyxcclxuICAgIGhpZGU6ICdwaWlsb3RhJyxcclxuICAgIHNob3c6ICduw6R5dMOkJyxcclxuICAgIC4uLkxPQ0FMRVNcclxuICB9LFxyXG4gIG1vZGFsOiB7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICBkZWxldGVEYXRhc2V0OiAnUG9pc3RhIGFpbmVpc3RvJyxcclxuICAgICAgYWRkRGF0YVRvTWFwOiAnTGlzw6TDpCBhaW5laXN0b2phIGthcnRhbGxlJyxcclxuICAgICAgZXhwb3J0SW1hZ2U6ICdWaWUga3V2YScsXHJcbiAgICAgIGV4cG9ydERhdGE6ICdWaWUgYWluZWlzdG90JyxcclxuICAgICAgZXhwb3J0TWFwOiAnVmllIGthcnR0YScsXHJcbiAgICAgIGFkZEN1c3RvbU1hcGJveFN0eWxlOiAnTGlzw6TDpCBvbWEgTWFwYm94LXR5eWxpJyxcclxuICAgICAgc2F2ZU1hcDogJ1RhbGxlbm5hIGthcnR0YScsXHJcbiAgICAgIHNoYXJlVVJMOiAnSmFhIFVSTCdcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgZGVsZXRlOiAnUG9pc3RhJyxcclxuICAgICAgZG93bmxvYWQ6ICdMYXRhYScsXHJcbiAgICAgIGV4cG9ydDogJ1ZpZScsXHJcbiAgICAgIGFkZFN0eWxlOiAnTGlzw6TDpCB0eXlsaScsXHJcbiAgICAgIHNhdmU6ICdUYWxsZW5uYScsXHJcbiAgICAgIGRlZmF1bHRDYW5jZWw6ICdQZXJ1JyxcclxuICAgICAgZGVmYXVsdENvbmZpcm06ICdWYWh2aXN0YSdcclxuICAgIH0sXHJcbiAgICBleHBvcnRJbWFnZToge1xyXG4gICAgICByYXRpb1RpdGxlOiAnS3V2YXN1aGRlJyxcclxuICAgICAgcmF0aW9EZXNjcmlwdGlvbjogJ1ZhbGl0c2Ugc29waXZhIGt1dmFzdWhkZSBrw6R5dHTDtnRhcGF1c3Rhc2kgdmFydGVuLicsXHJcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICdBbGt1cGVyw6RpbmVuIG7DpHl0dMO2JyxcclxuICAgICAgcmF0aW9DdXN0b206ICdLdXN0b21vaXR1JyxcclxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxyXG4gICAgICByYXRpbzE2Xzk6ICcxNjo5JyxcclxuICAgICAgcmVzb2x1dGlvblRpdGxlOiAnUmVzb2x1dXRpbycsXHJcbiAgICAgIHJlc29sdXRpb25EZXNjcmlwdGlvbjogJ0tvcmtlYSByZXNvbHV1dGlvIG9uIHBhcmVtcGkgdHVsb3N0YW1pc3RhIHZhcnRlbi4nLFxyXG4gICAgICBtYXBMZWdlbmRUaXRsZTogJ0thcnRhbiBzZWxpdGUnLFxyXG4gICAgICBtYXBMZWdlbmRBZGQ6ICdMaXPDpMOkIHNlbGl0ZSBrYXJ0dGFhbidcclxuICAgIH0sXHJcbiAgICBleHBvcnREYXRhOiB7XHJcbiAgICAgIGRhdGFzZXRUaXRsZTogJ0FpbmVpc3RvdCcsXHJcbiAgICAgIGRhdGFzZXRTdWJ0aXRsZTogJ1ZhbGl0c2UgYWluZWlzdG8sIGpvbmthIGFpb3QgdmllZMOkJyxcclxuICAgICAgYWxsRGF0YXNldHM6ICdLYWlra2knLFxyXG4gICAgICBkYXRhVHlwZVRpdGxlOiAnQWluZWlzdG9qZW4gZm9ybWFhdHRpJyxcclxuICAgICAgZGF0YVR5cGVTdWJ0aXRsZTogJ1ZhbGl0c2UgYWluZWlzdG9mb3JtYWF0dGkgdmFsaXRzZW1pbGxlc2kgYWluZWlzdG9pbGxlJyxcclxuICAgICAgZmlsdGVyRGF0YVRpdGxlOiAnU3VvZGF0YSBhaW5laXN0b2phJyxcclxuICAgICAgZmlsdGVyRGF0YVN1YnRpdGxlOiAnVm9pdCB2aWVkw6Qgam9rbyBhbGt1cGVyw6Rpc2V0IGFpbmVpc3RvdCB0YWkgc3VvZGF0ZXR1dCBhaW5laXN0b3QnLFxyXG4gICAgICBmaWx0ZXJlZERhdGE6ICdTdW9kYXRldHV0IGFpbmVpc3RvdCcsXHJcbiAgICAgIHVuZmlsdGVyZWREYXRhOiAnU3VvZGF0dGFtYXR0b21hdCBhaW5laXN0b3QnLFxyXG4gICAgICBmaWxlQ291bnQ6ICd7ZmlsZUNvdW50fSB0aWVkb3N0b2EnLFxyXG4gICAgICByb3dDb3VudDogJ3tyb3dDb3VudH0gcml2acOkJ1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZURhdGE6IHtcclxuICAgICAgd2FybmluZzogJ2Fpb3QgcG9pc3RhYSB0w6Rtw6RuIGFpbmVpc3Rvbi4gQWluZW9zdG9hIGvDpHl0dMOkdmllbiB0YXNvamVuIGx1a3Vtw6TDpHLDpDoge2xlbmd0aH0nXHJcbiAgICB9LFxyXG4gICAgYWRkU3R5bGU6IHtcclxuICAgICAgcHVibGlzaFRpdGxlOiAnMS4gSnVsa2Fpc2UgdHl5bGlzaSBNYXBib3hpc3NhIHRhaSBhbm5hIHR1bm5pc3RlJyxcclxuICAgICAgcHVibGlzaFN1YnRpdGxlMTogJ1ZvaXQgbHVvZGEgb21hbiBrYXJ0dGF0eXlsaXNpIHNpdnVsbGEnLFxyXG4gICAgICBwdWJsaXNoU3VidGl0bGUyOiAnamEnLFxyXG4gICAgICBwdWJsaXNoU3VidGl0bGUzOiAnanVsa2Fpc3RhJyxcclxuICAgICAgcHVibGlzaFN1YnRpdGxlNDogJ3Nlbi4nLFxyXG4gICAgICBwdWJsaXNoU3VidGl0bGU1OiAnS8OkeXR0w6TDpGtzZXNpIHlrc2l0eWlzdMOkIHR5eWxpw6QsIGxpaXTDpCcsXHJcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTY6ICd0dW5uaXN0ZWVzaScsXHJcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTc6XHJcbiAgICAgICAgJ3TDpG5uZS4gKmtlcGxlci5nbCBvbiBjbGllbnQtc2lkZSBzb3ZlbGx1cywgZGF0YSBweXN5eSB2YWluIHNlbGFpbWVzc2FzaS4uLicsXHJcbiAgICAgIGV4YW1wbGVUb2tlbjogJ2VzaW0uIHBrLmFiY2RlZmcueHh4eHh4JyxcclxuICAgICAgcGFzdGVUaXRsZTogJzIuIExpaXTDpCB0eXlsaS1VUkwnLFxyXG4gICAgICBwYXN0ZVN1YnRpdGxlMTogJ01pa8OkIG9uJyxcclxuICAgICAgcGFzdGVTdWJ0aXRsZTI6ICd0eXlsaS1VUkw/JyxcclxuICAgICAgbmFtaW5nVGl0bGU6ICczLiBOaW1lw6QgdHl5bGlzaSdcclxuICAgIH0sXHJcbiAgICBzaGFyZU1hcDoge1xyXG4gICAgICBzaGFyZVVyaVRpdGxlOiAnSmFhIGthcnRhbiBVUkwnLFxyXG4gICAgICBzaGFyZVVyaVN1YnRpdGxlOiAnTHVvIGthcnRhbGxlIFVSTCwgam9ua2Egdm9pdCBqYWthYSBtdWlkZW4ga2Fuc3NhJyxcclxuICAgICAgY2xvdWRUaXRsZTogJ1BpbHZpdGFsbGVubnVzJyxcclxuICAgICAgY2xvdWRTdWJ0aXRsZTpcclxuICAgICAgICAnS2lyamF1ZHUgc2lzw6TDpG4gamEgbGF0YWEga2FydHRhIGphIGFpbmVpc3RvdCBoZW5raWzDtmtvaHRhaXNlZW4gcGlsdmlwYWx2ZWx1dW4nLFxyXG4gICAgICBzaGFyZURpc2NsYWltZXI6XHJcbiAgICAgICAgJ2tlcGxlci5nbCB0YWxsZW50YWEga2FydGFuIGRhdGFuIGhlbmtpbMO2a29odGFpc2VlbiBwaWx2aXRhbGxlbm51c3RpbGFhc2ksIHZhaW4gaWhtaXNldCwgam9pbGxhIG9uIFVSTCwgdm9pdmF0IHDDpMOkc3TDpCBrw6RzaWtzaSBrYXJ0dGFhbiBqYSBhaW5laXN0b2loaW4uICcgK1xyXG4gICAgICAgICdWb2l0IG11b2thdGEgdGllZG9zdG9qYSB0YWkgcG9pc3RhYSBuZSBwaWx2aXBhbHZlbHVzdGFzaSBtaWxsb2luIHZhaW4uJyxcclxuICAgICAgZ290b1BhZ2U6ICdNZW5lIEtlcGxlci5nbCB7Y3VycmVudFByb3ZpZGVyfSBzaXZ1bGxlc2knXHJcbiAgICB9LFxyXG4gICAgc3RhdHVzUGFuZWw6IHtcclxuICAgICAgbWFwVXBsb2FkaW5nOiAnS2FydHRhYSBsYWRhdGFhbicsXHJcbiAgICAgIGVycm9yOiAnVmlyaGUnXHJcbiAgICB9LFxyXG4gICAgc2F2ZU1hcDoge1xyXG4gICAgICB0aXRsZTogJ1BpbHZpdGFsbGVubnVzJyxcclxuICAgICAgc3VidGl0bGU6ICdLaXJqYXVkdSBzaXPDpMOkbiBwaWx2aXBhbHZlbHV1c2kgdGFsbGVudGFha3Nlc2kga2FydGFuJ1xyXG4gICAgfSxcclxuICAgIGV4cG9ydE1hcDoge1xyXG4gICAgICBmb3JtYXRUaXRsZTogJ0thcnRhbiBmb3JtYWF0dGknLFxyXG4gICAgICBmb3JtYXRTdWJ0aXRsZTogJ1ZhbGl0c2UgZm9ybWFhdHRpLCBqb3NzYSB2aWV0IGthcnRhbicsXHJcbiAgICAgIGh0bWw6IHtcclxuICAgICAgICBzZWxlY3Rpb246ICdWaWUga2FydHRhIGludGVyYWt0aWl2aXNlbmEgaHRtbC10aWVkb3N0b25hJyxcclxuICAgICAgICB0b2tlblRpdGxlOiAnTWFwYm94LXR1bm5pc3RlJyxcclxuICAgICAgICB0b2tlblN1YnRpdGxlOiAnS8OkeXTDpCBvbWFhIE1hcGJveC10dW5uaXN0ZXR0YXNpIGh0bWwtdGllZG9zdG9zc2EgKHZhbGlubmFpbmVuKScsXHJcbiAgICAgICAgdG9rZW5QbGFjZWhvbGRlcjogJ0xpaXTDpCBNYXBib3gtdHVubmlzdGVlc2knLFxyXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcclxuICAgICAgICAgICcqIEpvcyBldCBrw6R5dMOkIG9tYWEgdHVubmlzdGV0dGFzaSwga2FydHRhIHZvaSBsYWthdGEgdG9pbWltYXN0YSBtaWxsb2luIHZhaW4ga3VuIHZhaWhkYW1tZSBvbWFhIHR1bm5pc3RldHRhbW1lIHbDpMOkcmlua8OkeXTDtm4gZXN0w6RtaXNla3NpLiAnLFxyXG4gICAgICAgIHRva2VuRGlzY2xhaW1lcjogJ1ZvaXQgdmFpaHRhYSBNYXBib3gtdHVubmlzdGVlc2kgbsOkaWRlbiBvaGplaWRlbiBhdnVsbGE6ICcsXHJcbiAgICAgICAgdG9rZW5VcGRhdGU6ICdLdWlua2EgdmFpaHRhYSBvbGVtYXNzYW9sZXZhIE1hcGJveC10dW5uaXN0ZScsXHJcbiAgICAgICAgbW9kZVRpdGxlOiAnS2FydGFuIHRpbGEnLFxyXG4gICAgICAgIG1vZGVTdWJ0aXRsZTE6ICdWYWxpdHNlIGthcnRhbiB0aWxhLicsXHJcbiAgICAgICAgbW9kZVN1YnRpdGxlMjogJ0xpc8OkdGlldG9qYScsXHJcbiAgICAgICAgbW9kZURlc2NyaXB0aW9uOiAnQW5uYSBrw6R5dHTDpGppZW4ge21vZGV9IGthcnR0YWEnLFxyXG4gICAgICAgIHJlYWQ6ICdsdWtlYScsXHJcbiAgICAgICAgZWRpdDogJ211b2thdGEnXHJcbiAgICAgIH0sXHJcbiAgICAgIGpzb246IHtcclxuICAgICAgICBjb25maWdUaXRsZTogJ0thcnRhbiBhc2V0dWtzZXQnLFxyXG4gICAgICAgIGNvbmZpZ0Rpc2NsYWltZXI6XHJcbiAgICAgICAgICAnS2FydGFuIGFzZXR1a3NldCBzaXPDpGx0eXbDpHQgSnNvbi10aWVkb3N0b29uLiBKb3Mga8OkeXTDpHQga2lyamFzdG9hIGtlcGxlci5nbCBvbWFzc2Egc292ZWxsdWtzZXNzYXNpLiBWb2l0IGtvcGlvaWRhIGFzZXR1a3NldCBqYSBhbnRhYSBuZSBmdW5rdGlvbGxlOiAnLFxyXG4gICAgICAgIHNlbGVjdGlvbjpcclxuICAgICAgICAgICdWaWUga3lzZWlzZW4ga2FydGFuIGFpbmVpc3RvdCBqYSBhc2V0dWtzZXQgeWhkZXNzw6QganNvbi10aWVkb3N0b3NzYS4gVm9pdCBtecO2aGVtbWluIGF2YXRhIHNhbWFuIGthcnRhbiBsYXRhYW1hbGxhIHRpZWRvc3RvbiBrZXBsZXIuZ2w6bicsXHJcbiAgICAgICAgZGlzY2xhaW1lcjpcclxuICAgICAgICAgICcqIEthcnRhbiBhc2V0dWtzZXQgb3ZhdCBzaWRva3Npc3NhIGxhZGF0dHVpaGluIGFpbmVpc3RvaWhpbi4gQXJ2b2Eg4oCYZGF0YUlk4oCZIGvDpHl0ZXTDpMOkbiB0YXNvamVuLCBzdW9kYXR0aW1pZW4gamEgdmloamVpZGVuIGxpaXR0w6RtaXNla3NpIHRpZXR0eXluIGFpbmVpc3Rvb24uICcgK1xyXG4gICAgICAgICAgJ1Zhcm1pc3RhLCBldHTDpCBhaW5laXN0b24gZGF0YUlkOnQgdmFzdGFhdmF0IGFzZXR1c3RlbiBhcnZvamEgam9zIGxhdGFhdCBhc2V0dWtzZXQga8OkeXR0w6RlbiBgYWRkRGF0YVRvTWFwYC1mdW5rdGlvbGxlLidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxvYWRpbmdEaWFsb2c6IHtcclxuICAgICAgbG9hZGluZzogJ0xhZGF0YWFuLi4uJ1xyXG4gICAgfSxcclxuICAgIGxvYWREYXRhOiB7XHJcbiAgICAgIHVwbG9hZDogJ0xhdGFhIHRpZWRvc3RvdCcsXHJcbiAgICAgIHN0b3JhZ2U6ICdMYXRhYSB0YWxsZW5udXN0aWxhc3RhJ1xyXG4gICAgfSxcclxuICAgIHRyaXBJbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnS3VpbmthIGvDpHl0dMOkw6QgbWF0a2EtYW5pbWFhdGlvdGEnLFxyXG4gICAgICBkZXNjcmlwdGlvbjE6XHJcbiAgICAgICAgJ1JlaXRpbiBhbmltb2ltaXNla3NpIGdlb0pTT04tYWluZWlzdG9uIHTDpHl0eXkgb2xsYSBnZW9tZXRyaWF0eXlwaWx0w6TDpG4gYExpbmVTdHJpbmdgLCBMaW5lU3RyaW5nLWtvb3JkaW5hYXR0aWVuIHTDpHl0eXkgc2lzw6RsdMOkw6QgNCBlbGVtZW50dGnDpCBmb3JtYWF0aXNzYTonLFxyXG4gICAgICBjb2RlOiAnIFtwaXR1dXNhc3RlLCBsZXZleXNhc3RlLCBrb3JrZXVzLCBhaWthbGVpbWFdICcsXHJcbiAgICAgIGRlc2NyaXB0aW9uMjpcclxuICAgICAgICAnc2l0ZW4sIGV0dMOkIHZpaW1laW5lbiBlbGVtZW50dGkgb24gYWlrYWxlaW1hLiBBaWthbGVpbWEgdm9pIG9sbGEgbXVvZG9sdGFhbiB1bml4LXNla3VudGVqYSwga3V0ZW4gYDE1NjQxODQzNjNgIHRhaSBtaWxsaXNla3VudGVqYSwga3V0ZW4gYDE1NjQxODQzNjMwMDBgLicsXHJcbiAgICAgIGV4YW1wbGU6ICdFc2ltZXJra2k6J1xyXG4gICAgfSxcclxuICAgIGljb25JbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnTWl0ZW4gcGlpcnTDpMOkIGt1dmlhJyxcclxuICAgICAgZGVzY3JpcHRpb24xOlxyXG4gICAgICAgICdjc3YtdGllZG9zdG9zc2FzaSwgbHVvIHNhcmFrZSBuaW1lbHTDpCBpY29uLiBWb2l0IGrDpHR0w6TDpCBzZW4gdHloasOka3NpIGpvcyBldCBoYWx1YSBwaWlydMOkw6Qga3V2YWEgam9pbGxhaW4gcGlzdGVpbGzDpC4gS3VuIHNhcmFra2VlbiBuaW1pIG9uICcsXHJcbiAgICAgIGNvZGU6ICdpY29uJyxcclxuICAgICAgZGVzY3JpcHRpb24yOiAnIGtlcGxlci5nbCBsdW8gYXV0b21hYXR0aXNlc3RpIGt1dmF0YXNvbiBzaW51YSB2YXJ0ZW4uJyxcclxuICAgICAgZXhhbXBsZTogJ0VzaW1lcmtraTonLFxyXG4gICAgICBpY29uczogJ0t1dmF0J1xyXG4gICAgfSxcclxuICAgIHN0b3JhZ2VNYXBWaWV3ZXI6IHtcclxuICAgICAgbGFzdE1vZGlmaWVkOiAnVmlpbWVrc2kgbXVva2F0dHUge2xhc3RVcGRhdGVkfSBzaXR0ZW4nLFxyXG4gICAgICBiYWNrOiAnVGFrYWlzaW4nXHJcbiAgICB9LFxyXG4gICAgb3ZlcndyaXRlTWFwOiB7XHJcbiAgICAgIHRpdGxlOiAnVGFsbGVubmV0YWFuIGthcnR0YWEuLi4nLFxyXG4gICAgICBhbHJlYWR5RXhpc3RzOiAnb24gam8ge21hcFNhdmVkfTpzc2EuIEhhbHVhdGtvIHlsaWtpcmpvaXR0YWEgc2VuPydcclxuICAgIH0sXHJcbiAgICBsb2FkU3RvcmFnZU1hcDoge1xyXG4gICAgICBiYWNrOiAnVGFrYWlzaW4nLFxyXG4gICAgICBnb1RvUGFnZTogJ01lbmUgS2VwbGVyLmdsIHtkaXNwbGF5TmFtZX0gc2l2dWxsZXNpJyxcclxuICAgICAgc3RvcmFnZU1hcHM6ICdUYWxsZW5udXMgLyBLYXJ0YXQnLFxyXG4gICAgICBub1NhdmVkTWFwczogJ0VpIHRhbGxlbm5ldHR1amEga2FydHRvamEgdmllbMOkJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICB2aXNpYmxlTGF5ZXJzOiAnTsOka3l2aXNzw6Qgb2xldmF0IHRhc290JyxcclxuICAgIGxheWVyTGVnZW5kOiAnVGFzb24gc2VsaXRlJ1xyXG4gIH0sXHJcbiAgaW50ZXJhY3Rpb25zOiB7XHJcbiAgICB0b29sdGlwOiAnVmloamUnLFxyXG4gICAgYnJ1c2g6ICdIYXJqYScsXHJcbiAgICBjb29yZGluYXRlOiAnS29vcmRpbmFhdGl0J1xyXG4gIH0sXHJcbiAgbGF5ZXJCbGVuZGluZzoge1xyXG4gICAgdGl0bGU6ICdUYXNvamVuIHNla29pdHR1dnV1cycsXHJcbiAgICBhZGRpdGl2ZTogJ2xpc8Okw6R2w6QnLFxyXG4gICAgbm9ybWFsOiAnbm9ybWFhbGknLFxyXG4gICAgc3VidHJhY3RpdmU6ICd2w6RoZW50w6R2w6QnXHJcbiAgfSxcclxuICBjb2x1bW5zOiB7XHJcbiAgICB0aXRsZTogJ1NhcmFra2VldCcsXHJcbiAgICBsYXQ6ICdsYXQnLFxyXG4gICAgbG5nOiAnbG5nJyxcclxuICAgIGFsdGl0dWRlOiAna29ya2V1cycsXHJcbiAgICBpY29uOiAna3V2YScsXHJcbiAgICBnZW9qc29uOiAnZ2VvanNvbicsXHJcbiAgICBhcmM6IHtcclxuICAgICAgbGF0MDogJ2zDpGhkw7ZuIGxhdCcsXHJcbiAgICAgIGxuZzA6ICdsw6RoZMO2biBsbmcnLFxyXG4gICAgICBsYXQxOiAna29odGVlbiBsYXQnLFxyXG4gICAgICBsbmcxOiAna29odGVlbiBsbmcnXHJcbiAgICB9LFxyXG4gICAgZ3JpZDoge1xyXG4gICAgICB3b3JsZFVuaXRTaXplOiAnUnV1dHVqZW4ga29rbyAoa20pJ1xyXG4gICAgfSxcclxuICAgIGhleGFnb246IHtcclxuICAgICAgd29ybGRVbml0U2l6ZTogJ0hleGFnb25pZW4gc8OkZGUgKGttKSdcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbG9yOiB7XHJcbiAgICBjdXN0b21QYWxldHRlOiAnTXVrYXV0ZXR0dSBwYWxldHRpJyxcclxuICAgIHN0ZXBzOiAnYXNrZWxlZXQnLFxyXG4gICAgdHlwZTogJ3R5eXBwaScsXHJcbiAgICByZXZlcnNlZDogJ2vDpMOkbnRlaW5lbidcclxuICB9LFxyXG4gIHNjYWxlOiB7XHJcbiAgICBjb2xvclNjYWxlOiAnVsOkcmluIHNrYWFsYScsXHJcbiAgICBzaXplU2NhbGU6ICdLb29uIHNrYWFsYScsXHJcbiAgICBzdHJva2VTY2FsZTogJ1ZpaXZhbiBwYWtzdXVkZW4gc2thYWxhJyxcclxuICAgIHNjYWxlOiAnU2thYWxhJ1xyXG4gIH0sXHJcbiAgZmlsZVVwbG9hZGVyOiB7XHJcbiAgICBtZXNzYWdlOiAnUmFhaGFhIGphIHB1ZG90YSB0aWVkb3N0b3NpIHTDpG5uZScsXHJcbiAgICBjaHJvbWVNZXNzYWdlOlxyXG4gICAgICAnKkNocm9tZW4ga8OkeXR0w6Rqw6Q6IFJham9pdGEgdGllZG9zdG9rb2tvc2kgMjUwTWI6aGVuLiBKb3MgaGFsdWF0IHN1dXJlbXBpYSB0aWVkb3N0b2phLCBrb2tlaWxlIFNhZmFyaWEnLFxyXG4gICAgZGlzY2xhaW1lcjpcclxuICAgICAgJyprZXBsZXIuZ2wgb24gY2xpZW50LXNpZGUgc292ZWxsdXMsIGRhdGEgcHlzeXkgdmFpbiBzZWxhaW1lc3Nhc2kuLi4nICtcclxuICAgICAgJ1RpZXRvamEgZWkgbMOkaGV0ZXTDpCBwYWx2ZWxpbWVsbGUuJyxcclxuICAgIGNvbmZpZ1VwbG9hZE1lc3NhZ2U6XHJcbiAgICAgICdMaXPDpMOkICoqQ1NWKiosICoqR2VvSnNvbioqIHRhaSB0YWxsZW5uZXR0dSBrYXJ0dGEgKipKc29uKiouIEx1ZSBsaXPDpMOkIFsqKnR1ZXR1aXN0YSBmb3JtYWF0ZWlzdGEqKl0nLFxyXG4gICAgYnJvd3NlRmlsZXM6ICdzZWxhYSB0aWVkb3N0b2phc2knLFxyXG4gICAgdXBsb2FkaW5nOiAnbGFkYXRhYW4nLFxyXG4gICAgZmlsZU5vdFN1cHBvcnRlZDogJ1RpZWRvc3RvIHtlcnJvckZpbGVzfSBlaSBvbGUgdHVldHR1LicsXHJcbiAgICBvcjogJ3RhaSdcclxuICB9LFxyXG4gIGRlbnNpdHk6ICd0aWhleXMnLFxyXG4gICdCdWcgUmVwb3J0JzogJ0J1Z2lyYXBvcnRvaW50aScsXHJcbiAgJ1VzZXIgR3VpZGUnOiAnT3BhcycsXHJcbiAgU2F2ZTogJ1RhbGxlbm5hJyxcclxuICBTaGFyZTogJ0phYSdcclxufTtcclxuIl19