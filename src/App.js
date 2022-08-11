import Story from "./pages/Story";
import MemberShip from "./pages/MemberShip";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import Write from "./pages/Write";
import User from "./pages/User";
import Tag from "./pages/Tag";

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='story' element={<Story />}></Route>
				<Route path='membership' element={<MemberShip />}></Route>
				<Route path='write' element={<Write />}></Route>
				<Route path='article/:id' element={<Article />}></Route>
				<Route path='user/:id' element={<User />}></Route>
				<Route path='tag/:id' element={<Tag />}></Route>
			</Routes>{" "}
		</div>
	);
}

export default App;
