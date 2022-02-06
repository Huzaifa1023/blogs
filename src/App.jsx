import React from 'react';
import './app.css';
import Topbar from './components/Topbar';
import { Routes, Route, Link } from "react-router-dom";
import { appRoutes, authRoutes } from './constants/routes';
import AppLayout from './Layout/AppLayout';
function App() {
  const user = false;
  return (
    <>
     {user ? (
       <AppLayout>
        <Routes>
          {
            appRoutes.map(({id,Component,path})=> {
              return <Route key={id} path={path} element={<Component/>} />
            })
          }
        </Routes>
       </AppLayout>
     ): (
       <Routes>
         {authRoutes.map(({id,path,Component})=> {
           return <Route key={id} path={path} element={<Component/>} />
         })}
       </Routes>
     )}
    </>
  );
}

export default App;
