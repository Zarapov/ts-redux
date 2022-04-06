import { IItemCardStore, ItemCardActionTypes, ItemCardAction} from "../../types/cards";

const cardsFromStorage = localStorage.getItem("cards");
const cards = cardsFromStorage?
    JSON.parse(cardsFromStorage):
    {
        sort:[],
        cards:{}
    };
const initialState:IItemCardStore = cards;
export const cardsReducer = (state = initialState, action:ItemCardAction):IItemCardStore=>{
    switch(action.type){
        case ItemCardActionTypes.SET_CARDS_STATE:
            return (action.card);
        default:
            return state
    }
}