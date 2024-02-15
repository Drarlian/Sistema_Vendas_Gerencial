import { useContext } from 'react';
import LoginPage from '../pages/Login';
import { AuthContext } from '../../contexts/AuthContext';

const AuthGuard = ({children}: {children: JSX.Element}) => {
    const { usuarioAtual } = useContext(AuthContext);

    if (usuarioAtual){
        return children
    } else {
        return <LoginPage />
    }
}

export default AuthGuard;