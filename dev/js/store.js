import logger from "redux-logger";
import thunk from "redux-thunk";
import {applyMiddleware,createStore} from "redux";
import reducer from "./reducers/index";

const middleware = applyMiddleware(thunk,logger());
const store = createStore(reducer, middleware);

export default store;