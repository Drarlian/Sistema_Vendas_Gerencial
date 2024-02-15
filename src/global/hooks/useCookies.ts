export  const useCookies = () => ({
    getCookie: (chave: string): Object => {
        return {}
    },
    createCookie: (chave: string, valor: Object): boolean => {
        return true
    },
    deleteCookie: (chave: string): boolean => {
        return true
    }
})