import {FormEvent, useState} from "react";
import AuthApi from "api/authApi";
import { AuthState } from "types/AuthTypes";
import { handleToken } from "util/handleToken";
import {useNavigate} from "react-router-dom"
import { useAppDispatch } from "store/hooks";
import { setUserInfo } from "store/userInfoSlice";

export const useHandleAuth = ({data, isNewAccount}:{data: AuthState , isNewAccount:boolean}) => {    
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [resultMessage, setResultMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

    const loginUser = async () => {
        const result = await AuthApi.login({tel:data.tel ,password:data.password});
        dispatch(setUserInfo({name:result.user.name, tel:result.user.tel}))
        return {token:result.token,message:result.message}
    }
    
    const handleToast = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);    
        }, 3000);
    }

    const setResult = (message:string,token:string) =>{
        setResultMessage(message);
        handleToken.setToken(token);
        dispatch(setUserInfo({name: data.name, tel:data.tel}))
        handleToast();
        navigate("/")
    }

    const handleResult = ({token, message}:{token:string,message:string}) => {
        if(message === "성공적으로 로그인 했습니다" || message === "계정이 성공적으로 생성되었습니다"){
            setResult(message,token);
        }else{
            setResultMessage("죄송합니다. 다시 시도해주세요.");
            handleToast();
        }
    }
    
    const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(isNewAccount){
            const result = await AuthApi.signup(data);
            handleResult({token:result.token,message:result.message})
        }else{
            handleResult(await loginUser())
        }
    }

    return {handleSubmit, resultMessage, showToast}
}