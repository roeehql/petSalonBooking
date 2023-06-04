import { useState } from "react"
import { handleToken } from "util/handleToken";

export const useCheckUser = () => {
    const [hasToken, setHasToken] = useState(false);

    const getUserToken = () => {
        if(handleToken.getToken() !== null) {
            setHasToken(true)
        }
    }

    return {hasToken , getUserToken}
}