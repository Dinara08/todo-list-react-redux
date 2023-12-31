import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import {logger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

const middlewares = [];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;