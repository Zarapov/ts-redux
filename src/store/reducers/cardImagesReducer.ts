import { CardImagesActions, CardImagesActionTypes } from '../../types/cardImages';
const imagesFromStorage = localStorage.getItem("cardsImages");
const initialState = imagesFromStorage?
    JSON.parse(imagesFromStorage):[];

export const cardImagesReducer = (state = initialState, action: CardImagesActions): string[] => {
    switch (action.type) {
        case CardImagesActionTypes.SET_CARD_IMAGES:
            return action.payload;
        default: return state;
    }
}