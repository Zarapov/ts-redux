import React from "react";
import Header from "../components/Header/Header";
import ItemCard from "../components/ItemCard/ItemCard";
const items: Array<{ src: string, text: string, id: string }> = [
    { src: "images/house.svg", text: "Квартира", id: "1" },
    { src: "images/house.svg", text: "Дача", id: "2" },
    { src: "images/plus-add.svg", text: "Добавить", id: "add" }
]
const Main: React.FC = () => {
    return (
        <>
            <Header/>
            <div className="content-block">
                <h1>Главная</h1>
                <div className="flex-wrapper">
                    {
                        items.map(item => <ItemCard key={item.id} id={item.id} src={item.src} text={item.text} />)
                    }
                </div>
            </div>
        </>
    )
}
export default Main;