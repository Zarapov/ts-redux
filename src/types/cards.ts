import React from "react";

export interface IItemCard{
    id:string;
    src:string;
    text:string;
    children?:React.ReactNode|null;
    onClick?:()=>void;
}
export interface IItemCardElement{
    id:string;
    src:string;
    text:string;
}
export interface IItemCardStore{
    cardArr:Array<string>;
    cardObj:{
        [index:string]:IItemCardElement;
    };
}
export interface IAddCard{
    id?:null;
    src?:null;
    text?:null;
    onClick:()=>void;
}
export enum ItemCardActionTypes{
    ADD_ITEM_CARD = "ADD_ITEM_CARD",
    DELETE_ITEM_CARD = "DELETE_ITEM_CARD",
    EDIT_ITEM_CARD = "EDIT_ITEM_CARD",
}
interface AddItemCardAction{
    type:ItemCardActionTypes.ADD_ITEM_CARD,
    payload:{
        name:string;
        image:string;
    };
}
interface DeleteItemCardAction{
    type:ItemCardActionTypes.DELETE_ITEM_CARD,
    payload:string
}
interface EditItemCardAction{
    type:ItemCardActionTypes.EDIT_ITEM_CARD,
    payload:IItemCardElement
}
export type ItemCardAction = AddItemCardAction | DeleteItemCardAction | EditItemCardAction