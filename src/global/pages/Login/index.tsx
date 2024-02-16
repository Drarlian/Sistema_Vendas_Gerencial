import React, { useContext, useState } from 'react';
// import { toast } from 'react-toastify';
import { DivLogin } from './styles';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

const LoginPage: React.FC = () => {
    const [ usuario, setUsuario ] = useState('');
    const [ senha, setSenha ] = useState('');

    const { fazerLogin } = useContext(AuthContext)

    const navegar = useNavigate();

    function logar(event: any){
        event.preventDefault()

        if (usuario && senha){
            const resultado = fazerLogin(usuario, senha)
            setUsuario('');
            setSenha('');

            if (resultado){
                if(resultado.role == 'USER'){
                    navegar('/seller')
                } else if(resultado.role == 'ADMIN'){
                    navegar('/admin')
                }
            }
        }
    }

  return (
    <DivLogin>
        <div className='container-login'>
            <form>
                <h2>Login</h2>
                <label>Login:</label>
                <TextField id="outlined-basic" label="Login" variant="outlined" onChange={(e) => setUsuario(e.target.value)} />
                <label>Senha:</label>
                <TextField id="outlined-basic" label="Senha" variant="outlined" onChange={(e) => setSenha(e.target.value)} type='password'/>
                <Button variant="contained" type="submit" onClick={logar}>Entrar</Button>
            </form>
        </div>
    </DivLogin>
  );
}

export default LoginPage;