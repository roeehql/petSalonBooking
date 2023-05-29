export const TOKEN = 'USER_TOKEN';

export const handleToken = {
    setToken : (token:string)=>{localStorage.setItem(TOKEN,JSON.stringify(token))},
    getToken : ()=>{return localStorage.getItem(TOKEN)},
    clearToken : ()=>{localStorage.removeItem(TOKEN)},
}