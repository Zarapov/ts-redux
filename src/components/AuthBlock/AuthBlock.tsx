import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import InputPassword from '../InputPassword/InputPassword';

const AuthBlock: React.FC = () => {
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const { authLogin, authPassword, message } = useTypedSelector(state => state.authForm);
    const { isLoggedIn } = useTypedSelector(store=>store.auth);
    const { changeAuthLogin, changeAuthPassword, login } = useActions();
    const { state } = useLocation();
    const auth = (): void => {
        if (authLogin === "") {
            setErrorLogin(true);
            return;
        }
        if (authPassword === "") { 
            setErrorPassword(true);
            return;
        }
        if (errorLogin || errorPassword) return;
        login(authLogin,authPassword);
    }
    if(isLoggedIn) {
        const origin = ( state as {from:string})?.from || "/main";
        return <Navigate to={origin} replace/>
    }
    return (
        <div className='auth-dialog'>
            <label htmlFor='authLogin'>Логин</label>
            <input
                id="authLogin"
                name="username"
                className={errorLogin ? "input-error" : ""}
                type="text"
                value={authLogin}
                onChange={e => {
                    changeAuthLogin(e.currentTarget.value);
                    setErrorLogin(false);
                }
                }
                placeholder="Логин"
            />
            {errorLogin && <span className='warning-span'>Введите логин!</span>}
            <label htmlFor='authPassword'>Пароль</label>
            <InputPassword
                id='authPassword'
                name="password"
                className={errorPassword ? "input-error" : ""}
                value={authPassword}
                onChange={e => {
                    changeAuthPassword(e.currentTarget.value);
                    setErrorPassword(false);
                }
            }
            />
            {errorPassword && <span className='warning-span'>Введите пароль!</span>}
            <button type='button' className='btn btn-confirm' onClick={auth}>
                Войти
            </button>
            {message!==""&&<span>{message}</span>}
        </div>
    )
}
export default AuthBlock;