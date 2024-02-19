import { ReactNode, createContext, useEffect, useState } from "react";
import { UserType } from "../../@types/UserType";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";

type AuthContextType = {
    usuarios: UserType[],
    usuarioAtual: UserType | null,
    fazerLogin: (usuario: string, senha: string) => UserType | null,
    fazerLogout: () => null,
    cadastrarUsuario: (usuario: string, senha: string, email: string, nome: string, idade: number, cargo: string, sexo: string, role: string) => void,
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [ usuarios, setUsuarios ] = useState<UserType[]>([
        {
            id: 1,
            usuario: 'renatinho321',
            senha: '123',
            email: 'renato@gmail.com',
            nome: 'Renato Alberto',
            primeiro_nome: 'Renato',
            ultimo_nome: 'Alberto',
            idade: 25,
            cargo: 'Cantor',
            sexo: 'M',
            role: 'USER'
        },
        {
            id: 2,
            usuario: 'carlinhos',
            senha: '321',
            email: 'carlos@gmail.com',
            nome: 'Carlos Eduardo',
            primeiro_nome: 'Carlos',
            ultimo_nome: 'Eduardo',
            idade: 53,
            cargo: 'Pintor',
            sexo: 'M',
            role: 'USER'
        },
        {
            id: 3,
            usuario: 'art',
            senha: '654321',
            email: 'art@gmail.com',
            nome: 'Arthur Leywin',
            primeiro_nome: 'Arthur',
            ultimo_nome: 'Leywin',
            idade: 22,
            cargo: 'Executivo',
            sexo: 'M',
            role: 'ADMIN'
        },
        {
            id: 4,
            usuario: 'yaya',
            senha: '123456',
            email: 'yasmin@gmail.com',
            nome: 'Yasmin Barbosa',
            primeiro_nome: 'Yasmin',
            ultimo_nome: 'Barbosa',
            idade: 20,
            cargo: 'Secretaria',
            sexo: 'F',
            role: 'USER'
        }
    ]);
    const [ usuarioAtual, setUsuarioAtual ] = useState<UserType | null>(null);

    const expiracao = new Date();
    expiracao.setDate(expiracao.getDate()+ 7);

   function fazerLogin(usuario: string, senha: string){
        let usuarioExistente: UserType[] = usuarios.filter((pessoa) => pessoa.usuario == usuario && pessoa.senha == senha)

        if (usuarioExistente.length > 0){
            Cookies.set('usuario', JSON.stringify(usuarioExistente[0]), {expires: expiracao})
            setUsuarioAtual(usuarioExistente[0])
            // toast.success('Entrando...')
            return usuarioExistente[0]
        } else {
            toast.error('Usuário não encontrado!')
            return null
        }
    }

    function fazerLogout(){
        Cookies.remove('usuario');
        setUsuarioAtual(null!);
        return null
    }

    useEffect(() => {
        const infosUsuario = Cookies.get('usuario');
        if (infosUsuario){
            setUsuarioAtual(JSON.parse(infosUsuario))
        }
    }, [])

    function cadastrarUsuario(nomeUsuario: string, senha: string, email: string, nome: string, idade: number, cargo: string, sexo: string, role: string){
        const id = usuarios.length + 1;
        const nomeDividido = nome.split(' ')
        const primeiroNome = nomeDividido[0]
        const ultimoNome = nomeDividido[nomeDividido.length -1]

        const usuario: UserType = {
            id,
            usuario: nomeUsuario,
            senha,
            email,
            nome,
            primeiro_nome: primeiroNome,
            ultimo_nome: ultimoNome,
            idade,
            cargo,
            sexo,
            role
        }

        setUsuarios([...usuarios, usuario])
    }

    return <AuthContext.Provider value={{ usuarios, usuarioAtual, fazerLogin, fazerLogout, cadastrarUsuario }}>{children}</AuthContext.Provider>
}