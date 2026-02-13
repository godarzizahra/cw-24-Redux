import { useDispatch, useSelector } from "react-redux";
import {
	hideNotifications,
	showNotification,
} from "../../store/slices/notificationSlice";
import type { AppDispatch, RootState } from "../../store/store";

function Notification() {
	const dispatch = useDispatch<AppDispatch>();
	const { message, type, isVisible } = useSelector(
		(state: RootState) => state.notification
	);
	return (
		<>
			{isVisible ? (
				<div className="w-full flex flex-col gap-5 justify-center items-center bg-amber-100 py-5">
					<div className="w-1/3 flex flex-col justify-center items-center gap-5 rounded-2xl p-5 bg-blue-800/50">
						<p className="font-bold">{type}</p>
						<p className="font-semibold text-md">{message}</p>
					</div>
					<button
						className="bg-blue-600/50 text-white rounded-xl shadow-2xl p-5 cursor-pointer"
						onClick={() => {
							dispatch(hideNotifications());
						}}
					>
						hide notification
					</button>
				</div>
			) : (
				<div className="w-full flex flex-col gap-5 justify-center items-center bg-amber-100 py-5">
					<button
						className="bg-blue-600/50 text-white rounded-xl shadow-2xl p-5 cursor-pointer"
						onClick={() => {
							dispatch(
								showNotification({
									message: "hello user , this is your message",
									type: "info",
								})
							);
						}}
					>
						show notification
					</button>
				</div>
			)}
		</>
	);
}

export default Notification;
