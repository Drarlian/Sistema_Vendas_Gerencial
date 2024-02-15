import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { DivLogin } from './styles';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

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
                <div>
                    <label>Usuário:</label>
                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder='login...' />
                </div>
                <div>
                    <label>Senha:</label>
                    <input value={senha} onChange={(e) => setSenha(e.target.value)} type='password' placeholder='senha...' />
                </div>
                <div>
                    <button onClick={logar}>Entrar</button>
                </div>
            </form>
        </div>
    </DivLogin>
  );
}

export default LoginPage;