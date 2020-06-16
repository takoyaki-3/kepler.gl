"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddDataButtonFactory = AddDataButtonFactory;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSortableHoc = require("react-sortable-hoc");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _reactIntl = require("react-intl");

var _dataUtils = require("../../utils/data-utils");

var _layerPanel = _interopRequireDefault(require("./layer-panel/layer-panel"));

var _sourceDataCatalog = _interopRequireDefault(require("./common/source-data-catalog"));

var _icons = require("../common/icons");

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

var _styledComponents2 = require("../common/styled-components");

var _defaultSettings = require("../../constants/default-settings");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: ", ";\n\n  &.sorting {\n    pointer-events: none;\n  }\n\n  &.sorting-layers .layer-panel__header {\n    background-color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    *,\n    *:before,\n    *:after {\n      box-sizing: border-box;\n    }\n    .layer__drag-handle {\n      opacity: 1;\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var LayerBlendingSelector = function LayerBlendingSelector(_ref) {
  var layerBlending = _ref.layerBlending,
      updateLayerBlending = _ref.updateLayerBlending,
      intl = _ref.intl;
  var labeledLayerBlendings = Object.keys(_defaultSettings.LAYER_BLENDINGS).reduce(function (acc, current) {
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, intl.formatMessage({
      id: _defaultSettings.LAYER_BLENDINGS[current].label
    }), current));
  }, {});
  var onChange = (0, _react.useCallback)(function (blending) {
    return updateLayerBlending(labeledLayerBlendings[blending]);
  }, [updateLayerBlending, labeledLayerBlendings]);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "layerBlending.title"
  })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: intl.formatMessage({
      id: _defaultSettings.LAYER_BLENDINGS[layerBlending].label
    }),
    options: Object.keys(labeledLayerBlendings),
    multiSelect: false,
    searchable: false,
    onChange: onChange
  }));
}; // make sure the element is always visible while is being dragged
// item being dragged is appended in body, here to reset its global style


var SortableStyledItem = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.dropdownWrapperZ + 1;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.lineHeight;
}, function (props) {
  return props.theme.textColorHl;
});

function AddDataButtonFactory() {
  var AddDataButton = function AddDataButton(_ref2) {
    var onClick = _ref2.onClick,
        isInactive = _ref2.isInactive;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
      className: "add-data-button",
      onClick: onClick,
      isInactive: !isInactive,
      width: "105px",
      secondary: true
    }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
      height: "12px"
    }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: 'layerManager.addData'
    }));
  };

  return AddDataButton;
}

LayerManagerFactory.deps = [AddDataButtonFactory, _layerPanel["default"], _sourceDataCatalog["default"]];

function LayerManagerFactory(AddDataButton, LayerPanel, SourceDataCatalog) {
  // By wrapping layer panel using a sortable element we don't have to implement the drag and drop logic into the panel itself;
  // Developers can provide any layer panel implementation and it will still be sortable
  var SortableItem = (0, _reactSortableHoc.sortableElement)(function (_ref3) {
    var children = _ref3.children,
        isSorting = _ref3.isSorting;
    return /*#__PURE__*/_react["default"].createElement(SortableStyledItem, {
      className: (0, _classnames["default"])('sortable-layer-items', {
        sorting: isSorting
      })
    }, children);
  });
  var SortableContainer = (0, _reactSortableHoc.sortableContainer)(function (_ref4) {
    var children = _ref4.children;
    return /*#__PURE__*/_react["default"].createElement("div", null, children);
  });

  var LayerManager = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerManager, _Component);

    var _super = _createSuper(LayerManager);

    function LayerManager() {
      var _this;

      (0, _classCallCheck2["default"])(this, LayerManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isSorting: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerClassSelector", function (props) {
        return props.layerClasses;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerTypeOptionsSelector", (0, _reselect.createSelector)(_this.layerClassSelector, function (layerClasses) {
        return Object.keys(layerClasses).map(function (key) {
          var layer = new layerClasses[key]();
          return {
            id: key,
            label: layer.name,
            icon: layer.layerIcon
          };
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_addEmptyNewLayer", function () {
        _this.props.addLayer();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleSort", function (_ref5) {
        var oldIndex = _ref5.oldIndex,
            newIndex = _ref5.newIndex;

        _this.props.updateLayerOrder((0, _dataUtils.arrayMove)(_this.props.layerOrder, oldIndex, newIndex));

        _this.setState({
          isSorting: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSortStart", function () {
        _this.setState({
          isSorting: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateBeforeSortStart", function (_ref6) {
        var index = _ref6.index;
        // if layer config is active, close it
        var _this$props = _this.props,
            layerOrder = _this$props.layerOrder,
            layers = _this$props.layers,
            layerConfigChange = _this$props.layerConfigChange;
        var layerIdx = layerOrder[index];

        if (layers[layerIdx].config.isConfigActive) {
          layerConfigChange(layers[layerIdx], {
            isConfigActive: false
          });
        }
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerManager, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            layers = _this$props2.layers,
            datasets = _this$props2.datasets,
            layerOrder = _this$props2.layerOrder,
            openModal = _this$props2.openModal,
            intl = _this$props2.intl;
        var defaultDataset = Object.keys(datasets)[0];
        var layerTypeOptions = this.layerTypeOptionsSelector(this.props);
        var layerActions = {
          layerColorUIChange: this.props.layerColorUIChange,
          layerConfigChange: this.props.layerConfigChange,
          layerVisualChannelConfigChange: this.props.layerVisualChannelConfigChange,
          layerTypeChange: this.props.layerTypeChange,
          layerVisConfigChange: this.props.layerVisConfigChange,
          layerTextLabelChange: this.props.layerTextLabelChange,
          removeLayer: this.props.removeLayer
        };
        var panelProps = {
          datasets: datasets,
          openModal: openModal,
          layerTypeOptions: layerTypeOptions
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "layer-manager"
        }, /*#__PURE__*/_react["default"].createElement(SourceDataCatalog, {
          datasets: datasets,
          showDatasetTable: this.props.showDatasetTable,
          removeDataset: this.props.removeDataset,
          showDeleteDataset: true
        }), /*#__PURE__*/_react["default"].createElement(AddDataButton, {
          onClick: this.props.showAddDataModal,
          isInactive: !defaultDataset
        }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelDivider, null), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(SortableContainer, {
          onSortEnd: this._handleSort,
          onSortStart: this._onSortStart,
          updateBeforeSortStart: this._updateBeforeSortStart,
          lockAxis: "y",
          helperClass: "sorting-layers",
          useDragHandle: true
        }, layerOrder.map(function (layerIdx, index) {
          return !layers[layerIdx].config.hidden && /*#__PURE__*/_react["default"].createElement(SortableItem, {
            key: "layer-".concat(layerIdx),
            index: index,
            isSorting: _this2.state.isSorting
          }, /*#__PURE__*/_react["default"].createElement(LayerPanel, (0, _extends2["default"])({}, panelProps, layerActions, {
            sortData: layerIdx,
            key: layers[layerIdx].id,
            idx: layerIdx,
            layer: layers[layerIdx]
          })));
        }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, defaultDataset ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
          className: "add-layer-button",
          onClick: this._addEmptyNewLayer,
          width: "105px"
        }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
          height: "12px"
        }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'layerManager.addLayer'
        })) : null), /*#__PURE__*/_react["default"].createElement(LayerBlendingSelector, {
          layerBlending: this.props.layerBlending,
          updateLayerBlending: this.props.updateLayerBlending,
          intl: intl
        }));
      }
    }]);
    return LayerManager;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerManager, "propTypes", {
    datasets: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layerClasses: _propTypes["default"].object.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    // functions
    addLayer: _propTypes["default"].func.isRequired,
    layerColorUIChange: _propTypes["default"].func.isRequired,
    layerConfigChange: _propTypes["default"].func.isRequired,
    layerTextLabelChange: _propTypes["default"].func.isRequired,
    layerVisualChannelConfigChange: _propTypes["default"].func.isRequired,
    layerTypeChange: _propTypes["default"].func.isRequired,
    layerVisConfigChange: _propTypes["default"].func.isRequired,
    openModal: _propTypes["default"].func.isRequired,
    removeLayer: _propTypes["default"].func.isRequired,
    removeDataset: _propTypes["default"].func.isRequired,
    showDatasetTable: _propTypes["default"].func.isRequired,
    updateLayerBlending: _propTypes["default"].func.isRequired,
    updateLayerOrder: _propTypes["default"].func.isRequired
  });
  return (0, _reactIntl.injectIntl)(LayerManager);
}

var _default = LayerManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJMYXllckJsZW5kaW5nU2VsZWN0b3IiLCJsYXllckJsZW5kaW5nIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsImludGwiLCJsYWJlbGVkTGF5ZXJCbGVuZGluZ3MiLCJPYmplY3QiLCJrZXlzIiwiTEFZRVJfQkxFTkRJTkdTIiwicmVkdWNlIiwiYWNjIiwiY3VycmVudCIsImZvcm1hdE1lc3NhZ2UiLCJpZCIsImxhYmVsIiwib25DaGFuZ2UiLCJibGVuZGluZyIsIlNvcnRhYmxlU3R5bGVkSXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJkcm9wZG93bldyYXBwZXJaIiwicGFuZWxCYWNrZ3JvdW5kSG92ZXIiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRDb2xvckhsIiwiQWRkRGF0YUJ1dHRvbkZhY3RvcnkiLCJBZGREYXRhQnV0dG9uIiwib25DbGljayIsImlzSW5hY3RpdmUiLCJMYXllck1hbmFnZXJGYWN0b3J5IiwiZGVwcyIsIkxheWVyUGFuZWxGYWN0b3J5IiwiU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5IiwiTGF5ZXJQYW5lbCIsIlNvdXJjZURhdGFDYXRhbG9nIiwiU29ydGFibGVJdGVtIiwiY2hpbGRyZW4iLCJpc1NvcnRpbmciLCJzb3J0aW5nIiwiU29ydGFibGVDb250YWluZXIiLCJMYXllck1hbmFnZXIiLCJsYXllckNsYXNzZXMiLCJsYXllckNsYXNzU2VsZWN0b3IiLCJtYXAiLCJrZXkiLCJsYXllciIsIm5hbWUiLCJpY29uIiwibGF5ZXJJY29uIiwiYWRkTGF5ZXIiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwidXBkYXRlTGF5ZXJPcmRlciIsImxheWVyT3JkZXIiLCJzZXRTdGF0ZSIsImluZGV4IiwibGF5ZXJzIiwibGF5ZXJDb25maWdDaGFuZ2UiLCJsYXllcklkeCIsImNvbmZpZyIsImlzQ29uZmlnQWN0aXZlIiwiZGF0YXNldHMiLCJvcGVuTW9kYWwiLCJkZWZhdWx0RGF0YXNldCIsImxheWVyVHlwZU9wdGlvbnMiLCJsYXllclR5cGVPcHRpb25zU2VsZWN0b3IiLCJsYXllckFjdGlvbnMiLCJsYXllckNvbG9yVUlDaGFuZ2UiLCJsYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UiLCJsYXllclR5cGVDaGFuZ2UiLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsImxheWVyVGV4dExhYmVsQ2hhbmdlIiwicmVtb3ZlTGF5ZXIiLCJwYW5lbFByb3BzIiwic2hvd0RhdGFzZXRUYWJsZSIsInJlbW92ZURhdGFzZXQiLCJzaG93QWRkRGF0YU1vZGFsIiwiX2hhbmRsZVNvcnQiLCJfb25Tb3J0U3RhcnQiLCJfdXBkYXRlQmVmb3JlU29ydFN0YXJ0IiwiaGlkZGVuIiwic3RhdGUiLCJfYWRkRW1wdHlOZXdMYXllciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJhcnJheU9mIiwiYW55IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FBZ0Q7QUFBQSxNQUE5Q0MsYUFBOEMsUUFBOUNBLGFBQThDO0FBQUEsTUFBL0JDLG1CQUErQixRQUEvQkEsbUJBQStCO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQzVFLE1BQU1DLHFCQUFxQixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsZ0NBQVosRUFBNkJDLE1BQTdCLENBQzVCLFVBQUNDLEdBQUQsRUFBTUMsT0FBTjtBQUFBLDJDQUNLRCxHQURMLDRDQUVH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QWJUO0FBY2pCZCxJQUFBQSxXQUFXLEVBQUVZLHNCQUFVTSxJQUFWLENBQWVKLFVBZFg7QUFlakJYLElBQUFBLGFBQWEsRUFBRVMsc0JBQVVNLElBQVYsQ0FBZUosVUFmYjtBQWdCakJaLElBQUFBLGdCQUFnQixFQUFFVSxzQkFBVU0sSUFBVixDQUFlSixVQWhCaEI7QUFpQmpCdkYsSUFBQUEsbUJBQW1CLEVBQUVxRixzQkFBVU0sSUFBVixDQUFlSixVQWpCbkI7QUFrQmpCbEMsSUFBQUEsZ0JBQWdCLEVBQUVnQyxzQkFBVU0sSUFBVixDQUFlSjtBQWxCaEIsR0FoQm9EO0FBd0p6RSxTQUFPLDJCQUFXOUMsWUFBWCxDQUFQO0FBQ0Q7O2VBRWNYLG1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7c29ydGFibGVDb250YWluZXIsIHNvcnRhYmxlRWxlbWVudH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcclxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlLCBpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcclxuaW1wb3J0IHthcnJheU1vdmV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xyXG5cclxuaW1wb3J0IExheWVyUGFuZWxGYWN0b3J5IGZyb20gJy4vbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwnO1xyXG5pbXBvcnQgU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5IGZyb20gJy4vY29tbW9uL3NvdXJjZS1kYXRhLWNhdGFsb2cnO1xyXG5pbXBvcnQge0FkZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIFBhbmVsTGFiZWwsXHJcbiAgU2lkZVBhbmVsRGl2aWRlcixcclxuICBTaWRlUGFuZWxTZWN0aW9uXHJcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHtMQVlFUl9CTEVORElOR1N9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmNvbnN0IExheWVyQmxlbmRpbmdTZWxlY3RvciA9ICh7bGF5ZXJCbGVuZGluZywgdXBkYXRlTGF5ZXJCbGVuZGluZywgaW50bH0pID0+IHtcclxuICBjb25zdCBsYWJlbGVkTGF5ZXJCbGVuZGluZ3MgPSBPYmplY3Qua2V5cyhMQVlFUl9CTEVORElOR1MpLnJlZHVjZShcclxuICAgIChhY2MsIGN1cnJlbnQpID0+ICh7XHJcbiAgICAgIC4uLmFjYyxcclxuICAgICAgW2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6IExBWUVSX0JMRU5ESU5HU1tjdXJyZW50XS5sYWJlbH0pXTogY3VycmVudFxyXG4gICAgfSksXHJcbiAgICB7fVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soYmxlbmRpbmcgPT4gdXBkYXRlTGF5ZXJCbGVuZGluZyhsYWJlbGVkTGF5ZXJCbGVuZGluZ3NbYmxlbmRpbmddKSwgW1xyXG4gICAgdXBkYXRlTGF5ZXJCbGVuZGluZyxcclxuICAgIGxhYmVsZWRMYXllckJsZW5kaW5nc1xyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgIDxQYW5lbExhYmVsPlxyXG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwibGF5ZXJCbGVuZGluZy50aXRsZVwiIC8+XHJcbiAgICAgIDwvUGFuZWxMYWJlbD5cclxuICAgICAgPEl0ZW1TZWxlY3RvclxyXG4gICAgICAgIHNlbGVjdGVkSXRlbXM9e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6IExBWUVSX0JMRU5ESU5HU1tsYXllckJsZW5kaW5nXS5sYWJlbH0pfVxyXG4gICAgICAgIG9wdGlvbnM9e09iamVjdC5rZXlzKGxhYmVsZWRMYXllckJsZW5kaW5ncyl9XHJcbiAgICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxyXG4gICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gbWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIGFsd2F5cyB2aXNpYmxlIHdoaWxlIGlzIGJlaW5nIGRyYWdnZWRcclxuLy8gaXRlbSBiZWluZyBkcmFnZ2VkIGlzIGFwcGVuZGVkIGluIGJvZHksIGhlcmUgdG8gcmVzZXQgaXRzIGdsb2JhbCBzdHlsZVxyXG5jb25zdCBTb3J0YWJsZVN0eWxlZEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25XcmFwcGVyWiArIDF9O1xyXG5cclxuICAmLnNvcnRpbmcge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmLnNvcnRpbmctbGF5ZXJzIC5sYXllci1wYW5lbF9faGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xyXG4gICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlseX07XHJcbiAgICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250V2VpZ2h0fTtcclxuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250U2l6ZX07XHJcbiAgICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0fTtcclxuICAgICosXHJcbiAgICAqOmJlZm9yZSxcclxuICAgICo6YWZ0ZXIge1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgLmxheWVyX19kcmFnLWhhbmRsZSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQWRkRGF0YUJ1dHRvbkZhY3RvcnkoKSB7XHJcbiAgY29uc3QgQWRkRGF0YUJ1dHRvbiA9ICh7b25DbGljaywgaXNJbmFjdGl2ZX0pID0+IChcclxuICAgIDxCdXR0b25cclxuICAgICAgY2xhc3NOYW1lPVwiYWRkLWRhdGEtYnV0dG9uXCJcclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgaXNJbmFjdGl2ZT17IWlzSW5hY3RpdmV9XHJcbiAgICAgIHdpZHRoPVwiMTA1cHhcIlxyXG4gICAgICBzZWNvbmRhcnlcclxuICAgID5cclxuICAgICAgPEFkZCBoZWlnaHQ9XCIxMnB4XCIgLz5cclxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydsYXllck1hbmFnZXIuYWRkRGF0YSd9IC8+XHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG5cclxuICByZXR1cm4gQWRkRGF0YUJ1dHRvbjtcclxufVxyXG5cclxuTGF5ZXJNYW5hZ2VyRmFjdG9yeS5kZXBzID0gW0FkZERhdGFCdXR0b25GYWN0b3J5LCBMYXllclBhbmVsRmFjdG9yeSwgU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5XTtcclxuXHJcbmZ1bmN0aW9uIExheWVyTWFuYWdlckZhY3RvcnkoQWRkRGF0YUJ1dHRvbiwgTGF5ZXJQYW5lbCwgU291cmNlRGF0YUNhdGFsb2cpIHtcclxuICAvLyBCeSB3cmFwcGluZyBsYXllciBwYW5lbCB1c2luZyBhIHNvcnRhYmxlIGVsZW1lbnQgd2UgZG9uJ3QgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIGRyYWcgYW5kIGRyb3AgbG9naWMgaW50byB0aGUgcGFuZWwgaXRzZWxmO1xyXG4gIC8vIERldmVsb3BlcnMgY2FuIHByb3ZpZGUgYW55IGxheWVyIHBhbmVsIGltcGxlbWVudGF0aW9uIGFuZCBpdCB3aWxsIHN0aWxsIGJlIHNvcnRhYmxlXHJcbiAgY29uc3QgU29ydGFibGVJdGVtID0gc29ydGFibGVFbGVtZW50KCh7Y2hpbGRyZW4sIGlzU29ydGluZ30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTb3J0YWJsZVN0eWxlZEl0ZW0gY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdzb3J0YWJsZS1sYXllci1pdGVtcycsIHtzb3J0aW5nOiBpc1NvcnRpbmd9KX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1NvcnRhYmxlU3R5bGVkSXRlbT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFNvcnRhYmxlQ29udGFpbmVyID0gc29ydGFibGVDb250YWluZXIoKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIHJldHVybiA8ZGl2PntjaGlsZHJlbn08L2Rpdj47XHJcbiAgfSk7XHJcblxyXG4gIGNsYXNzIExheWVyTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllckJsZW5kaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGxheWVyQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXHJcbiAgICAgIC8vIGZ1bmN0aW9uc1xyXG4gICAgICBhZGRMYXllcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgbGF5ZXJDb2xvclVJQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllckNvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgbGF5ZXJUZXh0TGFiZWxDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBsYXllclZpc0NvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgb3Blbk1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICByZW1vdmVMYXllcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgcmVtb3ZlRGF0YXNldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgc2hvd0RhdGFzZXRUYWJsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgdXBkYXRlTGF5ZXJCbGVuZGluZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgdXBkYXRlTGF5ZXJPcmRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBpc1NvcnRpbmc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGxheWVyQ2xhc3NTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVyQ2xhc3NlcztcclxuICAgIGxheWVyVHlwZU9wdGlvbnNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMubGF5ZXJDbGFzc1NlbGVjdG9yLCBsYXllckNsYXNzZXMgPT5cclxuICAgICAgT2JqZWN0LmtleXMobGF5ZXJDbGFzc2VzKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBsYXllckNsYXNzZXNba2V5XSgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDoga2V5LFxyXG4gICAgICAgICAgbGFiZWw6IGxheWVyLm5hbWUsXHJcbiAgICAgICAgICBpY29uOiBsYXllci5sYXllckljb25cclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBfYWRkRW1wdHlOZXdMYXllciA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5hZGRMYXllcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfaGFuZGxlU29ydCA9ICh7b2xkSW5kZXgsIG5ld0luZGV4fSkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZUxheWVyT3JkZXIoYXJyYXlNb3ZlKHRoaXMucHJvcHMubGF5ZXJPcmRlciwgb2xkSW5kZXgsIG5ld0luZGV4KSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzU29ydGluZzogZmFsc2V9KTtcclxuICAgIH07XHJcblxyXG4gICAgX29uU29ydFN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtpc1NvcnRpbmc6IHRydWV9KTtcclxuICAgIH07XHJcblxyXG4gICAgX3VwZGF0ZUJlZm9yZVNvcnRTdGFydCA9ICh7aW5kZXh9KSA9PiB7XHJcbiAgICAgIC8vIGlmIGxheWVyIGNvbmZpZyBpcyBhY3RpdmUsIGNsb3NlIGl0XHJcbiAgICAgIGNvbnN0IHtsYXllck9yZGVyLCBsYXllcnMsIGxheWVyQ29uZmlnQ2hhbmdlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IGxheWVySWR4ID0gbGF5ZXJPcmRlcltpbmRleF07XHJcbiAgICAgIGlmIChsYXllcnNbbGF5ZXJJZHhdLmNvbmZpZy5pc0NvbmZpZ0FjdGl2ZSkge1xyXG4gICAgICAgIGxheWVyQ29uZmlnQ2hhbmdlKGxheWVyc1tsYXllcklkeF0sIHtpc0NvbmZpZ0FjdGl2ZTogZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtsYXllcnMsIGRhdGFzZXRzLCBsYXllck9yZGVyLCBvcGVuTW9kYWwsIGludGx9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgZGVmYXVsdERhdGFzZXQgPSBPYmplY3Qua2V5cyhkYXRhc2V0cylbMF07XHJcbiAgICAgIGNvbnN0IGxheWVyVHlwZU9wdGlvbnMgPSB0aGlzLmxheWVyVHlwZU9wdGlvbnNTZWxlY3Rvcih0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgIGNvbnN0IGxheWVyQWN0aW9ucyA9IHtcclxuICAgICAgICBsYXllckNvbG9yVUlDaGFuZ2U6IHRoaXMucHJvcHMubGF5ZXJDb2xvclVJQ2hhbmdlLFxyXG4gICAgICAgIGxheWVyQ29uZmlnQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyQ29uZmlnQ2hhbmdlLFxyXG4gICAgICAgIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTogdGhpcy5wcm9wcy5sYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UsXHJcbiAgICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVHlwZUNoYW5nZSxcclxuICAgICAgICBsYXllclZpc0NvbmZpZ0NoYW5nZTogdGhpcy5wcm9wcy5sYXllclZpc0NvbmZpZ0NoYW5nZSxcclxuICAgICAgICBsYXllclRleHRMYWJlbENoYW5nZTogdGhpcy5wcm9wcy5sYXllclRleHRMYWJlbENoYW5nZSxcclxuICAgICAgICByZW1vdmVMYXllcjogdGhpcy5wcm9wcy5yZW1vdmVMYXllclxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcGFuZWxQcm9wcyA9IHtcclxuICAgICAgICBkYXRhc2V0cyxcclxuICAgICAgICBvcGVuTW9kYWwsXHJcbiAgICAgICAgbGF5ZXJUeXBlT3B0aW9uc1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyLW1hbmFnZXJcIj5cclxuICAgICAgICAgIDxTb3VyY2VEYXRhQ2F0YWxvZ1xyXG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XHJcbiAgICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3RoaXMucHJvcHMuc2hvd0RhdGFzZXRUYWJsZX1cclxuICAgICAgICAgICAgcmVtb3ZlRGF0YXNldD17dGhpcy5wcm9wcy5yZW1vdmVEYXRhc2V0fVxyXG4gICAgICAgICAgICBzaG93RGVsZXRlRGF0YXNldFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBZGREYXRhQnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2hvd0FkZERhdGFNb2RhbH0gaXNJbmFjdGl2ZT17IWRlZmF1bHREYXRhc2V0fSAvPlxyXG4gICAgICAgICAgPFNpZGVQYW5lbERpdmlkZXIgLz5cclxuICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8U29ydGFibGVDb250YWluZXJcclxuICAgICAgICAgICAgICBvblNvcnRFbmQ9e3RoaXMuX2hhbmRsZVNvcnR9XHJcbiAgICAgICAgICAgICAgb25Tb3J0U3RhcnQ9e3RoaXMuX29uU29ydFN0YXJ0fVxyXG4gICAgICAgICAgICAgIHVwZGF0ZUJlZm9yZVNvcnRTdGFydD17dGhpcy5fdXBkYXRlQmVmb3JlU29ydFN0YXJ0fVxyXG4gICAgICAgICAgICAgIGxvY2tBeGlzPVwieVwiXHJcbiAgICAgICAgICAgICAgaGVscGVyQ2xhc3M9XCJzb3J0aW5nLWxheWVyc1wiXHJcbiAgICAgICAgICAgICAgdXNlRHJhZ0hhbmRsZVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xheWVyT3JkZXIubWFwKFxyXG4gICAgICAgICAgICAgICAgKGxheWVySWR4LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgIWxheWVyc1tsYXllcklkeF0uY29uZmlnLmhpZGRlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNvcnRhYmxlSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtgbGF5ZXItJHtsYXllcklkeH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNTb3J0aW5nPXt0aGlzLnN0YXRlLmlzU29ydGluZ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGF5ZXJQYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucGFuZWxQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmxheWVyQWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydERhdGE9e2xheWVySWR4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xheWVyc1tsYXllcklkeF0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeD17bGF5ZXJJZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtsYXllcnNbbGF5ZXJJZHhdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NvcnRhYmxlSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvU29ydGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgICAgICAge2RlZmF1bHREYXRhc2V0ID8gKFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYWRkLWxheWVyLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuX2FkZEVtcHR5TmV3TGF5ZXJ9IHdpZHRoPVwiMTA1cHhcIj5cclxuICAgICAgICAgICAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2xheWVyTWFuYWdlci5hZGRMYXllcid9IC8+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgPExheWVyQmxlbmRpbmdTZWxlY3RvclxyXG4gICAgICAgICAgICBsYXllckJsZW5kaW5nPXt0aGlzLnByb3BzLmxheWVyQmxlbmRpbmd9XHJcbiAgICAgICAgICAgIHVwZGF0ZUxheWVyQmxlbmRpbmc9e3RoaXMucHJvcHMudXBkYXRlTGF5ZXJCbGVuZGluZ31cclxuICAgICAgICAgICAgaW50bD17aW50bH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBpbmplY3RJbnRsKExheWVyTWFuYWdlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheWVyTWFuYWdlckZhY3Rvcnk7XHJcbiJdfQ==