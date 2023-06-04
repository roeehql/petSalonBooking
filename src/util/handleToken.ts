export const TOKEN = 'USER_TOKEN';

export const handleToken = {
    setToken : (token:string) => {
        localStorage.setItem(TOKEN,JSON.stringify(token))
    },
    getToken : () =>{
        const result = localStorage.getItem(TOKEN)
        if(typeof result === "string"){
            return result;
        }else{
            return "empty"
        }
    },
    clearToken: ()=> {
        localStorage.removeItem(TOKEN)
    },
}