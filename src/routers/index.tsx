import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthGuard from '../global/Guard';
import Layout from '../global/components/Layout';
import Menu from '../global/pages/Menu';

const Rotas: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<AuthGuard><Layout><Menu/></Layout></AuthGuard>} />
        <Route path='/seller' element={<AuthGuard><Layout><p>Seller Page</p></Layout></AuthGuard>} />
        <Route path='/admin' element={<AuthGuard><Layout><p>Admin Page</p></Layout></AuthGuard>} />
    </Routes>
  );
}
 
export default Rotas;