import React, { useContext } from 'react';
import { DivHeader } from './styles';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import SideBar from '../SideBar';
import { UtilsContext } from '../../../contexts/UtilsContext';

// import { Container } from './styles';

const Header: React.FC = () => {
    const {alterarStatusSideBar} = useContext(UtilsContext)

    return (
        <DivHeader>
            <SideBar />
            <button onClick={alterarStatusSideBar} className='sideBarButton'><HiMiniBars3BottomLeft /></button>
            <div>
                <p>Conteúdos do Usuário</p>
            </div>
        </DivHeader>
    );
}

export default Header;