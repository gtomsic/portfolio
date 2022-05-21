import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducerSendMessage } from "./reducers/reducerMessage";

const reducers = combineReducers({
    replaceMe: () => "I am state",
    message: reducerSendMessage,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
