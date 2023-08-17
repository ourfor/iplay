import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import settingSlice from "./Setting";
import userSlice from "./User";
import historySlice from "./History";
import { log } from "@helper/log";
import { Api, Emby } from "@api/emby";
import { User } from "@model/User";

const Env = {
    name: "development",
    storeKey: "dev"
}

const reducer = combineReducers({
    setting: persistReducer({
        key: [Env.storeKey, "setting"].join("/"),
        storage
    }, settingSlice),
    user: persistReducer({
        key: [Env.storeKey, "user"].join("/"),
        storage,
    }, userSlice), 
    history: persistReducer({
        key: [Env.storeKey, "history"].join("/"),
        storage
    }, historySlice), 
})

const persistConfig = {
    key: [Env.storeKey, "root"].join("/"),
    storage,
    blacklist: [
        "dashboard", 
        "message"
    ]
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: Env.name !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store, null, () => {
    const state = store.getState()
    log.info("init store", state)
    Api.emby = new Emby(state.user as User)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch