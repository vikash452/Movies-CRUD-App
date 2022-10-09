import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import List from "./screens/List/List";
import About from "./screens/About/About";
import User from "./screens/User/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about">
          <Route index={true} element={<About />} />
          <Route path="list" element={<List />} />
          <Route path="user" element={<User />} />
        </Route>

        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
