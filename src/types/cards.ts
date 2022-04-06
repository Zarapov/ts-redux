import React from "react";

export interface IItemCard {
    id: string;
    src: string;
    text: string;
    children?: React.ReactNode | null;
    onClick?: () => void;
}
export interface ICardPayload {
    title: string;
    image: string;
}
export interface IItemCardElement extends ICardPayload{
    id: string;
}
export interface IItemCardStore {
    sort: Array<string>;
    cards: {
        [index: string]: IItemCardElement;
    };
}
export interface IAddCard {
    id?: null;
    src?: null;
    text?: null;
    onClick: () => void;
}
export enum ItemCardActionTypes {
    SET_CARDS_STATE = "SET_CARDS_STATE"
}

interface SetCardsStateAction {
    type: ItemCardActionTypes.SET_CARDS_STATE,
    card:IItemCardStore
}
export type ItemCardAction = SetCardsStateAction