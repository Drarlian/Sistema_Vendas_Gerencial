import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { DivLogin } from './styles';

const LoginPage: React.FC = () => {
    const [ usuario, setUsuario ] = useState('');
    const [ senha, setSenha ] = useState('');

    function alerta(event: any){
        event.preventDefault()
        toast.success('Aviso Sucesso')
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
                    <button onClick={alerta}>Entrar</button>
                </div>
            </form>
        </div>
    </DivLogin>
  );
}

export default LoginPage;