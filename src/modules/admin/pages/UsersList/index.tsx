import React, { useContext } from 'react';
import { DivUsersList } from './styles';
import { Button } from '@mui/material';
import { LuSearch } from 'react-icons/lu';
import { AuthContext } from '../../../../contexts/AuthContext';
import { IoDocumentText } from 'react-icons/io5';
import { FaTrashAlt } from 'react-icons/fa';

// import { Container } from './styles';

const UsersList: React.FC = () => {
  // id: number,
  // usuario: string, <-
  // senha: string,
  // email: string, <-
  // nome: string, <-
  // primeiro_nome: string,
  // ultimo_nome: string,
  // idade: number,
  // cargo: string, <-
  // sexo: string,
  // role: string, <-

  const { usuarios } = useContext(AuthContext)

  return (
    <DivUsersList>
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
                      <button>
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
    </DivUsersList>
  );
}

export default UsersList;