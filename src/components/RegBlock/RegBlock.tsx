import React, { useState } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import InputPassword from '../InputPassword/InputPassword';

const RegBlock: React.FC = () => {
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorCheckPassword, setErrorCheckPassword] = useState(false);
    const { regPassword,
        regLogin,
        regRepeatPassword,
        message } = useTypedSelector(store => store.authForm);
    const { changeRegLogin,
        changeRegPassword,
        changeRegRepeatPassword,
        register } = useActions();
    const reg = (): void => {
        if (regLogin === "") { setErrorLogin(true); return; }
        if (regPassword === "") { setErrorPassword(true); return; }
        if (checkPasswords()) return;
        if (errorLogin || errorPassword || errorCheckPassword) return;
        register(regLogin,regPassword);
    }
    const checkPasswords = (): boolean => {
        if (regPassword !== regRepeatPassword) {
            setErrorCheckPassword(true);
            return true;
        }
        return false;
    }
    return (
        <div className='auth-dialog'>
            <label htmlFor='regLogin'>Логин</label>
            <input
                id="regLogin"
                name="username"
                className={errorLogin ? "input-error" : ""}
                type="text"
                value={regLogin}
                onChange={e => {
                    changeRegLogin(e.currentTarget.value);
                    setErrorLogin(false);
                }
                }
                placeholder="Логин"
            />
            {errorLogin && <span className='warning-span'>Введите логин!</span>}
            <label htmlFor='regPassword'>Пароль</label>
            <InputPassword
                id='regPassword'
                name="password"
                className={errorPassword ? "input-error" : ""}
                value={regPassword}
                onChange={e => {
                    changeRegPassword(e.currentTarget.value);
                    setErrorPassword(false);
                }
                }
            />
            {errorPassword && <span className='warning-span'>Введите пароль!</span>}
            <label htmlFor='regRepeatPassword'>Повторите пароль</label>
            <InputPassword
                id="regRepeatPassword"
                name="password"
                className={errorCheckPassword ? "input-error" : ""}
                value={regRepeatPassword}
                onChange={e => {
                    changeRegRepeatPassword(e.currentTarget.value);
                    setErrorCheckPassword(false);
                }
                }
                onBlur={checkPasswords}
            />
            {errorCheckPassword && <span className='warning-span'>Введенные пароли не совпадают!</span>}
            <button
                type='button'
                className='btn btn-confirm'
                onClick={reg}
            >Зарегистрироваться</button>
            {message!==""&&<span>{message}</span>}
        </div>
    )
}

export default RegBlock;