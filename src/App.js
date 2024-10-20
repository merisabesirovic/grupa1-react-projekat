import "./App.css";
import Header from "./Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <AboutUs></AboutUs>
      <div></div>
    </div>
  );
}

export default App;
