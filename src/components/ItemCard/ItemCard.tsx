import React from "react";
import "./ItemCard.css";
interface IItemCard{
    src:string;
    text:string;
}
const ItemCard:React.FC<IItemCard> = ({src,text}) => {
    return(
        <div>
            <img src={process.env.PUBLIC_URL+"/"+src} alt="house"/>
            <span>{text}</span>
        </div>
    )
}
export default ItemCard;