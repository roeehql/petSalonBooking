import { useState , useEffect } from "react"
import { useAppSelector } from "store/hooks";
import { handleToken } from "util/handleToken";

export const useCheckUser = () => {
    const [hasToken, setHasToken] = useState(false);
    const userInfo = useAppSelector((state) => state.userInfo.value);

    const getUserToken = () => {
        if(handleToken.getToken() !== "empty") {
            setHasToken(true)
        }else{
            setHasToken(false)
        }
    }

    useEffect(() => {
      getUserToken()
    }, [userInfo])
    

    return {hasToken , getUserToken}
}