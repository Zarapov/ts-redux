import React from 'react';
import "./ActionsMenu.css";

interface IActionsMenu{
    onDeleteClick:()=>void;
    onEditClick:()=>void;
}

const ActionsMenu:React.FC<IActionsMenu> = ({onDeleteClick,onEditClick})=>{
    const onClickHandler=(e:React.MouseEvent,type:string)=>{
        e.stopPropagation();
        switch(type){
            case "delete":
                onDeleteClick();
                break;
            case "edit":
                onEditClick();
                break;
            default: return
        }
        
    }
    return(
        <div className='actions-menu'>
            <div className='edit' title="Редактировать" onClick={e=>onClickHandler(e,"edit")}></div>
            <div className='delete' title="Удалить" onClick={e=>onClickHandler(e,"delete")}></div>
        </div>
    )
}
export default ActionsMenu;