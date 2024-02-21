import React, { useContext, useState } from 'react';
// import { toast } from 'react-toastify';
import { DivLogin } from './styles';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import ImagemFundo from '../../../assets/login-background.jpg'

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
        <div className='container-imagem'>
            <div className='div-imagem'>
                <img src={ImagemFundo} />
            </div>
        </div>
        <div className='container-formulario'>
            <div className='div-formulario'>
                <form>
                    <div className='div-titulos'>
                        <h2>Título</h2>
                        <h3>Sub Título</h3>
                    </div>
                    <div className='div-input'>
                        <label>Login</label>
                        <input name='login' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    </div>
                    <div className='div-input'>
                        <label>Senha</label>
                        <input name='senha' value={senha} onChange={(e) => setSenha(e.target.value)} type='password' />
                    </div>
                    <Button variant="contained" type="submit" onClick={logar}>Entrar</Button>
                </form>
            </div>
        </div>
    </DivLogin>
  );
}

export default LoginPage;