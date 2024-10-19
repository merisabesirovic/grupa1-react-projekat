import "./App.css";
import Header from "./Header/Header";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  const objekat = new Object();
  objekat.ime = "Kerim";

  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <div></div>
    </div>
  );
}

export default App;
