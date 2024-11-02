import "./App.css";
import Header from "./Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import AboutFLL from "./pages/AboutFLL/AboutFLL";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <AboutUs></AboutUs>
      <AboutFLL></AboutFLL>
      <div></div>
    </div>
  );
}

export default App;
