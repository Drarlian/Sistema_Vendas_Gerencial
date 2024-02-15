import { ReactNode, createContext } from "react";

type AuthContextType = {

}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({children}: {children: ReactNode}) => {

    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}