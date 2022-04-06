import React, { useState } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import "./ProfileButton.css";

const ProfileButton:React.FC = () => {
    const {user} = useTypedSelector(store => store.auth);
    const {logout} = useActions();
    const [menuIsOpen,setMenuIsOpen]  = useState(false);
    const userLetter = user?.username.trim()[0].toUpperCase();
    return(
        <div className='profile-button' onClick={_=>setMenuIsOpen(!menuIsOpen)}>
            <span>{userLetter}</span>
            <div className={`profile-menu${menuIsOpen?" open":""}`}>
                <ul>
                    <li>
                        <span onClick={logout}>Выход</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ProfileButton;