import React, { useEffect } from 'react';
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main/Main";
import Details from './pages/Details/Details';
import Authentication from './pages/Authentication/Authentication';
import ProtectRoute from './components/ProtectRoute/ProtectRoute';
import { useActions } from './hooks/useAction';
import { useTypedSelector } from './hooks/useTypedSelector';
import ModalWindow from './components/ModalWindow/ModalWindow';

const App: React.FC = () => {
  const { getCardImages } = useActions();
  const { visibility } = useTypedSelector(state => state.modalWindow);
  useEffect(() => {
    getCardImages();
  },[])
  return (
    <>
      <Routes>
        <Route path='/auth' element={<Authentication />} />
        <Route path="/" element={<ProtectRoute />}>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
      {visibility ? <ModalWindow /> : null}
    </>
  )
}

export default App;
