import React from "react";
import Header from "../components/Header/Header";
import ItemCard from "../components/ItemCard/ItemCard";
import ModalWindow from "../components/ModalWindow/ModalWindow";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ActionsMenu from '../components/ActionsMenu/ActionsMenu';
import { useActions } from "../hooks/useAction";
import DeleteDialog from "../components/DeleteDialog/DeleteDialog";
const Main: React.FC = () => {
    const cards=useTypedSelector(state=>state.cards);
    const { visibility } = useTypedSelector(state=>state.modalWindow);
    const { showModalWindow, addItemCard, deleteItemCard} = useActions();
    const onDeleteHandler = (id: string): void => {
        showModalWindow(
            {
                title: "Удалить объект?",
                children: <DeleteDialog deleteFC={()=>deleteItemCard(id)}/>
            }
        );
    }

    return (
        <>
            <Header/>
            <div className="content-block">
                <h1>Главная</h1>
                <div className="flex-wrapper">
                    {
                        cards.map(card => {
                            return(
                                <ItemCard key={card.id} id={card.id} src={card.src} text={card.text} onClick={()=>alert(card.id)}>
                                    <ActionsMenu onDeleteClick={() => onDeleteHandler(card.id)} />
                                </ItemCard>
                            )
                        })
                    }
                    <ItemCard onClick={addItemCard}/>
                </div>
                {visibility?<ModalWindow/>:null}
            </div>
        </>
    )
}
export default Main;