import React from "react";
import "./ItemCard.css";
import { IAddCard, IItemCard } from "../../types/cards";
const ItemCard: React.FC<IAddCard | IItemCard> = (
    { 
        src = process.env.REACT_APP_ICONS_PATH+"plus-add.svg", 
        text = "Добавить", 
        children = null,
        onClick=()=>{}
    }) => {
    
    return (
        <div className="item-card" onClick={onClick}>
            <img src={`${src}`} alt="card" />
            <span>{text}</span>
            {children}
        </div>
    )
}
export default ItemCard;