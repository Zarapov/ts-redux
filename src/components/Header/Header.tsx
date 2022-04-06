import React from "react";
import ProfileButton from "../ProfileButton/ProfileButton";
import "./Header.css";

const Header:React.FC = () =>{
    return(
        <div className="header">
            <ProfileButton/>
        </div>
    )
}
export default Header;