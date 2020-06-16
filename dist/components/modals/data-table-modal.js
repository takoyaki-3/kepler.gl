"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatasetTabs = exports.DatasetModalTab = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _datasetLabel = _interopRequireDefault(require("../common/dataset-label"));

var _dataTable = _interopRequireDefault(require("../common/data-table"));

var _reselect = require("reselect");

var _cellSize = require("../common/data-table/cell-size");

var _canvas = _interopRequireDefault(require("../common/data-table/canvas"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  min-height: 70vh;\n  max-height: 70vh;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-bottom: 3px solid ", ";\n  cursor: pointer;\n  display: flex;\n  height: 35px;\n  margin: 0 3px;\n  padding: 0 5px;\n\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  padding: ", " ", " 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  min-height: 70vh;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var dgSettings = {
  sidePadding: '38px',
  verticalPadding: '16px',
  height: '36px'
};

var StyledModal = _styledComponents["default"].div(_templateObject());

var DatasetCatalog = _styledComponents["default"].div(_templateObject2(), dgSettings.verticalPadding, dgSettings.sidePadding);

var DatasetModalTab = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.active ? 'black' : 'transparent';
});

exports.DatasetModalTab = DatasetModalTab;

var DatasetTabs = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var activeDataset = _ref.activeDataset,
      datasets = _ref.datasets,
      showDatasetTable = _ref.showDatasetTable;
  return /*#__PURE__*/_react["default"].createElement(DatasetCatalog, {
    className: "dataset-modal-catalog"
  }, Object.values(datasets).map(function (dataset) {
    return /*#__PURE__*/_react["default"].createElement(DatasetModalTab, {
      className: "dataset-modal-tab",
      active: dataset === activeDataset,
      key: dataset.id,
      onClick: function onClick() {
        return showDatasetTable(dataset.id);
      }
    }, /*#__PURE__*/_react["default"].createElement(_datasetLabel["default"], {
      dataset: dataset
    }));
  }));
});

exports.DatasetTabs = DatasetTabs;
DatasetTabs.displayName = 'DatasetTabs';
DataTableModalFactory.deps = [_dataTable["default"]];

var TableContainer = _styledComponents["default"].div(_templateObject4());

function DataTableModalFactory(DataTable) {
  var DataTableModal = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2["default"])(DataTableModal, _React$Component);

    var _super = _createSuper(DataTableModal);

    function DataTableModal() {
      var _this;

      (0, _classCallCheck2["default"])(this, DataTableModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "datasetCellSizeCache", {});
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dataId", function (props) {
        return props.dataId;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "datasets", function (props) {
        return props.datasets;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fields", function (props) {
        return (props.datasets[props.dataId] || {}).fields;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columns", (0, _reselect.createSelector)(_this.fields, function (fields) {
        return fields.map(function (f) {
          return f.name;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "colMeta", (0, _reselect.createSelector)(_this.fields, function (fields) {
        return fields.reduce(function (acc, _ref2) {
          var name = _ref2.name,
              type = _ref2.type;
          return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, name, type));
        }, {});
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cellSizeCache", (0, _reselect.createSelector)(_this.dataId, _this.datasets, function (dataId, datasets) {
        if (!_this.props.datasets[dataId]) {
          return {};
        }

        var _this$props$datasets$ = _this.props.datasets[dataId],
            fields = _this$props$datasets$.fields,
            allData = _this$props$datasets$.allData;
        var showCalculate = null;

        if (!_this.datasetCellSizeCache[dataId]) {
          showCalculate = true;
        } else if (_this.datasetCellSizeCache[dataId].fields !== fields || _this.datasetCellSizeCache[dataId].allData !== allData) {
          showCalculate = true;
        }

        if (!showCalculate) {
          return _this.datasetCellSizeCache[dataId].cellSizeCache;
        }

        var cellSizeCache = fields.reduce(function (acc, field, colIdx) {
          return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, field.name, (0, _cellSize.renderedSize)({
            text: {
              rows: allData,
              column: field.name
            },
            colIdx: colIdx,
            type: field.type,
            fontSize: _this.props.theme.cellFontSize,
            font: _this.props.theme.fontFamily
          })));
        }, {}); // save it to cache

        _this.datasetCellSizeCache[dataId] = {
          cellSizeCache: cellSizeCache,
          fields: fields,
          allData: allData
        };
        return cellSizeCache;
      }));
      return _this;
    }

    (0, _createClass2["default"])(DataTableModal, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            datasets = _this$props.datasets,
            dataId = _this$props.dataId,
            showDatasetTable = _this$props.showDatasetTable;

        if (!datasets || !dataId) {
          return null;
        }

        var activeDataset = datasets[dataId];
        var columns = this.columns(this.props);
        var colMeta = this.colMeta(this.props);
        var cellSizeCache = this.cellSizeCache(this.props);
        return /*#__PURE__*/_react["default"].createElement(StyledModal, {
          className: "dataset-modal",
          id: "dataset-modal"
        }, /*#__PURE__*/_react["default"].createElement(_canvas["default"], null), /*#__PURE__*/_react["default"].createElement(TableContainer, null, /*#__PURE__*/_react["default"].createElement(DatasetTabs, {
          activeDataset: activeDataset,
          datasets: datasets,
          showDatasetTable: showDatasetTable
        }), datasets[dataId] ? /*#__PURE__*/_react["default"].createElement(DataTable, {
          key: dataId,
          dataId: dataId,
          columns: columns,
          colMeta: colMeta,
          cellSizeCache: cellSizeCache,
          rows: activeDataset.allData,
          pinnedColumns: activeDataset.pinnedColumns,
          sortOrder: activeDataset.sortOrder,
          sortColumn: activeDataset.sortColumn,
          copyTableColumn: this.props.copyTableColumn,
          pinTableColumn: this.props.pinTableColumn,
          sortTableColumn: this.props.sortTableColumn
        }) : null));
      }
    }]);
    return DataTableModal;
  }(_react["default"].Component);

  return (0, _styledComponents.withTheme)(DataTableModal);
}

var _default = DataTableModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9kYXRhLXRhYmxlLW1vZGFsLmpzIl0sIm5hbWVzIjpbImRnU2V0dGluZ3MiLCJzaWRlUGFkZGluZyIsInZlcnRpY2FsUGFkZGluZyIsImhlaWdodCIsIlN0eWxlZE1vZGFsIiwic3R5bGVkIiwiZGl2IiwiRGF0YXNldENhdGFsb2ciLCJEYXRhc2V0TW9kYWxUYWIiLCJwcm9wcyIsImFjdGl2ZSIsIkRhdGFzZXRUYWJzIiwiUmVhY3QiLCJtZW1vIiwiYWN0aXZlRGF0YXNldCIsImRhdGFzZXRzIiwic2hvd0RhdGFzZXRUYWJsZSIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImRhdGFzZXQiLCJpZCIsImRpc3BsYXlOYW1lIiwiRGF0YVRhYmxlTW9kYWxGYWN0b3J5IiwiZGVwcyIsIkRhdGFUYWJsZUZhY3RvcnkiLCJUYWJsZUNvbnRhaW5lciIsIkRhdGFUYWJsZSIsIkRhdGFUYWJsZU1vZGFsIiwiZGF0YUlkIiwiZmllbGRzIiwiZiIsIm5hbWUiLCJyZWR1Y2UiLCJhY2MiLCJ0eXBlIiwiYWxsRGF0YSIsInNob3dDYWxjdWxhdGUiLCJkYXRhc2V0Q2VsbFNpemVDYWNoZSIsImNlbGxTaXplQ2FjaGUiLCJmaWVsZCIsImNvbElkeCIsInRleHQiLCJyb3dzIiwiY29sdW1uIiwiZm9udFNpemUiLCJ0aGVtZSIsImNlbGxGb250U2l6ZSIsImZvbnQiLCJmb250RmFtaWx5IiwiY29sdW1ucyIsImNvbE1ldGEiLCJwaW5uZWRDb2x1bW5zIiwic29ydE9yZGVyIiwic29ydENvbHVtbiIsImNvcHlUYWJsZUNvbHVtbiIsInBpblRhYmxlQ29sdW1uIiwic29ydFRhYmxlQ29sdW1uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUQscUJBQ0UsZ0NBQUMsV0FBRDtBQUNFLFVBQUEsYUFBYSxFQUFFSyxhQURqQjtBQUVFLFVBQUEsUUFBUSxFQUFFQyxRQUZaO0FBR0UsVUFBQSxnQkFBZ0IsRUFBRUM7QUFIcEIsVUFERixFQU1HRCxRQUFRLENBQUNjLE1BQUQsQ0FBUixnQkFDQyxnQ0FBQyxTQUFEO0FBQ0UsVUFBQSxHQUFHLEVBQUVBLE1BRFA7QUFFRSxVQUFBLE1BQU0sRUFBRUEsTUFGVjtBQUdFLFVBQUEsT0FBTyxFQUFFcUIsT0FIWDtBQUlFLFVBQUEsT0FBTyxFQUFFQyxPQUpYO0FBS0UsVUFBQSxhQUFhLEVBQUVaLGFBTGpCO0FBTUUsVUFBQSxJQUFJLEVBQUV6QixhQUFhLENBQUNzQixPQU50QjtBQU9FLFVBQUEsYUFBYSxFQUFFdEIsYUFBYSxDQUFDc0MsYUFQL0I7QUFRRSxVQUFBLFNBQVMsRUFBRXRDLGFBQWEsQ0FBQ3VDLFNBUjNCO0FBU0UsVUFBQSxVQUFVLEVBQUV2QyxhQUFhLENBQUN3QyxVQVQ1QjtBQVVFLFVBQUEsZUFBZSxFQUFFLEtBQUs3QyxLQUFMLENBQVc4QyxlQVY5QjtBQVdFLFVBQUEsY0FBYyxFQUFFLEtBQUs5QyxLQUFMLENBQVcrQyxjQVg3QjtBQVlFLFVBQUEsZUFBZSxFQUFFLEtBQUsvQyxLQUFMLENBQVdnRDtBQVo5QixVQURELEdBZUcsSUFyQk4sQ0FGRixDQURGO0FBNEJEO0FBcEdxQztBQUFBO0FBQUEsSUFDWDdDLGtCQUFNOEMsU0FESzs7QUF1R3hDLFNBQU8saUNBQVU5QixjQUFWLENBQVA7QUFDRDs7ZUFFY0wscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBEYXRhc2V0TGFiZWwgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZGF0YXNldC1sYWJlbCc7XHJcbmltcG9ydCBEYXRhVGFibGVGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2RhdGEtdGFibGUnO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCB7cmVuZGVyZWRTaXplfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9kYXRhLXRhYmxlL2NlbGwtc2l6ZSc7XHJcbmltcG9ydCBDYW52YXNIYWNrIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2RhdGEtdGFibGUvY2FudmFzJztcclxuXHJcbmNvbnN0IGRnU2V0dGluZ3MgPSB7XHJcbiAgc2lkZVBhZGRpbmc6ICczOHB4JyxcclxuICB2ZXJ0aWNhbFBhZGRpbmc6ICcxNnB4JyxcclxuICBoZWlnaHQ6ICczNnB4J1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkTW9kYWwgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IERhdGFzZXRDYXRhbG9nID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6ICR7ZGdTZXR0aW5ncy52ZXJ0aWNhbFBhZGRpbmd9ICR7ZGdTZXR0aW5ncy5zaWRlUGFkZGluZ30gMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhc2V0TW9kYWxUYWIgPSBzdHlsZWQuZGl2YFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR7cHJvcHMgPT4gKHByb3BzLmFjdGl2ZSA/ICdibGFjaycgOiAndHJhbnNwYXJlbnQnKX07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIG1hcmdpbjogMCAzcHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcblxyXG4gIDpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YXNldFRhYnMgPSBSZWFjdC5tZW1vKCh7YWN0aXZlRGF0YXNldCwgZGF0YXNldHMsIHNob3dEYXRhc2V0VGFibGV9KSA9PiAoXHJcbiAgPERhdGFzZXRDYXRhbG9nIGNsYXNzTmFtZT1cImRhdGFzZXQtbW9kYWwtY2F0YWxvZ1wiPlxyXG4gICAge09iamVjdC52YWx1ZXMoZGF0YXNldHMpLm1hcChkYXRhc2V0ID0+IChcclxuICAgICAgPERhdGFzZXRNb2RhbFRhYlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRhdGFzZXQtbW9kYWwtdGFiXCJcclxuICAgICAgICBhY3RpdmU9e2RhdGFzZXQgPT09IGFjdGl2ZURhdGFzZXR9XHJcbiAgICAgICAga2V5PXtkYXRhc2V0LmlkfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dEYXRhc2V0VGFibGUoZGF0YXNldC5pZCl9XHJcbiAgICAgID5cclxuICAgICAgICA8RGF0YXNldExhYmVsIGRhdGFzZXQ9e2RhdGFzZXR9IC8+XHJcbiAgICAgIDwvRGF0YXNldE1vZGFsVGFiPlxyXG4gICAgKSl9XHJcbiAgPC9EYXRhc2V0Q2F0YWxvZz5cclxuKSk7XHJcblxyXG5EYXRhc2V0VGFicy5kaXNwbGF5TmFtZSA9ICdEYXRhc2V0VGFicyc7XHJcblxyXG5EYXRhVGFibGVNb2RhbEZhY3RvcnkuZGVwcyA9IFtEYXRhVGFibGVGYWN0b3J5XTtcclxuXHJcbmNvbnN0IFRhYmxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbiAgbWF4LWhlaWdodDogNzB2aDtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIERhdGFUYWJsZU1vZGFsRmFjdG9yeShEYXRhVGFibGUpIHtcclxuICBjbGFzcyBEYXRhVGFibGVNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBkYXRhc2V0Q2VsbFNpemVDYWNoZSA9IHt9O1xyXG4gICAgZGF0YUlkID0gcHJvcHMgPT4gcHJvcHMuZGF0YUlkO1xyXG4gICAgZGF0YXNldHMgPSBwcm9wcyA9PiBwcm9wcy5kYXRhc2V0cztcclxuICAgIGZpZWxkcyA9IHByb3BzID0+IChwcm9wcy5kYXRhc2V0c1twcm9wcy5kYXRhSWRdIHx8IHt9KS5maWVsZHM7XHJcbiAgICBjb2x1bW5zID0gY3JlYXRlU2VsZWN0b3IodGhpcy5maWVsZHMsIGZpZWxkcyA9PiBmaWVsZHMubWFwKGYgPT4gZi5uYW1lKSk7XHJcbiAgICBjb2xNZXRhID0gY3JlYXRlU2VsZWN0b3IodGhpcy5maWVsZHMsIGZpZWxkcyA9PlxyXG4gICAgICBmaWVsZHMucmVkdWNlKFxyXG4gICAgICAgIChhY2MsIHtuYW1lLCB0eXBlfSkgPT4gKHtcclxuICAgICAgICAgIC4uLmFjYyxcclxuICAgICAgICAgIFtuYW1lXTogdHlwZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHt9XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICBjZWxsU2l6ZUNhY2hlID0gY3JlYXRlU2VsZWN0b3IodGhpcy5kYXRhSWQsIHRoaXMuZGF0YXNldHMsIChkYXRhSWQsIGRhdGFzZXRzKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5wcm9wcy5kYXRhc2V0c1tkYXRhSWRdKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHtmaWVsZHMsIGFsbERhdGF9ID0gdGhpcy5wcm9wcy5kYXRhc2V0c1tkYXRhSWRdO1xyXG5cclxuICAgICAgbGV0IHNob3dDYWxjdWxhdGUgPSBudWxsO1xyXG4gICAgICBpZiAoIXRoaXMuZGF0YXNldENlbGxTaXplQ2FjaGVbZGF0YUlkXSkge1xyXG4gICAgICAgIHNob3dDYWxjdWxhdGUgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHRoaXMuZGF0YXNldENlbGxTaXplQ2FjaGVbZGF0YUlkXS5maWVsZHMgIT09IGZpZWxkcyB8fFxyXG4gICAgICAgIHRoaXMuZGF0YXNldENlbGxTaXplQ2FjaGVbZGF0YUlkXS5hbGxEYXRhICE9PSBhbGxEYXRhXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNob3dDYWxjdWxhdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXNob3dDYWxjdWxhdGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhc2V0Q2VsbFNpemVDYWNoZVtkYXRhSWRdLmNlbGxTaXplQ2FjaGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNlbGxTaXplQ2FjaGUgPSBmaWVsZHMucmVkdWNlKFxyXG4gICAgICAgIChhY2MsIGZpZWxkLCBjb2xJZHgpID0+ICh7XHJcbiAgICAgICAgICAuLi5hY2MsXHJcbiAgICAgICAgICBbZmllbGQubmFtZV06IHJlbmRlcmVkU2l6ZSh7XHJcbiAgICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgICByb3dzOiBhbGxEYXRhLFxyXG4gICAgICAgICAgICAgIGNvbHVtbjogZmllbGQubmFtZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xJZHgsXHJcbiAgICAgICAgICAgIHR5cGU6IGZpZWxkLnR5cGUsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLnByb3BzLnRoZW1lLmNlbGxGb250U2l6ZSxcclxuICAgICAgICAgICAgZm9udDogdGhpcy5wcm9wcy50aGVtZS5mb250RmFtaWx5XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHt9XHJcbiAgICAgICk7XHJcbiAgICAgIC8vIHNhdmUgaXQgdG8gY2FjaGVcclxuICAgICAgdGhpcy5kYXRhc2V0Q2VsbFNpemVDYWNoZVtkYXRhSWRdID0ge1xyXG4gICAgICAgIGNlbGxTaXplQ2FjaGUsXHJcbiAgICAgICAgZmllbGRzLFxyXG4gICAgICAgIGFsbERhdGFcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIGNlbGxTaXplQ2FjaGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhc2V0cywgZGF0YUlkLCBzaG93RGF0YXNldFRhYmxlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGlmICghZGF0YXNldHMgfHwgIWRhdGFJZCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhY3RpdmVEYXRhc2V0ID0gZGF0YXNldHNbZGF0YUlkXTtcclxuICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMuY29sdW1ucyh0aGlzLnByb3BzKTtcclxuICAgICAgY29uc3QgY29sTWV0YSA9IHRoaXMuY29sTWV0YSh0aGlzLnByb3BzKTtcclxuICAgICAgY29uc3QgY2VsbFNpemVDYWNoZSA9IHRoaXMuY2VsbFNpemVDYWNoZSh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZE1vZGFsIGNsYXNzTmFtZT1cImRhdGFzZXQtbW9kYWxcIiBpZD1cImRhdGFzZXQtbW9kYWxcIj5cclxuICAgICAgICAgIDxDYW52YXNIYWNrIC8+XHJcbiAgICAgICAgICA8VGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxEYXRhc2V0VGFic1xyXG4gICAgICAgICAgICAgIGFjdGl2ZURhdGFzZXQ9e2FjdGl2ZURhdGFzZXR9XHJcbiAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxyXG4gICAgICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3Nob3dEYXRhc2V0VGFibGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtkYXRhc2V0c1tkYXRhSWRdID8gKFxyXG4gICAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgIGtleT17ZGF0YUlkfVxyXG4gICAgICAgICAgICAgICAgZGF0YUlkPXtkYXRhSWR9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgY29sTWV0YT17Y29sTWV0YX1cclxuICAgICAgICAgICAgICAgIGNlbGxTaXplQ2FjaGU9e2NlbGxTaXplQ2FjaGV9XHJcbiAgICAgICAgICAgICAgICByb3dzPXthY3RpdmVEYXRhc2V0LmFsbERhdGF9XHJcbiAgICAgICAgICAgICAgICBwaW5uZWRDb2x1bW5zPXthY3RpdmVEYXRhc2V0LnBpbm5lZENvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBzb3J0T3JkZXI9e2FjdGl2ZURhdGFzZXQuc29ydE9yZGVyfVxyXG4gICAgICAgICAgICAgICAgc29ydENvbHVtbj17YWN0aXZlRGF0YXNldC5zb3J0Q29sdW1ufVxyXG4gICAgICAgICAgICAgICAgY29weVRhYmxlQ29sdW1uPXt0aGlzLnByb3BzLmNvcHlUYWJsZUNvbHVtbn1cclxuICAgICAgICAgICAgICAgIHBpblRhYmxlQ29sdW1uPXt0aGlzLnByb3BzLnBpblRhYmxlQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgc29ydFRhYmxlQ29sdW1uPXt0aGlzLnByb3BzLnNvcnRUYWJsZUNvbHVtbn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgPC9TdHlsZWRNb2RhbD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB3aXRoVGhlbWUoRGF0YVRhYmxlTW9kYWwpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGVNb2RhbEZhY3Rvcnk7XHJcbiJdfQ==