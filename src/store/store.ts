import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/couterSlice";
import themeReducer from "./slices/themeSlice";
import storage from "redux-persist/lib/storage";

const userPersistConfig = { key: "user", storage };
export const store = configureStore({
	reducer: { counter: counterReducer, theme: themeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
