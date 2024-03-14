import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/auth/Register";
import LoginPage from "./pages/auth/Login";
import NavbarComponent from "./components/Navbar";
function App() {
	return (
		<BrowserRouter>
			<NavbarComponent />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/login' element={<LoginPage />} />z
			</Routes>
		</BrowserRouter>
	);
}

export default App;
