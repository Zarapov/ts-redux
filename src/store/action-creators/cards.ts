import { ItemCardAction, ItemCardActionTypes, ICardPayload } from "../../types/cards";
import { Dispatch } from "react";
import userService from "../../services/user.service";

export const getItemCards = () =>
    (dispatch: Dispatch<ItemCardAction>) => {
        return userService.getCardState().then(
            (res) => {
                dispatch({
                    type: ItemCardActionTypes.SET_CARDS_STATE,
                    card: res.state
                })
                return Promise.resolve();
            },
            (err) => {
                const message: string =
                    (err?.response?.message) ||
                    err?.message || err.toString();
                alert(message);
                return Promise.resolve();
            }
        )
    }


export const addItemCard = (card: ICardPayload) =>
    (dispatch: Dispatch<ItemCardAction>) => {
        return userService.addCard(card).then(
            (res) => {
                dispatch({
                    type: ItemCardActionTypes.SET_CARDS_STATE,
                    card: res.state
                });
                return Promise.resolve();
            },
            (err) => {
                const message: string =
                    (err?.response?.message) ||
                    err?.message || err.toString();
                alert(message);
                return Promise.resolve();
            }
        )
    }
export const deleteItemCard = (cardId: string) =>
    (dispatch: Dispatch<ItemCardAction>) => {
        return userService.deleteCard(cardId).then(
            (res) => {
                dispatch({
                    type: ItemCardActionTypes.SET_CARDS_STATE,
                    card: res.state
                });
                return Promise.resolve();
            },
            (err) => {
                const message: string =
                    (err?.response?.message) ||
                    err?.message || err.toString();
                alert(message);
                return Promise.resolve();
            }
        )
    }
export const editItemCard = (cardId: string, card: ICardPayload) =>
    (dispatch: Dispatch<ItemCardAction>) => {
        return userService.editCard(cardId, card).then(
            (res) => {
                dispatch({
                    type: ItemCardActionTypes.SET_CARDS_STATE,
                    card: res.state
                });
                return Promise.resolve();
            },
            (err) => {
                const message: string =
                    (err?.response?.message) ||
                    err?.message || err.toString();
                alert(message);
                return Promise.resolve();
            }
        )
    }
