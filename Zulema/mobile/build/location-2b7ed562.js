import { l as Plugins, r as registerPlugin, W as Webapi, a as storage } from './webapi-4204925e.js';
import { _ as __extends, c as cordova$1, e as Injectable, I as IonicNativePlugin, b as cordovaPropertyGet, d as cordovaPropertySet, m as msg, u as util } from './navigation-c0ba1353.js';

var LocationAccuracy = /** @class */ (function (_super) {
    __extends(LocationAccuracy, _super);
    function LocationAccuracy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_NO_POWER = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_LOW_POWER = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.SUCCESS_SETTINGS_SATISFIED = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.SUCCESS_USER_AGREED = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_ALREADY_REQUESTING = -1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_INVALID_ACTION = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_INVALID_ACCURACY = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_EXCEPTION = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_CANNOT_CHANGE_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_USER_DISAGREED = 4;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
        return _this;
    }
    LocationAccuracy.prototype.canRequest = function () { return cordova$1(this, "canRequest", {}, arguments); };
    LocationAccuracy.prototype.isRequesting = function () { return cordova$1(this, "isRequesting", {}, arguments); };
    LocationAccuracy.prototype.request = function (accuracy) { return cordova$1(this, "request", { "callbackOrder": "reverse" }, arguments); };
    LocationAccuracy.pluginName = "LocationAccuracy";
    LocationAccuracy.plugin = "cordova-plugin-request-location-accuracy";
    LocationAccuracy.pluginRef = "cordova.plugins.locationAccuracy";
    LocationAccuracy.repo = "https://github.com/dpa99c/cordova-plugin-request-location-accuracy";
    LocationAccuracy.platforms = ["Android", "iOS"];
    LocationAccuracy.decorators = [
        { type: Injectable }
    ];
    return LocationAccuracy;
}(IonicNativePlugin));

var Diagnostic = /** @class */ (function (_super) {
    __extends(Diagnostic, _super);
    function Diagnostic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.permission = {
            READ_CALENDAR: 'READ_CALENDAR',
            WRITE_CALENDAR: 'WRITE_CALENDAR',
            CAMERA: 'CAMERA',
            READ_CONTACTS: 'READ_CONTACTS',
            WRITE_CONTACTS: 'WRITE_CONTACTS',
            GET_ACCOUNTS: 'GET_ACCOUNTS',
            ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
            ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
            RECORD_AUDIO: 'RECORD_AUDIO',
            READ_PHONE_STATE: 'READ_PHONE_STATE',
            CALL_PHONE: 'CALL_PHONE',
            ADD_VOICEMAIL: 'ADD_VOICEMAIL',
            USE_SIP: 'USE_SIP',
            PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
            READ_CALL_LOG: 'READ_CALL_LOG',
            WRITE_CALL_LOG: 'WRITE_CALL_LOG',
            SEND_SMS: 'SEND_SMS',
            RECEIVE_SMS: 'RECEIVE_SMS',
            READ_SMS: 'READ_SMS',
            RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
            RECEIVE_MMS: 'RECEIVE_MMS',
            WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
            READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
            BODY_SENSORS: 'BODY_SENSORS',
        };
        _this.locationAuthorizationMode = {
            ALWAYS: 'always',
            WHEN_IN_USE: 'when_in_use',
        };
        _this.permissionGroups = {
            CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
            CAMERA: ['CAMERA'],
            CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
            LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
            MICROPHONE: ['RECORD_AUDIO'],
            PHONE: [
                'READ_PHONE_STATE',
                'CALL_PHONE',
                'ADD_VOICEMAIL',
                'USE_SIP',
                'PROCESS_OUTGOING_CALLS',
                'READ_CALL_LOG',
                'WRITE_CALL_LOG',
            ],
            SENSORS: ['BODY_SENSORS'],
            SMS: ['SEND_SMS', 'RECEIVE_SMS', 'READ_SMS', 'RECEIVE_WAP_PUSH', 'RECEIVE_MMS'],
            STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE'],
        };
        _this.locationMode = {
            HIGH_ACCURACY: 'high_accuracy',
            DEVICE_ONLY: 'device_only',
            BATTERY_SAVING: 'battery_saving',
            LOCATION_OFF: 'location_off',
        };
        _this.bluetoothState = {
            UNKNOWN: 'unknown',
            RESETTING: 'resetting',
            UNSUPPORTED: 'unsupported',
            UNAUTHORIZED: 'unauthorized',
            POWERED_OFF: 'powered_off',
            POWERED_ON: 'powered_on',
            POWERING_OFF: 'powering_off',
            POWERING_ON: 'powering_on',
        };
        return _this;
    }
    Diagnostic.prototype.isLocationAvailable = function () { return cordova$1(this, "isLocationAvailable", {}, arguments); };
    Diagnostic.prototype.isWifiAvailable = function () { return cordova$1(this, "isWifiAvailable", {}, arguments); };
    Diagnostic.prototype.isCameraAvailable = function (externalStorage) { return cordova$1(this, "isCameraAvailable", { "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.isBluetoothAvailable = function () { return cordova$1(this, "isBluetoothAvailable", {}, arguments); };
    Diagnostic.prototype.switchToLocationSettings = function () { return cordova$1(this, "switchToLocationSettings", { "sync": true, "platforms": ["Android", "Windows 10", "iOS"] }, arguments); };
    Diagnostic.prototype.switchToMobileDataSettings = function () { return cordova$1(this, "switchToMobileDataSettings", { "sync": true, "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.switchToBluetoothSettings = function () { return cordova$1(this, "switchToBluetoothSettings", { "sync": true, "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.switchToWifiSettings = function () { return cordova$1(this, "switchToWifiSettings", { "sync": true, "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.isWifiEnabled = function () { return cordova$1(this, "isWifiEnabled", { "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.setWifiState = function (state) { return cordova$1(this, "setWifiState", { "callbackOrder": "reverse", "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.setBluetoothState = function (state) { return cordova$1(this, "setBluetoothState", { "callbackOrder": "reverse", "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.isLocationEnabled = function () { return cordova$1(this, "isLocationEnabled", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.isLocationAuthorized = function () { return cordova$1(this, "isLocationAuthorized", {}, arguments); };
    Diagnostic.prototype.getLocationAuthorizationStatus = function () { return cordova$1(this, "getLocationAuthorizationStatus", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.requestLocationAuthorization = function (mode) { return cordova$1(this, "requestLocationAuthorization", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.isCameraPresent = function () { return cordova$1(this, "isCameraPresent", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.isCameraAuthorized = function (externalStorage) { return cordova$1(this, "isCameraAuthorized", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.getCameraAuthorizationStatus = function (externalStorage) { return cordova$1(this, "getCameraAuthorizationStatus", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.requestCameraAuthorization = function (externalStorage) { return cordova$1(this, "requestCameraAuthorization", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.isMicrophoneAuthorized = function () { return cordova$1(this, "isMicrophoneAuthorized", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.getMicrophoneAuthorizationStatus = function () { return cordova$1(this, "getMicrophoneAuthorizationStatus", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.requestMicrophoneAuthorization = function () { return cordova$1(this, "requestMicrophoneAuthorization", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.isContactsAuthorized = function () { return cordova$1(this, "isContactsAuthorized", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.getContactsAuthorizationStatus = function () { return cordova$1(this, "getContactsAuthorizationStatus", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.requestContactsAuthorization = function () { return cordova$1(this, "requestContactsAuthorization", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.isCalendarAuthorized = function () { return cordova$1(this, "isCalendarAuthorized", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.getCalendarAuthorizationStatus = function () { return cordova$1(this, "getCalendarAuthorizationStatus", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.requestCalendarAuthorization = function () { return cordova$1(this, "requestCalendarAuthorization", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.switchToSettings = function () { return cordova$1(this, "switchToSettings", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.getBluetoothState = function () { return cordova$1(this, "getBluetoothState", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.registerBluetoothStateChangeHandler = function (handler) { return cordova$1(this, "registerBluetoothStateChangeHandler", { "platforms": ["Android", "iOS"], "sync": true }, arguments); };
    Diagnostic.prototype.registerLocationStateChangeHandler = function (handler) { return cordova$1(this, "registerLocationStateChangeHandler", { "platforms": ["Android", "iOS"], "sync": true }, arguments); };
    Diagnostic.prototype.isGpsLocationAvailable = function () { return cordova$1(this, "isGpsLocationAvailable", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isGpsLocationEnabled = function () { return cordova$1(this, "isGpsLocationEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isNetworkLocationAvailable = function () { return cordova$1(this, "isNetworkLocationAvailable", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isNetworkLocationEnabled = function () { return cordova$1(this, "isNetworkLocationEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.getLocationMode = function () { return cordova$1(this, "getLocationMode", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.getPermissionAuthorizationStatus = function (permission) { return cordova$1(this, "getPermissionAuthorizationStatus", { "platforms": ["Android"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.getPermissionsAuthorizationStatus = function (permissions) { return cordova$1(this, "getPermissionsAuthorizationStatus", { "platforms": ["Android"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.requestRuntimePermission = function (permission) { return cordova$1(this, "requestRuntimePermission", { "platforms": ["Android"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.requestRuntimePermissions = function (permissions) { return cordova$1(this, "requestRuntimePermissions", { "platforms": ["Android"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.isRequestingPermission = function () { return cordova$1(this, "isRequestingPermission", { "sync": true }, arguments); };
    Diagnostic.prototype.registerPermissionRequestCompleteHandler = function (handler) { return cordova$1(this, "registerPermissionRequestCompleteHandler", { "sync": true }, arguments); };
    Diagnostic.prototype.isBluetoothEnabled = function () { return cordova$1(this, "isBluetoothEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.hasBluetoothSupport = function () { return cordova$1(this, "hasBluetoothSupport", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.hasBluetoothLESupport = function () { return cordova$1(this, "hasBluetoothLESupport", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.hasBluetoothLEPeripheralSupport = function () { return cordova$1(this, "hasBluetoothLEPeripheralSupport", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isExternalStorageAuthorized = function () { return cordova$1(this, "isExternalStorageAuthorized", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.getExternalStorageAuthorizationStatus = function () { return cordova$1(this, "getExternalStorageAuthorizationStatus", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.requestExternalStorageAuthorization = function () { return cordova$1(this, "requestExternalStorageAuthorization", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.getExternalSdCardDetails = function () { return cordova$1(this, "getExternalSdCardDetails", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.switchToWirelessSettings = function () { return cordova$1(this, "switchToWirelessSettings", { "platforms": ["Android"], "sync": true }, arguments); };
    Diagnostic.prototype.switchToNFCSettings = function () { return cordova$1(this, "switchToNFCSettings", { "platforms": ["Android"], "sync": true }, arguments); };
    Diagnostic.prototype.isNFCPresent = function () { return cordova$1(this, "isNFCPresent", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isNFCEnabled = function () { return cordova$1(this, "isNFCEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isNFCAvailable = function () { return cordova$1(this, "isNFCAvailable", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.registerNFCStateChangeHandler = function (handler) { return cordova$1(this, "registerNFCStateChangeHandler", { "platforms": ["Android"], "sync": true }, arguments); };
    Diagnostic.prototype.isDataRoamingEnabled = function () { return cordova$1(this, "isDataRoamingEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isADBModeEnabled = function () { return cordova$1(this, "isADBModeEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isDeviceRooted = function () { return cordova$1(this, "isDeviceRooted", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isCameraRollAuthorized = function () { return cordova$1(this, "isCameraRollAuthorized", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getCameraRollAuthorizationStatus = function () { return cordova$1(this, "getCameraRollAuthorizationStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestCameraRollAuthorization = function () { return cordova$1(this, "requestCameraRollAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isRemoteNotificationsEnabled = function () { return cordova$1(this, "isRemoteNotificationsEnabled", { "platforms": ["iOS", "Android"] }, arguments); };
    Diagnostic.prototype.isRegisteredForRemoteNotifications = function () { return cordova$1(this, "isRegisteredForRemoteNotifications", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getRemoteNotificationsAuthorizationStatus = function () { return cordova$1(this, "getRemoteNotificationsAuthorizationStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestRemoteNotificationsAuthorization = function (types, omitRegistration) { return cordova$1(this, "requestRemoteNotificationsAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getRemoteNotificationTypes = function () { return cordova$1(this, "getRemoteNotificationTypes", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isRemindersAuthorized = function () { return cordova$1(this, "isRemindersAuthorized", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getRemindersAuthorizationStatus = function () { return cordova$1(this, "getRemindersAuthorizationStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestRemindersAuthorization = function () { return cordova$1(this, "requestRemindersAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isBackgroundRefreshAuthorized = function () { return cordova$1(this, "isBackgroundRefreshAuthorized", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getBackgroundRefreshStatus = function () { return cordova$1(this, "getBackgroundRefreshStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestBluetoothAuthorization = function () { return cordova$1(this, "requestBluetoothAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isMotionAvailable = function () { return cordova$1(this, "isMotionAvailable", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isMotionRequestOutcomeAvailable = function () { return cordova$1(this, "isMotionRequestOutcomeAvailable", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestMotionAuthorization = function () { return cordova$1(this, "requestMotionAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getMotionAuthorizationStatus = function () { return cordova$1(this, "getMotionAuthorizationStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getLocationAccuracyAuthorization = function () { return cordova$1(this, "getLocationAccuracyAuthorization", { "platform": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestTemporaryFullAccuracyAuthorization = function (purpose) { return cordova$1(this, "requestTemporaryFullAccuracyAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.registerLocationAccuracyAuthorizationChangeHandler = function (handler) { return cordova$1(this, "registerLocationAccuracyAuthorizationChangeHandler", { "platforms": ["iOS"], "sync": true }, arguments); };
    Object.defineProperty(Diagnostic.prototype, "permissionStatus", {
        get: function () { return cordovaPropertyGet(this, "permissionStatus"); },
        set: function (value) { cordovaPropertySet(this, "permissionStatus", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Diagnostic.prototype, "NFCState", {
        get: function () { return cordovaPropertyGet(this, "NFCState"); },
        set: function (value) { cordovaPropertySet(this, "NFCState", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Diagnostic.prototype, "motionStatus", {
        get: function () { return cordovaPropertyGet(this, "motionStatus"); },
        set: function (value) { cordovaPropertySet(this, "motionStatus", value); },
        enumerable: false,
        configurable: true
    });
    Diagnostic.pluginName = "Diagnostic";
    Diagnostic.plugin = "cordova.plugins.diagnostic";
    Diagnostic.pluginRef = "cordova.plugins.diagnostic";
    Diagnostic.repo = "https://github.com/dpa99c/cordova-diagnostic-plugin";
    Diagnostic.platforms = ["Android", "iOS", "Windows"];
    Diagnostic.decorators = [
        { type: Injectable }
    ];
    return Diagnostic;
}(IonicNativePlugin));

var OpenNativeSettings = /** @class */ (function (_super) {
    __extends(OpenNativeSettings, _super);
    function OpenNativeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenNativeSettings.prototype.open = function (setting) { return cordova$1(this, "open", {}, arguments); };
    OpenNativeSettings.pluginName = "OpenNativeSettings";
    OpenNativeSettings.plugin = "cordova-open-native-settings";
    OpenNativeSettings.pluginRef = "cordova.plugins.settings";
    OpenNativeSettings.repo = "https://github.com/guyromb/Cordova-open-native-settings";
    OpenNativeSettings.platforms = ["Android", "iOS"];
    OpenNativeSettings.decorators = [
        { type: Injectable }
    ];
    return OpenNativeSettings;
}(IonicNativePlugin));

var NativeModule = Plugins.BackgroundGeolocation;
var LOG_LEVEL_DEBUG = "debug";
var LOG_LEVEL_NOTICE = "notice";
var LOG_LEVEL_INFO = "info";
var LOG_LEVEL_WARN = "warn";
var LOG_LEVEL_ERROR = "error";
var ORDER_ASC = 1;
var ORDER_DESC = -1;
function log(level, msg) {
    return NativeModule.log({
        level: level,
        message: msg
    });
}
function validateQuery(query) {
    if (typeof (query) !== 'object')
        return {};
    if (query.hasOwnProperty('start') && isNaN(query.start)) {
        throw new Error('Invalid SQLQuery.start.  Expected unix timestamp but received: ' + query.start);
    }
    if (query.hasOwnProperty('end') && isNaN(query.end)) {
        throw new Error('Invalid SQLQuery.end.  Expected unix timestamp but received: ' + query.end);
    }
    return query;
}
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Object.defineProperty(Logger, "ORDER_ASC", {
        get: function () { return ORDER_ASC; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger, "ORDER_DESC", {
        get: function () { return ORDER_DESC; },
        enumerable: false,
        configurable: true
    });
    Logger.debug = function (msg) {
        return log(LOG_LEVEL_DEBUG, msg);
    };
    Logger.error = function (msg) {
        return log(LOG_LEVEL_ERROR, msg);
    };
    Logger.warn = function (msg) {
        return log(LOG_LEVEL_WARN, msg);
    };
    Logger.info = function (msg) {
        return log(LOG_LEVEL_INFO, msg);
    };
    Logger.notice = function (msg) {
        return log(LOG_LEVEL_NOTICE, msg);
    };
    Logger.getLog = function (query) {
        query = validateQuery(query);
        return new Promise(function (resolve, reject) {
            NativeModule.getLog({ options: query }).then(function (result) {
                resolve(result.log);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    Logger.destroyLog = function () {
        return new Promise(function (resolve, reject) {
            NativeModule.destroyLog().then(function () {
                resolve();
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    Logger.emailLog = function (email, query) {
        query = validateQuery(query);
        return new Promise(function (resolve, reject) {
            NativeModule.emailLog({ email: email, query: query }).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    Logger.uploadLog = function (url, query) {
        query = validateQuery(query);
        return new Promise(function (resolve, reject) {
            NativeModule.emailLog({ url: url, query: query }).then(function () {
                resolve();
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    return Logger;
}());

var NativeModule$1 = Plugins.BackgroundGeolocation;
var DEFAULT_URL = 'http://tracker.transistorsoft.com';
var DUMMY_TOKEN = 'DUMMY_TOKEN';
var REFRESH_PAYLOAD = {
    refresh_token: '{refreshToken}'
};
var LOCATIONS_PATH = '/api/locations';
var REFRESH_TOKEN_PATH = '/api/refresh_token';
var TransistorAuthorizationToken = /** @class */ (function () {
    function TransistorAuthorizationToken() {
    }
    TransistorAuthorizationToken.findOrCreate = function (orgname, username, url) {
        if (url === void 0) { url = DEFAULT_URL; }
        return new Promise(function (resolve, reject) {
            NativeModule$1.getTransistorToken({
                org: orgname,
                username: username,
                url: url
            }).then(function (result) {
                if (result.success) {
                    var token = result.token;
                    token.url = url;
                    resolve(token);
                }
                else {
                    console.warn('[TransistorAuthorizationToken findOrCreate] ERROR: ', result);
                    if (result.status == '403') {
                        reject(result);
                        return;
                    }
                    resolve({
                        accessToken: DUMMY_TOKEN,
                        refreshToken: DUMMY_TOKEN,
                        expires: -1,
                        url: url
                    });
                }
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    TransistorAuthorizationToken.destroy = function (url) {
        if (url === void 0) { url = DEFAULT_URL; }
        return new Promise(function (resolve, reject) {
            NativeModule$1.destroyTransistorToken({ url: url }).then(function () {
                resolve();
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    TransistorAuthorizationToken.applyIf = function (config) {
        if (!config.transistorAuthorizationToken)
            return config;
        var token = config.transistorAuthorizationToken;
        delete config.transistorAuthorizationToken;
        config.url = token.url + LOCATIONS_PATH;
        config.authorization = {
            strategy: 'JWT',
            accessToken: token.accessToken,
            refreshToken: token.refreshToken,
            refreshUrl: token.url + REFRESH_TOKEN_PATH,
            refreshPayload: REFRESH_PAYLOAD,
            expires: token.expires
        };
        return config;
    };
    return TransistorAuthorizationToken;
}());

var NativeModule$2 = Plugins.BackgroundGeolocation;
var IGNORE_BATTERY_OPTIMIZATIONS = "IGNORE_BATTERY_OPTIMIZATIONS";
var POWER_MANAGER = "POWER_MANAGER";
var resolveSettingsRequest = function (resolve, request) {
    if (request.lastSeenAt > 0) {
        request.lastSeenAt = new Date(request.lastSeenAt);
    }
    resolve(request);
};
var DeviceSettings = /** @class */ (function () {
    function DeviceSettings() {
    }
    DeviceSettings.isIgnoringBatteryOptimizations = function () {
        return new Promise(function (resolve, reject) {
            NativeModule$2.isIgnoringBatteryOptimizations.then(function (result) {
                resolve(result.isIgnoringBatteryOptimizations);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    DeviceSettings.showIgnoreBatteryOptimizations = function () {
        return new Promise(function (resolve, reject) {
            var args = { action: IGNORE_BATTERY_OPTIMIZATIONS };
            NativeModule$2.requestSettings(args).then(function (result) {
                resolveSettingsRequest(resolve, result);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    DeviceSettings.showPowerManager = function () {
        return new Promise(function (resolve, reject) {
            var args = { action: POWER_MANAGER };
            NativeModule$2.requestSettings(args).then(function (result) {
                resolveSettingsRequest(resolve, result);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    DeviceSettings.show = function (request) {
        return new Promise(function (resolve, reject) {
            var args = { action: request.action };
            NativeModule$2.showSettings(args).then(function () {
                resolve();
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    return DeviceSettings;
}());

var Events = {
    BOOT: "boot",
    TERMINATE: "terminate",
    LOCATION: "location",
    HTTP: "http",
    MOTIONCHANGE: "motionchange",
    PROVIDERCHANGE: "providerchange",
    HEARTBEAT: "heartbeat",
    ACTIVITYCHANGE: "activitychange",
    GEOFENCE: "geofence",
    GEOFENCESCHANGE: "geofenceschange",
    SCHEDULE: "schedule",
    CONNECTIVITYCHANGE: "connectivitychange",
    ENABLEDCHANGE: "enabledchange",
    POWERSAVECHANGE: "powersavechange",
    NOTIFICATIONACTION: "notificationaction",
    AUTHORIZATION: "authorization",
};

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var NativeModule$3 = registerPlugin('BackgroundGeolocation');
var TAG = "TSLocationManager";
/// Container for event-subscriptions.
var EVENT_SUBSCRIPTIONS = [];
/// Container for watchPostion subscriptions.
var WATCH_POSITION_SUBSCRIPTIONS = [];
/// Event handler Subscription
///
var Subscription = /** @class */ (function () {
    function Subscription(event, subscription, callback) {
        this.event = event;
        this.subscription = subscription;
        this.callback = callback;
    }
    return Subscription;
}());
/// Validate provided config for #ready, #setConfig, #reset.
var validateConfig = function (config) {
    // Detect obsolete notification* fields and re-map to Notification instance.
    if ((config.notificationPriority) ||
        (config.notificationText) ||
        (config.notificationTitle) ||
        (config.notificationChannelName) ||
        (config.notificationColor) ||
        (config.notificationSmallIcon) ||
        (config.notificationLargeIcon)) {
        console.warn('[BackgroundGeolocation] WARNING: Config.notification* fields (eg: notificationText) are all deprecated in favor of notification: {title: "My Title", text: "My Text"}  See docs for "Notification" class');
        config.notification = {
            text: config.notificationText,
            title: config.notificationTitle,
            color: config.notificationColor,
            channelName: config.notificationChannelName,
            smallIcon: config.notificationSmallIcon,
            largeIcon: config.notificationLargeIcon,
            priority: config.notificationPriority
        };
    }
    config = TransistorAuthorizationToken.applyIf(config);
    return config;
};
var LOG_LEVEL_OFF = 0;
var LOG_LEVEL_ERROR$1 = 1;
var LOG_LEVEL_WARNING = 2;
var LOG_LEVEL_INFO$1 = 3;
var LOG_LEVEL_DEBUG$1 = 4;
var LOG_LEVEL_VERBOSE = 5;
var DESIRED_ACCURACY_NAVIGATION = -2;
var DESIRED_ACCURACY_HIGH = -1;
var DESIRED_ACCURACY_MEDIUM = 10;
var DESIRED_ACCURACY_LOW = 100;
var DESIRED_ACCURACY_VERY_LOW = 1000;
var DESIRED_ACCURACY_LOWEST = 3000;
var AUTHORIZATION_STATUS_NOT_DETERMINED = 0;
var AUTHORIZATION_STATUS_RESTRICTED = 1;
var AUTHORIZATION_STATUS_DENIED = 2;
var AUTHORIZATION_STATUS_ALWAYS = 3;
var AUTHORIZATION_STATUS_WHEN_IN_USE = 4;
var NOTIFICATION_PRIORITY_DEFAULT = 0;
var NOTIFICATION_PRIORITY_HIGH = 1;
var NOTIFICATION_PRIORITY_LOW = -1;
var NOTIFICATION_PRIORITY_MAX = 2;
var NOTIFICATION_PRIORITY_MIN = -2;
var ACTIVITY_TYPE_OTHER = 1;
var ACTIVITY_TYPE_AUTOMOTIVE_NAVIGATION = 2;
var ACTIVITY_TYPE_FITNESS = 3;
var ACTIVITY_TYPE_OTHER_NAVIGATION = 4;
var LOCATION_AUTHORIZATION_ALWAYS = "Always";
var LOCATION_AUTHORIZATION_WHEN_IN_USE = "WhenInUse";
var LOCATION_AUTHORIZATION_ANY = "Any";
var PERSIST_MODE_ALL = 2;
var PERSIST_MODE_LOCATION = 1;
var PERSIST_MODE_GEOFENCE = -1;
var PERSIST_MODE_NONE = 0;
var ACCURACY_AUTHORIZATION_FULL = 0;
var ACCURACY_AUTHORIZATION_REDUCED = 1;
/// BackgroundGeolocation JS API
var BackgroundGeolocation = /** @class */ (function () {
    function BackgroundGeolocation() {
    }
    Object.defineProperty(BackgroundGeolocation, "EVENT_BOOT", {
        /// Events
        get: function () { return Events.BOOT; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_TERMINATE", {
        get: function () { return Events.TERMINATE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_LOCATION", {
        get: function () { return Events.LOCATION; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_MOTIONCHANGE", {
        get: function () { return Events.MOTIONCHANGE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_HTTP", {
        get: function () { return Events.HTTP; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_HEARTBEAT", {
        get: function () { return Events.HEARTBEAT; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_PROVIDERCHANGE", {
        get: function () { return Events.PROVIDERCHANGE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_ACTIVITYCHANGE", {
        get: function () { return Events.ACTIVITYCHANGE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_GEOFENCE", {
        get: function () { return Events.GEOFENCE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_GEOFENCESCHANGE", {
        get: function () { return Events.GEOFENCESCHANGE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_ENABLEDCHANGE", {
        get: function () { return Events.ENABLEDCHANGE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_CONNECTIVITYCHANGE", {
        get: function () { return Events.CONNECTIVITYCHANGE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_SCHEDULE", {
        get: function () { return Events.SCHEDULE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_POWERSAVECHANGE", {
        get: function () { return Events.POWERSAVECHANGE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_NOTIFICATIONACTION", {
        get: function () { return Events.NOTIFICATIONACTION; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "EVENT_AUTHORIZATION", {
        get: function () { return Events.AUTHORIZATION; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOG_LEVEL_OFF", {
        get: function () { return LOG_LEVEL_OFF; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOG_LEVEL_ERROR", {
        get: function () { return LOG_LEVEL_ERROR$1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOG_LEVEL_WARNING", {
        get: function () { return LOG_LEVEL_WARNING; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOG_LEVEL_INFO", {
        get: function () { return LOG_LEVEL_INFO$1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOG_LEVEL_DEBUG", {
        get: function () { return LOG_LEVEL_DEBUG$1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOG_LEVEL_VERBOSE", {
        get: function () { return LOG_LEVEL_VERBOSE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "ACTIVITY_TYPE_OTHER", {
        get: function () { return ACTIVITY_TYPE_OTHER; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "ACTIVITY_TYPE_AUTOMOTIVE_NAVIGATION", {
        get: function () { return ACTIVITY_TYPE_AUTOMOTIVE_NAVIGATION; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "ACTIVITY_TYPE_FITNESS", {
        get: function () { return ACTIVITY_TYPE_FITNESS; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "ACTIVITY_TYPE_OTHER_NAVIGATION", {
        get: function () { return ACTIVITY_TYPE_OTHER_NAVIGATION; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "DESIRED_ACCURACY_NAVIGATION", {
        get: function () { return DESIRED_ACCURACY_NAVIGATION; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "DESIRED_ACCURACY_HIGH", {
        get: function () { return DESIRED_ACCURACY_HIGH; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "DESIRED_ACCURACY_MEDIUM", {
        get: function () { return DESIRED_ACCURACY_MEDIUM; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "DESIRED_ACCURACY_LOW", {
        get: function () { return DESIRED_ACCURACY_LOW; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "DESIRED_ACCURACY_VERY_LOW", {
        get: function () { return DESIRED_ACCURACY_VERY_LOW; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "DESIRED_ACCURACY_LOWEST", {
        get: function () { return DESIRED_ACCURACY_LOWEST; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "AUTHORIZATION_STATUS_NOT_DETERMINED", {
        get: function () { return AUTHORIZATION_STATUS_NOT_DETERMINED; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "AUTHORIZATION_STATUS_RESTRICTED", {
        get: function () { return AUTHORIZATION_STATUS_RESTRICTED; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "AUTHORIZATION_STATUS_DENIED", {
        get: function () { return AUTHORIZATION_STATUS_DENIED; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "AUTHORIZATION_STATUS_ALWAYS", {
        get: function () { return AUTHORIZATION_STATUS_ALWAYS; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "AUTHORIZATION_STATUS_WHEN_IN_USE", {
        get: function () { return AUTHORIZATION_STATUS_WHEN_IN_USE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "NOTIFICATION_PRIORITY_DEFAULT", {
        get: function () { return NOTIFICATION_PRIORITY_DEFAULT; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "NOTIFICATION_PRIORITY_HIGH", {
        get: function () { return NOTIFICATION_PRIORITY_HIGH; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "NOTIFICATION_PRIORITY_LOW", {
        get: function () { return NOTIFICATION_PRIORITY_LOW; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "NOTIFICATION_PRIORITY_MAX", {
        get: function () { return NOTIFICATION_PRIORITY_MAX; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "NOTIFICATION_PRIORITY_MIN", {
        get: function () { return NOTIFICATION_PRIORITY_MIN; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOCATION_AUTHORIZATION_ALWAYS", {
        get: function () { return LOCATION_AUTHORIZATION_ALWAYS; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOCATION_AUTHORIZATION_WHEN_IN_USE", {
        get: function () { return LOCATION_AUTHORIZATION_WHEN_IN_USE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOCATION_AUTHORIZATION_ANY", {
        get: function () { return LOCATION_AUTHORIZATION_ANY; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "PERSIST_MODE_ALL", {
        get: function () { return PERSIST_MODE_ALL; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "PERSIST_MODE_LOCATION", {
        get: function () { return PERSIST_MODE_LOCATION; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "PERSIST_MODE_GEOFENCE", {
        get: function () { return PERSIST_MODE_GEOFENCE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "PERSIST_MODE_NONE", {
        get: function () { return PERSIST_MODE_NONE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "ACCURACY_AUTHORIZATION_FULL", {
        get: function () { return ACCURACY_AUTHORIZATION_FULL; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "ACCURACY_AUTHORIZATION_REDUCED", {
        get: function () { return ACCURACY_AUTHORIZATION_REDUCED; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "logger", {
        get: function () { return Logger; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "deviceSettings", {
        get: function () { return DeviceSettings; },
        enumerable: false,
        configurable: true
    });
    BackgroundGeolocation.ready = function (config) {
        return NativeModule$3.ready({ options: validateConfig(config) });
    };
    BackgroundGeolocation.reset = function (config) {
        return NativeModule$3.reset({ options: validateConfig(config) });
    };
    BackgroundGeolocation.start = function () {
        return NativeModule$3.start();
    };
    BackgroundGeolocation.stop = function () {
        return NativeModule$3.stop();
    };
    BackgroundGeolocation.startSchedule = function () {
        return NativeModule$3.startSchedule();
    };
    BackgroundGeolocation.stopSchedule = function () {
        return NativeModule$3.stopSchedule();
    };
    BackgroundGeolocation.startGeofences = function () {
        return NativeModule$3.startGeofences();
    };
    BackgroundGeolocation.setConfig = function (config) {
        return NativeModule$3.setConfig({ options: validateConfig(config) });
    };
    BackgroundGeolocation.getState = function () {
        return NativeModule$3.getState();
    };
    BackgroundGeolocation.changePace = function (isMoving) {
        return new Promise(function (resolve, reject) {
            NativeModule$3.changePace({ isMoving: isMoving }).then(function () {
                resolve();
            }).catch(function (error) {
                reject(error.errorMessage);
            });
        });
    };
    BackgroundGeolocation.getCurrentPosition = function (options) {
        return new Promise(function (resolve, reject) {
            NativeModule$3.getCurrentPosition(options).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error.code);
            });
        });
    };
    BackgroundGeolocation.watchPosition = function (onLocation, onError, options) {
        var _this = this;
        options = options || {};
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var handler, listener;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = function (response) {
                            if (response.hasOwnProperty("error") && (response.error != null)) {
                                if (typeof (onError) === 'function') {
                                    onError(response.error.code);
                                }
                                else {
                                    console.warn('[BackgroundGeolocation watchPostion] DEFAULT ERROR HANDLER.  Provide an onError handler to watchPosition to receive this message: ', response.error);
                                }
                            }
                            else {
                                onLocation(response);
                            }
                        };
                        return [4 /*yield*/, NativeModule$3.addListener("watchposition", handler)];
                    case 1:
                        listener = _a.sent();
                        NativeModule$3.watchPosition({ options: options }).then(function () {
                            WATCH_POSITION_SUBSCRIPTIONS.push(listener);
                            resolve();
                        }).catch(function (error) {
                            listener.remove();
                            reject(error.message);
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    BackgroundGeolocation.stopWatchPosition = function () {
        for (var n = 0; n < WATCH_POSITION_SUBSCRIPTIONS.length; n++) {
            var subscription = WATCH_POSITION_SUBSCRIPTIONS[n];
            subscription.remove();
        }
        return NativeModule$3.stopWatchPosition();
    };
    BackgroundGeolocation.requestPermission = function () {
        return new Promise(function (resolve, reject) {
            NativeModule$3.requestPermission().then(function (result) {
                if (result.success) {
                    resolve(result.status);
                }
                else {
                    reject(result.status);
                }
            });
        });
    };
    BackgroundGeolocation.requestTemporaryFullAccuracy = function (purpose) {
        return new Promise(function (resolve, reject) {
            NativeModule$3.requestTemporaryFullAccuracy({ purpose: purpose }).then(function (result) {
                resolve(result.accuracyAuthorization);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.getProviderState = function () {
        return NativeModule$3.getProviderState();
    };
    /// Locations database
    ///
    BackgroundGeolocation.getLocations = function () {
        return new Promise(function (resolve, reject) {
            NativeModule$3.getLocations().then(function (result) {
                resolve(result.locations);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.insertLocation = function (params) {
        return new Promise(function (resolve, reject) {
            NativeModule$3.insertLocation({ options: params }).then(function (result) {
                resolve(result.uuid);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.destroyLocations = function () {
        return new Promise(function (resolve, reject) {
            NativeModule$3.destroyLocations().then(function () {
                resolve();
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.destroyLocation = function (uuid) {
        return new Promise(function (resolve, reject) {
            NativeModule$3.destroyLocation({ uuid: uuid }).then(function () {
                resolve();
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.getCount = function () {
        return new Promise(function (resolve, reject) {
            NativeModule$3.getCount().then(function (result) {
                resolve(result.count);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.sync = function () {
        return new Promise(function (resolve, reject) {
            NativeModule$3.sync().then(function (result) {
                resolve(result.locations);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    /// Geofencing
    ///
    BackgroundGeolocation.addGeofence = function (params) {
        return new Promise(function (resolve, reject) {
            NativeModule$3.addGeofence({ options: params }).then(function () {
                resolve();
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.addGeofences = function (params) {
        return new Promise(function (resolve, reject) {
            NativeModule$3.addGeofences({ options: params }).then(function () {
                resolve();
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.getGeofences = function () {
        return new Promise(function (resolve, reject) {
            NativeModule$3.getGeofences().then(function (result) {
                resolve(result.geofences);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.getGeofence = function (identifier) {
        return new Promise(function (resolve, reject) {
            if (identifier === null) {
                reject('identifier is null');
                return;
            }
            NativeModule$3.getGeofence({ identifier: identifier }).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.geofenceExists = function (identifier) {
        return new Promise(function (resolve, reject) {
            if (identifier === null) {
                reject('identifier is null');
                return;
            }
            NativeModule$3.geofenceExists({ identifier: identifier }).then(function (result) {
                resolve(result.exists);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.removeGeofence = function (identifier) {
        return new Promise(function (resolve, reject) {
            if (identifier === null) {
                reject('identifier is null');
                return;
            }
            NativeModule$3.removeGeofence({ identifier: identifier }).then(function () {
                resolve();
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.removeGeofences = function (identifiers) {
        identifiers = identifiers || [];
        return new Promise(function (resolve, reject) {
            NativeModule$3.removeGeofences({ identifiers: identifiers }).then(function () {
                resolve();
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    /// Odometer
    ///
    BackgroundGeolocation.getOdometer = function () {
        return new Promise(function (resolve, reject) {
            NativeModule$3.getOdometer().then(function (result) {
                resolve(result.odometer);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.setOdometer = function (value) {
        return new Promise(function (resolve, reject) {
            NativeModule$3.setOdometer({ "odometer": value }).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.resetOdometer = function () {
        return BackgroundGeolocation.setOdometer(0);
    };
    /// Background Tasks
    ///
    BackgroundGeolocation.startBackgroundTask = function () {
        return new Promise(function (resolve, reject) {
            NativeModule$3.startBackgroundTask().then(function (result) {
                resolve(result.taskId);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.stopBackgroundTask = function (taskId) {
        return new Promise(function (resolve, reject) {
            NativeModule$3.stopBackgroundTask({ taskId: taskId }).then(function () {
                resolve();
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    /// @alias stopBackgroundTask
    BackgroundGeolocation.finish = function (taskId) {
        return BackgroundGeolocation.stopBackgroundTask(taskId);
    };
    BackgroundGeolocation.getDeviceInfo = function () {
        return NativeModule$3.getDeviceInfo();
    };
    BackgroundGeolocation.playSound = function (soundId) {
        return NativeModule$3.playSound({ soundId: soundId });
    };
    BackgroundGeolocation.isPowerSaveMode = function () {
        return new Promise(function (resolve, reject) {
            NativeModule$3.isPowerSaveMode().then(function (result) {
                resolve(result.isPowerSaveMode);
            }).catch(function (error) {
                reject(error.message);
            });
        });
    };
    BackgroundGeolocation.getSensors = function () {
        return NativeModule$3.getSensors();
    };
    /// TransistorAuthorizationToken
    ///
    BackgroundGeolocation.findOrCreateTransistorAuthorizationToken = function (orgname, username, url) {
        return TransistorAuthorizationToken.findOrCreate(orgname, username, url);
    };
    BackgroundGeolocation.destroyTransistorAuthorizationToken = function (url) {
        return TransistorAuthorizationToken.destroy(url);
    };
    /// Event Handling
    ///
    BackgroundGeolocation.onLocation = function (success, failure) {
        return BackgroundGeolocation.addListener(Events.LOCATION, success, failure);
    };
    BackgroundGeolocation.onMotionChange = function (success) {
        return BackgroundGeolocation.addListener(Events.MOTIONCHANGE, success);
    };
    BackgroundGeolocation.onHttp = function (success) {
        return BackgroundGeolocation.addListener(Events.HTTP, success);
    };
    BackgroundGeolocation.onHeartbeat = function (success) {
        return BackgroundGeolocation.addListener(Events.HEARTBEAT, success);
    };
    BackgroundGeolocation.onProviderChange = function (success) {
        return BackgroundGeolocation.addListener(Events.PROVIDERCHANGE, success);
    };
    BackgroundGeolocation.onActivityChange = function (success) {
        return BackgroundGeolocation.addListener(Events.ACTIVITYCHANGE, success);
    };
    BackgroundGeolocation.onGeofence = function (success) {
        return BackgroundGeolocation.addListener(Events.GEOFENCE, success);
    };
    BackgroundGeolocation.onGeofencesChange = function (success) {
        return BackgroundGeolocation.addListener(Events.GEOFENCESCHANGE, success);
    };
    BackgroundGeolocation.onSchedule = function (success) {
        return BackgroundGeolocation.addListener(Events.SCHEDULE, success);
    };
    BackgroundGeolocation.onEnabledChange = function (success) {
        return BackgroundGeolocation.addListener(Events.ENABLEDCHANGE, success);
    };
    BackgroundGeolocation.onConnectivityChange = function (success) {
        return BackgroundGeolocation.addListener(Events.CONNECTIVITYCHANGE, success);
    };
    BackgroundGeolocation.onPowerSaveChange = function (success) {
        return BackgroundGeolocation.addListener(Events.POWERSAVECHANGE, success);
    };
    BackgroundGeolocation.onNotificationAction = function (success) {
        return BackgroundGeolocation.addListener(Events.NOTIFICATIONACTION, success);
    };
    BackgroundGeolocation.onAuthorization = function (success) {
        return BackgroundGeolocation.addListener(Events.AUTHORIZATION, success);
    };
    ///
    /// Listen to a plugin event
    ///
    BackgroundGeolocation.addListener = function (event, success, failure) {
        if (!Events[event.toUpperCase()]) {
            throw (TAG + "#addListener - Unknown event '" + event + "'");
        }
        var handler = function (response) {
            if (response.hasOwnProperty("value")) {
                response = response.value;
            }
            if (response.hasOwnProperty("error") && (response.error != null)) {
                if (typeof (failure) === 'function') {
                    failure(response.error);
                }
                else {
                    success(response);
                }
            }
            else {
                success(response);
            }
        };
        // Create a flag to capture edge-case where the developer subscribes to an event then IMMEDIATELY calls subscription.remove()
        // before NativeModule.addListener has resolved.
        // The developer would have to do something weird like this:
        //   const subscription = BackgroundGeolocation.onLocation(this.onLocation);
        //   subscription.remove();
        //
        // The reason for this is I don't want developers to have to await calls to BackgroundGeolocation.onXXX(myHandler).
        //
        var isRemoved = false;
        var subscriptionProxy = {
            remove: function () {
                // EmptyFn until NativeModule.addListener resolves and re-writes this function
                isRemoved = true;
                console.warn('[BackgroundGeolocation.addListener] Unexpected call to subscription.remove() on subscriptionProxy.  Waiting for NativeModule.addListener to resolve.');
            }
        };
        // Now add the listener and re-write subscriptionProxy.remove.
        NativeModule$3.addListener(event, handler).then(function (listener) {
            var subscription = new Subscription(event, listener, success);
            EVENT_SUBSCRIPTIONS.push(subscription);
            subscriptionProxy.remove = function () {
                listener.remove();
                // Remove from EVENT_SUBSCRIPTIONS.
                if (EVENT_SUBSCRIPTIONS.indexOf(subscription) >= 0) {
                    EVENT_SUBSCRIPTIONS.splice(EVENT_SUBSCRIPTIONS.indexOf(subscription), 1);
                }
            };
            if (isRemoved) {
                // Caught edge-case.  Developer added an event-handler then immediately call subscription.remove().
                subscriptionProxy.remove();
            }
        });
        return subscriptionProxy;
    };
    BackgroundGeolocation.removeListener = function (event, callback) {
        console.warn('BackgroundGeolocation.removeListener is deprecated.  Event-listener methods (eg: onLocation) now return a Subscription instance.  Call subscription.remove() on the returned subscription instead.  Eg:\nconst subscription = BackgroundGeolocation.onLocation(myLocationHandler)\n...\nsubscription.remove()');
        return new Promise(function (resolve, reject) {
            var found = null;
            for (var n = 0, len = EVENT_SUBSCRIPTIONS.length; n < len; n++) {
                var sub = EVENT_SUBSCRIPTIONS[n];
                if ((sub.event === event) && (sub.callback === callback)) {
                    found = sub;
                    break;
                }
            }
            if (found !== null) {
                EVENT_SUBSCRIPTIONS.splice(EVENT_SUBSCRIPTIONS.indexOf(found), 1);
                found.subscription.remove();
                resolve();
            }
            else {
                console.warn(TAG + ' Failed to find listener for event ' + event);
                reject();
            }
        });
    };
    BackgroundGeolocation.removeListeners = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        EVENT_SUBSCRIPTIONS = [];
                        return [4 /*yield*/, NativeModule$3.removeAllEventListeners()];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return BackgroundGeolocation;
}());

var tracking;
(function (tracking) {
    function restart() {
        if (window.cordova) {
            clean();
            gps.showActivationMsg(true, false);
        }
        else {
            msg.danger(util.translate('tracking.usingPC'));
        }
    }
    tracking.restart = restart;
    async function initiate() {
        if (window.cordova) {
            let api = new Webapi();
            const confToken = (await storage.get('confToken'));
            const auth = (await api.connect());
            const trackingData = confToken.tracking;
            const appName = (await storage.get('flexyApp')).Title;
            const scheduled = trackingData && trackingData.schedule && trackingData.schedule.length > 0;
            BackgroundGeolocation.onSchedule(async () => {
                if (trackingData.holidays.includes(moment().format('YYYY/MM/DD'))) {
                    BackgroundGeolocation.stop();
                }
            });
            BackgroundGeolocation.ready({
                enableHeadless: true,
                authorization: {
                    strategy: "JWT",
                    accessToken: auth.bearerToken
                },
                httpRootProperty: 'Locations',
                url: (auth.url + '/webapi/exec/SendLocationData'),
                params: { "UserId": confToken.user.currentUserId },
                batchSync: true,
                maxBatchSize: 20,
                autoSync: true,
                notificationTitle: appName + util.translate('tracking.notificationTitle'),
                notificationText: util.translate('tracking.notificationText') + appName,
                stationaryRadius: 25,
                distanceFilter: (trackingData.radius ? trackingData.radius : 50),
                desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
                debug: false,
                startOnBoot: true,
                stopOnTerminate: false,
                stopOnStationary: false,
                stopTimeout: 15,
                //logLevel: 0,
                schedule: (scheduled ? trackingData.schedule : [])
            }).then(async (state) => {
                if (!state.enabled) {
                    if (scheduled)
                        BackgroundGeolocation.startSchedule();
                    else
                        BackgroundGeolocation.start();
                }
                else if (scheduled && !state.schedulerEnabled) {
                    BackgroundGeolocation.startSchedule();
                }
            });
        }
        else {
            msg.danger(util.translate('tracking.usingPC'));
        }
    }
    tracking.initiate = initiate;
    async function syncLocations() {
        BackgroundGeolocation.sync().then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(JSON.parse(err));
        });
    }
    tracking.syncLocations = syncLocations;
    async function checkLogs() {
        console.log(await BackgroundGeolocation.logger.getLog());
    }
    tracking.checkLogs = checkLogs;
    async function checkState() {
        if (window.cordova) {
            console.log(await BackgroundGeolocation.getState());
        }
        else {
            msg.danger(util.translate('tracking.usingPC'));
        }
    }
    tracking.checkState = checkState;
    function clean() {
        if (window.cordova) {
            BackgroundGeolocation.stop();
        }
        else {
            msg.danger(util.translate('tracking.usingPC'));
        }
    }
    tracking.clean = clean;
    async function getLocations() {
        if (window.cordova) {
            return await BackgroundGeolocation.getLocations();
        }
        else {
            msg.danger(util.translate('tracking.usingPC'));
        }
    }
    tracking.getLocations = getLocations;
    /*export function getSchedule(trackingCnf:TrackingConfig) {
        let weekDates:Array<String> = util.getNextSevenDates()
        
        var holidays = [];
        weekDates.forEach(day => {
            if (trackingCnf.holidays.includes(day)) {
                holidays.push(moment(day).day() + 1);
            }
        });

        var schedule = [];
        if (trackingCnf.schedule[0] && !holidays.includes(1)) schedule.push(trackingCnf.schedule[0]);
        if (trackingCnf.schedule[1] && !holidays.includes(2)) schedule.push(trackingCnf.schedule[1]);
        if (trackingCnf.schedule[2] && !holidays.includes(3)) schedule.push(trackingCnf.schedule[2]);
        if (trackingCnf.schedule[3] && !holidays.includes(4)) schedule.push(trackingCnf.schedule[3]);
        if (trackingCnf.schedule[4] && !holidays.includes(5)) schedule.push(trackingCnf.schedule[4]);
        if (trackingCnf.schedule[5] && !holidays.includes(6)) schedule.push(trackingCnf.schedule[5]);
        if (trackingCnf.schedule[6] && !holidays.includes(7)) schedule.push(trackingCnf.schedule[6]);

        return schedule;
    }*/
})(tracking || (tracking = {}));

var gps;
(function (gps) {
    let locationAccuracy = new LocationAccuracy;
    let diagnostic = new Diagnostic;
    let actBackLocation = false;
    let deniedAcces = false;
    /*    alert('position.coords.latitude: '          + position.coords.latitude          + '\n' +
                'position.coords.longitude: '         + position.coords.longitude         + '\n' +
                'position.coords.altitude: '          + position.coords.altitude          + '\n' +
                'position.coords.accuracy: '          + position.coords.accuracy          + '\n' +
                'position.coords.altitudeAccuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                'position.coords.heading: '           + position.coords.heading           + '\n' +
                'position.coords.speed: '             + position.coords.speed             + '\n' +
                'position.timestamp: '         + position.timestamp                + '\n');
    */
    async function getCoords(geoTimeout = 10000, maximumAge = 10) {
        return new Promise(async (resolve, reject) => {
            var geoOpt = { maximumAge: maximumAge, timeout: geoTimeout, enableHighAccuracy: true };
            let id = navigator.geolocation.watchPosition((pos) => {
                navigator.geolocation.clearWatch(id);
                resolve(pos);
            }, (err) => {
                getCoordsError(err);
                navigator.geolocation.clearWatch(id);
                reject(err);
                throw err;
            }, geoOpt);
        });
    }
    gps.getCoords = getCoords;
    function getCoordsError(error) {
        if (error.code == 3) {
            msg.danger(util.translate('exceptions.gpstimeout'));
        }
        else {
            alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        }
    }
    function requestGPSPermission(actMsg) {
        diagnostic.requestLocationAuthorization(diagnostic.locationAuthorizationMode.ALWAYS).then(async (result) => {
            let openNativeSettings = new OpenNativeSettings;
            switch (result) {
                case diagnostic.permissionStatus.DENIED_ALWAYS:
                    openNativeSettings.open('application_details').then(async () => {
                        if (await diagnostic.isLocationAuthorized())
                            askToTurnOnGPS(actMsg);
                        if (await diagnostic.isLocationAuthorized())
                            askToTurnOnGPS(actMsg);
                        if (await diagnostic.isLocationAuthorized())
                            askToTurnOnGPS(actMsg);
                    });
                    break;
                case diagnostic.permissionStatus.GRANTED:
                    askToTurnOnGPS(actMsg);
                    break;
                case diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                    if (cordova.platformId === 'ios') {
                        openNativeSettings.open('application_details').then(async () => {
                            if (await diagnostic.isLocationAuthorized())
                                askToTurnOnGPS(actMsg);
                        });
                        break;
                    }
                    if (actBackLocation) {
                        if (deniedAcces) {
                            openNativeSettings.open('location').then(async () => {
                                diagnostic.getLocationAuthorizationStatus().then((result) => {
                                    if (result === diagnostic.permissionStatus.GRANTED) {
                                        askToTurnOnGPS(actMsg);
                                        deniedAcces = false;
                                    }
                                });
                            });
                        }
                        else
                            deniedAcces = true;
                    }
                    else
                        util.translate('gps.granted');
                    break;
            }
        }, err => { if (err.code !== 4)
            msg.showError('Error requesting location permissions: ' + err.message); });
    }
    function askToTurnOnGPS(actMsg) {
        locationAccuracy.request(locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(async () => {
            actMsg.dismiss();
            util.translate('gps.granted');
            let token = await storage.get('confToken');
            token.user.backLocationAccepted = true;
            storage.set('confToken', token);
            if (actBackLocation) {
                tracking.clean();
                tracking.initiate();
            }
        }, err => { if (err.code !== 4)
            msg.showError('Error requesting location permissions: ' + err.message); });
    }
    function showActivationMsg(activateBackLocation, permissionRequest) {
        if (!permissionRequest) {
            getActivationMsg(null, permissionRequest);
        }
        else {
            actBackLocation = activateBackLocation;
            diagnostic.getLocationAuthorizationStatus().then((result) => {
                switch (result) {
                    case diagnostic.permissionStatus.GRANTED:
                        getActivationMsg(true, permissionRequest);
                        break;
                    case diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                        if (actBackLocation)
                            getActivationMsg(false, permissionRequest);
                        else
                            getActivationMsg(true, permissionRequest);
                        break;
                    default:
                        getActivationMsg(false, permissionRequest);
                        break;
                }
            }, (err) => { msg.showError('Error requesting location permissions: ' + err); });
        }
    }
    gps.showActivationMsg = showActivationMsg;
    async function getActivationMsg(permission, permissionRequest) {
        let shown = await storage.get('trackingMsgShown');
        if ((!shown && !permissionRequest) || ((!permission || await gpsOff()) && permissionRequest)) {
            storage.set('trackingMsgShown', true);
            const actMsg = document.createElement('ion-alert');
            actMsg.header = util.translate('gps.activationMsg');
            actMsg.message = util.translate('gps.activationSubmsg');
            actMsg.backdropDismiss = false;
            actMsg.buttons = [
                {
                    text: util.translate('gps.policy'),
                    handler: () => {
                        window.location.href = "https://www.flexygo.com/politica-de-privacidad-flexygo-mobile/";
                        return false;
                    }
                },
                {
                    text: (permissionRequest ? util.translate('gps.activate') : util.translate('msg.ok')),
                    handler: () => {
                        if (!permissionRequest)
                            return;
                        if (permission)
                            askToTurnOnGPS(actMsg);
                        else
                            requestGPSPermission(actMsg);
                        return false;
                    }
                }
            ];
            document.body.appendChild(actMsg);
            actMsg.present();
        }
        else if (permissionRequest && actBackLocation) {
            tracking.initiate();
        }
    }
    async function gpsOff() {
        if (cordova.platformId === 'ios') {
            return await locationAccuracy.canRequest();
        }
        else {
            let mode = await diagnostic.getLocationMode();
            if (mode === diagnostic.locationMode.LOCATION_OFF)
                return true;
            else
                return false;
        }
    }
})(gps || (gps = {}));

export { gps as g, tracking as t };
