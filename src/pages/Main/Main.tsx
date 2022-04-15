import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ActionsMenu from '../../components/ActionsMenu/ActionsMenu';
import { useActions } from "../../hooks/useAction";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";
import EditCardDialog from "../../components/EditCardDialog/EditCardDialog";
import { useNavigate } from "react-router-dom";
import "./Main.css";
const Main: React.FC = () => {
    const cards = useTypedSelector(state => state.cards);
    const images = useTypedSelector(store => store.cardImages);
    const nagivate = useNavigate();
    const { showModalWindow, deleteItemCard, getItemCards } = useActions();
    useEffect(() => {
        const checkLocal = localStorage.getItem("cards");
        if (checkLocal) return;
        getItemCards();
    }, [])
    const onDeleteHandler = (id: string): void => {
        showModalWindow(
            {
                title: "Удалить объект?",
                children: <ConfirmDialog
                    confirmFC={() => deleteItemCard(id)}
                    confirmText="Удалить"
                />
            }
        );
    }
    const onEditHandler = (id?: string): void => {
        showModalWindow(
            {
                title: id ? "Редактировать объект" : "Добавить объект",
                children: <EditCardDialog id={id} list={images} />
            }
        )
    }
    return (
        <>
            <Header />
            <div className="content-block">
                <h1>Главная</h1>
                <div className="flex-wrapper">
                    {
                        cards.sort.map(id => {
                            return (
                                <ItemCard
                                    key={id}
                                    id={cards.cards[id].id}
                                    src={process.env.REACT_APP_CARD_IMAGES_PATH + cards.cards[id].image}
                                    text={cards.cards[id].title}
                                    onClick={() => nagivate('/details', { state: { id } })}
                                >
                                    <ActionsMenu
                                        onDeleteClick={() => onDeleteHandler(cards.cards[id].id)}
                                        onEditClick={() => onEditHandler(cards.cards[id].id)}
                                    />
                                </ItemCard>
                            )
                        })
                    }
                    <ItemCard onClick={() => onEditHandler()} />
                </div>
            </div>
        </>
    )
}
export default Main;