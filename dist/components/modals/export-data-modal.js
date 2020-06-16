"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultSettings = require("../../constants/default-settings");

var _icons = require("../common/icons");

var _styledComponents = require("../common/styled-components");

var _reactIntl = require("react-intl");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var propTypes = {
  datasets: _propTypes["default"].object.isRequired,
  selectedDataset: _propTypes["default"].string,
  dataType: _propTypes["default"].string.isRequired,
  filtered: _propTypes["default"].bool.isRequired,
  // callbacks
  applyCPUFilter: _propTypes["default"].func.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onChangeExportSelectedDataset: _propTypes["default"].func.isRequired,
  onChangeExportDataType: _propTypes["default"].func.isRequired,
  onChangeExportFiltered: _propTypes["default"].func.isRequired
};

var getDataRowCount = function getDataRowCount(datasets, selectedDataset, filtered, intl) {
  var selectedData = datasets[selectedDataset];

  if (!selectedData) {
    return intl.formatMessage({
      id: 'modal.exportData.fileCount'
    }, {
      fileCount: Object.keys(datasets).length
    });
  }

  var allData = selectedData.allData,
      filteredIdxCPU = selectedData.filteredIdxCPU;

  if (filtered && !filteredIdxCPU) {
    return '-';
  }

  var rowCount = filtered ? filteredIdxCPU.length : allData.length;
  return intl.formatMessage({
    id: 'modal.exportData.rowCount'
  }, {
    rowCount: rowCount.toLocaleString()
  });
};

var ExportDataModalFactory = function ExportDataModalFactory() {
  var ExportDataModal = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ExportDataModal, _Component);

    var _super = _createSuper(ExportDataModal);

    function ExportDataModal() {
      var _this;

      (0, _classCallCheck2["default"])(this, ExportDataModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSelectDataset", function (_ref) {
        var value = _ref.target.value;

        _this.props.applyCPUFilter(value);

        _this.props.onChangeExportSelectedDataset(value);
      });
      return _this;
    }

    (0, _createClass2["default"])(ExportDataModal, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var toCPUFilter = this.props.selectedDataset || Object.keys(this.props.datasets);
        this.props.applyCPUFilter(toCPUFilter);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            datasets = _this$props.datasets,
            selectedDataset = _this$props.selectedDataset,
            dataType = _this$props.dataType,
            filtered = _this$props.filtered,
            onChangeExportDataType = _this$props.onChangeExportDataType,
            onChangeExportFiltered = _this$props.onChangeExportFiltered,
            intl = _this$props.intl;
        return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledModalContent, {
          className: "export-data-modal"
        }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportData.datasetTitle'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportData.datasetSubtitle'
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, /*#__PURE__*/_react["default"].createElement("select", {
          value: selectedDataset,
          onChange: this._onSelectDataset
        }, [intl.formatMessage({
          id: 'modal.exportData.allDatasets'
        })].concat(Object.keys(datasets)).map(function (d) {
          return /*#__PURE__*/_react["default"].createElement("option", {
            key: d,
            value: d
          }, datasets[d] && datasets[d].label || d);
        })))), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportData.dataTypeTitle'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportData.dataTypeSubtitle'
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, _defaultSettings.EXPORT_DATA_TYPE_OPTIONS.map(function (op) {
          return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledType, {
            key: op.id,
            selected: dataType === op.id,
            available: op.available,
            onClick: function onClick() {
              return op.available && onChangeExportDataType(op.id);
            }
          }, /*#__PURE__*/_react["default"].createElement(_icons.FileType, {
            ext: op.label,
            height: "80px",
            fontSize: "11px"
          }));
        }))), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportData.dataTypeTitle'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportData.filterDataSubtitle'
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilteredOption, {
          className: "unfiltered-option",
          selected: !filtered,
          onClick: function onClick() {
            return onChangeExportFiltered(false);
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "filter-option-title"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportData.unfilteredData'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "filter-option-subtitle"
        }, getDataRowCount(datasets, selectedDataset, false, intl))), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilteredOption, {
          className: "filtered-option",
          selected: filtered,
          onClick: function onClick() {
            return onChangeExportFiltered(true);
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "filter-option-title"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: 'modal.exportData.filteredData'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "filter-option-subtitle"
        }, getDataRowCount(datasets, selectedDataset, true, intl)))))));
      }
    }]);
    return ExportDataModal;
  }(_react.Component);

  ExportDataModal.propTypes = propTypes;
  return (0, _reactIntl.injectIntl)(ExportDataModal);
};

var _default = ExportDataModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtZGF0YS1tb2RhbC5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJkYXRhc2V0cyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzZWxlY3RlZERhdGFzZXQiLCJzdHJpbmciLCJkYXRhVHlwZSIsImZpbHRlcmVkIiwiYm9vbCIsImFwcGx5Q1BVRmlsdGVyIiwiZnVuYyIsIm9uQ2xvc2UiLCJvbkNoYW5nZUV4cG9ydFNlbGVjdGVkRGF0YXNldCIsIm9uQ2hhbmdlRXhwb3J0RGF0YVR5cGUiLCJvbkNoYW5nZUV4cG9ydEZpbHRlcmVkIiwiZ2V0RGF0YVJvd0NvdW50IiwiaW50bCIsInNlbGVjdGVkRGF0YSIsImZvcm1hdE1lc3NhZ2UiLCJpZCIsImZpbGVDb3VudCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJhbGxEYXRhIiwiZmlsdGVyZWRJZHhDUFUiLCJyb3dDb3VudCIsInRvTG9jYWxlU3RyaW5nIiwiRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydERhdGFNb2RhbCIsInZhbHVlIiwidGFyZ2V0IiwicHJvcHMiLCJ0b0NQVUZpbHRlciIsIl9vblNlbGVjdERhdGFzZXQiLCJjb25jYXQiLCJtYXAiLCJkIiwibGFiZWwiLCJFWFBPUlRfREFUQV9UWVBFX09QVElPTlMiLCJvcCIsImF2YWlsYWJsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFNQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxRQUFRLEVBQUVDLHNCQUFVQyxNQUFWLENBQWlCQyxVQURYO0FBRWhCQyxFQUFBQSxlQUFlLEVBQUVILHNCQUFVSSxNQUZYO0FBR2hCQyxFQUFBQSxRQUFRLEVBQUVMLHNCQUFVSSxNQUFWLENBQWlCRixVQUhYO0FBSWhCSSxFQUFBQSxR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QVdJLGVBQVgsRUFBNEIsS0FBNUIsRUFBbUNZLElBQW5DLENBRGxCLENBUkYsQ0FERixlQWFFLGdDQUFDLHNDQUFEO0FBQ0UsVUFBQSxTQUFTLEVBQUMsaUJBRFo7QUFFRSxVQUFBLFFBQVEsRUFBRVQsUUFGWjtBQUdFLFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU1PLHNCQUFzQixDQUFDLElBQUQsQ0FBNUI7QUFBQTtBQUhYLHdCQUtFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZix3QkFDRSxnQ0FBQywyQkFBRDtBQUFrQixVQUFBLEVBQUUsRUFBRTtBQUF0QixVQURGLENBTEYsZUFRRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDR0MsZUFBZSxDQUFDZixRQUFELEVBQVdJLGVBQVgsRUFBNEIsSUFBNUIsRUFBa0NZLElBQWxDLENBRGxCLENBUkYsQ0FiRixDQVRGLENBNUNGLENBREYsQ0FERjtBQXFGRDtBQTVHZ0M7QUFBQTtBQUFBLElBQ0wwQixnQkFESzs7QUE4R25DYixFQUFBQSxlQUFlLENBQUM5QixTQUFoQixHQUE0QkEsU0FBNUI7QUFDQSxTQUFPLDJCQUFXOEIsZUFBWCxDQUFQO0FBQ0QsQ0FoSEQ7O2VBa0hlRCxzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHtFWFBPUlRfREFUQV9UWVBFX09QVElPTlN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHtGaWxlVHlwZX0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQge1xyXG4gIFN0eWxlZEV4cG9ydFNlY3Rpb24sXHJcbiAgU3R5bGVkRmlsdGVyZWRPcHRpb24sXHJcbiAgU3R5bGVkTW9kYWxDb250ZW50LFxyXG4gIFN0eWxlZFR5cGVcclxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZSwgaW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBzZWxlY3RlZERhdGFzZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGF0YVR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBmaWx0ZXJlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAvLyBjYWxsYmFja3NcclxuICBhcHBseUNQVUZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uQ2hhbmdlRXhwb3J0U2VsZWN0ZWREYXRhc2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uQ2hhbmdlRXhwb3J0RGF0YVR5cGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgb25DaGFuZ2VFeHBvcnRGaWx0ZXJlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuY29uc3QgZ2V0RGF0YVJvd0NvdW50ID0gKGRhdGFzZXRzLCBzZWxlY3RlZERhdGFzZXQsIGZpbHRlcmVkLCBpbnRsKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWREYXRhID0gZGF0YXNldHNbc2VsZWN0ZWREYXRhc2V0XTtcclxuICBpZiAoIXNlbGVjdGVkRGF0YSkge1xyXG4gICAgcmV0dXJuIGludGwuZm9ybWF0TWVzc2FnZShcclxuICAgICAge2lkOiAnbW9kYWwuZXhwb3J0RGF0YS5maWxlQ291bnQnfSxcclxuICAgICAge2ZpbGVDb3VudDogT2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGNvbnN0IHthbGxEYXRhLCBmaWx0ZXJlZElkeENQVX0gPSBzZWxlY3RlZERhdGE7XHJcblxyXG4gIGlmIChmaWx0ZXJlZCAmJiAhZmlsdGVyZWRJZHhDUFUpIHtcclxuICAgIHJldHVybiAnLSc7XHJcbiAgfVxyXG5cclxuICBjb25zdCByb3dDb3VudCA9IGZpbHRlcmVkID8gZmlsdGVyZWRJZHhDUFUubGVuZ3RoIDogYWxsRGF0YS5sZW5ndGg7XHJcblxyXG4gIHJldHVybiBpbnRsLmZvcm1hdE1lc3NhZ2UoXHJcbiAgICB7aWQ6ICdtb2RhbC5leHBvcnREYXRhLnJvd0NvdW50J30sXHJcbiAgICB7cm93Q291bnQ6IHJvd0NvdW50LnRvTG9jYWxlU3RyaW5nKCl9XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEV4cG9ydERhdGFNb2RhbEZhY3RvcnkgPSAoKSA9PiB7XHJcbiAgY2xhc3MgRXhwb3J0RGF0YU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBjb25zdCB0b0NQVUZpbHRlciA9IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRhc2V0IHx8IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YXNldHMpO1xyXG4gICAgICB0aGlzLnByb3BzLmFwcGx5Q1BVRmlsdGVyKHRvQ1BVRmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25TZWxlY3REYXRhc2V0ID0gKHt0YXJnZXQ6IHt2YWx1ZX19KSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuYXBwbHlDUFVGaWx0ZXIodmFsdWUpO1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlRXhwb3J0U2VsZWN0ZWREYXRhc2V0KHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YXNldHMsXHJcbiAgICAgICAgc2VsZWN0ZWREYXRhc2V0LFxyXG4gICAgICAgIGRhdGFUeXBlLFxyXG4gICAgICAgIGZpbHRlcmVkLFxyXG4gICAgICAgIG9uQ2hhbmdlRXhwb3J0RGF0YVR5cGUsXHJcbiAgICAgICAgb25DaGFuZ2VFeHBvcnRGaWx0ZXJlZCxcclxuICAgICAgICBpbnRsXHJcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3R5bGVkTW9kYWxDb250ZW50IGNsYXNzTmFtZT1cImV4cG9ydC1kYXRhLW1vZGFsXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0RGF0YS5kYXRhc2V0VGl0bGUnfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0RGF0YS5kYXRhc2V0U3VidGl0bGUnfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkRGF0YXNldH0gb25DaGFuZ2U9e3RoaXMuX29uU2VsZWN0RGF0YXNldH0+XHJcbiAgICAgICAgICAgICAgICAgIHtbaW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmV4cG9ydERhdGEuYWxsRGF0YXNldHMnfSldXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChPYmplY3Qua2V5cyhkYXRhc2V0cykpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChkID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkfSB2YWx1ZT17ZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoZGF0YXNldHNbZF0gJiYgZGF0YXNldHNbZF0ubGFiZWwpIHx8IGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N0eWxlZEV4cG9ydFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnREYXRhLmRhdGFUeXBlVGl0bGUnfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0RGF0YS5kYXRhVHlwZVN1YnRpdGxlJ30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICB7RVhQT1JUX0RBVEFfVFlQRV9PUFRJT05TLm1hcChvcCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUeXBlXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtvcC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZGF0YVR5cGUgPT09IG9wLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZT17b3AuYXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wLmF2YWlsYWJsZSAmJiBvbkNoYW5nZUV4cG9ydERhdGFUeXBlKG9wLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWxlVHlwZSBleHQ9e29wLmxhYmVsfSBoZWlnaHQ9XCI4MHB4XCIgZm9udFNpemU9XCIxMXB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUeXBlPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cclxuICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydERhdGEuZGF0YVR5cGVUaXRsZSd9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnREYXRhLmZpbHRlckRhdGFTdWJ0aXRsZSd9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZEZpbHRlcmVkT3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZmlsdGVyZWQtb3B0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyFmaWx0ZXJlZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2VFeHBvcnRGaWx0ZXJlZChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLW9wdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0RGF0YS51bmZpbHRlcmVkRGF0YSd9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1vcHRpb24tc3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0RGF0YVJvd0NvdW50KGRhdGFzZXRzLCBzZWxlY3RlZERhdGFzZXQsIGZhbHNlLCBpbnRsKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZEZpbHRlcmVkT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZEZpbHRlcmVkT3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlcmVkLW9wdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtmaWx0ZXJlZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2VFeHBvcnRGaWx0ZXJlZCh0cnVlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItb3B0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnREYXRhLmZpbHRlcmVkRGF0YSd9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1vcHRpb24tc3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0RGF0YVJvd0NvdW50KGRhdGFzZXRzLCBzZWxlY3RlZERhdGFzZXQsIHRydWUsIGludGwpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRmlsdGVyZWRPcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3R5bGVkTW9kYWxDb250ZW50PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBFeHBvcnREYXRhTW9kYWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG4gIHJldHVybiBpbmplY3RJbnRsKEV4cG9ydERhdGFNb2RhbCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBvcnREYXRhTW9kYWxGYWN0b3J5O1xyXG4iXX0=