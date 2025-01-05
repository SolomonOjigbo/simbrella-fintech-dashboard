import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import userReducer from "./userSlice"; // Ensure userSlice exports necessary types
// Redux Persist Configuration
const persistConfig = {
    key: "root",
    storage,
};
const persistedUserReducer = persistReducer(persistConfig, userReducer);
// Create the store
export const store = configureStore({
    reducer: {
        user: persistedUserReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
