import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DivShadow, DivSideBar } from './styles';
import { UtilsContext } from '../../../contexts/UtilsContext';

// import { Container } from './styles';

const SideBar: React.FC = () => {
    const {statusSideBar, alterarStatusSideBar} = useContext(UtilsContext)

    return (
        <>
            <DivSideBar status={statusSideBar}>
                <ul>
                <li><Link to={'/'}>Seller</Link></li>
                <li><Link to={'/admin'}>Admin</Link></li>
                </ul>
            </DivSideBar>
            <DivShadow status={statusSideBar} onClick={alterarStatusSideBar} />
        </>
    );
}

export default SideBar;