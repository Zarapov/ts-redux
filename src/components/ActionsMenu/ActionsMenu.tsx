import React from 'react';
import "./ActionsMenu.css";

const ActionsMenu:React.FC = ()=>{
    return(
        <div className='actions-menu'>
            <div className='edit' title="Редактировать"></div>
            <div className='delete' title="Удалить"></div>
        </div>
    )
}
export default ActionsMenu;