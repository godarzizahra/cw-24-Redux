import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";
import type { AppDispatch, RootState } from "../../store/store";

export default function Theme() {
	const { mode } = useSelector((state: RootState) => state.theme);
	const dispatch = useDispatch<AppDispatch>();
	return (
		<div className="w-full h-screen flex flex-col gap-5 justify-center items-center pt-10 bg-amber-100">
			<h1 className="text-3xl font-bold">Theme-Slice</h1>
			<button
				className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium
             hover:bg-blue-700 transition-colors duration-200
             focus:outline-none focus:ring-2 focus:ring-blue-400"
				onClick={() => dispatch(toggleTheme())}
			>
				changeTheme
			</button>
			<div className="font-bold">{mode}</div>
		</div>
	);
}
