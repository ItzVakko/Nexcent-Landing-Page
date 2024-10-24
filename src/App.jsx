import "./App.css";
import HeaderInfo from "./Components/HeaderInfo/HeaderInfo";
import NavBar from "./Components/NavBar/NavBar";
import OurClients from "./Components/OurClients/OurClients";

function App() {
  return (
    <>
      <header className="bg-Silver">
        <NavBar />
        <HeaderInfo />
      </header>

      <main>
        <OurClients />
      </main>
    </>
  );
}

export default App;
