import { i as isString, a as isArray$1, b as isObject$2, h as hasOwn, w as warn, c as computed, g as getCurrentInstance, d as watchEffect, r as readonly, s as shallowReadonly, e as shallowRef, t as toValue, f as getCurrentScope, o as onScopeDispose, j as watch, k as onMounted, n as nextTick, l as hasInjectionContext, m as inject, p as ref, q as isRef, u as reactive, v as unref, x as camelize, y as onBeforeUnmount, z as isFunction$1, N as NOOP, A as defineComponent, B as openBlock, C as createElementBlock, D as createBaseVNode, E as renderSlot, F as mergeProps, G as toRef, H as onUnmounted, I as provide, J as markRaw, K as useAttrs$1, L as useSlots, M as createCommentVNode, O as Fragment, P as normalizeClass, Q as createBlock, R as withCtx, S as resolveDynamicComponent, T as withModifiers, U as normalizeStyle, V as toDisplayString, W as createVNode, X as createTextVNode, Y as Transition, Z as Text, _ as h, $ as withDirectives, a0 as createSlots, a1 as vShow, a2 as Teleport, a3 as onUpdated, a4 as withKeys, a5 as shallowReactive, a6 as isVNode, a7 as render, a8 as toRefs, a9 as resolveComponent, aa as renderList, ab as vModelSelect, ac as createStaticVNode, ad as vModelText } from "./index-Di8upWIJ.js";
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const INPUT_EVENT = "input";
const componentSizes = [
  "",
  "default",
  "small",
  "large"
];
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$d = Object.prototype;
var hasOwnProperty$a = objectProto$d.hasOwnProperty;
var nativeObjectToString$1 = objectProto$d.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$a.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$c = Object.prototype;
var nativeObjectToString = objectProto$c.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$1 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$1;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var isArray = Array.isArray;
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$1(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject$1(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
})();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$b = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$9).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key2) {
  return object == null ? void 0 : object[key2];
}
function getNative(object, key2) {
  var value = getValue(object, key2);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap$1 = getNative(root, "WeakMap");
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = (function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
})();
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var setToString = shortOut(baseSetToString);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key2, value) {
  if (key2 == "__proto__" && defineProperty) {
    defineProperty(object, key2, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key2] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function assignValue(object, key2, value) {
  var objValue = object[key2];
  if (!(hasOwnProperty$8.call(object, key2) && eq(objValue, value)) || value === void 0 && !(key2 in object)) {
    baseAssignValue(object, key2, value);
  }
}
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var objectProto$9 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$9;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$8.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
  return arguments;
})()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$7.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer = moduleExports$1 ? root.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal.process;
var nodeUtil = (function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
})();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key2 in value) {
    if ((inherited || hasOwnProperty$6.call(value, key2)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key2 == "offset" || key2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || // Skip index properties.
    isIndex(key2, length)))) {
      result.push(key2);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key2 in Object(object)) {
    if (hasOwnProperty$5.call(object, key2) && key2 != "constructor") {
      result.push(key2);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key2) {
  var result = this.has(key2) && delete this.__data__[key2];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function hashGet(key2) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key2];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$4.call(data, key2) ? data[key2] : void 0;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function hashHas(key2) {
  var data = this.__data__;
  return nativeCreate ? data[key2] !== void 0 : hasOwnProperty$3.call(data, key2);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key2, value) {
  var data = this.__data__;
  this.size += this.has(key2) ? 0 : 1;
  data[key2] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key2) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key2)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key2) {
  var data = this.__data__, index = assocIndexOf(data, key2);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key2) {
  var data = this.__data__, index = assocIndexOf(data, key2);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key2) {
  return assocIndexOf(this.__data__, key2) > -1;
}
function listCacheSet(key2, value) {
  var data = this.__data__, index = assocIndexOf(data, key2);
  if (index < 0) {
    ++this.size;
    data.push([key2, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root, "Map");
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key2) {
  var data = map.__data__;
  return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key2) {
  var result = getMapData(this, key2)["delete"](key2);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key2) {
  return getMapData(this, key2).get(key2);
}
function mapCacheHas(key2) {
  return getMapData(this, key2).has(key2);
}
function mapCacheSet(key2, value) {
  var data = getMapData(this, key2), size = data.size;
  data.set(key2, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key2)) {
      return cache.get(key2);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key2, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key2) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key2;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString$1(value));
}
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
function flatRest(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectTag$2 = "[object Object]";
var funcProto = Function.prototype, objectProto$3 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$2) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$2.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== void 0) {
      number = number <= upper ? number : upper;
    }
    if (lower !== void 0) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}
function clamp$1(number, lower, upper) {
  if (upper === void 0) {
    upper = lower;
    lower = void 0;
  }
  if (upper !== void 0) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== void 0) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key2) {
  var data = this.__data__, result = data["delete"](key2);
  this.size = data.size;
  return result;
}
function stackGet(key2) {
  return this.__data__.get(key2);
}
function stackHas(key2) {
  return this.__data__.has(key2);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key2, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key2, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key2, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
var DataView = getNative(root, "DataView");
var Promise$1 = getNative(root, "Promise");
var Set$1 = getNative(root, "Set");
var mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag$1 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag(new Map$1()) != mapTag$1 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$1 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$1;
        case mapCtorString:
          return mapTag$1;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$1;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var Uint8Array$1 = root.Uint8Array;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key2) {
  return cache.has(key2);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key2) {
    result[++index] = [key2, value];
  });
  return result;
}
function setToArray(set2) {
  var index = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key2 = objProps[index];
    if (!(isPartial ? key2 in other : hasOwnProperty$1.call(other, key2))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key2 = objProps[index];
    var objValue = object[key2], othValue = other[key2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key2, other, object, stack) : customizer(objValue, othValue, key2, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key2 == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function baseHasIn(object, key2) {
  return object != null && key2 in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key2 = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key2))) {
      break;
    }
    object = object[key2];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key2, length) && (isArray(object) || isArguments(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
function fromPairs(pairs) {
  var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index < length) {
    var pair = pairs[index];
    baseAssignValue(result, pair[0], pair[1]);
  }
  return result;
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
function isNil(value) {
  return value == null;
}
function baseSet(object, path, value, customizer) {
  if (!isObject$1(object)) {
    return object;
  }
  path = castPath(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key2 = toKey(path[index]), newValue = value;
    if (key2 === "__proto__" || key2 === "constructor" || key2 === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key2];
      newValue = void 0;
      if (newValue === void 0) {
        newValue = isObject$1(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key2, newValue);
    nested = nested[key2];
  }
  return object;
}
function basePickBy(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
const isUndefined = (val) => val === void 0;
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isEmpty = (val) => !val && val !== 0 || isArray$1(val) && val.length === 0 || isObject$2(val) && !Object.keys(val).length;
const isElement = (e) => {
  if (typeof Element === "undefined") return false;
  return e instanceof Element;
};
const isPropAbsent = (prop) => isNil(prop);
const isStringNumber = (val) => {
  if (!isString(val)) return false;
  return !Number.isNaN(Number(val));
};
const isWindow = (val) => val === window;
const keysOf = (arr) => Object.keys(arr);
const entriesOf = (arr) => Object.entries(arr);
const getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return get(obj, path, defaultValue);
    },
    set value(val) {
      set(obj, path, val);
    }
  };
};
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject$2(val) && !!val["__epPropKey"];
const buildProp = (prop, key2) => {
  if (!isObject$2(prop) || isEpProp(prop)) return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const epProp = {
    type,
    required: !!required,
    validator: values || validator ? (val) => {
      let valid = false;
      let allowedValues = [];
      if (values) {
        allowedValues = Array.from(values);
        if (hasOwn(prop, "default")) allowedValues.push(defaultValue);
        valid ||= allowedValues.includes(val);
      }
      if (validator) valid ||= validator(val);
      if (!valid && allowedValues.length > 0) {
        const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
        warn(`Invalid prop: validation failed${key2 ? ` for prop "${key2}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
      }
      return valid;
    } : void 0,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default")) epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key2, option]) => [key2, buildProp(option, key2)]));
var ElementPlusError = class extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
};
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message2) {
  {
    const error = isString(scope) ? new ElementPlusError(`[${scope}] ${message2}`) : scope;
    console.warn(error);
  }
}
const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
const useAttrs = (params = {}) => {
  const { excludeListeners = false, excludeKeys } = params;
  const allExcludeKeys = computed(() => {
    return (excludeKeys?.value || []).concat(DEFAULT_EXCLUDE_KEYS);
  });
  const instance = getCurrentInstance();
  if (!instance) {
    debugWarn("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function");
    return computed(() => ({}));
  }
  return computed(() => fromPairs(Object.entries(instance.proxy?.$attrs).filter(([key2]) => !allExcludeKeys.value.includes(key2) && !(excludeListeners && LISTENER_PREFIX.test(key2)))));
};
function computedEager(fn, options) {
  var _options$flush;
  const result = shallowRef();
  watchEffect(() => {
    result.value = fn();
  }, {
    ...options,
    flush: (_options$flush = options === null || options === void 0 ? void 0 : options.flush) !== null && _options$flush !== void 0 ? _options$flush : "sync"
  });
  return readonly(result);
}
function tryOnScopeDispose(fn, failSilently) {
  if (getCurrentScope()) {
    onScopeDispose(fn, failSilently);
    return true;
  }
  return false;
}
const localProvidedStateMap = /* @__PURE__ */ new WeakMap();
const injectLocal = /* @__NO_SIDE_EFFECTS__ */ (...args) => {
  var _getCurrentInstance;
  const key2 = args[0];
  const instance = (_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy;
  const owner = instance !== null && instance !== void 0 ? instance : getCurrentScope();
  if (owner == null && !hasInjectionContext()) throw new Error("injectLocal must be called in setup");
  if (owner && localProvidedStateMap.has(owner) && key2 in localProvidedStateMap.get(owner)) return localProvidedStateMap.get(owner)[key2];
  return inject(...args);
};
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const isDef = (val) => typeof val !== "undefined";
const notNullish = (val) => val != null;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const noop = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _window, _window2, _window3;
  return isClient && !!((_window = window) === null || _window === void 0 || (_window = _window.navigator) === null || _window === void 0 ? void 0 : _window.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.maxTouchPoints) > 2 && /iPad|Macintosh/.test((_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.navigator.userAgent));
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), {
        fn,
        thisArg: this,
        args
      })).then(resolve).catch(reject);
    });
  }
  if ("cancel" in filter) Object.assign(wrapper, {
    cancel: filter.cancel,
    flush: filter.flush,
    isPending: filter.isPending
  });
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  let lastResolve = noop;
  const _pending = shallowRef(false);
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  let lastInvoker;
  const handler = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer) _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = void 0;
      }
      _pending.value = false;
      return Promise.resolve(invoke());
    }
    _pending.value = true;
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      lastResolve = resolve;
      lastInvoker = invoke;
      if (maxDuration && !maxTimer) maxTimer = setTimeout(() => {
        if (timer) _clearTimeout(timer);
        maxTimer = void 0;
        _pending.value = false;
        resolve(lastInvoker());
      }, maxDuration);
      timer = setTimeout(() => {
        if (maxTimer) _clearTimeout(maxTimer);
        maxTimer = void 0;
        _pending.value = false;
        resolve(invoke());
      }, duration);
    });
  };
  return Object.assign(handler, {
    cancel: () => {
      if (timer) {
        _clearTimeout(timer);
        timer = void 0;
      }
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = void 0;
      }
      _pending.value = false;
      lastResolve = noop;
    },
    flush: () => {
      if (_pending.value) {
        if (timer) {
          clearTimeout(timer);
          timer = void 0;
        }
        if (maxTimer) {
          clearTimeout(maxTimer);
          maxTimer = void 0;
        }
        _pending.value = false;
        const resolve = lastResolve;
        lastRejector = noop;
        lastResolve = noop;
        resolve(lastInvoker());
      }
    },
    isPending: shallowReadonly(_pending)
  });
}
function throttleFilter(...args) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  let ms;
  let trailing;
  let leading;
  let rejectOnCancel;
  if (!isRef(args[0]) && typeof args[0] === "object") ({ delay: ms, trailing = true, leading = true, rejectOnCancel = false } = args[0]);
  else [ms, trailing = true, leading = true, rejectOnCancel = false] = args;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration) {
      lastExec = Date.now();
      if (leading || !isLeading) invoke();
    } else if (trailing) lastValue = new Promise((resolve, reject) => {
      lastRejector = rejectOnCancel ? reject : resolve;
      timer = setTimeout(() => {
        lastExec = Date.now();
        isLeading = true;
        resolve(invoke());
        clear();
      }, Math.max(0, duration - elapsed));
    });
    if (!leading && !timer) timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function toReactive(objectRef) {
  if (!isRef(objectRef)) return reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if (isRef(objectRef.value[p]) && !isRef(value)) objectRef.value[p].value = value;
      else objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}
function reactiveComputed(fn) {
  return toReactive(computed(fn));
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}
function refDebounced(value, ms = 200, options = {}) {
  const debounced = ref(toValue(value));
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return shallowReadonly(debounced);
}
// @__NO_SIDE_EFFECTS__
function useThrottleFn(fn, ms = 200, trailing = true, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
function tryOnMounted(fn, sync = true, target) {
  if (getLifeCycleTarget()) onMounted(fn, target);
  else if (sync) fn();
  else nextTick(fn);
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
  const { immediate = true, immediateCallback = false } = options;
  let timer = null;
  const isActive = shallowRef(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0) return;
    isActive.value = true;
    if (immediateCallback) cb();
    clean();
    if (isActive.value) timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient) resume();
  if (isRef(interval) || typeof interval === "function") tryOnScopeDispose(watch(interval, () => {
    if (isActive.value && isClient) resume();
  }));
  tryOnScopeDispose(pause);
  return {
    isActive: shallowReadonly(isActive),
    pause,
    resume
  };
}
function useTimeoutFn(cb, interval, options = {}) {
  const { immediate = true, immediateCallback = false } = options;
  const isPending = shallowRef(false);
  let timer;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    if (immediateCallback) cb();
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = void 0;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient) start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: shallowReadonly(isPending),
    start,
    stop
  };
}
function watchImmediate(source, cb, options) {
  return watch(source, cb, {
    ...options,
    immediate: true
  });
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
function unrefElement(elRef) {
  var _$el;
  const plain = toValue(elRef);
  return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
}
function useEventListener(...args) {
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  return watchImmediate(() => {
    var _firstParamTargets$va, _firstParamTargets$va2;
    return [
      (_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e) => unrefElement(e))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow].filter((e) => e != null),
      toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
      toArray(unref(firstParamTargets.value ? args[2] : args[1])),
      toValue(firstParamTargets.value ? args[3] : args[2])
    ];
  }, ([raw_targets, raw_events, raw_listeners, raw_options], _, onCleanup) => {
    if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
    const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
    const cleanups = raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))));
    onCleanup(() => {
      cleanups.forEach((fn) => fn());
    });
  }, { flush: "post" });
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
  if (!window2) return controls ? {
    stop: noop,
    cancel: noop,
    trigger: noop
  } : noop;
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    const listenerOptions = { passive: true };
    Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop, listenerOptions));
    window2.document.documentElement.addEventListener("click", noop, listenerOptions);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return toValue(ignore).some((target2) => {
      if (typeof target2 === "string") return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target2) {
    const vm = toValue(target2);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target2, event) {
    const vm = toValue(target2);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children)) return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const el = unrefElement(target);
    if (event.target == null) return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event)) return;
    if (!el || el === event.target || event.composedPath().includes(el)) return;
    if ("detail" in event && event.detail === 0) shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(window2, "click", (event) => {
      if (!isProcessingClick) {
        isProcessingClick = true;
        setTimeout(() => {
          isProcessingClick = false;
        }, 0);
        listener(event);
      }
    }, {
      passive: true,
      capture
    }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        const el = unrefElement(target);
        let activeEl = window2.document.activeElement;
        while (activeEl === null || activeEl === void 0 ? void 0 : activeEl.shadowRoot) activeEl = activeEl.shadowRoot.activeElement;
        if ((activeEl === null || activeEl === void 0 ? void 0 : activeEl.tagName) === "IFRAME" && !(el === null || el === void 0 ? void 0 : el.contains(window2.document.activeElement))) handler(event);
      }, 0);
    }, { passive: true })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  if (controls) return {
    stop,
    cancel: () => {
      shouldListen = false;
    },
    trigger: (event) => {
      shouldListen = true;
      listener(event);
      shouldListen = false;
    }
  };
  return stop;
}
// @__NO_SIDE_EFFECTS__
function useMounted() {
  const isMounted = shallowRef(false);
  const instance = getCurrentInstance();
  if (instance) onMounted(() => {
    isMounted.value = true;
  }, instance);
  return isMounted;
}
// @__NO_SIDE_EFFECTS__
function useSupported(callback) {
  const isMounted = /* @__PURE__ */ useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = /* @__PURE__ */ useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const value = toValue(target);
    const items = toArray(value).map(unrefElement).filter(notNullish);
    return new Set(items);
  });
  const stopWatch = watch(targets, (newTargets) => {
    cleanup();
    if (isSupported.value && newTargets.size) {
      observer = new MutationObserver(callback);
      newTargets.forEach((el) => observer.observe(el, mutationOptions));
    }
  }, {
    immediate: true,
    flush: "post"
  });
  const takeRecords = () => {
    return observer === null || observer === void 0 ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
function onElementRemoval(target, callback, options = {}) {
  const { window: window2 = defaultWindow, document: document2 = window2 === null || window2 === void 0 ? void 0 : window2.document, flush = "sync" } = options;
  if (!window2 || !document2) return noop;
  let stopFn;
  const cleanupAndUpdate = (fn) => {
    stopFn === null || stopFn === void 0 || stopFn();
    stopFn = fn;
  };
  const stopWatch = watchEffect(() => {
    const el = unrefElement(target);
    if (el) {
      const { stop } = useMutationObserver(document2, (mutationsList) => {
        if (mutationsList.map((mutation) => [...mutation.removedNodes]).flat().some((node) => node === el || node.contains(el))) callback(mutationsList);
      }, {
        window: window2,
        childList: true,
        subtree: true
      });
      cleanupAndUpdate(stop);
    }
  }, { flush });
  const stopHandle = () => {
    stopWatch();
    cleanupAndUpdate();
  };
  tryOnScopeDispose(stopHandle);
  return stopHandle;
}
// @__NO_SIDE_EFFECTS__
function useActiveElement(options = {}) {
  var _options$document;
  const { window: window2 = defaultWindow, deep = true, triggerOnRemoval = false } = options;
  const document2 = (_options$document = options.document) !== null && _options$document !== void 0 ? _options$document : window2 === null || window2 === void 0 ? void 0 : window2.document;
  const getDeepActiveElement = () => {
    let element = document2 === null || document2 === void 0 ? void 0 : document2.activeElement;
    if (deep) {
      var _element$shadowRoot;
      while (element === null || element === void 0 ? void 0 : element.shadowRoot) element = element === null || element === void 0 || (_element$shadowRoot = element.shadowRoot) === null || _element$shadowRoot === void 0 ? void 0 : _element$shadowRoot.activeElement;
    }
    return element;
  };
  const activeElement = shallowRef();
  const trigger = () => {
    activeElement.value = getDeepActiveElement();
  };
  if (window2) {
    const listenerOptions = {
      capture: true,
      passive: true
    };
    useEventListener(window2, "blur", (event) => {
      if (event.relatedTarget !== null) return;
      trigger();
    }, listenerOptions);
    useEventListener(window2, "focus", trigger, listenerOptions);
  }
  if (triggerOnRemoval) onElementRemoval(activeElement, trigger, { document: document2 });
  trigger();
  return activeElement;
}
const ssrWidthSymbol = /* @__PURE__ */ Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? /* @__PURE__ */ injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow, ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
  const isSupported = /* @__PURE__ */ useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  const ssrSupport = shallowRef(typeof ssrWidth === "number");
  const mediaQuery = shallowRef();
  const matches = shallowRef(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      const queryStrings = toValue(query).split(",");
      matches.value = queryStrings.some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) res = ssrWidth >= pxValue(minWidth[1]);
        if (maxWidth && res) res = ssrWidth <= pxValue(maxWidth[1]);
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value) return;
    mediaQuery.value = window2.matchMedia(toValue(query));
    matches.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => matches.value);
}
function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
function useCssVar(prop, target, options = {}) {
  const { window: window2 = defaultWindow, initialValue, observe = false } = options;
  const variable = shallowRef(initialValue);
  const elRef = computed(() => {
    var _window$document;
    return unrefElement(target) || (window2 === null || window2 === void 0 || (_window$document = window2.document) === null || _window$document === void 0 ? void 0 : _window$document.documentElement);
  });
  function updateCssVar() {
    const key2 = toValue(prop);
    const el = toValue(elRef);
    if (el && window2 && key2) {
      var _window$getComputedSt;
      const value = (_window$getComputedSt = window2.getComputedStyle(el).getPropertyValue(key2)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.trim();
      variable.value = value || variable.value || initialValue;
    }
  }
  if (observe) useMutationObserver(elRef, updateCssVar, {
    attributeFilter: ["style", "class"],
    window: window2
  });
  watch([elRef, () => toValue(prop)], (_, old) => {
    if (old[0] && old[1]) old[0].style.removeProperty(old[1]);
    updateCssVar();
  }, { immediate: true });
  watch([variable, elRef], ([val, el]) => {
    const raw_prop = toValue(prop);
    if ((el === null || el === void 0 ? void 0 : el.style) && raw_prop) {
      if (val == null) el.style.removeProperty(raw_prop);
      else el.style.setProperty(raw_prop, val);
    }
  }, { immediate: true });
  return variable;
}
// @__NO_SIDE_EFFECTS__
function useDocumentVisibility(options = {}) {
  const { document: document2 = defaultDocument } = options;
  if (!document2) return shallowRef("visible");
  const visibility = shallowRef(document2.visibilityState);
  useEventListener(document2, "visibilitychange", () => {
    visibility.value = document2.visibilityState;
  }, { passive: true });
  return visibility;
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = /* @__PURE__ */ useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const _targets = toValue(target);
    return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
  });
  const stopWatch = watch(targets, (els) => {
    cleanup();
    if (isSupported.value && window2) {
      observer = new ResizeObserver(callback);
      for (const _el of els) if (_el instanceof Element) observer.observe(_el, observerOptions);
    }
  }, {
    immediate: true,
    flush: "post"
  });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useElementBounding(target, options = {}) {
  const { reset = true, windowResize = true, windowScroll = true, immediate = true, updateTiming = "sync" } = options;
  const height = shallowRef(0);
  const bottom = shallowRef(0);
  const left = shallowRef(0);
  const right = shallowRef(0);
  const top = shallowRef(0);
  const width = shallowRef(0);
  const x = shallowRef(0);
  const y = shallowRef(0);
  function recalculate() {
    const el = unrefElement(target);
    if (!el) {
      if (reset) {
        height.value = 0;
        bottom.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        width.value = 0;
        x.value = 0;
        y.value = 0;
      }
      return;
    }
    const rect = el.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }
  function update() {
    if (updateTiming === "sync") recalculate();
    else if (updateTiming === "next-frame") requestAnimationFrame(() => recalculate());
  }
  useResizeObserver(target, update);
  watch(() => unrefElement(target), (ele) => !ele && update());
  useMutationObserver(target, update, { attributeFilter: ["style", "class"] });
  if (windowScroll) useEventListener("scroll", update, {
    capture: true,
    passive: true
  });
  if (windowResize) useEventListener("resize", update, { passive: true });
  tryOnMounted(() => {
    if (immediate) update();
  });
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}
function useElementSize(target, initialSize = {
  width: 0,
  height: 0
}, options = {}) {
  const { window: window2 = defaultWindow, box = "content-box" } = options;
  const isSVG = computed(() => {
    var _unrefElement;
    return (_unrefElement = unrefElement(target)) === null || _unrefElement === void 0 || (_unrefElement = _unrefElement.namespaceURI) === null || _unrefElement === void 0 ? void 0 : _unrefElement.includes("svg");
  });
  const width = shallowRef(initialSize.width);
  const height = shallowRef(initialSize.height);
  const { stop: stop1 } = useResizeObserver(target, ([entry]) => {
    const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
    if (window2 && isSVG.value) {
      const $elem = unrefElement(target);
      if ($elem) {
        const rect = $elem.getBoundingClientRect();
        width.value = rect.width;
        height.value = rect.height;
      }
    } else if (boxSize) {
      const formatBoxSize = toArray(boxSize);
      width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
      height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
    } else {
      width.value = entry.contentRect.width;
      height.value = entry.contentRect.height;
    }
  }, options);
  tryOnMounted(() => {
    const ele = unrefElement(target);
    if (ele && "offsetWidth" in ele) {
      if (box === "content-box" && window2) {
        const cs = window2.getComputedStyle(ele);
        const padX = Number.parseFloat(cs.paddingLeft) + Number.parseFloat(cs.paddingRight);
        const padY = Number.parseFloat(cs.paddingTop) + Number.parseFloat(cs.paddingBottom);
        const bdX = Number.parseFloat(cs.borderLeftWidth) + Number.parseFloat(cs.borderRightWidth);
        const bdY = Number.parseFloat(cs.borderTopWidth) + Number.parseFloat(cs.borderBottomWidth);
        width.value = ele.offsetWidth - padX - bdX;
        height.value = ele.offsetHeight - padY - bdY;
      } else {
        width.value = ele.offsetWidth;
        height.value = ele.offsetHeight;
      }
    } else if (ele) {
      width.value = initialSize.width;
      height.value = initialSize.height;
    }
  });
  const stop2 = watch(() => unrefElement(target), (ele) => {
    width.value = ele ? initialSize.width : 0;
    height.value = ele ? initialSize.height : 0;
  });
  function stop() {
    stop1();
    stop2();
  }
  return {
    width,
    height,
    stop
  };
}
function useIntersectionObserver(target, callback, options = {}) {
  const { root: root2, rootMargin, threshold = 0, window: window2 = defaultWindow, immediate = true } = options;
  const isSupported = /* @__PURE__ */ useSupported(() => window2 && "IntersectionObserver" in window2);
  const targets = computed(() => {
    const _target = toValue(target);
    return toArray(_target).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop;
  const isActive = shallowRef(immediate);
  const stopWatch = isSupported.value ? watch(() => [
    targets.value,
    unrefElement(root2),
    toValue(rootMargin),
    isActive.value
  ], ([targets2, root3, rootMargin2]) => {
    cleanup();
    if (!isActive.value) return;
    if (!targets2.length) return;
    const observer = new IntersectionObserver(callback, {
      root: unrefElement(root3),
      rootMargin: rootMargin2,
      threshold
    });
    targets2.forEach((el) => el && observer.observe(el));
    cleanup = () => {
      observer.disconnect();
      cleanup = noop;
    };
  }, {
    immediate,
    flush: "post"
  }) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}
// @__NO_SIDE_EFFECTS__
function useVModel(props, key2, emit, options = {}) {
  var _vm$$emit, _vm$proxy;
  const { clone = false, passive = false, eventName, deep = false, defaultValue, shouldEmit } = options;
  const vm = getCurrentInstance();
  const _emit = (vm === null || vm === void 0 ? void 0 : vm.emit) || (vm === null || vm === void 0 || (_vm$$emit = vm.$emit) === null || _vm$$emit === void 0 ? void 0 : _vm$$emit.bind(vm)) || (vm === null || vm === void 0 || (_vm$proxy = vm.proxy) === null || _vm$proxy === void 0 || (_vm$proxy = _vm$proxy.$emit) === null || _vm$proxy === void 0 ? void 0 : _vm$proxy.bind(vm === null || vm === void 0 ? void 0 : vm.proxy));
  let event = eventName;
  event = event || `update:${key2.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue2 = () => isDef(props[key2]) ? cloneFn(props[key2]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value)) _emit(event, value);
    } else _emit(event, value);
  };
  if (passive) {
    const initialValue = getValue2();
    const proxy = ref(initialValue);
    let isUpdating = false;
    watch(() => props[key2], (v) => {
      if (!isUpdating) {
        isUpdating = true;
        proxy.value = cloneFn(v);
        nextTick(() => isUpdating = false);
      }
    });
    watch(proxy, (v) => {
      if (!isUpdating && (v !== props[key2] || deep)) triggerEmit(v);
    }, { deep });
    return proxy;
  } else return computed({
    get() {
      return getValue2();
    },
    set(value) {
      triggerEmit(value);
    }
  });
}
// @__NO_SIDE_EFFECTS__
function useWindowFocus(options = {}) {
  const { window: window2 = defaultWindow } = options;
  if (!window2) return shallowRef(false);
  const focused = shallowRef(window2.document.hasFocus());
  const listenerOptions = { passive: true };
  useEventListener(window2, "blur", () => {
    focused.value = false;
  }, listenerOptions);
  useEventListener(window2, "focus", () => {
    focused.value = true;
  }, listenerOptions);
  return focused;
}
// @__NO_SIDE_EFFECTS__
function useWindowSize(options = {}) {
  const { window: window2 = defaultWindow, initialWidth = Number.POSITIVE_INFINITY, initialHeight = Number.POSITIVE_INFINITY, listenOrientation = true, includeScrollbar = true, type = "inner" } = options;
  const width = shallowRef(initialWidth);
  const height = shallowRef(initialHeight);
  const update = () => {
    if (window2) {
      if (type === "outer") {
        width.value = window2.outerWidth;
        height.value = window2.outerHeight;
      } else if (type === "visual" && window2.visualViewport) {
        const { width: visualViewportWidth, height: visualViewportHeight, scale } = window2.visualViewport;
        width.value = Math.round(visualViewportWidth * scale);
        height.value = Math.round(visualViewportHeight * scale);
      } else if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  const listenerOptions = { passive: true };
  useEventListener("resize", update, listenerOptions);
  if (window2 && type === "visual" && window2.visualViewport) useEventListener(window2.visualViewport, "resize", update, listenerOptions);
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return {
    width,
    height
  };
}
const useDeprecated = ({ from, replacement, scope, version, ref: ref2, type = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
    if (val) debugWarn(scope, `[${type}] ${from} is about to be deprecated in version ${version}, please use ${replacement} instead.
For more detail, please visit: ${ref2}
`);
  }, { immediate: true });
};
const FOCUSABLE_ELEMENT_SELECTORS = `a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])`;
const isShadowRoot = (e) => {
  if (typeof ShadowRoot === "undefined") return false;
  return e instanceof ShadowRoot;
};
const isHTMLElement = (e) => {
  if (typeof Element === "undefined") return false;
  return e instanceof Element;
};
const isVisible = (element) => {
  return getComputedStyle(element).position === "fixed" ? false : element.offsetParent !== null;
};
const obtainAllFocusableElements$1 = (element) => {
  return Array.from(element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)).filter((item) => isFocusable(item) && isVisible(item));
};
const isFocusable = (element) => {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) return true;
  if (element.tabIndex < 0 || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true") return false;
  switch (element.nodeName) {
    case "A":
      return !!element.href && element.rel !== "ignore";
    case "INPUT":
      return !(element.type === "hidden" || element.type === "file");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    default:
      return false;
  }
};
const triggerEvent = function(elm, name, ...opts) {
  let eventName;
  if (name.includes("mouse") || name.includes("click")) eventName = "MouseEvents";
  else if (name.includes("key")) eventName = "KeyboardEvent";
  else eventName = "HTMLEvents";
  const evt = document.createEvent(eventName);
  evt.initEvent(name, ...opts);
  elm.dispatchEvent(evt);
  return elm;
};
const isLeaf = (el) => !el.getAttribute("aria-owns");
const getSibling = (el, distance, elClass) => {
  const { parentNode } = el;
  if (!parentNode) return null;
  const siblings = parentNode.querySelectorAll(elClass);
  return siblings[Array.prototype.indexOf.call(siblings, el) + distance] || null;
};
const focusElement = (el, options) => {
  if (!el || !el.focus) return;
  let cleanup = false;
  if (isHTMLElement(el) && !isFocusable(el) && !el.getAttribute("tabindex")) {
    el.setAttribute("tabindex", "-1");
    cleanup = true;
  }
  el.focus(options);
  if (isHTMLElement(el) && cleanup) el.removeAttribute("tabindex");
};
const focusNode = (el) => {
  if (!el) return;
  focusElement(el);
  !isLeaf(el) && el.click();
};
const isFirefox = () => isClient && /firefox/i.test(window.navigator.userAgent);
const isAndroid = () => isClient && /android/i.test(window.navigator.userAgent);
const SCOPE$2 = "utils/dom/style";
const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls) return false;
  if (cls.includes(" ")) throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim()) return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim()) return;
  el.classList.remove(...classNameToArray(cls));
};
const getStyle = (element, styleName) => {
  if (!isClient || !element || !styleName || isShadowRoot(element)) return "";
  let key2 = camelize(styleName);
  if (key2 === "float") key2 = "cssFloat";
  try {
    const style = element.style[key2];
    if (style) return style;
    const computed2 = document.defaultView?.getComputedStyle(element, "");
    return computed2 ? computed2[key2] : "";
  } catch {
    return element.style[key2];
  }
};
const setStyle = (element, styleName, value) => {
  if (!element || !styleName) return;
  if (isObject$2(styleName)) entriesOf(styleName).forEach(([prop, value2]) => setStyle(element, prop, value2));
  else {
    const key2 = camelize(styleName);
    element.style[key2] = value;
  }
};
function addUnit(value, defaultUnit = "px") {
  if (!value && value !== 0) return "";
  if (isNumber(value) || isStringNumber(value)) return `${value}${defaultUnit}`;
  else if (isString(value)) return value;
  debugWarn(SCOPE$2, "binding value must be a string or number");
}
const useDraggable = (targetRef, dragRef, draggable, overflow) => {
  const transform = {
    offsetX: 0,
    offsetY: 0
  };
  const isDragging = ref(false);
  const adjustPosition = (moveX, moveY) => {
    if (targetRef.value) {
      const { offsetX, offsetY } = transform;
      const targetRect = targetRef.value.getBoundingClientRect();
      const targetLeft = Math.max(targetRect.left, 0);
      const targetTop = Math.max(targetRect.top, 0);
      const targetWidth = targetRect.width;
      const targetHeight = targetRect.height;
      const clientWidth = document.documentElement.clientWidth;
      const clientHeight = document.documentElement.clientHeight;
      const minLeft = -targetLeft + offsetX;
      const minTop = -targetTop + offsetY;
      const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
      const maxTop = clientHeight - targetTop - (targetHeight < clientHeight ? targetHeight : 0) + offsetY;
      if (!overflow?.value) {
        moveX = clamp$1(moveX, minLeft, maxLeft);
        moveY = clamp$1(moveY, minTop, maxTop);
      }
      transform.offsetX = moveX;
      transform.offsetY = moveY;
      targetRef.value.style.transform = `translate(${addUnit(moveX)}, ${addUnit(moveY)})`;
    }
  };
  const onMousedown = (e) => {
    const downX = e.clientX;
    const downY = e.clientY;
    const { offsetX, offsetY } = transform;
    const onMousemove = (e2) => {
      if (!isDragging.value) isDragging.value = true;
      const moveX = offsetX + e2.clientX - downX;
      const moveY = offsetY + e2.clientY - downY;
      adjustPosition(moveX, moveY);
    };
    const onMouseup = () => {
      isDragging.value = false;
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("mouseup", onMouseup);
    };
    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("mouseup", onMouseup);
  };
  const onDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.addEventListener("mousedown", onMousedown);
      window.addEventListener("resize", updatePosition);
    }
  };
  const offDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.removeEventListener("mousedown", onMousedown);
      window.removeEventListener("resize", updatePosition);
    }
  };
  const resetPosition = () => {
    transform.offsetX = 0;
    transform.offsetY = 0;
    if (targetRef.value) targetRef.value.style.transform = "";
  };
  const updatePosition = () => {
    const { offsetX, offsetY } = transform;
    adjustPosition(offsetX, offsetY);
  };
  onMounted(() => {
    watchEffect(() => {
      if (draggable.value) onDraggable();
      else offDraggable();
    });
  });
  onBeforeUnmount(() => {
    offDraggable();
  });
  return {
    isDragging,
    resetPosition,
    updatePosition
  };
};
var en_default = {
  name: "en",
  el: {
    breadcrumb: { label: "Breadcrumb" },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value",
      alphaDescription: "alpha {alpha}, current color is {color}",
      hueLabel: "pick hue value",
      hueDescription: "hue {hue}, current color is {color}",
      svLabel: "pick saturation and brightness value",
      svDescription: "saturation {saturation}, brightness {brightness}, current color is {color}",
      predefineDescription: "select {value} as the color"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      quarterTablePrompt: "Use the arrow keys and enter to select the quarter",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    input: { characters: "{count} / {max} characters" },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: { loading: "Loading" },
    dropdown: { toggleDropdown: "Toggle Dropdown" },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: { close: "Close this dialog" },
    drawer: { close: "Close this dialog" },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum",
      selectAllLabel: "Select all rows",
      selectRowLabel: "Select this row",
      expandRowLabel: "Expand this row",
      collapseRowLabel: "Collapse this row",
      sortLabel: "Sort by {column}",
      filterLabel: "Filter by {column}"
    },
    tag: { close: "Close this tag" },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish",
      close: "Close this dialog"
    },
    tree: { emptyText: "No Data" },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: { error: "FAILED" },
    pageHeader: { title: "Back" },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    },
    inputOTP: {
      groupLabel: "OTP Input",
      defaultLabel: "Please enter OTP character {index}"
    }
  }
};
const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key2) => `${option?.[key2] ?? `{${key2}}`}`);
const buildLocaleContext = (locale) => {
  return {
    lang: computed(() => unref(locale).name),
    locale: isRef(locale) ? locale : ref(locale),
    t: buildTranslator(locale)
  };
};
const localeContextKey = /* @__PURE__ */ Symbol("localeContextKey");
const useLocale = (localeOverrides) => {
  const locale = localeOverrides || inject(localeContextKey, ref());
  return buildLocaleContext(computed(() => locale.value || en_default));
};
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) cls += `-${blockSuffix}`;
  if (element) cls += `__${element}`;
  if (modifier) cls += `--${modifier}`;
  return cls;
};
const namespaceContextKey = /* @__PURE__ */ Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = namespaceOverrides || (getCurrentInstance() ? inject(namespaceContextKey, ref("el")) : ref("el"));
  return computed(() => {
    return unref(derivedNamespace) || "el";
  });
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace(namespaceOverrides);
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state2 = args.length >= 1 ? args[0] : true;
    return name && state2 ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key2 in object) if (object[key2]) styles[`--${namespace.value}-${key2}`] = object[key2];
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key2 in object) if (object[key2]) styles[`--${namespace.value}-${block}-${key2}`] = object[key2];
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
function easeInOutCubic(t, b, c, d) {
  const cc = c - b;
  t /= d / 2;
  if (t < 1) return cc / 2 * t * t * t + b;
  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}
const rAF = (fn) => isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16);
const cAF = (handle) => isClient ? window.cancelAnimationFrame(handle) : clearTimeout(handle);
const isScroll = (el, isVertical) => {
  if (!isClient) return false;
  const key2 = {
    undefined: "overflow",
    true: "overflow-y",
    false: "overflow-x"
  }[String(isVertical)];
  const overflow = getStyle(el, key2);
  return [
    "scroll",
    "auto",
    "overlay"
  ].some((s) => overflow.includes(s));
};
const getScrollContainer = (el, isVertical) => {
  if (!isClient) return;
  let parent = el;
  while (parent) {
    if ([
      window,
      document,
      document.documentElement
    ].includes(parent)) return window;
    if (isScroll(parent, isVertical)) return parent;
    if (isShadowRoot(parent)) parent = parent.host;
    else parent = parent.parentNode;
  }
  return parent;
};
let scrollBarWidth;
const getScrollBarWidth = (namespace) => {
  if (!isClient) return 0;
  if (scrollBarWidth !== void 0) return scrollBarWidth;
  const outer = document.createElement("div");
  outer.className = `${namespace}-scrollbar__wrap`;
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  outer.parentNode?.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};
function scrollIntoView(container, selected) {
  if (!isClient) return;
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer !== null && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) container.scrollTop = top;
  else if (bottom > viewRectBottom) container.scrollTop = bottom - container.clientHeight;
}
function animateScrollTo(container, from, to, duration, callback) {
  const startTime = Date.now();
  let handle;
  const scroll = () => {
    const time = Date.now() - startTime;
    const nextScrollTop = easeInOutCubic(time > duration ? duration : time, from, to, duration);
    if (isWindow(container)) container.scrollTo(window.pageXOffset, nextScrollTop);
    else container.scrollTop = nextScrollTop;
    if (time < duration) handle = rAF(scroll);
    else if (isFunction$1(callback)) callback();
  };
  scroll();
  return () => {
    handle && cAF(handle);
  };
}
const getScrollElement = (target, container) => {
  if (isWindow(container)) return target.ownerDocument.documentElement;
  return container;
};
const getScrollTop = (container) => {
  if (isWindow(container)) return window.scrollY;
  return container.scrollTop;
};
const useLockscreen = (trigger, options = {}) => {
  if (!isRef(trigger)) throwError("[useLockscreen]", "You need to pass a ref param to this function");
  const ns = options.ns || useNamespace("popup");
  const hiddenCls = computed(() => ns.bm("parent", "hidden"));
  let scrollBarWidth2 = 0;
  let withoutHiddenClass = false;
  let bodyWidth = "0";
  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    setTimeout(() => {
      if (typeof document === "undefined") return;
      if (withoutHiddenClass && document) {
        document.body.style.width = bodyWidth;
        removeClass(document.body, hiddenCls.value);
      }
    }, 200);
  };
  watch(trigger, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    cleaned = false;
    withoutHiddenClass = !hasClass(document.body, hiddenCls.value);
    if (withoutHiddenClass) {
      bodyWidth = document.body.style.width;
      addClass(document.body, hiddenCls.value);
    }
    scrollBarWidth2 = getScrollBarWidth(ns.namespace.value);
    const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
    const bodyOverflowY = getStyle(document.body, "overflowY");
    if (scrollBarWidth2 > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) document.body.style.width = `calc(100% - ${scrollBarWidth2}px)`;
  });
  onScopeDispose(() => cleanup());
};
const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler?.(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) return oursHandler?.(event);
  };
  return handleEvent;
};
const whenMouse = (handler) => {
  return (e) => e.pointerType === "mouse" ? handler(e) : void 0;
};
const getEventCode = (event) => {
  if (event.code && event.code !== "Unidentified") return event.code;
  const key2 = getEventKey(event);
  if (key2) {
    if (Object.values(EVENT_CODE).includes(key2)) return key2;
    switch (key2) {
      case " ":
        return EVENT_CODE.space;
      default:
        return "";
    }
  }
  return "";
};
const getEventKey = (event) => {
  let key2 = event.key && event.key !== "Unidentified" ? event.key : "";
  if (!key2 && event.type === "keyup" && isAndroid()) {
    const target = event.target;
    key2 = target.value.charAt(target.selectionStart - 1);
  }
  return key2;
};
const useProp = (name) => {
  const vm = getCurrentInstance();
  return computed(() => vm?.proxy?.$props?.[name]);
};
const useSameTarget = (handleClick) => {
  if (!handleClick) return {
    onClick: NOOP,
    onMousedown: NOOP,
    onMouseup: NOOP
  };
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e) => {
    if (mousedownTarget && mouseupTarget) handleClick(e);
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e) => {
    mousedownTarget = e.target === e.currentTarget;
  };
  const onMouseup = (e) => {
    mouseupTarget = e.target === e.currentTarget;
  };
  return {
    onClick,
    onMousedown,
    onMouseup
  };
};
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = /* @__PURE__ */ Symbol("elIdInjection");
const useIdInjection = () => {
  return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};
const useId = (deterministicId) => {
  const idInjection = useIdInjection();
  if (!isClient && idInjection === defaultIdInjection) debugWarn("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const namespace = useGetDerivedNamespace();
  return computedEager(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
};
let registeredEscapeHandlers = [];
const cachedHandler = (event) => {
  if (getEventCode(event) === EVENT_CODE.esc) registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
};
const useEscapeKeydown = (handler) => {
  onMounted(() => {
    if (registeredEscapeHandlers.length === 0) document.addEventListener("keydown", cachedHandler);
    if (isClient) registeredEscapeHandlers.push(handler);
  });
  onBeforeUnmount(() => {
    registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
    if (registeredEscapeHandlers.length === 0) {
      if (isClient) document.removeEventListener("keydown", cachedHandler);
    }
  });
};
const initial$1 = { current: 0 };
const zIndex = ref(0);
const defaultInitialZIndex = 2e3;
const ZINDEX_INJECTION_KEY = /* @__PURE__ */ Symbol("elZIndexContextKey");
const zIndexContextKey = /* @__PURE__ */ Symbol("zIndexContextKey");
const useZIndex = (zIndexOverrides) => {
  const increasingInjection = getCurrentInstance() ? inject(ZINDEX_INJECTION_KEY, initial$1) : initial$1;
  const zIndexInjection = zIndexOverrides || (getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0);
  const initialZIndex = computed(() => {
    const zIndexFromInjection = unref(zIndexInjection);
    return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
  });
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    increasingInjection.current++;
    zIndex.value = increasingInjection.current;
    return currentZIndex.value;
  };
  if (!isClient && !inject(ZINDEX_INJECTION_KEY)) debugWarn("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`);
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
function useCursor(input) {
  let selectionInfo;
  function recordCursor() {
    if (input.value == void 0) return;
    const { selectionStart, selectionEnd, value } = input.value;
    if (selectionStart == null || selectionEnd == null) return;
    selectionInfo = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt: value.slice(0, Math.max(0, selectionStart)),
      afterTxt: value.slice(Math.max(0, selectionEnd))
    };
  }
  function setCursor() {
    if (input.value == void 0 || selectionInfo == void 0) return;
    const { value } = input.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionInfo;
    if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0) return;
    let startPos = value.length;
    if (value.endsWith(afterTxt)) startPos = value.length - afterTxt.length;
    else if (value.startsWith(beforeTxt)) startPos = beforeTxt.length;
    else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) startPos = newIndex + 1;
    }
    input.value.setSelectionRange(startPos, startPos);
  }
  return [recordCursor, setCursor];
}
const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const SIZE_INJECTION_KEY = /* @__PURE__ */ Symbol("size");
const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {});
  return computed(() => {
    return unref(injectedSize.size) || "";
  });
};
function useFocusController(target, { disabled, beforeFocus, afterFocus, beforeBlur, afterBlur } = {}) {
  const { emit } = getCurrentInstance();
  const wrapperRef = shallowRef();
  const isFocused = ref(false);
  const handleFocus = (event) => {
    const cancelFocus = isFunction$1(beforeFocus) ? beforeFocus(event) : false;
    if (unref(disabled) || isFocused.value || cancelFocus) return;
    isFocused.value = true;
    emit("focus", event);
    afterFocus?.();
  };
  const handleBlur = (event) => {
    const cancelBlur = isFunction$1(beforeBlur) ? beforeBlur(event) : false;
    if (unref(disabled) || event.relatedTarget && wrapperRef.value?.contains(event.relatedTarget) || cancelBlur) return;
    isFocused.value = false;
    emit("blur", event);
    afterBlur?.();
  };
  const handleClick = (event) => {
    if (unref(disabled) || isFocusable(event.target) || wrapperRef.value?.contains(document.activeElement) && wrapperRef.value !== document.activeElement) return;
    target.value?.focus();
  };
  watch([wrapperRef, () => unref(disabled)], ([el, disabled2]) => {
    if (!el) return;
    if (disabled2) el.removeAttribute("tabindex");
    else el.setAttribute("tabindex", "-1");
  });
  useEventListener(wrapperRef, "focus", handleFocus, true);
  useEventListener(wrapperRef, "blur", handleBlur, true);
  useEventListener(wrapperRef, "click", handleClick, true);
  return {
    isFocused,
    /** Avoid using wrapperRef and handleFocus/handleBlur together */
    wrapperRef,
    handleFocus,
    handleBlur
  };
}
function useComposition({ afterComposition, emit }) {
  const isComposing = ref(false);
  const handleCompositionStart = (event) => {
    emit?.("compositionstart", event);
    isComposing.value = true;
  };
  const handleCompositionUpdate = (event) => {
    emit?.("compositionupdate", event);
    isComposing.value = true;
  };
  const handleCompositionEnd = (event) => {
    emit?.("compositionend", event);
    if (isComposing.value) {
      isComposing.value = false;
      nextTick(() => afterComposition(event));
    }
  };
  const handleComposition = (event) => {
    event.type === "compositionend" ? handleCompositionEnd(event) : handleCompositionUpdate(event);
  };
  return {
    isComposing,
    handleComposition,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  };
}
const emptyValuesContextKey = /* @__PURE__ */ Symbol("emptyValuesContextKey");
const SCOPE$1 = "use-empty-values";
const DEFAULT_EMPTY_VALUES = [
  "",
  void 0,
  null
];
const useEmptyValuesProps = buildProps({
  /**
  * @description empty values supported by the component
  */
  emptyValues: Array,
  /**
  * @description return value when cleared, if you want to set `undefined`, use `() => undefined`
  */
  valueOnClear: {
    type: definePropType([
      String,
      Number,
      Boolean,
      Function
    ]),
    default: void 0,
    validator: (val) => {
      val = isFunction$1(val) ? val() : val;
      if (isArray$1(val)) return val.every((item) => !item);
      return !val;
    }
  }
});
const useEmptyValues = (props, defaultValue) => {
  const config = getCurrentInstance() ? inject(emptyValuesContextKey, ref({})) : ref({});
  const emptyValues = computed(() => props.emptyValues || config.value.emptyValues || DEFAULT_EMPTY_VALUES);
  const valueOnClear = computed(() => {
    if (isFunction$1(props.valueOnClear)) return props.valueOnClear();
    else if (props.valueOnClear !== void 0) return props.valueOnClear;
    else if (isFunction$1(config.value.valueOnClear)) return config.value.valueOnClear();
    else if (config.value.valueOnClear !== void 0) return config.value.valueOnClear;
    return defaultValue !== void 0 ? defaultValue : void 0;
  });
  const isEmptyValue = (value) => {
    let result = true;
    if (isArray$1(value)) result = emptyValues.value.some((emptyValue) => {
      return isEqual(value, emptyValue);
    });
    else result = emptyValues.value.includes(value);
    return result;
  };
  if (!isEmptyValue(valueOnClear.value)) debugWarn(SCOPE$1, "value-on-clear should be a value of empty-values");
  return {
    emptyValues,
    valueOnClear,
    isEmptyValue
  };
};
const ariaProps = buildProps({
  /**
  * @description native `aria-label` attribute
  */
  ariaLabel: String,
  /**
  * @description native `aria-orientation` attribute
  */
  ariaOrientation: {
    type: String,
    values: [
      "horizontal",
      "vertical",
      "undefined"
    ]
  },
  /**
  * @description native `aria-controls` attribute
  */
  ariaControls: String
});
const useAriaProps = (arias) => {
  return pick(ariaProps, arias);
};
const withPropsDefaultsSetter = (target) => {
  const _p = target.props;
  const props = isArray$1(_p) ? fromPairs(_p.map((key2) => [key2, {}])) : _p;
  target.setPropsDefaults = (defaults) => {
    if (!props) return;
    for (const [key2, value] of Object.entries(defaults)) {
      const prop = props[key2];
      if (!hasOwn(props, key2)) continue;
      if (isPlainObject(prop)) {
        props[key2] = {
          ...prop,
          default: value
        };
        continue;
      }
      props[key2] = {
        type: prop,
        default: value
      };
    }
    target.props = props;
  };
};
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra ?? {})]) app.component(comp.name, comp);
  };
  if (extra) for (const [key2, comp] of Object.entries(extra)) main[key2] = comp;
  withPropsDefaultsSetter(main);
  return main;
};
const withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
const withInstallDirective = (directive, name) => {
  directive.install = (app) => {
    app.directive(name, directive);
  };
  return directive;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  withPropsDefaultsSetter(component);
  return component;
};
var _sfc_main6 = /* @__PURE__ */ defineComponent({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), arrow_down_default = _sfc_main6;
var _sfc_main8 = /* @__PURE__ */ defineComponent({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0"
      })
    ]));
  }
}), arrow_left_default = _sfc_main8;
var _sfc_main10 = /* @__PURE__ */ defineComponent({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512 340.864 831.872a30.59 30.59 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), arrow_right_default = _sfc_main10;
var _sfc_main12 = /* @__PURE__ */ defineComponent({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), arrow_up_default = _sfc_main12;
var _sfc_main14 = /* @__PURE__ */ defineComponent({
  name: "Back",
  __name: "back",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"
      }),
      createBaseVNode("path", {
        fill: "currentColor",
        d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
      })
    ]));
  }
}), back_default = _sfc_main14;
var _sfc_main29 = /* @__PURE__ */ defineComponent({
  name: "Calendar",
  __name: "calendar",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64"
      })
    ]));
  }
}), calendar_default = _sfc_main29;
var _sfc_main34 = /* @__PURE__ */ defineComponent({
  name: "CaretRight",
  __name: "caret-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M384 192v640l384-320.064z"
      })
    ]));
  }
}), caret_right_default = _sfc_main34;
var _sfc_main35 = /* @__PURE__ */ defineComponent({
  name: "CaretTop",
  __name: "caret-top",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 320 192 704h639.936z"
      })
    ]));
  }
}), caret_top_default = _sfc_main35;
var _sfc_main43 = /* @__PURE__ */ defineComponent({
  name: "Check",
  __name: "check",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), check_default = _sfc_main43;
var _sfc_main48 = /* @__PURE__ */ defineComponent({
  name: "CircleCheckFilled",
  __name: "circle-check-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), circle_check_filled_default = _sfc_main48;
var _sfc_main49 = /* @__PURE__ */ defineComponent({
  name: "CircleCheck",
  __name: "circle-check",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752z"
      })
    ]));
  }
}), circle_check_default = _sfc_main49;
var _sfc_main50 = /* @__PURE__ */ defineComponent({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), circle_close_filled_default = _sfc_main50;
var _sfc_main51 = /* @__PURE__ */ defineComponent({
  name: "CircleClose",
  __name: "circle-close",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), circle_close_default = _sfc_main51;
var _sfc_main54 = /* @__PURE__ */ defineComponent({
  name: "Clock",
  __name: "clock",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      }),
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"
      })
    ]));
  }
}), clock_default = _sfc_main54;
var _sfc_main56 = /* @__PURE__ */ defineComponent({
  name: "Close",
  __name: "close",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), close_default = _sfc_main56;
var _sfc_main72 = /* @__PURE__ */ defineComponent({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.59 30.59 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.59 30.59 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672zm256 0a29.12 29.12 0 0 1 41.728 0 30.59 30.59 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.59 30.59 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672z"
      })
    ]));
  }
}), d_arrow_left_default = _sfc_main72;
var _sfc_main73 = /* @__PURE__ */ defineComponent({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.59 30.59 0 0 1 0-42.752L764.736 512 452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.59 30.59 0 0 1 0-42.752L508.736 512 196.864 192a30.59 30.59 0 0 1 0-42.688"
      })
    ]));
  }
}), d_arrow_right_default = _sfc_main73;
var _sfc_main80 = /* @__PURE__ */ defineComponent({
  name: "Delete",
  __name: "delete",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
      })
    ]));
  }
}), delete_default = _sfc_main80;
var _sfc_main90 = /* @__PURE__ */ defineComponent({
  name: "Document",
  __name: "document",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"
      })
    ]));
  }
}), document_default = _sfc_main90;
var _sfc_main118 = /* @__PURE__ */ defineComponent({
  name: "FullScreen",
  __name: "full-screen",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"
      })
    ]));
  }
}), full_screen_default = _sfc_main118;
var _sfc_main133 = /* @__PURE__ */ defineComponent({
  name: "Hide",
  __name: "hide",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176S0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4 12.8 9.6 22.4 9.6 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4m-646.4 528Q115.2 579.2 76.8 512q43.2-72 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4m140.8-96Q352 555.2 352 512c0-44.8 16-83.2 48-112s67.2-48 112-48c28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6q-43.2 72-153.6 172.8c-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176S1024 528 1024 512s-48.001-73.6-134.401-176"
      }),
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112s-67.2 48-112 48"
      })
    ]));
  }
}), hide_default = _sfc_main133;
var _sfc_main143 = /* @__PURE__ */ defineComponent({
  name: "InfoFilled",
  __name: "info-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.99 12.99 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), info_filled_default = _sfc_main143;
var _sfc_main150 = /* @__PURE__ */ defineComponent({
  name: "Loading",
  __name: "loading",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0"
      })
    ]));
  }
}), loading_default = _sfc_main150;
var _sfc_main169 = /* @__PURE__ */ defineComponent({
  name: "Minus",
  __name: "minus",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), minus_default = _sfc_main169;
var _sfc_main174 = /* @__PURE__ */ defineComponent({
  name: "MoreFilled",
  __name: "more-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"
      })
    ]));
  }
}), more_filled_default = _sfc_main174;
var _sfc_main175 = /* @__PURE__ */ defineComponent({
  name: "More",
  __name: "more",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96"
      })
    ]));
  }
}), more_default = _sfc_main175;
var _sfc_main195 = /* @__PURE__ */ defineComponent({
  name: "PictureFilled",
  __name: "picture-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      })
    ]));
  }
}), picture_filled_default = _sfc_main195;
var _sfc_main201 = /* @__PURE__ */ defineComponent({
  name: "Plus",
  __name: "plus",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), plus_default = _sfc_main201;
var _sfc_main211 = /* @__PURE__ */ defineComponent({
  name: "QuestionFilled",
  __name: "question-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592q0-64.416-42.24-101.376c-28.16-25.344-65.472-37.312-111.232-37.312m-12.672 406.208a54.27 54.27 0 0 0-38.72 14.784 49.4 49.4 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.85 54.85 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.97 51.97 0 0 0-15.488-38.016 55.94 55.94 0 0 0-39.424-14.784"
      })
    ]));
  }
}), question_filled_default = _sfc_main211;
var _sfc_main215 = /* @__PURE__ */ defineComponent({
  name: "RefreshLeft",
  __name: "refresh-left",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
      })
    ]));
  }
}), refresh_left_default = _sfc_main215;
var _sfc_main216 = /* @__PURE__ */ defineComponent({
  name: "RefreshRight",
  __name: "refresh-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88"
      })
    ]));
  }
}), refresh_right_default = _sfc_main216;
var _sfc_main222 = /* @__PURE__ */ defineComponent({
  name: "ScaleToOriginal",
  __name: "scale-to-original",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.12 30.12 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.12 30.12 0 0 0-30.118-30.118m-361.412 0a30.12 30.12 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.12 30.12 0 0 0-30.118-30.118M512 361.412a30.12 30.12 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.12 30.12 0 0 0 512 361.412M512 512a30.12 30.12 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.12 30.12 0 0 0 512 512"
      })
    ]));
  }
}), scale_to_original_default = _sfc_main222;
var _sfc_main225 = /* @__PURE__ */ defineComponent({
  name: "Search",
  __name: "search",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), search_default = _sfc_main225;
var _sfc_main242 = /* @__PURE__ */ defineComponent({
  name: "SortDown",
  __name: "sort-down",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0"
      })
    ]));
  }
}), sort_down_default = _sfc_main242;
var _sfc_main243 = /* @__PURE__ */ defineComponent({
  name: "SortUp",
  __name: "sort-up",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248"
      })
    ]));
  }
}), sort_up_default = _sfc_main243;
var _sfc_main246 = /* @__PURE__ */ defineComponent({
  name: "StarFilled",
  __name: "star-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M313.6 924.48a70.4 70.4 0 0 1-74.152-5.365 70.4 70.4 0 0 1-27.992-68.875l37.888-220.928L88.96 472.96a70.4 70.4 0 0 1 3.788-104.225A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 100.246-28.595 70.4 70.4 0 0 1 25.962 28.595l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
      })
    ]));
  }
}), star_filled_default = _sfc_main246;
var _sfc_main247 = /* @__PURE__ */ defineComponent({
  name: "Star",
  __name: "star",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
      })
    ]));
  }
}), star_default = _sfc_main247;
var _sfc_main249 = /* @__PURE__ */ defineComponent({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), success_filled_default = _sfc_main249;
var _sfc_main283 = /* @__PURE__ */ defineComponent({
  name: "View",
  __name: "view",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), view_default = _sfc_main283;
var _sfc_main287 = /* @__PURE__ */ defineComponent({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), warning_filled_default = _sfc_main287;
var _sfc_main292 = /* @__PURE__ */ defineComponent({
  name: "ZoomIn",
  __name: "zoom-in",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), zoom_in_default = _sfc_main292;
var _sfc_main293 = /* @__PURE__ */ defineComponent({
  name: "ZoomOut",
  __name: "zoom-out",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createBaseVNode("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704M352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64"
      })
    ]));
  }
}), zoom_out_default = _sfc_main293;
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const CloseComponents = { Close: close_default };
const TypeComponents = {
  Close: close_default,
  SuccessFilled: success_filled_default,
  InfoFilled: info_filled_default,
  WarningFilled: warning_filled_default,
  CircleCloseFilled: circle_close_filled_default
};
const TypeComponentsMap = {
  primary: info_filled_default,
  success: success_filled_default,
  warning: warning_filled_default,
  error: circle_close_filled_default,
  info: info_filled_default
};
const ValidateComponentsMap = {
  validating: loading_default,
  success: circle_check_default,
  error: circle_close_default
};
const iconProps = buildProps({
  /**
  * @description SVG icon size, size x size
  */
  size: { type: definePropType([Number, String]) },
  /**
  * @description SVG tag's fill attribute
  */
  color: { type: String }
});
var icon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ElIcon",
  inheritAttrs: false,
  __name: "icon",
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      const fontSize = addUnit(size);
      if (!fontSize && !color) return {};
      return {
        fontSize,
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: style.value
      }, _ctx.$attrs), [renderSlot(_ctx.$slots, "default")], 16);
    };
  }
});
var icon_default = icon_vue_vue_type_script_setup_true_lang_default;
const ElIcon = withInstall(icon_default);
const formContextKey = /* @__PURE__ */ Symbol("formContextKey");
const formItemContextKey = /* @__PURE__ */ Symbol("formItemContextKey");
const useFormSize = (fallback, ignore = {}) => {
  const emptyRef = ref(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig2 = ignore.global ? emptyRef : useGlobalSize();
  const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
  return computed(() => size.value || unref(fallback) || formItem?.size || form?.size || globalConfig2.value || "");
};
const useFormDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = inject(formContextKey, void 0);
  return computed(() => {
    return disabled.value ?? unref(fallback) ?? form?.disabled ?? false;
  });
};
const useFormItem = () => {
  return {
    form: inject(formContextKey, void 0),
    formItem: inject(formItemContextKey, void 0)
  };
};
const useFormItemInputId = (props, { formItemContext, disableIdGeneration, disableIdManagement }) => {
  if (!disableIdGeneration) disableIdGeneration = ref(false);
  if (!disableIdManagement) disableIdManagement = ref(false);
  const instance = getCurrentInstance();
  const inLabel = () => {
    let parent = instance?.parent;
    while (parent) {
      if (parent.type.name === "ElFormItem") return false;
      if (parent.type.name === "ElLabelWrap") return true;
      parent = parent.parent;
    }
    return false;
  };
  const inputId = ref();
  let idUnwatch = void 0;
  const isLabeledByFormItem = computed(() => {
    return !!(!(props.label || props.ariaLabel) && formItemContext && formItemContext.inputIds && formItemContext.inputIds?.length <= 1);
  });
  onMounted(() => {
    idUnwatch = watch([toRef(props, "id"), disableIdGeneration], ([id, disableIdGeneration2]) => {
      const newId = id ?? (!disableIdGeneration2 ? useId().value : void 0);
      if (newId !== inputId.value) {
        if (formItemContext?.removeInputId && !inLabel()) {
          inputId.value && formItemContext.removeInputId(inputId.value);
          if (!disableIdManagement?.value && !disableIdGeneration2 && newId) formItemContext.addInputId(newId);
        }
        inputId.value = newId;
      }
    }, { immediate: true });
  });
  onUnmounted(() => {
    idUnwatch && idUnwatch();
    if (formItemContext?.removeInputId) inputId.value && formItemContext.removeInputId(inputId.value);
  });
  return {
    isLabeledByFormItem,
    inputId
  };
};
const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
const FOCUS_AFTER_TRAPPED_OPTS = {
  cancelable: true,
  bubbles: false
};
const FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = /* @__PURE__ */ Symbol("elFocusTrap");
const focusReason = ref();
const lastUserFocusTimestamp = ref(0);
const lastAutomatedFocusTimestamp = ref(0);
let focusReasonUserCount = 0;
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
    const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
    if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
    return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) if (!isHidden(element, container)) return element;
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden") return true;
  while (element) {
    if (container && element === container) return false;
    if (getComputedStyle(element).display === "none") return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  return [getVisibleElement(focusable, container), getVisibleElement(focusable.reverse(), container)];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element) {
    const prevFocusedElement = document.activeElement;
    focusElement(element, { preventScroll: true });
    lastAutomatedFocusTimestamp.value = window.performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) element.select();
  }
};
function removeFromStack(list, item) {
  const copy = [...list];
  const idx = list.indexOf(item);
  if (idx !== -1) copy.splice(idx, 1);
  return copy;
}
const createFocusableStack = () => {
  let stack = [];
  const push = (layer) => {
    const currentLayer = stack[0];
    if (currentLayer && layer !== currentLayer) currentLayer.pause();
    stack = removeFromStack(stack, layer);
    stack.unshift(layer);
  };
  const remove = (layer) => {
    stack = removeFromStack(stack, layer);
    stack[0]?.resume?.();
  };
  return {
    push,
    remove
  };
};
const focusFirstDescendant = (elements, shouldSelect = false) => {
  const prevFocusedElement = document.activeElement;
  for (const element of elements) {
    tryFocus(element, shouldSelect);
    if (document.activeElement !== prevFocusedElement) return;
  }
};
const focusableStack = createFocusableStack();
const isFocusCausedByUserEvent = () => {
  return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value;
};
const notifyFocusReasonPointer = () => {
  focusReason.value = "pointer";
  lastUserFocusTimestamp.value = window.performance.now();
};
const notifyFocusReasonKeydown = () => {
  focusReason.value = "keyboard";
  lastUserFocusTimestamp.value = window.performance.now();
};
const useFocusReason = () => {
  onMounted(() => {
    if (focusReasonUserCount === 0) {
      document.addEventListener("mousedown", notifyFocusReasonPointer);
      document.addEventListener("touchstart", notifyFocusReasonPointer);
      document.addEventListener("keydown", notifyFocusReasonKeydown);
    }
    focusReasonUserCount++;
  });
  onBeforeUnmount(() => {
    focusReasonUserCount--;
    if (focusReasonUserCount <= 0) {
      document.removeEventListener("mousedown", notifyFocusReasonPointer);
      document.removeEventListener("touchstart", notifyFocusReasonPointer);
      document.removeEventListener("keydown", notifyFocusReasonKeydown);
    }
  });
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
const createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};
var focus_trap_vue_vue_type_script_lang_default = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = ref();
    let lastFocusBeforeTrapped;
    let lastFocusAfterTrapped;
    const { focusReason: focusReason2 } = useFocusReason();
    useEscapeKeydown((event) => {
      if (props.trapped && !focusLayer.paused) emit("release-requested", event);
    });
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    };
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped) return;
      if (focusLayer.paused) return;
      const { altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = getEventCode(e) === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        if (!(first && last)) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({ focusReason: focusReason2.value });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) e.preventDefault();
          }
        } else if (!shiftKey && currentFocusingEl === last) {
          const focusoutPreventedEvent = createFocusOutPreventedEvent({ focusReason: focusReason2.value });
          emit("focusout-prevented", focusoutPreventedEvent);
          if (!focusoutPreventedEvent.defaultPrevented) {
            e.preventDefault();
            if (loop) tryFocus(first, true);
          }
        } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
          const focusoutPreventedEvent = createFocusOutPreventedEvent({ focusReason: focusReason2.value });
          emit("focusout-prevented", focusoutPreventedEvent);
          if (!focusoutPreventedEvent.defaultPrevented) {
            e.preventDefault();
            if (loop) tryFocus(last, true);
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    watch(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) forwardRef.value = focusTrapEl;
    }, { immediate: true });
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const trapOnFocus = (e) => {
      emit(ON_TRAP_FOCUS_EVT, e);
    };
    const releaseOnFocus = (e) => emit(ON_RELEASE_FOCUS_EVT, e);
    const onFocusIn = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer) return;
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        if (!(relatedTarget && trapContainer.contains(relatedTarget))) lastFocusBeforeTrapped = relatedTarget;
      }
      if (isFocusedInTrap) emit("focusin", e);
      if (focusLayer.paused) return;
      if (props.trapped) {
        if (isFocusedInTrap) lastFocusAfterTrapped = target;
        else tryFocus(lastFocusAfterTrapped, true);
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = unref(forwardRef);
      if (focusLayer.paused || !trapContainer) return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) setTimeout(() => {
          if (!focusLayer.paused && props.trapped) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({ focusReason: focusReason2.value });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) tryFocus(lastFocusAfterTrapped, true);
          }
        }, 0);
      } else {
        const target = e.target;
        if (!(target && trapContainer.contains(target))) emit("focusout", e);
      }
    };
    async function startTrap() {
      await nextTick();
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        focusableStack.push(focusLayer);
        const prevFocusedElement = trapContainer.contains(document.activeElement) ? lastFocusBeforeTrapped : document.activeElement;
        lastFocusBeforeTrapped = prevFocusedElement;
        if (!trapContainer.contains(prevFocusedElement)) {
          const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
          trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
          trapContainer.dispatchEvent(focusEvent);
          if (!focusEvent.defaultPrevented) nextTick(() => {
            let focusStartEl = props.focusStartEl;
            if (!isString(focusStartEl)) {
              tryFocus(focusStartEl);
              if (document.activeElement !== focusStartEl) focusStartEl = "first";
            }
            if (focusStartEl === "first") focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
            if (document.activeElement === prevFocusedElement || focusStartEl === "container") tryFocus(trapContainer);
          });
        }
      }
    }
    function stopTrap() {
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
        const releasedEvent = new CustomEvent(FOCUS_AFTER_RELEASED, {
          ...FOCUS_AFTER_TRAPPED_OPTS,
          detail: { focusReason: focusReason2.value }
        });
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        trapContainer.dispatchEvent(releasedEvent);
        if (!releasedEvent.defaultPrevented && (focusReason2.value == "keyboard" || !isFocusCausedByUserEvent() || trapContainer.contains(document.activeElement))) tryFocus(lastFocusBeforeTrapped ?? document.body);
        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        focusableStack.remove(focusLayer);
        lastFocusBeforeTrapped = null;
        lastFocusAfterTrapped = null;
      }
    }
    onMounted(() => {
      if (props.trapped) startTrap();
      watch(() => props.trapped, (trapped) => {
        if (trapped) startTrap();
        else stopTrap();
      });
    });
    onBeforeUnmount(() => {
      if (props.trapped) stopTrap();
      if (forwardRef.value) {
        forwardRef.value.removeEventListener("keydown", onKeydown);
        forwardRef.value.removeEventListener("focusin", onFocusIn);
        forwardRef.value.removeEventListener("focusout", onFocusOut);
        forwardRef.value = void 0;
      }
      lastFocusBeforeTrapped = null;
      lastFocusAfterTrapped = null;
    });
    return { onKeydown };
  }
});
var _plugin_vue_export_helper_default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key2, val] of props) target[key2] = val;
  return target;
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var focus_trap_default = /* @__PURE__ */ _plugin_vue_export_helper_default(focus_trap_vue_vue_type_script_lang_default, [["render", _sfc_render$1]]);
var focus_trap_default$1 = focus_trap_default;
const mutable = (val) => val;
const inputProps = buildProps({
  /**
  * @description native input id
  */
  id: {
    type: String,
    default: void 0
  },
  /**
  * @description input box size
  */
  size: useSizeProp,
  /**
  * @description whether to disable
  */
  disabled: {
    type: Boolean,
    default: void 0
  },
  /**
  * @description binding value
  */
  modelValue: {
    type: definePropType([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  /**
  * @description v-model modifiers, reference [Vue modifiers](https://vuejs.org/guide/essentials/forms.html#modifiers)
  */
  modelModifiers: {
    type: definePropType(Object),
    default: () => ({})
  },
  /**
  * @description same as `maxlength` in native input
  */
  maxlength: { type: [String, Number] },
  /**
  * @description same as `minlength` in native input
  */
  minlength: { type: [String, Number] },
  /**
  * @description type of input, see more in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)
  */
  type: {
    type: definePropType(String),
    default: "text"
  },
  /**
  * @description control the resizability
  */
  resize: {
    type: String,
    values: [
      "none",
      "both",
      "horizontal",
      "vertical"
    ]
  },
  /**
  * @description whether textarea has an adaptive height
  */
  autosize: {
    type: definePropType([Boolean, Object]),
    default: false
  },
  /**
  * @description native input autocomplete
  */
  autocomplete: {
    type: definePropType(String),
    default: "off"
  },
  /**
  * @description format content
  */
  formatter: { type: Function },
  /**
  * @description parse content
  */
  parser: { type: Function },
  /**
  * @description placeholder
  */
  placeholder: { type: String },
  /**
  * @description native input form
  */
  form: { type: String },
  /**
  * @description native input readonly
  */
  readonly: Boolean,
  /**
  * @description whether to show clear button
  */
  clearable: Boolean,
  /**
  * @description custom clear icon component
  */
  clearIcon: {
    type: iconPropType,
    default: circle_close_default
  },
  /**
  * @description toggleable password input
  */
  showPassword: Boolean,
  /**
  * @description word count
  */
  showWordLimit: Boolean,
  /**
  * @description word count position, valid when `show-word-limit` is true
  */
  wordLimitPosition: {
    type: String,
    values: ["inside", "outside"],
    default: "inside"
  },
  /**
  * @description suffix icon
  */
  suffixIcon: { type: iconPropType },
  /**
  * @description prefix icon
  */
  prefixIcon: { type: iconPropType },
  /**
  * @description container role, internal properties provided for use by the picker component
  */
  containerRole: {
    type: String,
    default: void 0
  },
  /**
  * @description input tabindex
  */
  tabindex: {
    type: [String, Number],
    default: 0
  },
  /**
  * @description whether to trigger form validation
  */
  validateEvent: {
    type: Boolean,
    default: true
  },
  /**
  * @description input or textarea element style
  */
  inputStyle: {
    type: definePropType([
      Object,
      Array,
      String,
      Boolean
    ]),
    default: () => mutable({})
  },
  /**
  * @description Count graphemes of input value. If it's set, native maxlength and minlength won't be used.
  */
  countGraphemes: { type: definePropType(Function) },
  /**
  * @description native input autofocus
  */
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...useAriaProps(["ariaLabel"]),
  /**
  * @description native input mode for virtual keyboards
  */
  inputmode: {
    type: definePropType(String),
    default: void 0
  },
  /**
  * @description same as `name` in native input
  */
  name: String
});
const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString(value),
  input: (value) => isString(value),
  change: (value, evt) => isString(value) && (evt instanceof Event || evt === void 0),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: (evt) => evt === void 0 || evt instanceof MouseEvent,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof Event,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};
({
  clearIcon: markRaw(circle_close_default)
});
let hiddenTextarea = void 0;
const HIDDEN_STYLE = {
  height: "0",
  visibility: "hidden",
  overflow: isFirefox() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
};
const CONTEXT_STYLE = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing",
  "word-break"
];
const looseToNumber = (val) => {
  const n = Number.parseFloat(val);
  return Number.isNaN(n) ? val : n;
};
function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);
  const boxSizing = style.getPropertyValue("box-sizing");
  const paddingSize = Number.parseFloat(style.getPropertyValue("padding-bottom")) + Number.parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = Number.parseFloat(style.getPropertyValue("border-bottom-width")) + Number.parseFloat(style.getPropertyValue("border-top-width"));
  return {
    contextStyle: CONTEXT_STYLE.map((name) => [name, style.getPropertyValue(name)]),
    paddingSize,
    borderSize,
    boxSizing
  };
}
function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    let hostNode = document.body;
    if (!isFirefox() && targetElement.parentNode) hostNode = targetElement.parentNode;
    hostNode.appendChild(hiddenTextarea);
  }
  const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
  contextStyle.forEach(([key2, value]) => hiddenTextarea?.style.setProperty(key2, value));
  Object.entries(HIDDEN_STYLE).forEach(([key2, value]) => hiddenTextarea?.style.setProperty(key2, value, "important"));
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
  let height = hiddenTextarea.scrollHeight;
  const result = {};
  if (boxSizing === "border-box") height = height + borderSize;
  else if (boxSizing === "content-box") height = height - paddingSize;
  hiddenTextarea.value = "";
  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
  if (isNumber(minRows)) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === "border-box") minHeight = minHeight + paddingSize + borderSize;
    height = Math.max(minHeight, height);
    result.minHeight = `${minHeight}px`;
  }
  if (isNumber(maxRows)) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === "border-box") maxHeight = maxHeight + paddingSize + borderSize;
    height = Math.min(maxHeight, height);
  }
  result.height = `${height}px`;
  hiddenTextarea.parentNode?.removeChild(hiddenTextarea);
  hiddenTextarea = void 0;
  return result;
}
const _hoisted_1$7 = [
  "id",
  "name",
  "minlength",
  "maxlength",
  "type",
  "disabled",
  "readonly",
  "autocomplete",
  "tabindex",
  "aria-label",
  "placeholder",
  "form",
  "autofocus",
  "role",
  "inputmode"
];
const _hoisted_2$6 = ["aria-label"];
const _hoisted_3$4 = [
  "id",
  "name",
  "minlength",
  "maxlength",
  "tabindex",
  "disabled",
  "readonly",
  "autocomplete",
  "aria-label",
  "placeholder",
  "form",
  "autofocus",
  "rows",
  "role",
  "inputmode"
];
const _hoisted_4$2 = ["aria-label"];
const COMPONENT_NAME$1 = "ElInput";
var input_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: COMPONENT_NAME$1,
  inheritAttrs: false,
  __name: "input",
  props: inputProps,
  emits: inputEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const rawAttrs = useAttrs$1();
    const slots = useSlots();
    const containerKls = computed(() => [
      props.type === "textarea" ? nsTextarea.b() : nsInput.b(),
      nsInput.m(inputSize.value),
      nsInput.is("disabled", inputDisabled.value),
      nsInput.is("exceed", inputExceed.value),
      {
        [nsInput.b("group")]: slots.prepend || slots.append,
        [nsInput.m("prefix")]: slots.prefix || props.prefixIcon,
        [nsInput.m("suffix")]: slots.suffix || props.suffixIcon || props.clearable || props.showPassword,
        [nsInput.bm("suffix", "password-clear")]: showClear.value && showPwdVisible.value,
        [nsInput.b("hidden")]: props.type === "hidden"
      },
      rawAttrs.class
    ]);
    const wrapperKls = computed(() => [nsInput.e("wrapper"), nsInput.is("focus", isFocused.value)]);
    const attrs = useAttrs();
    const maxlength = computed(() => props.maxlength?.toString());
    const { form: elForm, formItem: elFormItem } = useFormItem();
    const { inputId } = useFormItemInputId(props, { formItemContext: elFormItem });
    const inputSize = useFormSize();
    const inputDisabled = useFormDisabled();
    const nsInput = useNamespace("input");
    const nsTextarea = useNamespace("textarea");
    const { t } = useLocale();
    const input = shallowRef();
    const textarea = shallowRef();
    const hovering = ref(false);
    const passwordVisible = ref(false);
    const countStyle = ref();
    const clearIconStyle = ref();
    const textareaCalcStyle = shallowRef(props.inputStyle);
    const saveValue = ref("");
    let passwordFocusValue;
    const textareaHeight = ref();
    const _ref = computed(() => input.value || textarea.value);
    const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(_ref, {
      disabled: inputDisabled,
      afterFocus() {
        if (props.showPassword) passwordFocusValue = _ref.value?.value;
      },
      beforeBlur(event) {
        if (props.showPassword) {
          const target = _ref.value;
          if (event.relatedTarget && target?.parentElement?.contains(event.relatedTarget)) return;
          const value = target?.value;
          if (!isNil(value) && !isNil(passwordFocusValue) && value !== passwordFocusValue) target?.dispatchEvent(new Event("change", { bubbles: true }));
          passwordFocusValue = void 0;
        }
      },
      afterBlur() {
        if (props.validateEvent) elFormItem?.validate?.("blur").catch(NOOP);
      }
    });
    const needStatusIcon = computed(() => elForm?.statusIcon ?? false);
    const validateState = computed(() => elFormItem?.validateState || "");
    const validateIcon = computed(() => validateState.value && ValidateComponentsMap[validateState.value]);
    const passwordIcon = computed(() => passwordVisible.value ? view_default : hide_default);
    const containerStyle = computed(() => [rawAttrs.style]);
    const textareaStyle = computed(() => [
      props.inputStyle,
      textareaCalcStyle.value,
      { resize: props.resize },
      textareaHeight.value ? { height: textareaHeight.value } : void 0
    ]);
    const nativeInputValue = computed(() => isNil(props.modelValue) ? "" : String(props.modelValue));
    const renderClear = computed(() => props.clearable && !inputDisabled.value && !props.readonly);
    const showClear = computed(() => renderClear.value && !!nativeInputValue.value && (isFocused.value || hovering.value));
    const showPwdVisible = computed(() => props.showPassword && !inputDisabled.value && !!nativeInputValue.value);
    const isWordLimitVisible = computed(() => props.showWordLimit && !!maxlength.value && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = computed(() => {
      if (props.countGraphemes && props.showWordLimit) return props.countGraphemes(nativeInputValue.value);
      return nativeInputValue.value.length;
    });
    const wordLimitLabel = computed(() => t("el.input.characters", {
      count: textLength.value,
      max: maxlength.value ?? ""
    }));
    const inputExceed = computed(() => !!isWordLimitVisible.value && textLength.value > Number(maxlength.value));
    const suffixVisible = computed(() => !!slots.suffix || !!props.suffixIcon || props.clearable || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    const hasModelModifiers = computed(() => !!Object.keys(props.modelModifiers).length);
    const [recordCursor, setCursor] = useCursor(input);
    let rAFId;
    useResizeObserver(textarea, (entries) => {
      onceInitSizeTextarea();
      if (!isWordLimitVisible.value && !renderClear.value || props.resize !== "both" && props.resize !== "horizontal") return;
      const { width } = entries[0].target.getBoundingClientRect();
      const updateStyle = () => {
        rAFId = void 0;
        countStyle.value = {
          /** right: 100% - (width - right(10)) */
          right: `calc(100% - ${width - 10}px)`
        };
        clearIconStyle.value = {
          /** right: 100% - (width - right(11)) */
          right: `calc(100% - ${width - 11}px)`
        };
      };
      rAFId && cAF(rAFId);
      rAFId = rAF(updateStyle);
    });
    const resizeTextarea = () => {
      const { type, autosize } = props;
      if (!isClient || type !== "textarea" || !textarea.value) return;
      if (autosize) {
        const minRows = isObject$2(autosize) ? autosize.minRows : void 0;
        const maxRows = isObject$2(autosize) ? autosize.maxRows : void 0;
        const textareaStyle2 = calcTextareaHeight(textarea.value, minRows, maxRows);
        textareaCalcStyle.value = {
          overflowY: "hidden",
          ...textareaStyle2
        };
        nextTick(() => {
          textarea.value.offsetHeight;
          textareaCalcStyle.value = textareaStyle2;
        });
      } else textareaCalcStyle.value = { minHeight: calcTextareaHeight(textarea.value).minHeight };
    };
    const createOnceInitResize = (resizeTextarea2) => {
      let isInit = false;
      return () => {
        if (isInit || !props.autosize) {
          if (props.resize !== "none") setTimeout(() => {
            textareaHeight.value = textarea.value?.style.height;
          });
          return;
        }
        if (!(textarea.value?.offsetParent === null)) {
          setTimeout(resizeTextarea2);
          isInit = true;
        }
      };
    };
    const onceInitSizeTextarea = createOnceInitResize(resizeTextarea);
    const setNativeInputValue = () => {
      const input2 = _ref.value;
      const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value;
      if (!input2 || input2.value === formatterValue || props.type === "file") return;
      input2.value = formatterValue;
    };
    const formatValue = (value) => {
      const { trim, number } = props.modelModifiers;
      if (trim) value = value.trim();
      if (number) value = `${looseToNumber(value)}`;
      if (props.formatter && props.parser) value = props.parser(value);
      return value;
    };
    const handleInput = async (event) => {
      if (isComposing.value) return;
      const { lazy } = props.modelModifiers;
      let { value } = event.target;
      let shouldForceNativeUpdate = false;
      if (lazy) {
        emit(INPUT_EVENT, value);
        return;
      }
      value = formatValue(value);
      if (props.countGraphemes && maxlength.value != null) {
        const limit = Number(maxlength.value);
        const graphemes = props.countGraphemes(value);
        const saveGraphemes = props.countGraphemes(saveValue.value);
        if (graphemes > limit && graphemes > saveGraphemes) {
          if (saveGraphemes > limit) {
            value = saveValue.value;
            shouldForceNativeUpdate = true;
          } else {
            const prevValue = saveValue.value;
            const nextValue = value;
            let prefixLen = 0;
            while (prefixLen < prevValue.length && prefixLen < nextValue.length && prevValue[prefixLen] === nextValue[prefixLen]) prefixLen++;
            let prevSuffixIndex = prevValue.length;
            let nextSuffixIndex = nextValue.length;
            while (prevSuffixIndex > prefixLen && nextSuffixIndex > prefixLen && prevValue[prevSuffixIndex - 1] === nextValue[nextSuffixIndex - 1]) {
              prevSuffixIndex--;
              nextSuffixIndex--;
            }
            const before = nextValue.slice(0, prefixLen);
            const removed = prevValue.slice(prefixLen, prevSuffixIndex);
            const inserted = nextValue.slice(prefixLen, nextSuffixIndex);
            const after = nextValue.slice(nextSuffixIndex);
            const baseCount = saveGraphemes - props.countGraphemes(removed);
            const availableInserted = Math.max(0, limit - baseCount);
            let acceptedInserted = "";
            if (availableInserted > 0) {
              if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
                const segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
                for (const { segment } of segmenter.segment(inserted)) {
                  const candidate = acceptedInserted + segment;
                  if (props.countGraphemes(candidate) > availableInserted) break;
                  acceptedInserted = candidate;
                }
              } else for (const char of Array.from(inserted)) {
                const candidate = acceptedInserted + char;
                if (props.countGraphemes(candidate) > availableInserted) break;
                acceptedInserted = candidate;
              }
            }
            value = before + acceptedInserted + after;
            shouldForceNativeUpdate = true;
          }
        }
      }
      if (String(value) === nativeInputValue.value) {
        if (props.formatter || shouldForceNativeUpdate) {
          const target = event.target;
          const blockedValue = target.value;
          const selectionStart = target.selectionStart;
          const selectionEnd = target.selectionEnd;
          setNativeInputValue();
          if (shouldForceNativeUpdate && _ref.value && selectionStart != null && selectionEnd != null) {
            const restoredValue = _ref.value.value;
            const afterTxt = blockedValue.slice(Math.max(0, selectionEnd));
            let caretPos = Math.min(selectionStart, restoredValue.length);
            if (afterTxt && restoredValue.endsWith(afterTxt)) caretPos = restoredValue.length - afterTxt.length;
            _ref.value.setSelectionRange(caretPos, caretPos);
          }
        }
        return;
      }
      saveValue.value = value;
      recordCursor();
      emit(UPDATE_MODEL_EVENT, value);
      emit(INPUT_EVENT, value);
      await nextTick();
      if (props.formatter && props.parser || !hasModelModifiers.value) setNativeInputValue();
      setCursor();
    };
    const handleChange = async (event) => {
      let { value } = event.target;
      if (props.showPassword) passwordFocusValue = value;
      value = formatValue(value);
      if (props.modelModifiers.lazy) emit(UPDATE_MODEL_EVENT, value);
      emit(CHANGE_EVENT, value, event);
      await nextTick();
      setNativeInputValue();
    };
    const { isComposing, handleCompositionStart, handleCompositionUpdate, handleCompositionEnd } = useComposition({
      emit,
      afterComposition: handleInput
    });
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
    };
    const focus = () => _ref.value?.focus();
    const blur = () => _ref.value?.blur();
    const handleMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const handleMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    const select = () => {
      _ref.value?.select();
    };
    const clear = (evt) => {
      emit(UPDATE_MODEL_EVENT, "");
      passwordFocusValue = "";
      emit(CHANGE_EVENT, "");
      emit("clear", evt);
      emit(INPUT_EVENT, "");
    };
    watch(() => props.modelValue, () => {
      nextTick(() => {
        resizeTextarea();
        if (props.autosize) textareaHeight.value = void 0;
      });
      if (props.validateEvent) elFormItem?.validate?.("change").catch(NOOP);
    });
    watch(() => nativeInputValue.value, (val) => {
      saveValue.value = val;
    }, { immediate: true });
    watch(nativeInputValue, (newValue) => {
      if (!_ref.value) return;
      const { trim, number } = props.modelModifiers;
      const elValue = _ref.value.value;
      const displayValue = (number || props.type === "number") && !/^0\d/.test(elValue) ? `${looseToNumber(elValue)}` : elValue;
      if (displayValue === newValue) return;
      if (document.activeElement === _ref.value && _ref.value.type !== "range") {
        if (trim && displayValue.trim() === newValue) return;
      }
      setNativeInputValue();
    });
    watch(() => props.type, async () => {
      await nextTick();
      setNativeInputValue();
      resizeTextarea();
    });
    onMounted(() => {
      if (!props.formatter && props.parser) debugWarn(COMPONENT_NAME$1, "If you set the parser, you also need to set the formatter.");
      setNativeInputValue();
      nextTick(resizeTextarea);
    });
    onBeforeUnmount(() => {
      rAFId && cAF(rAFId);
    });
    __expose({
      /** @description HTML input element */
      input,
      /** @description HTML textarea element */
      textarea,
      /** @description HTML element, input or textarea */
      ref: _ref,
      /** @description style of textarea. */
      textareaStyle,
      /** @description from props (used on unit test) */
      autosize: toRef(props, "autosize"),
      /** @description is input composing */
      isComposing,
      /** @description whether the password is visible */
      passwordVisible,
      /** @description HTML input element native method */
      focus,
      /** @description HTML input element native method */
      blur,
      /** @description HTML input element native method */
      select,
      /** @description clear input value */
      clear,
      /** @description resize textarea. */
      resizeTextarea
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([containerKls.value, {
          [unref(nsInput).bm("group", "append")]: _ctx.$slots.append,
          [unref(nsInput).bm("group", "prepend")]: _ctx.$slots.prepend
        }]),
        style: normalizeStyle(containerStyle.value),
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }, [createCommentVNode(" input "), __props.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createCommentVNode(" prepend slot "),
        _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(nsInput).be("group", "prepend"))
        }, [renderSlot(_ctx.$slots, "prepend")], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          ref_key: "wrapperRef",
          ref: wrapperRef,
          class: normalizeClass(wrapperKls.value)
        }, [
          createCommentVNode(" prefix slot "),
          _ctx.$slots.prefix || __props.prefixIcon ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(unref(nsInput).e("prefix"))
          }, [createBaseVNode("span", { class: normalizeClass(unref(nsInput).e("prefix-inner")) }, [renderSlot(_ctx.$slots, "prefix"), __props.prefixIcon ? (openBlock(), createBlock(unref(ElIcon), {
            key: 0,
            class: normalizeClass(unref(nsInput).e("icon"))
          }, {
            default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.prefixIcon)))]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true)], 2)], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("input", mergeProps({
            id: unref(inputId),
            ref_key: "input",
            ref: input,
            class: unref(nsInput).e("inner")
          }, unref(attrs), {
            name: __props.name,
            minlength: __props.countGraphemes ? void 0 : __props.minlength,
            maxlength: __props.countGraphemes ? void 0 : maxlength.value,
            type: __props.showPassword ? passwordVisible.value ? "text" : "password" : __props.type,
            disabled: unref(inputDisabled),
            readonly: __props.readonly,
            autocomplete: __props.autocomplete,
            tabindex: __props.tabindex,
            "aria-label": __props.ariaLabel,
            placeholder: __props.placeholder,
            style: __props.inputStyle,
            form: __props.form,
            autofocus: __props.autofocus,
            role: __props.containerRole,
            inputmode: __props.inputmode,
            onCompositionstart: _cache[0] || (_cache[0] = (...args) => unref(handleCompositionStart) && unref(handleCompositionStart)(...args)),
            onCompositionupdate: _cache[1] || (_cache[1] = (...args) => unref(handleCompositionUpdate) && unref(handleCompositionUpdate)(...args)),
            onCompositionend: _cache[2] || (_cache[2] = (...args) => unref(handleCompositionEnd) && unref(handleCompositionEnd)(...args)),
            onInput: handleInput,
            onChange: handleChange,
            onKeydown: handleKeydown
          }), null, 16, _hoisted_1$7),
          createCommentVNode(" suffix slot "),
          suffixVisible.value ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(unref(nsInput).e("suffix"))
          }, [createBaseVNode("span", { class: normalizeClass(unref(nsInput).e("suffix-inner")) }, [
            renderClear.value ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("clear")]),
              style: normalizeStyle({ visibility: showClear.value ? "visible" : "hidden" }),
              onMousedown: withModifiers(unref(NOOP), ["prevent"]),
              onClick: clear
            }, {
              default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.clearIcon)))]),
              _: 1
            }, 8, [
              "class",
              "style",
              "onMousedown"
            ])) : createCommentVNode("v-if", true),
            !showClear.value || !showPwdVisible.value || !isWordLimitVisible.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [renderSlot(_ctx.$slots, "suffix"), __props.suffixIcon ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(nsInput).e("icon"))
            }, {
              default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.suffixIcon)))]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true),
            showPwdVisible.value ? (openBlock(), createBlock(unref(ElIcon), {
              key: 2,
              class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("password")]),
              onClick: handlePasswordVisible,
              onMousedown: withModifiers(unref(NOOP), ["prevent"]),
              onMouseup: withModifiers(unref(NOOP), ["prevent"])
            }, {
              default: withCtx(() => [renderSlot(_ctx.$slots, "password-icon", { visible: passwordVisible.value }, () => [(openBlock(), createBlock(resolveDynamicComponent(passwordIcon.value)))])]),
              _: 3
            }, 8, [
              "class",
              "onMousedown",
              "onMouseup"
            ])) : createCommentVNode("v-if", true),
            isWordLimitVisible.value ? (openBlock(), createElementBlock("span", {
              key: 3,
              class: normalizeClass([unref(nsInput).e("count"), unref(nsInput).is("outside", __props.wordLimitPosition === "outside")]),
              "aria-label": wordLimitLabel.value,
              role: "status"
            }, [createBaseVNode("span", { class: normalizeClass(unref(nsInput).e("count-inner")) }, toDisplayString(textLength.value) + " / " + toDisplayString(maxlength.value), 3)], 10, _hoisted_2$6)) : createCommentVNode("v-if", true),
            validateState.value && validateIcon.value && needStatusIcon.value ? (openBlock(), createBlock(unref(ElIcon), {
              key: 4,
              class: normalizeClass([
                unref(nsInput).e("icon"),
                unref(nsInput).e("validateIcon"),
                unref(nsInput).is("loading", validateState.value === "validating")
              ])
            }, {
              default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(validateIcon.value)))]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true)
          ], 2)], 2)) : createCommentVNode("v-if", true)
        ], 2),
        createCommentVNode(" append slot "),
        _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(nsInput).be("group", "append"))
        }, [renderSlot(_ctx.$slots, "append")], 2)) : createCommentVNode("v-if", true)
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createCommentVNode(" textarea "),
        createBaseVNode("textarea", mergeProps({
          id: unref(inputId),
          ref_key: "textarea",
          ref: textarea,
          class: [
            unref(nsTextarea).e("inner"),
            unref(nsInput).is("focus", unref(isFocused)),
            unref(nsTextarea).is("clearable", __props.clearable)
          ]
        }, unref(attrs), {
          name: __props.name,
          minlength: __props.countGraphemes ? void 0 : __props.minlength,
          maxlength: __props.countGraphemes ? void 0 : maxlength.value,
          tabindex: __props.tabindex,
          disabled: unref(inputDisabled),
          readonly: __props.readonly,
          autocomplete: __props.autocomplete,
          style: textareaStyle.value,
          "aria-label": __props.ariaLabel,
          placeholder: __props.placeholder,
          form: __props.form,
          autofocus: __props.autofocus,
          rows: __props.rows,
          role: __props.containerRole,
          inputmode: __props.inputmode,
          onCompositionstart: _cache[3] || (_cache[3] = (...args) => unref(handleCompositionStart) && unref(handleCompositionStart)(...args)),
          onCompositionupdate: _cache[4] || (_cache[4] = (...args) => unref(handleCompositionUpdate) && unref(handleCompositionUpdate)(...args)),
          onCompositionend: _cache[5] || (_cache[5] = (...args) => unref(handleCompositionEnd) && unref(handleCompositionEnd)(...args)),
          onInput: handleInput,
          onFocus: _cache[6] || (_cache[6] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
          onBlur: _cache[7] || (_cache[7] = (...args) => unref(handleBlur) && unref(handleBlur)(...args)),
          onChange: handleChange,
          onKeydown: handleKeydown
        }), null, 16, _hoisted_3$4),
        showClear.value ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass([unref(nsTextarea).e("icon"), unref(nsTextarea).e("clear")]),
          style: normalizeStyle(clearIconStyle.value),
          onMousedown: withModifiers(unref(NOOP), ["prevent"]),
          onClick: clear
        }, {
          default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.clearIcon)))]),
          _: 1
        }, 8, [
          "class",
          "style",
          "onMousedown"
        ])) : createCommentVNode("v-if", true),
        isWordLimitVisible.value ? (openBlock(), createElementBlock("span", {
          key: 1,
          style: normalizeStyle(countStyle.value),
          class: normalizeClass([unref(nsInput).e("count"), unref(nsInput).is("outside", __props.wordLimitPosition === "outside")]),
          "aria-label": wordLimitLabel.value,
          role: "status"
        }, toDisplayString(textLength.value) + " / " + toDisplayString(maxlength.value), 15, _hoisted_4$2)) : createCommentVNode("v-if", true)
      ], 64))], 38);
    };
  }
});
var input_default = input_vue_vue_type_script_setup_true_lang_default;
const ElInput = withInstall(input_default);
const badgeProps = buildProps({
  /**
  * @description display value.
  */
  value: {
    type: [String, Number],
    default: ""
  },
  /**
  * @description maximum value, shows `{max}+` when exceeded. Only works if value is a number.
  */
  max: {
    type: Number,
    default: 99
  },
  /**
  * @description if a little dot is displayed.
  */
  isDot: Boolean,
  /**
  * @description hidden badge.
  */
  hidden: Boolean,
  /**
  * @description badge type.
  */
  type: {
    type: String,
    values: [
      "primary",
      "success",
      "warning",
      "info",
      "danger"
    ],
    default: "danger"
  },
  /**
  * @description whether to show badge when value is zero.
  */
  showZero: {
    type: Boolean,
    default: true
  },
  /**
  * @description customize dot background color
  */
  color: String,
  /**
  * @description CSS style of badge
  */
  badgeStyle: {
    type: definePropType([
      String,
      Object,
      Array,
      Boolean
    ]),
    default: void 0
  },
  /**
  * @description set offset of the badge
  */
  offset: {
    type: definePropType(Array),
    default: () => [0, 0]
  },
  /**
  * @description custom class name of badge
  */
  badgeClass: {
    type: definePropType([
      String,
      Array,
      Object,
      Boolean
    ]),
    default: void 0
  }
});
var badge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ElBadge",
  __name: "badge",
  props: badgeProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const ns = useNamespace("badge");
    const content = computed(() => {
      if (props.isDot) return "";
      if (isNumber(props.value) && isNumber(props.max)) return props.max < props.value ? `${props.max}+` : `${props.value}`;
      return `${props.value}`;
    });
    const style = computed(() => {
      return [{
        backgroundColor: props.color,
        marginRight: addUnit(-props.offset[0]),
        marginTop: addUnit(props.offset[1])
      }, props.badgeStyle ?? {}];
    });
    __expose({
      /** @description badge content */
      content
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", { class: normalizeClass(unref(ns).b()) }, [renderSlot(_ctx.$slots, "default"), createVNode(Transition, { name: `${unref(ns).namespace.value}-zoom-in-center` }, {
        default: withCtx(() => [!__props.hidden && (content.value || __props.isDot || _ctx.$slots.content) ? (openBlock(), createElementBlock("sup", {
          key: 0,
          class: normalizeClass([
            unref(ns).e("content"),
            unref(ns).em("content", __props.type),
            unref(ns).is("fixed", !!_ctx.$slots.default),
            unref(ns).is("dot", __props.isDot),
            unref(ns).is("hide-zero", !__props.showZero && __props.value === 0),
            __props.badgeClass
          ]),
          style: normalizeStyle(style.value)
        }, [renderSlot(_ctx.$slots, "content", { value: content.value }, () => [createTextVNode(toDisplayString(content.value), 1)])], 6)) : createCommentVNode("v-if", true)]),
        _: 3
      }, 8, ["name"])], 2);
    };
  }
});
var badge_default = badge_vue_vue_type_script_setup_true_lang_default;
const ElBadge = withInstall(badge_default);
const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonNativeTypes = [
  "button",
  "submit",
  "reset"
];
const buttonProps = buildProps({
  /**
  * @description button size
  */
  size: useSizeProp,
  /**
  * @description disable the button
  */
  disabled: {
    type: Boolean,
    default: void 0
  },
  /**
  * @description button type
  */
  type: {
    type: String,
    values: buttonTypes,
    default: ""
  },
  /**
  * @description icon component
  */
  icon: { type: iconPropType },
  /**
  * @description native button type
  */
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: "button"
  },
  /**
  * @description determine whether it's loading
  */
  loading: Boolean,
  /**
  * @description customize loading icon component
  */
  loadingIcon: {
    type: iconPropType,
    default: () => loading_default
  },
  /**
  * @description determine whether it's a plain button
  */
  plain: {
    type: Boolean,
    default: void 0
  },
  /**
  * @description determine whether it's a text button
  */
  text: {
    type: Boolean,
    default: void 0
  },
  /**
  * @description determine whether it's a link button
  */
  link: Boolean,
  /**
  * @description determine whether the text button background color is always on
  */
  bg: Boolean,
  /**
  * @description native button autofocus
  */
  autofocus: Boolean,
  /**
  * @description determine whether it's a round button
  */
  round: {
    type: Boolean,
    default: void 0
  },
  /**
  * @description determine whether it's a circle button
  */
  circle: Boolean,
  /**
  * @description determine whether it's a dashed button
  */
  dashed: {
    type: Boolean,
    default: void 0
  },
  /**
  * @description custom button color, automatically calculate `hover` and `active` color
  */
  color: String,
  /**
  * @description dark mode, which automatically converts `color` to dark mode colors
  */
  dark: Boolean,
  /**
  * @description automatically insert a space between two chinese characters
  */
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  /**
  * @description custom element tag
  */
  tag: {
    type: definePropType([String, Object]),
    default: "button"
  }
});
const buttonEmits = { click: (evt) => evt instanceof MouseEvent };
const configProviderContextKey = /* @__PURE__ */ Symbol();
const globalConfig = ref();
function useGlobalConfig(key2, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key2) return computed(() => config.value?.[key2] ?? defaultValue);
  else return config;
}
function useGlobalComponentSettings(block, sizeFallback) {
  const config = useGlobalConfig();
  const ns = useNamespace(block, computed(() => config.value?.namespace || "el"));
  const locale = useLocale(computed(() => config.value?.locale));
  const zIndex2 = useZIndex(computed(() => {
    const zIndex3 = config.value?.zIndex;
    return isNil(zIndex3) || Number.isNaN(zIndex3) ? defaultInitialZIndex : zIndex3;
  }));
  const size = computed(() => unref(sizeFallback) || config.value?.size || "");
  provideGlobalConfig(computed(() => unref(config) || {}));
  return {
    ns,
    locale,
    zIndex: zIndex2,
    size
  };
}
const provideGlobalConfig = (config, app, global2 = false) => {
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = inSetup ? provide : void 0;
  if (!provideFn) {
    debugWarn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!oldConfig?.value) return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  provideFn(localeContextKey, computed(() => context.value.locale));
  provideFn(namespaceContextKey, computed(() => context.value.namespace));
  provideFn(zIndexContextKey, computed(() => context.value.zIndex));
  provideFn(SIZE_INJECTION_KEY, { size: computed(() => context.value.size || "") });
  provideFn(emptyValuesContextKey, computed(() => ({
    emptyValues: context.value.emptyValues,
    valueOnClear: context.value.valueOnClear
  })));
  if (global2 || !globalConfig.value) globalConfig.value = context.value;
  return context;
};
const mergeConfig = (a, b) => {
  const keys2 = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
  const obj = {};
  for (const key2 of keys2) obj[key2] = b[key2] !== void 0 ? b[key2] : a[key2];
  return obj;
};
const configProviderProps = buildProps({
  /**
  * @description Controlling if the users want a11y features
  */
  a11y: {
    type: Boolean,
    default: true
  },
  /**
  * @description Locale Object
  */
  locale: { type: definePropType(Object) },
  /**
  * @description global component size
  */
  size: useSizeProp,
  /**
  * @description button related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#button-attribute)
  */
  button: { type: definePropType(Object) },
  /**
  * @description card related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#card-attribute)
  */
  card: { type: definePropType(Object) },
  /**
  * @description dialog related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#dialog-attribute)
  */
  dialog: { type: definePropType(Object) },
  /**
  * @description link related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#link-attribute)
  */
  link: { type: definePropType(Object) },
  /**
  * @description features at experimental stage to be added, all features are default to be set to false, [see the following table](https://element-plus.org/en-US/component/config-provider.html#experimental-features)                                                                            | ^[object]
  */
  experimentalFeatures: { type: definePropType(Object) },
  /**
  * @description Controls if we should handle keyboard navigation
  */
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  /**
  * @description message related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#message-attribute)
  */
  message: { type: definePropType(Object) },
  /**
  * @description global Initial zIndex
  */
  zIndex: Number,
  /**
  * @description global component className prefix (cooperated with [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1)) | ^[string]
  */
  namespace: {
    type: String,
    default: "el"
  },
  /**
  * @description table related configuration, [see the following table](https://element-plus.org/en-US/component/config-provider.html#table-attribute)
  */
  table: { type: definePropType(Object) },
  ...useEmptyValuesProps
});
const messageConfig = { placement: "top" };
const ConfigProvider = defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    const config = provideGlobalConfig(props);
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, config?.value?.message ?? {}, val ?? {});
    }, {
      immediate: true,
      deep: true
    });
    return () => renderSlot(slots, "default", { config: config?.value });
  }
});
const buttonGroupContextKey = /* @__PURE__ */ Symbol("buttonGroupContextKey");
const useButton = (props, emit) => {
  useDeprecated({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, computed(() => props.type === "text"));
  const buttonGroupContext = inject(buttonGroupContextKey, void 0);
  const globalConfig2 = useGlobalConfig("button");
  const { form } = useFormItem();
  const _size = useFormSize(computed(() => buttonGroupContext?.size));
  const _disabled = useFormDisabled();
  const _ref = ref();
  const slots = useSlots();
  const _type = computed(() => props.type || buttonGroupContext?.type || globalConfig2.value?.type || "");
  const autoInsertSpace = computed(() => props.autoInsertSpace ?? globalConfig2.value?.autoInsertSpace ?? false);
  const _plain = computed(() => props.plain ?? globalConfig2.value?.plain ?? false);
  const _round = computed(() => props.round ?? globalConfig2.value?.round ?? false);
  const _text = computed(() => props.text ?? globalConfig2.value?.text ?? false);
  const _dashed = computed(() => props.dashed ?? globalConfig2.value?.dashed ?? false);
  const _props = computed(() => {
    if (props.tag === "button") return {
      ariaDisabled: _disabled.value || props.loading,
      disabled: _disabled.value || props.loading,
      autofocus: props.autofocus,
      type: props.nativeType
    };
    return {};
  });
  const shouldAddSpace = computed(() => {
    const defaultSlot = slots.default?.();
    if (autoInsertSpace.value && defaultSlot?.length === 1) {
      const slot = defaultSlot[0];
      if (slot?.type === Text) {
        const text = slot.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(text.trim());
      }
    }
    return false;
  });
  const handleClick = (evt) => {
    if (_disabled.value || props.loading) {
      evt.stopPropagation();
      return;
    }
    if (props.nativeType === "reset") form?.resetFields();
    emit("click", evt);
  };
  return {
    _disabled,
    _size,
    _type,
    _ref,
    _props,
    _plain,
    _round,
    _text,
    _dashed,
    shouldAddSpace,
    handleClick
  };
};
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  const isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? n % max + max : n % max) / max;
  } else {
    n = n % max / max;
  }
  return n;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n) {
  if (Number(n) <= 1) {
    return `${Number(n) * 100}%`;
  }
  return n;
}
function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h2 = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max === min) {
    s = 0;
    h2 = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, l };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h2, s, l) {
  let r;
  let g;
  let b;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h2 + 1 / 3);
    g = hue2rgb(p, q, h2);
    b = hue2rgb(p, q, h2 - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h2 = 0;
  const v = max;
  const d = max - min;
  const s = max === 0 ? 0 : d / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, v };
}
function hsvToRgb(h2, s, v) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  const i = Math.floor(h2);
  const f = h2 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
  const rHex = pad2(Math.round(r).toString(16));
  const gHex = pad2(Math.round(g).toString(16));
  const bHex = pad2(Math.round(b).toString(16));
  if (allow3Char && rHex.startsWith(rHex.charAt(1)) && gHex.startsWith(gHex.charAt(1)) && bHex.startsWith(bHex.charAt(1))) {
    return rHex.charAt(0) + gHex.charAt(0) + bHex.charAt(0);
  }
  return rHex + gHex + bHex;
}
function rgbaToHex(r, g, b, a, allow4Char) {
  const rHex = pad2(Math.round(r).toString(16));
  const gHex = pad2(Math.round(g).toString(16));
  const bHex = pad2(Math.round(b).toString(16));
  const aHex = pad2(convertDecimalToHex(a));
  if (allow4Char && rHex.startsWith(rHex.charAt(1)) && gHex.startsWith(gHex.charAt(1)) && bHex.startsWith(bHex.charAt(1)) && aHex.startsWith(aHex.charAt(1))) {
    return rHex.charAt(0) + gHex.charAt(0) + bHex.charAt(0) + aHex.charAt(0);
  }
  return rHex + gHex + bHex + aHex;
}
function cmykToRgb(c, m, y, k) {
  const cConv = c / 100;
  const mConv = m / 100;
  const yConv = y / 100;
  const kConv = k / 100;
  const r = 255 * (1 - cConv) * (1 - kConv);
  const g = 255 * (1 - mConv) * (1 - kConv);
  const b = 255 * (1 - yConv) * (1 - kConv);
  return { r, g, b };
}
function rgbToCmyk(r, g, b) {
  let c = 1 - r / 255;
  let m = 1 - g / 255;
  let y = 1 - b / 255;
  let k = Math.min(c, m, y);
  if (k === 1) {
    c = 0;
    m = 0;
    y = 0;
  } else {
    c = (c - k) / (1 - k) * 100;
    m = (m - k) / (1 - k) * 100;
    y = (y - k) / (1 - k) * 100;
  }
  k *= 100;
  return {
    c: Math.round(c),
    m: Math.round(m),
    y: Math.round(y),
    k: Math.round(k)
  };
}
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
const names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color) {
  let rgb = { r: 0, g: 0, b: 0 };
  let a = 1;
  let s = null;
  let v = null;
  let l = null;
  let ok = false;
  let format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = "hsl";
    } else if (isValidCSSUnit(color.c) && isValidCSSUnit(color.m) && isValidCSSUnit(color.y) && isValidCSSUnit(color.k)) {
      rgb = cmykToRgb(color.c, color.m, color.y, color.k);
      ok = true;
      format = "cmyk";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
const CSS_INTEGER = "[-\\+]?\\d+%?";
const CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
const CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
const PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
const PERMISSIVE_MATCH4 = (
  // eslint-disable-next-line prettier/prettier
  "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?"
);
const matchers = {
  hex: /^[0-9a-fA-F]+$/,
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  cmyk: new RegExp("cmyk" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  let named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  let match;
  if (typeof color === "string" && color.length <= 9 && (color.startsWith("#") || matchers.hex.test(color))) {
    match = matchers.hex8.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }
    match = matchers.hex6.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }
    match = matchers.hex4.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1] + match[1]),
        g: parseIntFromHex(match[2] + match[2]),
        b: parseIntFromHex(match[3] + match[3]),
        a: convertHexToDecimal(match[4] + match[4]),
        format: named ? "name" : "hex8"
      };
    }
    match = matchers.hex3.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1] + match[1]),
        g: parseIntFromHex(match[2] + match[2]),
        b: parseIntFromHex(match[3] + match[3]),
        format: named ? "name" : "hex"
      };
    }
  }
  match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.cmyk.exec(color);
  if (match) {
    return {
      c: match[1],
      m: match[2],
      y: match[3],
      k: match[4]
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  if (typeof color === "number") {
    return !Number.isNaN(color);
  }
  return matchers.CSS_UNIT.test(color);
}
class TinyColor {
  constructor(color = "", opts = {}) {
    if (color instanceof TinyColor) {
      return color;
    }
    if (typeof color === "number") {
      color = numberInputToObject(color);
    }
    this.originalInput = color;
    const rgb = inputToRGB(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = opts.format ?? rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return !this.isDark();
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   */
  getBrightness() {
    const rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  }
  /**
   * Returns the perceived luminance of a color, from 0-1.
   */
  getLuminance() {
    const rgb = this.toRgb();
    let R;
    let G;
    let B;
    const RsRGB = rgb.r / 255;
    const GsRGB = rgb.g / 255;
    const BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R = RsRGB / 12.92;
    } else {
      R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G = GsRGB / 12.92;
    } else {
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B = BsRGB / 12.92;
    } else {
      B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  }
  /**
   * Returns the alpha value of a color, from 0-1.
   */
  getAlpha() {
    return this.a;
  }
  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */
  setAlpha(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  }
  /**
   * Returns whether the color is monochrome.
   */
  isMonochrome() {
    const { s } = this.toHsl();
    return s === 0;
  }
  /**
   * Returns the object as a HSVA object.
   */
  toHsv() {
    const hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  }
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  toHsvString() {
    const hsv = rgbToHsv(this.r, this.g, this.b);
    const h2 = Math.round(hsv.h * 360);
    const s = Math.round(hsv.s * 100);
    const v = Math.round(hsv.v * 100);
    return this.a === 1 ? `hsv(${h2}, ${s}%, ${v}%)` : `hsva(${h2}, ${s}%, ${v}%, ${this.roundA})`;
  }
  /**
   * Returns the object as a HSLA object.
   */
  toHsl() {
    const hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  }
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */
  toHslString() {
    const hsl = rgbToHsl(this.r, this.g, this.b);
    const h2 = Math.round(hsl.h * 360);
    const s = Math.round(hsl.s * 100);
    const l = Math.round(hsl.l * 100);
    return this.a === 1 ? `hsl(${h2}, ${s}%, ${l}%)` : `hsla(${h2}, ${s}%, ${l}%, ${this.roundA})`;
  }
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHex(allow3Char = false) {
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  }
  /**
   * Returns the hex value of the color -with a # prefixed.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHexString(allow3Char = false) {
    return "#" + this.toHex(allow3Char);
  }
  /**
   * Returns the hex 8 value of the color.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8(allow4Char = false) {
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  }
  /**
   * Returns the hex 8 value of the color -with a # prefixed.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8String(allow4Char = false) {
    return "#" + this.toHex8(allow4Char);
  }
  /**
   * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
   * @param allowShortChar will shorten hex value to 3 or 4 char if possible
   */
  toHexShortString(allowShortChar = false) {
    return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
  }
  /**
   * Returns the object as a RGBA object.
   */
  toRgb() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */
  toRgbString() {
    const r = Math.round(this.r);
    const g = Math.round(this.g);
    const b = Math.round(this.b);
    return this.a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${this.roundA})`;
  }
  /**
   * Returns the object as a RGBA object.
   */
  toPercentageRgb() {
    const fmt = (x) => `${Math.round(bound01(x, 255) * 100)}%`;
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA relative values interpolated into a string
   */
  toPercentageRgbString() {
    const rnd = (x) => Math.round(bound01(x, 255) * 100);
    return this.a === 1 ? `rgb(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%)` : `rgba(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%, ${this.roundA})`;
  }
  toCmyk() {
    return {
      ...rgbToCmyk(this.r, this.g, this.b)
    };
  }
  toCmykString() {
    const { c, m, y, k } = rgbToCmyk(this.r, this.g, this.b);
    return `cmyk(${c}, ${m}, ${y}, ${k})`;
  }
  /**
   * The 'real' name of the color -if there is one.
   */
  toName() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    const hex = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (const [key2, value] of Object.entries(names)) {
      if (hex === value) {
        return key2;
      }
    }
    return false;
  }
  toString(format) {
    const formatSet = Boolean(format);
    format = format ?? this.format;
    let formattedString = false;
    const hasAlpha = this.a < 1 && this.a >= 0;
    const needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    if (format === "cmyk") {
      formattedString = this.toCmykString();
    }
    return formattedString || this.toHexString();
  }
  toNumber() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }
  clone() {
    return new TinyColor(this.toString());
  }
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  lighten(amount = 10) {
    const hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor(hsl);
  }
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  brighten(amount = 10) {
    const rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor(rgb);
  }
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  darken(amount = 10) {
    const hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor(hsl);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  tint(amount = 10) {
    return this.mix("white", amount);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  shade(amount = 10) {
    return this.mix("black", amount);
  }
  /**
   * Desaturate the color a given amount, from 0 to 100.
   * Providing 100 will is the same as calling greyscale
   * @param amount - valid between 1-100
   */
  desaturate(amount = 10) {
    const hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor(hsl);
  }
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  saturate(amount = 10) {
    const hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor(hsl);
  }
  /**
   * Completely desaturates a color into greyscale.
   * Same as calling `desaturate(100)`
   */
  greyscale() {
    return this.desaturate(100);
  }
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  spin(amount) {
    const hsl = this.toHsl();
    const hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor(hsl);
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(color, amount = 50) {
    const rgb1 = this.toRgb();
    const rgb2 = new TinyColor(color).toRgb();
    const p = amount / 100;
    const rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor(rgba);
  }
  analogous(results = 6, slices = 30) {
    const hsl = this.toHsl();
    const part = 360 / slices;
    const ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor(hsl));
    }
    return ret;
  }
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */
  complement() {
    const hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor(hsl);
  }
  monochromatic(results = 6) {
    const hsv = this.toHsv();
    const { h: h2 } = hsv;
    const { s } = hsv;
    let { v } = hsv;
    const res = [];
    const modification = 1 / results;
    while (results--) {
      res.push(new TinyColor({ h: h2, s, v }));
      v = (v + modification) % 1;
    }
    return res;
  }
  splitcomplement() {
    const hsl = this.toHsl();
    const { h: h2 } = hsl;
    return [
      this,
      new TinyColor({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
    ];
  }
  /**
   * Compute how the color would appear on a background
   */
  onBackground(background) {
    const fg = this.toRgb();
    const bg = new TinyColor(background).toRgb();
    const alpha = fg.a + bg.a * (1 - fg.a);
    return new TinyColor({
      r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
      g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
      b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
      a: alpha
    });
  }
  /**
   * Alias for `polyad(3)`
   */
  triad() {
    return this.polyad(3);
  }
  /**
   * Alias for `polyad(4)`
   */
  tetrad() {
    return this.polyad(4);
  }
  /**
   * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
   * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
   */
  polyad(n) {
    const hsl = this.toHsl();
    const { h: h2 } = hsl;
    const result = [this];
    const increment = 360 / n;
    for (let i = 1; i < n; i++) {
      result.push(new TinyColor({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
    }
    return result;
  }
  /**
   * compare color vs current color
   */
  equals(color) {
    const comparedColor = new TinyColor(color);
    if (this.format === "cmyk" || comparedColor.format === "cmyk") {
      return this.toCmykString() === comparedColor.toCmykString();
    }
    return this.toRgbString() === comparedColor.toRgbString();
  }
}
function darken(color, amount = 20) {
  return color.mix("#141414", amount).toString();
}
function useButtonCustomStyle(props) {
  const _disabled = useFormDisabled();
  const ns = useNamespace("button");
  return computed(() => {
    let styles = {};
    let buttonColor = props.color;
    if (buttonColor) {
      const match = buttonColor.match(/var\((.*?)\)/);
      if (match) buttonColor = window.getComputedStyle(window.document.documentElement).getPropertyValue(match[1]);
      const color = new TinyColor(buttonColor);
      const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
      if (props.plain) {
        styles = ns.cssVarBlock({
          "bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
          "text-color": buttonColor,
          "border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
          "hover-text-color": `var(${ns.cssVarName("color-white")})`,
          "hover-bg-color": buttonColor,
          "hover-border-color": buttonColor,
          "active-bg-color": activeBgColor,
          "active-text-color": `var(${ns.cssVarName("color-white")})`,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
        }
      } else if (props.link || props.text) {
        const hoverColor = props.dark ? darken(color, 30) : color.tint(30).toString();
        styles = ns.cssVarBlock({
          "text-color": buttonColor,
          "hover-text-color": hoverColor,
          "active-text-color": activeBgColor
        });
        if (props.link) {
          styles[ns.cssVarBlockName("hover-link-text-color")] = hoverColor;
          styles[ns.cssVarBlockName("active-color")] = activeBgColor;
        }
        if (_disabled.value) {
          const disabledColor = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-bg-color")] = "transparent";
          styles[ns.cssVarBlockName("disabled-text-color")] = disabledColor;
          styles[ns.cssVarBlockName("disabled-border-color")] = "transparent";
        }
      } else {
        const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
        const textColor = color.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
        styles = ns.cssVarBlock({
          "bg-color": buttonColor,
          "text-color": textColor,
          "border-color": buttonColor,
          "hover-bg-color": hoverBgColor,
          "hover-text-color": textColor,
          "hover-border-color": hoverBgColor,
          "active-bg-color": activeBgColor,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
          styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
        }
      }
    }
    return styles;
  });
}
var button_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ElButton",
  __name: "button",
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const buttonStyle = useButtonCustomStyle(props);
    const ns = useNamespace("button");
    const { _ref, _size, _type, _disabled, _props, _plain, _round, _text, _dashed, shouldAddSpace, handleClick } = useButton(props, emit);
    const buttonKls = computed(() => [
      ns.b(),
      ns.m(_type.value),
      ns.m(_size.value),
      ns.is("disabled", _disabled.value),
      ns.is("loading", props.loading),
      ns.is("plain", _plain.value),
      ns.is("round", _round.value),
      ns.is("circle", props.circle),
      ns.is("text", _text.value),
      ns.is("dashed", _dashed.value),
      ns.is("link", props.link),
      ns.is("has-bg", props.bg)
    ]);
    __expose({
      /** @description button html element */
      ref: _ref,
      /** @description button size */
      size: _size,
      /** @description button type */
      type: _type,
      /** @description button disabled */
      disabled: _disabled,
      /** @description whether adding space */
      shouldAddSpace
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({
        ref_key: "_ref",
        ref: _ref
      }, unref(_props), {
        class: buttonKls.value,
        style: unref(buttonStyle),
        onClick: unref(handleClick)
      }), {
        default: withCtx(() => [__props.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [_ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(ElIcon), {
          key: 1,
          class: normalizeClass(unref(ns).is("loading"))
        }, {
          default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.loadingIcon)))]),
          _: 1
        }, 8, ["class"]))], 64)) : __props.icon || _ctx.$slots.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [__props.icon ? (openBlock(), createBlock(resolveDynamicComponent(__props.icon), { key: 0 })) : renderSlot(_ctx.$slots, "icon", { key: 1 })]),
          _: 3
        })) : createCommentVNode("v-if", true), _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass({ [unref(ns).em("text", "expand")]: unref(shouldAddSpace) })
        }, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("v-if", true)]),
        _: 3
      }, 16, [
        "class",
        "style",
        "onClick"
      ]);
    };
  }
});
var button_default = button_vue_vue_type_script_setup_true_lang_default;
const buttonGroupProps = {
  /**
  * @description control the size of buttons in this button-group
  */
  size: buttonProps.size,
  /**
  * @description control the type of buttons in this button-group
  */
  type: buttonProps.type,
  /**
  * @description display direction
  */
  direction: {
    type: definePropType(String),
    values: ["horizontal", "vertical"],
    default: "horizontal"
  }
};
var button_group_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ElButtonGroup",
  __name: "button-group",
  props: buttonGroupProps,
  setup(__props) {
    const props = __props;
    provide(buttonGroupContextKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
    const ns = useNamespace("button");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", { class: normalizeClass([unref(ns).b("group"), unref(ns).bm("group", props.direction)]) }, [renderSlot(_ctx.$slots, "default")], 2);
    };
  }
});
var button_group_default = button_group_vue_vue_type_script_setup_true_lang_default;
const ElButton = withInstall(button_default, { ButtonGroup: button_group_default });
const ElButtonGroup = withNoopInstall(button_group_default);
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dayjs_min$1 = { exports: {} };
var dayjs_min = dayjs_min$1.exports;
var hasRequiredDayjs_min;
function requireDayjs_min() {
  if (hasRequiredDayjs_min) return dayjs_min$1.exports;
  hasRequiredDayjs_min = 1;
  (function(module2, exports2) {
    !(function(t, e) {
      module2.exports = e();
    })(dayjs_min, (function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h2 = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h2, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = (function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = (function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          })(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h2:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h2] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h2) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h2) return this.set(h2, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h3 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, (function(t3, r3) {
            return r3 || (function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h3(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h3(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h3(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h3(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            })(t3) || i2.replace(":", "");
          }));
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h2:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      })(), Y = _.prototype;
      return O.prototype = Y, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h2], ["$D", d]].forEach((function(t2) {
        Y[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      })), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    }));
  })(dayjs_min$1);
  return dayjs_min$1.exports;
}
var dayjs_minExports = requireDayjs_min();
const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
const SCOPE = "_RepeatClick";
const vRepeatClick = {
  beforeMount(el, binding) {
    const value = binding.value;
    const { interval = 100, delay = 600 } = isFunction$1(value) ? {} : value;
    let intervalId;
    let delayId;
    const handler = () => isFunction$1(value) ? value() : value.handler();
    const clear = () => {
      if (delayId) {
        clearTimeout(delayId);
        delayId = void 0;
      }
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = void 0;
      }
    };
    const start = (evt) => {
      if (evt.button !== 0) return;
      clear();
      handler();
      document.addEventListener("mouseup", clear, {
        once: true,
        capture: true
      });
      delayId = setTimeout(() => {
        intervalId = setInterval(() => {
          handler();
        }, interval);
      }, delay);
    };
    el[SCOPE] = {
      start,
      clear
    };
    el.addEventListener("mousedown", start);
  },
  unmounted(el) {
    if (!el[SCOPE]) return;
    const { start, clear } = el[SCOPE];
    if (start) el.removeEventListener("mousedown", start);
    if (clear) {
      clear();
      document.removeEventListener("mouseup", clear, true);
    }
    el[SCOPE] = null;
  }
};
const FOCUSABLE_CHILDREN = "_trap-focus-children";
const FOCUS_STACK = [];
const FOCUS_HANDLER = (e) => {
  if (FOCUS_STACK.length === 0) return;
  const code = getEventCode(e);
  const focusableElement = FOCUS_STACK[FOCUS_STACK.length - 1][FOCUSABLE_CHILDREN];
  if (focusableElement.length > 0 && code === EVENT_CODE.tab) {
    if (focusableElement.length === 1) {
      e.preventDefault();
      if (document.activeElement !== focusableElement[0]) focusableElement[0].focus();
      return;
    }
    const goingBackward = e.shiftKey;
    const isFirst = e.target === focusableElement[0];
    const isLast = e.target === focusableElement[focusableElement.length - 1];
    if (isFirst && goingBackward) {
      e.preventDefault();
      focusableElement[focusableElement.length - 1].focus();
    }
    if (isLast && !goingBackward) {
      e.preventDefault();
      focusableElement[0].focus();
    }
  }
};
const TrapFocus = {
  beforeMount(el) {
    el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements$1(el);
    FOCUS_STACK.push(el);
    if (FOCUS_STACK.length <= 1) document.addEventListener("keydown", FOCUS_HANDLER);
  },
  updated(el) {
    nextTick(() => {
      el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements$1(el);
    });
  },
  unmounted() {
    FOCUS_STACK.shift();
    if (FOCUS_STACK.length === 0) document.removeEventListener("keydown", FOCUS_HANDLER);
  }
};
const dialogContentProps = buildProps({
  /**
  * @description whether to align the header and footer in center
  */
  center: Boolean,
  /**
  * @description whether to align the dialog both horizontally and vertically
  */
  alignCenter: {
    type: Boolean,
    default: void 0
  },
  /**
  * @description custom close icon, default is Close
  */
  closeIcon: { type: iconPropType },
  /**
  * @description enable dragging feature for Dialog
  */
  draggable: {
    type: Boolean,
    default: void 0
  },
  /**
  * @description draggable Dialog can overflow the viewport
  */
  overflow: {
    type: Boolean,
    default: void 0
  },
  /**
  * @description whether the Dialog takes up full screen
  */
  fullscreen: Boolean,
  /**
  * @description custom class names for header wrapper
  */
  headerClass: {
    type: definePropType([
      String,
      Array,
      Object,
      Boolean
    ]),
    default: void 0
  },
  /**
  * @description custom class names for body wrapper
  */
  bodyClass: {
    type: definePropType([
      String,
      Array,
      Object,
      Boolean
    ]),
    default: void 0
  },
  /**
  * @description custom class names for footer wrapper
  */
  footerClass: {
    type: definePropType([
      String,
      Array,
      Object,
      Boolean
    ]),
    default: void 0
  },
  /**
  * @description whether to show a close button
  */
  showClose: {
    type: Boolean,
    default: true
  },
  /**
  * @description title of Dialog. Can also be passed with a named slot (see the following table)
  */
  title: {
    type: String,
    default: ""
  },
  /**
  * @description header's aria-level attribute
  */
  ariaLevel: {
    type: String,
    default: "2"
  }
});
const dialogContentEmits = { close: () => true };
const dialogProps = buildProps({
  ...dialogContentProps,
  /**
  * @description whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true`
  */
  appendToBody: Boolean,
  /**
  * @description which element the Dialog appends to
  */
  appendTo: {
    type: definePropType([String, Object]),
    default: "body"
  },
  /**
  * @description callback before Dialog closes, and it will prevent Dialog from closing, use done to close the dialog
  */
  beforeClose: { type: definePropType(Function) },
  /**
  * @description destroy elements in Dialog when closed
  */
  destroyOnClose: Boolean,
  /**
  * @description whether the Dialog can be closed by clicking the mask
  */
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  /**
  * @description whether the Dialog can be closed by pressing ESC
  */
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  /**
  * @description whether scroll of body is disabled while Dialog is displayed
  */
  lockScroll: {
    type: Boolean,
    default: true
  },
  /**
  * @description whether a mask is displayed
  */
  modal: {
    type: Boolean,
    default: true
  },
  /**
  * @description whether the mask is penetrable
  */
  modalPenetrable: Boolean,
  /**
  * @description the Time(milliseconds) before open
  */
  openDelay: {
    type: Number,
    default: 0
  },
  /**
  * @description the Time(milliseconds) before close
  */
  closeDelay: {
    type: Number,
    default: 0
  },
  /**
  * @description value for `margin-top` of Dialog CSS, default is 15vh
  */
  top: { type: String },
  /**
  * @description visibility of Dialog
  */
  modelValue: Boolean,
  /**
  * @description custom class names for mask
  */
  modalClass: {
    type: definePropType([
      String,
      Array,
      Object,
      Boolean
    ]),
    default: void 0
  },
  /**
  * @description width of Dialog, default is 50%
  */
  width: { type: [String, Number] },
  /**
  * @description same as z-index in native CSS, z-order of dialog
  */
  zIndex: { type: Number },
  trapFocus: Boolean,
  /**
  * @description header's aria-level attribute
  */
  headerAriaLevel: {
    type: String,
    default: "2"
  },
  /**
  * @description custom transition configuration for dialog animation, it can be a string (transition name) or an object with Vue transition props
  */
  transition: {
    type: definePropType([String, Object]),
    default: void 0
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object,
      Boolean
    ]),
    default: void 0
  },
  zIndex: { type: definePropType([String, Number]) }
});
const overlayEmits = { click: (evt) => evt instanceof MouseEvent };
const BLOCK = "overlay";
var overlay_default = defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns = useNamespace(BLOCK);
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
    return () => {
      return props.mask ? createVNode("div", {
        class: [ns.b(), props.overlayClass],
        style: { zIndex: props.zIndex },
        onClick,
        onMousedown,
        onMouseup
      }, [renderSlot(slots, "default")], 14, [
        "onClick",
        "onMouseup",
        "onMousedown"
      ]) : h("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [renderSlot(slots, "default")]);
    };
  }
});
const ElOverlay = overlay_default;
const dialogInjectionKey = /* @__PURE__ */ Symbol("dialogInjectionKey");
const DEFAULT_DIALOG_TRANSITION = "dialog-fade";
const COMPONENT_NAME = "ElDialog";
const useDialog = (props, targetRef) => {
  const emit = getCurrentInstance().emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex2 = ref(props.zIndex ?? nextZIndex());
  const closing = ref(false);
  let openTimer = void 0;
  let closeTimer = void 0;
  const config = useGlobalConfig();
  const namespace = computed(() => config.value?.namespace ?? "el");
  const globalConfig2 = computed(() => config.value?.dialog);
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) style2[`${varPrefix}-margin-top`] = props.top;
      const width = addUnit(props.width);
      if (width) style2[`${varPrefix}-width`] = width;
    }
    return style2;
  });
  const _draggable = computed(() => (props.draggable ?? globalConfig2.value?.draggable ?? false) && !props.fullscreen);
  const _alignCenter = computed(() => props.alignCenter ?? globalConfig2.value?.alignCenter ?? false);
  const _overflow = computed(() => props.overflow ?? globalConfig2.value?.overflow ?? false);
  const penetrable = computed(() => props.modalPenetrable && !props.modal && !props.fullscreen);
  const overlayDialogStyle = computed(() => {
    if (_alignCenter.value) return { display: "flex" };
    return {};
  });
  const transitionConfig = computed(() => {
    const transition = props.transition ?? globalConfig2.value?.transition ?? "dialog-fade";
    const baseConfig = {
      name: transition,
      onAfterEnter: afterEnter,
      onBeforeLeave: beforeLeave,
      onAfterLeave: afterLeave
    };
    if (isObject$2(transition)) {
      const config2 = { ...transition };
      const _mergeHook = (userHook, defaultHook) => {
        return (el) => {
          if (isArray$1(userHook)) userHook.forEach((fn) => {
            if (isFunction$1(fn)) fn(el);
          });
          else if (isFunction$1(userHook)) userHook(el);
          defaultHook();
        };
      };
      config2.onAfterEnter = _mergeHook(config2.onAfterEnter, afterEnter);
      config2.onBeforeLeave = _mergeHook(config2.onBeforeLeave, beforeLeave);
      config2.onAfterLeave = _mergeHook(config2.onAfterLeave, afterLeave);
      if (!config2.name) {
        config2.name = DEFAULT_DIALOG_TRANSITION;
        debugWarn(COMPONENT_NAME, `transition.name is missing when using object syntax, fallback to '${DEFAULT_DIALOG_TRANSITION}'`);
      }
      return config2;
    }
    return baseConfig;
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) rendered.value = false;
    closing.value = false;
  }
  function beforeLeave() {
    closing.value = true;
    emit("close");
  }
  function open() {
    closeTimer?.();
    openTimer?.();
    if (props.openDelay && props.openDelay > 0) ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    else doOpen();
  }
  function close() {
    openTimer?.();
    closeTimer?.();
    if (props.closeDelay && props.closeDelay > 0) ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    else doClose();
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel) return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) props.beforeClose(hide);
    else close();
  }
  function onModalClick() {
    if (props.closeOnClickModal) handleClose();
  }
  function doOpen() {
    if (!isClient) return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  function onFocusoutPrevented(event) {
    if (event.detail?.focusReason === "pointer") event.preventDefault();
  }
  if (props.lockScroll) useLockscreen(visible);
  function onCloseRequested() {
    if (props.closeOnPressEscape) handleClose();
  }
  function bringToFront() {
    if (!visible.value || !penetrable.value || props.zIndex !== void 0) return;
    zIndex2.value = nextZIndex();
  }
  watch(() => props.zIndex, () => {
    zIndex2.value = props.zIndex ?? nextZIndex();
  });
  watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      closing.value = false;
      open();
      rendered.value = true;
      zIndex2.value = props.zIndex ?? nextZIndex();
      nextTick(() => {
        emit("open");
        if (targetRef.value) {
          targetRef.value.parentElement.scrollTop = 0;
          targetRef.value.parentElement.scrollLeft = 0;
          targetRef.value.scrollTop = 0;
        }
      });
    } else if (visible.value) close();
  });
  watch(() => props.fullscreen, (val) => {
    if (!targetRef.value) return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else targetRef.value.style.transform = lastPosition;
  });
  onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      rendered.value = true;
      open();
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    bringToFront,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex: zIndex2,
    transitionConfig,
    _draggable,
    _alignCenter,
    _overflow,
    closing,
    penetrable
  };
};
const composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref2) => {
      ref2.value = el;
    });
  };
};
const _hoisted_1$6 = ["aria-level"];
const _hoisted_2$5 = ["aria-label"];
const _hoisted_3$3 = ["id"];
var dialog_content_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ElDialogContent",
  __name: "dialog-content",
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props, { expose: __expose }) {
    const { t } = useLocale();
    const { Close } = CloseComponents;
    const props = __props;
    const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey);
    const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
    const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
    const draggable = computed(() => !!props.draggable);
    const overflow = computed(() => !!props.overflow);
    const { resetPosition, updatePosition, isDragging } = useDraggable(dialogRef, headerRef, draggable, overflow);
    const dialogKls = computed(() => [
      ns.b(),
      ns.is("fullscreen", props.fullscreen),
      ns.is("draggable", draggable.value),
      ns.is("dragging", isDragging.value),
      ns.is("align-center", !!props.alignCenter),
      { [ns.m("center")]: props.center }
    ]);
    __expose({
      resetPosition,
      updatePosition
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: unref(composedDialogRef),
        class: normalizeClass(dialogKls.value),
        style: normalizeStyle(unref(style)),
        tabindex: "-1"
      }, [
        createBaseVNode("header", {
          ref_key: "headerRef",
          ref: headerRef,
          class: normalizeClass([
            unref(ns).e("header"),
            __props.headerClass,
            { "show-close": __props.showClose }
          ])
        }, [renderSlot(_ctx.$slots, "header", {}, () => [createBaseVNode("span", {
          role: "heading",
          "aria-level": __props.ariaLevel,
          class: normalizeClass(unref(ns).e("title"))
        }, toDisplayString(__props.title), 11, _hoisted_1$6)]), __props.showClose ? (openBlock(), createElementBlock("button", {
          key: 0,
          "aria-label": unref(t)("el.dialog.close"),
          class: normalizeClass(unref(ns).e("headerbtn")),
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, [createVNode(unref(ElIcon), { class: normalizeClass(unref(ns).e("close")) }, {
          default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.closeIcon || unref(Close))))]),
          _: 1
        }, 8, ["class"])], 10, _hoisted_2$5)) : createCommentVNode("v-if", true)], 2),
        createBaseVNode("div", {
          id: unref(bodyId),
          class: normalizeClass([unref(ns).e("body"), __props.bodyClass])
        }, [renderSlot(_ctx.$slots, "default")], 10, _hoisted_3$3),
        _ctx.$slots.footer ? (openBlock(), createElementBlock("footer", {
          key: 0,
          class: normalizeClass([unref(ns).e("footer"), __props.footerClass])
        }, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var dialog_content_default = dialog_content_vue_vue_type_script_setup_true_lang_default;
const _hoisted_1$5 = [
  "aria-label",
  "aria-labelledby",
  "aria-describedby"
];
var dialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ElDialog",
  inheritAttrs: false,
  __name: "dialog",
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, computed(() => !!slots.title));
    const ns = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const dialogContentRef = ref();
    const { visible, titleId, bodyId, style, overlayDialogStyle, rendered, transitionConfig, zIndex: zIndex2, _draggable, _alignCenter, _overflow, penetrable, handleClose, onModalClick, onOpenAutoFocus, onCloseAutoFocus, onCloseRequested, onFocusoutPrevented, bringToFront, closing } = useDialog(props, dialogRef);
    provide(dialogInjectionKey, {
      dialogRef,
      headerRef,
      bodyId,
      ns,
      rendered,
      style
    });
    const overlayEvent = useSameTarget(onModalClick);
    const resetPosition = () => {
      dialogContentRef.value?.resetPosition();
    };
    __expose({
      /** @description whether the dialog is visible */
      visible,
      dialogContentRef,
      resetPosition,
      handleClose
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: __props.appendTo,
        disabled: __props.appendTo !== "body" ? false : !__props.appendToBody
      }, [createVNode(Transition, mergeProps(unref(transitionConfig), { persisted: "" }), {
        default: withCtx(() => [withDirectives(createVNode(unref(ElOverlay), {
          "custom-mask-event": "",
          mask: __props.modal,
          "overlay-class": [
            __props.modalClass ?? "",
            `${unref(ns).namespace.value}-modal-dialog`,
            unref(ns).is("penetrable", unref(penetrable))
          ],
          "z-index": unref(zIndex2)
        }, {
          default: withCtx(() => [createBaseVNode("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": __props.title || void 0,
            "aria-labelledby": !__props.title ? unref(titleId) : void 0,
            "aria-describedby": unref(bodyId),
            class: normalizeClass([`${unref(ns).namespace.value}-overlay-dialog`, unref(ns).is("closing", unref(closing))]),
            style: normalizeStyle(unref(overlayDialogStyle)),
            onClick: _cache[0] || (_cache[0] = (...args) => unref(overlayEvent).onClick && unref(overlayEvent).onClick(...args)),
            onMousedown: _cache[1] || (_cache[1] = (...args) => unref(overlayEvent).onMousedown && unref(overlayEvent).onMousedown(...args)),
            onMouseup: _cache[2] || (_cache[2] = (...args) => unref(overlayEvent).onMouseup && unref(overlayEvent).onMouseup(...args))
          }, [createVNode(unref(focus_trap_default$1), {
            loop: "",
            trapped: unref(visible),
            "focus-start-el": "container",
            onFocusAfterTrapped: unref(onOpenAutoFocus),
            onFocusAfterReleased: unref(onCloseAutoFocus),
            onFocusoutPrevented: unref(onFocusoutPrevented),
            onReleaseRequested: unref(onCloseRequested)
          }, {
            default: withCtx(() => [unref(rendered) ? (openBlock(), createBlock(dialog_content_default, mergeProps({
              key: 0,
              ref_key: "dialogContentRef",
              ref: dialogContentRef
            }, _ctx.$attrs, {
              center: __props.center,
              "align-center": unref(_alignCenter),
              "close-icon": __props.closeIcon,
              draggable: unref(_draggable),
              overflow: unref(_overflow),
              fullscreen: __props.fullscreen,
              "header-class": __props.headerClass,
              "body-class": __props.bodyClass,
              "footer-class": __props.footerClass,
              "show-close": __props.showClose,
              title: __props.title,
              "aria-level": __props.headerAriaLevel,
              onClose: unref(handleClose),
              onMousedown: unref(bringToFront)
            }), createSlots({
              header: withCtx(() => [!_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                key: 0,
                close: unref(handleClose),
                titleId: unref(titleId),
                titleClass: unref(ns).e("title")
              }) : renderSlot(_ctx.$slots, "title", { key: 1 })]),
              default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
              _: 2
            }, [_ctx.$slots.footer ? {
              name: "footer",
              fn: withCtx(() => [renderSlot(_ctx.$slots, "footer")]),
              key: "0"
            } : void 0]), 1040, [
              "center",
              "align-center",
              "close-icon",
              "draggable",
              "overflow",
              "fullscreen",
              "header-class",
              "body-class",
              "footer-class",
              "show-close",
              "title",
              "aria-level",
              "onClose",
              "onMousedown"
            ])) : createCommentVNode("v-if", true)]),
            _: 3
          }, 8, [
            "trapped",
            "onFocusAfterTrapped",
            "onFocusAfterReleased",
            "onFocusoutPrevented",
            "onReleaseRequested"
          ])], 46, _hoisted_1$5)]),
          _: 3
        }, 8, [
          "mask",
          "overlay-class",
          "z-index"
        ]), [[vShow, unref(visible)]])]),
        _: 3
      }, 16)], 8, ["to", "disabled"]);
    };
  }
});
var dialog_default = dialog_vue_vue_type_script_setup_true_lang_default;
const ElDialog = withInstall(dialog_default);
const inputNumberProps = buildProps({
  /**
  * @description same as `id` in native input
  */
  id: {
    type: String,
    default: void 0
  },
  /**
  * @description incremental step
  */
  step: {
    type: Number,
    default: 1
  },
  /**
  * @description whether input value can only be multiple of step
  */
  stepStrictly: Boolean,
  /**
  * @description the maximum allowed value
  */
  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER
  },
  /**
  * @description the minimum allowed value
  */
  min: {
    type: Number,
    default: Number.MIN_SAFE_INTEGER
  },
  /**
  * @description binding value
  */
  modelValue: { type: [Number, null] },
  /**
  * @description same as `readonly` in native input
  */
  readonly: Boolean,
  /**
  * @description whether the component is disabled
  */
  disabled: {
    type: Boolean,
    default: void 0
  },
  /**
  * @description size of the component
  */
  size: useSizeProp,
  /**
  * @description whether to enable the control buttons
  */
  controls: {
    type: Boolean,
    default: true
  },
  /**
  * @description position of the control buttons
  */
  controlsPosition: {
    type: String,
    default: "",
    values: ["", "right"]
  },
  /**
  * @description value should be set when input box is cleared
  */
  valueOnClear: {
    type: definePropType([
      String,
      Number,
      null
    ]),
    validator: (val) => val === null || isNumber(val) || ["min", "max"].includes(val),
    default: null
  },
  /**
  * @description same as `name` in native input
  */
  name: String,
  /**
  * @description same as `placeholder` in native input
  */
  placeholder: String,
  /**
  * @description precision of input value
  */
  precision: {
    type: Number,
    validator: (val) => val >= 0 && val === Number.parseInt(`${val}`, 10)
  },
  /**
  * @description whether to trigger form validation
  */
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"]),
  /**
  * @description native input mode for virtual keyboards
  */
  inputmode: {
    type: definePropType(String),
    default: void 0
  },
  /**
  * @description alignment for the inner input text
  */
  align: {
    type: definePropType(String),
    default: "center"
  },
  /**
  * @description whether to disable scientific notation input (e.g. 'e', 'E')
  */
  disabledScientific: Boolean,
  /**
  * @description specifies the format of the value presented in the input
  */
  formatter: { type: Function },
  /**
  * @description specifies the value extracted from the formatted input
  */
  parser: { type: Function },
  /**
  * @description same as `tabindex` in native input
  */
  tabindex: {
    type: [String, Number],
    default: 0
  }
});
const inputNumberEmits = {
  [CHANGE_EVENT]: (cur, prev) => prev !== cur,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [INPUT_EVENT]: (val) => isNumber(val) || isNil(val),
  [UPDATE_MODEL_EVENT]: (val) => isNumber(val) || isNil(val)
};
const _hoisted_1$4 = ["aria-label"];
const _hoisted_2$4 = ["aria-label"];
var input_number_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ElInputNumber",
  __name: "input-number",
  props: inputNumberProps,
  emits: inputNumberEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useLocale();
    const ns = useNamespace("input-number");
    const input = ref();
    const data = reactive({
      currentValue: props.modelValue,
      userInput: null
    });
    const { formItem } = useFormItem();
    const minDisabled = computed(() => isNumber(props.modelValue) && props.modelValue <= props.min);
    const maxDisabled = computed(() => isNumber(props.modelValue) && props.modelValue >= props.max);
    const numPrecision = computed(() => {
      const stepPrecision = getPrecision(props.step);
      if (!isUndefined(props.precision)) {
        if (stepPrecision > props.precision) debugWarn("InputNumber", "precision should not be less than the decimal places of step");
        return props.precision;
      } else return Math.max(getPrecision(props.modelValue), stepPrecision);
    });
    const controlsAtRight = computed(() => {
      return props.controls && props.controlsPosition === "right";
    });
    const inputNumberSize = useFormSize();
    const inputNumberDisabled = useFormDisabled();
    const displayValue = computed(() => {
      if (data.userInput !== null) return data.userInput;
      let currentValue = data.currentValue;
      if (isNil(currentValue)) return "";
      if (isNumber(currentValue)) {
        if (Number.isNaN(currentValue)) return "";
        if (!isUndefined(props.precision)) currentValue = currentValue.toFixed(props.precision);
      }
      return currentValue;
    });
    const toPrecision = (num, pre) => {
      if (isUndefined(pre)) pre = numPrecision.value;
      if (pre === 0) return Math.round(num);
      let snum = String(num);
      const pointPos = snum.indexOf(".");
      if (pointPos === -1) return num;
      if (!snum.replace(".", "").split("")[pointPos + pre]) return num;
      const length = snum.length;
      if (snum.charAt(length - 1) === "5") snum = `${snum.slice(0, Math.max(0, length - 1))}6`;
      return Number.parseFloat(Number(snum).toFixed(pre));
    };
    const getPrecision = (value) => {
      if (isNil(value)) return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf(".");
      let precision = 0;
      if (dotPosition !== -1) precision = valueString.length - dotPosition - 1;
      return precision;
    };
    const ensurePrecision = (val, coefficient = 1) => {
      if (!isNumber(val)) return data.currentValue;
      if (val >= Number.MAX_SAFE_INTEGER && coefficient === 1) {
        debugWarn("InputNumber", "The value has reached the maximum safe integer limit.");
        return val;
      } else if (val <= Number.MIN_SAFE_INTEGER && coefficient === -1) {
        debugWarn("InputNumber", "The value has reached the minimum safe integer limit.");
        return val;
      }
      return toPrecision(val + props.step * coefficient);
    };
    const handleKeydown = (event) => {
      const code = getEventCode(event);
      const key2 = getEventKey(event);
      if (props.disabledScientific && ["e", "E"].includes(key2)) {
        event.preventDefault();
        return;
      }
      switch (code) {
        case EVENT_CODE.up:
          event.preventDefault();
          increase();
          break;
        case EVENT_CODE.down:
          event.preventDefault();
          decrease();
      }
    };
    const increase = () => {
      if (props.readonly || inputNumberDisabled.value || maxDisabled.value) return;
      const value = Number(displayValue.value) || 0;
      const newVal = ensurePrecision(value);
      setCurrentValue(newVal);
      emit(INPUT_EVENT, data.currentValue);
      setCurrentValueToModelValue();
    };
    const decrease = () => {
      if (props.readonly || inputNumberDisabled.value || minDisabled.value) return;
      const value = Number(displayValue.value) || 0;
      const newVal = ensurePrecision(value, -1);
      setCurrentValue(newVal);
      emit(INPUT_EVENT, data.currentValue);
      setCurrentValueToModelValue();
    };
    const verifyValue = (value, update) => {
      const { max, min, step, precision, stepStrictly, valueOnClear } = props;
      if (max < min) throwError("InputNumber", "min should not be greater than max.");
      let newVal = !value ? Number(value) : Number.parseFloat(String(value));
      if (isNil(value) || Number.isNaN(newVal)) return null;
      if (value === "") {
        if (valueOnClear === null) return null;
        newVal = isString(valueOnClear) ? {
          min,
          max
        }[valueOnClear] : valueOnClear;
      }
      if (stepStrictly) {
        newVal = toPrecision(Math.round(toPrecision(newVal / step)) * step, precision);
        if (newVal !== value) update && emit("update:modelValue", newVal);
      }
      if (!isUndefined(precision)) newVal = toPrecision(newVal, precision);
      if (newVal > max || newVal < min) {
        newVal = newVal > max ? max : min;
        update && emit("update:modelValue", newVal);
      }
      return newVal;
    };
    const setCurrentValue = (value, emitChange = true) => {
      const oldVal = data.currentValue;
      const newVal = verifyValue(value);
      if (!emitChange) {
        emit(UPDATE_MODEL_EVENT, newVal);
        return;
      }
      data.userInput = null;
      if (oldVal === newVal && value) return;
      emit(UPDATE_MODEL_EVENT, newVal);
      if (oldVal !== newVal) emit(CHANGE_EVENT, newVal, oldVal);
      if (props.validateEvent) formItem?.validate?.("change").catch(NOOP);
      data.currentValue = newVal;
    };
    const handleInput = (value) => {
      data.userInput = value;
      let newVal = value === "" ? null : Number.parseFloat(value);
      if (Number.isNaN(newVal)) newVal = null;
      emit(INPUT_EVENT, newVal);
      setCurrentValue(newVal, false);
    };
    const handleInputChange = (value) => {
      const newVal = value !== "" ? Number.parseFloat(value) : "";
      if (isNumber(newVal) && !Number.isNaN(newVal) || props.formatter && Number.isNaN(newVal) || newVal === "") setCurrentValue(newVal);
      setCurrentValueToModelValue();
      data.userInput = null;
    };
    const focus = () => {
      input.value?.focus?.();
    };
    const blur = () => {
      input.value?.blur?.();
    };
    const handleFocus = (event) => {
      emit("focus", event);
    };
    const handleBlur = (event) => {
      data.userInput = null;
      if (data.currentValue === null && input.value?.input) input.value.input.value = props.formatter?.("") ?? "";
      emit("blur", event);
      if (props.validateEvent) formItem?.validate?.("blur").catch(NOOP);
    };
    const setCurrentValueToModelValue = () => {
      if (data.currentValue !== props.modelValue) data.currentValue = props.modelValue;
    };
    const handleWheel = (e) => {
      if (document.activeElement === e.target) e.preventDefault();
    };
    watch(() => props.modelValue, (value, oldValue) => {
      const newValue = verifyValue(value, true);
      if (data.userInput === null && newValue !== oldValue) data.currentValue = newValue;
    }, { immediate: true });
    watch(() => props.precision, () => {
      data.currentValue = verifyValue(props.modelValue);
    });
    onMounted(() => {
      const { min, max, modelValue } = props;
      const innerInput = input.value?.input;
      innerInput.setAttribute("role", "spinbutton");
      if (Number.isFinite(max)) innerInput.setAttribute("aria-valuemax", String(max));
      else innerInput.removeAttribute("aria-valuemax");
      if (Number.isFinite(min)) innerInput.setAttribute("aria-valuemin", String(min));
      else innerInput.removeAttribute("aria-valuemin");
      innerInput.setAttribute("aria-valuenow", data.currentValue || data.currentValue === 0 ? String(data.currentValue) : "");
      innerInput.setAttribute("aria-disabled", String(inputNumberDisabled.value));
      if (!isNumber(modelValue) && modelValue != null) {
        let val = Number(modelValue);
        if (Number.isNaN(val)) val = null;
        emit(UPDATE_MODEL_EVENT, val);
      }
      innerInput.addEventListener("wheel", handleWheel, { passive: false });
    });
    onUpdated(() => {
      input.value?.input?.setAttribute("aria-valuenow", `${data.currentValue ?? ""}`);
    });
    __expose({
      /** @description get focus the input component */
      focus,
      /** @description remove focus the input component */
      blur
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(unref(inputNumberSize)),
          unref(ns).is("disabled", unref(inputNumberDisabled)),
          unref(ns).is("without-controls", !__props.controls),
          unref(ns).is("controls-right", controlsAtRight.value),
          unref(ns).is(__props.align, !!__props.align)
        ]),
        onDragstart: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["prevent"]))
      }, [
        __props.controls ? withDirectives((openBlock(), createElementBlock("span", {
          key: 0,
          role: "button",
          "aria-label": unref(t)("el.inputNumber.decrease"),
          class: normalizeClass([unref(ns).e("decrease"), unref(ns).is("disabled", minDisabled.value)]),
          onKeydown: withKeys(decrease, ["enter"])
        }, [renderSlot(_ctx.$slots, "decrease-icon", {}, () => [createVNode(unref(ElIcon), null, {
          default: withCtx(() => [controlsAtRight.value ? (openBlock(), createBlock(unref(arrow_down_default), { key: 0 })) : (openBlock(), createBlock(unref(minus_default), { key: 1 }))]),
          _: 1
        })])], 42, _hoisted_1$4)), [[unref(vRepeatClick), decrease]]) : createCommentVNode("v-if", true),
        __props.controls ? withDirectives((openBlock(), createElementBlock("span", {
          key: 1,
          role: "button",
          "aria-label": unref(t)("el.inputNumber.increase"),
          class: normalizeClass([unref(ns).e("increase"), unref(ns).is("disabled", maxDisabled.value)]),
          onKeydown: withKeys(increase, ["enter"])
        }, [renderSlot(_ctx.$slots, "increase-icon", {}, () => [createVNode(unref(ElIcon), null, {
          default: withCtx(() => [controlsAtRight.value ? (openBlock(), createBlock(unref(arrow_up_default), { key: 0 })) : (openBlock(), createBlock(unref(plus_default), { key: 1 }))]),
          _: 1
        })])], 42, _hoisted_2$4)), [[unref(vRepeatClick), increase]]) : createCommentVNode("v-if", true),
        createVNode(unref(ElInput), {
          id: __props.id,
          ref_key: "input",
          ref: input,
          type: __props.formatter ? "text" : "number",
          step: __props.step,
          "model-value": displayValue.value,
          placeholder: __props.placeholder,
          readonly: __props.readonly,
          disabled: unref(inputNumberDisabled),
          size: unref(inputNumberSize),
          max: __props.max,
          min: __props.min,
          name: __props.name,
          "aria-label": __props.ariaLabel,
          "validate-event": false,
          inputmode: __props.inputmode,
          formatter: __props.formatter,
          parser: __props.parser,
          tabindex: __props.tabindex,
          onKeydown: handleKeydown,
          onBlur: handleBlur,
          onFocus: handleFocus,
          onInput: handleInput,
          onChange: handleInputChange
        }, createSlots({ _: 2 }, [_ctx.$slots.prefix ? {
          name: "prefix",
          fn: withCtx(() => [renderSlot(_ctx.$slots, "prefix")]),
          key: "0"
        } : void 0, _ctx.$slots.suffix ? {
          name: "suffix",
          fn: withCtx(() => [renderSlot(_ctx.$slots, "suffix")]),
          key: "1"
        } : void 0]), 1032, [
          "id",
          "type",
          "step",
          "model-value",
          "placeholder",
          "readonly",
          "disabled",
          "size",
          "max",
          "min",
          "name",
          "aria-label",
          "inputmode",
          "formatter",
          "parser",
          "tabindex"
        ])
      ], 34);
    };
  }
});
var input_number_default = input_number_vue_vue_type_script_setup_true_lang_default;
const ElInputNumber = withInstall(input_number_default);
const progressProps = buildProps({
  /**
  * @description type of progress bar
  */
  type: {
    type: String,
    default: "line",
    values: [
      "line",
      "circle",
      "dashboard"
    ]
  },
  /**
  * @description percentage, required
  */
  percentage: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 && val <= 100
  },
  /**
  * @description the current status of progress bar
  */
  status: {
    type: String,
    default: "",
    values: [
      "",
      "success",
      "exception",
      "warning"
    ]
  },
  /**
  * @description set indeterminate progress
  */
  indeterminate: Boolean,
  /**
  * @description control the animation duration of indeterminate progress or striped flow progress
  */
  duration: {
    type: Number,
    default: 3
  },
  /**
  * @description the width of progress bar
  */
  strokeWidth: {
    type: Number,
    default: 6
  },
  /**
  * @description butt/circle/dashboard type shape at the end path
  */
  strokeLinecap: {
    type: definePropType(String),
    default: "round"
  },
  /**
  * @description whether to place the percentage inside progress bar, only works when `type` is 'line'
  */
  textInside: Boolean,
  /**
  * @description the canvas width of circle progress bar
  */
  width: {
    type: Number,
    default: 126
  },
  /**
  * @description whether to show percentage
  */
  showText: {
    type: Boolean,
    default: true
  },
  /**
  * @description background color of progress bar. Overrides `status` prop
  */
  color: {
    type: definePropType([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  /**
  * @description stripe over the progress bar's color
  */
  striped: Boolean,
  /**
  * @description get the stripes to flow
  */
  stripedFlow: Boolean,
  /**
  * @description custom text format
  */
  format: {
    type: definePropType(Function),
    default: (percentage) => `${percentage}%`
  }
});
const _hoisted_1$3 = ["aria-valuenow"];
const _hoisted_2$3 = { viewBox: "0 0 100 100" };
const _hoisted_3$2 = [
  "d",
  "stroke",
  "stroke-linecap",
  "stroke-width"
];
const _hoisted_4$1 = [
  "d",
  "stroke",
  "opacity",
  "stroke-linecap",
  "stroke-width"
];
const _hoisted_5$1 = { key: 0 };
var progress_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ElProgress",
  __name: "progress",
  props: progressProps,
  setup(__props) {
    const STATUS_COLOR_MAP = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    };
    const props = __props;
    const ns = useNamespace("progress");
    const barStyle = computed(() => {
      const barStyle2 = {
        width: `${props.percentage}%`,
        animationDuration: `${props.duration}s`
      };
      const color = getCurrentColor(props.percentage);
      if (color.includes("gradient")) barStyle2.background = color;
      else barStyle2.backgroundColor = color;
      return barStyle2;
    });
    const relativeStrokeWidth = computed(() => (props.strokeWidth / props.width * 100).toFixed(1));
    const radius = computed(() => {
      if (["circle", "dashboard"].includes(props.type)) return Number.parseInt(`${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`, 10);
      return 0;
    });
    const trackPath = computed(() => {
      const r = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
    });
    const perimeter = computed(() => 2 * Math.PI * radius.value);
    const rate = computed(() => props.type === "dashboard" ? 0.75 : 1);
    const strokeDashoffset = computed(() => {
      return `${-1 * perimeter.value * (1 - rate.value) / 2}px`;
    });
    const trailPathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    }));
    const circlePathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    }));
    const stroke = computed(() => {
      let ret;
      if (props.color) ret = getCurrentColor(props.percentage);
      else ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
      return ret;
    });
    const statusIcon = computed(() => {
      if (props.status === "warning") return warning_filled_default;
      if (props.type === "line") return props.status === "success" ? circle_check_default : circle_close_default;
      else return props.status === "success" ? check_default : close_default;
    });
    const progressTextSize = computed(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
    });
    const content = computed(() => props.format(props.percentage));
    function getColors(color) {
      const span = 100 / color.length;
      return color.map((seriesColor, index) => {
        if (isString(seriesColor)) return {
          color: seriesColor,
          percentage: (index + 1) * span
        };
        return seriesColor;
      }).sort((a, b) => a.percentage - b.percentage);
    }
    const getCurrentColor = (percentage) => {
      const { color } = props;
      if (isFunction$1(color)) return color(percentage);
      else if (isString(color)) return color;
      else {
        const colors = getColors(color);
        for (const color2 of colors) if (color2.percentage > percentage) return color2.color;
        return colors[colors.length - 1]?.color;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(__props.type),
          unref(ns).is(__props.status),
          {
            [unref(ns).m("without-text")]: !__props.showText,
            [unref(ns).m("text-inside")]: __props.textInside
          }
        ]),
        role: "progressbar",
        "aria-valuenow": __props.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, [__props.type === "line" ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(ns).b("bar"))
      }, [createBaseVNode("div", {
        class: normalizeClass(unref(ns).be("bar", "outer")),
        style: normalizeStyle({ height: `${__props.strokeWidth}px` })
      }, [createBaseVNode("div", {
        class: normalizeClass([
          unref(ns).be("bar", "inner"),
          { [unref(ns).bem("bar", "inner", "indeterminate")]: __props.indeterminate },
          { [unref(ns).bem("bar", "inner", "striped")]: __props.striped },
          { [unref(ns).bem("bar", "inner", "striped-flow")]: __props.stripedFlow }
        ]),
        style: normalizeStyle(barStyle.value)
      }, [(__props.showText || _ctx.$slots.default) && __props.textInside ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(ns).be("bar", "innerText"))
      }, [renderSlot(_ctx.$slots, "default", { percentage: __props.percentage }, () => [createBaseVNode("span", null, toDisplayString(content.value), 1)])], 2)) : createCommentVNode("v-if", true)], 6)], 6)], 2)) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(unref(ns).b("circle")),
        style: normalizeStyle({
          height: `${__props.width}px`,
          width: `${__props.width}px`
        })
      }, [(openBlock(), createElementBlock("svg", _hoisted_2$3, [createBaseVNode("path", {
        class: normalizeClass(unref(ns).be("circle", "track")),
        d: trackPath.value,
        stroke: `var(${unref(ns).cssVarName("fill-color-light")}, #e5e9f2)`,
        "stroke-linecap": __props.strokeLinecap,
        "stroke-width": relativeStrokeWidth.value,
        fill: "none",
        style: normalizeStyle(trailPathStyle.value)
      }, null, 14, _hoisted_3$2), createBaseVNode("path", {
        class: normalizeClass(unref(ns).be("circle", "path")),
        d: trackPath.value,
        stroke: stroke.value,
        fill: "none",
        opacity: __props.percentage ? 1 : 0,
        "stroke-linecap": __props.strokeLinecap,
        "stroke-width": relativeStrokeWidth.value,
        style: normalizeStyle(circlePathStyle.value)
      }, null, 14, _hoisted_4$1)]))], 6)), (__props.showText || _ctx.$slots.default) && !__props.textInside ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass(unref(ns).e("text")),
        style: normalizeStyle({ fontSize: `${progressTextSize.value}px` })
      }, [renderSlot(_ctx.$slots, "default", { percentage: __props.percentage }, () => [!__props.status ? (openBlock(), createElementBlock("span", _hoisted_5$1, toDisplayString(content.value), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
        default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(statusIcon.value)))]),
        _: 1
      }))])], 6)) : createCommentVNode("v-if", true)], 10, _hoisted_1$3);
    };
  }
});
var progress_default = progress_vue_vue_type_script_setup_true_lang_default;
const ElProgress = withInstall(progress_default);
const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
const messageTypes = [
  "primary",
  "success",
  "info",
  "warning",
  "error"
];
const messagePlacement = [
  "top",
  "top-left",
  "top-right",
  "bottom",
  "bottom-left",
  "bottom-right"
];
const messageDefaults = mutable({
  customClass: "",
  dangerouslyUseHTMLString: false,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: false,
  type: "info",
  plain: false,
  offset: 16,
  placement: void 0,
  zIndex: 0,
  grouping: false,
  repeatNum: 1,
  appendTo: isClient ? document.body : void 0
});
const messageProps = buildProps({
  /**
  * @description custom class name for Message
  */
  customClass: {
    type: definePropType([
      String,
      Array,
      Object,
      Boolean
    ]),
    default: messageDefaults.customClass
  },
  /**
  * @description whether `message` is treated as HTML string
  */
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: messageDefaults.dangerouslyUseHTMLString
  },
  /**
  * @description display duration, millisecond. If set to 0, it will not turn off automatically
  */
  duration: {
    type: Number,
    default: messageDefaults.duration
  },
  /**
  * @description custom icon component, overrides `type`
  */
  icon: {
    type: iconPropType,
    default: messageDefaults.icon
  },
  /**
  * @description message dom id
  */
  id: {
    type: String,
    default: messageDefaults.id
  },
  /**
  * @description message text
  */
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: messageDefaults.message
  },
  /**
  * @description callback function when closed with the message instance as the parameter
  */
  onClose: {
    type: definePropType(Function),
    default: messageDefaults.onClose
  },
  /**
  * @description whether to show a close button
  */
  showClose: {
    type: Boolean,
    default: messageDefaults.showClose
  },
  /**
  * @description message type
  */
  type: {
    type: String,
    values: messageTypes,
    default: messageDefaults.type
  },
  /**
  * @description whether message is plain
  */
  plain: {
    type: Boolean,
    default: messageDefaults.plain
  },
  /**
  * @description set the distance to the top of viewport
  */
  offset: {
    type: Number,
    default: messageDefaults.offset
  },
  /**
  * @description message placement position
  */
  placement: {
    type: String,
    values: messagePlacement,
    default: messageDefaults.placement
  },
  /**
  * @description message element zIndex value
  */
  zIndex: {
    type: Number,
    default: messageDefaults.zIndex
  },
  /**
  * @description merge messages with the same content, type of VNode message is not supported
  */
  grouping: {
    type: Boolean,
    default: messageDefaults.grouping
  },
  /**
  * @description The number of repetitions, similar to badge, is used as the initial number when used with `grouping`
  */
  repeatNum: {
    type: Number,
    default: messageDefaults.repeatNum
  }
});
const messageEmits = { destroy: () => true };
const placementInstances = shallowReactive({});
const getOrCreatePlacementInstances = (placement) => {
  if (!placementInstances[placement]) placementInstances[placement] = shallowReactive([]);
  return placementInstances[placement];
};
const getInstance = (id, placement) => {
  const instances = placementInstances[placement] || [];
  const idx = instances.findIndex((instance) => instance.id === id);
  const current = instances[idx];
  let prev;
  if (idx > 0) prev = instances[idx - 1];
  return {
    current,
    prev
  };
};
const getLastOffset = (id, placement) => {
  const { prev } = getInstance(id, placement);
  if (!prev) return 0;
  return prev.vm.exposed.bottom.value;
};
const getOffsetOrSpace = (id, offset, placement) => {
  return (placementInstances[placement] || []).findIndex((instance) => instance.id === id) > 0 ? 16 : offset;
};
const _hoisted_1$2 = ["id"];
const _hoisted_2$2 = ["innerHTML"];
var message_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ElMessage",
  __name: "message",
  props: messageProps,
  emits: messageEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const { Close } = TypeComponents;
    const props = __props;
    const emit = __emit;
    const isStartTransition = ref(false);
    const { ns, zIndex: zIndex2 } = useGlobalComponentSettings("message");
    const { currentZIndex, nextZIndex } = zIndex2;
    const messageRef = ref();
    const visible = ref(false);
    const height = ref(0);
    let stopTimer = void 0;
    const badgeType = computed(() => props.type ? props.type === "error" ? "danger" : props.type : "info");
    const typeClass = computed(() => {
      const type = props.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const iconComponent = computed(() => props.icon || TypeComponentsMap[props.type] || "");
    const placement = computed(() => props.placement || "top");
    const lastOffset = computed(() => getLastOffset(props.id, placement.value));
    const offset = computed(() => {
      return Math.max(getOffsetOrSpace(props.id, props.offset, placement.value) + lastOffset.value, props.offset);
    });
    const bottom = computed(() => height.value + offset.value);
    const horizontalClass = computed(() => {
      if (placement.value.includes("left")) return ns.is("left");
      if (placement.value.includes("right")) return ns.is("right");
      return ns.is("center");
    });
    const verticalProperty = computed(() => placement.value.startsWith("top") ? "top" : "bottom");
    const customStyle = computed(() => ({
      [verticalProperty.value]: `${offset.value}px`,
      zIndex: currentZIndex.value
    }));
    function startTimer() {
      if (props.duration === 0) return;
      ({ stop: stopTimer } = useTimeoutFn(() => {
        close();
      }, props.duration));
    }
    function clearTimer() {
      stopTimer?.();
    }
    function close() {
      visible.value = false;
      nextTick(() => {
        if (!isStartTransition.value) {
          props.onClose?.();
          emit("destroy");
        }
      });
    }
    function keydown(event) {
      if (getEventCode(event) === EVENT_CODE.esc) close();
    }
    onMounted(() => {
      startTimer();
      nextZIndex();
      visible.value = true;
    });
    watch(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    useEventListener(document, "keydown", keydown);
    useResizeObserver(messageRef, () => {
      height.value = messageRef.value.getBoundingClientRect().height;
    });
    __expose({
      visible,
      bottom,
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        onBeforeEnter: _cache[0] || (_cache[0] = ($event) => isStartTransition.value = true),
        onBeforeLeave: __props.onClose,
        onAfterLeave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("destroy")),
        persisted: ""
      }, {
        default: withCtx(() => [withDirectives(createBaseVNode("div", {
          id: __props.id,
          ref_key: "messageRef",
          ref: messageRef,
          class: normalizeClass([
            unref(ns).b(),
            { [unref(ns).m(__props.type)]: __props.type },
            unref(ns).is("closable", __props.showClose),
            unref(ns).is("plain", __props.plain),
            unref(ns).is("bottom", verticalProperty.value === "bottom"),
            horizontalClass.value,
            __props.customClass
          ]),
          style: normalizeStyle(customStyle.value),
          role: "alert",
          onMouseenter: clearTimer,
          onMouseleave: startTimer
        }, [
          __props.repeatNum > 1 ? (openBlock(), createBlock(unref(ElBadge), {
            key: 0,
            value: __props.repeatNum,
            type: badgeType.value,
            class: normalizeClass(unref(ns).e("badge"))
          }, null, 8, [
            "value",
            "type",
            "class"
          ])) : createCommentVNode("v-if", true),
          iconComponent.value ? (openBlock(), createBlock(unref(ElIcon), {
            key: 1,
            class: normalizeClass([unref(ns).e("icon"), typeClass.value])
          }, {
            default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(iconComponent.value)))]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true),
          !__props.dangerouslyUseHTMLString || _ctx.$slots.default ? (openBlock(), createElementBlock("p", {
            key: 2,
            class: normalizeClass(unref(ns).e("content"))
          }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(__props.message), 1)])], 2)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "), createBaseVNode("p", {
            class: normalizeClass(unref(ns).e("content")),
            innerHTML: __props.message
          }, null, 10, _hoisted_2$2)], 2112)),
          __props.showClose ? (openBlock(), createBlock(unref(ElIcon), {
            key: 4,
            class: normalizeClass(unref(ns).e("closeBtn")),
            onClick: withModifiers(close, ["stop"])
          }, {
            default: withCtx(() => [createVNode(unref(Close))]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true)
        ], 46, _hoisted_1$2), [[vShow, visible.value]])]),
        _: 3
      }, 8, ["name", "onBeforeLeave"]);
    };
  }
});
var message_default = message_vue_vue_type_script_setup_true_lang_default;
let seed$1 = 1;
const normalizeAppendTo = (normalized) => {
  if (!normalized.appendTo) normalized.appendTo = document.body;
  else if (isString(normalized.appendTo)) {
    let appendTo = document.querySelector(normalized.appendTo);
    if (!isElement(appendTo)) {
      debugWarn("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body.");
      appendTo = document.body;
    }
    normalized.appendTo = appendTo;
  }
};
const normalizePlacement = (normalized) => {
  if (!normalized.placement && isString(messageConfig.placement) && messageConfig.placement) normalized.placement = messageConfig.placement;
  if (!normalized.placement) normalized.placement = "top";
  if (!messagePlacement.includes(normalized.placement)) {
    debugWarn("ElMessage", `Invalid placement: ${normalized.placement}. Falling back to 'top'.`);
    normalized.placement = "top";
  }
};
const normalizeOptions = (params) => {
  const options = !params || isString(params) || isVNode(params) || isFunction$1(params) ? { message: params } : params;
  const normalized = {
    ...messageDefaults,
    ...options
  };
  normalizeAppendTo(normalized);
  normalizePlacement(normalized);
  if (isBoolean(messageConfig.grouping) && !normalized.grouping) normalized.grouping = messageConfig.grouping;
  if (isNumber(messageConfig.duration) && normalized.duration === 3e3) normalized.duration = messageConfig.duration;
  if (isNumber(messageConfig.offset) && normalized.offset === 16) normalized.offset = messageConfig.offset;
  if (isBoolean(messageConfig.showClose) && !normalized.showClose) normalized.showClose = messageConfig.showClose;
  if (isBoolean(messageConfig.plain) && !normalized.plain) normalized.plain = messageConfig.plain;
  return normalized;
};
const closeMessage = (instance) => {
  const placement = instance.props.placement || "top";
  const instances = placementInstances[placement];
  const idx = instances.indexOf(instance);
  if (idx === -1) return;
  instances.splice(idx, 1);
  const { handler } = instance;
  handler.close();
};
const createMessage = ({ appendTo, ...options }, context) => {
  const id = `message_${seed$1++}`;
  const userOnClose = options.onClose;
  const container = document.createElement("div");
  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose?.();
      closeMessage(instance);
    },
    onDestroy: () => {
      render(null, container);
    }
  };
  const vnode = createVNode(message_default, props, isFunction$1(props.message) || isVNode(props.message) ? { default: isFunction$1(props.message) ? props.message : () => props.message } : null);
  vnode.appContext = context || message._context;
  render(vnode, container);
  appendTo.appendChild(container.firstElementChild);
  const vm = vnode.component;
  const instance = {
    id,
    vnode,
    vm,
    handler: { close: () => {
      vm.exposed.close();
    } },
    props: vnode.component.props
  };
  return instance;
};
const message = (options = {}, context) => {
  if (!isClient) return { close: () => void 0 };
  const normalized = normalizeOptions(options);
  const instances = getOrCreatePlacementInstances(normalized.placement || "top");
  if (normalized.grouping && instances.length) {
    const instance2 = instances.find(({ vnode: vm }) => vm.props?.message === normalized.message);
    if (instance2) {
      instance2.props.repeatNum += 1;
      instance2.props.type = normalized.type;
      return instance2.handler;
    }
  }
  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) return { close: () => void 0 };
  const instance = createMessage(normalized, context);
  instances.push(instance);
  return instance.handler;
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeOptions(options);
    return message({
      ...normalized,
      type
    }, appContext);
  };
});
function closeAll(type) {
  for (const placement in placementInstances) if (hasOwn(placementInstances, placement)) {
    const instances = [...placementInstances[placement]];
    for (const instance of instances) if (!type || type === instance.props.type) instance.handler.close();
  }
}
function closeAllByPlacement(placement) {
  if (!placementInstances[placement]) return;
  [...placementInstances[placement]].forEach((instance) => instance.handler.close());
}
message.closeAll = closeAll;
message.closeAllByPlacement = closeAllByPlacement;
message._context = null;
const ElMessage = withInstallFunction(message, "$message");
var index_vue_vue_type_script_lang_default = defineComponent({
  name: "ElMessageBox",
  directives: { TrapFocus },
  components: {
    ElButton,
    ElFocusTrap: focus_trap_default$1,
    ElInput,
    ElOverlay,
    ElIcon,
    ...TypeComponents
  },
  inheritAttrs: false,
  props: {
    buttonSize: {
      type: String,
      validator: isValidComponentSize
    },
    modal: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    closeOnHashChange: {
      type: Boolean,
      default: true
    },
    center: Boolean,
    draggable: Boolean,
    overflow: Boolean,
    roundButton: Boolean,
    container: {
      type: String,
      default: "body"
    },
    boxType: {
      type: String,
      default: ""
    }
  },
  emits: ["vanish", "action"],
  setup(props, { emit }) {
    const { locale, zIndex: zIndex2, ns, size: btnSize } = useGlobalComponentSettings("message-box", computed(() => props.buttonSize));
    const { t } = locale;
    const { nextZIndex } = zIndex2;
    const visible = ref(false);
    const state2 = reactive({
      autofocus: true,
      beforeClose: null,
      callback: null,
      cancelButtonText: "",
      cancelButtonClass: "",
      confirmButtonText: "",
      confirmButtonClass: "",
      cancelButtonType: "",
      confirmButtonType: "primary",
      customClass: "",
      customStyle: {},
      dangerouslyUseHTMLString: false,
      distinguishCancelAndClose: false,
      icon: "",
      closeIcon: "",
      inputPattern: null,
      inputPlaceholder: "",
      inputType: "text",
      inputValue: "",
      inputValidator: void 0,
      inputErrorMessage: "",
      message: "",
      modalFade: true,
      modalClass: "",
      showCancelButton: false,
      showConfirmButton: true,
      type: "",
      title: void 0,
      showInput: false,
      action: "",
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonLoadingIcon: markRaw(loading_default),
      cancelButtonLoadingIcon: markRaw(loading_default),
      confirmButtonDisabled: false,
      editorErrorMessage: "",
      validateError: false,
      zIndex: nextZIndex()
    });
    const typeClass = computed(() => {
      const type = state2.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const contentId = useId();
    const inputId = useId();
    const iconComponent = computed(() => {
      const type = state2.type;
      return state2.icon || type && TypeComponentsMap[type] || "";
    });
    const hasMessage = computed(() => !!state2.message);
    const rootRef = ref();
    const headerRef = ref();
    const focusStartRef = ref();
    const inputRef = ref();
    const confirmRef = ref();
    const confirmButtonClasses = computed(() => state2.confirmButtonClass);
    watch(() => state2.inputValue, async (val) => {
      await nextTick();
      if (props.boxType === "prompt" && val) validate();
    }, { immediate: true });
    watch(() => visible.value, (val) => {
      if (val) {
        if (props.boxType !== "prompt") {
          if (state2.autofocus) focusStartRef.value = confirmRef.value?.$el ?? rootRef.value;
          else focusStartRef.value = rootRef.value;
        }
        state2.zIndex = nextZIndex();
      }
      if (props.boxType !== "prompt") return;
      if (val) nextTick().then(() => {
        if (inputRef.value && inputRef.value.$el) {
          if (state2.autofocus) focusStartRef.value = getInputElement() ?? rootRef.value;
          else focusStartRef.value = rootRef.value;
        }
      });
      else {
        state2.editorErrorMessage = "";
        state2.validateError = false;
      }
    });
    const draggable = computed(() => props.draggable);
    const overflow = computed(() => props.overflow);
    const { isDragging } = useDraggable(rootRef, headerRef, draggable, overflow);
    onMounted(async () => {
      await nextTick();
      if (props.closeOnHashChange) window.addEventListener("hashchange", doClose);
    });
    onBeforeUnmount(() => {
      if (props.closeOnHashChange) window.removeEventListener("hashchange", doClose);
    });
    function doClose() {
      if (!visible.value) return;
      visible.value = false;
      nextTick(() => {
        if (state2.action) emit("action", state2.action);
      });
    }
    const handleWrapperClick = () => {
      if (props.closeOnClickModal) handleAction2(state2.distinguishCancelAndClose ? "close" : "cancel");
    };
    const overlayEvent = useSameTarget(handleWrapperClick);
    const handleInputEnter = (e) => {
      if (state2.inputType !== "textarea" && !inputRef.value?.isComposing) {
        e.preventDefault();
        return handleAction2("confirm");
      }
    };
    const handleAction2 = (action) => {
      if (props.boxType === "prompt" && action === "confirm" && !validate()) return;
      state2.action = action;
      if (state2.beforeClose) state2.beforeClose?.(action, state2, doClose);
      else doClose();
    };
    const validate = () => {
      if (props.boxType === "prompt") {
        const inputPattern = state2.inputPattern;
        if (inputPattern && !inputPattern.test(state2.inputValue || "")) {
          state2.editorErrorMessage = state2.inputErrorMessage || t("el.messagebox.error");
          state2.validateError = true;
          return false;
        }
        const inputValidator = state2.inputValidator;
        if (isFunction$1(inputValidator)) {
          const validateResult = inputValidator(state2.inputValue);
          if (validateResult === false) {
            state2.editorErrorMessage = state2.inputErrorMessage || t("el.messagebox.error");
            state2.validateError = true;
            return false;
          }
          if (isString(validateResult)) {
            state2.editorErrorMessage = validateResult;
            state2.validateError = true;
            return false;
          }
        }
      }
      state2.editorErrorMessage = "";
      state2.validateError = false;
      return true;
    };
    const getInputElement = () => {
      const inputRefs = inputRef.value?.$refs;
      return inputRefs?.input ?? inputRefs?.textarea;
    };
    const handleClose = () => {
      handleAction2("close");
    };
    const onCloseRequested = () => {
      if (props.closeOnPressEscape) handleClose();
    };
    if (props.lockScroll) useLockscreen(visible, { ns });
    return {
      ...toRefs(state2),
      ns,
      overlayEvent,
      visible,
      hasMessage,
      typeClass,
      contentId,
      inputId,
      btnSize,
      iconComponent,
      confirmButtonClasses,
      rootRef,
      focusStartRef,
      headerRef,
      inputRef,
      isDragging,
      confirmRef,
      doClose,
      handleClose,
      onCloseRequested,
      handleWrapperClick,
      handleInputEnter,
      handleAction: handleAction2,
      t
    };
  }
});
const _hoisted_1$1 = ["aria-label", "aria-describedby"];
const _hoisted_2$1 = ["aria-label"];
const _hoisted_3$1 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_focus_trap = resolveComponent("el-focus-trap");
  const _component_el_overlay = resolveComponent("el-overlay");
  return openBlock(), createBlock(Transition, {
    name: "fade-in-linear",
    onAfterLeave: _cache[11] || (_cache[11] = ($event) => _ctx.$emit("vanish")),
    persisted: ""
  }, {
    default: withCtx(() => [withDirectives(createVNode(_component_el_overlay, {
      "z-index": _ctx.zIndex,
      "overlay-class": [_ctx.ns.is("message-box"), _ctx.modalClass],
      mask: _ctx.modal
    }, {
      default: withCtx(() => [createBaseVNode("div", {
        role: "dialog",
        "aria-label": _ctx.title,
        "aria-modal": "true",
        "aria-describedby": !_ctx.showInput ? _ctx.contentId : void 0,
        class: normalizeClass(`${_ctx.ns.namespace.value}-overlay-message-box`),
        onClick: _cache[8] || (_cache[8] = (...args) => _ctx.overlayEvent.onClick && _ctx.overlayEvent.onClick(...args)),
        onMousedown: _cache[9] || (_cache[9] = (...args) => _ctx.overlayEvent.onMousedown && _ctx.overlayEvent.onMousedown(...args)),
        onMouseup: _cache[10] || (_cache[10] = (...args) => _ctx.overlayEvent.onMouseup && _ctx.overlayEvent.onMouseup(...args))
      }, [createVNode(_component_el_focus_trap, {
        loop: "",
        trapped: _ctx.visible,
        "focus-trap-el": _ctx.rootRef,
        "focus-start-el": _ctx.focusStartRef,
        onReleaseRequested: _ctx.onCloseRequested
      }, {
        default: withCtx(() => [createBaseVNode("div", {
          ref: "rootRef",
          class: normalizeClass([
            _ctx.ns.b(),
            _ctx.customClass,
            _ctx.ns.is("draggable", _ctx.draggable),
            _ctx.ns.is("dragging", _ctx.isDragging),
            { [_ctx.ns.m("center")]: _ctx.center }
          ]),
          style: normalizeStyle(_ctx.customStyle),
          tabindex: "-1",
          onClick: _cache[7] || (_cache[7] = withModifiers(() => {
          }, ["stop"]))
        }, [
          _ctx.title !== null && _ctx.title !== void 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref: "headerRef",
            class: normalizeClass([_ctx.ns.e("header"), { "show-close": _ctx.showClose }])
          }, [createBaseVNode("div", { class: normalizeClass(_ctx.ns.e("title")) }, [_ctx.iconComponent && _ctx.center ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: normalizeClass([_ctx.ns.e("status"), _ctx.typeClass])
          }, {
            default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true), createBaseVNode("span", null, toDisplayString(_ctx.title), 1)], 2), _ctx.showClose ? (openBlock(), createElementBlock("button", {
            key: 0,
            type: "button",
            class: normalizeClass(_ctx.ns.e("headerbtn")),
            "aria-label": _ctx.t("el.messagebox.close"),
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel")),
            onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"]))
          }, [createVNode(_component_el_icon, { class: normalizeClass(_ctx.ns.e("close")) }, {
            default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || "close")))]),
            _: 1
          }, 8, ["class"])], 42, _hoisted_2$1)) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            id: _ctx.contentId,
            class: normalizeClass(_ctx.ns.e("content"))
          }, [createBaseVNode("div", { class: normalizeClass(_ctx.ns.e("container")) }, [_ctx.iconComponent && !_ctx.center && _ctx.hasMessage ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: normalizeClass([_ctx.ns.e("status"), _ctx.typeClass])
          }, {
            default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true), _ctx.hasMessage ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.ns.e("message"))
          }, [renderSlot(_ctx.$slots, "default", {}, () => [!_ctx.dangerouslyUseHTMLString ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.showInput ? "label" : "p"), {
            key: 0,
            for: _ctx.showInput ? _ctx.inputId : void 0,
            textContent: toDisplayString(_ctx.message)
          }, null, 8, ["for", "textContent"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.showInput ? "label" : "p"), {
            key: 1,
            for: _ctx.showInput ? _ctx.inputId : void 0,
            innerHTML: _ctx.message
          }, null, 8, ["for", "innerHTML"]))])], 2)) : createCommentVNode("v-if", true)], 2), withDirectives(createBaseVNode("div", { class: normalizeClass(_ctx.ns.e("input")) }, [createVNode(_component_el_input, {
            id: _ctx.inputId,
            ref: "inputRef",
            modelValue: _ctx.inputValue,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.inputValue = $event),
            type: _ctx.inputType,
            placeholder: _ctx.inputPlaceholder,
            "aria-invalid": _ctx.validateError,
            class: normalizeClass({ invalid: _ctx.validateError }),
            onKeydown: withKeys(_ctx.handleInputEnter, ["enter"])
          }, null, 8, [
            "id",
            "modelValue",
            "type",
            "placeholder",
            "aria-invalid",
            "class",
            "onKeydown"
          ]), createBaseVNode("div", {
            class: normalizeClass(_ctx.ns.e("errormsg")),
            style: normalizeStyle({ visibility: !!_ctx.editorErrorMessage ? "visible" : "hidden" })
          }, toDisplayString(_ctx.editorErrorMessage), 7)], 2), [[vShow, _ctx.showInput]])], 10, _hoisted_3$1),
          _ctx.showCancelButton || _ctx.showConfirmButton ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.ns.e("btns"))
          }, [_ctx.showCancelButton ? (openBlock(), createBlock(_component_el_button, {
            key: 0,
            type: _ctx.cancelButtonType === "text" ? "" : _ctx.cancelButtonType,
            text: _ctx.cancelButtonType === "text",
            loading: _ctx.cancelButtonLoading,
            "loading-icon": _ctx.cancelButtonLoadingIcon,
            class: normalizeClass([_ctx.cancelButtonClass]),
            round: _ctx.roundButton,
            size: _ctx.btnSize,
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleAction("cancel")),
            onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.handleAction("cancel"), ["prevent"]), ["enter"]))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.cancelButtonText || _ctx.t("el.messagebox.cancel")), 1)]),
            _: 1
          }, 8, [
            "type",
            "text",
            "loading",
            "loading-icon",
            "class",
            "round",
            "size"
          ])) : createCommentVNode("v-if", true), withDirectives(createVNode(_component_el_button, {
            ref: "confirmRef",
            type: _ctx.confirmButtonType === "text" ? "" : _ctx.confirmButtonType,
            text: _ctx.confirmButtonType === "text",
            loading: _ctx.confirmButtonLoading,
            "loading-icon": _ctx.confirmButtonLoadingIcon,
            class: normalizeClass([_ctx.confirmButtonClasses]),
            round: _ctx.roundButton,
            disabled: _ctx.confirmButtonDisabled,
            size: _ctx.btnSize,
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.handleAction("confirm")),
            onKeydown: _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.handleAction("confirm"), ["prevent"]), ["enter"]))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.confirmButtonText || _ctx.t("el.messagebox.confirm")), 1)]),
            _: 1
          }, 8, [
            "type",
            "text",
            "loading",
            "loading-icon",
            "class",
            "round",
            "disabled",
            "size"
          ]), [[vShow, _ctx.showConfirmButton]])], 2)) : createCommentVNode("v-if", true)
        ], 6)]),
        _: 3
      }, 8, [
        "trapped",
        "focus-trap-el",
        "focus-start-el",
        "onReleaseRequested"
      ])], 42, _hoisted_1$1)]),
      _: 3
    }, 8, [
      "z-index",
      "overlay-class",
      "mask"
    ]), [[vShow, _ctx.visible]])]),
    _: 3
  });
}
var src_default = /* @__PURE__ */ _plugin_vue_export_helper_default(index_vue_vue_type_script_lang_default, [["render", _sfc_render]]);
const messageInstance = /* @__PURE__ */ new Map();
const getAppendToElement = (props) => {
  let appendTo = document.body;
  if (props.appendTo) {
    if (isString(props.appendTo)) appendTo = document.querySelector(props.appendTo);
    if (isElement(props.appendTo)) appendTo = props.appendTo;
    if (!isElement(appendTo)) {
      debugWarn("ElMessageBox", "the appendTo option is not an HTMLElement. Falling back to document.body.");
      appendTo = document.body;
    }
  }
  return appendTo;
};
const handleAction = (vnode, action) => {
  const vm = vnode.component?.proxy;
  return () => vm.handleAction(action);
};
const initInstance = (props, container, appContext = null) => {
  const vnode = createVNode(src_default, props, isFunction$1(props.message) || isVNode(props.message) ? { default: isFunction$1(props.message) ? () => props.message({
    confirm: handleAction(vnode, "confirm"),
    cancel: handleAction(vnode, "cancel"),
    close: handleAction(vnode, "close")
  }) : () => props.message } : null);
  vnode.appContext = appContext;
  render(vnode, container);
  getAppendToElement(props).appendChild(container.firstElementChild);
  return vnode.component;
};
const genContainer = () => {
  return document.createElement("div");
};
const showMessage = (options, appContext) => {
  const container = genContainer();
  options.onVanish = () => {
    render(null, container);
    messageInstance.delete(vm);
  };
  options.onAction = (action) => {
    const currentMsg = messageInstance.get(vm);
    let resolve;
    if (options.showInput) resolve = {
      value: vm.inputValue,
      action
    };
    else resolve = action;
    if (options.callback) options.callback(resolve, instance.proxy);
    else if (action === "cancel" || action === "close") {
      if (options.distinguishCancelAndClose && action !== "cancel") currentMsg.reject("close");
      else currentMsg.reject("cancel");
    } else currentMsg.resolve(resolve);
  };
  const instance = initInstance(options, container, appContext);
  const vm = instance.proxy;
  for (const prop in options) if (hasOwn(options, prop) && !hasOwn(vm.$props, prop)) {
    if (prop === "closeIcon" && isObject$2(options[prop])) vm[prop] = markRaw(options[prop]);
    else vm[prop] = options[prop];
  }
  vm.visible = true;
  return vm;
};
function MessageBox(options, appContext = null) {
  if (!isClient) return Promise.reject();
  let callback;
  if (isString(options) || isVNode(options)) options = { message: options };
  else callback = options.callback;
  return new Promise((resolve, reject) => {
    const vm = showMessage(options, appContext ?? MessageBox._context);
    messageInstance.set(vm, {
      options,
      callback,
      resolve,
      reject
    });
  });
}
const MESSAGE_BOX_VARIANTS = [
  "alert",
  "confirm",
  "prompt"
];
const MESSAGE_BOX_DEFAULT_OPTS = {
  alert: {
    closeOnPressEscape: false,
    closeOnClickModal: false
  },
  confirm: { showCancelButton: true },
  prompt: {
    showCancelButton: true,
    showInput: true
  }
};
MESSAGE_BOX_VARIANTS.forEach((boxType) => {
  MessageBox[boxType] = messageBoxFactory(boxType);
});
function messageBoxFactory(boxType) {
  return (message2, title, options, appContext) => {
    let titleOrOpts = "";
    if (isObject$2(title)) {
      options = title;
      titleOrOpts = "";
    } else if (isUndefined(title)) titleOrOpts = "";
    else titleOrOpts = title;
    return MessageBox(Object.assign({
      title: titleOrOpts,
      message: message2,
      type: "",
      ...MESSAGE_BOX_DEFAULT_OPTS[boxType]
    }, options, { boxType }), appContext);
  };
}
MessageBox.close = () => {
  messageInstance.forEach((_, vm) => {
    vm.doClose();
  });
  messageInstance.clear();
};
MessageBox._context = null;
const _MessageBox = MessageBox;
_MessageBox.install = (app) => {
  _MessageBox._context = app._context;
  app.config.globalProperties.$msgbox = _MessageBox;
  app.config.globalProperties.$messageBox = _MessageBox;
  app.config.globalProperties.$alert = _MessageBox.alert;
  app.config.globalProperties.$confirm = _MessageBox.confirm;
  app.config.globalProperties.$prompt = _MessageBox.prompt;
};
const ElMessageBox = _MessageBox;
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = ({ size, strokeWidth = 2, absoluteStrokeWidth, color, iconNode, name, class: classes, ...props }, { slots }) => {
  return h(
    "svg",
    {
      ...defaultAttributes,
      width: size || defaultAttributes.width,
      height: size || defaultAttributes.height,
      stroke: color || defaultAttributes.stroke,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: ["lucide", `lucide-${toKebabCase(name ?? "icon")}`],
      ...props
    },
    [...iconNode.map((child) => h(...child)), ...slots.default ? [slots.default()] : []]
  );
};
const createLucideIcon = (iconName, iconNode) => (props, { slots }) => h(
  Icon,
  {
    ...props,
    iconNode,
    name: iconName
  },
  slots
);
const ArrowLeft = createLucideIcon("ArrowLeftIcon", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const ArrowUpRight = createLucideIcon("ArrowUpRightIcon", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
const Bell = createLucideIcon("BellIcon", [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
]);
const ChevronDown = createLucideIcon("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const CircleAlert = createLucideIcon("CircleAlertIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const CircleCheck = createLucideIcon("CircleCheckIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const ClipboardCheck = createLucideIcon("ClipboardCheckIcon", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
]);
const Download = createLucideIcon("DownloadIcon", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
const LayoutDashboard = createLucideIcon("LayoutDashboardIcon", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
const Menu = createLucideIcon("MenuIcon", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
const Plus = createLucideIcon("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const Search = createLucideIcon("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
const Settings = createLucideIcon("SettingsIcon", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Sparkles = createLucideIcon("SparklesIcon", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
const Trophy = createLucideIcon("TrophyIcon", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
]);
const Upload = createLucideIcon("UploadIcon", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
const Users = createLucideIcon("UsersIcon", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
const X = createLucideIcon("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const key = "compete.demo.v1";
const seed = {
  competitions: [
    { id: "c1", name: "全国大学生数学建模竞赛", category: "数学 / 数据科学", deadline: "2026-11-15", phase: "报名中", description: "围绕实际问题建立数学模型，提交完整论文、模型和相关程序。", requirements: "学生证、报名证明；每队 1–3 人。" },
    { id: "c2", name: "大学生程序设计竞赛", category: "计算机 / 算法", deadline: "2026-11-30", phase: "报名中", description: "用代码解决真实问题，展示算法设计与软件工程能力。", requirements: "学生证、作品说明。" },
    { id: "c3", name: "大学生创新创业项目挑战赛", category: "创新 / 商业计划", deadline: "2026-12-10", phase: "报名中", description: "从创意到原型，以可验证的商业计划展示项目的应用价值。", requirements: "项目计划书、团队信息。" },
    { id: "c4", name: "高校数字艺术作品展", category: "设计 / 数字媒体", deadline: "2026-10-30", phase: "评审中", description: "探索数字媒介的表达边界，提交视觉设计与创作说明。", requirements: "作品原图、设计说明。" },
    { id: "c5", name: "智能工程实践创新赛", category: "工程 / 智能制造", deadline: "2026-12-01", phase: "报名中", description: "以工程原型探索技术的实际应用。", requirements: "学生证、技术方案。" },
    { id: "c6", name: "青年学术研究成果交流赛", category: "学术 / 跨学科", deadline: "2026-12-20", phase: "即将开始", description: "以严谨方法和可靠结果呈现研究成果。", requirements: "研究论文、诚信声明。" }
  ],
  registrations: [
    { id: "r1", name: "王思远", studentId: "2025110821", contestId: "c1", team: "数海探索", status: "待复核", files: [{ name: "学生证示例.png", size: 24e4 }], submittedAt: "2026-10-15T08:40:00+08:00", ocr: { name: "王思远", studentId: "2025110821", certificate: "在读证明", award: "无", issuer: "示例大学" }, checks: null, history: [] },
    { id: "r2", name: "陈雨欣", studentId: "2024101706", contestId: "c3", team: "青禾计划", status: "已通过", files: [{ name: "学生证示例.png", size: 31e4 }], submittedAt: "2026-10-15T08:20:00+08:00", history: [] },
    { id: "r3", name: "赵子涵", studentId: "2025090314", contestId: "c2", team: "字节之间", status: "疑似异常", files: [{ name: "证明示例.png", size: 22e4 }], submittedAt: "2026-10-14T15:20:00+08:00", ocr: { name: "赵子涵", studentId: "2025090311", certificate: "参赛资格证明", award: "校级", issuer: "示例大学" }, checks: null, history: [] }
  ],
  works: [{ id: "w1", title: "面向校园的低碳出行推荐系统", registrationId: "r2", contestId: "c3", name: "陈雨欣", studentId: "2024101706", summary: "设计校园出行推荐方案，结合路线距离与碳排放估计，为学生提供低碳出行建议。", files: [{ name: "项目说明示例.pdf", size: 41e4 }], status: "待评价", aiScores: null, finalScores: null, comments: "", published: false, history: [] }],
  weights: [30, 25, 25, 20]
};
let initial;
try {
  const s = JSON.parse(localStorage.getItem(key));
  if (s && Array.isArray(s.competitions) && Array.isArray(s.registrations) && Array.isArray(s.works) && Array.isArray(s.weights) && s.weights.length === 4) initial = s;
} catch {
}
const state = reactive(initial || structuredClone(seed));
const persistence = reactive({ error: "" });
watch(state, () => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
    persistence.error = "";
  } catch {
    persistence.error = "浏览器存储不可用，本次修改未保存。请导出数据备份。";
  }
}, { deep: true });
const dimensions = ["创新性", "技术实现", "完成度", "应用价值"];
const currentStudent = { name: "吴直良", studentId: "25230810633" };
function score(values, weights = state.weights) {
  if (!values) return null;
  return values.reduce((s, n, i) => s + n * weights[i] / 100, 0);
}
function downloadCsv(filename, headers, rows) {
  const escape = (v) => '"' + String(v ?? "").replace(/^[=+@-]/, "'").replaceAll('"', '""') + '"';
  const text = "\uFEFF" + [headers, ...rows].map((r) => r.map(escape).join(",")).join("\r\n");
  const url = URL.createObjectURL(new Blob([text], { type: "text/csv;charset=utf-8;" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
function allowedRegistration(c) {
  return c.phase === "报名中" && c.deadline >= new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Taipei", year: "numeric", month: "2-digit", day: "2-digit" }).format(/* @__PURE__ */ new Date());
}
const _hoisted_1 = { class: "side-rule" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "side-bottom" };
const _hoisted_5 = { class: "profile" };
const _hoisted_6 = { class: "main" };
const _hoisted_7 = { class: "topbar" };
const _hoisted_8 = { class: "crumb" };
const _hoisted_9 = { class: "top-actions" };
const _hoisted_10 = { class: "role-switch" };
const _hoisted_11 = ["aria-pressed"];
const _hoisted_12 = { class: "demo-notice" };
const _hoisted_13 = {
  key: 0,
  class: "error-text"
};
const _hoisted_14 = { class: "page" };
const _hoisted_15 = { class: "hero" };
const _hoisted_16 = { class: "lede" };
const _hoisted_17 = { class: "signal" };
const _hoisted_18 = { class: "signal-line" };
const _hoisted_19 = { class: "stats" };
const _hoisted_20 = { class: "stat-head" };
const _hoisted_21 = { class: "stat-head" };
const _hoisted_22 = { class: "stat-foot" };
const _hoisted_23 = { class: "stat-head" };
const _hoisted_24 = { class: "stat-head" };
const _hoisted_25 = { class: "stat-foot" };
const _hoisted_26 = { class: "overview-actions" };
const _hoisted_27 = {
  key: 1,
  class: "panel records-panel"
};
const _hoisted_28 = { class: "panel-head" };
const _hoisted_29 = { class: "eyebrow" };
const _hoisted_30 = { class: "filters" };
const _hoisted_31 = ["onClick"];
const _hoisted_32 = { class: "search-field" };
const _hoisted_33 = { class: "table-wrap" };
const _hoisted_34 = { class: "person" };
const _hoisted_35 = { class: "mini-avatar" };
const _hoisted_36 = { class: "muted" };
const _hoisted_37 = ["onClick"];
const _hoisted_38 = {
  key: 0,
  class: "empty-state"
};
const _hoisted_39 = {
  key: 2,
  class: "section-page"
};
const _hoisted_40 = { class: "section-heading" };
const _hoisted_41 = { class: "search-field standalone-search" };
const _hoisted_42 = { class: "competition-cards" };
const _hoisted_43 = { class: "competition-body" };
const _hoisted_44 = { class: "contest-meta" };
const _hoisted_45 = { class: "requirements" };
const _hoisted_46 = ["onClick"];
const _hoisted_47 = ["disabled", "onClick"];
const _hoisted_48 = {
  key: 0,
  class: "empty-state"
};
const _hoisted_49 = {
  key: 3,
  class: "section-page"
};
const _hoisted_50 = { class: "form-layout" };
const _hoisted_51 = ["value", "disabled"];
const _hoisted_52 = { class: "form-row" };
const _hoisted_53 = { class: "form-row" };
const _hoisted_54 = { class: "file-list" };
const _hoisted_55 = ["onClick", "aria-label"];
const _hoisted_56 = ["src"];
const _hoisted_57 = {
  class: "primary-btn",
  type: "submit"
};
const _hoisted_58 = {
  key: 4,
  class: "section-page"
};
const _hoisted_59 = { class: "section-heading" };
const _hoisted_60 = ["value"];
const _hoisted_61 = {
  key: 0,
  class: "inline-warning"
};
const _hoisted_62 = { class: "file-list" };
const _hoisted_63 = ["onClick"];
const _hoisted_64 = {
  key: 1,
  class: "evaluation-layout"
};
const _hoisted_65 = { class: "work-list panel" };
const _hoisted_66 = { class: "panel-head" };
const _hoisted_67 = ["onClick", "disabled"];
const _hoisted_68 = {
  key: 0,
  class: "empty-state"
};
const _hoisted_69 = {
  key: 0,
  class: "evaluation-report form-panel"
};
const _hoisted_70 = { class: "report-summary" };
const _hoisted_71 = { class: "file-chips" };
const _hoisted_72 = ["disabled"];
const _hoisted_73 = { class: "report-score" };
const _hoisted_74 = { class: "dimension-bar" };
const _hoisted_75 = { class: "button-row" };
const _hoisted_76 = ["disabled"];
const _hoisted_77 = {
  key: 2,
  class: "audit-log"
};
const _hoisted_78 = {
  key: 1,
  class: "empty-state panel"
};
const _hoisted_79 = {
  key: 5,
  class: "section-page"
};
const _hoisted_80 = {
  key: 0,
  class: "empty-state panel"
};
const _hoisted_81 = { class: "report-score" };
const _hoisted_82 = { class: "result-dimensions" };
const _hoisted_83 = ["onClick"];
const _hoisted_84 = {
  key: 1,
  class: "subtle-note"
};
const _hoisted_85 = {
  key: 6,
  class: "section-page"
};
const _hoisted_86 = { class: "section-heading" };
const _hoisted_87 = { class: "search-field standalone-search" };
const _hoisted_88 = { class: "panel table-wrap" };
const _hoisted_89 = {
  key: 0,
  class: "empty-state"
};
const _hoisted_90 = { class: "review-identity" };
const _hoisted_91 = { class: "file-chips" };
const _hoisted_92 = ["disabled"];
const _hoisted_93 = {
  key: 1,
  class: "ocr-fields"
};
const _hoisted_94 = ["onUpdate:modelValue", "aria-label"];
const _hoisted_95 = {
  key: 2,
  class: "check-results"
};
const _hoisted_96 = { class: "review-note" };
const _hoisted_97 = { class: "button-row" };
const _hoisted_98 = ["disabled"];
const _hoisted_99 = ["disabled"];
const _hoisted_100 = { class: "audit-log" };
const _hoisted_101 = { class: "form-row" };
const _hoisted_102 = ["onClick"];
const _hoisted_103 = { key: 1 };
const _sfc_main = {
  __name: "Workspace",
  props: { initial: String },
  emits: ["home"],
  setup(__props, { emit: __emit }) {
    const props = __props, emit = __emit;
    const active = ref(props.initial || "overview"), role = ref(["register", "results"].includes(props.initial) ? "student" : "admin"), mobileOpen = ref(false), contrast = ref(false), query = ref(""), filter = ref("全部状态"), detail = ref(null), settingsOpen = ref(false), competitionModal = ref(false), notificationOpen = ref(false), busy = ref(false), runProgress = ref(0), scanReady = ref(false), preview = ref("");
    const reviewOpen = computed({ get: () => !!detail.value, set: (v) => {
      if (!v) detail.value = null;
    } });
    const settingsWeights = ref([...state.weights]), selectedWorkId = ref(""), editingId = ref(null);
    const adminNav = [{ id: "overview", label: "总览面板", en: "Overview", icon: LayoutDashboard }, { id: "verify", label: "报名材料检验", en: "Verification", icon: ClipboardCheck }, { id: "evaluate", label: "成果智能评价", en: "Evaluation", icon: Sparkles }, { id: "competitions", label: "竞赛管理", en: "Competitions", icon: Trophy }, { id: "students", label: "参赛学生", en: "Participants", icon: Users }];
    const studentNav = [{ id: "overview", label: "我的工作台", en: "Overview", icon: LayoutDashboard }, { id: "competitions", label: "发现竞赛", en: "Explore", icon: Trophy }, { id: "register", label: "在线报名", en: "Registration", icon: ClipboardCheck }, { id: "evaluate", label: "提交作品", en: "Submission", icon: Upload }, { id: "results", label: "我的结果", en: "Results", icon: Sparkles }];
    const nav = computed(() => role.value === "admin" ? adminNav : studentNav), pageTitle = computed(() => nav.value.find((x) => x.id === active.value)?.label || "工作台");
    const mine = computed(() => state.registrations.filter((r) => r.studentId === currentStudent.studentId));
    const visibleRecords = computed(() => role.value === "admin" ? state.registrations : mine.value);
    const filtered = computed(() => visibleRecords.value.filter((r) => (filter.value === "全部状态" || r.status === filter.value) && [r.name, r.studentId, contestName(r.contestId)].join(" ").includes(query.value)));
    const competitions = computed(() => state.competitions.filter((c) => [c.name, c.category, c.phase].join(" ").toLowerCase().includes(query.value.toLowerCase())));
    const visibleWorks = computed(() => role.value === "admin" ? state.works : state.works.filter((w) => w.studentId === currentStudent.studentId));
    const selectedWork = computed(() => visibleWorks.value.find((w) => w.id === selectedWorkId.value));
    const pending = computed(() => state.registrations.filter((r) => ["待检验", "待复核", "疑似异常"].includes(r.status)).length);
    const passed = computed(() => visibleRecords.value.filter((r) => r.status === "已通过").length);
    const passRate = computed(() => visibleRecords.value.length ? Math.round(passed.value / visibleRecords.value.length * 1e3) / 10 : 0);
    const evaluated = computed(() => visibleWorks.value.filter((w) => role.value === "admin" ? w.finalScores || w.aiScores : w.published));
    const average = computed(() => evaluated.value.length ? (evaluated.value.reduce((sum, w) => sum + score(w.finalScores || w.aiScores, w.weights || state.weights), 0) / evaluated.value.length).toFixed(1) : "—");
    const participants = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const r of state.registrations) {
        if (!map.has(r.studentId)) map.set(r.studentId, { name: r.name, id: r.studentId, count: 0, passed: 0 });
        const p = map.get(r.studentId);
        p.count++;
        if (r.status === "已通过") p.passed++;
      }
      return [...map.values()].filter((p) => (p.name + p.id).includes(query.value));
    });
    const registration = reactive({ name: currentStudent.name, studentId: currentStudent.studentId, contestId: "c1", team: "", certificate: "在读证明", award: "无", issuer: "温州商学院" });
    const work = reactive({ registrationId: "", title: "", summary: "" });
    const formFiles = ref([]), workFiles = ref([]), fileInput = ref(null), workInput = ref(null), ocr = reactive({ name: "", studentId: "", certificate: "", award: "", issuer: "" }), reviewNote = ref(""), reviewScores = ref([85, 82, 88, 84]), reviewComments = ref("");
    const fieldLabels = { name: "姓名", studentId: "学号", certificate: "证书名称", award: "获奖等级", issuer: "颁发单位" };
    const competition = reactive({ name: "", category: "计算机 / 算法", deadline: "2026-12-01", phase: "报名中", description: "", requirements: "" });
    const notifications = computed(() => [{ title: pending.value + " 份报名材料待处理", body: "查看、比对材料信息并完成复核。", target: "verify" }, { title: state.works.filter((w) => w.status === "待评价").length + " 份作品等待评价", body: "评价结果须经过教师复核后发布。", target: "evaluate" }]);
    let timer;
    const uploadUrls = [];
    function navigate(id) {
      active.value = id;
      query.value = "";
      filter.value = "全部状态";
      mobileOpen.value = false;
      location.hash = "/workspace/" + id;
      scrollTo({ top: 0, behavior: "instant" });
    }
    watch(() => props.initial, (v) => {
      active.value = v;
    });
    watch(role, () => {
      navigate("overview");
      detail.value = null;
      selectedWorkId.value = "";
      scanReady.value = false;
    });
    watch(selectedWork, (w) => {
      if (w) {
        reviewScores.value = [...w.finalScores || w.aiScores || [85, 82, 88, 84]];
        reviewComments.value = w.comments || "";
      }
    });
    function contestName(id) {
      return state.competitions.find((c) => c.id === id)?.name || "已归档竞赛";
    }
    function statusClass(status) {
      return status === "已通过" || status === "已发布" ? "pass" : status === "疑似异常" || status === "不通过" ? "warn" : "pending";
    }
    function time(value) {
      return new Date(value).toLocaleString("zh-CN", { timeZone: "Asia/Taipei", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
    }
    function pickFiles(files, target) {
      const accepted = [];
      for (const f of files) {
        const ext = f.name.split(".").pop().toLowerCase();
        const allowed = target === "work" ? ["pdf", "docx", "txt", "zip", "png", "jpg", "jpeg"] : ["pdf", "png", "jpg", "jpeg"];
        if (!allowed.includes(ext) || f.size > 20 * 1024 * 1024) {
          ElMessage.error(f.name + "：格式不支持或超过 20MB");
          continue;
        }
        if (accepted.length + (target === "work" ? workFiles.value.length : formFiles.value.length) >= 20) {
          ElMessage.warning("最多上传 20 个文件");
          break;
        }
        accepted.push({ name: f.name, size: f.size, type: f.type });
        if (target !== "work" && f.type.startsWith("image/")) {
          if (preview.value) URL.revokeObjectURL(preview.value);
          preview.value = URL.createObjectURL(f);
          uploadUrls.push(preview.value);
        }
      }
      if (target === "work") workFiles.value.push(...accepted);
      else formFiles.value.push(...accepted);
    }
    function submitRegistration() {
      if (!registration.name.trim() || !/^\d{8,14}$/.test(registration.studentId)) {
        ElMessage.error("请填写姓名及 8–14 位数字学号");
        return;
      }
      const c = state.competitions.find((c2) => c2.id === registration.contestId);
      if (!c || !allowedRegistration(c)) {
        ElMessage.error("此竞赛当前不可报名");
        return;
      }
      if (!formFiles.value.length) {
        ElMessage.error("请至少上传一份报名材料");
        return;
      }
      if (state.registrations.some((r) => r.contestId === registration.contestId && r.studentId === registration.studentId && r.status !== "不通过")) {
        ElMessage.warning("该学号已报名此竞赛，请在我的结果中查看");
        return;
      }
      state.registrations.unshift({ ...registration, id: crypto.randomUUID(), status: "待检验", submittedAt: (/* @__PURE__ */ new Date()).toISOString(), files: [...formFiles.value], history: [] });
      formFiles.value = [];
      preview.value = "";
      ElMessage.success("报名已保存在此浏览器，等待材料检验");
      navigate("results");
    }
    function openReview(r) {
      detail.value = r;
      reviewNote.value = "";
      scanReady.value = !!r.ocr;
      Object.assign(ocr, r.ocr || { name: "", studentId: "", certificate: "", award: "", issuer: "" });
    }
    function startScan() {
      if (!detail.value || busy.value) return;
      busy.value = true;
      runProgress.value = 0;
      scanReady.value = false;
      timer = setInterval(() => {
        runProgress.value += 20;
        if (runProgress.value >= 100) {
          clearInterval(timer);
          busy.value = false;
          scanReady.value = true;
          const r = detail.value;
          if (!r) return;
          Object.assign(ocr, r.ocr || { name: "示例同学", studentId: "2026000000", certificate: "在读证明", award: "无", issuer: "示例大学" });
          ElMessage.info("已载入示例识别结果。未调用 OCR 服务。");
        }
      }, 180);
    }
    function compare() {
      const r = detail.value;
      if (!r) return;
      const norm = (v) => String(v || "").trim();
      r.checks = Object.keys(fieldLabels).filter((k) => r[k] !== void 0).map((k) => ({ key: k, expected: r[k], actual: ocr[k], match: !!norm(ocr[k]) && norm(r[k]) === norm(ocr[k]) }));
      r.ocr = { ...ocr };
      r.status = r.checks.every((x) => x.match) ? "待复核" : "疑似异常";
      r.history.push({ at: (/* @__PURE__ */ new Date()).toISOString(), action: "字段一致性比对", note: r.checks.filter((x) => x.match).length + "/" + r.checks.length + " 项一致；识别值为演示输入。" });
      ElMessage.success("已完成字段比对，最终结论请人工复核");
    }
    function resolveReview(result) {
      if (!reviewNote.value.trim()) {
        ElMessage.warning("请填写复核意见");
        return;
      }
      const r = detail.value;
      r.status = result;
      r.history.push({ at: (/* @__PURE__ */ new Date()).toISOString(), action: "人工复核：" + result, note: reviewNote.value });
      ElMessage.success("复核结果已保存");
      detail.value = null;
    }
    function submitWork() {
      const r = mine.value.find((r2) => r2.id === work.registrationId && r2.status === "已通过");
      if (!r) {
        ElMessage.warning("请选择已通过报名审核的项目");
        return;
      }
      if (!work.title.trim() || work.summary.trim().length < 20) {
        ElMessage.warning("请填写作品标题和至少 20 字摘要");
        return;
      }
      if (!workFiles.value.length) {
        ElMessage.warning("请上传作品文件");
        return;
      }
      state.works.unshift({ id: crypto.randomUUID(), registrationId: r.id, contestId: r.contestId, name: r.name, studentId: r.studentId, title: work.title, summary: work.summary, files: [...workFiles.value], status: "待评价", published: false, history: [] });
      workFiles.value = [];
      work.title = "";
      work.summary = "";
      ElMessage.success("作品已保存至本地演示队列");
      navigate("results");
    }
    function runEvaluation() {
      const w = selectedWork.value;
      if (!w || busy.value) return;
      busy.value = true;
      runProgress.value = 0;
      timer = setInterval(() => {
        runProgress.value += 20;
        if (runProgress.value >= 100) {
          clearInterval(timer);
          busy.value = false;
          w.aiScores = [85, 82, 88, 84];
          w.weights = [...state.weights];
          w.finalScores = null;
          w.status = "待复核";
          w.published = false;
          w.comments = "演示评语：建议进一步明确创新点，补充技术对照实验与应用验证。此评语为预设示例，不代表对上传作品的真实评价。";
          w.history.push({ at: (/* @__PURE__ */ new Date()).toISOString(), action: "生成示例评价", note: "固定演示评分 85 / 82 / 88 / 84，未调用大模型。" });
          reviewScores.value = [...w.aiScores];
          reviewComments.value = w.comments;
        }
      }, 200);
    }
    function saveReview() {
      const w = selectedWork.value;
      if (!w?.aiScores) return;
      if (reviewScores.value.some((n) => typeof n !== "number" || n < 0 || n > 100)) {
        ElMessage.error("分值必须在 0–100 之间");
        return;
      }
      if (!reviewComments.value.trim()) {
        ElMessage.warning("请填写评价意见");
        return;
      }
      const before = w.finalScores || w.aiScores;
      w.finalScores = [...reviewScores.value];
      w.comments = reviewComments.value;
      w.status = "已复核";
      w.published = false;
      w.history.push({ at: (/* @__PURE__ */ new Date()).toISOString(), action: "教师复核", note: before.join("/") + " → " + w.finalScores.join("/") });
      ElMessage.success("评分与复核意见已保存");
    }
    function publish() {
      const w = selectedWork.value;
      if (w?.status !== "已复核") {
        ElMessage.warning("请先保存教师复核结果");
        return;
      }
      w.published = true;
      w.status = "已发布";
      w.history.push({ at: (/* @__PURE__ */ new Date()).toISOString(), action: "发布成绩", note: "学生端可以查看已发布结果。" });
      ElMessage.success("评价结果已发布");
    }
    function exportRegistrations() {
      downloadCsv("竞序_报名数据.csv", ["姓名", "学号", "竞赛", "状态", "提交时间"], visibleRecords.value.map((r) => [r.name, r.studentId, contestName(r.contestId), r.status, r.submittedAt]));
      ElMessage.success("报名 CSV 已导出");
    }
    function exportReport(w) {
      if (!w) return;
      const scores = w.finalScores || w.aiScores;
      downloadCsv("竞序_评价报告.csv", ["作品", "维度", "得分", "权重", "说明"], dimensions.map((d, i) => [w.title, d, scores?.[i] ?? "", (w.weights || state.weights)[i] + "%", w.comments]).concat([[w.title, "总分", score(scores, w.weights || state.weights)?.toFixed(1) || "未评价", "100%", "演示评价；不是真实 AI 推理结果"]]));
    }
    function editCompetition(c) {
      editingId.value = c?.id || null;
      Object.assign(competition, c || { name: "", category: "计算机 / 算法", deadline: "2026-12-01", phase: "报名中", description: "", requirements: "" });
      competitionModal.value = true;
    }
    function saveCompetition() {
      if (!competition.name.trim() || !competition.deadline || !competition.description.trim()) {
        ElMessage.warning("请填写名称、截止日期与说明");
        return;
      }
      if (editingId.value) Object.assign(state.competitions.find((c) => c.id === editingId.value), competition);
      else state.competitions.push({ ...competition, id: crypto.randomUUID() });
      competitionModal.value = false;
      ElMessage.success("竞赛配置已保存");
    }
    function openSettings() {
      settingsWeights.value = [...state.weights];
      settingsOpen.value = true;
    }
    function saveSettings() {
      if (settingsWeights.value.some((x) => typeof x !== "number" || x < 0) || settingsWeights.value.reduce((s, x) => s + x, 0) !== 100) {
        ElMessage.warning("评价权重须为非负数，合计为 100%");
        return;
      }
      state.weights = [...settingsWeights.value];
      settingsOpen.value = false;
      ElMessage.success("评价权重已保存；已生成报告保留原权重");
    }
    async function reset() {
      try {
        await ElMessageBox.confirm("这会清除此浏览器的演示记录并恢复初始示例。", "重置演示", { confirmButtonText: "确认重置", cancelButtonText: "取消", type: "warning" });
        Object.assign(state, structuredClone(seed));
        settingsOpen.value = false;
        ElMessage.success("演示数据已重置");
      } catch {
      }
    }
    function registerContest(c) {
      role.value = "student";
      registration.contestId = c.id;
      setTimeout(() => navigate("register"), 0);
    }
    onUnmounted(() => {
      clearInterval(timer);
      uploadUrls.forEach((u) => URL.revokeObjectURL(u));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["app workspace", { contrast: contrast.value }])
      }, [
        createBaseVNode("aside", {
          class: normalizeClass(["sidebar", { open: mobileOpen.value }])
        }, [
          createBaseVNode("button", {
            class: "brand home-brand",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("home"))
          }, [..._cache[49] || (_cache[49] = [
            createBaseVNode("div", { class: "brand-mark" }, "竞", -1),
            createBaseVNode("div", null, [
              createBaseVNode("b", null, "竞序"),
              createBaseVNode("span", null, "COMPETE / INTEL STUDIO")
            ], -1)
          ])]),
          createBaseVNode("button", {
            class: "close-mobile",
            "aria-label": "关闭菜单",
            onClick: _cache[1] || (_cache[1] = ($event) => mobileOpen.value = false)
          }, [
            createVNode(unref(X))
          ]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("span", null, toDisplayString(role.value === "admin" ? "CONTROL CENTER" : "STUDENT SPACE"), 1),
            _cache[50] || (_cache[50] = createBaseVNode("i", null, null, -1)),
            _cache[51] || (_cache[51] = createBaseVNode("span", null, "DEMO", -1))
          ]),
          createBaseVNode("nav", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(nav.value, (item) => {
              return openBlock(), createElementBlock("button", {
                key: item.id,
                class: normalizeClass({ active: active.value === item.id }),
                onClick: ($event) => navigate(item.id)
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(item.icon), { size: 18 })),
                createBaseVNode("span", null, [
                  createBaseVNode("strong", null, toDisplayString(item.label), 1),
                  createBaseVNode("small", null, toDisplayString(item.en), 1)
                ]),
                item.id === "verify" ? (openBlock(), createElementBlock("em", _hoisted_3, toDisplayString(pending.value), 1)) : active.value === item.id ? (openBlock(), createBlock(unref(ArrowUpRight), {
                  key: 1,
                  class: "nav-arrow",
                  size: 15
                })) : createCommentVNode("", true)
              ], 10, _hoisted_2);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("button", {
              class: "back-home",
              onClick: _cache[2] || (_cache[2] = ($event) => emit("home"))
            }, [
              createVNode(unref(ArrowLeft), { size: 15 }),
              _cache[52] || (_cache[52] = createTextVNode("返回展示首页", -1))
            ]),
            _cache[56] || (_cache[56] = createBaseVNode("div", { class: "system" }, [
              createBaseVNode("span", { class: "pulse" }),
              createBaseVNode("span", null, "本地交互演示"),
              createBaseVNode("small", null, "MOCK / NO BACKEND CONNECTED")
            ], -1)),
            role.value === "admin" ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: "settings",
              onClick: openSettings
            }, [
              createVNode(unref(Settings), { size: 17 }),
              _cache[53] || (_cache[53] = createTextVNode("评价规则设置", -1))
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_5, [
              _cache[55] || (_cache[55] = createBaseVNode("div", { class: "avatar" }, "吴", -1)),
              createBaseVNode("div", null, [
                _cache[54] || (_cache[54] = createBaseVNode("b", null, "吴直良", -1)),
                createBaseVNode("span", null, toDisplayString(role.value === "admin" ? "管理端演示" : "学生端演示"), 1)
              ]),
              createVNode(unref(ChevronDown), { size: 15 })
            ])
          ])
        ], 2),
        createBaseVNode("main", _hoisted_6, [
          createBaseVNode("header", _hoisted_7, [
            createBaseVNode("button", {
              class: "menu-mobile",
              "aria-label": "打开菜单",
              onClick: _cache[3] || (_cache[3] = ($event) => mobileOpen.value = true)
            }, [
              createVNode(unref(Menu))
            ]),
            createBaseVNode("div", _hoisted_8, [
              _cache[57] || (_cache[57] = createBaseVNode("span", null, "竞序 /", -1)),
              createBaseVNode("b", null, toDisplayString(pageTitle.value), 1)
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("label", _hoisted_10, [
                _cache[59] || (_cache[59] = createBaseVNode("span", null, "演示身份", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => role.value = $event),
                  "aria-label": "切换演示身份"
                }, [..._cache[58] || (_cache[58] = [
                  createBaseVNode("option", { value: "admin" }, "教师 / 管理端", -1),
                  createBaseVNode("option", { value: "student" }, "学生端", -1)
                ])], 512), [
                  [vModelSelect, role.value]
                ])
              ]),
              createBaseVNode("button", {
                class: "icon-btn",
                "aria-label": "查看待办通知",
                onClick: _cache[5] || (_cache[5] = ($event) => notificationOpen.value = true)
              }, [
                createVNode(unref(Bell), { size: 18 }),
                _cache[60] || (_cache[60] = createBaseVNode("i", null, null, -1))
              ]),
              createBaseVNode("button", {
                class: "contrast-btn",
                onClick: _cache[6] || (_cache[6] = ($event) => contrast.value = !contrast.value),
                "aria-pressed": contrast.value
              }, "◐ 对比", 8, _hoisted_11)
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            _cache[61] || (_cache[61] = createBaseVNode("span", null, "DEMO / 前端原型", -1)),
            _cache[62] || (_cache[62] = createTextVNode(" 数据保存在当前浏览器。OCR 与大模型为显式模拟，最终结果需人工复核。", -1)),
            unref(persistence).error ? (openBlock(), createElementBlock("span", _hoisted_13, toDisplayString(unref(persistence).error), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_14, [
            active.value === "overview" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("section", _hoisted_15, [
                createBaseVNode("div", null, [
                  _cache[63] || (_cache[63] = createBaseVNode("p", { class: "eyebrow" }, "CAMPUS COMPETITION / INTELLIGENCE STUDIO", -1)),
                  _cache[64] || (_cache[64] = createBaseVNode("h1", null, [
                    createTextVNode("让每一份"),
                    createBaseVNode("br"),
                    createBaseVNode("i", null, "创造"),
                    createTextVNode("被看见"),
                    createBaseVNode("span", { class: "dot" }, ".")
                  ], -1)),
                  createBaseVNode("p", _hoisted_16, toDisplayString(role.value === "admin" ? "从材料核验到成果评价，让判断更有依据。" : "从一个想法出发，开启你的下一场竞赛。"), 1)
                ]),
                _cache[65] || (_cache[65] = createStaticVNode('<div class="hero-art" aria-hidden="true"><div class="orb"></div><div class="orbit o1"></div><div class="orbit o2"></div><div class="binary">01001 11010 00101<br>11001 00110 10110</div><span class="art-label">AI / HUMAN<br>COLLABORATION</span></div>', 1))
              ]),
              createBaseVNode("div", _hoisted_17, [
                _cache[66] || (_cache[66] = createBaseVNode("span", null, "AI CONSOLE / 竞赛智能中枢", -1)),
                createBaseVNode("div", _hoisted_18, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(12, (n) => {
                    return createBaseVNode("i", { key: n });
                  }), 64))
                ]),
                _cache[67] || (_cache[67] = createBaseVNode("b", null, "LOCAL DEMO", -1))
              ]),
              createBaseVNode("section", _hoisted_19, [
                createBaseVNode("article", null, [
                  createBaseVNode("div", _hoisted_20, [
                    createBaseVNode("span", null, toDisplayString(role.value === "admin" ? "报名总数" : "我的报名"), 1),
                    createVNode(unref(Users), { size: 17 })
                  ]),
                  createBaseVNode("strong", null, toDisplayString(visibleRecords.value.length), 1),
                  _cache[68] || (_cache[68] = createBaseVNode("div", { class: "stat-foot" }, "当前浏览器记录", -1))
                ]),
                createBaseVNode("article", null, [
                  createBaseVNode("div", _hoisted_21, [
                    _cache[69] || (_cache[69] = createBaseVNode("span", null, "审核通过率", -1)),
                    createVNode(unref(CircleCheck), { size: 17 })
                  ]),
                  createBaseVNode("strong", null, [
                    createTextVNode(toDisplayString(passRate.value), 1),
                    _cache[70] || (_cache[70] = createBaseVNode("span", null, "%", -1))
                  ]),
                  createBaseVNode("div", _hoisted_22, toDisplayString(passed.value) + " 份已通过", 1)
                ]),
                createBaseVNode("article", null, [
                  createBaseVNode("div", _hoisted_23, [
                    _cache[71] || (_cache[71] = createBaseVNode("span", null, "待检验 / 复核", -1)),
                    createVNode(unref(CircleAlert), { size: 17 })
                  ]),
                  createBaseVNode("strong", null, toDisplayString(visibleRecords.value.filter((r) => !["已通过", "不通过"].includes(r.status)).length), 1),
                  _cache[72] || (_cache[72] = createBaseVNode("div", { class: "stat-foot" }, "AI 初筛 · 人工确认", -1))
                ]),
                createBaseVNode("article", null, [
                  createBaseVNode("div", _hoisted_24, [
                    _cache[73] || (_cache[73] = createBaseVNode("span", null, "已评价平均分", -1)),
                    createVNode(unref(Sparkles), { size: 17 })
                  ]),
                  createBaseVNode("strong", null, toDisplayString(average.value), 1),
                  createBaseVNode("div", _hoisted_25, "基于 " + toDisplayString(evaluated.value.length) + " 份示例报告", 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("button", {
                  class: "quick-action coral",
                  onClick: _cache[7] || (_cache[7] = ($event) => navigate(role.value === "admin" ? "verify" : "register"))
                }, [
                  createBaseVNode("span", null, [
                    createVNode(unref(Upload)),
                    createBaseVNode("b", null, toDisplayString(role.value === "admin" ? "处理报名材料" : "提交竞赛报名"), 1),
                    _cache[74] || (_cache[74] = createBaseVNode("small", null, "材料上传 · 一致性检验", -1))
                  ]),
                  createVNode(unref(ArrowUpRight))
                ]),
                createBaseVNode("button", {
                  class: "quick-action",
                  onClick: _cache[8] || (_cache[8] = ($event) => navigate("evaluate"))
                }, [
                  createBaseVNode("span", null, [
                    createVNode(unref(Sparkles)),
                    createBaseVNode("b", null, toDisplayString(role.value === "admin" ? "成果智能评价" : "提交我的作品"), 1),
                    _cache[75] || (_cache[75] = createBaseVNode("small", null, "多维评价 · 教师复核", -1))
                  ]),
                  createVNode(unref(ArrowUpRight))
                ]),
                createBaseVNode("button", {
                  class: "quick-action",
                  onClick: exportRegistrations
                }, [
                  createBaseVNode("span", null, [
                    createVNode(unref(Download)),
                    _cache[76] || (_cache[76] = createBaseVNode("b", null, "导出报名数据", -1)),
                    _cache[77] || (_cache[77] = createBaseVNode("small", null, "真实本地记录 · CSV", -1))
                  ]),
                  createVNode(unref(ArrowUpRight))
                ])
              ])
            ], 64)) : createCommentVNode("", true),
            ["overview", "verify", "results"].includes(active.value) ? (openBlock(), createElementBlock("section", _hoisted_27, [
              createBaseVNode("div", _hoisted_28, [
                createBaseVNode("div", null, [
                  createBaseVNode("p", _hoisted_29, "REGISTRATION / " + toDisplayString(role.value === "admin" ? "VERIFICATION QUEUE" : "MY APPLICATIONS"), 1),
                  createBaseVNode("h2", null, toDisplayString(role.value === "admin" ? "报名审核队列" : "我的报名与进度"), 1)
                ]),
                createBaseVNode("button", {
                  class: "text-btn",
                  onClick: exportRegistrations
                }, [
                  _cache[78] || (_cache[78] = createTextVNode("导出 CSV ", -1)),
                  createVNode(unref(Download), { size: 15 })
                ])
              ]),
              createBaseVNode("div", _hoisted_30, [
                (openBlock(), createElementBlock(Fragment, null, renderList(["全部状态", "待检验", "待复核", "疑似异常", "已通过", "不通过"], (s) => {
                  return createBaseVNode("button", {
                    key: s,
                    class: normalizeClass({ selected: filter.value === s }),
                    onClick: ($event) => filter.value = s
                  }, toDisplayString(s), 11, _hoisted_31);
                }), 64)),
                createBaseVNode("label", _hoisted_32, [
                  createVNode(unref(Search), { size: 14 }),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => query.value = $event),
                    placeholder: "搜索姓名、学号、竞赛",
                    "aria-label": "搜索报名记录"
                  }, null, 512), [
                    [vModelText, query.value]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("table", null, [
                  _cache[80] || (_cache[80] = createBaseVNode("thead", null, [
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", null, "参赛者 / 学号"),
                      createBaseVNode("th", null, "竞赛项目"),
                      createBaseVNode("th", null, "材料"),
                      createBaseVNode("th", null, "审核状态"),
                      createBaseVNode("th", null, "提交时间"),
                      createBaseVNode("th", null, "操作")
                    ])
                  ], -1)),
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(filtered.value, (r) => {
                      return openBlock(), createElementBlock("tr", {
                        key: r.id
                      }, [
                        createBaseVNode("td", null, [
                          createBaseVNode("div", _hoisted_34, [
                            createBaseVNode("div", _hoisted_35, toDisplayString(r.name[0]), 1),
                            createBaseVNode("div", null, [
                              createBaseVNode("b", null, toDisplayString(r.name), 1),
                              createBaseVNode("small", null, toDisplayString(r.studentId), 1)
                            ])
                          ])
                        ]),
                        createBaseVNode("td", null, toDisplayString(contestName(r.contestId)), 1),
                        createBaseVNode("td", null, toDisplayString(r.files.length) + " 份材料", 1),
                        createBaseVNode("td", null, [
                          createBaseVNode("span", {
                            class: normalizeClass(["status", statusClass(r.status)])
                          }, [
                            _cache[79] || (_cache[79] = createBaseVNode("i", null, null, -1)),
                            createTextVNode(toDisplayString(r.status), 1)
                          ], 2)
                        ]),
                        createBaseVNode("td", _hoisted_36, toDisplayString(time(r.submittedAt)), 1),
                        createBaseVNode("td", null, [
                          createBaseVNode("button", {
                            class: "row-btn",
                            onClick: ($event) => openReview(r)
                          }, toDisplayString(role.value === "admin" ? "查看 / 复核" : "查看进度") + " ↗", 9, _hoisted_37)
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                !filtered.value.length ? (openBlock(), createElementBlock("div", _hoisted_38, [
                  createVNode(unref(ClipboardCheck), { size: 32 }),
                  _cache[81] || (_cache[81] = createBaseVNode("p", null, "暂无符合条件的报名记录", -1)),
                  role.value === "student" ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: "primary-btn",
                    onClick: _cache[10] || (_cache[10] = ($event) => navigate("register"))
                  }, "开始第一份报名 ↗")) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ])) : createCommentVNode("", true),
            active.value === "competitions" ? (openBlock(), createElementBlock("section", _hoisted_39, [
              createBaseVNode("div", _hoisted_40, [
                createBaseVNode("div", null, [
                  _cache[82] || (_cache[82] = createBaseVNode("p", { class: "eyebrow" }, "FIND YOUR NEXT CHALLENGE", -1)),
                  createBaseVNode("h1", null, toDisplayString(role.value === "admin" ? "竞赛管理" : "发现你的下一场挑战"), 1)
                ]),
                role.value === "admin" ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "primary-btn",
                  onClick: _cache[11] || (_cache[11] = ($event) => editCompetition())
                }, [
                  createVNode(unref(Plus), { size: 17 }),
                  _cache[83] || (_cache[83] = createTextVNode("发布竞赛", -1))
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("label", _hoisted_41, [
                createVNode(unref(Search), { size: 16 }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => query.value = $event),
                  placeholder: "搜索竞赛、学科或状态",
                  "aria-label": "搜索竞赛"
                }, null, 512), [
                  [vModelText, query.value]
                ])
              ]),
              _cache[85] || (_cache[85] = createBaseVNode("p", { class: "subtle-note" }, "以下名称、日期与规则均为可编辑的演示配置，并非官方报名通知。", -1)),
              createBaseVNode("div", _hoisted_42, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(competitions.value, (c, i) => {
                  return openBlock(), createElementBlock("article", {
                    key: c.id
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(["competition-visual", "visual-" + i % 4])
                    }, [
                      createBaseVNode("span", null, "/ " + toDisplayString(String(i + 1).padStart(2, "0")), 1),
                      createBaseVNode("b", null, toDisplayString(["MODEL", "CODE", "CREATE", "DESIGN"][i % 4]), 1),
                      _cache[84] || (_cache[84] = createBaseVNode("i", null, "✳", -1))
                    ], 2),
                    createBaseVNode("div", _hoisted_43, [
                      createBaseVNode("small", null, toDisplayString(c.category), 1),
                      createBaseVNode("h2", null, toDisplayString(c.name), 1),
                      createBaseVNode("p", null, toDisplayString(c.description), 1),
                      createBaseVNode("div", _hoisted_44, [
                        createBaseVNode("span", null, toDisplayString(c.phase), 1),
                        createBaseVNode("span", null, "截止 " + toDisplayString(c.deadline), 1)
                      ]),
                      createBaseVNode("p", _hoisted_45, "材料要求：" + toDisplayString(c.requirements), 1),
                      role.value === "admin" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        class: "primary-btn",
                        onClick: ($event) => editCompetition(c)
                      }, "编辑竞赛 / 报名配置 ↗", 8, _hoisted_46)) : (openBlock(), createElementBlock("button", {
                        key: 1,
                        class: "primary-btn",
                        disabled: !unref(allowedRegistration)(c),
                        onClick: ($event) => registerContest(c)
                      }, toDisplayString(unref(allowedRegistration)(c) ? "立即报名 ↗" : "当前不可报名"), 9, _hoisted_47))
                    ])
                  ]);
                }), 128))
              ]),
              !competitions.value.length ? (openBlock(), createElementBlock("div", _hoisted_48, "未找到匹配的竞赛。")) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            active.value === "register" ? (openBlock(), createElementBlock("section", _hoisted_49, [
              _cache[101] || (_cache[101] = createBaseVNode("div", { class: "section-heading" }, [
                createBaseVNode("div", null, [
                  createBaseVNode("p", { class: "eyebrow" }, "01 / YOUR FIRST STEP"),
                  createBaseVNode("h1", null, "在线报名")
                ]),
                createBaseVNode("span", { class: "section-index" }, "ENTER ↗")
              ], -1)),
              createBaseVNode("div", _hoisted_50, [
                createBaseVNode("form", {
                  class: "form-panel",
                  onSubmit: withModifiers(submitRegistration, ["prevent"])
                }, [
                  _cache[96] || (_cache[96] = createBaseVNode("div", { class: "form-section-title" }, [
                    createBaseVNode("b", null, "01 基本信息"),
                    createBaseVNode("span", null, "全部字段均为报名信息")
                  ], -1)),
                  createBaseVNode("label", null, [
                    _cache[86] || (_cache[86] = createTextVNode("选择竞赛", -1)),
                    withDirectives(createBaseVNode("select", {
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => registration.contestId = $event),
                      required: ""
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).competitions, (c) => {
                        return openBlock(), createElementBlock("option", {
                          key: c.id,
                          value: c.id,
                          disabled: !unref(allowedRegistration)(c)
                        }, toDisplayString(c.name) + " · " + toDisplayString(c.phase), 9, _hoisted_51);
                      }), 128))
                    ], 512), [
                      [vModelSelect, registration.contestId]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_52, [
                    createBaseVNode("label", null, [
                      _cache[87] || (_cache[87] = createTextVNode("姓名", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => registration.name = $event),
                        required: "",
                        maxlength: "30"
                      }, null, 512), [
                        [vModelText, registration.name]
                      ])
                    ]),
                    createBaseVNode("label", null, [
                      _cache[88] || (_cache[88] = createTextVNode("学号", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => registration.studentId = $event),
                        required: "",
                        inputmode: "numeric",
                        pattern: "[0-9]{8,14}",
                        readonly: ""
                      }, null, 512), [
                        [vModelText, registration.studentId]
                      ])
                    ])
                  ]),
                  createBaseVNode("label", null, [
                    _cache[89] || (_cache[89] = createTextVNode("团队名称（选填）", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => registration.team = $event),
                      maxlength: "50",
                      placeholder: "给你的团队起个名字"
                    }, null, 512), [
                      [vModelText, registration.team]
                    ])
                  ]),
                  _cache[97] || (_cache[97] = createBaseVNode("div", { class: "form-section-title" }, [
                    createBaseVNode("b", null, "02 证明信息"),
                    createBaseVNode("span", null, "用于与材料识别结果比对")
                  ], -1)),
                  createBaseVNode("label", null, [
                    _cache[90] || (_cache[90] = createTextVNode("证书 / 证明名称", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => registration.certificate = $event),
                      required: ""
                    }, null, 512), [
                      [vModelText, registration.certificate]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_53, [
                    createBaseVNode("label", null, [
                      _cache[91] || (_cache[91] = createTextVNode("获奖等级 / 无", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => registration.award = $event),
                        required: ""
                      }, null, 512), [
                        [vModelText, registration.award]
                      ])
                    ]),
                    createBaseVNode("label", null, [
                      _cache[92] || (_cache[92] = createTextVNode("颁发单位", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => registration.issuer = $event),
                        required: ""
                      }, null, 512), [
                        [vModelText, registration.issuer]
                      ])
                    ])
                  ]),
                  _cache[98] || (_cache[98] = createBaseVNode("div", { class: "form-section-title" }, [
                    createBaseVNode("b", null, "03 报名材料"),
                    createBaseVNode("span", null, "PNG / JPG / PDF · 20MB / 份")
                  ], -1)),
                  createBaseVNode("input", {
                    ref_key: "fileInput",
                    ref: fileInput,
                    class: "hidden-input",
                    type: "file",
                    multiple: "",
                    accept: ".png,.jpg,.jpeg,.pdf",
                    onChange: _cache[20] || (_cache[20] = ($event) => {
                      pickFiles($event.target.files, "registration");
                      $event.target.value = "";
                    })
                  }, null, 544),
                  createBaseVNode("button", {
                    type: "button",
                    class: "dropzone",
                    onClick: _cache[21] || (_cache[21] = ($event) => fileInput.value.click()),
                    onDragover: _cache[22] || (_cache[22] = withModifiers(() => {
                    }, ["prevent"])),
                    onDrop: _cache[23] || (_cache[23] = withModifiers(($event) => pickFiles($event.dataTransfer.files, "registration"), ["prevent"]))
                  }, [
                    createVNode(unref(Upload), { size: 28 }),
                    _cache[93] || (_cache[93] = createBaseVNode("b", null, "拖拽文件至此，或点击选择", -1)),
                    _cache[94] || (_cache[94] = createBaseVNode("small", null, "最多 20 个文件", -1))
                  ], 32),
                  createBaseVNode("ul", _hoisted_54, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(formFiles.value, (f, i) => {
                      return openBlock(), createElementBlock("li", { key: i }, [
                        createBaseVNode("span", null, [
                          createTextVNode(toDisplayString(f.name) + " ", 1),
                          createBaseVNode("small", null, toDisplayString((f.size / 1024).toFixed(0)) + " KB", 1)
                        ]),
                        createBaseVNode("button", {
                          type: "button",
                          onClick: ($event) => formFiles.value.splice(i, 1),
                          "aria-label": "移除 " + f.name
                        }, [
                          createVNode(unref(X), { size: 14 })
                        ], 8, _hoisted_55)
                      ]);
                    }), 128))
                  ]),
                  preview.value && formFiles.value.length ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: preview.value,
                    class: "file-preview",
                    alt: "最近上传的图片预览"
                  }, null, 8, _hoisted_56)) : createCommentVNode("", true),
                  _cache[99] || (_cache[99] = createBaseVNode("p", { class: "subtle-note" }, "本地演示只持久保存文件名和大小，不保存或上传文件原文。", -1)),
                  createBaseVNode("button", _hoisted_57, [
                    _cache[95] || (_cache[95] = createTextVNode("提交报名，进入核验队列 ", -1)),
                    createVNode(unref(ArrowUpRight), { size: 17 })
                  ])
                ], 32),
                _cache[100] || (_cache[100] = createStaticVNode('<aside class="form-aside"><span>REGISTRATION<br>→ VERIFICATION<br>→ CREATION</span><h2>把流程交给系统，<br>把精力留给创造。</h2><p>填写的信息将与 OCR 提取字段进行一致性比对。姓名与学号严格匹配，异常结果进入教师复核队列。</p><ol><li>填写报名信息</li><li>上传清晰完整的证明</li><li>等待材料检验与人工复核</li><li>审核通过后提交作品</li></ol></aside>', 1))
              ])
            ])) : createCommentVNode("", true),
            active.value === "evaluate" ? (openBlock(), createElementBlock("section", _hoisted_58, [
              createBaseVNode("div", _hoisted_59, [
                createBaseVNode("div", null, [
                  _cache[102] || (_cache[102] = createBaseVNode("p", { class: "eyebrow" }, "MULTIDIMENSIONAL EVALUATION", -1)),
                  createBaseVNode("h1", null, toDisplayString(role.value === "admin" ? "成果智能评价" : "提交你的作品"), 1)
                ]),
                _cache[103] || (_cache[103] = createBaseVNode("span", { class: "section-index" }, "CREATE ✳", -1))
              ]),
              role.value === "student" ? (openBlock(), createElementBlock("form", {
                key: 0,
                class: "form-panel work-submit",
                onSubmit: withModifiers(submitWork, ["prevent"])
              }, [
                createBaseVNode("label", null, [
                  _cache[105] || (_cache[105] = createTextVNode("已通过审核的报名", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => work.registrationId = $event),
                    required: ""
                  }, [
                    _cache[104] || (_cache[104] = createBaseVNode("option", {
                      disabled: "",
                      value: ""
                    }, "请选择报名项目", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(mine.value.filter((r) => r.status === "已通过"), (r) => {
                      return openBlock(), createElementBlock("option", {
                        key: r.id,
                        value: r.id
                      }, toDisplayString(contestName(r.contestId)), 9, _hoisted_60);
                    }), 128))
                  ], 512), [
                    [vModelSelect, work.registrationId]
                  ])
                ]),
                !mine.value.some((r) => r.status === "已通过") ? (openBlock(), createElementBlock("p", _hoisted_61, "暂无审核通过的报名。请先报名，并在管理端演示中完成审核。")) : createCommentVNode("", true),
                createBaseVNode("label", null, [
                  _cache[106] || (_cache[106] = createTextVNode("作品标题", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => work.title = $event),
                    required: "",
                    maxlength: "100",
                    placeholder: "给你的作品一个清晰的名字"
                  }, null, 512), [
                    [vModelText, work.title]
                  ])
                ]),
                createBaseVNode("label", null, [
                  _cache[107] || (_cache[107] = createTextVNode("作品摘要 / 不少于 20 字", -1)),
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => work.summary = $event),
                    required: "",
                    minlength: "20",
                    maxlength: "10000",
                    rows: "6",
                    placeholder: "简述研究问题、实现方法、创新点与应用价值……"
                  }, null, 512), [
                    [vModelText, work.summary]
                  ])
                ]),
                createBaseVNode("input", {
                  ref_key: "workInput",
                  ref: workInput,
                  class: "hidden-input",
                  type: "file",
                  multiple: "",
                  accept: ".pdf,.docx,.txt,.zip,.png,.jpg,.jpeg",
                  onChange: _cache[27] || (_cache[27] = ($event) => {
                    pickFiles($event.target.files, "work");
                    $event.target.value = "";
                  })
                }, null, 544),
                createBaseVNode("button", {
                  type: "button",
                  class: "dropzone",
                  onClick: _cache[28] || (_cache[28] = ($event) => workInput.value.click()),
                  onDragover: _cache[29] || (_cache[29] = withModifiers(() => {
                  }, ["prevent"])),
                  onDrop: _cache[30] || (_cache[30] = withModifiers(($event) => pickFiles($event.dataTransfer.files, "work"), ["prevent"]))
                }, [
                  createVNode(unref(Upload)),
                  _cache[108] || (_cache[108] = createBaseVNode("b", null, "上传论文、报告或代码压缩包", -1)),
                  _cache[109] || (_cache[109] = createBaseVNode("small", null, "PDF / DOCX / TXT / ZIP / 图片，20MB / 份", -1))
                ], 32),
                createBaseVNode("ul", _hoisted_62, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(workFiles.value, (f, i) => {
                    return openBlock(), createElementBlock("li", { key: i }, [
                      createBaseVNode("span", null, toDisplayString(f.name), 1),
                      createBaseVNode("button", {
                        type: "button",
                        onClick: ($event) => workFiles.value.splice(i, 1),
                        "aria-label": "移除作品文件"
                      }, [
                        createVNode(unref(X), { size: 14 })
                      ], 8, _hoisted_63)
                    ]);
                  }), 128))
                ]),
                _cache[110] || (_cache[110] = createBaseVNode("p", { class: "subtle-note" }, "仅保存文件元数据。此原型不会分析或上传作品内容。", -1)),
                _cache[111] || (_cache[111] = createBaseVNode("button", { class: "primary-btn" }, "提交作品 ↗", -1))
              ], 32)) : (openBlock(), createElementBlock("div", _hoisted_64, [
                createBaseVNode("div", _hoisted_65, [
                  createBaseVNode("div", _hoisted_66, [
                    _cache[112] || (_cache[112] = createBaseVNode("h2", null, "作品队列", -1)),
                    createBaseVNode("span", null, toDisplayString(visibleWorks.value.length) + " WORKS", 1)
                  ]),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(visibleWorks.value, (w) => {
                    return openBlock(), createElementBlock("button", {
                      key: w.id,
                      class: normalizeClass({ selected: selectedWorkId.value === w.id }),
                      onClick: ($event) => selectedWorkId.value = w.id,
                      disabled: busy.value
                    }, [
                      createBaseVNode("span", null, toDisplayString(w.status), 1),
                      createBaseVNode("strong", null, toDisplayString(w.title), 1),
                      createBaseVNode("small", null, toDisplayString(w.name) + " / " + toDisplayString(contestName(w.contestId)), 1)
                    ], 10, _hoisted_67);
                  }), 128)),
                  !visibleWorks.value.length ? (openBlock(), createElementBlock("div", _hoisted_68, "暂无作品，学生端提交后将显示在此。")) : createCommentVNode("", true)
                ]),
                selectedWork.value ? (openBlock(), createElementBlock("article", _hoisted_69, [
                  _cache[117] || (_cache[117] = createBaseVNode("p", { class: "eyebrow" }, "EVALUATION REPORT / DEMO", -1)),
                  createBaseVNode("h2", null, toDisplayString(selectedWork.value.title), 1),
                  createBaseVNode("p", _hoisted_70, toDisplayString(selectedWork.value.summary), 1),
                  createBaseVNode("div", _hoisted_71, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(selectedWork.value.files, (f) => {
                      return openBlock(), createElementBlock("span", {
                        key: f.name
                      }, toDisplayString(f.name), 1);
                    }), 128))
                  ]),
                  _cache[118] || (_cache[118] = createBaseVNode("p", { class: "inline-warning" }, "演示模式使用固定评分与示例评语，不解析上传文件。真实评价需要接入 FastAPI 和大模型服务。", -1)),
                  busy.value ? (openBlock(), createBlock(unref(ElProgress), {
                    key: 0,
                    percentage: runProgress.value,
                    color: "#f40c3f"
                  }, null, 8, ["percentage"])) : createCommentVNode("", true),
                  createBaseVNode("button", {
                    class: "primary-btn",
                    disabled: busy.value || !!selectedWork.value.aiScores,
                    onClick: runEvaluation
                  }, [
                    createTextVNode(toDisplayString(selectedWork.value.aiScores ? "示例评价已生成" : "生成示例评价") + " ", 1),
                    createVNode(unref(Sparkles), { size: 16 })
                  ], 8, _hoisted_72),
                  selectedWork.value.aiScores ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createBaseVNode("div", _hoisted_73, [
                      createBaseVNode("span", null, toDisplayString(unref(score)(selectedWork.value.finalScores || selectedWork.value.aiScores, selectedWork.value.weights).toFixed(1)), 1),
                      createBaseVNode("div", null, [
                        _cache[113] || (_cache[113] = createTextVNode("综合得分 / 100", -1)),
                        _cache[114] || (_cache[114] = createBaseVNode("br", null, null, -1)),
                        createBaseVNode("small", null, toDisplayString(selectedWork.value.status), 1)
                      ])
                    ]),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dimensions), (d, i) => {
                      return openBlock(), createElementBlock("div", {
                        class: "dimension-score",
                        key: d
                      }, [
                        createBaseVNode("label", null, [
                          createTextVNode(toDisplayString(d) + " ", 1),
                          createBaseVNode("small", null, "权重 " + toDisplayString(selectedWork.value.weights[i]) + "% · AI 示例 " + toDisplayString(selectedWork.value.aiScores[i]), 1)
                        ]),
                        createBaseVNode("div", _hoisted_74, [
                          createBaseVNode("i", {
                            style: normalizeStyle({ width: reviewScores.value[i] + "%" })
                          }, null, 4)
                        ]),
                        createVNode(unref(ElInputNumber), {
                          modelValue: reviewScores.value[i],
                          "onUpdate:modelValue": ($event) => reviewScores.value[i] = $event,
                          min: 0,
                          max: 100,
                          precision: 0,
                          size: "small",
                          "aria-label": d + "复核分数"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "aria-label"])
                      ]);
                    }), 128)),
                    createBaseVNode("label", null, [
                      _cache[115] || (_cache[115] = createTextVNode("教师复核意见", -1)),
                      withDirectives(createBaseVNode("textarea", {
                        "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => reviewComments.value = $event),
                        rows: "4"
                      }, null, 512), [
                        [vModelText, reviewComments.value]
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_75, [
                      createBaseVNode("button", {
                        class: "primary-btn",
                        onClick: saveReview
                      }, "保存教师复核"),
                      createBaseVNode("button", {
                        class: "outline-btn",
                        disabled: selectedWork.value.status !== "已复核",
                        onClick: publish
                      }, toDisplayString(selectedWork.value.published ? "已发布" : "发布成绩"), 9, _hoisted_76),
                      createBaseVNode("button", {
                        class: "outline-btn",
                        onClick: _cache[32] || (_cache[32] = ($event) => exportReport(selectedWork.value))
                      }, "导出报告")
                    ])
                  ], 64)) : createCommentVNode("", true),
                  selectedWork.value.history.length ? (openBlock(), createElementBlock("div", _hoisted_77, [
                    _cache[116] || (_cache[116] = createBaseVNode("h3", null, "评价与复核记录", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(selectedWork.value.history, (h2, i) => {
                      return openBlock(), createElementBlock("p", { key: i }, [
                        createBaseVNode("small", null, toDisplayString(time(h2.at)) + " / " + toDisplayString(h2.action), 1),
                        createTextVNode(toDisplayString(h2.note), 1)
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ])) : (openBlock(), createElementBlock("div", _hoisted_78, [
                  createVNode(unref(Sparkles), { size: 42 }),
                  _cache[119] || (_cache[119] = createBaseVNode("h2", null, "选择一份作品，开始评价。", -1)),
                  _cache[120] || (_cache[120] = createBaseVNode("p", null, "创新性 · 技术实现 · 完成度 · 应用价值", -1))
                ]))
              ]))
            ])) : createCommentVNode("", true),
            active.value === "results" ? (openBlock(), createElementBlock("section", _hoisted_79, [
              _cache[123] || (_cache[123] = createBaseVNode("div", { class: "section-heading" }, [
                createBaseVNode("div", null, [
                  createBaseVNode("p", { class: "eyebrow" }, "MY ACHIEVEMENTS"),
                  createBaseVNode("h1", null, "我的作品与评价")
                ])
              ], -1)),
              !visibleWorks.value.length ? (openBlock(), createElementBlock("div", _hoisted_80, [
                createVNode(unref(Trophy), { size: 35 }),
                _cache[121] || (_cache[121] = createBaseVNode("p", null, "还没有提交作品。报名审核通过后即可提交。", -1)),
                createBaseVNode("button", {
                  class: "primary-btn",
                  onClick: _cache[33] || (_cache[33] = ($event) => navigate("evaluate"))
                }, "提交作品 ↗")
              ])) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(visibleWorks.value, (w) => {
                return openBlock(), createElementBlock("article", {
                  key: w.id,
                  class: "result-card panel"
                }, [
                  createBaseVNode("span", {
                    class: normalizeClass(["status", statusClass(w.status)])
                  }, toDisplayString(w.status), 3),
                  createBaseVNode("h2", null, toDisplayString(w.title), 1),
                  createBaseVNode("p", null, toDisplayString(contestName(w.contestId)), 1),
                  w.published ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("div", _hoisted_81, [
                      createBaseVNode("span", null, toDisplayString(unref(score)(w.finalScores, w.weights).toFixed(1)), 1),
                      _cache[122] || (_cache[122] = createBaseVNode("small", null, "综合得分 / 100", -1))
                    ]),
                    createBaseVNode("div", _hoisted_82, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dimensions), (d, i) => {
                        return openBlock(), createElementBlock("div", { key: d }, [
                          createBaseVNode("span", null, toDisplayString(d), 1),
                          createBaseVNode("strong", null, toDisplayString(w.finalScores[i]), 1)
                        ]);
                      }), 128))
                    ]),
                    createBaseVNode("p", null, toDisplayString(w.comments), 1),
                    createBaseVNode("button", {
                      class: "outline-btn",
                      onClick: ($event) => exportReport(w)
                    }, "导出评价报告", 8, _hoisted_83)
                  ], 64)) : (openBlock(), createElementBlock("p", _hoisted_84, "教师完成复核并发布后，评价分数与评语将在这里展示。"))
                ]);
              }), 128))
            ])) : createCommentVNode("", true),
            active.value === "students" && role.value === "admin" ? (openBlock(), createElementBlock("section", _hoisted_85, [
              createBaseVNode("div", _hoisted_86, [
                _cache[124] || (_cache[124] = createBaseVNode("div", null, [
                  createBaseVNode("p", { class: "eyebrow" }, "PARTICIPANTS / LOCAL DATA"),
                  createBaseVNode("h1", null, "参赛学生")
                ], -1)),
                createBaseVNode("button", {
                  class: "outline-btn",
                  onClick: _cache[34] || (_cache[34] = ($event) => unref(downloadCsv)("竞序_参赛学生.csv", ["姓名", "学号", "报名数", "通过数"], participants.value.map((p) => [p.name, p.id, p.count, p.passed])))
                }, "导出学生名单")
              ]),
              createBaseVNode("label", _hoisted_87, [
                createVNode(unref(Search), { size: 16 }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[35] || (_cache[35] = ($event) => query.value = $event),
                  placeholder: "搜索姓名或学号",
                  "aria-label": "搜索学生"
                }, null, 512), [
                  [vModelText, query.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_88, [
                createBaseVNode("table", null, [
                  _cache[125] || (_cache[125] = createBaseVNode("thead", null, [
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", null, "姓名"),
                      createBaseVNode("th", null, "学号"),
                      createBaseVNode("th", null, "报名竞赛数"),
                      createBaseVNode("th", null, "审核通过数")
                    ])
                  ], -1)),
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(participants.value, (p) => {
                      return openBlock(), createElementBlock("tr", {
                        key: p.id
                      }, [
                        createBaseVNode("td", null, toDisplayString(p.name), 1),
                        createBaseVNode("td", null, toDisplayString(p.id), 1),
                        createBaseVNode("td", null, toDisplayString(p.count), 1),
                        createBaseVNode("td", null, toDisplayString(p.passed), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                !participants.value.length ? (openBlock(), createElementBlock("div", _hoisted_89, "未找到匹配的学生。")) : createCommentVNode("", true)
              ])
            ])) : createCommentVNode("", true),
            _cache[126] || (_cache[126] = createBaseVNode("footer", { class: "footer-sign" }, [
              createBaseVNode("span", null, "WU ZHILIANG / GRADUATION PROJECT 2026"),
              createBaseVNode("span", null, [
                createTextVNode("COMPETE · LOCAL DEMO "),
                createBaseVNode("b", null, "↗")
              ])
            ], -1))
          ])
        ]),
        createVNode(unref(ElDialog), {
          modelValue: reviewOpen.value,
          "onUpdate:modelValue": _cache[39] || (_cache[39] = ($event) => reviewOpen.value = $event),
          title: role.value === "admin" ? "材料检验与人工复核" : "报名详情与进度",
          width: "760px",
          class: "review-dialog",
          "close-on-click-modal": false,
          "before-close": (done) => {
            if (!busy.value) done();
          }
        }, {
          default: withCtx(() => [
            detail.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", _hoisted_90, [
                createBaseVNode("b", null, toDisplayString(detail.value.name) + " / " + toDisplayString(detail.value.studentId), 1),
                createBaseVNode("span", null, toDisplayString(contestName(detail.value.contestId)) + " · " + toDisplayString(detail.value.status), 1)
              ]),
              createBaseVNode("div", _hoisted_91, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(detail.value.files, (f) => {
                  return openBlock(), createElementBlock("span", {
                    key: f.name
                  }, toDisplayString(f.name), 1);
                }), 128))
              ]),
              role.value === "admin" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                _cache[128] || (_cache[128] = createBaseVNode("p", { class: "inline-warning" }, "此原型仅载入示例 OCR 字段，不读取图片或 PDF 原文。可编辑字段，验证通过、可疑、不通过的前端流程。", -1)),
                busy.value ? (openBlock(), createBlock(unref(ElProgress), {
                  key: 0,
                  percentage: runProgress.value,
                  color: "#f40c3f"
                }, null, 8, ["percentage"])) : createCommentVNode("", true),
                createBaseVNode("button", {
                  class: "primary-btn",
                  disabled: busy.value,
                  onClick: startScan
                }, toDisplayString(busy.value ? "正在演示识别流程…" : "载入示例识别字段"), 9, _hoisted_92),
                scanReady.value && !busy.value ? (openBlock(), createElementBlock("div", _hoisted_93, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(fieldLabels, (label, key2) => {
                    return createBaseVNode("label", { key: key2 }, [
                      createTextVNode(toDisplayString(label), 1),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": ($event) => ocr[key2] = $event,
                        "aria-label": "识别" + label
                      }, null, 8, _hoisted_94), [
                        [vModelText, ocr[key2]]
                      ]),
                      createBaseVNode("small", null, "申报值：" + toDisplayString(detail.value[key2] || "未填写"), 1)
                    ]);
                  }), 64)),
                  createBaseVNode("button", {
                    class: "outline-btn",
                    onClick: compare
                  }, "执行一致性比对")
                ])) : createCommentVNode("", true),
                detail.value.checks ? (openBlock(), createElementBlock("div", _hoisted_95, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(detail.value.checks, (c) => {
                    return openBlock(), createElementBlock("div", {
                      key: c.key,
                      class: normalizeClass(c.match ? "check-pass" : "check-fail")
                    }, [
                      createBaseVNode("span", null, toDisplayString(fieldLabels[c.key]), 1),
                      createBaseVNode("span", null, toDisplayString(c.expected) + " → " + toDisplayString(c.actual || "缺失"), 1),
                      createBaseVNode("b", null, toDisplayString(c.match ? "一致" : "需核对"), 1)
                    ], 2);
                  }), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("label", _hoisted_96, [
                  _cache[127] || (_cache[127] = createTextVNode("人工复核意见（必填）", -1)),
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": _cache[36] || (_cache[36] = ($event) => reviewNote.value = $event),
                    rows: "3",
                    placeholder: "记录判断依据或需要补充的材料"
                  }, null, 512), [
                    [vModelText, reviewNote.value]
                  ])
                ]),
                createBaseVNode("div", _hoisted_97, [
                  createBaseVNode("button", {
                    class: "primary-btn",
                    disabled: busy.value,
                    onClick: _cache[37] || (_cache[37] = ($event) => resolveReview("已通过"))
                  }, "审核通过", 8, _hoisted_98),
                  createBaseVNode("button", {
                    class: "outline-btn",
                    disabled: busy.value,
                    onClick: _cache[38] || (_cache[38] = ($event) => resolveReview("不通过"))
                  }, "不通过 / 需重新报名", 8, _hoisted_99)
                ])
              ], 64)) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_100, [
                _cache[130] || (_cache[130] = createBaseVNode("h3", null, "处理记录", -1)),
                createBaseVNode("p", null, [
                  createBaseVNode("small", null, toDisplayString(time(detail.value.submittedAt)) + " / 报名提交", 1),
                  _cache[129] || (_cache[129] = createTextVNode("材料已进入核验队列", -1))
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(detail.value.history, (h2, i) => {
                  return openBlock(), createElementBlock("p", { key: i }, [
                    createBaseVNode("small", null, toDisplayString(time(h2.at)) + " / " + toDisplayString(h2.action), 1),
                    createTextVNode(toDisplayString(h2.note), 1)
                  ]);
                }), 128))
              ])
            ], 64)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["modelValue", "title", "before-close"]),
        createVNode(unref(ElDialog), {
          modelValue: settingsOpen.value,
          "onUpdate:modelValue": _cache[40] || (_cache[40] = ($event) => settingsOpen.value = $event),
          title: "评价规则设置",
          width: "540px"
        }, {
          default: withCtx(() => [
            _cache[132] || (_cache[132] = createBaseVNode("p", null, "各维度按 0–100 分评分；权重合计须为 100%。", -1)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dimensions), (d, i) => {
              return openBlock(), createElementBlock("div", {
                class: "weight-row",
                key: d
              }, [
                createBaseVNode("span", null, toDisplayString(d), 1),
                createVNode(unref(ElInputNumber), {
                  modelValue: settingsWeights.value[i],
                  "onUpdate:modelValue": ($event) => settingsWeights.value[i] = $event,
                  min: 0,
                  max: 100,
                  precision: 0,
                  "aria-label": d + "权重"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "aria-label"]),
                _cache[131] || (_cache[131] = createTextVNode(" %", -1))
              ]);
            }), 128)),
            createBaseVNode("p", null, "合计：" + toDisplayString(settingsWeights.value.reduce((s, x) => s + (x || 0), 0)) + "%", 1),
            createBaseVNode("div", { class: "button-row" }, [
              createBaseVNode("button", {
                class: "primary-btn",
                onClick: saveSettings
              }, "保存规则"),
              createBaseVNode("button", {
                class: "outline-btn",
                onClick: reset
              }, "重置演示数据")
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(unref(ElDialog), {
          modelValue: competitionModal.value,
          "onUpdate:modelValue": _cache[47] || (_cache[47] = ($event) => competitionModal.value = $event),
          title: editingId.value ? "编辑竞赛" : "发布竞赛",
          width: "600px"
        }, {
          default: withCtx(() => [
            createBaseVNode("form", {
              class: "dialog-form",
              onSubmit: withModifiers(saveCompetition, ["prevent"])
            }, [
              createBaseVNode("label", null, [
                _cache[133] || (_cache[133] = createTextVNode("竞赛名称", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[41] || (_cache[41] = ($event) => competition.name = $event),
                  required: "",
                  maxlength: "100"
                }, null, 512), [
                  [vModelText, competition.name]
                ])
              ]),
              createBaseVNode("div", _hoisted_101, [
                createBaseVNode("label", null, [
                  _cache[134] || (_cache[134] = createTextVNode("学科分类", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[42] || (_cache[42] = ($event) => competition.category = $event),
                    required: ""
                  }, null, 512), [
                    [vModelText, competition.category]
                  ])
                ]),
                createBaseVNode("label", null, [
                  _cache[135] || (_cache[135] = createTextVNode("报名截止", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[43] || (_cache[43] = ($event) => competition.deadline = $event),
                    type: "date",
                    required: ""
                  }, null, 512), [
                    [vModelText, competition.deadline]
                  ])
                ])
              ]),
              createBaseVNode("label", null, [
                _cache[137] || (_cache[137] = createTextVNode("当前阶段", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[44] || (_cache[44] = ($event) => competition.phase = $event)
                }, [..._cache[136] || (_cache[136] = [
                  createBaseVNode("option", null, "即将开始", -1),
                  createBaseVNode("option", null, "报名中", -1),
                  createBaseVNode("option", null, "评审中", -1),
                  createBaseVNode("option", null, "已结束", -1)
                ])], 512), [
                  [vModelSelect, competition.phase]
                ])
              ]),
              createBaseVNode("label", null, [
                _cache[138] || (_cache[138] = createTextVNode("竞赛说明", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[45] || (_cache[45] = ($event) => competition.description = $event),
                  rows: "3",
                  required: ""
                }, null, 512), [
                  [vModelText, competition.description]
                ])
              ]),
              createBaseVNode("label", null, [
                _cache[139] || (_cache[139] = createTextVNode("材料与报名要求", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[46] || (_cache[46] = ($event) => competition.requirements = $event),
                  rows: "2"
                }, null, 512), [
                  [vModelText, competition.requirements]
                ])
              ]),
              _cache[140] || (_cache[140] = createBaseVNode("button", { class: "primary-btn" }, "保存竞赛配置", -1))
            ], 32)
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        createVNode(unref(ElDialog), {
          modelValue: notificationOpen.value,
          "onUpdate:modelValue": _cache[48] || (_cache[48] = ($event) => notificationOpen.value = $event),
          title: "待办通知",
          width: "480px"
        }, {
          default: withCtx(() => [
            role.value === "admin" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(notifications.value, (n) => {
              return openBlock(), createElementBlock("button", {
                class: "notification-card",
                key: n.title,
                onClick: ($event) => {
                  notificationOpen.value = false;
                  navigate(n.target);
                }
              }, [
                createBaseVNode("b", null, toDisplayString(n.title) + " ↗", 1),
                createBaseVNode("span", null, toDisplayString(n.body), 1)
              ], 8, _hoisted_102);
            }), 128)) : (openBlock(), createElementBlock("p", _hoisted_103, "你的报名与作品进度可在“我的结果”中查看。"))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 2);
    };
  }
};
export {
  _sfc_main as default
};
