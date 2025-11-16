import { Routes, Route } from "react-router-dom";
import { Wrapper } from "./App,styled";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";

function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
