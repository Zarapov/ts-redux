export enum CardImagesActionTypes{
    SET_CARD_IMAGES="SET_CARD_IMAGES"
}
export interface SetCardImageActionType{
    type:CardImagesActionTypes.SET_CARD_IMAGES;
    payload:string[];
}
export type CardImagesActions = SetCardImageActionType; 