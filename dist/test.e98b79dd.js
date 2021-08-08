// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/* css reset */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/* \u8BBE\u7F6E\u76AE\u80A4 */\n.skin {\n  background: rgb(255, 230, 0);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.wrapper {\n  position: relative;\n  top: 0;\n  width: 400px;\n  height: 400px;\n  overflow: hidden;\n}\n/* \u6765\u753B\u4E00\u4E2A\u9F3B\u5B50 */\n.nose {\n  border: 9px solid black;\n  border-color: black transparent transparent;\n  border-bottom: none;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  left: 50%;\n  top: 107px;\n  margin-left: -9px;\n  z-index: 2;\n  transform-origin: 50% 100%;\n  animation: wave 300ms infinite linear;\n}\n.sector {\n  position: absolute;\n  width: 18px;\n  height: 5px;\n  background: black;\n  bottom: 9px;\n  left: -9px;\n  border-radius: 12px 12px 0 0;\n}\n/* \u63A5\u7740\u753B\u4E00\u4E2A\u773C\u775B */\n.eyes {\n  border: 2px solid #000;\n  min-width: 50px;\n  min-height: 50px;\n  position: absolute;\n  top: 70px;\n  border-radius: 50%;\n  background: #2e2e2e;\n  z-index: 2;\n}\n.eyes.Left {\n  left: 50%;\n  margin-left: -25px;\n  transform: translateX(-90px);\n}\n.eyes.Right {\n  right: 50%;\n  margin-right: -25px;\n  transform: translateX(90px);\n}\n.eyes.Left::before,\n.eyes.Right::before {\n  content: \"\";\n  display: block;\n  border: 3px solid #000;\n  width: 23px;\n  height: 23px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  left: 9px;\n  top: 0px;\n  animation:eyeMove 3s infinite;\n}\n/* \u753B\u5634\u5DF4\uFF0C\u5634\u5DF4\u662F\u7531\u4E24\u4E2A\u692D\u5706\u7EC4\u6210\u7684 */\n.mouth {\n  height: 200px;\n  width: 160px;\n  position: relative;\n  left: 50%;\n  top: 125px;\n  margin-left: -80px;\n  overflow: hidden;\n  z-index: 2;\n}\n.upMouth {\n  position: relative;\n}\n/* \u753B\u4E0A\u5634\u5507 */\n.lip {\n  position: absolute;\n  height: 38px;\n  width: 80px;\n  border: 3px solid #000;\n  border-top-color: transparent;\n  background: rgb(255, 230, 0);\n  z-index: 1;\n}\n.lip.Left {\n  border-radius: 0 0 0 40px;\n  border-left-color: transparent;\n  transform: rotateZ(-30deg);\n}\n.lip.Left::before {\n  content: \"\";\n  display: block;\n  height: 35px;\n  width: 6px;\n  position: absolute;\n  background: rgb(255, 230, 0);\n  right: -5px;\n}\n.lip.Right {\n  right: 0;\n  border-radius: 0 0 40px 0;\n  border-right-color: transparent;\n  transform: rotate(30deg);\n}\n.lip.Right::after {\n  content: \"\";\n  display: block;\n  height: 35px;\n  width: 12px;\n  position: absolute;\n  background: rgb(255, 230, 0);\n  left: -0.37em;\n  bottom: -0.2em;\n  transform: rotate(26deg);\n}\n.downMouth {\n  position: absolute;\n  height: 180px;\n  top: 12px;\n  width: 100%;\n  overflow: hidden;\n}\n.downMouth .round1 {\n  border: 3px solid #000;\n  position: absolute;\n  height: 273px;\n  width: 130px;\n  left: 50%;\n  top: -110px;\n  margin-left: -65px;\n  border-radius: 100px/200px;\n  background: rgb(204, 65, 67);\n  overflow: hidden;\n  animation: mouthMove 3s infinite;\n}\n.downMouth .round2 {\n  border: 3px solid #000;\n  position: absolute;\n  top: 145px;\n  left: 50%;\n  height: 135px;\n  width: 130px;\n  border-radius: 120px/100px;\n  margin-left: -65px;\n  background: rgb(221, 102, 106);\n}\n/* \u753B\u4E00\u5BF9\u8138\u86CB */\n.face {\n  position: absolute;\n  top: 140px;\n  left: 50%;\n  border: 3px solid #000;\n  height: 64px;\n  width: 64px;\n  margin-left: -32px;\n  border-radius: 50%;\n  background: rgb(255, 0, 0);\n  z-index: 2;\n  animation: cheekMove 3s infinite;\n}\n.face.Left {\n  transform: translateX(-150px);\n}\n.face.Right {\n  transform: translateX(150px);\n}\n\n/* \u6DFB\u52A0\u52A8\u753B */\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@-webkit-keyframes eyeMove{\n  0%,100%{\n    top:2px;\n    left:2px;\n  }\n  30%,60%,70%{\n    top: 0;\n    left: 15px;\n  }\n  40%{\n    top: 0;\n    left: 15px;\n  }\n  50%{\n    top: 0;\n    left: 10px;\n  }\n  80%,90%{\n    top: 17px;\n    left: 15px;\n  }\n}\n\n@-webkit-keyframes cheekMove{\n  0%,46%,54%,100%{\n    width: 64px;\n    height: 64px;\n    top: 140px;\n  }\n  50%{\n    width: 50px;\n    height: 50px;\n    top: 160px;\n  }\n}\n@keyframes mouthMove {\n  0%,\n  46%,\n  54%,\n  100% {\n    height: 273px;\n  }\n  50% {\n    height: 100px;\n  }\n}\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 100,
  id: undefined,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    console.log(player.n + ':' + 'string:' + _css.default.substr(0, player.n));
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css":"css.js"}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61325" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map