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
    weight: 'Espessura do texto',
    label: 'Rótulo',
    fillColor: 'Cor do preenchimento',
    color: 'Cor',
    strokeColor: 'Cor da borda',
    radius: 'Raio',
    outline: 'Contorno',
    stroke: 'Traçado',
    density: 'Densidade',
    height: 'Altura',
    sum: 'Soma',
    pointCount: 'Contagem de Pontos'
  },
  placeholder: {
    search: 'Pesquisar',
    selectField: 'Selecione um campo',
    yAxis: 'Eixo Y',
    selectType: 'Selecione um Tipo',
    selectValue: 'Selecione um valor',
    enterValue: 'Insira um valor',
    empty: 'Vazio'
  },
  misc: {
    by: '',
    valuesIn: 'Valores em',
    valueEquals: 'Valor igual a',
    dataSource: 'Origem dos dados',
    brushRadius: 'Raio do Traço (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Camadas do mapa',
    label: 'Rótulo',
    road: 'Estrada',
    border: 'Fronteira',
    building: 'Edifícios',
    water: 'Água',
    land: 'Terra',
    '3dBuilding': 'Edifícios em 3d'
  },
  panel: {
    text: {
      label: 'Rótulo',
      labelWithId: 'Rótulo {labelId}',
      fontSize: 'Tamanho da fonte',
      fontColor: 'Cor da fonte',
      textAnchor: 'Âncora do texto',
      alignment: 'Alinhamento',
      addMoreLabel: 'Adicionar mais Rótulos'
    }
  },
  sidebar: {
    panels: {
      layer: 'Camadas',
      filter: 'Filtros',
      interaction: 'Interações',
      basemap: 'Mapa base'
    }
  },
  layer: {
    required: 'Obrigatório*',
    radius: 'Raio',
    color: 'Cor',
    fillColor: 'Cor de preenchimento',
    outline: 'Contorno',
    weight: 'Espessura',
    propertyBasedOn: '{property} baseada em',
    coverage: 'Cobertura',
    stroke: 'Traço',
    strokeWidth: 'Largura do Traçado',
    strokeColor: 'Cor do Traçado',
    basic: 'Básico',
    trailLength: 'Comprimento da trilha',
    trailLengthDescription: 'Número de segundos para um caminho completamente desaparecer',
    newLayer: 'nova camada',
    elevationByDescription: 'Quando desligado, a altura é baseada na contagem de pontos',
    colorByDescription: 'Quando desligado, a cor é baseada na contagem de pontos',
    aggregateBy: '{field} agregado por',
    '3DModel': 'Modelo 3D',
    '3DModelOptions': 'Opções do Modelo 3D',
    type: {
      point: 'ponto',
      arc: 'arco',
      line: 'linha',
      grid: 'grade',
      hexbin: 'hexágono',
      polygon: 'polígono',
      geojson: 'geojson',
      cluster: 'grupo',
      icon: 'icon',
      heatmap: 'mapa de calor',
      hexagon: 'hexágono',
      hexagonid: 'H3',
      trip: 'viagem',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    strokeWidth: 'Largura do Traço',
    strokeWidthRange: 'Alcance da Largura do Traço',
    radius: 'Raio',
    fixedRadius: 'Raio ajustado para metro',
    fixedRadiusDescription: 'Raio do Mapa para Raio absoluto em metros, e.g. 5 para 5 metros',
    radiusRange: 'Alcance do Raio',
    clusterRadius: 'Raio do Agrupamento em pixels',
    radiusRangePixels: 'Alcance do Raio em pixels',
    opacity: 'Opacidade',
    coverage: 'Cobertura',
    outline: 'Contorno',
    colorRange: 'Alcance da Cor',
    stroke: 'Traçado',
    strokeColor: 'Cor do Traçado',
    strokeColorRange: 'Alcance da Cor do Traçado',
    targetColor: 'Cor de destino',
    colorAggregation: 'Agregação da Cor',
    heightAggregation: 'Agregação da Altura',
    resolutionRange: 'Alcance da Resolução',
    sizeScale: 'Escala de tamanho',
    worldUnitSize: 'Tamanho unitário do mundo',
    elevationScale: 'Escala de Elevação',
    heightScale: 'Escala de Altura',
    coverageRange: 'Alcance de cobertura',
    highPrecisionRendering: 'Renderização de Alta Precisão',
    highPrecisionRenderingDescription: 'Alta precisão irá em resultar em baixa performance',
    height: 'Altura',
    heightDescription: 'Clique no botão no canto superior direito para trocar para a visualização 3d',
    fill: 'Preenchimento',
    enablePolygonHeight: 'Habilitar Altura de Polígono',
    showWireframe: 'Mostrar Wireframe',
    weightIntensity: 'Intensidade da Espessura',
    zoomScale: 'Escala do Zoom',
    heightRange: 'Alcance da Altura'
  },
  layerManager: {
    addData: 'Adicionar Dados',
    addLayer: 'Adicionar Camada',
    layerBlending: 'Mistura de Camada'
  },
  mapManager: {
    mapStyle: 'Estilo do Mapa',
    addMapStyle: 'Adicionar Estilo de Mapa',
    '3dBuildingColor': 'Cor do Edifício 3D'
  },
  layerConfiguration: {
    defaultDescription: 'Calcular {property} baseada no campo selecionado',
    howTo: 'Como'
  },
  filterManager: {
    addFilter: 'Adicionar Filtro'
  },
  datasetTitle: {
    showDataTable: 'Mostrar tabela de dados',
    removeDataset: 'Remover tabela de dados'
  },
  datasetInfo: {
    rowCount: '{rowCount} linhas'
  },
  tooltip: {
    hideLayer: 'esconder camada',
    showLayer: 'mostrar camada',
    hideFeature: 'Esconder propriedade',
    showFeature: 'Mostrar propriedade',
    hide: 'esconder',
    show: 'mostrar',
    removeLayer: 'Remover Camada',
    layerSettings: 'Configurações de Camada',
    closePanel: 'Fechar painel atual',
    switchToDualView: 'Trocar para visualização dupla de mapa',
    showLegend: 'mostrar legenda',
    disable3DMap: 'Desabilitar Mapa 3D',
    DrawOnMap: 'Desenhar no mapa',
    selectLocale: 'Selecionar língua',
    hideLayerPanel: 'Esconder painel de camada',
    showLayerPanel: 'Mostrar painel de camada',
    moveToTop: 'Mover para o topo das camadas',
    selectBaseMapStyle: 'Selecionar o Estilo do Mapa Base',
    "delete": 'Deletar',
    timePlayback: 'Tempo de reprodução',
    cloudStorage: 'Armazenamento Cloud',
    '3DMap': ' Mapa 3D'
  },
  toolbar: _objectSpread({
    exportImage: 'Exportar Imagem',
    exportData: 'Exportar Dados',
    exportMap: 'Exportar Mapa',
    shareMapURL: 'Compartilhar URL do Mapa',
    saveMap: 'Salvar Mapa',
    select: 'selecionar',
    polygon: 'polígono',
    rectangle: 'retângulo',
    hide: 'esconder',
    show: 'mostrar'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Deletar Conjunto de Dados',
      addDataToMap: 'Adicionar Dados ao Mapa',
      exportImage: 'Exportar Imagem',
      exportData: 'Exportar Dados',
      exportMap: 'Exportar Mapa',
      addCustomMapboxStyle: 'Adicionar Estilo Mapbox Customizado',
      saveMap: 'Salvar Mapa',
      shareURL: 'Compartilhar URL'
    },
    button: {
      "delete": 'Deletar',
      download: 'Download',
      "export": 'Exportar',
      addStyle: 'Adicionar Estilo',
      save: 'Salvar',
      defaultCancel: 'Cancelar',
      defaultConfirm: 'Confirmar'
    },
    exportImage: {
      ratioTitle: 'Proporção',
      ratioDescription: 'Escolha a proporção para vários usos.',
      ratioOriginalScreen: 'Tela Original',
      ratioCustom: 'Customizado',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolução',
      resolutionDescription: 'Alta resolução é melhor para impressões.',
      mapLegendTitle: 'Legenda do Mapa',
      mapLegendAdd: 'Adicionar Legenda no mapa'
    },
    exportData: {
      datasetTitle: 'Conjunto de dados',
      datasetSubtitle: 'Escolha o conjunto de dados que você quer exportar',
      allDatasets: 'Todos',
      dataTypeTitle: 'Tipo de Dado',
      dataTypeSubtitle: 'Escolha o tipo de dados que você quer exportar',
      filterDataTitle: 'Filtrar Dados',
      filterDataSubtitle: 'Você pode escolher exportar os dados originais ou os dados filtrados',
      filteredData: 'Dados Filtrados',
      unfilteredData: 'Dados não filtrados',
      fileCount: '{fileCount} Arquivos',
      rowCount: '{rowCount} Linhas'
    },
    deleteData: {
      warning: 'você irá deletar esse conjunto de dados. Isso irá afetar {length} camadas'
    },
    addStyle: {
      publishTitle: '1. Publique o seu Estilo no Mapbox ou providencie a chave de acesso',
      publishSubtitle1: 'Você pode criar o seu próprio estilo em',
      publishSubtitle2: 'e',
      publishSubtitle3: 'publicar',
      publishSubtitle4: 'isso.',
      publishSubtitle5: 'Para utilizar estilo privado, cole a sua',
      publishSubtitle6: 'chave de acesso',
      publishSubtitle7: 'aqui. *kepler.gl é uma aplicação client-side, os dados permanecem no seu browser..',
      exampleToken: 'e.g. pk.abcdefg.xxxxxx',
      pasteTitle: '2. Cole a url do seu estilo',
      pasteSubtitle1: 'O que é uma',
      pasteSubtitle2: 'URL de estilo',
      namingTitle: '3. Nomeie o seu estilo'
    },
    shareMap: {
      shareUriTitle: 'Compartilhar a URL do Mapa',
      shareUriSubtitle: 'Gerar a url do mapa e compartilhar com outros',
      cloudTitle: 'Armazenamento Cloud',
      cloudSubtitle: 'Conecte-se e envie os dados do mapa para o seu armazenamento cloud pessoal',
      shareDisclaimer: 'kepler.gl irá salvar os dados do mapa em seu armazenamento cloud pessoal, apenas pessoas com a URL podem acessar o seu mapa e dados. ' + 'Você pode editar/deletar o arquivo de dados na sua conta de armazenamento cloud em qualquer momento.',
      gotoPage: 'Vá para a sua página Kepler.gl {currentProvider}'
    },
    statusPanel: {
      mapUploading: 'Enviando Mapa',
      error: 'Erro'
    },
    saveMap: {
      title: 'Armazenamento Cloud',
      subtitle: 'Conecte-se para salvar o mapa para o seu armazenamento cloud pessoal'
    },
    exportMap: {
      formatTitle: 'Formato do mapa',
      formatSubtitle: 'Escolher o formato de mapa para exportar',
      html: {
        selection: 'Exportar seu mapa em um arquivo html interativo.',
        tokenTitle: 'Chave de acesso do Mapbox',
        tokenSubtitle: 'Use a sua própria chave de acesso Mapbox em seu arquivo html (opcional)',
        tokenPlaceholder: 'Cole a sua chave de acesso Mapbox',
        tokenMisuseWarning: '* Se você não fornecer a sua própria chave de acesso, o mapa pode falhar em exibir a qualquer momento quando nós substituirmos a nossa para evitar mau uso. ',
        tokenDisclaimer: 'Você pode trocar a sua chave de acesso Mapbox mais tarde utizando as instruções seguintes: ',
        tokenUpdate: 'Como atualizar a chave de acesso de um mapa existente.',
        modeTitle: 'Modo do Mapa',
        modeSubtitle1: 'Selecionar o modo do aplicativo. Mais ',
        modeSubtitle2: 'info',
        modeDescription: 'Permitir usuários a {mode} o mapa',
        read: 'ler',
        edit: 'editar'
      },
      json: {
        configTitle: 'Configurações do Mapa',
        configDisclaimer: 'A configuração do mapa será incluida no arquivo Json. Se você está utilizando kepler.gl no seu próprio mapa. Você pode copiar essa configuração e passar para ele ',
        selection: 'Exportar atuais dados e configurações do mapa em um único arquivo Json. Você pode mais tarde abrir o mesmo mapa enviando esse arquivo para o kepler.gl.',
        disclaimer: '* Configuração do mapa é aclopado com conjunto de dados carregados. ‘dataId’ é utilizado para ligar as camadas, filtros, e dicas de contextos a conjunto de dados expecíficos. ' + 'Quando passando essa configuração para addDataToMap, tenha certeza de que o id do conjunto de dados combina com o(s) dataId/s nessa configuração.'
      }
    },
    loadingDialog: {
      loading: 'Carregando...'
    },
    loadData: {
      upload: 'Carregar arquivo',
      storage: 'Carregar do armazenamento'
    },
    tripInfo: {
      title: 'Como habilitar animação de viagem',
      description1: 'Para animar o caminho, o dado geoJSON deve conter `LineString` na sua propriedade geometry, e as coordenadas na LineString devem ter 4 elementos no seguinte formato',
      code: ' [longitude, latitude, altitude, data] ',
      description2: 'com um ultimo elemento sendo uma data. Um formato de data válida inclui segundos unix como `1564184363` ou em milisegundos como `1564184363000`.',
      example: 'Exemplo:'
    },
    iconInfo: {
      title: 'Como desenhar ícones',
      description1: 'No seu csv, crie uma coluna, coloque o nome do ícone que você quer desenhar nele. Você pode deixar o campo vazio se você não desejar que o ícone apareça para alguns pontos. Quando a coluna tem nome',
      code: 'icon',
      description2: ' kepler.gl irá automaticamente criar uma camada de ícone para você.',
      example: 'Exemplos:',
      icons: 'Ícones'
    },
    storageMapViewer: {
      lastModified: 'Modificado há {lastUpdated}',
      back: 'Voltar'
    },
    overwriteMap: {
      title: 'Salvando mapa...',
      alreadyExists: 'já existe no mapa {mapSaved}. Você desejaria sobrescrever o mapa?'
    },
    loadStorageMap: {
      back: 'Voltar',
      goToPage: 'Vá para a sua página {displayName} do Kepler.gl',
      storageMaps: 'Armazenamento / Mapas',
      noSavedMaps: 'Nenhum mapa salvo'
    }
  },
  header: {
    visibleLayers: 'Camadas Visíveis',
    layerLegend: 'Legenda da Camada'
  },
  interactions: {
    tooltip: 'Dica de contexto',
    brush: 'Pincel',
    coordinate: 'Coordenadas'
  },
  layerBlending: {
    title: 'Mistura de Camadas',
    additive: 'aditivo',
    normal: 'normal',
    subtractive: 'subtrativo'
  },
  columns: {
    title: 'Colunas',
    lat: 'lat',
    lng: 'lon',
    altitude: 'altitude',
    icon: 'ícone',
    geojson: 'geojson',
    arc: {
      lat0: 'origem lat',
      lng0: 'origem lng',
      lat1: 'destino lat',
      lng1: 'destino lng'
    },
    grid: {
      worldUnitSize: 'Tamanho da Grade (km)'
    },
    hexagon: {
      worldUnitSize: 'Raio do Hexágono (km)'
    }
  },
  color: {
    customPalette: 'Paletas customizadas',
    steps: 'caminhos',
    type: 'tipo',
    reversed: 'reverso'
  },
  scale: {
    colorScale: 'Escala da Cor',
    sizeScale: 'Tamanho da Escala',
    strokeScale: 'Escala do Traço',
    scale: 'Escala'
  },
  fileUploader: {
    message: 'Arraste e solte seu(s) arquivo(s) aqui',
    chromeMessage: '*Usuários do chrome: O limite de tamanho de arquivo é 250mb, se você precisa fazer upload de arquivos maiores tente o Safari',
    disclaimer: '*kepler.gl é uma aplicação client-side, sem um servidor backend. Os dados ficam apenas na sua máquina/browser. ' + 'Nenhuma informação ou dados de mapa é enviado para qualquer server.',
    configUploadMessage: 'Envie **CSV**, **GeoJson** ou mapas salvos **Json**. Leia mais sobre [**tipos de arquivos suportados**]',
    browseFiles: 'procure seus arquivos',
    uploading: 'Enviando',
    fileNotSupported: 'Arquivo {errorFiles} não é suportado.',
    or: 'ou'
  },
  density: 'densidade',
  'Bug Report': 'Reportar Bug',
  'User Guide': 'Guia do Usuário',
  Save: 'Salvar',
  Share: 'Compartilhar'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vcHQuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJ3ZWlnaHQiLCJsYWJlbCIsImZpbGxDb2xvciIsImNvbG9yIiwic3Ryb2tlQ29sb3IiLCJyYWRpdXMiLCJvdXRsaW5lIiwic3Ryb2tlIiwiZGVuc2l0eSIsImhlaWdodCIsInN1bSIsInBvaW50Q291bnQiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInNlbGVjdEZpZWxkIiwieUF4aXMiLCJzZWxlY3RUeXBlIiwic2VsZWN0VmFsdWUiLCJlbnRlclZhbHVlIiwiZW1wdHkiLCJtaXNjIiwiYnkiLCJ2YWx1ZXNJbiIsInZhbHVlRXF1YWxzIiwiZGF0YVNvdXJjZSIsImJydXNoUmFkaXVzIiwibWFwTGF5ZXJzIiwidGl0bGUiLCJyb2FkIiwiYm9yZGVyIiwiYnVpbGRpbmciLCJ3YXRlciIsImxhbmQiLCJwYW5lbCIsInRleHQiLCJsYWJlbFdpdGhJZCIsImZvbnRTaXplIiwiZm9udENvbG9yIiwidGV4dEFuY2hvciIsImFsaWdubWVudCIsImFkZE1vcmVMYWJlbCIsInNpZGViYXIiLCJwYW5lbHMiLCJsYXllciIsImZpbHRlciIsImludGVyYWN0aW9uIiwiYmFzZW1hcCIsInJlcXVpcmVkIiwicHJvcGVydHlCYXNlZE9uIiwiY292ZXJhZ2UiLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVmlzQ29uZmlncyIsInN0cm9rZVdpZHRoUmFuZ2UiLCJmaXhlZFJhZGl1cyIsImZpeGVkUmFkaXVzRGVzY3JpcHRpb24iLCJyYWRpdXNSYW5nZSIsImNsdXN0ZXJSYWRpdXMiLCJyYWRpdXNSYW5nZVBpeGVscyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInRhcmdldENvbG9yIiwiY29sb3JBZ2dyZWdhdGlvbiIsImhlaWdodEFnZ3JlZ2F0aW9uIiwicmVzb2x1dGlvblJhbmdlIiwic2l6ZVNjYWxlIiwid29ybGRVbml0U2l6ZSIsImVsZXZhdGlvblNjYWxlIiwiaGVpZ2h0U2NhbGUiLCJjb3ZlcmFnZVJhbmdlIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZyIsImhpZ2hQcmVjaXNpb25SZW5kZXJpbmdEZXNjcmlwdGlvbiIsImhlaWdodERlc2NyaXB0aW9uIiwiZmlsbCIsImVuYWJsZVBvbHlnb25IZWlnaHQiLCJzaG93V2lyZWZyYW1lIiwid2VpZ2h0SW50ZW5zaXR5Iiwiem9vbVNjYWxlIiwiaGVpZ2h0UmFuZ2UiLCJsYXllck1hbmFnZXIiLCJhZGREYXRhIiwiYWRkTGF5ZXIiLCJsYXllckJsZW5kaW5nIiwibWFwTWFuYWdlciIsIm1hcFN0eWxlIiwiYWRkTWFwU3R5bGUiLCJsYXllckNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJob3dUbyIsImZpbHRlck1hbmFnZXIiLCJhZGRGaWx0ZXIiLCJkYXRhc2V0VGl0bGUiLCJzaG93RGF0YVRhYmxlIiwicmVtb3ZlRGF0YXNldCIsImRhdGFzZXRJbmZvIiwicm93Q291bnQiLCJ0b29sdGlwIiwiaGlkZUxheWVyIiwic2hvd0xheWVyIiwiaGlkZUZlYXR1cmUiLCJzaG93RmVhdHVyZSIsImhpZGUiLCJzaG93IiwicmVtb3ZlTGF5ZXIiLCJsYXllclNldHRpbmdzIiwiY2xvc2VQYW5lbCIsInN3aXRjaFRvRHVhbFZpZXciLCJzaG93TGVnZW5kIiwiZGlzYWJsZTNETWFwIiwiRHJhd09uTWFwIiwic2VsZWN0TG9jYWxlIiwiaGlkZUxheWVyUGFuZWwiLCJzaG93TGF5ZXJQYW5lbCIsIm1vdmVUb1RvcCIsInNlbGVjdEJhc2VNYXBTdHlsZSIsInRpbWVQbGF5YmFjayIsImNsb3VkU3RvcmFnZSIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwibW9kYWwiLCJkZWxldGVEYXRhc2V0IiwiYWRkRGF0YVRvTWFwIiwiYWRkQ3VzdG9tTWFwYm94U3R5bGUiLCJzaGFyZVVSTCIsImJ1dHRvbiIsImRvd25sb2FkIiwiYWRkU3R5bGUiLCJzYXZlIiwiZGVmYXVsdENhbmNlbCIsImRlZmF1bHRDb25maXJtIiwicmF0aW9UaXRsZSIsInJhdGlvRGVzY3JpcHRpb24iLCJyYXRpb09yaWdpbmFsU2NyZWVuIiwicmF0aW9DdXN0b20iLCJyYXRpbzRfMyIsInJhdGlvMTZfOSIsInJlc29sdXRpb25UaXRsZSIsInJlc29sdXRpb25EZXNjcmlwdGlvbiIsIm1hcExlZ2VuZFRpdGxlIiwibWFwTGVnZW5kQWRkIiwiZGF0YXNldFN1YnRpdGxlIiwiYWxsRGF0YXNldHMiLCJkYXRhVHlwZVRpdGxlIiwiZGF0YVR5cGVTdWJ0aXRsZSIsImZpbHRlckRhdGFUaXRsZSIsImZpbHRlckRhdGFTdWJ0aXRsZSIsImZpbHRlcmVkRGF0YSIsInVuZmlsdGVyZWREYXRhIiwiZmlsZUNvdW50IiwiZGVsZXRlRGF0YSIsIndhcm5pbmciLCJwdWJsaXNoVGl0bGUiLCJwdWJsaXNoU3VidGl0bGUxIiwicHVibGlzaFN1YnRpdGxlMiIsInB1Ymxpc2hTdWJ0aXRsZTMiLCJwdWJsaXNoU3VidGl0bGU0IiwicHVibGlzaFN1YnRpdGxlNSIsInB1Ymxpc2hTdWJ0aXRsZTYiLCJwdWJsaXNoU3VidGl0bGU3IiwiZXhhbXBsZVRva2VuIiwicGFzdGVUaXRsZSIsInBhc3RlU3VidGl0bGUxIiwicGFzdGVTdWJ0aXRsZTIiLCJuYW1pbmdUaXRsZSIsInNoYXJlTWFwIiwic2hhcmVVcmlUaXRsZSIsInNoYXJlVXJpU3VidGl0bGUiLCJjbG91ZFRpdGxlIiwiY2xvdWRTdWJ0aXRsZSIsInNoYXJlRGlzY2xhaW1lciIsImdvdG9QYWdlIiwic3RhdHVzUGFuZWwiLCJtYXBVcGxvYWRpbmciLCJlcnJvciIsInN1YnRpdGxlIiwiZm9ybWF0VGl0bGUiLCJmb3JtYXRTdWJ0aXRsZSIsImh0bWwiLCJzZWxlY3Rpb24iLCJ0b2tlblRpdGxlIiwidG9rZW5TdWJ0aXRsZSIsInRva2VuUGxhY2Vob2xkZXIiLCJ0b2tlbk1pc3VzZVdhcm5pbmciLCJ0b2tlbkRpc2NsYWltZXIiLCJ0b2tlblVwZGF0ZSIsIm1vZGVUaXRsZSIsIm1vZGVTdWJ0aXRsZTEiLCJtb2RlU3VidGl0bGUyIiwibW9kZURlc2NyaXB0aW9uIiwicmVhZCIsImVkaXQiLCJqc29uIiwiY29uZmlnVGl0bGUiLCJjb25maWdEaXNjbGFpbWVyIiwiZGlzY2xhaW1lciIsImxvYWRpbmdEaWFsb2ciLCJsb2FkaW5nIiwibG9hZERhdGEiLCJ1cGxvYWQiLCJzdG9yYWdlIiwidHJpcEluZm8iLCJkZXNjcmlwdGlvbjEiLCJjb2RlIiwiZGVzY3JpcHRpb24yIiwiZXhhbXBsZSIsImljb25JbmZvIiwiaWNvbnMiLCJzdG9yYWdlTWFwVmlld2VyIiwibGFzdE1vZGlmaWVkIiwiYmFjayIsIm92ZXJ3cml0ZU1hcCIsImFscmVhZHlFeGlzdHMiLCJsb2FkU3RvcmFnZU1hcCIsImdvVG9QYWdlIiwic3RvcmFnZU1hcHMiLCJub1NhdmVkTWFwcyIsImhlYWRlciIsInZpc2libGVMYXllcnMiLCJsYXllckxlZ2VuZCIsImludGVyYWN0aW9ucyIsImJydXNoIiwiY29vcmRpbmF0ZSIsImFkZGl0aXZlIiwibm9ybWFsIiwic3VidHJhY3RpdmUiLCJjb2x1bW5zIiwibGF0IiwibG5nIiwiYWx0aXR1ZGUiLCJsYXQwIiwibG5nMCIsImxhdDEiLCJsbmcxIiwiY3VzdG9tUGFsZXR0ZSIsInN0ZXBzIiwicmV2ZXJzZWQiLCJzY2FsZSIsImNvbG9yU2NhbGUiLCJzdHJva2VTY2FsZSIsImZpbGVVcGxvYWRlciIsIm1lc3NhZ2UiLCJjaHJvbWVNZXNzYWdlIiwiY29uZmlnVXBsb2FkTWVzc2FnZSIsImJyb3dzZUZpbGVzIiwidXBsb2FkaW5nIiwiZmlsZU5vdFN1cHBvcnRlZCIsIm9yIiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxvQkFEQTtBQUVSQyxJQUFBQSxLQUFLLEVBQUUsUUFGQztBQUdSQyxJQUFBQSxTQUFTLEVBQUUsc0JBSEg7QUFJUkMsSUFBQUEsS0FBSyxFQUFFLEtBSkM7QUFLUkMsSUFBQUEsV0FBVyxFQUFFLGNBTEw7QUFNUkMsSUFBQUEsTUFBTSxFQUFFLE1BTkE7QUFPUkMsSUFBQUEsT0FBTyxFQUFFLFVBUEQ7QUFRUkMsSUFBQUEsTUFBTSxFQUFFLFNBUkE7QUFTUkMsSUFBQUEsT0FBTyxFQUFFLFdBVEQ7QUFVUkMsSUFBQUEsTUFBTSxFQUFFLFFBVkE7QUFXUkMsSUFBQUEsR0FBRyxFQUFFLE1BWEc7QUFZUkMsSUFBQUEsVUFBVSxFQUFFO0FBWkosR0FERztBQWViQyxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsTUFBTSxFQUFFLFdBREc7QUFFWEMsSUFBQUEsV0FBVyxFQUFFLG9CQUZGO0FBR1hDLElBQUFBLEtBQUssRUFBRSxRQUhJO0FBSVhDLElBQUFBLFVBQVUsRUFBRSxtQkFKRDtBQUtYQyxJQUFBQSxXQUFXLEVBQUUsb0JBTEY7QUFNWEMsSUFBQUEsVUFBVSxFQUFFLGlCQU5EO0FBT1hDLElBQUFBLEtBQUssRUFBRTtBQVBJLEdBZkE7QUF3QmJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxFQUFFLEVBQUUsRUFEQTtBQUVKQyxJQUFBQSxRQUFRLEVBQUUsWUFGTjtBQUdKQyxJQUFBQSxXQUFXLEVBQUUsZUFIVDtBQUlKQyxJQUFBQSxVQUFVLEVBQUUsa0JBSlI7QUFLSkMsSUFB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RDtBQStaYjRRLEVBQUFBLElBQUksRUFBRSxRQS9aTztBQWdhYkMsRUFBQUEsS0FBSyxFQUFFO0FBaGFNLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0xPQ0FMRVN9IGZyb20gJy4vbG9jYWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcGVydHk6IHtcclxuICAgIHdlaWdodDogJ0VzcGVzc3VyYSBkbyB0ZXh0bycsXHJcbiAgICBsYWJlbDogJ1LDs3R1bG8nLFxyXG4gICAgZmlsbENvbG9yOiAnQ29yIGRvIHByZWVuY2hpbWVudG8nLFxyXG4gICAgY29sb3I6ICdDb3InLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICdDb3IgZGEgYm9yZGEnLFxyXG4gICAgcmFkaXVzOiAnUmFpbycsXHJcbiAgICBvdXRsaW5lOiAnQ29udG9ybm8nLFxyXG4gICAgc3Ryb2tlOiAnVHJhw6dhZG8nLFxyXG4gICAgZGVuc2l0eTogJ0RlbnNpZGFkZScsXHJcbiAgICBoZWlnaHQ6ICdBbHR1cmEnLFxyXG4gICAgc3VtOiAnU29tYScsXHJcbiAgICBwb2ludENvdW50OiAnQ29udGFnZW0gZGUgUG9udG9zJ1xyXG4gIH0sXHJcbiAgcGxhY2Vob2xkZXI6IHtcclxuICAgIHNlYXJjaDogJ1Blc3F1aXNhcicsXHJcbiAgICBzZWxlY3RGaWVsZDogJ1NlbGVjaW9uZSB1bSBjYW1wbycsXHJcbiAgICB5QXhpczogJ0VpeG8gWScsXHJcbiAgICBzZWxlY3RUeXBlOiAnU2VsZWNpb25lIHVtIFRpcG8nLFxyXG4gICAgc2VsZWN0VmFsdWU6ICdTZWxlY2lvbmUgdW0gdmFsb3InLFxyXG4gICAgZW50ZXJWYWx1ZTogJ0luc2lyYSB1bSB2YWxvcicsXHJcbiAgICBlbXB0eTogJ1ZhemlvJ1xyXG4gIH0sXHJcbiAgbWlzYzoge1xyXG4gICAgYnk6ICcnLFxyXG4gICAgdmFsdWVzSW46ICdWYWxvcmVzIGVtJyxcclxuICAgIHZhbHVlRXF1YWxzOiAnVmFsb3IgaWd1YWwgYScsXHJcbiAgICBkYXRhU291cmNlOiAnT3JpZ2VtIGRvcyBkYWRvcycsXHJcbiAgICBicnVzaFJhZGl1czogJ1JhaW8gZG8gVHJhw6dvIChrbSknLFxyXG4gICAgZW1wdHk6ICcgJ1xyXG4gIH0sXHJcbiAgbWFwTGF5ZXJzOiB7XHJcbiAgICB0aXRsZTogJ0NhbWFkYXMgZG8gbWFwYScsXHJcbiAgICBsYWJlbDogJ1LDs3R1bG8nLFxyXG4gICAgcm9hZDogJ0VzdHJhZGEnLFxyXG4gICAgYm9yZGVyOiAnRnJvbnRlaXJhJyxcclxuICAgIGJ1aWxkaW5nOiAnRWRpZsOtY2lvcycsXHJcbiAgICB3YXRlcjogJ8OBZ3VhJyxcclxuICAgIGxhbmQ6ICdUZXJyYScsXHJcbiAgICAnM2RCdWlsZGluZyc6ICdFZGlmw61jaW9zIGVtIDNkJ1xyXG4gIH0sXHJcbiAgcGFuZWw6IHtcclxuICAgIHRleHQ6IHtcclxuICAgICAgbGFiZWw6ICdSw7N0dWxvJyxcclxuICAgICAgbGFiZWxXaXRoSWQ6ICdSw7N0dWxvIHtsYWJlbElkfScsXHJcbiAgICAgIGZvbnRTaXplOiAnVGFtYW5obyBkYSBmb250ZScsXHJcbiAgICAgIGZvbnRDb2xvcjogJ0NvciBkYSBmb250ZScsXHJcbiAgICAgIHRleHRBbmNob3I6ICfDgm5jb3JhIGRvIHRleHRvJyxcclxuICAgICAgYWxpZ25tZW50OiAnQWxpbmhhbWVudG8nLFxyXG4gICAgICBhZGRNb3JlTGFiZWw6ICdBZGljaW9uYXIgbWFpcyBSw7N0dWxvcydcclxuICAgIH1cclxuICB9LFxyXG4gIHNpZGViYXI6IHtcclxuICAgIHBhbmVsczoge1xyXG4gICAgICBsYXllcjogJ0NhbWFkYXMnLFxyXG4gICAgICBmaWx0ZXI6ICdGaWx0cm9zJyxcclxuICAgICAgaW50ZXJhY3Rpb246ICdJbnRlcmHDp8O1ZXMnLFxyXG4gICAgICBiYXNlbWFwOiAnTWFwYSBiYXNlJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGF5ZXI6IHtcclxuICAgIHJlcXVpcmVkOiAnT2JyaWdhdMOzcmlvKicsXHJcbiAgICByYWRpdXM6ICdSYWlvJyxcclxuICAgIGNvbG9yOiAnQ29yJyxcclxuICAgIGZpbGxDb2xvcjogJ0NvciBkZSBwcmVlbmNoaW1lbnRvJyxcclxuICAgIG91dGxpbmU6ICdDb250b3JubycsXHJcbiAgICB3ZWlnaHQ6ICdFc3Blc3N1cmEnLFxyXG4gICAgcHJvcGVydHlCYXNlZE9uOiAne3Byb3BlcnR5fSBiYXNlYWRhIGVtJyxcclxuICAgIGNvdmVyYWdlOiAnQ29iZXJ0dXJhJyxcclxuICAgIHN0cm9rZTogJ1RyYcOnbycsXHJcbiAgICBzdHJva2VXaWR0aDogJ0xhcmd1cmEgZG8gVHJhw6dhZG8nLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICdDb3IgZG8gVHJhw6dhZG8nLFxyXG4gICAgYmFzaWM6ICdCw6FzaWNvJyxcclxuICAgIHRyYWlsTGVuZ3RoOiAnQ29tcHJpbWVudG8gZGEgdHJpbGhhJyxcclxuICAgIHRyYWlsTGVuZ3RoRGVzY3JpcHRpb246ICdOw7ptZXJvIGRlIHNlZ3VuZG9zIHBhcmEgdW0gY2FtaW5obyBjb21wbGV0YW1lbnRlIGRlc2FwYXJlY2VyJyxcclxuICAgIG5ld0xheWVyOiAnbm92YSBjYW1hZGEnLFxyXG4gICAgZWxldmF0aW9uQnlEZXNjcmlwdGlvbjogJ1F1YW5kbyBkZXNsaWdhZG8sIGEgYWx0dXJhIMOpIGJhc2VhZGEgbmEgY29udGFnZW0gZGUgcG9udG9zJyxcclxuICAgIGNvbG9yQnlEZXNjcmlwdGlvbjogJ1F1YW5kbyBkZXNsaWdhZG8sIGEgY29yIMOpIGJhc2VhZGEgbmEgY29udGFnZW0gZGUgcG9udG9zJyxcclxuICAgIGFnZ3JlZ2F0ZUJ5OiAne2ZpZWxkfSBhZ3JlZ2FkbyBwb3InLFxyXG4gICAgJzNETW9kZWwnOiAnTW9kZWxvIDNEJyxcclxuICAgICczRE1vZGVsT3B0aW9ucyc6ICdPcMOnw7VlcyBkbyBNb2RlbG8gM0QnLFxyXG4gICAgdHlwZToge1xyXG4gICAgICBwb2ludDogJ3BvbnRvJyxcclxuICAgICAgYXJjOiAnYXJjbycsXHJcbiAgICAgIGxpbmU6ICdsaW5oYScsXHJcbiAgICAgIGdyaWQ6ICdncmFkZScsXHJcbiAgICAgIGhleGJpbjogJ2hleMOhZ29ubycsXHJcbiAgICAgIHBvbHlnb246ICdwb2zDrWdvbm8nLFxyXG4gICAgICBnZW9qc29uOiAnZ2VvanNvbicsXHJcbiAgICAgIGNsdXN0ZXI6ICdncnVwbycsXHJcbiAgICAgIGljb246ICdpY29uJyxcclxuICAgICAgaGVhdG1hcDogJ21hcGEgZGUgY2Fsb3InLFxyXG4gICAgICBoZXhhZ29uOiAnaGV4w6Fnb25vJyxcclxuICAgICAgaGV4YWdvbmlkOiAnSDMnLFxyXG4gICAgICB0cmlwOiAndmlhZ2VtJyxcclxuICAgICAgczI6ICdTMicsXHJcbiAgICAgICczZCc6ICczRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGxheWVyVmlzQ29uZmlnczoge1xyXG4gICAgc3Ryb2tlV2lkdGg6ICdMYXJndXJhIGRvIFRyYcOnbycsXHJcbiAgICBzdHJva2VXaWR0aFJhbmdlOiAnQWxjYW5jZSBkYSBMYXJndXJhIGRvIFRyYcOnbycsXHJcbiAgICByYWRpdXM6ICdSYWlvJyxcclxuICAgIGZpeGVkUmFkaXVzOiAnUmFpbyBhanVzdGFkbyBwYXJhIG1ldHJvJyxcclxuICAgIGZpeGVkUmFkaXVzRGVzY3JpcHRpb246ICdSYWlvIGRvIE1hcGEgcGFyYSBSYWlvIGFic29sdXRvIGVtIG1ldHJvcywgZS5nLiA1IHBhcmEgNSBtZXRyb3MnLFxyXG4gICAgcmFkaXVzUmFuZ2U6ICdBbGNhbmNlIGRvIFJhaW8nLFxyXG4gICAgY2x1c3RlclJhZGl1czogJ1JhaW8gZG8gQWdydXBhbWVudG8gZW0gcGl4ZWxzJyxcclxuICAgIHJhZGl1c1JhbmdlUGl4ZWxzOiAnQWxjYW5jZSBkbyBSYWlvIGVtIHBpeGVscycsXHJcbiAgICBvcGFjaXR5OiAnT3BhY2lkYWRlJyxcclxuICAgIGNvdmVyYWdlOiAnQ29iZXJ0dXJhJyxcclxuICAgIG91dGxpbmU6ICdDb250b3JubycsXHJcbiAgICBjb2xvclJhbmdlOiAnQWxjYW5jZSBkYSBDb3InLFxyXG4gICAgc3Ryb2tlOiAnVHJhw6dhZG8nLFxyXG4gICAgc3Ryb2tlQ29sb3I6ICdDb3IgZG8gVHJhw6dhZG8nLFxyXG4gICAgc3Ryb2tlQ29sb3JSYW5nZTogJ0FsY2FuY2UgZGEgQ29yIGRvIFRyYcOnYWRvJyxcclxuICAgIHRhcmdldENvbG9yOiAnQ29yIGRlIGRlc3Rpbm8nLFxyXG4gICAgY29sb3JBZ2dyZWdhdGlvbjogJ0FncmVnYcOnw6NvIGRhIENvcicsXHJcbiAgICBoZWlnaHRBZ2dyZWdhdGlvbjogJ0FncmVnYcOnw6NvIGRhIEFsdHVyYScsXHJcbiAgICByZXNvbHV0aW9uUmFuZ2U6ICdBbGNhbmNlIGRhIFJlc29sdcOnw6NvJyxcclxuICAgIHNpemVTY2FsZTogJ0VzY2FsYSBkZSB0YW1hbmhvJyxcclxuICAgIHdvcmxkVW5pdFNpemU6ICdUYW1hbmhvIHVuaXTDoXJpbyBkbyBtdW5kbycsXHJcbiAgICBlbGV2YXRpb25TY2FsZTogJ0VzY2FsYSBkZSBFbGV2YcOnw6NvJyxcclxuICAgIGhlaWdodFNjYWxlOiAnRXNjYWxhIGRlIEFsdHVyYScsXHJcbiAgICBjb3ZlcmFnZVJhbmdlOiAnQWxjYW5jZSBkZSBjb2JlcnR1cmEnLFxyXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZzogJ1JlbmRlcml6YcOnw6NvIGRlIEFsdGEgUHJlY2lzw6NvJyxcclxuICAgIGhpZ2hQcmVjaXNpb25SZW5kZXJpbmdEZXNjcmlwdGlvbjogJ0FsdGEgcHJlY2lzw6NvIGlyw6EgZW0gcmVzdWx0YXIgZW0gYmFpeGEgcGVyZm9ybWFuY2UnLFxyXG4gICAgaGVpZ2h0OiAnQWx0dXJhJyxcclxuICAgIGhlaWdodERlc2NyaXB0aW9uOlxyXG4gICAgICAnQ2xpcXVlIG5vIGJvdMOjbyBubyBjYW50byBzdXBlcmlvciBkaXJlaXRvIHBhcmEgdHJvY2FyIHBhcmEgYSB2aXN1YWxpemHDp8OjbyAzZCcsXHJcbiAgICBmaWxsOiAnUHJlZW5jaGltZW50bycsXHJcbiAgICBlbmFibGVQb2x5Z29uSGVpZ2h0OiAnSGFiaWxpdGFyIEFsdHVyYSBkZSBQb2zDrWdvbm8nLFxyXG4gICAgc2hvd1dpcmVmcmFtZTogJ01vc3RyYXIgV2lyZWZyYW1lJyxcclxuICAgIHdlaWdodEludGVuc2l0eTogJ0ludGVuc2lkYWRlIGRhIEVzcGVzc3VyYScsXHJcbiAgICB6b29tU2NhbGU6ICdFc2NhbGEgZG8gWm9vbScsXHJcbiAgICBoZWlnaHRSYW5nZTogJ0FsY2FuY2UgZGEgQWx0dXJhJ1xyXG4gIH0sXHJcbiAgbGF5ZXJNYW5hZ2VyOiB7XHJcbiAgICBhZGREYXRhOiAnQWRpY2lvbmFyIERhZG9zJyxcclxuICAgIGFkZExheWVyOiAnQWRpY2lvbmFyIENhbWFkYScsXHJcbiAgICBsYXllckJsZW5kaW5nOiAnTWlzdHVyYSBkZSBDYW1hZGEnXHJcbiAgfSxcclxuICBtYXBNYW5hZ2VyOiB7XHJcbiAgICBtYXBTdHlsZTogJ0VzdGlsbyBkbyBNYXBhJyxcclxuICAgIGFkZE1hcFN0eWxlOiAnQWRpY2lvbmFyIEVzdGlsbyBkZSBNYXBhJyxcclxuICAgICczZEJ1aWxkaW5nQ29sb3InOiAnQ29yIGRvIEVkaWbDrWNpbyAzRCdcclxuICB9LFxyXG4gIGxheWVyQ29uZmlndXJhdGlvbjoge1xyXG4gICAgZGVmYXVsdERlc2NyaXB0aW9uOiAnQ2FsY3VsYXIge3Byb3BlcnR5fSBiYXNlYWRhIG5vIGNhbXBvIHNlbGVjaW9uYWRvJyxcclxuICAgIGhvd1RvOiAnQ29tbydcclxuICB9LFxyXG4gIGZpbHRlck1hbmFnZXI6IHtcclxuICAgIGFkZEZpbHRlcjogJ0FkaWNpb25hciBGaWx0cm8nXHJcbiAgfSxcclxuICBkYXRhc2V0VGl0bGU6IHtcclxuICAgIHNob3dEYXRhVGFibGU6ICdNb3N0cmFyIHRhYmVsYSBkZSBkYWRvcycsXHJcbiAgICByZW1vdmVEYXRhc2V0OiAnUmVtb3ZlciB0YWJlbGEgZGUgZGFkb3MnXHJcbiAgfSxcclxuICBkYXRhc2V0SW5mbzoge1xyXG4gICAgcm93Q291bnQ6ICd7cm93Q291bnR9IGxpbmhhcydcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIGhpZGVMYXllcjogJ2VzY29uZGVyIGNhbWFkYScsXHJcbiAgICBzaG93TGF5ZXI6ICdtb3N0cmFyIGNhbWFkYScsXHJcbiAgICBoaWRlRmVhdHVyZTogJ0VzY29uZGVyIHByb3ByaWVkYWRlJyxcclxuICAgIHNob3dGZWF0dXJlOiAnTW9zdHJhciBwcm9wcmllZGFkZScsXHJcbiAgICBoaWRlOiAnZXNjb25kZXInLFxyXG4gICAgc2hvdzogJ21vc3RyYXInLFxyXG4gICAgcmVtb3ZlTGF5ZXI6ICdSZW1vdmVyIENhbWFkYScsXHJcbiAgICBsYXllclNldHRpbmdzOiAnQ29uZmlndXJhw6fDtWVzIGRlIENhbWFkYScsXHJcbiAgICBjbG9zZVBhbmVsOiAnRmVjaGFyIHBhaW5lbCBhdHVhbCcsXHJcbiAgICBzd2l0Y2hUb0R1YWxWaWV3OiAnVHJvY2FyIHBhcmEgdmlzdWFsaXphw6fDo28gZHVwbGEgZGUgbWFwYScsXHJcbiAgICBzaG93TGVnZW5kOiAnbW9zdHJhciBsZWdlbmRhJyxcclxuICAgIGRpc2FibGUzRE1hcDogJ0Rlc2FiaWxpdGFyIE1hcGEgM0QnLFxyXG4gICAgRHJhd09uTWFwOiAnRGVzZW5oYXIgbm8gbWFwYScsXHJcbiAgICBzZWxlY3RMb2NhbGU6ICdTZWxlY2lvbmFyIGzDrW5ndWEnLFxyXG4gICAgaGlkZUxheWVyUGFuZWw6ICdFc2NvbmRlciBwYWluZWwgZGUgY2FtYWRhJyxcclxuICAgIHNob3dMYXllclBhbmVsOiAnTW9zdHJhciBwYWluZWwgZGUgY2FtYWRhJyxcclxuICAgIG1vdmVUb1RvcDogJ01vdmVyIHBhcmEgbyB0b3BvIGRhcyBjYW1hZGFzJyxcclxuICAgIHNlbGVjdEJhc2VNYXBTdHlsZTogJ1NlbGVjaW9uYXIgbyBFc3RpbG8gZG8gTWFwYSBCYXNlJyxcclxuICAgIGRlbGV0ZTogJ0RlbGV0YXInLFxyXG4gICAgdGltZVBsYXliYWNrOiAnVGVtcG8gZGUgcmVwcm9kdcOnw6NvJyxcclxuICAgIGNsb3VkU3RvcmFnZTogJ0FybWF6ZW5hbWVudG8gQ2xvdWQnLFxyXG4gICAgJzNETWFwJzogJyBNYXBhIDNEJ1xyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgZXhwb3J0SW1hZ2U6ICdFeHBvcnRhciBJbWFnZW0nLFxyXG4gICAgZXhwb3J0RGF0YTogJ0V4cG9ydGFyIERhZG9zJyxcclxuICAgIGV4cG9ydE1hcDogJ0V4cG9ydGFyIE1hcGEnLFxyXG4gICAgc2hhcmVNYXBVUkw6ICdDb21wYXJ0aWxoYXIgVVJMIGRvIE1hcGEnLFxyXG4gICAgc2F2ZU1hcDogJ1NhbHZhciBNYXBhJyxcclxuICAgIHNlbGVjdDogJ3NlbGVjaW9uYXInLFxyXG4gICAgcG9seWdvbjogJ3BvbMOtZ29ubycsXHJcbiAgICByZWN0YW5nbGU6ICdyZXTDom5ndWxvJyxcclxuICAgIGhpZGU6ICdlc2NvbmRlcicsXHJcbiAgICBzaG93OiAnbW9zdHJhcicsXHJcbiAgICAuLi5MT0NBTEVTXHJcbiAgfSxcclxuICBtb2RhbDoge1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZGVsZXRlRGF0YXNldDogJ0RlbGV0YXIgQ29uanVudG8gZGUgRGFkb3MnLFxyXG4gICAgICBhZGREYXRhVG9NYXA6ICdBZGljaW9uYXIgRGFkb3MgYW8gTWFwYScsXHJcbiAgICAgIGV4cG9ydEltYWdlOiAnRXhwb3J0YXIgSW1hZ2VtJyxcclxuICAgICAgZXhwb3J0RGF0YTogJ0V4cG9ydGFyIERhZG9zJyxcclxuICAgICAgZXhwb3J0TWFwOiAnRXhwb3J0YXIgTWFwYScsXHJcbiAgICAgIGFkZEN1c3RvbU1hcGJveFN0eWxlOiAnQWRpY2lvbmFyIEVzdGlsbyBNYXBib3ggQ3VzdG9taXphZG8nLFxyXG4gICAgICBzYXZlTWFwOiAnU2FsdmFyIE1hcGEnLFxyXG4gICAgICBzaGFyZVVSTDogJ0NvbXBhcnRpbGhhciBVUkwnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGRlbGV0ZTogJ0RlbGV0YXInLFxyXG4gICAgICBkb3dubG9hZDogJ0Rvd25sb2FkJyxcclxuICAgICAgZXhwb3J0OiAnRXhwb3J0YXInLFxyXG4gICAgICBhZGRTdHlsZTogJ0FkaWNpb25hciBFc3RpbG8nLFxyXG4gICAgICBzYXZlOiAnU2FsdmFyJyxcclxuICAgICAgZGVmYXVsdENhbmNlbDogJ0NhbmNlbGFyJyxcclxuICAgICAgZGVmYXVsdENvbmZpcm06ICdDb25maXJtYXInXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0SW1hZ2U6IHtcclxuICAgICAgcmF0aW9UaXRsZTogJ1Byb3BvcsOnw6NvJyxcclxuICAgICAgcmF0aW9EZXNjcmlwdGlvbjogJ0VzY29saGEgYSBwcm9wb3LDp8OjbyBwYXJhIHbDoXJpb3MgdXNvcy4nLFxyXG4gICAgICByYXRpb09yaWdpbmFsU2NyZWVuOiAnVGVsYSBPcmlnaW5hbCcsXHJcbiAgICAgIHJhdGlvQ3VzdG9tOiAnQ3VzdG9taXphZG8nLFxyXG4gICAgICByYXRpbzRfMzogJzQ6MycsXHJcbiAgICAgIHJhdGlvMTZfOTogJzE2OjknLFxyXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICdSZXNvbHXDp8OjbycsXHJcbiAgICAgIHJlc29sdXRpb25EZXNjcmlwdGlvbjogJ0FsdGEgcmVzb2x1w6fDo28gw6kgbWVsaG9yIHBhcmEgaW1wcmVzc8O1ZXMuJyxcclxuICAgICAgbWFwTGVnZW5kVGl0bGU6ICdMZWdlbmRhIGRvIE1hcGEnLFxyXG4gICAgICBtYXBMZWdlbmRBZGQ6ICdBZGljaW9uYXIgTGVnZW5kYSBubyBtYXBhJ1xyXG4gICAgfSxcclxuICAgIGV4cG9ydERhdGE6IHtcclxuICAgICAgZGF0YXNldFRpdGxlOiAnQ29uanVudG8gZGUgZGFkb3MnLFxyXG4gICAgICBkYXRhc2V0U3VidGl0bGU6ICdFc2NvbGhhIG8gY29uanVudG8gZGUgZGFkb3MgcXVlIHZvY8OqIHF1ZXIgZXhwb3J0YXInLFxyXG4gICAgICBhbGxEYXRhc2V0czogJ1RvZG9zJyxcclxuICAgICAgZGF0YVR5cGVUaXRsZTogJ1RpcG8gZGUgRGFkbycsXHJcbiAgICAgIGRhdGFUeXBlU3VidGl0bGU6ICdFc2NvbGhhIG8gdGlwbyBkZSBkYWRvcyBxdWUgdm9jw6ogcXVlciBleHBvcnRhcicsXHJcbiAgICAgIGZpbHRlckRhdGFUaXRsZTogJ0ZpbHRyYXIgRGFkb3MnLFxyXG4gICAgICBmaWx0ZXJEYXRhU3VidGl0bGU6ICdWb2PDqiBwb2RlIGVzY29saGVyIGV4cG9ydGFyIG9zIGRhZG9zIG9yaWdpbmFpcyBvdSBvcyBkYWRvcyBmaWx0cmFkb3MnLFxyXG4gICAgICBmaWx0ZXJlZERhdGE6ICdEYWRvcyBGaWx0cmFkb3MnLFxyXG4gICAgICB1bmZpbHRlcmVkRGF0YTogJ0RhZG9zIG7Do28gZmlsdHJhZG9zJyxcclxuICAgICAgZmlsZUNvdW50OiAne2ZpbGVDb3VudH0gQXJxdWl2b3MnLFxyXG4gICAgICByb3dDb3VudDogJ3tyb3dDb3VudH0gTGluaGFzJ1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZURhdGE6IHtcclxuICAgICAgd2FybmluZzogJ3ZvY8OqIGlyw6EgZGVsZXRhciBlc3NlIGNvbmp1bnRvIGRlIGRhZG9zLiBJc3NvIGlyw6EgYWZldGFyIHtsZW5ndGh9IGNhbWFkYXMnXHJcbiAgICB9LFxyXG4gICAgYWRkU3R5bGU6IHtcclxuICAgICAgcHVibGlzaFRpdGxlOiAnMS4gUHVibGlxdWUgbyBzZXUgRXN0aWxvIG5vIE1hcGJveCBvdSBwcm92aWRlbmNpZSBhIGNoYXZlIGRlIGFjZXNzbycsXHJcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTE6ICdWb2PDqiBwb2RlIGNyaWFyIG8gc2V1IHByw7NwcmlvIGVzdGlsbyBlbScsXHJcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTI6ICdlJyxcclxuICAgICAgcHVibGlzaFN1YnRpdGxlMzogJ3B1YmxpY2FyJyxcclxuICAgICAgcHVibGlzaFN1YnRpdGxlNDogJ2lzc28uJyxcclxuICAgICAgcHVibGlzaFN1YnRpdGxlNTogJ1BhcmEgdXRpbGl6YXIgZXN0aWxvIHByaXZhZG8sIGNvbGUgYSBzdWEnLFxyXG4gICAgICBwdWJsaXNoU3VidGl0bGU2OiAnY2hhdmUgZGUgYWNlc3NvJyxcclxuICAgICAgcHVibGlzaFN1YnRpdGxlNzpcclxuICAgICAgICAnYXF1aS4gKmtlcGxlci5nbCDDqSB1bWEgYXBsaWNhw6fDo28gY2xpZW50LXNpZGUsIG9zIGRhZG9zIHBlcm1hbmVjZW0gbm8gc2V1IGJyb3dzZXIuLicsXHJcbiAgICAgIGV4YW1wbGVUb2tlbjogJ2UuZy4gcGsuYWJjZGVmZy54eHh4eHgnLFxyXG4gICAgICBwYXN0ZVRpdGxlOiAnMi4gQ29sZSBhIHVybCBkbyBzZXUgZXN0aWxvJyxcclxuICAgICAgcGFzdGVTdWJ0aXRsZTE6ICdPIHF1ZSDDqSB1bWEnLFxyXG4gICAgICBwYXN0ZVN1YnRpdGxlMjogJ1VSTCBkZSBlc3RpbG8nLFxyXG4gICAgICBuYW1pbmdUaXRsZTogJzMuIE5vbWVpZSBvIHNldSBlc3RpbG8nXHJcbiAgICB9LFxyXG4gICAgc2hhcmVNYXA6IHtcclxuICAgICAgc2hhcmVVcmlUaXRsZTogJ0NvbXBhcnRpbGhhciBhIFVSTCBkbyBNYXBhJyxcclxuICAgICAgc2hhcmVVcmlTdWJ0aXRsZTogJ0dlcmFyIGEgdXJsIGRvIG1hcGEgZSBjb21wYXJ0aWxoYXIgY29tIG91dHJvcycsXHJcbiAgICAgIGNsb3VkVGl0bGU6ICdBcm1hemVuYW1lbnRvIENsb3VkJyxcclxuICAgICAgY2xvdWRTdWJ0aXRsZTogJ0NvbmVjdGUtc2UgZSBlbnZpZSBvcyBkYWRvcyBkbyBtYXBhIHBhcmEgbyBzZXUgYXJtYXplbmFtZW50byBjbG91ZCBwZXNzb2FsJyxcclxuICAgICAgc2hhcmVEaXNjbGFpbWVyOlxyXG4gICAgICAgICdrZXBsZXIuZ2wgaXLDoSBzYWx2YXIgb3MgZGFkb3MgZG8gbWFwYSBlbSBzZXUgYXJtYXplbmFtZW50byBjbG91ZCBwZXNzb2FsLCBhcGVuYXMgcGVzc29hcyBjb20gYSBVUkwgcG9kZW0gYWNlc3NhciBvIHNldSBtYXBhIGUgZGFkb3MuICcgK1xyXG4gICAgICAgICdWb2PDqiBwb2RlIGVkaXRhci9kZWxldGFyIG8gYXJxdWl2byBkZSBkYWRvcyBuYSBzdWEgY29udGEgZGUgYXJtYXplbmFtZW50byBjbG91ZCBlbSBxdWFscXVlciBtb21lbnRvLicsXHJcbiAgICAgIGdvdG9QYWdlOiAnVsOhIHBhcmEgYSBzdWEgcMOhZ2luYSBLZXBsZXIuZ2wge2N1cnJlbnRQcm92aWRlcn0nXHJcbiAgICB9LFxyXG4gICAgc3RhdHVzUGFuZWw6IHtcclxuICAgICAgbWFwVXBsb2FkaW5nOiAnRW52aWFuZG8gTWFwYScsXHJcbiAgICAgIGVycm9yOiAnRXJybydcclxuICAgIH0sXHJcbiAgICBzYXZlTWFwOiB7XHJcbiAgICAgIHRpdGxlOiAnQXJtYXplbmFtZW50byBDbG91ZCcsXHJcbiAgICAgIHN1YnRpdGxlOiAnQ29uZWN0ZS1zZSBwYXJhIHNhbHZhciBvIG1hcGEgcGFyYSBvIHNldSBhcm1hemVuYW1lbnRvIGNsb3VkIHBlc3NvYWwnXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0TWFwOiB7XHJcbiAgICAgIGZvcm1hdFRpdGxlOiAnRm9ybWF0byBkbyBtYXBhJyxcclxuICAgICAgZm9ybWF0U3VidGl0bGU6ICdFc2NvbGhlciBvIGZvcm1hdG8gZGUgbWFwYSBwYXJhIGV4cG9ydGFyJyxcclxuICAgICAgaHRtbDoge1xyXG4gICAgICAgIHNlbGVjdGlvbjogJ0V4cG9ydGFyIHNldSBtYXBhIGVtIHVtIGFycXVpdm8gaHRtbCBpbnRlcmF0aXZvLicsXHJcbiAgICAgICAgdG9rZW5UaXRsZTogJ0NoYXZlIGRlIGFjZXNzbyBkbyBNYXBib3gnLFxyXG4gICAgICAgIHRva2VuU3VidGl0bGU6ICdVc2UgYSBzdWEgcHLDs3ByaWEgY2hhdmUgZGUgYWNlc3NvIE1hcGJveCBlbSBzZXUgYXJxdWl2byBodG1sIChvcGNpb25hbCknLFxyXG4gICAgICAgIHRva2VuUGxhY2Vob2xkZXI6ICdDb2xlIGEgc3VhIGNoYXZlIGRlIGFjZXNzbyBNYXBib3gnLFxyXG4gICAgICAgIHRva2VuTWlzdXNlV2FybmluZzpcclxuICAgICAgICAgICcqIFNlIHZvY8OqIG7Do28gZm9ybmVjZXIgYSBzdWEgcHLDs3ByaWEgY2hhdmUgZGUgYWNlc3NvLCBvIG1hcGEgcG9kZSBmYWxoYXIgZW0gZXhpYmlyIGEgcXVhbHF1ZXIgbW9tZW50byBxdWFuZG8gbsOzcyBzdWJzdGl0dWlybW9zIGEgbm9zc2EgcGFyYSBldml0YXIgbWF1IHVzby4gJyxcclxuICAgICAgICB0b2tlbkRpc2NsYWltZXI6XHJcbiAgICAgICAgICAnVm9jw6ogcG9kZSB0cm9jYXIgYSBzdWEgY2hhdmUgZGUgYWNlc3NvIE1hcGJveCBtYWlzIHRhcmRlIHV0aXphbmRvIGFzIGluc3RydcOnw7VlcyBzZWd1aW50ZXM6ICcsXHJcbiAgICAgICAgdG9rZW5VcGRhdGU6ICdDb21vIGF0dWFsaXphciBhIGNoYXZlIGRlIGFjZXNzbyBkZSB1bSBtYXBhIGV4aXN0ZW50ZS4nLFxyXG4gICAgICAgIG1vZGVUaXRsZTogJ01vZG8gZG8gTWFwYScsXHJcbiAgICAgICAgbW9kZVN1YnRpdGxlMTogJ1NlbGVjaW9uYXIgbyBtb2RvIGRvIGFwbGljYXRpdm8uIE1haXMgJyxcclxuICAgICAgICBtb2RlU3VidGl0bGUyOiAnaW5mbycsXHJcbiAgICAgICAgbW9kZURlc2NyaXB0aW9uOiAnUGVybWl0aXIgdXN1w6FyaW9zIGEge21vZGV9IG8gbWFwYScsXHJcbiAgICAgICAgcmVhZDogJ2xlcicsXHJcbiAgICAgICAgZWRpdDogJ2VkaXRhcidcclxuICAgICAgfSxcclxuICAgICAganNvbjoge1xyXG4gICAgICAgIGNvbmZpZ1RpdGxlOiAnQ29uZmlndXJhw6fDtWVzIGRvIE1hcGEnLFxyXG4gICAgICAgIGNvbmZpZ0Rpc2NsYWltZXI6XHJcbiAgICAgICAgICAnQSBjb25maWd1cmHDp8OjbyBkbyBtYXBhIHNlcsOhIGluY2x1aWRhIG5vIGFycXVpdm8gSnNvbi4gU2Ugdm9jw6ogZXN0w6EgdXRpbGl6YW5kbyBrZXBsZXIuZ2wgbm8gc2V1IHByw7NwcmlvIG1hcGEuIFZvY8OqIHBvZGUgY29waWFyIGVzc2EgY29uZmlndXJhw6fDo28gZSBwYXNzYXIgcGFyYSBlbGUgJyxcclxuICAgICAgICBzZWxlY3Rpb246XHJcbiAgICAgICAgICAnRXhwb3J0YXIgYXR1YWlzIGRhZG9zIGUgY29uZmlndXJhw6fDtWVzIGRvIG1hcGEgZW0gdW0gw7puaWNvIGFycXVpdm8gSnNvbi4gVm9jw6ogcG9kZSBtYWlzIHRhcmRlIGFicmlyIG8gbWVzbW8gbWFwYSBlbnZpYW5kbyBlc3NlIGFycXVpdm8gcGFyYSBvIGtlcGxlci5nbC4nLFxyXG4gICAgICAgIGRpc2NsYWltZXI6XHJcbiAgICAgICAgICAnKiBDb25maWd1cmHDp8OjbyBkbyBtYXBhIMOpIGFjbG9wYWRvIGNvbSBjb25qdW50byBkZSBkYWRvcyBjYXJyZWdhZG9zLiDigJhkYXRhSWTigJkgw6kgdXRpbGl6YWRvIHBhcmEgbGlnYXIgYXMgY2FtYWRhcywgZmlsdHJvcywgZSBkaWNhcyBkZSBjb250ZXh0b3MgYSBjb25qdW50byBkZSBkYWRvcyBleHBlY8OtZmljb3MuICcgK1xyXG4gICAgICAgICAgJ1F1YW5kbyBwYXNzYW5kbyBlc3NhIGNvbmZpZ3VyYcOnw6NvIHBhcmEgYWRkRGF0YVRvTWFwLCB0ZW5oYSBjZXJ0ZXphIGRlIHF1ZSBvIGlkIGRvIGNvbmp1bnRvIGRlIGRhZG9zIGNvbWJpbmEgY29tIG8ocykgZGF0YUlkL3MgbmVzc2EgY29uZmlndXJhw6fDo28uJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbG9hZGluZ0RpYWxvZzoge1xyXG4gICAgICBsb2FkaW5nOiAnQ2FycmVnYW5kby4uLidcclxuICAgIH0sXHJcbiAgICBsb2FkRGF0YToge1xyXG4gICAgICB1cGxvYWQ6ICdDYXJyZWdhciBhcnF1aXZvJyxcclxuICAgICAgc3RvcmFnZTogJ0NhcnJlZ2FyIGRvIGFybWF6ZW5hbWVudG8nXHJcbiAgICB9LFxyXG4gICAgdHJpcEluZm86IHtcclxuICAgICAgdGl0bGU6ICdDb21vIGhhYmlsaXRhciBhbmltYcOnw6NvIGRlIHZpYWdlbScsXHJcbiAgICAgIGRlc2NyaXB0aW9uMTpcclxuICAgICAgICAnUGFyYSBhbmltYXIgbyBjYW1pbmhvLCBvIGRhZG8gZ2VvSlNPTiBkZXZlIGNvbnRlciBgTGluZVN0cmluZ2AgbmEgc3VhIHByb3ByaWVkYWRlIGdlb21ldHJ5LCBlIGFzIGNvb3JkZW5hZGFzIG5hIExpbmVTdHJpbmcgZGV2ZW0gdGVyIDQgZWxlbWVudG9zIG5vIHNlZ3VpbnRlIGZvcm1hdG8nLFxyXG4gICAgICBjb2RlOiAnIFtsb25naXR1ZGUsIGxhdGl0dWRlLCBhbHRpdHVkZSwgZGF0YV0gJyxcclxuICAgICAgZGVzY3JpcHRpb24yOlxyXG4gICAgICAgICdjb20gdW0gdWx0aW1vIGVsZW1lbnRvIHNlbmRvIHVtYSBkYXRhLiBVbSBmb3JtYXRvIGRlIGRhdGEgdsOhbGlkYSBpbmNsdWkgc2VndW5kb3MgdW5peCBjb21vIGAxNTY0MTg0MzYzYCBvdSBlbSBtaWxpc2VndW5kb3MgY29tbyBgMTU2NDE4NDM2MzAwMGAuJyxcclxuICAgICAgZXhhbXBsZTogJ0V4ZW1wbG86J1xyXG4gICAgfSxcclxuICAgIGljb25JbmZvOiB7XHJcbiAgICAgIHRpdGxlOiAnQ29tbyBkZXNlbmhhciDDrWNvbmVzJyxcclxuICAgICAgZGVzY3JpcHRpb24xOlxyXG4gICAgICAgICdObyBzZXUgY3N2LCBjcmllIHVtYSBjb2x1bmEsIGNvbG9xdWUgbyBub21lIGRvIMOtY29uZSBxdWUgdm9jw6ogcXVlciBkZXNlbmhhciBuZWxlLiBWb2PDqiBwb2RlIGRlaXhhciBvIGNhbXBvIHZhemlvIHNlIHZvY8OqIG7Do28gZGVzZWphciBxdWUgbyDDrWNvbmUgYXBhcmXDp2EgcGFyYSBhbGd1bnMgcG9udG9zLiBRdWFuZG8gYSBjb2x1bmEgdGVtIG5vbWUnLFxyXG4gICAgICBjb2RlOiAnaWNvbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uMjogJyBrZXBsZXIuZ2wgaXLDoSBhdXRvbWF0aWNhbWVudGUgY3JpYXIgdW1hIGNhbWFkYSBkZSDDrWNvbmUgcGFyYSB2b2PDqi4nLFxyXG4gICAgICBleGFtcGxlOiAnRXhlbXBsb3M6JyxcclxuICAgICAgaWNvbnM6ICfDjWNvbmVzJ1xyXG4gICAgfSxcclxuICAgIHN0b3JhZ2VNYXBWaWV3ZXI6IHtcclxuICAgICAgbGFzdE1vZGlmaWVkOiAnTW9kaWZpY2FkbyBow6Ege2xhc3RVcGRhdGVkfScsXHJcbiAgICAgIGJhY2s6ICdWb2x0YXInXHJcbiAgICB9LFxyXG4gICAgb3ZlcndyaXRlTWFwOiB7XHJcbiAgICAgIHRpdGxlOiAnU2FsdmFuZG8gbWFwYS4uLicsXHJcbiAgICAgIGFscmVhZHlFeGlzdHM6ICdqw6EgZXhpc3RlIG5vIG1hcGEge21hcFNhdmVkfS4gVm9jw6ogZGVzZWphcmlhIHNvYnJlc2NyZXZlciBvIG1hcGE/J1xyXG4gICAgfSxcclxuICAgIGxvYWRTdG9yYWdlTWFwOiB7XHJcbiAgICAgIGJhY2s6ICdWb2x0YXInLFxyXG4gICAgICBnb1RvUGFnZTogJ1bDoSBwYXJhIGEgc3VhIHDDoWdpbmEge2Rpc3BsYXlOYW1lfSBkbyBLZXBsZXIuZ2wnLFxyXG4gICAgICBzdG9yYWdlTWFwczogJ0FybWF6ZW5hbWVudG8gLyBNYXBhcycsXHJcbiAgICAgIG5vU2F2ZWRNYXBzOiAnTmVuaHVtIG1hcGEgc2Fsdm8nXHJcbiAgICB9XHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIHZpc2libGVMYXllcnM6ICdDYW1hZGFzIFZpc8OtdmVpcycsXHJcbiAgICBsYXllckxlZ2VuZDogJ0xlZ2VuZGEgZGEgQ2FtYWRhJ1xyXG4gIH0sXHJcbiAgaW50ZXJhY3Rpb25zOiB7XHJcbiAgICB0b29sdGlwOiAnRGljYSBkZSBjb250ZXh0bycsXHJcbiAgICBicnVzaDogJ1BpbmNlbCcsXHJcbiAgICBjb29yZGluYXRlOiAnQ29vcmRlbmFkYXMnXHJcbiAgfSxcclxuICBsYXllckJsZW5kaW5nOiB7XHJcbiAgICB0aXRsZTogJ01pc3R1cmEgZGUgQ2FtYWRhcycsXHJcbiAgICBhZGRpdGl2ZTogJ2FkaXRpdm8nLFxyXG4gICAgbm9ybWFsOiAnbm9ybWFsJyxcclxuICAgIHN1YnRyYWN0aXZlOiAnc3VidHJhdGl2bydcclxuICB9LFxyXG4gIGNvbHVtbnM6IHtcclxuICAgIHRpdGxlOiAnQ29sdW5hcycsXHJcbiAgICBsYXQ6ICdsYXQnLFxyXG4gICAgbG5nOiAnbG9uJyxcclxuICAgIGFsdGl0dWRlOiAnYWx0aXR1ZGUnLFxyXG4gICAgaWNvbjogJ8OtY29uZScsXHJcbiAgICBnZW9qc29uOiAnZ2VvanNvbicsXHJcbiAgICBhcmM6IHtcclxuICAgICAgbGF0MDogJ29yaWdlbSBsYXQnLFxyXG4gICAgICBsbmcwOiAnb3JpZ2VtIGxuZycsXHJcbiAgICAgIGxhdDE6ICdkZXN0aW5vIGxhdCcsXHJcbiAgICAgIGxuZzE6ICdkZXN0aW5vIGxuZydcclxuICAgIH0sXHJcbiAgICBncmlkOiB7XHJcbiAgICAgIHdvcmxkVW5pdFNpemU6ICdUYW1hbmhvIGRhIEdyYWRlIChrbSknXHJcbiAgICB9LFxyXG4gICAgaGV4YWdvbjoge1xyXG4gICAgICB3b3JsZFVuaXRTaXplOiAnUmFpbyBkbyBIZXjDoWdvbm8gKGttKSdcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbG9yOiB7XHJcbiAgICBjdXN0b21QYWxldHRlOiAnUGFsZXRhcyBjdXN0b21pemFkYXMnLFxyXG4gICAgc3RlcHM6ICdjYW1pbmhvcycsXHJcbiAgICB0eXBlOiAndGlwbycsXHJcbiAgICByZXZlcnNlZDogJ3JldmVyc28nXHJcbiAgfSxcclxuICBzY2FsZToge1xyXG4gICAgY29sb3JTY2FsZTogJ0VzY2FsYSBkYSBDb3InLFxyXG4gICAgc2l6ZVNjYWxlOiAnVGFtYW5obyBkYSBFc2NhbGEnLFxyXG4gICAgc3Ryb2tlU2NhbGU6ICdFc2NhbGEgZG8gVHJhw6dvJyxcclxuICAgIHNjYWxlOiAnRXNjYWxhJ1xyXG4gIH0sXHJcbiAgZmlsZVVwbG9hZGVyOiB7XHJcbiAgICBtZXNzYWdlOiAnQXJyYXN0ZSBlIHNvbHRlIHNldShzKSBhcnF1aXZvKHMpIGFxdWknLFxyXG4gICAgY2hyb21lTWVzc2FnZTpcclxuICAgICAgJypVc3XDoXJpb3MgZG8gY2hyb21lOiBPIGxpbWl0ZSBkZSB0YW1hbmhvIGRlIGFycXVpdm8gw6kgMjUwbWIsIHNlIHZvY8OqIHByZWNpc2EgZmF6ZXIgdXBsb2FkIGRlIGFycXVpdm9zIG1haW9yZXMgdGVudGUgbyBTYWZhcmknLFxyXG4gICAgZGlzY2xhaW1lcjpcclxuICAgICAgJyprZXBsZXIuZ2wgw6kgdW1hIGFwbGljYcOnw6NvIGNsaWVudC1zaWRlLCBzZW0gdW0gc2Vydmlkb3IgYmFja2VuZC4gT3MgZGFkb3MgZmljYW0gYXBlbmFzIG5hIHN1YSBtw6FxdWluYS9icm93c2VyLiAnICtcclxuICAgICAgJ05lbmh1bWEgaW5mb3JtYcOnw6NvIG91IGRhZG9zIGRlIG1hcGEgw6kgZW52aWFkbyBwYXJhIHF1YWxxdWVyIHNlcnZlci4nLFxyXG4gICAgY29uZmlnVXBsb2FkTWVzc2FnZTpcclxuICAgICAgJ0VudmllICoqQ1NWKiosICoqR2VvSnNvbioqIG91IG1hcGFzIHNhbHZvcyAqKkpzb24qKi4gTGVpYSBtYWlzIHNvYnJlIFsqKnRpcG9zIGRlIGFycXVpdm9zIHN1cG9ydGFkb3MqKl0nLFxyXG4gICAgYnJvd3NlRmlsZXM6ICdwcm9jdXJlIHNldXMgYXJxdWl2b3MnLFxyXG4gICAgdXBsb2FkaW5nOiAnRW52aWFuZG8nLFxyXG4gICAgZmlsZU5vdFN1cHBvcnRlZDogJ0FycXVpdm8ge2Vycm9yRmlsZXN9IG7Do28gw6kgc3Vwb3J0YWRvLicsXHJcbiAgICBvcjogJ291J1xyXG4gIH0sXHJcbiAgZGVuc2l0eTogJ2RlbnNpZGFkZScsXHJcbiAgJ0J1ZyBSZXBvcnQnOiAnUmVwb3J0YXIgQnVnJyxcclxuICAnVXNlciBHdWlkZSc6ICdHdWlhIGRvIFVzdcOhcmlvJyxcclxuICBTYXZlOiAnU2FsdmFyJyxcclxuICBTaGFyZTogJ0NvbXBhcnRpbGhhcidcclxufTtcclxuIl19