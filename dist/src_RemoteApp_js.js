"use strict";
(self["webpackChunk_redux_reducer_injection_app2"] = self["webpackChunk_redux_reducer_injection_app2"] || []).push([["src_RemoteApp_js"],{

/***/ "./src/RemoteApp.js":
/*!**************************!*\
  !*** ./src/RemoteApp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?2849");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store.js");




const remoteAppScope = 'remoteApp';

const RemoteApp = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state[remoteAppScope]);
  const [remoteAppInput, setRemoteAppInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "RemoteApp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "RemoteApp's name from the redux store : ", state && state.appName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    style: {
      marginRight: '10px'
    },
    type: "text",
    onChange: e => {
      setRemoteAppInput(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => dispatch((0,_store__WEBPACK_IMPORTED_MODULE_2__.changeAppNameAction)(remoteAppInput))
  }, "Dispatch RemoteApp new name")));
};

const RemoteAppWrapper = props => {
  const {
    store
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (store) store.injectReducer(remoteAppScope, _store__WEBPACK_IMPORTED_MODULE_2__.reducer);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: store || _store__WEBPACK_IMPORTED_MODULE_2__.store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RemoteApp, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoteAppWrapper);

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "changeAppNameAction": () => (/* binding */ changeAppNameAction),
/* harmony export */   "default": () => (/* binding */ configureStore),
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

const initialState = {
  appName: 'remoteApp'
};
const CHANGE_APP_NAME = 'CHANGE_APP_NAME';

const changeAppNameAction = appName => {
  return {
    type: CHANGE_APP_NAME,
    payload: appName
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_NAME:
      {
        return { ...state,
          appName: action.payload
        };
      }
  }

  return state;
};

const staticReducers = {
  remoteApp: reducer
};
/**
 * Cf. redux docs:
 * https://redux.js.org/recipes/code-splitting/#defining-an-injectreducer-function
 */

function configureStore(initialState) {
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : redux__WEBPACK_IMPORTED_MODULE_0__.compose;
  const enhancer = composeEnhancers();
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(createReducer(), enhancer);
  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}

function createReducer(asyncReducers) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({ ...staticReducers,
    ...asyncReducers
  });
}

const store = configureStore();

/***/ })

}]);
//# sourceMappingURL=src_RemoteApp_js.js.map