import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import Layout from "./containers/Layout"
import store from "./store";
require("../scss/style.scss");

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Layout />
        </Provider>
    </div>
, document.getElementById("root"));