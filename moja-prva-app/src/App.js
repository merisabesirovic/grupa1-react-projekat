import "./App.css";
import Header from "./Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import AboutFLL from "./pages/AboutFLL/AboutFLL";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/aboutfll" element={<AboutFLL />}></Route>
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
