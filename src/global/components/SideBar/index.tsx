import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DivShadow, DivSideBar } from './styles';
import { UtilsContext } from '../../../contexts/UtilsContext';
import { FaHome } from "react-icons/fa";
import { IoPeopleSharp, IoSettings, IoSunny } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import { CgLogOff } from 'react-icons/cg';
import { AuthContext } from '../../../contexts/AuthContext';

// import { Container } from './styles';

const SideBar: React.FC = () => {
    const {statusSideBar, alterarStatusSideBar} = useContext(UtilsContext);

    const { usuarioAtual, fazerLogout } = useContext(AuthContext);

    function deslogar(){
        alterarStatusSideBar()
        fazerLogout()
    }

    return (
        <>
            <DivSideBar status={statusSideBar}>
                <div className='top-sideBar'>
                    <h2>Title</h2>
                </div>
                <div className='main-sideBar'>
                    <Link to={'/'} onClick={alterarStatusSideBar}><span><FaHome /></span> Home</Link>
                    {usuarioAtual?.role == 'USER'? <Link to={'/seller'} onClick={alterarStatusSideBar}><span><IoPeopleSharp /></span> Seller Page</Link>: ''}
                    {usuarioAtual?.role == 'ADMIN'? <Link to={'/admin'} onClick={alterarStatusSideBar}><span><RiAdminFill /></span> Admin Page</Link>: ''}
                    {usuarioAtual?.role == 'ADMIN'? <Link to={'/admin/register'} onClick={alterarStatusSideBar}><span><RiAdminFill /></span> Cadastrar Usuário</Link>: ''}
                    {usuarioAtual?.role == 'ADMIN'? <Link to={'/admin/users'} onClick={alterarStatusSideBar}><span><RiAdminFill /></span> Visualizar Usuários</Link>: ''}
                </div>
                <div className='bottom-sideBar'>
                    <button><IoSunny /></button>
                    <button onClick={deslogar}><CgLogOff /></button>
                    <button><IoSettings /></button>
                </div>
            </DivSideBar>
            <DivShadow status={statusSideBar} onClick={alterarStatusSideBar} />
        </>
    );
}

export default SideBar;