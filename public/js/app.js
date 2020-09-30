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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=59)}([function(t,e,r){var i=r(127);t.exports=function(t,e,r){var n=null==t?void 0:i(t,e);return void 0===n?r:n}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){var i=r(27),n="object"==typeof self&&self&&self.Object===Object&&self,a=i||n||Function("return this")();t.exports=a},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){"use strict";function i(t,e,r){void 0===r&&(r={});var i={type:"Feature"};return 0!==r.id&&!r.id||(i.id=r.id),r.bbox&&(i.bbox=r.bbox),i.properties=e||{},i.geometry=t,i}function n(t,e,r){return void 0===r&&(r={}),i({type:"Point",coordinates:t},e,r)}function a(t,e,r){void 0===r&&(r={});for(var n=0,a=t;n<a.length;n++){var o=a[n];if(o.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<o[o.length-1].length;s++)if(o[o.length-1][s]!==o[0][s])throw new Error("First and last Position are not equivalent.")}return i({type:"Polygon",coordinates:t},e,r)}function o(t,e,r){if(void 0===r&&(r={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return i({type:"LineString",coordinates:t},e,r)}function s(t,e){void 0===e&&(e={});var r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function l(t,e,r){return void 0===r&&(r={}),i({type:"MultiLineString",coordinates:t},e,r)}function h(t,e,r){return void 0===r&&(r={}),i({type:"MultiPoint",coordinates:t},e,r)}function u(t,e,r){return void 0===r&&(r={}),i({type:"MultiPolygon",coordinates:t},e,r)}function c(t,r){void 0===r&&(r="kilometers");var i=e.factors[r];if(!i)throw new Error(r+" units is invalid");return t*i}function p(t,r){void 0===r&&(r="kilometers");var i=e.factors[r];if(!i)throw new Error(r+" units is invalid");return t/i}function f(t){return t%(2*Math.PI)*180/Math.PI}function d(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)&&!/^\s*$/.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.earthRadius=6371008.8,e.factors={centimeters:100*e.earthRadius,centimetres:100*e.earthRadius,degrees:e.earthRadius/111325,feet:3.28084*e.earthRadius,inches:39.37*e.earthRadius,kilometers:e.earthRadius/1e3,kilometres:e.earthRadius/1e3,meters:e.earthRadius,metres:e.earthRadius,miles:e.earthRadius/1609.344,millimeters:1e3*e.earthRadius,millimetres:1e3*e.earthRadius,nauticalmiles:e.earthRadius/1852,radians:1,yards:e.earthRadius/1.0936},e.unitsFactors={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/e.earthRadius,yards:1/1.0936},e.areaFactors={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046},e.feature=i,e.geometry=function(t,e,r){switch(void 0===r&&(r={}),t){case"Point":return n(e).geometry;case"LineString":return o(e).geometry;case"Polygon":return a(e).geometry;case"MultiPoint":return h(e).geometry;case"MultiLineString":return l(e).geometry;case"MultiPolygon":return u(e).geometry;default:throw new Error(t+" is invalid")}},e.point=n,e.points=function(t,e,r){return void 0===r&&(r={}),s(t.map((function(t){return n(t,e)})),r)},e.polygon=a,e.polygons=function(t,e,r){return void 0===r&&(r={}),s(t.map((function(t){return a(t,e)})),r)},e.lineString=o,e.lineStrings=function(t,e,r){return void 0===r&&(r={}),s(t.map((function(t){return o(t,e)})),r)},e.featureCollection=s,e.multiLineString=l,e.multiPoint=h,e.multiPolygon=u,e.geometryCollection=function(t,e,r){return void 0===r&&(r={}),i({type:"GeometryCollection",geometries:t},e,r)},e.round=function(t,e){if(void 0===e&&(e=0),e&&!(0<=e))throw new Error("precision must be a positive number");var r=Math.pow(10,e||0);return Math.round(t*r)/r},e.radiansToLength=c,e.lengthToRadians=p,e.lengthToDegrees=function(t,e){return f(p(t,e))},e.bearingToAzimuth=function(t){var e=t%360;return e<0&&(e+=360),e},e.radiansToDegrees=f,e.degreesToRadians=function(t){return t%360*Math.PI/180},e.convertLength=function(t,e,r){if(void 0===e&&(e="kilometers"),void 0===r&&(r="kilometers"),!(0<=t))throw new Error("length must be a positive number");return c(p(t,e),r)},e.convertArea=function(t,r,i){if(void 0===r&&(r="meters"),void 0===i&&(i="kilometers"),!(0<=t))throw new Error("area must be a positive number");var n=e.areaFactors[r];if(!n)throw new Error("invalid original units");var a=e.areaFactors[i];if(!a)throw new Error("invalid final units");return t/n*a},e.isNumber=d,e.isObject=function(t){return!!t&&t.constructor===Object},e.validateBBox=function(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!d(t))throw new Error("bbox must only contain numbers")}))},e.validateId=function(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")},e.radians2degrees=function(){throw new Error("method has been renamed to `radiansToDegrees`")},e.degrees2radians=function(){throw new Error("method has been renamed to `degreesToRadians`")},e.distanceToDegrees=function(){throw new Error("method has been renamed to `lengthToDegrees`")},e.distanceToRadians=function(){throw new Error("method has been renamed to `lengthToRadians`")},e.radiansToDistance=function(){throw new Error("method has been renamed to `radiansToLength`")},e.bearingToAngle=function(){throw new Error("method has been renamed to `bearingToAzimuth`")},e.convertDistance=function(){throw new Error("method has been renamed to `convertLength`")}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(5);function n(t,e,r,i,n,a,o,s){var l,h,u,c,p={x:null,y:null,onLine1:!1,onLine2:!1};return 0==(l=(s-a)*(r-t)-(o-n)*(i-e))?null!==p.x&&null!==p.y&&p:(c=(r-t)*(h=e-a)-(i-e)*(u=t-n),h=((o-n)*h-(s-a)*u)/l,u=c/l,p.x=t+h*(r-t),p.y=e+h*(i-e),0<=h&&h<=1&&(p.onLine1=!0),0<=u&&u<=1&&(p.onLine2=!0),!(!p.onLine1||!p.onLine2)&&[p.x,p.y])}e.default=function(t){var e,r,a={type:"FeatureCollection",features:[]};if("LineString"===(r="Feature"===t.type?t.geometry:t).type)e=[r.coordinates];else if("MultiLineString"===r.type)e=r.coordinates;else if("MultiPolygon"===r.type)e=[].concat.apply([],r.coordinates);else{if("Polygon"!==r.type)throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");e=r.coordinates}return e.forEach((function(t){e.forEach((function(e){for(var r=0;r<t.length-1;r++)for(var o=r;o<e.length-1;o++){if(t===e){if(1===Math.abs(r-o))continue;if(0===r&&o===t.length-2&&t[r][0]===t[t.length-1][0]&&t[r][1]===t[t.length-1][1])continue}var s=n(t[r][0],t[r][1],t[r+1][0],t[r+1][1],e[o][0],e[o][1],e[o+1][0],e[o+1][1]);s&&a.features.push(i.point([s[0],s[1]]))}}))})),a}},function(t,e,r){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(5),a=r(40),o=i(r(138)),s=r(14),l=i(r(139));function h(t,e){var r=a.getCoords(t),i=a.getCoords(e);if(2!==r.length)throw new Error("<intersects> line1 must only contain 2 coordinates");if(2!==i.length)throw new Error("<intersects> line2 must only contain 2 coordinates");var o=r[0][0],s=r[0][1],l=r[1][0],h=r[1][1],u=i[0][0],c=i[0][1],p=i[1][0],f=i[1][1],d=(f-c)*(l-o)-(p-u)*(h-s);if(0==d)return null;var g=((p-u)*(s-c)-(f-c)*(o-u))/d,_=((l-o)*(s-c)-(h-s)*(o-u))/d;if(0<=g&&g<=1&&0<=_&&_<=1){var y=o+g*(l-o),m=s+g*(h-s);return n.point([y,m])}return null}e.default=function(t,e){var r={},i=[];if("LineString"===t.type&&(t=n.feature(t)),"LineString"===e.type&&(e=n.feature(e)),"Feature"===t.type&&"Feature"===e.type&&null!==t.geometry&&null!==e.geometry&&"LineString"===t.geometry.type&&"LineString"===e.geometry.type&&2===t.geometry.coordinates.length&&2===e.geometry.coordinates.length){var u=h(t,e);return u&&i.push(u),n.featureCollection(i)}var c=l.default();return c.load(o.default(e)),s.featureEach(o.default(t),(function(t){s.featureEach(c.search(t),(function(e){var n=h(t,e);if(n){var o=a.getCoords(n).join(",");r[o]||(r[o]=!0,i.push(n))}}))})),n.featureCollection(i)}},function(t,e,r){var i=r(17),n=r(75),a=r(76),o=i?i.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":o&&o in Object(t)?n(t):a(t)}},function(t,e,r){var i=r(63),n=r(64),a=r(65),o=r(66),s=r(67);function l(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var i=t[e];this.set(i[0],i[1])}}l.prototype.clear=i,l.prototype.delete=n,l.prototype.get=a,l.prototype.has=o,l.prototype.set=s,t.exports=l},function(t,e,r){var i=r(11);t.exports=function(t,e){for(var r=t.length;r--;)if(i(t[r][0],e))return r;return-1}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var i=r(15)(Object,"create");t.exports=i},function(t,e,r){var i=r(89);t.exports=function(t,e){var r=t.__data__;return i(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(5);function n(t,e,r){if(null!==t)for(var i,a,o,s,l,h,u,c,p=0,f=0,d=t.type,g="FeatureCollection"===d,_="Feature"===d,y=g?t.features.length:1,m=0;m<y;m++){l=(c=!!(u=g?t.features[m].geometry:_?t.geometry:t)&&"GeometryCollection"===u.type)?u.geometries.length:1;for(var v=0;v<l;v++){var b=0,k=0;if(null!==(s=c?u.geometries[v]:u)){h=s.coordinates;var L=s.type;switch(p=!r||"Polygon"!==L&&"MultiPolygon"!==L?0:1,L){case null:break;case"Point":if(!1===e(h,f,m,b,k))return!1;f++,b++;break;case"LineString":case"MultiPoint":for(i=0;i<h.length;i++){if(!1===e(h[i],f,m,b,k))return!1;f++,"MultiPoint"===L&&b++}"LineString"===L&&b++;break;case"Polygon":case"MultiLineString":for(i=0;i<h.length;i++){for(a=0;a<h[i].length-p;a++){if(!1===e(h[i][a],f,m,b,k))return!1;f++}"MultiLineString"===L&&b++,"Polygon"===L&&k++}"Polygon"===L&&b++;break;case"MultiPolygon":for(i=0;i<h.length;i++){for(a=k=0;a<h[i].length;a++){for(o=0;o<h[i][a].length-p;o++){if(!1===e(h[i][a][o],f,m,b,k))return!1;f++}k++}b++}break;case"GeometryCollection":for(i=0;i<s.geometries.length;i++)if(!1===n(s.geometries[i],e,r))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function a(t,e){var r;switch(t.type){case"FeatureCollection":for(r=0;r<t.features.length&&!1!==e(t.features[r].properties,r);r++);break;case"Feature":e(t.properties,0)}}function o(t,e){if("Feature"===t.type)e(t,0);else if("FeatureCollection"===t.type)for(var r=0;r<t.features.length&&!1!==e(t.features[r],r);r++);}function s(t,e){var r,i,n,a,o,s,l,h,u,c,p=0,f="FeatureCollection"===t.type,d="Feature"===t.type,g=f?t.features.length:1;for(r=0;r<g;r++){for(s=f?t.features[r].geometry:d?t.geometry:t,h=f?t.features[r].properties:d?t.properties:{},u=f?t.features[r].bbox:d?t.bbox:void 0,c=f?t.features[r].id:d?t.id:void 0,o=(l=!!s&&"GeometryCollection"===s.type)?s.geometries.length:1,n=0;n<o;n++)if(null!==(a=l?s.geometries[n]:s))switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===e(a,p,h,u,c))return!1;break;case"GeometryCollection":for(i=0;i<a.geometries.length;i++)if(!1===e(a.geometries[i],p,h,u,c))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===e(null,p,h,u,c))return!1;p++}}function l(t,e){s(t,(function(t,r,n,a,o){var s,l=null===t?null:t.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return!1!==e(i.feature(t,n,{bbox:a,id:o}),r,0)&&void 0}switch(l){case"MultiPoint":s="Point";break;case"MultiLineString":s="LineString";break;case"MultiPolygon":s="Polygon"}for(var h=0;h<t.coordinates.length;h++){var u={type:s,coordinates:t.coordinates[h]};if(!1===e(i.feature(u,n),r,h))return!1}}))}function h(t,e){l(t,(function(t,r,a){var o=0;if(t.geometry){var s=t.geometry.type;if("Point"!==s&&"MultiPoint"!==s){var l,h=0,u=0,c=0;return!1!==n(t,(function(n,s,p,f,d){if(void 0===l||h<r||u<f||c<d)return l=n,h=r,u=f,c=d,void(o=0);var g=i.lineString([l,n],t.properties);if(!1===e(g,r,a,d,o))return!1;o++,l=n}))&&void 0}}}))}function u(t,e){if(!t)throw new Error("geojson is required");l(t,(function(t,r,n){if(null!==t.geometry){var a=t.geometry.type,o=t.geometry.coordinates;switch(a){case"LineString":if(!1===e(t,r,n,0,0))return!1;break;case"Polygon":for(var s=0;s<o.length;s++)if(!1===e(i.lineString(o[s],t.properties),r,n,s))return!1}}}))}e.coordEach=n,e.coordReduce=function(t,e,r,i){var a=r;return n(t,(function(t,i,n,o,s){a=0===i&&void 0===r?t:e(a,t,i,n,o,s)}),i),a},e.propEach=a,e.propReduce=function(t,e,r){var i=r;return a(t,(function(t,n){i=0===n&&void 0===r?t:e(i,t,n)})),i},e.featureEach=o,e.featureReduce=function(t,e,r){var i=r;return o(t,(function(t,n){i=0===n&&void 0===r?t:e(i,t,n)})),i},e.coordAll=function(t){var e=[];return n(t,(function(t){e.push(t)})),e},e.geomEach=s,e.geomReduce=function(t,e,r){var i=r;return s(t,(function(t,n,a,o,s){i=0===n&&void 0===r?t:e(i,t,n,a,o,s)})),i},e.flattenEach=l,e.flattenReduce=function(t,e,r){var i=r;return l(t,(function(t,n,a){i=0===n&&0===a&&void 0===r?t:e(i,t,n,a)})),i},e.segmentEach=h,e.segmentReduce=function(t,e,r){var i=r,n=!1;return h(t,(function(t,a,o,s,l){i=!1===n&&void 0===r?t:e(i,t,a,o,s,l),n=!0})),i},e.lineEach=u,e.lineReduce=function(t,e,r){var i=r;return u(t,(function(t,n,a,o){i=0===n&&void 0===r?t:e(i,t,n,a,o)})),i},e.findSegment=function(t,e){if(e=e||{},!i.isObject(e))throw new Error("options is invalid");var r,n=e.featureIndex||0,a=e.multiFeatureIndex||0,o=e.geometryIndex||0,s=e.segmentIndex||0,l=e.properties;switch(t.type){case"FeatureCollection":n<0&&(n=t.features.length+n),l=l||t.features[n].properties,r=t.features[n].geometry;break;case"Feature":l=l||t.properties,r=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":r=t;break;default:throw new Error("geojson is invalid")}if(null===r)return null;var h=r.coordinates;switch(r.type){case"Point":case"MultiPoint":return null;case"LineString":return s<0&&(s=h.length+s-1),i.lineString([h[s],h[s+1]],l,e);case"Polygon":return o<0&&(o=h.length+o),s<0&&(s=h[o].length+s-1),i.lineString([h[o][s],h[o][s+1]],l,e);case"MultiLineString":return a<0&&(a=h.length+a),s<0&&(s=h[a].length+s-1),i.lineString([h[a][s],h[a][s+1]],l,e);case"MultiPolygon":return a<0&&(a=h.length+a),o<0&&(o=h[a].length+o),s<0&&(s=h[a][o].length-s-1),i.lineString([h[a][o][s],h[a][o][s+1]],l,e)}throw new Error("geojson is invalid")},e.findPoint=function(t,e){if(e=e||{},!i.isObject(e))throw new Error("options is invalid");var r,n=e.featureIndex||0,a=e.multiFeatureIndex||0,o=e.geometryIndex||0,s=e.coordIndex||0,l=e.properties;switch(t.type){case"FeatureCollection":n<0&&(n=t.features.length+n),l=l||t.features[n].properties,r=t.features[n].geometry;break;case"Feature":l=l||t.properties,r=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":r=t;break;default:throw new Error("geojson is invalid")}if(null===r)return null;var h=r.coordinates;switch(r.type){case"Point":return i.point(h,l,e);case"MultiPoint":return a<0&&(a=h.length+a),i.point(h[a],l,e);case"LineString":return s<0&&(s=h.length+s),i.point(h[s],l,e);case"Polygon":return o<0&&(o=h.length+o),s<0&&(s=h[o].length+s),i.point(h[o][s],l,e);case"MultiLineString":return a<0&&(a=h.length+a),s<0&&(s=h[a].length+s),i.point(h[a][s],l,e);case"MultiPolygon":return a<0&&(a=h.length+a),o<0&&(o=h[a].length+o),s<0&&(s=h[a][o].length-s),i.point(h[a][o][s],l,e)}throw new Error("geojson is invalid")}},function(t,e,r){var i=r(73),n=r(80);t.exports=function(t,e){var r=n(t,e);return i(r)?r:void 0}},function(t,e,r){var i=r(8),n=r(1);t.exports=function(t){if(!n(t))return!1;var e=i(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,r){var i=r(2).Symbol;t.exports=i},function(t,e,r){var i=r(30);t.exports=function(t,e,r){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){var i=r(104),n=r(3),a=Object.prototype,o=a.hasOwnProperty,s=a.propertyIsEnumerable,l=i(function(){return arguments}())?i:function(t){return n(t)&&o.call(t,"callee")&&!s.call(t,"callee")};t.exports=l},function(t,e,r){var i=r(16),n=r(22);t.exports=function(t){return null!=t&&n(t.length)&&!i(t)}},function(t,e){t.exports=function(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991}},function(t,e){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var i=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==i||"symbol"!=i&&r.test(t))&&-1<t&&t%1==0&&t<e}},function(t,e,r){var i=r(8),n=r(3);t.exports=function(t){return"symbol"==typeof t||n(t)&&"[object Symbol]"==i(t)}},function(t,e,r){(function(e){t.exports=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}var n=function e(r,i){t(this,e),this.next=null,this.key=r,this.data=i,this.left=null,this.right=null};function a(t,e){return e<t?1:t<e?-1:0}function o(t,e,r){for(var i=new n(null,null),a=i,o=i;;){var s=r(t,e.key);if(s<0){if(null===e.left)break;if(r(t,e.left.key)<0){var l=e.left;if(e.left=l.right,l.right=e,null===(e=l).left)break}o.left=e,e=(o=e).left}else{if(!(0<s))break;if(null===e.right)break;if(0<r(t,e.right.key)){var h=e.right;if(e.right=h.left,h.left=e,null===(e=h).right)break}a.right=e,e=(a=e).right}}return a.right=e.left,o.left=e.right,e.left=i.right,e.right=i.left,e}function s(t,e,r,i){var a=new n(t,e);if(null===r)return a.left=a.right=null,a;var s=i(t,(r=o(t,r,i)).key);return s<0?(a.left=r.left,(a.right=r).left=null):0<=s&&(a.right=r.right,(a.left=r).right=null),a}function l(t,e,r){var i=null,n=null;if(e){var a=r((e=o(t,e,r)).key,t);0===a?(i=e.left,n=e.right):a<0?(n=e.right,e.right=null,i=e):(i=e.left,e.left=null,n=e)}return{left:i,right:n}}var h=function(){function e(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:a;t(this,e),this._root=null,this._size=0,this._comparator=r}return i(e,[{key:"insert",value:function(t,e){return this._size++,this._root=s(t,e,this._root,this._comparator)}},{key:"add",value:function(t,e){var r=new n(t,e);null===this._root&&(r.left=r.right=null,this._size++,this._root=r);var i=this._comparator,a=o(t,this._root,i),s=i(t,a.key);return 0===s?this._root=a:(s<0?(r.left=a.left,(r.right=a).left=null):0<s&&(r.right=a.right,(r.left=a).right=null),this._size++,this._root=r),this._root}},{key:"remove",value:function(t){this._root=this._remove(t,this._root,this._comparator)}},{key:"_remove",value:function(t,e,r){var i;return null===e?null:0===r(t,(e=o(t,e,r)).key)?(null===e.left?i=e.right:(i=o(t,e.left,r)).right=e.right,this._size--,i):e}},{key:"pop",value:function(){var t=this._root;if(t){for(;t.left;)t=t.left;return this._root=o(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null}},{key:"findStatic",value:function(t){for(var e=this._root,r=this._comparator;e;){var i=r(t,e.key);if(0===i)return e;e=i<0?e.left:e.right}return null}},{key:"find",value:function(t){return this._root&&(this._root=o(t,this._root,this._comparator),0!==this._comparator(t,this._root.key))?null:this._root}},{key:"contains",value:function(t){for(var e=this._root,r=this._comparator;e;){var i=r(t,e.key);if(0===i)return!0;e=i<0?e.left:e.right}return!1}},{key:"forEach",value:function(t,e){for(var r=this._root,i=[],n=!1;!n;)null!==r?(i.push(r),r=r.left):0!==i.length?(r=i.pop(),t.call(e,r),r=r.right):n=!0;return this}},{key:"range",value:function(t,e,r,i){for(var n=[],a=this._comparator,o=this._root;0!==n.length||o;)if(o)n.push(o),o=o.left;else{if(0<a((o=n.pop()).key,e))break;if(0<=a(o.key,t)&&r.call(i,o))return this;o=o.right}return this}},{key:"keys",value:function(){var t=[];return this.forEach((function(e){var r=e.key;return t.push(r)})),t}},{key:"values",value:function(){var t=[];return this.forEach((function(e){var r=e.data;return t.push(r)})),t}},{key:"min",value:function(){return this._root?this.minNode(this._root).key:null}},{key:"max",value:function(){return this._root?this.maxNode(this._root).key:null}},{key:"minNode",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this._root;if(t)for(;t.left;)t=t.left;return t}},{key:"maxNode",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this._root;if(t)for(;t.right;)t=t.right;return t}},{key:"at",value:function(t){for(var e=this._root,r=!1,i=0,n=[];!r;)if(e)n.push(e),e=e.left;else if(0<n.length){if(e=n.pop(),i===t)return e;i++,e=e.right}else r=!0;return null}},{key:"next",value:function(t){var e=this._root,r=null;if(t.right){for(r=t.right;r.left;)r=r.left;return r}for(var i=this._comparator;e;){var n=i(t.key,e.key);if(0===n)break;e=n<0?(r=e).left:e.right}return r}},{key:"prev",value:function(t){var e=this._root,r=null;if(null!==t.left){for(r=t.left;r.right;)r=r.right;return r}for(var i=this._comparator;e;){var n=i(t.key,e.key);if(0===n)break;e=n<0?e.left:(r=e).right}return r}},{key:"clear",value:function(){return this._root=null,this._size=0,this}},{key:"toList",value:function(){return function(t){for(var e=t,r=[],i=!1,a=new n(null,null),o=a;!i;)e?(r.push(e),e=e.left):0<r.length?e=(e=o=o.next=r.pop()).right:i=!0;return o.next=null,a.next}(this._root)}},{key:"load",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],r=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=t.length,a=this._comparator;if(r&&function t(e,r,i,n,a){if(!(n<=i)){for(var o=e[i+n>>1],s=i-1,l=n+1;;){for(;a(e[++s],o)<0;);for(;0<a(e[--l],o););if(l<=s)break;var h=e[s];e[s]=e[l],e[l]=h,h=r[s],r[s]=r[l],r[l]=h}t(e,r,i,l,a),t(e,r,l+1,n,a)}}(t,e,0,i-1,a),null===this._root)this._root=function t(e,r,i,a){var o=a-i;if(0<o){var s=i+Math.floor(o/2),l=e[s],h=r[s],u=new n(l,h);return u.left=t(e,r,i,s),u.right=t(e,r,s+1,a),u}return null}(t,e,0,i),this._size=i;else{var o=function(t,e,r){for(var i=new n(null,null),a=i,o=t,s=e;null!==o&&null!==s;)r(o.key,s.key)<0?o=(a.next=o).next:s=(a.next=s).next,a=a.next;return null!==o?a.next=o:null!==s&&(a.next=s),i.next}(this.toList(),function(t,e){for(var r=new n(null,null),i=r,a=0;a<t.length;a++)i=i.next=new n(t[a],e[a]);return i.next=null,r.next}(t,e),a);i=this._size+i,this._root=function t(e,r,i){var n=i-r;if(0<n){var a=r+Math.floor(n/2),o=t(e,r,a),s=e.head;return s.left=o,e.head=e.head.next,s.right=t(e,a+1,i),s}return null}({head:o},0,i)}return this}},{key:"isEmpty",value:function(){return null===this._root}},{key:"toString",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(t){return String(t.key)},e=[];return function t(e,r,i,n,a){if(e){n("".concat(r).concat(i?"└── ":"├── ").concat(a(e),"\n"));var o=r+(i?"    ":"│   ");e.left&&t(e.left,o,!1,n,a),e.right&&t(e.right,o,!0,n,a)}}(this._root,"",!0,(function(t){return e.push(t)}),t),e.join("")}},{key:"update",value:function(t,e,r){var i=this._comparator,n=l(t,this._root,i),a=n.left,h=n.right;i(t,e)<0?h=s(e,r,h,i):a=s(e,r,a,i),this._root=function(t,e,r){return null===e?t:(null===t||((e=o(t.key,e,r)).left=t),e)}(a,h,i)}},{key:"split",value:function(t){return l(t,this._root,this._comparator)}},{key:"size",get:function(){return this._size}},{key:"root",get:function(){return this._root}}]),e}(),u=function(t,e){return t.ll.x<=e.x&&e.x<=t.ur.x&&t.ll.y<=e.y&&e.y<=t.ur.y},c=function(t,e){if(e.ur.x<t.ll.x||t.ur.x<e.ll.x||e.ur.y<t.ll.y||t.ur.y<e.ll.y)return null;var r=t.ll.x<e.ll.x?e.ll.x:t.ll.x,i=t.ur.x<e.ur.x?t.ur.x:e.ur.x;return{ll:{x:r,y:t.ll.y<e.ll.y?e.ll.y:t.ll.y},ur:{x:i,y:t.ur.y<e.ur.y?t.ur.y:e.ur.y}}},p=Number.EPSILON;void 0===p&&(p=Math.pow(2,-52));var f=p*p,d=function(t,e){if(-p<t&&t<p&&-p<e&&e<p)return 0;var r=t-e;return r*r<f*t*e?0:t<e?-1:1},g=function(){function e(){t(this,e),this.reset()}return i(e,[{key:"reset",value:function(){this.xRounder=new _,this.yRounder=new _}},{key:"round",value:function(t,e){return{x:this.xRounder.round(t),y:this.yRounder.round(e)}}}]),e}(),_=function(){function e(){t(this,e),this.tree=new h,this.round(0)}return i(e,[{key:"round",value:function(t){var e=this.tree.add(t),r=this.tree.prev(e);if(null!==r&&0===d(e.key,r.key))return this.tree.remove(t),r.key;var i=this.tree.next(e);return null!==i&&0===d(e.key,i.key)?(this.tree.remove(t),i.key):t}}]),e}(),y=new g,m=function(t,e){return t.x*e.y-t.y*e.x},v=function(t,e){return t.x*e.x+t.y*e.y},b=function(t,e,r){var i={x:e.x-t.x,y:e.y-t.y},n={x:r.x-t.x,y:r.y-t.y},a=m(i,n);return d(a,0)},k=function(t){return Math.sqrt(v(t,t))},L=function(t,e,r){var i={x:e.x-t.x,y:e.y-t.y},n={x:r.x-t.x,y:r.y-t.y};return m(n,i)/k(n)/k(i)},M=function(t,e,r){var i={x:e.x-t.x,y:e.y-t.y},n={x:r.x-t.x,y:r.y-t.y};return v(n,i)/k(n)/k(i)},w=function(t,e,r){return 0===e.y?null:{x:t.x+e.x/e.y*(r-t.y),y:r}},x=function(t,e,r){return 0===e.x?null:{x:r,y:t.y+e.y/e.x*(r-t.x)}},S=function(){function e(r,i){t(this,e),void 0===r.events?r.events=[this]:r.events.push(this),this.point=r,this.isLeft=i}return i(e,null,[{key:"compare",value:function(t,r){var i=e.comparePoints(t.point,r.point);return 0!==i?i:(t.point!==r.point&&t.link(r),t.isLeft!==r.isLeft?t.isLeft?1:-1:E.compare(t.segment,r.segment))}},{key:"comparePoints",value:function(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}}]),i(e,[{key:"link",value:function(t){if(t.point===this.point)throw new Error("Tried to link already linked events");for(var e=t.point.events,r=0,i=e.length;r<i;r++){var n=e[r];this.point.events.push(n),n.point=this.point}this.checkForConsuming()}},{key:"checkForConsuming",value:function(){for(var t=this.point.events.length,e=0;e<t;e++){var r=this.point.events[e];if(void 0===r.segment.consumedBy)for(var i=e+1;i<t;i++){var n=this.point.events[i];void 0===n.consumedBy&&r.otherSE.point.events===n.otherSE.point.events&&r.segment.consume(n.segment)}}}},{key:"getAvailableLinkedEvents",value:function(){for(var t=[],e=0,r=this.point.events.length;e<r;e++){var i=this.point.events[e];i!==this&&!i.segment.ringOut&&i.segment.isInResult()&&t.push(i)}return t}},{key:"getLeftmostComparator",value:function(t){var e=this,r=new Map,i=function(i){var n=i.otherSE;r.set(i,{sine:L(e.point,t.point,n.point),cosine:M(e.point,t.point,n.point)})};return function(t,e){r.has(t)||i(t),r.has(e)||i(e);var n=r.get(t),a=n.sine,o=n.cosine,s=r.get(e),l=s.sine,h=s.cosine;return 0<=a&&0<=l?o<h?1:h<o?-1:0:a<0&&l<0?o<h?-1:h<o?1:0:l<a?-1:a<l?1:0}}}]),e}(),C=0,E=function(){function e(r,i,n,a){t(this,e),this.id=++C,(this.leftSE=r).segment=this,r.otherSE=i,(this.rightSE=i).segment=this,i.otherSE=r,this.rings=n,this.windings=a}return i(e,null,[{key:"compare",value:function(t,e){var r=t.leftSE.point.x,i=e.leftSE.point.x,n=t.rightSE.point.x,a=e.rightSE.point.x;if(a<r)return 1;if(n<i)return-1;var o=t.leftSE.point.y,s=e.leftSE.point.y,l=t.rightSE.point.y,h=e.rightSE.point.y;if(r<i){if(s<o&&s<l)return 1;if(o<s&&l<s)return-1;var u=t.comparePoint(e.leftSE.point);if(u<0)return 1;if(0<u)return-1;var c=e.comparePoint(t.rightSE.point);return 0!==c?c:-1}if(i<r){if(o<s&&o<h)return-1;if(s<o&&h<o)return 1;var p=e.comparePoint(t.leftSE.point);if(0!==p)return p;var f=t.comparePoint(e.rightSE.point);return f<0?1:0<f?-1:1}if(o<s)return-1;if(s<o)return 1;if(n<a){var d=e.comparePoint(t.rightSE.point);if(0!==d)return d}if(a<n){var g=t.comparePoint(e.rightSE.point);if(g<0)return 1;if(0<g)return-1}if(n!==a){var _=l-o,y=n-r,m=h-s,v=a-i;if(y<_&&m<v)return 1;if(_<y&&v<m)return-1}return a<n?1:n<a||l<h?-1:h<l?1:t.id<e.id?-1:t.id>e.id?1:0}}]),i(e,[{key:"replaceRightSE",value:function(t){this.rightSE=t,(this.rightSE.segment=this).rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}},{key:"bbox",value:function(){var t=this.leftSE.point.y,e=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<e?t:e},ur:{x:this.rightSE.point.x,y:e<t?t:e}}}},{key:"vector",value:function(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}},{key:"isAnEndpoint",value:function(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y}},{key:"comparePoint",value:function(t){if(this.isAnEndpoint(t))return 0;var e=this.leftSE.point,r=this.rightSE.point,i=this.vector();if(e.x===r.x)return t.x===e.x?0:t.x<e.x?1:-1;var n=(t.y-e.y)/i.y,a=e.x+n*i.x;if(t.x===a)return 0;var o=(t.x-e.x)/i.x,s=e.y+o*i.y;return t.y===s?0:t.y<s?-1:1}},{key:"getIntersection",value:function(t){var e=this.bbox(),r=t.bbox(),i=c(e,r);if(null===i)return null;var n=this.leftSE.point,a=this.rightSE.point,o=t.leftSE.point,s=t.rightSE.point,l=u(e,o)&&0===this.comparePoint(o),h=u(r,n)&&0===t.comparePoint(n),p=u(e,s)&&0===this.comparePoint(s),f=u(r,a)&&0===t.comparePoint(a);if(h&&l)return f&&!p?a:!f&&p?s:null;if(h)return p&&n.x===s.x&&n.y===s.y?null:n;if(l)return f&&a.x===o.x&&a.y===o.y?null:o;if(f&&p)return null;if(f)return a;if(p)return s;var d=function(t,e,r,i){if(0===e.x)return x(r,i,t.x);if(0===i.x)return x(t,e,r.x);if(0===e.y)return w(r,i,t.y);if(0===i.y)return w(t,e,r.y);var n=m(e,i);if(0==n)return null;var a={x:r.x-t.x,y:r.y-t.y},o=m(a,e)/n,s=m(a,i)/n;return{x:(t.x+s*e.x+(r.x+o*i.x))/2,y:(t.y+s*e.y+(r.y+o*i.y))/2}}(n,this.vector(),o,t.vector());return null===d?null:u(i,d)?y.round(d.x,d.y):null}},{key:"split",value:function(t){var r=[],i=void 0!==t.events,n=new S(t,!0),a=new S(t,!1),o=this.rightSE;this.replaceRightSE(a),r.push(a),r.push(n);var s=new e(n,o,this.rings.slice(),this.windings.slice());return 0<S.comparePoints(s.leftSE.point,s.rightSE.point)&&s.swapEvents(),0<S.comparePoints(this.leftSE.point,this.rightSE.point)&&this.swapEvents(),i&&(n.checkForConsuming(),a.checkForConsuming()),r}},{key:"swapEvents",value:function(){var t=this.rightSE;this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(var e=0,r=this.windings.length;e<r;e++)this.windings[e]*=-1}},{key:"consume",value:function(t){for(var r=this,i=t;r.consumedBy;)r=r.consumedBy;for(;i.consumedBy;)i=i.consumedBy;var n=e.compare(r,i);if(0!==n){if(0<n){var a=r;r=i,i=a}if(r.prev===i){var o=r;r=i,i=o}for(var s=0,l=i.rings.length;s<l;s++){var h=i.rings[s],u=i.windings[s],c=r.rings.indexOf(h);-1===c?(r.rings.push(h),r.windings.push(u)):r.windings[c]+=u}i.rings=null,i.windings=null,i.consumedBy=r,i.leftSE.consumedBy=r.leftSE,i.rightSE.consumedBy=r.rightSE}}},{key:"prevInResult",value:function(){return void 0!==this._prevInResult||(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult}},{key:"beforeState",value:function(){if(void 0!==this._beforeState)return this._beforeState;if(this.prev){var t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}else this._beforeState={rings:[],windings:[],multiPolys:[]};return this._beforeState}},{key:"afterState",value:function(){if(void 0!==this._afterState)return this._afterState;var t=this.beforeState();this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};for(var e=this._afterState.rings,r=this._afterState.windings,i=this._afterState.multiPolys,n=0,a=this.rings.length;n<a;n++){var o=this.rings[n],s=this.windings[n],l=e.indexOf(o);-1===l?(e.push(o),r.push(s)):r[l]+=s}for(var h=[],u=[],c=0,p=e.length;c<p;c++)if(0!==r[c]){var f=e[c],d=f.poly;if(-1===u.indexOf(d))if(f.isExterior)h.push(d);else{-1===u.indexOf(d)&&u.push(d);var g=h.indexOf(f.poly);-1!==g&&h.splice(g,1)}}for(var _=0,y=h.length;_<y;_++){var m=h[_].multiPoly;-1===i.indexOf(m)&&i.push(m)}return this._afterState}},{key:"isInResult",value:function(){if(this.consumedBy)return!1;if(void 0!==this._isInResult)return this._isInResult;var t=this.beforeState().multiPolys,e=this.afterState().multiPolys;switch(A.type){case"union":var r=0===t.length,i=0===e.length;this._isInResult=r!=i;break;case"intersection":var n,a;a=t.length<e.length?(n=t.length,e.length):(n=e.length,t.length),this._isInResult=a===A.numMultiPolys&&n<a;break;case"xor":var o=Math.abs(t.length-e.length);this._isInResult=o%2==1;break;case"difference":var s=function(t){return 1===t.length&&t[0].isSubject};this._isInResult=s(t)!==s(e);break;default:throw new Error("Unrecognized operation type found ".concat(A.type))}return this._isInResult}}],[{key:"fromRing",value:function(t,r,i){var n,a,o,s=S.comparePoints(t,r);if(s<0)n=t,a=r,o=1;else{if(!(0<s))throw new Error("Tried to create degenerate segment at [".concat(t.x,", ").concat(t.y,"]"));n=r,a=t,o=-1}return new e(new S(n,!0),new S(a,!1),[i],[o])}}]),e}(),P=function(){function e(r,i,n){if(t(this,e),!Array.isArray(r)||0===r.length)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=i,this.isExterior=n,this.segments=[],"number"!=typeof r[0][0]||"number"!=typeof r[0][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var a=y.round(r[0][0],r[0][1]);this.bbox={ll:{x:a.x,y:a.y},ur:{x:a.x,y:a.y}};for(var o=a,s=1,l=r.length;s<l;s++){if("number"!=typeof r[s][0]||"number"!=typeof r[s][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var h=y.round(r[s][0],r[s][1]);h.x===o.x&&h.y===o.y||(this.segments.push(E.fromRing(o,h,this)),h.x<this.bbox.ll.x&&(this.bbox.ll.x=h.x),h.y<this.bbox.ll.y&&(this.bbox.ll.y=h.y),h.x>this.bbox.ur.x&&(this.bbox.ur.x=h.x),h.y>this.bbox.ur.y&&(this.bbox.ur.y=h.y),o=h)}a.x===o.x&&a.y===o.y||this.segments.push(E.fromRing(o,a,this))}return i(e,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,r=this.segments.length;e<r;e++){var i=this.segments[e];t.push(i.leftSE),t.push(i.rightSE)}return t}}]),e}(),B=function(){function e(r,i){if(t(this,e),!Array.isArray(r))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new P(r[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(var n=1,a=r.length;n<a;n++){var o=new P(r[n],this,!1);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.interiorRings.push(o)}this.multiPoly=i}return i(e,[{key:"getSweepEvents",value:function(){for(var t=this.exteriorRing.getSweepEvents(),e=0,r=this.interiorRings.length;e<r;e++)for(var i=this.interiorRings[e].getSweepEvents(),n=0,a=i.length;n<a;n++)t.push(i[n]);return t}}]),e}(),O=function(){function e(r,i){if(t(this,e),!Array.isArray(r))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{"number"==typeof r[0][0][0]&&(r=[r])}catch(t){}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(var n=0,a=r.length;n<a;n++){var o=new B(r[n],this);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.polys.push(o)}this.isSubject=i}return i(e,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,r=this.polys.length;e<r;e++)for(var i=this.polys[e].getSweepEvents(),n=0,a=i.length;n<a;n++)t.push(i[n]);return t}}]),e}(),D=function(){function e(r){t(this,e),this.events=r;for(var i=0,n=r.length;i<n;i++)r[i].segment.ringOut=this;this.poly=null}return i(e,null,[{key:"factory",value:function(t){for(var r=[],i=0,n=t.length;i<n;i++){var a=t[i];if(a.isInResult()&&!a.ringOut){for(var o=null,s=a.leftSE,l=a.rightSE,h=[s],u=s.point,c=[];o=s,s=l,h.push(s),s.point!==u;)for(;;){var p=s.getAvailableLinkedEvents();if(0===p.length){var f=h[0].point,d=h[h.length-1].point;throw new Error("Unable to complete output ring starting at [".concat(f.x,",")+" ".concat(f.y,"]. Last matching segment found ends at")+" [".concat(d.x,", ").concat(d.y,"]."))}if(1===p.length){l=p[0].otherSE;break}for(var g=null,_=0,y=c.length;_<y;_++)if(c[_].point===s.point){g=_;break}if(null===g){c.push({index:h.length,point:s.point});var m=s.getLeftmostComparator(o);l=p.sort(m)[0].otherSE;break}var v=c.splice(g)[0],b=h.splice(v.index);b.unshift(b[0].otherSE),r.push(new e(b.reverse()))}r.push(new e(h))}}return r}}]),i(e,[{key:"getGeom",value:function(){for(var t=this.events[0].point,e=[t],r=1,i=this.events.length-1;r<i;r++){var n=this.events[r].point,a=this.events[r+1].point;0!==b(n,t,a)&&(e.push(n),t=n)}if(1===e.length)return null;var o=e[0],s=e[1];0===b(o,t,s)&&e.shift(),e.push(e[0]);for(var l=this.isExteriorRing()?1:-1,h=this.isExteriorRing()?0:e.length-1,u=this.isExteriorRing()?e.length:-1,c=[],p=h;p!=u;p+=l)c.push([e[p].x,e[p].y]);return c}},{key:"isExteriorRing",value:function(){if(void 0===this._isExteriorRing){var t=this.enclosingRing();this._isExteriorRing=!t||!t.isExteriorRing()}return this._isExteriorRing}},{key:"enclosingRing",value:function(){return void 0===this._enclosingRing&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}},{key:"_calcEnclosingRing",value:function(){for(var t=this.events[0],e=1,r=this.events.length;e<r;e++){var i=this.events[e];0<S.compare(t,i)&&(t=i)}for(var n=t.segment.prevInResult(),a=n?n.prevInResult():null;;){if(!n)return null;if(!a)return n.ringOut;if(a.ringOut!==n.ringOut)return a.ringOut.enclosingRing()!==n.ringOut?n.ringOut:n.ringOut.enclosingRing();a=(n=a.prevInResult())?n.prevInResult():null}}}]),e}(),T=function(){function e(r){t(this,e),((this.exteriorRing=r).poly=this).interiorRings=[]}return i(e,[{key:"addInterior",value:function(t){this.interiorRings.push(t),t.poly=this}},{key:"getGeom",value:function(){var t=[this.exteriorRing.getGeom()];if(null===t[0])return null;for(var e=0,r=this.interiorRings.length;e<r;e++){var i=this.interiorRings[e].getGeom();null!==i&&t.push(i)}return t}}]),e}(),j=function(){function e(r){t(this,e),this.rings=r,this.polys=this._composePolys(r)}return i(e,[{key:"getGeom",value:function(){for(var t=[],e=0,r=this.polys.length;e<r;e++){var i=this.polys[e].getGeom();null!==i&&t.push(i)}return t}},{key:"_composePolys",value:function(t){for(var e=[],r=0,i=t.length;r<i;r++){var n=t[r];if(!n.poly)if(n.isExteriorRing())e.push(new T(n));else{var a=n.enclosingRing();a.poly||e.push(new T(a)),a.poly.addInterior(n)}}return e}}]),e}(),R=function(){function e(r){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:E.compare;t(this,e),this.queue=r,this.tree=new h(i),this.segments=[]}return i(e,[{key:"process",value:function(t){var e=t.segment,r=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):this.tree.remove(e),r;var i=t.isLeft?this.tree.insert(e):this.tree.find(e);if(!i)throw new Error("Unable to find segment #".concat(e.id," ")+"[".concat(e.leftSE.point.x,", ").concat(e.leftSE.point.y,"] -> ")+"[".concat(e.rightSE.point.x,", ").concat(e.rightSE.point.y,"] ")+"in SweepLine tree. Please submit a bug report.");for(var n=i,a=i,o=void 0,s=void 0;void 0===o;)null===(n=this.tree.prev(n))?o=null:void 0===n.key.consumedBy&&(o=n.key);for(;void 0===s;)null===(a=this.tree.next(a))?s=null:void 0===a.key.consumedBy&&(s=a.key);if(t.isLeft){var l=null;if(o){var h=o.getIntersection(e);if(null!==h&&(e.isAnEndpoint(h)||(l=h),!o.isAnEndpoint(h)))for(var u=this._splitSafely(o,h),c=0,p=u.length;c<p;c++)r.push(u[c])}var f=null;if(s){var d=s.getIntersection(e);if(null!==d&&(e.isAnEndpoint(d)||(f=d),!s.isAnEndpoint(d)))for(var g=this._splitSafely(s,d),_=0,y=g.length;_<y;_++)r.push(g[_])}if(null!==l||null!==f){var m=null;if(null===l)m=f;else if(null===f)m=l;else{m=S.comparePoints(l,f)<=0?l:f}this.queue.remove(e.rightSE),r.push(e.rightSE);for(var v=e.split(m),b=0,k=v.length;b<k;b++)r.push(v[b])}0<r.length?(this.tree.remove(e),r.push(t)):(this.segments.push(e),e.prev=o)}else{if(o&&s){var L=o.getIntersection(s);if(null!==L){if(!o.isAnEndpoint(L))for(var M=this._splitSafely(o,L),w=0,x=M.length;w<x;w++)r.push(M[w]);if(!s.isAnEndpoint(L))for(var C=this._splitSafely(s,L),E=0,P=C.length;E<P;E++)r.push(C[E])}}this.tree.remove(e)}return r}},{key:"_splitSafely",value:function(t,e){this.tree.remove(t);var r=t.rightSE;this.queue.remove(r);var i=t.split(e);return i.push(r),void 0===t.consumedBy&&this.tree.insert(t),i}}]),e}(),I=void 0!==e&&e.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,G=void 0!==e&&e.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6,A=new(function(){function e(){t(this,e)}return i(e,[{key:"run",value:function(t,e,r){A.type=t,y.reset();for(var i=[new O(e,!0)],n=0,a=r.length;n<a;n++)i.push(new O(r[n],!1));if(A.numMultiPolys=i.length,"difference"===A.type)for(var o=i[0],s=1;s<i.length;)null!==c(i[s].bbox,o.bbox)?s++:i.splice(s,1);if("intersection"===A.type)for(var l=0,u=i.length;l<u;l++)for(var p=i[l],f=l+1,d=i.length;f<d;f++)if(null===c(p.bbox,i[f].bbox))return[];for(var g=new h(S.compare),_=0,m=i.length;_<m;_++)for(var v=i[_].getSweepEvents(),b=0,k=v.length;b<k;b++)if(g.insert(v[b]),g.size>I)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");for(var L=new R(g),M=g.size,w=g.pop();w;){var x=w.key;if(g.size===M){var C=x.segment;throw new Error("Unable to pop() ".concat(x.isLeft?"left":"right"," SweepEvent ")+"[".concat(x.point.x,", ").concat(x.point.y,"] from segment #").concat(C.id," ")+"[".concat(C.leftSE.point.x,", ").concat(C.leftSE.point.y,"] -> ")+"[".concat(C.rightSE.point.x,", ").concat(C.rightSE.point.y,"] from queue. ")+"Please file a bug report.")}if(g.size>I)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");if(L.segments.length>G)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");for(var E=L.process(x),P=0,B=E.length;P<B;P++){var T=E[P];void 0===T.consumedBy&&g.insert(T)}M=g.size,w=g.pop()}y.reset();var N=D.factory(L.segments);return new j(N).getGeom()}}]),e}());return{union:function(t){for(var e=arguments.length,r=new Array(1<e?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return A.run("union",t,r)},intersection:function(t){for(var e=arguments.length,r=new Array(1<e?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return A.run("intersection",t,r)},xor:function(t){for(var e=arguments.length,r=new Array(1<e?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return A.run("xor",t,r)},difference:function(t){for(var e=arguments.length,r=new Array(1<e?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return A.run("difference",t,r)}}}()}).call(this,r(137))},function(t,e,r){var i=r(15)(r(2),"Map");t.exports=i},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(74))},function(t,e,r){var i=r(81),n=r(88),a=r(90),o=r(91),s=r(92);function l(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var i=t[e];this.set(i[0],i[1])}}l.prototype.clear=i,l.prototype.delete=n,l.prototype.get=a,l.prototype.has=o,l.prototype.set=s,t.exports=l},function(t,e,r){var i=r(18),n=r(11);t.exports=function(t,e,r){(void 0===r||n(t[e],r))&&(void 0!==r||e in t)||i(t,e,r)}},function(t,e,r){var i=r(15),n=function(){try{var t=i(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=n},function(t,e,r){var i=r(103)(Object.getPrototypeOf,Object);t.exports=i},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){(function(t){var i=r(2),n=r(106),a=e&&!e.nodeType&&e,o=a&&"object"==typeof t&&t&&!t.nodeType&&t,s=o&&o.exports===a?i.Buffer:void 0,l=(s?s.isBuffer:void 0)||n;t.exports=l}).call(this,r(19)(t))},function(t,e,r){var i=r(108),n=r(109),a=r(110),o=a&&a.isTypedArray,s=o?n(o):i;t.exports=s},function(t,e){t.exports=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}},function(t,e,r){var i=r(114),n=r(116),a=r(21);t.exports=function(t){return a(t)?i(t,!0):n(t)}},function(t,e){t.exports=function(t){return t}},function(t,e,r){var i=r(4),n=r(128),a=r(129),o=r(132);t.exports=function(t,e){return i(t)?t:n(t,e)?[t]:a(o(t))}},function(t,e,r){var i=r(24);t.exports=function(t){if("string"==typeof t||i(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(5);e.getCoord=function(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates}if(Array.isArray(t)&&2<=t.length&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")},e.getCoords=function(t){if(Array.isArray(t))return t;if("Feature"===t.type){if(null!==t.geometry)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")},e.containsNumber=function t(e){if(1<e.length&&i.isNumber(e[0])&&i.isNumber(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return t(e[0]);throw new Error("coordinates must only contain numbers")},e.geojsonType=function(t,e,r){if(!e||!r)throw new Error("type and name required");if(!t||t.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.type)},e.featureOf=function(t,e,r){if(!t)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!t||"Feature"!==t.type||!t.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.geometry.type)},e.collectionOf=function(t,e,r){if(!t)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!t||"FeatureCollection"!==t.type)throw new Error("Invalid input to "+r+", FeatureCollection required");for(var i=0,n=t.features;i<n.length;i++){var a=n[i];if(!a||"Feature"!==a.type||!a.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!a.geometry||a.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+a.geometry.type)}},e.getGeom=function(t){return"Feature"===t.type?t.geometry:t},e.getType=function(t,e){return"FeatureCollection"===t.type?"FeatureCollection":"GeometryCollection"===t.type?"GeometryCollection":"Feature"===t.type&&null!==t.geometry?t.geometry.type:t.type}},function(t){t.exports=JSON.parse('{"a":"2.7.0"}')},function(t,e,r){var i=r(61),n=r(118)((function(t,e,r){i(t,e,r)}));t.exports=n},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Click to place marker","firstVertex":"Click to place first vertex","continueLine":"Click to continue drawing","finishLine":"Click any existing marker to finish","finishPoly":"Click first marker to finish","finishRect":"Click to finish","startCircle":"Click to place circle center","finishCircle":"Click to finish circle","placeCircleMarker":"Click to place circle marker"},"actions":{"finish":"Finish","cancel":"Cancel","removeLastVertex":"Remove Last Vertex"},"buttonTitles":{"drawMarkerButton":"Draw Marker","drawPolyButton":"Draw Polygons","drawLineButton":"Draw Polyline","drawCircleButton":"Draw Circle","drawRectButton":"Draw Rectangle","editButton":"Edit Layers","dragButton":"Drag Layers","cutButton":"Cut Layers","deleteButton":"Remove Layers","drawCircleMarkerButton":"Draw Circle Marker","snappingButton":"Snap dragged marker to other layers and vertices","pinningButton":"Pin shared vertices together"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Platziere den Marker mit Klick","firstVertex":"Platziere den ersten Marker mit Klick","continueLine":"Klicke, um weiter zu zeichnen","finishLine":"Beende mit Klick auf existierenden Marker","finishPoly":"Beende mit Klick auf ersten Marker","finishRect":"Beende mit Klick","startCircle":"Platziere das Kreiszentrum mit Klick","finishCircle":"Beende den Kreis mit Klick","placeCircleMarker":"Platziere den Kreismarker mit Klick"},"actions":{"finish":"Beenden","cancel":"Abbrechen","removeLastVertex":"Letzten Vertex löschen"},"buttonTitles":{"drawMarkerButton":"Marker zeichnen","drawPolyButton":"Polygon zeichnen","drawLineButton":"Polyline zeichnen","drawCircleButton":"Kreis zeichnen","drawRectButton":"Rechteck zeichnen","editButton":"Layer editieren","dragButton":"Layer bewegen","cutButton":"Layer schneiden","deleteButton":"Layer löschen","drawCircleMarkerButton":"Kreismarker zeichnen"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Clicca per posizionare un Marker","firstVertex":"Clicca per posizionare il primo vertice","continueLine":"Clicca per continuare a disegnare","finishLine":"Clicca qualsiasi marker esistente per terminare","finishPoly":"Clicca il primo marker per terminare","finishRect":"Clicca per terminare","startCircle":"Clicca per posizionare il punto centrale del cerchio","finishCircle":"Clicca per terminare il cerchio","placeCircleMarker":"Clicca per posizionare un Marker del cherchio"},"actions":{"finish":"Termina","cancel":"Annulla","removeLastVertex":"Rimuovi l\'ultimo vertice"},"buttonTitles":{"drawMarkerButton":"Disegna Marker","drawPolyButton":"Disegna Poligoni","drawLineButton":"Disegna Polilinea","drawCircleButton":"Disegna Cerchio","drawRectButton":"Disegna Rettangolo","editButton":"Modifica Livelli","dragButton":"Sposta Livelli","cutButton":"Ritaglia Livelli","deleteButton":"Elimina Livelli","drawCircleMarkerButton":"Disegna Marker del Cherchio"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Klik untuk menempatkan marker","firstVertex":"Klik untuk menempatkan vertex pertama","continueLine":"Klik untuk meneruskan digitasi","finishLine":"Klik pada sembarang marker yang ada untuk mengakhiri","finishPoly":"Klik marker pertama untuk mengakhiri","finishRect":"Klik untuk mengakhiri","startCircle":"Klik untuk menempatkan titik pusat lingkaran","finishCircle":"Klik untuk mengakhiri lingkaran"},"actions":{"finish":"Selesai","cancel":"Batal","removeLastVertex":"Hilangkan Vertex Terakhir"},"buttonTitles":{"drawMarkerButton":"Digitasi Marker","drawPolyButton":"Digitasi Polygon","drawLineButton":"Digitasi Polyline","drawCircleButton":"Digitasi Lingkaran","drawRectButton":"Digitasi Segi Empat","editButton":"Edit Layer","dragButton":"Geser Layer","cutButton":"Potong Layer","deleteButton":"Hilangkan Layer"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Adaugă un punct","firstVertex":"Apasă aici pentru a adăuga primul Vertex","continueLine":"Apasă aici pentru a continua desenul","finishLine":"Apasă pe orice obiect pentru a finisa desenul","finishPoly":"Apasă pe primul obiect pentru a finisa","finishRect":"Apasă pentru a finisa","startCircle":"Apasă pentru a desena un cerc","finishCircle":"Apasă pentru a finisa un cerc","placeCircleMarker":"Adaugă un punct"},"actions":{"finish":"Termină","cancel":"Anulează","removeLastVertex":"Șterge ultimul Vertex"},"buttonTitles":{"drawMarkerButton":"Adaugă o bulină","drawPolyButton":"Desenează un poligon","drawLineButton":"Desenează o linie","drawCircleButton":"Desenează un cerc","drawRectButton":"Desenează un dreptunghi","editButton":"Editează straturile","dragButton":"Mută straturile","cutButton":"Taie straturile","deleteButton":"Șterge straturile","placeCircleMarker":"Adaugă o bulină"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Нажмите, чтобы нанести маркер","firstVertex":"Нажмите, чтобы нанести первый объект","continueLine":"Нажмите, чтобы продолжить рисование","finishLine":"Нажмите любой существующий маркер для завершения","finishPoly":"Выберите первую точку, чтобы закончить","finishRect":"Нажмите, чтобы закончить","startCircle":"Нажмите, чтобы добавить центр круга","finishCircle":"Нажмите, чтобы задать радиус","placeCircleMarker":"Нажмите, чтобы нанести круговой маркер"},"actions":{"finish":"Завершить","cancel":"Отменить","removeLastVertex":"Отменить последнее действие"},"buttonTitles":{"drawMarkerButton":"Добавить маркер","drawPolyButton":"Рисовать полигон","drawLineButton":"Рисовать кривую","drawCircleButton":"Рисовать круг","drawRectButton":"Рисовать прямоугольник","editButton":"Редактировать слой","dragButton":"Перенести слой","cutButton":"Вырезать слой","deleteButton":"Удалить слой","drawCircleMarkerButton":"Добавить круговой маркер","snappingButton":"Привязать перетаскиваемый маркер к другим слоям и вершинам","pinningButton":"Связать общие точки вместе"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Presiona para colocar un marcador","firstVertex":"Presiona para colocar el primer vértice","continueLine":"Presiona para continuar dibujando","finishLine":"Presiona cualquier marcador existente para finalizar","finishPoly":"Presiona el primer marcador para finalizar","finishRect":"Presiona para finalizar","startCircle":"Presiona para colocar el centro del circulo","finishCircle":"Presiona para finalizar el circulo","placeCircleMarker":"Presiona para colocar un marcador de circulo"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover ultimo vértice"},"buttonTitles":{"drawMarkerButton":"Dibujar Marcador","drawPolyButton":"Dibujar Polígono","drawLineButton":"Dibujar Línea","drawCircleButton":"Dibujar Circulo","drawRectButton":"Dibujar Rectángulo","editButton":"Editar Capas","dragButton":"Arrastrar Capas","cutButton":"Cortar Capas","deleteButton":"Remover Capas","drawCircleMarkerButton":"Dibujar Marcador de Circulo"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Klik om een marker te plaatsen","firstVertex":"Klik om het eerste punt te plaatsen","continueLine":"Klik om te blijven tekenen","finishLine":"Klik op een bestaand punt om te beëindigen","finishPoly":"Klik op het eerst punt om te beëindigen","finishRect":"Klik om te beëindigen","startCircle":"Klik om het middelpunt te plaatsen","finishCircle":"Klik om de cirkel te beëindigen","placeCircleMarker":"Klik om een marker te plaatsen"},"actions":{"finish":"Bewaar","cancel":"Annuleer","removeLastVertex":"Verwijder laatste punt"},"buttonTitles":{"drawMarkerButton":"Plaats Marker","drawPolyButton":"Teken een vlak","drawLineButton":"Teken een lijn","drawCircleButton":"Teken een cirkel","drawRectButton":"Teken een vierkant","editButton":"Bewerk","dragButton":"Verplaats","cutButton":"Knip","deleteButton":"Verwijder","drawCircleMarkerButton":"Plaats Marker"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Cliquez pour placer un marqueur","firstVertex":"Cliquez pour placer le premier sommet","continueLine":"Cliquez pour continuer à dessiner","finishLine":"Cliquez sur n\'importe quel marqueur pour terminer","finishPoly":"Cliquez sur le premier marqueur pour terminer","finishRect":"Cliquez pour terminer","startCircle":"Cliquez pour placer le centre du cercle","finishCircle":"Cliquez pour finir le cercle"},"actions":{"finish":"Terminer","cancel":"Annuler","removeLastVertex":"Retirer le dernier sommet"},"buttonTitles":{"drawMarkerButton":"Placer des marqueurs","drawPolyButton":"Dessiner des polygones","drawLineButton":"Dessiner des polylignes","drawCircleButton":"Dessiner un cercle","drawRectButton":"Dessiner un rectangle","editButton":"Éditer des calques","dragButton":"Déplacer des calques","cutButton":"Couper des calques","deleteButton":"Supprimer des calques"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"单击放置标记","firstVertex":"单击放置首个顶点","continueLine":"单击继续绘制","finishLine":"单击任何存在的标记以完成","finishPoly":"单击第一个标记以完成","finishRect":"单击完成","startCircle":"单击放置圆心","finishCircle":"单击完成圆形"},"actions":{"finish":"完成","cancel":"取消","removeLastVertex":"移除最后的顶点"},"buttonTitles":{"drawMarkerButton":"绘制标记","drawPolyButton":"绘制多边形","drawLineButton":"绘制线段","drawCircleButton":"绘制圆形","drawRectButton":"绘制长方形","editButton":"编辑图层","dragButton":"拖拽图层","cutButton":"剪切图层","deleteButton":"删除图层"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Clique para posicionar o marcador","firstVertex":"Clique para posicionar o primeiro vértice","continueLine":"Clique para continuar desenhando","finishLine":"Clique em qualquer marcador existente para finalizar","finishPoly":"Clique no primeiro ponto para fechar o polígono","finishRect":"Clique para finalizar","startCircle":"Clique para posicionar o centro do círculo","finishCircle":"Clique para fechar o círculo"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover último vértice"},"buttonTitles":{"drawMarkerButton":"Desenhar um marcador","drawPolyButton":"Desenhar um polígono","drawLineButton":"Desenhar uma polilinha","drawCircleButton":"Desenhar um círculo","drawRectButton":"Desenhar um retângulo","editButton":"Editar camada(s)","dragButton":"Mover camada(s)","cutButton":"Recortar camada(s)","deleteButton":"Remover camada(s)"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Kliknij, aby ustawić znacznik","firstVertex":"Kliknij, aby ustawić pierwszy punkt","continueLine":"Kliknij, aby kontynuować rysowanie","finishLine":"Kliknij dowolny punkt, aby zakończyć","finishPoly":"Kliknij pierwszy punkt, aby zakończyć","finishRect":"Kliknij, aby zakończyć","startCircle":"Kliknij, aby ustawić środek koła","finishCircle":"Kliknij, aby zakończyć rysowanie koła","placeCircleMarker":"Kliknij, aby ustawić okrągły znacznik"},"actions":{"finish":"Zakończ","cancel":"Anuluj","removeLastVertex":"Usuń ostatni punkt"},"buttonTitles":{"drawMarkerButton":"Narysuj znacznik","drawPolyButton":"Narysuj wielokąt","drawLineButton":"Narysuj ścieżkę","drawCircleButton":"Narysuj koło","drawRectButton":"Narysuj prostokąt","editButton":"Edytuj","dragButton":"Przesuń","cutButton":"Wytnij","deleteButton":"Usuń","drawCircleMarkerButton":"Narysuj okrągły znacznik"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Klicka för att placera markör","firstVertex":"Klicka för att placera första hörnet","continueLine":"Klicka för att fortsätta rita","finishLine":"Klicka på en existerande punkt för att slutföra","finishPoly":"Klicka på den första punkten för att slutföra","finishRect":"Klicka för att slutföra","startCircle":"Klicka för att placera cirkelns centrum","finishCircle":"Klicka för att slutföra cirkeln","placeCircleMarker":"Klicka för att placera cirkelmarkör"},"actions":{"finish":"Slutför","cancel":"Avbryt","removeLastVertex":"Ta bort sista hörnet"},"buttonTitles":{"drawMarkerButton":"Rita Markör","drawPolyButton":"Rita Polygoner","drawLineButton":"Rita Linje","drawCircleButton":"Rita Cirkel","drawRectButton":"Rita Rektangel","editButton":"Redigera Lager","dragButton":"Dra Lager","cutButton":"Klipp i Lager","deleteButton":"Ta bort Lager","drawCircleMarkerButton":"Rita Cirkelmarkör"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Κάντε κλικ για να τοποθετήσετε Δείκτη","firstVertex":"Κάντε κλικ για να τοποθετήσετε το πρώτο σημείο","continueLine":"Κάντε κλικ για να συνεχίσετε να σχεδιάζετε","finishLine":"Κάντε κλικ σε οποιονδήποτε υπάρχον σημείο για να ολοκληρωθεί","finishPoly":"Κάντε κλικ στο πρώτο σημείο για να τελειώσετε","finishRect":"Κάντε κλικ για να τελειώσετε","startCircle":"Κάντε κλικ για να τοποθετήσετε κέντρο Κύκλου","finishCircle":"Κάντε κλικ για να ολοκληρώσετε τον Κύκλο","placeCircleMarker":"Κάντε κλικ για να τοποθετήσετε Κυκλικό Δείκτη"},"actions":{"finish":"Τέλος","cancel":"Ακύρωση","removeLastVertex":"Κατάργηση τελευταίου σημείου"},"buttonTitles":{"drawMarkerButton":"Σχεδίαση Δείκτη","drawPolyButton":"Σχεδίαση Πολυγώνου","drawLineButton":"Σχεδίαση Γραμμής","drawCircleButton":"Σχεδίαση Κύκλου","drawRectButton":"Σχεδίαση Ορθογωνίου","editButton":"Επεξεργασία Επιπέδων","dragButton":"Μεταφορά Επιπέδων","cutButton":"Αποκοπή Επιπέδων","deleteButton":"Κατάργηση Επιπέδων","drawCircleMarkerButton":"Σχεδίαση Κυκλικού Δείκτη","snappingButton":"Προσκόλληση του Δείκτη μεταφοράς σε άλλα Επίπεδα και Κορυφές","pinningButton":"Περικοπή κοινών κορυφών μαζί"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Kattintson a jelölő elhelyezéséhez","firstVertex":"Kattintson az első pont elhelyezéséhez","continueLine":"Kattintson a következő pont elhelyezéséhez","finishLine":"A befejezéshez kattintson egy meglévő pontra","finishPoly":"A befejezéshez kattintson az első pontra","finishRect":"Kattintson a befejezéshez","startCircle":"Kattintson a kör középpontjának elhelyezéséhez","finishCircle":"Kattintson a kör befejezéséhez","placeCircleMarker":"Kattintson a körjelölő elhelyezéséhez"},"actions":{"finish":"Befejezés","cancel":"Mégse","removeLastVertex":"Utolsó pont eltávolítása"},"buttonTitles":{"drawMarkerButton":"Jelölő rajzolása","drawPolyButton":"Poligon rajzolása","drawLineButton":"Vonal rajzolása","drawCircleButton":"Kör rajzolása","drawRectButton":"Négyzet rajzolása","editButton":"Elemek szerkesztése","dragButton":"Elemek mozgatása","cutButton":"Elemek vágása","deleteButton":"Elemek törlése","drawCircleMarkerButton":"Kör jelölő rajzolása","snappingButton":"Kapcsolja a jelöltőt másik elemhez vagy ponthoz","pinningButton":"Közös pontok összekötése"}}')},function(t,e,r){var i=r(135),n=r(136);t.exports=function(t,e){return null!=t&&n(t,e,i)}},function(t,e,r){t.exports=r(145)},function(t,e){Array.prototype.findIndex=Array.prototype.findIndex||function(t){if(null===this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof t)throw new TypeError("callback must be a function");for(var e=Object(this),r=e.length>>>0,i=arguments[1],n=0;n<r;n++)if(t.call(i,e[n],n,e))return n;return-1},Array.prototype.find=Array.prototype.find||function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("callback must be a function");for(var e=Object(this),r=e.length>>>0,i=arguments[1],n=0;n<r;n++){var a=e[n];if(t.call(i,a,n,e))return a}},"function"!=typeof Object.assign&&(Object.assign=function(t){"use strict";if(null==t)throw new TypeError("Cannot convert undefined or null to object");t=Object(t);for(var e=1;e<arguments.length;e++){var r=arguments[e];if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t}),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),i=r.length>>>0;if(0==i)return!1;for(var n,a,o=0|e,s=Math.max(0<=o?o:i-Math.abs(o),0);s<i;){if((n=r[s])===(a=t)||"number"==typeof n&&"number"==typeof a&&isNaN(n)&&isNaN(a))return!0;s++}return!1}})},function(t,e,r){var i=r(62),n=r(29),a=r(93),o=r(95),s=r(1),l=r(36),h=r(35);t.exports=function t(e,r,u,c,p){e!==r&&a(r,(function(a,l){if(p=p||new i,s(a))o(e,r,l,u,t,c,p);else{var f=c?c(h(e,l),a,l+"",e,r,p):void 0;void 0===f&&(f=a),n(e,l,f)}}),l)}},function(t,e,r){var i=r(9),n=r(68),a=r(69),o=r(70),s=r(71),l=r(72);function h(t){var e=this.__data__=new i(t);this.size=e.size}h.prototype.clear=n,h.prototype.delete=a,h.prototype.get=o,h.prototype.has=s,h.prototype.set=l,t.exports=h},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var i=r(10),n=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=i(e,t);return!(r<0||(r==e.length-1?e.pop():n.call(e,r,1),--this.size,0))}},function(t,e,r){var i=r(10);t.exports=function(t){var e=this.__data__,r=i(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var i=r(10);t.exports=function(t){return-1<i(this.__data__,t)}},function(t,e,r){var i=r(10);t.exports=function(t,e){var r=this.__data__,n=i(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}},function(t,e,r){var i=r(9);t.exports=function(){this.__data__=new i,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,r){var i=r(9),n=r(26),a=r(28);t.exports=function(t,e){var r=this.__data__;if(r instanceof i){var o=r.__data__;if(!n||o.length<199)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new a(o)}return r.set(t,e),this.size=r.size,this}},function(t,e,r){var i=r(16),n=r(77),a=r(1),o=r(79),s=/^\[object .+?Constructor\]$/,l=Function.prototype,h=Object.prototype,u=l.toString,c=h.hasOwnProperty,p=RegExp("^"+u.call(c).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||n(t))&&(i(t)?p:s).test(o(t))}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var i=r(17),n=Object.prototype,a=n.hasOwnProperty,o=n.toString,s=i?i.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),r=t[s];try{t[s]=void 0;var i=!0}catch(t){}var n=o.call(t);return i&&(e?t[s]=r:delete t[s]),n}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var i,n=r(78),a=(i=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""))?"Symbol(src)_1."+i:"";t.exports=function(t){return!!a&&a in t}},function(t,e,r){var i=r(2)["__core-js_shared__"];t.exports=i},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var i=r(82),n=r(9),a=r(26);t.exports=function(){this.size=0,this.__data__={hash:new i,map:new(a||n),string:new i}}},function(t,e,r){var i=r(83),n=r(84),a=r(85),o=r(86),s=r(87);function l(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var i=t[e];this.set(i[0],i[1])}}l.prototype.clear=i,l.prototype.delete=n,l.prototype.get=a,l.prototype.has=o,l.prototype.set=s,t.exports=l},function(t,e,r){var i=r(12);t.exports=function(){this.__data__=i?i(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var i=r(12),n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(i){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return n.call(e,t)?e[t]:void 0}},function(t,e,r){var i=r(12),n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return i?void 0!==e[t]:n.call(e,t)}},function(t,e,r){var i=r(12);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=i&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,r){var i=r(13);t.exports=function(t){var e=i(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var i=r(13);t.exports=function(t){return i(this,t).get(t)}},function(t,e,r){var i=r(13);t.exports=function(t){return i(this,t).has(t)}},function(t,e,r){var i=r(13);t.exports=function(t,e){var r=i(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}},function(t,e,r){var i=r(94)();t.exports=i},function(t,e){t.exports=function(t){return function(e,r,i){for(var n=-1,a=Object(e),o=i(e),s=o.length;s--;){var l=o[t?s:++n];if(!1===r(a[l],l,a))break}return e}}},function(t,e,r){var i=r(29),n=r(96),a=r(97),o=r(100),s=r(101),l=r(20),h=r(4),u=r(105),c=r(33),p=r(16),f=r(1),d=r(107),g=r(34),_=r(35),y=r(111);t.exports=function(t,e,r,m,v,b,k){var L=_(t,r),M=_(e,r),w=k.get(M);if(w)i(t,r,w);else{var x=b?b(L,M,r+"",t,e,k):void 0,S=void 0===x;if(S){var C=h(M),E=!C&&c(M),P=!C&&!E&&g(M);x=M,C||E||P?x=h(L)?L:u(L)?o(L):E?n(M,!(S=!1)):P?a(M,!(S=!1)):[]:d(M)||l(M)?l(x=L)?x=y(L):f(L)&&!p(L)||(x=s(M)):S=!1}S&&(k.set(M,x),v(x,M,m,b,k),k.delete(M)),i(t,r,x)}}},function(t,e,r){(function(t){var i=r(2),n=e&&!e.nodeType&&e,a=n&&"object"==typeof t&&t&&!t.nodeType&&t,o=a&&a.exports===n?i.Buffer:void 0,s=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,i=s?s(r):new t.constructor(r);return t.copy(i),i}}).call(this,r(19)(t))},function(t,e,r){var i=r(98);t.exports=function(t,e){var r=e?i(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}},function(t,e,r){var i=r(99);t.exports=function(t){var e=new t.constructor(t.byteLength);return new i(e).set(new i(t)),e}},function(t,e,r){var i=r(2).Uint8Array;t.exports=i},function(t,e){t.exports=function(t,e){var r=-1,i=t.length;for(e=e||Array(i);++r<i;)e[r]=t[r];return e}},function(t,e,r){var i=r(102),n=r(31),a=r(32);t.exports=function(t){return"function"!=typeof t.constructor||a(t)?{}:i(n(t))}},function(t,e,r){var i=r(1),n=Object.create;function a(){}t.exports=function(t){if(!i(t))return{};if(n)return n(t);a.prototype=t;var e=new a;return a.prototype=void 0,e}},function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},function(t,e,r){var i=r(8),n=r(3);t.exports=function(t){return n(t)&&"[object Arguments]"==i(t)}},function(t,e,r){var i=r(21),n=r(3);t.exports=function(t){return n(t)&&i(t)}},function(t,e){t.exports=function(){return!1}},function(t,e,r){var i=r(8),n=r(31),a=r(3),o=Function.prototype,s=Object.prototype,l=o.toString,h=s.hasOwnProperty,u=l.call(Object);t.exports=function(t){if(!a(t)||"[object Object]"!=i(t))return!1;var e=n(t);if(null===e)return!0;var r=h.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==u}},function(t,e,r){var i=r(8),n=r(22),a=r(3),o={};o["[object Float32Array]"]=o["[object Float64Array]"]=o["[object Int8Array]"]=o["[object Int16Array]"]=o["[object Int32Array]"]=o["[object Uint8Array]"]=o["[object Uint8ClampedArray]"]=o["[object Uint16Array]"]=o["[object Uint32Array]"]=!0,o["[object Arguments]"]=o["[object Array]"]=o["[object ArrayBuffer]"]=o["[object Boolean]"]=o["[object DataView]"]=o["[object Date]"]=o["[object Error]"]=o["[object Function]"]=o["[object Map]"]=o["[object Number]"]=o["[object Object]"]=o["[object RegExp]"]=o["[object Set]"]=o["[object String]"]=o["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&n(t.length)&&!!o[i(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,r){(function(t){var i=r(27),n=e&&!e.nodeType&&e,a=n&&"object"==typeof t&&t&&!t.nodeType&&t,o=a&&a.exports===n&&i.process,s=function(){try{return a&&a.require&&a.require("util").types||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=s}).call(this,r(19)(t))},function(t,e,r){var i=r(112),n=r(36);t.exports=function(t){return i(t,n(t))}},function(t,e,r){var i=r(113),n=r(18);t.exports=function(t,e,r,a){var o=!r;r=r||{};for(var s=-1,l=e.length;++s<l;){var h=e[s],u=a?a(r[h],t[h],h,r,t):void 0;void 0===u&&(u=t[h]),o?n(r,h,u):i(r,h,u)}return r}},function(t,e,r){var i=r(18),n=r(11),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var o=t[e];a.call(t,e)&&n(o,r)&&(void 0!==r||e in t)||i(t,e,r)}},function(t,e,r){var i=r(115),n=r(20),a=r(4),o=r(33),s=r(23),l=r(34),h=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=a(t),u=!r&&n(t),c=!r&&!u&&o(t),p=!r&&!u&&!c&&l(t),f=r||u||c||p,d=f?i(t.length,String):[],g=d.length;for(var _ in t)!e&&!h.call(t,_)||f&&("length"==_||c&&("offset"==_||"parent"==_)||p&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||s(_,g))||d.push(_);return d}},function(t,e){t.exports=function(t,e){for(var r=-1,i=Array(t);++r<t;)i[r]=e(r);return i}},function(t,e,r){var i=r(1),n=r(32),a=r(117),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!i(t))return a(t);var e=n(t),r=[];for(var s in t)("constructor"!=s||!e&&o.call(t,s))&&r.push(s);return r}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},function(t,e,r){var i=r(119),n=r(126);t.exports=function(t){return i((function(e,r){var i=-1,a=r.length,o=1<a?r[a-1]:void 0,s=2<a?r[2]:void 0;for(o=3<t.length&&"function"==typeof o?(a--,o):void 0,s&&n(r[0],r[1],s)&&(o=a<3?void 0:o,a=1),e=Object(e);++i<a;){var l=r[i];l&&t(e,l,i,o)}return e}))}},function(t,e,r){var i=r(37),n=r(120),a=r(122);t.exports=function(t,e){return a(n(t,e,i),t+"")}},function(t,e,r){var i=r(121),n=Math.max;t.exports=function(t,e,r){return e=n(void 0===e?t.length-1:e,0),function(){for(var a=arguments,o=-1,s=n(a.length-e,0),l=Array(s);++o<s;)l[o]=a[e+o];o=-1;for(var h=Array(e+1);++o<e;)h[o]=a[o];return h[e]=r(l),i(t,this,h)}}},function(t,e){t.exports=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}},function(t,e,r){var i=r(123),n=r(125)(i);t.exports=n},function(t,e,r){var i=r(124),n=r(30),a=r(37),o=n?function(t,e){return n(t,"toString",{configurable:!0,enumerable:!1,value:i(e),writable:!0})}:a;t.exports=o},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e){var r=Date.now;t.exports=function(t){var e=0,i=0;return function(){var n=r(),a=16-(n-i);if(i=n,0<a){if(800<=++e)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,r){var i=r(11),n=r(21),a=r(23),o=r(1);t.exports=function(t,e,r){if(!o(r))return!1;var s=typeof e;return!!("number"==s?n(r)&&a(e,r.length):"string"==s&&e in r)&&i(r[e],t)}},function(t,e,r){var i=r(38),n=r(39);t.exports=function(t,e){for(var r=0,a=(e=i(e,t)).length;null!=t&&r<a;)t=t[n(e[r++])];return r&&r==a?t:void 0}},function(t,e,r){var i=r(4),n=r(24),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;t.exports=function(t,e){if(i(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!n(t))||o.test(t)||!a.test(t)||null!=e&&t in Object(e)}},function(t,e,r){var i=r(130),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,o=i((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(n,(function(t,r,i,n){e.push(i?n.replace(a,"$1"):r||t)})),e}));t.exports=o},function(t,e,r){var i=r(131);t.exports=function(t){var e=i(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},function(t,e,r){var i=r(28);function n(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var i=arguments,n=e?e.apply(this,i):i[0],a=r.cache;if(a.has(n))return a.get(n);var o=t.apply(this,i);return r.cache=a.set(n,o)||a,o};return r.cache=new(n.Cache||i),r}n.Cache=i,t.exports=n},function(t,e,r){var i=r(133);t.exports=function(t){return null==t?"":i(t)}},function(t,e,r){var i=r(17),n=r(134),a=r(4),o=r(24),s=i?i.prototype:void 0,l=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return n(e,t)+"";if(o(e))return l?l.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},function(t,e){t.exports=function(t,e){for(var r=-1,i=null==t?0:t.length,n=Array(i);++r<i;)n[r]=e(t[r],r,t);return n}},function(t,e){var r=Object.prototype.hasOwnProperty;t.exports=function(t,e){return null!=t&&r.call(t,e)}},function(t,e,r){var i=r(38),n=r(20),a=r(4),o=r(23),s=r(22),l=r(39);t.exports=function(t,e,r){for(var h=-1,u=(e=i(e,t)).length,c=!1;++h<u;){var p=l(e[h]);if(!(c=null!=t&&r(t,p)))break;t=t[p]}return c||++h!=u?c:!!(u=null==t?0:t.length)&&s(u)&&o(p,u)&&(a(t)||n(t))}},function(t,e){var r,i,n=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(t){r=a}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(t){i=o}}();var l,h=[],u=!1,c=-1;function p(){u&&l&&(u=!1,l.length?h=l.concat(h):c=-1,h.length&&f())}function f(){if(!u){var t=s(p);u=!0;for(var e=h.length;e;){for(l=h,h=[];++c<e;)l&&l[c].run();c=-1,e=h.length}l=null,u=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function g(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];h.push(new d(t,e)),1!==h.length||u||s(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=g,n.addListener=g,n.once=g,n.off=g,n.removeListener=g,n.removeAllListeners=g,n.emit=g,n.prependListener=g,n.prependOnceListener=g,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(5),n=r(40),a=r(14);e.default=function(t){if(!t)throw new Error("geojson is required");var e=[];return a.flattenEach(t,(function(t){!function(t,e){var r=[],a=t.geometry;if(null!==a){switch(a.type){case"Polygon":r=n.getCoords(a);break;case"LineString":r=[n.getCoords(a)]}r.forEach((function(r){(function(t,e){var r=[];return t.reduce((function(t,n){var a=i.lineString([t,n],e);return a.bbox=function(t,e){var r=t[0],i=t[1],n=e[0],a=e[1];return[r<n?r:n,i<a?i:a,n<r?r:n,a<i?i:a]}(t,n),r.push(a),n})),r})(r,t.properties).forEach((function(t){t.id=e.length,e.push(t)}))}))}}(t,e)})),i.featureCollection(e)}},function(t,e,r){var i=r(140),n=r(5),a=r(14),o=r(142).default,s=a.featureEach,l=(a.coordEach,n.polygon,n.featureCollection);function h(t){var e=i(t);return e.insert=function(t){if("Feature"!==t.type)throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:o(t),i.prototype.insert.call(this,t)},e.load=function(t){var e=[];return Array.isArray(t)?t.forEach((function(t){if("Feature"!==t.type)throw new Error("invalid features");t.bbox=t.bbox?t.bbox:o(t),e.push(t)})):s(t,(function(t){if("Feature"!==t.type)throw new Error("invalid features");t.bbox=t.bbox?t.bbox:o(t),e.push(t)})),i.prototype.load.call(this,e)},e.remove=function(t,e){if("Feature"!==t.type)throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:o(t),i.prototype.remove.call(this,t,e)},e.clear=function(){return i.prototype.clear.call(this)},e.search=function(t){var e=i.prototype.search.call(this,this.toBBox(t));return l(e)},e.collides=function(t){return i.prototype.collides.call(this,this.toBBox(t))},e.all=function(){var t=i.prototype.all.call(this);return l(t)},e.toJSON=function(){return i.prototype.toJSON.call(this)},e.fromJSON=function(t){return i.prototype.fromJSON.call(this,t)},e.toBBox=function(t){var e;if(t.bbox)e=t.bbox;else if(Array.isArray(t)&&4===t.length)e=t;else if(Array.isArray(t)&&6===t.length)e=[t[0],t[1],t[3],t[4]];else if("Feature"===t.type)e=o(t);else{if("FeatureCollection"!==t.type)throw new Error("invalid geojson");e=o(t)}return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}},e}t.exports=h,t.exports.default=h},function(t,e,r){"use strict";t.exports=n,t.exports.default=n;var i=r(141);function n(t,e){if(!(this instanceof n))return new n(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&this._initFormat(e),this.clear()}function a(t,e,r){if(!r)return e.indexOf(t);for(var i=0;i<e.length;i++)if(r(t,e[i]))return i;return-1}function o(t,e){s(t,0,t.children.length,e,t)}function s(t,e,r,i,n){(n=n||g(null)).minX=1/0,n.minY=1/0,n.maxX=-1/0,n.maxY=-1/0;for(var a,o=e;o<r;o++)a=t.children[o],l(n,t.leaf?i(a):a);return n}function l(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function h(t,e){return t.minX-e.minX}function u(t,e){return t.minY-e.minY}function c(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function p(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function d(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function g(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function _(t,e,r,n,a){for(var o,s=[e,r];s.length;)(r=s.pop())-(e=s.pop())<=n||(o=e+Math.ceil((r-e)/n/2)*n,i(t,o,e,r,a),s.push(e,o,o,r))}n.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,r=[],i=this.toBBox;if(!d(t,e))return r;for(var n,a,o,s,l=[];e;){for(n=0,a=e.children.length;n<a;n++)o=e.children[n],d(t,s=e.leaf?i(o):o)&&(e.leaf?r.push(o):f(t,s)?this._all(o,r):l.push(o));e=l.pop()}return r},collides:function(t){var e=this.data,r=this.toBBox;if(!d(t,e))return!1;for(var i,n,a,o,s=[];e;){for(i=0,n=e.children.length;i<n;i++)if(a=e.children[i],d(t,o=e.leaf?r(a):a)){if(e.leaf||f(t,o))return!0;s.push(a)}e=s.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,r=t.length;e<r;e++)this.insert(t[e]);return this}var i=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var n=this.data;this.data=i,i=n}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=g([]),this},remove:function(t,e){if(!t)return this;for(var r,i,n,o,s=this.data,l=this.toBBox(t),h=[],u=[];s||h.length;){if(s||(s=h.pop(),i=h[h.length-1],r=u.pop(),o=!0),s.leaf&&-1!==(n=a(t,s.children,e)))return s.children.splice(n,1),h.push(s),this._condense(h),this;o||s.leaf||!f(s,l)?i?(r++,s=i.children[r],o=!1):s=null:(h.push(s),u.push(r),r=0,s=(i=s).children[0])}return this},toBBox:function(t){return t},compareMinX:h,compareMinY:u,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var r=[];t;)t.leaf?e.push.apply(e,t.children):r.push.apply(r,t.children),t=r.pop();return e},_build:function(t,e,r,i){var n,a=r-e+1,s=this._maxEntries;if(a<=s)return o(n=g(t.slice(e,r+1)),this.toBBox),n;i||(i=Math.ceil(Math.log(a)/Math.log(s)),s=Math.ceil(a/Math.pow(s,i-1))),(n=g([])).leaf=!1,n.height=i;var l,h,u,c,p=Math.ceil(a/s),f=p*Math.ceil(Math.sqrt(s));for(_(t,e,r,f,this.compareMinX),l=e;l<=r;l+=f)for(_(t,l,u=Math.min(l+f-1,r),p,this.compareMinY),h=l;h<=u;h+=p)c=Math.min(h+p-1,u),n.children.push(this._build(t,h,c,i-1));return o(n,this.toBBox),n},_chooseSubtree:function(t,e,r,i){for(var n,a,o,s,l,h,u,p,f,d;i.push(e),!e.leaf&&i.length-1!==r;){for(u=p=1/0,n=0,a=e.children.length;n<a;n++)l=c(o=e.children[n]),f=t,d=o,(h=(Math.max(d.maxX,f.maxX)-Math.min(d.minX,f.minX))*(Math.max(d.maxY,f.maxY)-Math.min(d.minY,f.minY))-l)<p?(p=h,u=l<u?l:u,s=o):h===p&&l<u&&(u=l,s=o);e=s||e.children[0]}return e},_insert:function(t,e,r){var i=this.toBBox,n=r?t:i(t),a=[],o=this._chooseSubtree(n,this.data,e,a);for(o.children.push(t),l(o,n);0<=e&&a[e].children.length>this._maxEntries;)this._split(a,e),e--;this._adjustParentBBoxes(n,a,e)},_split:function(t,e){var r=t[e],i=r.children.length,n=this._minEntries;this._chooseSplitAxis(r,n,i);var a=this._chooseSplitIndex(r,n,i),s=g(r.children.splice(a,r.children.length-a));s.height=r.height,s.leaf=r.leaf,o(r,this.toBBox),o(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(r,s)},_splitRoot:function(t,e){this.data=g([t,e]),this.data.height=t.height+1,this.data.leaf=!1,o(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,r){var i,n,a,o,l,h,u,p,f,d,g,_,y,m;for(h=u=1/0,i=e;i<=r-e;i++)f=n=s(t,0,i,this.toBBox),d=a=s(t,i,r,this.toBBox),g=Math.max(f.minX,d.minX),_=Math.max(f.minY,d.minY),y=Math.min(f.maxX,d.maxX),m=Math.min(f.maxY,d.maxY),o=Math.max(0,y-g)*Math.max(0,m-_),l=c(n)+c(a),o<h?(h=o,p=i,u=l<u?l:u):o===h&&l<u&&(u=l,p=i);return p},_chooseSplitAxis:function(t,e,r){var i=t.leaf?this.compareMinX:h,n=t.leaf?this.compareMinY:u;this._allDistMargin(t,e,r,i)<this._allDistMargin(t,e,r,n)&&t.children.sort(i)},_allDistMargin:function(t,e,r,i){t.children.sort(i);var n,a,o=this.toBBox,h=s(t,0,e,o),u=s(t,r-e,r,o),c=p(h)+p(u);for(n=e;n<r-e;n++)a=t.children[n],l(h,t.leaf?o(a):a),c+=p(h);for(n=r-e-1;e<=n;n--)a=t.children[n],l(u,t.leaf?o(a):a),c+=p(u);return c},_adjustParentBBoxes:function(t,e,r){for(var i=r;0<=i;i--)l(e[i],t)},_condense:function(t){for(var e,r=t.length-1;0<=r;r--)0===t[r].children.length?0<r?(e=t[r-1].children).splice(e.indexOf(t[r]),1):this.clear():o(t[r],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}},function(t,e,r){t.exports=function(){"use strict";function t(t,e,r){var i=t[e];t[e]=t[r],t[r]=i}function e(t,e){return t<e?-1:e<t?1:0}return function(r,i,n,a,o){!function e(r,i,n,a,o){for(;n<a;){if(600<a-n){var s=a-n+1,l=i-n+1,h=Math.log(s),u=.5*Math.exp(2*h/3),c=.5*Math.sqrt(h*u*(s-u)/s)*(l-s/2<0?-1:1);e(r,i,Math.max(n,Math.floor(i-l*u/s+c)),Math.min(a,Math.floor(i+(s-l)*u/s+c)),o)}var p=r[i],f=n,d=a;for(t(r,n,i),0<o(r[a],p)&&t(r,n,a);f<d;){for(t(r,f,d),f++,d--;o(r[f],p)<0;)f++;for(;0<o(r[d],p);)d--}0===o(r[n],p)?t(r,n,d):t(r,++d,a),d<=i&&(n=d+1),i<=d&&(a=d-1)}}(r,i,n||0,a||r.length-1,o||e)}}()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(14);e.default=function(t){var e=[1/0,1/0,-1/0,-1/0];return i.coordEach(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e}},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";r.r(e),r(60);var i=r(41),n=r(42),a=r.n(n),o=r(43),s=r(44),l=r(45),h=r(46),u=r(47),c=r(48),p=r(49),f=r(50),d=r(51),g=r(52),_={en:o,de:s,it:l,id:h,ro:u,ru:c,es:p,nl:f,fr:d,pt_br:r(53),zh:g,pl:r(54),sv:r(55),el:r(56),hu:r(57)},y=r(0),m=r.n(y),v=r(58),b=r.n(v);function k(t){var e=L.PM.activeLang;return b()(_,e)||(e="en"),m()(_[e],t)}function M(t,e,r){for(var i,n,a,o=6378137,s=6356752.3142,l=1/298.257223563,h=t.lng,u=t.lat,c=r,p=Math.PI,f=e*p/180,d=Math.sin(f),g=Math.cos(f),_=(1-l)*Math.tan(u*p/180),y=1/Math.sqrt(1+_*_),m=_*y,v=Math.atan2(_,g),b=y*d,k=1-b*b,M=k*(o*o-s*s)/(s*s),w=1+M/16384*(4096+M*(M*(320-175*M)-768)),x=M/1024*(256+M*(M*(74-47*M)-128)),S=c/(s*w),C=2*Math.PI;1e-12<Math.abs(S-C);)i=Math.cos(2*v+S),C=S,S=c/(s*w)+x*(n=Math.sin(S))*(i+x/4*((a=Math.cos(S))*(2*i*i-1)-x/6*i*(4*n*n-3)*(4*i*i-3)));var E=m*n-y*a*g,P=Math.atan2(m*a+y*n*g,(1-l)*Math.sqrt(b*b+E*E)),B=l/16*k*(4+l*(4-3*k)),O=h+180*(Math.atan2(n*d,y*a-m*n*g)-(1-B)*l*b*(S+B*n*(i+B*a*(2*i*i-1))))/p,D=180*P/p;return L.latLng(O,D)}function w(t,e,r,i){for(var n,a,o=[],s=0;s<r;s+=1)n=M(t,360*s/r+i,e),a=L.latLng(n.lng,n.lat),o.push(a);return o}var x={calcMiddleLatLng:function(t,e,r){var i=t.project(e),n=t.project(r);return t.unproject(i._add(n)._divideBy(2))},findLayers:function(t){var e=[];return t.eachLayer((function(t){(t instanceof L.Polyline||t instanceof L.Marker||t instanceof L.Circle||t instanceof L.CircleMarker)&&e.push(t)})),e=(e=e.filter((function(t){return!!t.pm}))).filter((function(t){return!t._pmTempLayer}))},circleToPolygon:function(t){for(var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:60,r=w(t.getLatLng(),t.getRadius(),e,0),i=[],n=0;n<r.length;n+=1){var a=[r[n].lat,r[n].lng];i.push(a)}return L.polygon(i,t.options)},createGeodesicPolygon:w,getTranslation:k};function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){E(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function E(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var P=x.findLayers,B={_globalEditMode:!1,globalEditEnabled:function(){return this.globalEditModeEnabled()},globalEditModeEnabled:function(){return this._globalEditMode},setGlobalEditStatus:function(t){this._globalEditMode=t,this._fireEditModeEvent(this._globalEditMode)},enableGlobalEditMode:function(t){var e=C({snappable:this._globalSnappingEnabled},t);this.Toolbar.toggleButton("editMode",!0),P(this.map).forEach((function(t){t.pm.enable(e)})),this.throttledReInitEdit||(this.throttledReInitEdit=L.Util.throttle(this.handleLayerAdditionInGlobalEditMode,100,this)),this.map.on("layeradd",this.throttledReInitEdit,this),this.setGlobalEditStatus(!0)},disableGlobalEditMode:function(){P(this.map).forEach((function(t){t.pm.disable()})),this.map.off("layeroff",this.throttledReInitEdit,this),this.Toolbar.toggleButton("editMode",!1),this.setGlobalEditStatus(!1)},toggleGlobalEditMode:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.globalOptions;this.globalEditModeEnabled()?this.disableGlobalEditMode():this.enableGlobalEditMode(t)},handleLayerAdditionInGlobalEditMode:function(t){var e=t.layer;!e.pm||e._pmTempLayer||!this.globalEditModeEnabled()||e.pm.enable(C(C({},this.globalOptions),{},{snappable:this._globalSnappingEnabled}))},_fireEditModeEvent:function(t){this.map.fire("pm:globaleditmodetoggled",{enabled:t,map:this.map})}},O=x.findLayers,D={globalDragModeEnabled:function(){return!!this._globalDragMode},enableGlobalDragMode:function(){var t=O(this.map);this._globalDragMode=!0,t.forEach((function(t){t.pm.enableLayerDrag()})),this.throttledReInitDrag||(this.throttledReInitDrag=L.Util.throttle(this.reinitGlobalDragMode,100,this)),this.map.on("layeradd",this.throttledReInitDrag,this),this.Toolbar.toggleButton("dragMode",this._globalDragMode),this._fireDragModeEvent(!0)},disableGlobalDragMode:function(){var t=O(this.map);this._globalDragMode=!1,t.forEach((function(t){t.pm.disableLayerDrag()})),this.map.off("layeradd",this.throttledReInitDrag,this),this.Toolbar.toggleButton("dragMode",this._globalDragMode),this._fireDragModeEvent(!1)},_fireDragModeEvent:function(t){this.map.fire("pm:globaldragmodetoggled",{enabled:t,map:this.map})},toggleGlobalDragMode:function(){this.globalDragModeEnabled()?this.disableGlobalDragMode():this.enableGlobalDragMode()},reinitGlobalDragMode:function(t){var e=t.layer;!e.pm||e._pmTempLayer||!this.globalDragModeEnabled()||(this.disableGlobalDragMode(),this.enableGlobalDragMode())}},T={disableGlobalRemovalMode:function(){var t=this;this._globalRemovalMode=!1,this.map.eachLayer((function(e){e.off("click",t.removeLayer,t)})),this.map.off("layeradd",this.throttledReInitRemoval,this),this.Toolbar.toggleButton("deleteLayer",this._globalRemovalMode),this._fireRemovalModeEvent(!1)},enableGlobalRemovalMode:function(){var t=this;this._globalRemovalMode=!0,this.map.eachLayer((function(e){(function(t){return t.pm&&!(t instanceof L.LayerGroup)})(e)&&(e.pm.disable(),e.on("click",t.removeLayer,t))})),this.throttledReInitRemoval||(this.throttledReInitRemoval=L.Util.throttle(this.reinitGlobalRemovalMode,100,this)),this.map.on("layeradd",this.throttledReInitRemoval,this),this.Toolbar.toggleButton("deleteLayer",this._globalRemovalMode),this._fireRemovalModeEvent(!0)},_fireRemovalModeEvent:function(t){this.map.fire("pm:globalremovalmodetoggled",{enabled:t,map:this.map})},toggleGlobalRemovalMode:function(){this.globalRemovalModeEnabled()?this.disableGlobalRemovalMode():this.enableGlobalRemovalMode()},globalRemovalEnabled:function(){return this.globalRemovalModeEnabled()},globalRemovalModeEnabled:function(){return!!this._globalRemovalMode},removeLayer:function(t){var e=t.target;e._pmTempLayer||e.pm&&e.pm.dragging()||(e.remove(),e instanceof L.LayerGroup?(e.fire("pm:remove",{layer:e,shape:void 0}),this.map.fire("pm:remove",{layer:e,shape:void 0})):(e.fire("pm:remove",{layer:e,shape:e.pm.getShape()}),this.map.fire("pm:remove",{layer:e,shape:e.pm.getShape()})))},reinitGlobalRemovalMode:function(t){var e=t.layer;!e.pm||e._pmTempLayer||!this.globalRemovalModeEnabled()||(this.disableGlobalRemovalMode(),this.enableGlobalRemovalMode())}};function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){I(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function I(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var G=x.findLayers,A=L.Class.extend({includes:[B,D,T],initialize:function(t){this.map=t,this.Draw=new L.PM.Draw(t),this.Toolbar=new L.PM.Toolbar(t),this._globalRemovalMode=!1,this.globalOptions={snappable:!0}},setLang:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"en",e=1<arguments.length?arguments[1]:void 0,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"en",i=L.PM.activeLang;e&&(_[t]=a()(_[r],e)),L.PM.activeLang=t,this.map.pm.Toolbar.reinit(),this.map.fire("pm:langchange",{oldLang:i,activeLang:t,fallback:r,translations:_[t]})},addControls:function(t){this.Toolbar.addControls(t)},removeControls:function(){this.Toolbar.removeControls()},toggleControls:function(){this.Toolbar.toggleControls()},controlsVisible:function(){return this.Toolbar.isVisible},enableDraw:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"Polygon",e=1<arguments.length?arguments[1]:void 0;"Poly"===t&&(t="Polygon"),this.Draw.enable(t,e)},disableDraw:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"Polygon";"Poly"===t&&(t="Polygon"),this.Draw.disable(t)},setPathOptions:function(t){var e=this,r=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).ignoreShapes||[];this.map.pm.Draw.shapes.forEach((function(i){-1===r.indexOf(i)&&e.map.pm.Draw[i].setPathOptions(t)}))},getGlobalOptions:function(){return this.globalOptions},setGlobalOptions:function(t){var e=this,r=R(R({},this.globalOptions),t);this.map.pm.Draw.shapes.forEach((function(t){e.map.pm.Draw[t].setOptions(r)})),G(this.map).forEach((function(t){t.pm.setOptions(r)})),this.applyGlobalOptions(),this.globalOptions=r},applyGlobalOptions:function(){G(this.map).forEach((function(t){t.pm.enabled()&&t.pm.applyOptions()}))},globalDrawModeEnabled:function(){return!!this.Draw.getActiveShape()},globalCutModeEnabled:function(){return!!this.Draw.Cut.enabled()},enableGlobalCutMode:function(t){return this.Draw.Cut.enable(t)},toggleGlobalCutMode:function(t){return this.Draw.Cut.toggle(t)},disableGlobalCutMode:function(){return this.Draw.Cut.disable()},getGeomanLayers:function(){return G(this.map)},getGeomanDrawLayers:function(){return G(this.map).filter((function(t){return!0===t._drawnByGeoman}))}}),N=L.Control.extend({options:{position:"topleft"},initialize:function(t){this._button=Object.assign({},this.options,t)},onAdd:function(t){return this._map=t,this._map.pm.Toolbar.options.oneBlock?this._container=this._map.pm.Toolbar._createContainer(this.options.position):"edit"===this._button.tool?this._container=this._map.pm.Toolbar.editContainer:"options"===this._button.tool?this._container=this._map.pm.Toolbar.optionsContainer:"custom"===this._button.tool?this._container=this._map.pm.Toolbar.customContainer:this._container=this._map.pm.Toolbar.drawContainer,this.buttonsDomNode=this._makeButton(this._button),this._container.appendChild(this.buttonsDomNode),this._container},onRemove:function(){return this.buttonsDomNode.remove(),this._container},getText:function(){return this._button.text},getIconUrl:function(){return this._button.iconUrl},destroy:function(){this._button={},this._update()},toggle:function(t){return this._button.toggleStatus="boolean"==typeof t?t:!this._button.toggleStatus,this._applyStyleClasses(),this._button.toggleStatus},toggled:function(){return this._button.toggleStatus},onCreate:function(){this.toggle(!1)},_triggerClick:function(t){this._button.onClick(t,{button:this,event:t}),this._clicked(t),this._button.afterClick(t,{button:this,event:t})},_makeButton:function(t){var e=this,r=-1<this.options.position.indexOf("right")?"pos-right":"",i=L.DomUtil.create("div","button-container",this._container),n=L.DomUtil.create("a","leaflet-buttons-control-button",i),a=L.DomUtil.create("div","leaflet-pm-actions-container ".concat(r),i),o=t.actions,s={cancel:{text:k("actions.cancel"),onClick:function(){this._triggerClick()}},finishMode:{text:k("actions.finish"),onClick:function(){this._triggerClick()}},removeLastVertex:{text:k("actions.removeLastVertex"),onClick:function(){this._map.pm.Draw[t.jsClass]._removeLastVertex()}},finish:{text:k("actions.finish"),onClick:function(e){this._map.pm.Draw[t.jsClass]._finishShape(e)}}};o.forEach((function(t){var i;if(s[t])i=s[t];else{if(!t.text)return;i=t}var n=L.DomUtil.create("a","leaflet-pm-action ".concat(r," action-").concat(t),a);n.innerHTML=i.text,i.onClick&&L.DomEvent.addListener(n,"click",i.onClick,e),L.DomEvent.disableClickPropagation(n)})),t.toggleStatus&&L.DomUtil.addClass(i,"active");var l=L.DomUtil.create("div","control-icon",n);return t.title&&l.setAttribute("title",t.title),t.iconUrl&&l.setAttribute("src",t.iconUrl),t.className&&L.DomUtil.addClass(l,t.className),L.DomEvent.addListener(n,"click",(function(){e._button.disableOtherButtons&&e._map.pm.Toolbar.triggerClickOnToggledButtons(e)})),L.DomEvent.addListener(n,"click",this._triggerClick,this),L.DomEvent.disableClickPropagation(n),i},_applyStyleClasses:function(){this._container&&(this._button.toggleStatus&&!1!==this._button.cssToggle?(L.DomUtil.addClass(this.buttonsDomNode,"active"),L.DomUtil.addClass(this._container,"activeChild")):(L.DomUtil.removeClass(this.buttonsDomNode,"active"),L.DomUtil.removeClass(this._container,"activeChild")))},_clicked:function(){this._button.doToggle&&this.toggle()}});function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}L.Control.PMButton=N;var F=L.Class.extend({options:{drawMarker:!0,drawRectangle:!0,drawPolyline:!0,drawPolygon:!0,drawCircle:!0,drawCircleMarker:!0,editMode:!0,dragMode:!0,cutPolygon:!0,removalMode:!0,snappingOption:!0,drawControls:!0,editControls:!0,optionsControls:!0,customControls:!0,oneBlock:!1,position:"topleft",positions:{draw:"",edit:"",options:"",custom:""}},customButtons:[],initialize:function(t){this.init(t)},reinit:function(){var t=this.isVisible;this.removeControls(),this._defineButtons(),t&&this.addControls()},init:function(t){this.map=t,this.buttons={},this.isVisible=!1,this.drawContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control"),this.editContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control"),this.optionsContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-options leaflet-bar leaflet-control"),this.customContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-custom leaflet-bar leaflet-control"),this._defineButtons()},_createContainer:function(t){var e="".concat(t,"Container");return this[e]||(this[e]=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-".concat(t," leaflet-bar leaflet-control"))),this[e]},getButtons:function(){return this.buttons},addControls:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.options;void 0!==t.editPolygon&&(t.editMode=t.editPolygon),void 0!==t.deleteLayer&&(t.removalMode=t.deleteLayer),L.Util.setOptions(this,t),this.applyIconStyle(),this._showHideButtons(),this.isVisible=!0},applyIconStyle:function(){var t=this.getButtons(),e={geomanIcons:{drawMarker:"control-icon leaflet-pm-icon-marker",drawPolyline:"control-icon leaflet-pm-icon-polyline",drawRectangle:"control-icon leaflet-pm-icon-rectangle",drawPolygon:"control-icon leaflet-pm-icon-polygon",drawCircle:"control-icon leaflet-pm-icon-circle",drawCircleMarker:"control-icon leaflet-pm-icon-circle-marker",editMode:"control-icon leaflet-pm-icon-edit",dragMode:"control-icon leaflet-pm-icon-drag",cutPolygon:"control-icon leaflet-pm-icon-cut",removalMode:"control-icon leaflet-pm-icon-delete"}};for(var r in t){var i=t[r];L.Util.setOptions(i,{className:e.geomanIcons[r]})}},removeControls:function(){var t=this.getButtons();for(var e in t)t[e].remove();this.isVisible=!1},toggleControls:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.options;this.isVisible?this.removeControls():this.addControls(t)},_addButton:function(t,e){return this.buttons[t]=e,this.options[t]=this.options[t]||!1,this.buttons[t]},triggerClickOnToggledButtons:function(t){var e=["snappingOption"];for(var r in this.buttons)!e.includes(r)&&this.buttons[r]!==t&&this.buttons[r].toggled()&&this.buttons[r]._triggerClick()},toggleButton:function(t,e){return"editPolygon"===t&&(t="editMode"),"deleteLayer"===t&&(t="removalMode"),(!(2<arguments.length&&void 0!==arguments[2])||arguments[2])&&this.triggerClickOnToggledButtons(this.buttons[t]),!!this.buttons[t]&&this.buttons[t].toggle(e)},_defineButtons:function(){var t=this,e={className:"control-icon leaflet-pm-icon-marker",title:k("buttonTitles.drawMarkerButton"),jsClass:"Marker",onClick:function(){},afterClick:function(e,r){t.map.pm.Draw[r.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},r={title:k("buttonTitles.drawPolyButton"),className:"control-icon leaflet-pm-icon-polygon",jsClass:"Polygon",onClick:function(){},afterClick:function(e,r){t.map.pm.Draw[r.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["finish","removeLastVertex","cancel"]},i={className:"control-icon leaflet-pm-icon-polyline",title:k("buttonTitles.drawLineButton"),jsClass:"Line",onClick:function(){},afterClick:function(e,r){t.map.pm.Draw[r.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["finish","removeLastVertex","cancel"]},n={title:k("buttonTitles.drawCircleButton"),className:"control-icon leaflet-pm-icon-circle",jsClass:"Circle",onClick:function(){},afterClick:function(e,r){t.map.pm.Draw[r.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},a={title:k("buttonTitles.drawCircleMarkerButton"),className:"control-icon leaflet-pm-icon-circle-marker",jsClass:"CircleMarker",onClick:function(){},afterClick:function(e,r){t.map.pm.Draw[r.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},o={title:k("buttonTitles.drawRectButton"),className:"control-icon leaflet-pm-icon-rectangle",jsClass:"Rectangle",onClick:function(){},afterClick:function(e,r){t.map.pm.Draw[r.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},s={title:k("buttonTitles.editButton"),className:"control-icon leaflet-pm-icon-edit",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalEditMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},l={title:k("buttonTitles.dragButton"),className:"control-icon leaflet-pm-icon-drag",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalDragMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},h={title:k("buttonTitles.cutButton"),className:"control-icon leaflet-pm-icon-cut",jsClass:"Cut",onClick:function(){},afterClick:function(e,r){t.map.pm.Draw[r.button._button.jsClass].toggle({snappable:!0,cursorMarker:!0,allowSelfIntersection:!1})},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finish","removeLastVertex","cancel"]},u={title:k("buttonTitles.deleteButton"),className:"control-icon leaflet-pm-icon-delete",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalRemovalMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]};this._addButton("drawMarker",new L.Control.PMButton(e)),this._addButton("drawPolyline",new L.Control.PMButton(i)),this._addButton("drawRectangle",new L.Control.PMButton(o)),this._addButton("drawPolygon",new L.Control.PMButton(r)),this._addButton("drawCircle",new L.Control.PMButton(n)),this._addButton("drawCircleMarker",new L.Control.PMButton(a)),this._addButton("editMode",new L.Control.PMButton(s)),this._addButton("dragMode",new L.Control.PMButton(l)),this._addButton("cutPolygon",new L.Control.PMButton(h)),this._addButton("removalMode",new L.Control.PMButton(u))},_showHideButtons:function(){this.removeControls();var t=this.getButtons(),e=[];for(var r in!1===this.options.drawControls&&(e=e.concat(Object.keys(t).filter((function(e){return!t[e]._button.tool})))),!1===this.options.editControls&&(e=e.concat(Object.keys(t).filter((function(e){return"edit"===t[e]._button.tool})))),!1===this.options.optionsControls&&(e=e.concat(Object.keys(t).filter((function(e){return"options"===t[e]._button.tool})))),!1===this.options.customControls&&(e=e.concat(Object.keys(t).filter((function(e){return"custom"===t[e]._button.tool})))),t)if(this.options[r]&&-1===e.indexOf(r)){var i=t[r]._button.tool;i=i||"draw",t[r].setPosition(this._getBtnPosition(i)),t[r].addTo(this.map)}},_getBtnPosition:function(t){return this.options.positions&&this.options.positions[t]?this.options.positions[t]:this.options.position},setBlockPosition:function(t,e){this.options.positions[t]=e,this._showHideButtons(),this.changeControlOrder()},getBlockPositions:function(){return this.options.positions},copyDrawControl:function(t,e){if(!e)throw new TypeError("Button has no name");"object"!==z(e)&&(e={name:e});var r={Marker:"drawMarker",Circle:"drawCircle",Polygon:"drawPolygon",Rectangle:"drawRectangle",Polyline:"drawPolyline",Line:"drawPolyline",CircleMarker:"drawCircleMarker",Edit:"editMode",Drag:"dragMode",Cut:"cutPolygon",Removal:"removalMode"},i=r[t]?r[t]:t;if(!e.name)throw new TypeError("Button has no name");if(this.buttons[e.name])throw new TypeError("Button with this name already exists");var n=this.map.pm.Draw.createNewDrawInstance(e.name,i),a=this.buttons[i]._button;return e=Object.assign({},a,e),{drawInstance:n,control:this.createCustomControl(e)}},createCustomControl:function(t){if(!t.name)throw new TypeError("Button has no name");if(this.buttons[t.name])throw new TypeError("Button with this name already exists");t.onClick||(t.onClick=function(){}),t.afterClick||(t.afterClick=function(){}),!1!==t.toggle&&(t.toggle=!0),t.block&&(t.block=t.block.toLowerCase()),t.block&&"draw"!==t.block||(t.block=""),-1===t.className.indexOf("control-icon")&&(t.className="control-icon ".concat(t.className));var e={tool:t.block,className:t.className,title:t.title||"",jsClass:t.name,onClick:t.onClick,afterClick:t.afterClick,doToggle:t.toggle,toggleStatus:!1,disableOtherButtons:!0,cssToggle:t.toggle,position:this.options.position,actions:t.actions||[]};!1!==this.options[t.name]&&(this.options[t.name]=!0);var r=this._addButton(t.name,new L.Control.PMButton(e));return this.changeControlOrder(),r},changeControlOrder:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],e={Marker:"drawMarker",Circle:"drawCircle",Polygon:"drawPolygon",Rectangle:"drawRectangle",Polyline:"drawPolyline",Line:"drawPolyline",CircleMarker:"drawCircleMarker",Edit:"editMode",Drag:"dragMode",Cut:"cutPolygon",Removal:"removalMode"},r=[];t.forEach((function(t){e[t]?r.push(e[t]):r.push(t)}));var i=this.getButtons(),n={};r.forEach((function(t){i[t]&&(n[t]=i[t])})),Object.keys(i).filter((function(t){return!i[t]._button.tool})).forEach((function(t){-1===r.indexOf(t)&&(n[t]=i[t])})),Object.keys(i).filter((function(t){return"edit"===i[t]._button.tool})).forEach((function(t){-1===r.indexOf(t)&&(n[t]=i[t])})),Object.keys(i).filter((function(t){return"options"===i[t]._button.tool})).forEach((function(t){-1===r.indexOf(t)&&(n[t]=i[t])})),Object.keys(i).filter((function(t){return"custom"===i[t]._button.tool})).forEach((function(t){-1===r.indexOf(t)&&(n[t]=i[t])})),Object.keys(i).forEach((function(t){-1===r.indexOf(t)&&(n[t]=i[t])})),this.map.pm.Toolbar.buttons=n,this._showHideButtons()},getControlOrder:function(){var t=this.getButtons(),e=[];for(var r in t)e.push(r);return e},changeActionsOfControl:function(t,e){var r={Marker:"drawMarker",Circle:"drawCircle",Polygon:"drawPolygon",Rectangle:"drawRectangle",Polyline:"drawPolyline",Line:"drawPolyline",CircleMarker:"drawCircleMarker",Edit:"editMode",Drag:"dragMode",Cut:"cutPolygon",Removal:"removalMode"},i=r[t]?r[t]:t;if(!i)throw new TypeError("No name passed");if(!e)throw new TypeError("No actions passed");if(!this.buttons[i])throw new TypeError("Button with this name not exists");this.buttons[i]._button.actions=e,this.changeControlOrder()}}),U={_initSnappableMarkers:function(){this.options.snapDistance=this.options.snapDistance||30,this._assignEvents(this._markers),this._layer.off("pm:dragstart",this._unsnap,this),this._layer.on("pm:dragstart",this._unsnap,this)},_disableSnapping:function(){this._layer.off("pm:dragstart",this._unsnap,this)},_assignEvents:function(t){var e=this;t.forEach((function(t){Array.isArray(t)?e._assignEvents(t):(t.off("drag",e._handleSnapping,e),t.on("drag",e._handleSnapping,e),t.off("dragend",e._cleanupSnapping,e),t.on("dragend",e._cleanupSnapping,e))}))},_unsnap:function(){delete this._snapLatLng},_cleanupSnapping:function(){delete this._snapList,this._map.off("pm:remove",this._handleSnapLayerRemoval,this),this.debugIndicatorLines&&this.debugIndicatorLines.forEach((function(t){t.remove()}))},_handleSnapLayerRemoval:function(t){var e=t.layer,r=this._snapList.findIndex((function(t){return t._leaflet_id===e._leaflet_id}));this._snapList.splice(r,1)},_handleSnapping:function(t){var e=this;function r(){return L.Util.throttle(this._createSnapList,100,this)}if(t.originalEvent.altKey)return!1;if(void 0===this._snapList&&(this._createSnapList(),this._map.off("layeradd",r,this),this._map.on("layeradd",r,this)),this._snapList.length<=0)return!1;var i=t.target,n=this._calcClosestLayer(i.getLatLng(),this._snapList);if(0===Object.keys(n).length)return!1;var a,o=n.layer instanceof L.Marker||n.layer instanceof L.CircleMarker;a=o?n.latlng:this._checkPrioritiySnapping(n);var s=this.options.snapDistance,l={marker:i,shape:this._shape,snapLatLng:a,segment:n.segment,layer:this._layer,workingLayer:this._layer,layerInteractedWith:n.layer,distance:n.distance};if(l.marker.fire("pm:snapdrag",l),this._layer.fire("pm:snapdrag",l),n.distance<s){i.setLatLng(a),i._snapped=!0;var h=this._snapLatLng||{},u=a||{};h.lat===u.lat&&h.lng===u.lng||(e._snapLatLng=a,i.fire("pm:snap",l),e._layer.fire("pm:snap",l))}else this._snapLatLng&&(this._unsnap(l),i._snapped=!1,l.marker.fire("pm:unsnap",l),this._layer.fire("pm:unsnap",l));return!0},_checkPrioritiySnapping:function(t){var e,r=this._map,i=t.segment[0],n=t.segment[1],a=t.latlng,o=this._getDistance(r,i,a),s=this._getDistance(r,n,a),l=o<s?i:n,h=o<s?o:s;if(this.options.snapMiddle){var u=x.calcMiddleLatLng(r,i,n),c=this._getDistance(r,u,a);c<o&&c<s&&(l=u,h=c)}return e=h<this.options.snapDistance?l:a,Object.assign({},e)},_createSnapList:function(){var t=this,e=[],r=[],i=this._map;i.off("pm:remove",this._handleSnapLayerRemoval,this),i.on("pm:remove",this._handleSnapLayerRemoval,this),i.eachLayer((function(t){if((t instanceof L.Polyline||t instanceof L.Marker||t instanceof L.CircleMarker)&&!0!==t.options.snapIgnore){(t instanceof L.Circle||t instanceof L.CircleMarker)&&t.pm._hiddenPolyCircle&&e.push(t.pm._hiddenPolyCircle),e.push(t);var i=L.polyline([],{color:"red",pmIgnore:!0});i._pmTempLayer=!0,r.push(i),(t instanceof L.Circle||t instanceof L.CircleMarker)&&r.push(i)}})),e=(e=(e=e.filter((function(e){return t._layer!==e}))).filter((function(t){return t._latlng||t._latlngs&&0<t._latlngs.length}))).filter((function(t){return!t._pmTempLayer})),this._otherSnapLayers?this._snapList=e.concat(this._otherSnapLayers):this._snapList=e,this.debugIndicatorLines=r},_calcClosestLayer:function(t,e){var r=this,i={};return e.forEach((function(e,n){if(!e._parentCopy||e._parentCopy!==r._layer){var a=r._calcLayerDistances(t,e);r.debugIndicatorLines[n].setLatLngs([t,a.latlng]),(void 0===i.distance||a.distance<i.distance)&&((i=a).layer=e)}})),i},_calcLayerDistances:function(t,e){var r,i,n=this,a=this._map,o=e instanceof L.Marker||e instanceof L.CircleMarker,s=e instanceof L.Polygon,l=t,h=o?e.getLatLng():e.getLatLngs();if(o)return{latlng:Object.assign({},h),distance:this._getDistance(a,h,l)};!function t(e){e.forEach((function(o,h){if(Array.isArray(o))t(o);else{var u,c=o;u=s?h+1===e.length?0:h+1:h+1===e.length?void 0:h+1;var p=e[u];if(p){var f=n._getDistanceToSegment(a,l,c,p);(void 0===i||f<i)&&(i=f,r=[c,p])}}}))}(h);var u=this._getClosestPointOnSegment(a,t,r[0],r[1]);return{latlng:Object.assign({},u),segment:r,distance:i}},_getClosestPointOnSegment:function(t,e,r,i){var n=t.getMaxZoom();n===1/0&&(n=t.getZoom());var a=t.project(e,n),o=t.project(r,n),s=t.project(i,n),l=L.LineUtil.closestPointOnSegment(a,o,s);return t.unproject(l,n)},_getDistanceToSegment:function(t,e,r,i){var n=t.latLngToLayerPoint(e),a=t.latLngToLayerPoint(r),o=t.latLngToLayerPoint(i);return L.LineUtil.pointToSegmentDistance(n,a,o)},_getDistance:function(t,e,r){return t.latLngToLayerPoint(e).distanceTo(t.latLngToLayerPoint(r))}},H=L.Class.extend({includes:[U],options:{snappable:!0,snapDistance:20,tooltips:!0,cursorMarker:!0,finishOnDoubleClick:!1,finishOn:null,allowSelfIntersection:!0,templineStyle:{},hintlineStyle:{color:"#3388ff",dashArray:"5,5"},markerStyle:{draggable:!0}},setOptions:function(t){L.Util.setOptions(this,t)},initialize:function(t){var e=this;this._map=t,this.shapes=["Marker","CircleMarker","Line","Polygon","Rectangle","Circle","Cut"],this.shapes.forEach((function(t){e[t]=new L.PM.Draw[t](e._map)}))},setPathOptions:function(t){this.options.pathOptions=t},getShapes:function(){return this.shapes},enable:function(t,e){if(!t)throw new Error("Error: Please pass a shape as a parameter. Possible shapes are: ".concat(this.getShapes().join(",")));this.disable(),this[t].enable(e)},disable:function(){var t=this;this.shapes.forEach((function(e){t[e].disable()}))},addControls:function(){var t=this;this.shapes.forEach((function(e){t[e].addButton()}))},getActiveShape:function(){var t,e=this;return this.shapes.forEach((function(r){e[r]._enabled&&(t=r)})),t},_setGlobalDrawMode:function(){"Cut"===this._shape?this._map.fire("pm:globalcutmodetoggled",{enabled:!!this._enabled,map:this._map}):this._map.fire("pm:globaldrawmodetoggled",{enabled:this._enabled,shape:this._shape,map:this._map})},createNewDrawInstance:function(t,e){var r=this._getShapeFromBtnName(e);if(this[t])throw new TypeError("Draw Type already exists");if(!L.PM.Draw[r])throw new TypeError("There is no class L.PM.Draw.".concat(r));return this[t]=new L.PM.Draw[r](this._map),this[t].toolbarButtonName=t,this[t]._shape=t,this.shapes.push(t),this[e]&&this[t].setOptions(this[e].options),this[t].setOptions(this[t].options),this[t]},_getShapeFromBtnName:function(t){var e={drawMarker:"Marker",drawCircle:"Circle",drawPolygon:"Polygon",drawPolyline:"Line",drawRectangle:"Rectangle",drawCircleMarker:"CircleMarker",editMode:"Edit",dragMode:"Drag",cutPolygon:"Cut",removalMode:"Removal"};return e[t]?e[t]:this[t]?this[t]._shape:t},_addDrawnLayerProp:function(t){t._drawnByGeoman=!0},_setShapeForFinishLayer:function(t){t.pm._shape=this._shape}});H.Marker=H.extend({initialize:function(t){this._map=t,this._shape="Marker",this.toolbarButtonName="drawMarker"},enable:function(t){var e=this;L.Util.setOptions(this,t),this._enabled=!0,this._map.on("click",this._createMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._hintMarker=L.marker([0,0],this.options.markerStyle),this._hintMarker._pmTempLayer=!0,this._hintMarker.addTo(this._map),this.options.tooltips&&this._hintMarker.bindTooltip(k("tooltips.placeMarker"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._layer=this._hintMarker,this._map.on("mousemove",this._syncHintMarker,this),this._map.fire("pm:drawstart",{shape:this._shape,workingLayer:this._layer}),this._setGlobalDrawMode(),this._map.eachLayer((function(t){e.isRelevantMarker(t)&&t.pm.enable()}))},disable:function(){var t=this;this._enabled&&(this._enabled=!1,this._map.off("click",this._createMarker,this),this._hintMarker.remove(),this._map.off("mousemove",this._syncHintMarker,this),this._map.eachLayer((function(e){t.isRelevantMarker(e)&&e.pm.disable()})),this._map.fire("pm:drawend",{shape:this._shape}),this._setGlobalDrawMode(),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping())},isRelevantMarker:function(t){return t instanceof L.Marker&&t.pm&&!t._pmTempLayer},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_createMarker:function(t){if(t.latlng){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),r=new L.Marker(e,this.options.markerStyle);this._setShapeForFinishLayer(r),this._addDrawnLayerProp(r),r.addTo(this._map),r.pm.enable(),this._map.fire("pm:create",{shape:this._shape,marker:r,layer:r}),this._cleanupSnapping()}},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}}});var V=r(6),q=r.n(V);H.Line=H.extend({initialize:function(t){this._map=t,this._shape="Line",this.toolbarButtonName="drawPolyline",this._doesSelfIntersect=!1},enable:function(t){L.Util.setOptions(this,t),this.options.finishOnDoubleClick&&!this.options.finishOn&&(this.options.finishOn="dblclick"),this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.polyline([],this.options.templineStyle),this._layer._pmTempLayer=!0,this._layerGroup.addLayer(this._layer),this._hintline=L.polyline([],this.options.hintlineStyle),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._hintMarker=L.marker(this._map.getCenter(),{icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(k("tooltips.firstVertex"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._map._container.style.cursor="crosshair",this._map.on("click",this._createVertex,this),this.options.finishOn&&this._map.on(this.options.finishOn,this._finishShape,this),"dblclick"===this.options.finishOn&&(this.tempMapDoubleClickZoomState=this._map.doubleClickZoom._enabled,this.tempMapDoubleClickZoomState&&this._map.doubleClickZoom.disable()),this._map.on("mousemove",this._syncHintMarker,this),this._hintMarker.on("move",this._syncHintLine,this),this._map.fire("pm:drawstart",{shape:this._shape,workingLayer:this._layer}),this._setGlobalDrawMode(),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[]},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._createVertex,this),this._map.off("mousemove",this._syncHintMarker,this),this.options.finishOn&&this._map.off(this.options.finishOn,this._finishShape,this),this.tempMapDoubleClickZoomState&&this._map.doubleClickZoom.enable(),this._map.removeLayer(this._layerGroup),this._map.fire("pm:drawend",{shape:this._shape}),this._setGlobalDrawMode(),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},hasSelfIntersection:function(){return 0<q()(this._layer.toGeoJSON(15)).features.length},_syncHintLine:function(){var t=this._layer.getLatLngs();if(0<t.length){var e=t[t.length-1];this._hintline.setLatLngs([e,this._hintMarker.getLatLng()])}},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this.options.allowSelfIntersection||this._handleSelfIntersection(!0,t.latlng)},_handleSelfIntersection:function(t,e){var r=L.polyline(this._layer.getLatLngs());t&&(e=e||this._hintMarker.getLatLng(),r.addLatLng(e));var i=q()(r.toGeoJSON(15));this._doesSelfIntersect=0<i.features.length,this._doesSelfIntersect?this._hintline.setStyle({color:"red"}):this._hintline.isEmpty()||this._hintline.setStyle(this.options.hintlineStyle)},_removeLastVertex:function(){var t=this._layer.getLatLngs(),e=t.pop();if(t.length<1)this.disable();else{var r=this._layerGroup.getLayers().filter((function(t){return t instanceof L.Marker})).filter((function(t){return!L.DomUtil.hasClass(t._icon,"cursor-marker")})).find((function(t){return t.getLatLng()===e}));this._layerGroup.removeLayer(r),this._layer.setLatLngs(t),this._syncHintLine()}},_createVertex:function(t){if(this.options.allowSelfIntersection||(this._handleSelfIntersection(!0,t.latlng),!this._doesSelfIntersect)){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();if(e.equals(this._layer.getLatLngs()[0]))this._finishShape(t);else{var r=0===this._layer.getLatLngs().length;this._layer.addLatLng(e);var i=this._createMarker(e,r);this._hintline.setLatLngs([e,e]),this._layer.fire("pm:vertexadded",{shape:this._shape,workingLayer:this._layer,marker:i,latlng:e})}}},_finishShape:function(){if(this.options.allowSelfIntersection||(this._handleSelfIntersection(!1),!this._doesSelfIntersect)){var t=this._layer.getLatLngs();if(!(t.length<=1)){var e=L.polyline(t,this.options.pathOptions).addTo(this._map);this._setShapeForFinishLayer(e),this._addDrawnLayerProp(e),this.disable(),this._map.fire("pm:create",{shape:this._shape,layer:e}),this.options.snappable&&this._cleanupSnapping()}}},_createMarker:function(t,e){var r=new L.Marker(t,{draggable:!1,icon:L.divIcon({className:"marker-icon"})});return r._pmTempLayer=!0,this._layerGroup.addLayer(r),r.on("click",this._finishShape,this),e&&this._hintMarker.setTooltipContent(k("tooltips.continueLine")),2===this._layer.getLatLngs().length&&this._hintMarker.setTooltipContent(k("tooltips.finishLine")),r}}),H.Polygon=H.Line.extend({initialize:function(t){this._map=t,this._shape="Polygon",this.toolbarButtonName="drawPolygon"},_finishShape:function(t){if(this.options.allowSelfIntersection||(this._handleSelfIntersection(!0,this._layer.getLatLngs()[0]),!this._doesSelfIntersect)){var e=this._layer.getLatLngs();if(!(e.length<=2)){var r=L.polygon(e,this.options.pathOptions).addTo(this._map);this._setShapeForFinishLayer(r),this._addDrawnLayerProp(r),this.disable(),this._map.fire("pm:create",{shape:this._shape,layer:r}),this._cleanupSnapping(),this._otherSnapLayers.splice(this._tempSnapLayerIndex,1),delete this._tempSnapLayerIndex}}},_createMarker:function(t,e){var r=new L.Marker(t,{draggable:!1,icon:L.divIcon({className:"marker-icon"})});return r._pmTempLayer=!0,this._layerGroup.addLayer(r),e?(r.on("click",this._finishShape,this),this._tempSnapLayerIndex=this._otherSnapLayers.push(r)-1,this.options.snappable&&this._cleanupSnapping()):r.on("click",(function(){return 1})),e&&this._hintMarker.setTooltipContent(k("tooltips.continueLine")),3===this._layer.getLatLngs().length&&this._hintMarker.setTooltipContent(k("tooltips.finishPoly")),r}}),H.Rectangle=H.extend({initialize:function(t){this._map=t,this._shape="Rectangle",this.toolbarButtonName="drawRectangle"},enable:function(t){if(L.Util.setOptions(this,t),this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.rectangle([[0,0],[0,0]],this.options.pathOptions),this._layer._pmTempLayer=!0,this._startMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon rect-start-marker"}),draggable:!1,zIndexOffset:100,opacity:this.options.cursorMarker?1:0}),this._startMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._startMarker),this._hintMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.tooltips&&this._hintMarker.bindTooltip(k("tooltips.firstVertex"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this.options.cursorMarker){L.DomUtil.addClass(this._hintMarker._icon,"visible"),this._styleMarkers=[];for(var e=0;e<2;e+=1){var r=L.marker([0,0],{icon:L.divIcon({className:"marker-icon rect-style-marker"}),draggable:!1,zIndexOffset:100});r._pmTempLayer=!0,this._layerGroup.addLayer(r),this._styleMarkers.push(r)}}this._map._container.style.cursor="crosshair",this._map.on("click",this._placeStartingMarkers,this),this._map.on("mousemove",this._syncHintMarker,this),this._map.fire("pm:drawstart",{shape:this._shape,workingLayer:this._layer}),this._setGlobalDrawMode(),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[]},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeStartingMarkers,this),this._map.off("mousemove",this._syncHintMarker,this),this._map.removeLayer(this._layerGroup),this._map.fire("pm:drawend",{shape:this._shape}),this._setGlobalDrawMode(),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_placeStartingMarkers:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();L.DomUtil.addClass(this._startMarker._icon,"visible"),this._startMarker.setLatLng(e),this.options.cursorMarker&&this._styleMarkers&&this._styleMarkers.forEach((function(t){L.DomUtil.addClass(t._icon,"visible"),t.setLatLng(e)})),this._map.off("click",this._placeStartingMarkers,this),this._map.on("click",this._finishShape,this),this._hintMarker.setTooltipContent(k("tooltips.finishRect")),this._setRectangleOrigin()},_setRectangleOrigin:function(){var t=this._startMarker.getLatLng();t&&(this._layerGroup.addLayer(this._layer),this._layer.setLatLngs([t,t]),this._hintMarker.on("move",this._syncRectangleSize,this))},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}},_syncRectangleSize:function(){var t=this,e=this._startMarker.getLatLng(),r=this._hintMarker.getLatLng();if(this._layer.setBounds([e,r]),this.options.cursorMarker&&this._styleMarkers){var i=this._findCorners(),n=[];i.forEach((function(e){e.equals(t._startMarker.getLatLng())||e.equals(t._hintMarker.getLatLng())||n.push(e)})),n.forEach((function(e,r){t._styleMarkers[r].setLatLng(e)}))}},_finishShape:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),r=this._startMarker.getLatLng(),i=L.rectangle([r,e],this.options.pathOptions).addTo(this._map);this._setShapeForFinishLayer(i),this._addDrawnLayerProp(i),this.disable(),this._map.fire("pm:create",{shape:this._shape,layer:i})},_findCorners:function(){var t=this._layer.getBounds();return[t.getNorthWest(),t.getNorthEast(),t.getSouthEast(),t.getSouthWest()]}}),H.Circle=H.extend({initialize:function(t){this._map=t,this._shape="Circle",this.toolbarButtonName="drawCircle"},enable:function(t){L.Util.setOptions(this,t),this.options.radius=0,this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.circle([0,0],this.options.templineStyle),this._layer._pmTempLayer=!0,this._layerGroup.addLayer(this._layer),this._centerMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon"}),draggable:!1,zIndexOffset:100}),this._centerMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._centerMarker),this._hintMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(k("tooltips.startCircle"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._hintline=L.polyline([],this.options.hintlineStyle),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._map._container.style.cursor="crosshair",this._map.on("click",this._placeCenterMarker,this),this._map.on("mousemove",this._syncHintMarker,this),this._map.fire("pm:drawstart",{shape:this._shape,workingLayer:this._layer}),this._setGlobalDrawMode(),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[]},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeCenterMarker,this),this._map.off("mousemove",this._syncHintMarker,this),this._map.removeLayer(this._layerGroup),this._map.fire("pm:drawend",{shape:this._shape}),this._setGlobalDrawMode(),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_syncHintLine:function(){var t=this._centerMarker.getLatLng();this._hintline.setLatLngs([t,this._hintMarker.getLatLng()])},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),r=t.distanceTo(e);this._layer.setRadius(r)},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}},_placeCenterMarker:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();this._centerMarker.setLatLng(e),this._map.off("click",this._placeCenterMarker,this),this._map.on("click",this._finishShape,this),this._placeCircleCenter()},_placeCircleCenter:function(){var t=this._centerMarker.getLatLng();t&&(this._layer.setLatLng(t),this._hintMarker.on("move",this._syncHintLine,this),this._hintMarker.on("move",this._syncCircleRadius,this),this._hintMarker.setTooltipContent(k("tooltips.finishCircle")),this._layer.fire("pm:centerplaced",{workingLayer:this._layer,latlng:t,shape:this._shape}))},_finishShape:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._centerMarker.getLatLng(),r=this._hintMarker.getLatLng(),i=e.distanceTo(r),n=Object.assign({},this.options.pathOptions,{radius:i}),a=L.circle(e,n).addTo(this._map);this._setShapeForFinishLayer(a),this._addDrawnLayerProp(a),a.pm._updateHiddenPolyCircle(),this.disable(),this._map.fire("pm:create",{shape:this._shape,layer:a})},_createMarker:function(t){var e=new L.Marker(t,{draggable:!1,icon:L.divIcon({className:"marker-icon"})});return e._pmTempLayer=!0,this._layerGroup.addLayer(e),e}}),H.CircleMarker=H.Marker.extend({initialize:function(t){this._map=t,this._shape="CircleMarker",this.toolbarButtonName="drawCircleMarker"},enable:function(t){var e=this;L.Util.setOptions(this,t),this._enabled=!0,this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this.options.editable?(this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.circleMarker([0,0],this.options.templineStyle),this._layer._pmTempLayer=!0,this._layerGroup.addLayer(this._layer),this._centerMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon"}),draggable:!1,zIndexOffset:100}),this._centerMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._centerMarker),this._hintMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(k("tooltips.startCircle"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._hintline=L.polyline([],this.options.hintlineStyle),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._map.on("click",this._placeCenterMarker,this),this._map._container.style.cursor="crosshair"):(this._map.on("click",this._createMarker,this),this._hintMarker=L.circleMarker([0,0],this.options.templineStyle),this._hintMarker._pmTempLayer=!0,this._hintMarker.addTo(this._map),this._layer=this._hintMarker,this.options.tooltips&&this._hintMarker.bindTooltip(k("tooltips.placeCircleMarker"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip()),this._map.on("mousemove",this._syncHintMarker,this),this._map.fire("pm:drawstart",{shape:this._shape,workingLayer:this._layer}),this._setGlobalDrawMode(),this.options.editable||this._map.eachLayer((function(t){e.isRelevantMarker(t)&&t.pm.enable()}))},disable:function(){var t=this;this._enabled&&(this.options.editable?(this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeCenterMarker,this),this._map.removeLayer(this._layerGroup)):(this._map.off("click",this._createMarker,this),this._map.eachLayer((function(e){t.isRelevantMarker(e)&&e.pm.disable()})),this._hintMarker.remove()),this._map.off("mousemove",this._syncHintMarker,this),this._map.fire("pm:drawend",{shape:this._shape}),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._enabled=!1)},_placeCenterMarker:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();this._centerMarker.setLatLng(e),this._map.off("click",this._placeCenterMarker,this),this._map.on("click",this._finishShape,this),this._placeCircleCenter()},_placeCircleCenter:function(){var t=this._centerMarker.getLatLng();t&&(this._layer.setLatLng(t),this._hintMarker.on("move",this._syncHintLine,this),this._hintMarker.on("move",this._syncCircleRadius,this),this._hintMarker.setTooltipContent(k("tooltips.finishCircle")),this._layer.fire("pm:centerplaced",{shape:this._shape,workingLayer:this._layer,latlng:t}))},_syncHintLine:function(){var t=this._centerMarker.getLatLng();this._hintline.setLatLngs([t,this._hintMarker.getLatLng()])},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),r=this._map.project(t).distanceTo(this._map.project(e));this._layer.setRadius(r)},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}},isRelevantMarker:function(t){return t instanceof L.CircleMarker&&!(t instanceof L.Circle)&&t.pm&&!t._pmTempLayer},_createMarker:function(t){if(t.latlng){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),r=L.circleMarker(e,this.options.pathOptions);this._setShapeForFinishLayer(r),this._addDrawnLayerProp(r),r.addTo(this._map),r.pm.enable(),this._map.fire("pm:create",{shape:this._shape,marker:r,layer:r}),this._cleanupSnapping()}},_finishShape:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._centerMarker.getLatLng(),r=this._hintMarker.getLatLng(),i=this._map.project(e).distanceTo(this._map.project(r)),n=Object.assign({},this.options.pathOptions,{radius:i}),a=L.circleMarker(e,n).addTo(this._map);this._setShapeForFinishLayer(a),this._addDrawnLayerProp(a),a.pm._updateHiddenPolyCircle(),this.disable(),this._map.fire("pm:create",{shape:this._shape,layer:a})}});var K=r(25),Y=r.n(K);function J(t){var e={type:"Feature"};return e.geometry=t,e}function X(t){return"Feature"===t.type?t.geometry:t}function $(t){return J({type:"Polygon",coordinates:t})}function Z(t){return J({type:"MultiPolygon",coordinates:t})}function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}H.Cut=H.Polygon.extend({initialize:function(t){this._map=t,this._shape="Cut",this.toolbarButtonName="cutPolygon"},_cut:function(t){var e=this,r=this._map._layers;Object.keys(r).map((function(t){return r[t]})).filter((function(t){return t.pm})).filter((function(t){return t instanceof L.Polygon})).filter((function(e){return e!==t})).filter((function(e){try{return!!function(t,e){var r=X(t),i=X(e),n=Y.a.intersection(r.coordinates,i.coordinates);return 0===n.length?null:1===n.length?$(n[0]):Z(n)}(t.toGeoJSON(15),e.toGeoJSON(15))}catch(t){return console.error("You cant cut polygons with self-intersections"),!1}})).forEach((function(r){var i=function(t,e){var r=X(t),i=X(e),n=Y.a.difference(r.coordinates,i.coordinates);return 0===n.length?null:1===n.length?$(n[0]):Z(n)}(r.toGeoJSON(15),t.toGeoJSON(15)),n=L.geoJSON(i,r.options);1===n.getLayers().length&&(n=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],i=!0,n=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);i=!0);}catch(t){n=!0,a=t}finally{try{i||null==s.return||s.return()}finally{if(n)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return W(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?W(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n.getLayers(),1)[0]);var a=n.addTo(e._map);a.pm.enable(e.options),a.pm.disable(),r._pmTempLayer=!0,t._pmTempLayer=!0,r.remove(),t.remove(),a.getLayers&&0===a.getLayers().length&&e._map.pm.removeLayer({target:a}),e._addDrawnLayerProp(a),e._editedLayers.push({layer:a,originalLayer:r})}))},_finishShape:function(){var t=this;if(this._editedLayers=[],this.options.allowSelfIntersection||(this._handleSelfIntersection(!1),!this._doesSelfIntersect)){var e=this._layer.getLatLngs(),r=L.polygon(e,this.options.pathOptions);this._cut(r),this.disable(),this._cleanupSnapping(),this._otherSnapLayers.splice(this._tempSnapLayerIndex,1),delete this._tempSnapLayerIndex,this._editedLayers.forEach((function(e){var r=e.layer,i=e.originalLayer;i.fire("pm:cut",{shape:t._shape,layer:r,originalLayer:i}),t._map.fire("pm:cut",{shape:t._shape,layer:r,originalLayer:i}),i.fire("pm:edit",{layer:i,shape:i.pm.getShape()})})),this._editedLayers=[]}}});var Q={enableLayerDrag:function(){if(this.disable(),this._map||(this._map=this._layer._map),this._layer instanceof L.Marker)return this._layer.on("dragstart",this._fireDragStart,this),this._layer.on("drag",this._fireDrag,this),this._layer.on("dragend",this._fireDragEnd,this),this.options.snappable?this._initSnappableMarkers():this._disableSnapping(),void(this._layer.dragging&&this._layer.dragging.enable());this._tempDragCoord=null,this._layer._map.options.preferCanvas?(this._layer.on("mouseout",this.removeDraggingClass,this),this._layer.on("mouseover",this.addDraggingClass,this)):this.addDraggingClass(),this._originalMapDragState=this._layer._map.dragging._enabled,this._safeToCacheDragState=!0,this._layer.on("mousedown",this._dragMixinOnMouseDown,this)},disableLayerDrag:function(){if(this._layer instanceof L.Marker)return this._layer.off("dragstart",this._fireDragStart,this),this._layer.off("drag",this._fireDrag,this),this._layer.off("dragend",this._fireDragEnd,this),void(this._layer.dragging&&this._layer.dragging.disable());this._layer._map.options.preferCanvas?(this._layer.off("mouseout",this.removeDraggingClass,this),this._layer.off("mouseover",this.addDraggingClass,this)):this.removeDraggingClass(),this._safeToCacheDragState=!1,this._layer.off("mousedown",this._dragMixinOnMouseDown,this)},_dragMixinOnMouseUp:function(){var t=this,e=this._layer._path?this._layer._path:this._layer._renderer._container;return this._originalMapDragState&&this._layer._map.dragging.enable(),this._safeToCacheDragState=!0,this._layer._map.off("mousemove",this._dragMixinOnMouseMove,this),this._layer._map.off("mouseup",this._dragMixinOnMouseUp,this),!!this._dragging&&(this._layer instanceof L.CircleMarker&&this._layer.pm._updateHiddenPolyCircle(),window.setTimeout((function(){t._dragging=!1,L.DomUtil.removeClass(e,"leaflet-pm-dragging"),t._fireDragEnd(),t._fireEdit()}),10),!0)},_dragMixinOnMouseMove:function(t){var e=this._layer._path?this._layer._path:this._layer._renderer._container;this._dragging||(this._dragging=!0,L.DomUtil.addClass(e,"leaflet-pm-dragging"),this._layer.bringToFront(),this._originalMapDragState&&this._layer._map.dragging.disable(),this._fireDragStart()),this._onLayerDrag(t)},_dragMixinOnMouseDown:function(t){0<t.originalEvent.button||(this._safeToCacheDragState&&(this._originalMapDragState=this._layer._map.dragging._enabled,this._safeToCacheDragState=!1),this._tempDragCoord=t.latlng,this._layer._map.on("mouseup",this._dragMixinOnMouseUp,this),this._layer._map.on("mousemove",this._dragMixinOnMouseMove,this))},dragging:function(){return this._dragging},_onLayerDrag:function(t){var e=t.latlng,r=e.lat-this._tempDragCoord.lat,i=e.lng-this._tempDragCoord.lng,n=function t(e){return e.map((function(e){return Array.isArray(e)?t(e):{lat:e.lat+r,lng:e.lng+i}}))};if(this._layer instanceof L.CircleMarker){var a=n([this._layer.getLatLng()]);this._layer.setLatLng(a[0])}else{var o=n(this._layer.getLatLngs());this._layer.setLatLngs(o)}this._tempDragCoord=e,t.layer=this._layer,this._fireDrag(t)},_fireDragStart:function(){this._layer.fire("pm:dragstart",{layer:this._layer,shape:this.getShape()})},_fireDrag:function(t){this._layer.fire("pm:drag",Object.assign({},t,{shape:this.getShape()}))},_fireDragEnd:function(){this._layer.fire("pm:dragend",{layer:this._layer,shape:this.getShape()})},addDraggingClass:function(){var t=this._layer._path?this._layer._path:this._layer._renderer._container;L.DomUtil.addClass(t,"leaflet-pm-draggable")},removeDraggingClass:function(){var t=this._layer._path?this._layer._path:this._layer._renderer._container;L.DomUtil.removeClass(t,"leaflet-pm-draggable")}},tt=L.Class.extend({includes:[Q,U],options:{snappable:!0,snapDistance:20,allowSelfIntersection:!0,allowSelfIntersectionEdit:!1,draggable:!0,limitMarkersToCount:-1,preventMarkerRemoval:!1,hideMiddleMarkers:!1},setOptions:function(t){L.Util.setOptions(this,t)},applyOptions:function(){},isPolygon:function(){return this._layer instanceof L.Polygon},getShape:function(){return this._shape}});tt.LayerGroup=L.Class.extend({initialize:function(t){var e=this;this._layerGroup=t,this._layers=this.findLayers(),this._layers.forEach((function(t){return e._initLayer(t)})),this._layerGroup.on("layeradd",(function(t){t.target._pmTempLayer||(e._layers=e.findLayers(),t.layer.pm&&e._initLayer(t.layer),t.target.pm.enabled()&&e.enable(e.getOptions()))})),this._layerGroup.on("layerremove",(function(t){t.target._pmTempLayer||(e._layers=e.findLayers())}))},findLayers:function(){var t=this._layerGroup.getLayers();return(t=(t=t.filter((function(t){return!(t instanceof L.LayerGroup)}))).filter((function(t){return!!t.pm}))).filter((function(t){return!t._pmTempLayer}))},_initLayer:function(t){var e=this;["pm:edit","pm:update","pm:enable","pm:disable","pm:remove","pm:dragstart","pm:drag","pm:dragend","pm:snap","pm:unsnap","pm:cut","pm:intersect","pm:markerdragend","pm:markerdragstart","pm:vertexadded","pm:vertexremoved","pm:centerplaced"].forEach((function(r){t.on(r,e._fireEvent,e)})),t.pm._layerGroup=this._layerGroup},_fireEvent:function(t){this._layerGroup.fireEvent(t.type,t)},toggleEdit:function(t){this._options=t,this._layers.forEach((function(e){e.pm.toggleEdit(t)}))},enable:function(t){this._options=t,this._layers.forEach((function(e){e.pm.enable(t)}))},disable:function(){this._layers.forEach((function(t){t.pm.disable()}))},enabled:function(){var t=this._layers.find((function(t){return t.pm.enabled()}));return!!t},dragging:function(){var t=this._layers.find((function(t){return t.pm.dragging()}));return!!t},getOptions:function(){return this._options}}),tt.Marker=tt.extend({_shape:"Marker",initialize:function(t){this._layer=t,this._enabled=!1,this._layer.on("dragend",this._onDragEnd,this)},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping(),this.options.draggable?this.enableLayerDrag():this.disableLayerDrag(),this.options.preventMarkerRemoval||this._layer.on("contextmenu",this._removeMarker,this)},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},enable:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{draggable:!0};L.Util.setOptions(this,t),this._map=this._layer._map,this.enabled()||(this._enabled=!0,this._layer.fire("pm:enable",{layer:this._layer,shape:this.getShape()}),this.applyOptions())},enabled:function(){return this._enabled},disable:function(){this._enabled=!1,this.disableLayerDrag(),this._layer.off("contextmenu",this._removeMarker,this),this._layer.fire("pm:disable",{layer:this._layer,shape:this.getShape()}),this._layerEdited&&this._layer.fire("pm:update",{layer:this._layer,shape:this.getShape()}),this._layerEdited=!1},_removeMarker:function(t){var e=t.target;e.remove(),e.fire("pm:remove",{layer:e,shape:this.getShape()}),this._map.fire("pm:remove",{layer:e,shape:this.getShape()})},_onDragEnd:function(t){t.target.fire("pm:edit",{layer:this._layer,shape:this.getShape()}),this._layerEdited=!0},_initSnappableMarkers:function(){var t=this._layer;this.options.snapDistance=this.options.snapDistance||30,t.off("drag",this._handleSnapping,this),t.on("drag",this._handleSnapping,this),t.off("dragend",this._cleanupSnapping,this),t.on("dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this),t.on("pm:dragstart",this._unsnap,this)},_disableSnapping:function(){var t=this._layer;t.off("drag",this._handleSnapping,this),t.off("dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this)}});var et=r(7),rt=r.n(et);function it(t){return function(t){if(Array.isArray(t))return nt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return nt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?nt(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}var at={filterMarkerGroup:function(){this.markerCache=[],this.createCache(),this._layer.on("pm:edit",this.createCache,this),this.applyLimitFilters({}),this._layer.on("pm:disable",this._removeMarkerLimitEvents,this),-1<this.options.limitMarkersToCount&&(this._layer.on("pm:vertexremoved",this._initMarkers,this),this._map.on("mousemove",this.applyLimitFilters,this))},_removeMarkerLimitEvents:function(){this._map.off("mousemove",this.applyLimitFilters,this),this._layer.off("pm:edit",this.createCache,this),this._layer.off("pm:disable",this._removeMarkerLimitEvents,this),this._layer.off("pm:vertexremoved",this._initMarkers,this)},createCache:function(){var t=[].concat(it(this._markerGroup.getLayers()),it(this.markerCache));this.markerCache=t.filter((function(t,e,r){return r.indexOf(t)===e}))},renderLimits:function(t){var e=this;this.markerCache.forEach((function(r){t.includes(r)?e._markerGroup.addLayer(r):e._markerGroup.removeLayer(r)}))},applyLimitFilters:function(t){var e=t.latlng,r=void 0===e?{lat:0,lng:0}:e,i=it(this._filterClosestMarkers(r));this.renderLimits(i)},_filterClosestMarkers:function(t){var e=it(this.markerCache),r=this.options.limitMarkersToCount;return e.sort((function(e,r){return e._latlng.distanceTo(t)-r._latlng.distanceTo(t)})),e.filter((function(t,e){return!(-1<r)||e<r}))}};function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}tt.Line=tt.extend({includes:[at],_shape:"Line",initialize:function(t){this._layer=t,this._enabled=!1},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping()},toggleEdit:function(t){return this.enabled()?this.disable():this.enable(t),this.enabled()},enable:function(t){L.Util.setOptions(this,t),this._map=this._layer._map,this._map&&(this.enabled()||this.disable(),this._enabled=!0,this._initMarkers(),this.applyOptions(),this._layer.fire("pm:enable",{layer:this._layer,shape:this.getShape()}),this._layer.on("remove",this._onLayerRemove,this),this.options.allowSelfIntersection||this._layer.on("pm:vertexremoved",this._handleSelfIntersectionOnVertexRemoval,this),this.cachedColor=void 0,this.options.allowSelfIntersection||(this.cachedColor=this._layer.options.color,this.isRed=!1,this._handleLayerStyle()))},_onLayerRemove:function(t){this.disable(t.target)},enabled:function(){return this._enabled},disable:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this._layer;if(!this.enabled())return!1;if(t.pm._dragging)return!1;t.pm._enabled=!1,t.pm._markerGroup.clearLayers(),t.pm._markerGroup.removeFrom(this._map),t.off("mousedown"),t.off("mouseup"),this._layer.off("remove",this._onLayerRemove,this),this.options.allowSelfIntersection||this._layer.off("pm:vertexremoved",this._handleSelfIntersectionOnVertexRemoval,this);var e=t._path?t._path:this._layer._renderer._container;return L.DomUtil.removeClass(e,"leaflet-pm-draggable"),this.hasSelfIntersection()&&L.DomUtil.removeClass(e,"leaflet-pm-invalid"),this._layer.fire("pm:disable",{layer:this._layer,shape:this.getShape()}),this._layerEdited&&this._layer.fire("pm:update",{layer:this._layer,shape:this.getShape()}),!(this._layerEdited=!1)},hasSelfIntersection:function(){return 0<q()(this._layer.toGeoJSON(15)).features.length},_handleSelfIntersectionOnVertexRemoval:function(){this._handleLayerStyle(!0),this.hasSelfIntersection()&&(this._layer.setLatLngs(this._coordsBeforeEdit),this._coordsBeforeEdit=null,this._initMarkers())},_handleLayerStyle:function(t){var e=this,r=this._layer;if(this.hasSelfIntersection()){if(!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this._updateDisabledMarkerStyle(this._markers,!0),this.isRed)return;t?(r.setStyle({color:"red"}),this.isRed=!0,window.setTimeout((function(){r.setStyle({color:e.cachedColor}),e.isRed=!1}),200)):(r.setStyle({color:"red"}),this.isRed=!0),this._layer.fire("pm:intersect",{layer:this._layer,intersection:q()(this._layer.toGeoJSON(15)),shape:this.getShape()})}else r.setStyle({color:this.cachedColor}),this.isRed=!1,!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this._updateDisabledMarkerStyle(this._markers,!1)},_updateDisabledMarkerStyle:function(t,e){var r=this;t.forEach((function(t){if(Array.isArray(t))return r._updateDisabledMarkerStyle(t,e);t._icon&&(e&&!r._checkMarkerAllowedToDrag(t)?L.DomUtil.addClass(t._icon,"vertexmarker-disabled"):L.DomUtil.removeClass(t._icon,"vertexmarker-disabled"))}))},_initMarkers:function(){var t=this,e=this._map,r=this._layer.getLatLngs();this._markerGroup&&this._markerGroup.clearLayers(),this._markerGroup=new L.LayerGroup,this._markerGroup._pmTempLayer=!0;this._markers=function e(r){if(Array.isArray(r[0]))return r.map(e,t);var i=r.map(t._createMarker,t);return!0!==t.options.hideMiddleMarkers&&r.map((function(e,n){var a=t.isPolygon()?(n+1)%r.length:n+1;return t._createMiddleMarker(i[n],i[a])})),i}(r),this.filterMarkerGroup(),e.addLayer(this._markerGroup)},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return e._pmTempLayer=!0,e.on("dragstart",this._onMarkerDragStart,this),e.on("move",this._onMarkerDrag,this),e.on("dragend",this._onMarkerDragEnd,this),this.options.preventMarkerRemoval||e.on("contextmenu",this._removeMarker,this),this._markerGroup.addLayer(e),e},_createMiddleMarker:function(t,e){var r=this;if(!t||!e)return!1;var i=x.calcMiddleLatLng(this._map,t.getLatLng(),e.getLatLng()),n=this._createMarker(i),a=L.divIcon({className:"marker-icon marker-icon-middle"});return n.setIcon(a),t._middleMarkerNext=n,(e._middleMarkerPrev=n).on("click",(function(){var i=L.divIcon({className:"marker-icon"});n.setIcon(i),r._addMarker(n,t,e)})),n.on("movestart",(function(){n.on("moveend",(function(){var t=L.divIcon({className:"marker-icon"});n.setIcon(t),n.off("moveend")})),r._addMarker(n,t,e)})),n},_addMarker:function(t,e,r){t.off("movestart"),t.off("click");var i=t.getLatLng(),n=this._layer._latlngs,a=this.findDeepMarkerIndex(this._markers,e),o=a.indexPath,s=a.index,l=a.parentPath,h=1<o.length?m()(n,l):n,u=1<o.length?m()(this._markers,l):this._markers;h.splice(s+1,0,i),u.splice(s+1,0,t),this._layer.setLatLngs(n),!0!==this.options.hideMiddleMarkers&&(this._createMiddleMarker(e,t),this._createMiddleMarker(t,r)),this._fireEdit(),this._layer.fire("pm:vertexadded",{layer:this._layer,marker:t,indexPath:this.findDeepMarkerIndex(this._markers,t).indexPath,latlng:i,shape:this.getShape()}),this.options.snappable&&this._initSnappableMarkers()},_removeMarker:function(t){if(!this.options.allowSelfIntersection){var e=this._layer.getLatLngs();this._coordsBeforeEdit=JSON.parse(JSON.stringify(e))}var r=t.target,i=this._layer.getLatLngs(),n=this.findDeepMarkerIndex(this._markers,r),a=n.indexPath,o=n.index,s=n.parentPath;if(a){var l,h,u=1<a.length?m()(i,s):i,c=1<a.length?m()(this._markers,s):this._markers;if(u.splice(o,1),this._layer.setLatLngs(i),this.isPolygon()&&u.length<=2&&u.splice(0,u.length),u.length<=1&&(u.splice(0,u.length),this._layer.setLatLngs(i),this.disable(),this.enable(this.options)),function(t){return!function t(e){return e.filter((function(t){return![null,"",void 0].includes(t)})).reduce((function(e,r){return e.concat(Array.isArray(r)?t(r):r)}),[])}(t).length}(i)&&this._layer.remove(),r._middleMarkerPrev&&this._markerGroup.removeLayer(r._middleMarkerPrev),r._middleMarkerNext&&this._markerGroup.removeLayer(r._middleMarkerNext),this._markerGroup.removeLayer(r),this.isPolygon()?(l=(o+1)%c.length,h=(o+(c.length-1))%c.length):(h=o-1<0?void 0:o-1,l=o+1>=c.length?void 0:o+1),l!==h){var p=c[h],f=c[l];!0!==this.options.hideMiddleMarkers&&this._createMiddleMarker(p,f)}c.splice(o,1),this._fireEdit(),this._layer.fire("pm:vertexremoved",{layer:this._layer,marker:r,indexPath:a,shape:this.getShape()})}},findDeepMarkerIndex:function(t,e){var r;t.some(function t(i){return function(n,a){var o=i.concat(a);return n._leaflet_id===e._leaflet_id?(r=o,!0):Array.isArray(n)&&n.some(t(o))}}([]));var i={};return r&&(i={indexPath:r,index:r[r.length-1],parentPath:r.slice(0,r.length-1)}),i},updatePolygonCoordsFromMarkerDrag:function(t){var e=this._layer.getLatLngs(),r=t.getLatLng(),i=this.findDeepMarkerIndex(this._markers,t),n=i.indexPath,a=i.index,o=i.parentPath;(1<n.length?m()(e,o):e).splice(a,1,r),this._layer.setLatLngs(e)},_getNeighborMarkers:function(t){var e=this.findDeepMarkerIndex(this._markers,t),r=e.indexPath,i=e.index,n=e.parentPath,a=1<r.length?m()(this._markers,n):this._markers,o=(i+1)%a.length;return{prevMarker:a[(i+(a.length-1))%a.length],nextMarker:a[o]}},_onMarkerDrag:function(t){var e=t.target,r=this.findDeepMarkerIndex(this._markers,e),i=r.indexPath,n=r.index,a=r.parentPath;if(i){if(!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this.hasSelfIntersection()&&!1===this._markerAllowedToDrag)return this._layer.setLatLngs(this._coordsBeforeEdit),this._initMarkers(),void this._handleLayerStyle();this.updatePolygonCoordsFromMarkerDrag(e);var o=1<i.length?m()(this._markers,a):this._markers,s=(n+1)%o.length,l=(n+(o.length-1))%o.length,h=e.getLatLng(),u=o[l].getLatLng(),c=o[s].getLatLng();if(e._middleMarkerNext){var p=x.calcMiddleLatLng(this._map,h,c);e._middleMarkerNext.setLatLng(p)}if(e._middleMarkerPrev){var f=x.calcMiddleLatLng(this._map,h,u);e._middleMarkerPrev.setLatLng(f)}this.options.allowSelfIntersection||this._handleLayerStyle()}},_onMarkerDragEnd:function(t){var e=t.target,r=this.findDeepMarkerIndex(this._markers,e).indexPath;this._layer.fire("pm:markerdragend",{layer:this._layer,markerEvent:t,indexPath:r,shape:this.getShape()});var i=this.hasSelfIntersection();if(i&&this.options.allowSelfIntersectionEdit&&this._markerAllowedToDrag&&(i=!1),!this.options.allowSelfIntersection&&i)return this._layer.setLatLngs(this._coordsBeforeEdit),this._coordsBeforeEdit=null,this._initMarkers(),void this._handleLayerStyle();!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this._handleLayerStyle(),this._fireEdit()},_onMarkerDragStart:function(t){var e=t.target,r=this.findDeepMarkerIndex(this._markers,e).indexPath;this._layer.fire("pm:markerdragstart",{layer:this._layer,markerEvent:t,indexPath:r,shape:this.getShape()}),this.options.allowSelfIntersection||(this._coordsBeforeEdit=this._layer.getLatLngs()),this.cachedColor||(this.cachedColor=this._layer.options.color),!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this.hasSelfIntersection()?this._markerAllowedToDrag=this._checkMarkerAllowedToDrag(e):this._markerAllowedToDrag=null},_checkMarkerAllowedToDrag:function(t){var e=this._getNeighborMarkers(t),r=e.prevMarker,i=e.nextMarker,n=L.polyline([r.getLatLng(),t.getLatLng()]),a=L.polyline([t.getLatLng(),i.getLatLng()]),o=rt()(this._layer.toGeoJSON(15),n.toGeoJSON(15)).features.length,s=rt()(this._layer.toGeoJSON(15),a.toGeoJSON(15)).features.length;return t.getLatLng()===this._markers[0][0].getLatLng()?s+=1:t.getLatLng()===this._markers[0][this._markers[0].length-1].getLatLng()&&(o+=1),!(o<=2&&s<=2)},_fireEdit:function(){this._layerEdited=!0,this._layer.fire("pm:edit",{layer:this._layer,shape:this.getShape()})}}),tt.Polygon=tt.Line.extend({_shape:"Polygon",_checkMarkerAllowedToDrag:function(t){var e=this._getNeighborMarkers(t),r=e.prevMarker,i=e.nextMarker,n=L.polyline([r.getLatLng(),t.getLatLng()]),a=L.polyline([t.getLatLng(),i.getLatLng()]),o=rt()(this._layer.toGeoJSON(15),n.toGeoJSON(15)).features.length,s=rt()(this._layer.toGeoJSON(15),a.toGeoJSON(15)).features.length;return!(o<=2&&s<=2)}}),tt.Rectangle=tt.Polygon.extend({_shape:"Rectangle",_initMarkers:function(){var t=this._map,e=this._findCorners();this._markerGroup&&this._markerGroup.clearLayers(),this._markerGroup=new L.LayerGroup,this._markerGroup._pmTempLayer=!0,t.addLayer(this._markerGroup),this._markers=[],this._markers[0]=e.map(this._createMarker,this);var r=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],i=!0,n=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);i=!0);}catch(t){n=!0,a=t}finally{try{i||null==s.return||s.return()}finally{if(n)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ot(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(this._markers,1);this._cornerMarkers=r[0],this.options.snappable&&this._initSnappableMarkers()},_createMarker:function(t,e){var r=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return r._origLatLng=t,r._index=e,r._pmTempLayer=!0,r.on("dragstart",this._onMarkerDragStart,this),r.on("drag",this._onMarkerDrag,this),r.on("dragend",this._onMarkerDragEnd,this),r.on("pm:snap",this._adjustRectangleForMarkerSnap,this),this.options.preventMarkerRemoval||r.on("contextmenu",this._removeMarker,this),this._markerGroup.addLayer(r),r},_removeMarker:function(){return null},_onMarkerDragStart:function(t){var e=t.target,r=this._findCorners();e._oppositeCornerLatLng=r[(e._index+2)%4],e._snapped=!1,this._layer.fire("pm:markerdragstart",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:void 0})},_onMarkerDrag:function(t){var e=t.target;void 0!==e._index&&(e._snapped||this._adjustRectangleForMarkerMove(e))},_onMarkerDragEnd:function(t){var e=this._findCorners();this._adjustAllMarkers(e),this._cornerMarkers.forEach((function(t){delete t._oppositeCornerLatLng})),this._layer.setLatLngs(e),this._layer.fire("pm:markerdragend",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:void 0}),this._fireEdit()},_adjustRectangleForMarkerMove:function(t){L.extend(t._origLatLng,t._latlng);var e=t.getLatLng();this._layer.setBounds(L.latLngBounds(e,t._oppositeCornerLatLng)),this._adjustAdjacentMarkers(t),this._layer.redraw()},_adjustRectangleForMarkerSnap:function(t){if(this.options.snappable){var e=t.target;this._adjustRectangleForMarkerMove(e)}},_adjustAllMarkers:function(t){t.length&&4===t.length?this._cornerMarkers.forEach((function(e,r){e.setLatLng(t[r])})):console.error("_adjustAllMarkers() requires an array of EXACTLY 4 LatLng coordinates")},_adjustAdjacentMarkers:function(t){if(t&&t.getLatLng&&t._oppositeCornerLatLng){var e=t.getLatLng(),r=t._oppositeCornerLatLng,i=[];this._findCorners().forEach((function(t){t.equals(e)||t.equals(r)||i.push(t)}));var n=0;2===i.length&&this._cornerMarkers.forEach((function(t){var a=t.getLatLng();a.equals(e)||a.equals(r)||(t.setLatLng(i[n]),n+=1)}))}else console.error("_adjustAdjacentMarkers() requires a valid Marker object")},_findCorners:function(){var t=this._layer.getBounds();return[t.getNorthWest(),t.getNorthEast(),t.getSouthEast(),t.getSouthWest()]}}),tt.Circle=tt.extend({_shape:"Circle",initialize:function(t){this._layer=t,this._enabled=!1,this._updateHiddenPolyCircle()},applyOptions:function(){this.options.snappable?(this._initSnappableMarkers(),this._outerMarker.on("move",this._syncHintLine,this),this._outerMarker.on("move",this._syncCircleRadius,this),this._centerMarker.on("move",this._moveCircle,this)):this._disableSnapping()},_disableSnapping:function(){var t=this;this._markers.forEach((function(e){e.off("move",t._syncHintLine,t),e.off("move",t._syncCircleRadius,t),e.off("drag",t._handleSnapping,t),e.off("dragend",t._cleanupSnapping,t)})),this._layer.off("pm:dragstart",this._unsnap,this)},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},enabled:function(){return this._enabled},enable:function(t){var e=this;L.Util.setOptions(this,t),this._map=this._layer._map,this.enabled()||this.disable(),this._enabled=!0,this._initMarkers(),this.applyOptions(),this._layer.fire("pm:enable",{layer:this._layer,shape:this.getShape()}),this._layer.on("remove",(function(t){e.disable(t.target)})),this._updateHiddenPolyCircle()},disable:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this._layer;if(!this.enabled())return!1;if(t.pm._dragging)return!1;this._centerMarker.off("dragstart",this._fireDragStart,this),this._centerMarker.off("drag",this._fireDrag,this),this._centerMarker.off("dragend",this._fireDragEnd,this),t.pm._enabled=!1,t.pm._helperLayers.clearLayers(),t.off("mousedown"),t.off("mouseup");var e=t._path?t._path:this._layer._renderer._container;return L.DomUtil.removeClass(e,"leaflet-pm-draggable"),this._layer.fire("pm:disable",{layer:this._layer,shape:this.getShape()}),this._layerEdited&&this._layer.fire("pm:update",{layer:this._layer,shape:this.getShape()}),!(this._layerEdited=!1)},_initMarkers:function(){var t=this._map;this._helperLayers&&this._helperLayers.clearLayers(),this._helperLayers=new L.LayerGroup,this._helperLayers._pmTempLayer=!0,this._helperLayers.addTo(t);var e=this._layer.getLatLng(),r=this._layer._radius,i=this._getLatLngOnCircle(e,r);this._centerMarker=this._createCenterMarker(e),this._outerMarker=this._createOuterMarker(i),this._markers=[this._centerMarker,this._outerMarker],this._createHintLine(this._centerMarker,this._outerMarker)},_getLatLngOnCircle:function(t,e){var r=this._map.project(t),i=L.point(r.x+e,r.y);return this._map.unproject(i)},_resizeCircle:function(){this._syncHintLine(),this._syncCircleRadius()},_moveCircle:function(t){var e=t.latlng;this._layer.setLatLng(e);var r=this._layer._radius,i=this._getLatLngOnCircle(e,r);this._outerMarker.setLatLng(i),this._syncHintLine(),this._updateHiddenPolyCircle(),this._layer.fire("pm:centerplaced",{layer:this._layer,latlng:e,shape:this.getShape()})},_onMarkerDragStart:function(t){this._layer.fire("pm:markerdragstart",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:void 0})},_onMarkerDragEnd:function(t){this._fireEdit(),this._layer.fire("pm:markerdragend",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:void 0})},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),r=t.distanceTo(e);this._layer.setRadius(r),this._updateHiddenPolyCircle()},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng();this._hintline.setLatLngs([t,e])},_createHintLine:function(t,e){var r=t.getLatLng(),i=e.getLatLng();this._hintline=L.polyline([r,i],this.options.hintlineStyle),this._hintline._pmTempLayer=!0,this._helperLayers.addLayer(this._hintline)},_createCenterMarker:function(t){var e=this._createMarker(t);return L.DomUtil.addClass(e._icon,"leaflet-pm-draggable"),e.on("drag",this._moveCircle,this),e.on("dragstart",this._fireDragStart,this),e.on("drag",this._fireDrag,this),e.on("dragend",this._fireDragEnd,this),e},_createOuterMarker:function(t){var e=this._createMarker(t);return e.on("drag",this._resizeCircle,this),e},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return e._origLatLng=t,e._pmTempLayer=!0,e.on("dragstart",this._onMarkerDragStart,this),e.on("dragend",this._onMarkerDragEnd,this),this._helperLayers.addLayer(e),e},_fireEdit:function(){this._layer.fire("pm:edit",{layer:this._layer,shape:this.getShape()}),this._layerEdited=!0},_fireDragStart:function(){this._layer.fire("pm:dragstart",{layer:this._layer,shape:this.getShape()})},_fireDrag:function(t){this._layer.fire("pm:drag",Object.assign({},t,{shape:this.getShape()}))},_fireDragEnd:function(){this._layer.fire("pm:dragend",{layer:this._layer,shape:this.getShape()})},_updateHiddenPolyCircle:function(){this._hiddenPolyCircle?this._hiddenPolyCircle.setLatLngs(x.circleToPolygon(this._layer,200).getLatLngs()):this._hiddenPolyCircle=x.circleToPolygon(this._layer,200),this._hiddenPolyCircle._parentCopy||(this._hiddenPolyCircle._parentCopy=this._layer)}}),tt.CircleMarker=tt.extend({_shape:"CircleMarker",initialize:function(t){this._layer=t,this._enabled=!1,this._updateHiddenPolyCircle()},applyOptions:function(){!this.options.editable&&this.options.draggable?this.enableLayerDrag():this.disableLayerDrag(),this.options.editable?(this._initMarkers(),this._map.on("move",this._syncMarkers,this)):this._map.on("move",this._updateHiddenPolyCircle,this),this.options.snappable?this.options.editable?(this._initSnappableMarkers(),this._outerMarker.on("move",this._syncHintLine,this),this._outerMarker.on("move",this._syncCircleRadius,this)):this._initSnappableMarkersDrag():this.options.editable?this._disableSnapping():this._disableSnappingDrag(),this.options.preventMarkerRemoval||this._layer.on("contextmenu",this._removeMarker,this)},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},enabled:function(){return this._enabled},enable:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{draggable:!0,snappable:!0};L.Util.setOptions(this,t),this._map=this._layer._map,this._map&&(this.enabled()||this.disable(),this.applyOptions(),this._layer.fire("pm:enable",{layer:this._layer,shape:this.getShape()}),this._enabled=!0,this._layer.on("pm:dragend",this._onMarkerDragEnd,this),this._updateHiddenPolyCircle())},disable:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this._layer;return!(t.pm._dragging||(t.pm._helperLayers&&t.pm._helperLayers.clearLayers(),this._map||(this._map=this._layer._map),this.options.editable?this._map.off("move",this._syncMarkers,this):this._map.off("move",this._updateHiddenPolyCircle,this),this.disableLayerDrag(),this.enabled()||(this._layer.fire("pm:disable",{layer:this._layer,shape:this.getShape()}),this._layerEdited&&this._layer.fire("pm:update",{layer:this._layer,shape:this.getShape()}),this._layerEdited=!1),this._layer.off("contextmenu",this._removeMarker,this),t.pm._enabled=!1))},_initMarkers:function(){var t=this._map;this._helperLayers&&this._helperLayers.clearLayers(),this._helperLayers=new L.LayerGroup,this._helperLayers._pmTempLayer=!0,this._helperLayers.addTo(t);var e=this._layer.getLatLng(),r=this._layer._radius,i=this._getLatLngOnCircle(e,r);this._centerMarker=this._createCenterMarker(e),this._outerMarker=this._createOuterMarker(i),this._markers=[this._centerMarker,this._outerMarker],this._createHintLine(this._centerMarker,this._outerMarker)},_getLatLngOnCircle:function(t,e){var r=this._map.project(t),i=L.point(r.x+e,r.y);return this._map.unproject(i)},_createHintLine:function(t,e){var r=t.getLatLng(),i=e.getLatLng();this._hintline=L.polyline([r,i],this.options.hintlineStyle),this._hintline._pmTempLayer=!0,this._helperLayers.addLayer(this._hintline)},_createCenterMarker:function(t){var e=this._createMarker(t);return this.options.draggable?(L.DomUtil.addClass(e._icon,"leaflet-pm-draggable"),e.on("drag",this._moveCircle,this)):e.dragging.disable(),e},_moveCircle:function(t){var e=t.latlng;this._layer.setLatLng(e);var r=this._layer._radius,i=this._getLatLngOnCircle(e,r);this._outerMarker.setLatLng(i),this._syncHintLine(),this._layer.fire("pm:centerplaced",{layer:this._layer,latlng:e,shape:this.getShape()})},_createOuterMarker:function(t){var e=this._createMarker(t);return e.on("drag",this._resizeCircle,this),e},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return e._origLatLng=t,e._pmTempLayer=!0,e.on("dragstart",this._onMarkerDragStart,this),e.on("dragend",this._onMarkerDragEnd,this),this._helperLayers.addLayer(e),e},_syncMarkers:function(){var t=this._layer.getLatLng(),e=this._layer._radius,r=this._getLatLngOnCircle(t,e);this._outerMarker.setLatLng(r),this._centerMarker.setLatLng(t),this._syncHintLine(),this._updateHiddenPolyCircle()},_resizeCircle:function(){this._syncHintLine(),this._syncCircleRadius()},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),r=this._map.project(t).distanceTo(this._map.project(e));this._layer.setRadius(r),this._updateHiddenPolyCircle()},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng();this._hintline.setLatLngs([t,e])},_moveMarker:function(t){var e=t.latlng;this._layer.setLatLng(e).redraw()},_removeMarker:function(){this.options.editable&&this.disable(),this._layer.remove(),this._layer.fire("pm:remove",{layer:this._layer,shape:this.getShape()}),this._map.fire("pm:remove",{layer:this._layer,shape:this.getShape()})},_onMarkerDragStart:function(t){this._layer.fire("pm:markerdragstart",{markerEvent:t,layer:this._layer,shape:this.getShape(),indexPath:void 0})},_fireEdit:function(){this._layer.fire("pm:edit",{layer:this._layer,shape:this.getShape()}),this._layerEdited=!0},_onMarkerDragEnd:function(t){this._layer.fire("pm:markerdragend",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:void 0})},_initSnappableMarkersDrag:function(){var t=this._layer;this.options.snapDistance=this.options.snapDistance||30,t.off("pm:drag",this._handleSnapping,this),t.on("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.on("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this),t.on("pm:dragstart",this._unsnap,this)},_disableSnappingDrag:function(){var t=this._layer;t.off("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this)},_updateHiddenPolyCircle:function(){var t=this._layer._map||this._map;if(t){var e=t.project(this._layer.getLatLng()),r=L.point(e.x+this._layer.getRadius(),e.y),i=this._layer.getLatLng().distanceTo(t.unproject(r)),n=L.circle(this._layer.getLatLng(),this._layer.options);n.setRadius(i),this._hiddenPolyCircle?this._hiddenPolyCircle.setLatLngs(x.circleToPolygon(n,200).getLatLngs()):this._hiddenPolyCircle=x.circleToPolygon(n,200),this._hiddenPolyCircle._parentCopy||(this._hiddenPolyCircle._parentCopy=this._layer)}}}),r(143),r(144),L.PM=L.PM||{version:i.a,Map:A,Toolbar:F,Draw:H,Edit:tt,Utils:x,activeLang:"en",initialize:function(t){this.addInitHooks(t)},addInitHooks:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};L.Map.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Map(this)):this.options.pmIgnore||(this.pm=new L.PM.Map(this))})),L.LayerGroup.addInitHook((function(){this.pm=new L.PM.Edit.LayerGroup(this)})),L.Marker.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Marker(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Marker(this))})),L.CircleMarker.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.CircleMarker(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.CircleMarker(this))})),L.Polyline.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Line(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Line(this))})),L.Polygon.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Polygon(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Polygon(this))})),L.Rectangle.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Rectangle(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Rectangle(this))})),L.Circle.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Circle(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Circle(this))}))}},L.PM.initialize()}]);

/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet-src.js":
/*!**************************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet-src.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* @preserve
 * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  var version = "1.7.1";

  /*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */

  // @function extend(dest: Object, src?: Object): Object
  // Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
  function extend(dest) {
  	var i, j, len, src;

  	for (j = 1, len = arguments.length; j < len; j++) {
  		src = arguments[j];
  		for (i in src) {
  			dest[i] = src[i];
  		}
  	}
  	return dest;
  }

  // @function create(proto: Object, properties?: Object): Object
  // Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
  var create = Object.create || (function () {
  	function F() {}
  	return function (proto) {
  		F.prototype = proto;
  		return new F();
  	};
  })();

  // @function bind(fn: Function, …): Function
  // Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
  // Has a `L.bind()` shortcut.
  function bind(fn, obj) {
  	var slice = Array.prototype.slice;

  	if (fn.bind) {
  		return fn.bind.apply(fn, slice.call(arguments, 1));
  	}

  	var args = slice.call(arguments, 2);

  	return function () {
  		return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
  	};
  }

  // @property lastId: Number
  // Last unique ID used by [`stamp()`](#util-stamp)
  var lastId = 0;

  // @function stamp(obj: Object): Number
  // Returns the unique ID of an object, assigning it one if it doesn't have it.
  function stamp(obj) {
  	/*eslint-disable */
  	obj._leaflet_id = obj._leaflet_id || ++lastId;
  	return obj._leaflet_id;
  	/* eslint-enable */
  }

  // @function throttle(fn: Function, time: Number, context: Object): Function
  // Returns a function which executes function `fn` with the given scope `context`
  // (so that the `this` keyword refers to `context` inside `fn`'s code). The function
  // `fn` will be called no more than one time per given amount of `time`. The arguments
  // received by the bound function will be any arguments passed when binding the
  // function, followed by any arguments passed when invoking the bound function.
  // Has an `L.throttle` shortcut.
  function throttle(fn, time, context) {
  	var lock, args, wrapperFn, later;

  	later = function () {
  		// reset lock and call if queued
  		lock = false;
  		if (args) {
  			wrapperFn.apply(context, args);
  			args = false;
  		}
  	};

  	wrapperFn = function () {
  		if (lock) {
  			// called too soon, queue to call later
  			args = arguments;

  		} else {
  			// call and lock until later
  			fn.apply(context, arguments);
  			setTimeout(later, time);
  			lock = true;
  		}
  	};

  	return wrapperFn;
  }

  // @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
  // Returns the number `num` modulo `range` in such a way so it lies within
  // `range[0]` and `range[1]`. The returned value will be always smaller than
  // `range[1]` unless `includeMax` is set to `true`.
  function wrapNum(x, range, includeMax) {
  	var max = range[1],
  	    min = range[0],
  	    d = max - min;
  	return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
  }

  // @function falseFn(): Function
  // Returns a function which always returns `false`.
  function falseFn() { return false; }

  // @function formatNum(num: Number, digits?: Number): Number
  // Returns the number `num` rounded to `digits` decimals, or to 6 decimals by default.
  function formatNum(num, digits) {
  	var pow = Math.pow(10, (digits === undefined ? 6 : digits));
  	return Math.round(num * pow) / pow;
  }

  // @function trim(str: String): String
  // Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
  function trim(str) {
  	return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
  }

  // @function splitWords(str: String): String[]
  // Trims and splits the string on whitespace and returns the array of parts.
  function splitWords(str) {
  	return trim(str).split(/\s+/);
  }

  // @function setOptions(obj: Object, options: Object): Object
  // Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
  function setOptions(obj, options) {
  	if (!Object.prototype.hasOwnProperty.call(obj, 'options')) {
  		obj.options = obj.options ? create(obj.options) : {};
  	}
  	for (var i in options) {
  		obj.options[i] = options[i];
  	}
  	return obj.options;
  }

  // @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
  // Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
  // translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
  // be appended at the end. If `uppercase` is `true`, the parameter names will
  // be uppercased (e.g. `'?A=foo&B=bar'`)
  function getParamString(obj, existingUrl, uppercase) {
  	var params = [];
  	for (var i in obj) {
  		params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
  	}
  	return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
  }

  var templateRe = /\{ *([\w_-]+) *\}/g;

  // @function template(str: String, data: Object): String
  // Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
  // and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
  // `('Hello foo, bar')`. You can also specify functions instead of strings for
  // data values — they will be evaluated passing `data` as an argument.
  function template(str, data) {
  	return str.replace(templateRe, function (str, key) {
  		var value = data[key];

  		if (value === undefined) {
  			throw new Error('No value provided for variable ' + str);

  		} else if (typeof value === 'function') {
  			value = value(data);
  		}
  		return value;
  	});
  }

  // @function isArray(obj): Boolean
  // Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
  var isArray = Array.isArray || function (obj) {
  	return (Object.prototype.toString.call(obj) === '[object Array]');
  };

  // @function indexOf(array: Array, el: Object): Number
  // Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
  function indexOf(array, el) {
  	for (var i = 0; i < array.length; i++) {
  		if (array[i] === el) { return i; }
  	}
  	return -1;
  }

  // @property emptyImageUrl: String
  // Data URI string containing a base64-encoded empty GIF image.
  // Used as a hack to free memory from unused images on WebKit-powered
  // mobile devices (by setting image `src` to this string).
  var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

  // inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

  function getPrefixed(name) {
  	return window['webkit' + name] || window['moz' + name] || window['ms' + name];
  }

  var lastTime = 0;

  // fallback for IE 7-8
  function timeoutDefer(fn) {
  	var time = +new Date(),
  	    timeToCall = Math.max(0, 16 - (time - lastTime));

  	lastTime = time + timeToCall;
  	return window.setTimeout(fn, timeToCall);
  }

  var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
  var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||
  		getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };

  // @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
  // Schedules `fn` to be executed when the browser repaints. `fn` is bound to
  // `context` if given. When `immediate` is set, `fn` is called immediately if
  // the browser doesn't have native support for
  // [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
  // otherwise it's delayed. Returns a request ID that can be used to cancel the request.
  function requestAnimFrame(fn, context, immediate) {
  	if (immediate && requestFn === timeoutDefer) {
  		fn.call(context);
  	} else {
  		return requestFn.call(window, bind(fn, context));
  	}
  }

  // @function cancelAnimFrame(id: Number): undefined
  // Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
  function cancelAnimFrame(id) {
  	if (id) {
  		cancelFn.call(window, id);
  	}
  }

  var Util = ({
    extend: extend,
    create: create,
    bind: bind,
    lastId: lastId,
    stamp: stamp,
    throttle: throttle,
    wrapNum: wrapNum,
    falseFn: falseFn,
    formatNum: formatNum,
    trim: trim,
    splitWords: splitWords,
    setOptions: setOptions,
    getParamString: getParamString,
    template: template,
    isArray: isArray,
    indexOf: indexOf,
    emptyImageUrl: emptyImageUrl,
    requestFn: requestFn,
    cancelFn: cancelFn,
    requestAnimFrame: requestAnimFrame,
    cancelAnimFrame: cancelAnimFrame
  });

  // @class Class
  // @aka L.Class

  // @section
  // @uninheritable

  // Thanks to John Resig and Dean Edwards for inspiration!

  function Class() {}

  Class.extend = function (props) {

  	// @function extend(props: Object): Function
  	// [Extends the current class](#class-inheritance) given the properties to be included.
  	// Returns a Javascript function that is a class constructor (to be called with `new`).
  	var NewClass = function () {

  		// call the constructor
  		if (this.initialize) {
  			this.initialize.apply(this, arguments);
  		}

  		// call all constructor hooks
  		this.callInitHooks();
  	};

  	var parentProto = NewClass.__super__ = this.prototype;

  	var proto = create(parentProto);
  	proto.constructor = NewClass;

  	NewClass.prototype = proto;

  	// inherit parent's statics
  	for (var i in this) {
  		if (Object.prototype.hasOwnProperty.call(this, i) && i !== 'prototype' && i !== '__super__') {
  			NewClass[i] = this[i];
  		}
  	}

  	// mix static properties into the class
  	if (props.statics) {
  		extend(NewClass, props.statics);
  		delete props.statics;
  	}

  	// mix includes into the prototype
  	if (props.includes) {
  		checkDeprecatedMixinEvents(props.includes);
  		extend.apply(null, [proto].concat(props.includes));
  		delete props.includes;
  	}

  	// merge options
  	if (proto.options) {
  		props.options = extend(create(proto.options), props.options);
  	}

  	// mix given properties into the prototype
  	extend(proto, props);

  	proto._initHooks = [];

  	// add method for calling all hooks
  	proto.callInitHooks = function () {

  		if (this._initHooksCalled) { return; }

  		if (parentProto.callInitHooks) {
  			parentProto.callInitHooks.call(this);
  		}

  		this._initHooksCalled = true;

  		for (var i = 0, len = proto._initHooks.length; i < len; i++) {
  			proto._initHooks[i].call(this);
  		}
  	};

  	return NewClass;
  };


  // @function include(properties: Object): this
  // [Includes a mixin](#class-includes) into the current class.
  Class.include = function (props) {
  	extend(this.prototype, props);
  	return this;
  };

  // @function mergeOptions(options: Object): this
  // [Merges `options`](#class-options) into the defaults of the class.
  Class.mergeOptions = function (options) {
  	extend(this.prototype.options, options);
  	return this;
  };

  // @function addInitHook(fn: Function): this
  // Adds a [constructor hook](#class-constructor-hooks) to the class.
  Class.addInitHook = function (fn) { // (Function) || (String, args...)
  	var args = Array.prototype.slice.call(arguments, 1);

  	var init = typeof fn === 'function' ? fn : function () {
  		this[fn].apply(this, args);
  	};

  	this.prototype._initHooks = this.prototype._initHooks || [];
  	this.prototype._initHooks.push(init);
  	return this;
  };

  function checkDeprecatedMixinEvents(includes) {
  	if (typeof L === 'undefined' || !L || !L.Mixin) { return; }

  	includes = isArray(includes) ? includes : [includes];

  	for (var i = 0; i < includes.length; i++) {
  		if (includes[i] === L.Mixin.Events) {
  			console.warn('Deprecated include of L.Mixin.Events: ' +
  				'this property will be removed in future releases, ' +
  				'please inherit from L.Evented instead.', new Error().stack);
  		}
  	}
  }

  /*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */

  var Events = {
  	/* @method on(type: String, fn: Function, context?: Object): this
  	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
  	 *
  	 * @alternative
  	 * @method on(eventMap: Object): this
  	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  	 */
  	on: function (types, fn, context) {

  		// types can be a map of types/handlers
  		if (typeof types === 'object') {
  			for (var type in types) {
  				// we don't process space-separated events here for performance;
  				// it's a hot path since Layer uses the on(obj) syntax
  				this._on(type, types[type], fn);
  			}

  		} else {
  			// types can be a string of space-separated words
  			types = splitWords(types);

  			for (var i = 0, len = types.length; i < len; i++) {
  				this._on(types[i], fn, context);
  			}
  		}

  		return this;
  	},

  	/* @method off(type: String, fn?: Function, context?: Object): this
  	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
  	 *
  	 * @alternative
  	 * @method off(eventMap: Object): this
  	 * Removes a set of type/listener pairs.
  	 *
  	 * @alternative
  	 * @method off: this
  	 * Removes all listeners to all events on the object. This includes implicitly attached events.
  	 */
  	off: function (types, fn, context) {

  		if (!types) {
  			// clear all listeners if called without arguments
  			delete this._events;

  		} else if (typeof types === 'object') {
  			for (var type in types) {
  				this._off(type, types[type], fn);
  			}

  		} else {
  			types = splitWords(types);

  			for (var i = 0, len = types.length; i < len; i++) {
  				this._off(types[i], fn, context);
  			}
  		}

  		return this;
  	},

  	// attach listener (without syntactic sugar now)
  	_on: function (type, fn, context) {
  		this._events = this._events || {};

  		/* get/init listeners for type */
  		var typeListeners = this._events[type];
  		if (!typeListeners) {
  			typeListeners = [];
  			this._events[type] = typeListeners;
  		}

  		if (context === this) {
  			// Less memory footprint.
  			context = undefined;
  		}
  		var newListener = {fn: fn, ctx: context},
  		    listeners = typeListeners;

  		// check if fn already there
  		for (var i = 0, len = listeners.length; i < len; i++) {
  			if (listeners[i].fn === fn && listeners[i].ctx === context) {
  				return;
  			}
  		}

  		listeners.push(newListener);
  	},

  	_off: function (type, fn, context) {
  		var listeners,
  		    i,
  		    len;

  		if (!this._events) { return; }

  		listeners = this._events[type];

  		if (!listeners) {
  			return;
  		}

  		if (!fn) {
  			// Set all removed listeners to noop so they are not called if remove happens in fire
  			for (i = 0, len = listeners.length; i < len; i++) {
  				listeners[i].fn = falseFn;
  			}
  			// clear all listeners for a type if function isn't specified
  			delete this._events[type];
  			return;
  		}

  		if (context === this) {
  			context = undefined;
  		}

  		if (listeners) {

  			// find fn and remove it
  			for (i = 0, len = listeners.length; i < len; i++) {
  				var l = listeners[i];
  				if (l.ctx !== context) { continue; }
  				if (l.fn === fn) {

  					// set the removed listener to noop so that's not called if remove happens in fire
  					l.fn = falseFn;

  					if (this._firingCount) {
  						/* copy array in case events are being fired */
  						this._events[type] = listeners = listeners.slice();
  					}
  					listeners.splice(i, 1);

  					return;
  				}
  			}
  		}
  	},

  	// @method fire(type: String, data?: Object, propagate?: Boolean): this
  	// Fires an event of the specified type. You can optionally provide an data
  	// object — the first argument of the listener function will contain its
  	// properties. The event can optionally be propagated to event parents.
  	fire: function (type, data, propagate) {
  		if (!this.listens(type, propagate)) { return this; }

  		var event = extend({}, data, {
  			type: type,
  			target: this,
  			sourceTarget: data && data.sourceTarget || this
  		});

  		if (this._events) {
  			var listeners = this._events[type];

  			if (listeners) {
  				this._firingCount = (this._firingCount + 1) || 1;
  				for (var i = 0, len = listeners.length; i < len; i++) {
  					var l = listeners[i];
  					l.fn.call(l.ctx || this, event);
  				}

  				this._firingCount--;
  			}
  		}

  		if (propagate) {
  			// propagate the event to parents (set with addEventParent)
  			this._propagateEvent(event);
  		}

  		return this;
  	},

  	// @method listens(type: String): Boolean
  	// Returns `true` if a particular event type has any listeners attached to it.
  	listens: function (type, propagate) {
  		var listeners = this._events && this._events[type];
  		if (listeners && listeners.length) { return true; }

  		if (propagate) {
  			// also check parents for listeners if event propagates
  			for (var id in this._eventParents) {
  				if (this._eventParents[id].listens(type, propagate)) { return true; }
  			}
  		}
  		return false;
  	},

  	// @method once(…): this
  	// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
  	once: function (types, fn, context) {

  		if (typeof types === 'object') {
  			for (var type in types) {
  				this.once(type, types[type], fn);
  			}
  			return this;
  		}

  		var handler = bind(function () {
  			this
  			    .off(types, fn, context)
  			    .off(types, handler, context);
  		}, this);

  		// add a listener that's executed once and removed after that
  		return this
  		    .on(types, fn, context)
  		    .on(types, handler, context);
  	},

  	// @method addEventParent(obj: Evented): this
  	// Adds an event parent - an `Evented` that will receive propagated events
  	addEventParent: function (obj) {
  		this._eventParents = this._eventParents || {};
  		this._eventParents[stamp(obj)] = obj;
  		return this;
  	},

  	// @method removeEventParent(obj: Evented): this
  	// Removes an event parent, so it will stop receiving propagated events
  	removeEventParent: function (obj) {
  		if (this._eventParents) {
  			delete this._eventParents[stamp(obj)];
  		}
  		return this;
  	},

  	_propagateEvent: function (e) {
  		for (var id in this._eventParents) {
  			this._eventParents[id].fire(e.type, extend({
  				layer: e.target,
  				propagatedFrom: e.target
  			}, e), true);
  		}
  	}
  };

  // aliases; we should ditch those eventually

  // @method addEventListener(…): this
  // Alias to [`on(…)`](#evented-on)
  Events.addEventListener = Events.on;

  // @method removeEventListener(…): this
  // Alias to [`off(…)`](#evented-off)

  // @method clearAllEventListeners(…): this
  // Alias to [`off()`](#evented-off)
  Events.removeEventListener = Events.clearAllEventListeners = Events.off;

  // @method addOneTimeEventListener(…): this
  // Alias to [`once(…)`](#evented-once)
  Events.addOneTimeEventListener = Events.once;

  // @method fireEvent(…): this
  // Alias to [`fire(…)`](#evented-fire)
  Events.fireEvent = Events.fire;

  // @method hasEventListeners(…): Boolean
  // Alias to [`listens(…)`](#evented-listens)
  Events.hasEventListeners = Events.listens;

  var Evented = Class.extend(Events);

  /*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   *
   * Note that `Point` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */

  function Point(x, y, round) {
  	// @property x: Number; The `x` coordinate of the point
  	this.x = (round ? Math.round(x) : x);
  	// @property y: Number; The `y` coordinate of the point
  	this.y = (round ? Math.round(y) : y);
  }

  var trunc = Math.trunc || function (v) {
  	return v > 0 ? Math.floor(v) : Math.ceil(v);
  };

  Point.prototype = {

  	// @method clone(): Point
  	// Returns a copy of the current point.
  	clone: function () {
  		return new Point(this.x, this.y);
  	},

  	// @method add(otherPoint: Point): Point
  	// Returns the result of addition of the current and the given points.
  	add: function (point) {
  		// non-destructive, returns a new point
  		return this.clone()._add(toPoint(point));
  	},

  	_add: function (point) {
  		// destructive, used directly for performance in situations where it's safe to modify existing point
  		this.x += point.x;
  		this.y += point.y;
  		return this;
  	},

  	// @method subtract(otherPoint: Point): Point
  	// Returns the result of subtraction of the given point from the current.
  	subtract: function (point) {
  		return this.clone()._subtract(toPoint(point));
  	},

  	_subtract: function (point) {
  		this.x -= point.x;
  		this.y -= point.y;
  		return this;
  	},

  	// @method divideBy(num: Number): Point
  	// Returns the result of division of the current point by the given number.
  	divideBy: function (num) {
  		return this.clone()._divideBy(num);
  	},

  	_divideBy: function (num) {
  		this.x /= num;
  		this.y /= num;
  		return this;
  	},

  	// @method multiplyBy(num: Number): Point
  	// Returns the result of multiplication of the current point by the given number.
  	multiplyBy: function (num) {
  		return this.clone()._multiplyBy(num);
  	},

  	_multiplyBy: function (num) {
  		this.x *= num;
  		this.y *= num;
  		return this;
  	},

  	// @method scaleBy(scale: Point): Point
  	// Multiply each coordinate of the current point by each coordinate of
  	// `scale`. In linear algebra terms, multiply the point by the
  	// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
  	// defined by `scale`.
  	scaleBy: function (point) {
  		return new Point(this.x * point.x, this.y * point.y);
  	},

  	// @method unscaleBy(scale: Point): Point
  	// Inverse of `scaleBy`. Divide each coordinate of the current point by
  	// each coordinate of `scale`.
  	unscaleBy: function (point) {
  		return new Point(this.x / point.x, this.y / point.y);
  	},

  	// @method round(): Point
  	// Returns a copy of the current point with rounded coordinates.
  	round: function () {
  		return this.clone()._round();
  	},

  	_round: function () {
  		this.x = Math.round(this.x);
  		this.y = Math.round(this.y);
  		return this;
  	},

  	// @method floor(): Point
  	// Returns a copy of the current point with floored coordinates (rounded down).
  	floor: function () {
  		return this.clone()._floor();
  	},

  	_floor: function () {
  		this.x = Math.floor(this.x);
  		this.y = Math.floor(this.y);
  		return this;
  	},

  	// @method ceil(): Point
  	// Returns a copy of the current point with ceiled coordinates (rounded up).
  	ceil: function () {
  		return this.clone()._ceil();
  	},

  	_ceil: function () {
  		this.x = Math.ceil(this.x);
  		this.y = Math.ceil(this.y);
  		return this;
  	},

  	// @method trunc(): Point
  	// Returns a copy of the current point with truncated coordinates (rounded towards zero).
  	trunc: function () {
  		return this.clone()._trunc();
  	},

  	_trunc: function () {
  		this.x = trunc(this.x);
  		this.y = trunc(this.y);
  		return this;
  	},

  	// @method distanceTo(otherPoint: Point): Number
  	// Returns the cartesian distance between the current and the given points.
  	distanceTo: function (point) {
  		point = toPoint(point);

  		var x = point.x - this.x,
  		    y = point.y - this.y;

  		return Math.sqrt(x * x + y * y);
  	},

  	// @method equals(otherPoint: Point): Boolean
  	// Returns `true` if the given point has the same coordinates.
  	equals: function (point) {
  		point = toPoint(point);

  		return point.x === this.x &&
  		       point.y === this.y;
  	},

  	// @method contains(otherPoint: Point): Boolean
  	// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
  	contains: function (point) {
  		point = toPoint(point);

  		return Math.abs(point.x) <= Math.abs(this.x) &&
  		       Math.abs(point.y) <= Math.abs(this.y);
  	},

  	// @method toString(): String
  	// Returns a string representation of the point for debugging purposes.
  	toString: function () {
  		return 'Point(' +
  		        formatNum(this.x) + ', ' +
  		        formatNum(this.y) + ')';
  	}
  };

  // @factory L.point(x: Number, y: Number, round?: Boolean)
  // Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.

  // @alternative
  // @factory L.point(coords: Number[])
  // Expects an array of the form `[x, y]` instead.

  // @alternative
  // @factory L.point(coords: Object)
  // Expects a plain object of the form `{x: Number, y: Number}` instead.
  function toPoint(x, y, round) {
  	if (x instanceof Point) {
  		return x;
  	}
  	if (isArray(x)) {
  		return new Point(x[0], x[1]);
  	}
  	if (x === undefined || x === null) {
  		return x;
  	}
  	if (typeof x === 'object' && 'x' in x && 'y' in x) {
  		return new Point(x.x, x.y);
  	}
  	return new Point(x, y, round);
  }

  /*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   *
   * Note that `Bounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */

  function Bounds(a, b) {
  	if (!a) { return; }

  	var points = b ? [a, b] : a;

  	for (var i = 0, len = points.length; i < len; i++) {
  		this.extend(points[i]);
  	}
  }

  Bounds.prototype = {
  	// @method extend(point: Point): this
  	// Extends the bounds to contain the given point.
  	extend: function (point) { // (Point)
  		point = toPoint(point);

  		// @property min: Point
  		// The top left corner of the rectangle.
  		// @property max: Point
  		// The bottom right corner of the rectangle.
  		if (!this.min && !this.max) {
  			this.min = point.clone();
  			this.max = point.clone();
  		} else {
  			this.min.x = Math.min(point.x, this.min.x);
  			this.max.x = Math.max(point.x, this.max.x);
  			this.min.y = Math.min(point.y, this.min.y);
  			this.max.y = Math.max(point.y, this.max.y);
  		}
  		return this;
  	},

  	// @method getCenter(round?: Boolean): Point
  	// Returns the center point of the bounds.
  	getCenter: function (round) {
  		return new Point(
  		        (this.min.x + this.max.x) / 2,
  		        (this.min.y + this.max.y) / 2, round);
  	},

  	// @method getBottomLeft(): Point
  	// Returns the bottom-left point of the bounds.
  	getBottomLeft: function () {
  		return new Point(this.min.x, this.max.y);
  	},

  	// @method getTopRight(): Point
  	// Returns the top-right point of the bounds.
  	getTopRight: function () { // -> Point
  		return new Point(this.max.x, this.min.y);
  	},

  	// @method getTopLeft(): Point
  	// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
  	getTopLeft: function () {
  		return this.min; // left, top
  	},

  	// @method getBottomRight(): Point
  	// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
  	getBottomRight: function () {
  		return this.max; // right, bottom
  	},

  	// @method getSize(): Point
  	// Returns the size of the given bounds
  	getSize: function () {
  		return this.max.subtract(this.min);
  	},

  	// @method contains(otherBounds: Bounds): Boolean
  	// Returns `true` if the rectangle contains the given one.
  	// @alternative
  	// @method contains(point: Point): Boolean
  	// Returns `true` if the rectangle contains the given point.
  	contains: function (obj) {
  		var min, max;

  		if (typeof obj[0] === 'number' || obj instanceof Point) {
  			obj = toPoint(obj);
  		} else {
  			obj = toBounds(obj);
  		}

  		if (obj instanceof Bounds) {
  			min = obj.min;
  			max = obj.max;
  		} else {
  			min = max = obj;
  		}

  		return (min.x >= this.min.x) &&
  		       (max.x <= this.max.x) &&
  		       (min.y >= this.min.y) &&
  		       (max.y <= this.max.y);
  	},

  	// @method intersects(otherBounds: Bounds): Boolean
  	// Returns `true` if the rectangle intersects the given bounds. Two bounds
  	// intersect if they have at least one point in common.
  	intersects: function (bounds) { // (Bounds) -> Boolean
  		bounds = toBounds(bounds);

  		var min = this.min,
  		    max = this.max,
  		    min2 = bounds.min,
  		    max2 = bounds.max,
  		    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
  		    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

  		return xIntersects && yIntersects;
  	},

  	// @method overlaps(otherBounds: Bounds): Boolean
  	// Returns `true` if the rectangle overlaps the given bounds. Two bounds
  	// overlap if their intersection is an area.
  	overlaps: function (bounds) { // (Bounds) -> Boolean
  		bounds = toBounds(bounds);

  		var min = this.min,
  		    max = this.max,
  		    min2 = bounds.min,
  		    max2 = bounds.max,
  		    xOverlaps = (max2.x > min.x) && (min2.x < max.x),
  		    yOverlaps = (max2.y > min.y) && (min2.y < max.y);

  		return xOverlaps && yOverlaps;
  	},

  	isValid: function () {
  		return !!(this.min && this.max);
  	}
  };


  // @factory L.bounds(corner1: Point, corner2: Point)
  // Creates a Bounds object from two corners coordinate pairs.
  // @alternative
  // @factory L.bounds(points: Point[])
  // Creates a Bounds object from the given array of points.
  function toBounds(a, b) {
  	if (!a || a instanceof Bounds) {
  		return a;
  	}
  	return new Bounds(a, b);
  }

  /*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   *
   * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */

  function LatLngBounds(corner1, corner2) { // (LatLng, LatLng) or (LatLng[])
  	if (!corner1) { return; }

  	var latlngs = corner2 ? [corner1, corner2] : corner1;

  	for (var i = 0, len = latlngs.length; i < len; i++) {
  		this.extend(latlngs[i]);
  	}
  }

  LatLngBounds.prototype = {

  	// @method extend(latlng: LatLng): this
  	// Extend the bounds to contain the given point

  	// @alternative
  	// @method extend(otherBounds: LatLngBounds): this
  	// Extend the bounds to contain the given bounds
  	extend: function (obj) {
  		var sw = this._southWest,
  		    ne = this._northEast,
  		    sw2, ne2;

  		if (obj instanceof LatLng) {
  			sw2 = obj;
  			ne2 = obj;

  		} else if (obj instanceof LatLngBounds) {
  			sw2 = obj._southWest;
  			ne2 = obj._northEast;

  			if (!sw2 || !ne2) { return this; }

  		} else {
  			return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
  		}

  		if (!sw && !ne) {
  			this._southWest = new LatLng(sw2.lat, sw2.lng);
  			this._northEast = new LatLng(ne2.lat, ne2.lng);
  		} else {
  			sw.lat = Math.min(sw2.lat, sw.lat);
  			sw.lng = Math.min(sw2.lng, sw.lng);
  			ne.lat = Math.max(ne2.lat, ne.lat);
  			ne.lng = Math.max(ne2.lng, ne.lng);
  		}

  		return this;
  	},

  	// @method pad(bufferRatio: Number): LatLngBounds
  	// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
  	// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
  	// Negative values will retract the bounds.
  	pad: function (bufferRatio) {
  		var sw = this._southWest,
  		    ne = this._northEast,
  		    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
  		    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

  		return new LatLngBounds(
  		        new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
  		        new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
  	},

  	// @method getCenter(): LatLng
  	// Returns the center point of the bounds.
  	getCenter: function () {
  		return new LatLng(
  		        (this._southWest.lat + this._northEast.lat) / 2,
  		        (this._southWest.lng + this._northEast.lng) / 2);
  	},

  	// @method getSouthWest(): LatLng
  	// Returns the south-west point of the bounds.
  	getSouthWest: function () {
  		return this._southWest;
  	},

  	// @method getNorthEast(): LatLng
  	// Returns the north-east point of the bounds.
  	getNorthEast: function () {
  		return this._northEast;
  	},

  	// @method getNorthWest(): LatLng
  	// Returns the north-west point of the bounds.
  	getNorthWest: function () {
  		return new LatLng(this.getNorth(), this.getWest());
  	},

  	// @method getSouthEast(): LatLng
  	// Returns the south-east point of the bounds.
  	getSouthEast: function () {
  		return new LatLng(this.getSouth(), this.getEast());
  	},

  	// @method getWest(): Number
  	// Returns the west longitude of the bounds
  	getWest: function () {
  		return this._southWest.lng;
  	},

  	// @method getSouth(): Number
  	// Returns the south latitude of the bounds
  	getSouth: function () {
  		return this._southWest.lat;
  	},

  	// @method getEast(): Number
  	// Returns the east longitude of the bounds
  	getEast: function () {
  		return this._northEast.lng;
  	},

  	// @method getNorth(): Number
  	// Returns the north latitude of the bounds
  	getNorth: function () {
  		return this._northEast.lat;
  	},

  	// @method contains(otherBounds: LatLngBounds): Boolean
  	// Returns `true` if the rectangle contains the given one.

  	// @alternative
  	// @method contains (latlng: LatLng): Boolean
  	// Returns `true` if the rectangle contains the given point.
  	contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
  		if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
  			obj = toLatLng(obj);
  		} else {
  			obj = toLatLngBounds(obj);
  		}

  		var sw = this._southWest,
  		    ne = this._northEast,
  		    sw2, ne2;

  		if (obj instanceof LatLngBounds) {
  			sw2 = obj.getSouthWest();
  			ne2 = obj.getNorthEast();
  		} else {
  			sw2 = ne2 = obj;
  		}

  		return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
  		       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
  	},

  	// @method intersects(otherBounds: LatLngBounds): Boolean
  	// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
  	intersects: function (bounds) {
  		bounds = toLatLngBounds(bounds);

  		var sw = this._southWest,
  		    ne = this._northEast,
  		    sw2 = bounds.getSouthWest(),
  		    ne2 = bounds.getNorthEast(),

  		    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
  		    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

  		return latIntersects && lngIntersects;
  	},

  	// @method overlaps(otherBounds: LatLngBounds): Boolean
  	// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
  	overlaps: function (bounds) {
  		bounds = toLatLngBounds(bounds);

  		var sw = this._southWest,
  		    ne = this._northEast,
  		    sw2 = bounds.getSouthWest(),
  		    ne2 = bounds.getNorthEast(),

  		    latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),
  		    lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);

  		return latOverlaps && lngOverlaps;
  	},

  	// @method toBBoxString(): String
  	// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
  	toBBoxString: function () {
  		return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
  	},

  	// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
  	// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
  	equals: function (bounds, maxMargin) {
  		if (!bounds) { return false; }

  		bounds = toLatLngBounds(bounds);

  		return this._southWest.equals(bounds.getSouthWest(), maxMargin) &&
  		       this._northEast.equals(bounds.getNorthEast(), maxMargin);
  	},

  	// @method isValid(): Boolean
  	// Returns `true` if the bounds are properly initialized.
  	isValid: function () {
  		return !!(this._southWest && this._northEast);
  	}
  };

  // TODO International date line?

  // @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
  // Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.

  // @alternative
  // @factory L.latLngBounds(latlngs: LatLng[])
  // Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
  function toLatLngBounds(a, b) {
  	if (a instanceof LatLngBounds) {
  		return a;
  	}
  	return new LatLngBounds(a, b);
  }

  /* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   *
   * Note that `LatLng` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */

  function LatLng(lat, lng, alt) {
  	if (isNaN(lat) || isNaN(lng)) {
  		throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
  	}

  	// @property lat: Number
  	// Latitude in degrees
  	this.lat = +lat;

  	// @property lng: Number
  	// Longitude in degrees
  	this.lng = +lng;

  	// @property alt: Number
  	// Altitude in meters (optional)
  	if (alt !== undefined) {
  		this.alt = +alt;
  	}
  }

  LatLng.prototype = {
  	// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
  	// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
  	equals: function (obj, maxMargin) {
  		if (!obj) { return false; }

  		obj = toLatLng(obj);

  		var margin = Math.max(
  		        Math.abs(this.lat - obj.lat),
  		        Math.abs(this.lng - obj.lng));

  		return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
  	},

  	// @method toString(): String
  	// Returns a string representation of the point (for debugging purposes).
  	toString: function (precision) {
  		return 'LatLng(' +
  		        formatNum(this.lat, precision) + ', ' +
  		        formatNum(this.lng, precision) + ')';
  	},

  	// @method distanceTo(otherLatLng: LatLng): Number
  	// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
  	distanceTo: function (other) {
  		return Earth.distance(this, toLatLng(other));
  	},

  	// @method wrap(): LatLng
  	// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
  	wrap: function () {
  		return Earth.wrapLatLng(this);
  	},

  	// @method toBounds(sizeInMeters: Number): LatLngBounds
  	// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
  	toBounds: function (sizeInMeters) {
  		var latAccuracy = 180 * sizeInMeters / 40075017,
  		    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);

  		return toLatLngBounds(
  		        [this.lat - latAccuracy, this.lng - lngAccuracy],
  		        [this.lat + latAccuracy, this.lng + lngAccuracy]);
  	},

  	clone: function () {
  		return new LatLng(this.lat, this.lng, this.alt);
  	}
  };



  // @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
  // Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).

  // @alternative
  // @factory L.latLng(coords: Array): LatLng
  // Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.

  // @alternative
  // @factory L.latLng(coords: Object): LatLng
  // Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

  function toLatLng(a, b, c) {
  	if (a instanceof LatLng) {
  		return a;
  	}
  	if (isArray(a) && typeof a[0] !== 'object') {
  		if (a.length === 3) {
  			return new LatLng(a[0], a[1], a[2]);
  		}
  		if (a.length === 2) {
  			return new LatLng(a[0], a[1]);
  		}
  		return null;
  	}
  	if (a === undefined || a === null) {
  		return a;
  	}
  	if (typeof a === 'object' && 'lat' in a) {
  		return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
  	}
  	if (b === undefined) {
  		return null;
  	}
  	return new LatLng(a, b, c);
  }

  /*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   *
   * Note that the CRS instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
   */

  var CRS = {
  	// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
  	// Projects geographical coordinates into pixel coordinates for a given zoom.
  	latLngToPoint: function (latlng, zoom) {
  		var projectedPoint = this.projection.project(latlng),
  		    scale = this.scale(zoom);

  		return this.transformation._transform(projectedPoint, scale);
  	},

  	// @method pointToLatLng(point: Point, zoom: Number): LatLng
  	// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
  	// zoom into geographical coordinates.
  	pointToLatLng: function (point, zoom) {
  		var scale = this.scale(zoom),
  		    untransformedPoint = this.transformation.untransform(point, scale);

  		return this.projection.unproject(untransformedPoint);
  	},

  	// @method project(latlng: LatLng): Point
  	// Projects geographical coordinates into coordinates in units accepted for
  	// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
  	project: function (latlng) {
  		return this.projection.project(latlng);
  	},

  	// @method unproject(point: Point): LatLng
  	// Given a projected coordinate returns the corresponding LatLng.
  	// The inverse of `project`.
  	unproject: function (point) {
  		return this.projection.unproject(point);
  	},

  	// @method scale(zoom: Number): Number
  	// Returns the scale used when transforming projected coordinates into
  	// pixel coordinates for a particular zoom. For example, it returns
  	// `256 * 2^zoom` for Mercator-based CRS.
  	scale: function (zoom) {
  		return 256 * Math.pow(2, zoom);
  	},

  	// @method zoom(scale: Number): Number
  	// Inverse of `scale()`, returns the zoom level corresponding to a scale
  	// factor of `scale`.
  	zoom: function (scale) {
  		return Math.log(scale / 256) / Math.LN2;
  	},

  	// @method getProjectedBounds(zoom: Number): Bounds
  	// Returns the projection's bounds scaled and transformed for the provided `zoom`.
  	getProjectedBounds: function (zoom) {
  		if (this.infinite) { return null; }

  		var b = this.projection.bounds,
  		    s = this.scale(zoom),
  		    min = this.transformation.transform(b.min, s),
  		    max = this.transformation.transform(b.max, s);

  		return new Bounds(min, max);
  	},

  	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
  	// Returns the distance between two geographical coordinates.

  	// @property code: String
  	// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
  	//
  	// @property wrapLng: Number[]
  	// An array of two numbers defining whether the longitude (horizontal) coordinate
  	// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
  	// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
  	//
  	// @property wrapLat: Number[]
  	// Like `wrapLng`, but for the latitude (vertical) axis.

  	// wrapLng: [min, max],
  	// wrapLat: [min, max],

  	// @property infinite: Boolean
  	// If true, the coordinate space will be unbounded (infinite in both axes)
  	infinite: false,

  	// @method wrapLatLng(latlng: LatLng): LatLng
  	// Returns a `LatLng` where lat and lng has been wrapped according to the
  	// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
  	wrapLatLng: function (latlng) {
  		var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
  		    lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
  		    alt = latlng.alt;

  		return new LatLng(lat, lng, alt);
  	},

  	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
  	// Returns a `LatLngBounds` with the same size as the given one, ensuring
  	// that its center is within the CRS's bounds.
  	// Only accepts actual `L.LatLngBounds` instances, not arrays.
  	wrapLatLngBounds: function (bounds) {
  		var center = bounds.getCenter(),
  		    newCenter = this.wrapLatLng(center),
  		    latShift = center.lat - newCenter.lat,
  		    lngShift = center.lng - newCenter.lng;

  		if (latShift === 0 && lngShift === 0) {
  			return bounds;
  		}

  		var sw = bounds.getSouthWest(),
  		    ne = bounds.getNorthEast(),
  		    newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
  		    newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);

  		return new LatLngBounds(newSw, newNe);
  	}
  };

  /*
   * @namespace CRS
   * @crs L.CRS.Earth
   *
   * Serves as the base for CRS that are global such that they cover the earth.
   * Can only be used as the base for other CRS and cannot be used directly,
   * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
   * meters.
   */

  var Earth = extend({}, CRS, {
  	wrapLng: [-180, 180],

  	// Mean Earth Radius, as recommended for use by
  	// the International Union of Geodesy and Geophysics,
  	// see http://rosettacode.org/wiki/Haversine_formula
  	R: 6371000,

  	// distance between two geographical points using spherical law of cosines approximation
  	distance: function (latlng1, latlng2) {
  		var rad = Math.PI / 180,
  		    lat1 = latlng1.lat * rad,
  		    lat2 = latlng2.lat * rad,
  		    sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
  		    sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
  		    a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
  		    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  		return this.R * c;
  	}
  });

  /*
   * @namespace Projection
   * @projection L.Projection.SphericalMercator
   *
   * Spherical Mercator projection — the most common projection for online maps,
   * used by almost all free and commercial tile providers. Assumes that Earth is
   * a sphere. Used by the `EPSG:3857` CRS.
   */

  var earthRadius = 6378137;

  var SphericalMercator = {

  	R: earthRadius,
  	MAX_LATITUDE: 85.0511287798,

  	project: function (latlng) {
  		var d = Math.PI / 180,
  		    max = this.MAX_LATITUDE,
  		    lat = Math.max(Math.min(max, latlng.lat), -max),
  		    sin = Math.sin(lat * d);

  		return new Point(
  			this.R * latlng.lng * d,
  			this.R * Math.log((1 + sin) / (1 - sin)) / 2);
  	},

  	unproject: function (point) {
  		var d = 180 / Math.PI;

  		return new LatLng(
  			(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
  			point.x * d / this.R);
  	},

  	bounds: (function () {
  		var d = earthRadius * Math.PI;
  		return new Bounds([-d, -d], [d, d]);
  	})()
  };

  /*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */


  // factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
  // Creates a `Transformation` object with the given coefficients.
  function Transformation(a, b, c, d) {
  	if (isArray(a)) {
  		// use array properties
  		this._a = a[0];
  		this._b = a[1];
  		this._c = a[2];
  		this._d = a[3];
  		return;
  	}
  	this._a = a;
  	this._b = b;
  	this._c = c;
  	this._d = d;
  }

  Transformation.prototype = {
  	// @method transform(point: Point, scale?: Number): Point
  	// Returns a transformed point, optionally multiplied by the given scale.
  	// Only accepts actual `L.Point` instances, not arrays.
  	transform: function (point, scale) { // (Point, Number) -> Point
  		return this._transform(point.clone(), scale);
  	},

  	// destructive transform (faster)
  	_transform: function (point, scale) {
  		scale = scale || 1;
  		point.x = scale * (this._a * point.x + this._b);
  		point.y = scale * (this._c * point.y + this._d);
  		return point;
  	},

  	// @method untransform(point: Point, scale?: Number): Point
  	// Returns the reverse transformation of the given point, optionally divided
  	// by the given scale. Only accepts actual `L.Point` instances, not arrays.
  	untransform: function (point, scale) {
  		scale = scale || 1;
  		return new Point(
  		        (point.x / scale - this._b) / this._a,
  		        (point.y / scale - this._d) / this._c);
  	}
  };

  // factory L.transformation(a: Number, b: Number, c: Number, d: Number)

  // @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
  // Instantiates a Transformation object with the given coefficients.

  // @alternative
  // @factory L.transformation(coefficients: Array): Transformation
  // Expects an coefficients array of the form
  // `[a: Number, b: Number, c: Number, d: Number]`.

  function toTransformation(a, b, c, d) {
  	return new Transformation(a, b, c, d);
  }

  /*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */

  var EPSG3857 = extend({}, Earth, {
  	code: 'EPSG:3857',
  	projection: SphericalMercator,

  	transformation: (function () {
  		var scale = 0.5 / (Math.PI * SphericalMercator.R);
  		return toTransformation(scale, 0.5, -scale, 0.5);
  	}())
  });

  var EPSG900913 = extend({}, EPSG3857, {
  	code: 'EPSG:900913'
  });

  // @namespace SVG; @section
  // There are several static functions which can be called without instantiating L.SVG:

  // @function create(name: String): SVGElement
  // Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
  // corresponding to the class name passed. For example, using 'line' will return
  // an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
  function svgCreate(name) {
  	return document.createElementNS('http://www.w3.org/2000/svg', name);
  }

  // @function pointsToPath(rings: Point[], closed: Boolean): String
  // Generates a SVG path string for multiple rings, with each ring turning
  // into "M..L..L.." instructions
  function pointsToPath(rings, closed) {
  	var str = '',
  	i, j, len, len2, points, p;

  	for (i = 0, len = rings.length; i < len; i++) {
  		points = rings[i];

  		for (j = 0, len2 = points.length; j < len2; j++) {
  			p = points[j];
  			str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
  		}

  		// closes the ring for polygons; "x" is VML syntax
  		str += closed ? (svg ? 'z' : 'x') : '';
  	}

  	// SVG complains about empty path strings
  	return str || 'M0 0';
  }

  /*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */

  var style$1 = document.documentElement.style;

  // @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
  var ie = 'ActiveXObject' in window;

  // @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
  var ielt9 = ie && !document.addEventListener;

  // @property edge: Boolean; `true` for the Edge web browser.
  var edge = 'msLaunchUri' in navigator && !('documentMode' in document);

  // @property webkit: Boolean;
  // `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
  var webkit = userAgentContains('webkit');

  // @property android: Boolean
  // `true` for any browser running on an Android platform.
  var android = userAgentContains('android');

  // @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.
  var android23 = userAgentContains('android 2') || userAgentContains('android 3');

  /* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */
  var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
  // @property androidStock: Boolean; `true` for the Android stock browser (i.e. not Chrome)
  var androidStock = android && userAgentContains('Google') && webkitVer < 537 && !('AudioNode' in window);

  // @property opera: Boolean; `true` for the Opera browser
  var opera = !!window.opera;

  // @property chrome: Boolean; `true` for the Chrome browser.
  var chrome = !edge && userAgentContains('chrome');

  // @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
  var gecko = userAgentContains('gecko') && !webkit && !opera && !ie;

  // @property safari: Boolean; `true` for the Safari browser.
  var safari = !chrome && userAgentContains('safari');

  var phantom = userAgentContains('phantom');

  // @property opera12: Boolean
  // `true` for the Opera browser supporting CSS transforms (version 12 or later).
  var opera12 = 'OTransition' in style$1;

  // @property win: Boolean; `true` when the browser is running in a Windows platform
  var win = navigator.platform.indexOf('Win') === 0;

  // @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
  var ie3d = ie && ('transition' in style$1);

  // @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
  var webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23;

  // @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
  var gecko3d = 'MozPerspective' in style$1;

  // @property any3d: Boolean
  // `true` for all browsers supporting CSS transforms.
  var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;

  // @property mobile: Boolean; `true` for all browsers running in a mobile device.
  var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile');

  // @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
  var mobileWebkit = mobile && webkit;

  // @property mobileWebkit3d: Boolean
  // `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
  var mobileWebkit3d = mobile && webkit3d;

  // @property msPointer: Boolean
  // `true` for browsers implementing the Microsoft touch events model (notably IE10).
  var msPointer = !window.PointerEvent && window.MSPointerEvent;

  // @property pointer: Boolean
  // `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
  var pointer = !!(window.PointerEvent || msPointer);

  // @property touch: Boolean
  // `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
  // This does not necessarily mean that the browser is running in a computer with
  // a touchscreen, it only means that the browser is capable of understanding
  // touch events.
  var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window ||
  		(window.DocumentTouch && document instanceof window.DocumentTouch));

  // @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
  var mobileOpera = mobile && opera;

  // @property mobileGecko: Boolean
  // `true` for gecko-based browsers running in a mobile device.
  var mobileGecko = mobile && gecko;

  // @property retina: Boolean
  // `true` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.
  var retina = (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1;

  // @property passiveEvents: Boolean
  // `true` for browsers that support passive events.
  var passiveEvents = (function () {
  	var supportsPassiveOption = false;
  	try {
  		var opts = Object.defineProperty({}, 'passive', {
  			get: function () { // eslint-disable-line getter-return
  				supportsPassiveOption = true;
  			}
  		});
  		window.addEventListener('testPassiveEventSupport', falseFn, opts);
  		window.removeEventListener('testPassiveEventSupport', falseFn, opts);
  	} catch (e) {
  		// Errors can safely be ignored since this is only a browser support test.
  	}
  	return supportsPassiveOption;
  }());

  // @property canvas: Boolean
  // `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
  var canvas = (function () {
  	return !!document.createElement('canvas').getContext;
  }());

  // @property svg: Boolean
  // `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
  var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect);

  // @property vml: Boolean
  // `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
  var vml = !svg && (function () {
  	try {
  		var div = document.createElement('div');
  		div.innerHTML = '<v:shape adj="1"/>';

  		var shape = div.firstChild;
  		shape.style.behavior = 'url(#default#VML)';

  		return shape && (typeof shape.adj === 'object');

  	} catch (e) {
  		return false;
  	}
  }());


  function userAgentContains(str) {
  	return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
  }

  var Browser = ({
    ie: ie,
    ielt9: ielt9,
    edge: edge,
    webkit: webkit,
    android: android,
    android23: android23,
    androidStock: androidStock,
    opera: opera,
    chrome: chrome,
    gecko: gecko,
    safari: safari,
    phantom: phantom,
    opera12: opera12,
    win: win,
    ie3d: ie3d,
    webkit3d: webkit3d,
    gecko3d: gecko3d,
    any3d: any3d,
    mobile: mobile,
    mobileWebkit: mobileWebkit,
    mobileWebkit3d: mobileWebkit3d,
    msPointer: msPointer,
    pointer: pointer,
    touch: touch,
    mobileOpera: mobileOpera,
    mobileGecko: mobileGecko,
    retina: retina,
    passiveEvents: passiveEvents,
    canvas: canvas,
    svg: svg,
    vml: vml
  });

  /*
   * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
   */


  var POINTER_DOWN =   msPointer ? 'MSPointerDown'   : 'pointerdown';
  var POINTER_MOVE =   msPointer ? 'MSPointerMove'   : 'pointermove';
  var POINTER_UP =     msPointer ? 'MSPointerUp'     : 'pointerup';
  var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';

  var _pointers = {};
  var _pointerDocListener = false;

  // Provides a touch events wrapper for (ms)pointer events.
  // ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

  function addPointerListener(obj, type, handler, id) {
  	if (type === 'touchstart') {
  		_addPointerStart(obj, handler, id);

  	} else if (type === 'touchmove') {
  		_addPointerMove(obj, handler, id);

  	} else if (type === 'touchend') {
  		_addPointerEnd(obj, handler, id);
  	}

  	return this;
  }

  function removePointerListener(obj, type, id) {
  	var handler = obj['_leaflet_' + type + id];

  	if (type === 'touchstart') {
  		obj.removeEventListener(POINTER_DOWN, handler, false);

  	} else if (type === 'touchmove') {
  		obj.removeEventListener(POINTER_MOVE, handler, false);

  	} else if (type === 'touchend') {
  		obj.removeEventListener(POINTER_UP, handler, false);
  		obj.removeEventListener(POINTER_CANCEL, handler, false);
  	}

  	return this;
  }

  function _addPointerStart(obj, handler, id) {
  	var onDown = bind(function (e) {
  		// IE10 specific: MsTouch needs preventDefault. See #2000
  		if (e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH) {
  			preventDefault(e);
  		}

  		_handlePointer(e, handler);
  	});

  	obj['_leaflet_touchstart' + id] = onDown;
  	obj.addEventListener(POINTER_DOWN, onDown, false);

  	// need to keep track of what pointers and how many are active to provide e.touches emulation
  	if (!_pointerDocListener) {
  		// we listen document as any drags that end by moving the touch off the screen get fired there
  		document.addEventListener(POINTER_DOWN, _globalPointerDown, true);
  		document.addEventListener(POINTER_MOVE, _globalPointerMove, true);
  		document.addEventListener(POINTER_UP, _globalPointerUp, true);
  		document.addEventListener(POINTER_CANCEL, _globalPointerUp, true);

  		_pointerDocListener = true;
  	}
  }

  function _globalPointerDown(e) {
  	_pointers[e.pointerId] = e;
  }

  function _globalPointerMove(e) {
  	if (_pointers[e.pointerId]) {
  		_pointers[e.pointerId] = e;
  	}
  }

  function _globalPointerUp(e) {
  	delete _pointers[e.pointerId];
  }

  function _handlePointer(e, handler) {
  	e.touches = [];
  	for (var i in _pointers) {
  		e.touches.push(_pointers[i]);
  	}
  	e.changedTouches = [e];

  	handler(e);
  }

  function _addPointerMove(obj, handler, id) {
  	var onMove = function (e) {
  		// don't fire touch moves when mouse isn't down
  		if ((e.pointerType === (e.MSPOINTER_TYPE_MOUSE || 'mouse')) && e.buttons === 0) {
  			return;
  		}

  		_handlePointer(e, handler);
  	};

  	obj['_leaflet_touchmove' + id] = onMove;
  	obj.addEventListener(POINTER_MOVE, onMove, false);
  }

  function _addPointerEnd(obj, handler, id) {
  	var onUp = function (e) {
  		_handlePointer(e, handler);
  	};

  	obj['_leaflet_touchend' + id] = onUp;
  	obj.addEventListener(POINTER_UP, onUp, false);
  	obj.addEventListener(POINTER_CANCEL, onUp, false);
  }

  /*
   * Extends the event handling code with double tap support for mobile browsers.
   */

  var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';
  var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';
  var _pre = '_leaflet_';

  // inspired by Zepto touch code by Thomas Fuchs
  function addDoubleTapListener(obj, handler, id) {
  	var last, touch$$1,
  	    doubleTap = false,
  	    delay = 250;

  	function onTouchStart(e) {

  		if (pointer) {
  			if (!e.isPrimary) { return; }
  			if (e.pointerType === 'mouse') { return; } // mouse fires native dblclick
  		} else if (e.touches.length > 1) {
  			return;
  		}

  		var now = Date.now(),
  		    delta = now - (last || now);

  		touch$$1 = e.touches ? e.touches[0] : e;
  		doubleTap = (delta > 0 && delta <= delay);
  		last = now;
  	}

  	function onTouchEnd(e) {
  		if (doubleTap && !touch$$1.cancelBubble) {
  			if (pointer) {
  				if (e.pointerType === 'mouse') { return; }
  				// work around .type being readonly with MSPointer* events
  				var newTouch = {},
  				    prop, i;

  				for (i in touch$$1) {
  					prop = touch$$1[i];
  					newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
  				}
  				touch$$1 = newTouch;
  			}
  			touch$$1.type = 'dblclick';
  			touch$$1.button = 0;
  			handler(touch$$1);
  			last = null;
  		}
  	}

  	obj[_pre + _touchstart + id] = onTouchStart;
  	obj[_pre + _touchend + id] = onTouchEnd;
  	obj[_pre + 'dblclick' + id] = handler;

  	obj.addEventListener(_touchstart, onTouchStart, passiveEvents ? {passive: false} : false);
  	obj.addEventListener(_touchend, onTouchEnd, passiveEvents ? {passive: false} : false);

  	// On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
  	// the browser doesn't fire touchend/pointerup events but does fire
  	// native dblclicks. See #4127.
  	// Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.
  	obj.addEventListener('dblclick', handler, false);

  	return this;
  }

  function removeDoubleTapListener(obj, id) {
  	var touchstart = obj[_pre + _touchstart + id],
  	    touchend = obj[_pre + _touchend + id],
  	    dblclick = obj[_pre + 'dblclick' + id];

  	obj.removeEventListener(_touchstart, touchstart, passiveEvents ? {passive: false} : false);
  	obj.removeEventListener(_touchend, touchend, passiveEvents ? {passive: false} : false);
  	obj.removeEventListener('dblclick', dblclick, false);

  	return this;
  }

  /*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */


  // @property TRANSFORM: String
  // Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
  var TRANSFORM = testProp(
  	['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

  // webkitTransition comes first because some browser versions that drop vendor prefix don't do
  // the same for the transitionend event, in particular the Android 4.1 stock browser

  // @property TRANSITION: String
  // Vendor-prefixed transition style name.
  var TRANSITION = testProp(
  	['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

  // @property TRANSITION_END: String
  // Vendor-prefixed transitionend event name.
  var TRANSITION_END =
  	TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend';


  // @function get(id: String|HTMLElement): HTMLElement
  // Returns an element given its DOM id, or returns the element itself
  // if it was passed directly.
  function get(id) {
  	return typeof id === 'string' ? document.getElementById(id) : id;
  }

  // @function getStyle(el: HTMLElement, styleAttrib: String): String
  // Returns the value for a certain style attribute on an element,
  // including computed values or values set through CSS.
  function getStyle(el, style) {
  	var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);

  	if ((!value || value === 'auto') && document.defaultView) {
  		var css = document.defaultView.getComputedStyle(el, null);
  		value = css ? css[style] : null;
  	}
  	return value === 'auto' ? null : value;
  }

  // @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
  // Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
  function create$1(tagName, className, container) {
  	var el = document.createElement(tagName);
  	el.className = className || '';

  	if (container) {
  		container.appendChild(el);
  	}
  	return el;
  }

  // @function remove(el: HTMLElement)
  // Removes `el` from its parent element
  function remove(el) {
  	var parent = el.parentNode;
  	if (parent) {
  		parent.removeChild(el);
  	}
  }

  // @function empty(el: HTMLElement)
  // Removes all of `el`'s children elements from `el`
  function empty(el) {
  	while (el.firstChild) {
  		el.removeChild(el.firstChild);
  	}
  }

  // @function toFront(el: HTMLElement)
  // Makes `el` the last child of its parent, so it renders in front of the other children.
  function toFront(el) {
  	var parent = el.parentNode;
  	if (parent && parent.lastChild !== el) {
  		parent.appendChild(el);
  	}
  }

  // @function toBack(el: HTMLElement)
  // Makes `el` the first child of its parent, so it renders behind the other children.
  function toBack(el) {
  	var parent = el.parentNode;
  	if (parent && parent.firstChild !== el) {
  		parent.insertBefore(el, parent.firstChild);
  	}
  }

  // @function hasClass(el: HTMLElement, name: String): Boolean
  // Returns `true` if the element's class attribute contains `name`.
  function hasClass(el, name) {
  	if (el.classList !== undefined) {
  		return el.classList.contains(name);
  	}
  	var className = getClass(el);
  	return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
  }

  // @function addClass(el: HTMLElement, name: String)
  // Adds `name` to the element's class attribute.
  function addClass(el, name) {
  	if (el.classList !== undefined) {
  		var classes = splitWords(name);
  		for (var i = 0, len = classes.length; i < len; i++) {
  			el.classList.add(classes[i]);
  		}
  	} else if (!hasClass(el, name)) {
  		var className = getClass(el);
  		setClass(el, (className ? className + ' ' : '') + name);
  	}
  }

  // @function removeClass(el: HTMLElement, name: String)
  // Removes `name` from the element's class attribute.
  function removeClass(el, name) {
  	if (el.classList !== undefined) {
  		el.classList.remove(name);
  	} else {
  		setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
  	}
  }

  // @function setClass(el: HTMLElement, name: String)
  // Sets the element's class.
  function setClass(el, name) {
  	if (el.className.baseVal === undefined) {
  		el.className = name;
  	} else {
  		// in case of SVG element
  		el.className.baseVal = name;
  	}
  }

  // @function getClass(el: HTMLElement): String
  // Returns the element's class.
  function getClass(el) {
  	// Check if the element is an SVGElementInstance and use the correspondingElement instead
  	// (Required for linked SVG elements in IE11.)
  	if (el.correspondingElement) {
  		el = el.correspondingElement;
  	}
  	return el.className.baseVal === undefined ? el.className : el.className.baseVal;
  }

  // @function setOpacity(el: HTMLElement, opacity: Number)
  // Set the opacity of an element (including old IE support).
  // `opacity` must be a number from `0` to `1`.
  function setOpacity(el, value) {
  	if ('opacity' in el.style) {
  		el.style.opacity = value;
  	} else if ('filter' in el.style) {
  		_setOpacityIE(el, value);
  	}
  }

  function _setOpacityIE(el, value) {
  	var filter = false,
  	    filterName = 'DXImageTransform.Microsoft.Alpha';

  	// filters collection throws an error if we try to retrieve a filter that doesn't exist
  	try {
  		filter = el.filters.item(filterName);
  	} catch (e) {
  		// don't set opacity to 1 if we haven't already set an opacity,
  		// it isn't needed and breaks transparent pngs.
  		if (value === 1) { return; }
  	}

  	value = Math.round(value * 100);

  	if (filter) {
  		filter.Enabled = (value !== 100);
  		filter.Opacity = value;
  	} else {
  		el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
  	}
  }

  // @function testProp(props: String[]): String|false
  // Goes through the array of style names and returns the first name
  // that is a valid style name for an element. If no such name is found,
  // it returns false. Useful for vendor-prefixed styles like `transform`.
  function testProp(props) {
  	var style = document.documentElement.style;

  	for (var i = 0; i < props.length; i++) {
  		if (props[i] in style) {
  			return props[i];
  		}
  	}
  	return false;
  }

  // @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
  // Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
  // and optionally scaled by `scale`. Does not have an effect if the
  // browser doesn't support 3D CSS transforms.
  function setTransform(el, offset, scale) {
  	var pos = offset || new Point(0, 0);

  	el.style[TRANSFORM] =
  		(ie3d ?
  			'translate(' + pos.x + 'px,' + pos.y + 'px)' :
  			'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
  		(scale ? ' scale(' + scale + ')' : '');
  }

  // @function setPosition(el: HTMLElement, position: Point)
  // Sets the position of `el` to coordinates specified by `position`,
  // using CSS translate or top/left positioning depending on the browser
  // (used by Leaflet internally to position its layers).
  function setPosition(el, point) {

  	/*eslint-disable */
  	el._leaflet_pos = point;
  	/* eslint-enable */

  	if (any3d) {
  		setTransform(el, point);
  	} else {
  		el.style.left = point.x + 'px';
  		el.style.top = point.y + 'px';
  	}
  }

  // @function getPosition(el: HTMLElement): Point
  // Returns the coordinates of an element previously positioned with setPosition.
  function getPosition(el) {
  	// this method is only used for elements previously positioned using setPosition,
  	// so it's safe to cache the position for performance

  	return el._leaflet_pos || new Point(0, 0);
  }

  // @function disableTextSelection()
  // Prevents the user from generating `selectstart` DOM events, usually generated
  // when the user drags the mouse through a page with text. Used internally
  // by Leaflet to override the behaviour of any click-and-drag interaction on
  // the map. Affects drag interactions on the whole document.

  // @function enableTextSelection()
  // Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
  var disableTextSelection;
  var enableTextSelection;
  var _userSelect;
  if ('onselectstart' in document) {
  	disableTextSelection = function () {
  		on(window, 'selectstart', preventDefault);
  	};
  	enableTextSelection = function () {
  		off(window, 'selectstart', preventDefault);
  	};
  } else {
  	var userSelectProperty = testProp(
  		['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

  	disableTextSelection = function () {
  		if (userSelectProperty) {
  			var style = document.documentElement.style;
  			_userSelect = style[userSelectProperty];
  			style[userSelectProperty] = 'none';
  		}
  	};
  	enableTextSelection = function () {
  		if (userSelectProperty) {
  			document.documentElement.style[userSelectProperty] = _userSelect;
  			_userSelect = undefined;
  		}
  	};
  }

  // @function disableImageDrag()
  // As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
  // for `dragstart` DOM events, usually generated when the user drags an image.
  function disableImageDrag() {
  	on(window, 'dragstart', preventDefault);
  }

  // @function enableImageDrag()
  // Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
  function enableImageDrag() {
  	off(window, 'dragstart', preventDefault);
  }

  var _outlineElement, _outlineStyle;
  // @function preventOutline(el: HTMLElement)
  // Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
  // of the element `el` invisible. Used internally by Leaflet to prevent
  // focusable elements from displaying an outline when the user performs a
  // drag interaction on them.
  function preventOutline(element) {
  	while (element.tabIndex === -1) {
  		element = element.parentNode;
  	}
  	if (!element.style) { return; }
  	restoreOutline();
  	_outlineElement = element;
  	_outlineStyle = element.style.outline;
  	element.style.outline = 'none';
  	on(window, 'keydown', restoreOutline);
  }

  // @function restoreOutline()
  // Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
  function restoreOutline() {
  	if (!_outlineElement) { return; }
  	_outlineElement.style.outline = _outlineStyle;
  	_outlineElement = undefined;
  	_outlineStyle = undefined;
  	off(window, 'keydown', restoreOutline);
  }

  // @function getSizedParentNode(el: HTMLElement): HTMLElement
  // Finds the closest parent node which size (width and height) is not null.
  function getSizedParentNode(element) {
  	do {
  		element = element.parentNode;
  	} while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
  	return element;
  }

  // @function getScale(el: HTMLElement): Object
  // Computes the CSS scale currently applied on the element.
  // Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
  // and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
  function getScale(element) {
  	var rect = element.getBoundingClientRect(); // Read-only in old browsers.

  	return {
  		x: rect.width / element.offsetWidth || 1,
  		y: rect.height / element.offsetHeight || 1,
  		boundingClientRect: rect
  	};
  }

  var DomUtil = ({
    TRANSFORM: TRANSFORM,
    TRANSITION: TRANSITION,
    TRANSITION_END: TRANSITION_END,
    get: get,
    getStyle: getStyle,
    create: create$1,
    remove: remove,
    empty: empty,
    toFront: toFront,
    toBack: toBack,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    setClass: setClass,
    getClass: getClass,
    setOpacity: setOpacity,
    testProp: testProp,
    setTransform: setTransform,
    setPosition: setPosition,
    getPosition: getPosition,
    disableTextSelection: disableTextSelection,
    enableTextSelection: enableTextSelection,
    disableImageDrag: disableImageDrag,
    enableImageDrag: enableImageDrag,
    preventOutline: preventOutline,
    restoreOutline: restoreOutline,
    getSizedParentNode: getSizedParentNode,
    getScale: getScale
  });

  /*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */

  // Inspired by John Resig, Dean Edwards and YUI addEvent implementations.

  // @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
  // Adds a listener function (`fn`) to a particular DOM event type of the
  // element `el`. You can optionally specify the context of the listener
  // (object the `this` keyword will point to). You can also pass several
  // space-separated types (e.g. `'click dblclick'`).

  // @alternative
  // @function on(el: HTMLElement, eventMap: Object, context?: Object): this
  // Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  function on(obj, types, fn, context) {

  	if (typeof types === 'object') {
  		for (var type in types) {
  			addOne(obj, type, types[type], fn);
  		}
  	} else {
  		types = splitWords(types);

  		for (var i = 0, len = types.length; i < len; i++) {
  			addOne(obj, types[i], fn, context);
  		}
  	}

  	return this;
  }

  var eventsKey = '_leaflet_events';

  // @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
  // Removes a previously added listener function.
  // Note that if you passed a custom context to on, you must pass the same
  // context to `off` in order to remove the listener.

  // @alternative
  // @function off(el: HTMLElement, eventMap: Object, context?: Object): this
  // Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  function off(obj, types, fn, context) {

  	if (typeof types === 'object') {
  		for (var type in types) {
  			removeOne(obj, type, types[type], fn);
  		}
  	} else if (types) {
  		types = splitWords(types);

  		for (var i = 0, len = types.length; i < len; i++) {
  			removeOne(obj, types[i], fn, context);
  		}
  	} else {
  		for (var j in obj[eventsKey]) {
  			removeOne(obj, j, obj[eventsKey][j]);
  		}
  		delete obj[eventsKey];
  	}

  	return this;
  }

  function browserFiresNativeDblClick() {
  	// See https://github.com/w3c/pointerevents/issues/171
  	if (pointer) {
  		return !(edge || safari);
  	}
  }

  var mouseSubst = {
  	mouseenter: 'mouseover',
  	mouseleave: 'mouseout',
  	wheel: !('onwheel' in window) && 'mousewheel'
  };

  function addOne(obj, type, fn, context) {
  	var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');

  	if (obj[eventsKey] && obj[eventsKey][id]) { return this; }

  	var handler = function (e) {
  		return fn.call(context || obj, e || window.event);
  	};

  	var originalHandler = handler;

  	if (pointer && type.indexOf('touch') === 0) {
  		// Needs DomEvent.Pointer.js
  		addPointerListener(obj, type, handler, id);

  	} else if (touch && (type === 'dblclick') && !browserFiresNativeDblClick()) {
  		addDoubleTapListener(obj, handler, id);

  	} else if ('addEventListener' in obj) {

  		if (type === 'touchstart' || type === 'touchmove' || type === 'wheel' ||  type === 'mousewheel') {
  			obj.addEventListener(mouseSubst[type] || type, handler, passiveEvents ? {passive: false} : false);

  		} else if (type === 'mouseenter' || type === 'mouseleave') {
  			handler = function (e) {
  				e = e || window.event;
  				if (isExternalTarget(obj, e)) {
  					originalHandler(e);
  				}
  			};
  			obj.addEventListener(mouseSubst[type], handler, false);

  		} else {
  			obj.addEventListener(type, originalHandler, false);
  		}

  	} else if ('attachEvent' in obj) {
  		obj.attachEvent('on' + type, handler);
  	}

  	obj[eventsKey] = obj[eventsKey] || {};
  	obj[eventsKey][id] = handler;
  }

  function removeOne(obj, type, fn, context) {

  	var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
  	    handler = obj[eventsKey] && obj[eventsKey][id];

  	if (!handler) { return this; }

  	if (pointer && type.indexOf('touch') === 0) {
  		removePointerListener(obj, type, id);

  	} else if (touch && (type === 'dblclick') && !browserFiresNativeDblClick()) {
  		removeDoubleTapListener(obj, id);

  	} else if ('removeEventListener' in obj) {

  		obj.removeEventListener(mouseSubst[type] || type, handler, false);

  	} else if ('detachEvent' in obj) {
  		obj.detachEvent('on' + type, handler);
  	}

  	obj[eventsKey][id] = null;
  }

  // @function stopPropagation(ev: DOMEvent): this
  // Stop the given event from propagation to parent elements. Used inside the listener functions:
  // ```js
  // L.DomEvent.on(div, 'click', function (ev) {
  // 	L.DomEvent.stopPropagation(ev);
  // });
  // ```
  function stopPropagation(e) {

  	if (e.stopPropagation) {
  		e.stopPropagation();
  	} else if (e.originalEvent) {  // In case of Leaflet event.
  		e.originalEvent._stopped = true;
  	} else {
  		e.cancelBubble = true;
  	}
  	skipped(e);

  	return this;
  }

  // @function disableScrollPropagation(el: HTMLElement): this
  // Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants).
  function disableScrollPropagation(el) {
  	addOne(el, 'wheel', stopPropagation);
  	return this;
  }

  // @function disableClickPropagation(el: HTMLElement): this
  // Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
  // `'mousedown'` and `'touchstart'` events (plus browser variants).
  function disableClickPropagation(el) {
  	on(el, 'mousedown touchstart dblclick', stopPropagation);
  	addOne(el, 'click', fakeStop);
  	return this;
  }

  // @function preventDefault(ev: DOMEvent): this
  // Prevents the default action of the DOM Event `ev` from happening (such as
  // following a link in the href of the a element, or doing a POST request
  // with page reload when a `<form>` is submitted).
  // Use it inside listener functions.
  function preventDefault(e) {
  	if (e.preventDefault) {
  		e.preventDefault();
  	} else {
  		e.returnValue = false;
  	}
  	return this;
  }

  // @function stop(ev: DOMEvent): this
  // Does `stopPropagation` and `preventDefault` at the same time.
  function stop(e) {
  	preventDefault(e);
  	stopPropagation(e);
  	return this;
  }

  // @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
  // Gets normalized mouse position from a DOM event relative to the
  // `container` (border excluded) or to the whole page if not specified.
  function getMousePosition(e, container) {
  	if (!container) {
  		return new Point(e.clientX, e.clientY);
  	}

  	var scale = getScale(container),
  	    offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)

  	return new Point(
  		// offset.left/top values are in page scale (like clientX/Y),
  		// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
  		(e.clientX - offset.left) / scale.x - container.clientLeft,
  		(e.clientY - offset.top) / scale.y - container.clientTop
  	);
  }

  // Chrome on Win scrolls double the pixels as in other platforms (see #4538),
  // and Firefox scrolls device pixels, not CSS pixels
  var wheelPxFactor =
  	(win && chrome) ? 2 * window.devicePixelRatio :
  	gecko ? window.devicePixelRatio : 1;

  // @function getWheelDelta(ev: DOMEvent): Number
  // Gets normalized wheel delta from a wheel DOM event, in vertical
  // pixels scrolled (negative if scrolling down).
  // Events from pointing devices without precise scrolling are mapped to
  // a best guess of 60 pixels.
  function getWheelDelta(e) {
  	return (edge) ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
  	       (e.deltaY && e.deltaMode === 0) ? -e.deltaY / wheelPxFactor : // Pixels
  	       (e.deltaY && e.deltaMode === 1) ? -e.deltaY * 20 : // Lines
  	       (e.deltaY && e.deltaMode === 2) ? -e.deltaY * 60 : // Pages
  	       (e.deltaX || e.deltaZ) ? 0 :	// Skip horizontal/depth wheel events
  	       e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
  	       (e.detail && Math.abs(e.detail) < 32765) ? -e.detail * 20 : // Legacy Moz lines
  	       e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
  	       0;
  }

  var skipEvents = {};

  function fakeStop(e) {
  	// fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
  	skipEvents[e.type] = true;
  }

  function skipped(e) {
  	var events = skipEvents[e.type];
  	// reset when checking, as it's only used in map container and propagates outside of the map
  	skipEvents[e.type] = false;
  	return events;
  }

  // check if element really left/entered the event target (for mouseenter/mouseleave)
  function isExternalTarget(el, e) {

  	var related = e.relatedTarget;

  	if (!related) { return true; }

  	try {
  		while (related && (related !== el)) {
  			related = related.parentNode;
  		}
  	} catch (err) {
  		return false;
  	}
  	return (related !== el);
  }

  var DomEvent = ({
    on: on,
    off: off,
    stopPropagation: stopPropagation,
    disableScrollPropagation: disableScrollPropagation,
    disableClickPropagation: disableClickPropagation,
    preventDefault: preventDefault,
    stop: stop,
    getMousePosition: getMousePosition,
    getWheelDelta: getWheelDelta,
    fakeStop: fakeStop,
    skipped: skipped,
    isExternalTarget: isExternalTarget,
    addListener: on,
    removeListener: off
  });

  /*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var fx = new L.PosAnimation();
   * fx.run(el, [300, 500], 0.5);
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */

  var PosAnimation = Evented.extend({

  	// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
  	// Run an animation of a given element to a new position, optionally setting
  	// duration in seconds (`0.25` by default) and easing linearity factor (3rd
  	// argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
  	// `0.5` by default).
  	run: function (el, newPos, duration, easeLinearity) {
  		this.stop();

  		this._el = el;
  		this._inProgress = true;
  		this._duration = duration || 0.25;
  		this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

  		this._startPos = getPosition(el);
  		this._offset = newPos.subtract(this._startPos);
  		this._startTime = +new Date();

  		// @event start: Event
  		// Fired when the animation starts
  		this.fire('start');

  		this._animate();
  	},

  	// @method stop()
  	// Stops the animation (if currently running).
  	stop: function () {
  		if (!this._inProgress) { return; }

  		this._step(true);
  		this._complete();
  	},

  	_animate: function () {
  		// animation loop
  		this._animId = requestAnimFrame(this._animate, this);
  		this._step();
  	},

  	_step: function (round) {
  		var elapsed = (+new Date()) - this._startTime,
  		    duration = this._duration * 1000;

  		if (elapsed < duration) {
  			this._runFrame(this._easeOut(elapsed / duration), round);
  		} else {
  			this._runFrame(1);
  			this._complete();
  		}
  	},

  	_runFrame: function (progress, round) {
  		var pos = this._startPos.add(this._offset.multiplyBy(progress));
  		if (round) {
  			pos._round();
  		}
  		setPosition(this._el, pos);

  		// @event step: Event
  		// Fired continuously during the animation.
  		this.fire('step');
  	},

  	_complete: function () {
  		cancelAnimFrame(this._animId);

  		this._inProgress = false;
  		// @event end: Event
  		// Fired when the animation ends.
  		this.fire('end');
  	},

  	_easeOut: function (t) {
  		return 1 - Math.pow(1 - t, this._easeOutPower);
  	}
  });

  /*
   * @class Map
   * @aka L.Map
   * @inherits Evented
   *
   * The central class of the API — it is used to create a map on a page and manipulate it.
   *
   * @example
   *
   * ```js
   * // initialize the map on the "map" div with a given center and zoom
   * var map = L.map('map', {
   * 	center: [51.505, -0.09],
   * 	zoom: 13
   * });
   * ```
   *
   */

  var Map = Evented.extend({

  	options: {
  		// @section Map State Options
  		// @option crs: CRS = L.CRS.EPSG3857
  		// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
  		// sure what it means.
  		crs: EPSG3857,

  		// @option center: LatLng = undefined
  		// Initial geographic center of the map
  		center: undefined,

  		// @option zoom: Number = undefined
  		// Initial map zoom level
  		zoom: undefined,

  		// @option minZoom: Number = *
  		// Minimum zoom level of the map.
  		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
  		// the lowest of their `minZoom` options will be used instead.
  		minZoom: undefined,

  		// @option maxZoom: Number = *
  		// Maximum zoom level of the map.
  		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
  		// the highest of their `maxZoom` options will be used instead.
  		maxZoom: undefined,

  		// @option layers: Layer[] = []
  		// Array of layers that will be added to the map initially
  		layers: [],

  		// @option maxBounds: LatLngBounds = null
  		// When this option is set, the map restricts the view to the given
  		// geographical bounds, bouncing the user back if the user tries to pan
  		// outside the view. To set the restriction dynamically, use
  		// [`setMaxBounds`](#map-setmaxbounds) method.
  		maxBounds: undefined,

  		// @option renderer: Renderer = *
  		// The default method for drawing vector layers on the map. `L.SVG`
  		// or `L.Canvas` by default depending on browser support.
  		renderer: undefined,


  		// @section Animation Options
  		// @option zoomAnimation: Boolean = true
  		// Whether the map zoom animation is enabled. By default it's enabled
  		// in all browsers that support CSS3 Transitions except Android.
  		zoomAnimation: true,

  		// @option zoomAnimationThreshold: Number = 4
  		// Won't animate zoom if the zoom difference exceeds this value.
  		zoomAnimationThreshold: 4,

  		// @option fadeAnimation: Boolean = true
  		// Whether the tile fade animation is enabled. By default it's enabled
  		// in all browsers that support CSS3 Transitions except Android.
  		fadeAnimation: true,

  		// @option markerZoomAnimation: Boolean = true
  		// Whether markers animate their zoom with the zoom animation, if disabled
  		// they will disappear for the length of the animation. By default it's
  		// enabled in all browsers that support CSS3 Transitions except Android.
  		markerZoomAnimation: true,

  		// @option transform3DLimit: Number = 2^23
  		// Defines the maximum size of a CSS translation transform. The default
  		// value should not be changed unless a web browser positions layers in
  		// the wrong place after doing a large `panBy`.
  		transform3DLimit: 8388608, // Precision limit of a 32-bit float

  		// @section Interaction Options
  		// @option zoomSnap: Number = 1
  		// Forces the map's zoom level to always be a multiple of this, particularly
  		// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
  		// By default, the zoom level snaps to the nearest integer; lower values
  		// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
  		// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
  		zoomSnap: 1,

  		// @option zoomDelta: Number = 1
  		// Controls how much the map's zoom level will change after a
  		// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
  		// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
  		// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
  		zoomDelta: 1,

  		// @option trackResize: Boolean = true
  		// Whether the map automatically handles browser window resize to update itself.
  		trackResize: true
  	},

  	initialize: function (id, options) { // (HTMLElement or String, Object)
  		options = setOptions(this, options);

  		// Make sure to assign internal flags at the beginning,
  		// to avoid inconsistent state in some edge cases.
  		this._handlers = [];
  		this._layers = {};
  		this._zoomBoundLayers = {};
  		this._sizeChanged = true;

  		this._initContainer(id);
  		this._initLayout();

  		// hack for https://github.com/Leaflet/Leaflet/issues/1980
  		this._onResize = bind(this._onResize, this);

  		this._initEvents();

  		if (options.maxBounds) {
  			this.setMaxBounds(options.maxBounds);
  		}

  		if (options.zoom !== undefined) {
  			this._zoom = this._limitZoom(options.zoom);
  		}

  		if (options.center && options.zoom !== undefined) {
  			this.setView(toLatLng(options.center), options.zoom, {reset: true});
  		}

  		this.callInitHooks();

  		// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
  		this._zoomAnimated = TRANSITION && any3d && !mobileOpera &&
  				this.options.zoomAnimation;

  		// zoom transitions run with the same duration for all layers, so if one of transitionend events
  		// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
  		if (this._zoomAnimated) {
  			this._createAnimProxy();
  			on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
  		}

  		this._addLayers(this.options.layers);
  	},


  	// @section Methods for modifying map state

  	// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
  	// Sets the view of the map (geographical center and zoom) with the given
  	// animation options.
  	setView: function (center, zoom, options) {

  		zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
  		center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
  		options = options || {};

  		this._stop();

  		if (this._loaded && !options.reset && options !== true) {

  			if (options.animate !== undefined) {
  				options.zoom = extend({animate: options.animate}, options.zoom);
  				options.pan = extend({animate: options.animate, duration: options.duration}, options.pan);
  			}

  			// try animating pan or zoom
  			var moved = (this._zoom !== zoom) ?
  				this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
  				this._tryAnimatedPan(center, options.pan);

  			if (moved) {
  				// prevent resize handler call, the view will refresh after animation anyway
  				clearTimeout(this._sizeTimer);
  				return this;
  			}
  		}

  		// animation didn't start, just reset the map view
  		this._resetView(center, zoom);

  		return this;
  	},

  	// @method setZoom(zoom: Number, options?: Zoom/pan options): this
  	// Sets the zoom of the map.
  	setZoom: function (zoom, options) {
  		if (!this._loaded) {
  			this._zoom = zoom;
  			return this;
  		}
  		return this.setView(this.getCenter(), zoom, {zoom: options});
  	},

  	// @method zoomIn(delta?: Number, options?: Zoom options): this
  	// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
  	zoomIn: function (delta, options) {
  		delta = delta || (any3d ? this.options.zoomDelta : 1);
  		return this.setZoom(this._zoom + delta, options);
  	},

  	// @method zoomOut(delta?: Number, options?: Zoom options): this
  	// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
  	zoomOut: function (delta, options) {
  		delta = delta || (any3d ? this.options.zoomDelta : 1);
  		return this.setZoom(this._zoom - delta, options);
  	},

  	// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
  	// Zooms the map while keeping a specified geographical point on the map
  	// stationary (e.g. used internally for scroll zoom and double-click zoom).
  	// @alternative
  	// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
  	// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
  	setZoomAround: function (latlng, zoom, options) {
  		var scale = this.getZoomScale(zoom),
  		    viewHalf = this.getSize().divideBy(2),
  		    containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),

  		    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
  		    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

  		return this.setView(newCenter, zoom, {zoom: options});
  	},

  	_getBoundsCenterZoom: function (bounds, options) {

  		options = options || {};
  		bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);

  		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
  		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),

  		    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

  		zoom = (typeof options.maxZoom === 'number') ? Math.min(options.maxZoom, zoom) : zoom;

  		if (zoom === Infinity) {
  			return {
  				center: bounds.getCenter(),
  				zoom: zoom
  			};
  		}

  		var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

  		    swPoint = this.project(bounds.getSouthWest(), zoom),
  		    nePoint = this.project(bounds.getNorthEast(), zoom),
  		    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

  		return {
  			center: center,
  			zoom: zoom
  		};
  	},

  	// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
  	// Sets a map view that contains the given geographical bounds with the
  	// maximum zoom level possible.
  	fitBounds: function (bounds, options) {

  		bounds = toLatLngBounds(bounds);

  		if (!bounds.isValid()) {
  			throw new Error('Bounds are not valid.');
  		}

  		var target = this._getBoundsCenterZoom(bounds, options);
  		return this.setView(target.center, target.zoom, options);
  	},

  	// @method fitWorld(options?: fitBounds options): this
  	// Sets a map view that mostly contains the whole world with the maximum
  	// zoom level possible.
  	fitWorld: function (options) {
  		return this.fitBounds([[-90, -180], [90, 180]], options);
  	},

  	// @method panTo(latlng: LatLng, options?: Pan options): this
  	// Pans the map to a given center.
  	panTo: function (center, options) { // (LatLng)
  		return this.setView(center, this._zoom, {pan: options});
  	},

  	// @method panBy(offset: Point, options?: Pan options): this
  	// Pans the map by a given number of pixels (animated).
  	panBy: function (offset, options) {
  		offset = toPoint(offset).round();
  		options = options || {};

  		if (!offset.x && !offset.y) {
  			return this.fire('moveend');
  		}
  		// If we pan too far, Chrome gets issues with tiles
  		// and makes them disappear or appear in the wrong place (slightly offset) #2602
  		if (options.animate !== true && !this.getSize().contains(offset)) {
  			this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
  			return this;
  		}

  		if (!this._panAnim) {
  			this._panAnim = new PosAnimation();

  			this._panAnim.on({
  				'step': this._onPanTransitionStep,
  				'end': this._onPanTransitionEnd
  			}, this);
  		}

  		// don't fire movestart if animating inertia
  		if (!options.noMoveStart) {
  			this.fire('movestart');
  		}

  		// animate pan unless animate: false specified
  		if (options.animate !== false) {
  			addClass(this._mapPane, 'leaflet-pan-anim');

  			var newPos = this._getMapPanePos().subtract(offset).round();
  			this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
  		} else {
  			this._rawPanBy(offset);
  			this.fire('move').fire('moveend');
  		}

  		return this;
  	},

  	// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
  	// Sets the view of the map (geographical center and zoom) performing a smooth
  	// pan-zoom animation.
  	flyTo: function (targetCenter, targetZoom, options) {

  		options = options || {};
  		if (options.animate === false || !any3d) {
  			return this.setView(targetCenter, targetZoom, options);
  		}

  		this._stop();

  		var from = this.project(this.getCenter()),
  		    to = this.project(targetCenter),
  		    size = this.getSize(),
  		    startZoom = this._zoom;

  		targetCenter = toLatLng(targetCenter);
  		targetZoom = targetZoom === undefined ? startZoom : targetZoom;

  		var w0 = Math.max(size.x, size.y),
  		    w1 = w0 * this.getZoomScale(startZoom, targetZoom),
  		    u1 = (to.distanceTo(from)) || 1,
  		    rho = 1.42,
  		    rho2 = rho * rho;

  		function r(i) {
  			var s1 = i ? -1 : 1,
  			    s2 = i ? w1 : w0,
  			    t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
  			    b1 = 2 * s2 * rho2 * u1,
  			    b = t1 / b1,
  			    sq = Math.sqrt(b * b + 1) - b;

  			    // workaround for floating point precision bug when sq = 0, log = -Infinite,
  			    // thus triggering an infinite loop in flyTo
  			    var log = sq < 0.000000001 ? -18 : Math.log(sq);

  			return log;
  		}

  		function sinh(n) { return (Math.exp(n) - Math.exp(-n)) / 2; }
  		function cosh(n) { return (Math.exp(n) + Math.exp(-n)) / 2; }
  		function tanh(n) { return sinh(n) / cosh(n); }

  		var r0 = r(0);

  		function w(s) { return w0 * (cosh(r0) / cosh(r0 + rho * s)); }
  		function u(s) { return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2; }

  		function easeOut(t) { return 1 - Math.pow(1 - t, 1.5); }

  		var start = Date.now(),
  		    S = (r(1) - r0) / rho,
  		    duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;

  		function frame() {
  			var t = (Date.now() - start) / duration,
  			    s = easeOut(t) * S;

  			if (t <= 1) {
  				this._flyToFrame = requestAnimFrame(frame, this);

  				this._move(
  					this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),
  					this.getScaleZoom(w0 / w(s), startZoom),
  					{flyTo: true});

  			} else {
  				this
  					._move(targetCenter, targetZoom)
  					._moveEnd(true);
  			}
  		}

  		this._moveStart(true, options.noMoveStart);

  		frame.call(this);
  		return this;
  	},

  	// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
  	// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
  	// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
  	flyToBounds: function (bounds, options) {
  		var target = this._getBoundsCenterZoom(bounds, options);
  		return this.flyTo(target.center, target.zoom, options);
  	},

  	// @method setMaxBounds(bounds: LatLngBounds): this
  	// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
  	setMaxBounds: function (bounds) {
  		bounds = toLatLngBounds(bounds);

  		if (!bounds.isValid()) {
  			this.options.maxBounds = null;
  			return this.off('moveend', this._panInsideMaxBounds);
  		} else if (this.options.maxBounds) {
  			this.off('moveend', this._panInsideMaxBounds);
  		}

  		this.options.maxBounds = bounds;

  		if (this._loaded) {
  			this._panInsideMaxBounds();
  		}

  		return this.on('moveend', this._panInsideMaxBounds);
  	},

  	// @method setMinZoom(zoom: Number): this
  	// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
  	setMinZoom: function (zoom) {
  		var oldZoom = this.options.minZoom;
  		this.options.minZoom = zoom;

  		if (this._loaded && oldZoom !== zoom) {
  			this.fire('zoomlevelschange');

  			if (this.getZoom() < this.options.minZoom) {
  				return this.setZoom(zoom);
  			}
  		}

  		return this;
  	},

  	// @method setMaxZoom(zoom: Number): this
  	// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
  	setMaxZoom: function (zoom) {
  		var oldZoom = this.options.maxZoom;
  		this.options.maxZoom = zoom;

  		if (this._loaded && oldZoom !== zoom) {
  			this.fire('zoomlevelschange');

  			if (this.getZoom() > this.options.maxZoom) {
  				return this.setZoom(zoom);
  			}
  		}

  		return this;
  	},

  	// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
  	// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
  	panInsideBounds: function (bounds, options) {
  		this._enforcingBounds = true;
  		var center = this.getCenter(),
  		    newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));

  		if (!center.equals(newCenter)) {
  			this.panTo(newCenter, options);
  		}

  		this._enforcingBounds = false;
  		return this;
  	},

  	// @method panInside(latlng: LatLng, options?: options): this
  	// Pans the map the minimum amount to make the `latlng` visible. Use
  	// `padding`, `paddingTopLeft` and `paddingTopRight` options to fit
  	// the display to more restricted bounds, like [`fitBounds`](#map-fitbounds).
  	// If `latlng` is already within the (optionally padded) display bounds,
  	// the map will not be panned.
  	panInside: function (latlng, options) {
  		options = options || {};

  		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
  		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),
  		    center = this.getCenter(),
  		    pixelCenter = this.project(center),
  		    pixelPoint = this.project(latlng),
  		    pixelBounds = this.getPixelBounds(),
  		    halfPixelBounds = pixelBounds.getSize().divideBy(2),
  		    paddedBounds = toBounds([pixelBounds.min.add(paddingTL), pixelBounds.max.subtract(paddingBR)]);

  		if (!paddedBounds.contains(pixelPoint)) {
  			this._enforcingBounds = true;
  			var diff = pixelCenter.subtract(pixelPoint),
  			    newCenter = toPoint(pixelPoint.x + diff.x, pixelPoint.y + diff.y);

  			if (pixelPoint.x < paddedBounds.min.x || pixelPoint.x > paddedBounds.max.x) {
  				newCenter.x = pixelCenter.x - diff.x;
  				if (diff.x > 0) {
  					newCenter.x += halfPixelBounds.x - paddingTL.x;
  				} else {
  					newCenter.x -= halfPixelBounds.x - paddingBR.x;
  				}
  			}
  			if (pixelPoint.y < paddedBounds.min.y || pixelPoint.y > paddedBounds.max.y) {
  				newCenter.y = pixelCenter.y - diff.y;
  				if (diff.y > 0) {
  					newCenter.y += halfPixelBounds.y - paddingTL.y;
  				} else {
  					newCenter.y -= halfPixelBounds.y - paddingBR.y;
  				}
  			}
  			this.panTo(this.unproject(newCenter), options);
  			this._enforcingBounds = false;
  		}
  		return this;
  	},

  	// @method invalidateSize(options: Zoom/pan options): this
  	// Checks if the map container size changed and updates the map if so —
  	// call it after you've changed the map size dynamically, also animating
  	// pan by default. If `options.pan` is `false`, panning will not occur.
  	// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
  	// that it doesn't happen often even if the method is called many
  	// times in a row.

  	// @alternative
  	// @method invalidateSize(animate: Boolean): this
  	// Checks if the map container size changed and updates the map if so —
  	// call it after you've changed the map size dynamically, also animating
  	// pan by default.
  	invalidateSize: function (options) {
  		if (!this._loaded) { return this; }

  		options = extend({
  			animate: false,
  			pan: true
  		}, options === true ? {animate: true} : options);

  		var oldSize = this.getSize();
  		this._sizeChanged = true;
  		this._lastCenter = null;

  		var newSize = this.getSize(),
  		    oldCenter = oldSize.divideBy(2).round(),
  		    newCenter = newSize.divideBy(2).round(),
  		    offset = oldCenter.subtract(newCenter);

  		if (!offset.x && !offset.y) { return this; }

  		if (options.animate && options.pan) {
  			this.panBy(offset);

  		} else {
  			if (options.pan) {
  				this._rawPanBy(offset);
  			}

  			this.fire('move');

  			if (options.debounceMoveend) {
  				clearTimeout(this._sizeTimer);
  				this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);
  			} else {
  				this.fire('moveend');
  			}
  		}

  		// @section Map state change events
  		// @event resize: ResizeEvent
  		// Fired when the map is resized.
  		return this.fire('resize', {
  			oldSize: oldSize,
  			newSize: newSize
  		});
  	},

  	// @section Methods for modifying map state
  	// @method stop(): this
  	// Stops the currently running `panTo` or `flyTo` animation, if any.
  	stop: function () {
  		this.setZoom(this._limitZoom(this._zoom));
  		if (!this.options.zoomSnap) {
  			this.fire('viewreset');
  		}
  		return this._stop();
  	},

  	// @section Geolocation methods
  	// @method locate(options?: Locate options): this
  	// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
  	// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
  	// and optionally sets the map view to the user's location with respect to
  	// detection accuracy (or to the world view if geolocation failed).
  	// Note that, if your page doesn't use HTTPS, this method will fail in
  	// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
  	// See `Locate options` for more details.
  	locate: function (options) {

  		options = this._locateOptions = extend({
  			timeout: 10000,
  			watch: false
  			// setView: false
  			// maxZoom: <Number>
  			// maximumAge: 0
  			// enableHighAccuracy: false
  		}, options);

  		if (!('geolocation' in navigator)) {
  			this._handleGeolocationError({
  				code: 0,
  				message: 'Geolocation not supported.'
  			});
  			return this;
  		}

  		var onResponse = bind(this._handleGeolocationResponse, this),
  		    onError = bind(this._handleGeolocationError, this);

  		if (options.watch) {
  			this._locationWatchId =
  			        navigator.geolocation.watchPosition(onResponse, onError, options);
  		} else {
  			navigator.geolocation.getCurrentPosition(onResponse, onError, options);
  		}
  		return this;
  	},

  	// @method stopLocate(): this
  	// Stops watching location previously initiated by `map.locate({watch: true})`
  	// and aborts resetting the map view if map.locate was called with
  	// `{setView: true}`.
  	stopLocate: function () {
  		if (navigator.geolocation && navigator.geolocation.clearWatch) {
  			navigator.geolocation.clearWatch(this._locationWatchId);
  		}
  		if (this._locateOptions) {
  			this._locateOptions.setView = false;
  		}
  		return this;
  	},

  	_handleGeolocationError: function (error) {
  		var c = error.code,
  		    message = error.message ||
  		            (c === 1 ? 'permission denied' :
  		            (c === 2 ? 'position unavailable' : 'timeout'));

  		if (this._locateOptions.setView && !this._loaded) {
  			this.fitWorld();
  		}

  		// @section Location events
  		// @event locationerror: ErrorEvent
  		// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
  		this.fire('locationerror', {
  			code: c,
  			message: 'Geolocation error: ' + message + '.'
  		});
  	},

  	_handleGeolocationResponse: function (pos) {
  		var lat = pos.coords.latitude,
  		    lng = pos.coords.longitude,
  		    latlng = new LatLng(lat, lng),
  		    bounds = latlng.toBounds(pos.coords.accuracy * 2),
  		    options = this._locateOptions;

  		if (options.setView) {
  			var zoom = this.getBoundsZoom(bounds);
  			this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
  		}

  		var data = {
  			latlng: latlng,
  			bounds: bounds,
  			timestamp: pos.timestamp
  		};

  		for (var i in pos.coords) {
  			if (typeof pos.coords[i] === 'number') {
  				data[i] = pos.coords[i];
  			}
  		}

  		// @event locationfound: LocationEvent
  		// Fired when geolocation (using the [`locate`](#map-locate) method)
  		// went successfully.
  		this.fire('locationfound', data);
  	},

  	// TODO Appropriate docs section?
  	// @section Other Methods
  	// @method addHandler(name: String, HandlerClass: Function): this
  	// Adds a new `Handler` to the map, given its name and constructor function.
  	addHandler: function (name, HandlerClass) {
  		if (!HandlerClass) { return this; }

  		var handler = this[name] = new HandlerClass(this);

  		this._handlers.push(handler);

  		if (this.options[name]) {
  			handler.enable();
  		}

  		return this;
  	},

  	// @method remove(): this
  	// Destroys the map and clears all related event listeners.
  	remove: function () {

  		this._initEvents(true);
  		this.off('moveend', this._panInsideMaxBounds);

  		if (this._containerId !== this._container._leaflet_id) {
  			throw new Error('Map container is being reused by another instance');
  		}

  		try {
  			// throws error in IE6-8
  			delete this._container._leaflet_id;
  			delete this._containerId;
  		} catch (e) {
  			/*eslint-disable */
  			this._container._leaflet_id = undefined;
  			/* eslint-enable */
  			this._containerId = undefined;
  		}

  		if (this._locationWatchId !== undefined) {
  			this.stopLocate();
  		}

  		this._stop();

  		remove(this._mapPane);

  		if (this._clearControlPos) {
  			this._clearControlPos();
  		}
  		if (this._resizeRequest) {
  			cancelAnimFrame(this._resizeRequest);
  			this._resizeRequest = null;
  		}

  		this._clearHandlers();

  		if (this._loaded) {
  			// @section Map state change events
  			// @event unload: Event
  			// Fired when the map is destroyed with [remove](#map-remove) method.
  			this.fire('unload');
  		}

  		var i;
  		for (i in this._layers) {
  			this._layers[i].remove();
  		}
  		for (i in this._panes) {
  			remove(this._panes[i]);
  		}

  		this._layers = [];
  		this._panes = [];
  		delete this._mapPane;
  		delete this._renderer;

  		return this;
  	},

  	// @section Other Methods
  	// @method createPane(name: String, container?: HTMLElement): HTMLElement
  	// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
  	// then returns it. The pane is created as a child of `container`, or
  	// as a child of the main map pane if not set.
  	createPane: function (name, container) {
  		var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
  		    pane = create$1('div', className, container || this._mapPane);

  		if (name) {
  			this._panes[name] = pane;
  		}
  		return pane;
  	},

  	// @section Methods for Getting Map State

  	// @method getCenter(): LatLng
  	// Returns the geographical center of the map view
  	getCenter: function () {
  		this._checkIfLoaded();

  		if (this._lastCenter && !this._moved()) {
  			return this._lastCenter;
  		}
  		return this.layerPointToLatLng(this._getCenterLayerPoint());
  	},

  	// @method getZoom(): Number
  	// Returns the current zoom level of the map view
  	getZoom: function () {
  		return this._zoom;
  	},

  	// @method getBounds(): LatLngBounds
  	// Returns the geographical bounds visible in the current map view
  	getBounds: function () {
  		var bounds = this.getPixelBounds(),
  		    sw = this.unproject(bounds.getBottomLeft()),
  		    ne = this.unproject(bounds.getTopRight());

  		return new LatLngBounds(sw, ne);
  	},

  	// @method getMinZoom(): Number
  	// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
  	getMinZoom: function () {
  		return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
  	},

  	// @method getMaxZoom(): Number
  	// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
  	getMaxZoom: function () {
  		return this.options.maxZoom === undefined ?
  			(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
  			this.options.maxZoom;
  	},

  	// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
  	// Returns the maximum zoom level on which the given bounds fit to the map
  	// view in its entirety. If `inside` (optional) is set to `true`, the method
  	// instead returns the minimum zoom level on which the map view fits into
  	// the given bounds in its entirety.
  	getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
  		bounds = toLatLngBounds(bounds);
  		padding = toPoint(padding || [0, 0]);

  		var zoom = this.getZoom() || 0,
  		    min = this.getMinZoom(),
  		    max = this.getMaxZoom(),
  		    nw = bounds.getNorthWest(),
  		    se = bounds.getSouthEast(),
  		    size = this.getSize().subtract(padding),
  		    boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),
  		    snap = any3d ? this.options.zoomSnap : 1,
  		    scalex = size.x / boundsSize.x,
  		    scaley = size.y / boundsSize.y,
  		    scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);

  		zoom = this.getScaleZoom(scale, zoom);

  		if (snap) {
  			zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
  			zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
  		}

  		return Math.max(min, Math.min(max, zoom));
  	},

  	// @method getSize(): Point
  	// Returns the current size of the map container (in pixels).
  	getSize: function () {
  		if (!this._size || this._sizeChanged) {
  			this._size = new Point(
  				this._container.clientWidth || 0,
  				this._container.clientHeight || 0);

  			this._sizeChanged = false;
  		}
  		return this._size.clone();
  	},

  	// @method getPixelBounds(): Bounds
  	// Returns the bounds of the current map view in projected pixel
  	// coordinates (sometimes useful in layer and overlay implementations).
  	getPixelBounds: function (center, zoom) {
  		var topLeftPoint = this._getTopLeftPoint(center, zoom);
  		return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
  	},

  	// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
  	// the map pane? "left point of the map layer" can be confusing, specially
  	// since there can be negative offsets.
  	// @method getPixelOrigin(): Point
  	// Returns the projected pixel coordinates of the top left point of
  	// the map layer (useful in custom layer and overlay implementations).
  	getPixelOrigin: function () {
  		this._checkIfLoaded();
  		return this._pixelOrigin;
  	},

  	// @method getPixelWorldBounds(zoom?: Number): Bounds
  	// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
  	// If `zoom` is omitted, the map's current zoom level is used.
  	getPixelWorldBounds: function (zoom) {
  		return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
  	},

  	// @section Other Methods

  	// @method getPane(pane: String|HTMLElement): HTMLElement
  	// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
  	getPane: function (pane) {
  		return typeof pane === 'string' ? this._panes[pane] : pane;
  	},

  	// @method getPanes(): Object
  	// Returns a plain object containing the names of all [panes](#map-pane) as keys and
  	// the panes as values.
  	getPanes: function () {
  		return this._panes;
  	},

  	// @method getContainer: HTMLElement
  	// Returns the HTML element that contains the map.
  	getContainer: function () {
  		return this._container;
  	},


  	// @section Conversion Methods

  	// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
  	// Returns the scale factor to be applied to a map transition from zoom level
  	// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
  	getZoomScale: function (toZoom, fromZoom) {
  		// TODO replace with universal implementation after refactoring projections
  		var crs = this.options.crs;
  		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
  		return crs.scale(toZoom) / crs.scale(fromZoom);
  	},

  	// @method getScaleZoom(scale: Number, fromZoom: Number): Number
  	// Returns the zoom level that the map would end up at, if it is at `fromZoom`
  	// level and everything is scaled by a factor of `scale`. Inverse of
  	// [`getZoomScale`](#map-getZoomScale).
  	getScaleZoom: function (scale, fromZoom) {
  		var crs = this.options.crs;
  		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
  		var zoom = crs.zoom(scale * crs.scale(fromZoom));
  		return isNaN(zoom) ? Infinity : zoom;
  	},

  	// @method project(latlng: LatLng, zoom: Number): Point
  	// Projects a geographical coordinate `LatLng` according to the projection
  	// of the map's CRS, then scales it according to `zoom` and the CRS's
  	// `Transformation`. The result is pixel coordinate relative to
  	// the CRS origin.
  	project: function (latlng, zoom) {
  		zoom = zoom === undefined ? this._zoom : zoom;
  		return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
  	},

  	// @method unproject(point: Point, zoom: Number): LatLng
  	// Inverse of [`project`](#map-project).
  	unproject: function (point, zoom) {
  		zoom = zoom === undefined ? this._zoom : zoom;
  		return this.options.crs.pointToLatLng(toPoint(point), zoom);
  	},

  	// @method layerPointToLatLng(point: Point): LatLng
  	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
  	// returns the corresponding geographical coordinate (for the current zoom level).
  	layerPointToLatLng: function (point) {
  		var projectedPoint = toPoint(point).add(this.getPixelOrigin());
  		return this.unproject(projectedPoint);
  	},

  	// @method latLngToLayerPoint(latlng: LatLng): Point
  	// Given a geographical coordinate, returns the corresponding pixel coordinate
  	// relative to the [origin pixel](#map-getpixelorigin).
  	latLngToLayerPoint: function (latlng) {
  		var projectedPoint = this.project(toLatLng(latlng))._round();
  		return projectedPoint._subtract(this.getPixelOrigin());
  	},

  	// @method wrapLatLng(latlng: LatLng): LatLng
  	// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
  	// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
  	// CRS's bounds.
  	// By default this means longitude is wrapped around the dateline so its
  	// value is between -180 and +180 degrees.
  	wrapLatLng: function (latlng) {
  		return this.options.crs.wrapLatLng(toLatLng(latlng));
  	},

  	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
  	// Returns a `LatLngBounds` with the same size as the given one, ensuring that
  	// its center is within the CRS's bounds.
  	// By default this means the center longitude is wrapped around the dateline so its
  	// value is between -180 and +180 degrees, and the majority of the bounds
  	// overlaps the CRS's bounds.
  	wrapLatLngBounds: function (latlng) {
  		return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
  	},

  	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
  	// Returns the distance between two geographical coordinates according to
  	// the map's CRS. By default this measures distance in meters.
  	distance: function (latlng1, latlng2) {
  		return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
  	},

  	// @method containerPointToLayerPoint(point: Point): Point
  	// Given a pixel coordinate relative to the map container, returns the corresponding
  	// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
  	containerPointToLayerPoint: function (point) { // (Point)
  		return toPoint(point).subtract(this._getMapPanePos());
  	},

  	// @method layerPointToContainerPoint(point: Point): Point
  	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
  	// returns the corresponding pixel coordinate relative to the map container.
  	layerPointToContainerPoint: function (point) { // (Point)
  		return toPoint(point).add(this._getMapPanePos());
  	},

  	// @method containerPointToLatLng(point: Point): LatLng
  	// Given a pixel coordinate relative to the map container, returns
  	// the corresponding geographical coordinate (for the current zoom level).
  	containerPointToLatLng: function (point) {
  		var layerPoint = this.containerPointToLayerPoint(toPoint(point));
  		return this.layerPointToLatLng(layerPoint);
  	},

  	// @method latLngToContainerPoint(latlng: LatLng): Point
  	// Given a geographical coordinate, returns the corresponding pixel coordinate
  	// relative to the map container.
  	latLngToContainerPoint: function (latlng) {
  		return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
  	},

  	// @method mouseEventToContainerPoint(ev: MouseEvent): Point
  	// Given a MouseEvent object, returns the pixel coordinate relative to the
  	// map container where the event took place.
  	mouseEventToContainerPoint: function (e) {
  		return getMousePosition(e, this._container);
  	},

  	// @method mouseEventToLayerPoint(ev: MouseEvent): Point
  	// Given a MouseEvent object, returns the pixel coordinate relative to
  	// the [origin pixel](#map-getpixelorigin) where the event took place.
  	mouseEventToLayerPoint: function (e) {
  		return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
  	},

  	// @method mouseEventToLatLng(ev: MouseEvent): LatLng
  	// Given a MouseEvent object, returns geographical coordinate where the
  	// event took place.
  	mouseEventToLatLng: function (e) { // (MouseEvent)
  		return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
  	},


  	// map initialization methods

  	_initContainer: function (id) {
  		var container = this._container = get(id);

  		if (!container) {
  			throw new Error('Map container not found.');
  		} else if (container._leaflet_id) {
  			throw new Error('Map container is already initialized.');
  		}

  		on(container, 'scroll', this._onScroll, this);
  		this._containerId = stamp(container);
  	},

  	_initLayout: function () {
  		var container = this._container;

  		this._fadeAnimated = this.options.fadeAnimation && any3d;

  		addClass(container, 'leaflet-container' +
  			(touch ? ' leaflet-touch' : '') +
  			(retina ? ' leaflet-retina' : '') +
  			(ielt9 ? ' leaflet-oldie' : '') +
  			(safari ? ' leaflet-safari' : '') +
  			(this._fadeAnimated ? ' leaflet-fade-anim' : ''));

  		var position = getStyle(container, 'position');

  		if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
  			container.style.position = 'relative';
  		}

  		this._initPanes();

  		if (this._initControlPos) {
  			this._initControlPos();
  		}
  	},

  	_initPanes: function () {
  		var panes = this._panes = {};
  		this._paneRenderers = {};

  		// @section
  		//
  		// Panes are DOM elements used to control the ordering of layers on the map. You
  		// can access panes with [`map.getPane`](#map-getpane) or
  		// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
  		// [`map.createPane`](#map-createpane) method.
  		//
  		// Every map has the following default panes that differ only in zIndex.
  		//
  		// @pane mapPane: HTMLElement = 'auto'
  		// Pane that contains all other map panes

  		this._mapPane = this.createPane('mapPane', this._container);
  		setPosition(this._mapPane, new Point(0, 0));

  		// @pane tilePane: HTMLElement = 200
  		// Pane for `GridLayer`s and `TileLayer`s
  		this.createPane('tilePane');
  		// @pane overlayPane: HTMLElement = 400
  		// Pane for overlay shadows (e.g. `Marker` shadows)
  		this.createPane('shadowPane');
  		// @pane shadowPane: HTMLElement = 500
  		// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
  		this.createPane('overlayPane');
  		// @pane markerPane: HTMLElement = 600
  		// Pane for `Icon`s of `Marker`s
  		this.createPane('markerPane');
  		// @pane tooltipPane: HTMLElement = 650
  		// Pane for `Tooltip`s.
  		this.createPane('tooltipPane');
  		// @pane popupPane: HTMLElement = 700
  		// Pane for `Popup`s.
  		this.createPane('popupPane');

  		if (!this.options.markerZoomAnimation) {
  			addClass(panes.markerPane, 'leaflet-zoom-hide');
  			addClass(panes.shadowPane, 'leaflet-zoom-hide');
  		}
  	},


  	// private methods that modify map state

  	// @section Map state change events
  	_resetView: function (center, zoom) {
  		setPosition(this._mapPane, new Point(0, 0));

  		var loading = !this._loaded;
  		this._loaded = true;
  		zoom = this._limitZoom(zoom);

  		this.fire('viewprereset');

  		var zoomChanged = this._zoom !== zoom;
  		this
  			._moveStart(zoomChanged, false)
  			._move(center, zoom)
  			._moveEnd(zoomChanged);

  		// @event viewreset: Event
  		// Fired when the map needs to redraw its content (this usually happens
  		// on map zoom or load). Very useful for creating custom overlays.
  		this.fire('viewreset');

  		// @event load: Event
  		// Fired when the map is initialized (when its center and zoom are set
  		// for the first time).
  		if (loading) {
  			this.fire('load');
  		}
  	},

  	_moveStart: function (zoomChanged, noMoveStart) {
  		// @event zoomstart: Event
  		// Fired when the map zoom is about to change (e.g. before zoom animation).
  		// @event movestart: Event
  		// Fired when the view of the map starts changing (e.g. user starts dragging the map).
  		if (zoomChanged) {
  			this.fire('zoomstart');
  		}
  		if (!noMoveStart) {
  			this.fire('movestart');
  		}
  		return this;
  	},

  	_move: function (center, zoom, data) {
  		if (zoom === undefined) {
  			zoom = this._zoom;
  		}
  		var zoomChanged = this._zoom !== zoom;

  		this._zoom = zoom;
  		this._lastCenter = center;
  		this._pixelOrigin = this._getNewPixelOrigin(center);

  		// @event zoom: Event
  		// Fired repeatedly during any change in zoom level, including zoom
  		// and fly animations.
  		if (zoomChanged || (data && data.pinch)) {	// Always fire 'zoom' if pinching because #3530
  			this.fire('zoom', data);
  		}

  		// @event move: Event
  		// Fired repeatedly during any movement of the map, including pan and
  		// fly animations.
  		return this.fire('move', data);
  	},

  	_moveEnd: function (zoomChanged) {
  		// @event zoomend: Event
  		// Fired when the map has changed, after any animations.
  		if (zoomChanged) {
  			this.fire('zoomend');
  		}

  		// @event moveend: Event
  		// Fired when the center of the map stops changing (e.g. user stopped
  		// dragging the map).
  		return this.fire('moveend');
  	},

  	_stop: function () {
  		cancelAnimFrame(this._flyToFrame);
  		if (this._panAnim) {
  			this._panAnim.stop();
  		}
  		return this;
  	},

  	_rawPanBy: function (offset) {
  		setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
  	},

  	_getZoomSpan: function () {
  		return this.getMaxZoom() - this.getMinZoom();
  	},

  	_panInsideMaxBounds: function () {
  		if (!this._enforcingBounds) {
  			this.panInsideBounds(this.options.maxBounds);
  		}
  	},

  	_checkIfLoaded: function () {
  		if (!this._loaded) {
  			throw new Error('Set map center and zoom first.');
  		}
  	},

  	// DOM event handling

  	// @section Interaction events
  	_initEvents: function (remove$$1) {
  		this._targets = {};
  		this._targets[stamp(this._container)] = this;

  		var onOff = remove$$1 ? off : on;

  		// @event click: MouseEvent
  		// Fired when the user clicks (or taps) the map.
  		// @event dblclick: MouseEvent
  		// Fired when the user double-clicks (or double-taps) the map.
  		// @event mousedown: MouseEvent
  		// Fired when the user pushes the mouse button on the map.
  		// @event mouseup: MouseEvent
  		// Fired when the user releases the mouse button on the map.
  		// @event mouseover: MouseEvent
  		// Fired when the mouse enters the map.
  		// @event mouseout: MouseEvent
  		// Fired when the mouse leaves the map.
  		// @event mousemove: MouseEvent
  		// Fired while the mouse moves over the map.
  		// @event contextmenu: MouseEvent
  		// Fired when the user pushes the right mouse button on the map, prevents
  		// default browser context menu from showing if there are listeners on
  		// this event. Also fired on mobile when the user holds a single touch
  		// for a second (also called long press).
  		// @event keypress: KeyboardEvent
  		// Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
  		// @event keydown: KeyboardEvent
  		// Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
  		// the `keydown` event is fired for keys that produce a character value and for keys
  		// that do not produce a character value.
  		// @event keyup: KeyboardEvent
  		// Fired when the user releases a key from the keyboard while the map is focused.
  		onOff(this._container, 'click dblclick mousedown mouseup ' +
  			'mouseover mouseout mousemove contextmenu keypress keydown keyup', this._handleDOMEvent, this);

  		if (this.options.trackResize) {
  			onOff(window, 'resize', this._onResize, this);
  		}

  		if (any3d && this.options.transform3DLimit) {
  			(remove$$1 ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
  		}
  	},

  	_onResize: function () {
  		cancelAnimFrame(this._resizeRequest);
  		this._resizeRequest = requestAnimFrame(
  		        function () { this.invalidateSize({debounceMoveend: true}); }, this);
  	},

  	_onScroll: function () {
  		this._container.scrollTop  = 0;
  		this._container.scrollLeft = 0;
  	},

  	_onMoveEnd: function () {
  		var pos = this._getMapPanePos();
  		if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
  			// https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
  			// a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
  			this._resetView(this.getCenter(), this.getZoom());
  		}
  	},

  	_findEventTargets: function (e, type) {
  		var targets = [],
  		    target,
  		    isHover = type === 'mouseout' || type === 'mouseover',
  		    src = e.target || e.srcElement,
  		    dragging = false;

  		while (src) {
  			target = this._targets[stamp(src)];
  			if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
  				// Prevent firing click after you just dragged an object.
  				dragging = true;
  				break;
  			}
  			if (target && target.listens(type, true)) {
  				if (isHover && !isExternalTarget(src, e)) { break; }
  				targets.push(target);
  				if (isHover) { break; }
  			}
  			if (src === this._container) { break; }
  			src = src.parentNode;
  		}
  		if (!targets.length && !dragging && !isHover && isExternalTarget(src, e)) {
  			targets = [this];
  		}
  		return targets;
  	},

  	_handleDOMEvent: function (e) {
  		if (!this._loaded || skipped(e)) { return; }

  		var type = e.type;

  		if (type === 'mousedown' || type === 'keypress' || type === 'keyup' || type === 'keydown') {
  			// prevents outline when clicking on keyboard-focusable element
  			preventOutline(e.target || e.srcElement);
  		}

  		this._fireDOMEvent(e, type);
  	},

  	_mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],

  	_fireDOMEvent: function (e, type, targets) {

  		if (e.type === 'click') {
  			// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
  			// @event preclick: MouseEvent
  			// Fired before mouse click on the map (sometimes useful when you
  			// want something to happen on click before any existing click
  			// handlers start running).
  			var synth = extend({}, e);
  			synth.type = 'preclick';
  			this._fireDOMEvent(synth, synth.type, targets);
  		}

  		if (e._stopped) { return; }

  		// Find the layer the event is propagating from and its parents.
  		targets = (targets || []).concat(this._findEventTargets(e, type));

  		if (!targets.length) { return; }

  		var target = targets[0];
  		if (type === 'contextmenu' && target.listens(type, true)) {
  			preventDefault(e);
  		}

  		var data = {
  			originalEvent: e
  		};

  		if (e.type !== 'keypress' && e.type !== 'keydown' && e.type !== 'keyup') {
  			var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
  			data.containerPoint = isMarker ?
  				this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
  			data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
  			data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
  		}

  		for (var i = 0; i < targets.length; i++) {
  			targets[i].fire(type, data, true);
  			if (data.originalEvent._stopped ||
  				(targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1)) { return; }
  		}
  	},

  	_draggableMoved: function (obj) {
  		obj = obj.dragging && obj.dragging.enabled() ? obj : this;
  		return (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
  	},

  	_clearHandlers: function () {
  		for (var i = 0, len = this._handlers.length; i < len; i++) {
  			this._handlers[i].disable();
  		}
  	},

  	// @section Other Methods

  	// @method whenReady(fn: Function, context?: Object): this
  	// Runs the given function `fn` when the map gets initialized with
  	// a view (center and zoom) and at least one layer, or immediately
  	// if it's already initialized, optionally passing a function context.
  	whenReady: function (callback, context) {
  		if (this._loaded) {
  			callback.call(context || this, {target: this});
  		} else {
  			this.on('load', callback, context);
  		}
  		return this;
  	},


  	// private methods for getting map state

  	_getMapPanePos: function () {
  		return getPosition(this._mapPane) || new Point(0, 0);
  	},

  	_moved: function () {
  		var pos = this._getMapPanePos();
  		return pos && !pos.equals([0, 0]);
  	},

  	_getTopLeftPoint: function (center, zoom) {
  		var pixelOrigin = center && zoom !== undefined ?
  			this._getNewPixelOrigin(center, zoom) :
  			this.getPixelOrigin();
  		return pixelOrigin.subtract(this._getMapPanePos());
  	},

  	_getNewPixelOrigin: function (center, zoom) {
  		var viewHalf = this.getSize()._divideBy(2);
  		return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
  	},

  	_latLngToNewLayerPoint: function (latlng, zoom, center) {
  		var topLeft = this._getNewPixelOrigin(center, zoom);
  		return this.project(latlng, zoom)._subtract(topLeft);
  	},

  	_latLngBoundsToNewLayerBounds: function (latLngBounds, zoom, center) {
  		var topLeft = this._getNewPixelOrigin(center, zoom);
  		return toBounds([
  			this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),
  			this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),
  			this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),
  			this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)
  		]);
  	},

  	// layer point of the current center
  	_getCenterLayerPoint: function () {
  		return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
  	},

  	// offset of the specified place to the current center in pixels
  	_getCenterOffset: function (latlng) {
  		return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
  	},

  	// adjust center for view to get inside bounds
  	_limitCenter: function (center, zoom, bounds) {

  		if (!bounds) { return center; }

  		var centerPoint = this.project(center, zoom),
  		    viewHalf = this.getSize().divideBy(2),
  		    viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
  		    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

  		// If offset is less than a pixel, ignore.
  		// This prevents unstable projections from getting into
  		// an infinite loop of tiny offsets.
  		if (offset.round().equals([0, 0])) {
  			return center;
  		}

  		return this.unproject(centerPoint.add(offset), zoom);
  	},

  	// adjust offset for view to get inside bounds
  	_limitOffset: function (offset, bounds) {
  		if (!bounds) { return offset; }

  		var viewBounds = this.getPixelBounds(),
  		    newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

  		return offset.add(this._getBoundsOffset(newBounds, bounds));
  	},

  	// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
  	_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
  		var projectedMaxBounds = toBounds(
  		        this.project(maxBounds.getNorthEast(), zoom),
  		        this.project(maxBounds.getSouthWest(), zoom)
  		    ),
  		    minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
  		    maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),

  		    dx = this._rebound(minOffset.x, -maxOffset.x),
  		    dy = this._rebound(minOffset.y, -maxOffset.y);

  		return new Point(dx, dy);
  	},

  	_rebound: function (left, right) {
  		return left + right > 0 ?
  			Math.round(left - right) / 2 :
  			Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
  	},

  	_limitZoom: function (zoom) {
  		var min = this.getMinZoom(),
  		    max = this.getMaxZoom(),
  		    snap = any3d ? this.options.zoomSnap : 1;
  		if (snap) {
  			zoom = Math.round(zoom / snap) * snap;
  		}
  		return Math.max(min, Math.min(max, zoom));
  	},

  	_onPanTransitionStep: function () {
  		this.fire('move');
  	},

  	_onPanTransitionEnd: function () {
  		removeClass(this._mapPane, 'leaflet-pan-anim');
  		this.fire('moveend');
  	},

  	_tryAnimatedPan: function (center, options) {
  		// difference between the new and current centers in pixels
  		var offset = this._getCenterOffset(center)._trunc();

  		// don't animate too far unless animate: true specified in options
  		if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

  		this.panBy(offset, options);

  		return true;
  	},

  	_createAnimProxy: function () {

  		var proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');
  		this._panes.mapPane.appendChild(proxy);

  		this.on('zoomanim', function (e) {
  			var prop = TRANSFORM,
  			    transform = this._proxy.style[prop];

  			setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));

  			// workaround for case when transform is the same and so transitionend event is not fired
  			if (transform === this._proxy.style[prop] && this._animatingZoom) {
  				this._onZoomTransitionEnd();
  			}
  		}, this);

  		this.on('load moveend', this._animMoveEnd, this);

  		this._on('unload', this._destroyAnimProxy, this);
  	},

  	_destroyAnimProxy: function () {
  		remove(this._proxy);
  		this.off('load moveend', this._animMoveEnd, this);
  		delete this._proxy;
  	},

  	_animMoveEnd: function () {
  		var c = this.getCenter(),
  		    z = this.getZoom();
  		setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
  	},

  	_catchTransitionEnd: function (e) {
  		if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
  			this._onZoomTransitionEnd();
  		}
  	},

  	_nothingToAnimate: function () {
  		return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
  	},

  	_tryAnimatedZoom: function (center, zoom, options) {

  		if (this._animatingZoom) { return true; }

  		options = options || {};

  		// don't animate if disabled, not supported or zoom difference is too large
  		if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
  		        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

  		// offset is the pixel coords of the zoom origin relative to the current center
  		var scale = this.getZoomScale(zoom),
  		    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);

  		// don't animate if the zoom origin isn't within one screen from the current center, unless forced
  		if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

  		requestAnimFrame(function () {
  			this
  			    ._moveStart(true, false)
  			    ._animateZoom(center, zoom, true);
  		}, this);

  		return true;
  	},

  	_animateZoom: function (center, zoom, startAnim, noUpdate) {
  		if (!this._mapPane) { return; }

  		if (startAnim) {
  			this._animatingZoom = true;

  			// remember what center/zoom to set after animation
  			this._animateToCenter = center;
  			this._animateToZoom = zoom;

  			addClass(this._mapPane, 'leaflet-zoom-anim');
  		}

  		// @section Other Events
  		// @event zoomanim: ZoomAnimEvent
  		// Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
  		this.fire('zoomanim', {
  			center: center,
  			zoom: zoom,
  			noUpdate: noUpdate
  		});

  		// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
  		setTimeout(bind(this._onZoomTransitionEnd, this), 250);
  	},

  	_onZoomTransitionEnd: function () {
  		if (!this._animatingZoom) { return; }

  		if (this._mapPane) {
  			removeClass(this._mapPane, 'leaflet-zoom-anim');
  		}

  		this._animatingZoom = false;

  		this._move(this._animateToCenter, this._animateToZoom);

  		// This anim frame should prevent an obscure iOS webkit tile loading race condition.
  		requestAnimFrame(function () {
  			this._moveEnd(true);
  		}, this);
  	}
  });

  // @section

  // @factory L.map(id: String, options?: Map options)
  // Instantiates a map object given the DOM ID of a `<div>` element
  // and optionally an object literal with `Map options`.
  //
  // @alternative
  // @factory L.map(el: HTMLElement, options?: Map options)
  // Instantiates a map object given an instance of a `<div>` HTML element
  // and optionally an object literal with `Map options`.
  function createMap(id, options) {
  	return new Map(id, options);
  }

  /*
   * @class Control
   * @aka L.Control
   * @inherits Class
   *
   * L.Control is a base class for implementing map controls. Handles positioning.
   * All other controls extend from this class.
   */

  var Control = Class.extend({
  	// @section
  	// @aka Control options
  	options: {
  		// @option position: String = 'topright'
  		// The position of the control (one of the map corners). Possible values are `'topleft'`,
  		// `'topright'`, `'bottomleft'` or `'bottomright'`
  		position: 'topright'
  	},

  	initialize: function (options) {
  		setOptions(this, options);
  	},

  	/* @section
  	 * Classes extending L.Control will inherit the following methods:
  	 *
  	 * @method getPosition: string
  	 * Returns the position of the control.
  	 */
  	getPosition: function () {
  		return this.options.position;
  	},

  	// @method setPosition(position: string): this
  	// Sets the position of the control.
  	setPosition: function (position) {
  		var map = this._map;

  		if (map) {
  			map.removeControl(this);
  		}

  		this.options.position = position;

  		if (map) {
  			map.addControl(this);
  		}

  		return this;
  	},

  	// @method getContainer: HTMLElement
  	// Returns the HTMLElement that contains the control.
  	getContainer: function () {
  		return this._container;
  	},

  	// @method addTo(map: Map): this
  	// Adds the control to the given map.
  	addTo: function (map) {
  		this.remove();
  		this._map = map;

  		var container = this._container = this.onAdd(map),
  		    pos = this.getPosition(),
  		    corner = map._controlCorners[pos];

  		addClass(container, 'leaflet-control');

  		if (pos.indexOf('bottom') !== -1) {
  			corner.insertBefore(container, corner.firstChild);
  		} else {
  			corner.appendChild(container);
  		}

  		this._map.on('unload', this.remove, this);

  		return this;
  	},

  	// @method remove: this
  	// Removes the control from the map it is currently active on.
  	remove: function () {
  		if (!this._map) {
  			return this;
  		}

  		remove(this._container);

  		if (this.onRemove) {
  			this.onRemove(this._map);
  		}

  		this._map.off('unload', this.remove, this);
  		this._map = null;

  		return this;
  	},

  	_refocusOnMap: function (e) {
  		// if map exists and event is not a keyboard event
  		if (this._map && e && e.screenX > 0 && e.screenY > 0) {
  			this._map.getContainer().focus();
  		}
  	}
  });

  var control = function (options) {
  	return new Control(options);
  };

  /* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   */

  /* @namespace Map
   * @section Methods for Layers and Controls
   */
  Map.include({
  	// @method addControl(control: Control): this
  	// Adds the given control to the map
  	addControl: function (control) {
  		control.addTo(this);
  		return this;
  	},

  	// @method removeControl(control: Control): this
  	// Removes the given control from the map
  	removeControl: function (control) {
  		control.remove();
  		return this;
  	},

  	_initControlPos: function () {
  		var corners = this._controlCorners = {},
  		    l = 'leaflet-',
  		    container = this._controlContainer =
  		            create$1('div', l + 'control-container', this._container);

  		function createCorner(vSide, hSide) {
  			var className = l + vSide + ' ' + l + hSide;

  			corners[vSide + hSide] = create$1('div', className, container);
  		}

  		createCorner('top', 'left');
  		createCorner('top', 'right');
  		createCorner('bottom', 'left');
  		createCorner('bottom', 'right');
  	},

  	_clearControlPos: function () {
  		for (var i in this._controlCorners) {
  			remove(this._controlCorners[i]);
  		}
  		remove(this._controlContainer);
  		delete this._controlCorners;
  		delete this._controlContainer;
  	}
  });

  /*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */

  var Layers = Control.extend({
  	// @section
  	// @aka Control.Layers options
  	options: {
  		// @option collapsed: Boolean = true
  		// If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
  		collapsed: true,
  		position: 'topright',

  		// @option autoZIndex: Boolean = true
  		// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
  		autoZIndex: true,

  		// @option hideSingleBase: Boolean = false
  		// If `true`, the base layers in the control will be hidden when there is only one.
  		hideSingleBase: false,

  		// @option sortLayers: Boolean = false
  		// Whether to sort the layers. When `false`, layers will keep the order
  		// in which they were added to the control.
  		sortLayers: false,

  		// @option sortFunction: Function = *
  		// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  		// that will be used for sorting the layers, when `sortLayers` is `true`.
  		// The function receives both the `L.Layer` instances and their names, as in
  		// `sortFunction(layerA, layerB, nameA, nameB)`.
  		// By default, it sorts layers alphabetically by their name.
  		sortFunction: function (layerA, layerB, nameA, nameB) {
  			return nameA < nameB ? -1 : (nameB < nameA ? 1 : 0);
  		}
  	},

  	initialize: function (baseLayers, overlays, options) {
  		setOptions(this, options);

  		this._layerControlInputs = [];
  		this._layers = [];
  		this._lastZIndex = 0;
  		this._handlingClick = false;

  		for (var i in baseLayers) {
  			this._addLayer(baseLayers[i], i);
  		}

  		for (i in overlays) {
  			this._addLayer(overlays[i], i, true);
  		}
  	},

  	onAdd: function (map) {
  		this._initLayout();
  		this._update();

  		this._map = map;
  		map.on('zoomend', this._checkDisabledLayers, this);

  		for (var i = 0; i < this._layers.length; i++) {
  			this._layers[i].layer.on('add remove', this._onLayerChange, this);
  		}

  		return this._container;
  	},

  	addTo: function (map) {
  		Control.prototype.addTo.call(this, map);
  		// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
  		return this._expandIfNotCollapsed();
  	},

  	onRemove: function () {
  		this._map.off('zoomend', this._checkDisabledLayers, this);

  		for (var i = 0; i < this._layers.length; i++) {
  			this._layers[i].layer.off('add remove', this._onLayerChange, this);
  		}
  	},

  	// @method addBaseLayer(layer: Layer, name: String): this
  	// Adds a base layer (radio button entry) with the given name to the control.
  	addBaseLayer: function (layer, name) {
  		this._addLayer(layer, name);
  		return (this._map) ? this._update() : this;
  	},

  	// @method addOverlay(layer: Layer, name: String): this
  	// Adds an overlay (checkbox entry) with the given name to the control.
  	addOverlay: function (layer, name) {
  		this._addLayer(layer, name, true);
  		return (this._map) ? this._update() : this;
  	},

  	// @method removeLayer(layer: Layer): this
  	// Remove the given layer from the control.
  	removeLayer: function (layer) {
  		layer.off('add remove', this._onLayerChange, this);

  		var obj = this._getLayer(stamp(layer));
  		if (obj) {
  			this._layers.splice(this._layers.indexOf(obj), 1);
  		}
  		return (this._map) ? this._update() : this;
  	},

  	// @method expand(): this
  	// Expand the control container if collapsed.
  	expand: function () {
  		addClass(this._container, 'leaflet-control-layers-expanded');
  		this._section.style.height = null;
  		var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
  		if (acceptableHeight < this._section.clientHeight) {
  			addClass(this._section, 'leaflet-control-layers-scrollbar');
  			this._section.style.height = acceptableHeight + 'px';
  		} else {
  			removeClass(this._section, 'leaflet-control-layers-scrollbar');
  		}
  		this._checkDisabledLayers();
  		return this;
  	},

  	// @method collapse(): this
  	// Collapse the control container if expanded.
  	collapse: function () {
  		removeClass(this._container, 'leaflet-control-layers-expanded');
  		return this;
  	},

  	_initLayout: function () {
  		var className = 'leaflet-control-layers',
  		    container = this._container = create$1('div', className),
  		    collapsed = this.options.collapsed;

  		// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
  		container.setAttribute('aria-haspopup', true);

  		disableClickPropagation(container);
  		disableScrollPropagation(container);

  		var section = this._section = create$1('section', className + '-list');

  		if (collapsed) {
  			this._map.on('click', this.collapse, this);

  			if (!android) {
  				on(container, {
  					mouseenter: this.expand,
  					mouseleave: this.collapse
  				}, this);
  			}
  		}

  		var link = this._layersLink = create$1('a', className + '-toggle', container);
  		link.href = '#';
  		link.title = 'Layers';

  		if (touch) {
  			on(link, 'click', stop);
  			on(link, 'click', this.expand, this);
  		} else {
  			on(link, 'focus', this.expand, this);
  		}

  		if (!collapsed) {
  			this.expand();
  		}

  		this._baseLayersList = create$1('div', className + '-base', section);
  		this._separator = create$1('div', className + '-separator', section);
  		this._overlaysList = create$1('div', className + '-overlays', section);

  		container.appendChild(section);
  	},

  	_getLayer: function (id) {
  		for (var i = 0; i < this._layers.length; i++) {

  			if (this._layers[i] && stamp(this._layers[i].layer) === id) {
  				return this._layers[i];
  			}
  		}
  	},

  	_addLayer: function (layer, name, overlay) {
  		if (this._map) {
  			layer.on('add remove', this._onLayerChange, this);
  		}

  		this._layers.push({
  			layer: layer,
  			name: name,
  			overlay: overlay
  		});

  		if (this.options.sortLayers) {
  			this._layers.sort(bind(function (a, b) {
  				return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
  			}, this));
  		}

  		if (this.options.autoZIndex && layer.setZIndex) {
  			this._lastZIndex++;
  			layer.setZIndex(this._lastZIndex);
  		}

  		this._expandIfNotCollapsed();
  	},

  	_update: function () {
  		if (!this._container) { return this; }

  		empty(this._baseLayersList);
  		empty(this._overlaysList);

  		this._layerControlInputs = [];
  		var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;

  		for (i = 0; i < this._layers.length; i++) {
  			obj = this._layers[i];
  			this._addItem(obj);
  			overlaysPresent = overlaysPresent || obj.overlay;
  			baseLayersPresent = baseLayersPresent || !obj.overlay;
  			baseLayersCount += !obj.overlay ? 1 : 0;
  		}

  		// Hide base layers section if there's only one layer.
  		if (this.options.hideSingleBase) {
  			baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
  			this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
  		}

  		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';

  		return this;
  	},

  	_onLayerChange: function (e) {
  		if (!this._handlingClick) {
  			this._update();
  		}

  		var obj = this._getLayer(stamp(e.target));

  		// @namespace Map
  		// @section Layer events
  		// @event baselayerchange: LayersControlEvent
  		// Fired when the base layer is changed through the [layers control](#control-layers).
  		// @event overlayadd: LayersControlEvent
  		// Fired when an overlay is selected through the [layers control](#control-layers).
  		// @event overlayremove: LayersControlEvent
  		// Fired when an overlay is deselected through the [layers control](#control-layers).
  		// @namespace Control.Layers
  		var type = obj.overlay ?
  			(e.type === 'add' ? 'overlayadd' : 'overlayremove') :
  			(e.type === 'add' ? 'baselayerchange' : null);

  		if (type) {
  			this._map.fire(type, obj);
  		}
  	},

  	// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
  	_createRadioElement: function (name, checked) {

  		var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' +
  				name + '"' + (checked ? ' checked="checked"' : '') + '/>';

  		var radioFragment = document.createElement('div');
  		radioFragment.innerHTML = radioHtml;

  		return radioFragment.firstChild;
  	},

  	_addItem: function (obj) {
  		var label = document.createElement('label'),
  		    checked = this._map.hasLayer(obj.layer),
  		    input;

  		if (obj.overlay) {
  			input = document.createElement('input');
  			input.type = 'checkbox';
  			input.className = 'leaflet-control-layers-selector';
  			input.defaultChecked = checked;
  		} else {
  			input = this._createRadioElement('leaflet-base-layers_' + stamp(this), checked);
  		}

  		this._layerControlInputs.push(input);
  		input.layerId = stamp(obj.layer);

  		on(input, 'click', this._onInputClick, this);

  		var name = document.createElement('span');
  		name.innerHTML = ' ' + obj.name;

  		// Helps from preventing layer control flicker when checkboxes are disabled
  		// https://github.com/Leaflet/Leaflet/issues/2771
  		var holder = document.createElement('div');

  		label.appendChild(holder);
  		holder.appendChild(input);
  		holder.appendChild(name);

  		var container = obj.overlay ? this._overlaysList : this._baseLayersList;
  		container.appendChild(label);

  		this._checkDisabledLayers();
  		return label;
  	},

  	_onInputClick: function () {
  		var inputs = this._layerControlInputs,
  		    input, layer;
  		var addedLayers = [],
  		    removedLayers = [];

  		this._handlingClick = true;

  		for (var i = inputs.length - 1; i >= 0; i--) {
  			input = inputs[i];
  			layer = this._getLayer(input.layerId).layer;

  			if (input.checked) {
  				addedLayers.push(layer);
  			} else if (!input.checked) {
  				removedLayers.push(layer);
  			}
  		}

  		// Bugfix issue 2318: Should remove all old layers before readding new ones
  		for (i = 0; i < removedLayers.length; i++) {
  			if (this._map.hasLayer(removedLayers[i])) {
  				this._map.removeLayer(removedLayers[i]);
  			}
  		}
  		for (i = 0; i < addedLayers.length; i++) {
  			if (!this._map.hasLayer(addedLayers[i])) {
  				this._map.addLayer(addedLayers[i]);
  			}
  		}

  		this._handlingClick = false;

  		this._refocusOnMap();
  	},

  	_checkDisabledLayers: function () {
  		var inputs = this._layerControlInputs,
  		    input,
  		    layer,
  		    zoom = this._map.getZoom();

  		for (var i = inputs.length - 1; i >= 0; i--) {
  			input = inputs[i];
  			layer = this._getLayer(input.layerId).layer;
  			input.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) ||
  			                 (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);

  		}
  	},

  	_expandIfNotCollapsed: function () {
  		if (this._map && !this.options.collapsed) {
  			this.expand();
  		}
  		return this;
  	},

  	_expand: function () {
  		// Backward compatibility, remove me in 1.1.
  		return this.expand();
  	},

  	_collapse: function () {
  		// Backward compatibility, remove me in 1.1.
  		return this.collapse();
  	}

  });


  // @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
  // Creates a layers control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
  var layers = function (baseLayers, overlays, options) {
  	return new Layers(baseLayers, overlays, options);
  };

  /*
   * @class Control.Zoom
   * @aka L.Control.Zoom
   * @inherits Control
   *
   * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
   */

  var Zoom = Control.extend({
  	// @section
  	// @aka Control.Zoom options
  	options: {
  		position: 'topleft',

  		// @option zoomInText: String = '+'
  		// The text set on the 'zoom in' button.
  		zoomInText: '+',

  		// @option zoomInTitle: String = 'Zoom in'
  		// The title set on the 'zoom in' button.
  		zoomInTitle: 'Zoom in',

  		// @option zoomOutText: String = '&#x2212;'
  		// The text set on the 'zoom out' button.
  		zoomOutText: '&#x2212;',

  		// @option zoomOutTitle: String = 'Zoom out'
  		// The title set on the 'zoom out' button.
  		zoomOutTitle: 'Zoom out'
  	},

  	onAdd: function (map) {
  		var zoomName = 'leaflet-control-zoom',
  		    container = create$1('div', zoomName + ' leaflet-bar'),
  		    options = this.options;

  		this._zoomInButton  = this._createButton(options.zoomInText, options.zoomInTitle,
  		        zoomName + '-in',  container, this._zoomIn);
  		this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
  		        zoomName + '-out', container, this._zoomOut);

  		this._updateDisabled();
  		map.on('zoomend zoomlevelschange', this._updateDisabled, this);

  		return container;
  	},

  	onRemove: function (map) {
  		map.off('zoomend zoomlevelschange', this._updateDisabled, this);
  	},

  	disable: function () {
  		this._disabled = true;
  		this._updateDisabled();
  		return this;
  	},

  	enable: function () {
  		this._disabled = false;
  		this._updateDisabled();
  		return this;
  	},

  	_zoomIn: function (e) {
  		if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
  			this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
  		}
  	},

  	_zoomOut: function (e) {
  		if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
  			this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
  		}
  	},

  	_createButton: function (html, title, className, container, fn) {
  		var link = create$1('a', className, container);
  		link.innerHTML = html;
  		link.href = '#';
  		link.title = title;

  		/*
  		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
  		 */
  		link.setAttribute('role', 'button');
  		link.setAttribute('aria-label', title);

  		disableClickPropagation(link);
  		on(link, 'click', stop);
  		on(link, 'click', fn, this);
  		on(link, 'click', this._refocusOnMap, this);

  		return link;
  	},

  	_updateDisabled: function () {
  		var map = this._map,
  		    className = 'leaflet-disabled';

  		removeClass(this._zoomInButton, className);
  		removeClass(this._zoomOutButton, className);

  		if (this._disabled || map._zoom === map.getMinZoom()) {
  			addClass(this._zoomOutButton, className);
  		}
  		if (this._disabled || map._zoom === map.getMaxZoom()) {
  			addClass(this._zoomInButton, className);
  		}
  	}
  });

  // @namespace Map
  // @section Control options
  // @option zoomControl: Boolean = true
  // Whether a [zoom control](#control-zoom) is added to the map by default.
  Map.mergeOptions({
  	zoomControl: true
  });

  Map.addInitHook(function () {
  	if (this.options.zoomControl) {
  		// @section Controls
  		// @property zoomControl: Control.Zoom
  		// The default zoom control (only available if the
  		// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
  		this.zoomControl = new Zoom();
  		this.addControl(this.zoomControl);
  	}
  });

  // @namespace Control.Zoom
  // @factory L.control.zoom(options: Control.Zoom options)
  // Creates a zoom control
  var zoom = function (options) {
  	return new Zoom(options);
  };

  /*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */

  var Scale = Control.extend({
  	// @section
  	// @aka Control.Scale options
  	options: {
  		position: 'bottomleft',

  		// @option maxWidth: Number = 100
  		// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
  		maxWidth: 100,

  		// @option metric: Boolean = True
  		// Whether to show the metric scale line (m/km).
  		metric: true,

  		// @option imperial: Boolean = True
  		// Whether to show the imperial scale line (mi/ft).
  		imperial: true

  		// @option updateWhenIdle: Boolean = false
  		// If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
  	},

  	onAdd: function (map) {
  		var className = 'leaflet-control-scale',
  		    container = create$1('div', className),
  		    options = this.options;

  		this._addScales(options, className + '-line', container);

  		map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
  		map.whenReady(this._update, this);

  		return container;
  	},

  	onRemove: function (map) {
  		map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
  	},

  	_addScales: function (options, className, container) {
  		if (options.metric) {
  			this._mScale = create$1('div', className, container);
  		}
  		if (options.imperial) {
  			this._iScale = create$1('div', className, container);
  		}
  	},

  	_update: function () {
  		var map = this._map,
  		    y = map.getSize().y / 2;

  		var maxMeters = map.distance(
  			map.containerPointToLatLng([0, y]),
  			map.containerPointToLatLng([this.options.maxWidth, y]));

  		this._updateScales(maxMeters);
  	},

  	_updateScales: function (maxMeters) {
  		if (this.options.metric && maxMeters) {
  			this._updateMetric(maxMeters);
  		}
  		if (this.options.imperial && maxMeters) {
  			this._updateImperial(maxMeters);
  		}
  	},

  	_updateMetric: function (maxMeters) {
  		var meters = this._getRoundNum(maxMeters),
  		    label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';

  		this._updateScale(this._mScale, label, meters / maxMeters);
  	},

  	_updateImperial: function (maxMeters) {
  		var maxFeet = maxMeters * 3.2808399,
  		    maxMiles, miles, feet;

  		if (maxFeet > 5280) {
  			maxMiles = maxFeet / 5280;
  			miles = this._getRoundNum(maxMiles);
  			this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);

  		} else {
  			feet = this._getRoundNum(maxFeet);
  			this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
  		}
  	},

  	_updateScale: function (scale, text, ratio) {
  		scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
  		scale.innerHTML = text;
  	},

  	_getRoundNum: function (num) {
  		var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
  		    d = num / pow10;

  		d = d >= 10 ? 10 :
  		    d >= 5 ? 5 :
  		    d >= 3 ? 3 :
  		    d >= 2 ? 2 : 1;

  		return pow10 * d;
  	}
  });


  // @factory L.control.scale(options?: Control.Scale options)
  // Creates an scale control with the given options.
  var scale = function (options) {
  	return new Scale(options);
  };

  /*
   * @class Control.Attribution
   * @aka L.Control.Attribution
   * @inherits Control
   *
   * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
   */

  var Attribution = Control.extend({
  	// @section
  	// @aka Control.Attribution options
  	options: {
  		position: 'bottomright',

  		// @option prefix: String = 'Leaflet'
  		// The HTML text shown before the attributions. Pass `false` to disable.
  		prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
  	},

  	initialize: function (options) {
  		setOptions(this, options);

  		this._attributions = {};
  	},

  	onAdd: function (map) {
  		map.attributionControl = this;
  		this._container = create$1('div', 'leaflet-control-attribution');
  		disableClickPropagation(this._container);

  		// TODO ugly, refactor
  		for (var i in map._layers) {
  			if (map._layers[i].getAttribution) {
  				this.addAttribution(map._layers[i].getAttribution());
  			}
  		}

  		this._update();

  		return this._container;
  	},

  	// @method setPrefix(prefix: String): this
  	// Sets the text before the attributions.
  	setPrefix: function (prefix) {
  		this.options.prefix = prefix;
  		this._update();
  		return this;
  	},

  	// @method addAttribution(text: String): this
  	// Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
  	addAttribution: function (text) {
  		if (!text) { return this; }

  		if (!this._attributions[text]) {
  			this._attributions[text] = 0;
  		}
  		this._attributions[text]++;

  		this._update();

  		return this;
  	},

  	// @method removeAttribution(text: String): this
  	// Removes an attribution text.
  	removeAttribution: function (text) {
  		if (!text) { return this; }

  		if (this._attributions[text]) {
  			this._attributions[text]--;
  			this._update();
  		}

  		return this;
  	},

  	_update: function () {
  		if (!this._map) { return; }

  		var attribs = [];

  		for (var i in this._attributions) {
  			if (this._attributions[i]) {
  				attribs.push(i);
  			}
  		}

  		var prefixAndAttribs = [];

  		if (this.options.prefix) {
  			prefixAndAttribs.push(this.options.prefix);
  		}
  		if (attribs.length) {
  			prefixAndAttribs.push(attribs.join(', '));
  		}

  		this._container.innerHTML = prefixAndAttribs.join(' | ');
  	}
  });

  // @namespace Map
  // @section Control options
  // @option attributionControl: Boolean = true
  // Whether a [attribution control](#control-attribution) is added to the map by default.
  Map.mergeOptions({
  	attributionControl: true
  });

  Map.addInitHook(function () {
  	if (this.options.attributionControl) {
  		new Attribution().addTo(this);
  	}
  });

  // @namespace Control.Attribution
  // @factory L.control.attribution(options: Control.Attribution options)
  // Creates an attribution control.
  var attribution = function (options) {
  	return new Attribution(options);
  };

  Control.Layers = Layers;
  Control.Zoom = Zoom;
  Control.Scale = Scale;
  Control.Attribution = Attribution;

  control.layers = layers;
  control.zoom = zoom;
  control.scale = scale;
  control.attribution = attribution;

  /*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */

  // @class Handler
  // @aka L.Handler
  // Abstract class for map interaction handlers

  var Handler = Class.extend({
  	initialize: function (map) {
  		this._map = map;
  	},

  	// @method enable(): this
  	// Enables the handler
  	enable: function () {
  		if (this._enabled) { return this; }

  		this._enabled = true;
  		this.addHooks();
  		return this;
  	},

  	// @method disable(): this
  	// Disables the handler
  	disable: function () {
  		if (!this._enabled) { return this; }

  		this._enabled = false;
  		this.removeHooks();
  		return this;
  	},

  	// @method enabled(): Boolean
  	// Returns `true` if the handler is enabled
  	enabled: function () {
  		return !!this._enabled;
  	}

  	// @section Extension methods
  	// Classes inheriting from `Handler` must implement the two following methods:
  	// @method addHooks()
  	// Called when the handler is enabled, should add event hooks.
  	// @method removeHooks()
  	// Called when the handler is disabled, should remove the event hooks added previously.
  });

  // @section There is static function which can be called without instantiating L.Handler:
  // @function addTo(map: Map, name: String): this
  // Adds a new Handler to the given map with the given name.
  Handler.addTo = function (map, name) {
  	map.addHandler(name, this);
  	return this;
  };

  var Mixin = {Events: Events};

  /*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */

  var START = touch ? 'touchstart mousedown' : 'mousedown';
  var END = {
  	mousedown: 'mouseup',
  	touchstart: 'touchend',
  	pointerdown: 'touchend',
  	MSPointerDown: 'touchend'
  };
  var MOVE = {
  	mousedown: 'mousemove',
  	touchstart: 'touchmove',
  	pointerdown: 'touchmove',
  	MSPointerDown: 'touchmove'
  };


  var Draggable = Evented.extend({

  	options: {
  		// @section
  		// @aka Draggable options
  		// @option clickTolerance: Number = 3
  		// The max number of pixels a user can shift the mouse pointer during a click
  		// for it to be considered a valid click (as opposed to a mouse drag).
  		clickTolerance: 3
  	},

  	// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
  	// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
  	initialize: function (element, dragStartTarget, preventOutline$$1, options) {
  		setOptions(this, options);

  		this._element = element;
  		this._dragStartTarget = dragStartTarget || element;
  		this._preventOutline = preventOutline$$1;
  	},

  	// @method enable()
  	// Enables the dragging ability
  	enable: function () {
  		if (this._enabled) { return; }

  		on(this._dragStartTarget, START, this._onDown, this);

  		this._enabled = true;
  	},

  	// @method disable()
  	// Disables the dragging ability
  	disable: function () {
  		if (!this._enabled) { return; }

  		// If we're currently dragging this draggable,
  		// disabling it counts as first ending the drag.
  		if (Draggable._dragging === this) {
  			this.finishDrag();
  		}

  		off(this._dragStartTarget, START, this._onDown, this);

  		this._enabled = false;
  		this._moved = false;
  	},

  	_onDown: function (e) {
  		// Ignore simulated events, since we handle both touch and
  		// mouse explicitly; otherwise we risk getting duplicates of
  		// touch events, see #4315.
  		// Also ignore the event if disabled; this happens in IE11
  		// under some circumstances, see #3666.
  		if (e._simulated || !this._enabled) { return; }

  		this._moved = false;

  		if (hasClass(this._element, 'leaflet-zoom-anim')) { return; }

  		if (Draggable._dragging || e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }
  		Draggable._dragging = this;  // Prevent dragging multiple objects at once.

  		if (this._preventOutline) {
  			preventOutline(this._element);
  		}

  		disableImageDrag();
  		disableTextSelection();

  		if (this._moving) { return; }

  		// @event down: Event
  		// Fired when a drag is about to start.
  		this.fire('down');

  		var first = e.touches ? e.touches[0] : e,
  		    sizedParent = getSizedParentNode(this._element);

  		this._startPoint = new Point(first.clientX, first.clientY);

  		// Cache the scale, so that we can continuously compensate for it during drag (_onMove).
  		this._parentScale = getScale(sizedParent);

  		on(document, MOVE[e.type], this._onMove, this);
  		on(document, END[e.type], this._onUp, this);
  	},

  	_onMove: function (e) {
  		// Ignore simulated events, since we handle both touch and
  		// mouse explicitly; otherwise we risk getting duplicates of
  		// touch events, see #4315.
  		// Also ignore the event if disabled; this happens in IE11
  		// under some circumstances, see #3666.
  		if (e._simulated || !this._enabled) { return; }

  		if (e.touches && e.touches.length > 1) {
  			this._moved = true;
  			return;
  		}

  		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
  		    offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);

  		if (!offset.x && !offset.y) { return; }
  		if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) { return; }

  		// We assume that the parent container's position, border and scale do not change for the duration of the drag.
  		// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
  		// and we can use the cached value for the scale.
  		offset.x /= this._parentScale.x;
  		offset.y /= this._parentScale.y;

  		preventDefault(e);

  		if (!this._moved) {
  			// @event dragstart: Event
  			// Fired when a drag starts
  			this.fire('dragstart');

  			this._moved = true;
  			this._startPos = getPosition(this._element).subtract(offset);

  			addClass(document.body, 'leaflet-dragging');

  			this._lastTarget = e.target || e.srcElement;
  			// IE and Edge do not give the <use> element, so fetch it
  			// if necessary
  			if (window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance) {
  				this._lastTarget = this._lastTarget.correspondingUseElement;
  			}
  			addClass(this._lastTarget, 'leaflet-drag-target');
  		}

  		this._newPos = this._startPos.add(offset);
  		this._moving = true;

  		cancelAnimFrame(this._animRequest);
  		this._lastEvent = e;
  		this._animRequest = requestAnimFrame(this._updatePosition, this, true);
  	},

  	_updatePosition: function () {
  		var e = {originalEvent: this._lastEvent};

  		// @event predrag: Event
  		// Fired continuously during dragging *before* each corresponding
  		// update of the element's position.
  		this.fire('predrag', e);
  		setPosition(this._element, this._newPos);

  		// @event drag: Event
  		// Fired continuously during dragging.
  		this.fire('drag', e);
  	},

  	_onUp: function (e) {
  		// Ignore simulated events, since we handle both touch and
  		// mouse explicitly; otherwise we risk getting duplicates of
  		// touch events, see #4315.
  		// Also ignore the event if disabled; this happens in IE11
  		// under some circumstances, see #3666.
  		if (e._simulated || !this._enabled) { return; }
  		this.finishDrag();
  	},

  	finishDrag: function () {
  		removeClass(document.body, 'leaflet-dragging');

  		if (this._lastTarget) {
  			removeClass(this._lastTarget, 'leaflet-drag-target');
  			this._lastTarget = null;
  		}

  		for (var i in MOVE) {
  			off(document, MOVE[i], this._onMove, this);
  			off(document, END[i], this._onUp, this);
  		}

  		enableImageDrag();
  		enableTextSelection();

  		if (this._moved && this._moving) {
  			// ensure drag is not fired after dragend
  			cancelAnimFrame(this._animRequest);

  			// @event dragend: DragEndEvent
  			// Fired when the drag ends.
  			this.fire('dragend', {
  				distance: this._newPos.distanceTo(this._startPos)
  			});
  		}

  		this._moving = false;
  		Draggable._dragging = false;
  	}

  });

  /*
   * @namespace LineUtil
   *
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
   */

  // Simplify polyline with vertex reduction and Douglas-Peucker simplification.
  // Improves rendering performance dramatically by lessening the number of points to draw.

  // @function simplify(points: Point[], tolerance: Number): Point[]
  // Dramatically reduces the number of points in a polyline while retaining
  // its shape and returns a new array of simplified points, using the
  // [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
  // Used for a huge performance boost when processing/displaying Leaflet polylines for
  // each zoom level and also reducing visual noise. tolerance affects the amount of
  // simplification (lesser value means higher quality but slower and with more points).
  // Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).
  function simplify(points, tolerance) {
  	if (!tolerance || !points.length) {
  		return points.slice();
  	}

  	var sqTolerance = tolerance * tolerance;

  	    // stage 1: vertex reduction
  	    points = _reducePoints(points, sqTolerance);

  	    // stage 2: Douglas-Peucker simplification
  	    points = _simplifyDP(points, sqTolerance);

  	return points;
  }

  // @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
  // Returns the distance between point `p` and segment `p1` to `p2`.
  function pointToSegmentDistance(p, p1, p2) {
  	return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
  }

  // @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
  // Returns the closest point from a point `p` on a segment `p1` to `p2`.
  function closestPointOnSegment(p, p1, p2) {
  	return _sqClosestPointOnSegment(p, p1, p2);
  }

  // Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
  function _simplifyDP(points, sqTolerance) {

  	var len = points.length,
  	    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
  	    markers = new ArrayConstructor(len);

  	    markers[0] = markers[len - 1] = 1;

  	_simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

  	var i,
  	    newPoints = [];

  	for (i = 0; i < len; i++) {
  		if (markers[i]) {
  			newPoints.push(points[i]);
  		}
  	}

  	return newPoints;
  }

  function _simplifyDPStep(points, markers, sqTolerance, first, last) {

  	var maxSqDist = 0,
  	index, i, sqDist;

  	for (i = first + 1; i <= last - 1; i++) {
  		sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);

  		if (sqDist > maxSqDist) {
  			index = i;
  			maxSqDist = sqDist;
  		}
  	}

  	if (maxSqDist > sqTolerance) {
  		markers[index] = 1;

  		_simplifyDPStep(points, markers, sqTolerance, first, index);
  		_simplifyDPStep(points, markers, sqTolerance, index, last);
  	}
  }

  // reduce points that are too close to each other to a single point
  function _reducePoints(points, sqTolerance) {
  	var reducedPoints = [points[0]];

  	for (var i = 1, prev = 0, len = points.length; i < len; i++) {
  		if (_sqDist(points[i], points[prev]) > sqTolerance) {
  			reducedPoints.push(points[i]);
  			prev = i;
  		}
  	}
  	if (prev < len - 1) {
  		reducedPoints.push(points[len - 1]);
  	}
  	return reducedPoints;
  }

  var _lastCode;

  // @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
  // Clips the segment a to b by rectangular bounds with the
  // [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
  // (modifying the segment points directly!). Used by Leaflet to only show polyline
  // points that are on the screen or near, increasing performance.
  function clipSegment(a, b, bounds, useLastCode, round) {
  	var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),
  	    codeB = _getBitCode(b, bounds),

  	    codeOut, p, newCode;

  	    // save 2nd code to avoid calculating it on the next segment
  	    _lastCode = codeB;

  	while (true) {
  		// if a,b is inside the clip window (trivial accept)
  		if (!(codeA | codeB)) {
  			return [a, b];
  		}

  		// if a,b is outside the clip window (trivial reject)
  		if (codeA & codeB) {
  			return false;
  		}

  		// other cases
  		codeOut = codeA || codeB;
  		p = _getEdgeIntersection(a, b, codeOut, bounds, round);
  		newCode = _getBitCode(p, bounds);

  		if (codeOut === codeA) {
  			a = p;
  			codeA = newCode;
  		} else {
  			b = p;
  			codeB = newCode;
  		}
  	}
  }

  function _getEdgeIntersection(a, b, code, bounds, round) {
  	var dx = b.x - a.x,
  	    dy = b.y - a.y,
  	    min = bounds.min,
  	    max = bounds.max,
  	    x, y;

  	if (code & 8) { // top
  		x = a.x + dx * (max.y - a.y) / dy;
  		y = max.y;

  	} else if (code & 4) { // bottom
  		x = a.x + dx * (min.y - a.y) / dy;
  		y = min.y;

  	} else if (code & 2) { // right
  		x = max.x;
  		y = a.y + dy * (max.x - a.x) / dx;

  	} else if (code & 1) { // left
  		x = min.x;
  		y = a.y + dy * (min.x - a.x) / dx;
  	}

  	return new Point(x, y, round);
  }

  function _getBitCode(p, bounds) {
  	var code = 0;

  	if (p.x < bounds.min.x) { // left
  		code |= 1;
  	} else if (p.x > bounds.max.x) { // right
  		code |= 2;
  	}

  	if (p.y < bounds.min.y) { // bottom
  		code |= 4;
  	} else if (p.y > bounds.max.y) { // top
  		code |= 8;
  	}

  	return code;
  }

  // square distance (to avoid unnecessary Math.sqrt calls)
  function _sqDist(p1, p2) {
  	var dx = p2.x - p1.x,
  	    dy = p2.y - p1.y;
  	return dx * dx + dy * dy;
  }

  // return closest point on segment or distance to that point
  function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
  	var x = p1.x,
  	    y = p1.y,
  	    dx = p2.x - x,
  	    dy = p2.y - y,
  	    dot = dx * dx + dy * dy,
  	    t;

  	if (dot > 0) {
  		t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

  		if (t > 1) {
  			x = p2.x;
  			y = p2.y;
  		} else if (t > 0) {
  			x += dx * t;
  			y += dy * t;
  		}
  	}

  	dx = p.x - x;
  	dy = p.y - y;

  	return sqDist ? dx * dx + dy * dy : new Point(x, y);
  }


  // @function isFlat(latlngs: LatLng[]): Boolean
  // Returns true if `latlngs` is a flat array, false is nested.
  function isFlat(latlngs) {
  	return !isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');
  }

  function _flat(latlngs) {
  	console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');
  	return isFlat(latlngs);
  }

  var LineUtil = ({
    simplify: simplify,
    pointToSegmentDistance: pointToSegmentDistance,
    closestPointOnSegment: closestPointOnSegment,
    clipSegment: clipSegment,
    _getEdgeIntersection: _getEdgeIntersection,
    _getBitCode: _getBitCode,
    _sqClosestPointOnSegment: _sqClosestPointOnSegment,
    isFlat: isFlat,
    _flat: _flat
  });

  /*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   */

  /* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a separate method for it.
   */
  function clipPolygon(points, bounds, round) {
  	var clippedPoints,
  	    edges = [1, 4, 2, 8],
  	    i, j, k,
  	    a, b,
  	    len, edge, p;

  	for (i = 0, len = points.length; i < len; i++) {
  		points[i]._code = _getBitCode(points[i], bounds);
  	}

  	// for each edge (left, bottom, right, top)
  	for (k = 0; k < 4; k++) {
  		edge = edges[k];
  		clippedPoints = [];

  		for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
  			a = points[i];
  			b = points[j];

  			// if a is inside the clip window
  			if (!(a._code & edge)) {
  				// if b is outside the clip window (a->b goes out of screen)
  				if (b._code & edge) {
  					p = _getEdgeIntersection(b, a, edge, bounds, round);
  					p._code = _getBitCode(p, bounds);
  					clippedPoints.push(p);
  				}
  				clippedPoints.push(a);

  			// else if b is inside the clip window (a->b enters the screen)
  			} else if (!(b._code & edge)) {
  				p = _getEdgeIntersection(b, a, edge, bounds, round);
  				p._code = _getBitCode(p, bounds);
  				clippedPoints.push(p);
  			}
  		}
  		points = clippedPoints;
  	}

  	return points;
  }

  var PolyUtil = ({
    clipPolygon: clipPolygon
  });

  /*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */

  var LonLat = {
  	project: function (latlng) {
  		return new Point(latlng.lng, latlng.lat);
  	},

  	unproject: function (point) {
  		return new LatLng(point.y, point.x);
  	},

  	bounds: new Bounds([-180, -90], [180, 90])
  };

  /*
   * @namespace Projection
   * @projection L.Projection.Mercator
   *
   * Elliptical Mercator projection — more complex than Spherical Mercator. Assumes that Earth is an ellipsoid. Used by the EPSG:3395 CRS.
   */

  var Mercator = {
  	R: 6378137,
  	R_MINOR: 6356752.314245179,

  	bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),

  	project: function (latlng) {
  		var d = Math.PI / 180,
  		    r = this.R,
  		    y = latlng.lat * d,
  		    tmp = this.R_MINOR / r,
  		    e = Math.sqrt(1 - tmp * tmp),
  		    con = e * Math.sin(y);

  		var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
  		y = -r * Math.log(Math.max(ts, 1E-10));

  		return new Point(latlng.lng * d * r, y);
  	},

  	unproject: function (point) {
  		var d = 180 / Math.PI,
  		    r = this.R,
  		    tmp = this.R_MINOR / r,
  		    e = Math.sqrt(1 - tmp * tmp),
  		    ts = Math.exp(-point.y / r),
  		    phi = Math.PI / 2 - 2 * Math.atan(ts);

  		for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
  			con = e * Math.sin(phi);
  			con = Math.pow((1 - con) / (1 + con), e / 2);
  			dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
  			phi += dphi;
  		}

  		return new LatLng(phi * d, point.x * d / r);
  	}
  };

  /*
   * @class Projection

   * An object with methods for projecting geographical coordinates of the world onto
   * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).

   * @property bounds: Bounds
   * The bounds (specified in CRS units) where the projection is valid

   * @method project(latlng: LatLng): Point
   * Projects geographical coordinates into a 2D point.
   * Only accepts actual `L.LatLng` instances, not arrays.

   * @method unproject(point: Point): LatLng
   * The inverse of `project`. Projects a 2D point into a geographical location.
   * Only accepts actual `L.Point` instances, not arrays.

   * Note that the projection instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.

   */

  var index = ({
    LonLat: LonLat,
    Mercator: Mercator,
    SphericalMercator: SphericalMercator
  });

  /*
   * @namespace CRS
   * @crs L.CRS.EPSG3395
   *
   * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
   */
  var EPSG3395 = extend({}, Earth, {
  	code: 'EPSG:3395',
  	projection: Mercator,

  	transformation: (function () {
  		var scale = 0.5 / (Math.PI * Mercator.R);
  		return toTransformation(scale, 0.5, -scale, 0.5);
  	}())
  });

  /*
   * @namespace CRS
   * @crs L.CRS.EPSG4326
   *
   * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
   *
   * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
   * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
   * with this CRS, ensure that there are two 256x256 pixel tiles covering the
   * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
   * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
   */

  var EPSG4326 = extend({}, Earth, {
  	code: 'EPSG:4326',
  	projection: LonLat,
  	transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
  });

  /*
   * @namespace CRS
   * @crs L.CRS.Simple
   *
   * A simple CRS that maps longitude and latitude into `x` and `y` directly.
   * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
   * axis should still be inverted (going from bottom to top). `distance()` returns
   * simple euclidean distance.
   */

  var Simple = extend({}, CRS, {
  	projection: LonLat,
  	transformation: toTransformation(1, 0, -1, 0),

  	scale: function (zoom) {
  		return Math.pow(2, zoom);
  	},

  	zoom: function (scale) {
  		return Math.log(scale) / Math.LN2;
  	},

  	distance: function (latlng1, latlng2) {
  		var dx = latlng2.lng - latlng1.lng,
  		    dy = latlng2.lat - latlng1.lat;

  		return Math.sqrt(dx * dx + dy * dy);
  	},

  	infinite: true
  });

  CRS.Earth = Earth;
  CRS.EPSG3395 = EPSG3395;
  CRS.EPSG3857 = EPSG3857;
  CRS.EPSG900913 = EPSG900913;
  CRS.EPSG4326 = EPSG4326;
  CRS.Simple = Simple;

  /*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */


  var Layer = Evented.extend({

  	// Classes extending `L.Layer` will inherit the following options:
  	options: {
  		// @option pane: String = 'overlayPane'
  		// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
  		pane: 'overlayPane',

  		// @option attribution: String = null
  		// String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
  		attribution: null,

  		bubblingMouseEvents: true
  	},

  	/* @section
  	 * Classes extending `L.Layer` will inherit the following methods:
  	 *
  	 * @method addTo(map: Map|LayerGroup): this
  	 * Adds the layer to the given map or layer group.
  	 */
  	addTo: function (map) {
  		map.addLayer(this);
  		return this;
  	},

  	// @method remove: this
  	// Removes the layer from the map it is currently active on.
  	remove: function () {
  		return this.removeFrom(this._map || this._mapToAdd);
  	},

  	// @method removeFrom(map: Map): this
  	// Removes the layer from the given map
  	//
  	// @alternative
  	// @method removeFrom(group: LayerGroup): this
  	// Removes the layer from the given `LayerGroup`
  	removeFrom: function (obj) {
  		if (obj) {
  			obj.removeLayer(this);
  		}
  		return this;
  	},

  	// @method getPane(name? : String): HTMLElement
  	// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
  	getPane: function (name) {
  		return this._map.getPane(name ? (this.options[name] || name) : this.options.pane);
  	},

  	addInteractiveTarget: function (targetEl) {
  		this._map._targets[stamp(targetEl)] = this;
  		return this;
  	},

  	removeInteractiveTarget: function (targetEl) {
  		delete this._map._targets[stamp(targetEl)];
  		return this;
  	},

  	// @method getAttribution: String
  	// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
  	getAttribution: function () {
  		return this.options.attribution;
  	},

  	_layerAdd: function (e) {
  		var map = e.target;

  		// check in case layer gets added and then removed before the map is ready
  		if (!map.hasLayer(this)) { return; }

  		this._map = map;
  		this._zoomAnimated = map._zoomAnimated;

  		if (this.getEvents) {
  			var events = this.getEvents();
  			map.on(events, this);
  			this.once('remove', function () {
  				map.off(events, this);
  			}, this);
  		}

  		this.onAdd(map);

  		if (this.getAttribution && map.attributionControl) {
  			map.attributionControl.addAttribution(this.getAttribution());
  		}

  		this.fire('add');
  		map.fire('layeradd', {layer: this});
  	}
  });

  /* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   */


  /* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */
  Map.include({
  	// @method addLayer(layer: Layer): this
  	// Adds the given layer to the map
  	addLayer: function (layer) {
  		if (!layer._layerAdd) {
  			throw new Error('The provided object is not a Layer.');
  		}

  		var id = stamp(layer);
  		if (this._layers[id]) { return this; }
  		this._layers[id] = layer;

  		layer._mapToAdd = this;

  		if (layer.beforeAdd) {
  			layer.beforeAdd(this);
  		}

  		this.whenReady(layer._layerAdd, layer);

  		return this;
  	},

  	// @method removeLayer(layer: Layer): this
  	// Removes the given layer from the map.
  	removeLayer: function (layer) {
  		var id = stamp(layer);

  		if (!this._layers[id]) { return this; }

  		if (this._loaded) {
  			layer.onRemove(this);
  		}

  		if (layer.getAttribution && this.attributionControl) {
  			this.attributionControl.removeAttribution(layer.getAttribution());
  		}

  		delete this._layers[id];

  		if (this._loaded) {
  			this.fire('layerremove', {layer: layer});
  			layer.fire('remove');
  		}

  		layer._map = layer._mapToAdd = null;

  		return this;
  	},

  	// @method hasLayer(layer: Layer): Boolean
  	// Returns `true` if the given layer is currently added to the map
  	hasLayer: function (layer) {
  		return !!layer && (stamp(layer) in this._layers);
  	},

  	/* @method eachLayer(fn: Function, context?: Object): this
  	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
  	 * ```
  	 * map.eachLayer(function(layer){
  	 *     layer.bindPopup('Hello');
  	 * });
  	 * ```
  	 */
  	eachLayer: function (method, context) {
  		for (var i in this._layers) {
  			method.call(context, this._layers[i]);
  		}
  		return this;
  	},

  	_addLayers: function (layers) {
  		layers = layers ? (isArray(layers) ? layers : [layers]) : [];

  		for (var i = 0, len = layers.length; i < len; i++) {
  			this.addLayer(layers[i]);
  		}
  	},

  	_addZoomLimit: function (layer) {
  		if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
  			this._zoomBoundLayers[stamp(layer)] = layer;
  			this._updateZoomLevels();
  		}
  	},

  	_removeZoomLimit: function (layer) {
  		var id = stamp(layer);

  		if (this._zoomBoundLayers[id]) {
  			delete this._zoomBoundLayers[id];
  			this._updateZoomLevels();
  		}
  	},

  	_updateZoomLevels: function () {
  		var minZoom = Infinity,
  		    maxZoom = -Infinity,
  		    oldZoomSpan = this._getZoomSpan();

  		for (var i in this._zoomBoundLayers) {
  			var options = this._zoomBoundLayers[i].options;

  			minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
  			maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
  		}

  		this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
  		this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;

  		// @section Map state change events
  		// @event zoomlevelschange: Event
  		// Fired when the number of zoomlevels on the map is changed due
  		// to adding or removing a layer.
  		if (oldZoomSpan !== this._getZoomSpan()) {
  			this.fire('zoomlevelschange');
  		}

  		if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
  			this.setZoom(this._layersMaxZoom);
  		}
  		if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
  			this.setZoom(this._layersMinZoom);
  		}
  	}
  });

  /*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */

  var LayerGroup = Layer.extend({

  	initialize: function (layers, options) {
  		setOptions(this, options);

  		this._layers = {};

  		var i, len;

  		if (layers) {
  			for (i = 0, len = layers.length; i < len; i++) {
  				this.addLayer(layers[i]);
  			}
  		}
  	},

  	// @method addLayer(layer: Layer): this
  	// Adds the given layer to the group.
  	addLayer: function (layer) {
  		var id = this.getLayerId(layer);

  		this._layers[id] = layer;

  		if (this._map) {
  			this._map.addLayer(layer);
  		}

  		return this;
  	},

  	// @method removeLayer(layer: Layer): this
  	// Removes the given layer from the group.
  	// @alternative
  	// @method removeLayer(id: Number): this
  	// Removes the layer with the given internal ID from the group.
  	removeLayer: function (layer) {
  		var id = layer in this._layers ? layer : this.getLayerId(layer);

  		if (this._map && this._layers[id]) {
  			this._map.removeLayer(this._layers[id]);
  		}

  		delete this._layers[id];

  		return this;
  	},

  	// @method hasLayer(layer: Layer): Boolean
  	// Returns `true` if the given layer is currently added to the group.
  	// @alternative
  	// @method hasLayer(id: Number): Boolean
  	// Returns `true` if the given internal ID is currently added to the group.
  	hasLayer: function (layer) {
  		if (!layer) { return false; }
  		var layerId = typeof layer === 'number' ? layer : this.getLayerId(layer);
  		return layerId in this._layers;
  	},

  	// @method clearLayers(): this
  	// Removes all the layers from the group.
  	clearLayers: function () {
  		return this.eachLayer(this.removeLayer, this);
  	},

  	// @method invoke(methodName: String, …): this
  	// Calls `methodName` on every layer contained in this group, passing any
  	// additional parameters. Has no effect if the layers contained do not
  	// implement `methodName`.
  	invoke: function (methodName) {
  		var args = Array.prototype.slice.call(arguments, 1),
  		    i, layer;

  		for (i in this._layers) {
  			layer = this._layers[i];

  			if (layer[methodName]) {
  				layer[methodName].apply(layer, args);
  			}
  		}

  		return this;
  	},

  	onAdd: function (map) {
  		this.eachLayer(map.addLayer, map);
  	},

  	onRemove: function (map) {
  		this.eachLayer(map.removeLayer, map);
  	},

  	// @method eachLayer(fn: Function, context?: Object): this
  	// Iterates over the layers of the group, optionally specifying context of the iterator function.
  	// ```js
  	// group.eachLayer(function (layer) {
  	// 	layer.bindPopup('Hello');
  	// });
  	// ```
  	eachLayer: function (method, context) {
  		for (var i in this._layers) {
  			method.call(context, this._layers[i]);
  		}
  		return this;
  	},

  	// @method getLayer(id: Number): Layer
  	// Returns the layer with the given internal ID.
  	getLayer: function (id) {
  		return this._layers[id];
  	},

  	// @method getLayers(): Layer[]
  	// Returns an array of all the layers added to the group.
  	getLayers: function () {
  		var layers = [];
  		this.eachLayer(layers.push, layers);
  		return layers;
  	},

  	// @method setZIndex(zIndex: Number): this
  	// Calls `setZIndex` on every layer contained in this group, passing the z-index.
  	setZIndex: function (zIndex) {
  		return this.invoke('setZIndex', zIndex);
  	},

  	// @method getLayerId(layer: Layer): Number
  	// Returns the internal ID for a layer
  	getLayerId: function (layer) {
  		return stamp(layer);
  	}
  });


  // @factory L.layerGroup(layers?: Layer[], options?: Object)
  // Create a layer group, optionally given an initial set of layers and an `options` object.
  var layerGroup = function (layers, options) {
  	return new LayerGroup(layers, options);
  };

  /*
   * @class FeatureGroup
   * @aka L.FeatureGroup
   * @inherits LayerGroup
   *
   * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
   *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
   *  * Events are propagated to the `FeatureGroup`, so if the group has an event
   * handler, it will handle events from any of the layers. This includes mouse events
   * and custom events.
   *  * Has `layeradd` and `layerremove` events
   *
   * @example
   *
   * ```js
   * L.featureGroup([marker1, marker2, polyline])
   * 	.bindPopup('Hello world!')
   * 	.on('click', function() { alert('Clicked on a member of the group!'); })
   * 	.addTo(map);
   * ```
   */

  var FeatureGroup = LayerGroup.extend({

  	addLayer: function (layer) {
  		if (this.hasLayer(layer)) {
  			return this;
  		}

  		layer.addEventParent(this);

  		LayerGroup.prototype.addLayer.call(this, layer);

  		// @event layeradd: LayerEvent
  		// Fired when a layer is added to this `FeatureGroup`
  		return this.fire('layeradd', {layer: layer});
  	},

  	removeLayer: function (layer) {
  		if (!this.hasLayer(layer)) {
  			return this;
  		}
  		if (layer in this._layers) {
  			layer = this._layers[layer];
  		}

  		layer.removeEventParent(this);

  		LayerGroup.prototype.removeLayer.call(this, layer);

  		// @event layerremove: LayerEvent
  		// Fired when a layer is removed from this `FeatureGroup`
  		return this.fire('layerremove', {layer: layer});
  	},

  	// @method setStyle(style: Path options): this
  	// Sets the given path options to each layer of the group that has a `setStyle` method.
  	setStyle: function (style) {
  		return this.invoke('setStyle', style);
  	},

  	// @method bringToFront(): this
  	// Brings the layer group to the top of all other layers
  	bringToFront: function () {
  		return this.invoke('bringToFront');
  	},

  	// @method bringToBack(): this
  	// Brings the layer group to the back of all other layers
  	bringToBack: function () {
  		return this.invoke('bringToBack');
  	},

  	// @method getBounds(): LatLngBounds
  	// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
  	getBounds: function () {
  		var bounds = new LatLngBounds();

  		for (var id in this._layers) {
  			var layer = this._layers[id];
  			bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
  		}
  		return bounds;
  	}
  });

  // @factory L.featureGroup(layers?: Layer[], options?: Object)
  // Create a feature group, optionally given an initial set of layers and an `options` object.
  var featureGroup = function (layers, options) {
  	return new FeatureGroup(layers, options);
  };

  /*
   * @class Icon
   * @aka L.Icon
   *
   * Represents an icon to provide when creating a marker.
   *
   * @example
   *
   * ```js
   * var myIcon = L.icon({
   *     iconUrl: 'my-icon.png',
   *     iconRetinaUrl: 'my-icon@2x.png',
   *     iconSize: [38, 95],
   *     iconAnchor: [22, 94],
   *     popupAnchor: [-3, -76],
   *     shadowUrl: 'my-icon-shadow.png',
   *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
   *     shadowSize: [68, 95],
   *     shadowAnchor: [22, 94]
   * });
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
   *
   */

  var Icon = Class.extend({

  	/* @section
  	 * @aka Icon options
  	 *
  	 * @option iconUrl: String = null
  	 * **(required)** The URL to the icon image (absolute or relative to your script path).
  	 *
  	 * @option iconRetinaUrl: String = null
  	 * The URL to a retina sized version of the icon image (absolute or relative to your
  	 * script path). Used for Retina screen devices.
  	 *
  	 * @option iconSize: Point = null
  	 * Size of the icon image in pixels.
  	 *
  	 * @option iconAnchor: Point = null
  	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
  	 * will be aligned so that this point is at the marker's geographical location. Centered
  	 * by default if size is specified, also can be set in CSS with negative margins.
  	 *
  	 * @option popupAnchor: Point = [0, 0]
  	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
  	 *
  	 * @option tooltipAnchor: Point = [0, 0]
  	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
  	 *
  	 * @option shadowUrl: String = null
  	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
  	 *
  	 * @option shadowRetinaUrl: String = null
  	 *
  	 * @option shadowSize: Point = null
  	 * Size of the shadow image in pixels.
  	 *
  	 * @option shadowAnchor: Point = null
  	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
  	 * as iconAnchor if not specified).
  	 *
  	 * @option className: String = ''
  	 * A custom class name to assign to both icon and shadow images. Empty by default.
  	 */

  	options: {
  		popupAnchor: [0, 0],
  		tooltipAnchor: [0, 0]
  	},

  	initialize: function (options) {
  		setOptions(this, options);
  	},

  	// @method createIcon(oldIcon?: HTMLElement): HTMLElement
  	// Called internally when the icon has to be shown, returns a `<img>` HTML element
  	// styled according to the options.
  	createIcon: function (oldIcon) {
  		return this._createIcon('icon', oldIcon);
  	},

  	// @method createShadow(oldIcon?: HTMLElement): HTMLElement
  	// As `createIcon`, but for the shadow beneath it.
  	createShadow: function (oldIcon) {
  		return this._createIcon('shadow', oldIcon);
  	},

  	_createIcon: function (name, oldIcon) {
  		var src = this._getIconUrl(name);

  		if (!src) {
  			if (name === 'icon') {
  				throw new Error('iconUrl not set in Icon options (see the docs).');
  			}
  			return null;
  		}

  		var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);
  		this._setIconStyles(img, name);

  		return img;
  	},

  	_setIconStyles: function (img, name) {
  		var options = this.options;
  		var sizeOption = options[name + 'Size'];

  		if (typeof sizeOption === 'number') {
  			sizeOption = [sizeOption, sizeOption];
  		}

  		var size = toPoint(sizeOption),
  		    anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||
  		            size && size.divideBy(2, true));

  		img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

  		if (anchor) {
  			img.style.marginLeft = (-anchor.x) + 'px';
  			img.style.marginTop  = (-anchor.y) + 'px';
  		}

  		if (size) {
  			img.style.width  = size.x + 'px';
  			img.style.height = size.y + 'px';
  		}
  	},

  	_createImg: function (src, el) {
  		el = el || document.createElement('img');
  		el.src = src;
  		return el;
  	},

  	_getIconUrl: function (name) {
  		return retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
  	}
  });


  // @factory L.icon(options: Icon options)
  // Creates an icon instance with the given options.
  function icon(options) {
  	return new Icon(options);
  }

  /*
   * @miniclass Icon.Default (Icon)
   * @aka L.Icon.Default
   * @section
   *
   * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
   * no icon is specified. Points to the blue marker image distributed with Leaflet
   * releases.
   *
   * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
   * (which is a set of `Icon options`).
   *
   * If you want to _completely_ replace the default icon, override the
   * `L.Marker.prototype.options.icon` with your own icon instead.
   */

  var IconDefault = Icon.extend({

  	options: {
  		iconUrl:       'marker-icon.png',
  		iconRetinaUrl: 'marker-icon-2x.png',
  		shadowUrl:     'marker-shadow.png',
  		iconSize:    [25, 41],
  		iconAnchor:  [12, 41],
  		popupAnchor: [1, -34],
  		tooltipAnchor: [16, -28],
  		shadowSize:  [41, 41]
  	},

  	_getIconUrl: function (name) {
  		if (!IconDefault.imagePath) {	// Deprecated, backwards-compatibility only
  			IconDefault.imagePath = this._detectIconPath();
  		}

  		// @option imagePath: String
  		// `Icon.Default` will try to auto-detect the location of the
  		// blue icon images. If you are placing these images in a non-standard
  		// way, set this option to point to the right path.
  		return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
  	},

  	_detectIconPath: function () {
  		var el = create$1('div',  'leaflet-default-icon-path', document.body);
  		var path = getStyle(el, 'background-image') ||
  		           getStyle(el, 'backgroundImage');	// IE8

  		document.body.removeChild(el);

  		if (path === null || path.indexOf('url') !== 0) {
  			path = '';
  		} else {
  			path = path.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, '');
  		}

  		return path;
  	}
  });

  /*
   * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
   */


  /* @namespace Marker
   * @section Interaction handlers
   *
   * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
   *
   * ```js
   * marker.dragging.disable();
   * ```
   *
   * @property dragging: Handler
   * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
   */

  var MarkerDrag = Handler.extend({
  	initialize: function (marker) {
  		this._marker = marker;
  	},

  	addHooks: function () {
  		var icon = this._marker._icon;

  		if (!this._draggable) {
  			this._draggable = new Draggable(icon, icon, true);
  		}

  		this._draggable.on({
  			dragstart: this._onDragStart,
  			predrag: this._onPreDrag,
  			drag: this._onDrag,
  			dragend: this._onDragEnd
  		}, this).enable();

  		addClass(icon, 'leaflet-marker-draggable');
  	},

  	removeHooks: function () {
  		this._draggable.off({
  			dragstart: this._onDragStart,
  			predrag: this._onPreDrag,
  			drag: this._onDrag,
  			dragend: this._onDragEnd
  		}, this).disable();

  		if (this._marker._icon) {
  			removeClass(this._marker._icon, 'leaflet-marker-draggable');
  		}
  	},

  	moved: function () {
  		return this._draggable && this._draggable._moved;
  	},

  	_adjustPan: function (e) {
  		var marker = this._marker,
  		    map = marker._map,
  		    speed = this._marker.options.autoPanSpeed,
  		    padding = this._marker.options.autoPanPadding,
  		    iconPos = getPosition(marker._icon),
  		    bounds = map.getPixelBounds(),
  		    origin = map.getPixelOrigin();

  		var panBounds = toBounds(
  			bounds.min._subtract(origin).add(padding),
  			bounds.max._subtract(origin).subtract(padding)
  		);

  		if (!panBounds.contains(iconPos)) {
  			// Compute incremental movement
  			var movement = toPoint(
  				(Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) -
  				(Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x),

  				(Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) -
  				(Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)
  			).multiplyBy(speed);

  			map.panBy(movement, {animate: false});

  			this._draggable._newPos._add(movement);
  			this._draggable._startPos._add(movement);

  			setPosition(marker._icon, this._draggable._newPos);
  			this._onDrag(e);

  			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
  		}
  	},

  	_onDragStart: function () {
  		// @section Dragging events
  		// @event dragstart: Event
  		// Fired when the user starts dragging the marker.

  		// @event movestart: Event
  		// Fired when the marker starts moving (because of dragging).

  		this._oldLatLng = this._marker.getLatLng();

  		// When using ES6 imports it could not be set when `Popup` was not imported as well
  		this._marker.closePopup && this._marker.closePopup();

  		this._marker
  			.fire('movestart')
  			.fire('dragstart');
  	},

  	_onPreDrag: function (e) {
  		if (this._marker.options.autoPan) {
  			cancelAnimFrame(this._panRequest);
  			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
  		}
  	},

  	_onDrag: function (e) {
  		var marker = this._marker,
  		    shadow = marker._shadow,
  		    iconPos = getPosition(marker._icon),
  		    latlng = marker._map.layerPointToLatLng(iconPos);

  		// update shadow position
  		if (shadow) {
  			setPosition(shadow, iconPos);
  		}

  		marker._latlng = latlng;
  		e.latlng = latlng;
  		e.oldLatLng = this._oldLatLng;

  		// @event drag: Event
  		// Fired repeatedly while the user drags the marker.
  		marker
  		    .fire('move', e)
  		    .fire('drag', e);
  	},

  	_onDragEnd: function (e) {
  		// @event dragend: DragEndEvent
  		// Fired when the user stops dragging the marker.

  		 cancelAnimFrame(this._panRequest);

  		// @event moveend: Event
  		// Fired when the marker stops moving (because of dragging).
  		delete this._oldLatLng;
  		this._marker
  		    .fire('moveend')
  		    .fire('dragend', e);
  	}
  });

  /*
   * @class Marker
   * @inherits Interactive layer
   * @aka L.Marker
   * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.marker([50.5, 30.5]).addTo(map);
   * ```
   */

  var Marker = Layer.extend({

  	// @section
  	// @aka Marker options
  	options: {
  		// @option icon: Icon = *
  		// Icon instance to use for rendering the marker.
  		// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
  		// If not specified, a common instance of `L.Icon.Default` is used.
  		icon: new IconDefault(),

  		// Option inherited from "Interactive layer" abstract class
  		interactive: true,

  		// @option keyboard: Boolean = true
  		// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
  		keyboard: true,

  		// @option title: String = ''
  		// Text for the browser tooltip that appear on marker hover (no tooltip by default).
  		title: '',

  		// @option alt: String = ''
  		// Text for the `alt` attribute of the icon image (useful for accessibility).
  		alt: '',

  		// @option zIndexOffset: Number = 0
  		// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
  		zIndexOffset: 0,

  		// @option opacity: Number = 1.0
  		// The opacity of the marker.
  		opacity: 1,

  		// @option riseOnHover: Boolean = false
  		// If `true`, the marker will get on top of others when you hover the mouse over it.
  		riseOnHover: false,

  		// @option riseOffset: Number = 250
  		// The z-index offset used for the `riseOnHover` feature.
  		riseOffset: 250,

  		// @option pane: String = 'markerPane'
  		// `Map pane` where the markers icon will be added.
  		pane: 'markerPane',

  		// @option shadowPane: String = 'shadowPane'
  		// `Map pane` where the markers shadow will be added.
  		shadowPane: 'shadowPane',

  		// @option bubblingMouseEvents: Boolean = false
  		// When `true`, a mouse event on this marker will trigger the same event on the map
  		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
  		bubblingMouseEvents: false,

  		// @section Draggable marker options
  		// @option draggable: Boolean = false
  		// Whether the marker is draggable with mouse/touch or not.
  		draggable: false,

  		// @option autoPan: Boolean = false
  		// Whether to pan the map when dragging this marker near its edge or not.
  		autoPan: false,

  		// @option autoPanPadding: Point = Point(50, 50)
  		// Distance (in pixels to the left/right and to the top/bottom) of the
  		// map edge to start panning the map.
  		autoPanPadding: [50, 50],

  		// @option autoPanSpeed: Number = 10
  		// Number of pixels the map should pan by.
  		autoPanSpeed: 10
  	},

  	/* @section
  	 *
  	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
  	 */

  	initialize: function (latlng, options) {
  		setOptions(this, options);
  		this._latlng = toLatLng(latlng);
  	},

  	onAdd: function (map) {
  		this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

  		if (this._zoomAnimated) {
  			map.on('zoomanim', this._animateZoom, this);
  		}

  		this._initIcon();
  		this.update();
  	},

  	onRemove: function (map) {
  		if (this.dragging && this.dragging.enabled()) {
  			this.options.draggable = true;
  			this.dragging.removeHooks();
  		}
  		delete this.dragging;

  		if (this._zoomAnimated) {
  			map.off('zoomanim', this._animateZoom, this);
  		}

  		this._removeIcon();
  		this._removeShadow();
  	},

  	getEvents: function () {
  		return {
  			zoom: this.update,
  			viewreset: this.update
  		};
  	},

  	// @method getLatLng: LatLng
  	// Returns the current geographical position of the marker.
  	getLatLng: function () {
  		return this._latlng;
  	},

  	// @method setLatLng(latlng: LatLng): this
  	// Changes the marker position to the given point.
  	setLatLng: function (latlng) {
  		var oldLatLng = this._latlng;
  		this._latlng = toLatLng(latlng);
  		this.update();

  		// @event move: Event
  		// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
  		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
  	},

  	// @method setZIndexOffset(offset: Number): this
  	// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
  	setZIndexOffset: function (offset) {
  		this.options.zIndexOffset = offset;
  		return this.update();
  	},

  	// @method getIcon: Icon
  	// Returns the current icon used by the marker
  	getIcon: function () {
  		return this.options.icon;
  	},

  	// @method setIcon(icon: Icon): this
  	// Changes the marker icon.
  	setIcon: function (icon) {

  		this.options.icon = icon;

  		if (this._map) {
  			this._initIcon();
  			this.update();
  		}

  		if (this._popup) {
  			this.bindPopup(this._popup, this._popup.options);
  		}

  		return this;
  	},

  	getElement: function () {
  		return this._icon;
  	},

  	update: function () {

  		if (this._icon && this._map) {
  			var pos = this._map.latLngToLayerPoint(this._latlng).round();
  			this._setPos(pos);
  		}

  		return this;
  	},

  	_initIcon: function () {
  		var options = this.options,
  		    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

  		var icon = options.icon.createIcon(this._icon),
  		    addIcon = false;

  		// if we're not reusing the icon, remove the old one and init new one
  		if (icon !== this._icon) {
  			if (this._icon) {
  				this._removeIcon();
  			}
  			addIcon = true;

  			if (options.title) {
  				icon.title = options.title;
  			}

  			if (icon.tagName === 'IMG') {
  				icon.alt = options.alt || '';
  			}
  		}

  		addClass(icon, classToAdd);

  		if (options.keyboard) {
  			icon.tabIndex = '0';
  		}

  		this._icon = icon;

  		if (options.riseOnHover) {
  			this.on({
  				mouseover: this._bringToFront,
  				mouseout: this._resetZIndex
  			});
  		}

  		var newShadow = options.icon.createShadow(this._shadow),
  		    addShadow = false;

  		if (newShadow !== this._shadow) {
  			this._removeShadow();
  			addShadow = true;
  		}

  		if (newShadow) {
  			addClass(newShadow, classToAdd);
  			newShadow.alt = '';
  		}
  		this._shadow = newShadow;


  		if (options.opacity < 1) {
  			this._updateOpacity();
  		}


  		if (addIcon) {
  			this.getPane().appendChild(this._icon);
  		}
  		this._initInteraction();
  		if (newShadow && addShadow) {
  			this.getPane(options.shadowPane).appendChild(this._shadow);
  		}
  	},

  	_removeIcon: function () {
  		if (this.options.riseOnHover) {
  			this.off({
  				mouseover: this._bringToFront,
  				mouseout: this._resetZIndex
  			});
  		}

  		remove(this._icon);
  		this.removeInteractiveTarget(this._icon);

  		this._icon = null;
  	},

  	_removeShadow: function () {
  		if (this._shadow) {
  			remove(this._shadow);
  		}
  		this._shadow = null;
  	},

  	_setPos: function (pos) {

  		if (this._icon) {
  			setPosition(this._icon, pos);
  		}

  		if (this._shadow) {
  			setPosition(this._shadow, pos);
  		}

  		this._zIndex = pos.y + this.options.zIndexOffset;

  		this._resetZIndex();
  	},

  	_updateZIndex: function (offset) {
  		if (this._icon) {
  			this._icon.style.zIndex = this._zIndex + offset;
  		}
  	},

  	_animateZoom: function (opt) {
  		var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

  		this._setPos(pos);
  	},

  	_initInteraction: function () {

  		if (!this.options.interactive) { return; }

  		addClass(this._icon, 'leaflet-interactive');

  		this.addInteractiveTarget(this._icon);

  		if (MarkerDrag) {
  			var draggable = this.options.draggable;
  			if (this.dragging) {
  				draggable = this.dragging.enabled();
  				this.dragging.disable();
  			}

  			this.dragging = new MarkerDrag(this);

  			if (draggable) {
  				this.dragging.enable();
  			}
  		}
  	},

  	// @method setOpacity(opacity: Number): this
  	// Changes the opacity of the marker.
  	setOpacity: function (opacity) {
  		this.options.opacity = opacity;
  		if (this._map) {
  			this._updateOpacity();
  		}

  		return this;
  	},

  	_updateOpacity: function () {
  		var opacity = this.options.opacity;

  		if (this._icon) {
  			setOpacity(this._icon, opacity);
  		}

  		if (this._shadow) {
  			setOpacity(this._shadow, opacity);
  		}
  	},

  	_bringToFront: function () {
  		this._updateZIndex(this.options.riseOffset);
  	},

  	_resetZIndex: function () {
  		this._updateZIndex(0);
  	},

  	_getPopupAnchor: function () {
  		return this.options.icon.options.popupAnchor;
  	},

  	_getTooltipAnchor: function () {
  		return this.options.icon.options.tooltipAnchor;
  	}
  });


  // factory L.marker(latlng: LatLng, options? : Marker options)

  // @factory L.marker(latlng: LatLng, options? : Marker options)
  // Instantiates a Marker object given a geographical point and optionally an options object.
  function marker(latlng, options) {
  	return new Marker(latlng, options);
  }

  /*
   * @class Path
   * @aka L.Path
   * @inherits Interactive layer
   *
   * An abstract class that contains options and constants shared between vector
   * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
   */

  var Path = Layer.extend({

  	// @section
  	// @aka Path options
  	options: {
  		// @option stroke: Boolean = true
  		// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
  		stroke: true,

  		// @option color: String = '#3388ff'
  		// Stroke color
  		color: '#3388ff',

  		// @option weight: Number = 3
  		// Stroke width in pixels
  		weight: 3,

  		// @option opacity: Number = 1.0
  		// Stroke opacity
  		opacity: 1,

  		// @option lineCap: String= 'round'
  		// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
  		lineCap: 'round',

  		// @option lineJoin: String = 'round'
  		// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
  		lineJoin: 'round',

  		// @option dashArray: String = null
  		// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
  		dashArray: null,

  		// @option dashOffset: String = null
  		// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
  		dashOffset: null,

  		// @option fill: Boolean = depends
  		// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
  		fill: false,

  		// @option fillColor: String = *
  		// Fill color. Defaults to the value of the [`color`](#path-color) option
  		fillColor: null,

  		// @option fillOpacity: Number = 0.2
  		// Fill opacity.
  		fillOpacity: 0.2,

  		// @option fillRule: String = 'evenodd'
  		// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
  		fillRule: 'evenodd',

  		// className: '',

  		// Option inherited from "Interactive layer" abstract class
  		interactive: true,

  		// @option bubblingMouseEvents: Boolean = true
  		// When `true`, a mouse event on this path will trigger the same event on the map
  		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
  		bubblingMouseEvents: true
  	},

  	beforeAdd: function (map) {
  		// Renderer is set here because we need to call renderer.getEvents
  		// before this.getEvents.
  		this._renderer = map.getRenderer(this);
  	},

  	onAdd: function () {
  		this._renderer._initPath(this);
  		this._reset();
  		this._renderer._addPath(this);
  	},

  	onRemove: function () {
  		this._renderer._removePath(this);
  	},

  	// @method redraw(): this
  	// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
  	redraw: function () {
  		if (this._map) {
  			this._renderer._updatePath(this);
  		}
  		return this;
  	},

  	// @method setStyle(style: Path options): this
  	// Changes the appearance of a Path based on the options in the `Path options` object.
  	setStyle: function (style) {
  		setOptions(this, style);
  		if (this._renderer) {
  			this._renderer._updateStyle(this);
  			if (this.options.stroke && style && Object.prototype.hasOwnProperty.call(style, 'weight')) {
  				this._updateBounds();
  			}
  		}
  		return this;
  	},

  	// @method bringToFront(): this
  	// Brings the layer to the top of all path layers.
  	bringToFront: function () {
  		if (this._renderer) {
  			this._renderer._bringToFront(this);
  		}
  		return this;
  	},

  	// @method bringToBack(): this
  	// Brings the layer to the bottom of all path layers.
  	bringToBack: function () {
  		if (this._renderer) {
  			this._renderer._bringToBack(this);
  		}
  		return this;
  	},

  	getElement: function () {
  		return this._path;
  	},

  	_reset: function () {
  		// defined in child classes
  		this._project();
  		this._update();
  	},

  	_clickTolerance: function () {
  		// used when doing hit detection for Canvas layers
  		return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
  	}
  });

  /*
   * @class CircleMarker
   * @aka L.CircleMarker
   * @inherits Path
   *
   * A circle of a fixed size with radius specified in pixels. Extends `Path`.
   */

  var CircleMarker = Path.extend({

  	// @section
  	// @aka CircleMarker options
  	options: {
  		fill: true,

  		// @option radius: Number = 10
  		// Radius of the circle marker, in pixels
  		radius: 10
  	},

  	initialize: function (latlng, options) {
  		setOptions(this, options);
  		this._latlng = toLatLng(latlng);
  		this._radius = this.options.radius;
  	},

  	// @method setLatLng(latLng: LatLng): this
  	// Sets the position of a circle marker to a new location.
  	setLatLng: function (latlng) {
  		var oldLatLng = this._latlng;
  		this._latlng = toLatLng(latlng);
  		this.redraw();

  		// @event move: Event
  		// Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
  		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
  	},

  	// @method getLatLng(): LatLng
  	// Returns the current geographical position of the circle marker
  	getLatLng: function () {
  		return this._latlng;
  	},

  	// @method setRadius(radius: Number): this
  	// Sets the radius of a circle marker. Units are in pixels.
  	setRadius: function (radius) {
  		this.options.radius = this._radius = radius;
  		return this.redraw();
  	},

  	// @method getRadius(): Number
  	// Returns the current radius of the circle
  	getRadius: function () {
  		return this._radius;
  	},

  	setStyle : function (options) {
  		var radius = options && options.radius || this._radius;
  		Path.prototype.setStyle.call(this, options);
  		this.setRadius(radius);
  		return this;
  	},

  	_project: function () {
  		this._point = this._map.latLngToLayerPoint(this._latlng);
  		this._updateBounds();
  	},

  	_updateBounds: function () {
  		var r = this._radius,
  		    r2 = this._radiusY || r,
  		    w = this._clickTolerance(),
  		    p = [r + w, r2 + w];
  		this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
  	},

  	_update: function () {
  		if (this._map) {
  			this._updatePath();
  		}
  	},

  	_updatePath: function () {
  		this._renderer._updateCircle(this);
  	},

  	_empty: function () {
  		return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
  	},

  	// Needed by the `Canvas` renderer for interactivity
  	_containsPoint: function (p) {
  		return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
  	}
  });


  // @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
  // Instantiates a circle marker object given a geographical point, and an optional options object.
  function circleMarker(latlng, options) {
  	return new CircleMarker(latlng, options);
  }

  /*
   * @class Circle
   * @aka L.Circle
   * @inherits CircleMarker
   *
   * A class for drawing circle overlays on a map. Extends `CircleMarker`.
   *
   * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
   *
   * @example
   *
   * ```js
   * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
   * ```
   */

  var Circle = CircleMarker.extend({

  	initialize: function (latlng, options, legacyOptions) {
  		if (typeof options === 'number') {
  			// Backwards compatibility with 0.7.x factory (latlng, radius, options?)
  			options = extend({}, legacyOptions, {radius: options});
  		}
  		setOptions(this, options);
  		this._latlng = toLatLng(latlng);

  		if (isNaN(this.options.radius)) { throw new Error('Circle radius cannot be NaN'); }

  		// @section
  		// @aka Circle options
  		// @option radius: Number; Radius of the circle, in meters.
  		this._mRadius = this.options.radius;
  	},

  	// @method setRadius(radius: Number): this
  	// Sets the radius of a circle. Units are in meters.
  	setRadius: function (radius) {
  		this._mRadius = radius;
  		return this.redraw();
  	},

  	// @method getRadius(): Number
  	// Returns the current radius of a circle. Units are in meters.
  	getRadius: function () {
  		return this._mRadius;
  	},

  	// @method getBounds(): LatLngBounds
  	// Returns the `LatLngBounds` of the path.
  	getBounds: function () {
  		var half = [this._radius, this._radiusY || this._radius];

  		return new LatLngBounds(
  			this._map.layerPointToLatLng(this._point.subtract(half)),
  			this._map.layerPointToLatLng(this._point.add(half)));
  	},

  	setStyle: Path.prototype.setStyle,

  	_project: function () {

  		var lng = this._latlng.lng,
  		    lat = this._latlng.lat,
  		    map = this._map,
  		    crs = map.options.crs;

  		if (crs.distance === Earth.distance) {
  			var d = Math.PI / 180,
  			    latR = (this._mRadius / Earth.R) / d,
  			    top = map.project([lat + latR, lng]),
  			    bottom = map.project([lat - latR, lng]),
  			    p = top.add(bottom).divideBy(2),
  			    lat2 = map.unproject(p).lat,
  			    lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) /
  			            (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

  			if (isNaN(lngR) || lngR === 0) {
  				lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
  			}

  			this._point = p.subtract(map.getPixelOrigin());
  			this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
  			this._radiusY = p.y - top.y;

  		} else {
  			var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));

  			this._point = map.latLngToLayerPoint(this._latlng);
  			this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
  		}

  		this._updateBounds();
  	}
  });

  // @factory L.circle(latlng: LatLng, options?: Circle options)
  // Instantiates a circle object given a geographical point, and an options object
  // which contains the circle radius.
  // @alternative
  // @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
  // Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
  // Do not use in new applications or plugins.
  function circle(latlng, options, legacyOptions) {
  	return new Circle(latlng, options, legacyOptions);
  }

  /*
   * @class Polyline
   * @aka L.Polyline
   * @inherits Path
   *
   * A class for drawing polyline overlays on a map. Extends `Path`.
   *
   * @example
   *
   * ```js
   * // create a red polyline from an array of LatLng points
   * var latlngs = [
   * 	[45.51, -122.68],
   * 	[37.77, -122.43],
   * 	[34.04, -118.2]
   * ];
   *
   * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polyline
   * map.fitBounds(polyline.getBounds());
   * ```
   *
   * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
   *
   * ```js
   * // create a red polyline from an array of arrays of LatLng points
   * var latlngs = [
   * 	[[45.51, -122.68],
   * 	 [37.77, -122.43],
   * 	 [34.04, -118.2]],
   * 	[[40.78, -73.91],
   * 	 [41.83, -87.62],
   * 	 [32.76, -96.72]]
   * ];
   * ```
   */


  var Polyline = Path.extend({

  	// @section
  	// @aka Polyline options
  	options: {
  		// @option smoothFactor: Number = 1.0
  		// How much to simplify the polyline on each zoom level. More means
  		// better performance and smoother look, and less means more accurate representation.
  		smoothFactor: 1.0,

  		// @option noClip: Boolean = false
  		// Disable polyline clipping.
  		noClip: false
  	},

  	initialize: function (latlngs, options) {
  		setOptions(this, options);
  		this._setLatLngs(latlngs);
  	},

  	// @method getLatLngs(): LatLng[]
  	// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
  	getLatLngs: function () {
  		return this._latlngs;
  	},

  	// @method setLatLngs(latlngs: LatLng[]): this
  	// Replaces all the points in the polyline with the given array of geographical points.
  	setLatLngs: function (latlngs) {
  		this._setLatLngs(latlngs);
  		return this.redraw();
  	},

  	// @method isEmpty(): Boolean
  	// Returns `true` if the Polyline has no LatLngs.
  	isEmpty: function () {
  		return !this._latlngs.length;
  	},

  	// @method closestLayerPoint(p: Point): Point
  	// Returns the point closest to `p` on the Polyline.
  	closestLayerPoint: function (p) {
  		var minDistance = Infinity,
  		    minPoint = null,
  		    closest = _sqClosestPointOnSegment,
  		    p1, p2;

  		for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
  			var points = this._parts[j];

  			for (var i = 1, len = points.length; i < len; i++) {
  				p1 = points[i - 1];
  				p2 = points[i];

  				var sqDist = closest(p, p1, p2, true);

  				if (sqDist < minDistance) {
  					minDistance = sqDist;
  					minPoint = closest(p, p1, p2);
  				}
  			}
  		}
  		if (minPoint) {
  			minPoint.distance = Math.sqrt(minDistance);
  		}
  		return minPoint;
  	},

  	// @method getCenter(): LatLng
  	// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
  	getCenter: function () {
  		// throws error when not yet added to map as this center calculation requires projected coordinates
  		if (!this._map) {
  			throw new Error('Must add layer to map before using getCenter()');
  		}

  		var i, halfDist, segDist, dist, p1, p2, ratio,
  		    points = this._rings[0],
  		    len = points.length;

  		if (!len) { return null; }

  		// polyline centroid algorithm; only uses the first ring if there are multiple

  		for (i = 0, halfDist = 0; i < len - 1; i++) {
  			halfDist += points[i].distanceTo(points[i + 1]) / 2;
  		}

  		// The line is so small in the current view that all points are on the same pixel.
  		if (halfDist === 0) {
  			return this._map.layerPointToLatLng(points[0]);
  		}

  		for (i = 0, dist = 0; i < len - 1; i++) {
  			p1 = points[i];
  			p2 = points[i + 1];
  			segDist = p1.distanceTo(p2);
  			dist += segDist;

  			if (dist > halfDist) {
  				ratio = (dist - halfDist) / segDist;
  				return this._map.layerPointToLatLng([
  					p2.x - ratio * (p2.x - p1.x),
  					p2.y - ratio * (p2.y - p1.y)
  				]);
  			}
  		}
  	},

  	// @method getBounds(): LatLngBounds
  	// Returns the `LatLngBounds` of the path.
  	getBounds: function () {
  		return this._bounds;
  	},

  	// @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
  	// Adds a given point to the polyline. By default, adds to the first ring of
  	// the polyline in case of a multi-polyline, but can be overridden by passing
  	// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
  	addLatLng: function (latlng, latlngs) {
  		latlngs = latlngs || this._defaultShape();
  		latlng = toLatLng(latlng);
  		latlngs.push(latlng);
  		this._bounds.extend(latlng);
  		return this.redraw();
  	},

  	_setLatLngs: function (latlngs) {
  		this._bounds = new LatLngBounds();
  		this._latlngs = this._convertLatLngs(latlngs);
  	},

  	_defaultShape: function () {
  		return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
  	},

  	// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
  	_convertLatLngs: function (latlngs) {
  		var result = [],
  		    flat = isFlat(latlngs);

  		for (var i = 0, len = latlngs.length; i < len; i++) {
  			if (flat) {
  				result[i] = toLatLng(latlngs[i]);
  				this._bounds.extend(result[i]);
  			} else {
  				result[i] = this._convertLatLngs(latlngs[i]);
  			}
  		}

  		return result;
  	},

  	_project: function () {
  		var pxBounds = new Bounds();
  		this._rings = [];
  		this._projectLatlngs(this._latlngs, this._rings, pxBounds);

  		if (this._bounds.isValid() && pxBounds.isValid()) {
  			this._rawPxBounds = pxBounds;
  			this._updateBounds();
  		}
  	},

  	_updateBounds: function () {
  		var w = this._clickTolerance(),
  		    p = new Point(w, w);
  		this._pxBounds = new Bounds([
  			this._rawPxBounds.min.subtract(p),
  			this._rawPxBounds.max.add(p)
  		]);
  	},

  	// recursively turns latlngs into a set of rings with projected coordinates
  	_projectLatlngs: function (latlngs, result, projectedBounds) {
  		var flat = latlngs[0] instanceof LatLng,
  		    len = latlngs.length,
  		    i, ring;

  		if (flat) {
  			ring = [];
  			for (i = 0; i < len; i++) {
  				ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
  				projectedBounds.extend(ring[i]);
  			}
  			result.push(ring);
  		} else {
  			for (i = 0; i < len; i++) {
  				this._projectLatlngs(latlngs[i], result, projectedBounds);
  			}
  		}
  	},

  	// clip polyline by renderer bounds so that we have less to render for performance
  	_clipPoints: function () {
  		var bounds = this._renderer._bounds;

  		this._parts = [];
  		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
  			return;
  		}

  		if (this.options.noClip) {
  			this._parts = this._rings;
  			return;
  		}

  		var parts = this._parts,
  		    i, j, k, len, len2, segment, points;

  		for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
  			points = this._rings[i];

  			for (j = 0, len2 = points.length; j < len2 - 1; j++) {
  				segment = clipSegment(points[j], points[j + 1], bounds, j, true);

  				if (!segment) { continue; }

  				parts[k] = parts[k] || [];
  				parts[k].push(segment[0]);

  				// if segment goes out of screen, or it's the last one, it's the end of the line part
  				if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
  					parts[k].push(segment[1]);
  					k++;
  				}
  			}
  		}
  	},

  	// simplify each clipped part of the polyline for performance
  	_simplifyPoints: function () {
  		var parts = this._parts,
  		    tolerance = this.options.smoothFactor;

  		for (var i = 0, len = parts.length; i < len; i++) {
  			parts[i] = simplify(parts[i], tolerance);
  		}
  	},

  	_update: function () {
  		if (!this._map) { return; }

  		this._clipPoints();
  		this._simplifyPoints();
  		this._updatePath();
  	},

  	_updatePath: function () {
  		this._renderer._updatePoly(this);
  	},

  	// Needed by the `Canvas` renderer for interactivity
  	_containsPoint: function (p, closed) {
  		var i, j, k, len, len2, part,
  		    w = this._clickTolerance();

  		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

  		// hit detection for polylines
  		for (i = 0, len = this._parts.length; i < len; i++) {
  			part = this._parts[i];

  			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
  				if (!closed && (j === 0)) { continue; }

  				if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
  					return true;
  				}
  			}
  		}
  		return false;
  	}
  });

  // @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
  // Instantiates a polyline object given an array of geographical points and
  // optionally an options object. You can create a `Polyline` object with
  // multiple separate lines (`MultiPolyline`) by passing an array of arrays
  // of geographic points.
  function polyline(latlngs, options) {
  	return new Polyline(latlngs, options);
  }

  // Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
  Polyline._flat = _flat;

  /*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */

  var Polygon = Polyline.extend({

  	options: {
  		fill: true
  	},

  	isEmpty: function () {
  		return !this._latlngs.length || !this._latlngs[0].length;
  	},

  	getCenter: function () {
  		// throws error when not yet added to map as this center calculation requires projected coordinates
  		if (!this._map) {
  			throw new Error('Must add layer to map before using getCenter()');
  		}

  		var i, j, p1, p2, f, area, x, y, center,
  		    points = this._rings[0],
  		    len = points.length;

  		if (!len) { return null; }

  		// polygon centroid algorithm; only uses the first ring if there are multiple

  		area = x = y = 0;

  		for (i = 0, j = len - 1; i < len; j = i++) {
  			p1 = points[i];
  			p2 = points[j];

  			f = p1.y * p2.x - p2.y * p1.x;
  			x += (p1.x + p2.x) * f;
  			y += (p1.y + p2.y) * f;
  			area += f * 3;
  		}

  		if (area === 0) {
  			// Polygon is so small that all points are on same pixel.
  			center = points[0];
  		} else {
  			center = [x / area, y / area];
  		}
  		return this._map.layerPointToLatLng(center);
  	},

  	_convertLatLngs: function (latlngs) {
  		var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
  		    len = result.length;

  		// remove last point if it equals first one
  		if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
  			result.pop();
  		}
  		return result;
  	},

  	_setLatLngs: function (latlngs) {
  		Polyline.prototype._setLatLngs.call(this, latlngs);
  		if (isFlat(this._latlngs)) {
  			this._latlngs = [this._latlngs];
  		}
  	},

  	_defaultShape: function () {
  		return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
  	},

  	_clipPoints: function () {
  		// polygons need a different clipping algorithm so we redefine that

  		var bounds = this._renderer._bounds,
  		    w = this.options.weight,
  		    p = new Point(w, w);

  		// increase clip padding by stroke width to avoid stroke on clip edges
  		bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));

  		this._parts = [];
  		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
  			return;
  		}

  		if (this.options.noClip) {
  			this._parts = this._rings;
  			return;
  		}

  		for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
  			clipped = clipPolygon(this._rings[i], bounds, true);
  			if (clipped.length) {
  				this._parts.push(clipped);
  			}
  		}
  	},

  	_updatePath: function () {
  		this._renderer._updatePoly(this, true);
  	},

  	// Needed by the `Canvas` renderer for interactivity
  	_containsPoint: function (p) {
  		var inside = false,
  		    part, p1, p2, i, j, k, len, len2;

  		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

  		// ray casting algorithm for detecting if point is in polygon
  		for (i = 0, len = this._parts.length; i < len; i++) {
  			part = this._parts[i];

  			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
  				p1 = part[j];
  				p2 = part[k];

  				if (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
  					inside = !inside;
  				}
  			}
  		}

  		// also check if it's on polygon stroke
  		return inside || Polyline.prototype._containsPoint.call(this, p, true);
  	}

  });


  // @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
  function polygon(latlngs, options) {
  	return new Polygon(latlngs, options);
  }

  /*
   * @class GeoJSON
   * @aka L.GeoJSON
   * @inherits FeatureGroup
   *
   * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
   * GeoJSON data and display it on the map. Extends `FeatureGroup`.
   *
   * @example
   *
   * ```js
   * L.geoJSON(data, {
   * 	style: function (feature) {
   * 		return {color: feature.properties.color};
   * 	}
   * }).bindPopup(function (layer) {
   * 	return layer.feature.properties.description;
   * }).addTo(map);
   * ```
   */

  var GeoJSON = FeatureGroup.extend({

  	/* @section
  	 * @aka GeoJSON options
  	 *
  	 * @option pointToLayer: Function = *
  	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
  	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
  	 * The default is to spawn a default `Marker`:
  	 * ```js
  	 * function(geoJsonPoint, latlng) {
  	 * 	return L.marker(latlng);
  	 * }
  	 * ```
  	 *
  	 * @option style: Function = *
  	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
  	 * called internally when data is added.
  	 * The default value is to not override any defaults:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return {}
  	 * }
  	 * ```
  	 *
  	 * @option onEachFeature: Function = *
  	 * A `Function` that will be called once for each created `Feature`, after it has
  	 * been created and styled. Useful for attaching events and popups to features.
  	 * The default is to do nothing with the newly created layers:
  	 * ```js
  	 * function (feature, layer) {}
  	 * ```
  	 *
  	 * @option filter: Function = *
  	 * A `Function` that will be used to decide whether to include a feature or not.
  	 * The default is to include all features:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return true;
  	 * }
  	 * ```
  	 * Note: dynamically changing the `filter` option will have effect only on newly
  	 * added data. It will _not_ re-evaluate already included features.
  	 *
  	 * @option coordsToLatLng: Function = *
  	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
  	 * The default is the `coordsToLatLng` static method.
  	 *
  	 * @option markersInheritOptions: Boolean = false
  	 * Whether default Markers for "Point" type Features inherit from group options.
  	 */

  	initialize: function (geojson, options) {
  		setOptions(this, options);

  		this._layers = {};

  		if (geojson) {
  			this.addData(geojson);
  		}
  	},

  	// @method addData( <GeoJSON> data ): this
  	// Adds a GeoJSON object to the layer.
  	addData: function (geojson) {
  		var features = isArray(geojson) ? geojson : geojson.features,
  		    i, len, feature;

  		if (features) {
  			for (i = 0, len = features.length; i < len; i++) {
  				// only add this if geometry or geometries are set and not null
  				feature = features[i];
  				if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
  					this.addData(feature);
  				}
  			}
  			return this;
  		}

  		var options = this.options;

  		if (options.filter && !options.filter(geojson)) { return this; }

  		var layer = geometryToLayer(geojson, options);
  		if (!layer) {
  			return this;
  		}
  		layer.feature = asFeature(geojson);

  		layer.defaultOptions = layer.options;
  		this.resetStyle(layer);

  		if (options.onEachFeature) {
  			options.onEachFeature(geojson, layer);
  		}

  		return this.addLayer(layer);
  	},

  	// @method resetStyle( <Path> layer? ): this
  	// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
  	// If `layer` is omitted, the style of all features in the current layer is reset.
  	resetStyle: function (layer) {
  		if (layer === undefined) {
  			return this.eachLayer(this.resetStyle, this);
  		}
  		// reset any custom styles
  		layer.options = extend({}, layer.defaultOptions);
  		this._setLayerStyle(layer, this.options.style);
  		return this;
  	},

  	// @method setStyle( <Function> style ): this
  	// Changes styles of GeoJSON vector layers with the given style function.
  	setStyle: function (style) {
  		return this.eachLayer(function (layer) {
  			this._setLayerStyle(layer, style);
  		}, this);
  	},

  	_setLayerStyle: function (layer, style) {
  		if (layer.setStyle) {
  			if (typeof style === 'function') {
  				style = style(layer.feature);
  			}
  			layer.setStyle(style);
  		}
  	}
  });

  // @section
  // There are several static functions which can be called without instantiating L.GeoJSON:

  // @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
  // Creates a `Layer` from a given GeoJSON feature. Can use a custom
  // [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
  // functions if provided as options.
  function geometryToLayer(geojson, options) {

  	var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
  	    coords = geometry ? geometry.coordinates : null,
  	    layers = [],
  	    pointToLayer = options && options.pointToLayer,
  	    _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,
  	    latlng, latlngs, i, len;

  	if (!coords && !geometry) {
  		return null;
  	}

  	switch (geometry.type) {
  	case 'Point':
  		latlng = _coordsToLatLng(coords);
  		return _pointToLayer(pointToLayer, geojson, latlng, options);

  	case 'MultiPoint':
  		for (i = 0, len = coords.length; i < len; i++) {
  			latlng = _coordsToLatLng(coords[i]);
  			layers.push(_pointToLayer(pointToLayer, geojson, latlng, options));
  		}
  		return new FeatureGroup(layers);

  	case 'LineString':
  	case 'MultiLineString':
  		latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);
  		return new Polyline(latlngs, options);

  	case 'Polygon':
  	case 'MultiPolygon':
  		latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);
  		return new Polygon(latlngs, options);

  	case 'GeometryCollection':
  		for (i = 0, len = geometry.geometries.length; i < len; i++) {
  			var layer = geometryToLayer({
  				geometry: geometry.geometries[i],
  				type: 'Feature',
  				properties: geojson.properties
  			}, options);

  			if (layer) {
  				layers.push(layer);
  			}
  		}
  		return new FeatureGroup(layers);

  	default:
  		throw new Error('Invalid GeoJSON object.');
  	}
  }

  function _pointToLayer(pointToLayerFn, geojson, latlng, options) {
  	return pointToLayerFn ?
  		pointToLayerFn(geojson, latlng) :
  		new Marker(latlng, options && options.markersInheritOptions && options);
  }

  // @function coordsToLatLng(coords: Array): LatLng
  // Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
  // or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
  function coordsToLatLng(coords) {
  	return new LatLng(coords[1], coords[0], coords[2]);
  }

  // @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
  // Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
  // `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
  // Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
  function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
  	var latlngs = [];

  	for (var i = 0, len = coords.length, latlng; i < len; i++) {
  		latlng = levelsDeep ?
  			coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) :
  			(_coordsToLatLng || coordsToLatLng)(coords[i]);

  		latlngs.push(latlng);
  	}

  	return latlngs;
  }

  // @function latLngToCoords(latlng: LatLng, precision?: Number): Array
  // Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
  function latLngToCoords(latlng, precision) {
  	precision = typeof precision === 'number' ? precision : 6;
  	return latlng.alt !== undefined ?
  		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] :
  		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
  }

  // @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
  // Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
  // `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
  function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
  	var coords = [];

  	for (var i = 0, len = latlngs.length; i < len; i++) {
  		coords.push(levelsDeep ?
  			latLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) :
  			latLngToCoords(latlngs[i], precision));
  	}

  	if (!levelsDeep && closed) {
  		coords.push(coords[0]);
  	}

  	return coords;
  }

  function getFeature(layer, newGeometry) {
  	return layer.feature ?
  		extend({}, layer.feature, {geometry: newGeometry}) :
  		asFeature(newGeometry);
  }

  // @function asFeature(geojson: Object): Object
  // Normalize GeoJSON geometries/features into GeoJSON features.
  function asFeature(geojson) {
  	if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {
  		return geojson;
  	}

  	return {
  		type: 'Feature',
  		properties: {},
  		geometry: geojson
  	};
  }

  var PointToGeoJSON = {
  	toGeoJSON: function (precision) {
  		return getFeature(this, {
  			type: 'Point',
  			coordinates: latLngToCoords(this.getLatLng(), precision)
  		});
  	}
  };

  // @namespace Marker
  // @section Other methods
  // @method toGeoJSON(precision?: Number): Object
  // `precision` is the number of decimal places for coordinates.
  // The default value is 6 places.
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
  Marker.include(PointToGeoJSON);

  // @namespace CircleMarker
  // @method toGeoJSON(precision?: Number): Object
  // `precision` is the number of decimal places for coordinates.
  // The default value is 6 places.
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
  Circle.include(PointToGeoJSON);
  CircleMarker.include(PointToGeoJSON);


  // @namespace Polyline
  // @method toGeoJSON(precision?: Number): Object
  // `precision` is the number of decimal places for coordinates.
  // The default value is 6 places.
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
  Polyline.include({
  	toGeoJSON: function (precision) {
  		var multi = !isFlat(this._latlngs);

  		var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);

  		return getFeature(this, {
  			type: (multi ? 'Multi' : '') + 'LineString',
  			coordinates: coords
  		});
  	}
  });

  // @namespace Polygon
  // @method toGeoJSON(precision?: Number): Object
  // `precision` is the number of decimal places for coordinates.
  // The default value is 6 places.
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
  Polygon.include({
  	toGeoJSON: function (precision) {
  		var holes = !isFlat(this._latlngs),
  		    multi = holes && !isFlat(this._latlngs[0]);

  		var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);

  		if (!holes) {
  			coords = [coords];
  		}

  		return getFeature(this, {
  			type: (multi ? 'Multi' : '') + 'Polygon',
  			coordinates: coords
  		});
  	}
  });


  // @namespace LayerGroup
  LayerGroup.include({
  	toMultiPoint: function (precision) {
  		var coords = [];

  		this.eachLayer(function (layer) {
  			coords.push(layer.toGeoJSON(precision).geometry.coordinates);
  		});

  		return getFeature(this, {
  			type: 'MultiPoint',
  			coordinates: coords
  		});
  	},

  	// @method toGeoJSON(precision?: Number): Object
  	// `precision` is the number of decimal places for coordinates.
  	// The default value is 6 places.
  	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
  	toGeoJSON: function (precision) {

  		var type = this.feature && this.feature.geometry && this.feature.geometry.type;

  		if (type === 'MultiPoint') {
  			return this.toMultiPoint(precision);
  		}

  		var isGeometryCollection = type === 'GeometryCollection',
  		    jsons = [];

  		this.eachLayer(function (layer) {
  			if (layer.toGeoJSON) {
  				var json = layer.toGeoJSON(precision);
  				if (isGeometryCollection) {
  					jsons.push(json.geometry);
  				} else {
  					var feature = asFeature(json);
  					// Squash nested feature collections
  					if (feature.type === 'FeatureCollection') {
  						jsons.push.apply(jsons, feature.features);
  					} else {
  						jsons.push(feature);
  					}
  				}
  			}
  		});

  		if (isGeometryCollection) {
  			return getFeature(this, {
  				geometries: jsons,
  				type: 'GeometryCollection'
  			});
  		}

  		return {
  			type: 'FeatureCollection',
  			features: jsons
  		};
  	}
  });

  // @namespace GeoJSON
  // @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
  // Creates a GeoJSON layer. Optionally accepts an object in
  // [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
  // (you can alternatively add it later with `addData` method) and an `options` object.
  function geoJSON(geojson, options) {
  	return new GeoJSON(geojson, options);
  }

  // Backward compatibility.
  var geoJson = geoJSON;

  /*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */

  var ImageOverlay = Layer.extend({

  	// @section
  	// @aka ImageOverlay options
  	options: {
  		// @option opacity: Number = 1.0
  		// The opacity of the image overlay.
  		opacity: 1,

  		// @option alt: String = ''
  		// Text for the `alt` attribute of the image (useful for accessibility).
  		alt: '',

  		// @option interactive: Boolean = false
  		// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
  		interactive: false,

  		// @option crossOrigin: Boolean|String = false
  		// Whether the crossOrigin attribute will be added to the image.
  		// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
  		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
  		crossOrigin: false,

  		// @option errorOverlayUrl: String = ''
  		// URL to the overlay image to show in place of the overlay that failed to load.
  		errorOverlayUrl: '',

  		// @option zIndex: Number = 1
  		// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
  		zIndex: 1,

  		// @option className: String = ''
  		// A custom class name to assign to the image. Empty by default.
  		className: ''
  	},

  	initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
  		this._url = url;
  		this._bounds = toLatLngBounds(bounds);

  		setOptions(this, options);
  	},

  	onAdd: function () {
  		if (!this._image) {
  			this._initImage();

  			if (this.options.opacity < 1) {
  				this._updateOpacity();
  			}
  		}

  		if (this.options.interactive) {
  			addClass(this._image, 'leaflet-interactive');
  			this.addInteractiveTarget(this._image);
  		}

  		this.getPane().appendChild(this._image);
  		this._reset();
  	},

  	onRemove: function () {
  		remove(this._image);
  		if (this.options.interactive) {
  			this.removeInteractiveTarget(this._image);
  		}
  	},

  	// @method setOpacity(opacity: Number): this
  	// Sets the opacity of the overlay.
  	setOpacity: function (opacity) {
  		this.options.opacity = opacity;

  		if (this._image) {
  			this._updateOpacity();
  		}
  		return this;
  	},

  	setStyle: function (styleOpts) {
  		if (styleOpts.opacity) {
  			this.setOpacity(styleOpts.opacity);
  		}
  		return this;
  	},

  	// @method bringToFront(): this
  	// Brings the layer to the top of all overlays.
  	bringToFront: function () {
  		if (this._map) {
  			toFront(this._image);
  		}
  		return this;
  	},

  	// @method bringToBack(): this
  	// Brings the layer to the bottom of all overlays.
  	bringToBack: function () {
  		if (this._map) {
  			toBack(this._image);
  		}
  		return this;
  	},

  	// @method setUrl(url: String): this
  	// Changes the URL of the image.
  	setUrl: function (url) {
  		this._url = url;

  		if (this._image) {
  			this._image.src = url;
  		}
  		return this;
  	},

  	// @method setBounds(bounds: LatLngBounds): this
  	// Update the bounds that this ImageOverlay covers
  	setBounds: function (bounds) {
  		this._bounds = toLatLngBounds(bounds);

  		if (this._map) {
  			this._reset();
  		}
  		return this;
  	},

  	getEvents: function () {
  		var events = {
  			zoom: this._reset,
  			viewreset: this._reset
  		};

  		if (this._zoomAnimated) {
  			events.zoomanim = this._animateZoom;
  		}

  		return events;
  	},

  	// @method setZIndex(value: Number): this
  	// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
  	setZIndex: function (value) {
  		this.options.zIndex = value;
  		this._updateZIndex();
  		return this;
  	},

  	// @method getBounds(): LatLngBounds
  	// Get the bounds that this ImageOverlay covers
  	getBounds: function () {
  		return this._bounds;
  	},

  	// @method getElement(): HTMLElement
  	// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
  	// used by this overlay.
  	getElement: function () {
  		return this._image;
  	},

  	_initImage: function () {
  		var wasElementSupplied = this._url.tagName === 'IMG';
  		var img = this._image = wasElementSupplied ? this._url : create$1('img');

  		addClass(img, 'leaflet-image-layer');
  		if (this._zoomAnimated) { addClass(img, 'leaflet-zoom-animated'); }
  		if (this.options.className) { addClass(img, this.options.className); }

  		img.onselectstart = falseFn;
  		img.onmousemove = falseFn;

  		// @event load: Event
  		// Fired when the ImageOverlay layer has loaded its image
  		img.onload = bind(this.fire, this, 'load');
  		img.onerror = bind(this._overlayOnError, this, 'error');

  		if (this.options.crossOrigin || this.options.crossOrigin === '') {
  			img.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
  		}

  		if (this.options.zIndex) {
  			this._updateZIndex();
  		}

  		if (wasElementSupplied) {
  			this._url = img.src;
  			return;
  		}

  		img.src = this._url;
  		img.alt = this.options.alt;
  	},

  	_animateZoom: function (e) {
  		var scale = this._map.getZoomScale(e.zoom),
  		    offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;

  		setTransform(this._image, offset, scale);
  	},

  	_reset: function () {
  		var image = this._image,
  		    bounds = new Bounds(
  		        this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
  		        this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
  		    size = bounds.getSize();

  		setPosition(image, bounds.min);

  		image.style.width  = size.x + 'px';
  		image.style.height = size.y + 'px';
  	},

  	_updateOpacity: function () {
  		setOpacity(this._image, this.options.opacity);
  	},

  	_updateZIndex: function () {
  		if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {
  			this._image.style.zIndex = this.options.zIndex;
  		}
  	},

  	_overlayOnError: function () {
  		// @event error: Event
  		// Fired when the ImageOverlay layer fails to load its image
  		this.fire('error');

  		var errorUrl = this.options.errorOverlayUrl;
  		if (errorUrl && this._url !== errorUrl) {
  			this._url = errorUrl;
  			this._image.src = errorUrl;
  		}
  	}
  });

  // @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
  // Instantiates an image overlay object given the URL of the image and the
  // geographical bounds it is tied to.
  var imageOverlay = function (url, bounds, options) {
  	return new ImageOverlay(url, bounds, options);
  };

  /*
   * @class VideoOverlay
   * @aka L.VideoOverlay
   * @inherits ImageOverlay
   *
   * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
   *
   * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
   * HTML5 element.
   *
   * @example
   *
   * ```js
   * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
   * 	videoBounds = [[ 32, -130], [ 13, -100]];
   * L.videoOverlay(videoUrl, videoBounds ).addTo(map);
   * ```
   */

  var VideoOverlay = ImageOverlay.extend({

  	// @section
  	// @aka VideoOverlay options
  	options: {
  		// @option autoplay: Boolean = true
  		// Whether the video starts playing automatically when loaded.
  		autoplay: true,

  		// @option loop: Boolean = true
  		// Whether the video will loop back to the beginning when played.
  		loop: true,

  		// @option keepAspectRatio: Boolean = true
  		// Whether the video will save aspect ratio after the projection.
  		// Relevant for supported browsers. Browser compatibility- https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
  		keepAspectRatio: true,

  		// @option muted: Boolean = false
  		// Whether the video starts on mute when loaded.
  		muted: false
  	},

  	_initImage: function () {
  		var wasElementSupplied = this._url.tagName === 'VIDEO';
  		var vid = this._image = wasElementSupplied ? this._url : create$1('video');

  		addClass(vid, 'leaflet-image-layer');
  		if (this._zoomAnimated) { addClass(vid, 'leaflet-zoom-animated'); }
  		if (this.options.className) { addClass(vid, this.options.className); }

  		vid.onselectstart = falseFn;
  		vid.onmousemove = falseFn;

  		// @event load: Event
  		// Fired when the video has finished loading the first frame
  		vid.onloadeddata = bind(this.fire, this, 'load');

  		if (wasElementSupplied) {
  			var sourceElements = vid.getElementsByTagName('source');
  			var sources = [];
  			for (var j = 0; j < sourceElements.length; j++) {
  				sources.push(sourceElements[j].src);
  			}

  			this._url = (sourceElements.length > 0) ? sources : [vid.src];
  			return;
  		}

  		if (!isArray(this._url)) { this._url = [this._url]; }

  		if (!this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(vid.style, 'objectFit')) {
  			vid.style['objectFit'] = 'fill';
  		}
  		vid.autoplay = !!this.options.autoplay;
  		vid.loop = !!this.options.loop;
  		vid.muted = !!this.options.muted;
  		for (var i = 0; i < this._url.length; i++) {
  			var source = create$1('source');
  			source.src = this._url[i];
  			vid.appendChild(source);
  		}
  	}

  	// @method getElement(): HTMLVideoElement
  	// Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
  	// used by this overlay.
  });


  // @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
  // Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
  // geographical bounds it is tied to.

  function videoOverlay(video, bounds, options) {
  	return new VideoOverlay(video, bounds, options);
  }

  /*
   * @class SVGOverlay
   * @aka L.SVGOverlay
   * @inherits ImageOverlay
   *
   * Used to load, display and provide DOM access to an SVG file over specific bounds of the map. Extends `ImageOverlay`.
   *
   * An SVG overlay uses the [`<svg>`](https://developer.mozilla.org/docs/Web/SVG/Element/svg) element.
   *
   * @example
   *
   * ```js
   * var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
   * svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
   * svgElement.setAttribute('viewBox', "0 0 200 200");
   * svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
   * var svgElementBounds = [ [ 32, -130 ], [ 13, -100 ] ];
   * L.svgOverlay(svgElement, svgElementBounds).addTo(map);
   * ```
   */

  var SVGOverlay = ImageOverlay.extend({
  	_initImage: function () {
  		var el = this._image = this._url;

  		addClass(el, 'leaflet-image-layer');
  		if (this._zoomAnimated) { addClass(el, 'leaflet-zoom-animated'); }
  		if (this.options.className) { addClass(el, this.options.className); }

  		el.onselectstart = falseFn;
  		el.onmousemove = falseFn;
  	}

  	// @method getElement(): SVGElement
  	// Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
  	// used by this overlay.
  });


  // @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
  // Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
  // A viewBox attribute is required on the SVG element to zoom in and out properly.

  function svgOverlay(el, bounds, options) {
  	return new SVGOverlay(el, bounds, options);
  }

  /*
   * @class DivOverlay
   * @inherits Layer
   * @aka L.DivOverlay
   * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
   */

  // @namespace DivOverlay
  var DivOverlay = Layer.extend({

  	// @section
  	// @aka DivOverlay options
  	options: {
  		// @option offset: Point = Point(0, 7)
  		// The offset of the popup position. Useful to control the anchor
  		// of the popup when opening it on some overlays.
  		offset: [0, 7],

  		// @option className: String = ''
  		// A custom CSS class name to assign to the popup.
  		className: '',

  		// @option pane: String = 'popupPane'
  		// `Map pane` where the popup will be added.
  		pane: 'popupPane'
  	},

  	initialize: function (options, source) {
  		setOptions(this, options);

  		this._source = source;
  	},

  	onAdd: function (map) {
  		this._zoomAnimated = map._zoomAnimated;

  		if (!this._container) {
  			this._initLayout();
  		}

  		if (map._fadeAnimated) {
  			setOpacity(this._container, 0);
  		}

  		clearTimeout(this._removeTimeout);
  		this.getPane().appendChild(this._container);
  		this.update();

  		if (map._fadeAnimated) {
  			setOpacity(this._container, 1);
  		}

  		this.bringToFront();
  	},

  	onRemove: function (map) {
  		if (map._fadeAnimated) {
  			setOpacity(this._container, 0);
  			this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);
  		} else {
  			remove(this._container);
  		}
  	},

  	// @namespace Popup
  	// @method getLatLng: LatLng
  	// Returns the geographical point of popup.
  	getLatLng: function () {
  		return this._latlng;
  	},

  	// @method setLatLng(latlng: LatLng): this
  	// Sets the geographical point where the popup will open.
  	setLatLng: function (latlng) {
  		this._latlng = toLatLng(latlng);
  		if (this._map) {
  			this._updatePosition();
  			this._adjustPan();
  		}
  		return this;
  	},

  	// @method getContent: String|HTMLElement
  	// Returns the content of the popup.
  	getContent: function () {
  		return this._content;
  	},

  	// @method setContent(htmlContent: String|HTMLElement|Function): this
  	// Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
  	setContent: function (content) {
  		this._content = content;
  		this.update();
  		return this;
  	},

  	// @method getElement: String|HTMLElement
  	// Returns the HTML container of the popup.
  	getElement: function () {
  		return this._container;
  	},

  	// @method update: null
  	// Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
  	update: function () {
  		if (!this._map) { return; }

  		this._container.style.visibility = 'hidden';

  		this._updateContent();
  		this._updateLayout();
  		this._updatePosition();

  		this._container.style.visibility = '';

  		this._adjustPan();
  	},

  	getEvents: function () {
  		var events = {
  			zoom: this._updatePosition,
  			viewreset: this._updatePosition
  		};

  		if (this._zoomAnimated) {
  			events.zoomanim = this._animateZoom;
  		}
  		return events;
  	},

  	// @method isOpen: Boolean
  	// Returns `true` when the popup is visible on the map.
  	isOpen: function () {
  		return !!this._map && this._map.hasLayer(this);
  	},

  	// @method bringToFront: this
  	// Brings this popup in front of other popups (in the same map pane).
  	bringToFront: function () {
  		if (this._map) {
  			toFront(this._container);
  		}
  		return this;
  	},

  	// @method bringToBack: this
  	// Brings this popup to the back of other popups (in the same map pane).
  	bringToBack: function () {
  		if (this._map) {
  			toBack(this._container);
  		}
  		return this;
  	},

  	_prepareOpen: function (parent, layer, latlng) {
  		if (!(layer instanceof Layer)) {
  			latlng = layer;
  			layer = parent;
  		}

  		if (layer instanceof FeatureGroup) {
  			for (var id in parent._layers) {
  				layer = parent._layers[id];
  				break;
  			}
  		}

  		if (!latlng) {
  			if (layer.getCenter) {
  				latlng = layer.getCenter();
  			} else if (layer.getLatLng) {
  				latlng = layer.getLatLng();
  			} else {
  				throw new Error('Unable to get source layer LatLng.');
  			}
  		}

  		// set overlay source to this layer
  		this._source = layer;

  		// update the overlay (content, layout, ect...)
  		this.update();

  		return latlng;
  	},

  	_updateContent: function () {
  		if (!this._content) { return; }

  		var node = this._contentNode;
  		var content = (typeof this._content === 'function') ? this._content(this._source || this) : this._content;

  		if (typeof content === 'string') {
  			node.innerHTML = content;
  		} else {
  			while (node.hasChildNodes()) {
  				node.removeChild(node.firstChild);
  			}
  			node.appendChild(content);
  		}
  		this.fire('contentupdate');
  	},

  	_updatePosition: function () {
  		if (!this._map) { return; }

  		var pos = this._map.latLngToLayerPoint(this._latlng),
  		    offset = toPoint(this.options.offset),
  		    anchor = this._getAnchor();

  		if (this._zoomAnimated) {
  			setPosition(this._container, pos.add(anchor));
  		} else {
  			offset = offset.add(pos).add(anchor);
  		}

  		var bottom = this._containerBottom = -offset.y,
  		    left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;

  		// bottom position the popup in case the height of the popup changes (images loading etc)
  		this._container.style.bottom = bottom + 'px';
  		this._container.style.left = left + 'px';
  	},

  	_getAnchor: function () {
  		return [0, 0];
  	}

  });

  /*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   * Here's a more complicated way to open a popup on a map:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */


  // @namespace Popup
  var Popup = DivOverlay.extend({

  	// @section
  	// @aka Popup options
  	options: {
  		// @option maxWidth: Number = 300
  		// Max width of the popup, in pixels.
  		maxWidth: 300,

  		// @option minWidth: Number = 50
  		// Min width of the popup, in pixels.
  		minWidth: 50,

  		// @option maxHeight: Number = null
  		// If set, creates a scrollable container of the given height
  		// inside a popup if its content exceeds it.
  		maxHeight: null,

  		// @option autoPan: Boolean = true
  		// Set it to `false` if you don't want the map to do panning animation
  		// to fit the opened popup.
  		autoPan: true,

  		// @option autoPanPaddingTopLeft: Point = null
  		// The margin between the popup and the top left corner of the map
  		// view after autopanning was performed.
  		autoPanPaddingTopLeft: null,

  		// @option autoPanPaddingBottomRight: Point = null
  		// The margin between the popup and the bottom right corner of the map
  		// view after autopanning was performed.
  		autoPanPaddingBottomRight: null,

  		// @option autoPanPadding: Point = Point(5, 5)
  		// Equivalent of setting both top left and bottom right autopan padding to the same value.
  		autoPanPadding: [5, 5],

  		// @option keepInView: Boolean = false
  		// Set it to `true` if you want to prevent users from panning the popup
  		// off of the screen while it is open.
  		keepInView: false,

  		// @option closeButton: Boolean = true
  		// Controls the presence of a close button in the popup.
  		closeButton: true,

  		// @option autoClose: Boolean = true
  		// Set it to `false` if you want to override the default behavior of
  		// the popup closing when another popup is opened.
  		autoClose: true,

  		// @option closeOnEscapeKey: Boolean = true
  		// Set it to `false` if you want to override the default behavior of
  		// the ESC key for closing of the popup.
  		closeOnEscapeKey: true,

  		// @option closeOnClick: Boolean = *
  		// Set it if you want to override the default behavior of the popup closing when user clicks
  		// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.

  		// @option className: String = ''
  		// A custom CSS class name to assign to the popup.
  		className: ''
  	},

  	// @namespace Popup
  	// @method openOn(map: Map): this
  	// Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
  	openOn: function (map) {
  		map.openPopup(this);
  		return this;
  	},

  	onAdd: function (map) {
  		DivOverlay.prototype.onAdd.call(this, map);

  		// @namespace Map
  		// @section Popup events
  		// @event popupopen: PopupEvent
  		// Fired when a popup is opened in the map
  		map.fire('popupopen', {popup: this});

  		if (this._source) {
  			// @namespace Layer
  			// @section Popup events
  			// @event popupopen: PopupEvent
  			// Fired when a popup bound to this layer is opened
  			this._source.fire('popupopen', {popup: this}, true);
  			// For non-path layers, we toggle the popup when clicking
  			// again the layer, so prevent the map to reopen it.
  			if (!(this._source instanceof Path)) {
  				this._source.on('preclick', stopPropagation);
  			}
  		}
  	},

  	onRemove: function (map) {
  		DivOverlay.prototype.onRemove.call(this, map);

  		// @namespace Map
  		// @section Popup events
  		// @event popupclose: PopupEvent
  		// Fired when a popup in the map is closed
  		map.fire('popupclose', {popup: this});

  		if (this._source) {
  			// @namespace Layer
  			// @section Popup events
  			// @event popupclose: PopupEvent
  			// Fired when a popup bound to this layer is closed
  			this._source.fire('popupclose', {popup: this}, true);
  			if (!(this._source instanceof Path)) {
  				this._source.off('preclick', stopPropagation);
  			}
  		}
  	},

  	getEvents: function () {
  		var events = DivOverlay.prototype.getEvents.call(this);

  		if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
  			events.preclick = this._close;
  		}

  		if (this.options.keepInView) {
  			events.moveend = this._adjustPan;
  		}

  		return events;
  	},

  	_close: function () {
  		if (this._map) {
  			this._map.closePopup(this);
  		}
  	},

  	_initLayout: function () {
  		var prefix = 'leaflet-popup',
  		    container = this._container = create$1('div',
  			prefix + ' ' + (this.options.className || '') +
  			' leaflet-zoom-animated');

  		var wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);
  		this._contentNode = create$1('div', prefix + '-content', wrapper);

  		disableClickPropagation(container);
  		disableScrollPropagation(this._contentNode);
  		on(container, 'contextmenu', stopPropagation);

  		this._tipContainer = create$1('div', prefix + '-tip-container', container);
  		this._tip = create$1('div', prefix + '-tip', this._tipContainer);

  		if (this.options.closeButton) {
  			var closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);
  			closeButton.href = '#close';
  			closeButton.innerHTML = '&#215;';

  			on(closeButton, 'click', this._onCloseButtonClick, this);
  		}
  	},

  	_updateLayout: function () {
  		var container = this._contentNode,
  		    style = container.style;

  		style.width = '';
  		style.whiteSpace = 'nowrap';

  		var width = container.offsetWidth;
  		width = Math.min(width, this.options.maxWidth);
  		width = Math.max(width, this.options.minWidth);

  		style.width = (width + 1) + 'px';
  		style.whiteSpace = '';

  		style.height = '';

  		var height = container.offsetHeight,
  		    maxHeight = this.options.maxHeight,
  		    scrolledClass = 'leaflet-popup-scrolled';

  		if (maxHeight && height > maxHeight) {
  			style.height = maxHeight + 'px';
  			addClass(container, scrolledClass);
  		} else {
  			removeClass(container, scrolledClass);
  		}

  		this._containerWidth = this._container.offsetWidth;
  	},

  	_animateZoom: function (e) {
  		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
  		    anchor = this._getAnchor();
  		setPosition(this._container, pos.add(anchor));
  	},

  	_adjustPan: function () {
  		if (!this.options.autoPan) { return; }
  		if (this._map._panAnim) { this._map._panAnim.stop(); }

  		var map = this._map,
  		    marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,
  		    containerHeight = this._container.offsetHeight + marginBottom,
  		    containerWidth = this._containerWidth,
  		    layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);

  		layerPos._add(getPosition(this._container));

  		var containerPos = map.layerPointToContainerPoint(layerPos),
  		    padding = toPoint(this.options.autoPanPadding),
  		    paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),
  		    paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),
  		    size = map.getSize(),
  		    dx = 0,
  		    dy = 0;

  		if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
  			dx = containerPos.x + containerWidth - size.x + paddingBR.x;
  		}
  		if (containerPos.x - dx - paddingTL.x < 0) { // left
  			dx = containerPos.x - paddingTL.x;
  		}
  		if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
  			dy = containerPos.y + containerHeight - size.y + paddingBR.y;
  		}
  		if (containerPos.y - dy - paddingTL.y < 0) { // top
  			dy = containerPos.y - paddingTL.y;
  		}

  		// @namespace Map
  		// @section Popup events
  		// @event autopanstart: Event
  		// Fired when the map starts autopanning when opening a popup.
  		if (dx || dy) {
  			map
  			    .fire('autopanstart')
  			    .panBy([dx, dy]);
  		}
  	},

  	_onCloseButtonClick: function (e) {
  		this._close();
  		stop(e);
  	},

  	_getAnchor: function () {
  		// Where should we anchor the popup on the source layer?
  		return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
  	}

  });

  // @namespace Popup
  // @factory L.popup(options?: Popup options, source?: Layer)
  // Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
  var popup = function (options, source) {
  	return new Popup(options, source);
  };


  /* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */
  Map.mergeOptions({
  	closePopupOnClick: true
  });


  // @namespace Map
  // @section Methods for Layers and Controls
  Map.include({
  	// @method openPopup(popup: Popup): this
  	// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
  	// @alternative
  	// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
  	// Creates a popup with the specified content and options and opens it in the given point on a map.
  	openPopup: function (popup, latlng, options) {
  		if (!(popup instanceof Popup)) {
  			popup = new Popup(options).setContent(popup);
  		}

  		if (latlng) {
  			popup.setLatLng(latlng);
  		}

  		if (this.hasLayer(popup)) {
  			return this;
  		}

  		if (this._popup && this._popup.options.autoClose) {
  			this.closePopup();
  		}

  		this._popup = popup;
  		return this.addLayer(popup);
  	},

  	// @method closePopup(popup?: Popup): this
  	// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
  	closePopup: function (popup) {
  		if (!popup || popup === this._popup) {
  			popup = this._popup;
  			this._popup = null;
  		}
  		if (popup) {
  			this.removeLayer(popup);
  		}
  		return this;
  	}
  });

  /*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */

  // @section Popup methods
  Layer.include({

  	// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
  	// Binds a popup to the layer with the passed `content` and sets up the
  	// necessary event listeners. If a `Function` is passed it will receive
  	// the layer as the first argument and should return a `String` or `HTMLElement`.
  	bindPopup: function (content, options) {

  		if (content instanceof Popup) {
  			setOptions(content, options);
  			this._popup = content;
  			content._source = this;
  		} else {
  			if (!this._popup || options) {
  				this._popup = new Popup(options, this);
  			}
  			this._popup.setContent(content);
  		}

  		if (!this._popupHandlersAdded) {
  			this.on({
  				click: this._openPopup,
  				keypress: this._onKeyPress,
  				remove: this.closePopup,
  				move: this._movePopup
  			});
  			this._popupHandlersAdded = true;
  		}

  		return this;
  	},

  	// @method unbindPopup(): this
  	// Removes the popup previously bound with `bindPopup`.
  	unbindPopup: function () {
  		if (this._popup) {
  			this.off({
  				click: this._openPopup,
  				keypress: this._onKeyPress,
  				remove: this.closePopup,
  				move: this._movePopup
  			});
  			this._popupHandlersAdded = false;
  			this._popup = null;
  		}
  		return this;
  	},

  	// @method openPopup(latlng?: LatLng): this
  	// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
  	openPopup: function (layer, latlng) {
  		if (this._popup && this._map) {
  			latlng = this._popup._prepareOpen(this, layer, latlng);

  			// open the popup on the map
  			this._map.openPopup(this._popup, latlng);
  		}

  		return this;
  	},

  	// @method closePopup(): this
  	// Closes the popup bound to this layer if it is open.
  	closePopup: function () {
  		if (this._popup) {
  			this._popup._close();
  		}
  		return this;
  	},

  	// @method togglePopup(): this
  	// Opens or closes the popup bound to this layer depending on its current state.
  	togglePopup: function (target) {
  		if (this._popup) {
  			if (this._popup._map) {
  				this.closePopup();
  			} else {
  				this.openPopup(target);
  			}
  		}
  		return this;
  	},

  	// @method isPopupOpen(): boolean
  	// Returns `true` if the popup bound to this layer is currently open.
  	isPopupOpen: function () {
  		return (this._popup ? this._popup.isOpen() : false);
  	},

  	// @method setPopupContent(content: String|HTMLElement|Popup): this
  	// Sets the content of the popup bound to this layer.
  	setPopupContent: function (content) {
  		if (this._popup) {
  			this._popup.setContent(content);
  		}
  		return this;
  	},

  	// @method getPopup(): Popup
  	// Returns the popup bound to this layer.
  	getPopup: function () {
  		return this._popup;
  	},

  	_openPopup: function (e) {
  		var layer = e.layer || e.target;

  		if (!this._popup) {
  			return;
  		}

  		if (!this._map) {
  			return;
  		}

  		// prevent map click
  		stop(e);

  		// if this inherits from Path its a vector and we can just
  		// open the popup at the new location
  		if (layer instanceof Path) {
  			this.openPopup(e.layer || e.target, e.latlng);
  			return;
  		}

  		// otherwise treat it like a marker and figure out
  		// if we should toggle it open/closed
  		if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
  			this.closePopup();
  		} else {
  			this.openPopup(layer, e.latlng);
  		}
  	},

  	_movePopup: function (e) {
  		this._popup.setLatLng(e.latlng);
  	},

  	_onKeyPress: function (e) {
  		if (e.originalEvent.keyCode === 13) {
  			this._openPopup(e);
  		}
  	}
  });

  /*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */


  // @namespace Tooltip
  var Tooltip = DivOverlay.extend({

  	// @section
  	// @aka Tooltip options
  	options: {
  		// @option pane: String = 'tooltipPane'
  		// `Map pane` where the tooltip will be added.
  		pane: 'tooltipPane',

  		// @option offset: Point = Point(0, 0)
  		// Optional offset of the tooltip position.
  		offset: [0, 0],

  		// @option direction: String = 'auto'
  		// Direction where to open the tooltip. Possible values are: `right`, `left`,
  		// `top`, `bottom`, `center`, `auto`.
  		// `auto` will dynamically switch between `right` and `left` according to the tooltip
  		// position on the map.
  		direction: 'auto',

  		// @option permanent: Boolean = false
  		// Whether to open the tooltip permanently or only on mouseover.
  		permanent: false,

  		// @option sticky: Boolean = false
  		// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
  		sticky: false,

  		// @option interactive: Boolean = false
  		// If true, the tooltip will listen to the feature events.
  		interactive: false,

  		// @option opacity: Number = 0.9
  		// Tooltip container opacity.
  		opacity: 0.9
  	},

  	onAdd: function (map) {
  		DivOverlay.prototype.onAdd.call(this, map);
  		this.setOpacity(this.options.opacity);

  		// @namespace Map
  		// @section Tooltip events
  		// @event tooltipopen: TooltipEvent
  		// Fired when a tooltip is opened in the map.
  		map.fire('tooltipopen', {tooltip: this});

  		if (this._source) {
  			// @namespace Layer
  			// @section Tooltip events
  			// @event tooltipopen: TooltipEvent
  			// Fired when a tooltip bound to this layer is opened.
  			this._source.fire('tooltipopen', {tooltip: this}, true);
  		}
  	},

  	onRemove: function (map) {
  		DivOverlay.prototype.onRemove.call(this, map);

  		// @namespace Map
  		// @section Tooltip events
  		// @event tooltipclose: TooltipEvent
  		// Fired when a tooltip in the map is closed.
  		map.fire('tooltipclose', {tooltip: this});

  		if (this._source) {
  			// @namespace Layer
  			// @section Tooltip events
  			// @event tooltipclose: TooltipEvent
  			// Fired when a tooltip bound to this layer is closed.
  			this._source.fire('tooltipclose', {tooltip: this}, true);
  		}
  	},

  	getEvents: function () {
  		var events = DivOverlay.prototype.getEvents.call(this);

  		if (touch && !this.options.permanent) {
  			events.preclick = this._close;
  		}

  		return events;
  	},

  	_close: function () {
  		if (this._map) {
  			this._map.closeTooltip(this);
  		}
  	},

  	_initLayout: function () {
  		var prefix = 'leaflet-tooltip',
  		    className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

  		this._contentNode = this._container = create$1('div', className);
  	},

  	_updateLayout: function () {},

  	_adjustPan: function () {},

  	_setPosition: function (pos) {
  		var subX, subY,
  		    map = this._map,
  		    container = this._container,
  		    centerPoint = map.latLngToContainerPoint(map.getCenter()),
  		    tooltipPoint = map.layerPointToContainerPoint(pos),
  		    direction = this.options.direction,
  		    tooltipWidth = container.offsetWidth,
  		    tooltipHeight = container.offsetHeight,
  		    offset = toPoint(this.options.offset),
  		    anchor = this._getAnchor();

  		if (direction === 'top') {
  			subX = tooltipWidth / 2;
  			subY = tooltipHeight;
  		} else if (direction === 'bottom') {
  			subX = tooltipWidth / 2;
  			subY = 0;
  		} else if (direction === 'center') {
  			subX = tooltipWidth / 2;
  			subY = tooltipHeight / 2;
  		} else if (direction === 'right') {
  			subX = 0;
  			subY = tooltipHeight / 2;
  		} else if (direction === 'left') {
  			subX = tooltipWidth;
  			subY = tooltipHeight / 2;
  		} else if (tooltipPoint.x < centerPoint.x) {
  			direction = 'right';
  			subX = 0;
  			subY = tooltipHeight / 2;
  		} else {
  			direction = 'left';
  			subX = tooltipWidth + (offset.x + anchor.x) * 2;
  			subY = tooltipHeight / 2;
  		}

  		pos = pos.subtract(toPoint(subX, subY, true)).add(offset).add(anchor);

  		removeClass(container, 'leaflet-tooltip-right');
  		removeClass(container, 'leaflet-tooltip-left');
  		removeClass(container, 'leaflet-tooltip-top');
  		removeClass(container, 'leaflet-tooltip-bottom');
  		addClass(container, 'leaflet-tooltip-' + direction);
  		setPosition(container, pos);
  	},

  	_updatePosition: function () {
  		var pos = this._map.latLngToLayerPoint(this._latlng);
  		this._setPosition(pos);
  	},

  	setOpacity: function (opacity) {
  		this.options.opacity = opacity;

  		if (this._container) {
  			setOpacity(this._container, opacity);
  		}
  	},

  	_animateZoom: function (e) {
  		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
  		this._setPosition(pos);
  	},

  	_getAnchor: function () {
  		// Where should we anchor the tooltip on the source layer?
  		return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
  	}

  });

  // @namespace Tooltip
  // @factory L.tooltip(options?: Tooltip options, source?: Layer)
  // Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
  var tooltip = function (options, source) {
  	return new Tooltip(options, source);
  };

  // @namespace Map
  // @section Methods for Layers and Controls
  Map.include({

  	// @method openTooltip(tooltip: Tooltip): this
  	// Opens the specified tooltip.
  	// @alternative
  	// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
  	// Creates a tooltip with the specified content and options and open it.
  	openTooltip: function (tooltip, latlng, options) {
  		if (!(tooltip instanceof Tooltip)) {
  			tooltip = new Tooltip(options).setContent(tooltip);
  		}

  		if (latlng) {
  			tooltip.setLatLng(latlng);
  		}

  		if (this.hasLayer(tooltip)) {
  			return this;
  		}

  		return this.addLayer(tooltip);
  	},

  	// @method closeTooltip(tooltip?: Tooltip): this
  	// Closes the tooltip given as parameter.
  	closeTooltip: function (tooltip) {
  		if (tooltip) {
  			this.removeLayer(tooltip);
  		}
  		return this;
  	}

  });

  /*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */

  // @section Tooltip methods
  Layer.include({

  	// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
  	// Binds a tooltip to the layer with the passed `content` and sets up the
  	// necessary event listeners. If a `Function` is passed it will receive
  	// the layer as the first argument and should return a `String` or `HTMLElement`.
  	bindTooltip: function (content, options) {

  		if (content instanceof Tooltip) {
  			setOptions(content, options);
  			this._tooltip = content;
  			content._source = this;
  		} else {
  			if (!this._tooltip || options) {
  				this._tooltip = new Tooltip(options, this);
  			}
  			this._tooltip.setContent(content);

  		}

  		this._initTooltipInteractions();

  		if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
  			this.openTooltip();
  		}

  		return this;
  	},

  	// @method unbindTooltip(): this
  	// Removes the tooltip previously bound with `bindTooltip`.
  	unbindTooltip: function () {
  		if (this._tooltip) {
  			this._initTooltipInteractions(true);
  			this.closeTooltip();
  			this._tooltip = null;
  		}
  		return this;
  	},

  	_initTooltipInteractions: function (remove$$1) {
  		if (!remove$$1 && this._tooltipHandlersAdded) { return; }
  		var onOff = remove$$1 ? 'off' : 'on',
  		    events = {
  			remove: this.closeTooltip,
  			move: this._moveTooltip
  		    };
  		if (!this._tooltip.options.permanent) {
  			events.mouseover = this._openTooltip;
  			events.mouseout = this.closeTooltip;
  			if (this._tooltip.options.sticky) {
  				events.mousemove = this._moveTooltip;
  			}
  			if (touch) {
  				events.click = this._openTooltip;
  			}
  		} else {
  			events.add = this._openTooltip;
  		}
  		this[onOff](events);
  		this._tooltipHandlersAdded = !remove$$1;
  	},

  	// @method openTooltip(latlng?: LatLng): this
  	// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
  	openTooltip: function (layer, latlng) {
  		if (this._tooltip && this._map) {
  			latlng = this._tooltip._prepareOpen(this, layer, latlng);

  			// open the tooltip on the map
  			this._map.openTooltip(this._tooltip, latlng);

  			// Tooltip container may not be defined if not permanent and never
  			// opened.
  			if (this._tooltip.options.interactive && this._tooltip._container) {
  				addClass(this._tooltip._container, 'leaflet-clickable');
  				this.addInteractiveTarget(this._tooltip._container);
  			}
  		}

  		return this;
  	},

  	// @method closeTooltip(): this
  	// Closes the tooltip bound to this layer if it is open.
  	closeTooltip: function () {
  		if (this._tooltip) {
  			this._tooltip._close();
  			if (this._tooltip.options.interactive && this._tooltip._container) {
  				removeClass(this._tooltip._container, 'leaflet-clickable');
  				this.removeInteractiveTarget(this._tooltip._container);
  			}
  		}
  		return this;
  	},

  	// @method toggleTooltip(): this
  	// Opens or closes the tooltip bound to this layer depending on its current state.
  	toggleTooltip: function (target) {
  		if (this._tooltip) {
  			if (this._tooltip._map) {
  				this.closeTooltip();
  			} else {
  				this.openTooltip(target);
  			}
  		}
  		return this;
  	},

  	// @method isTooltipOpen(): boolean
  	// Returns `true` if the tooltip bound to this layer is currently open.
  	isTooltipOpen: function () {
  		return this._tooltip.isOpen();
  	},

  	// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
  	// Sets the content of the tooltip bound to this layer.
  	setTooltipContent: function (content) {
  		if (this._tooltip) {
  			this._tooltip.setContent(content);
  		}
  		return this;
  	},

  	// @method getTooltip(): Tooltip
  	// Returns the tooltip bound to this layer.
  	getTooltip: function () {
  		return this._tooltip;
  	},

  	_openTooltip: function (e) {
  		var layer = e.layer || e.target;

  		if (!this._tooltip || !this._map) {
  			return;
  		}
  		this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
  	},

  	_moveTooltip: function (e) {
  		var latlng = e.latlng, containerPoint, layerPoint;
  		if (this._tooltip.options.sticky && e.originalEvent) {
  			containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
  			layerPoint = this._map.containerPointToLayerPoint(containerPoint);
  			latlng = this._map.layerPointToLatLng(layerPoint);
  		}
  		this._tooltip.setLatLng(latlng);
  	}
  });

  /*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */

  var DivIcon = Icon.extend({
  	options: {
  		// @section
  		// @aka DivIcon options
  		iconSize: [12, 12], // also can be set through CSS

  		// iconAnchor: (Point),
  		// popupAnchor: (Point),

  		// @option html: String|HTMLElement = ''
  		// Custom HTML code to put inside the div element, empty by default. Alternatively,
  		// an instance of `HTMLElement`.
  		html: false,

  		// @option bgPos: Point = [0, 0]
  		// Optional relative position of the background, in pixels
  		bgPos: null,

  		className: 'leaflet-div-icon'
  	},

  	createIcon: function (oldIcon) {
  		var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
  		    options = this.options;

  		if (options.html instanceof Element) {
  			empty(div);
  			div.appendChild(options.html);
  		} else {
  			div.innerHTML = options.html !== false ? options.html : '';
  		}

  		if (options.bgPos) {
  			var bgPos = toPoint(options.bgPos);
  			div.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';
  		}
  		this._setIconStyles(div, 'icon');

  		return div;
  	},

  	createShadow: function () {
  		return null;
  	}
  });

  // @factory L.divIcon(options: DivIcon options)
  // Creates a `DivIcon` instance with the given options.
  function divIcon(options) {
  	return new DivIcon(options);
  }

  Icon.Default = IconDefault;

  /*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */


  var GridLayer = Layer.extend({

  	// @section
  	// @aka GridLayer options
  	options: {
  		// @option tileSize: Number|Point = 256
  		// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
  		tileSize: 256,

  		// @option opacity: Number = 1.0
  		// Opacity of the tiles. Can be used in the `createTile()` function.
  		opacity: 1,

  		// @option updateWhenIdle: Boolean = (depends)
  		// Load new tiles only when panning ends.
  		// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
  		// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
  		// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
  		updateWhenIdle: mobile,

  		// @option updateWhenZooming: Boolean = true
  		// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
  		updateWhenZooming: true,

  		// @option updateInterval: Number = 200
  		// Tiles will not update more than once every `updateInterval` milliseconds when panning.
  		updateInterval: 200,

  		// @option zIndex: Number = 1
  		// The explicit zIndex of the tile layer.
  		zIndex: 1,

  		// @option bounds: LatLngBounds = undefined
  		// If set, tiles will only be loaded inside the set `LatLngBounds`.
  		bounds: null,

  		// @option minZoom: Number = 0
  		// The minimum zoom level down to which this layer will be displayed (inclusive).
  		minZoom: 0,

  		// @option maxZoom: Number = undefined
  		// The maximum zoom level up to which this layer will be displayed (inclusive).
  		maxZoom: undefined,

  		// @option maxNativeZoom: Number = undefined
  		// Maximum zoom number the tile source has available. If it is specified,
  		// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
  		// from `maxNativeZoom` level and auto-scaled.
  		maxNativeZoom: undefined,

  		// @option minNativeZoom: Number = undefined
  		// Minimum zoom number the tile source has available. If it is specified,
  		// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
  		// from `minNativeZoom` level and auto-scaled.
  		minNativeZoom: undefined,

  		// @option noWrap: Boolean = false
  		// Whether the layer is wrapped around the antimeridian. If `true`, the
  		// GridLayer will only be displayed once at low zoom levels. Has no
  		// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
  		// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
  		// tiles outside the CRS limits.
  		noWrap: false,

  		// @option pane: String = 'tilePane'
  		// `Map pane` where the grid layer will be added.
  		pane: 'tilePane',

  		// @option className: String = ''
  		// A custom class name to assign to the tile layer. Empty by default.
  		className: '',

  		// @option keepBuffer: Number = 2
  		// When panning the map, keep this many rows and columns of tiles before unloading them.
  		keepBuffer: 2
  	},

  	initialize: function (options) {
  		setOptions(this, options);
  	},

  	onAdd: function () {
  		this._initContainer();

  		this._levels = {};
  		this._tiles = {};

  		this._resetView();
  		this._update();
  	},

  	beforeAdd: function (map) {
  		map._addZoomLimit(this);
  	},

  	onRemove: function (map) {
  		this._removeAllTiles();
  		remove(this._container);
  		map._removeZoomLimit(this);
  		this._container = null;
  		this._tileZoom = undefined;
  	},

  	// @method bringToFront: this
  	// Brings the tile layer to the top of all tile layers.
  	bringToFront: function () {
  		if (this._map) {
  			toFront(this._container);
  			this._setAutoZIndex(Math.max);
  		}
  		return this;
  	},

  	// @method bringToBack: this
  	// Brings the tile layer to the bottom of all tile layers.
  	bringToBack: function () {
  		if (this._map) {
  			toBack(this._container);
  			this._setAutoZIndex(Math.min);
  		}
  		return this;
  	},

  	// @method getContainer: HTMLElement
  	// Returns the HTML element that contains the tiles for this layer.
  	getContainer: function () {
  		return this._container;
  	},

  	// @method setOpacity(opacity: Number): this
  	// Changes the [opacity](#gridlayer-opacity) of the grid layer.
  	setOpacity: function (opacity) {
  		this.options.opacity = opacity;
  		this._updateOpacity();
  		return this;
  	},

  	// @method setZIndex(zIndex: Number): this
  	// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
  	setZIndex: function (zIndex) {
  		this.options.zIndex = zIndex;
  		this._updateZIndex();

  		return this;
  	},

  	// @method isLoading: Boolean
  	// Returns `true` if any tile in the grid layer has not finished loading.
  	isLoading: function () {
  		return this._loading;
  	},

  	// @method redraw: this
  	// Causes the layer to clear all the tiles and request them again.
  	redraw: function () {
  		if (this._map) {
  			this._removeAllTiles();
  			this._update();
  		}
  		return this;
  	},

  	getEvents: function () {
  		var events = {
  			viewprereset: this._invalidateAll,
  			viewreset: this._resetView,
  			zoom: this._resetView,
  			moveend: this._onMoveEnd
  		};

  		if (!this.options.updateWhenIdle) {
  			// update tiles on move, but not more often than once per given interval
  			if (!this._onMove) {
  				this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
  			}

  			events.move = this._onMove;
  		}

  		if (this._zoomAnimated) {
  			events.zoomanim = this._animateZoom;
  		}

  		return events;
  	},

  	// @section Extension methods
  	// Layers extending `GridLayer` shall reimplement the following method.
  	// @method createTile(coords: Object, done?: Function): HTMLElement
  	// Called only internally, must be overridden by classes extending `GridLayer`.
  	// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
  	// is specified, it must be called when the tile has finished loading and drawing.
  	createTile: function () {
  		return document.createElement('div');
  	},

  	// @section
  	// @method getTileSize: Point
  	// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
  	getTileSize: function () {
  		var s = this.options.tileSize;
  		return s instanceof Point ? s : new Point(s, s);
  	},

  	_updateZIndex: function () {
  		if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
  			this._container.style.zIndex = this.options.zIndex;
  		}
  	},

  	_setAutoZIndex: function (compare) {
  		// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)

  		var layers = this.getPane().children,
  		    edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

  		for (var i = 0, len = layers.length, zIndex; i < len; i++) {

  			zIndex = layers[i].style.zIndex;

  			if (layers[i] !== this._container && zIndex) {
  				edgeZIndex = compare(edgeZIndex, +zIndex);
  			}
  		}

  		if (isFinite(edgeZIndex)) {
  			this.options.zIndex = edgeZIndex + compare(-1, 1);
  			this._updateZIndex();
  		}
  	},

  	_updateOpacity: function () {
  		if (!this._map) { return; }

  		// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
  		if (ielt9) { return; }

  		setOpacity(this._container, this.options.opacity);

  		var now = +new Date(),
  		    nextFrame = false,
  		    willPrune = false;

  		for (var key in this._tiles) {
  			var tile = this._tiles[key];
  			if (!tile.current || !tile.loaded) { continue; }

  			var fade = Math.min(1, (now - tile.loaded) / 200);

  			setOpacity(tile.el, fade);
  			if (fade < 1) {
  				nextFrame = true;
  			} else {
  				if (tile.active) {
  					willPrune = true;
  				} else {
  					this._onOpaqueTile(tile);
  				}
  				tile.active = true;
  			}
  		}

  		if (willPrune && !this._noPrune) { this._pruneTiles(); }

  		if (nextFrame) {
  			cancelAnimFrame(this._fadeFrame);
  			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
  		}
  	},

  	_onOpaqueTile: falseFn,

  	_initContainer: function () {
  		if (this._container) { return; }

  		this._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));
  		this._updateZIndex();

  		if (this.options.opacity < 1) {
  			this._updateOpacity();
  		}

  		this.getPane().appendChild(this._container);
  	},

  	_updateLevels: function () {

  		var zoom = this._tileZoom,
  		    maxZoom = this.options.maxZoom;

  		if (zoom === undefined) { return undefined; }

  		for (var z in this._levels) {
  			z = Number(z);
  			if (this._levels[z].el.children.length || z === zoom) {
  				this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
  				this._onUpdateLevel(z);
  			} else {
  				remove(this._levels[z].el);
  				this._removeTilesAtZoom(z);
  				this._onRemoveLevel(z);
  				delete this._levels[z];
  			}
  		}

  		var level = this._levels[zoom],
  		    map = this._map;

  		if (!level) {
  			level = this._levels[zoom] = {};

  			level.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
  			level.el.style.zIndex = maxZoom;

  			level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
  			level.zoom = zoom;

  			this._setZoomTransform(level, map.getCenter(), map.getZoom());

  			// force the browser to consider the newly added element for transition
  			falseFn(level.el.offsetWidth);

  			this._onCreateLevel(level);
  		}

  		this._level = level;

  		return level;
  	},

  	_onUpdateLevel: falseFn,

  	_onRemoveLevel: falseFn,

  	_onCreateLevel: falseFn,

  	_pruneTiles: function () {
  		if (!this._map) {
  			return;
  		}

  		var key, tile;

  		var zoom = this._map.getZoom();
  		if (zoom > this.options.maxZoom ||
  			zoom < this.options.minZoom) {
  			this._removeAllTiles();
  			return;
  		}

  		for (key in this._tiles) {
  			tile = this._tiles[key];
  			tile.retain = tile.current;
  		}

  		for (key in this._tiles) {
  			tile = this._tiles[key];
  			if (tile.current && !tile.active) {
  				var coords = tile.coords;
  				if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
  					this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
  				}
  			}
  		}

  		for (key in this._tiles) {
  			if (!this._tiles[key].retain) {
  				this._removeTile(key);
  			}
  		}
  	},

  	_removeTilesAtZoom: function (zoom) {
  		for (var key in this._tiles) {
  			if (this._tiles[key].coords.z !== zoom) {
  				continue;
  			}
  			this._removeTile(key);
  		}
  	},

  	_removeAllTiles: function () {
  		for (var key in this._tiles) {
  			this._removeTile(key);
  		}
  	},

  	_invalidateAll: function () {
  		for (var z in this._levels) {
  			remove(this._levels[z].el);
  			this._onRemoveLevel(Number(z));
  			delete this._levels[z];
  		}
  		this._removeAllTiles();

  		this._tileZoom = undefined;
  	},

  	_retainParent: function (x, y, z, minZoom) {
  		var x2 = Math.floor(x / 2),
  		    y2 = Math.floor(y / 2),
  		    z2 = z - 1,
  		    coords2 = new Point(+x2, +y2);
  		coords2.z = +z2;

  		var key = this._tileCoordsToKey(coords2),
  		    tile = this._tiles[key];

  		if (tile && tile.active) {
  			tile.retain = true;
  			return true;

  		} else if (tile && tile.loaded) {
  			tile.retain = true;
  		}

  		if (z2 > minZoom) {
  			return this._retainParent(x2, y2, z2, minZoom);
  		}

  		return false;
  	},

  	_retainChildren: function (x, y, z, maxZoom) {

  		for (var i = 2 * x; i < 2 * x + 2; i++) {
  			for (var j = 2 * y; j < 2 * y + 2; j++) {

  				var coords = new Point(i, j);
  				coords.z = z + 1;

  				var key = this._tileCoordsToKey(coords),
  				    tile = this._tiles[key];

  				if (tile && tile.active) {
  					tile.retain = true;
  					continue;

  				} else if (tile && tile.loaded) {
  					tile.retain = true;
  				}

  				if (z + 1 < maxZoom) {
  					this._retainChildren(i, j, z + 1, maxZoom);
  				}
  			}
  		}
  	},

  	_resetView: function (e) {
  		var animating = e && (e.pinch || e.flyTo);
  		this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
  	},

  	_animateZoom: function (e) {
  		this._setView(e.center, e.zoom, true, e.noUpdate);
  	},

  	_clampZoom: function (zoom) {
  		var options = this.options;

  		if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {
  			return options.minNativeZoom;
  		}

  		if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {
  			return options.maxNativeZoom;
  		}

  		return zoom;
  	},

  	_setView: function (center, zoom, noPrune, noUpdate) {
  		var tileZoom = Math.round(zoom);
  		if ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) ||
  		    (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {
  			tileZoom = undefined;
  		} else {
  			tileZoom = this._clampZoom(tileZoom);
  		}

  		var tileZoomChanged = this.options.updateWhenZooming && (tileZoom !== this._tileZoom);

  		if (!noUpdate || tileZoomChanged) {

  			this._tileZoom = tileZoom;

  			if (this._abortLoading) {
  				this._abortLoading();
  			}

  			this._updateLevels();
  			this._resetGrid();

  			if (tileZoom !== undefined) {
  				this._update(center);
  			}

  			if (!noPrune) {
  				this._pruneTiles();
  			}

  			// Flag to prevent _updateOpacity from pruning tiles during
  			// a zoom anim or a pinch gesture
  			this._noPrune = !!noPrune;
  		}

  		this._setZoomTransforms(center, zoom);
  	},

  	_setZoomTransforms: function (center, zoom) {
  		for (var i in this._levels) {
  			this._setZoomTransform(this._levels[i], center, zoom);
  		}
  	},

  	_setZoomTransform: function (level, center, zoom) {
  		var scale = this._map.getZoomScale(zoom, level.zoom),
  		    translate = level.origin.multiplyBy(scale)
  		        .subtract(this._map._getNewPixelOrigin(center, zoom)).round();

  		if (any3d) {
  			setTransform(level.el, translate, scale);
  		} else {
  			setPosition(level.el, translate);
  		}
  	},

  	_resetGrid: function () {
  		var map = this._map,
  		    crs = map.options.crs,
  		    tileSize = this._tileSize = this.getTileSize(),
  		    tileZoom = this._tileZoom;

  		var bounds = this._map.getPixelWorldBounds(this._tileZoom);
  		if (bounds) {
  			this._globalTileRange = this._pxBoundsToTileRange(bounds);
  		}

  		this._wrapX = crs.wrapLng && !this.options.noWrap && [
  			Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
  			Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
  		];
  		this._wrapY = crs.wrapLat && !this.options.noWrap && [
  			Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
  			Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
  		];
  	},

  	_onMoveEnd: function () {
  		if (!this._map || this._map._animatingZoom) { return; }

  		this._update();
  	},

  	_getTiledPixelBounds: function (center) {
  		var map = this._map,
  		    mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
  		    scale = map.getZoomScale(mapZoom, this._tileZoom),
  		    pixelCenter = map.project(center, this._tileZoom).floor(),
  		    halfSize = map.getSize().divideBy(scale * 2);

  		return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
  	},

  	// Private method to load tiles in the grid's active zoom level according to map bounds
  	_update: function (center) {
  		var map = this._map;
  		if (!map) { return; }
  		var zoom = this._clampZoom(map.getZoom());

  		if (center === undefined) { center = map.getCenter(); }
  		if (this._tileZoom === undefined) { return; }	// if out of minzoom/maxzoom

  		var pixelBounds = this._getTiledPixelBounds(center),
  		    tileRange = this._pxBoundsToTileRange(pixelBounds),
  		    tileCenter = tileRange.getCenter(),
  		    queue = [],
  		    margin = this.options.keepBuffer,
  		    noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]),
  		                              tileRange.getTopRight().add([margin, -margin]));

  		// Sanity check: panic if the tile range contains Infinity somewhere.
  		if (!(isFinite(tileRange.min.x) &&
  		      isFinite(tileRange.min.y) &&
  		      isFinite(tileRange.max.x) &&
  		      isFinite(tileRange.max.y))) { throw new Error('Attempted to load an infinite number of tiles'); }

  		for (var key in this._tiles) {
  			var c = this._tiles[key].coords;
  			if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
  				this._tiles[key].current = false;
  			}
  		}

  		// _update just loads more tiles. If the tile zoom level differs too much
  		// from the map's, let _setView reset levels and prune old tiles.
  		if (Math.abs(zoom - this._tileZoom) > 1) { this._setView(center, zoom); return; }

  		// create a queue of coordinates to load tiles from
  		for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
  			for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
  				var coords = new Point(i, j);
  				coords.z = this._tileZoom;

  				if (!this._isValidTile(coords)) { continue; }

  				var tile = this._tiles[this._tileCoordsToKey(coords)];
  				if (tile) {
  					tile.current = true;
  				} else {
  					queue.push(coords);
  				}
  			}
  		}

  		// sort tile queue to load tiles in order of their distance to center
  		queue.sort(function (a, b) {
  			return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
  		});

  		if (queue.length !== 0) {
  			// if it's the first batch of tiles to load
  			if (!this._loading) {
  				this._loading = true;
  				// @event loading: Event
  				// Fired when the grid layer starts loading tiles.
  				this.fire('loading');
  			}

  			// create DOM fragment to append tiles in one batch
  			var fragment = document.createDocumentFragment();

  			for (i = 0; i < queue.length; i++) {
  				this._addTile(queue[i], fragment);
  			}

  			this._level.el.appendChild(fragment);
  		}
  	},

  	_isValidTile: function (coords) {
  		var crs = this._map.options.crs;

  		if (!crs.infinite) {
  			// don't load tile if it's out of bounds and not wrapped
  			var bounds = this._globalTileRange;
  			if ((!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||
  			    (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))) { return false; }
  		}

  		if (!this.options.bounds) { return true; }

  		// don't load tile if it doesn't intersect the bounds in options
  		var tileBounds = this._tileCoordsToBounds(coords);
  		return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
  	},

  	_keyToBounds: function (key) {
  		return this._tileCoordsToBounds(this._keyToTileCoords(key));
  	},

  	_tileCoordsToNwSe: function (coords) {
  		var map = this._map,
  		    tileSize = this.getTileSize(),
  		    nwPoint = coords.scaleBy(tileSize),
  		    sePoint = nwPoint.add(tileSize),
  		    nw = map.unproject(nwPoint, coords.z),
  		    se = map.unproject(sePoint, coords.z);
  		return [nw, se];
  	},

  	// converts tile coordinates to its geographical bounds
  	_tileCoordsToBounds: function (coords) {
  		var bp = this._tileCoordsToNwSe(coords),
  		    bounds = new LatLngBounds(bp[0], bp[1]);

  		if (!this.options.noWrap) {
  			bounds = this._map.wrapLatLngBounds(bounds);
  		}
  		return bounds;
  	},
  	// converts tile coordinates to key for the tile cache
  	_tileCoordsToKey: function (coords) {
  		return coords.x + ':' + coords.y + ':' + coords.z;
  	},

  	// converts tile cache key to coordinates
  	_keyToTileCoords: function (key) {
  		var k = key.split(':'),
  		    coords = new Point(+k[0], +k[1]);
  		coords.z = +k[2];
  		return coords;
  	},

  	_removeTile: function (key) {
  		var tile = this._tiles[key];
  		if (!tile) { return; }

  		remove(tile.el);

  		delete this._tiles[key];

  		// @event tileunload: TileEvent
  		// Fired when a tile is removed (e.g. when a tile goes off the screen).
  		this.fire('tileunload', {
  			tile: tile.el,
  			coords: this._keyToTileCoords(key)
  		});
  	},

  	_initTile: function (tile) {
  		addClass(tile, 'leaflet-tile');

  		var tileSize = this.getTileSize();
  		tile.style.width = tileSize.x + 'px';
  		tile.style.height = tileSize.y + 'px';

  		tile.onselectstart = falseFn;
  		tile.onmousemove = falseFn;

  		// update opacity on tiles in IE7-8 because of filter inheritance problems
  		if (ielt9 && this.options.opacity < 1) {
  			setOpacity(tile, this.options.opacity);
  		}

  		// without this hack, tiles disappear after zoom on Chrome for Android
  		// https://github.com/Leaflet/Leaflet/issues/2078
  		if (android && !android23) {
  			tile.style.WebkitBackfaceVisibility = 'hidden';
  		}
  	},

  	_addTile: function (coords, container) {
  		var tilePos = this._getTilePos(coords),
  		    key = this._tileCoordsToKey(coords);

  		var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));

  		this._initTile(tile);

  		// if createTile is defined with a second argument ("done" callback),
  		// we know that tile is async and will be ready later; otherwise
  		if (this.createTile.length < 2) {
  			// mark tile as ready, but delay one frame for opacity animation to happen
  			requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
  		}

  		setPosition(tile, tilePos);

  		// save tile in cache
  		this._tiles[key] = {
  			el: tile,
  			coords: coords,
  			current: true
  		};

  		container.appendChild(tile);
  		// @event tileloadstart: TileEvent
  		// Fired when a tile is requested and starts loading.
  		this.fire('tileloadstart', {
  			tile: tile,
  			coords: coords
  		});
  	},

  	_tileReady: function (coords, err, tile) {
  		if (err) {
  			// @event tileerror: TileErrorEvent
  			// Fired when there is an error loading a tile.
  			this.fire('tileerror', {
  				error: err,
  				tile: tile,
  				coords: coords
  			});
  		}

  		var key = this._tileCoordsToKey(coords);

  		tile = this._tiles[key];
  		if (!tile) { return; }

  		tile.loaded = +new Date();
  		if (this._map._fadeAnimated) {
  			setOpacity(tile.el, 0);
  			cancelAnimFrame(this._fadeFrame);
  			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
  		} else {
  			tile.active = true;
  			this._pruneTiles();
  		}

  		if (!err) {
  			addClass(tile.el, 'leaflet-tile-loaded');

  			// @event tileload: TileEvent
  			// Fired when a tile loads.
  			this.fire('tileload', {
  				tile: tile.el,
  				coords: coords
  			});
  		}

  		if (this._noTilesToLoad()) {
  			this._loading = false;
  			// @event load: Event
  			// Fired when the grid layer loaded all visible tiles.
  			this.fire('load');

  			if (ielt9 || !this._map._fadeAnimated) {
  				requestAnimFrame(this._pruneTiles, this);
  			} else {
  				// Wait a bit more than 0.2 secs (the duration of the tile fade-in)
  				// to trigger a pruning.
  				setTimeout(bind(this._pruneTiles, this), 250);
  			}
  		}
  	},

  	_getTilePos: function (coords) {
  		return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
  	},

  	_wrapCoords: function (coords) {
  		var newCoords = new Point(
  			this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,
  			this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
  		newCoords.z = coords.z;
  		return newCoords;
  	},

  	_pxBoundsToTileRange: function (bounds) {
  		var tileSize = this.getTileSize();
  		return new Bounds(
  			bounds.min.unscaleBy(tileSize).floor(),
  			bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
  	},

  	_noTilesToLoad: function () {
  		for (var key in this._tiles) {
  			if (!this._tiles[key].loaded) { return false; }
  		}
  		return true;
  	}
  });

  // @factory L.gridLayer(options?: GridLayer options)
  // Creates a new instance of GridLayer with the supplied options.
  function gridLayer(options) {
  	return new GridLayer(options);
  }

  /*
   * @class TileLayer
   * @inherits GridLayer
   * @aka L.TileLayer
   * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.
   *
   * @example
   *
   * ```js
   * L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
   * ```
   *
   * @section URL template
   * @example
   *
   * A string of the following form:
   *
   * ```
   * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
   * ```
   *
   * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
   *
   * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
   *
   * ```
   * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
   * ```
   */


  var TileLayer = GridLayer.extend({

  	// @section
  	// @aka TileLayer options
  	options: {
  		// @option minZoom: Number = 0
  		// The minimum zoom level down to which this layer will be displayed (inclusive).
  		minZoom: 0,

  		// @option maxZoom: Number = 18
  		// The maximum zoom level up to which this layer will be displayed (inclusive).
  		maxZoom: 18,

  		// @option subdomains: String|String[] = 'abc'
  		// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
  		subdomains: 'abc',

  		// @option errorTileUrl: String = ''
  		// URL to the tile image to show in place of the tile that failed to load.
  		errorTileUrl: '',

  		// @option zoomOffset: Number = 0
  		// The zoom number used in tile URLs will be offset with this value.
  		zoomOffset: 0,

  		// @option tms: Boolean = false
  		// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
  		tms: false,

  		// @option zoomReverse: Boolean = false
  		// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
  		zoomReverse: false,

  		// @option detectRetina: Boolean = false
  		// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
  		detectRetina: false,

  		// @option crossOrigin: Boolean|String = false
  		// Whether the crossOrigin attribute will be added to the tiles.
  		// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
  		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
  		crossOrigin: false
  	},

  	initialize: function (url, options) {

  		this._url = url;

  		options = setOptions(this, options);

  		// detecting retina displays, adjusting tileSize and zoom levels
  		if (options.detectRetina && retina && options.maxZoom > 0) {

  			options.tileSize = Math.floor(options.tileSize / 2);

  			if (!options.zoomReverse) {
  				options.zoomOffset++;
  				options.maxZoom--;
  			} else {
  				options.zoomOffset--;
  				options.minZoom++;
  			}

  			options.minZoom = Math.max(0, options.minZoom);
  		}

  		if (typeof options.subdomains === 'string') {
  			options.subdomains = options.subdomains.split('');
  		}

  		// for https://github.com/Leaflet/Leaflet/issues/137
  		if (!android) {
  			this.on('tileunload', this._onTileRemove);
  		}
  	},

  	// @method setUrl(url: String, noRedraw?: Boolean): this
  	// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
  	// If the URL does not change, the layer will not be redrawn unless
  	// the noRedraw parameter is set to false.
  	setUrl: function (url, noRedraw) {
  		if (this._url === url && noRedraw === undefined) {
  			noRedraw = true;
  		}

  		this._url = url;

  		if (!noRedraw) {
  			this.redraw();
  		}
  		return this;
  	},

  	// @method createTile(coords: Object, done?: Function): HTMLElement
  	// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
  	// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
  	// callback is called when the tile has been loaded.
  	createTile: function (coords, done) {
  		var tile = document.createElement('img');

  		on(tile, 'load', bind(this._tileOnLoad, this, done, tile));
  		on(tile, 'error', bind(this._tileOnError, this, done, tile));

  		if (this.options.crossOrigin || this.options.crossOrigin === '') {
  			tile.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
  		}

  		/*
  		 Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
  		 http://www.w3.org/TR/WCAG20-TECHS/H67
  		*/
  		tile.alt = '';

  		/*
  		 Set role="presentation" to force screen readers to ignore this
  		 https://www.w3.org/TR/wai-aria/roles#textalternativecomputation
  		*/
  		tile.setAttribute('role', 'presentation');

  		tile.src = this.getTileUrl(coords);

  		return tile;
  	},

  	// @section Extension methods
  	// @uninheritable
  	// Layers extending `TileLayer` might reimplement the following method.
  	// @method getTileUrl(coords: Object): String
  	// Called only internally, returns the URL for a tile given its coordinates.
  	// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
  	getTileUrl: function (coords) {
  		var data = {
  			r: retina ? '@2x' : '',
  			s: this._getSubdomain(coords),
  			x: coords.x,
  			y: coords.y,
  			z: this._getZoomForUrl()
  		};
  		if (this._map && !this._map.options.crs.infinite) {
  			var invertedY = this._globalTileRange.max.y - coords.y;
  			if (this.options.tms) {
  				data['y'] = invertedY;
  			}
  			data['-y'] = invertedY;
  		}

  		return template(this._url, extend(data, this.options));
  	},

  	_tileOnLoad: function (done, tile) {
  		// For https://github.com/Leaflet/Leaflet/issues/3332
  		if (ielt9) {
  			setTimeout(bind(done, this, null, tile), 0);
  		} else {
  			done(null, tile);
  		}
  	},

  	_tileOnError: function (done, tile, e) {
  		var errorUrl = this.options.errorTileUrl;
  		if (errorUrl && tile.getAttribute('src') !== errorUrl) {
  			tile.src = errorUrl;
  		}
  		done(e, tile);
  	},

  	_onTileRemove: function (e) {
  		e.tile.onload = null;
  	},

  	_getZoomForUrl: function () {
  		var zoom = this._tileZoom,
  		maxZoom = this.options.maxZoom,
  		zoomReverse = this.options.zoomReverse,
  		zoomOffset = this.options.zoomOffset;

  		if (zoomReverse) {
  			zoom = maxZoom - zoom;
  		}

  		return zoom + zoomOffset;
  	},

  	_getSubdomain: function (tilePoint) {
  		var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
  		return this.options.subdomains[index];
  	},

  	// stops loading all tiles in the background layer
  	_abortLoading: function () {
  		var i, tile;
  		for (i in this._tiles) {
  			if (this._tiles[i].coords.z !== this._tileZoom) {
  				tile = this._tiles[i].el;

  				tile.onload = falseFn;
  				tile.onerror = falseFn;

  				if (!tile.complete) {
  					tile.src = emptyImageUrl;
  					remove(tile);
  					delete this._tiles[i];
  				}
  			}
  		}
  	},

  	_removeTile: function (key) {
  		var tile = this._tiles[key];
  		if (!tile) { return; }

  		// Cancels any pending http requests associated with the tile
  		// unless we're on Android's stock browser,
  		// see https://github.com/Leaflet/Leaflet/issues/137
  		if (!androidStock) {
  			tile.el.setAttribute('src', emptyImageUrl);
  		}

  		return GridLayer.prototype._removeTile.call(this, key);
  	},

  	_tileReady: function (coords, err, tile) {
  		if (!this._map || (tile && tile.getAttribute('src') === emptyImageUrl)) {
  			return;
  		}

  		return GridLayer.prototype._tileReady.call(this, coords, err, tile);
  	}
  });


  // @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
  // Instantiates a tile layer object given a `URL template` and optionally an options object.

  function tileLayer(url, options) {
  	return new TileLayer(url, options);
  }

  /*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */

  var TileLayerWMS = TileLayer.extend({

  	// @section
  	// @aka TileLayer.WMS options
  	// If any custom options not documented here are used, they will be sent to the
  	// WMS server as extra parameters in each request URL. This can be useful for
  	// [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
  	defaultWmsParams: {
  		service: 'WMS',
  		request: 'GetMap',

  		// @option layers: String = ''
  		// **(required)** Comma-separated list of WMS layers to show.
  		layers: '',

  		// @option styles: String = ''
  		// Comma-separated list of WMS styles.
  		styles: '',

  		// @option format: String = 'image/jpeg'
  		// WMS image format (use `'image/png'` for layers with transparency).
  		format: 'image/jpeg',

  		// @option transparent: Boolean = false
  		// If `true`, the WMS service will return images with transparency.
  		transparent: false,

  		// @option version: String = '1.1.1'
  		// Version of the WMS service to use
  		version: '1.1.1'
  	},

  	options: {
  		// @option crs: CRS = null
  		// Coordinate Reference System to use for the WMS requests, defaults to
  		// map CRS. Don't change this if you're not sure what it means.
  		crs: null,

  		// @option uppercase: Boolean = false
  		// If `true`, WMS request parameter keys will be uppercase.
  		uppercase: false
  	},

  	initialize: function (url, options) {

  		this._url = url;

  		var wmsParams = extend({}, this.defaultWmsParams);

  		// all keys that are not TileLayer options go to WMS params
  		for (var i in options) {
  			if (!(i in this.options)) {
  				wmsParams[i] = options[i];
  			}
  		}

  		options = setOptions(this, options);

  		var realRetina = options.detectRetina && retina ? 2 : 1;
  		var tileSize = this.getTileSize();
  		wmsParams.width = tileSize.x * realRetina;
  		wmsParams.height = tileSize.y * realRetina;

  		this.wmsParams = wmsParams;
  	},

  	onAdd: function (map) {

  		this._crs = this.options.crs || map.options.crs;
  		this._wmsVersion = parseFloat(this.wmsParams.version);

  		var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
  		this.wmsParams[projectionKey] = this._crs.code;

  		TileLayer.prototype.onAdd.call(this, map);
  	},

  	getTileUrl: function (coords) {

  		var tileBounds = this._tileCoordsToNwSe(coords),
  		    crs = this._crs,
  		    bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])),
  		    min = bounds.min,
  		    max = bounds.max,
  		    bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ?
  		    [min.y, min.x, max.y, max.x] :
  		    [min.x, min.y, max.x, max.y]).join(','),
  		    url = TileLayer.prototype.getTileUrl.call(this, coords);
  		return url +
  			getParamString(this.wmsParams, url, this.options.uppercase) +
  			(this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
  	},

  	// @method setParams(params: Object, noRedraw?: Boolean): this
  	// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
  	setParams: function (params, noRedraw) {

  		extend(this.wmsParams, params);

  		if (!noRedraw) {
  			this.redraw();
  		}

  		return this;
  	}
  });


  // @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
  // Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
  function tileLayerWMS(url, options) {
  	return new TileLayerWMS(url, options);
  }

  TileLayer.WMS = TileLayerWMS;
  tileLayer.wms = tileLayerWMS;

  /*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */

  var Renderer = Layer.extend({

  	// @section
  	// @aka Renderer options
  	options: {
  		// @option padding: Number = 0.1
  		// How much to extend the clip area around the map view (relative to its size)
  		// e.g. 0.1 would be 10% of map view in each direction
  		padding: 0.1,

  		// @option tolerance: Number = 0
  		// How much to extend click tolerance round a path/object on the map
  		tolerance : 0
  	},

  	initialize: function (options) {
  		setOptions(this, options);
  		stamp(this);
  		this._layers = this._layers || {};
  	},

  	onAdd: function () {
  		if (!this._container) {
  			this._initContainer(); // defined by renderer implementations

  			if (this._zoomAnimated) {
  				addClass(this._container, 'leaflet-zoom-animated');
  			}
  		}

  		this.getPane().appendChild(this._container);
  		this._update();
  		this.on('update', this._updatePaths, this);
  	},

  	onRemove: function () {
  		this.off('update', this._updatePaths, this);
  		this._destroyContainer();
  	},

  	getEvents: function () {
  		var events = {
  			viewreset: this._reset,
  			zoom: this._onZoom,
  			moveend: this._update,
  			zoomend: this._onZoomEnd
  		};
  		if (this._zoomAnimated) {
  			events.zoomanim = this._onAnimZoom;
  		}
  		return events;
  	},

  	_onAnimZoom: function (ev) {
  		this._updateTransform(ev.center, ev.zoom);
  	},

  	_onZoom: function () {
  		this._updateTransform(this._map.getCenter(), this._map.getZoom());
  	},

  	_updateTransform: function (center, zoom) {
  		var scale = this._map.getZoomScale(zoom, this._zoom),
  		    position = getPosition(this._container),
  		    viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
  		    currentCenterPoint = this._map.project(this._center, zoom),
  		    destCenterPoint = this._map.project(center, zoom),
  		    centerOffset = destCenterPoint.subtract(currentCenterPoint),

  		    topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);

  		if (any3d) {
  			setTransform(this._container, topLeftOffset, scale);
  		} else {
  			setPosition(this._container, topLeftOffset);
  		}
  	},

  	_reset: function () {
  		this._update();
  		this._updateTransform(this._center, this._zoom);

  		for (var id in this._layers) {
  			this._layers[id]._reset();
  		}
  	},

  	_onZoomEnd: function () {
  		for (var id in this._layers) {
  			this._layers[id]._project();
  		}
  	},

  	_updatePaths: function () {
  		for (var id in this._layers) {
  			this._layers[id]._update();
  		}
  	},

  	_update: function () {
  		// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
  		// Subclasses are responsible of firing the 'update' event.
  		var p = this.options.padding,
  		    size = this._map.getSize(),
  		    min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

  		this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());

  		this._center = this._map.getCenter();
  		this._zoom = this._map.getZoom();
  	}
  });

  /*
   * @class Canvas
   * @inherits Renderer
   * @aka L.Canvas
   *
   * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
   * available in all web browsers, notably IE8, and overlapping geometries might
   * not display properly in some edge cases.
   *
   * @example
   *
   * Use Canvas by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.canvas()
   * });
   * ```
   *
   * Use a Canvas renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.canvas({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */

  var Canvas = Renderer.extend({
  	getEvents: function () {
  		var events = Renderer.prototype.getEvents.call(this);
  		events.viewprereset = this._onViewPreReset;
  		return events;
  	},

  	_onViewPreReset: function () {
  		// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
  		this._postponeUpdatePaths = true;
  	},

  	onAdd: function () {
  		Renderer.prototype.onAdd.call(this);

  		// Redraw vectors since canvas is cleared upon removal,
  		// in case of removing the renderer itself from the map.
  		this._draw();
  	},

  	_initContainer: function () {
  		var container = this._container = document.createElement('canvas');

  		on(container, 'mousemove', this._onMouseMove, this);
  		on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);
  		on(container, 'mouseout', this._handleMouseOut, this);

  		this._ctx = container.getContext('2d');
  	},

  	_destroyContainer: function () {
  		cancelAnimFrame(this._redrawRequest);
  		delete this._ctx;
  		remove(this._container);
  		off(this._container);
  		delete this._container;
  	},

  	_updatePaths: function () {
  		if (this._postponeUpdatePaths) { return; }

  		var layer;
  		this._redrawBounds = null;
  		for (var id in this._layers) {
  			layer = this._layers[id];
  			layer._update();
  		}
  		this._redraw();
  	},

  	_update: function () {
  		if (this._map._animatingZoom && this._bounds) { return; }

  		Renderer.prototype._update.call(this);

  		var b = this._bounds,
  		    container = this._container,
  		    size = b.getSize(),
  		    m = retina ? 2 : 1;

  		setPosition(container, b.min);

  		// set canvas size (also clearing it); use double size on retina
  		container.width = m * size.x;
  		container.height = m * size.y;
  		container.style.width = size.x + 'px';
  		container.style.height = size.y + 'px';

  		if (retina) {
  			this._ctx.scale(2, 2);
  		}

  		// translate so we use the same path coordinates after canvas element moves
  		this._ctx.translate(-b.min.x, -b.min.y);

  		// Tell paths to redraw themselves
  		this.fire('update');
  	},

  	_reset: function () {
  		Renderer.prototype._reset.call(this);

  		if (this._postponeUpdatePaths) {
  			this._postponeUpdatePaths = false;
  			this._updatePaths();
  		}
  	},

  	_initPath: function (layer) {
  		this._updateDashArray(layer);
  		this._layers[stamp(layer)] = layer;

  		var order = layer._order = {
  			layer: layer,
  			prev: this._drawLast,
  			next: null
  		};
  		if (this._drawLast) { this._drawLast.next = order; }
  		this._drawLast = order;
  		this._drawFirst = this._drawFirst || this._drawLast;
  	},

  	_addPath: function (layer) {
  		this._requestRedraw(layer);
  	},

  	_removePath: function (layer) {
  		var order = layer._order;
  		var next = order.next;
  		var prev = order.prev;

  		if (next) {
  			next.prev = prev;
  		} else {
  			this._drawLast = prev;
  		}
  		if (prev) {
  			prev.next = next;
  		} else {
  			this._drawFirst = next;
  		}

  		delete layer._order;

  		delete this._layers[stamp(layer)];

  		this._requestRedraw(layer);
  	},

  	_updatePath: function (layer) {
  		// Redraw the union of the layer's old pixel
  		// bounds and the new pixel bounds.
  		this._extendRedrawBounds(layer);
  		layer._project();
  		layer._update();
  		// The redraw will extend the redraw bounds
  		// with the new pixel bounds.
  		this._requestRedraw(layer);
  	},

  	_updateStyle: function (layer) {
  		this._updateDashArray(layer);
  		this._requestRedraw(layer);
  	},

  	_updateDashArray: function (layer) {
  		if (typeof layer.options.dashArray === 'string') {
  			var parts = layer.options.dashArray.split(/[, ]+/),
  			    dashArray = [],
  			    dashValue,
  			    i;
  			for (i = 0; i < parts.length; i++) {
  				dashValue = Number(parts[i]);
  				// Ignore dash array containing invalid lengths
  				if (isNaN(dashValue)) { return; }
  				dashArray.push(dashValue);
  			}
  			layer.options._dashArray = dashArray;
  		} else {
  			layer.options._dashArray = layer.options.dashArray;
  		}
  	},

  	_requestRedraw: function (layer) {
  		if (!this._map) { return; }

  		this._extendRedrawBounds(layer);
  		this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
  	},

  	_extendRedrawBounds: function (layer) {
  		if (layer._pxBounds) {
  			var padding = (layer.options.weight || 0) + 1;
  			this._redrawBounds = this._redrawBounds || new Bounds();
  			this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
  			this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
  		}
  	},

  	_redraw: function () {
  		this._redrawRequest = null;

  		if (this._redrawBounds) {
  			this._redrawBounds.min._floor();
  			this._redrawBounds.max._ceil();
  		}

  		this._clear(); // clear layers in redraw bounds
  		this._draw(); // draw layers

  		this._redrawBounds = null;
  	},

  	_clear: function () {
  		var bounds = this._redrawBounds;
  		if (bounds) {
  			var size = bounds.getSize();
  			this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
  		} else {
  			this._ctx.save();
  			this._ctx.setTransform(1, 0, 0, 1, 0, 0);
  			this._ctx.clearRect(0, 0, this._container.width, this._container.height);
  			this._ctx.restore();
  		}
  	},

  	_draw: function () {
  		var layer, bounds = this._redrawBounds;
  		this._ctx.save();
  		if (bounds) {
  			var size = bounds.getSize();
  			this._ctx.beginPath();
  			this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
  			this._ctx.clip();
  		}

  		this._drawing = true;

  		for (var order = this._drawFirst; order; order = order.next) {
  			layer = order.layer;
  			if (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {
  				layer._updatePath();
  			}
  		}

  		this._drawing = false;

  		this._ctx.restore();  // Restore state before clipping.
  	},

  	_updatePoly: function (layer, closed) {
  		if (!this._drawing) { return; }

  		var i, j, len2, p,
  		    parts = layer._parts,
  		    len = parts.length,
  		    ctx = this._ctx;

  		if (!len) { return; }

  		ctx.beginPath();

  		for (i = 0; i < len; i++) {
  			for (j = 0, len2 = parts[i].length; j < len2; j++) {
  				p = parts[i][j];
  				ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
  			}
  			if (closed) {
  				ctx.closePath();
  			}
  		}

  		this._fillStroke(ctx, layer);

  		// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
  	},

  	_updateCircle: function (layer) {

  		if (!this._drawing || layer._empty()) { return; }

  		var p = layer._point,
  		    ctx = this._ctx,
  		    r = Math.max(Math.round(layer._radius), 1),
  		    s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;

  		if (s !== 1) {
  			ctx.save();
  			ctx.scale(1, s);
  		}

  		ctx.beginPath();
  		ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

  		if (s !== 1) {
  			ctx.restore();
  		}

  		this._fillStroke(ctx, layer);
  	},

  	_fillStroke: function (ctx, layer) {
  		var options = layer.options;

  		if (options.fill) {
  			ctx.globalAlpha = options.fillOpacity;
  			ctx.fillStyle = options.fillColor || options.color;
  			ctx.fill(options.fillRule || 'evenodd');
  		}

  		if (options.stroke && options.weight !== 0) {
  			if (ctx.setLineDash) {
  				ctx.setLineDash(layer.options && layer.options._dashArray || []);
  			}
  			ctx.globalAlpha = options.opacity;
  			ctx.lineWidth = options.weight;
  			ctx.strokeStyle = options.color;
  			ctx.lineCap = options.lineCap;
  			ctx.lineJoin = options.lineJoin;
  			ctx.stroke();
  		}
  	},

  	// Canvas obviously doesn't have mouse events for individual drawn objects,
  	// so we emulate that by calculating what's under the mouse on mousemove/click manually

  	_onClick: function (e) {
  		var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;

  		for (var order = this._drawFirst; order; order = order.next) {
  			layer = order.layer;
  			if (layer.options.interactive && layer._containsPoint(point)) {
  				if (!(e.type === 'click' || e.type !== 'preclick') || !this._map._draggableMoved(layer)) {
  					clickedLayer = layer;
  				}
  			}
  		}
  		if (clickedLayer)  {
  			fakeStop(e);
  			this._fireEvent([clickedLayer], e);
  		}
  	},

  	_onMouseMove: function (e) {
  		if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }

  		var point = this._map.mouseEventToLayerPoint(e);
  		this._handleMouseHover(e, point);
  	},


  	_handleMouseOut: function (e) {
  		var layer = this._hoveredLayer;
  		if (layer) {
  			// if we're leaving the layer, fire mouseout
  			removeClass(this._container, 'leaflet-interactive');
  			this._fireEvent([layer], e, 'mouseout');
  			this._hoveredLayer = null;
  			this._mouseHoverThrottled = false;
  		}
  	},

  	_handleMouseHover: function (e, point) {
  		if (this._mouseHoverThrottled) {
  			return;
  		}

  		var layer, candidateHoveredLayer;

  		for (var order = this._drawFirst; order; order = order.next) {
  			layer = order.layer;
  			if (layer.options.interactive && layer._containsPoint(point)) {
  				candidateHoveredLayer = layer;
  			}
  		}

  		if (candidateHoveredLayer !== this._hoveredLayer) {
  			this._handleMouseOut(e);

  			if (candidateHoveredLayer) {
  				addClass(this._container, 'leaflet-interactive'); // change cursor
  				this._fireEvent([candidateHoveredLayer], e, 'mouseover');
  				this._hoveredLayer = candidateHoveredLayer;
  			}
  		}

  		if (this._hoveredLayer) {
  			this._fireEvent([this._hoveredLayer], e);
  		}

  		this._mouseHoverThrottled = true;
  		setTimeout(bind(function () {
  			this._mouseHoverThrottled = false;
  		}, this), 32);
  	},

  	_fireEvent: function (layers, e, type) {
  		this._map._fireDOMEvent(e, type || e.type, layers);
  	},

  	_bringToFront: function (layer) {
  		var order = layer._order;

  		if (!order) { return; }

  		var next = order.next;
  		var prev = order.prev;

  		if (next) {
  			next.prev = prev;
  		} else {
  			// Already last
  			return;
  		}
  		if (prev) {
  			prev.next = next;
  		} else if (next) {
  			// Update first entry unless this is the
  			// single entry
  			this._drawFirst = next;
  		}

  		order.prev = this._drawLast;
  		this._drawLast.next = order;

  		order.next = null;
  		this._drawLast = order;

  		this._requestRedraw(layer);
  	},

  	_bringToBack: function (layer) {
  		var order = layer._order;

  		if (!order) { return; }

  		var next = order.next;
  		var prev = order.prev;

  		if (prev) {
  			prev.next = next;
  		} else {
  			// Already first
  			return;
  		}
  		if (next) {
  			next.prev = prev;
  		} else if (prev) {
  			// Update last entry unless this is the
  			// single entry
  			this._drawLast = prev;
  		}

  		order.prev = null;

  		order.next = this._drawFirst;
  		this._drawFirst.prev = order;
  		this._drawFirst = order;

  		this._requestRedraw(layer);
  	}
  });

  // @factory L.canvas(options?: Renderer options)
  // Creates a Canvas renderer with the given options.
  function canvas$1(options) {
  	return canvas ? new Canvas(options) : null;
  }

  /*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */


  var vmlCreate = (function () {
  	try {
  		document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
  		return function (name) {
  			return document.createElement('<lvml:' + name + ' class="lvml">');
  		};
  	} catch (e) {
  		return function (name) {
  			return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
  		};
  	}
  })();


  /*
   * @class SVG
   *
   *
   * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
   * with old versions of Internet Explorer.
   */

  // mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
  var vmlMixin = {

  	_initContainer: function () {
  		this._container = create$1('div', 'leaflet-vml-container');
  	},

  	_update: function () {
  		if (this._map._animatingZoom) { return; }
  		Renderer.prototype._update.call(this);
  		this.fire('update');
  	},

  	_initPath: function (layer) {
  		var container = layer._container = vmlCreate('shape');

  		addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));

  		container.coordsize = '1 1';

  		layer._path = vmlCreate('path');
  		container.appendChild(layer._path);

  		this._updateStyle(layer);
  		this._layers[stamp(layer)] = layer;
  	},

  	_addPath: function (layer) {
  		var container = layer._container;
  		this._container.appendChild(container);

  		if (layer.options.interactive) {
  			layer.addInteractiveTarget(container);
  		}
  	},

  	_removePath: function (layer) {
  		var container = layer._container;
  		remove(container);
  		layer.removeInteractiveTarget(container);
  		delete this._layers[stamp(layer)];
  	},

  	_updateStyle: function (layer) {
  		var stroke = layer._stroke,
  		    fill = layer._fill,
  		    options = layer.options,
  		    container = layer._container;

  		container.stroked = !!options.stroke;
  		container.filled = !!options.fill;

  		if (options.stroke) {
  			if (!stroke) {
  				stroke = layer._stroke = vmlCreate('stroke');
  			}
  			container.appendChild(stroke);
  			stroke.weight = options.weight + 'px';
  			stroke.color = options.color;
  			stroke.opacity = options.opacity;

  			if (options.dashArray) {
  				stroke.dashStyle = isArray(options.dashArray) ?
  				    options.dashArray.join(' ') :
  				    options.dashArray.replace(/( *, *)/g, ' ');
  			} else {
  				stroke.dashStyle = '';
  			}
  			stroke.endcap = options.lineCap.replace('butt', 'flat');
  			stroke.joinstyle = options.lineJoin;

  		} else if (stroke) {
  			container.removeChild(stroke);
  			layer._stroke = null;
  		}

  		if (options.fill) {
  			if (!fill) {
  				fill = layer._fill = vmlCreate('fill');
  			}
  			container.appendChild(fill);
  			fill.color = options.fillColor || options.color;
  			fill.opacity = options.fillOpacity;

  		} else if (fill) {
  			container.removeChild(fill);
  			layer._fill = null;
  		}
  	},

  	_updateCircle: function (layer) {
  		var p = layer._point.round(),
  		    r = Math.round(layer._radius),
  		    r2 = Math.round(layer._radiusY || r);

  		this._setPath(layer, layer._empty() ? 'M0 0' :
  			'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));
  	},

  	_setPath: function (layer, path) {
  		layer._path.v = path;
  	},

  	_bringToFront: function (layer) {
  		toFront(layer._container);
  	},

  	_bringToBack: function (layer) {
  		toBack(layer._container);
  	}
  };

  var create$2 = vml ? vmlCreate : svgCreate;

  /*
   * @class SVG
   * @inherits Renderer
   * @aka L.SVG
   *
   * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not
   * available in all web browsers, notably Android 2.x and 3.x.
   *
   * Although SVG is not available on IE7 and IE8, these browsers support
   * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
   * (a now deprecated technology), and the SVG renderer will fall back to VML in
   * this case.
   *
   * @example
   *
   * Use SVG by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.svg()
   * });
   * ```
   *
   * Use a SVG renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.svg({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */

  var SVG = Renderer.extend({

  	getEvents: function () {
  		var events = Renderer.prototype.getEvents.call(this);
  		events.zoomstart = this._onZoomStart;
  		return events;
  	},

  	_initContainer: function () {
  		this._container = create$2('svg');

  		// makes it possible to click through svg root; we'll reset it back in individual paths
  		this._container.setAttribute('pointer-events', 'none');

  		this._rootGroup = create$2('g');
  		this._container.appendChild(this._rootGroup);
  	},

  	_destroyContainer: function () {
  		remove(this._container);
  		off(this._container);
  		delete this._container;
  		delete this._rootGroup;
  		delete this._svgSize;
  	},

  	_onZoomStart: function () {
  		// Drag-then-pinch interactions might mess up the center and zoom.
  		// In this case, the easiest way to prevent this is re-do the renderer
  		//   bounds and padding when the zooming starts.
  		this._update();
  	},

  	_update: function () {
  		if (this._map._animatingZoom && this._bounds) { return; }

  		Renderer.prototype._update.call(this);

  		var b = this._bounds,
  		    size = b.getSize(),
  		    container = this._container;

  		// set size of svg-container if changed
  		if (!this._svgSize || !this._svgSize.equals(size)) {
  			this._svgSize = size;
  			container.setAttribute('width', size.x);
  			container.setAttribute('height', size.y);
  		}

  		// movement: update container viewBox so that we don't have to change coordinates of individual layers
  		setPosition(container, b.min);
  		container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));

  		this.fire('update');
  	},

  	// methods below are called by vector layers implementations

  	_initPath: function (layer) {
  		var path = layer._path = create$2('path');

  		// @namespace Path
  		// @option className: String = null
  		// Custom class name set on an element. Only for SVG renderer.
  		if (layer.options.className) {
  			addClass(path, layer.options.className);
  		}

  		if (layer.options.interactive) {
  			addClass(path, 'leaflet-interactive');
  		}

  		this._updateStyle(layer);
  		this._layers[stamp(layer)] = layer;
  	},

  	_addPath: function (layer) {
  		if (!this._rootGroup) { this._initContainer(); }
  		this._rootGroup.appendChild(layer._path);
  		layer.addInteractiveTarget(layer._path);
  	},

  	_removePath: function (layer) {
  		remove(layer._path);
  		layer.removeInteractiveTarget(layer._path);
  		delete this._layers[stamp(layer)];
  	},

  	_updatePath: function (layer) {
  		layer._project();
  		layer._update();
  	},

  	_updateStyle: function (layer) {
  		var path = layer._path,
  		    options = layer.options;

  		if (!path) { return; }

  		if (options.stroke) {
  			path.setAttribute('stroke', options.color);
  			path.setAttribute('stroke-opacity', options.opacity);
  			path.setAttribute('stroke-width', options.weight);
  			path.setAttribute('stroke-linecap', options.lineCap);
  			path.setAttribute('stroke-linejoin', options.lineJoin);

  			if (options.dashArray) {
  				path.setAttribute('stroke-dasharray', options.dashArray);
  			} else {
  				path.removeAttribute('stroke-dasharray');
  			}

  			if (options.dashOffset) {
  				path.setAttribute('stroke-dashoffset', options.dashOffset);
  			} else {
  				path.removeAttribute('stroke-dashoffset');
  			}
  		} else {
  			path.setAttribute('stroke', 'none');
  		}

  		if (options.fill) {
  			path.setAttribute('fill', options.fillColor || options.color);
  			path.setAttribute('fill-opacity', options.fillOpacity);
  			path.setAttribute('fill-rule', options.fillRule || 'evenodd');
  		} else {
  			path.setAttribute('fill', 'none');
  		}
  	},

  	_updatePoly: function (layer, closed) {
  		this._setPath(layer, pointsToPath(layer._parts, closed));
  	},

  	_updateCircle: function (layer) {
  		var p = layer._point,
  		    r = Math.max(Math.round(layer._radius), 1),
  		    r2 = Math.max(Math.round(layer._radiusY), 1) || r,
  		    arc = 'a' + r + ',' + r2 + ' 0 1,0 ';

  		// drawing a circle with two half-arcs
  		var d = layer._empty() ? 'M0 0' :
  			'M' + (p.x - r) + ',' + p.y +
  			arc + (r * 2) + ',0 ' +
  			arc + (-r * 2) + ',0 ';

  		this._setPath(layer, d);
  	},

  	_setPath: function (layer, path) {
  		layer._path.setAttribute('d', path);
  	},

  	// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
  	_bringToFront: function (layer) {
  		toFront(layer._path);
  	},

  	_bringToBack: function (layer) {
  		toBack(layer._path);
  	}
  });

  if (vml) {
  	SVG.include(vmlMixin);
  }

  // @namespace SVG
  // @factory L.svg(options?: Renderer options)
  // Creates a SVG renderer with the given options.
  function svg$1(options) {
  	return svg || vml ? new SVG(options) : null;
  }

  Map.include({
  	// @namespace Map; @method getRenderer(layer: Path): Renderer
  	// Returns the instance of `Renderer` that should be used to render the given
  	// `Path`. It will ensure that the `renderer` options of the map and paths
  	// are respected, and that the renderers do exist on the map.
  	getRenderer: function (layer) {
  		// @namespace Path; @option renderer: Renderer
  		// Use this specific instance of `Renderer` for this path. Takes
  		// precedence over the map's [default renderer](#map-renderer).
  		var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

  		if (!renderer) {
  			renderer = this._renderer = this._createRenderer();
  		}

  		if (!this.hasLayer(renderer)) {
  			this.addLayer(renderer);
  		}
  		return renderer;
  	},

  	_getPaneRenderer: function (name) {
  		if (name === 'overlayPane' || name === undefined) {
  			return false;
  		}

  		var renderer = this._paneRenderers[name];
  		if (renderer === undefined) {
  			renderer = this._createRenderer({pane: name});
  			this._paneRenderers[name] = renderer;
  		}
  		return renderer;
  	},

  	_createRenderer: function (options) {
  		// @namespace Map; @option preferCanvas: Boolean = false
  		// Whether `Path`s should be rendered on a `Canvas` renderer.
  		// By default, all `Path`s are rendered in a `SVG` renderer.
  		return (this.options.preferCanvas && canvas$1(options)) || svg$1(options);
  	}
  });

  /*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   */

  /*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */


  var Rectangle = Polygon.extend({
  	initialize: function (latLngBounds, options) {
  		Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
  	},

  	// @method setBounds(latLngBounds: LatLngBounds): this
  	// Redraws the rectangle with the passed bounds.
  	setBounds: function (latLngBounds) {
  		return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
  	},

  	_boundsToLatLngs: function (latLngBounds) {
  		latLngBounds = toLatLngBounds(latLngBounds);
  		return [
  			latLngBounds.getSouthWest(),
  			latLngBounds.getNorthWest(),
  			latLngBounds.getNorthEast(),
  			latLngBounds.getSouthEast()
  		];
  	}
  });


  // @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
  function rectangle(latLngBounds, options) {
  	return new Rectangle(latLngBounds, options);
  }

  SVG.create = create$2;
  SVG.pointsToPath = pointsToPath;

  GeoJSON.geometryToLayer = geometryToLayer;
  GeoJSON.coordsToLatLng = coordsToLatLng;
  GeoJSON.coordsToLatLngs = coordsToLatLngs;
  GeoJSON.latLngToCoords = latLngToCoords;
  GeoJSON.latLngsToCoords = latLngsToCoords;
  GeoJSON.getFeature = getFeature;
  GeoJSON.asFeature = asFeature;

  /*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @option boxZoom: Boolean = true
  	// Whether the map can be zoomed to a rectangular area specified by
  	// dragging the mouse while pressing the shift key.
  	boxZoom: true
  });

  var BoxZoom = Handler.extend({
  	initialize: function (map) {
  		this._map = map;
  		this._container = map._container;
  		this._pane = map._panes.overlayPane;
  		this._resetStateTimeout = 0;
  		map.on('unload', this._destroy, this);
  	},

  	addHooks: function () {
  		on(this._container, 'mousedown', this._onMouseDown, this);
  	},

  	removeHooks: function () {
  		off(this._container, 'mousedown', this._onMouseDown, this);
  	},

  	moved: function () {
  		return this._moved;
  	},

  	_destroy: function () {
  		remove(this._pane);
  		delete this._pane;
  	},

  	_resetState: function () {
  		this._resetStateTimeout = 0;
  		this._moved = false;
  	},

  	_clearDeferredResetState: function () {
  		if (this._resetStateTimeout !== 0) {
  			clearTimeout(this._resetStateTimeout);
  			this._resetStateTimeout = 0;
  		}
  	},

  	_onMouseDown: function (e) {
  		if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

  		// Clear the deferred resetState if it hasn't executed yet, otherwise it
  		// will interrupt the interaction and orphan a box element in the container.
  		this._clearDeferredResetState();
  		this._resetState();

  		disableTextSelection();
  		disableImageDrag();

  		this._startPoint = this._map.mouseEventToContainerPoint(e);

  		on(document, {
  			contextmenu: stop,
  			mousemove: this._onMouseMove,
  			mouseup: this._onMouseUp,
  			keydown: this._onKeyDown
  		}, this);
  	},

  	_onMouseMove: function (e) {
  		if (!this._moved) {
  			this._moved = true;

  			this._box = create$1('div', 'leaflet-zoom-box', this._container);
  			addClass(this._container, 'leaflet-crosshair');

  			this._map.fire('boxzoomstart');
  		}

  		this._point = this._map.mouseEventToContainerPoint(e);

  		var bounds = new Bounds(this._point, this._startPoint),
  		    size = bounds.getSize();

  		setPosition(this._box, bounds.min);

  		this._box.style.width  = size.x + 'px';
  		this._box.style.height = size.y + 'px';
  	},

  	_finish: function () {
  		if (this._moved) {
  			remove(this._box);
  			removeClass(this._container, 'leaflet-crosshair');
  		}

  		enableTextSelection();
  		enableImageDrag();

  		off(document, {
  			contextmenu: stop,
  			mousemove: this._onMouseMove,
  			mouseup: this._onMouseUp,
  			keydown: this._onKeyDown
  		}, this);
  	},

  	_onMouseUp: function (e) {
  		if ((e.which !== 1) && (e.button !== 1)) { return; }

  		this._finish();

  		if (!this._moved) { return; }
  		// Postpone to next JS tick so internal click event handling
  		// still see it as "moved".
  		this._clearDeferredResetState();
  		this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);

  		var bounds = new LatLngBounds(
  		        this._map.containerPointToLatLng(this._startPoint),
  		        this._map.containerPointToLatLng(this._point));

  		this._map
  			.fitBounds(bounds)
  			.fire('boxzoomend', {boxZoomBounds: bounds});
  	},

  	_onKeyDown: function (e) {
  		if (e.keyCode === 27) {
  			this._finish();
  		}
  	}
  });

  // @section Handlers
  // @property boxZoom: Handler
  // Box (shift-drag with mouse) zoom handler.
  Map.addInitHook('addHandler', 'boxZoom', BoxZoom);

  /*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */

  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
  	// @option doubleClickZoom: Boolean|String = true
  	// Whether the map can be zoomed in by double clicking on it and
  	// zoomed out by double clicking while holding shift. If passed
  	// `'center'`, double-click zoom will zoom to the center of the
  	//  view regardless of where the mouse was.
  	doubleClickZoom: true
  });

  var DoubleClickZoom = Handler.extend({
  	addHooks: function () {
  		this._map.on('dblclick', this._onDoubleClick, this);
  	},

  	removeHooks: function () {
  		this._map.off('dblclick', this._onDoubleClick, this);
  	},

  	_onDoubleClick: function (e) {
  		var map = this._map,
  		    oldZoom = map.getZoom(),
  		    delta = map.options.zoomDelta,
  		    zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;

  		if (map.options.doubleClickZoom === 'center') {
  			map.setZoom(zoom);
  		} else {
  			map.setZoomAround(e.containerPoint, zoom);
  		}
  	}
  });

  // @section Handlers
  //
  // Map properties include interaction handlers that allow you to control
  // interaction behavior in runtime, enabling or disabling certain features such
  // as dragging or touch zoom (see `Handler` methods). For example:
  //
  // ```js
  // map.doubleClickZoom.disable();
  // ```
  //
  // @property doubleClickZoom: Handler
  // Double click zoom handler.
  Map.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);

  /*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @option dragging: Boolean = true
  	// Whether the map be draggable with mouse/touch or not.
  	dragging: true,

  	// @section Panning Inertia Options
  	// @option inertia: Boolean = *
  	// If enabled, panning of the map will have an inertia effect where
  	// the map builds momentum while dragging and continues moving in
  	// the same direction for some time. Feels especially nice on touch
  	// devices. Enabled by default unless running on old Android devices.
  	inertia: !android23,

  	// @option inertiaDeceleration: Number = 3000
  	// The rate with which the inertial movement slows down, in pixels/second².
  	inertiaDeceleration: 3400, // px/s^2

  	// @option inertiaMaxSpeed: Number = Infinity
  	// Max speed of the inertial movement, in pixels/second.
  	inertiaMaxSpeed: Infinity, // px/s

  	// @option easeLinearity: Number = 0.2
  	easeLinearity: 0.2,

  	// TODO refactor, move to CRS
  	// @option worldCopyJump: Boolean = false
  	// With this option enabled, the map tracks when you pan to another "copy"
  	// of the world and seamlessly jumps to the original one so that all overlays
  	// like markers and vector layers are still visible.
  	worldCopyJump: false,

  	// @option maxBoundsViscosity: Number = 0.0
  	// If `maxBounds` is set, this option will control how solid the bounds
  	// are when dragging the map around. The default value of `0.0` allows the
  	// user to drag outside the bounds at normal speed, higher values will
  	// slow down map dragging outside bounds, and `1.0` makes the bounds fully
  	// solid, preventing the user from dragging outside the bounds.
  	maxBoundsViscosity: 0.0
  });

  var Drag = Handler.extend({
  	addHooks: function () {
  		if (!this._draggable) {
  			var map = this._map;

  			this._draggable = new Draggable(map._mapPane, map._container);

  			this._draggable.on({
  				dragstart: this._onDragStart,
  				drag: this._onDrag,
  				dragend: this._onDragEnd
  			}, this);

  			this._draggable.on('predrag', this._onPreDragLimit, this);
  			if (map.options.worldCopyJump) {
  				this._draggable.on('predrag', this._onPreDragWrap, this);
  				map.on('zoomend', this._onZoomEnd, this);

  				map.whenReady(this._onZoomEnd, this);
  			}
  		}
  		addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');
  		this._draggable.enable();
  		this._positions = [];
  		this._times = [];
  	},

  	removeHooks: function () {
  		removeClass(this._map._container, 'leaflet-grab');
  		removeClass(this._map._container, 'leaflet-touch-drag');
  		this._draggable.disable();
  	},

  	moved: function () {
  		return this._draggable && this._draggable._moved;
  	},

  	moving: function () {
  		return this._draggable && this._draggable._moving;
  	},

  	_onDragStart: function () {
  		var map = this._map;

  		map._stop();
  		if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
  			var bounds = toLatLngBounds(this._map.options.maxBounds);

  			this._offsetLimit = toBounds(
  				this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
  				this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1)
  					.add(this._map.getSize()));

  			this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
  		} else {
  			this._offsetLimit = null;
  		}

  		map
  		    .fire('movestart')
  		    .fire('dragstart');

  		if (map.options.inertia) {
  			this._positions = [];
  			this._times = [];
  		}
  	},

  	_onDrag: function (e) {
  		if (this._map.options.inertia) {
  			var time = this._lastTime = +new Date(),
  			    pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

  			this._positions.push(pos);
  			this._times.push(time);

  			this._prunePositions(time);
  		}

  		this._map
  		    .fire('move', e)
  		    .fire('drag', e);
  	},

  	_prunePositions: function (time) {
  		while (this._positions.length > 1 && time - this._times[0] > 50) {
  			this._positions.shift();
  			this._times.shift();
  		}
  	},

  	_onZoomEnd: function () {
  		var pxCenter = this._map.getSize().divideBy(2),
  		    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

  		this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
  		this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
  	},

  	_viscousLimit: function (value, threshold) {
  		return value - (value - threshold) * this._viscosity;
  	},

  	_onPreDragLimit: function () {
  		if (!this._viscosity || !this._offsetLimit) { return; }

  		var offset = this._draggable._newPos.subtract(this._draggable._startPos);

  		var limit = this._offsetLimit;
  		if (offset.x < limit.min.x) { offset.x = this._viscousLimit(offset.x, limit.min.x); }
  		if (offset.y < limit.min.y) { offset.y = this._viscousLimit(offset.y, limit.min.y); }
  		if (offset.x > limit.max.x) { offset.x = this._viscousLimit(offset.x, limit.max.x); }
  		if (offset.y > limit.max.y) { offset.y = this._viscousLimit(offset.y, limit.max.y); }

  		this._draggable._newPos = this._draggable._startPos.add(offset);
  	},

  	_onPreDragWrap: function () {
  		// TODO refactor to be able to adjust map pane position after zoom
  		var worldWidth = this._worldWidth,
  		    halfWidth = Math.round(worldWidth / 2),
  		    dx = this._initialWorldOffset,
  		    x = this._draggable._newPos.x,
  		    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
  		    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
  		    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

  		this._draggable._absPos = this._draggable._newPos.clone();
  		this._draggable._newPos.x = newX;
  	},

  	_onDragEnd: function (e) {
  		var map = this._map,
  		    options = map.options,

  		    noInertia = !options.inertia || this._times.length < 2;

  		map.fire('dragend', e);

  		if (noInertia) {
  			map.fire('moveend');

  		} else {
  			this._prunePositions(+new Date());

  			var direction = this._lastPos.subtract(this._positions[0]),
  			    duration = (this._lastTime - this._times[0]) / 1000,
  			    ease = options.easeLinearity,

  			    speedVector = direction.multiplyBy(ease / duration),
  			    speed = speedVector.distanceTo([0, 0]),

  			    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
  			    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

  			    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
  			    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

  			if (!offset.x && !offset.y) {
  				map.fire('moveend');

  			} else {
  				offset = map._limitOffset(offset, map.options.maxBounds);

  				requestAnimFrame(function () {
  					map.panBy(offset, {
  						duration: decelerationDuration,
  						easeLinearity: ease,
  						noMoveStart: true,
  						animate: true
  					});
  				});
  			}
  		}
  	}
  });

  // @section Handlers
  // @property dragging: Handler
  // Map dragging handler (by both mouse and touch).
  Map.addInitHook('addHandler', 'dragging', Drag);

  /*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */

  // @namespace Map
  // @section Keyboard Navigation Options
  Map.mergeOptions({
  	// @option keyboard: Boolean = true
  	// Makes the map focusable and allows users to navigate the map with keyboard
  	// arrows and `+`/`-` keys.
  	keyboard: true,

  	// @option keyboardPanDelta: Number = 80
  	// Amount of pixels to pan when pressing an arrow key.
  	keyboardPanDelta: 80
  });

  var Keyboard = Handler.extend({

  	keyCodes: {
  		left:    [37],
  		right:   [39],
  		down:    [40],
  		up:      [38],
  		zoomIn:  [187, 107, 61, 171],
  		zoomOut: [189, 109, 54, 173]
  	},

  	initialize: function (map) {
  		this._map = map;

  		this._setPanDelta(map.options.keyboardPanDelta);
  		this._setZoomDelta(map.options.zoomDelta);
  	},

  	addHooks: function () {
  		var container = this._map._container;

  		// make the container focusable by tabbing
  		if (container.tabIndex <= 0) {
  			container.tabIndex = '0';
  		}

  		on(container, {
  			focus: this._onFocus,
  			blur: this._onBlur,
  			mousedown: this._onMouseDown
  		}, this);

  		this._map.on({
  			focus: this._addHooks,
  			blur: this._removeHooks
  		}, this);
  	},

  	removeHooks: function () {
  		this._removeHooks();

  		off(this._map._container, {
  			focus: this._onFocus,
  			blur: this._onBlur,
  			mousedown: this._onMouseDown
  		}, this);

  		this._map.off({
  			focus: this._addHooks,
  			blur: this._removeHooks
  		}, this);
  	},

  	_onMouseDown: function () {
  		if (this._focused) { return; }

  		var body = document.body,
  		    docEl = document.documentElement,
  		    top = body.scrollTop || docEl.scrollTop,
  		    left = body.scrollLeft || docEl.scrollLeft;

  		this._map._container.focus();

  		window.scrollTo(left, top);
  	},

  	_onFocus: function () {
  		this._focused = true;
  		this._map.fire('focus');
  	},

  	_onBlur: function () {
  		this._focused = false;
  		this._map.fire('blur');
  	},

  	_setPanDelta: function (panDelta) {
  		var keys = this._panKeys = {},
  		    codes = this.keyCodes,
  		    i, len;

  		for (i = 0, len = codes.left.length; i < len; i++) {
  			keys[codes.left[i]] = [-1 * panDelta, 0];
  		}
  		for (i = 0, len = codes.right.length; i < len; i++) {
  			keys[codes.right[i]] = [panDelta, 0];
  		}
  		for (i = 0, len = codes.down.length; i < len; i++) {
  			keys[codes.down[i]] = [0, panDelta];
  		}
  		for (i = 0, len = codes.up.length; i < len; i++) {
  			keys[codes.up[i]] = [0, -1 * panDelta];
  		}
  	},

  	_setZoomDelta: function (zoomDelta) {
  		var keys = this._zoomKeys = {},
  		    codes = this.keyCodes,
  		    i, len;

  		for (i = 0, len = codes.zoomIn.length; i < len; i++) {
  			keys[codes.zoomIn[i]] = zoomDelta;
  		}
  		for (i = 0, len = codes.zoomOut.length; i < len; i++) {
  			keys[codes.zoomOut[i]] = -zoomDelta;
  		}
  	},

  	_addHooks: function () {
  		on(document, 'keydown', this._onKeyDown, this);
  	},

  	_removeHooks: function () {
  		off(document, 'keydown', this._onKeyDown, this);
  	},

  	_onKeyDown: function (e) {
  		if (e.altKey || e.ctrlKey || e.metaKey) { return; }

  		var key = e.keyCode,
  		    map = this._map,
  		    offset;

  		if (key in this._panKeys) {
  			if (!map._panAnim || !map._panAnim._inProgress) {
  				offset = this._panKeys[key];
  				if (e.shiftKey) {
  					offset = toPoint(offset).multiplyBy(3);
  				}

  				map.panBy(offset);

  				if (map.options.maxBounds) {
  					map.panInsideBounds(map.options.maxBounds);
  				}
  			}
  		} else if (key in this._zoomKeys) {
  			map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);

  		} else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {
  			map.closePopup();

  		} else {
  			return;
  		}

  		stop(e);
  	}
  });

  // @section Handlers
  // @section Handlers
  // @property keyboard: Handler
  // Keyboard navigation handler.
  Map.addInitHook('addHandler', 'keyboard', Keyboard);

  /*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @section Mouse wheel options
  	// @option scrollWheelZoom: Boolean|String = true
  	// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
  	// it will zoom to the center of the view regardless of where the mouse was.
  	scrollWheelZoom: true,

  	// @option wheelDebounceTime: Number = 40
  	// Limits the rate at which a wheel can fire (in milliseconds). By default
  	// user can't zoom via wheel more often than once per 40 ms.
  	wheelDebounceTime: 40,

  	// @option wheelPxPerZoomLevel: Number = 60
  	// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
  	// mean a change of one full zoom level. Smaller values will make wheel-zooming
  	// faster (and vice versa).
  	wheelPxPerZoomLevel: 60
  });

  var ScrollWheelZoom = Handler.extend({
  	addHooks: function () {
  		on(this._map._container, 'wheel', this._onWheelScroll, this);

  		this._delta = 0;
  	},

  	removeHooks: function () {
  		off(this._map._container, 'wheel', this._onWheelScroll, this);
  	},

  	_onWheelScroll: function (e) {
  		var delta = getWheelDelta(e);

  		var debounce = this._map.options.wheelDebounceTime;

  		this._delta += delta;
  		this._lastMousePos = this._map.mouseEventToContainerPoint(e);

  		if (!this._startTime) {
  			this._startTime = +new Date();
  		}

  		var left = Math.max(debounce - (+new Date() - this._startTime), 0);

  		clearTimeout(this._timer);
  		this._timer = setTimeout(bind(this._performZoom, this), left);

  		stop(e);
  	},

  	_performZoom: function () {
  		var map = this._map,
  		    zoom = map.getZoom(),
  		    snap = this._map.options.zoomSnap || 0;

  		map._stop(); // stop panning and fly animations if any

  		// map the delta with a sigmoid function to -4..4 range leaning on -1..1
  		var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
  		    d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
  		    d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
  		    delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;

  		this._delta = 0;
  		this._startTime = null;

  		if (!delta) { return; }

  		if (map.options.scrollWheelZoom === 'center') {
  			map.setZoom(zoom + delta);
  		} else {
  			map.setZoomAround(this._lastMousePos, zoom + delta);
  		}
  	}
  });

  // @section Handlers
  // @property scrollWheelZoom: Handler
  // Scroll wheel zoom handler.
  Map.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);

  /*
   * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @section Touch interaction options
  	// @option tap: Boolean = true
  	// Enables mobile hacks for supporting instant taps (fixing 200ms click
  	// delay on iOS/Android) and touch holds (fired as `contextmenu` events).
  	tap: true,

  	// @option tapTolerance: Number = 15
  	// The max number of pixels a user can shift his finger during touch
  	// for it to be considered a valid tap.
  	tapTolerance: 15
  });

  var Tap = Handler.extend({
  	addHooks: function () {
  		on(this._map._container, 'touchstart', this._onDown, this);
  	},

  	removeHooks: function () {
  		off(this._map._container, 'touchstart', this._onDown, this);
  	},

  	_onDown: function (e) {
  		if (!e.touches) { return; }

  		preventDefault(e);

  		this._fireClick = true;

  		// don't simulate click or track longpress if more than 1 touch
  		if (e.touches.length > 1) {
  			this._fireClick = false;
  			clearTimeout(this._holdTimeout);
  			return;
  		}

  		var first = e.touches[0],
  		    el = first.target;

  		this._startPos = this._newPos = new Point(first.clientX, first.clientY);

  		// if touching a link, highlight it
  		if (el.tagName && el.tagName.toLowerCase() === 'a') {
  			addClass(el, 'leaflet-active');
  		}

  		// simulate long hold but setting a timeout
  		this._holdTimeout = setTimeout(bind(function () {
  			if (this._isTapValid()) {
  				this._fireClick = false;
  				this._onUp();
  				this._simulateEvent('contextmenu', first);
  			}
  		}, this), 1000);

  		this._simulateEvent('mousedown', first);

  		on(document, {
  			touchmove: this._onMove,
  			touchend: this._onUp
  		}, this);
  	},

  	_onUp: function (e) {
  		clearTimeout(this._holdTimeout);

  		off(document, {
  			touchmove: this._onMove,
  			touchend: this._onUp
  		}, this);

  		if (this._fireClick && e && e.changedTouches) {

  			var first = e.changedTouches[0],
  			    el = first.target;

  			if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
  				removeClass(el, 'leaflet-active');
  			}

  			this._simulateEvent('mouseup', first);

  			// simulate click if the touch didn't move too much
  			if (this._isTapValid()) {
  				this._simulateEvent('click', first);
  			}
  		}
  	},

  	_isTapValid: function () {
  		return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
  	},

  	_onMove: function (e) {
  		var first = e.touches[0];
  		this._newPos = new Point(first.clientX, first.clientY);
  		this._simulateEvent('mousemove', first);
  	},

  	_simulateEvent: function (type, e) {
  		var simulatedEvent = document.createEvent('MouseEvents');

  		simulatedEvent._simulated = true;
  		e.target._simulatedClick = true;

  		simulatedEvent.initMouseEvent(
  		        type, true, true, window, 1,
  		        e.screenX, e.screenY,
  		        e.clientX, e.clientY,
  		        false, false, false, false, 0, null);

  		e.target.dispatchEvent(simulatedEvent);
  	}
  });

  // @section Handlers
  // @property tap: Handler
  // Mobile touch hacks (quick tap and touch hold) handler.
  if (touch && (!pointer || safari)) {
  	Map.addInitHook('addHandler', 'tap', Tap);
  }

  /*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @section Touch interaction options
  	// @option touchZoom: Boolean|String = *
  	// Whether the map can be zoomed by touch-dragging with two fingers. If
  	// passed `'center'`, it will zoom to the center of the view regardless of
  	// where the touch events (fingers) were. Enabled for touch-capable web
  	// browsers except for old Androids.
  	touchZoom: touch && !android23,

  	// @option bounceAtZoomLimits: Boolean = true
  	// Set it to false if you don't want the map to zoom beyond min/max zoom
  	// and then bounce back when pinch-zooming.
  	bounceAtZoomLimits: true
  });

  var TouchZoom = Handler.extend({
  	addHooks: function () {
  		addClass(this._map._container, 'leaflet-touch-zoom');
  		on(this._map._container, 'touchstart', this._onTouchStart, this);
  	},

  	removeHooks: function () {
  		removeClass(this._map._container, 'leaflet-touch-zoom');
  		off(this._map._container, 'touchstart', this._onTouchStart, this);
  	},

  	_onTouchStart: function (e) {
  		var map = this._map;
  		if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

  		var p1 = map.mouseEventToContainerPoint(e.touches[0]),
  		    p2 = map.mouseEventToContainerPoint(e.touches[1]);

  		this._centerPoint = map.getSize()._divideBy(2);
  		this._startLatLng = map.containerPointToLatLng(this._centerPoint);
  		if (map.options.touchZoom !== 'center') {
  			this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
  		}

  		this._startDist = p1.distanceTo(p2);
  		this._startZoom = map.getZoom();

  		this._moved = false;
  		this._zooming = true;

  		map._stop();

  		on(document, 'touchmove', this._onTouchMove, this);
  		on(document, 'touchend', this._onTouchEnd, this);

  		preventDefault(e);
  	},

  	_onTouchMove: function (e) {
  		if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

  		var map = this._map,
  		    p1 = map.mouseEventToContainerPoint(e.touches[0]),
  		    p2 = map.mouseEventToContainerPoint(e.touches[1]),
  		    scale = p1.distanceTo(p2) / this._startDist;

  		this._zoom = map.getScaleZoom(scale, this._startZoom);

  		if (!map.options.bounceAtZoomLimits && (
  			(this._zoom < map.getMinZoom() && scale < 1) ||
  			(this._zoom > map.getMaxZoom() && scale > 1))) {
  			this._zoom = map._limitZoom(this._zoom);
  		}

  		if (map.options.touchZoom === 'center') {
  			this._center = this._startLatLng;
  			if (scale === 1) { return; }
  		} else {
  			// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
  			var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
  			if (scale === 1 && delta.x === 0 && delta.y === 0) { return; }
  			this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
  		}

  		if (!this._moved) {
  			map._moveStart(true, false);
  			this._moved = true;
  		}

  		cancelAnimFrame(this._animRequest);

  		var moveFn = bind(map._move, map, this._center, this._zoom, {pinch: true, round: false});
  		this._animRequest = requestAnimFrame(moveFn, this, true);

  		preventDefault(e);
  	},

  	_onTouchEnd: function () {
  		if (!this._moved || !this._zooming) {
  			this._zooming = false;
  			return;
  		}

  		this._zooming = false;
  		cancelAnimFrame(this._animRequest);

  		off(document, 'touchmove', this._onTouchMove, this);
  		off(document, 'touchend', this._onTouchEnd, this);

  		// Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
  		if (this._map.options.zoomAnimation) {
  			this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
  		} else {
  			this._map._resetView(this._center, this._map._limitZoom(this._zoom));
  		}
  	}
  });

  // @section Handlers
  // @property touchZoom: Handler
  // Touch zoom handler.
  Map.addInitHook('addHandler', 'touchZoom', TouchZoom);

  Map.BoxZoom = BoxZoom;
  Map.DoubleClickZoom = DoubleClickZoom;
  Map.Drag = Drag;
  Map.Keyboard = Keyboard;
  Map.ScrollWheelZoom = ScrollWheelZoom;
  Map.Tap = Tap;
  Map.TouchZoom = TouchZoom;

  exports.version = version;
  exports.Control = Control;
  exports.control = control;
  exports.Browser = Browser;
  exports.Evented = Evented;
  exports.Mixin = Mixin;
  exports.Util = Util;
  exports.Class = Class;
  exports.Handler = Handler;
  exports.extend = extend;
  exports.bind = bind;
  exports.stamp = stamp;
  exports.setOptions = setOptions;
  exports.DomEvent = DomEvent;
  exports.DomUtil = DomUtil;
  exports.PosAnimation = PosAnimation;
  exports.Draggable = Draggable;
  exports.LineUtil = LineUtil;
  exports.PolyUtil = PolyUtil;
  exports.Point = Point;
  exports.point = toPoint;
  exports.Bounds = Bounds;
  exports.bounds = toBounds;
  exports.Transformation = Transformation;
  exports.transformation = toTransformation;
  exports.Projection = index;
  exports.LatLng = LatLng;
  exports.latLng = toLatLng;
  exports.LatLngBounds = LatLngBounds;
  exports.latLngBounds = toLatLngBounds;
  exports.CRS = CRS;
  exports.GeoJSON = GeoJSON;
  exports.geoJSON = geoJSON;
  exports.geoJson = geoJson;
  exports.Layer = Layer;
  exports.LayerGroup = LayerGroup;
  exports.layerGroup = layerGroup;
  exports.FeatureGroup = FeatureGroup;
  exports.featureGroup = featureGroup;
  exports.ImageOverlay = ImageOverlay;
  exports.imageOverlay = imageOverlay;
  exports.VideoOverlay = VideoOverlay;
  exports.videoOverlay = videoOverlay;
  exports.SVGOverlay = SVGOverlay;
  exports.svgOverlay = svgOverlay;
  exports.DivOverlay = DivOverlay;
  exports.Popup = Popup;
  exports.popup = popup;
  exports.Tooltip = Tooltip;
  exports.tooltip = tooltip;
  exports.Icon = Icon;
  exports.icon = icon;
  exports.DivIcon = DivIcon;
  exports.divIcon = divIcon;
  exports.Marker = Marker;
  exports.marker = marker;
  exports.TileLayer = TileLayer;
  exports.tileLayer = tileLayer;
  exports.GridLayer = GridLayer;
  exports.gridLayer = gridLayer;
  exports.SVG = SVG;
  exports.svg = svg$1;
  exports.Renderer = Renderer;
  exports.Canvas = Canvas;
  exports.canvas = canvas$1;
  exports.Path = Path;
  exports.CircleMarker = CircleMarker;
  exports.circleMarker = circleMarker;
  exports.Circle = Circle;
  exports.circle = circle;
  exports.Polyline = Polyline;
  exports.polyline = polyline;
  exports.Polygon = Polygon;
  exports.polygon = polygon;
  exports.Rectangle = Rectangle;
  exports.rectangle = rectangle;
  exports.Map = Map;
  exports.map = createMap;

  var oldL = window.L;
  exports.noConflict = function() {
  	window.L = oldL;
  	return this;
  }

  // Always export us to window global (see #2364)
  window.L = exports;

})));
//# sourceMappingURL=leaflet-src.js.map


/***/ }),

/***/ "./node_modules/lumpjs/src/component.js":
/*!**********************************************!*\
  !*** ./node_modules/lumpjs/src/component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Use whitelist to determine if events exist.
// In many cases only the "target" will have these & we will be catching the bubbled version.
const nativeEvents = [
    'click',
    'dblclick',
    'keyup',
    'keydown',
    'dragenter',
    'dragover',
    'dragleave',
    'drop',
    'copy',
    'cut',
    'focus',
    'paste',
    'contextmenu',
    'focusin', // focus
    'focusout' // blur?
];
// Blur/focus cannot be defered, so use 
// override events instead on listeners
const eventOverride = {
    'focus': 'focusin',
    'blur': 'focusout'
};

const Component = function() {
    // Component
    let ComponentImplementation = function(config) {
        // Copy methods to Object
        if (config) {
            Object.keys(config).forEach(function(key) {
                if(key != 'events') this[key] = config[key];
            }, this);
        }

        // Create el if none provided.
        if (!this.el) {
            this.el = document.createElement('div');
        }

        this.initialize.apply(this, arguments);
        this.connect.apply(this, [config.events]);
    }
    ComponentImplementation.prototype._events = {};
    ComponentImplementation.prototype.trigger = function(event, ...args) {
        for (let i of this._events[event] || []) {
            // Trigger event (either func or method to call)
            i[1](...args);
        }
    }
    ComponentImplementation.prototype.on = function(key, method) {
        // Add a listener
        let split = key.indexOf(' ');
        let event = (split===-1) ? key : key.substr(0,split);
        let target = (split===-1) ? '' : key.substr(split+1);

        // Override event type if needed.
        if (eventOverride[event]) {
            event = eventOverride[event];
        }

        // Wrap runner in to method
        let run = (...args) => {
            if (typeof method === "function") {
                method(...args);
            }else {
                this[method](...args);
            }
        };

        // Handle custom event
        if (!(nativeEvents.includes(event)) && !(event in this.el)) {
            (this._events[key] = this._events[key] || []).push([event, run]);
            return this;
        }

        // If no target, bind to root el
        if (!target) {
            this.el.addEventListener(event, run);
            (this._events[key] = this._events[key] || []).push([event, run]);
            return this;
        }

        // Else handle as deligated
        let handler = (e) => {
            // e.target was the clicked element
            if (e.target && e.target.matches(target)) {
                // If function? run it
                run(e, e.target);
            }
        }

        this.el.addEventListener(event, handler);
        (this._events[key] = this._events[key] || []).push([event, handler]);
        return this;
    }
    ComponentImplementation.prototype.off = function(key) {
        // Remove a listener
        for (let [event, handler] of this._events[key] || []) {
             this.el.removeEventListener(event, handler);
        }
        delete this._events[key];
    }
    ComponentImplementation.prototype.connect = function(events) {
        if (!events || typeof events !== 'object') return;
        // connected all events
        for (let [key, method] of Object.entries(events)) {
            this.on(key, method);
        }
    }
    ComponentImplementation.prototype.disconnect = function() {
        // Remove all events
        for (let [key, method] of Object.entries(this._events)) {
            this.off(key);
        }
    }
    ComponentImplementation.prototype.listenTo = function(model) {
        if (typeof model.addListener !== 'function'){
            throw 'Model does not support listeners';
        }
        model.addListener(this);
    }
    // Placeholders
    ComponentImplementation.prototype.initialize = function() {}
    ComponentImplementation.prototype.render = function() {}

    // Factory features
    this.config = [];

    // Provider
    this.make = function(config) {
        return new ComponentImplementation({...this.config, ...config});
    }

    // Define base component
    this.define = function(config)
    {
        let definedComponent = new Component;
        definedComponent.config = config;
        return definedComponent;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new Component);

/***/ }),

/***/ "./node_modules/lumpjs/src/model.js":
/*!******************************************!*\
  !*** ./node_modules/lumpjs/src/model.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Basic model to watch data. Will fire events on changed parts of data tree.
 * 
 */
const Model = function(_data) {
    let parent = this;
    // Cache data access/edit
    let _cache = new WeakMap();
    let _original = JSON.parse(JSON.stringify(_data));

    // Eventing
    this._events = {};
    this._listeners = [];

    // Dete
    this.applyChanges = function(ctx)
    {   
        // Detect changes to data
        let change = this.detectChanges(ctx.split('.'), _original, _data);
        // Update internal data to match
        if (change !== 'NONE') this.commitChanges(ctx.split('.'), _original, _data);
    }

    // Create watcher proxy
    function newProxy(result, context) {
        const proxyTraps =  {
            get: function(obj, prop, receiver)
            {
                let ctx = context ? context + '.' + prop : prop;
                let result = Reflect.get(obj, prop);
                if (typeof result === 'object') {
                    result = newProxy(result, ctx);
                }

                // Trigger read event
                parent.trigger("read", ctx);
                return result;
            },
            set: function(obj, prop, value) {
                let success = Reflect.set(obj, prop, value);
                let ctx = context ? context + '.' + prop : prop;
                // Detect changes and fire relevent events
                parent.applyChanges(ctx);
                
                return success;
            }
        };
        // Config proxy or get from cache
        const resultProxy = _cache.get(result) || new Proxy(result, proxyTraps);
        _cache.set(result, resultProxy);
        return resultProxy;
    }
    // Watch changes via proxy
    this.data = newProxy(_data, '');    
}
// get attribute
Model.prototype.get = function(key, fallback = null)
{
    let data = this.data, keys = key.split('.');
    // Traverse dots
    for (let k =0; k < keys.length; k++) {
        // Fallback if key missing
        if (!(keys[k] in data)) return fallback;
        data = data[keys[k]];
    }
    return data;
}
// Set attribute
Model.prototype.set = function(key, value)
{
    let data = this.data, keys = key.split('.');
    // Traverse dots
    for (let k =0; k < keys.length-1; k++) {
        // Fallback if key missing
        if (!(keys[k] in data)){
            data = data[keys[k]] = {};
        } else {
            data = data[keys[k]];
        }
    }
    // Set last key manually as primatives will copy
    return data[keys[keys.length-1]] = value;
}
// Trigger event
Model.prototype.trigger = function(event, ...args) {
    // Fire own event
    for (let i of this._events[event] || []) {
        // Trigger event (either func or method to call)
        if (typeof i[1] === "function") {
            i[1](...args);
        }else {
            this[i[1]](...args);
        }
    }

    // Fire listeners
    for(let listener of this._listeners) {
        listener.trigger(event, ...args);
    }
}
// Add event
Model.prototype.on = function(key, method) {
    (this._events[key] = this._events[key] || []).push([key, method]);
    return this;
}
// Remove event
Model.prototype.off = function(key, method) {
    if (!this._events[key]) return this;

    // Delete all listners if no method
    if (!method) {
        delete this._events[key];
        return this;
    }
    // Else only one with method
    for (let evt in this._events[key]) {
        if(this._events[key][evt][1] == method) {
            this._events[key].splice(evt, 1);
        }
    }

    return this;
}
// Add listener
Model.prototype.addListener = function (listener) {
    if (typeof listener.trigger !== 'function'){
        throw 'Unsupported listener type provided. Must implement trigger method.'
    }
    this._listeners.push(listener);
    return this;
}
// Remove listener
Model.prototype.removeListener = function (listener) {
    let idx = this._listeners.indexOf(listener);
    if (idx !== -1) {
        this._listeners.splice(this._listeners.indexOf(listener), 1);
    }
    return this;
}

// Util to clone object
Model.prototype.copy = function(data)
{
    return (typeof data == 'object') ? JSON.parse(JSON.stringify(data)) : data;
}
// Detect change type for a primative
Model.prototype.detectChangeType = function(original, updated)
{
    if(!original) return "CREATE"; // additional key added to our new data
    if(!updated) return "REMOVE"; // old key removed from our new data
    if(original==updated) return "NONE"; // data unchanged between the two keys

    return "UPDATE"; // A mix - so an update
}
// Detect changes in watched data
Model.prototype.detectChanges = function (keys, original, updated, namespace = '')
{
    // Detect any changes in the affected data path
    // (keys is an array start from root the the affected location)
    let next = keys.shift();
    let returnType = 'UPDATE';
    let _changes = [];
    namespace = namespace ? `${namespace}.${next}` : next;

    // Get values we're comparing
    original = original ? original[next] : undefined;
    updated = updated ? updated[next] : undefined;

    // Target key not yet reached, dig on to the next key
    if (keys.length != 0) returnType = this.detectChanges(this.copy(keys), original, updated, namespace);
   
    // Target depth reached. 
    if (keys.length == 0) {
        // Detect attribute changes to children
        if (typeof updated == 'object' || typeof original == 'object') {
            // Check for field changes
            let fields = new Set([ 
                ...(updated) ? Object.keys(updated) : [],
                ...(original) ? Object.keys(original) : []
            ]);

            let results = [];
            for (let key of fields) {
                results.push(this.detectChanges([key], original, updated, namespace));
            }
            // Object checks
            if(!original) returnType = 'CREATE';
            if(!updated) returnType = 'REMOVE'; 
            if (results.every(function(val){ return val == 'NONE'})) {
                returnType = 'NONE';
            }
        } else {
            // Else, detect change type on this specific attribute
            returnType = this.detectChangeType(original, updated);
        }
    }

    // Fire change type events
    switch (returnType) {
        case 'CREATE':
            this.trigger("create:"+namespace, updated);
            break;
        case 'UPDATE':
            this.trigger("update:"+namespace, updated, original);
            break;
        case 'REMOVE':
            this.trigger("remove:"+namespace, original);
            break;
        case 'NONE':
            this.trigger("unchanged:"+namespace);
            break;
    }

    // Fire general change events
    this.trigger("change:"+namespace, returnType, updated, original);
    this.trigger("change", returnType, namespace, updated, original);

    return returnType;
}
// Apply change to original, so new changes can be detected
Model.prototype.commitChanges = function(keys, original, updated){
    let next = keys.shift();
    // Insert either at most accurate point, or where original deoes not yet exist
    if (keys.length == 0  || !original[next]) {
        original[next] = this.copy(updated[next]);
        return;
    }
    return this.commitChanges(keys, original[next], updated[next]);
}



/* harmony default export */ __webpack_exports__["default"] = (Model);

/***/ }),

/***/ "./node_modules/marked/marked.min.js":
/*!*******************************************!*\
  !*** ./node_modules/marked/marked.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2020, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n;if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator])return(n=e[Symbol.iterator]()).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e){return c[e]}var e,t=(function(t){function e(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}t.exports={defaults:e(),getDefaults:e,changeDefaults:function(e){t.exports.defaults=e}}}(e={exports:{}}),e.exports),r=(t.defaults,t.getDefaults,t.changeDefaults,/[&<>"']/),l=/[&<>"']/g,a=/[<>"']|&(?!#?\w+;)/,o=/[<>"']|&(?!#?\w+;)/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};var u=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function p(e){return e.replace(u,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}var h=/(^|[^\[])\^/g;var f=/[^\w:]/g,d=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;var k={},b=/^[^:]+:\/*[^/]*$/,m=/^([^:]+:)[\s\S]*$/,x=/^([^:]+:\/*[^/]*)[\s\S]*$/;function v(e,t){k[" "+e]||(b.test(e)?k[" "+e]=e+"/":k[" "+e]=w(e,"/",!0));var n=-1===(e=k[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(m,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(x,"$1")+t:e+t}function w(e,t,n){var r=e.length;if(0===r)return"";for(var i=0;i<r;){var s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.substr(0,r-i)}var _=function(e,t){if(t){if(r.test(e))return e.replace(l,n)}else if(a.test(e))return e.replace(o,n);return e},y=p,z=function(n,e){n=n.source||n,e=e||"";var r={replace:function(e,t){return t=(t=t.source||t).replace(h,"$1"),n=n.replace(e,t),r},getRegex:function(){return new RegExp(n,e)}};return r},S=function(e,t,n){if(e){var r;try{r=decodeURIComponent(p(n)).replace(f,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!d.test(n)&&(n=v(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},$={exec:function(){}},A=function(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},R=function(e,t){var n=e.replace(/\|/g,function(e,t,n){for(var r=!1,i=t;0<=--i&&"\\"===n[i];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},T=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,r=0,i=0;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&--r<0)return i;return-1},I=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},Z=t.defaults,q=w,O=R,C=_,U=T;function j(e,t,n){var r=t.href,i=t.title?C(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:r,title:i,text:s}:{type:"image",raw:n,href:r,title:i,text:C(s)}}var E=function(){function e(e){this.options=e||Z}var t=e.prototype;return t.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return 1<t[0].length?{type:"space",raw:t[0]}:{raw:"\n"}},t.code=function(e,t){var n=this.rules.block.code.exec(e);if(n){var r=t[t.length-1];if(r&&"paragraph"===r.type)return{raw:n[0],text:n[0].trimRight()};var i=n[0].replace(/^ {4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:q(i,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],r=function(e,t){var n=e.match(/^(\s+)(?:```)/);if(null===n)return t;var r=n[1];return t.split("\n").map(function(e){var t=e.match(/^\s+/);return null!==t&&t[0].length>=r.length?e.slice(r.length):e}).join("\n")}(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:r}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[1].length,text:t[2]}},t.nptable=function(e){var t=this.rules.block.nptable.exec(e);if(t){var n={type:"table",header:O(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(n.header.length===n.align.length){for(var r=n.align.length,i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.cells.length,i=0;i<r;i++)n.cells[i]=O(n.cells[i],n.header.length);return n}}},t.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var n=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:n}}},t.list=function(e){var t=this.rules.block.list.exec(e);if(t){for(var n,r,i,s,l,a,o,c=t[0],u=t[2],p=1<u.length,h=")"===u[u.length-1],g={type:"list",raw:c,ordered:p,start:p?+u.slice(0,-1):"",loose:!1,items:[]},f=t[0].match(this.rules.block.item),d=!1,k=f.length,b=0;b<k;b++)r=(c=n=f[b]).length,~(n=n.replace(/^ *([*+-]|\d+[.)]) */,"")).indexOf("\n ")&&(r-=n.length,n=this.options.pedantic?n.replace(/^ {1,4}/gm,""):n.replace(new RegExp("^ {1,"+r+"}","gm"),"")),b!==k-1&&(i=this.rules.block.bullet.exec(f[b+1])[0],(p?1===i.length||!h&&")"===i[i.length-1]:1<i.length||this.options.smartLists&&i!==u)&&(s=f.slice(b+1).join("\n"),g.raw=g.raw.substring(0,g.raw.length-s.length),b=k-1)),l=d||/\n\n(?!\s*$)/.test(n),b!==k-1&&(d="\n"===n.charAt(n.length-1),l=l||d),l&&(g.loose=!0),o=void 0,(a=/^\[[ xX]\] /.test(n))&&(o=" "!==n[1],n=n.replace(/^\[[ xX]\] +/,"")),g.items.push({type:"list_item",raw:c,task:a,checked:o,loose:l,text:n});return g}},t.html=function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):C(t[0]):t[0]}},t.def=function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},t.table=function(e){var t=this.rules.block.table.exec(e);if(t){var n={type:"table",header:O(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(n.header.length===n.align.length){n.raw=t[0];for(var r=n.align.length,i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.cells.length,i=0;i<r;i++)n.cells[i]=O(n.cells[i].replace(/^ *\| *| *\| *$/g,""),n.header.length);return n}}},t.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}},t.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}},t.text=function(e,t){var n=this.rules.block.text.exec(e);if(n){var r=t[t.length-1];return r&&"text"===r.type?{raw:n[0],text:n[0]}:{type:"text",raw:n[0],text:n[0]}}},t.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:C(t[1])}},t.tag=function(e,t,n){var r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\/a>/i.test(r[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):C(r[0]):r[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n,r=U(t[2],"()");-1<r&&(n=(0===t[0].indexOf("!")?5:4)+t[1].length+r,t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,n).trim(),t[3]="");var i,s=t[2],l="";return l=this.options.pedantic?(i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s),i?(s=i[1],i[3]):""):t[3]?t[3].slice(1,-1):"",j(t,{href:(s=s.trim().replace(/^<([\s\S]*)>$/,"$1"))?s.replace(this.rules.inline._escapes,"$1"):s,title:l?l.replace(this.rules.inline._escapes,"$1"):l},t[0])}},t.reflink=function(e,t){var n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){var r=(n[2]||n[1]).replace(/\s+/g," ");if((r=t[r.toLowerCase()])&&r.href)return j(n,r,n[0]);var i=n[0].charAt(0);return{type:"text",raw:i,text:i}}},t.strong=function(e,t,n){void 0===n&&(n="");var r=this.rules.inline.strong.start.exec(e);if(r&&(!r[1]||r[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var i,s="**"===r[0]?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;for(s.lastIndex=0;null!=(r=s.exec(t));)if(i=this.rules.inline.strong.middle.exec(t.slice(0,r.index+3)))return{type:"strong",raw:e.slice(0,i[0].length),text:e.slice(2,i[0].length-2)}}},t.em=function(e,t,n){void 0===n&&(n="");var r=this.rules.inline.em.start.exec(e);if(r&&(!r[1]||r[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var i,s="*"===r[0]?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;for(s.lastIndex=0;null!=(r=s.exec(t));)if(i=this.rules.inline.em.middle.exec(t.slice(0,r.index+2)))return{type:"em",raw:e.slice(0,i[0].length),text:e.slice(1,i[0].length-1)}}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\n/g," "),r=/[^ ]/.test(n),i=n.startsWith(" ")&&n.endsWith(" ");return r&&i&&(n=n.substring(1,n.length-1)),n=C(n,!0),{type:"codespan",raw:t[0],text:n}}},t.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},t.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[1]}},t.autolink=function(e,t){var n=this.rules.inline.autolink.exec(e);if(n){var r,i="@"===n[2]?"mailto:"+(r=C(this.options.mangle?t(n[1]):n[1])):r=C(n[1]);return{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}},t.url=function(e,t){var n,r,i,s;if(n=this.rules.inline.url.exec(e)){if("@"===n[2])i="mailto:"+(r=C(this.options.mangle?t(n[0]):n[0]));else{for(;s=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0],s!==n[0];);r=C(n[0]),i="www."===n[1]?"http://"+r:r}return{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}},t.inlineText=function(e,t,n){var r=this.rules.inline.text.exec(e);if(r){var i=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):C(r[0]):r[0]:C(this.options.smartypants?n(r[0]):r[0]);return{type:"text",raw:r[0],text:i}}},e}(),D=$,L=z,P=A,B={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:D,table:D,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};B.def=L(B.def).replace("label",B._label).replace("title",B._title).getRegex(),B.bullet=/(?:[*+-]|\d{1,9}[.)])/,B.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,B.item=L(B.item,"gm").replace(/bull/g,B.bullet).getRegex(),B.list=L(B.list).replace(/bull/g,B.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+B.def.source+")").getRegex(),B._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",B._comment=/<!--(?!-?>)[\s\S]*?-->/,B.html=L(B.html,"i").replace("comment",B._comment).replace("tag",B._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),B.paragraph=L(B._paragraph).replace("hr",B.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",B._tag).getRegex(),B.blockquote=L(B.blockquote).replace("paragraph",B.paragraph).getRegex(),B.normal=P({},B),B.gfm=P({},B.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),B.gfm.nptable=L(B.gfm.nptable).replace("hr",B.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",B._tag).getRegex(),B.gfm.table=L(B.gfm.table).replace("hr",B.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",B._tag).getRegex(),B.pedantic=P({},B.normal,{html:L("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",B._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:D,paragraph:L(B.normal._paragraph).replace("hr",B.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",B.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var F={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:D,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:D,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,punctuation:/^([\s*punctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};F.punctuation=L(F.punctuation).replace(/punctuation/g,F._punctuation).getRegex(),F._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>",F._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*",F.em.start=L(F.em.start).replace(/punctuation/g,F._punctuation).getRegex(),F.em.middle=L(F.em.middle).replace(/punctuation/g,F._punctuation).replace(/overlapSkip/g,F._overlapSkip).getRegex(),F.em.endAst=L(F.em.endAst,"g").replace(/punctuation/g,F._punctuation).getRegex(),F.em.endUnd=L(F.em.endUnd,"g").replace(/punctuation/g,F._punctuation).getRegex(),F.strong.start=L(F.strong.start).replace(/punctuation/g,F._punctuation).getRegex(),F.strong.middle=L(F.strong.middle).replace(/punctuation/g,F._punctuation).replace(/blockSkip/g,F._blockSkip).getRegex(),F.strong.endAst=L(F.strong.endAst,"g").replace(/punctuation/g,F._punctuation).getRegex(),F.strong.endUnd=L(F.strong.endUnd,"g").replace(/punctuation/g,F._punctuation).getRegex(),F.blockSkip=L(F._blockSkip,"g").getRegex(),F.overlapSkip=L(F._overlapSkip,"g").getRegex(),F._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,F._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,F._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,F.autolink=L(F.autolink).replace("scheme",F._scheme).replace("email",F._email).getRegex(),F._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,F.tag=L(F.tag).replace("comment",B._comment).replace("attribute",F._attribute).getRegex(),F._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,F._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,F._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,F.link=L(F.link).replace("label",F._label).replace("href",F._href).replace("title",F._title).getRegex(),F.reflink=L(F.reflink).replace("label",F._label).getRegex(),F.reflinkSearch=L(F.reflinkSearch,"g").replace("reflink",F.reflink).replace("nolink",F.nolink).getRegex(),F.normal=P({},F),F.pedantic=P({},F.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:L(/^!?\[(label)\]\((.*?)\)/).replace("label",F._label).getRegex(),reflink:L(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",F._label).getRegex()}),F.gfm=P({},F.normal,{escape:L(F.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),F.gfm.url=L(F.gfm.url,"i").replace("email",F.gfm._extended_email).getRegex(),F.breaks=P({},F.gfm,{br:L(F.br).replace("{2,}","*").getRegex(),text:L(F.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var M={block:B,inline:F},N=t.defaults,W=M.block,X=M.inline;function G(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function V(e){for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),.5<Math.random()&&(t="x"+t.toString(16)),n+="&#"+t+";";return n}var H=function(){function n(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||N,this.options.tokenizer=this.options.tokenizer||new E,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var t={block:W.normal,inline:X.normal};this.options.pedantic?(t.block=W.pedantic,t.inline=X.pedantic):this.options.gfm&&(t.block=W.gfm,this.options.breaks?t.inline=X.breaks:t.inline=X.gfm),this.tokenizer.rules=t}n.lex=function(e,t){return new n(t).lex(e)};var e,t,r,i=n.prototype;return i.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},i.blockTokens=function(e,t,n){var r,i,s,l;for(void 0===t&&(t=[]),void 0===n&&(n=!0),e=e.replace(/^ +$/gm,"");e;)if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((l=t[t.length-1]).raw+="\n"+r.raw,l.text+="\n"+r.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),s=r.items.length,i=0;i<s;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.paragraph(e)))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.text(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((l=t[t.length-1]).raw+="\n"+r.raw,l.text+="\n"+r.text);else if(e){var a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}throw new Error(a)}return t},i.inline=function(e){for(var t,n,r,i,s,l=e.length,a=0;a<l;a++)switch((s=e[a]).type){case"paragraph":case"text":case"heading":s.tokens=[],this.inlineTokens(s.text,s.tokens);break;case"table":for(s.tokens={header:[],cells:[]},r=s.header.length,t=0;t<r;t++)s.tokens.header[t]=[],this.inlineTokens(s.header[t],s.tokens.header[t]);for(r=s.cells.length,t=0;t<r;t++)for(i=s.cells[t],s.tokens.cells[t]=[],n=0;n<i.length;n++)s.tokens.cells[t][n]=[],this.inlineTokens(i[n],s.tokens.cells[t][n]);break;case"blockquote":this.inline(s.tokens);break;case"list":for(r=s.items.length,t=0;t<r;t++)this.inline(s.items[t].tokens)}return e},i.inlineTokens=function(e,t,n,r,i){var s;void 0===t&&(t=[]),void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===i&&(i="");var l,a=e;if(this.tokens.links){var o=Object.keys(this.tokens.links);if(0<o.length)for(;null!=(l=this.tokenizer.rules.inline.reflinkSearch.exec(a));)o.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(l=this.tokenizer.rules.inline.blockSkip.exec(a));)a=a.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;e;)if(s=this.tokenizer.escape(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.tag(e,n,r))e=e.substring(s.raw.length),n=s.inLink,r=s.inRawBlock,t.push(s);else if(s=this.tokenizer.link(e))e=e.substring(s.raw.length),"link"===s.type&&(s.tokens=this.inlineTokens(s.text,[],!0,r)),t.push(s);else if(s=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(s.raw.length),"link"===s.type&&(s.tokens=this.inlineTokens(s.text,[],!0,r)),t.push(s);else if(s=this.tokenizer.strong(e,a,i))e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],n,r),t.push(s);else if(s=this.tokenizer.em(e,a,i))e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],n,r),t.push(s);else if(s=this.tokenizer.codespan(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.br(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.del(e))e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],n,r),t.push(s);else if(s=this.tokenizer.autolink(e,V))e=e.substring(s.raw.length),t.push(s);else if(n||!(s=this.tokenizer.url(e,V))){if(s=this.tokenizer.inlineText(e,r,G))e=e.substring(s.raw.length),i=s.raw.slice(-1),t.push(s);else if(e){var c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}throw new Error(c)}}else e=e.substring(s.raw.length),t.push(s);return t},e=n,r=[{key:"rules",get:function(){return{block:W,inline:X}}}],(t=null)&&s(e.prototype,t),r&&s(e,r),n}(),J=t.defaults,K=S,Q=_,Y=function(){function e(e){this.options=e||J}var t=e.prototype;return t.code=function(e,t,n){var r,i=(t||"").match(/\S*/)[0];return!this.options.highlight||null!=(r=this.options.highlight(e,i))&&r!==e&&(n=!0,e=r),i?'<pre><code class="'+this.options.langPrefix+Q(i,!0)+'">'+(n?e:Q(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:Q(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n"+(t=t&&"<tbody>"+t+"</tbody>")+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,n){if(null===(e=K(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href="'+Q(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>"},t.image=function(e,t,n){if(null===(e=K(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),ee=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),te=function(){function e(){this.seen={}}return e.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t))for(var n=t;this.seen[n]++,t=n+"-"+this.seen[n],this.seen.hasOwnProperty(t););return this.seen[t]=0,t},e}(),ne=t.defaults,re=y,ie=function(){function n(e){this.options=e||ne,this.options.renderer=this.options.renderer||new Y,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ee,this.slugger=new te}n.parse=function(e,t){return new n(t).parse(e)};var e=n.prototype;return e.parse=function(e,t){void 0===t&&(t=!0);for(var n,r,i,s,l,a,o,c,u,p,h,g,f,d,k,b,m,x="",v=e.length,w=0;w<v;w++)switch((u=e[w]).type){case"space":continue;case"hr":x+=this.renderer.hr();continue;case"heading":x+=this.renderer.heading(this.parseInline(u.tokens),u.depth,re(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":x+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(a=o="",i=u.header.length,n=0;n<i;n++)a+=this.renderer.tablecell(this.parseInline(u.tokens.header[n]),{header:!0,align:u.align[n]});for(o+=this.renderer.tablerow(a),c="",i=u.cells.length,n=0;n<i;n++){for(a="",s=(l=u.tokens.cells[n]).length,r=0;r<s;r++)a+=this.renderer.tablecell(this.parseInline(l[r]),{header:!1,align:u.align[r]});c+=this.renderer.tablerow(a)}x+=this.renderer.table(o,c);continue;case"blockquote":c=this.parse(u.tokens),x+=this.renderer.blockquote(c);continue;case"list":for(p=u.ordered,h=u.start,g=u.loose,i=u.items.length,c="",n=0;n<i;n++)k=(d=u.items[n]).checked,b=d.task,f="",d.task&&(m=this.renderer.checkbox(k),g?0<d.tokens.length&&"text"===d.tokens[0].type?(d.tokens[0].text=m+" "+d.tokens[0].text,d.tokens[0].tokens&&0<d.tokens[0].tokens.length&&"text"===d.tokens[0].tokens[0].type&&(d.tokens[0].tokens[0].text=m+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:m}):f+=m),f+=this.parse(d.tokens,g),c+=this.renderer.listitem(f,b,k);x+=this.renderer.list(c,p,h);continue;case"html":x+=this.renderer.html(u.text);continue;case"paragraph":x+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(c=u.tokens?this.parseInline(u.tokens):u.text;w+1<v&&"text"===e[w+1].type;)c+="\n"+((u=e[++w]).tokens?this.parseInline(u.tokens):u.text);x+=t?this.renderer.paragraph(c):c;continue;default:var _='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(_);throw new Error(_)}return x},e.parseInline=function(e,t){t=t||this.renderer;for(var n,r="",i=e.length,s=0;s<i;s++)switch((n=e[s]).type){case"escape":r+=t.text(n.text);break;case"html":r+=t.html(n.text);break;case"link":r+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":r+=t.image(n.href,n.title,n.text);break;case"strong":r+=t.strong(this.parseInline(n.tokens,t));break;case"em":r+=t.em(this.parseInline(n.tokens,t));break;case"codespan":r+=t.codespan(n.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(n.tokens,t));break;case"text":r+=t.text(n.text);break;default:var l='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}return r},n}(),se=A,le=I,ae=_,oe=t.getDefaults,ce=t.changeDefaults,ue=t.defaults;function pe(e,n,r){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof n&&(r=n,n=null),n=se({},pe.defaults,n||{}),le(n),r){var i,s=n.highlight;try{i=H.lex(e,n)}catch(e){return r(e)}var l=function(t){var e;if(!t)try{e=ie.parse(i,n)}catch(e){t=e}return n.highlight=s,t?r(t):r(null,e)};if(!s||s.length<3)return l();if(delete n.highlight,!i.length)return l();var a=0;return pe.walkTokens(i,function(n){"code"===n.type&&(a++,setTimeout(function(){s(n.text,n.lang,function(e,t){return e?l(e):(null!=t&&t!==n.text&&(n.text=t,n.escaped=!0),void(0===--a&&l()))})},0))}),void(0===a&&l())}try{var t=H.lex(e,n);return n.walkTokens&&pe.walkTokens(t,n.walkTokens),ie.parse(t,n)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",n.silent)return"<p>An error occurred:</p><pre>"+ae(e.message+"",!0)+"</pre>";throw e}}return pe.options=pe.setOptions=function(e){return se(pe.defaults,e),ce(pe.defaults),pe},pe.getDefaults=oe,pe.defaults=ue,pe.use=function(a){var t,n=se({},a);a.renderer&&function(){var l=pe.defaults.renderer||new Y;for(var e in a.renderer)!function(i){var s=l[i];l[i]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=a.renderer[i].apply(l,t);return!1===r&&(r=s.apply(l,t)),r}}(e);n.renderer=l}(),a.tokenizer&&function(){var l=pe.defaults.tokenizer||new E;for(var e in a.tokenizer)!function(i){var s=l[i];l[i]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=a.tokenizer[i].apply(l,t);return!1===r&&(r=s.apply(l,t)),r}}(e);n.tokenizer=l}(),a.walkTokens&&(t=pe.defaults.walkTokens,n.walkTokens=function(e){a.walkTokens(e),t&&t(e)}),pe.setOptions(n)},pe.walkTokens=function(e,t){for(var n,r=g(e);!(n=r()).done;){var i=n.value;switch(t(i),i.type){case"table":for(var s,l=g(i.tokens.header);!(s=l()).done;){var a=s.value;pe.walkTokens(a,t)}for(var o,c=g(i.tokens.cells);!(o=c()).done;)for(var u,p=g(o.value);!(u=p()).done;){var h=u.value;pe.walkTokens(h,t)}break;case"list":pe.walkTokens(i.items,t);break;default:i.tokens&&pe.walkTokens(i.tokens,t)}}},pe.Parser=ie,pe.parser=ie.parse,pe.Renderer=Y,pe.TextRenderer=ee,pe.Lexer=H,pe.lexer=H.lex,pe.Tokenizer=E,pe.Slugger=te,pe.parse=pe});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

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
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
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
      define(genFun, toStringTagSymbol, "GeneratorFunction");
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
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
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
        context.arg = undefined;
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

  define(Gp, toStringTagSymbol, "Generator");

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

          next.value = undefined;
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
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
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
          context.arg = undefined;
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
        this.arg = undefined;
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
   true ? module.exports : undefined
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


/***/ }),

/***/ "./resources/js/Components/ContentNav.js":
/*!***********************************************!*\
  !*** ./resources/js/Components/ContentNav.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lumpjs_src_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lumpjs/src/component.js */ "./node_modules/lumpjs/src/component.js");

/* harmony default export */ __webpack_exports__["default"] = (lumpjs_src_component_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({
  el: document.querySelector('nav.content-nav'),
  initialize: function initialize() {},
  events: {
    "click a[data-entity]": "viewEntity",
    "click a[data-category]": "addEntity"
  },
  render: function render() {},
  addEntity: function addEntity(e, target) {
    this.state.trigger('entity:create', {
      'category': target.dataset.category
    });
  },
  viewEntity: function viewEntity(e, target) {
    this.state.trigger('entity:show', {
      'entity': target.dataset.entity
    });
  }
}));

/***/ }),

/***/ "./resources/js/Components/Map.js":
/*!****************************************!*\
  !*** ./resources/js/Components/Map.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lumpjs_src_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lumpjs/src/component.js */ "./node_modules/lumpjs/src/component.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _geoman_io_leaflet_geoman_free__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @geoman-io/leaflet-geoman-free */ "./node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js");
/* harmony import */ var _geoman_io_leaflet_geoman_free__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_geoman_io_leaflet_geoman_free__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ __webpack_exports__["default"] = (lumpjs_src_component_js__WEBPACK_IMPORTED_MODULE_1__["default"].define({
  el: document.querySelector('#map'),
  map: null,
  mapLookup: {},
  _editingPoi: null,
  initialize: function initialize() {
    var _this = this;

    // Listen to state
    this.state.on('update:tab', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tab) {
        var data, json;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(tab === 'content')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", _this.clearMap());

              case 2:
                _context.next = 4;
                return _this.state.loadMap(tab);

              case 4:
                data = _context.sent;
                _context.next = 7;
                return data.json();

              case 7:
                json = _context.sent;

                _this.createMap(json);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.state.on('map:focus', function (e) {
      // Change map            
      if (e.map != _this.state.tab) {
        _this.state.data.tab = e.map;
      }

      if (_this.hasMarker(e.entity)) {
        _this.highLightMarker(e.entity);
      }
    });
    this.state.on('map:poi', function (entity) {
      console.log("place marker mode");
      _this._editingPoi = entity;

      _this.map.pm.enableDraw('Marker');
    });
    this.state.on('entity:updated', function (entity) {
      _this.addEntityToMap(entity);
    });
  },
  clearMap: function clearMap() {
    if (this.map) {
      this.map.off();
      this.map.remove();
      this.mapLookup = {};
      this.map = null;
    }
  },
  hasMarker: function hasMarker(e_id) {
    return this.mapLookup[e_id];
  },
  getMarker: function getMarker(e_id) {
    return this.mapLookup[e_id];
  },
  removeMarker: function removeMarker(e_id) {
    this.mapLookup[e_id].remove();
    delete this.mapLookup[e_id];
  },
  _offsetPoi: function _offsetPoi(latlng) {
    var offset = this.map.getSize().divideBy(4).x;
    var x = this.map.latLngToContainerPoint(latlng).x + offset;
    var y = this.map.latLngToContainerPoint(latlng).y;
    return this.map.containerPointToLatLng([x, y]);
  },
  highLightMarker: function highLightMarker(id) {
    var marker = this.mapLookup[id],
        l;

    if (marker.getLatLng) {
      //https://github.com/pointhi/leaflet-color-markers
      marker.setIcon(new leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png'
      }));
      l = marker.getLatLng();
    } else {
      l = marker.getLatLngs()[0][0];
    }

    this.map.panTo(this._offsetPoi(l));
  },
  createMap: function () {
    var _createMap = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(map) {
      var _this2 = this;

      var img, width, height, bounds, image;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (this.map) {
                this.clearMap();
              } // Load image


              _context2.next = 3;
              return new Promise(function (resolve, reject) {
                var img = document.createElement('img');
                img.src = map.data.mapUrl;

                img.onload = function () {
                  return resolve(img);
                };

                img.onerror = reject;
              });

            case 3:
              img = _context2.sent;
              width = Math.round(img.width / 10);
              height = Math.round(img.height / 10);
              this.map = leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.map('map', {
                crs: leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.CRS.Simple,
                zoomSnap: 0.20,
                maxZoom: 4,
                minZoom: 1
              }); // Config

              bounds = [[0, 0], [height, width]];
              image = leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.imageOverlay(map.data.mapUrl, bounds).addTo(this.map);
              this.map.fitBounds(bounds);
              this.map.setZoom(1.4);
              this.map.pm.addControls({
                position: 'topleft',
                drawCircle: false,
                drawPolyline: false,
                drawCircleMarker: false
              });
              map.data.entities.map(function (m) {
                _this2.addEntityToMap(m);
              });
              this.map.on('pm:create', function (item) {
                if (_this2._editingPoi != null) {
                  _this2.state.trigger('entity:update', {
                    geo: item,
                    entity: _this2._editingPoi
                  });
                } else {
                  _this2.state.trigger('entity:create', {
                    geo: item,
                    category: 'Location'
                  });
                }

                _this2._editingPoi = null;

                _this2.map.pm.Draw.disable();
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createMap(_x2) {
      return _createMap.apply(this, arguments);
    }

    return createMap;
  }(),
  addEntityToMap: function addEntityToMap(entity) {
    var _this3 = this;

    // Skip if no geo
    if (!entity.data.geo) return; // Remove existing marker if we have one

    if (this.hasMarker(entity.id)) {
      this.removeMarker(entity.id);
    } // Draw new point


    leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.geoJson(JSON.parse(entity.data.geo), {
      onEachFeature: function onEachFeature(feature, layer) {
        layer.on({
          'click': function click(point) {
            _this3.state.trigger('entity:show', {
              'entity': entity.id
            });
          }
        }); // Let us lookup "linked" marker easily

        _this3.mapLookup[entity.id] = layer;
      }
    }).addTo(this.map);
  }
}));

/***/ }),

/***/ "./resources/js/Components/NavBar.js":
/*!*******************************************!*\
  !*** ./resources/js/Components/NavBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lumpjs_src_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lumpjs/src/component.js */ "./node_modules/lumpjs/src/component.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ __webpack_exports__["default"] = (lumpjs_src_component_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({
  el: document.querySelector('.bar'),
  initialize: function initialize() {
    // Listen to state
    this.state.on('update:tab', function () {});
  },
  events: {
    "click .bar nav a[data-tab]": "viewTab"
  },
  viewTab: function viewTab(e) {
    this.state.data.tab = e.dataset.tab;

    _toConsumableArray(e.parentNode.children).map(function (x) {
      x.classList.remove('selected');
    });

    e.classList.add('selected');
  }
}));

/***/ }),

/***/ "./resources/js/Components/Panel.js":
/*!******************************************!*\
  !*** ./resources/js/Components/Panel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lumpjs_src_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lumpjs/src/component.js */ "./node_modules/lumpjs/src/component.js");
/* harmony import */ var _Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section.js */ "./resources/js/Components/Section.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var panelTpl = function panelTpl(title) {
  var tpl = "\n        <header>\n            \n\n            <span class='editEntity menu'>&#x22ef;</span>\n            <div class=\"entity-menu\">\n                <span class='edit-entity'>Edit</span>\n                <span class='hide-panel'>Close</span>\n                <span class='remove-entity'>Remove</span>\n            </div>\n        \n            <h2>".concat(title, "</h2>\n            <span class='poi'></span>\n        </header>\n        \n        <div class='panel-content'>\n        </div>\n        <div class='controls'><button class='add'>Add Content Section</button></div>\n    ");
  var template = document.createElement('div');
  template.innerHTML = tpl;
  return template;
};

var panelEditTpl = function panelEditTpl(data, action) {
  var actionName;

  switch (action) {
    case 'new':
      actionName = 'New Entity';
      break;

    case 'edit':
      actionName = 'Editing ' + data.name;
      break;
  }

  var tpl = "\n        <div class=\"form\">\n            <h2>".concat(actionName, "</h2>\n            <div>\n                <label>Title</label>\n                <input name=\"title\" type=\"text\" value=\"").concat(data.name || '', "\">\n            </div>\n            <div>\n                <label>Category</label>\n                <input name=\"category\" type=\"text\" value=\"").concat(data.category || '', "\">\n            </div>\n            <button class='saveEntity right'>save</button><button class='cancel cancelEntity'>cancel</button>\n        </div>\n    ");
  var template = document.createElement('div');
  template.innerHTML = tpl;
  return template;
};

/* harmony default export */ __webpack_exports__["default"] = (lumpjs_src_component_js__WEBPACK_IMPORTED_MODULE_1__["default"].define({
  el: document.querySelector('.panel'),
  children: [],
  initialize: function initialize() {
    // Listen to model events
    this.listenTo(this.state);
  },
  content: null,
  mode: 'hide',
  events: {
    // Sections
    "click .add": "addContentSection",
    // Entity Menu
    "click .menu": "showMenu",
    "click .hide-panel": "hidePanel",
    "click .edit-entity": "editEntity",
    "click .remove-entity": "removeEntity",
    // Entity General
    "click .saveEntity": "saveEntity",
    "click .cancelEntity": "cancelEntity",
    "click .poi": "managePoi",
    // Model events
    "update:tab": "updatePanelDisplay",
    "entity:create": "createEntity",
    "entity:show": "showEntity",
    "entity:update": "updateEntity"
  },
  showMenu: function showMenu() {
    this.el.querySelector('.entity-menu').classList.toggle('show');
  },
  hasPoi: function hasPoi() {
    return this.content.data.geo != null;
  },
  managePoi: function managePoi() {
    if (this.hasPoi()) {
      this.state.trigger('map:focus', {
        map: this.content.data.map_id,
        entity: this.content.id
      });
      return;
    }

    this.state.trigger('map:poi', this.content);
  },
  updateEntity: function updateEntity(entity) {
    this.content = entity.entity;
    this.content.data._geo = entity.geo;
    this.mode = 'edit';
    this.render();
  },
  createEntity: function createEntity(entity) {
    // Else make new!
    this.mode = 'new';
    this.content = {
      data: {
        category: entity.category,
        name: entity.name,
        _geo: entity.geo
      },
      links: {
        'create': this.content.links.create
      }
    };
    return this.render();
  },
  removeEntity: function removeEntity() {
    if (confirm("are you sure you want to perminently delete this Entity?")) {
      // DO remove
      this.hidePanel();
    }

    this.showMenu();
  },
  showEntity: function showEntity(entity) {
    // Clean up, if unsaved entity
    if (this.content && this.content.data._geo) {
      this.content.data._geo.layer.remove();
    } // Store entity


    this.state.data.entity = entity.entity;
    return this.showContent(entity.entity);
  },
  editEntity: function editEntity() {
    this.mode = 'edit';
    this.render();
  },
  cancelEntity: function cancelEntity() {
    if (this.content.data._geo) {
      this.content.data._geo.layer.remove();
    }

    this.showEntity({
      'entity': this.state.data.entity
    });
  },
  hidePanel: function hidePanel() {
    return this.el.classList.add('hide');
  },
  saveEntity: function () {
    var _saveEntity = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var payload, results;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = {
                data: {
                  'name': this.el.querySelector("input[name=title]").value,
                  'category': this.el.querySelector("input[name=category]").value
                }
              }; // Add geo data

              if (this.content.data._geo) {
                payload.data.map_id = this.state.data.tab;
                payload.data.geo = JSON.stringify(this.content.data._geo.layer.toGeoJSON());
              }

              if (!(this.mode == 'edit')) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return this.state.request('PUT', this.content.links.update + '?include=blocks', payload);

            case 5:
              results = _context.sent;
              _context.next = 11;
              break;

            case 8:
              _context.next = 10;
              return this.state.request('POST', this.content.links.create + '?include=blocks', payload);

            case 10:
              results = _context.sent;

            case 11:
              _context.next = 13;
              return results.json();

            case 13:
              this.content = _context.sent;
              this.state.trigger('entity:updated', this.content);
              this.mode = 'view';
              this.render();

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function saveEntity() {
      return _saveEntity.apply(this, arguments);
    }

    return saveEntity;
  }(),
  updatePanelDisplay: function updatePanelDisplay(tab) {
    if (tab == 'content') {
      this.el.classList.remove('min');
    } else {
      this.el.classList.add('min');
    }
  },
  render: function render() {
    this.clearChildren();
    this.el.innerHTML = '';
    this.el.classList.remove('hide');

    switch (this.mode) {
      case 'view':
        return this.renderView();

      case 'edit':
        return this.renderEdit();

      case 'new':
        return this.renderEdit();
    }
  },
  renderView: function renderView() {
    var _this = this;

    var template = panelTpl(this.content.data.name);
    var container = template.querySelector('.panel-content');

    if (this.hasPoi()) {
      template.querySelector('.poi').innerText = "Locate";
    } else {
      template.querySelector('.poi').innerText = "Create";
    }

    var blocks = this.content.data.blocks;
    blocks.forEach(function (block) {
      var section = _Section_js__WEBPACK_IMPORTED_MODULE_2__["default"].make({
        data: block,
        state: _this.state
      });
      container.appendChild(section.el);

      _this.children.push(section);
    });
    this.el.appendChild(template);
  },
  renderEdit: function renderEdit() {
    var template = panelEditTpl(this.content.data, this.mode);
    this.el.appendChild(template);
    this.el.querySelector('input[name=title]').focus();
  },
  clearChildren: function clearChildren() {
    this.children.map(function (i) {
      i.disconnect();
    });
    this.children = [];
  },
  addContentSection: function addContentSection() {
    var container = this.el.querySelector('.panel-content');
    var section = _Section_js__WEBPACK_IMPORTED_MODULE_2__["default"].make({
      mode: 'new',
      data: {
        links: {
          'create': this.content.links.newBlock
        }
      },
      state: this.state
    });
    container.appendChild(section.el);
    this.children.push(section);
  },
  showContent: function () {
    var _showContent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(entity) {
      var data, json;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.state.loadEntity(entity);

            case 2:
              data = _context2.sent;

              if (!(data.status == 200 || data.status == 201)) {
                _context2.next = 10;
                break;
              }

              _context2.next = 6;
              return data.json();

            case 6:
              json = _context2.sent;
              this.content = json;
              this.mode = 'view';
              return _context2.abrupt("return", this.render());

            case 10:
              if (!(data.status == 404)) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return", this.state.trigger('entity:create', {
                'name': entity
              }));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function showContent(_x) {
      return _showContent.apply(this, arguments);
    }

    return showContent;
  }()
}));

/***/ }),

/***/ "./resources/js/Components/Section.js":
/*!********************************************!*\
  !*** ./resources/js/Components/Section.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lumpjs_src_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lumpjs/src/component.js */ "./node_modules/lumpjs/src/component.js");
/* harmony import */ var marked_marked_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked/marked.min.js */ "./node_modules/marked/marked.min.js");
/* harmony import */ var marked_marked_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked_marked_min_js__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var viewTpl = function viewTpl(content) {
  return "\n        <div>\n            ".concat(content, "\n        </div>\n        <div class='controls'><button class='edit'>Edit</button></div>\n    ");
};

var editTpl = function editTpl(content) {
  return "\n        <textarea>".concat(content, "</textarea>\n        <div class='controls'><button class='save'>Save changes</button></div>\n    ");
};

/* harmony default export */ __webpack_exports__["default"] = (lumpjs_src_component_js__WEBPACK_IMPORTED_MODULE_1__["default"].define({
  mode: 'view',
  initialize: function initialize() {
    this.render();
  },
  events: {
    "click button.save": "saveContent",
    "click button.edit": "editContent",
    "click a[data-link]": "showLinkedContent",
    "keyup textarea": "setHeight",
    "dragenter textarea": "test",
    "dragleave textarea": "test",
    "drop textarea": "test"
  },
  say: function say(e, target) {
    // set state on enter/leave so user knows its droppable.
    console.log(e.type);

    if (e.type == 'drop') {
      var files = e.dataTransfer.files; // what did we get?

      for (var f = 0; f < files.length; f++) {
        var file = files[f]; // Only process image files.

        if (!file.type.match('image.*')) continue;
        console.log("Send to image endpoint. TODO: create image/file manager endpoint. Then insert at cursor position.");
        console.log(file);
      }
    }

    e.preventDefault();
  },
  render: function render() {
    // redraw
    var div = document.createElement('div');
    div.className = 'panel-block'; // Clear

    this.el.innerHTML = '';

    switch (this.mode) {
      case 'view':
        return this.renderView(div, this.data.data);

      case 'edit':
        return this.renderEdit(div, this.data.data);

      case 'new':
        return this.renderEdit(div, {
          content: ''
        });
    }
  },
  renderEdit: function renderEdit(container, block) {
    container.innerHTML = editTpl(block.content);
    this.el.appendChild(container);
    this.setHeight(null, container.querySelector('textarea'));
  },
  renderView: function renderView(container, block) {
    var parsed = marked_marked_min_js__WEBPACK_IMPORTED_MODULE_2___default()(block.content);
    parsed = parsed.replace(/\[\[([a-zA-Z0-9_ ]*)\]\]/g, '<a data-link="$1">$1</a>');
    container.innerHTML = viewTpl(parsed);
    this.el.appendChild(container);
  },
  saveContent: function () {
    var _saveContent = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var newContent, payload, json;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newContent = this.el.querySelector('textarea').value;
              payload = {
                data: {
                  content: newContent
                }
              };

              if (!(this.mode == 'edit')) {
                _context.next = 10;
                break;
              }

              _context.next = 5;
              return this.state.request('PUT', this.data.links.update, payload);

            case 5:
              _context.next = 7;
              return _context.sent.json();

            case 7:
              json = _context.sent;
              _context.next = 15;
              break;

            case 10:
              _context.next = 12;
              return this.state.request('POST', this.data.links.create, payload);

            case 12:
              _context.next = 14;
              return _context.sent.json();

            case 14:
              json = _context.sent;

            case 15:
              console.log(json);
              this.data = json;
              this.mode = 'view';
              this.render();

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function saveContent() {
      return _saveContent.apply(this, arguments);
    }

    return saveContent;
  }(),
  editContent: function editContent() {
    this.mode = 'edit';
    this.render();
  },
  showLinkedContent: function showLinkedContent(e, target) {
    var link = target.dataset.link.replace(/ /g, '-');
    this.state.trigger('entity:show', {
      'entity': link
    });
  },
  setHeight: function setHeight(e, target) {
    target.style.height = 0;
    target.style.height = target.scrollHeight + 'px';
  }
}));

/***/ }),

/***/ "./resources/js/Models/App.js":
/*!************************************!*\
  !*** ./resources/js/Models/App.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lumpjs_src_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lumpjs/src/model.js */ "./node_modules/lumpjs/src/model.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ __webpack_exports__["default"] = (lumpjs_src_model_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

lumpjs_src_model_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.request = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(method, url) {
    var payload,
        options,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            payload = _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
            options = {
              method: method,
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.data.csrf
              }
            };

            if (method != 'GET') {
              options['body'] = JSON.stringify(payload);
            }

            _context.next = 5;
            return fetch(url, options);

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

lumpjs_src_model_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.loadEntity = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    var url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "".concat(this.get('url'), "/campaign/").concat(this.get('campaign_id'), "/entity/").concat(id, "?include=blocks");
            return _context2.abrupt("return", this.request("GET", url));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}();

lumpjs_src_model_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.loadMap = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    var url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = "".concat(this.get('url'), "/campaign/").concat(this.get('campaign_id'), "/map/").concat(id, "?include=entities");
            return _context3.abrupt("return", this.request("GET", url));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Models_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Models/App.js */ "./resources/js/Models/App.js");
/* harmony import */ var _Components_NavBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/NavBar.js */ "./resources/js/Components/NavBar.js");
/* harmony import */ var _Components_Panel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Panel.js */ "./resources/js/Components/Panel.js");
/* harmony import */ var _Components_Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Map.js */ "./resources/js/Components/Map.js");
/* harmony import */ var _Components_ContentNav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/ContentNav.js */ "./resources/js/Components/ContentNav.js");




 // Boot global state

var Bus = new _Models_App_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  tab: 'default',
  entity: {
    'action': 'view',
    'entity': 1
  }
}); // Setup "views"

var nav = _Components_NavBar_js__WEBPACK_IMPORTED_MODULE_1__["default"].make({
  state: Bus
});
var panel = _Components_Panel_js__WEBPACK_IMPORTED_MODULE_2__["default"].make({
  state: Bus
});
var map = _Components_Map_js__WEBPACK_IMPORTED_MODULE_3__["default"].make({
  state: Bus
});
var contentNav = _Components_ContentNav_js__WEBPACK_IMPORTED_MODULE_4__["default"].make({
  state: Bus
}); // Global events

document.addEventListener('DOMContentLoaded', function () {
  Bus.data.url = window._campaign.url;
  Bus.data.campaign_id = window._campaign.id;
  Bus.data.csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content'); // Show default

  Bus.trigger('entity:show', {
    entity: window._campaign.default_entity
  });
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/main.scss":
/*!**********************************!*\
  !*** ./resources/sass/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ./resources/sass/main.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Web\htdocs\dev\dnd-city\dndcampaignmanager\resources\js\app.js */"./resources/js/app.js");
__webpack_require__(/*! C:\Web\htdocs\dev\dnd-city\dndcampaignmanager\resources\sass\app.scss */"./resources/sass/app.scss");
module.exports = __webpack_require__(/*! C:\Web\htdocs\dev\dnd-city\dndcampaignmanager\resources\sass\main.scss */"./resources/sass/main.scss");


/***/ })

/******/ });