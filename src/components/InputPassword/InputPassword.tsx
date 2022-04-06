import React, { useState } from 'react';
import './InputPassword.css';
interface IInputPassword extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputPassword: React.FC<IInputPassword> = ({ placeholder = "Пароль", onChange, ...rest }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div>
                <input
                    type={showPassword ? "text" : "password"}
                    onChange={e => onChange(e)}
                    placeholder={placeholder}
                    {...rest}
                />
                <i className={`toggle-password${showPassword ? " hide" : ""}`} 
                onClick={e => setShowPassword(!showPassword)}></i>
            </div>

        </>
    )
}
export default InputPassword;