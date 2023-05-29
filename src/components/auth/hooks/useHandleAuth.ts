import {FormEvent, useState} from "react";
import AuthApi, { AuthState } from "../../../api/authApi";
import { handleToken } from "./utill";
import {useNavigate} from "react-router-dom"

export const useHandleAuth = ({data, isNewAccount}:{data: AuthState , isNewAccount:boolean}) => {    
    const navigate = useNavigate();
    const [resultMessage, setResultMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    
    const loginUser = async () => {
        const result = await AuthApi.login({tel:data.tel ,password:data.password});
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