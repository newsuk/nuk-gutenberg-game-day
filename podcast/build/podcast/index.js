/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/podcast/block.json":
/*!********************************!*\
  !*** ./src/podcast/block.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/podcast","version":"0.1.0","title":"Podcast","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"podcast","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"podcastSeries":{"type":"string","default":"The Story","enum":["The Story","The Royals with Roya and Kate","How to win an election","Politics Unpacked","Your History","Off Air with Jane & Fi","Times news briefing","World in 10"]},"episodeId":{"type":"string","default":""},"podcastTitle":{"type":"string","default":""},"podcastSummary":{"type":"string","default":""},"podcastAudioUrl":{"type":"string","default":""},"podcastImageUrl":{"type":"string","default":""}}}');

/***/ }),

/***/ "./src/podcast/edit.js":
/*!*****************************!*\
  !*** ./src/podcast/edit.js ***!
  \*****************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/src/podcast/edit.js: Unexpected token (66:1)\n\n\u001b[0m \u001b[90m 64 |\u001b[39m\n \u001b[90m 65 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mEdit\u001b[39m({ attributes\u001b[33m,\u001b[39m setAttributes }) {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 66 |\u001b[39m \u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m    |\u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 67 |\u001b[39m \t\u001b[36mconst\u001b[39m { podcastSeries\u001b[33m,\u001b[39m titleOverride\u001b[33m,\u001b[39m summaryOverride\u001b[33m,\u001b[39m episodeId } \u001b[33m=\u001b[39m\n \u001b[90m 68 |\u001b[39m \t\tattributes\u001b[33m;\u001b[39m\n \u001b[90m 69 |\u001b[39m \u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n    at constructor (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:360:19)\n    at JSXParserMixin.raise (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:6613:19)\n    at JSXParserMixin.unexpected (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:6633:16)\n    at JSXParserMixin.jsxParseIdentifier (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:4575:12)\n    at JSXParserMixin.jsxParseNamespacedName (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:4582:23)\n    at JSXParserMixin.jsxParseElementName (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:4591:21)\n    at JSXParserMixin.jsxParseOpeningElementAt (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:4667:22)\n    at JSXParserMixin.jsxParseElementAt (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:4692:33)\n    at JSXParserMixin.jsxParseElement (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:4755:17)\n    at JSXParserMixin.parseExprAtom (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:4765:19)\n    at JSXParserMixin.parseExprSubscripts (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:10992:23)\n    at JSXParserMixin.parseUpdate (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:10977:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:10957:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:10810:61)\n    at JSXParserMixin.parseExprOps (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:10815:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:10792:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:10745:21)\n    at JSXParserMixin.parseExpressionBase (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:10698:23)\n    at /Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:10694:39\n    at JSXParserMixin.allowInAnd (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:12329:16)\n    at JSXParserMixin.parseExpression (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:10694:17)\n    at JSXParserMixin.parseStatementContent (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:12771:23)\n    at JSXParserMixin.parseStatementLike (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:12644:17)\n    at JSXParserMixin.parseStatementListItem (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:12624:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:13192:61)\n    at JSXParserMixin.parseBlockBody (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:13185:10)\n    at JSXParserMixin.parseBlock (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:13173:10)\n    at JSXParserMixin.parseFunctionBody (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:12018:24)\n    at JSXParserMixin.parseFunctionBodyAndFinish (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:12004:10)\n    at /Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:13317:12\n    at JSXParserMixin.withSmartMixTopicForbiddingContext (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:12311:14)\n    at JSXParserMixin.parseFunction (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:13316:10)\n    at JSXParserMixin.parseExportDefaultExpression (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:13778:19)\n    at JSXParserMixin.parseExport (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:13699:25)\n    at JSXParserMixin.parseStatementContent (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:12754:27)\n    at JSXParserMixin.parseStatementLike (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:12644:17)\n    at JSXParserMixin.parseModuleItem (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:12621:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:13192:36)\n    at JSXParserMixin.parseBlockBody (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:13185:10)\n    at JSXParserMixin.parseProgram (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:12514:10)\n    at JSXParserMixin.parseTopLevel (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:12504:25)\n    at JSXParserMixin.parse (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:14364:10)\n    at parse (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/parser/lib/index.js:14398:38)\n    at parser (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/core/lib/transformation/normalize-file.js:64:37)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (/Users/yuki.inasawa/Documents/nuk-gutenberg-game-day/podcast/node_modules/@babel/core/lib/transform.js:22:33)");

/***/ }),

/***/ "./src/podcast/index.js":
/*!******************************!*\
  !*** ./src/podcast/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/podcast/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/podcast/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/podcast/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/podcast/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/podcast/save.js":
/*!*****************************!*\
  !*** ./src/podcast/save.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "podcast-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "podcast-cover-img",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: attributes.podcastImageUrl,
          alt: "Podcast Cover"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "podcast-info",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "podcast-tags",
          children: "LATEST EPISODE"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          className: "podcast-title",
          children: attributes.podcastTitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "podcast-summary",
          children: attributes.podcastSummary
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "podcast-player",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("audio", {
          controls: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("source", {
            src: attributes.podcastAudioUrl,
            type: "audio/mpeg"
          }), "Your browser does not support the audio element."]
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/podcast/style.scss":
/*!********************************!*\
  !*** ./src/podcast/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"podcast/index": 0,
/******/ 			"podcast/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkpodcast"] = globalThis["webpackChunkpodcast"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["podcast/style-index"], () => (__webpack_require__("./src/podcast/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map