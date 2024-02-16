import React, { useContext } from 'react';
import { DivMenu } from './styles';
import { AuthContext } from '../../../contexts/AuthContext';

// import { Container } from './styles';

const Menu: React.FC = () => {
  const { usuarioAtual } = useContext(AuthContext)

  return (
    <DivMenu>
      <h2>Seja bem-vindo(a),</h2>
      <h1>{usuarioAtual.nome}</h1>
    </DivMenu>
  );
}

export default Menu;