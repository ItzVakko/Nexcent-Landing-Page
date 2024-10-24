import "./App.css";
import ComSystem from "./Components/CommunitySystem/ComSystem";
import HeaderInfo from "./Components/HeaderInfo/HeaderInfo";
import NavBar from "./Components/NavBar/NavBar";
import OurClients from "./Components/OurClients/OurClients";
import PixelGrade from "./Components/PixelGrade/PixelGrade";

function App() {
  return (
    <>
      <header className="bg-Silver">
        <NavBar />
        <HeaderInfo />
      </header>

      <main>
        <OurClients />
        <ComSystem />
        <PixelGrade />
      </main>
    </>
  );
}

export default App;
