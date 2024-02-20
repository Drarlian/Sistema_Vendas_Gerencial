import React from 'react';
import { DivUsersList } from './styles';
import { Button } from '@mui/material';
import { LuSearch } from 'react-icons/lu';

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
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>
              <tr>
                <td>Teste</td>
                <td>Teste da Silva</td>
                <td>teste@gmail.com</td>
                <td>Tester</td>
                <td>User</td>
                <td><button>A</button></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </DivUsersList>
  );
}

export default UsersList;