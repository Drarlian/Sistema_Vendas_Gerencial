import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthGuard from '../global/Guard';
import Layout from '../global/components/Layout';
import Menu from '../global/pages/Menu';
import Register from '../modules/admin/pages/Register';
import { AuthContext } from '../contexts/AuthContext';
import UsersList from '../modules/admin/pages/UsersList';

const Rotas: React.FC = () => {
  const { usuarioAtual } = useContext(AuthContext)

  const role = usuarioAtual?.role == null ? false: usuarioAtual.role;

  return (
    <Routes>
        <Route path='/' element={<AuthGuard><Layout><Menu/></Layout></AuthGuard>} />
        <Route path='/seller' element={<AuthGuard><Layout><p>Seller Page</p></Layout></AuthGuard>} />
        <Route path='/admin' element={<AuthGuard><Layout><p>Admin Page</p></Layout></AuthGuard>} />
        <Route path='/admin/register' element={<AuthGuard><Layout>{role === 'ADMIN' ? <Register/>: <Menu/>}</Layout></AuthGuard>} />
        <Route path='/admin/users' element={<AuthGuard><Layout>{role === 'ADMIN' ? <UsersList/>: <Menu/>}</Layout></AuthGuard>} />
    </Routes>
  );
}
 
export default Rotas;