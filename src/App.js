import "./App.css";
import Nav from "./NavBar/Nav";
import Songs from "./Songs/Songs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Songs />
      </header>
    </div>
  );
}

export default App;
