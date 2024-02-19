import React, { useContext, useState } from 'react';
import { DivRegister } from './styles';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { AuthContext } from '../../../../contexts/AuthContext';

const Register: React.FC = () => {
    const [ nomeUsuario, setNomeUsuario ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ nome, setPrimeiroNome ] = useState('');
    const [ idade, setIdade ] = useState('');
    const [ cargo, setCargo ] = useState('');
    const [ sexo, setSexo ] = useState('');
    const [ role, setRole ] = useState('');

    function handleChangeSexo(event: SelectChangeEvent){
        setSexo(event.target.value)
    }

    function handleChangeRole(event: SelectChangeEvent){
        setRole(event.target.value)
    }

    const { cadastrarUsuario } = useContext(AuthContext)

    function cadastrar(event: any){
        event.preventDefault();

        cadastrarUsuario(nomeUsuario, senha, email, nome, Number(idade), cargo, sexo, role)
    }
 
    return (
        <DivRegister>
            <div className='container-register'>
                <h1>Cadastro de Usuário</h1>
                <form>
                    <TextField id="outlined-basic" label="Usuário" variant="outlined" onChange={(e) => setNomeUsuario(e.target.value)} />
                    <TextField id="outlined-basic" label="Senha" variant="outlined" type='password' onChange={(e) => setSenha(e.target.value)} />
                    <TextField id="outlined-basic" label="Email" variant="outlined"  onChange={(e) => setEmail(e.target.value)} />
                    <TextField id="outlined-basic" label="Nome" variant="outlined"  onChange={(e) => setPrimeiroNome(e.target.value)} />
                    <TextField id="outlined-basic" label="Idade" variant="outlined" onChange={(e) => setIdade(e.target.value)} />
                    <TextField id="outlined-basic" label="Cargo" variant="outlined" onChange={(e) => setCargo(e.target.value)} />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sexo}
                            label="Sexo"
                            onChange={handleChangeSexo}
                        >
                            <MenuItem value={"M"}>Masculino</MenuItem>
                            <MenuItem value={"F"}>Feminino</MenuItem>
                            <MenuItem value={"O"}>Outro</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={role}
                            label="Role"
                            onChange={handleChangeRole}
                        >
                            <MenuItem value={"USER"}>User</MenuItem>
                            <MenuItem value={"ADMIN"}>Admin</MenuItem>
                        </Select>
                    </FormControl>
                    <div />
                    <div className='container-botao'>
                        <Button variant="contained">Voltar</Button>
                        <Button variant="contained" type="submit" onClick={cadastrar}>Cadastrar</Button>
                    </div>
                </form>
            </div>
        </DivRegister>
    );
}

export default Register;