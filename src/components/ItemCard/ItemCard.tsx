import React from "react";
import "./ItemCard.css";
import { IAddCard, IItemCard } from "../../types/cards";
const ItemCard: React.FC<IAddCard | IItemCard> = (
    { 
        src = "images/plus-add.svg", 
        text = "Добавить", 
        children = null,
        onClick=()=>{}
    }) => {
    
    return (
        <div className="item-card" onClick={onClick}>
            <img src={process.env.PUBLIC_URL + "/" + src} alt="card" />
            <span>{text}</span>
            {children}
        </div>
    )
}
export default ItemCard;