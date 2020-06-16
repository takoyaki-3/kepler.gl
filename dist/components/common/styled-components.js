"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFilterContent = exports.MapControlButton = exports.BottomWidgetInner = exports.WidgetContainer = exports.StyledType = exports.StyledFilteredOption = exports.StyledExportSection = exports.StyledAttrbution = exports.StyledMapContainer = exports.StyledModalInputFootnote = exports.StyledModalSection = exports.StyledModalVerticalPanel = exports.StyledModalContent = exports.Table = exports.SelectionButton = exports.DatasetSquare = exports.ButtonGroup = exports.StyledPanelDropdown = exports.StyledPanelHeader = exports.InlineInput = exports.TextAreaLight = exports.TextArea = exports.InputLight = exports.Input = exports.Button = exports.Tooltip = exports.SidePanelDivider = exports.SidePanelSection = exports.PanelContent = exports.PanelHeaderContent = exports.PanelHeaderTitle = exports.PanelLabelBold = exports.PanelLabelWrapper = exports.PanelLabel = exports.SBFlexboxNoMargin = exports.SBFlexboxItem = exports.SpaceBetweenFlexbox = exports.CenterVerticalFlexbox = exports.CenterFlexbox = exports.IconRoundSmall = exports.SelectTextBold = exports.SelectText = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _mediaBreakpoints = require("../../styles/media-breakpoints");

var _classnames = _interopRequireDefault(require("classnames"));

function _templateObject46() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px;\n"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);\n  height: 32px;\n  width: 32px;\n  padding: 0;\n  border-radius: 0;\n  background-color: ", ";\n  color: ", ";\n\n  :hover,\n  :focus,\n  :active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n  svg {\n    margin-right: 0;\n  }\n"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: ", ";\n  position: relative;\n  margin-top: ", "px;\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: 1;\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 2px;\n  border: 1px solid\n    ", ";\n  color: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  height: 100px;\n  margin: 4px;\n  padding: 6px 10px;\n  width: 100px;\n\n  :hover {\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-radius: 2px;\n  border: 1px solid\n    ", ";\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  height: 60px;\n  justify-content: center;\n  margin: 4px;\n  padding: 8px 12px;\n  width: 140px;\n\n  :hover {\n    border: 1px solid ", ";\n  }\n\n  .filter-option-title {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 500;\n  }\n  .filter-option-subtitle {\n    color: ", ";\n    font-size: 11px;\n  }\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  margin: 35px 0;\n  width: 100%;\n  color: ", ";\n  font-size: 12px;\n  opacity: ", ";\n  pointer-events: ", ";\n\n  .description {\n    width: 185px;\n    .title {\n      font-weight: 500;\n    }\n    .subtitle {\n      color: ", ";\n      font-size: 11px;\n    }\n  }\n  .warning {\n    color: ", ";\n    font-weight: 500;\n  }\n  .description.full {\n    width: 100%;\n  }\n  .selection {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1;\n    padding-left: 50px;\n\n    select {\n      background-color: white;\n      border-radius: 1px;\n      display: inline-block;\n      font: inherit;\n      line-height: 1.5em;\n      padding: 0.5em 3.5em 0.5em 1em;\n      margin: 0;\n      box-sizing: border-box;\n      appearance: none;\n      width: 250px;\n      height: 36px;\n\n      background-image: linear-gradient(45deg, transparent 50%, gray 50%),\n        linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);\n      background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),\n        calc(100% - 2.5em) 4.5em;\n      background-size: 5px 5px, 5px 5px, 1px 1.5em;\n      background-repeat: no-repeat;\n    }\n\n    select:focus {\n      background-image: linear-gradient(45deg, green 50%, transparent 50%),\n        linear-gradient(135deg, transparent 50%, green 50%), linear-gradient(to right, #ccc, #ccc);\n      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 4.5em;\n      background-size: 5px 5px, 5px 5px, 1px 1.5em;\n      background-repeat: no-repeat;\n      border-color: green;\n      outline: 0;\n    }\n  }\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  display: block;\n  margin: 0 10px 2px;\n  z-index: 999;\n  a {\n    color: black;\n    font-size: 10px;\n  }\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .mapboxgl-map {\n    .mapboxgl-missing-css {\n      display: none;\n    }\n    .mapboxgl-ctrl-attrib {\n      display: none;\n    }\n  }\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  color: ", ";\n  font-size: 10px;\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 24px;\n  "]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 32px;\n\n  .modal-section-title {\n    font-weight: 500;\n  }\n  .modal-section-subtitle {\n    color: ", ";\n  }\n\n  input {\n    margin-top: 8px;\n  }\n\n  ", ";\n  ", ";\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      margin-top: 0;\n    "]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  font-size: 12px;\n\n  .modal-section:first-child {\n    margin-top: 24px;\n    ", ";\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n    padding: 16px ", ";\n    margin: 0 -", ";\n  "]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  font-size: 10px;\n  padding: 24px ", ";\n  margin: 0 -", ";\n  justify-content: space-between;\n  ", ";\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  border-spacing: 0;\n\n  thead {\n    tr th {\n      background: ", ";\n      color: ", ";\n      padding: 18px 12px;\n      text-align: start;\n    }\n  }\n\n  tbody {\n    tr td {\n      border-bottom: ", ";\n      padding: 12px;\n    }\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 2px;\n  border: 1px solid\n    ", ";\n  color: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  margin-right: 6px;\n  padding: 6px 10px;\n\n  :hover {\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background-color: rgb(", ");\n  margin-right: 12px;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  .button {\n    border-radius: 0;\n    margin-left: 2px;\n  }\n  .button:first-child {\n    border-bottom-left-radius: ", ";\n    border-top-left-radius: ", ";\n    margin-left: 0;\n  }\n  .button:last-child {\n    border-bottom-right-radius: ", ";\n    border-top-right-radius: ", ";\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  background-color: ", ";\n  overflow-y: auto;\n  box-shadow: ", ";\n  border-radius: ", ";\n  margin-top: 2px;\n  max-height: 500px;\n  position: relative;\n  z-index: 999;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-left: 3px solid\n    rgb(\n      ", "\n    );\n  padding: 0 10px 0 0;\n  height: ", "px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: ", ";\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  height: auto;\n  white-space: pre-wrap;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: ", ";\n  font-weight: 500;\n  justify-content: center;\n  letter-spacing: 0.3px;\n  line-height: 14px;\n  outline: 0;\n  padding: ", ";\n  text-align: center;\n  transition: ", ";\n  vertical-align: middle;\n  width: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n\n  :hover,\n  :focus,\n  :active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  svg {\n    margin-right: ", ";\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.__react_component_tooltip {\n    font-size: 9.5px;\n    font-weight: 500;\n    padding: 7px 18px;\n\n    &.type-dark {\n      background-color: ", ";\n      color: ", ";\n      &.place-bottom {\n        :after {\n          border-bottom-color: ", ";\n        }\n      }\n\n      &.place-top {\n        :after {\n          border-top-color: ", ";\n        }\n      }\n\n      &.place-right {\n        :after {\n          border-right-color: ", ";\n        }\n      }\n\n      &.place-left {\n        :after {\n          border-left-color: ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom: 1px solid ", ";\n  height: 12px;\n  margin-bottom: 12px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 12px;\n  opacity: ", ";\n  pointer-events: ", ";\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  padding-left: 12px;\n\n  .icon {\n    color: ", ";\n    display: flex;\n    align-items: center;\n    margin-right: 12px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 13px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 500;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: self-start;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 400;\n  margin-bottom: 4px;\n  text-transform: capitalize;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n  margin-left: 16px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-left: -16px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: ", "; // updated after checking sketch file\n  color: ", ";\n  align-items: center;\n  justify-content: center;\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: 500;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: 400;\n\n  i {\n    font-size: 13px;\n    margin-right: 6px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SelectText = _styledComponents["default"].span(_templateObject(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.selectFontSize;
});

exports.SelectText = SelectText;
var SelectTextBold = (0, _styledComponents["default"])(SelectText)(_templateObject2(), function (props) {
  return props.theme.textColor;
});
exports.SelectTextBold = SelectTextBold;

var IconRoundSmall = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.secondaryBtnBgdHover;
}, function (props) {
  return props.theme.secondaryBtnColor;
}, function (props) {
  return props.theme.secondaryBtnBgdHover;
});

exports.IconRoundSmall = IconRoundSmall;

var CenterFlexbox = _styledComponents["default"].div(_templateObject4());

exports.CenterFlexbox = CenterFlexbox;

var CenterVerticalFlexbox = _styledComponents["default"].div(_templateObject5());

exports.CenterVerticalFlexbox = CenterVerticalFlexbox;

var SpaceBetweenFlexbox = _styledComponents["default"].div(_templateObject6());

exports.SpaceBetweenFlexbox = SpaceBetweenFlexbox;

var SBFlexboxItem = _styledComponents["default"].div(_templateObject7());

exports.SBFlexboxItem = SBFlexboxItem;

var SBFlexboxNoMargin = _styledComponents["default"].div(_templateObject8());

exports.SBFlexboxNoMargin = SBFlexboxNoMargin;

var PanelLabel = _styledComponents["default"].label.attrs({
  className: 'side-panel-panel__label'
})(_templateObject9(), function (props) {
  return props.theme.labelColor;
});

exports.PanelLabel = PanelLabel;

var PanelLabelWrapper = _styledComponents["default"].div.attrs({
  className: 'side-panel-panel__label-wrapper'
})(_templateObject10());

exports.PanelLabelWrapper = PanelLabelWrapper;
var PanelLabelBold = (0, _styledComponents["default"])(PanelLabel)(_templateObject11());
exports.PanelLabelBold = PanelLabelBold;

var PanelHeaderTitle = _styledComponents["default"].span.attrs({
  className: 'side-panel-panel__header__title'
})(_templateObject12(), function (props) {
  return props.theme.textColor;
});

exports.PanelHeaderTitle = PanelHeaderTitle;

var PanelHeaderContent = _styledComponents["default"].div(_templateObject13(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.labelColor;
});

exports.PanelHeaderContent = PanelHeaderContent;

var PanelContent = _styledComponents["default"].div.attrs({
  className: 'side-panel-panel__content'
})(_templateObject14(), function (props) {
  return props.theme.panelBackground;
});

exports.PanelContent = PanelContent;

var SidePanelSection = _styledComponents["default"].div.attrs({
  className: 'side-panel-section'
})(_templateObject15(), function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
});

exports.SidePanelSection = SidePanelSection;

var SidePanelDivider = _styledComponents["default"].div.attrs({
  className: 'side-panel-divider'
})(_templateObject16(), function (props) {
  return props.theme.panelBorderColor;
});

exports.SidePanelDivider = SidePanelDivider;
var Tooltip = (0, _styledComponents["default"])(_reactTooltip["default"])(_templateObject17(), function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipColor;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
});
exports.Tooltip = Tooltip;

var Button = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: (0, _classnames["default"])('button', props.className)
  };
})(_templateObject18(), function (props) {
  return props.negative ? props.theme.negativeBtnBgd : props.secondary ? props.theme.secondaryBtnBgd : props.link ? props.theme.linkBtnBgd : props.floating ? props.theme.floatingBtnBgd : props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.negative ? props.theme.negativeBtnColor : props.secondary ? props.theme.secondaryBtnColor : props.link ? props.theme.linkBtnColor : props.floating ? props.theme.floatingBtnColor : props.theme.primaryBtnColor;
}, function (props) {
  return props.large ? '14px' : props.small ? '10px' : '11px';
}, function (props) {
  return props.large ? '14px 32px' : props.small ? '6px 9px' : '9px 12px';
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.width || 'auto';
}, function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return props.negative ? props.theme.negativeBtnBgdHover : props.secondary ? props.theme.secondaryBtnBgdHover : props.link ? props.theme.linkBtnActBgdHover : props.floating ? props.theme.floatingBtnBgdHover : props.theme.primaryBtnBgdHover;
}, function (props) {
  return props.negative ? props.theme.negativeBtnActColor : props.secondary ? props.theme.secondaryBtnActColor : props.link ? props.theme.linkBtnActColor : props.floating ? props.theme.floatingBtnActColor : props.theme.primaryBtnActColor;
}, function (props) {
  return props.large ? '10px' : props.small ? '6px' : '8px';
});

exports.Button = Button;

var Input = _styledComponents["default"].input(_templateObject19(), function (props) {
  return props.secondary ? props.theme.secondaryInput : props.theme.input;
});

exports.Input = Input;

var InputLight = _styledComponents["default"].input(_templateObject20(), function (props) {
  return props.theme.inputLT;
});

exports.InputLight = InputLight;

var TextArea = _styledComponents["default"].textarea(_templateObject21(), function (props) {
  return props.secondary ? props.theme.secondaryInput : props.theme.input;
});

exports.TextArea = TextArea;

var TextAreaLight = _styledComponents["default"].textarea(_templateObject22(), function (props) {
  return props.theme.inputLT;
});

exports.TextAreaLight = TextAreaLight;
var InlineInput = (0, _styledComponents["default"])(Input)(_templateObject23(), function (props) {
  return props.theme.inlineInput;
});
exports.InlineInput = InlineInput;

var StyledPanelHeader = _styledComponents["default"].div(_templateObject24(), function (props) {
  return props.active ? props.theme.panelBackgroundHover : props.theme.panelBackground;
}, function (props) {
  return props.labelRCGColorValues ? props.labelRCGColorValues.join(',') : 'transparent';
}, function (props) {
  return props.theme.panelHeaderHeight;
}, function (props) {
  return props.theme.transition;
});

exports.StyledPanelHeader = StyledPanelHeader;

var StyledPanelDropdown = _styledComponents["default"].div(_templateObject25(), function (props) {
  return props.theme.panelDropdownScrollBar;
}, function (props) {
  return props.type === 'light' ? props.theme.modalDropdownBackground : props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBoxShadow;
}, function (props) {
  return props.theme.panelBorderRadius;
});

exports.StyledPanelDropdown = StyledPanelDropdown;

var ButtonGroup = _styledComponents["default"].div(_templateObject26(), function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
});

exports.ButtonGroup = ButtonGroup;

var DatasetSquare = _styledComponents["default"].div(_templateObject27(), function (props) {
  return props.color.join(',');
});

exports.DatasetSquare = DatasetSquare;

var SelectionButton = _styledComponents["default"].div(_templateObject28(), function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
});

exports.SelectionButton = SelectionButton;

var Table = _styledComponents["default"].table(_templateObject29(), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.titleColorLT;
}, function (props) {
  return props.theme.panelBorderLT;
});

exports.Table = Table;

var StyledModalContent = _styledComponents["default"].div(_templateObject30(), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.modalLateralPadding;
}, function (props) {
  return props.theme.modalLateralPadding;
}, _mediaBreakpoints.media.portable(_templateObject31(), function (props) {
  return props.theme.modalPortableLateralPadding;
}, function (props) {
  return props.theme.modalPortableLateralPadding;
}));

exports.StyledModalContent = StyledModalContent;

var StyledModalVerticalPanel = _styledComponents["default"].div.attrs({
  className: 'modal-vertical-panel'
})(_templateObject32(), _mediaBreakpoints.media.palm(_templateObject33()));

exports.StyledModalVerticalPanel = StyledModalVerticalPanel;

var StyledModalSection = _styledComponents["default"].div.attrs({
  className: 'modal-section'
})(_templateObject34(), function (props) {
  return props.theme.subtextColorLT;
}, _mediaBreakpoints.media.portable(_templateObject35()), _mediaBreakpoints.media.palm(_templateObject36()));

exports.StyledModalSection = StyledModalSection;

var StyledModalInputFootnote = _styledComponents["default"].div.attrs({
  className: 'modal-input__footnote'
})(_templateObject37(), function (props) {
  return props.error ? props.theme.errorColor : props.theme.subtextColorLT;
});
/**
 * Newer versions of mapbox.gl display an error message banner on top of the map by default
 * which will cause the map to display points in the wrong locations
 * This workaround will hide the error banner.
 */


exports.StyledModalInputFootnote = StyledModalInputFootnote;

var StyledMapContainer = _styledComponents["default"].div(_templateObject38());

exports.StyledMapContainer = StyledMapContainer;

var StyledAttrbution = _styledComponents["default"].div.attrs({
  className: 'mapbox-attribution-container'
})(_templateObject39());

exports.StyledAttrbution = StyledAttrbution;

var StyledExportSection = _styledComponents["default"].div(_templateObject40(), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.disabled ? 0.3 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return props.theme.subtextColorLT;
}, function (props) {
  return props.theme.errorColor;
});

exports.StyledExportSection = StyledExportSection;

var StyledFilteredOption = _styledComponents["default"].div(_templateObject41(), function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.textColor;
});

exports.StyledFilteredOption = StyledFilteredOption;

var StyledType = _styledComponents["default"].div(_templateObject42(), function (props) {
  return props.selected ? props.theme.primaryBtnBgdHover : props.theme.selectBorderColorLT;
}, function (props) {
  return props.selected ? props.theme.primaryBtnBgdHover : props.theme.selectBorderColorLT;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
});

exports.StyledType = StyledType;

var WidgetContainer = _styledComponents["default"].div(_templateObject43());

exports.WidgetContainer = WidgetContainer;

var BottomWidgetInner = _styledComponents["default"].div(_templateObject44(), function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return "".concat(props.theme.bottomInnerPdVert, "px ").concat(props.theme.bottomInnerPdSide, "px");
}, function (props) {
  return props.theme.bottomPanelGap;
});

exports.BottomWidgetInner = BottomWidgetInner;
var MapControlButton = (0, _styledComponents["default"])(Button).attrs({
  className: 'map-control-button'
})(_templateObject45(), function (props) {
  return props.active ? props.theme.floatingBtnBgdHover : props.theme.floatingBtnBgd;
}, function (props) {
  return props.active ? props.theme.floatingBtnActColor : props.theme.floatingBtnColor;
}, function (props) {
  return props.theme.floatingBtnBgdHover;
}, function (props) {
  return props.theme.floatingBtnActColor;
});
exports.MapControlButton = MapControlButton;

var StyledFilterContent = _styledComponents["default"].div(_templateObject46(), function (props) {
  return props.theme.panelBackground;
});

exports.StyledFilterContent = StyledFilterContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cy5qcyJdLCJuYW1lcyI6WyJTZWxlY3RUZXh0Iiwic3R5bGVkIiwic3BhbiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwic2VsZWN0Rm9udFNpemUiLCJTZWxlY3RUZXh0Qm9sZCIsInRleHRDb2xvciIsIkljb25Sb3VuZFNtYWxsIiwiZGl2Iiwic2Vjb25kYXJ5QnRuQmdkSG92ZXIiLCJzZWNvbmRhcnlCdG5Db2xvciIsIkNlbnRlckZsZXhib3giLCJDZW50ZXJWZXJ0aWNhbEZsZXhib3giLCJTcGFjZUJldHdlZW5GbGV4Ym94IiwiU0JGbGV4Ym94SXRlbSIsIlNCRmxleGJveE5vTWFyZ2luIiwiUGFuZWxMYWJlbCIsImxhYmVsIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJQYW5lbExhYmVsV3JhcHBlciIsIlBhbmVsTGFiZWxCb2xkIiwiUGFuZWxIZWFkZXJUaXRsZSIsIlBhbmVsSGVhZGVyQ29udGVudCIsIlBhbmVsQ29udGVudCIsInBhbmVsQmFja2dyb3VuZCIsIlNpZGVQYW5lbFNlY3Rpb24iLCJkaXNhYmxlZCIsIlNpZGVQYW5lbERpdmlkZXIiLCJwYW5lbEJvcmRlckNvbG9yIiwiVG9vbHRpcCIsIlJlYWN0VG9vbHRpcCIsInRvb2x0aXBCZyIsInRvb2x0aXBDb2xvciIsIkJ1dHRvbiIsIm5lZ2F0aXZlIiwibmVnYXRpdmVCdG5CZ2QiLCJzZWNvbmRhcnkiLCJzZWNvbmRhcnlCdG5CZ2QiLCJsaW5rIiwibGlua0J0bkJnZCIsImZsb2F0aW5nIiwiZmxvYXRpbmdCdG5CZ2QiLCJwcmltYXJ5QnRuQmdkIiwicHJpbWFyeUJ0blJhZGl1cyIsIm5lZ2F0aXZlQnRuQ29sb3IiLCJsaW5rQnRuQ29sb3IiLCJmbG9hdGluZ0J0bkNvbG9yIiwicHJpbWFyeUJ0bkNvbG9yIiwibGFyZ2UiLCJzbWFsbCIsInRyYW5zaXRpb24iLCJ3aWR0aCIsIm5lZ2F0aXZlQnRuQmdkSG92ZXIiLCJsaW5rQnRuQWN0QmdkSG92ZXIiLCJmbG9hdGluZ0J0bkJnZEhvdmVyIiwicHJpbWFyeUJ0bkJnZEhvdmVyIiwibmVnYXRpdmVCdG5BY3RDb2xvciIsInNlY29uZGFyeUJ0bkFjdENvbG9yIiwibGlua0J0bkFjdENvbG9yIiwiZmxvYXRpbmdCdG5BY3RDb2xvciIsInByaW1hcnlCdG5BY3RDb2xvciIsIklucHV0IiwiaW5wdXQiLCJzZWNvbmRhcnlJbnB1dCIsIklucHV0TGlnaHQiLCJpbnB1dExUIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIlRleHRBcmVhTGlnaHQiLCJJbmxpbmVJbnB1dCIsImlubGluZUlucHV0IiwiU3R5bGVkUGFuZWxIZWFkZXIiLCJhY3RpdmUiLCJwYW5lbEJhY2tncm91bmRIb3ZlciIsImxhYmVsUkNHQ29sb3JWYWx1ZXMiLCJqb2luIiwicGFuZWxIZWFkZXJIZWlnaHQiLCJTdHlsZWRQYW5lbERyb3Bkb3duIiwicGFuZWxEcm9wZG93blNjcm9sbEJhciIsInR5cGUiLCJtb2RhbERyb3Bkb3duQmFja2dyb3VuZCIsInBhbmVsQm94U2hhZG93IiwicGFuZWxCb3JkZXJSYWRpdXMiLCJCdXR0b25Hcm91cCIsIkRhdGFzZXRTcXVhcmUiLCJjb2xvciIsIlNlbGVjdGlvbkJ1dHRvbiIsInNlbGVjdGVkIiwic2VsZWN0Qm9yZGVyQ29sb3JMVCIsImF2YWlsYWJsZSIsIlRhYmxlIiwidGFibGUiLCJwYW5lbEJhY2tncm91bmRMVCIsInRpdGxlQ29sb3JMVCIsInBhbmVsQm9yZGVyTFQiLCJTdHlsZWRNb2RhbENvbnRlbnQiLCJ0ZXh0Q29sb3JMVCIsIm1vZGFsTGF0ZXJhbFBhZGRpbmciLCJtZWRpYSIsInBvcnRhYmxlIiwibW9kYWxQb3J0YWJsZUxhdGVyYWxQYWRkaW5nIiwiU3R5bGVkTW9kYWxWZXJ0aWNhbFBhbmVsIiwicGFsbSIsIlN0eWxlZE1vZGFsU2VjdGlvbiIsInN1YnRleHRDb2xvckxUIiwiU3R5bGVkTW9kYWxJbnB1dEZvb3Rub3RlIiwiZXJyb3IiLCJlcnJvckNvbG9yIiwiU3R5bGVkTWFwQ29udGFpbmVyIiwiU3R5bGVkQXR0cmJ1dGlvbiIsIlN0eWxlZEV4cG9ydFNlY3Rpb24iLCJTdHlsZWRGaWx0ZXJlZE9wdGlvbiIsIlN0eWxlZFR5cGUiLCJXaWRnZXRDb250YWluZXIiLCJCb3R0b21XaWRnZXRJbm5lciIsImJvdHRvbUlubmVyUGRWZXJ0IiwiYm90dG9tSW5uZXJQZFNpZGUiLCJib3R0b21QYW5lbEdhcCIsIk1hcENvbnRyb2xCdXR0b24iLCJTdHlsZWRGaWx0ZXJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsVUFBVSxHQUFHQyw2QkFBT0MsSUFBVixvQkFDWixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0FETyxFQUVSLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FB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SyxDQUFDQyxLQUFOLENBQVltSCxpQkFBdEQ7QUFBQSxDQUZZLEVBSWQsVUFBQXBILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWW9ILGNBQWhCO0FBQUEsQ0FKUyxDQUF2Qjs7O0FBT0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0NBQU9yRixNQUFQLEVBQWVoQixLQUFmLENBQXFCO0FBQ25EQyxFQUFBQSxTQUFTLEVBQUU7QUFEd0MsQ0FBckIsQ0FBSCxzQkFRUCxVQUFBbEIsS0FBSztBQUFBLFNBQ3ZCQSxLQUFLLENBQUN3RSxNQUFOLEdBQWV4RSxLQUFLLENBQUNDLEtBQU4sQ0FBWXFELG1CQUEzQixHQUFpRHRELEtBQUssQ0FBQ0MsS0FBTixDQUFZd0MsY0FEdEM7QUFBQSxDQVJFLEVBVWxCLFVBQUF6QyxLQUFLO0FBQUEsU0FDWkEsS0FBSyxDQUFDd0UsTUFBTixHQUFleEUsS0FBSyxDQUFDQyxLQUFOLENBQVkwRCxtQkFBM0IsR0FBaUQzRCxLQUFLLENBQUNDLEtBQU4sQ0FBWTZDLGdCQURqRDtBQUFBLENBVmEsRUFpQkwsVUFBQTlDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXFELG1CQUFoQjtBQUFBLENBakJBLEVBa0JoQixVQUFBdEQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZMEQsbUJBQWhCO0FBQUEsQ0FsQlcsQ0FBdEI7OztBQXlCQSxJQUFNNEQsbUJBQW1CLEdBQUd6SCw2QkFBT1MsR0FBVixzQkFDVixVQUFBUCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVl1QixlQUFoQjtBQUFBLENBREssQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJztcclxuaW1wb3J0IHttZWRpYX0gZnJvbSAnc3R5bGVzL21lZGlhLWJyZWFrcG9pbnRzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0VGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xyXG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RGb250U2l6ZX07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0VGV4dEJvbGQgPSBzdHlsZWQoU2VsZWN0VGV4dClgXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb25Sb3VuZFNtYWxsID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQmdkSG92ZXJ9OyAvLyB1cGRhdGVkIGFmdGVyIGNoZWNraW5nIHNrZXRjaCBmaWxlXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQ29sb3J9O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkJnZEhvdmVyfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2VudGVyRmxleGJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENlbnRlclZlcnRpY2FsRmxleGJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3BhY2VCZXR3ZWVuRmxleGJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNCRmxleGJveEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTQkZsZXhib3hOb01hcmdpbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFuZWxMYWJlbCA9IHN0eWxlZC5sYWJlbC5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1wYW5lbF9fbGFiZWwnXHJcbn0pYFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFuZWxMYWJlbFdyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXBhbmVsX19sYWJlbC13cmFwcGVyJ1xyXG59KWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzZWxmLXN0YXJ0O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhbmVsTGFiZWxCb2xkID0gc3R5bGVkKFBhbmVsTGFiZWwpYFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXJUaXRsZSA9IHN0eWxlZC5zcGFuLmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXBhbmVsX19oZWFkZXJfX3RpdGxlJ1xyXG59KWBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC40M3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhbmVsSGVhZGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG5cclxuICAuaWNvbiB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXBhbmVsX19jb250ZW50J1xyXG59KWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XHJcbiAgcGFkZGluZzogMTJweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlUGFuZWxTZWN0aW9uID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1zZWN0aW9uJ1xyXG59KWBcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC40IDogMSl9O1xyXG4gIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/ICdub25lJyA6ICdhbGwnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZVBhbmVsRGl2aWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWwtZGl2aWRlcidcclxufSlgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3JkZXJDb2xvcn07XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVG9vbHRpcCA9IHN0eWxlZChSZWFjdFRvb2x0aXApYFxyXG4gICYuX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcCB7XHJcbiAgICBmb250LXNpemU6IDkuNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDdweCAxOHB4O1xyXG5cclxuICAgICYudHlwZS1kYXJrIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQ29sb3J9O1xyXG4gICAgICAmLnBsYWNlLWJvdHRvbSB7XHJcbiAgICAgICAgOmFmdGVyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYucGxhY2UtdG9wIHtcclxuICAgICAgICA6YWZ0ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5wbGFjZS1yaWdodCB7XHJcbiAgICAgICAgOmFmdGVyIHtcclxuICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5wbGFjZS1sZWZ0IHtcclxuICAgICAgICA6YWZ0ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xyXG4gIGNsYXNzTmFtZTogY2xhc3NuYW1lcygnYnV0dG9uJywgcHJvcHMuY2xhc3NOYW1lKVxyXG59KSlgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5uZWdhdGl2ZVxyXG4gICAgICA/IHByb3BzLnRoZW1lLm5lZ2F0aXZlQnRuQmdkXHJcbiAgICAgIDogcHJvcHMuc2Vjb25kYXJ5XHJcbiAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQmdkXHJcbiAgICAgIDogcHJvcHMubGlua1xyXG4gICAgICA/IHByb3BzLnRoZW1lLmxpbmtCdG5CZ2RcclxuICAgICAgOiBwcm9wcy5mbG9hdGluZ1xyXG4gICAgICA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQmdkXHJcbiAgICAgIDogcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZH07XHJcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuUmFkaXVzfTtcclxuICBjb2xvcjogJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMubmVnYXRpdmVcclxuICAgICAgPyBwcm9wcy50aGVtZS5uZWdhdGl2ZUJ0bkNvbG9yXHJcbiAgICAgIDogcHJvcHMuc2Vjb25kYXJ5XHJcbiAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQ29sb3JcclxuICAgICAgOiBwcm9wcy5saW5rXHJcbiAgICAgID8gcHJvcHMudGhlbWUubGlua0J0bkNvbG9yXHJcbiAgICAgIDogcHJvcHMuZmxvYXRpbmdcclxuICAgICAgPyBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkNvbG9yXHJcbiAgICAgIDogcHJvcHMudGhlbWUucHJpbWFyeUJ0bkNvbG9yfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IChwcm9wcy5sYXJnZSA/ICcxNHB4JyA6IHByb3BzLnNtYWxsID8gJzEwcHgnIDogJzExcHgnKX07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgb3V0bGluZTogMDtcclxuICBwYWRkaW5nOiAke3Byb3BzID0+IChwcm9wcy5sYXJnZSA/ICcxNHB4IDMycHgnIDogcHJvcHMuc21hbGwgPyAnNnB4IDlweCcgOiAnOXB4IDEycHgnKX07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aCB8fCAnYXV0byd9O1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC40IDogMSl9O1xyXG4gIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/ICdub25lJyA6ICdhbGwnKX07XHJcblxyXG4gIDpob3ZlcixcclxuICA6Zm9jdXMsXHJcbiAgOmFjdGl2ZSxcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XHJcbiAgICAgIHByb3BzLm5lZ2F0aXZlXHJcbiAgICAgICAgPyBwcm9wcy50aGVtZS5uZWdhdGl2ZUJ0bkJnZEhvdmVyXHJcbiAgICAgICAgOiBwcm9wcy5zZWNvbmRhcnlcclxuICAgICAgICA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkJnZEhvdmVyXHJcbiAgICAgICAgOiBwcm9wcy5saW5rXHJcbiAgICAgICAgPyBwcm9wcy50aGVtZS5saW5rQnRuQWN0QmdkSG92ZXJcclxuICAgICAgICA6IHByb3BzLmZsb2F0aW5nXHJcbiAgICAgICAgPyBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkJnZEhvdmVyXHJcbiAgICAgICAgOiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkSG92ZXJ9O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT5cclxuICAgICAgcHJvcHMubmVnYXRpdmVcclxuICAgICAgICA/IHByb3BzLnRoZW1lLm5lZ2F0aXZlQnRuQWN0Q29sb3JcclxuICAgICAgICA6IHByb3BzLnNlY29uZGFyeVxyXG4gICAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQWN0Q29sb3JcclxuICAgICAgICA6IHByb3BzLmxpbmtcclxuICAgICAgICA/IHByb3BzLnRoZW1lLmxpbmtCdG5BY3RDb2xvclxyXG4gICAgICAgIDogcHJvcHMuZmxvYXRpbmdcclxuICAgICAgICA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQWN0Q29sb3JcclxuICAgICAgICA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5BY3RDb2xvcn07XHJcbiAgfVxyXG5cclxuICBzdmcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5sYXJnZSA/ICcxMHB4JyA6IHByb3BzLnNtYWxsID8gJzZweCcgOiAnOHB4Jyl9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICAke3Byb3BzID0+IChwcm9wcy5zZWNvbmRhcnkgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dCA6IHByb3BzLnRoZW1lLmlucHV0KX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXRMaWdodCA9IHN0eWxlZC5pbnB1dGBcclxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0TFR9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dEFyZWEgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgJHtwcm9wcyA9PiAocHJvcHMuc2Vjb25kYXJ5ID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXQgOiBwcm9wcy50aGVtZS5pbnB1dCl9O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgVGV4dEFyZWFMaWdodCA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0TFR9XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmxpbmVJbnB1dCA9IHN0eWxlZChJbnB1dClgXHJcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbmxpbmVJbnB1dH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkUGFuZWxIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyIDogcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kfTtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkXHJcbiAgICByZ2IoXHJcbiAgICAgICR7cHJvcHMgPT4gKHByb3BzLmxhYmVsUkNHQ29sb3JWYWx1ZXMgPyBwcm9wcy5sYWJlbFJDR0NvbG9yVmFsdWVzLmpvaW4oJywnKSA6ICd0cmFuc3BhcmVudCcpfVxyXG4gICAgKTtcclxuICBwYWRkaW5nOiAwIDEwcHggMCAwO1xyXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEhlYWRlckhlaWdodH1weDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkUGFuZWxEcm9wZG93biA9IHN0eWxlZC5kaXZgXHJcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbERyb3Bkb3duU2Nyb2xsQmFyfVxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLnR5cGUgPT09ICdsaWdodCcgPyBwcm9wcy50aGVtZS5tb2RhbERyb3Bkb3duQmFja2dyb3VuZCA6IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQm94U2hhZG93fTtcclxuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQm9yZGVyUmFkaXVzfTtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICAuYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIH1cclxuICAuYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0blJhZGl1c307XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5idXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuUmFkaXVzfTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhc2V0U3F1YXJlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoJHtwcm9wcyA9PiBwcm9wcy5jb2xvci5qb2luKCcsJyl9KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0aW9uQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWRcclxuICAgICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZCA6IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFQpfTtcclxuICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkIDogcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVCl9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXZhaWxhYmxlICYmIHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy5hdmFpbGFibGUgJiYgcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG5cclxuICB0aGVhZCB7XHJcbiAgICB0ciB0aCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kTFR9O1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFR9O1xyXG4gICAgICBwYWRkaW5nOiAxOHB4IDEycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGJvZHkge1xyXG4gICAgdHIgdGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQm9yZGVyTFR9O1xyXG4gICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRNb2RhbENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kTFR9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDI0cHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbExhdGVyYWxQYWRkaW5nfTtcclxuICBtYXJnaW46IDAgLSR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxMYXRlcmFsUGFkZGluZ307XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICR7bWVkaWEucG9ydGFibGVgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTZweCAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsUG9ydGFibGVMYXRlcmFsUGFkZGluZ307XHJcbiAgICBtYXJnaW46IDAgLSR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxQb3J0YWJsZUxhdGVyYWxQYWRkaW5nfTtcclxuICBgfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRNb2RhbFZlcnRpY2FsUGFuZWwgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdtb2RhbC12ZXJ0aWNhbC1wYW5lbCdcclxufSlgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgLm1vZGFsLXNlY3Rpb246Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICR7bWVkaWEucGFsbWBcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGB9O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZE1vZGFsU2VjdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ21vZGFsLXNlY3Rpb24nXHJcbn0pYFxyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcblxyXG4gIC5tb2RhbC1zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5tb2RhbC1zZWN0aW9uLXN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUfTtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcblxyXG4gICR7bWVkaWEucG9ydGFibGVgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGB9O1xyXG4gICR7bWVkaWEucGFsbWBcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTW9kYWxJbnB1dEZvb3Rub3RlID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnbW9kYWwtaW5wdXRfX2Zvb3Rub3RlJ1xyXG59KWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmVycm9yID8gcHJvcHMudGhlbWUuZXJyb3JDb2xvciA6IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUKX07XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG5gO1xyXG4vKipcclxuICogTmV3ZXIgdmVyc2lvbnMgb2YgbWFwYm94LmdsIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBiYW5uZXIgb24gdG9wIG9mIHRoZSBtYXAgYnkgZGVmYXVsdFxyXG4gKiB3aGljaCB3aWxsIGNhdXNlIHRoZSBtYXAgdG8gZGlzcGxheSBwb2ludHMgaW4gdGhlIHdyb25nIGxvY2F0aW9uc1xyXG4gKiBUaGlzIHdvcmthcm91bmQgd2lsbCBoaWRlIHRoZSBlcnJvciBiYW5uZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3R5bGVkTWFwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAubWFwYm94Z2wtbWFwIHtcclxuICAgIC5tYXBib3hnbC1taXNzaW5nLWNzcyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWFwYm94Z2wtY3RybC1hdHRyaWIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRBdHRyYnV0aW9uID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnbWFwYm94LWF0dHJpYnV0aW9uLWNvbnRhaW5lcidcclxufSlgXHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgMTBweCAycHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRFeHBvcnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luOiAzNXB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IDAuMyA6IDEpfTtcclxuICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAnbm9uZScgOiAnYWxsJyl9O1xyXG5cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDE4NXB4O1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUfTtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAud2FybmluZyB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5lcnJvckNvbG9yfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5kZXNjcmlwdGlvbi5mdWxsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc2VsZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICBwYWRkaW5nOiAwLjVlbSAzLjVlbSAwLjVlbSAxZW07XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JheSA1MCUpLFxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGdyYXkgNTAlLCB0cmFuc3BhcmVudCA1MCUpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2MsICNjY2MpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgMnB4KSxcclxuICAgICAgICBjYWxjKDEwMCUgLSAyLjVlbSkgNC41ZW07XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNXB4IDVweCwgNXB4IDVweCwgMXB4IDEuNWVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdDpmb2N1cyB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgZ3JlZW4gNTAlLCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JlZW4gNTAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjY2NjKTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMTVweCkgMWVtLCBjYWxjKDEwMCUgLSAyMHB4KSAxZW0sIGNhbGMoMTAwJSAtIDIuNWVtKSA0LjVlbTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA1cHggNXB4LCA1cHggNXB4LCAxcHggMS41ZW07XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbHRlcmVkT3B0aW9uID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZFxyXG4gICAgJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkIDogcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVCl9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogNHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIHdpZHRoOiAxNDBweDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZH07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLW9wdGlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuZmlsdGVyLW9wdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUeXBlID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWRcclxuICAgICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZEhvdmVyIDogcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVCl9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2RIb3ZlciA6IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFR9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXZhaWxhYmxlICYmIHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy5hdmFpbGFibGUgJiYgcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdpZGdldENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgei1pbmRleDogMTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCb3R0b21XaWRnZXRJbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xyXG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gYCR7cHJvcHMudGhlbWUuYm90dG9tSW5uZXJQZFZlcnR9cHggJHtwcm9wcy50aGVtZS5ib3R0b21Jbm5lclBkU2lkZX1weGB9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvdHRvbVBhbmVsR2FwfXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hcENvbnRyb2xCdXR0b24gPSBzdHlsZWQoQnV0dG9uKS5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnbWFwLWNvbnRyb2wtYnV0dG9uJ1xyXG59KWBcclxuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQmdkSG92ZXIgOiBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkJnZH07XHJcbiAgY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQWN0Q29sb3IgOiBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkNvbG9yfTtcclxuXHJcbiAgOmhvdmVyLFxyXG4gIDpmb2N1cyxcclxuICA6YWN0aXZlLFxyXG4gICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5CZ2RIb3Zlcn07XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkFjdENvbG9yfTtcclxuICB9XHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsdGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbmA7XHJcbiJdfQ==