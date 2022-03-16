import React from 'react';
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";

const App: React.FC = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Navigate to="/main"/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
    </div>
  )
}

export default App;
