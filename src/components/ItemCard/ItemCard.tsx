import React from "react";
import "./ItemCard.css";
import ActionsMenu from '../ActionsMenu/ActionsMenu';
interface IItemCard{
    id:string;
    src:string;
    text:string;
}
const ItemCard:React.FC<IItemCard> = ({id,src,text}) => {
    return(
        <div className="item-card">
            <img src={process.env.PUBLIC_URL+"/"+src} alt="card"/>
            <span>{text}</span>
            {
                id!=="add"?<ActionsMenu/>:null
            }
        </div>
    )
}
export default ItemCard;