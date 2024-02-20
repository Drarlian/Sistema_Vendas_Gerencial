import React, { useContext } from 'react';
import { DivInfosUser } from './styles';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthContext';

const InfosUser: React.FC = () => {
  const { id } = useParams();

  const { usuarios } = useContext(AuthContext);

  const usuario = usuarios.filter((atual) => String(atual.id ) == id)[0]

  return (
    <DivInfosUser>
        <div className='container-infos-user'>
            <h1>Dado do Usuário X</h1>
            <form>
              <input />
              <input />
              <input />
              <input />
              <input />
              <input />
              <input />
            </form>
        </div>
    </DivInfosUser>
  );
}

export default InfosUser;