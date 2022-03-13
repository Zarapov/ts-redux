import React from "react";
import ItemCard from "../components/ItemCard/ItemCard";
const items:Array<{src:string,text:string}> = [
    {src:"images/house.svg",text:"TEST"},
    {src:"images/house.svg",text:"TEST"}
]
const Main: React.FC = () => {
    return(
        <div>
            <h1>Главная</h1>
            {
                items.map((item,index)=><ItemCard key={index} src={item.src} text={item.text}/>)
            }
        </div>
    )
}
export default Main;