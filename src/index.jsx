import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider, componentReducer } from "react-redux";
import { render } from "react-dom";
import App from "./App";

// Configure the global store
const store = createStore(combineReducers({ components: componentReducer }));

render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById("app"));