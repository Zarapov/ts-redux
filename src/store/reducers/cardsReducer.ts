import { IItemCardArrayElement, ItemCardActionTypes, ItemCardAction} from "../../types/cards";

const initialState:IItemCardArrayElement[]=[
    { src: "images/house.svg", text: "Квартира", id: "1" },
    { src: "images/house.svg", text: "Дача", id: "2" }
]
export const cardsReducer = (state = initialState, action:ItemCardAction):IItemCardArrayElement[]=>{
    switch(action.type){
        case ItemCardActionTypes.ADD_ITEM_CARD:
            return [...state,{id:String(Date.now()),src:"images/house.svg",text:"Название"}]
        case ItemCardActionTypes.DELETE_ITEM_CARD:
            return state.filter(item => item.id!==action.payload)
        default:
            return state
    }
}