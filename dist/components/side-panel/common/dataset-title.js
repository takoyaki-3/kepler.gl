"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DatasetTitleFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

var _styledComponents2 = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _datasetTag = _interopRequireDefault(require("./dataset-tag"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 12px;\n  height: 16px;\n  opacity: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  align-items: flex-start;\n\n  .source-data-arrow {\n    height: 16px;\n  }\n  :hover {\n    cursor: ", ";\n\n    .dataset-name {\n      color: ", ";\n    }\n\n    .dataset-action {\n      color: ", ";\n      opacity: 1;\n    }\n\n    .dataset-action:hover {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function nop() {}

var StyledDatasetTitle = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.clickable ? 'pointer' : 'auto';
}, function (props) {
  return props.clickable ? props.theme.textColorHl : props.theme.textColor;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var DataTagAction = _styledComponents["default"].div(_templateObject2());

var ShowDataTable = function ShowDataTable(_ref) {
  var id = _ref.id,
      _ref$showDatasetTable = _ref.showDatasetTable,
      showDatasetTable = _ref$showDatasetTable === void 0 ? nop : _ref$showDatasetTable;
  return /*#__PURE__*/_react["default"].createElement(DataTagAction, {
    className: "dataset-action show-data-table",
    "data-tip": true,
    "data-for": "data-table-".concat(id)
  }, /*#__PURE__*/_react["default"].createElement(_icons.Table, {
    height: "16px",
    onClick: function onClick(e) {
      e.stopPropagation();
      showDatasetTable(id);
    }
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: "data-table-".concat(id),
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'datasetTitle.showDataTable'
  }))));
};

var RemoveDataset = function RemoveDataset(_ref2) {
  var datasetKey = _ref2.datasetKey,
      _ref2$removeDataset = _ref2.removeDataset,
      removeDataset = _ref2$removeDataset === void 0 ? nop : _ref2$removeDataset;
  return /*#__PURE__*/_react["default"].createElement(DataTagAction, {
    className: "dataset-action remove-dataset",
    "data-tip": true,
    "data-for": "delete-".concat(datasetKey)
  }, /*#__PURE__*/_react["default"].createElement(_icons.Trash, {
    height: "16px",
    onClick: function onClick(e) {
      e.stopPropagation();
      removeDataset(datasetKey);
    }
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: "delete-".concat(datasetKey),
    effect: "solid",
    type: "error"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: 'datasetTitle.removeDataset'
  }))));
};

DatasetTitleFactory.deps = [_datasetTag["default"]];

function DatasetTitleFactory(DatasetTag) {
  var DatasetTitle = /*#__PURE__*/function (_PureComponent) {
    (0, _inherits2["default"])(DatasetTitle, _PureComponent);

    var _super = _createSuper(DatasetTitle);

    function DatasetTitle() {
      var _this;

      (0, _classCallCheck2["default"])(this, DatasetTitle);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickTitle", function (e) {
        e.stopPropagation();

        if (typeof _this.props.onTitleClick === 'function') {
          _this.props.onTitleClick();
        } else if (typeof _this.props.showDatasetTable === 'function') {
          _this.props.showDatasetTable(_this.props.dataset.id);
        }
      });
      return _this;
    }

    (0, _createClass2["default"])(DatasetTitle, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            showDatasetTable = _this$props.showDatasetTable,
            showDeleteDataset = _this$props.showDeleteDataset,
            onTitleClick = _this$props.onTitleClick,
            removeDataset = _this$props.removeDataset,
            dataset = _this$props.dataset;
        return /*#__PURE__*/_react["default"].createElement(StyledDatasetTitle, {
          className: "source-data-title",
          clickable: Boolean(showDatasetTable || onTitleClick)
        }, /*#__PURE__*/_react["default"].createElement(DatasetTag, {
          dataset: dataset,
          onClick: this._onClickTitle
        }), showDatasetTable ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
          className: "source-data-arrow"
        }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, {
          height: "12px"
        })) : null, showDatasetTable ? /*#__PURE__*/_react["default"].createElement(ShowDataTable, {
          id: dataset.id,
          showDatasetTable: showDatasetTable
        }) : null, showDeleteDataset ? /*#__PURE__*/_react["default"].createElement(RemoveDataset, {
          datasetKey: dataset.id,
          removeDataset: removeDataset
        }) : null);
      }
    }]);
    return DatasetTitle;
  }(_react.PureComponent);

  return DatasetTitle;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvY29tbW9uL2RhdGFzZXQtdGl0bGUuanMiXSwibmFtZXMiOlsibm9wIiwiU3R5bGVkRGF0YXNldFRpdGxlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvciIsImNsaWNrYWJsZSIsInRleHRDb2xvckhsIiwiRGF0YVRhZ0FjdGlvbiIsIlNob3dEYXRhVGFibGUiLCJpZCIsInNob3dEYXRhc2V0VGFibGUiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiUmVtb3ZlRGF0YXNldCIsImRhdGFzZXRLZXkiLCJyZW1vdmVEYXRhc2V0IiwiRGF0YXNldFRpdGxlRmFjdG9yeSIsImRlcHMiLCJEYXRhc2V0VGFnRmFjdG9yeSIsIkRhdGFzZXRUYWciLCJEYXRhc2V0VGl0bGUiLCJvblRpdGxlQ2xpY2siLCJkYXRhc2V0Iiwic2hvd0RlbGV0ZURhdGFzZXQiLCJCb29sZWFuIiwiX29uQ2xpY2tUaXRsZSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxHQUFULEdBQWUsQ0FBRTs7QUFFakIsSUFBTUMsa0JBQWtCLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNiLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBaEI7QUFBQSxDQURRLEVBU1YsVUFBQUYsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0csU0FBTixHQUFrQixTQUFsQixHQUE4QixNQUFuQztBQUFBLENBVEssRUFZVCxVQUFBSCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRyxTQUFOLEdBQWtCSCxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsV0FBOUIsR0FBNENKLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxTQUE3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R0xhLGlCQUhLLGVBR0xBLGlCQUhLO0FBQUEsWUFJTEYsWUFKSyxlQUlMQSxZQUpLO0FBQUEsWUFLTE4sYUFMSyxlQUtMQSxhQUxLO0FBQUEsWUFNTE8sT0FOSyxlQU1MQSxPQU5LO0FBU1AsNEJBQ0UsZ0NBQUMsa0JBQUQ7QUFDRSxVQUFBLFNBQVMsRUFBQyxtQkFEWjtBQUVFLFVBQUEsU0FBUyxFQUFFRSxPQUFPLENBQUNkLGdCQUFnQixJQUFJVyxZQUFyQjtBQUZwQix3QkFJRSxnQ0FBQyxVQUFEO0FBQVksVUFBQSxPQUFPLEVBQUVDLE9BQXJCO0FBQThCLFVBQUEsT0FBTyxFQUFFLEtBQUtHO0FBQTVDLFVBSkYsRUFLR2YsZ0JBQWdCLGdCQUNmLGdDQUFDLGdDQUFEO0FBQWUsVUFBQSxTQUFTLEVBQUM7QUFBekIsd0JBQ0UsZ0NBQUMsaUJBQUQ7QUFBWSxVQUFBLE1BQU0sRUFBQztBQUFuQixVQURGLENBRGUsR0FJYixJQVROLEVBVUdBLGdCQUFnQixnQkFDZixnQ0FBQyxhQUFEO0FBQWUsVUFBQSxFQUFFLEVBQUVZLE9BQU8sQ0FBQ2IsRUFBM0I7QUFBK0IsVUFBQSxnQkFBZ0IsRUFBRUM7QUFBakQsVUFEZSxHQUViLElBWk4sRUFhR2EsaUJBQWlCLGdCQUNoQixnQ0FBQyxhQUFEO0FBQWUsVUFBQSxVQUFVLEVBQUVELE9BQU8sQ0FBQ2IsRUFBbkM7QUFBdUMsVUFBQSxhQUFhLEVBQUVNO0FBQXRELFVBRGdCLEdBRWQsSUFmTixDQURGO0FBbUJEO0FBdkNtRDtBQUFBO0FBQUEsSUFDM0JXLG9CQUQyQjs7QUEwQ3RELFNBQU9OLFlBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XHJcblxyXG5pbXBvcnQge0NlbnRlckZsZXhib3gsIFRvb2x0aXB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtBcnJvd1JpZ2h0LCBUYWJsZSwgVHJhc2h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IERhdGFzZXRUYWdGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9jb21tb24vZGF0YXNldC10YWcnO1xyXG5cclxuZnVuY3Rpb24gbm9wKCkge31cclxuXHJcbmNvbnN0IFN0eWxlZERhdGFzZXRUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAuc291cmNlLWRhdGEtYXJyb3cge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiAke3Byb3BzID0+IChwcm9wcy5jbGlja2FibGUgPyAncG9pbnRlcicgOiAnYXV0bycpfTtcclxuXHJcbiAgICAuZGF0YXNldC1uYW1lIHtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmNsaWNrYWJsZSA/IHByb3BzLnRoZW1lLnRleHRDb2xvckhsIDogcHJvcHMudGhlbWUudGV4dENvbG9yKX07XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGFzZXQtYWN0aW9uIHtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICAuZGF0YXNldC1hY3Rpb246aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGF0YVRhZ0FjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbmA7XHJcblxyXG5jb25zdCBTaG93RGF0YVRhYmxlID0gKHtpZCwgc2hvd0RhdGFzZXRUYWJsZSA9IG5vcH0pID0+IChcclxuICA8RGF0YVRhZ0FjdGlvbiBjbGFzc05hbWU9XCJkYXRhc2V0LWFjdGlvbiBzaG93LWRhdGEtdGFibGVcIiBkYXRhLXRpcCBkYXRhLWZvcj17YGRhdGEtdGFibGUtJHtpZH1gfT5cclxuICAgIDxUYWJsZVxyXG4gICAgICBoZWlnaHQ9XCIxNnB4XCJcclxuICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBzaG93RGF0YXNldFRhYmxlKGlkKTtcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgICA8VG9vbHRpcCBpZD17YGRhdGEtdGFibGUtJHtpZH1gfSBlZmZlY3Q9XCJzb2xpZFwiPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2RhdGFzZXRUaXRsZS5zaG93RGF0YVRhYmxlJ30gLz5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9Ub29sdGlwPlxyXG4gIDwvRGF0YVRhZ0FjdGlvbj5cclxuKTtcclxuXHJcbmNvbnN0IFJlbW92ZURhdGFzZXQgPSAoe2RhdGFzZXRLZXksIHJlbW92ZURhdGFzZXQgPSBub3B9KSA9PiAoXHJcbiAgPERhdGFUYWdBY3Rpb25cclxuICAgIGNsYXNzTmFtZT1cImRhdGFzZXQtYWN0aW9uIHJlbW92ZS1kYXRhc2V0XCJcclxuICAgIGRhdGEtdGlwXHJcbiAgICBkYXRhLWZvcj17YGRlbGV0ZS0ke2RhdGFzZXRLZXl9YH1cclxuICA+XHJcbiAgICA8VHJhc2hcclxuICAgICAgaGVpZ2h0PVwiMTZweFwiXHJcbiAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgcmVtb3ZlRGF0YXNldChkYXRhc2V0S2V5KTtcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgICA8VG9vbHRpcCBpZD17YGRlbGV0ZS0ke2RhdGFzZXRLZXl9YH0gZWZmZWN0PVwic29saWRcIiB0eXBlPVwiZXJyb3JcIj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydkYXRhc2V0VGl0bGUucmVtb3ZlRGF0YXNldCd9IC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvVG9vbHRpcD5cclxuICA8L0RhdGFUYWdBY3Rpb24+XHJcbik7XHJcblxyXG5EYXRhc2V0VGl0bGVGYWN0b3J5LmRlcHMgPSBbRGF0YXNldFRhZ0ZhY3RvcnldO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0YXNldFRpdGxlRmFjdG9yeShEYXRhc2V0VGFnKSB7XHJcbiAgY2xhc3MgRGF0YXNldFRpdGxlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICBfb25DbGlja1RpdGxlID0gZSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vblRpdGxlQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uVGl0bGVDbGljaygpO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnNob3dEYXRhc2V0VGFibGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNob3dEYXRhc2V0VGFibGUodGhpcy5wcm9wcy5kYXRhc2V0LmlkKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBzaG93RGF0YXNldFRhYmxlLFxyXG4gICAgICAgIHNob3dEZWxldGVEYXRhc2V0LFxyXG4gICAgICAgIG9uVGl0bGVDbGljayxcclxuICAgICAgICByZW1vdmVEYXRhc2V0LFxyXG4gICAgICAgIGRhdGFzZXRcclxuICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWREYXRhc2V0VGl0bGVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLXRpdGxlXCJcclxuICAgICAgICAgIGNsaWNrYWJsZT17Qm9vbGVhbihzaG93RGF0YXNldFRhYmxlIHx8IG9uVGl0bGVDbGljayl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERhdGFzZXRUYWcgZGF0YXNldD17ZGF0YXNldH0gb25DbGljaz17dGhpcy5fb25DbGlja1RpdGxlfSAvPlxyXG4gICAgICAgICAge3Nob3dEYXRhc2V0VGFibGUgPyAoXHJcbiAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLWFycm93XCI+XHJcbiAgICAgICAgICAgICAgPEFycm93UmlnaHQgaGVpZ2h0PVwiMTJweFwiIC8+XHJcbiAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge3Nob3dEYXRhc2V0VGFibGUgPyAoXHJcbiAgICAgICAgICAgIDxTaG93RGF0YVRhYmxlIGlkPXtkYXRhc2V0LmlkfSBzaG93RGF0YXNldFRhYmxlPXtzaG93RGF0YXNldFRhYmxlfSAvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7c2hvd0RlbGV0ZURhdGFzZXQgPyAoXHJcbiAgICAgICAgICAgIDxSZW1vdmVEYXRhc2V0IGRhdGFzZXRLZXk9e2RhdGFzZXQuaWR9IHJlbW92ZURhdGFzZXQ9e3JlbW92ZURhdGFzZXR9IC8+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L1N0eWxlZERhdGFzZXRUaXRsZT5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBEYXRhc2V0VGl0bGU7XHJcbn1cclxuIl19