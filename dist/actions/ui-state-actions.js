"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = exports.setExportHTMLMapMode = exports.setExportMapFormat = exports.setUserMapboxAccessToken = exports.setExportData = exports.setExportFiltered = exports.setExportDataType = exports.setExportSelectedDataset = exports.cleanupExportImage = exports.setExportImageError = exports.setExportImageDataUri = exports.startExportingImage = exports.setExportImageSetting = exports.removeNotification = exports.addNotification = exports.openDeleteModal = exports.toggleMapControl = exports.hideExportDropdown = exports.showExportDropdown = exports.toggleModal = exports.toggleSidePanel = void 0;

var _reduxActions = require("redux-actions");

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 * Toggle active side panel
 * @memberof uiStateActions
 * @param id  id of side panel to be shown, one of `layer`, `filter`, `interaction`, `map`
 * @type {typeof import('./ui-state-actions').toggleSidePanel}
 * @public
 */
var toggleSidePanel = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_SIDE_PANEL, function (id) {
  return id;
});
/**
 * Show and hide modal dialog
 * @memberof uiStateActions
 * @param id - id of modal to be shown, null to hide modals. One of:
 *  - [`DATA_TABLE_ID`](../constants/default-settings.md#data_table_id)
 *  - [`DELETE_DATA_ID`](../constants/default-settings.md#delete_data_id)
 *  - [`ADD_DATA_ID`](../constants/default-settings.md#add_data_id)
 *  - [`EXPORT_IMAGE_ID`](../constants/default-settings.md#export_image_id)
 *  - [`EXPORT_DATA_ID`](../constants/default-settings.md#export_data_id)
 *  - [`ADD_MAP_STYLE_ID`](../constants/default-settings.md#add_map_style_id)
 * @type {typeof import('./ui-state-actions').toggleModal}
 * @public
 */

exports.toggleSidePanel = toggleSidePanel;
var toggleModal = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_MODAL, function (id) {
  return id;
});
/**
 * Hide and show side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateActions
 * @param id - id of the dropdown
 * @type {typeof import('./ui-state-actions').showExportDropdown}
 * @public
 */

exports.toggleModal = toggleModal;
var showExportDropdown = (0, _reduxActions.createAction)(_actionTypes["default"].SHOW_EXPORT_DROPDOWN, function (id) {
  return id;
});
/**
 * Hide side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateActions
 * @type {typeof import('./ui-state-actions').hideExportDropdown}
 * @public
 */

exports.showExportDropdown = showExportDropdown;
var hideExportDropdown = (0, _reduxActions.createAction)(_actionTypes["default"].HIDE_EXPORT_DROPDOWN);
/**
 * Toggle active map control panel
 * @memberof uiStateActions
 * @param panelId - map control panel id, one of the keys of: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @type {typeof import('./ui-state-actions').toggleMapControl}
 * @public
 */

exports.hideExportDropdown = hideExportDropdown;
var toggleMapControl = (0, _reduxActions.createAction)(_actionTypes["default"].TOGGLE_MAP_CONTROL, function (panelId, index) {
  return {
    panelId: panelId,
    index: index
  };
});
/**
 * Toggle active map control panel
 * @memberof uiStateActions
 * @param datasetId - `id` of the dataset to be deleted
 * @type {typeof import('./ui-state-actions').openDeleteModal}
 * @public
 */

exports.toggleMapControl = toggleMapControl;
var openDeleteModal = (0, _reduxActions.createAction)(_actionTypes["default"].OPEN_DELETE_MODAL, function (datasetId) {
  return datasetId;
});
/**
 * Add a notification to be displayed
 * @memberof uiStateActions
 * @param notification - The `notification` object to be added
 * @type {typeof import('./ui-state-actions').addNotification}
 * @public
 */

exports.openDeleteModal = openDeleteModal;
var addNotification = (0, _reduxActions.createAction)(_actionTypes["default"].ADD_NOTIFICATION, function (notification) {
  return notification;
});
/**
 * Remove a notification
 * @memberof uiStateActions
 * @param id - `id` of the notification to be removed
 * @type {typeof import('./ui-state-actions').removeNotification}
 * @public
 */

exports.addNotification = addNotification;
var removeNotification = (0, _reduxActions.createAction)(_actionTypes["default"].REMOVE_NOTIFICATION, function (id) {
  return id;
});
/**
 * Set `exportImage` settings: ratio, resolution, legend
 * @memberof uiStateActions
 * @param newSetting - {ratio: '1x'}
 * @type {typeof import('./ui-state-actions').setExportImageSetting}
 * @public
 */

exports.removeNotification = removeNotification;
var setExportImageSetting = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_IMAGE_SETTING, function (newSetting) {
  return newSetting;
});
/**
 * Set `exportImage.exporting` to true
 * @memberof uiStateActions
 * @type {typeof import('./ui-state-actions').startExportingImage}
 * @public
 */

exports.setExportImageSetting = setExportImageSetting;
var startExportingImage = (0, _reduxActions.createAction)(_actionTypes["default"].START_EXPORTING_IMAGE);
/**
 * Set `exportImage.setExportImageDataUri` to a dataUri
 * @memberof uiStateActions
 * @param dataUri - export image data uri
 * @type {typeof import('./ui-state-actions').setExportImageDataUri}
 * @public
 */

exports.startExportingImage = startExportingImage;
var setExportImageDataUri = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_IMAGE_DATA_URI, function (dataUri) {
  return dataUri;
});
/**
 * Set Export image error
 * @memberof uiStateActions
 * @type {typeof import('./ui-state-actions').setExportImageError}
 * @public
 */

exports.setExportImageDataUri = setExportImageDataUri;
var setExportImageError = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_IMAGE_ERROR, function (error) {
  return error;
});
/**
 * Delete cached export image
 * @memberof uiStateActions
 * @type {typeof import('./ui-state-actions').cleanupExportImage}
 * @public
 */

exports.setExportImageError = setExportImageError;
var cleanupExportImage = (0, _reduxActions.createAction)(_actionTypes["default"].CLEANUP_EXPORT_IMAGE);
/**
 * Set selected dataset for export
 * @memberof uiStateActions
 * @param datasetId - dataset id
 * @type {typeof import('./ui-state-actions').setExportSelectedDataset}
 * @public
 */

exports.cleanupExportImage = cleanupExportImage;
var setExportSelectedDataset = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_SELECTED_DATASET, function (datasetId) {
  return datasetId;
});
/**
 * Set data format for exporting data
 * @memberof uiStateActions
 * @param dataType - one of `'text/csv'`
 * @type {typeof import('./ui-state-actions').setExportDataType}
 * @public
 */

exports.setExportSelectedDataset = setExportSelectedDataset;
var setExportDataType = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_DATA_TYPE, function (dataType) {
  return dataType;
});
/**
 * Whether to export filtered data, `true` or `false`
 * @memberof uiStateActions
 * @param payload - set `true` to ony export filtered data
 * @type {typeof import('./ui-state-actions').setExportFiltered}
 * @public
 */

exports.setExportDataType = setExportDataType;
var setExportFiltered = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_FILTERED, function (payload) {
  return payload;
});
/**
 * Whether to including data in map config, toggle between `true` or `false`
 * @memberof uiStateActions
 * @type {typeof import('./ui-state-actions').setExportData}
 * @public
 */

exports.setExportFiltered = setExportFiltered;
var setExportData = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_DATA);
/**
 * Whether we export a mapbox access token used to create a single map html file
 * @memberof uiStateActions
 * @param payload - mapbox access token
 * @type {typeof import('./ui-state-actions').setUserMapboxAccessToken}
 * @public
 */

exports.setExportData = setExportData;
var setUserMapboxAccessToken = (0, _reduxActions.createAction)(_actionTypes["default"].SET_USER_MAPBOX_ACCESS_TOKEN, function (payload) {
  return payload;
});
/**
 * Set the export map format (html, json)
 * @memberOf uiStateActions
 * @param payload - map format
 * @type {typeof import('./ui-state-actions').setExportMapFormat}
 * @public
 */

exports.setUserMapboxAccessToken = setUserMapboxAccessToken;
var setExportMapFormat = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_MAP_FORMAT, function (payload) {
  return payload;
});
/**
 * Set the HTML mode to use to export HTML mode
 * @memberOf uiStateActions
 * @param payload - map mode
 * @type {typeof import('./ui-state-actions').setExportHTMLMapMode}
 */

exports.setExportMapFormat = setExportMapFormat;
var setExportHTMLMapMode = (0, _reduxActions.createAction)(_actionTypes["default"].SET_EXPORT_MAP_HTML_MODE, function (payload) {
  return payload;
});
/**
 * Set `locale` value
 * @memberof uiStateActions
 * @param locale - locale of the UI
 * @type {typeof import('./ui-state-actions').setLocale}
 * @public
 */

exports.setExportHTMLMapMode = setExportHTMLMapMode;
var setLocale = (0, _reduxActions.createAction)(_actionTypes["default"].SET_LOCALE, function (locale) {
  return {
    locale: locale
  };
});
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Actions handled mostly by  `uiState` reducer.
 * They manage UI changes in tha app, such as open and close side panel,
 * switch between tabs in the side panel, open and close modal dialog for exporting data / images etc.
 * It also manges which settings are selected during image and map export
 *
 * @public
 */

/* eslint-disable no-unused-vars */
// @ts-ignore

exports.setLocale = setLocale;
var uiStateActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3VpLXN0YXRlLWFjdGlvbnMuanMiXSwibmFtZXMiOlsidG9nZ2xlU2lkZVBhbmVsIiwiQWN0aW9uVHlwZXMiLCJUT0dHTEVfU0lERV9QQU5FTCIsImlkIiwidG9nZ2xlTW9kYWwiLCJUT0dHTEVfTU9EQUwiLCJzaG93RXhwb3J0RHJvcGRvd24iLCJTSE9XX0VYUE9SVF9EUk9QRE9XTiIsImhpZGVFeHBvcnREcm9wZG93biIsIkhJREVfRVhQT1JUX0RST1BET1dOIiwidG9nZ2xlTWFwQ29udHJvbCIsIlRPR0dMRV9NQVBfQ09OVFJPTCIsInBhbmVsSWQiLCJpbmRleCIsIm9wZW5EZWxldGVNb2RhbCIsIk9QRU5fREVMRVRFX01PREFMIiwiZGF0YXNldElkIiwiYWRkTm90aWZpY2F0aW9uIiwiQUREX05PVElGSUNBVElPTiIsIm5vdGlmaWNhdGlvbiIsInJlbW92ZU5vdGlmaWNhdGlvbiIsIlJFTU9WRV9OT1RJRklDQVRJT04iLCJzZXRFeHBvcnRJbWFnZVNldHRpbmciLCJTRVRfRVhQT1JUX0lNQUdFX1NFVFRJTkciLCJuZXdTZXR0aW5nIiwic3RhcnRFeHBvcnRpbmdJbWFnZSIsIlNUQVJUX0VYUE9SVElOR19JTUFHRSIsInNldEV4cG9ydEltYWdlRGF0YVVyaSIsIlNFVF9FWFBPUlRfSU1BR0VfREFUQV9VUkkiLCJkYXRhVXJpIiwic2V0RXhwb3J0SW1hZ2VFcnJvciIsIlNFVF9FWFBPUlRfSU1BR0VfRVJST1IiLCJlcnJvciIsImNsZWFudXBFeHBvcnRJbWFnZSIsIkNMRUFOVVBfRVhQT1JUX0lNQUdFIiwic2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0IiwiU0VUX0VYUE9SVF9TRUxFQ1RFRF9EQVRBU0VUIiwic2V0RXhwb3J0RGF0YVR5cGUiLCJTRVRfRVhQT1JUX0RBVEFfVFlQRSIsImRhdGFUeXBlIiwic2V0RXhwb3J0RmlsdGVyZWQiLCJTRVRfRVhQT1JUX0ZJTFRFUkVEIiwicGF5bG9hZCIsInNldEV4cG9ydERhdGEiLCJTRVRfRVhQT1JUX0RBVEEiLCJzZXRVc2VyTWFwYm94QWNjZXNzVG9rZW4iLCJTRVRfVVNFUl9NQVBCT1hfQUNDRVNTX1RPS0VOIiwic2V0RXhwb3J0TWFwRm9ybWF0IiwiU0VUX0VYUE9SVF9NQVBfRk9STUFUIiwic2V0RXhwb3J0SFRNTE1hcE1vZGUiLCJTRVRfRVhQT1JUX01BUF9IVE1MX01PREUiLCJzZXRMb2NhbGUiLCJTRVRfTE9DQUxFIiwibG9jYWxlIiwidWlTdGF0ZUFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7Ozs7Ozs7QUFPTyxJQUFNQSxlQUFlLEdBQUcsZ0NBQWFDLHdCQUFZQyxpQkFBekIsRUFBNEMsVUFBQUMsRUFBRTtBQUFBLFNBQUlBLEVBQUo7QUFBQSxDQUE5QyxDQUF4QjtBQUVQOzs7Ozs7Ozs7Ozs7Ozs7QUFhTyxJQUFNQyxXQUFXLEdBQUcsZ0NBQWFILHdCQUFZSSxZQUF6QixFQUF1QyxVQUFBRixFQUFFO0FBQUEsU0FBSUEsRUFBSjtBQUFBLENBQXpDLENBQXBCO0FBRVA7Ozs7Ozs7OztBQU9PLElBQU1HLGtCQUFrQixHQUFHLGdDQUFhTCx3QkFBWU0sb0JBQXpCLEVBQStDLFVBQUFKLEVBQUU7QUFBQSxTQUFJQSxFQUFKO0FBQUEsQ0FBakQsQ0FBM0I7QUFFUDs7Ozs7Ozs7QUFNTyxJQUFNSyxrQkFBa0IsR0FBRyxnQ0FBYVAsd0JBQVlRLG9CQUF6QixDQUEzQjtBQUVQOzs7Ozs7Ozs7QUFPTyxJQUFNQyxnQkFBZ0IsR0FBRyxnQ0FBYVQsd0JBQVlVLGtCQUF6QixFQUE2QyxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSxTQUFxQjtBQUNoR0QsSUFBQUEsT0FBTyxFQUFQQSxPQURnRztBQUVoR0MsSUFBQUEsS0FBSyxFQUFMQTtBQUZnRyxHQUFyQjtBQUFBLENBQTdDLENBQXpCO0FBS1A7Ozs7Ozs7OztBQU9PLElBQU1DLGVBQWUsR0FBRyxnQ0FBYWIsd0JBQVljLGlCQUF6QixFQUE0QyxVQUFBQyxTQUFTO0FBQUEsU0FBSUEsU0FBSjtBQUFBLENBQXJELENBQXhCO0FBRVA7Ozs7Ozs7OztBQU9PLElBQU1DLGVBQWUsR0FBRyxnQ0FDN0JoQix3QkFBWWlCLGdCQURpQixFQUU3QixVQUFBQyxZQUFZO0FBQUEsU0FBSUEsWUFBSjtBQUFBLENBRmlCLENBQXhCO0FBS1A7Ozs7Ozs7OztBQU9PLElBQU1DLGtCQUFrQixHQUFHLGdDQUFhbkIsd0JBQVlvQixtQkFBekIsRUFBOEMsVUFBQWxCLEVBQUU7QUFBQSxTQUFJQSxFQUFKO0FBQUEsQ0FBaEQsQ0FBM0I7QUFFUDs7Ozs7Ozs7O0FBT08sSUFBTW1CLHFCQUFxQixHQUFHLGdDQUNuQ3JCLHdCQUFZc0Isd0JBRHVCLEVBRW5DLFVBQUFDLFVBQVU7QUFBQSxTQUFJQSxVQUFKO0FBQUEsQ0FGeUIsQ0FBOUI7QUFLUDs7Ozs7Ozs7QUFNTyxJQUFNQyxtQkFBbUIsR0FBRyxnQ0FBYXhCLHdCQUFZeUIscUJBQXpCLENBQTVCO0FBRVA7Ozs7Ozs7OztBQU9PLElBQU1DLHFCQUFxQixHQUFHLGdDQUNuQzFCLHdCQUFZMkIseUJBRHVCLEVBRW5DLFVBQUFDLE9BQU87QUFBQSxTQUFJQSxPQUFKO0FBQUEsQ0FGNEIsQ0FBOUI7QUFLUDs7Ozs7Ozs7QUFNTyxJQUFNQyxtQkFBbUIsR0FBRyxnQ0FBYTdCLHdCQUFZOEIsc0JBQXpCLEVBQWlELFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFKO0FBQUEsQ0FBdEQsQ0FBNUI7QUFFUDs7Ozs7Ozs7QUFNTyxJQUFNQyxrQkFBa0IsR0FBRyxnQ0FBYWhDLHdCQUFZaUMsb0JBQXpCLENBQTNCO0FBRVA7Ozs7Ozs7OztBQU9PLElBQU1DLHdCQUF3QixHQUFHLGdDQUN0Q2xDLHdCQUFZbUMsMkJBRDBCLEVBRXRDLFVBQUFwQixTQUFTO0FBQUEsU0FBSUEsU0FBSjtBQUFBLENBRjZCLENBQWpDO0FBS1A7Ozs7Ozs7OztBQU9PLElBQU1xQixpQkFBaUIsR0FBRyxnQ0FDL0JwQyx3QkFBWXFDLG9CQURtQixFQUUvQixVQUFBQyxRQUFRO0FBQUEsU0FBSUEsUUFBSjtBQUFBLENBRnVCLENBQTFCO0FBS1A7Ozs7Ozs7OztBQU9PLElBQU1DLGlCQUFpQixHQUFHLGdDQUFhdkMsd0JBQVl3QyxtQkFBekIsRUFBOEMsVUFBQUMsT0FBTztBQUFBLFNBQUlBLE9BQUo7QUFBQSxDQUFyRCxDQUExQjtBQUVQOzs7Ozs7OztBQU1PLElBQU1DLGFBQWEsR0FBRyxnQ0FBYTFDLHdCQUFZMkMsZUFBekIsQ0FBdEI7QUFFUDs7Ozs7Ozs7O0FBT08sSUFBTUMsd0JBQXdCLEdBQUcsZ0NBQ3RDNUMsd0JBQVk2Qyw0QkFEMEIsRUFFdEMsVUFBQUosT0FBTztBQUFBLFNBQUlBLE9BQUo7QUFBQSxDQUYrQixDQUFqQztBQUtQOzs7Ozs7Ozs7QUFPTyxJQUFNSyxrQkFBa0IsR0FBRyxnQ0FDaEM5Qyx3QkFBWStDLHFCQURvQixFQUVoQyxVQUFBTixPQUFPO0FBQUEsU0FBSUEsT0FBSjtBQUFBLENBRnlCLENBQTNCO0FBS1A7Ozs7Ozs7O0FBTU8sSUFBTU8sb0JBQW9CLEdBQUcsZ0NBQ2xDaEQsd0JBQVlpRCx3QkFEc0IsRUFFbEMsVUFBQVIsT0FBTztBQUFBLFNBQUlBLE9BQUo7QUFBQSxDQUYyQixDQUE3QjtBQUtQOzs7Ozs7Ozs7QUFPTyxJQUFNUyxTQUFTLEdBQUcsZ0NBQWFsRCx3QkFBWW1ELFVBQXpCLEVBQXFDLFVBQUFDLE1BQU07QUFBQSxTQUFLO0FBQ3ZFQSxJQUFBQSxNQUFNLEVBQU5BO0FBRHVFLEdBQUw7QUFBQSxDQUEzQyxDQUFsQjtBQUlQOzs7O0FBR0E7Ozs7Ozs7OztBQVFBO0FBQ0E7OztBQUNBLElBQU1DLGNBQWMsR0FBRyxJQUF2QjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjcmVhdGVBY3Rpb259IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xyXG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XHJcblxyXG4vKipcclxuICogVG9nZ2xlIGFjdGl2ZSBzaWRlIHBhbmVsXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gaWQgIGlkIG9mIHNpZGUgcGFuZWwgdG8gYmUgc2hvd24sIG9uZSBvZiBgbGF5ZXJgLCBgZmlsdGVyYCwgYGludGVyYWN0aW9uYCwgYG1hcGBcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnRvZ2dsZVNpZGVQYW5lbH1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZVNpZGVQYW5lbCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5UT0dHTEVfU0lERV9QQU5FTCwgaWQgPT4gaWQpO1xyXG5cclxuLyoqXHJcbiAqIFNob3cgYW5kIGhpZGUgbW9kYWwgZGlhbG9nXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gaWQgLSBpZCBvZiBtb2RhbCB0byBiZSBzaG93biwgbnVsbCB0byBoaWRlIG1vZGFscy4gT25lIG9mOlxyXG4gKiAgLSBbYERBVEFfVEFCTEVfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNkYXRhX3RhYmxlX2lkKVxyXG4gKiAgLSBbYERFTEVURV9EQVRBX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjZGVsZXRlX2RhdGFfaWQpXHJcbiAqICAtIFtgQUREX0RBVEFfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNhZGRfZGF0YV9pZClcclxuICogIC0gW2BFWFBPUlRfSU1BR0VfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNleHBvcnRfaW1hZ2VfaWQpXHJcbiAqICAtIFtgRVhQT1JUX0RBVEFfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNleHBvcnRfZGF0YV9pZClcclxuICogIC0gW2BBRERfTUFQX1NUWUxFX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjYWRkX21hcF9zdHlsZV9pZClcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnRvZ2dsZU1vZGFsfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlTW9kYWwgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuVE9HR0xFX01PREFMLCBpZCA9PiBpZCk7XHJcblxyXG4vKipcclxuICogSGlkZSBhbmQgc2hvdyBzaWRlIHBhbmVsIGhlYWRlciBkcm9wZG93biwgYWN0aXZhdGVkIGJ5IGNsaWNraW5nIHRoZSBzaGFyZSBsaW5rIG9uIHRvcCBvZiB0aGUgc2lkZSBwYW5lbFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIGlkIC0gaWQgb2YgdGhlIGRyb3Bkb3duXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLWFjdGlvbnMnKS5zaG93RXhwb3J0RHJvcGRvd259XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzaG93RXhwb3J0RHJvcGRvd24gPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuU0hPV19FWFBPUlRfRFJPUERPV04sIGlkID0+IGlkKTtcclxuXHJcbi8qKlxyXG4gKiBIaWRlIHNpZGUgcGFuZWwgaGVhZGVyIGRyb3Bkb3duLCBhY3RpdmF0ZWQgYnkgY2xpY2tpbmcgdGhlIHNoYXJlIGxpbmsgb24gdG9wIG9mIHRoZSBzaWRlIHBhbmVsXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuaGlkZUV4cG9ydERyb3Bkb3dufVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaGlkZUV4cG9ydERyb3Bkb3duID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLkhJREVfRVhQT1JUX0RST1BET1dOKTtcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgYWN0aXZlIG1hcCBjb250cm9sIHBhbmVsXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gcGFuZWxJZCAtIG1hcCBjb250cm9sIHBhbmVsIGlkLCBvbmUgb2YgdGhlIGtleXMgb2Y6IFtgREVGQVVMVF9NQVBfQ09OVFJPTFNgXSgjZGVmYXVsdF9tYXBfY29udHJvbHMpXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLWFjdGlvbnMnKS50b2dnbGVNYXBDb250cm9sfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlTWFwQ29udHJvbCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5UT0dHTEVfTUFQX0NPTlRST0wsIChwYW5lbElkLCBpbmRleCkgPT4gKHtcclxuICBwYW5lbElkLFxyXG4gIGluZGV4XHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgYWN0aXZlIG1hcCBjb250cm9sIHBhbmVsXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gZGF0YXNldElkIC0gYGlkYCBvZiB0aGUgZGF0YXNldCB0byBiZSBkZWxldGVkXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLWFjdGlvbnMnKS5vcGVuRGVsZXRlTW9kYWx9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBvcGVuRGVsZXRlTW9kYWwgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuT1BFTl9ERUxFVEVfTU9EQUwsIGRhdGFzZXRJZCA9PiBkYXRhc2V0SWQpO1xyXG5cclxuLyoqXHJcbiAqIEFkZCBhIG5vdGlmaWNhdGlvbiB0byBiZSBkaXNwbGF5ZWRcclxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBub3RpZmljYXRpb24gLSBUaGUgYG5vdGlmaWNhdGlvbmAgb2JqZWN0IHRvIGJlIGFkZGVkXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLWFjdGlvbnMnKS5hZGROb3RpZmljYXRpb259XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBhZGROb3RpZmljYXRpb24gPSBjcmVhdGVBY3Rpb24oXHJcbiAgQWN0aW9uVHlwZXMuQUREX05PVElGSUNBVElPTixcclxuICBub3RpZmljYXRpb24gPT4gbm90aWZpY2F0aW9uXHJcbik7XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGEgbm90aWZpY2F0aW9uXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gaWQgLSBgaWRgIG9mIHRoZSBub3RpZmljYXRpb24gdG8gYmUgcmVtb3ZlZFxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykucmVtb3ZlTm90aWZpY2F0aW9ufVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlTm90aWZpY2F0aW9uID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlJFTU9WRV9OT1RJRklDQVRJT04sIGlkID0+IGlkKTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgYGV4cG9ydEltYWdlYCBzZXR0aW5nczogcmF0aW8sIHJlc29sdXRpb24sIGxlZ2VuZFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIG5ld1NldHRpbmcgLSB7cmF0aW86ICcxeCd9XHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLWFjdGlvbnMnKS5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRJbWFnZVNldHRpbmcgPSBjcmVhdGVBY3Rpb24oXHJcbiAgQWN0aW9uVHlwZXMuU0VUX0VYUE9SVF9JTUFHRV9TRVRUSU5HLFxyXG4gIG5ld1NldHRpbmcgPT4gbmV3U2V0dGluZ1xyXG4pO1xyXG5cclxuLyoqXHJcbiAqIFNldCBgZXhwb3J0SW1hZ2UuZXhwb3J0aW5nYCB0byB0cnVlXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuc3RhcnRFeHBvcnRpbmdJbWFnZX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0YXJ0RXhwb3J0aW5nSW1hZ2UgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuU1RBUlRfRVhQT1JUSU5HX0lNQUdFKTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgYGV4cG9ydEltYWdlLnNldEV4cG9ydEltYWdlRGF0YVVyaWAgdG8gYSBkYXRhVXJpXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gZGF0YVVyaSAtIGV4cG9ydCBpbWFnZSBkYXRhIHVyaVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuc2V0RXhwb3J0SW1hZ2VEYXRhVXJpfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0SW1hZ2VEYXRhVXJpID0gY3JlYXRlQWN0aW9uKFxyXG4gIEFjdGlvblR5cGVzLlNFVF9FWFBPUlRfSU1BR0VfREFUQV9VUkksXHJcbiAgZGF0YVVyaSA9PiBkYXRhVXJpXHJcbik7XHJcblxyXG4vKipcclxuICogU2V0IEV4cG9ydCBpbWFnZSBlcnJvclxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnNldEV4cG9ydEltYWdlRXJyb3J9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRJbWFnZUVycm9yID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlNFVF9FWFBPUlRfSU1BR0VfRVJST1IsIGVycm9yID0+IGVycm9yKTtcclxuXHJcbi8qKlxyXG4gKiBEZWxldGUgY2FjaGVkIGV4cG9ydCBpbWFnZVxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLmNsZWFudXBFeHBvcnRJbWFnZX1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNsZWFudXBFeHBvcnRJbWFnZSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5DTEVBTlVQX0VYUE9SVF9JTUFHRSk7XHJcblxyXG4vKipcclxuICogU2V0IHNlbGVjdGVkIGRhdGFzZXQgZm9yIGV4cG9ydFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIGRhdGFzZXRJZCAtIGRhdGFzZXQgaWRcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnNldEV4cG9ydFNlbGVjdGVkRGF0YXNldH1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydFNlbGVjdGVkRGF0YXNldCA9IGNyZWF0ZUFjdGlvbihcclxuICBBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX1NFTEVDVEVEX0RBVEFTRVQsXHJcbiAgZGF0YXNldElkID0+IGRhdGFzZXRJZFxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIFNldCBkYXRhIGZvcm1hdCBmb3IgZXhwb3J0aW5nIGRhdGFcclxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBkYXRhVHlwZSAtIG9uZSBvZiBgJ3RleHQvY3N2J2BcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnNldEV4cG9ydERhdGFUeXBlfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RGF0YVR5cGUgPSBjcmVhdGVBY3Rpb24oXHJcbiAgQWN0aW9uVHlwZXMuU0VUX0VYUE9SVF9EQVRBX1RZUEUsXHJcbiAgZGF0YVR5cGUgPT4gZGF0YVR5cGVcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHRvIGV4cG9ydCBmaWx0ZXJlZCBkYXRhLCBgdHJ1ZWAgb3IgYGZhbHNlYFxyXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZUFjdGlvbnNcclxuICogQHBhcmFtIHBheWxvYWQgLSBzZXQgYHRydWVgIHRvIG9ueSBleHBvcnQgZmlsdGVyZWQgZGF0YVxyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi91aS1zdGF0ZS1hY3Rpb25zJykuc2V0RXhwb3J0RmlsdGVyZWR9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRGaWx0ZXJlZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX0ZJTFRFUkVELCBwYXlsb2FkID0+IHBheWxvYWQpO1xyXG5cclxuLyoqXHJcbiAqIFdoZXRoZXIgdG8gaW5jbHVkaW5nIGRhdGEgaW4gbWFwIGNvbmZpZywgdG9nZ2xlIGJldHdlZW4gYHRydWVgIG9yIGBmYWxzZWBcclxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLWFjdGlvbnMnKS5zZXRFeHBvcnREYXRhfVxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RGF0YSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX0RBVEEpO1xyXG5cclxuLyoqXHJcbiAqIFdoZXRoZXIgd2UgZXhwb3J0IGEgbWFwYm94IGFjY2VzcyB0b2tlbiB1c2VkIHRvIGNyZWF0ZSBhIHNpbmdsZSBtYXAgaHRtbCBmaWxlXHJcbiAqIEBtZW1iZXJvZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gcGF5bG9hZCAtIG1hcGJveCBhY2Nlc3MgdG9rZW5cclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnNldFVzZXJNYXBib3hBY2Nlc3NUb2tlbn1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldFVzZXJNYXBib3hBY2Nlc3NUb2tlbiA9IGNyZWF0ZUFjdGlvbihcclxuICBBY3Rpb25UeXBlcy5TRVRfVVNFUl9NQVBCT1hfQUNDRVNTX1RPS0VOLFxyXG4gIHBheWxvYWQgPT4gcGF5bG9hZFxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgZXhwb3J0IG1hcCBmb3JtYXQgKGh0bWwsIGpzb24pXHJcbiAqIEBtZW1iZXJPZiB1aVN0YXRlQWN0aW9uc1xyXG4gKiBAcGFyYW0gcGF5bG9hZCAtIG1hcCBmb3JtYXRcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnNldEV4cG9ydE1hcEZvcm1hdH1cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydE1hcEZvcm1hdCA9IGNyZWF0ZUFjdGlvbihcclxuICBBY3Rpb25UeXBlcy5TRVRfRVhQT1JUX01BUF9GT1JNQVQsXHJcbiAgcGF5bG9hZCA9PiBwYXlsb2FkXHJcbik7XHJcblxyXG4vKipcclxuICogU2V0IHRoZSBIVE1MIG1vZGUgdG8gdXNlIHRvIGV4cG9ydCBIVE1MIG1vZGVcclxuICogQG1lbWJlck9mIHVpU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBwYXlsb2FkIC0gbWFwIG1vZGVcclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdWktc3RhdGUtYWN0aW9ucycpLnNldEV4cG9ydEhUTUxNYXBNb2RlfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEhUTUxNYXBNb2RlID0gY3JlYXRlQWN0aW9uKFxyXG4gIEFjdGlvblR5cGVzLlNFVF9FWFBPUlRfTUFQX0hUTUxfTU9ERSxcclxuICBwYXlsb2FkID0+IHBheWxvYWRcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgYGxvY2FsZWAgdmFsdWVcclxuICogQG1lbWJlcm9mIHVpU3RhdGVBY3Rpb25zXHJcbiAqIEBwYXJhbSBsb2NhbGUgLSBsb2NhbGUgb2YgdGhlIFVJXHJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3VpLXN0YXRlLWFjdGlvbnMnKS5zZXRMb2NhbGV9XHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXRMb2NhbGUgPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuU0VUX0xPQ0FMRSwgbG9jYWxlID0+ICh7XHJcbiAgbG9jYWxlXHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRlY2xhcmF0aW9uIGlzIG5lZWRlZCB0byBncm91cCBhY3Rpb25zIGluIGRvY3NcclxuICovXHJcbi8qKlxyXG4gKiBBY3Rpb25zIGhhbmRsZWQgbW9zdGx5IGJ5ICBgdWlTdGF0ZWAgcmVkdWNlci5cclxuICogVGhleSBtYW5hZ2UgVUkgY2hhbmdlcyBpbiB0aGEgYXBwLCBzdWNoIGFzIG9wZW4gYW5kIGNsb3NlIHNpZGUgcGFuZWwsXHJcbiAqIHN3aXRjaCBiZXR3ZWVuIHRhYnMgaW4gdGhlIHNpZGUgcGFuZWwsIG9wZW4gYW5kIGNsb3NlIG1vZGFsIGRpYWxvZyBmb3IgZXhwb3J0aW5nIGRhdGEgLyBpbWFnZXMgZXRjLlxyXG4gKiBJdCBhbHNvIG1hbmdlcyB3aGljaCBzZXR0aW5ncyBhcmUgc2VsZWN0ZWQgZHVyaW5nIGltYWdlIGFuZCBtYXAgZXhwb3J0XHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8vIEB0cy1pZ25vcmVcclxuY29uc3QgdWlTdGF0ZUFjdGlvbnMgPSBudWxsO1xyXG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXHJcbiJdfQ==