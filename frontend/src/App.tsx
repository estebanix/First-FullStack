import { Nav } from "./components/Nav"
import { Route, Routes } from "react-router";
import "./App.css";

import { HomePage } from "./containers/HomePage";
import { ToDoPage } from "./containers/ToDoPage";

function App() {

  return (
    <>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<ToDoPage />} />
        </Routes>
    </>
  )
}

export default App
