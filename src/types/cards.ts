import React from "react";

export interface IItemCard{
    id:string;
    src:string;
    text:string;
    children?:React.ReactNode|null;
    onClick?:()=>void;
}
export interface IItemCardArrayElement{
    id:string;
    src:string;
    text:string;
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
}
interface AddItemCardAction{
    type:ItemCardActionTypes.ADD_ITEM_CARD
}
interface DeleteItemCardAction{
    type:ItemCardActionTypes.DELETE_ITEM_CARD,
    payload:string
}
export type ItemCardAction = AddItemCardAction | DeleteItemCardAction