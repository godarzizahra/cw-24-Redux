import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/slices/userSlice";
import type { AppDispatch, RootState } from "../../store/store";

function UserAuth() {
	const [inputValue, setInputValue] = useState("");
	const dispatch = useDispatch<AppDispatch>();
	const { username, isLoggedIn } = useSelector(
		(state: RootState) => state.user
	);

	const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(login(inputValue));
	};
	const handleLogout = () => {
		dispatch(logout());
	};

	console.log(username);

	return (
		<div className="flex flex-col justify-center items-center bg-amber-100">
			{isLoggedIn ? (
				<div className="bg-white/50 flex flex-col justify-center items-center gap-5 border border-black/30 p-5 w-1/3 rounded-2xl">
					<p>
						Hello <span className="font-bold">{username}</span> ! you are logged
						in
					</p>
					<button
						className="bg-red-800/50 text-white p-5 rounded-2xl cursor-pointer hover:shadow-2xl transition duration-200 ease-in-out"
						onClick={handleLogout}
					>
						Logout
					</button>
				</div>
			) : (
				<div className="flex flex-col justify-center items-center bg-amber-100 w-full">
					<form className="bg-white/50 flex flex-col justify-center items-center gap-5 border border-black/30 p-5 w-1/3 rounded-2xl">
						<input
							className="p-5 border border-black/50 rounded-2xl"
							placeholder="Your username"
							type="text"
							onChange={(e) => setInputValue(e.target.value)}
						/>
						<button
							className="bg-blue-800/50 text-white p-5 rounded-2xl cursor-pointer hover:shadow-2xl transition duration-200 ease-in-out"
							onClick={handleLogin}
						>
							Login
						</button>
					</form>
				</div>
			)}
		</div>
	);
}

export default UserAuth;
