import React from 'react';
import { toast } from 'react-toastify';

// import { Container } from './styles';

const LoginPage: React.FC = () => {
    function alerta(event: any){
        event.preventDefault()
        toast.success('Aviso Sucesso')
    }

  return (
    <div>
        <form>
            <div>
                <label>Login</label>
                <input />
            </div>
            <div>
                <label>Senha</label>
                <input />
            </div>
            <div>
                <button onClick={alerta}>Entrar</button>
            </div>
        </form>
    </div>
  );
}

export default LoginPage;