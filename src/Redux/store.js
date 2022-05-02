import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const rootReducer = combineReducers(reducer, applyMiddleware(thunk));

// const ThunkMiddleware = (store) => (next) => (action) => {
//     return typeof action === "function"
//         ? action(store.dispatch, store.getState)
//         : next(action);
// };

// create store here
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// do not remove this code, its for testing purpose
if (window.Cypress) {
    window.store = store;
}
