import CounterPage from "./pages/counter/counterPage";
import NotificationModal from "./pages/notification/notification";
import ThemePage from "./pages/theme/themePage";
import UserAuthPage from "./pages/userAuth/userAuth";

function App() {
	return (
		<>
			<CounterPage />
			<ThemePage />
			<UserAuthPage />
			<NotificationModal />
		</>
	);
}

export default App;
