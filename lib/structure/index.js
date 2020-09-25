'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var structure = require('@sanity/structure');
var React = require('react');
var React__default = _interopDefault(React);
var config = _interopDefault(require('config:intl-input'));
var schemas = _interopDefault(require('part:@sanity/base/schema'));
var client = _interopDefault(require('part:@sanity/base/client'));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "._1LQXM8I-NPjX7653Ecj41o {\n  margin: 0;\n  padding: 1rem;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 2.5em;\n  color: #000;\n  animation: _29gaD5YBPJg_GoviI1jH0H 2s ease-in-out infinite; }\n\n@keyframes _29gaD5YBPJg_GoviI1jH0H {\n  0% {\n    opacity: .2; }\n  30%, 60% {\n    opacity: 1; }\n  100% {\n    opacity: .2; } }\n";
var styles = {"loading":"_1LQXM8I-NPjX7653Ecj41o","loading--pulse":"_29gaD5YBPJg_GoviI1jH0H","loadingPulse":"_29gaD5YBPJg_GoviI1jH0H"};
styleInject(css_248z);

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

var LanguageCultures = [{
  value: 'af',
  title: 'Afrikaans'
}, {
  value: 'af-ZA',
  title: 'Afrikaans (South Africa)'
}, {
  value: 'ar',
  title: 'Arabic'
}, {
  value: 'ar-AE',
  title: 'Arabic (U.A.E.)'
}, {
  value: 'ar-BH',
  title: 'Arabic (Bahrain)'
}, {
  value: 'ar-DZ',
  title: 'Arabic (Algeria)'
}, {
  value: 'ar-EG',
  title: 'Arabic (Egypt)'
}, {
  value: 'ar-IQ',
  title: 'Arabic (Iraq)'
}, {
  value: 'ar-JO',
  title: 'Arabic (Jordan)'
}, {
  value: 'ar-KW',
  title: 'Arabic (Kuwait)'
}, {
  value: 'ar-LB',
  title: 'Arabic (Lebanon)'
}, {
  value: 'ar-LY',
  title: 'Arabic (Libya)'
}, {
  value: 'ar-MA',
  title: 'Arabic (Morocco)'
}, {
  value: 'ar-OM',
  title: 'Arabic (Oman)'
}, {
  value: 'ar-QA',
  title: 'Arabic (Qatar)'
}, {
  value: 'ar-SA',
  title: 'Arabic (Saudi Arabia)'
}, {
  value: 'ar-SY',
  title: 'Arabic (Syria)'
}, {
  value: 'ar-TN',
  title: 'Arabic (Tunisia)'
}, {
  value: 'ar-YE',
  title: 'Arabic (Yemen)'
}, {
  value: 'az',
  title: 'Azeri'
}, {
  value: 'az-Cyrl-AZ',
  title: 'Azeri (Cyrillic, Azerbaijan)'
}, {
  value: 'az-Latn-AZ',
  title: 'Azeri (Latin, Azerbaijan)'
}, {
  value: 'be',
  title: 'Belarusian'
}, {
  value: 'be-BY',
  title: 'Belarusian (Belarus)'
}, {
  value: 'bg',
  title: 'Bulgarian'
}, {
  value: 'bg-BG',
  title: 'Bulgarian (Bulgaria)'
}, {
  value: 'bs-Latn-BA',
  title: 'Bosnian (Bosnia and Herzegovina)'
}, {
  value: 'ca',
  title: 'Catalan'
}, {
  value: 'ca-ES',
  title: 'Catalan (Catalan)'
}, {
  value: 'cs',
  title: 'Czech'
}, {
  value: 'cs-CZ',
  title: 'Czech (Czech Republic)'
}, {
  value: 'cy-GB',
  title: 'Welsh (United Kingdom)'
}, {
  value: 'da',
  title: 'Danish'
}, {
  value: 'da-DK',
  title: 'Danish (Denmark)'
}, {
  value: 'de',
  title: 'German'
}, {
  value: 'de-AT',
  title: 'German (Austria)'
}, {
  value: 'de-DE',
  title: 'German (Germany)'
}, {
  value: 'de-CH',
  title: 'German (Switzerland)'
}, {
  value: 'de-LI',
  title: 'German (Liechtenstein)'
}, {
  value: 'de-LU',
  title: 'German (Luxembourg)'
}, {
  value: 'dv',
  title: 'Divehi'
}, {
  value: 'dv-MV',
  title: 'Divehi (Maldives)'
}, {
  value: 'el',
  title: 'Greek'
}, {
  value: 'el-GR',
  title: 'Greek (Greece)'
}, {
  value: 'en',
  title: 'English'
}, {
  value: 'en-029',
  title: 'English (Caribbean)'
}, {
  value: 'en-AU',
  title: 'English (Australia)'
}, {
  value: 'en-BZ',
  title: 'English (Belize)'
}, {
  value: 'en-CA',
  title: 'English (Canada)'
}, {
  value: 'en-GB',
  title: 'English (United Kingdom)'
}, {
  value: 'en-IE',
  title: 'English (Ireland)'
}, {
  value: 'en-JM',
  title: 'English (Jamaica)'
}, {
  value: 'en-NZ',
  title: 'English (New Zealand)'
}, {
  value: 'en-PH',
  title: 'English (Republic of the Philippines)'
}, {
  value: 'en-TT',
  title: 'English (Trinidad and Tobago)'
}, {
  value: 'en-US',
  title: 'English (United States)'
}, {
  value: 'en-ZA',
  title: 'English (South Africa)'
}, {
  value: 'en-ZW',
  title: 'English (Zimbabwe)'
}, {
  value: 'es',
  title: 'Spanish'
}, {
  value: 'es-AR',
  title: 'Spanish (Argentina)'
}, {
  value: 'es-BO',
  title: 'Spanish (Bolivia)'
}, {
  value: 'es-CL',
  title: 'Spanish (Chile)'
}, {
  value: 'es-CO',
  title: 'Spanish (Colombia)'
}, {
  value: 'es-CR',
  title: 'Spanish (Costa Rica)'
}, {
  value: 'es-DO',
  title: 'Spanish (Dominican Republic)'
}, {
  value: 'es-EC',
  title: 'Spanish (Ecuador)'
}, {
  value: 'es-ES',
  title: 'Spanish (Spain)'
}, {
  value: 'es-GT',
  title: 'Spanish (Guatemala)'
}, {
  value: 'es-HN',
  title: 'Spanish (Honduras)'
}, {
  value: 'es-MX',
  title: 'Spanish (Mexico)'
}, {
  value: 'es-NI',
  title: 'Spanish (Nicaragua)'
}, {
  value: 'es-PA',
  title: 'Spanish (Panama)'
}, {
  value: 'es-PE',
  title: 'Spanish (Peru)'
}, {
  value: 'es-PR',
  title: 'Spanish (Puerto Rico)'
}, {
  value: 'es-PY',
  title: 'Spanish (Paraguay)'
}, {
  value: 'es-SV',
  title: 'Spanish (El Salvador)'
}, {
  value: 'es-UY',
  title: 'Spanish (Uruguay)'
}, {
  value: 'es-VE',
  title: 'Spanish (Venezuela)'
}, {
  value: 'et',
  title: 'Estonian'
}, {
  value: 'et-EE',
  title: 'Estonian (Estonia)'
}, {
  value: 'eu',
  title: 'Basque'
}, {
  value: 'eu-ES',
  title: 'Basque (Basque)'
}, {
  value: 'fa',
  title: 'Persian'
}, {
  value: 'fa-IR',
  title: 'Persian (Iran)'
}, {
  value: 'fi',
  title: 'Finnish'
}, {
  value: 'fi-FI',
  title: 'Finnish (Finland)'
}, {
  value: 'fo',
  title: 'Faroese'
}, {
  value: 'fo-FO',
  title: 'Faroese (Faroe Islands)'
}, {
  value: 'fr',
  title: 'French'
}, {
  value: 'fr-BE',
  title: 'French (Belgium)'
}, {
  value: 'fr-CA',
  title: 'French (Canada)'
}, {
  value: 'fr-FR',
  title: 'French (France)'
}, {
  value: 'fr-CH',
  title: 'French (Switzerland)'
}, {
  value: 'fr-LU',
  title: 'French (Luxembourg)'
}, {
  value: 'fr-MC',
  title: 'French (Principality of Monaco)'
}, {
  value: 'gl',
  title: 'Galician'
}, {
  value: 'gl-ES',
  title: 'Galician (Galician)'
}, {
  value: 'gu',
  title: 'Gujarati'
}, {
  value: 'gu-IN',
  title: 'Gujarati (India)'
}, {
  value: 'he',
  title: 'Hebrew'
}, {
  value: 'he-IL',
  title: 'Hebrew (Israel)'
}, {
  value: 'hi',
  title: 'Hindi'
}, {
  value: 'hi-IN',
  title: 'Hindi (India)'
}, {
  value: 'hr',
  title: 'Croatian'
}, {
  value: 'hr-BA',
  title: 'Croatian (Bosnia and Herzegovina)'
}, {
  value: 'hr-HR',
  title: 'Croatian (Croatia)'
}, {
  value: 'hu',
  title: 'Hungarian'
}, {
  value: 'hu-HU',
  title: 'Hungarian (Hungary)'
}, {
  value: 'hy',
  title: 'Armenian'
}, {
  value: 'hy-AM',
  title: 'Armenian (Armenia)'
}, {
  value: 'id',
  title: 'Indonesian'
}, {
  value: 'id-ID',
  title: 'Indonesian (Indonesia)'
}, {
  value: 'is',
  title: 'Icelandic'
}, {
  value: 'is-IS',
  title: 'Icelandic (Iceland)'
}, {
  value: 'it',
  title: 'Italian'
}, {
  value: 'it-CH',
  title: 'Italian (Switzerland)'
}, {
  value: 'it-IT',
  title: 'Italian (Italy)'
}, {
  value: 'ja',
  title: 'Japanese'
}, {
  value: 'ja-JP',
  title: 'Japanese (Japan)'
}, {
  value: 'ka',
  title: 'Georgian'
}, {
  value: 'ka-GE',
  title: 'Georgian (Georgia)'
}, {
  value: 'kk',
  title: 'Kazakh'
}, {
  value: 'kk-KZ',
  title: 'Kazakh (Kazakhstan)'
}, {
  value: 'kn',
  title: 'Kannada'
}, {
  value: 'kn-IN',
  title: 'Kannada (India)'
}, {
  value: 'ko',
  title: 'Korean'
}, {
  value: 'kok',
  title: 'Konkani'
}, {
  value: 'kok-IN',
  title: 'Konkani (India)'
}, {
  value: 'ko-KR',
  title: 'Korean (Korea)'
}, {
  value: 'ky',
  title: 'Kyrgyz'
}, {
  value: 'ky-KG',
  title: 'Kyrgyz (Kyrgyzstan)'
}, {
  value: 'lt',
  title: 'Lithuanian'
}, {
  value: 'lt-LT',
  title: 'Lithuanian (Lithuania)'
}, {
  value: 'lv',
  title: 'Latvian'
}, {
  value: 'lv-LV',
  title: 'Latvian (Latvia)'
}, {
  value: 'mi-NZ',
  title: 'Maori (New Zealand)'
}, {
  value: 'mk',
  title: 'Macedonian'
}, {
  value: 'mk-MK',
  title: 'Macedonian (Former Yugoslav Republic of Macedonia)'
}, {
  value: 'mn',
  title: 'Mongolian'
}, {
  value: 'mn-MN',
  title: 'Mongolian (Cyrillic, Mongolia)'
}, {
  value: 'mr',
  title: 'Marathi'
}, {
  value: 'mr-IN',
  title: 'Marathi (India)'
}, {
  value: 'ms',
  title: 'Malay'
}, {
  value: 'ms-BN',
  title: 'Malay (Brunei Darussalam)'
}, {
  value: 'ms-MY',
  title: 'Malay (Malaysia)'
}, {
  value: 'mt-MT',
  title: 'Maltese (Malta)'
}, {
  value: 'nb-NO',
  title: 'Norwegian, Bokmal (Norway)'
}, {
  value: 'nl',
  title: 'Dutch'
}, {
  value: 'nl-BE',
  title: 'Dutch (Belgium)'
}, {
  value: 'nl-NL',
  title: 'Dutch (Netherlands)'
}, {
  value: 'nn-NO',
  title: 'Norwegian, Nynorsk (Norway)'
}, {
  value: 'no',
  title: 'Norwegian'
}, {
  value: 'ns-ZA',
  title: 'Northern Sotho (South Africa)'
}, {
  value: 'pa',
  title: 'Punjabi'
}, {
  value: 'pa-IN',
  title: 'Punjabi (India)'
}, {
  value: 'pl',
  title: 'Polish'
}, {
  value: 'pl-PL',
  title: 'Polish (Poland)'
}, {
  value: 'pt',
  title: 'Portuguese'
}, {
  value: 'pt-BR',
  title: 'Portuguese (Brazil)'
}, {
  value: 'pt-PT',
  title: 'Portuguese (Portugal)'
}, {
  value: 'quz-BO',
  title: 'Quechua (Bolivia)'
}, {
  value: 'quz-EC',
  title: 'Quechua (Ecuador)'
}, {
  value: 'quz-PE',
  title: 'Quechua (Peru)'
}, {
  value: 'ro',
  title: 'Romanian'
}, {
  value: 'ro-RO',
  title: 'Romanian (Romania)'
}, {
  value: 'ru',
  title: 'Russian'
}, {
  value: 'ru-RU',
  title: 'Russian (Russia)'
}, {
  value: 'sa',
  title: 'Sanskrit'
}, {
  value: 'sa-IN',
  title: 'Sanskrit (India)'
}, {
  value: 'se-FI',
  title: 'Sami (Northern) (Finland)'
}, {
  value: 'se-NO',
  title: 'Sami (Northern) (Norway)'
}, {
  value: 'se-SE',
  title: 'Sami (Northern) (Sweden)'
}, {
  value: 'sk',
  title: 'Slovak'
}, {
  value: 'sk-SK',
  title: 'Slovak (Slovakia)'
}, {
  value: 'sl',
  title: 'Slovenian'
}, {
  value: 'sl-SI',
  title: 'Slovenian (Slovenia)'
}, {
  value: 'sma-NO',
  title: 'Sami (Southern) (Norway)'
}, {
  value: 'sma-SE',
  title: 'Sami (Southern) (Sweden)'
}, {
  value: 'smj-NO',
  title: 'Sami (Lule) (Norway)'
}, {
  value: 'smj-SE',
  title: 'Sami (Lule) (Sweden)'
}, {
  value: 'smn-FI',
  title: 'Sami (Inari) (Finland)'
}, {
  value: 'sms-FI',
  title: 'Sami (Skolt) (Finland)'
}, {
  value: 'sq',
  title: 'Albanian'
}, {
  value: 'sq-AL',
  title: 'Albanian (Albania)'
}, {
  value: 'sr',
  title: 'Serbian'
}, {
  value: 'sr-Cyrl-BA',
  title: 'Serbian (Cyrillic) (Bosnia and Herzegovina)'
}, {
  value: 'sr-Cyrl-CS',
  title: 'Serbian (Cyrillic, Serbia)'
}, {
  value: 'sr-Latn-BA',
  title: 'Serbian (Latin) (Bosnia and Herzegovina)'
}, {
  value: 'sr-Latn-CS',
  title: 'Serbian (Latin, Serbia)'
}, {
  value: 'sv',
  title: 'Swedish'
}, {
  value: 'sv-FI',
  title: 'Swedish (Finland)'
}, {
  value: 'sv-SE',
  title: 'Swedish (Sweden)'
}, {
  value: 'sw',
  title: 'Kiswahili'
}, {
  value: 'sw-KE',
  title: 'Kiswahili (Kenya)'
}, {
  value: 'syr',
  title: 'Syriac'
}, {
  value: 'syr-SY',
  title: 'Syriac (Syria)'
}, {
  value: 'ta',
  title: 'Tamil'
}, {
  value: 'ta-IN',
  title: 'Tamil (India)'
}, {
  value: 'te',
  title: 'Telugu'
}, {
  value: 'te-IN',
  title: 'Telugu (India)'
}, {
  value: 'th',
  title: 'Thai'
}, {
  value: 'th-TH',
  title: 'Thai (Thailand)'
}, {
  value: 'tn-ZA',
  title: 'Tswana (South Africa)'
}, {
  value: 'tr',
  title: 'Turkish'
}, {
  value: 'tr-TR',
  title: 'Turkish (Turkey)'
}, {
  value: 'tt',
  title: 'Tatar'
}, {
  value: 'tt-RU',
  title: 'Tatar (Russia)'
}, {
  value: 'uk',
  title: 'Ukrainian'
}, {
  value: 'uk-UA',
  title: 'Ukrainian (Ukraine)'
}, {
  value: 'ur',
  title: 'Urdu'
}, {
  value: 'ur-PK',
  title: 'Urdu (Islamic Republic of Pakistan)'
}, {
  value: 'uz',
  title: 'Uzbek'
}, {
  value: 'uz-Cyrl-UZ',
  title: 'Uzbek (Cyrillic, Uzbekistan)'
}, {
  value: 'uz-Latn-UZ',
  title: 'Uzbek (Latin, Uzbekistan)'
}, {
  value: 'vi',
  title: 'Vietnamese'
}, {
  value: 'vi-VN',
  title: 'Vietnamese (Vietnam)'
}, {
  value: 'xh-ZA',
  title: 'Xhosa (South Africa)'
}, {
  value: 'zh-CN',
  title: 'Chinese (People\'s Republic of China)'
}, {
  value: 'zh-HK',
  title: 'Chinese (Hong Kong S.A.R.)'
}, {
  value: 'zh-CHS',
  title: 'Chinese (Simplified)'
}, {
  value: 'zh-CHT',
  title: 'Chinese (Traditional)'
}, {
  value: 'zh-MO',
  title: 'Chinese (Macao S.A.R.)'
}, {
  value: 'zh-SG',
  title: 'Chinese (Singapore)'
}, {
  value: 'zh-TW',
  title: 'Chinese (Taiwan)'
}, {
  value: 'zu-ZA',
  title: 'Zulu (South Africa)'
}];

var I18nPrefix = 'i18n';

var I18nDelimiter = '__i18n_';

var buildDocId = function buildDocId(id, lang) {
  return "".concat(I18nPrefix, "-").concat(id, "-").concat(lang || '*');
};

var normalizeLanguageList = function normalizeLanguageList(languages) {
  return languages.map(function (l) {
    if (typeof l === 'string') {
      var langCult = LanguageCultures.find(function (x) {
        return x.value === l;
      });
      if (langCult) return {
        title: langCult.title,
        name: l
      };
      return {
        title: l,
        name: l
      };
    }

    return l;
  });
};

var getBaseLanguage = function getBaseLanguage(langs, base) {
  if (base) return langs.find(function (l) {
    return l.name === base;
  }) || null;
  return langs.length > 0 ? langs[0] : null;
};

var getSanityClient = function getSanityClient() {
  return client;
};

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
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
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
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
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
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
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
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
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
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

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
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

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

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var lodash_get = get;

var getLanguagesFromOption = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(langs) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = normalizeLanguageList;
            _context2.next = 3;
            return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var r, value;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!Array.isArray(langs)) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", langs);

                    case 2:
                      _context.next = 4;
                      return getSanityClient().fetch(langs.query);

                    case 4:
                      r = _context.sent;
                      value = langs.value;

                      if (!(typeof value === 'string')) {
                        _context.next = 8;
                        break;
                      }

                      return _context.abrupt("return", r.map(function (l) {
                        return lodash_get(l, value);
                      }));

                    case 8:
                      return _context.abrupt("return", r.map(function (l) {
                        return {
                          name: lodash_get(l, value.name),
                          title: lodash_get(l, value.title)
                        };
                      }));

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();

          case 3:
            _context2.t1 = _context2.sent;
            return _context2.abrupt("return", (0, _context2.t0)(_context2.t1));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getLanguagesFromOption(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getLanguageFromId = function getLanguageFromId(id) {
  var rx = new RegExp("".concat(I18nPrefix, "\\-[^.]+\\-([^.]+)"));
  var match = id.match(rx);
  if (match && match.length === 2) return match[1]; // old version

  var split = id.split(I18nDelimiter);
  if (split.length > 1) return split[1];
  return null;
};

var getBaseIdFromId = function getBaseIdFromId(id) {
  var rx = new RegExp("".concat(I18nPrefix, "\\-([^.]+)\\-[^.]+"));
  var match = id.match(rx);
  if (match && match.length === 2) return match[1]; // old version

  var split = id.split(I18nDelimiter);
  if (split.length > 0) return split[0];
  return id;
};

var css_248z$1 = "._39ppsDGbO68Q8jhK4yHtS5 {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0;\n  padding: 0.5rem 1rem;\n  text-decoration: none; }\n  ._39ppsDGbO68Q8jhK4yHtS5:hover {\n    background-color: rgba(36, 163, 227, 0.15); }\n  ._39ppsDGbO68Q8jhK4yHtS5._1UmlsVHIcAJwrO37Xitb04 {\n    pointer-events: none;\n    opacity: 0.2; }\n  ._39ppsDGbO68Q8jhK4yHtS5._1hAMFOgLwd_kyafHjgQ7nx {\n    pointer-events: none;\n    background-color: #156dff; }\n    ._39ppsDGbO68Q8jhK4yHtS5._1hAMFOgLwd_kyafHjgQ7nx ._3TgpHrsrMTqPTN6sKY1X3f {\n      color: #ffffff; }\n\n._2gG0BIKfZvJIOmwnGKtWsS {\n  margin-right: 1rem;\n  width: 1.5rem;\n  height: 1.5rem; }\n  ._2gG0BIKfZvJIOmwnGKtWsS.kaR0Zcx_3eXj8kQRbZngK {\n    background-color: #000000;\n    height: 1.2rem;\n    opacity: 0.2; }\n\n._3TgpHrsrMTqPTN6sKY1X3f {\n  margin: 0;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 2.5em;\n  color: #000000; }\n\n.uQkcAKPJIZmIER_5BW50j,\n._14F8Bplctzxf4OIAbQMB-H {\n  margin: 0 0 0 auto;\n  font-size: 1em;\n  font-weight: 700;\n  line-height: 2.5em;\n  color: #ffbf48; }\n\n._14F8Bplctzxf4OIAbQMB-H {\n  color: #000000;\n  opacity: 0.2; }\n";
var styles$1 = {"entry":"_39ppsDGbO68Q8jhK4yHtS5","disabled":"_1UmlsVHIcAJwrO37Xitb04","selected":"_1hAMFOgLwd_kyafHjgQ7nx","title":"_3TgpHrsrMTqPTN6sKY1X3f","flag":"_2gG0BIKfZvJIOmwnGKtWsS","error":"kaR0Zcx_3eXj8kQRbZngK","missing":"uQkcAKPJIZmIER_5BW50j","draft":"_14F8Bplctzxf4OIAbQMB-H"};
styleInject(css_248z$1);

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var SanityFlag = function SanityFlag(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "18",
    viewBox: "0 0 24 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "17.4765",
    fill: "#EF4B3B"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.97137 6.73166C10.0443 6.33266 10.2399 5.99737 10.5345 5.7508C10.8909 5.45252 11.3801 5.29375 11.9447 5.29375C12.4718 5.29375 12.8927 5.42122 13.2141 5.64117C13.5013 5.83768 13.7007 6.10239 13.8253 6.39785H15.5028C15.3304 5.72932 14.9694 5.16196 14.4246 4.75043C13.8273 4.2993 12.9977 4.02684 11.928 4.02684C10.7211 4.02684 9.74739 4.45956 9.18146 5.14834C9.17596 5.48405 9.25996 5.81609 9.42619 6.11248C9.56143 6.35362 9.74731 6.56438 9.97137 6.73166Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.9402 9.18483L12.668 9.57183L12.6704 9.57245C13.5905 9.80841 14.2665 10.1284 14.712 10.5909C15.0595 10.9516 15.2565 11.3882 15.3286 11.9114C15.5295 11.5321 15.6321 11.1071 15.6237 10.6748L15.6236 10.6732V10.6716C15.6236 9.99222 15.3991 9.45382 14.9955 9.04148C14.5886 8.62587 13.9891 8.32769 13.2237 8.15454L13.2234 8.15447L11.4644 7.75272L11.4628 7.75232C10.6192 7.54144 9.96596 7.23134 9.52272 6.78901C9.18468 6.45166 8.9761 6.0447 8.89399 5.56546C8.70844 5.92884 8.61268 6.33258 8.61763 6.74346L8.61764 6.74443V6.7454C8.61764 7.48458 8.86816 8.01273 9.27319 8.39551C9.68332 8.7831 10.2642 9.03287 10.9402 9.18483Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7059 11.6604C14.0159 11.4002 14.2146 11.042 14.2802 10.6059C14.5182 10.7927 14.6951 11.0046 14.8197 11.2467C14.9746 11.5474 15.0536 11.9041 15.06 12.3335C14.4716 13.039 13.4498 13.4497 12.2239 13.4497C11.1685 13.4497 10.285 13.1947 9.62801 12.7304C9.02203 12.3021 8.60038 11.69 8.4136 10.9135H10.1758C10.3272 11.3092 10.5793 11.6087 10.9114 11.8116C11.2715 12.0317 11.7157 12.1323 12.2088 12.1323C12.8117 12.1323 13.3318 11.9745 13.7059 11.6604Z",
    fill: "white"
  }));
};

var getPathname = function getPathname(nextId) {
  var pathname = decodeURIComponent(location.pathname);
  var baseId = getBaseIdFromId(nextId);
  var translatedIdRegexStr = buildDocId(baseId, "[a-zA-Z-]{2,5}");
  var currentIdRegex = new RegExp("".concat(baseId, "|").concat(translatedIdRegexStr));
  var newPathname = pathname.replace(currentIdRegex, nextId).replace(",view=translations", "");
  return newPathname;
};

var TranslationLink = function TranslationLink(_ref) {
  var _classnames, _config$messages, _config$messages2;

  var docId = _ref.docId,
      index = _ref.index,
      schema = _ref.schema,
      lang = _ref.lang,
      currentLanguage = _ref.currentLanguage,
      baseDocument = _ref.baseDocument;
  var config = getConfig(schema);

  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      imageOk = _React$useState2[0],
      setImageOk = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      existing = _React$useState4[0],
      setExisting = _React$useState4[1];

  var nameSplit = lang.name.split(/[_-]/);
  var country = (nameSplit.length > 1 ? nameSplit[1] : nameSplit[0]).toLowerCase();
  var translatedDocId = (config.base ? lang.name === config.base : index === 0) ? docId : buildDocId(docId, lang.name);
  React.useEffect(function () {
    getSanityClient().fetch("*[_id == $id || _id == $draftId]", {
      id: translatedDocId,
      draftId: "drafts.".concat(translatedDocId)
    }).then(function (r) {
      var existing = r.find(function (r) {
        return r._id === translatedDocId;
      });
      if (existing) setExisting(existing);else setExisting(r.find(function (r) {
        return r._id === "drafts.".concat(translatedDocId);
      }));
    })["catch"](function (err) {
      console.error(err);
    });
  }, [lang.name]);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: classnames((_classnames = {}, _defineProperty(_classnames, styles$1.entry, true), _defineProperty(_classnames, styles$1.disabled, existing === null), _defineProperty(_classnames, styles$1.selected, currentLanguage === lang.name), _classnames)),
    onClick: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var newPathname, fieldName;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                newPathname = getPathname(translatedDocId);

                if (existing === undefined) {
                  fieldName = config.fieldNames.lang;
                  getSanityClient().createIfNotExists(_objectSpread2({}, baseDocument ? baseDocument : {}, _defineProperty({
                    _id: "drafts.".concat(translatedDocId),
                    _type: schema.name
                  }, fieldName, lang.name))).then(function () {
                    location.pathname = newPathname;
                  });
                } else {
                  location.pathname = newPathname;
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  }, imageOk ? /*#__PURE__*/React.createElement("img", {
    className: styles$1.flag,
    src: "https://www.countryflags.io/".concat(country, "/flat/24.png"),
    onError: function onError() {
      return setImageOk(false);
    }
  }) : /*#__PURE__*/React.createElement(SanityFlag, {
    className: styles$1.flag
  }), /*#__PURE__*/React.createElement("h2", {
    className: styles$1.title
  }, lang.title), !existing ? /*#__PURE__*/React.createElement("p", {
    className: styles$1.missing
  }, (_config$messages = config.messages) === null || _config$messages === void 0 ? void 0 : _config$messages.missing) : existing && existing._id.startsWith("drafts.") && /*#__PURE__*/React.createElement("p", {
    className: styles$1.draft
  }, (_config$messages2 = config.messages) === null || _config$messages2 === void 0 ? void 0 : _config$messages2.draft));
};

var TranslationsComponentFactory = function TranslationsComponentFactory(schema) {
  return function (props) {
    var config = getConfig(schema);

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        pending = _React$useState2[0],
        setPending = _React$useState2[1];

    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        languages = _React$useState4[0],
        setLanguages = _React$useState4[1];

    var _React$useState5 = React.useState(null),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        baseDocument = _React$useState6[0],
        setBaseDocument = _React$useState6[1];

    React.useEffect(function () {
      _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var langs, doc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setPending(true);
                _context.next = 3;
                return getLanguagesFromOption(config.languages);

              case 3:
                langs = _context.sent;
                _context.next = 6;
                return getSanityClient().fetch('*[_id == $id]', {
                  id: getBaseIdFromId(props.documentId)
                });

              case 6:
                doc = _context.sent;
                if (doc && doc.length > 0) setBaseDocument(doc[0]);
                setLanguages(langs);
                setPending(false);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }, []);

    if (pending) {
      var _config$messages;

      return /*#__PURE__*/React.createElement("div", {
        className: styles.loading
      }, (_config$messages = config.messages) === null || _config$messages === void 0 ? void 0 : _config$messages.loading);
    }

    var docId = getBaseIdFromId(props.documentId);
    var baseLanguage = getBaseLanguage(languages, config.base);
    var currentLanguage = getLanguageFromId(props.documentId) || (baseLanguage ? baseLanguage.name : null);
    return languages.map(function (lang, index) {
      return /*#__PURE__*/React.createElement(TranslationLink, {
        key: lang.name,
        docId: docId,
        index: index,
        schema: schema,
        lang: lang,
        currentLanguage: currentLanguage,
        baseDocument: baseDocument
      });
    });
  };
};

var css_248z$2 = "._3IcjAWWaV6VF4Eg1H1jt-5 {\n  padding: 1rem; }\n  ._3IcjAWWaV6VF4Eg1H1jt-5._162QHwyCp8jXu_CG1s93rj {\n    opacity: .3;\n    pointer-events: none; }\n\n._2eEMnSuc9H1hxDMAfbf6uV {\n  position: relative; }\n  ._2eEMnSuc9H1hxDMAfbf6uV select {\n    display: block;\n    width: 100%;\n    padding: .8rem;\n    border: 0.1rem solid #bdc6d4;\n    background: transparent;\n    border-radius: 0.2rem;\n    -moz-appearance: textfield;\n    appearance: none; }\n    ._2eEMnSuc9H1hxDMAfbf6uV select:focus, ._2eEMnSuc9H1hxDMAfbf6uV select:active {\n      box-shadow: 0 0 0 0.2rem rgba(21, 109, 255, 0.42);\n      border-color: #156dff; }\n  ._2eEMnSuc9H1hxDMAfbf6uV svg {\n    position: absolute;\n    right: 1rem;\n    top: 50%;\n    transform: translateY(-50%); }\n\n._1qCCCFJEfotc37qjdcDbOJ {\n  margin-top: 1rem; }\n  ._1qCCCFJEfotc37qjdcDbOJ ._1y3r7RENDw6IUn1KPl-v7I {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    ._1qCCCFJEfotc37qjdcDbOJ ._1y3r7RENDw6IUn1KPl-v7I p {\n      margin: 0; }\n    ._1qCCCFJEfotc37qjdcDbOJ ._1y3r7RENDw6IUn1KPl-v7I button {\n      cursor: pointer;\n      display: block;\n      padding: .5rem .8rem;\n      border: 0;\n      background: #156dff;\n      border-radius: .2rem;\n      color: #ffffff;\n      border: 0.1rem solid #156dff; }\n      ._1qCCCFJEfotc37qjdcDbOJ ._1y3r7RENDw6IUn1KPl-v7I button:active {\n        background-color: #488dff; }\n  ._1qCCCFJEfotc37qjdcDbOJ ._1y3r7RENDw6IUn1KPl-v7I + ._1y3r7RENDw6IUn1KPl-v7I {\n    margin-top: 1rem; }\n";
var styles$2 = {"root":"_3IcjAWWaV6VF4Eg1H1jt-5","disabled":"_162QHwyCp8jXu_CG1s93rj","schemaselect":"_2eEMnSuc9H1hxDMAfbf6uV","dashboard":"_1qCCCFJEfotc37qjdcDbOJ","entry":"_1y3r7RENDw6IUn1KPl-v7I"};
styleInject(css_248z$2);

var ChevronDown = function ChevronDown() {
  return /*#__PURE__*/React__default.createElement("svg", {
    fill: "currentColor",
    preserveAspectRatio: "xMidYMid meet",
    height: "1em",
    width: "1em",
    viewBox: "0 0 40 40"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "m31 16.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.5 0.3t-0.6-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l1.2-1.1q0.2-0.2 0.5-0.2t0.5 0.2l8.8 8.8 8.7-8.8q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z"
  }));
};

var MaintenanceTab = /*#__PURE__*/function (_React$Component) {
  _inherits(MaintenanceTab, _React$Component);

  var _super = _createSuper(MaintenanceTab);

  function MaintenanceTab() {
    var _this;

    _classCallCheck(this, MaintenanceTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_sanityClient", getSanityClient());

    _defineProperty(_assertThisInitialized(_this), "state", {
      pending: false,
      selectedSchema: '',
      documents: []
    });

    _defineProperty(_assertThisInitialized(_this), "fetchInformation", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var selectedSchema, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              selectedSchema = _this.state.selectedSchema;

              _this.setState({
                pending: true
              });

              _context.next = 4;
              return _this._sanityClient.fetch('*[_type == $type]', {
                type: selectedSchema
              });

            case 4:
              result = _context.sent;

              _this.setState({
                pending: false,
                documents: result
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "fixOldIdDocuments", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var selectedSchema, config, refsFieldName, oldIdDocuments;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.setState({
                pending: true
              });

              selectedSchema = _this.state.selectedSchema;
              config = getConfig();
              refsFieldName = config.fieldNames.references;
              oldIdDocuments = _this.oldIdDocuments;
              _context3.next = 7;
              return Promise.all(oldIdDocuments.map( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(d) {
                  var baseId, lang, newId, transaction;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          baseId = getBaseIdFromId(d._id);
                          lang = getLanguageFromId(d._id);
                          newId = buildDocId(baseId, lang);
                          transaction = _this._sanityClient.transaction();
                          transaction.createIfNotExists(_objectSpread2({}, d, {
                            _id: newId,
                            _type: selectedSchema
                          }));
                          transaction["delete"](d._id);
                          _context2.next = 8;
                          return transaction.commit();

                        case 8:
                          _context2.next = 10;
                          return _this._sanityClient.patch(baseId).setIfMissing(_defineProperty({}, refsFieldName, [])).append(refsFieldName, [{
                            _key: newId,
                            lang: lang,
                            ref: {
                              _type: 'reference',
                              _ref: newId
                            }
                          }]).commit();

                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref3.apply(this, arguments);
                };
              }()));

            case 7:
              _context3.next = 9;
              return _this.fetchInformation();

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    _defineProperty(_assertThisInitialized(_this), "fixLanguageFields", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var _config$fieldNames;

      var _this$state, documents, selectedSchema, config, langFieldName;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this.setState({
                pending: true
              });

              _this$state = _this.state, documents = _this$state.documents, selectedSchema = _this$state.selectedSchema;
              config = getConfig(selectedSchema);
              langFieldName = (_config$fieldNames = config.fieldNames) === null || _config$fieldNames === void 0 ? void 0 : _config$fieldNames.lang;
              _context5.next = 6;
              return Promise.all(documents.map( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(d) {
                  var schema, base, language;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          schema = getSchema(d._type);
                          base = (_typeof(schema.i18n) === 'object' ? schema.i18n.base : undefined) || config.base;

                          if (d[langFieldName]) {
                            _context4.next = 6;
                            break;
                          }

                          language = getLanguageFromId(d._id) || base;
                          _context4.next = 6;
                          return _this._sanityClient.patch(d._id, {
                            set: _defineProperty({}, langFieldName, language)
                          }).commit();

                        case 6:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x2) {
                  return _ref5.apply(this, arguments);
                };
              }()));

            case 6:
              _this.fetchInformation();

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));

    _defineProperty(_assertThisInitialized(_this), "fixTranslationRefs", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var selectedSchema, config, refsFieldName, translatedDocuments;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _this.setState({
                pending: true
              });

              selectedSchema = _this.state.selectedSchema;
              config = getConfig(selectedSchema);
              refsFieldName = config.fieldNames.references;
              translatedDocuments = _this.translatedDocuments;
              _context7.next = 7;
              return Promise.all(_this.baseDocuments.map( /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(d) {
                  var docs, refsCount;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          docs = translatedDocuments.filter(function (dx) {
                            return getBaseIdFromId(dx._id) === d._id;
                          });
                          refsCount = Object.keys(d[refsFieldName] || {}).length;

                          if (!(refsCount != docs.length)) {
                            _context6.next = 5;
                            break;
                          }

                          _context6.next = 5;
                          return _this._sanityClient.patch(d._id, {
                            set: _defineProperty({}, refsFieldName, translatedDocuments.map(function (doc) {
                              var lang = getLanguageFromId(doc._id);
                              return {
                                _key: doc._id,
                                lang: lang,
                                ref: {
                                  _type: 'reference',
                                  _ref: doc._id
                                }
                              };
                            }, {}))
                          }).commit();

                        case 5:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x3) {
                  return _ref7.apply(this, arguments);
                };
              }()));

            case 7:
              _this.fetchInformation();

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));

    _defineProperty(_assertThisInitialized(_this), "fixOrphanedDocuments", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      var basedocuments;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _this.setState({
                pending: true
              });

              basedocuments = _this.baseDocuments;
              _context9.next = 4;
              return Promise.all(_this.translatedDocuments.map( /*#__PURE__*/function () {
                var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(d) {
                  var base;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          base = basedocuments.find(function (doc) {
                            return d._id.startsWith(doc._id);
                          });

                          if (base) {
                            _context8.next = 4;
                            break;
                          }

                          _context8.next = 4;
                          return _this._sanityClient["delete"](d._id);

                        case 4:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function (_x4) {
                  return _ref9.apply(this, arguments);
                };
              }()));

            case 4:
              _this.fetchInformation();

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })));

    _defineProperty(_assertThisInitialized(_this), "onSchemaTypeChange", function (event) {
      var schemaType = event.currentTarget.value;

      _this.setState({
        selectedSchema: schemaType,
        pending: true
      }, _this.fetchInformation);
    });

    return _this;
  }

  _createClass(MaintenanceTab, [{
    key: "render",
    value: function render() {
      var _classNames, _config$messages, _config$messages$tran, _config$messages2, _config$messages2$tra, _config$messages3, _config$messages3$tra, _config$messages4, _config$messages4$tra, _config$messages5, _config$messages5$tra, _config$messages6, _config$messages6$tra, _config$messages7, _config$messages7$tra, _config$messages8, _config$messages8$tra, _config$messages9, _config$messages9$tra;

      var _this$state2 = this.state,
          pending = _this$state2.pending,
          selectedSchema = _this$state2.selectedSchema,
          documents = _this$state2.documents;
      var config = getConfig();
      var info = this.documentsSummaryInformation;
      return /*#__PURE__*/React__default.createElement("div", {
        className: classnames((_classNames = {}, _defineProperty(_classNames, styles$2.root, true), _defineProperty(_classNames, styles$2.disabled, pending), _classNames))
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$2.schemaselect
      }, /*#__PURE__*/React__default.createElement("select", {
        onChange: this.onSchemaTypeChange,
        value: selectedSchema
      }, /*#__PURE__*/React__default.createElement("option", {
        selected: true,
        disabled: true,
        value: ""
      }, (_config$messages = config.messages) === null || _config$messages === void 0 ? void 0 : (_config$messages$tran = _config$messages.translationsMaintenance) === null || _config$messages$tran === void 0 ? void 0 : _config$messages$tran.selectSchemaPlaceholder), this.i18nSchemas.map(function (s) {
        return /*#__PURE__*/React__default.createElement("option", {
          key: s.name,
          value: s.name
        }, s.title);
      })), /*#__PURE__*/React__default.createElement(ChevronDown, null)), !!selectedSchema && /*#__PURE__*/React__default.createElement("div", {
        className: styles$2.dashboard
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$2.entry
      }, /*#__PURE__*/React__default.createElement("p", null, info.oldIdStructure.length, " ", config === null || config === void 0 ? void 0 : (_config$messages2 = config.messages) === null || _config$messages2 === void 0 ? void 0 : (_config$messages2$tra = _config$messages2.translationsMaintenance) === null || _config$messages2$tra === void 0 ? void 0 : _config$messages2$tra.oldIdStructure), info.oldIdStructure.length > 0 && /*#__PURE__*/React__default.createElement("button", {
        onClick: this.fixOldIdDocuments
      }, config === null || config === void 0 ? void 0 : (_config$messages3 = config.messages) === null || _config$messages3 === void 0 ? void 0 : (_config$messages3$tra = _config$messages3.translationsMaintenance) === null || _config$messages3$tra === void 0 ? void 0 : _config$messages3$tra.fix)), /*#__PURE__*/React__default.createElement("div", {
        className: styles$2.entry
      }, /*#__PURE__*/React__default.createElement("p", null, info.missingLanguageField.length, " ", config === null || config === void 0 ? void 0 : (_config$messages4 = config.messages) === null || _config$messages4 === void 0 ? void 0 : (_config$messages4$tra = _config$messages4.translationsMaintenance) === null || _config$messages4$tra === void 0 ? void 0 : _config$messages4$tra.missingLanguageField), info.missingLanguageField.length > 0 && /*#__PURE__*/React__default.createElement("button", {
        onClick: this.fixLanguageFields
      }, config === null || config === void 0 ? void 0 : (_config$messages5 = config.messages) === null || _config$messages5 === void 0 ? void 0 : (_config$messages5$tra = _config$messages5.translationsMaintenance) === null || _config$messages5$tra === void 0 ? void 0 : _config$messages5$tra.fix)), /*#__PURE__*/React__default.createElement("div", {
        className: styles$2.entry
      }, /*#__PURE__*/React__default.createElement("p", null, info.missingDocumentRefs.length, " ", config === null || config === void 0 ? void 0 : (_config$messages6 = config.messages) === null || _config$messages6 === void 0 ? void 0 : (_config$messages6$tra = _config$messages6.translationsMaintenance) === null || _config$messages6$tra === void 0 ? void 0 : _config$messages6$tra.missingDocumentRefs), info.missingDocumentRefs.length > 0 && /*#__PURE__*/React__default.createElement("button", {
        onClick: this.fixTranslationRefs
      }, config === null || config === void 0 ? void 0 : (_config$messages7 = config.messages) === null || _config$messages7 === void 0 ? void 0 : (_config$messages7$tra = _config$messages7.translationsMaintenance) === null || _config$messages7$tra === void 0 ? void 0 : _config$messages7$tra.fix)), /*#__PURE__*/React__default.createElement("div", {
        className: styles$2.entry
      }, /*#__PURE__*/React__default.createElement("p", null, info.orphanDocuments.length, " ", config === null || config === void 0 ? void 0 : (_config$messages8 = config.messages) === null || _config$messages8 === void 0 ? void 0 : (_config$messages8$tra = _config$messages8.translationsMaintenance) === null || _config$messages8$tra === void 0 ? void 0 : _config$messages8$tra.orphanDocuments), info.orphanDocuments.length > 0 && /*#__PURE__*/React__default.createElement("button", {
        onClick: this.fixOrphanedDocuments
      }, config === null || config === void 0 ? void 0 : (_config$messages9 = config.messages) === null || _config$messages9 === void 0 ? void 0 : (_config$messages9$tra = _config$messages9.translationsMaintenance) === null || _config$messages9$tra === void 0 ? void 0 : _config$messages9$tra.fix))));
    }
  }, {
    key: "i18nSchemas",
    get: function get() {
      return schemas._original.types.filter(function (s) {
        return !!s.i18n;
      });
    }
  }, {
    key: "baseDocuments",
    get: function get() {
      return this.state.documents.filter(function (d) {
        return !d._id.startsWith(I18nPrefix);
      });
    }
  }, {
    key: "translatedDocuments",
    get: function get() {
      return this.state.documents.filter(function (d) {
        return d._id.startsWith(I18nPrefix);
      });
    }
  }, {
    key: "oldIdDocuments",
    get: function get() {
      return this.state.documents.filter(function (d) {
        return d._id.includes('__i18n_');
      });
    }
  }, {
    key: "documentsSummaryInformation",
    get: function get() {
      var _config$fieldNames2, _config$fieldNames3;

      var _this$state3 = this.state,
          documents = _this$state3.documents,
          selectedSchema = _this$state3.selectedSchema;
      var config = getConfig(selectedSchema);
      var basedocuments = this.baseDocuments;
      var translateddocuments = this.translatedDocuments;
      var oldiddocuments = this.oldIdDocuments;
      var refsFieldName = (_config$fieldNames2 = config.fieldNames) === null || _config$fieldNames2 === void 0 ? void 0 : _config$fieldNames2.references;
      var langFieldName = (_config$fieldNames3 = config.fieldNames) === null || _config$fieldNames3 === void 0 ? void 0 : _config$fieldNames3.lang;
      return {
        oldIdStructure: oldiddocuments,
        missingLanguageField: documents.filter(function (d) {
          return !d[langFieldName];
        }),
        missingDocumentRefs: basedocuments.filter(function (d) {
          var docs = translateddocuments.filter(function (dx) {
            return getBaseIdFromId(dx._id) === d._id;
          });
          var refsCount = Object.keys(d[refsFieldName] || {}).length;
          return refsCount != docs.length;
        }),
        orphanDocuments: translateddocuments.filter(function (d) {
          var base = basedocuments.find(function (doc) {
            return getBaseIdFromId(d._id) === doc._id;
          });
          if (base) return false;
          return true;
        })
      };
    }
  }]);

  return MaintenanceTab;
}(React__default.Component);

var hasIcon = function hasIcon(schemaType) {
  if (!schemaType || typeof schemaType === "string") {
    return false;
  }

  return Boolean(schemaType.icon);
};

var getDocumentNodeViewsForSchemaType = function getDocumentNodeViewsForSchemaType(type) {
  var schema = getSchema(type);
  return [structure.StructureBuilder.view.form(), structure.StructureBuilder.view.component(TranslationsComponentFactory(schema)).title("Translations")];
};
var getDefaultDocumentNode = function getDefaultDocumentNode(props) {
  var schema = getSchema(props.schemaType);

  if (schema && schema.i18n) {
    return structure.StructureBuilder.document().views(getDocumentNodeViewsForSchemaType(props.schemaType));
  }

  return structure.StructureBuilder.document();
};
var getDocumentTypes = function getDocumentTypes() {
  var listItemsWithouti18n = [];
  var listItemsWithi18n = structure.StructureBuilder.documentTypeListItems().filter(function (l) {
    var schemaType = l.getSchemaType();
    var hasi18n = schemaType && typeof schemaType !== "string" && schemaType.i18n;
    if (!hasi18n) listItemsWithouti18n.push(l);
    return hasi18n;
  });
  return {
    withoutI18n: listItemsWithouti18n,
    withI18n: listItemsWithi18n
  };
};
var getMaintenanceTabComponent = function getMaintenanceTabComponent() {
  var _config$messages, _config$messages$tran;

  var config = getConfig();
  return structure.StructureBuilder.component(MaintenanceTab).title(((_config$messages = config.messages) === null || _config$messages === void 0 ? void 0 : (_config$messages$tran = _config$messages.translationsMaintenance) === null || _config$messages$tran === void 0 ? void 0 : _config$messages$tran.title) || "").id("__i18n_translations_maintenance_tab");
};
var getMaintenanceListItem = function getMaintenanceListItem() {
  var _config$messages2, _config$messages2$tra;

  var config = getConfig();
  return structure.StructureBuilder.listItem().id("__i18n_translations_maintenance_tab").title(((_config$messages2 = config.messages) === null || _config$messages2 === void 0 ? void 0 : (_config$messages2$tra = _config$messages2.translationsMaintenance) === null || _config$messages2$tra === void 0 ? void 0 : _config$messages2$tra.title) || "").child(getMaintenanceTabComponent());
};
var getFilteredDocumentTypeListItems = function getFilteredDocumentTypeListItems() {
  var config = getConfig();
  var types = getDocumentTypes();
  var items = [].concat(_toConsumableArray(types.withoutI18n), _toConsumableArray(types.withI18n.map(function (l) {
    return l.child(structure.StructureBuilder.documentList().id(l.getId() || "").title(l.getTitle() || "").filter("!(_id match path($id)) && !(_id match path($drafts)) && _type == $type").params({
      id: "".concat(I18nPrefix, "-**"),
      drafts: "drafts.".concat(I18nPrefix, "-**"),
      type: l.getId()
    }));
  })));

  if (config.withTranslationsMaintenance) {
    items.splice(0, 0, getMaintenanceListItem());
  }

  return items;
};
var index = (function () {
  var types = getDocumentTypes();
  if (types.withI18n.length === 0) return structure.StructureBuilder.defaults();
  var items = getFilteredDocumentTypeListItems();
  return structure.StructureBuilder.list().id("__root__").title("Content").items(items).showIcons(items.some(function (item) {
    return hasIcon(item.getSchemaType());
  }));
});

exports.default = index;
exports.getDefaultDocumentNode = getDefaultDocumentNode;
exports.getDocumentNodeViewsForSchemaType = getDocumentNodeViewsForSchemaType;
exports.getDocumentTypes = getDocumentTypes;
exports.getFilteredDocumentTypeListItems = getFilteredDocumentTypeListItems;
exports.getMaintenanceListItem = getMaintenanceListItem;
exports.getMaintenanceTabComponent = getMaintenanceTabComponent;
