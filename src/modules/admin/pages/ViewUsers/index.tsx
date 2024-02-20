import React, { useContext } from 'react';
import { DivViewUsers } from './styles';
import { Button } from '@mui/material';
import { LuSearch } from 'react-icons/lu';
import { AuthContext } from '../../../../contexts/AuthContext';
import { IoDocumentText } from 'react-icons/io5';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ViewUsers: React.FC = () => {
  const { usuarios } = useContext(AuthContext)

  const navegar = useNavigate();

  return (
    <DivViewUsers>
      <div className='container-lista-usuarios'>
        <div className='container-header'>
          <div>
            <h1>Usuários</h1>
          </div>
          <div>
            <Button variant="contained">Voltar</Button>
          </div>
        </div>
        <div className='container-search'>
          <div>
            <span><LuSearch /></span>
            <input placeholder='Buscar...' />
          </div>
        </div>
        <div className='container-table'>
          <table>
            <thead>
              <tr>
                <th>Usuário</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Cargo</th>
                <th>Role</th>
                <th colSpan={2}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => {
                return (
                  <tr key={usuario.id}>
                    <td>{usuario.usuario}</td>
                    <td>{usuario.primeiro_nome}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.cargo}</td>
                    <td>{usuario.role}</td>
                    <td>
                      <button>
                        <FaTrashAlt />
                      </button>
                    </td>
                    <td>
                      <button onClick={() => navegar(`/admin/infos-user/${usuario.id}`)}>
                        <IoDocumentText />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </DivViewUsers>
  );
}

export default ViewUsers;