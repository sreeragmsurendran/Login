import { Route, Routes, Navigate,BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import Signup from "./Components/Signup/Signup";
import "./App.css"


function App() {
	const user = localStorage.getItem("token");

	return (
    <BrowserRouter>
		<Header/>
		<Routes>
			{user && <Route path="/" exact element={<Navigate replace to="/home" />} />}
			{user ? <Route path="/home" exact element={<Main />} /> : <Route path="/home" exact element={<Navigate replace to="/login" />}/> }
			{!user ? <Route path="/signup" exact element={<Signup />} /> :<Route path="/signup" exact element={<Navigate replace to="/home" />} />}
			{!user ? <Route path="/login" exact element={<Login />} /> :<Route path="/login" exact element={<Navigate replace to="/home" />} />}
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
    </BrowserRouter>
	);
}

export default App;