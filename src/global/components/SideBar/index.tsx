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

    const { fazerLogout } = useContext(AuthContext);

    return (
        <>
            <DivSideBar status={statusSideBar}>
                <div className='top-sideBar'>
                    <h2>Title</h2>
                </div>
                <div className='main-sideBar'>
                    <Link to={'/'} onClick={alterarStatusSideBar}><FaHome /> Home</Link>
                    <Link to={'/seller'} onClick={alterarStatusSideBar}><IoPeopleSharp /> Seller Page</Link>
                    <Link to={'/admin'} onClick={alterarStatusSideBar}><RiAdminFill /> Admin Page</Link>
                </div>
                <div className='bottom-sideBar'>
                    <button><IoSunny /></button>
                    <button onClick={fazerLogout}><CgLogOff /></button>
                    <button><IoSettings /></button>
                </div>
            </DivSideBar>
            <DivShadow status={statusSideBar} onClick={alterarStatusSideBar} />
        </>
    );
}

export default SideBar;