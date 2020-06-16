"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _reactDom = require("react-dom");

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _document = _interopRequireDefault(require("global/document"));

var _modalDialog = _interopRequireDefault(require("./modals/modal-dialog"));

var _schemas = _interopRequireDefault(require("../schemas"));

var _exportUtils = require("../utils/export-utils");

var _mapInfoUtils = require("../utils/map-info-utils");

var _deleteDataModal = _interopRequireDefault(require("./modals/delete-data-modal"));

var _overwriteMapModal = _interopRequireDefault(require("./modals/overwrite-map-modal"));

var _dataTableModal = _interopRequireDefault(require("./modals/data-table-modal"));

var _loadDataModal = _interopRequireDefault(require("./modals/load-data-modal"));

var _exportImageModal = _interopRequireDefault(require("./modals/export-image-modal"));

var _exportDataModal = _interopRequireDefault(require("./modals/export-data-modal"));

var _exportMapModal = _interopRequireDefault(require("./modals/export-map-modal/export-map-modal"));

var _addMapStyleModal = _interopRequireDefault(require("./modals/add-map-style-modal"));

var _saveMapModal = _interopRequireDefault(require("./modals/save-map-modal"));

var _shareMapModal = _interopRequireDefault(require("./modals/share-map-modal"));

var _mediaBreakpoints = require("../styles/media-breakpoints");

var _defaultSettings = require("../constants/default-settings");

var _keyevent = _interopRequireDefault(require("../constants/keyevent"));

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n                width: ", "px;\n              "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n              ", ";\n              ", "\n            "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: 960px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 60px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 40%;\n  padding: 40px 40px 32px 40px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n    margin: 0 auto;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 80px;\n  padding: 32px 0 0 0;\n  width: 90vw;\n  max-width: 90vw;\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DataTableModalStyle = (0, _styledComponents.css)(_templateObject(), _mediaBreakpoints.media.portable(_templateObject2()), _mediaBreakpoints.media.palm(_templateObject3()));
var smallModalCss = (0, _styledComponents.css)(_templateObject4());
var LoadDataModalStyle = (0, _styledComponents.css)(_templateObject5());
var DefaultStyle = (0, _styledComponents.css)(_templateObject6());
ModalContainerFactory.deps = [_deleteDataModal["default"], _overwriteMapModal["default"], _dataTableModal["default"], _loadDataModal["default"], _exportImageModal["default"], _exportDataModal["default"], _exportMapModal["default"], _addMapStyleModal["default"], _modalDialog["default"], _saveMapModal["default"], _shareMapModal["default"]];

function ModalContainerFactory(DeleteDatasetModal, OverWriteMapModal, DataTableModal, LoadDataModal, ExportImageModal, ExportDataModal, ExportMapModal, AddMapStyleModal, ModalDialog, SaveMapModal, ShareMapModal) {
  var ModalWrapper = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ModalWrapper, _Component);

    var _super = _createSuper(ModalWrapper);

    function ModalWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, ModalWrapper);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "componentDidMount", function () {
        _document["default"].addEventListener('keyup', _this._onKeyUp);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cloudProviders", function (props) {
        return props.cloudProviders;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "providerWithStorage", (0, _reselect.createSelector)(_this.cloudProviders, function (cloudProviders) {
        return cloudProviders.filter(function (p) {
          return p.hasPrivateStorage();
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "providerWithShare", (0, _reselect.createSelector)(_this.cloudProviders, function (cloudProviders) {
        return cloudProviders.filter(function (p) {
          return p.hasSharingUrl();
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyUp", function (event) {
        var keyCode = event.keyCode;

        if (keyCode === _keyevent["default"].DOM_VK_ESCAPE) {
          _this._closeModal();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_closeModal", function () {
        _this.props.uiStateActions.toggleModal(null);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deleteDataset", function (key) {
        _this.props.visStateActions.removeDataset(key);

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onAddCustomMapStyle", function () {
        _this.props.mapStyleActions.addCustomMapStyle();

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onFileUpload", function (blob) {
        _this.props.visStateActions.loadFiles(blob);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportImage", function () {
        if (!_this.props.uiState.exportImage.exporting) {
          (0, _exportUtils.exportImage)(_this.props, _this.props.uiState.exportImage);

          _this.props.uiStateActions.cleanupExportImage();

          _this._closeModal();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportData", function () {
        (0, _exportUtils.exportData)(_this.props, _this.props.uiState.exportData);

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportMap", function () {
        var uiState = _this.props.uiState;
        var format = uiState.exportMap.format;
        (format === _defaultSettings.EXPORT_MAP_FORMATS.HTML ? _exportUtils.exportHtml : _exportUtils.exportJson)(_this.props, _this.props.uiState.exportMap[format] || {});

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_exportFileToCloud", function (_ref) {
        var provider = _ref.provider,
            isPublic = _ref.isPublic,
            overwrite = _ref.overwrite,
            closeModal = _ref.closeModal;
        var toSave = (0, _exportUtils.exportMap)(_this.props);

        _this.props.providerActions.exportFileToCloud({
          mapData: toSave,
          provider: provider,
          options: {
            isPublic: isPublic,
            overwrite: overwrite
          },
          closeModal: closeModal,
          onSuccess: _this.props.onExportToCloudSuccess,
          onError: _this.props.onExportToCloudError
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSaveMap", function () {
        var overwrite = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var currentProvider = _this.props.providerState.currentProvider;

        var provider = _this.props.cloudProviders.find(function (p) {
          return p.name === currentProvider;
        });

        _this._exportFileToCloud({
          provider: provider,
          isPublic: false,
          overwrite: overwrite,
          closeModal: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOverwriteMap", function () {
        _this._onSaveMap(true);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onShareMapUrl", function (provider) {
        _this._exportFileToCloud({
          provider: provider,
          isPublic: true,
          overwrite: false,
          closeModal: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCloseSaveMap", function () {
        _this.props.providerActions.resetProviderStatus();

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onLoadCloudMap", function (payload) {
        _this.props.providerActions.loadCloudMap(_objectSpread(_objectSpread({}, payload), {}, {
          onSuccess: _this.props.onLoadCloudMapSuccess,
          onError: _this.props.onLoadCloudMapError
        }));
      });
      return _this;
    }

    (0, _createClass2["default"])(ModalWrapper, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _document["default"].removeEventListener('keyup', this._onKeyUp);
      }
    }, {
      key: "render",

      /* eslint-disable complexity */
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            containerW = _this$props.containerW,
            containerH = _this$props.containerH,
            mapStyle = _this$props.mapStyle,
            mapState = _this$props.mapState,
            uiState = _this$props.uiState,
            visState = _this$props.visState,
            rootNode = _this$props.rootNode,
            visStateActions = _this$props.visStateActions,
            uiStateActions = _this$props.uiStateActions,
            providerState = _this$props.providerState;
        var currentModal = uiState.currentModal,
            datasetKeyToRemove = uiState.datasetKeyToRemove;
        var datasets = visState.datasets,
            layers = visState.layers,
            editingDataset = visState.editingDataset;
        var template = null;
        var modalProps = {};

        if (currentModal && currentModal.id && currentModal.template) {
          // if currentMdoal template is already provided
          // TODO: need to check whether template is valid
          template = /*#__PURE__*/_react["default"].createElement(currentModal.template, null);
          modalProps = currentModal.modalProps;
        } else {
          switch (currentModal) {
            case _defaultSettings.DATA_TABLE_ID:
              var width = containerW * 0.9;
              template = /*#__PURE__*/_react["default"].createElement(DataTableModal, {
                width: containerW * 0.9,
                height: containerH * 0.85,
                datasets: datasets,
                dataId: editingDataset,
                showDatasetTable: visStateActions.showDatasetTable,
                sortTableColumn: visStateActions.sortTableColumn,
                pinTableColumn: visStateActions.pinTableColumn,
                copyTableColumn: visStateActions.copyTableColumn
              }); // TODO: we need to make this width consistent with the css rule defined modal.js:32 max-width: 70vw

              modalProps.cssStyle = (0, _styledComponents.css)(_templateObject7(), DataTableModalStyle, _mediaBreakpoints.media.palm(_templateObject8(), width));
              break;

            case _defaultSettings.DELETE_DATA_ID:
              // validate options
              if (datasetKeyToRemove && datasets && datasets[datasetKeyToRemove]) {
                template = /*#__PURE__*/_react["default"].createElement(DeleteDatasetModal, {
                  dataset: datasets[datasetKeyToRemove],
                  layers: layers
                });
                modalProps = {
                  title: 'modal.title.deleteDataset',
                  cssStyle: smallModalCss,
                  footer: true,
                  onConfirm: function onConfirm() {
                    return _this2._deleteDataset(datasetKeyToRemove);
                  },
                  onCancel: this._closeModal,
                  confirmButton: {
                    negative: true,
                    large: true,
                    children: 'modal.button.delete'
                  }
                };
              }

              break;
            // in case we add a new case after this one

            case _defaultSettings.ADD_DATA_ID:
              template = /*#__PURE__*/_react["default"].createElement(LoadDataModal, (0, _extends2["default"])({}, providerState, {
                onClose: this._closeModal,
                onFileUpload: this._onFileUpload,
                onLoadCloudMap: this._onLoadCloudMap,
                cloudProviders: this.providerWithStorage(this.props),
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                getSavedMaps: this.props.providerActions.getSavedMaps,
                loadFiles: uiState.loadFiles
              }, uiState.loadFiles));
              modalProps = {
                title: 'modal.title.addDataToMap',
                cssStyle: LoadDataModalStyle,
                footer: false,
                onConfirm: this._closeModal
              };
              break;

            case _defaultSettings.EXPORT_IMAGE_ID:
              template = /*#__PURE__*/_react["default"].createElement(ExportImageModal, {
                exportImage: uiState.exportImage,
                mapW: containerW,
                mapH: containerH,
                onUpdateSetting: uiStateActions.setExportImageSetting
              });
              modalProps = {
                title: 'modal.title.exportImage',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportImage,
                confirmButton: {
                  large: true,
                  disabled: uiState.exportImage.exporting,
                  children: 'modal.button.download'
                }
              };
              break;

            case _defaultSettings.EXPORT_DATA_ID:
              template = /*#__PURE__*/_react["default"].createElement(ExportDataModal, (0, _extends2["default"])({}, uiState.exportData, {
                datasets: datasets,
                applyCPUFilter: this.props.visStateActions.applyCPUFilter,
                onClose: this._closeModal,
                onChangeExportDataType: uiStateActions.setExportDataType,
                onChangeExportSelectedDataset: uiStateActions.setExportSelectedDataset,
                onChangeExportFiltered: uiStateActions.setExportFiltered
              }));
              modalProps = {
                title: 'modal.title.exportData',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportData,
                confirmButton: {
                  large: true,
                  children: 'modal.button.export'
                }
              };
              break;

            case _defaultSettings.EXPORT_MAP_ID:
              var keplerGlConfig = _schemas["default"].getConfigToSave({
                mapStyle: mapStyle,
                visState: visState,
                mapState: mapState,
                uiState: uiState
              });

              template = /*#__PURE__*/_react["default"].createElement(ExportMapModal, {
                config: keplerGlConfig,
                options: uiState.exportMap,
                onChangeExportMapFormat: uiStateActions.setExportMapFormat,
                onEditUserMapboxAccessToken: uiStateActions.setUserMapboxAccessToken,
                onChangeExportMapHTMLMode: uiStateActions.setExportHTMLMapMode
              });
              modalProps = {
                title: 'modal.title.exportMap',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportMap,
                confirmButton: {
                  large: true,
                  children: 'modal.button.export'
                }
              };
              break;

            case _defaultSettings.ADD_MAP_STYLE_ID:
              template = /*#__PURE__*/_react["default"].createElement(AddMapStyleModal, {
                mapboxApiAccessToken: this.props.mapboxApiAccessToken,
                mapboxApiUrl: this.props.mapboxApiUrl,
                mapState: this.props.mapState,
                inputStyle: mapStyle.inputStyle,
                inputMapStyle: this.props.mapStyleActions.inputMapStyle,
                loadCustomMapStyle: this.props.mapStyleActions.loadCustomMapStyle
              });
              modalProps = {
                title: 'modal.title.addCustomMapboxStyle',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onAddCustomMapStyle,
                confirmButton: {
                  large: true,
                  disabled: !mapStyle.inputStyle.style,
                  children: 'modal.button.addStyle'
                }
              };
              break;

            case _defaultSettings.SAVE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(SaveMapModal, (0, _extends2["default"])({}, providerState, {
                exportImage: uiState.exportImage,
                mapInfo: visState.mapInfo,
                onSetMapInfo: visStateActions.setMapInfo,
                onUpdateImageSetting: uiStateActions.setExportImageSetting,
                cloudProviders: this.providerWithStorage(this.props),
                onSetCloudProvider: this.props.providerActions.setCloudProvider
              }));
              modalProps = {
                title: 'modal.title.saveMap',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: function onConfirm() {
                  return _this2._onSaveMap(false);
                },
                confirmButton: {
                  large: true,
                  disabled: uiState.exportImage.exporting || !(0, _mapInfoUtils.isValidMapInfo)(visState.mapInfo) || !providerState.currentProvider,
                  children: 'modal.button.save'
                }
              };
              break;

            case _defaultSettings.OVERWRITE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(OverWriteMapModal, (0, _extends2["default"])({}, providerState, {
                cloudProviders: this.props.cloudProviders,
                title: (0, _lodash["default"])(visState, ['mapInfo', 'title']),
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                onUpdateImageSetting: uiStateActions.setExportImageSetting
              }));
              modalProps = {
                title: 'Overwrite Existing File?',
                cssStyle: smallModalCss,
                footer: true,
                onConfirm: this._onOverwriteMap,
                onCancel: this._closeModal,
                confirmButton: {
                  large: true,
                  children: 'Yes',
                  disabled: uiState.exportImage.exporting || !(0, _mapInfoUtils.isValidMapInfo)(visState.mapInfo) || !providerState.currentProvider
                }
              };
              break;

            case _defaultSettings.SHARE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(ShareMapModal, (0, _extends2["default"])({}, providerState, {
                isReady: !uiState.exportImage.exporting,
                cloudProviders: this.providerWithShare(this.props),
                onExport: this._onShareMapUrl,
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                onUpdateImageSetting: uiStateActions.setExportImageSetting
              }));
              modalProps = {
                title: 'modal.title.shareURL',
                onCancel: this._onCloseSaveMap
              };
              break;

            default:
              break;
          }
        }

        return this.props.rootNode ? /*#__PURE__*/_react["default"].createElement(ModalDialog, (0, _extends2["default"])({
          parentSelector: function parentSelector() {
            return (0, _reactDom.findDOMNode)(rootNode);
          },
          isOpen: Boolean(currentModal),
          onCancel: this._closeModal
        }, modalProps, {
          cssStyle: DefaultStyle.concat(modalProps.cssStyle || '')
        }), template) : null;
      }
      /* eslint-enable complexity */

    }]);
    return ModalWrapper;
  }(_react.Component);

  (0, _defineProperty2["default"])(ModalWrapper, "propTypes", {
    rootNode: _propTypes["default"].object,
    containerW: _propTypes["default"].number,
    containerH: _propTypes["default"].number,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapboxApiUrl: _propTypes["default"].string,
    mapState: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    uiState: _propTypes["default"].object.isRequired,
    visState: _propTypes["default"].object.isRequired,
    visStateActions: _propTypes["default"].object.isRequired,
    uiStateActions: _propTypes["default"].object.isRequired,
    mapStyleActions: _propTypes["default"].object.isRequired,
    onSaveToStorage: _propTypes["default"].func,
    cloudProviders: _propTypes["default"].arrayOf(_propTypes["default"].object)
  });
  return ModalWrapper;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJEYXRhVGFibGVNb2RhbFN0eWxlIiwiY3NzIiwibWVkaWEiLCJwb3J0YWJsZSIsInBhbG0iLCJzbWFsbE1vZGFsQ3NzIiwiTG9hZERhdGFNb2RhbFN0eWxlIiwiRGVmYXVsdFN0eWxlIiwiTW9kYWxDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIkRlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnkiLCJPdmVyV3JpdGVNYXBNb2RhbEZhY3RvcnkiLCJEYXRhVGFibGVNb2RhbEZhY3RvcnkiLCJMb2FkRGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydEltYWdlTW9kYWxGYWN0b3J5IiwiRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydE1hcE1vZGFsRmFjdG9yeSIsIkFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IiwiTW9kYWxEaWFsb2dGYWN0b3J5IiwiU2F2ZU1hcE1vZGFsRmFjdG9yeSIsIlNoYXJlTWFwTW9kYWxGYWN0b3J5IiwiRGVsZXRlRGF0YXNldE1vZGFsIiwiT3ZlcldyaXRlTWFwTW9kYWwiLCJEYXRhVGFibGVNb2RhbCIsIkxvYWREYXRhTW9kYWwiLCJFeHBvcnRJbWFnZU1vZGFsIiwiRXhwb3J0RGF0YU1vZGFsIiwiRXhwb3J0TWFwTW9kYWwiLCJBZGRNYXBTdHlsZU1vZGFsIiwiTW9kYWxEaWFsb2ciLCJTYXZlTWFwTW9kYWwiLCJTaGFyZU1hcE1vZGFsIiwiTW9kYWxXcmFwcGVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uS2V5VXAiLCJwcm9wcyIsImNsb3VkUHJvdmlkZXJzIiwiZmlsdGVyIiwicCIsImhhc1ByaXZhdGVTdG9yYWdlIiwiaGFzU2hhcmluZ1VybCIsImV2ZW50Iiwia2V5Q29kZSIsIktleUV2ZW50IiwiRE9NX1ZLX0VTQ0FQRSIsIl9jbG9zZU1vZGFsIiwidWlTdGF0ZUFjdGlvbnMiLCJ0b2dnbGVNb2RhbCIsImtleSIsInZpc1N0YXRlQWN0aW9ucyIsInJlbW92ZURhdGFzZXQiLCJtYXBTdHlsZUFjdGlvbnMiLCJhZGRDdXN0b21NYXBTdHlsZSIsImJsb2IiLCJsb2FkRmlsZXMiLCJ1aVN0YXRlIiwiZXhwb3J0SW1hZ2UiLCJleHBvcnRpbmciLCJjbGVhbnVwRXhwb3J0SW1hZ2UiLCJleHBvcnREYXRhIiwiZm9ybWF0IiwiZXhwb3J0TWFwIiwiRVhQT1JUX01BUF9GT1JNQVRTIiwiSFRNTCIsImV4cG9ydEh0bWwiLCJleHBvcnRKc29uIiwicHJvdmlkZXIiLCJpc1B1YmxpYyIsIm92ZXJ3cml0ZSIsImNsb3NlTW9kYWwiLCJ0b1NhdmUiLCJwcm92aWRlckFjdGlvbnMiLCJleHBvcnRGaWxlVG9DbG91ZCIsIm1hcERhdGEiLCJvcHRpb25zIiwib25TdWNjZXNzIiwib25FeHBvcnRUb0Nsb3VkU3VjY2VzcyIsIm9uRXJyb3IiLCJvbkV4cG9ydFRvQ2xvdWRFcnJvciIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyU3RhdGUiLCJmaW5kIiwibmFtZSIsIl9leHBvcnRGaWxlVG9DbG91ZCIsIl9vblNhdmVNYXAiLCJyZXNldFByb3ZpZGVyU3RhdHVzIiwicGF5bG9hZCIsImxvYWRDbG91ZE1hcCIsIm9uTG9hZENsb3VkTWFwU3VjY2VzcyIsIm9uTG9hZENsb3VkTWFwRXJyb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29udGFpbmVyVyIsImNvbnRhaW5lckgiLCJtYXBTdHlsZSIsIm1hcFN0YXRlIiwidmlzU3RhdGUiLCJyb290Tm9kZSIsImN1cnJlbnRNb2RhbCIsImRhdGFzZXRLZXlUb1JlbW92ZSIsImRhdGFzZXRzIiwibGF5ZXJzIiwiZWRpdGluZ0RhdGFzZXQiLCJ0ZW1wbGF0ZSIsIm1vZGFsUHJvcHMiLCJpZCIsIkRBVEFfVEFCTEVfSUQiLCJ3aWR0aCIsInNob3dEYXRhc2V0VGFibGUiLCJzb3J0VGFibGVDb2x1bW4iLCJwaW5UYWJsZUNvbHVtbiIsImNvcHlUYWJsZUNvbHVtbiIsImNzc1N0eWxlIiwiREVMRVRFX0RBVEFfSUQiLCJ0aXRsZSIsImZvb3RlciIsIm9uQ29uZmlybSIsIl9kZWxldGVEYXRhc2V0Iiwib25DYW5jZWwiLCJjb25maXJtQnV0dG9uIiwibmVnYXRpdmUiLCJsYXJnZSIsImNoaWxkcmVuIiwiQUREX0RBVEFfSUQiLCJfb25GaWxlVXBsb2FkIiwiX29uTG9hZENsb3VkTWFwIiwicHJvdmlkZXJXaXRoU3RvcmFnZSIsInNldENsb3VkUHJvdmlkZXIiLCJnZXRTYXZlZE1hcHMiLCJFWFBPUlRfSU1BR0VfSUQiLCJzZXRFeHBvcnRJbWFnZVNldHRpbmciLCJfb25FeHBvcnRJbWFnZSIsImRpc2FibGVkIiwiRVhQT1JUX0RBVEFfSUQiLCJhcHBseUNQVUZpbHRlciIsInNldEV4cG9ydERhdGFUeXBlIiwic2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0Iiwic2V0RXhwb3J0RmlsdGVyZWQiLCJfb25FeHBvcnREYXRhIiwiRVhQT1JUX01BUF9JRCIsImtlcGxlckdsQ29uZmlnIiwiS2VwbGVyR2xTY2hlbWEiLCJnZXRDb25maWdUb1NhdmUiLCJzZXRFeHBvcnRNYXBGb3JtYXQiLCJzZXRVc2VyTWFwYm94QWNjZXNzVG9rZW4iLCJzZXRFeHBvcnRIVE1MTWFwTW9kZSIsIl9vbkV4cG9ydE1hcCIsIkFERF9NQVBfU1RZTEVfSUQiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsIm1hcGJveEFwaVVybCIsImlucHV0U3R5bGUiLCJpbnB1dE1hcFN0eWxlIiwibG9hZEN1c3RvbU1hcFN0eWxlIiwiX29uQWRkQ3VzdG9tTWFwU3R5bGUiLCJzdHlsZSIsIlNBVkVfTUFQX0lEIiwibWFwSW5mbyIsInNldE1hcEluZm8iLCJPVkVSV1JJVEVfTUFQX0lEIiwiX29uT3ZlcndyaXRlTWFwIiwiU0hBUkVfTUFQX0lEIiwicHJvdmlkZXJXaXRoU2hhcmUiLCJfb25TaGFyZU1hcFVybCIsIl9vbkNsb3NlU2F2ZU1hcCIsIkJvb2xlYW4iLCJjb25jYXQiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJudW1iZXIiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25TYXZlVG9TdG9yYWdlIiwiZnVuYyIsImFycmF5T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUdBOztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsT0FBR0MscUJBQUgscUJBTXJCQyx3QkFBTUMsUUFOZSxzQkFVckJELHdCQUFNRSxJQVZlLHFCQUF6QjtBQWVBLElBQU1DLGFBQWEsT0FBR0oscUJBQUgscUJBQW5CO0FBS0EsSUFBTUssa0JBQWtCLE9BQUdMLHFCQUFILHFCQUF4QjtBQUlBLElBQU1NLFlBQVksT0FBR04scUJBQUgscUJBQWxCO0FBSUFPLHFCQUFxQixDQUFDQyxJQUF0QixHQUE2QixDQUMzQkMsMkJBRDJCLEVBRTNCQyw2QkFGMkIsRUFHM0JDLDBCQUgyQixFQUkzQkMseUJBSjJCLEVBSzNCQyw0QkFMMkIsRUFNM0JDLDJCQU4yQixFQU8zQkMsMEJBUDJCLEVBUTNCQyw0QkFSMkIsRUFTM0JDLHVCQVQyQixFQVUzQkMsd0JBVjJCLEVBVzNCQyx5QkFYMkIsQ0FBN0I7O0FBY2UsU0FBU1oscUJBQVQsQ0FDYmEsa0JBRGEsRUFFYkMsaUJBRmEsRUFHYkMsY0FIYSxFQUliQyxhQUphLEVBS2JDLGdCQUxhLEVBTWJDLGVBTmEsRUFPYkMsY0FQYSxFQVFiQyxnQkFSYSxFQVNiQyxXQVRhLEVBVWJDLFlBVmEsRUFXYkMsYUFYYSxFQVliO0FBQUEsTUFDTUMsWUFETjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsNEdBbUJzQixZQUFNO0FBQ3hCQyw2QkFBU0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsTUFBS0MsUUFBeEM7QUFDRCxPQXJCSDtBQUFBLHlHQTBCbUIsVUFBQUMsS0FBSztBQUFBLGVBQUlBLEtBQUssQ0FBQ0MsY0FBVjtBQUFBLE9BMUJ4QjtBQUFBLDhHQTJCd0IsOEJBQWUsTUFBS0EsY0FBcEIsRUFBb0MsVUFBQUEsY0FBYztBQUFBLGVBQ3RFQSxjQUFjLENBQUNDLE1BQWYsQ0FBc0IsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNDLGlCQUFGLEVBQUo7QUFBQSxTQUF2QixDQURzRTtBQUFBLE9BQWxELENBM0J4QjtBQUFBLDRHQThCc0IsOEJBQWUsTUFBS0gsY0FBcEIsRUFBb0MsVUFBQUEsY0FBYztBQUFBLGVBQ3BFQSxjQUFjLENBQUNDLE1BQWYsQ0FBc0IsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNFLGFBQUYsRUFBSjtBQUFBLFNBQXZCLENBRG9FO0FBQUEsT0FBbEQsQ0E5QnRCO0FBQUEsbUdBa0NhLFVBQUFDLEtBQUssRUFBSTtBQUNsQixZQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0MsT0FBdEI7O0FBQ0EsWUFBSUEsT0FBTyxLQUFLQyxxQkFBU0MsYUFBekIsRUFBd0M7QUFDdEMsZ0JBQUtDLFdBQUw7QUFDRDtBQUNGLE9BdkNIO0FBQUEsc0dBeUNnQixZQUFNO0FBQ2xCLGNBQUtWLEtBQUwsQ0FBV1csY0FBWCxDQUEwQkMsV0FBMUIsQ0FBc0MsSUFBdEM7QUFDRCxPQTNDSDtBQUFBLHlHQTZDbUIsVUFBQUMsR0FBRyxFQUFJO0FBQ3RCLGNBQUtiLEtBQUwsQ0FBV2MsZUFBWCxDQUEyQkMsYUFBM0IsQ0FBeUNGLEdBQXpDOztBQUNBLGNBQUtILFdBQUw7QUFDRCxPQWhESDtBQUFBLCtHQWtEeUIsWUFBTTtBQUMzQixjQUFLVixLQUFMLENBQVdnQixlQUFYLENBQTJCQyxpQkFBM0I7O0FBQ0EsY0FBS1AsV0FBTDtBQUNELE9BckRIO0FBQUEsd0dBdURrQixVQUFBUSxJQUFJLEVBQUk7QUFDdEIsY0FBS2xCLEtBQUwsQ0FBV2MsZUFBWCxDQUEyQkssU0FBM0IsQ0FBcUNELElBQXJDO0FBQ0QsT0F6REg7QUFBQSx5R0EyRG1CLFlBQU07QUFDckIsWUFBSSxDQUFDLE1BQUtsQixLQUFMLENBQVdvQixPQUFYLENBQW1CQyxXQUFuQixDQUErQkMsU0FBcEMsRUFBK0M7QUFDN0Msd0NBQVksTUFBS3RCLEtBQWpCLEVBQXdCLE1BQUtBLEtBQUwsQ0FBV29CLE9BQVgsQ0FBbUJDLFdBQTNDOztBQUNBLGdCQUFLckIsS0FBTCxDQUFXVyxjQUFYLENBQTBCWSxrQkFBMUI7O0FBQ0EsZ0JBQUtiLFdBQUw7QUFDRDtBQUNGLE9BakVIO0FBQUEsd0dBbUVrQixZQUFNO0FBQ3BCLHFDQUFXLE1BQUtWLEtBQWhCLEVBQXVCLE1BQUtBLEtBQUwsQ0FBV29CLE9BQVgsQ0FBbUJJLFVBQTFDOztBQUNBLGNBQUtkLFdBQUw7QUFDRCxPQXRFSDtBQUFBLHVHQXdFaUIsWUFBTTtBQUFBLFlBQ1pVLE9BRFksR0FDRCxNQUFLcEIsS0FESixDQUNab0IsT0FEWTtBQUFBLFlBRVpLLE1BRlksR0FFRkwsT0FBTyxDQUFDTSxTQUZOLENBRVpELE1BRlk7QUFHbkIsU0FBQ0EsTUFBTSxLQUFLRSxvQ0FBbUJDLElBQTlCLEdBQXFDQyx1QkFBckMsR0FBa0RDLHVCQUFuRCxFQUNFLE1BQUs5QixLQURQLEVBRUUsTUFBS0EsS0FBTCxDQUFXb0IsT0FBWCxDQUFtQk0sU0FBbkIsQ0FBNkJELE1BQTdCLEtBQXdDLEVBRjFDOztBQUlBLGNBQUtmLFdBQUw7QUFDRCxPQWhGSDtBQUFBLDZHQWtGdUIsZ0JBQWlEO0FBQUEsWUFBL0NxQixRQUErQyxRQUEvQ0EsUUFBK0M7QUFBQSxZQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDO0FBQUEsWUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLFlBQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDcEUsWUFBTUMsTUFBTSxHQUFHLDRCQUFVLE1BQUtuQyxLQUFmLENBQWY7O0FBRUEsY0FBS0EsS0FBTCxDQUFXb0MsZUFBWCxDQUEyQkMsaUJBQTNCLENBQTZDO0FBQzNDQyxVQUFBQSxPQUFPLEVBQUVILE1BRGtDO0FBRTNDSixVQUFBQSxRQUFRLEVBQVJBLFFBRjJDO0FBRzNDUSxVQUFBQSxPQUFPLEVBQUU7QUFDUFAsWUFBQUEsUUFBUSxFQUFSQSxRQURPO0FBRVBDLFlBQUFBLFNBQVMsRUFBVEE7QUFGTyxXQUhrQztBQU8zQ0MsVUFBQUEsVUFBVSxFQUFWQSxVQVAyQztBQVEzQ00sVUFBQUEsU0FBUyxFQUFFLE1BQUt4QyxLQUFMLENBQVd5QyxzQkFScUI7QUFTM0NDLFVBQUFBLE9BQU8sRUFBRSxNQUFLMUMsS0FBTCxDQUFXMkM7QUFUdUIsU0FBN0M7QUFXRCxPQWhHSDtBQUFBLHFHQWtHZSxZQUF1QjtBQUFBLFlBQXRCVixTQUFzQix1RUFBVixLQUFVO0FBQUEsWUFDM0JXLGVBRDJCLEdBQ1IsTUFBSzVDLEtBQUwsQ0FBVzZDLGFBREgsQ0FDM0JELGVBRDJCOztBQUVsQyxZQUFNYixRQUFRLEdBQUcsTUFBSy9CLEtBQUwsQ0FBV0MsY0FBWCxDQUEwQjZDLElBQTFCLENBQStCLFVBQUEzQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQzRDLElBQUYsS0FBV0gsZUFBZjtBQUFBLFNBQWhDLENBQWpCOztBQUNBLGNBQUtJLGtCQUFMLENBQXdCO0FBQ3RCakIsVUFBQUEsUUFBUSxFQUFSQSxRQURzQjtBQUV0QkMsVUFBQUEsUUFBUSxFQUFFLEtBRlk7QUFHdEJDLFVBQUFBLFNBQVMsRUFBVEEsU0FIc0I7QUFJdEJDLFVBQUFBLFVBQVUsRUFBRTtBQUpVLFNBQXhCO0FBTUQsT0EzR0g7QUFBQSwwR0E2R29CLFlBQU07QUFDdEIsY0FBS2UsVUFBTCxDQUFnQixJQUFoQjtBQUNELE9BL0dIO0FBQUEseUdBaUhtQixVQUFBbEIsUUFBUSxFQUFJO0FBQzNCLGNBQUtpQixrQkFBTCxDQUF3QjtBQUFDakIsVUFBQUEsUUFBUSxFQUFSQSxRQUFEO0FBQVdDLFVBQUFBLFFBQVEsRUFBRSxJQUFyQjtBQUEyQkMsVUFBQUEsU0FBUyxFQUFFLEtBQXRDO0FBQTZDQyxVQUFBQSxVQUFVLEVBQUU7QUFBekQsU0FBeEI7QUFDRCxPQW5ISDtBQUFBLDBHQXFIb0IsWUFBTTtBQUN0QixjQUFLbEMsS0FBTCxDQUFXb0MsZUFBWCxDQUEyQmMsbUJBQTNCOztBQUNBLGNBQUt4QyxXQUFMO0FBQ0QsT0F4SEg7QUFBQSwwR0EwSG9CLFVBQUF5QyxPQUFPLEVBQUk7QUFDM0IsY0FBS25ELEtBQUwsQ0FBV29DLGVBQVgsQ0FBMkJnQixZQUEzQixpQ0FDS0QsT0FETDtBQUVFWCxVQUFBQSxTQUFTLEVBQUUsTUFBS3hDLEtBQUwsQ0FBV3FELHFCQUZ4QjtBQUdFWCxVQUFBQSxPQUFPLEVBQUUsTUFBSzFDLEtBQUwsQ0FBV3NEO0FBSHRCO0FBS0QsT0FoSUg7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2Q0FzQnlCO0FBQ3JCekQsNkJBQVMwRCxtQkFBVCxDQUE2QixPQUE3QixFQUFzQyxLQUFLeEQsUUFBM0M7QUFDRDtBQXhCSDtBQUFBOztBQWtJRTtBQWxJRiwrQkFtSVc7QUFBQTs7QUFBQSwwQkFZSCxLQUFLQyxLQVpGO0FBQUEsWUFFTHdELFVBRkssZUFFTEEsVUFGSztBQUFBLFlBR0xDLFVBSEssZUFHTEEsVUFISztBQUFBLFlBSUxDLFFBSkssZUFJTEEsUUFKSztBQUFBLFlBS0xDLFFBTEssZUFLTEEsUUFMSztBQUFBLFlBTUx2QyxPQU5LLGVBTUxBLE9BTks7QUFBQSxZQU9Md0MsUUFQSyxlQU9MQSxRQVBLO0FBQUEsWUFRTEMsUUFSSyxlQVFMQSxRQVJLO0FBQUEsWUFTTC9DLGVBVEssZUFTTEEsZUFUSztBQUFBLFlBVUxILGNBVkssZUFVTEEsY0FWSztBQUFBLFlBV0xrQyxhQVhLLGVBV0xBLGFBWEs7QUFBQSxZQWNBaUIsWUFkQSxHQWNvQzFDLE9BZHBDLENBY0EwQyxZQWRBO0FBQUEsWUFjY0Msa0JBZGQsR0Fjb0MzQyxPQWRwQyxDQWNjMkMsa0JBZGQ7QUFBQSxZQWVBQyxRQWZBLEdBZW9DSixRQWZwQyxDQWVBSSxRQWZBO0FBQUEsWUFlVUMsTUFmVixHQWVvQ0wsUUFmcEMsQ0FlVUssTUFmVjtBQUFBLFlBZWtCQyxjQWZsQixHQWVvQ04sUUFmcEMsQ0Fla0JNLGNBZmxCO0FBaUJQLFlBQUlDLFFBQVEsR0FBRyxJQUFmO0FBQ0EsWUFBSUMsVUFBVSxHQUFHLEVBQWpCOztBQUVBLFlBQUlOLFlBQVksSUFBSUEsWUFBWSxDQUFDTyxFQUE3QixJQUFtQ1AsWUFBWSxDQUFDSyxRQUFwRCxFQUE4RDtBQUM1RDtBQUNBO0FBQ0FBLFVBQUFBLFFBQVEsZ0JBQUcsZ0NBQUMsWUFBRCxDQUFjLFFBQWQsT0FBWDtBQUNBQyxVQUFBQSxVQUFVLEdBQUdOLFlBQVksQ0FBQ00sVUFBMUI7QUFDRCxTQUxELE1BS087QUFDTCxrQkFBUU4sWUFBUjtBQUNFLGlCQUFLUSw4QkFBTDtBQUNFLGtCQUFNQyxLQUFLLEdBQUdmLFVBQVUsR0FBRyxHQUEzQjtBQUNBVyxjQUFBQSxRQUFRLGdCQUNOLGdDQUFDLGNBQUQ7QUFDRSxnQkFBQSxLQUFLLEVBQUVYLFVBQVUsR0FBRyxHQUR0QjtBQUVFLGdCQUFBLE1BQU0sRUFBRUMsVUFBVSxHQUFHLElBRnZCO0FBR0UsZ0JBQUEsUUFBUSxFQUFFTyxRQUhaO0FBSUUsZ0JBQUEsTUFBTSxFQUFFRSxjQUpWO0FBS0UsZ0JBQUEsZ0JBQWdCLEVBQUVwRCxlQUFlLENBQUMwRCxnQkFMcEM7QUFNRSxnQkFBQSxlQUFlLEVBQUUxRCxlQUFlLENBQUMyRCxlQU5uQztBQU9FLGdCQUFBLGNBQWMsRUFBRTNELGVBQWUsQ0FBQzRELGNBUGxDO0FBUUUsZ0JBQUEsZUFBZSxFQUFFNUQsZUFBZSxDQUFDNkQ7QUFSbkMsZ0JBREYsQ0FGRixDQWVFOztBQUNBUCxjQUFBQSxVQUFVLENBQUNRLFFBQVgsT0FBc0IvRyxxQkFBdEIsc0JBQ0lELG1CQURKLEVBRUlFLHdCQUFNRSxJQUZWLHFCQUdhdUcsS0FIYjtBQU1BOztBQUNGLGlCQUFLTSwrQkFBTDtBQUNFO0FBQ0Esa0JBQUlkLGtCQUFrQixJQUFJQyxRQUF0QixJQUFrQ0EsUUFBUSxDQUFDRCxrQkFBRCxDQUE5QyxFQUFvRTtBQUNsRUksZ0JBQUFBLFFBQVEsZ0JBQ04sZ0NBQUMsa0JBQUQ7QUFBb0Isa0JBQUEsT0FBTyxFQUFFSCxRQUFRLENBQUNELGtCQUFELENBQXJDO0FBQTJELGtCQUFBLE1BQU0sRUFBRUU7QUFBbkUsa0JBREY7QUFHQUcsZ0JBQUFBLFVBQVUsR0FBRztBQUNYVSxrQkFBQUEsS0FBSyxFQUFFLDJCQURJO0FBRVhGLGtCQUFBQSxRQUFRLEVBQUUzRyxhQUZDO0FBR1g4RyxrQkFBQUEsTUFBTSxFQUFFLElBSEc7QUFJWEMsa0JBQUFBLFNBQVMsRUFBRTtBQUFBLDJCQUFNLE1BQUksQ0FBQ0MsY0FBTCxDQUFvQmxCLGtCQUFwQixDQUFOO0FBQUEsbUJBSkE7QUFLWG1CLGtCQUFBQSxRQUFRLEVBQUUsS0FBS3hFLFdBTEo7QUFNWHlFLGtCQUFBQSxhQUFhLEVBQUU7QUFDYkMsb0JBQUFBLFFBQVEsRUFBRSxJQURHO0FBRWJDLG9CQUFBQSxLQUFLLEVBQUUsSUFGTTtBQUdiQyxvQkFBQUEsUUFBUSxFQUFFO0FBSEc7QUFOSixpQkFBYjtBQVlEOztBQUNEO0FBQU87O0FBQ1QsaUJBQUtDLDRCQUFMO0FBQ0VwQixjQUFBQSxRQUFRLGdCQUNOLGdDQUFDLGFBQUQsZ0NBQ010QixhQUROO0FBRUUsZ0JBQUEsT0FBTyxFQUFFLEtBQUtuQyxXQUZoQjtBQUdFLGdCQUFBLFlBQVksRUFBRSxLQUFLOEUsYUFIckI7QUFJRSxnQkFBQSxjQUFjLEVBQUUsS0FBS0MsZUFKdkI7QUFLRSxnQkFBQSxjQUFjLEVBQUUsS0FBS0MsbUJBQUwsQ0FBeUIsS0FBSzFGLEtBQTlCLENBTGxCO0FBTUUsZ0JBQUEsa0JBQWtCLEVBQUUsS0FBS0EsS0FBTCxDQUFXb0MsZUFBWCxDQUEyQnVELGdCQU5qRDtBQU9FLGdCQUFBLFlBQVksRUFBRSxLQUFLM0YsS0FBTCxDQUFXb0MsZUFBWCxDQUEyQndELFlBUDNDO0FBUUUsZ0JBQUEsU0FBUyxFQUFFeEUsT0FBTyxDQUFDRDtBQVJyQixpQkFTTUMsT0FBTyxDQUFDRCxTQVRkLEVBREY7QUFhQWlELGNBQUFBLFVBQVUsR0FBRztBQUNYVSxnQkFBQUEsS0FBSyxFQUFFLDBCQURJO0FBRVhGLGdCQUFBQSxRQUFRLEVBQUUxRyxrQkFGQztBQUdYNkcsZ0JBQUFBLE1BQU0sRUFBRSxLQUhHO0FBSVhDLGdCQUFBQSxTQUFTLEVBQUUsS0FBS3RFO0FBSkwsZUFBYjtBQU1BOztBQUNGLGlCQUFLbUYsZ0NBQUw7QUFDRTFCLGNBQUFBLFFBQVEsZ0JBQ04sZ0NBQUMsZ0JBQUQ7QUFDRSxnQkFBQSxXQUFXLEVBQUUvQyxPQUFPLENBQUNDLFdBRHZCO0FBRUUsZ0JBQUEsSUFBSSxFQUFFbUMsVUFGUjtBQUdFLGdCQUFBLElBQUksRUFBRUMsVUFIUjtBQUlFLGdCQUFBLGVBQWUsRUFBRTlDLGNBQWMsQ0FBQ21GO0FBSmxDLGdCQURGO0FBUUExQixjQUFBQSxVQUFVLEdBQUc7QUFDWFUsZ0JBQUFBLEtBQUssRUFBRSx5QkFESTtBQUVYQyxnQkFBQUEsTUFBTSxFQUFFLElBRkc7QUFHWEcsZ0JBQUFBLFFBQVEsRUFBRSxLQUFLeEUsV0FISjtBQUlYc0UsZ0JBQUFBLFNBQVMsRUFBRSxLQUFLZSxjQUpMO0FBS1haLGdCQUFBQSxhQUFhLEVBQUU7QUFDYkUsa0JBQUFBLEtBQUssRUFBRSxJQURNO0FBRWJXLGtCQUFBQSxRQUFRLEVBQUU1RSxPQUFPLENBQUNDLFdBQVIsQ0FBb0JDLFNBRmpCO0FBR2JnRSxrQkFBQUEsUUFBUSxFQUFFO0FBSEc7QUFMSixlQUFiO0FBV0E7O0FBQ0YsaUJBQUtXLCtCQUFMO0FBQ0U5QixjQUFBQSxRQUFRLGdCQUNOLGdDQUFDLGVBQUQsZ0NBQ00vQyxPQUFPLENBQUNJLFVBRGQ7QUFFRSxnQkFBQSxRQUFRLEVBQUV3QyxRQUZaO0FBR0UsZ0JBQUEsY0FBYyxFQUFFLEtBQUtoRSxLQUFMLENBQVdjLGVBQVgsQ0FBMkJvRixjQUg3QztBQUlFLGdCQUFBLE9BQU8sRUFBRSxLQUFLeEYsV0FKaEI7QUFLRSxnQkFBQSxzQkFBc0IsRUFBRUMsY0FBYyxDQUFDd0YsaUJBTHpDO0FBTUUsZ0JBQUEsNkJBQTZCLEVBQUV4RixjQUFjLENBQUN5Rix3QkFOaEQ7QUFPRSxnQkFBQSxzQkFBc0IsRUFBRXpGLGNBQWMsQ0FBQzBGO0FBUHpDLGlCQURGO0FBV0FqQyxjQUFBQSxVQUFVLEdBQUc7QUFDWFUsZ0JBQUFBLEtBQUssRUFBRSx3QkFESTtBQUVYQyxnQkFBQUEsTUFBTSxFQUFFLElBRkc7QUFHWEcsZ0JBQUFBLFFBQVEsRUFBRSxLQUFLeEUsV0FISjtBQUlYc0UsZ0JBQUFBLFNBQVMsRUFBRSxLQUFLc0IsYUFKTDtBQUtYbkIsZ0JBQUFBLGFBQWEsRUFBRTtBQUNiRSxrQkFBQUEsS0FBSyxFQUFFLElBRE07QUFFYkMsa0JBQUFBLFFBQVEsRUFBRTtBQUZHO0FBTEosZUFBYjtBQVVBOztBQUNGLGlCQUFLaUIsOEJBQUw7QUFDRSxrQkFBTUMsY0FBYyxHQUFHQyxvQkFBZUMsZUFBZixDQUErQjtBQUNwRGhELGdCQUFBQSxRQUFRLEVBQVJBLFFBRG9EO0FBRXBERSxnQkFBQUEsUUFBUSxFQUFSQSxRQUZvRDtBQUdwREQsZ0JBQUFBLFFBQVEsRUFBUkEsUUFIb0Q7QUFJcER2QyxnQkFBQUEsT0FBTyxFQUFQQTtBQUpvRCxlQUEvQixDQUF2Qjs7QUFNQStDLGNBQUFBLFFBQVEsZ0JBQ04sZ0NBQUMsY0FBRDtBQUNFLGdCQUFBLE1BQU0sRUFBRXFDLGNBRFY7QUFFRSxnQkFBQSxPQUFPLEVBQUVwRixPQUFPLENBQUNNLFNBRm5CO0FBR0UsZ0JBQUEsdUJBQXVCLEVBQUVmLGNBQWMsQ0FBQ2dHLGtCQUgxQztBQUlFLGdCQUFBLDJCQUEyQixFQUFFaEcsY0FBYyxDQUFDaUcsd0JBSjlDO0FBS0UsZ0JBQUEseUJBQXlCLEVBQUVqRyxjQUFjLENBQUNrRztBQUw1QyxnQkFERjtBQVNBekMsY0FBQUEsVUFBVSxHQUFHO0FBQ1hVLGdCQUFBQSxLQUFLLEVBQUUsdUJBREk7QUFFWEMsZ0JBQUFBLE1BQU0sRUFBRSxJQUZHO0FBR1hHLGdCQUFBQSxRQUFRLEVBQUUsS0FBS3hFLFdBSEo7QUFJWHNFLGdCQUFBQSxTQUFTLEVBQUUsS0FBSzhCLFlBSkw7QUFLWDNCLGdCQUFBQSxhQUFhLEVBQUU7QUFDYkUsa0JBQUFBLEtBQUssRUFBRSxJQURNO0FBRWJDLGtCQUFBQSxRQUFRLEVBQUU7QUFGRztBQUxKLGVBQWI7QUFVQTs7QUFDRixpQkFBS3lCLGlDQUFMO0FBQ0U1QyxjQUFBQSxRQUFRLGdCQUNOLGdDQUFDLGdCQUFEO0FBQ0UsZ0JBQUEsb0JBQW9CLEVBQUUsS0FBS25FLEtBQUwsQ0FBV2dILG9CQURuQztBQUVFLGdCQUFBLFlBQVksRUFBRSxLQUFLaEgsS0FBTCxDQUFXaUgsWUFGM0I7QUFHRSxnQkFBQSxRQUFRLEVBQUUsS0FBS2pILEtBQUwsQ0FBVzJELFFBSHZCO0FBSUUsZ0JBQUEsVUFBVSxFQUFFRCxRQUFRLENBQUN3RCxVQUp2QjtBQUtFLGdCQUFBLGFBQWEsRUFBRSxLQUFLbEgsS0FBTCxDQUFXZ0IsZUFBWCxDQUEyQm1HLGFBTDVDO0FBTUUsZ0JBQUEsa0JBQWtCLEVBQUUsS0FBS25ILEtBQUwsQ0FBV2dCLGVBQVgsQ0FBMkJvRztBQU5qRCxnQkFERjtBQVVBaEQsY0FBQUEsVUFBVSxHQUFHO0FBQ1hVLGdCQUFBQSxLQUFLLEVBQUUsa0NBREk7QUFFWEMsZ0JBQUFBLE1BQU0sRUFBRSxJQUZHO0FBR1hHLGdCQUFBQSxRQUFRLEVBQUUsS0FBS3hFLFdBSEo7QUFJWHNFLGdCQUFBQSxTQUFTLEVBQUUsS0FBS3FDLG9CQUpMO0FBS1hsQyxnQkFBQUEsYUFBYSxFQUFFO0FBQ2JFLGtCQUFBQSxLQUFLLEVBQUUsSUFETTtBQUViVyxrQkFBQUEsUUFBUSxFQUFFLENBQUN0QyxRQUFRLENBQUN3RCxVQUFULENBQW9CSSxLQUZsQjtBQUdiaEMsa0JBQUFBLFFBQVEsRUFBRTtBQUhHO0FBTEosZUFBYjtBQVdBOztBQUNGLGlCQUFLaUMsNEJBQUw7QUFDRXBELGNBQUFBLFFBQVEsZ0JBQ04sZ0NBQUMsWUFBRCxnQ0FDTXRCLGFBRE47QUFFRSxnQkFBQSxXQUFXLEVBQUV6QixPQUFPLENBQUNDLFdBRnZCO0FBR0UsZ0JBQUEsT0FBTyxFQUFFdUMsUUFBUSxDQUFDNEQsT0FIcEI7QUFJRSxnQkFBQSxZQUFZLEVBQUUxRyxlQUFlLENBQUMyRyxVQUpoQztBQUtFLGdCQUFBLG9CQUFvQixFQUFFOUcsY0FBYyxDQUFDbUYscUJBTHZDO0FBTUUsZ0JBQUEsY0FBYyxFQUFFLEtBQUtKLG1CQUFMLENBQXlCLEtBQUsxRixLQUE5QixDQU5sQjtBQU9FLGdCQUFBLGtCQUFrQixFQUFFLEtBQUtBLEtBQUwsQ0FBV29DLGVBQVgsQ0FBMkJ1RDtBQVBqRCxpQkFERjtBQVdBdkIsY0FBQUEsVUFBVSxHQUFHO0FBQ1hVLGdCQUFBQSxLQUFLLEVBQUUscUJBREk7QUFFWEMsZ0JBQUFBLE1BQU0sRUFBRSxJQUZHO0FBR1hHLGdCQUFBQSxRQUFRLEVBQUUsS0FBS3hFLFdBSEo7QUFJWHNFLGdCQUFBQSxTQUFTLEVBQUU7QUFBQSx5QkFBTSxNQUFJLENBQUMvQixVQUFMLENBQWdCLEtBQWhCLENBQU47QUFBQSxpQkFKQTtBQUtYa0MsZ0JBQUFBLGFBQWEsRUFBRTtBQUNiRSxrQkFBQUEsS0FBSyxFQUFFLElBRE07QUFFYlcsa0JBQUFBLFFBQVEsRUFDTjVFLE9BQU8sQ0FBQ0MsV0FBUixDQUFvQkMsU0FBcEIsSUFDQSxDQUFDLGtDQUFlc0MsUUFBUSxDQUFDNEQsT0FBeEIsQ0FERCxJQUVBLENBQUMzRSxhQUFhLENBQUNELGVBTEo7QUFNYjBDLGtCQUFBQSxRQUFRLEVBQUU7QUFORztBQUxKLGVBQWI7QUFjQTs7QUFDRixpQkFBS29DLGlDQUFMO0FBQ0V2RCxjQUFBQSxRQUFRLGdCQUNOLGdDQUFDLGlCQUFELGdDQUNNdEIsYUFETjtBQUVFLGdCQUFBLGNBQWMsRUFBRSxLQUFLN0MsS0FBTCxDQUFXQyxjQUY3QjtBQUdFLGdCQUFBLEtBQUssRUFBRSx3QkFBSTJELFFBQUosRUFBYyxDQUFDLFNBQUQsRUFBWSxPQUFaLENBQWQsQ0FIVDtBQUlFLGdCQUFBLGtCQUFrQixFQUFFLEtBQUs1RCxLQUFMLENBQVdvQyxlQUFYLENBQTJCdUQsZ0JBSmpEO0FBS0UsZ0JBQUEsb0JBQW9CLEVBQUVoRixjQUFjLENBQUNtRjtBQUx2QyxpQkFERjtBQVNBMUIsY0FBQUEsVUFBVSxHQUFHO0FBQ1hVLGdCQUFBQSxLQUFLLEVBQUUsMEJBREk7QUFFWEYsZ0JBQUFBLFFBQVEsRUFBRTNHLGFBRkM7QUFHWDhHLGdCQUFBQSxNQUFNLEVBQUUsSUFIRztBQUlYQyxnQkFBQUEsU0FBUyxFQUFFLEtBQUsyQyxlQUpMO0FBS1h6QyxnQkFBQUEsUUFBUSxFQUFFLEtBQUt4RSxXQUxKO0FBTVh5RSxnQkFBQUEsYUFBYSxFQUFFO0FBQ2JFLGtCQUFBQSxLQUFLLEVBQUUsSUFETTtBQUViQyxrQkFBQUEsUUFBUSxFQUFFLEtBRkc7QUFHYlUsa0JBQUFBLFFBQVEsRUFDTjVFLE9BQU8sQ0FBQ0MsV0FBUixDQUFvQkMsU0FBcEIsSUFDQSxDQUFDLGtDQUFlc0MsUUFBUSxDQUFDNEQsT0FBeEIsQ0FERCxJQUVBLENBQUMzRSxhQUFhLENBQUNEO0FBTko7QUFOSixlQUFiO0FBZUE7O0FBQ0YsaUJBQUtnRiw2QkFBTDtBQUNFekQsY0FBQUEsUUFBUSxnQkFDTixnQ0FBQyxhQUFELGdDQUNNdEIsYUFETjtBQUVFLGdCQUFBLE9BQU8sRUFBRSxDQUFDekIsT0FBTyxDQUFDQyxXQUFSLENBQW9CQyxTQUZoQztBQUdFLGdCQUFBLGNBQWMsRUFBRSxLQUFLdUcsaUJBQUwsQ0FBdUIsS0FBSzdILEtBQTVCLENBSGxCO0FBSUUsZ0JBQUEsUUFBUSxFQUFFLEtBQUs4SCxjQUpqQjtBQUtFLGdCQUFBLGtCQUFrQixFQUFFLEtBQUs5SCxLQUFMLENBQVdvQyxlQUFYLENBQTJCdUQsZ0JBTGpEO0FBTUUsZ0JBQUEsb0JBQW9CLEVBQUVoRixjQUFjLENBQUNtRjtBQU52QyxpQkFERjtBQVVBMUIsY0FBQUEsVUFBVSxHQUFHO0FBQ1hVLGdCQUFBQSxLQUFLLEVBQUUsc0JBREk7QUFFWEksZ0JBQUFBLFFBQVEsRUFBRSxLQUFLNkM7QUFGSixlQUFiO0FBSUE7O0FBQ0Y7QUFDRTtBQXJPSjtBQXVPRDs7QUFFRCxlQUFPLEtBQUsvSCxLQUFMLENBQVc2RCxRQUFYLGdCQUNMLGdDQUFDLFdBQUQ7QUFDRSxVQUFBLGNBQWMsRUFBRTtBQUFBLG1CQUFNLDJCQUFZQSxRQUFaLENBQU47QUFBQSxXQURsQjtBQUVFLFVBQUEsTUFBTSxFQUFFbUUsT0FBTyxDQUFDbEUsWUFBRCxDQUZqQjtBQUdFLFVBQUEsUUFBUSxFQUFFLEtBQUtwRDtBQUhqQixXQUlNMEQsVUFKTjtBQUtFLFVBQUEsUUFBUSxFQUFFakcsWUFBWSxDQUFDOEosTUFBYixDQUFvQjdELFVBQVUsQ0FBQ1EsUUFBWCxJQUF1QixFQUEzQztBQUxaLFlBT0dULFFBUEgsQ0FESyxHQVVILElBVko7QUFXRDtBQUNEOztBQWxaRjtBQUFBO0FBQUEsSUFDMkIrRCxnQkFEM0I7O0FBQUEsbUNBQ010SSxZQUROLGVBRXFCO0FBQ2pCaUUsSUFBQUEsUUFBUSxFQUFFc0Usc0JBQVVDLE1BREg7QUFFakI1RSxJQUFBQSxVQUFVLEVBQUUyRSxzQkFBVUUsTUFGTDtBQUdqQjVFLElBQUFBLFVBQVUsRUFBRTBFLHNCQUFVRSxNQUhMO0FBSWpCckIsSUFBQUEsb0JBQW9CLEVBQUVtQixzQkFBVUcsTUFBVixDQUFpQkMsVUFKdEI7QUFLakJ0QixJQUFBQSxZQUFZLEVBQUVrQixzQkFBVUcsTUFMUDtBQU1qQjNFLElBQUFBLFFBQVEsRUFBRXdFLHNCQUFVQyxNQUFWLENBQWlCRyxVQU5WO0FBT2pCN0UsSUFBQUEsUUFBUSxFQUFFeUUsc0JBQVVDLE1BQVYsQ0FBaUJHLFVBUFY7QUFRakJuSCxJQUFBQSxPQUFPLEVBQUUrRyxzQkFBVUMsTUFBVixDQUFpQkcsVUFSVDtBQVNqQjNFLElBQUFBLFFBQVEsRUFBRXVFLHNCQUFVQyxNQUFWLENBQWlCRyxVQVRWO0FBVWpCekgsSUFBQUEsZUFBZSxFQUFFcUgsc0JBQVVDLE1BQVYsQ0FBaUJHLFVBVmpCO0FBV2pCNUgsSUFBQUEsY0FBYyxFQUFFd0gsc0JBQVVDLE1BQVYsQ0FBaUJHLFVBWGhCO0FBWWpCdkgsSUFBQUEsZUFBZSxFQUFFbUgsc0JBQVVDLE1BQVYsQ0FBaUJHLFVBWmpCO0FBYWpCQyxJQUFBQSxlQUFlLEVBQUVMLHNCQUFVTSxJQWJWO0FBY2pCeEksSUFBQUEsY0FBYyxFQUFFa0ksc0JBQVVPLE9BQVYsQ0FBa0JQLHNCQUFVQyxNQUE1QjtBQWRDLEdBRnJCO0FBcVpBLFNBQU94SSxZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtjc3N9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtmaW5kRE9NTm9kZX0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xyXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xyXG5pbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcclxuXHJcbmltcG9ydCBNb2RhbERpYWxvZ0ZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvbW9kYWwtZGlhbG9nJztcclxuaW1wb3J0IEtlcGxlckdsU2NoZW1hIGZyb20gJ3NjaGVtYXMnO1xyXG5pbXBvcnQge2V4cG9ydEpzb24sIGV4cG9ydEh0bWwsIGV4cG9ydERhdGEsIGV4cG9ydEltYWdlLCBleHBvcnRNYXB9IGZyb20gJ3V0aWxzL2V4cG9ydC11dGlscyc7XHJcbmltcG9ydCB7aXNWYWxpZE1hcEluZm99IGZyb20gJ3V0aWxzL21hcC1pbmZvLXV0aWxzJztcclxuXHJcbi8vIG1vZGFsc1xyXG5pbXBvcnQgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9kZWxldGUtZGF0YS1tb2RhbCc7XHJcbmltcG9ydCBPdmVyV3JpdGVNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvb3ZlcndyaXRlLW1hcC1tb2RhbCc7XHJcbmltcG9ydCBEYXRhVGFibGVNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZGF0YS10YWJsZS1tb2RhbCc7XHJcbmltcG9ydCBMb2FkRGF0YU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9sb2FkLWRhdGEtbW9kYWwnO1xyXG5pbXBvcnQgRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LWltYWdlLW1vZGFsJztcclxuaW1wb3J0IEV4cG9ydERhdGFNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LWRhdGEtbW9kYWwnO1xyXG5pbXBvcnQgRXhwb3J0TWFwTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2V4cG9ydC1tYXAtbW9kYWwvZXhwb3J0LW1hcC1tb2RhbCc7XHJcbmltcG9ydCBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9hZGQtbWFwLXN0eWxlLW1vZGFsJztcclxuaW1wb3J0IFNhdmVNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvc2F2ZS1tYXAtbW9kYWwnO1xyXG5pbXBvcnQgU2hhcmVNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvc2hhcmUtbWFwLW1vZGFsJztcclxuXHJcbi8vIEJyZWFrcG9pbnRzXHJcbmltcG9ydCB7bWVkaWF9IGZyb20gJ3N0eWxlcy9tZWRpYS1icmVha3BvaW50cyc7XHJcblxyXG4vLyBUZW1wbGF0ZVxyXG5pbXBvcnQge1xyXG4gIEFERF9EQVRBX0lELFxyXG4gIERBVEFfVEFCTEVfSUQsXHJcbiAgREVMRVRFX0RBVEFfSUQsXHJcbiAgRVhQT1JUX0RBVEFfSUQsXHJcbiAgRVhQT1JUX0lNQUdFX0lELFxyXG4gIEVYUE9SVF9NQVBfSUQsXHJcbiAgQUREX01BUF9TVFlMRV9JRCxcclxuICBTQVZFX01BUF9JRCxcclxuICBTSEFSRV9NQVBfSUQsXHJcbiAgT1ZFUldSSVRFX01BUF9JRFxyXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHtFWFBPUlRfTUFQX0ZPUk1BVFN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IEtleUV2ZW50IGZyb20gJ2NvbnN0YW50cy9rZXlldmVudCc7XHJcblxyXG5jb25zdCBEYXRhVGFibGVNb2RhbFN0eWxlID0gY3NzYFxyXG4gIHRvcDogODBweDtcclxuICBwYWRkaW5nOiAzMnB4IDAgMCAwO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIG1heC13aWR0aDogOTB2dztcclxuXHJcbiAgJHttZWRpYS5wb3J0YWJsZWBcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgYH1cclxuXHJcbiAgJHttZWRpYS5wYWxtYFxyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIGB9XHJcbmA7XHJcbmNvbnN0IHNtYWxsTW9kYWxDc3MgPSBjc3NgXHJcbiAgd2lkdGg6IDQwJTtcclxuICBwYWRkaW5nOiA0MHB4IDQwcHggMzJweCA0MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTG9hZERhdGFNb2RhbFN0eWxlID0gY3NzYFxyXG4gIHRvcDogNjBweDtcclxuYDtcclxuXHJcbmNvbnN0IERlZmF1bHRTdHlsZSA9IGNzc2BcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG5gO1xyXG5cclxuTW9kYWxDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbXHJcbiAgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeSxcclxuICBPdmVyV3JpdGVNYXBNb2RhbEZhY3RvcnksXHJcbiAgRGF0YVRhYmxlTW9kYWxGYWN0b3J5LFxyXG4gIExvYWREYXRhTW9kYWxGYWN0b3J5LFxyXG4gIEV4cG9ydEltYWdlTW9kYWxGYWN0b3J5LFxyXG4gIEV4cG9ydERhdGFNb2RhbEZhY3RvcnksXHJcbiAgRXhwb3J0TWFwTW9kYWxGYWN0b3J5LFxyXG4gIEFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5LFxyXG4gIE1vZGFsRGlhbG9nRmFjdG9yeSxcclxuICBTYXZlTWFwTW9kYWxGYWN0b3J5LFxyXG4gIFNoYXJlTWFwTW9kYWxGYWN0b3J5XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbENvbnRhaW5lckZhY3RvcnkoXHJcbiAgRGVsZXRlRGF0YXNldE1vZGFsLFxyXG4gIE92ZXJXcml0ZU1hcE1vZGFsLFxyXG4gIERhdGFUYWJsZU1vZGFsLFxyXG4gIExvYWREYXRhTW9kYWwsXHJcbiAgRXhwb3J0SW1hZ2VNb2RhbCxcclxuICBFeHBvcnREYXRhTW9kYWwsXHJcbiAgRXhwb3J0TWFwTW9kYWwsXHJcbiAgQWRkTWFwU3R5bGVNb2RhbCxcclxuICBNb2RhbERpYWxvZyxcclxuICBTYXZlTWFwTW9kYWwsXHJcbiAgU2hhcmVNYXBNb2RhbFxyXG4pIHtcclxuICBjbGFzcyBNb2RhbFdyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgcm9vdE5vZGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIGNvbnRhaW5lclc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIGNvbnRhaW5lckg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIG1hcGJveEFwaVVybDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgbWFwU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgbWFwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgdWlTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICB2aXNTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICB2aXNTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgdWlTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgbWFwU3R5bGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIG9uU2F2ZVRvU3RvcmFnZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgIGNsb3VkUHJvdmlkZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKTtcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG91ZFByb3ZpZGVycyA9IHByb3BzID0+IHByb3BzLmNsb3VkUHJvdmlkZXJzO1xyXG4gICAgcHJvdmlkZXJXaXRoU3RvcmFnZSA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuY2xvdWRQcm92aWRlcnMsIGNsb3VkUHJvdmlkZXJzID0+XHJcbiAgICAgIGNsb3VkUHJvdmlkZXJzLmZpbHRlcihwID0+IHAuaGFzUHJpdmF0ZVN0b3JhZ2UoKSlcclxuICAgICk7XHJcbiAgICBwcm92aWRlcldpdGhTaGFyZSA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuY2xvdWRQcm92aWRlcnMsIGNsb3VkUHJvdmlkZXJzID0+XHJcbiAgICAgIGNsb3VkUHJvdmlkZXJzLmZpbHRlcihwID0+IHAuaGFzU2hhcmluZ1VybCgpKVxyXG4gICAgKTtcclxuXHJcbiAgICBfb25LZXlVcCA9IGV2ZW50ID0+IHtcclxuICAgICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XHJcbiAgICAgIGlmIChrZXlDb2RlID09PSBLZXlFdmVudC5ET01fVktfRVNDQVBFKSB7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9jbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfZGVsZXRlRGF0YXNldCA9IGtleSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnJlbW92ZURhdGFzZXQoa2V5KTtcclxuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25BZGRDdXN0b21NYXBTdHlsZSA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMuYWRkQ3VzdG9tTWFwU3R5bGUoKTtcclxuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25GaWxlVXBsb2FkID0gYmxvYiA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLmxvYWRGaWxlcyhibG9iKTtcclxuICAgIH07XHJcblxyXG4gICAgX29uRXhwb3J0SW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5wcm9wcy51aVN0YXRlLmV4cG9ydEltYWdlLmV4cG9ydGluZykge1xyXG4gICAgICAgIGV4cG9ydEltYWdlKHRoaXMucHJvcHMsIHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRJbWFnZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy5jbGVhbnVwRXhwb3J0SW1hZ2UoKTtcclxuICAgICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX29uRXhwb3J0RGF0YSA9ICgpID0+IHtcclxuICAgICAgZXhwb3J0RGF0YSh0aGlzLnByb3BzLCB0aGlzLnByb3BzLnVpU3RhdGUuZXhwb3J0RGF0YSk7XHJcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcclxuICAgIH07XHJcblxyXG4gICAgX29uRXhwb3J0TWFwID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB7dWlTdGF0ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7Zm9ybWF0fSA9IHVpU3RhdGUuZXhwb3J0TWFwO1xyXG4gICAgICAoZm9ybWF0ID09PSBFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTCA/IGV4cG9ydEh0bWwgOiBleHBvcnRKc29uKShcclxuICAgICAgICB0aGlzLnByb3BzLFxyXG4gICAgICAgIHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRNYXBbZm9ybWF0XSB8fCB7fVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9leHBvcnRGaWxlVG9DbG91ZCA9ICh7cHJvdmlkZXIsIGlzUHVibGljLCBvdmVyd3JpdGUsIGNsb3NlTW9kYWx9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvU2F2ZSA9IGV4cG9ydE1hcCh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgIHRoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLmV4cG9ydEZpbGVUb0Nsb3VkKHtcclxuICAgICAgICBtYXBEYXRhOiB0b1NhdmUsXHJcbiAgICAgICAgcHJvdmlkZXIsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgaXNQdWJsaWMsXHJcbiAgICAgICAgICBvdmVyd3JpdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlTW9kYWwsXHJcbiAgICAgICAgb25TdWNjZXNzOiB0aGlzLnByb3BzLm9uRXhwb3J0VG9DbG91ZFN1Y2Nlc3MsXHJcbiAgICAgICAgb25FcnJvcjogdGhpcy5wcm9wcy5vbkV4cG9ydFRvQ2xvdWRFcnJvclxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgX29uU2F2ZU1hcCA9IChvdmVyd3JpdGUgPSBmYWxzZSkgPT4ge1xyXG4gICAgICBjb25zdCB7Y3VycmVudFByb3ZpZGVyfSA9IHRoaXMucHJvcHMucHJvdmlkZXJTdGF0ZTtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLnByb3BzLmNsb3VkUHJvdmlkZXJzLmZpbmQocCA9PiBwLm5hbWUgPT09IGN1cnJlbnRQcm92aWRlcik7XHJcbiAgICAgIHRoaXMuX2V4cG9ydEZpbGVUb0Nsb3VkKHtcclxuICAgICAgICBwcm92aWRlcixcclxuICAgICAgICBpc1B1YmxpYzogZmFsc2UsXHJcbiAgICAgICAgb3ZlcndyaXRlLFxyXG4gICAgICAgIGNsb3NlTW9kYWw6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9vbk92ZXJ3cml0ZU1hcCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5fb25TYXZlTWFwKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25TaGFyZU1hcFVybCA9IHByb3ZpZGVyID0+IHtcclxuICAgICAgdGhpcy5fZXhwb3J0RmlsZVRvQ2xvdWQoe3Byb3ZpZGVyLCBpc1B1YmxpYzogdHJ1ZSwgb3ZlcndyaXRlOiBmYWxzZSwgY2xvc2VNb2RhbDogZmFsc2V9KTtcclxuICAgIH07XHJcblxyXG4gICAgX29uQ2xvc2VTYXZlTWFwID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5yZXNldFByb3ZpZGVyU3RhdHVzKCk7XHJcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcclxuICAgIH07XHJcblxyXG4gICAgX29uTG9hZENsb3VkTWFwID0gcGF5bG9hZCA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLmxvYWRDbG91ZE1hcCh7XHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICBvblN1Y2Nlc3M6IHRoaXMucHJvcHMub25Mb2FkQ2xvdWRNYXBTdWNjZXNzLFxyXG4gICAgICAgIG9uRXJyb3I6IHRoaXMucHJvcHMub25Mb2FkQ2xvdWRNYXBFcnJvclxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgY29udGFpbmVyVyxcclxuICAgICAgICBjb250YWluZXJILFxyXG4gICAgICAgIG1hcFN0eWxlLFxyXG4gICAgICAgIG1hcFN0YXRlLFxyXG4gICAgICAgIHVpU3RhdGUsXHJcbiAgICAgICAgdmlzU3RhdGUsXHJcbiAgICAgICAgcm9vdE5vZGUsXHJcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxyXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxyXG4gICAgICAgIHByb3ZpZGVyU3RhdGVcclxuICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBjb25zdCB7Y3VycmVudE1vZGFsLCBkYXRhc2V0S2V5VG9SZW1vdmV9ID0gdWlTdGF0ZTtcclxuICAgICAgY29uc3Qge2RhdGFzZXRzLCBsYXllcnMsIGVkaXRpbmdEYXRhc2V0fSA9IHZpc1N0YXRlO1xyXG5cclxuICAgICAgbGV0IHRlbXBsYXRlID0gbnVsbDtcclxuICAgICAgbGV0IG1vZGFsUHJvcHMgPSB7fTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50TW9kYWwgJiYgY3VycmVudE1vZGFsLmlkICYmIGN1cnJlbnRNb2RhbC50ZW1wbGF0ZSkge1xyXG4gICAgICAgIC8vIGlmIGN1cnJlbnRNZG9hbCB0ZW1wbGF0ZSBpcyBhbHJlYWR5IHByb3ZpZGVkXHJcbiAgICAgICAgLy8gVE9ETzogbmVlZCB0byBjaGVjayB3aGV0aGVyIHRlbXBsYXRlIGlzIHZhbGlkXHJcbiAgICAgICAgdGVtcGxhdGUgPSA8Y3VycmVudE1vZGFsLnRlbXBsYXRlIC8+O1xyXG4gICAgICAgIG1vZGFsUHJvcHMgPSBjdXJyZW50TW9kYWwubW9kYWxQcm9wcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRNb2RhbCkge1xyXG4gICAgICAgICAgY2FzZSBEQVRBX1RBQkxFX0lEOlxyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lclcgKiAwLjk7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxyXG4gICAgICAgICAgICAgIDxEYXRhVGFibGVNb2RhbFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e2NvbnRhaW5lclcgKiAwLjl9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2NvbnRhaW5lckggKiAwLjg1fVxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxyXG4gICAgICAgICAgICAgICAgZGF0YUlkPXtlZGl0aW5nRGF0YXNldH1cclxuICAgICAgICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3Zpc1N0YXRlQWN0aW9ucy5zaG93RGF0YXNldFRhYmxlfVxyXG4gICAgICAgICAgICAgICAgc29ydFRhYmxlQ29sdW1uPXt2aXNTdGF0ZUFjdGlvbnMuc29ydFRhYmxlQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgcGluVGFibGVDb2x1bW49e3Zpc1N0YXRlQWN0aW9ucy5waW5UYWJsZUNvbHVtbn1cclxuICAgICAgICAgICAgICAgIGNvcHlUYWJsZUNvbHVtbj17dmlzU3RhdGVBY3Rpb25zLmNvcHlUYWJsZUNvbHVtbn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogd2UgbmVlZCB0byBtYWtlIHRoaXMgd2lkdGggY29uc2lzdGVudCB3aXRoIHRoZSBjc3MgcnVsZSBkZWZpbmVkIG1vZGFsLmpzOjMyIG1heC13aWR0aDogNzB2d1xyXG4gICAgICAgICAgICBtb2RhbFByb3BzLmNzc1N0eWxlID0gY3NzYFxyXG4gICAgICAgICAgICAgICR7RGF0YVRhYmxlTW9kYWxTdHlsZX07XHJcbiAgICAgICAgICAgICAgJHttZWRpYS5wYWxtYFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICR7d2lkdGh9cHg7XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIERFTEVURV9EQVRBX0lEOlxyXG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSBvcHRpb25zXHJcbiAgICAgICAgICAgIGlmIChkYXRhc2V0S2V5VG9SZW1vdmUgJiYgZGF0YXNldHMgJiYgZGF0YXNldHNbZGF0YXNldEtleVRvUmVtb3ZlXSkge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlID0gKFxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZURhdGFzZXRNb2RhbCBkYXRhc2V0PXtkYXRhc2V0c1tkYXRhc2V0S2V5VG9SZW1vdmVdfSBsYXllcnM9e2xheWVyc30gLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLmRlbGV0ZURhdGFzZXQnLFxyXG4gICAgICAgICAgICAgICAgY3NzU3R5bGU6IHNtYWxsTW9kYWxDc3MsXHJcbiAgICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHRoaXMuX2RlbGV0ZURhdGFzZXQoZGF0YXNldEtleVRvUmVtb3ZlKSxcclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgICBuZWdhdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnbW9kYWwuYnV0dG9uLmRlbGV0ZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrOyAvLyBpbiBjYXNlIHdlIGFkZCBhIG5ldyBjYXNlIGFmdGVyIHRoaXMgb25lXHJcbiAgICAgICAgICBjYXNlIEFERF9EQVRBX0lEOlxyXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcclxuICAgICAgICAgICAgICA8TG9hZERhdGFNb2RhbFxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9jbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgb25GaWxlVXBsb2FkPXt0aGlzLl9vbkZpbGVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICBvbkxvYWRDbG91ZE1hcD17dGhpcy5fb25Mb2FkQ2xvdWRNYXB9XHJcbiAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17dGhpcy5wcm92aWRlcldpdGhTdG9yYWdlKHRoaXMucHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5zZXRDbG91ZFByb3ZpZGVyfVxyXG4gICAgICAgICAgICAgICAgZ2V0U2F2ZWRNYXBzPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5nZXRTYXZlZE1hcHN9XHJcbiAgICAgICAgICAgICAgICBsb2FkRmlsZXM9e3VpU3RhdGUubG9hZEZpbGVzfVxyXG4gICAgICAgICAgICAgICAgey4uLnVpU3RhdGUubG9hZEZpbGVzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5hZGREYXRhVG9NYXAnLFxyXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiBMb2FkRGF0YU1vZGFsU3R5bGUsXHJcbiAgICAgICAgICAgICAgZm9vdGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX2Nsb3NlTW9kYWxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVYUE9SVF9JTUFHRV9JRDpcclxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXHJcbiAgICAgICAgICAgICAgPEV4cG9ydEltYWdlTW9kYWxcclxuICAgICAgICAgICAgICAgIGV4cG9ydEltYWdlPXt1aVN0YXRlLmV4cG9ydEltYWdlfVxyXG4gICAgICAgICAgICAgICAgbWFwVz17Y29udGFpbmVyV31cclxuICAgICAgICAgICAgICAgIG1hcEg9e2NvbnRhaW5lckh9XHJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZVNldHRpbmc9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEltYWdlU2V0dGluZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuZXhwb3J0SW1hZ2UnLFxyXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcclxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0SW1hZ2UsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdWlTdGF0ZS5leHBvcnRJbWFnZS5leHBvcnRpbmcsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ21vZGFsLmJ1dHRvbi5kb3dubG9hZCdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFWFBPUlRfREFUQV9JRDpcclxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXHJcbiAgICAgICAgICAgICAgPEV4cG9ydERhdGFNb2RhbFxyXG4gICAgICAgICAgICAgICAgey4uLnVpU3RhdGUuZXhwb3J0RGF0YX1cclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cclxuICAgICAgICAgICAgICAgIGFwcGx5Q1BVRmlsdGVyPXt0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5hcHBseUNQVUZpbHRlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuX2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydERhdGFUeXBlPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnREYXRhVHlwZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0U2VsZWN0ZWREYXRhc2V0PXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRTZWxlY3RlZERhdGFzZXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydEZpbHRlcmVkPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRGaWx0ZXJlZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuZXhwb3J0RGF0YScsXHJcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxyXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25FeHBvcnREYXRhLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZXhwb3J0J1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVYUE9SVF9NQVBfSUQ6XHJcbiAgICAgICAgICAgIGNvbnN0IGtlcGxlckdsQ29uZmlnID0gS2VwbGVyR2xTY2hlbWEuZ2V0Q29uZmlnVG9TYXZlKHtcclxuICAgICAgICAgICAgICBtYXBTdHlsZSxcclxuICAgICAgICAgICAgICB2aXNTdGF0ZSxcclxuICAgICAgICAgICAgICBtYXBTdGF0ZSxcclxuICAgICAgICAgICAgICB1aVN0YXRlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcclxuICAgICAgICAgICAgICA8RXhwb3J0TWFwTW9kYWxcclxuICAgICAgICAgICAgICAgIGNvbmZpZz17a2VwbGVyR2xDb25maWd9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt1aVN0YXRlLmV4cG9ydE1hcH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwRm9ybWF0PXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRNYXBGb3JtYXR9XHJcbiAgICAgICAgICAgICAgICBvbkVkaXRVc2VyTWFwYm94QWNjZXNzVG9rZW49e3VpU3RhdGVBY3Rpb25zLnNldFVzZXJNYXBib3hBY2Nlc3NUb2tlbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGU9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEhUTUxNYXBNb2RlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5leHBvcnRNYXAnLFxyXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcclxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0TWFwLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZXhwb3J0J1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEFERF9NQVBfU1RZTEVfSUQ6XHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxyXG4gICAgICAgICAgICAgIDxBZGRNYXBTdHlsZU1vZGFsXHJcbiAgICAgICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17dGhpcy5wcm9wcy5tYXBib3hBcGlBY2Nlc3NUb2tlbn1cclxuICAgICAgICAgICAgICAgIG1hcGJveEFwaVVybD17dGhpcy5wcm9wcy5tYXBib3hBcGlVcmx9XHJcbiAgICAgICAgICAgICAgICBtYXBTdGF0ZT17dGhpcy5wcm9wcy5tYXBTdGF0ZX1cclxuICAgICAgICAgICAgICAgIGlucHV0U3R5bGU9e21hcFN0eWxlLmlucHV0U3R5bGV9XHJcbiAgICAgICAgICAgICAgICBpbnB1dE1hcFN0eWxlPXt0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5pbnB1dE1hcFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgbG9hZEN1c3RvbU1hcFN0eWxlPXt0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5sb2FkQ3VzdG9tTWFwU3R5bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLmFkZEN1c3RvbU1hcGJveFN0eWxlJyxcclxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXHJcbiAgICAgICAgICAgICAgb25Db25maXJtOiB0aGlzLl9vbkFkZEN1c3RvbU1hcFN0eWxlLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFtYXBTdHlsZS5pbnB1dFN0eWxlLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uYWRkU3R5bGUnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU0FWRV9NQVBfSUQ6XHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxyXG4gICAgICAgICAgICAgIDxTYXZlTWFwTW9kYWxcclxuICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlclN0YXRlfVxyXG4gICAgICAgICAgICAgICAgZXhwb3J0SW1hZ2U9e3VpU3RhdGUuZXhwb3J0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBtYXBJbmZvPXt2aXNTdGF0ZS5tYXBJbmZvfVxyXG4gICAgICAgICAgICAgICAgb25TZXRNYXBJbmZvPXt2aXNTdGF0ZUFjdGlvbnMuc2V0TWFwSW5mb31cclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XHJcbiAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17dGhpcy5wcm92aWRlcldpdGhTdG9yYWdlKHRoaXMucHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5zZXRDbG91ZFByb3ZpZGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5zYXZlTWFwJyxcclxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXHJcbiAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB0aGlzLl9vblNhdmVNYXAoZmFsc2UpLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6XHJcbiAgICAgICAgICAgICAgICAgIHVpU3RhdGUuZXhwb3J0SW1hZ2UuZXhwb3J0aW5nIHx8XHJcbiAgICAgICAgICAgICAgICAgICFpc1ZhbGlkTWFwSW5mbyh2aXNTdGF0ZS5tYXBJbmZvKSB8fFxyXG4gICAgICAgICAgICAgICAgICAhcHJvdmlkZXJTdGF0ZS5jdXJyZW50UHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ21vZGFsLmJ1dHRvbi5zYXZlJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIE9WRVJXUklURV9NQVBfSUQ6XHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxyXG4gICAgICAgICAgICAgIDxPdmVyV3JpdGVNYXBNb2RhbFxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XHJcbiAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17dGhpcy5wcm9wcy5jbG91ZFByb3ZpZGVyc31cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtnZXQodmlzU3RhdGUsIFsnbWFwSW5mbycsICd0aXRsZSddKX1cclxuICAgICAgICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17dGhpcy5wcm9wcy5wcm92aWRlckFjdGlvbnMuc2V0Q2xvdWRQcm92aWRlcn1cclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ092ZXJ3cml0ZSBFeGlzdGluZyBGaWxlPycsXHJcbiAgICAgICAgICAgICAgY3NzU3R5bGU6IHNtYWxsTW9kYWxDc3MsXHJcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25PdmVyd3JpdGVNYXAsXHJcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ1llcycsXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDpcclxuICAgICAgICAgICAgICAgICAgdWlTdGF0ZS5leHBvcnRJbWFnZS5leHBvcnRpbmcgfHxcclxuICAgICAgICAgICAgICAgICAgIWlzVmFsaWRNYXBJbmZvKHZpc1N0YXRlLm1hcEluZm8pIHx8XHJcbiAgICAgICAgICAgICAgICAgICFwcm92aWRlclN0YXRlLmN1cnJlbnRQcm92aWRlclxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFNIQVJFX01BUF9JRDpcclxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXHJcbiAgICAgICAgICAgICAgPFNoYXJlTWFwTW9kYWxcclxuICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlclN0YXRlfVxyXG4gICAgICAgICAgICAgICAgaXNSZWFkeT17IXVpU3RhdGUuZXhwb3J0SW1hZ2UuZXhwb3J0aW5nfVxyXG4gICAgICAgICAgICAgICAgY2xvdWRQcm92aWRlcnM9e3RoaXMucHJvdmlkZXJXaXRoU2hhcmUodGhpcy5wcm9wcyl9XHJcbiAgICAgICAgICAgICAgICBvbkV4cG9ydD17dGhpcy5fb25TaGFyZU1hcFVybH1cclxuICAgICAgICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17dGhpcy5wcm9wcy5wcm92aWRlckFjdGlvbnMuc2V0Q2xvdWRQcm92aWRlcn1cclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLnNoYXJlVVJMJyxcclxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fb25DbG9zZVNhdmVNYXBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnJvb3ROb2RlID8gKFxyXG4gICAgICAgIDxNb2RhbERpYWxvZ1xyXG4gICAgICAgICAgcGFyZW50U2VsZWN0b3I9eygpID0+IGZpbmRET01Ob2RlKHJvb3ROb2RlKX1cclxuICAgICAgICAgIGlzT3Blbj17Qm9vbGVhbihjdXJyZW50TW9kYWwpfVxyXG4gICAgICAgICAgb25DYW5jZWw9e3RoaXMuX2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICB7Li4ubW9kYWxQcm9wc31cclxuICAgICAgICAgIGNzc1N0eWxlPXtEZWZhdWx0U3R5bGUuY29uY2F0KG1vZGFsUHJvcHMuY3NzU3R5bGUgfHwgJycpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0ZW1wbGF0ZX1cclxuICAgICAgICA8L01vZGFsRGlhbG9nPlxyXG4gICAgICApIDogbnVsbDtcclxuICAgIH1cclxuICAgIC8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE1vZGFsV3JhcHBlcjtcclxufVxyXG4iXX0=