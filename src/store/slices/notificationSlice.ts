import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface NotificationPayload {
	message: string;
	type: "success" | "error" | "info";
}

interface NotificationState extends NotificationPayload {
	isVisible: boolean;
}

const initialState: NotificationState = {
	message: "",
	type: "info",
	isVisible: false,
};

const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		showNotification: (state, action: PayloadAction<NotificationPayload>) => {
			state.message = action.payload.message;
			state.type = action.payload.type;
			state.isVisible = true;
		},
		hideNotifications: (state) => {
			state.isVisible = false;
		},
	},
});

export const { showNotification, hideNotifications } =
	notificationSlice.actions;
export default notificationSlice.reducer;
