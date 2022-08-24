
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<h1>register</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
