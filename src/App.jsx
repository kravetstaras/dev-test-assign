import { BrowserRouter } from "react-router-dom";
import Analytics from "./components/Analytics";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
