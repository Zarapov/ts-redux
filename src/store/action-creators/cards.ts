//import { Dispatch } from "react";
import { ItemCardAction, ItemCardActionTypes } from "../../types/cards";

export const addItemCard = ():ItemCardAction =>{
    return {type:ItemCardActionTypes.ADD_ITEM_CARD}
}
export const deleteItemCard = (id:string):ItemCardAction =>{
    return {type:ItemCardActionTypes.DELETE_ITEM_CARD,payload:id}
}