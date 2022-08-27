import React,{useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeAccess} from "../../store/reducers/AutorizationReducer";

export default function Verification(){

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [isError, setIsError] = useState(false)

    const dispatch = useDispatch()
    const trueLogPass = useSelector(state => state.autorization.loginPass)

    function getLogin({target}) {
        setLogin(target.value)
    }

    function getPass({target}) {
        setPass(target.value)
    }

    function clearLogPass(){
        setLogin('')
        setPass('')
    }


    function verification() {
        if(trueLogPass.login === login && trueLogPass.pass === pass){
            dispatch(changeAccess(true))
            clearLogPass()
        } else {
            setIsError(true)
            clearLogPass()
        }
    }

    return(
        <div>
            <div>Autorization</div>
            <div>login <input onChange={getLogin} value={login}/></div>
            <div>password <input onChange={getPass} value={pass}/></div>
            <div> <button onClick={verification}>submit</button> </div>
            <div>{isError ? 'неверный логин или пароль' : null}</div>
        </div>
    )
}