import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";



const persistConfig = {
    key: "root",
    storage,
    whiteList: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sageMiddleware = createSagaMiddleware();

const middlewares = [process.env.NODE_ENV === "development" && logger, sageMiddleware].filter(Boolean);
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
sageMiddleware.run(rootSaga);
export const persistor = persistStore(store);