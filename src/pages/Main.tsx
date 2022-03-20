import React from "react";
import Header from "../components/Header/Header";
import ItemCard from "../components/ItemCard/ItemCard";
import ModalWindow from "../components/ModalWindow/ModalWindow";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Main: React.FC = () => {
    const cards=useTypedSelector(state=>state.cards);
    const { visibility } = useTypedSelector(state=>state.modalWindow);
    return (
        <>
            <Header/>
            <div className="content-block">
                <h1>Главная</h1>
                <div className="flex-wrapper">
                    {
                        cards.map(card => <ItemCard key={card.id} id={card.id} src={card.src} text={card.text} />)
                    }
                    <ItemCard/>
                </div>
                {visibility?<ModalWindow/>:null}
            </div>
        </>
    )
}
export default Main;