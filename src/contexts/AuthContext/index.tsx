import { ReactNode, createContext, useEffect, useState } from "react";
import { UserType } from "../../@types/UserType";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";

type AuthContextType = {
    usuarios: UserType[],
    usuarioAtual: UserType,
    fazerLogin: (usuario: string, senha: string) => UserType | null,
    fazerLogout: () => null,
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [ usuarios, setUsuarios ] = useState<UserType[]>([
        {
            usuario: 'renatinho321',
            senha: '123',
            nome: 'Renato Alberto',
            primeiro_nome: 'Renato',
            ultimo_nome: 'Alberto',
            idade: 25,
            cargo: 'Cantor',
            sexo: 'M',
            role: 'USER'
        },
        {
            usuario: 'carlinhos',
            senha: '321',
            nome: 'Carlos Eduardo',
            primeiro_nome: 'Carlos',
            ultimo_nome: 'Eduardo',
            idade: 53,
            cargo: 'Pintor',
            sexo: 'M',
            role: 'USER'
        },
        {
            usuario: 'art',
            senha: '654321',
            nome: 'Arthur Leywin',
            primeiro_nome: 'Arthur',
            ultimo_nome: 'Leywin',
            idade: 22,
            cargo: 'Executivo',
            sexo: 'M',
            role: 'ADMIN'
        },
        {
            usuario: 'yaya',
            senha: '123456',
            nome: 'Yasmin Barbosa',
            primeiro_nome: 'Yasmin',
            ultimo_nome: 'Barbosa',
            idade: 20,
            cargo: 'Secretaria',
            sexo: 'F',
            role: 'USER'
        }



    ]);
    const [ usuarioAtual, setUsuarioAtual ] = useState<UserType>(null!);

    const expiracao = new Date();
    expiracao.setDate(expiracao.getDate()+ 7);

   function fazerLogin(usuario: string, senha: string){
        let usuarioExistente: UserType[] = usuarios.filter((pessoa) => pessoa.usuario == usuario && pessoa.senha == senha)

        if (usuarioExistente.length > 0){
            Cookies.set('usuario', JSON.stringify(usuarioExistente[0]), {expires: expiracao})
            setUsuarioAtual(usuarioExistente[0])
            toast.success('Entrando...')
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

    return <AuthContext.Provider value={{usuarios, usuarioAtual, fazerLogin, fazerLogout}}>{children}</AuthContext.Provider>
}