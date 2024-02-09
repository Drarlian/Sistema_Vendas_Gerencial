import { ReactNode, createContext, useState } from "react";

type UtilsContextType = {
    statusSideBar: boolean;
    alterarStatusSideBar: () => void;
}

export const UtilsContext = createContext({} as UtilsContextType)

export const UtilsProvider = ({children}: {children: ReactNode}) => {
    const [statusSideBar, setStatusSideBar] = useState<boolean>(false);

    function alterarStatusSideBar(){
        setStatusSideBar(!statusSideBar);
    }

    return <UtilsContext.Provider value={{statusSideBar, alterarStatusSideBar}}>{children}</UtilsContext.Provider>
}