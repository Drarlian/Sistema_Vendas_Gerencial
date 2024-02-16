import React, { useContext } from 'react';
import { DivHeader } from './styles';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import SideBar from '../SideBar';
import { UtilsContext } from '../../../contexts/UtilsContext';
import ImagemTeste from '../../../assets/test-user-icon.png';
import { AuthContext } from '../../../contexts/AuthContext';

// import { Container } from './styles';

const Header: React.FC = () => {
    const { alterarStatusSideBar } = useContext(UtilsContext)

    const { usuarioAtual } = useContext(AuthContext)

    return (
        <DivHeader>
            <SideBar />
                <div className='area-esquerda'>
                    <button onClick={alterarStatusSideBar} className='sideBarButton'><HiMiniBars3BottomLeft /></button>
                </div>
                <div className='infos-usuario'>
                    <div className='div-name-role'>
                        <h3>{usuarioAtual.nome}</h3>
                        <h4>{usuarioAtual.cargo}</h4>
                    </div>
                    <div className='div-imagem-usuario'>
                        <img src={ImagemTeste} />
                    </div>
                </div>
        </DivHeader>
    );
}

export default Header;