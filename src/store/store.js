import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import blogReducer from "./blogStore";
import classReducer from "./classStore";
import adminReducer from "./adminStore";
import subscribeReducer from "./subscribeStore";
import dashReducer from "./dashStore";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    blog: blogReducer,
    classes: classReducer,
    admin: adminReducer,
    dashMenu: dashReducer,
    subscribe: subscribeReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export const persistor = persistStore(store);