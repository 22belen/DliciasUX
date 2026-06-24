import { BrowserRouter } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Banner from "./componentes/Banner";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
    </BrowserRouter>
  );
}

export default App;
