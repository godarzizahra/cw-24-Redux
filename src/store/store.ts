import { configureStore } from "@reduxjs/toolkit";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./slices/couterSlice";
import notificationReducer from "./slices/notificationSlice";
import themeReducer from "./slices/themeSlice";
import userReducer from "./slices/userSlice";

// to persist
const userPersistConfig = { key: "user", storage };
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		theme: themeReducer,
		user: persistedUserReducer,
		notification: notificationReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
