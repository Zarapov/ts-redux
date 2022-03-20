import React from "react";
import "./ItemCard.css";
import ActionsMenu from '../ActionsMenu/ActionsMenu';
import { IAddCard, IItemCard } from "../../types/cards";
import { useActions } from "../../hooks/useAction";

const ItemCard:React.FC<IAddCard|IItemCard> = ({id=null,src="images/plus-add.svg",text="Добавить"}) => {
    const {addItemCard,deleteItemCard} = useActions();
    const { showModalWindow } = useActions();
    const onClickHandler = ():void=>{
        if(id){
            alert(id);
        }else{
            addItemCard();
        }
    }
    const onDeleteHandler = (id:string):void=>{
        showModalWindow({height:"300px",width:"500px",title:"Внимание!",children:<div></div>});
       // deleteItemCard(id)
    }
    return(
        <div className="item-card" onClick={onClickHandler}>
            <img src={process.env.PUBLIC_URL+"/"+src} alt="card"/>
            <span>{text}</span>
            {
                id!==null?<ActionsMenu onDeleteClick={()=>onDeleteHandler(id)}/>:null
            }
        </div>
    )
}
export default ItemCard;