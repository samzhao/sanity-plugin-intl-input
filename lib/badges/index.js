'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var defaultResolve = _interopDefault(require('part:@sanity/base/document-badges'));
var config = _interopDefault(require('config:intl-input'));
var schemas = _interopDefault(require('part:@sanity/base/schema'));
require('part:@sanity/base/client');

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var getSchema = function getSchema(name) {
  return schemas._original.types.find(function (s) {
    return s.name === name;
  });
};

function getConfig(type) {
  var _schema$fieldNames, _cfg$fieldNames, _schema$fieldNames2, _cfg$fieldNames2, _schema$messages, _cfg$messages, _schema$messages2, _cfg$messages2, _schema$messages3, _cfg$messages3, _schema$messages4, _cfg$messages4, _schema$messages5, _cfg$messages5, _schema$messages6, _cfg$messages6, _schema$messages7, _schema$messages7$del, _cfg$messages7, _cfg$messages7$delete, _schema$messages8, _schema$messages8$del, _cfg$messages8, _cfg$messages8$delete, _schema$messages9, _schema$messages9$tra, _cfg$messages9, _cfg$messages9$transl, _cfg$messages10, _cfg$messages10$trans, _cfg$messages11, _cfg$messages11$trans, _cfg$messages12, _cfg$messages12$trans, _cfg$messages13, _cfg$messages13$trans, _cfg$messages14, _cfg$messages14$trans, _cfg$messages15, _cfg$messages15$trans;

  var schema = function () {
    var _getSchema;

    var schema = type ? typeof type === 'string' ? (_getSchema = getSchema(type)) === null || _getSchema === void 0 ? void 0 : _getSchema.i18n : type.i18n : false;
    if (typeof schema !== 'boolean') return schema;
    return {};
  }();

  var cfg = config;
  return {
    base: (schema === null || schema === void 0 ? void 0 : schema.base) || (cfg === null || cfg === void 0 ? void 0 : cfg.base),
    withTranslationsMaintenance: (cfg === null || cfg === void 0 ? void 0 : cfg.withTranslationsMaintenance) === false ? false : true,
    fieldNames: {
      lang: (schema === null || schema === void 0 ? void 0 : (_schema$fieldNames = schema.fieldNames) === null || _schema$fieldNames === void 0 ? void 0 : _schema$fieldNames.lang) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$fieldNames = cfg.fieldNames) === null || _cfg$fieldNames === void 0 ? void 0 : _cfg$fieldNames.lang) || '__i18n_lang',
      references: (schema === null || schema === void 0 ? void 0 : (_schema$fieldNames2 = schema.fieldNames) === null || _schema$fieldNames2 === void 0 ? void 0 : _schema$fieldNames2.references) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$fieldNames2 = cfg.fieldNames) === null || _cfg$fieldNames2 === void 0 ? void 0 : _cfg$fieldNames2.references) || '__i18n_refs'
    },
    languages: (schema === null || schema === void 0 ? void 0 : schema.languages) || (cfg === null || cfg === void 0 ? void 0 : cfg.languages) || [],
    messages: {
      publishing: (schema === null || schema === void 0 ? void 0 : (_schema$messages = schema.messages) === null || _schema$messages === void 0 ? void 0 : _schema$messages.publishing) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages = cfg.messages) === null || _cfg$messages === void 0 ? void 0 : _cfg$messages.publishing) || 'Publishing...',
      publish: (schema === null || schema === void 0 ? void 0 : (_schema$messages2 = schema.messages) === null || _schema$messages2 === void 0 ? void 0 : _schema$messages2.publish) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages2 = cfg.messages) === null || _cfg$messages2 === void 0 ? void 0 : _cfg$messages2.publish) || 'Publish',
      loading: (schema === null || schema === void 0 ? void 0 : (_schema$messages3 = schema.messages) === null || _schema$messages3 === void 0 ? void 0 : _schema$messages3.loading) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages3 = cfg.messages) === null || _cfg$messages3 === void 0 ? void 0 : _cfg$messages3.loading) || 'Loading languages...',
      draft: (schema === null || schema === void 0 ? void 0 : (_schema$messages4 = schema.messages) === null || _schema$messages4 === void 0 ? void 0 : _schema$messages4.draft) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages4 = cfg.messages) === null || _cfg$messages4 === void 0 ? void 0 : _cfg$messages4.draft) || 'Draft',
      missingTranslations: (schema === null || schema === void 0 ? void 0 : (_schema$messages5 = schema.messages) === null || _schema$messages5 === void 0 ? void 0 : _schema$messages5.missingTranslations) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages5 = cfg.messages) === null || _cfg$messages5 === void 0 ? void 0 : _cfg$messages5.missingTranslations) || 'Following languages are missing some translations compared to the base language',
      missing: (schema === null || schema === void 0 ? void 0 : (_schema$messages6 = schema.messages) === null || _schema$messages6 === void 0 ? void 0 : _schema$messages6.missing) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages6 = cfg.messages) === null || _cfg$messages6 === void 0 ? void 0 : _cfg$messages6.missing) || 'Missing',
      deleteAll: {
        buttonTitle: (schema === null || schema === void 0 ? void 0 : (_schema$messages7 = schema.messages) === null || _schema$messages7 === void 0 ? void 0 : (_schema$messages7$del = _schema$messages7.deleteAll) === null || _schema$messages7$del === void 0 ? void 0 : _schema$messages7$del.buttonTitle) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages7 = cfg.messages) === null || _cfg$messages7 === void 0 ? void 0 : (_cfg$messages7$delete = _cfg$messages7.deleteAll) === null || _cfg$messages7$delete === void 0 ? void 0 : _cfg$messages7$delete.buttonTitle) || 'Delete (incl. translations)',
        deleting: (schema === null || schema === void 0 ? void 0 : (_schema$messages8 = schema.messages) === null || _schema$messages8 === void 0 ? void 0 : (_schema$messages8$del = _schema$messages8.deleteAll) === null || _schema$messages8$del === void 0 ? void 0 : _schema$messages8$del.deleting) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages8 = cfg.messages) === null || _cfg$messages8 === void 0 ? void 0 : (_cfg$messages8$delete = _cfg$messages8.deleteAll) === null || _cfg$messages8$delete === void 0 ? void 0 : _cfg$messages8$delete.deleting) || 'Deleting...'
      },
      translationsMaintenance: {
        title: (schema === null || schema === void 0 ? void 0 : (_schema$messages9 = schema.messages) === null || _schema$messages9 === void 0 ? void 0 : (_schema$messages9$tra = _schema$messages9.translationsMaintenance) === null || _schema$messages9$tra === void 0 ? void 0 : _schema$messages9$tra.title) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages9 = cfg.messages) === null || _cfg$messages9 === void 0 ? void 0 : (_cfg$messages9$transl = _cfg$messages9.translationsMaintenance) === null || _cfg$messages9$transl === void 0 ? void 0 : _cfg$messages9$transl.title) || 'Translation Maintenance',
        selectSchemaPlaceholder: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages10 = cfg.messages) === null || _cfg$messages10 === void 0 ? void 0 : (_cfg$messages10$trans = _cfg$messages10.translationsMaintenance) === null || _cfg$messages10$trans === void 0 ? void 0 : _cfg$messages10$trans.selectSchemaPlaceholder) || 'Select schema type',
        oldIdStructure: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages11 = cfg.messages) === null || _cfg$messages11 === void 0 ? void 0 : (_cfg$messages11$trans = _cfg$messages11.translationsMaintenance) === null || _cfg$messages11$trans === void 0 ? void 0 : _cfg$messages11$trans.oldIdStructure) || 'document(s) are using the old ID structure',
        missingLanguageField: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages12 = cfg.messages) === null || _cfg$messages12 === void 0 ? void 0 : (_cfg$messages12$trans = _cfg$messages12.translationsMaintenance) === null || _cfg$messages12$trans === void 0 ? void 0 : _cfg$messages12$trans.missingLanguageField) || 'document(s) are missing the language field',
        missingDocumentRefs: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages13 = cfg.messages) === null || _cfg$messages13 === void 0 ? void 0 : (_cfg$messages13$trans = _cfg$messages13.translationsMaintenance) === null || _cfg$messages13$trans === void 0 ? void 0 : _cfg$messages13$trans.missingDocumentRefs) || 'document(s) have missing translation references',
        orphanDocuments: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages14 = cfg.messages) === null || _cfg$messages14 === void 0 ? void 0 : (_cfg$messages14$trans = _cfg$messages14.translationsMaintenance) === null || _cfg$messages14$trans === void 0 ? void 0 : _cfg$messages14$trans.orphanDocuments) || 'orphaned translation document(s)',
        fix: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages15 = cfg.messages) === null || _cfg$messages15 === void 0 ? void 0 : (_cfg$messages15$trans = _cfg$messages15.translationsMaintenance) === null || _cfg$messages15$trans === void 0 ? void 0 : _cfg$messages15$trans.fix) || 'Fix'
      }
    }
  };
}

var I18nPrefix = 'i18n';

var I18nDelimiter = '__i18n_';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol$1 = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

var getLanguageFromId = function getLanguageFromId(id) {
  var rx = new RegExp("".concat(I18nPrefix, "\\-[^.]+\\-([^.]+)"));
  var match = id.match(rx);
  if (match && match.length === 2) return match[1]; // old version

  var split = id.split(I18nDelimiter);
  if (split.length > 1) return split[1];
  return null;
};

var LanguageBadge = function LanguageBadge(props) {
  var config = getConfig(props.type);
  var doc = props.draft || props.published;
  var idLang = getLanguageFromId(props.id);
  var fieldName = config.fieldNames.lang;

  if (doc && doc[fieldName] || idLang) {
    return {
      label: doc && doc[fieldName] || idLang,
      color: 'success'
    };
  }

  return null;
};

var resolver = function resolver(props) {
  return [].concat(_toConsumableArray(defaultResolve(props)), [LanguageBadge]);
};

module.exports = resolver;
