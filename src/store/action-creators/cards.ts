//import { Dispatch } from "react";
import { ItemCardAction, ItemCardActionTypes, IItemCardElement, IAddItemPayload } from "../../types/cards";

export const addItemCard = (payload:IAddItemPayload): ItemCardAction => {
    return { type: ItemCardActionTypes.ADD_ITEM_CARD, payload }
}
export const deleteItemCard = (id: string): ItemCardAction => {
    return { type: ItemCardActionTypes.DELETE_ITEM_CARD, payload: id }
}
export const editItemCard = (obj:IItemCardElement):ItemCardAction => {
    return {type:ItemCardActionTypes.EDIT_ITEM_CARD,payload:obj}
}