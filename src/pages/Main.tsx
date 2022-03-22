import React from "react";
import Header from "../components/Header/Header";
import ItemCard from "../components/ItemCard/ItemCard";
import ModalWindow from "../components/ModalWindow/ModalWindow";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ActionsMenu from '../components/ActionsMenu/ActionsMenu';
import { useActions } from "../hooks/useAction";
import DeleteDialog from "../components/DeleteDialog/DeleteDialog";
import EditCardDialog from "../components/EditCardDialog/EditCardDialog";
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
    const onEditHandler = (id:string):void => {
        showModalWindow(
            {
                title:"Редактировать объект",
                children:<EditCardDialog id={id}/>
            }
        )
    }
    return (
        <>
            <Header/>
            <div className="content-block">
                <h1>Главная</h1>
                <div className="flex-wrapper">
                    {
                        cards.cardArr.map(id => {
                            return(
                                <ItemCard 
                                    key={cards.cardObj[id].id} 
                                    id={cards.cardObj[id].id} 
                                    src={cards.cardObj[id].src} 
                                    text={cards.cardObj[id].text} 
                                    onClick={()=>alert(cards.cardObj[id].id)}>
                                    <ActionsMenu 
                                        onDeleteClick={() => onDeleteHandler(cards.cardObj[id].id)}
                                        onEditClick={()=>onEditHandler(cards.cardObj[id].id)} 
                                    />
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