import React from 'react';
import { ItemCardAction } from '../../types/cards';
import "./ActionsMenu.css";

interface IActionsMenu{
    onDeleteClick:()=>void
}

const ActionsMenu:React.FC<IActionsMenu> = ({onDeleteClick})=>{
    const onDeleteHandler=(e:React.MouseEvent)=>{
        e.stopPropagation();
        onDeleteClick();
    }
    return(
        <div className='actions-menu'>
            <div className='edit' title="Редактировать"></div>
            <div className='delete' title="Удалить" onClick={e=>onDeleteHandler(e)}></div>
        </div>
    )
}
export default ActionsMenu;