/// <reference types="redux-persist/types/persistreducer" />
/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    user: import("./userSlice").UserState & import("redux-persist/es/persistReducer").PersistPartial;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        user: import("./userSlice").UserState & import("redux-persist/es/persistReducer").PersistPartial;
    }, undefined, import("redux").UnknownAction>;
}, {}>, import("redux").StoreEnhancer<{}, {}>]>>;
export declare const persistor: import("redux-persist").Persistor;
export type { UserState } from "./userSlice";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
