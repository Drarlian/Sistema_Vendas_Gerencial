import LoginPage from '../pages/Login';

const AuthGuard = ({children}: {children: JSX.Element}) => {
    const user = true;

    if (user){
        return children
    } else {
        return <LoginPage />
    }
}

export default AuthGuard;