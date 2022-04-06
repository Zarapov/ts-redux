import React, { useEffect } from 'react';
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import Details from './pages/Details';
import Authentication from './pages/Authentication';
import ProtectRoute from './components/ProtectRoute/ProtectRoute';
import { useActions } from './hooks/useAction';

const App: React.FC = () => {
  const { getCardImages } = useActions();
  useEffect(()=>{
    getCardImages();
  })
  return (
      <Routes>
        <Route path='/auth' element={<Authentication />} />
        <Route path="/" element={<ProtectRoute/>}>
          <Route path="/" element={<Navigate to="/main"/>}/>
          <Route path="/main" element={<Main />} />
          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
  )
}

export default App;
