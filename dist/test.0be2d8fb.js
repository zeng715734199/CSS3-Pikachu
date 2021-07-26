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
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.skin *{\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n.skin *::before,.skin *::after {\n  box-sizing: border-box;\n}\n.skin {\n  position: relative;\n  background: rgb(255, 230, 0);\n  height: 60vh;\n}\n.nose {\n  border: 9px solid black;\n  border-color: black transparent transparent;\n  border-bottom: none;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  left: 50%;\n  top: 287px;\n  margin-left: -9px;\n  z-index: 2;\n}\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.nose {\n  transform-origin: 50% 100%;\n  animation: wave 300ms infinite linear;\n}\n.sector {\n  position: absolute;\n  width: 18px;\n  height: 5px;\n  background: black;\n  bottom: 9px;\n  left: -9px;\n  border-radius: 12px 12px 0 0;\n}\n.eyeLeft {\n  border: 2px solid #000;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 50%;\n  top: 250px;\n  margin-left: -15px;\n  transform: translateX(-120px);\n  border-radius: 50%;\n  background: #2e2e2e;\n  z-index: 2;\n}\n.eyeLeft::before {\n  content: \"\";\n  display: block;\n  border: 3px solid #000;\n  width: 30px;\n  height: 30px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  left: 9px;\n  top: 0px;\n}\n.eyeRight {\n  border: 2px solid #000;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  right: 50%;\n  top: 250px;\n  margin-right: -15px;\n  transform: translateX(120px);\n  border-radius: 50%;\n  background: #2e2e2e;\n  z-index: 2;\n}\n.eyeRight::before {\n  content: \"\";\n  display: block;\n  border: 3px solid #000;\n  width: 30px;\n  height: 30px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  left: 9px;\n  top: 0px;\n}\n.mouth {\n  height: 200px;\n  width: 160px;\n  position: relative;\n  left: 50%;\n  top: 305px;\n  margin-left: -80px;\n  overflow: hidden;\n  z-index: 2;\n}\n.upMouth {\n  position: relative;\n}\n.leftLip {\n  position: absolute;\n  height: 38px;\n  width: 80px;\n  border: 3px solid #000;\n  border-radius: 0 0 0 40px;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  transform: rotateZ(-30deg);\n  background: rgb(255, 230, 0);\n  z-index: 1;\n}\n.leftLip::before {\n  content: \"\";\n  display: block;\n  height: 35px;\n  width: 6px;\n  position: absolute;\n  background: rgb(255, 230, 0);\n  right: -5px;\n}\n.rightLip {\n  position: absolute;\n  height: 38px;\n  width: 80px;\n  right: 0;\n  border: 3px solid #000;\n  border-radius: 0 0 40px 0;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  transform: rotate(30deg);\n  background: rgb(255, 230, 0);\n  z-index: 1;\n}\n.rightLip::after {\n  content: \"\";\n  display: block;\n  height: 35px;\n  width: 12px;\n  position: absolute;\n  background: rgb(255, 230, 0);\n  left: -0.37em;\n  bottom: -0.2em;\n  transform: rotate(26deg);\n}\n.downMouth {\n  position: absolute;\n  height: 180px;\n  top: 11px;\n  width: 100%;\n  overflow: hidden;\n}\n.downMouth .round1 {\n  border: 3px solid #000;\n  position: absolute;\n  height: 350px;\n  width: 130px;\n  left: 50%;\n  bottom: 20px;\n  margin-left: -65px;\n  border-radius: 100px/200px;\n  background: rgb(204, 65, 67);\n  overflow: hidden;\n}\n.downMouth .round2 {\n  border: 3px solid #000;\n  position: absolute;\n  top: 220px;\n  left: 50%;\n  height: 200px;\n  width: 130px;\n  border-radius: 120px/100px;\n  margin-left: -65px;\n  background: rgb(221, 102, 106);\n}\n.faceLeft {\n  position: absolute;\n  top: 365px;\n  left: 50%;\n  border: 3px solid #000;\n  height: 82px;\n  width: 82px;\n  margin-left: -41px;\n  transform: translateX(-175px);\n  border-radius: 50%;\n  background: rgb(255, 0, 0);\n  z-index: 2;\n}\n.faceRight {\n  position: absolute;\n  top: 365px;\n  left: 50%;\n  border: 3px solid #000;\n  height: 82px;\n  width: 82px;\n  margin-left: -41px;\n  transform: translateX(175px);\n  border-radius: 50%;\n  background: rgb(255, 0, 0);\n  z-index: 2;\n}\n.ear {\n  position: absolute;\n  border: 4px solid #000;\n  background: rgb(255, 230, 0);\n  overflow: hidden;\n}\n.ear.left {\n  top: 21px;\n  height: 180px;\n  width: 100px;\n  left: 50%;\n  margin-left: -220px;\n  border-radius: 5px 125% 0px 125%;\n  transform: rotate(-26deg) skewX(25deg) skewY(0deg);\n  transform-origin: 100% 100%;\n}\n.ear.right {\n  top: 97px;\n  height: 100px;\n  width: 180px;\n  right: 50%;\n  margin-right: -125px;\n  border-radius: 5px 125% 4px 125%;\n  transform: rotate(139deg) skewX(25deg) skewY(0deg);\n  transform-origin: bottom right;\n}\n.ear .black1 {\n  position: absolute;\n  left: -10px;\n  top: -48px;\n  height: 100px;\n  width: 100px;\n  border: 5px solid black;\n  background: #000;\n  transform: rotate(-162deg);\n}\n.black2 {\n  position: absolute;\n  left: -47px;\n  top: -4px;\n  height: 100px;\n  width: 100px;\n  border: 5px solid black;\n  background: #000;\n  transform: rotate(76deg);\n}\n.ring {\n  border: 4px solid #000;\n  background: rgb(255, 230, 0);\n  border-color: #000 transparent transparent transparent;\n  position: absolute;\n  height: 500px;\n  width: 400px;\n  border-radius: 290px/250px;\n  left: 50%;\n  margin-left: -200px;\n  top: 130px;\n  z-index: 1;\n}\n@keyframes ear_left {\n  0% {\n    transform: rotate(-26deg) skewX(25deg) skewY(0deg);\n  }\n  50% {\n    transform: rotate(-22deg) skewX(25deg) skewY(0deg);\n  }\n  100% {\n    transform: rotate(-26deg) skewX(25deg) skewY(0deg);\n  }\n}\n@keyframes ear_right {\n  0% {\n    transform: rotate(139deg) skewX(25deg) skewY(0deg);\n  }\n  50% {\n    transform: rotate(135deg) skewX(25deg) skewY(0deg);\n  }\n  100% {\n    transform: rotate(139deg) skewX(25deg) skewY(0deg);\n  }\n}\n.ear.left{\n  animation: ear_left 2s infinite linear 0s;\n}\n.ear.right{\n  animation: ear_right 2s infinite linear 0s;\n}";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
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
},{"./css":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.0be2d8fb.js.map