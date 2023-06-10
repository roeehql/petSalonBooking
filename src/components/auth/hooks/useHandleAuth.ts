import {FormEvent} from "react";
import AuthApi from "api/authApi";
import { AuthState } from "types/AuthTypes";
import { handleToken } from "util/handleToken";
import {useNavigate} from "react-router-dom"
import { useAppDispatch } from "store/hooks";
import { setUserInfo } from "store/userInfoSlice";
import { setToast } from "store/toastSlice";

export const useHandleAuth = ({data, isNewAccount}:{data: AuthState , isNewAccount:boolean}) => {    
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const loginUser = async () => {
            const result = await AuthApi.login({tel:data.tel ,password:data.password});
            dispatch(setUserInfo({name:result.name, tel:result.tel,}))
            return {token:result.token,message:result.message}
    }

    const setResult = (message:string,token:string) =>{
        dispatch(setToast({type:"success", text: message}))
        handleToken.setToken(token);
        navigate("/")
    }

    const handleResult = ({token, message}:{token:string,message:string}) => {
        if(message === "성공적으로 로그인 했습니다" || message === "계정이 성공적으로 생성되었습니다"){
            setResult(message,token);
        }else{
        dispatch(setToast({type:"error", text: "죄송합니다. 다시 시도해주세요."}))
        }
    }
    
    const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try{
            if(isNewAccount){
                const result = await AuthApi.signup(data);
                dispatch(setUserInfo({name:data.name,tel:data.tel}))
                handleResult({token:result.token,message:result.message})
            }else{
                handleResult(await loginUser())
            }
        }catch(e){
            dispatch(setToast({type:"error", text: "죄송합니다. 다시 시도해주세요."}))
        }
    }

    return {handleSubmit}
}