import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import DetailPage from "./pages/Detail.tsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path={`/datadetail/:id`} element={<DetailPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
