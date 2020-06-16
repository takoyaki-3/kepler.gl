"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTable = exports.TableSection = exports.Container = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactVirtualized = require("react-virtualized");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _lodash2 = _interopRequireDefault(require("lodash.debounce"));

var _optionDropdown = _interopRequireDefault(require("./option-dropdown"));

var _grid = _interopRequireDefault(require("./grid"));

var _button = _interopRequireDefault(require("./button"));

var _icons = require("../icons");

var _fieldToken = _interopRequireDefault(require("../field-token"));

var _dataUtils = require("../../../utils/data-utils");

var _cellSize = require("./cell-size");

var _defaultSettings = require("../../../constants/default-settings");

var _fieldToAlignRight;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  font-size: 11px;\n  flex-grow: 1;\n  color: ", ";\n  width: 100%;\n\n  .ReactVirtualized__Grid:focus,\n  .ReactVirtualized__Grid:active {\n    outline: 0;\n  }\n\n  .cell {\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  .results-table-wrapper {\n    position: relative;\n    min-height: 100%;\n    max-height: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    overflow: hidden;\n    border-top: none;\n\n    .scroll-in-ui-thread::after {\n      content: '';\n      height: 100%;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      top: 0;\n      width: 100%;\n    }\n\n    .grid-row {\n      position: relative;\n      display: flex;\n      flex-direction: row;\n    }\n    .grid-column {\n      display: flex;\n      flex-direction: column;\n      flex: 1 1 auto;\n    }\n    .pinned-grid-container {\n      flex: 0 0 75px;\n      z-index: 10;\n      position: absolute;\n      left: 0;\n      top: 0;\n      border-right: 2px solid ", ";\n    }\n\n    .header-grid {\n      overflow: hidden !important;\n    }\n\n    .body-grid {\n      overflow: overlay !important;\n    }\n\n    .pinned-grid {\n      overflow: overlay !important;\n    }\n\n    .even-row {\n      background-color: ", ";\n    }\n    .odd-row {\n      background-color: ", ";\n    }\n    .cell,\n    .header-cell {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      text-align: center;\n      overflow: hidden;\n\n      .n-sort-idx {\n        font-size: 9px;\n      }\n    }\n    .cell {\n      border-bottom: 1px solid ", ";\n      border-right: 1px solid ", ";\n      white-space: nowrap;\n      overflow: auto;\n      padding: 0 ", "px;\n      font-size: ", "px;\n\n      .result-link {\n        text-decoration: none;\n      }\n    }\n    .cell.end-cell,\n    .header-cell.end-cell {\n      border-right: none;\n      padding-right: ", "px;\n    }\n    .cell.first-cell,\n    .header-cell.first-cell {\n      padding-left: ", "px;\n    }\n    .cell.bottom-cell {\n      border-bottom: none;\n    }\n    .cell.align-right {\n      align-items: flex-end;\n    }\n    .header-cell {\n      border-bottom: 1px solid ", ";\n      border-top: 1px solid ", ";\n      padding-top: ", "px;\n      padding-right: 0;\n      padding-bottom: ", "px;\n      padding-left: ", "px;\n      align-items: center;\n      justify-content: space-between;\n      display: flex;\n      flex-direction: row;\n      background-color: ", ";\n\n      &:hover {\n        .more {\n          color: ", ";\n        }\n      }\n      .n-sort-idx {\n        font-size: 9px;\n      }\n      .details {\n        font-weight: 500;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        height: 100%;\n        overflow: hidden;\n        flex-grow: 1;\n        .col-name {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n\n          .col-name__left {\n            display: flex;\n            align-items: center;\n            overflow: hidden;\n            svg {\n              margin-left: 6px;\n            }\n          }\n          .col-name__name {\n            overflow: hidden;\n            white-space: nowrap;\n          }\n          .col-name__sort {\n            cursor: pointer;\n          }\n        }\n      }\n\n      .more {\n        color: transparent;\n        margin-left: 5px;\n      }\n    }\n  }\n\n  :focus {\n    outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var defaultHeaderRowHeight = 55;
var defaultRowHeight = 32;
var overscanColumnCount = 10;
var overscanRowCount = 10;
var fieldToAlignRight = (_fieldToAlignRight = {}, (0, _defineProperty2["default"])(_fieldToAlignRight, _defaultSettings.ALL_FIELD_TYPES.integer, true), (0, _defineProperty2["default"])(_fieldToAlignRight, _defaultSettings.ALL_FIELD_TYPES.real, true), _fieldToAlignRight);

var Container = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.pinnedGridBorderColor;
}, function (props) {
  return props.theme.evenRowBackground;
}, function (props) {
  return props.theme.oddRowBackground;
}, function (props) {
  return props.theme.cellBorderColor;
}, function (props) {
  return props.theme.cellBorderColor;
}, function (props) {
  return props.theme.cellPaddingSide;
}, function (props) {
  return props.theme.cellFontSize;
}, function (props) {
  return props.theme.cellPaddingSide + props.theme.edgeCellPaddingSide;
}, function (props) {
  return props.theme.cellPaddingSide + props.theme.edgeCellPaddingSide;
}, function (props) {
  return props.theme.headerCellBorderColor;
}, function (props) {
  return props.theme.headerCellBorderColor;
}, function (props) {
  return props.theme.headerPaddingTop;
}, function (props) {
  return props.theme.headerPaddingBottom;
}, function (props) {
  return props.theme.cellPaddingSide;
}, function (props) {
  return props.theme.headerCellBackground;
}, function (props) {
  return props.theme.headerCellIconColor;
});

exports.Container = Container;
var defaultColumnWidth = 200;

var columnWidthFunction = function columnWidthFunction(columns, cellSizeCache, ghost) {
  return function (_ref) {
    var index = _ref.index;
    return (columns[index] || {}).ghost ? ghost : cellSizeCache[columns[index]] || defaultColumnWidth;
  };
};
/*
 * This is an accessor method used to generalize getting a cell from a data row
 */


var getRowCell = function getRowCell(_ref2) {
  var rows = _ref2.rows,
      columns = _ref2.columns,
      column = _ref2.column,
      colMeta = _ref2.colMeta,
      rowIndex = _ref2.rowIndex,
      sortColumn = _ref2.sortColumn,
      sortOrder = _ref2.sortOrder;
  var rowIdx = sortOrder && sortOrder.length ? (0, _lodash["default"])(sortOrder, rowIndex) : rowIndex;
  var type = colMeta[column];
  return (0, _dataUtils.parseFieldValue)((0, _lodash["default"])(rows, [rowIdx, columns.indexOf(column)], 'Err'), type);
};

var renderHeaderCell = function renderHeaderCell(columns, isPinned, props, toggleMoreOptions, moreOptionsColumn) {
  // eslint-disable-next-line react/display-name
  return function (cellInfo) {
    var _classnames;

    var columnIndex = cellInfo.columnIndex,
        key = cellInfo.key,
        style = cellInfo.style;
    var colMeta = props.colMeta,
        sortColumn = props.sortColumn,
        _sortTableColumn = props.sortTableColumn,
        unsortColumn = props.unsortColumn,
        _pinTableColumn = props.pinTableColumn,
        _copyTableColumn = props.copyTableColumn,
        dataId = props.dataId;
    var column = columns[columnIndex];
    var isGhost = column.ghost;
    var isSorted = sortColumn[column];
    var firstCell = columnIndex === 0;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames3["default"])('header-cell', (_classnames = {}, (0, _defineProperty2["default"])(_classnames, "column-".concat(columnIndex), true), (0, _defineProperty2["default"])(_classnames, 'pinned-header-cell', isPinned), (0, _defineProperty2["default"])(_classnames, 'first-cell', firstCell), _classnames)),
      key: key,
      style: style,
      onClick: function onClick(e) {
        e.shiftKey ? _sortTableColumn(dataId, column) : null;
      },
      onDoubleClick: function onDoubleClick() {
        return _sortTableColumn(dataId, column);
      },
      title: column
    }, isGhost ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
      className: "details"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-name"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-name__left"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-name__name"
    }, column), /*#__PURE__*/_react["default"].createElement(_button["default"], {
      className: "col-name__sort",
      onClick: function onClick() {
        return _sortTableColumn(dataId, column);
      }
    }, isSorted ? isSorted === _defaultSettings.SORT_ORDER.ASCENDING ? /*#__PURE__*/_react["default"].createElement(_icons.ArrowUp, {
      height: "14px"
    }) : /*#__PURE__*/_react["default"].createElement(_icons.ArrowDown, {
      height: "14px"
    }) : null)), /*#__PURE__*/_react["default"].createElement(_button["default"], {
      className: "more",
      onClick: function onClick() {
        return toggleMoreOptions(column);
      }
    }, /*#__PURE__*/_react["default"].createElement(_icons.VertThreeDots, {
      height: "14px"
    }))), /*#__PURE__*/_react["default"].createElement(_fieldToken["default"], {
      type: colMeta[column]
    })), /*#__PURE__*/_react["default"].createElement("section", {
      className: "options"
    }, /*#__PURE__*/_react["default"].createElement(_optionDropdown["default"], {
      isOpened: moreOptionsColumn === column,
      type: colMeta[column],
      column: column,
      toggleMoreOptions: toggleMoreOptions,
      sortTableColumn: function sortTableColumn(mode) {
        return _sortTableColumn(dataId, column, mode);
      },
      sortMode: sortColumn && sortColumn[column],
      pinTableColumn: function pinTableColumn() {
        return _pinTableColumn(dataId, column);
      },
      copyTableColumn: function copyTableColumn() {
        return _copyTableColumn(dataId, column);
      },
      isSorted: isSorted,
      isPinned: isPinned,
      unsortColumn: unsortColumn
    }))));
  };
};

var renderDataCell = function renderDataCell(columns, isPinned, props) {
  return function (cellInfo) {
    var _classnames2;

    var columnIndex = cellInfo.columnIndex,
        key = cellInfo.key,
        style = cellInfo.style,
        rowIndex = cellInfo.rowIndex;
    var rows = props.rows,
        colMeta = props.colMeta;
    var column = columns[columnIndex];
    var isGhost = column.ghost;
    var rowCell = isGhost ? '' : getRowCell(_objectSpread(_objectSpread({}, props), {}, {
      column: column,
      rowIndex: rowIndex
    }));
    var type = isGhost ? null : colMeta[column];
    var endCell = columnIndex === columns.length - 1;
    var firstCell = columnIndex === 0;
    var bottomCell = rowIndex === rows.length - 1;
    var alignRight = fieldToAlignRight[type];

    var cell = /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames3["default"])('cell', (_classnames2 = {}, (0, _defineProperty2["default"])(_classnames2, rowIndex % 2 === 0 ? 'even-row' : 'odd-row', true), (0, _defineProperty2["default"])(_classnames2, "row-".concat(rowIndex), true), (0, _defineProperty2["default"])(_classnames2, 'pinned-cell', isPinned), (0, _defineProperty2["default"])(_classnames2, 'first-cell', firstCell), (0, _defineProperty2["default"])(_classnames2, 'end-cell', endCell), (0, _defineProperty2["default"])(_classnames2, 'bottom-cell', bottomCell), (0, _defineProperty2["default"])(_classnames2, 'align-right', alignRight), _classnames2)),
      key: key,
      style: style,
      title: isGhost ? undefined : rowCell
    }, "".concat(rowCell).concat(endCell ? '\n' : '\t'));

    return cell;
  };
};

var TableSection = function TableSection(_ref3) {
  var classList = _ref3.classList,
      isPinned = _ref3.isPinned,
      columns = _ref3.columns,
      headerGridProps = _ref3.headerGridProps,
      fixedWidth = _ref3.fixedWidth,
      fixedHeight = _ref3.fixedHeight,
      onScroll = _ref3.onScroll,
      scrollTop = _ref3.scrollTop,
      dataGridProps = _ref3.dataGridProps,
      columnWidth = _ref3.columnWidth,
      setGridRef = _ref3.setGridRef,
      headerCellRender = _ref3.headerCellRender,
      dataCellRender = _ref3.dataCellRender,
      scrollLeft = _ref3.scrollLeft;
  return /*#__PURE__*/_react["default"].createElement(_reactVirtualized.AutoSizer, null, function (_ref4) {
    var width = _ref4.width,
        height = _ref4.height;
    var gridDimension = {
      columnCount: columns.length,
      columnWidth: columnWidth,
      width: fixedWidth || width
    };
    var dataGridHeight = fixedHeight || height;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames3["default"])('scroll-in-ui-thread', classList.header)
    }, /*#__PURE__*/_react["default"].createElement(_grid["default"], (0, _extends2["default"])({
      cellRenderer: headerCellRender
    }, headerGridProps, gridDimension, {
      scrollLeft: scrollLeft
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames3["default"])('scroll-in-ui-thread', classList.rows),
      style: {
        top: headerGridProps.height
      }
    }, /*#__PURE__*/_react["default"].createElement(_grid["default"], (0, _extends2["default"])({
      cellRenderer: dataCellRender
    }, dataGridProps, gridDimension, {
      className: isPinned ? 'pinned-grid' : 'body-grid',
      height: dataGridHeight - headerGridProps.height,
      onScroll: onScroll,
      scrollTop: scrollTop,
      setGridRef: setGridRef
    }))));
  });
};

exports.TableSection = TableSection;

var DataTable = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(DataTable, _Component);

  var _super = _createSuper(DataTable);

  function DataTable() {
    var _this;

    (0, _classCallCheck2["default"])(this, DataTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      cellSizeCache: {},
      moreOptionsColumn: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columns", function (props) {
      return props.columns;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pinnedColumns", function (props) {
      return props.pinnedColumns;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unpinnedColumns", (0, _reselect.createSelector)(_this.columns, _this.pinnedColumns, function (columns, pinnedColumns) {
      return !Array.isArray(pinnedColumns) ? columns : columns.filter(function (c) {
        return !pinnedColumns.includes(c);
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMoreOptions", function (moreOptionsColumn) {
      return _this.setState({
        moreOptionsColumn: _this.state.moreOptionsColumn === moreOptionsColumn ? null : moreOptionsColumn
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCellSizeCache", function () {
      var _this$props = _this.props,
          propsCache = _this$props.cellSizeCache,
          fixedWidth = _this$props.fixedWidth,
          pinnedColumns = _this$props.pinnedColumns;

      var unpinnedColumns = _this.unpinnedColumns(_this.props);

      var width = fixedWidth ? fixedWidth : _this.root.current ? _this.root.current.clientWidth : 0; // pin column border is 2 pixel vs 1 pixel

      var adjustWidth = pinnedColumns.length ? width - 1 : width;

      var _adjustCellsToContain = (0, _cellSize.adjustCellsToContainer)(adjustWidth, propsCache, pinnedColumns, unpinnedColumns),
          cellSizeCache = _adjustCellsToContain.cellSizeCache,
          ghost = _adjustCellsToContain.ghost;

      return {
        cellSizeCache: cellSizeCache,
        ghost: ghost
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "doScaleCellsToWidth", function () {
      _this.setState(_this.getCellSizeCache());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaleCellsToWidth", (0, _lodash2["default"])(_this.doScaleCellsToWidth, 300));
    return _this;
  }

  (0, _createClass2["default"])(DataTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.scaleCellsToWidth);
      this.scaleCellsToWidth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.cellSizeCache !== prevProps.cellSizeCache || this.props.pinnedColumns !== prevProps.pinnedColumns) {
        this.scaleCellsToWidth();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.scaleCellsToWidth);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          rows = _this$props2.rows,
          pinnedColumns = _this$props2.pinnedColumns,
          _this$props2$theme = _this$props2.theme,
          theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
          fixedWidth = _this$props2.fixedWidth,
          fixedHeight = _this$props2.fixedHeight;
      var unpinnedColumns = this.unpinnedColumns(this.props);
      var _this$state = this.state,
          cellSizeCache = _this$state.cellSizeCache,
          moreOptionsColumn = _this$state.moreOptionsColumn,
          ghost = _this$state.ghost;
      var unpinnedColumnsGhost = ghost ? [].concat((0, _toConsumableArray2["default"])(unpinnedColumns), [{
        ghost: true
      }]) : unpinnedColumns;
      var pinnedColumnsWidth = pinnedColumns.reduce(function (acc, val) {
        return acc + (0, _lodash["default"])(cellSizeCache, val, 0);
      }, 0);
      var hasPinnedColumns = Boolean(pinnedColumns.length);
      var _theme$headerRowHeigh = theme.headerRowHeight,
          headerRowHeight = _theme$headerRowHeigh === void 0 ? defaultHeaderRowHeight : _theme$headerRowHeigh,
          _theme$rowHeight = theme.rowHeight,
          rowHeight = _theme$rowHeight === void 0 ? defaultRowHeight : _theme$rowHeight;
      var headerGridProps = {
        cellSizeCache: cellSizeCache,
        className: 'header-grid',
        height: headerRowHeight,
        rowCount: 1,
        rowHeight: headerRowHeight
      };
      var dataGridProps = {
        cellSizeCache: cellSizeCache,
        overscanColumnCount: overscanColumnCount,
        overscanRowCount: overscanRowCount,
        rowCount: (rows || []).length,
        rowHeight: rowHeight
      };
      return /*#__PURE__*/_react["default"].createElement(Container, {
        className: "data-table-container",
        ref: this.root
      }, Object.keys(cellSizeCache).length && /*#__PURE__*/_react["default"].createElement(_reactVirtualized.ScrollSync, null, function (_ref5) {
        var _onScroll = _ref5.onScroll,
            scrollLeft = _ref5.scrollLeft,
            scrollTop = _ref5.scrollTop;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "results-table-wrapper"
        }, hasPinnedColumns && /*#__PURE__*/_react["default"].createElement("div", {
          key: "pinned-columns",
          className: "pinned-columns grid-row"
        }, /*#__PURE__*/_react["default"].createElement(TableSection, {
          classList: {
            header: 'pinned-columns--header pinned-grid-container',
            rows: 'pinned-columns--rows pinned-grid-container'
          },
          isPinned: true,
          columns: pinnedColumns,
          headerGridProps: headerGridProps,
          fixedWidth: pinnedColumnsWidth,
          onScroll: function onScroll(args) {
            return _onScroll(_objectSpread(_objectSpread({}, args), {}, {
              scrollLeft: scrollLeft
            }));
          },
          scrollTop: scrollTop,
          dataGridProps: dataGridProps,
          setGridRef: function setGridRef(pinnedGrid) {
            return _this2.pinnedGrid = pinnedGrid;
          },
          columnWidth: columnWidthFunction(pinnedColumns, cellSizeCache),
          headerCellRender: renderHeaderCell(pinnedColumns, true, _this2.props, _this2.toggleMoreOptions, moreOptionsColumn),
          dataCellRender: renderDataCell(pinnedColumns, true, _this2.props)
        })), /*#__PURE__*/_react["default"].createElement("div", {
          key: "unpinned-columns",
          style: {
            marginLeft: "".concat(hasPinnedColumns ? "".concat(pinnedColumnsWidth, "px") : '0')
          },
          className: "unpinned-columns grid-column"
        }, /*#__PURE__*/_react["default"].createElement(TableSection, {
          classList: {
            header: 'unpinned-columns--header unpinned-grid-container',
            rows: 'unpinned-columns--rows unpinned-grid-container'
          },
          isPinned: false,
          columns: unpinnedColumnsGhost,
          ghost: ghost,
          headerGridProps: headerGridProps,
          fixedWidth: fixedWidth,
          fixedHeight: fixedHeight,
          onScroll: _onScroll,
          scrollTop: scrollTop,
          scrollLeft: scrollLeft,
          dataGridProps: dataGridProps,
          setGridRef: function setGridRef(unpinnedGrid) {
            return _this2.unpinnedGrid = unpinnedGrid;
          },
          columnWidth: columnWidthFunction(unpinnedColumnsGhost, cellSizeCache, ghost),
          headerCellRender: renderHeaderCell(unpinnedColumnsGhost, false, _this2.props, _this2.toggleMoreOptions, moreOptionsColumn),
          dataCellRender: renderDataCell(unpinnedColumnsGhost, false, _this2.props)
        })));
      }));
    }
  }]);
  return DataTable;
}(_react.Component);

exports.DataTable = DataTable;
(0, _defineProperty2["default"])(DataTable, "defaultProps", {
  rows: [],
  pinnedColumns: [],
  colMeta: {},
  cellSizeCache: {},
  sortColumn: {},
  fixedWidth: null,
  fixedHeight: null,
  theme: {}
});

function DataTableFactory() {
  return (0, _styledComponents.withTheme)(DataTable);
}

var _default = DataTableFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9kYXRhLXRhYmxlL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRIZWFkZXJSb3dIZWlnaHQiLCJkZWZhdWx0Um93SGVpZ2h0Iiwib3ZlcnNjYW5Db2x1bW5Db3VudCIsIm92ZXJzY2FuUm93Q291bnQiLCJmaWVsZFRvQWxpZ25SaWdodCIsIkFMTF9GSUVMRF9UWVBFUyIsImludGVnZXIiLCJyZWFsIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwicGlubmVkR3JpZEJvcmRlckNvbG9yIiwiZXZlblJvd0JhY2tncm91bmQiLCJvZGRSb3dCYWNrZ3JvdW5kIiwiY2VsbEJvcmRlckNvbG9yIiwiY2VsbFBhZGRpbmdTaWRlIiwiY2VsbEZvbnRTaXplIiwiZWRnZUNlbGxQYWRkaW5nU2lkZSIsImhlYWRlckNlbGxCb3JkZXJDb2xvciIsImhlYWRlclBhZGRpbmdUb3AiLCJoZWFkZXJQYWRkaW5nQm90dG9tIiwiaGVhZGVyQ2VsbEJhY2tncm91bmQiLCJoZWFkZXJDZWxsSWNvbkNvbG9yIiwiZGVmYXVsdENvbHVtbldpZHRoIiwiY29sdW1uV2lkdGhGdW5jdGlvbiIsImNvbHVtbnMiLCJjZWxsU2l6ZUNhY2hlIiwiZ2hvc3QiLCJpbmRleCIsImdldFJvd0NlbGwiLCJyb3dzIiwiY29sdW1uIiwiY29sTWV0YSIsInJvd0luZGV4Iiwic29ydENvbHVtbiIsInNvcnRPcmRlciIsInJvd0lkeCIsImxlbmd0aCIsInR5cGUiLCJpbmRleE9mIiwicmVuZGVySGVhZGVyQ2VsbCIsImlzUGlubmVkIiwidG9nZ2xlTW9yZU9wdGlvbnMiLCJtb3JlT3B0aW9uc0NvbHVtbiIsImNlbGxJbmZvIiwiY29sdW1uSW5kZXgiLCJrZXkiLCJzdHlsZSIsInNvcnRUYWJsZUNvbHVtbiIsInVuc29ydENvbHVtbiIsInBpblRhYmxlQ29sdW1uIiwiY29weVRhYmxlQ29sdW1uIiwiZGF0YUlkIiwiaXNHaG9zdCIsImlzU29ydGVkIiwiZmlyc3RDZWxsIiwiZSIsInNoaWZ0S2V5IiwiU09SVF9PUkRFUiIsIkFTQ0VORElORyIsIm1vZGUiLCJyZW5kZXJEYXRhQ2VsbCIsInJvd0NlbGwiLCJlbmRDZWxsIiwiYm90dG9tQ2VsbCIsImFsaWduUmlnaHQiLCJjZWxsIiwidW5kZWZpbmVkIiwiVGFibGVTZWN0aW9uIiwiY2xhc3NMaXN0IiwiaGVhZGVyR3JpZFByb3BzIiwiZml4ZWRXaWR0aCIsImZpeGVkSGVpZ2h0Iiwib25TY3JvbGwiLCJzY3JvbGxUb3AiLCJkYXRhR3JpZFByb3BzIiwiY29sdW1uV2lkdGgiLCJzZXRHcmlkUmVmIiwiaGVhZGVyQ2VsbFJlbmRlciIsImRhdGFDZWxsUmVuZGVyIiwic2Nyb2xsTGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiZ3JpZERpbWVuc2lvbiIsImNvbHVtbkNvdW50IiwiZGF0YUdyaWRIZWlnaHQiLCJoZWFkZXIiLCJ0b3AiLCJEYXRhVGFibGUiLCJwaW5uZWRDb2x1bW5zIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwiYyIsImluY2x1ZGVzIiwic2V0U3RhdGUiLCJzdGF0ZSIsInByb3BzQ2FjaGUiLCJ1bnBpbm5lZENvbHVtbnMiLCJyb290IiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwiYWRqdXN0V2lkdGgiLCJnZXRDZWxsU2l6ZUNhY2hlIiwiZG9TY2FsZUNlbGxzVG9XaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY2FsZUNlbGxzVG9XaWR0aCIsInByZXZQcm9wcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1bnBpbm5lZENvbHVtbnNHaG9zdCIsInBpbm5lZENvbHVtbnNXaWR0aCIsInJlZHVjZSIsImFjYyIsInZhbCIsImhhc1Bpbm5lZENvbHVtbnMiLCJCb29sZWFuIiwiaGVhZGVyUm93SGVpZ2h0Iiwicm93SGVpZ2h0IiwiY2xhc3NOYW1lIiwicm93Q291bnQiLCJPYmplY3QiLCJrZXlzIiwiYXJncyIsInBpbm5lZEdyaWQiLCJtYXJnaW5MZWZ0IiwidW5waW5uZWRHcmlkIiwiQ29tcG9uZW50IiwiRGF0YVRhYmxlRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHNCQUFzQixHQUFHLEVBQS9CO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsRUFBekI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxFQUE1QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLEVBQXpCO0FBQ0EsSUFBTUMsaUJBQWlCLGtGQUNwQkMsaUNBQWdCQyxPQURJLEVBQ00sSUFETix3REFFcEJELGlDQUFnQkUsSUFGSSxFQUVHLElBRkgsc0JBQXZCOztBQUtPLElBQU1DLFNBQVMsR0FBR0MsNkJBQU9DLEdBQVYsb0JBSVgsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBSk0sRUEwRFUsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxxQkFBaEI7QUFBQSxDQTFEZixFQTBFSSxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLGlCQUFoQjtBQUFBLENBMUVULEVBNkVJLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksZ0JBQWhCO0FBQUEsQ0E3RVQsRUErRlcsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxlQUFoQjtBQUFBLENBL0ZoQixFQWdHVSxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLGVBQWhCO0FBQUEsQ0FoR2YsRUFtR0gsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtB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QUUsRUFEYztBQUVwQjJELEVBQUFBLGFBQWEsRUFBRSxFQUZLO0FBR3BCekQsRUFBQUEsT0FBTyxFQUFFLEVBSFc7QUFJcEJOLEVBQUFBLGFBQWEsRUFBRSxFQUpLO0FBS3BCUSxFQUFBQSxVQUFVLEVBQUUsRUFMUTtBQU1wQnFDLEVBQUFBLFVBQVUsRUFBRSxJQU5RO0FBT3BCQyxFQUFBQSxXQUFXLEVBQUUsSUFQTztBQVFwQi9ELEVBQUFBLEtBQUssRUFBRTtBQVJhLEM7O0FBb0x4QixTQUFTdUgsZ0JBQVQsR0FBNEI7QUFDMUIsU0FBTyxpQ0FBVXhDLFNBQVYsQ0FBUDtBQUNEOztlQUVjd0MsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1Njcm9sbFN5bmMsIEF1dG9TaXplcn0gZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQnO1xyXG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xyXG5cclxuaW1wb3J0IE9wdGlvbkRyb3Bkb3duIGZyb20gJy4vb3B0aW9uLWRyb3Bkb3duJztcclxuXHJcbmltcG9ydCBHcmlkIGZyb20gJy4vZ3JpZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xyXG5pbXBvcnQge0Fycm93VXAsIEFycm93RG93bn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQge1ZlcnRUaHJlZURvdHN9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IEZpZWxkVG9rZW4gZnJvbSAnY29tcG9uZW50cy9jb21tb24vZmllbGQtdG9rZW4nO1xyXG5cclxuaW1wb3J0IHtwYXJzZUZpZWxkVmFsdWV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xyXG5pbXBvcnQge2FkanVzdENlbGxzVG9Db250YWluZXJ9IGZyb20gJy4vY2VsbC1zaXplJztcclxuXHJcbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTLCBTT1JUX09SREVSfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5jb25zdCBkZWZhdWx0SGVhZGVyUm93SGVpZ2h0ID0gNTU7XHJcbmNvbnN0IGRlZmF1bHRSb3dIZWlnaHQgPSAzMjtcclxuY29uc3Qgb3ZlcnNjYW5Db2x1bW5Db3VudCA9IDEwO1xyXG5jb25zdCBvdmVyc2NhblJvd0NvdW50ID0gMTA7XHJcbmNvbnN0IGZpZWxkVG9BbGlnblJpZ2h0ID0ge1xyXG4gIFtBTExfRklFTERfVFlQRVMuaW50ZWdlcl06IHRydWUsXHJcbiAgW0FMTF9GSUVMRF9UWVBFUy5yZWFsXTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLlJlYWN0VmlydHVhbGl6ZWRfX0dyaWQ6Zm9jdXMsXHJcbiAgLlJlYWN0VmlydHVhbGl6ZWRfX0dyaWQ6YWN0aXZlIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG5cclxuICAuY2VsbCB7XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAqOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG5cclxuICAucmVzdWx0cy10YWJsZS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuXHJcbiAgICAuc2Nyb2xsLWluLXVpLXRocmVhZDo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkLXJvdyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC5ncmlkLWNvbHVtbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnBpbm5lZC1ncmlkLWNvbnRhaW5lciB7XHJcbiAgICAgIGZsZXg6IDAgMCA3NXB4O1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGlubmVkR3JpZEJvcmRlckNvbG9yfTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWdyaWQge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvZHktZ3JpZCB7XHJcbiAgICAgIG92ZXJmbG93OiBvdmVybGF5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBpbm5lZC1ncmlkIHtcclxuICAgICAgb3ZlcmZsb3c6IG92ZXJsYXkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZXZlbi1yb3cge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmV2ZW5Sb3dCYWNrZ3JvdW5kfTtcclxuICAgIH1cclxuICAgIC5vZGQtcm93IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5vZGRSb3dCYWNrZ3JvdW5kfTtcclxuICAgIH1cclxuICAgIC5jZWxsLFxyXG4gICAgLmhlYWRlci1jZWxsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAubi1zb3J0LWlkeCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jZWxsIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2VsbEJvcmRlckNvbG9yfTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsQm9yZGVyQ29sb3J9O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgcGFkZGluZzogMCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNlbGxQYWRkaW5nU2lkZX1weDtcclxuICAgICAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNlbGxGb250U2l6ZX1weDtcclxuXHJcbiAgICAgIC5yZXN1bHQtbGluayB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2VsbC5lbmQtY2VsbCxcclxuICAgIC5oZWFkZXItY2VsbC5lbmQtY2VsbCB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsUGFkZGluZ1NpZGUgKyBwcm9wcy50aGVtZS5lZGdlQ2VsbFBhZGRpbmdTaWRlfXB4O1xyXG4gICAgfVxyXG4gICAgLmNlbGwuZmlyc3QtY2VsbCxcclxuICAgIC5oZWFkZXItY2VsbC5maXJzdC1jZWxsIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNlbGxQYWRkaW5nU2lkZSArIHByb3BzLnRoZW1lLmVkZ2VDZWxsUGFkZGluZ1NpZGV9cHg7XHJcbiAgICB9XHJcbiAgICAuY2VsbC5ib3R0b20tY2VsbCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2VsbC5hbGlnbi1yaWdodCB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItY2VsbCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlckNlbGxCb3JkZXJDb2xvcn07XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlckNlbGxCb3JkZXJDb2xvcn07XHJcbiAgICAgIHBhZGRpbmctdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlclBhZGRpbmdUb3B9cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlclBhZGRpbmdCb3R0b219cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsUGFkZGluZ1NpZGV9cHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXJDZWxsQmFja2dyb3VuZH07XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAubW9yZSB7XHJcbiAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXJDZWxsSWNvbkNvbG9yfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm4tc29ydC1pZHgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIC5jb2wtbmFtZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAuY29sLW5hbWVfX2xlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb2wtbmFtZV9fbmFtZSB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29sLW5hbWVfX3NvcnQge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubW9yZSB7XHJcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGRlZmF1bHRDb2x1bW5XaWR0aCA9IDIwMDtcclxuXHJcbmNvbnN0IGNvbHVtbldpZHRoRnVuY3Rpb24gPSAoY29sdW1ucywgY2VsbFNpemVDYWNoZSwgZ2hvc3QpID0+ICh7aW5kZXh9KSA9PiB7XHJcbiAgcmV0dXJuIChjb2x1bW5zW2luZGV4XSB8fCB7fSkuZ2hvc3QgPyBnaG9zdCA6IGNlbGxTaXplQ2FjaGVbY29sdW1uc1tpbmRleF1dIHx8IGRlZmF1bHRDb2x1bW5XaWR0aDtcclxufTtcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gYWNjZXNzb3IgbWV0aG9kIHVzZWQgdG8gZ2VuZXJhbGl6ZSBnZXR0aW5nIGEgY2VsbCBmcm9tIGEgZGF0YSByb3dcclxuICovXHJcbmNvbnN0IGdldFJvd0NlbGwgPSAoe3Jvd3MsIGNvbHVtbnMsIGNvbHVtbiwgY29sTWV0YSwgcm93SW5kZXgsIHNvcnRDb2x1bW4sIHNvcnRPcmRlcn0pID0+IHtcclxuICBjb25zdCByb3dJZHggPSBzb3J0T3JkZXIgJiYgc29ydE9yZGVyLmxlbmd0aCA/IGdldChzb3J0T3JkZXIsIHJvd0luZGV4KSA6IHJvd0luZGV4O1xyXG4gIGNvbnN0IHR5cGUgPSBjb2xNZXRhW2NvbHVtbl07XHJcblxyXG4gIHJldHVybiBwYXJzZUZpZWxkVmFsdWUoZ2V0KHJvd3MsIFtyb3dJZHgsIGNvbHVtbnMuaW5kZXhPZihjb2x1bW4pXSwgJ0VycicpLCB0eXBlKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckhlYWRlckNlbGwgPSAoY29sdW1ucywgaXNQaW5uZWQsIHByb3BzLCB0b2dnbGVNb3JlT3B0aW9ucywgbW9yZU9wdGlvbnNDb2x1bW4pID0+IHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXHJcbiAgcmV0dXJuIGNlbGxJbmZvID0+IHtcclxuICAgIGNvbnN0IHtjb2x1bW5JbmRleCwga2V5LCBzdHlsZX0gPSBjZWxsSW5mbztcclxuICAgIGNvbnN0IHtcclxuICAgICAgY29sTWV0YSxcclxuICAgICAgc29ydENvbHVtbixcclxuICAgICAgc29ydFRhYmxlQ29sdW1uLFxyXG4gICAgICB1bnNvcnRDb2x1bW4sXHJcbiAgICAgIHBpblRhYmxlQ29sdW1uLFxyXG4gICAgICBjb3B5VGFibGVDb2x1bW4sXHJcbiAgICAgIGRhdGFJZFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbY29sdW1uSW5kZXhdO1xyXG4gICAgY29uc3QgaXNHaG9zdCA9IGNvbHVtbi5naG9zdDtcclxuICAgIGNvbnN0IGlzU29ydGVkID0gc29ydENvbHVtbltjb2x1bW5dO1xyXG4gICAgY29uc3QgZmlyc3RDZWxsID0gY29sdW1uSW5kZXggPT09IDA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnaGVhZGVyLWNlbGwnLCB7XHJcbiAgICAgICAgICBbYGNvbHVtbi0ke2NvbHVtbkluZGV4fWBdOiB0cnVlLFxyXG4gICAgICAgICAgJ3Bpbm5lZC1oZWFkZXItY2VsbCc6IGlzUGlubmVkLFxyXG4gICAgICAgICAgJ2ZpcnN0LWNlbGwnOiBmaXJzdENlbGxcclxuICAgICAgICB9KX1cclxuICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICBlLnNoaWZ0S2V5ID8gc29ydFRhYmxlQ29sdW1uKGRhdGFJZCwgY29sdW1uKSA6IG51bGw7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiBzb3J0VGFibGVDb2x1bW4oZGF0YUlkLCBjb2x1bW4pfVxyXG4gICAgICAgIHRpdGxlPXtjb2x1bW59XHJcbiAgICAgID5cclxuICAgICAgICB7aXNHaG9zdCA/IChcclxuICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW5hbWVfX2xlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbmFtZV9fbmFtZVwiPntjb2x1bW59PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbmFtZV9fc29ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc29ydFRhYmxlQ29sdW1uKGRhdGFJZCwgY29sdW1uKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1NvcnRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIGlzU29ydGVkID09PSBTT1JUX09SREVSLkFTQ0VORElORyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93VXAgaGVpZ2h0PVwiMTRweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dEb3duIGhlaWdodD1cIjE0cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtb3JlXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlTW9yZU9wdGlvbnMoY29sdW1uKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxWZXJ0VGhyZWVEb3RzIGhlaWdodD1cIjE0cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFRva2VuIHR5cGU9e2NvbE1ldGFbY29sdW1uXX0gLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxPcHRpb25Ecm9wZG93blxyXG4gICAgICAgICAgICAgICAgaXNPcGVuZWQ9e21vcmVPcHRpb25zQ29sdW1uID09PSBjb2x1bW59XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtjb2xNZXRhW2NvbHVtbl19XHJcbiAgICAgICAgICAgICAgICBjb2x1bW49e2NvbHVtbn1cclxuICAgICAgICAgICAgICAgIHRvZ2dsZU1vcmVPcHRpb25zPXt0b2dnbGVNb3JlT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIHNvcnRUYWJsZUNvbHVtbj17bW9kZSA9PiBzb3J0VGFibGVDb2x1bW4oZGF0YUlkLCBjb2x1bW4sIG1vZGUpfVxyXG4gICAgICAgICAgICAgICAgc29ydE1vZGU9e3NvcnRDb2x1bW4gJiYgc29ydENvbHVtbltjb2x1bW5dfVxyXG4gICAgICAgICAgICAgICAgcGluVGFibGVDb2x1bW49eygpID0+IHBpblRhYmxlQ29sdW1uKGRhdGFJZCwgY29sdW1uKX1cclxuICAgICAgICAgICAgICAgIGNvcHlUYWJsZUNvbHVtbj17KCkgPT4gY29weVRhYmxlQ29sdW1uKGRhdGFJZCwgY29sdW1uKX1cclxuICAgICAgICAgICAgICAgIGlzU29ydGVkPXtpc1NvcnRlZH1cclxuICAgICAgICAgICAgICAgIGlzUGlubmVkPXtpc1Bpbm5lZH1cclxuICAgICAgICAgICAgICAgIHVuc29ydENvbHVtbj17dW5zb3J0Q29sdW1ufVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyRGF0YUNlbGwgPSAoY29sdW1ucywgaXNQaW5uZWQsIHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIGNlbGxJbmZvID0+IHtcclxuICAgIGNvbnN0IHtjb2x1bW5JbmRleCwga2V5LCBzdHlsZSwgcm93SW5kZXh9ID0gY2VsbEluZm87XHJcbiAgICBjb25zdCB7cm93cywgY29sTWV0YX0gPSBwcm9wcztcclxuICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnNbY29sdW1uSW5kZXhdO1xyXG4gICAgY29uc3QgaXNHaG9zdCA9IGNvbHVtbi5naG9zdDtcclxuXHJcbiAgICBjb25zdCByb3dDZWxsID0gaXNHaG9zdCA/ICcnIDogZ2V0Um93Q2VsbCh7Li4ucHJvcHMsIGNvbHVtbiwgcm93SW5kZXh9KTtcclxuICAgIGNvbnN0IHR5cGUgPSBpc0dob3N0ID8gbnVsbCA6IGNvbE1ldGFbY29sdW1uXTtcclxuXHJcbiAgICBjb25zdCBlbmRDZWxsID0gY29sdW1uSW5kZXggPT09IGNvbHVtbnMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGZpcnN0Q2VsbCA9IGNvbHVtbkluZGV4ID09PSAwO1xyXG4gICAgY29uc3QgYm90dG9tQ2VsbCA9IHJvd0luZGV4ID09PSByb3dzLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBhbGlnblJpZ2h0ID0gZmllbGRUb0FsaWduUmlnaHRbdHlwZV07XHJcblxyXG4gICAgY29uc3QgY2VsbCA9IChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnY2VsbCcsIHtcclxuICAgICAgICAgIFtyb3dJbmRleCAlIDIgPT09IDAgPyAnZXZlbi1yb3cnIDogJ29kZC1yb3cnXTogdHJ1ZSxcclxuICAgICAgICAgIFtgcm93LSR7cm93SW5kZXh9YF06IHRydWUsXHJcbiAgICAgICAgICAncGlubmVkLWNlbGwnOiBpc1Bpbm5lZCxcclxuICAgICAgICAgICdmaXJzdC1jZWxsJzogZmlyc3RDZWxsLFxyXG4gICAgICAgICAgJ2VuZC1jZWxsJzogZW5kQ2VsbCxcclxuICAgICAgICAgICdib3R0b20tY2VsbCc6IGJvdHRvbUNlbGwsXHJcbiAgICAgICAgICAnYWxpZ24tcmlnaHQnOiBhbGlnblJpZ2h0XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgIHRpdGxlPXtpc0dob3N0ID8gdW5kZWZpbmVkIDogcm93Q2VsbH1cclxuICAgICAgPlxyXG4gICAgICAgIHtgJHtyb3dDZWxsfSR7ZW5kQ2VsbCA/ICdcXG4nIDogJ1xcdCd9YH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBjZWxsO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVGFibGVTZWN0aW9uID0gKHtcclxuICBjbGFzc0xpc3QsXHJcbiAgaXNQaW5uZWQsXHJcbiAgY29sdW1ucyxcclxuICBoZWFkZXJHcmlkUHJvcHMsXHJcbiAgZml4ZWRXaWR0aCxcclxuICBmaXhlZEhlaWdodCxcclxuICBvblNjcm9sbCxcclxuICBzY3JvbGxUb3AsXHJcbiAgZGF0YUdyaWRQcm9wcyxcclxuICBjb2x1bW5XaWR0aCxcclxuICBzZXRHcmlkUmVmLFxyXG4gIGhlYWRlckNlbGxSZW5kZXIsXHJcbiAgZGF0YUNlbGxSZW5kZXIsXHJcbiAgc2Nyb2xsTGVmdFxyXG59KSA9PiAoXHJcbiAgPEF1dG9TaXplcj5cclxuICAgIHsoe3dpZHRoLCBoZWlnaHR9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGdyaWREaW1lbnNpb24gPSB7XHJcbiAgICAgICAgY29sdW1uQ291bnQ6IGNvbHVtbnMubGVuZ3RoLFxyXG4gICAgICAgIGNvbHVtbldpZHRoLFxyXG4gICAgICAgIHdpZHRoOiBmaXhlZFdpZHRoIHx8IHdpZHRoXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGRhdGFHcmlkSGVpZ2h0ID0gZml4ZWRIZWlnaHQgfHwgaGVpZ2h0O1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnc2Nyb2xsLWluLXVpLXRocmVhZCcsIGNsYXNzTGlzdC5oZWFkZXIpfT5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBjZWxsUmVuZGVyZXI9e2hlYWRlckNlbGxSZW5kZXJ9XHJcbiAgICAgICAgICAgICAgey4uLmhlYWRlckdyaWRQcm9wc31cclxuICAgICAgICAgICAgICB7Li4uZ3JpZERpbWVuc2lvbn1cclxuICAgICAgICAgICAgICBzY3JvbGxMZWZ0PXtzY3JvbGxMZWZ0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnc2Nyb2xsLWluLXVpLXRocmVhZCcsIGNsYXNzTGlzdC5yb3dzKX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB0b3A6IGhlYWRlckdyaWRQcm9wcy5oZWlnaHRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBjZWxsUmVuZGVyZXI9e2RhdGFDZWxsUmVuZGVyfVxyXG4gICAgICAgICAgICAgIHsuLi5kYXRhR3JpZFByb3BzfVxyXG4gICAgICAgICAgICAgIHsuLi5ncmlkRGltZW5zaW9ufVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNQaW5uZWQgPyAncGlubmVkLWdyaWQnIDogJ2JvZHktZ3JpZCd9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXtkYXRhR3JpZEhlaWdodCAtIGhlYWRlckdyaWRQcm9wcy5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgb25TY3JvbGw9e29uU2Nyb2xsfVxyXG4gICAgICAgICAgICAgIHNjcm9sbFRvcD17c2Nyb2xsVG9wfVxyXG4gICAgICAgICAgICAgIHNldEdyaWRSZWY9e3NldEdyaWRSZWZ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH19XHJcbiAgPC9BdXRvU2l6ZXI+XHJcbik7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgcm93czogW10sXHJcbiAgICBwaW5uZWRDb2x1bW5zOiBbXSxcclxuICAgIGNvbE1ldGE6IHt9LFxyXG4gICAgY2VsbFNpemVDYWNoZToge30sXHJcbiAgICBzb3J0Q29sdW1uOiB7fSxcclxuICAgIGZpeGVkV2lkdGg6IG51bGwsXHJcbiAgICBmaXhlZEhlaWdodDogbnVsbCxcclxuICAgIHRoZW1lOiB7fVxyXG4gIH07XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgY2VsbFNpemVDYWNoZToge30sXHJcbiAgICBtb3JlT3B0aW9uc0NvbHVtbjogbnVsbFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2NhbGVDZWxsc1RvV2lkdGgpO1xyXG4gICAgdGhpcy5zY2FsZUNlbGxzVG9XaWR0aCgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnByb3BzLmNlbGxTaXplQ2FjaGUgIT09IHByZXZQcm9wcy5jZWxsU2l6ZUNhY2hlIHx8XHJcbiAgICAgIHRoaXMucHJvcHMucGlubmVkQ29sdW1ucyAhPT0gcHJldlByb3BzLnBpbm5lZENvbHVtbnNcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNjYWxlQ2VsbHNUb1dpZHRoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjYWxlQ2VsbHNUb1dpZHRoKTtcclxuICB9XHJcbiAgcm9vdCA9IGNyZWF0ZVJlZigpO1xyXG4gIGNvbHVtbnMgPSBwcm9wcyA9PiBwcm9wcy5jb2x1bW5zO1xyXG4gIHBpbm5lZENvbHVtbnMgPSBwcm9wcyA9PiBwcm9wcy5waW5uZWRDb2x1bW5zO1xyXG4gIHVucGlubmVkQ29sdW1ucyA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuY29sdW1ucywgdGhpcy5waW5uZWRDb2x1bW5zLCAoY29sdW1ucywgcGlubmVkQ29sdW1ucykgPT5cclxuICAgICFBcnJheS5pc0FycmF5KHBpbm5lZENvbHVtbnMpID8gY29sdW1ucyA6IGNvbHVtbnMuZmlsdGVyKGMgPT4gIXBpbm5lZENvbHVtbnMuaW5jbHVkZXMoYykpXHJcbiAgKTtcclxuXHJcbiAgdG9nZ2xlTW9yZU9wdGlvbnMgPSBtb3JlT3B0aW9uc0NvbHVtbiA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1vcmVPcHRpb25zQ29sdW1uOlxyXG4gICAgICAgIHRoaXMuc3RhdGUubW9yZU9wdGlvbnNDb2x1bW4gPT09IG1vcmVPcHRpb25zQ29sdW1uID8gbnVsbCA6IG1vcmVPcHRpb25zQ29sdW1uXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0Q2VsbFNpemVDYWNoZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtjZWxsU2l6ZUNhY2hlOiBwcm9wc0NhY2hlLCBmaXhlZFdpZHRoLCBwaW5uZWRDb2x1bW5zfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB1bnBpbm5lZENvbHVtbnMgPSB0aGlzLnVucGlubmVkQ29sdW1ucyh0aGlzLnByb3BzKTtcclxuXHJcbiAgICBjb25zdCB3aWR0aCA9IGZpeGVkV2lkdGggPyBmaXhlZFdpZHRoIDogdGhpcy5yb290LmN1cnJlbnQgPyB0aGlzLnJvb3QuY3VycmVudC5jbGllbnRXaWR0aCA6IDA7XHJcblxyXG4gICAgLy8gcGluIGNvbHVtbiBib3JkZXIgaXMgMiBwaXhlbCB2cyAxIHBpeGVsXHJcbiAgICBjb25zdCBhZGp1c3RXaWR0aCA9IHBpbm5lZENvbHVtbnMubGVuZ3RoID8gd2lkdGggLSAxIDogd2lkdGg7XHJcbiAgICBjb25zdCB7Y2VsbFNpemVDYWNoZSwgZ2hvc3R9ID0gYWRqdXN0Q2VsbHNUb0NvbnRhaW5lcihcclxuICAgICAgYWRqdXN0V2lkdGgsXHJcbiAgICAgIHByb3BzQ2FjaGUsXHJcbiAgICAgIHBpbm5lZENvbHVtbnMsXHJcbiAgICAgIHVucGlubmVkQ29sdW1uc1xyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNlbGxTaXplQ2FjaGUsXHJcbiAgICAgIGdob3N0XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGRvU2NhbGVDZWxsc1RvV2lkdGggPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0Q2VsbFNpemVDYWNoZSgpKTtcclxuICB9O1xyXG5cclxuICBzY2FsZUNlbGxzVG9XaWR0aCA9IGRlYm91bmNlKHRoaXMuZG9TY2FsZUNlbGxzVG9XaWR0aCwgMzAwKTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge3Jvd3MsIHBpbm5lZENvbHVtbnMsIHRoZW1lID0ge30sIGZpeGVkV2lkdGgsIGZpeGVkSGVpZ2h0fSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB1bnBpbm5lZENvbHVtbnMgPSB0aGlzLnVucGlubmVkQ29sdW1ucyh0aGlzLnByb3BzKTtcclxuXHJcbiAgICBjb25zdCB7Y2VsbFNpemVDYWNoZSwgbW9yZU9wdGlvbnNDb2x1bW4sIGdob3N0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB1bnBpbm5lZENvbHVtbnNHaG9zdCA9IGdob3N0ID8gWy4uLnVucGlubmVkQ29sdW1ucywge2dob3N0OiB0cnVlfV0gOiB1bnBpbm5lZENvbHVtbnM7XHJcbiAgICBjb25zdCBwaW5uZWRDb2x1bW5zV2lkdGggPSBwaW5uZWRDb2x1bW5zLnJlZHVjZShcclxuICAgICAgKGFjYywgdmFsKSA9PiBhY2MgKyBnZXQoY2VsbFNpemVDYWNoZSwgdmFsLCAwKSxcclxuICAgICAgMFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoYXNQaW5uZWRDb2x1bW5zID0gQm9vbGVhbihwaW5uZWRDb2x1bW5zLmxlbmd0aCk7XHJcbiAgICBjb25zdCB7aGVhZGVyUm93SGVpZ2h0ID0gZGVmYXVsdEhlYWRlclJvd0hlaWdodCwgcm93SGVpZ2h0ID0gZGVmYXVsdFJvd0hlaWdodH0gPSB0aGVtZTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJHcmlkUHJvcHMgPSB7XHJcbiAgICAgIGNlbGxTaXplQ2FjaGUsXHJcbiAgICAgIGNsYXNzTmFtZTogJ2hlYWRlci1ncmlkJyxcclxuICAgICAgaGVpZ2h0OiBoZWFkZXJSb3dIZWlnaHQsXHJcbiAgICAgIHJvd0NvdW50OiAxLFxyXG4gICAgICByb3dIZWlnaHQ6IGhlYWRlclJvd0hlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkYXRhR3JpZFByb3BzID0ge1xyXG4gICAgICBjZWxsU2l6ZUNhY2hlLFxyXG4gICAgICBvdmVyc2NhbkNvbHVtbkNvdW50LFxyXG4gICAgICBvdmVyc2NhblJvd0NvdW50LFxyXG4gICAgICByb3dDb3VudDogKHJvd3MgfHwgW10pLmxlbmd0aCxcclxuICAgICAgcm93SGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiZGF0YS10YWJsZS1jb250YWluZXJcIiByZWY9e3RoaXMucm9vdH0+XHJcbiAgICAgICAge09iamVjdC5rZXlzKGNlbGxTaXplQ2FjaGUpLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICA8U2Nyb2xsU3luYz5cclxuICAgICAgICAgICAgeyh7b25TY3JvbGwsIHNjcm9sbExlZnQsIHNjcm9sbFRvcH0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzLXRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAge2hhc1Bpbm5lZENvbHVtbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwicGlubmVkLWNvbHVtbnNcIiBjbGFzc05hbWU9XCJwaW5uZWQtY29sdW1ucyBncmlkLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6ICdwaW5uZWQtY29sdW1ucy0taGVhZGVyIHBpbm5lZC1ncmlkLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogJ3Bpbm5lZC1jb2x1bW5zLS1yb3dzIHBpbm5lZC1ncmlkLWNvbnRhaW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNQaW5uZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17cGlubmVkQ29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyR3JpZFByb3BzPXtoZWFkZXJHcmlkUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkV2lkdGg9e3Bpbm5lZENvbHVtbnNXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TY3JvbGw9e2FyZ3MgPT4gb25TY3JvbGwoey4uLmFyZ3MsIHNjcm9sbExlZnR9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wPXtzY3JvbGxUb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFHcmlkUHJvcHM9e2RhdGFHcmlkUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEdyaWRSZWY9e3Bpbm5lZEdyaWQgPT4gKHRoaXMucGlubmVkR3JpZCA9IHBpbm5lZEdyaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aD17Y29sdW1uV2lkdGhGdW5jdGlvbihwaW5uZWRDb2x1bW5zLCBjZWxsU2l6ZUNhY2hlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ2VsbFJlbmRlcj17cmVuZGVySGVhZGVyQ2VsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwaW5uZWRDb2x1bW5zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vcmVPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVPcHRpb25zQ29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDZWxsUmVuZGVyPXtyZW5kZXJEYXRhQ2VsbChwaW5uZWRDb2x1bW5zLCB0cnVlLCB0aGlzLnByb3BzKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJ1bnBpbm5lZC1jb2x1bW5zXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogYCR7aGFzUGlubmVkQ29sdW1ucyA/IGAke3Bpbm5lZENvbHVtbnNXaWR0aH1weGAgOiAnMCd9YFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5waW5uZWQtY29sdW1ucyBncmlkLWNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAndW5waW5uZWQtY29sdW1ucy0taGVhZGVyIHVucGlubmVkLWdyaWQtY29udGFpbmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93czogJ3VucGlubmVkLWNvbHVtbnMtLXJvd3MgdW5waW5uZWQtZ3JpZC1jb250YWluZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNQaW5uZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17dW5waW5uZWRDb2x1bW5zR2hvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICBnaG9zdD17Z2hvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJHcmlkUHJvcHM9e2hlYWRlckdyaWRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgIGZpeGVkV2lkdGg9e2ZpeGVkV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaXhlZEhlaWdodD17Zml4ZWRIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblNjcm9sbD17b25TY3JvbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A9e3Njcm9sbFRvcH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ9e3Njcm9sbExlZnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhR3JpZFByb3BzPXtkYXRhR3JpZFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0R3JpZFJlZj17dW5waW5uZWRHcmlkID0+ICh0aGlzLnVucGlubmVkR3JpZCA9IHVucGlubmVkR3JpZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aD17Y29sdW1uV2lkdGhGdW5jdGlvbih1bnBpbm5lZENvbHVtbnNHaG9zdCwgY2VsbFNpemVDYWNoZSwgZ2hvc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ2VsbFJlbmRlcj17cmVuZGVySGVhZGVyQ2VsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5waW5uZWRDb2x1bW5zR2hvc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vcmVPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JlT3B0aW9uc0NvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFDZWxsUmVuZGVyPXtyZW5kZXJEYXRhQ2VsbCh1bnBpbm5lZENvbHVtbnNHaG9zdCwgZmFsc2UsIHRoaXMucHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIDwvU2Nyb2xsU3luYz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBEYXRhVGFibGVGYWN0b3J5KCkge1xyXG4gIHJldHVybiB3aXRoVGhlbWUoRGF0YVRhYmxlKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVRhYmxlRmFjdG9yeTtcclxuIl19