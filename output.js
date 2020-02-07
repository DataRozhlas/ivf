/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/byeie.js":
/*!*********************!*\
  !*** ./js/byeie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (navigator.appName === \"Microsoft Internet Explorer\" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {\n  var warn = document.createElement(\"div\");\n  warn.innerHTML = \"Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx\\\">není bezpečné</a>, zvažte přechod na <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.mozilla.org/cs/firefox/new/\\\">jiný prohlížeč</a>.\";\n  warn.style.cssText = \"text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;\";\n  document.body.appendChild(warn);\n}\n\n//# sourceURL=webpack:///./js/byeie.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byeie */ \"./js/byeie.js\");\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_byeie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vm */ \"./node_modules/vm-browserify/index.js\");\n/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_1__);\n // loučíme se s IE\n\n\n/*\n// snadné načtení souboru pro každého!\nfetch(\"https://blabla.cz/blabla.json\")\n  .then(response => response.json()) // nebo .text(), když to není json\n  .then(data => {\n    // tady jde provést s daty cokoliv\n  });\n*/\n//grafcyklyivf\n\nif (window.innerWidth >= 600) {\n  Highcharts.setOptions({\n    colors: ['#FFCC00', '#EE8027', '#E53434', '#A0067D', '#5E2281', '#172983', '#007BC2', '#89BA17', '#D4B66D', '#B85637', '#A21F16', '#732813', '#5C748C']\n  });\n  Highcharts.chart('grafcyklyivf', {\n    chart: {\n      type: 'line'\n    },\n    title: {\n      text: 'Počet výkonů asistované reprodukce'\n    },\n    credits: {\n      text: 'Zdroj: ÚZIS',\n      href: 'https://www.uzis.cz/index.php?pg=registry-sber-dat--registrace-a-vstup-do-registru'\n    },\n    subtitle: {\n      text: ''\n    },\n    xAxis: {\n      categories: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']\n    },\n    yAxis: {\n      title: {\n        text: 'počet cyklů v tisících'\n      }\n    },\n    plotOptions: {\n      line: {\n        dataLabels: {\n          enabled: true\n        },\n        enableMouseTracking: false\n      }\n    },\n    series: [{\n      name: 'všechny cykly',\n      data: [17682, 21316, 22707, 23798, 24550, 27879, 32245, 35875, 38081, 41017, 42773],\n      visible: false\n    }, {\n      name: 'darování vajíček',\n      data: [675, 1555, 1900, 2361, 3110, 3696, 4319, 4924, 5018, 5374, 5003]\n    }, {\n      name: 'ivf - umělé oplodnění',\n      data: [12192, 14150, 12843, 12733, 12326, 12296, 12980, 13280, 13205, 15006, 15428]\n    }, {\n      name: 'ket - rozmrazení embyrií',\n      data: [4218, 4793, 4896, 5025, 4520, 6224, 7715, 9507, 11240, 12260, 13714],\n      visible: false\n    }, {\n      name: 'freeze - zmrazení embyrií',\n      data: [0, 26, 231, 194, 152, 426, 548, 663, 789, 1280, 2081],\n      visible: false\n    }, {\n      name: 'přijetí darovaných vajíček',\n      data: [0, 153, 2246, 2829, 3735, 4297, 5199, 5643, 5769, 6557, 6057]\n    }]\n  });\n}\n\nHighcharts.chart('grafvek', {\n  chart: {\n    type: 'line'\n  },\n  title: {\n    text: 'Průměrný věk žen při zahájení léčby'\n  },\n  credits: {\n    text: 'Zdroj: ÚZIS',\n    href: 'https://www.uzis.cz/index.php?pg=registry-sber-dat--registrace-a-vstup-do-registru'\n  },\n  subtitle: {\n    text: ''\n  },\n  xAxis: {\n    categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']\n  },\n  yAxis: {\n    title: {\n      text: 'průměrný věk'\n    }\n  },\n  plotOptions: {\n    line: {\n      dataLabels: {\n        enabled: true\n      },\n      enableMouseTracking: false\n    }\n  },\n  series: [{\n    name: 'ivf (ze zkumavky)',\n    data: [34, 33.5, 33.9, 34, 34.4, 34.8, 35.1, 35.3, 35.6, 35.8]\n  }, {\n    name: 'přijámání darovaných vajíček',\n    data: [40, 40.7, 41.2, 41.3, 41.2, 41, 41.2, 41.2, 41.3, 41.3],\n    visible: false\n  }, {\n    name: 'přenos zmražených embryí',\n    data: [34.4, 35.2, 35.3, 35.9, 36.4, 36.7, 36.9, 37.2, 37.1, 37.2],\n    visible: false\n  }, {\n    name: 'darování vajíček',\n    data: [28.8, 28, 27.4, 27, 26.7, 26.7, 26.7, 27, 27, 27]\n  }]\n});\nHighcharts.chart('darovani', {\n  chart: {\n    type: 'bar'\n  },\n  title: {\n    text: 'Celkový počet darovaných a přijatých vajíček'\n  },\n  credits: {\n    text: 'Zdroj: ÚZIS',\n    href: 'https://www.uzis.cz/index.php?pg=registry-sber-dat--registrace-a-vstup-do-registru'\n  },\n  xAxis: {\n    categories: ['Češky', 'cizinky']\n  },\n  yAxis: {\n    min: 0,\n    title: {\n      text: 'celkový počet oocytů v tisících'\n    }\n  },\n  legend: {\n    reversed: true\n  },\n  plotOptions: {\n    series: {\n      stacking: 'normal'\n    }\n  },\n  series: [{\n    name: 'darování',\n    data: [33628, 177]\n  }, {\n    name: 'přijímání',\n    data: [5528, 34558]\n  }]\n});\nHighcharts.chart('prijeti', {\n  chart: {\n    type: 'column'\n  },\n  title: {\n    text: 'Přijetí darovaných vajíček v jednotlivých letech'\n  },\n  credits: {\n    text: 'Zdroj: ÚZIS',\n    href: 'https://www.uzis.cz/index.php?pg=registry-sber-dat--registrace-a-vstup-do-registru'\n  },\n  subtitle: {\n    text: ''\n  },\n  xAxis: {\n    categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],\n    crosshair: true\n  },\n  yAxis: {\n    min: 0,\n    title: {\n      text: ''\n    }\n  },\n  tooltip: {\n    headerFormat: '<span style=\"font-size:10px\">{point.key}</span><table>',\n    pointFormat: '<tr><td style=\"color:{series.color};padding:0\">{series.name}: </td>' + '<td style=\"padding:\"><b>{point.y:.0f}</b></td></tr>',\n    footerFormat: '</table>',\n    shared: true,\n    useHTML: true\n  },\n  plotOptions: {\n    column: {\n      pointPadding: 0.2,\n      borderWidth: 3\n    }\n  },\n  series: [{\n    name: 'Češky',\n    data: [458, 553, 634, 683, 769, 820, 783, 828]\n  }, {\n    name: 'cizinky',\n    data: [2371, 3182, 3663, 4516, 4874, 4949, 5774, 5229]\n  }]\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./node_modules/vm-browserify/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vm-browserify/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var indexOf = function (xs, item) {\n    if (xs.indexOf) return xs.indexOf(item);\n    else for (var i = 0; i < xs.length; i++) {\n        if (xs[i] === item) return i;\n    }\n    return -1;\n};\nvar Object_keys = function (obj) {\n    if (Object.keys) return Object.keys(obj)\n    else {\n        var res = [];\n        for (var key in obj) res.push(key)\n        return res;\n    }\n};\n\nvar forEach = function (xs, fn) {\n    if (xs.forEach) return xs.forEach(fn)\n    else for (var i = 0; i < xs.length; i++) {\n        fn(xs[i], i, xs);\n    }\n};\n\nvar defineProp = (function() {\n    try {\n        Object.defineProperty({}, '_', {});\n        return function(obj, name, value) {\n            Object.defineProperty(obj, name, {\n                writable: true,\n                enumerable: false,\n                configurable: true,\n                value: value\n            })\n        };\n    } catch(e) {\n        return function(obj, name, value) {\n            obj[name] = value;\n        };\n    }\n}());\n\nvar globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',\n'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',\n'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',\n'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',\n'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];\n\nfunction Context() {}\nContext.prototype = {};\n\nvar Script = exports.Script = function NodeScript (code) {\n    if (!(this instanceof Script)) return new Script(code);\n    this.code = code;\n};\n\nScript.prototype.runInContext = function (context) {\n    if (!(context instanceof Context)) {\n        throw new TypeError(\"needs a 'context' argument.\");\n    }\n    \n    var iframe = document.createElement('iframe');\n    if (!iframe.style) iframe.style = {};\n    iframe.style.display = 'none';\n    \n    document.body.appendChild(iframe);\n    \n    var win = iframe.contentWindow;\n    var wEval = win.eval, wExecScript = win.execScript;\n\n    if (!wEval && wExecScript) {\n        // win.eval() magically appears when this is called in IE:\n        wExecScript.call(win, 'null');\n        wEval = win.eval;\n    }\n    \n    forEach(Object_keys(context), function (key) {\n        win[key] = context[key];\n    });\n    forEach(globals, function (key) {\n        if (context[key]) {\n            win[key] = context[key];\n        }\n    });\n    \n    var winKeys = Object_keys(win);\n\n    var res = wEval.call(win, this.code);\n    \n    forEach(Object_keys(win), function (key) {\n        // Avoid copying circular objects like `top` and `window` by only\n        // updating existing context properties or new properties in the `win`\n        // that was only introduced after the eval.\n        if (key in context || indexOf(winKeys, key) === -1) {\n            context[key] = win[key];\n        }\n    });\n\n    forEach(globals, function (key) {\n        if (!(key in context)) {\n            defineProp(context, key, win[key]);\n        }\n    });\n    \n    document.body.removeChild(iframe);\n    \n    return res;\n};\n\nScript.prototype.runInThisContext = function () {\n    return eval(this.code); // maybe...\n};\n\nScript.prototype.runInNewContext = function (context) {\n    var ctx = Script.createContext(context);\n    var res = this.runInContext(ctx);\n\n    if (context) {\n        forEach(Object_keys(ctx), function (key) {\n            context[key] = ctx[key];\n        });\n    }\n\n    return res;\n};\n\nforEach(Object_keys(Script.prototype), function (name) {\n    exports[name] = Script[name] = function (code) {\n        var s = Script(code);\n        return s[name].apply(s, [].slice.call(arguments, 1));\n    };\n});\n\nexports.isContext = function (context) {\n    return context instanceof Context;\n};\n\nexports.createScript = function (code) {\n    return exports.Script(code);\n};\n\nexports.createContext = Script.createContext = function (context) {\n    var copy = new Context();\n    if(typeof context === 'object') {\n        forEach(Object_keys(context), function (key) {\n            copy[key] = context[key];\n        });\n    }\n    return copy;\n};\n\n\n//# sourceURL=webpack:///./node_modules/vm-browserify/index.js?");

/***/ })

/******/ });