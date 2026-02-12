import { useDispatch, useSelector } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
	reset,
} from "../../store/slices/couterSlice";
import { type AppDispatch, type RootState } from "../../store/store";

export default function Counter() {
	const { value } = useSelector((state: RootState) => state.counter);
	const dispatch = useDispatch<AppDispatch>();
	return (
		<div className="w-full h-screen flex flex-col justify-center items-center gap-5 bg-amber-100">
			<h1 className="text-3xl font-bold">Counter-Slice</h1>
			<div className="flex ">
				<button
					onClick={() => dispatch(increment())}
					className="flex h-10 w-10 items-center justify-center
               rounded-lg bg-amber-600 text-white text-xl font-bold
               hover:bg-amber-700 active:scale-95
               transition"
				>
					+
				</button>
				<span className="min-w-[40px] text-center text-lg font-semibold">
					{value}
				</span>
				<button
					onClick={() => dispatch(decrement())}
					className="flex h-10 w-10 items-center justify-center
               rounded-lg bg-amber-600 text-white text-xl font-bold
               hover:bg-amber-700 active:scale-95
               transition"
				>
					-
				</button>
			</div>
			<div className="flex gap-3">
				<button
					className="flex  items-center justify-center p-2
               rounded-lg bg-amber-600 text-white text-xl font-bold
               hover:bg-amber-700 active:scale-95 transition"
					onClick={() => dispatch(reset())}
				>
					reset
				</button>
				<button
					className="flex  items-center justify-center p-2
               rounded-lg bg-amber-600 text-white text-xl font-bold
               hover:bg-amber-700 active:scale-95 transition"
					onClick={() => dispatch(incrementByAmount(10))}
				>
					Amount
				</button>
			</div>
		</div>
	);
}
