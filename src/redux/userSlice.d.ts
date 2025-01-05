interface User {
    id: number;
    name: string;
    avatar: string;
    email: string;
    phone: string;
    accountBalance: number;
    transactions: any[];
    recentTransactions: any[];
    loans: any[];
}
export interface UserState {
    user: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
export declare const fetchUser: import("@reduxjs/toolkit").AsyncThunk<User, String, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateUser: import("@reduxjs/toolkit").AsyncThunk<any, Partial<User>, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
declare const _default: import("redux").Reducer<UserState, import("redux").UnknownAction, UserState>;
export default _default;
