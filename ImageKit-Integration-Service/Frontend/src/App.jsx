import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Feed from "./components/Feed";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
