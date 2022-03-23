import { IItemCardStore, ItemCardActionTypes, ItemCardAction} from "../../types/cards";

const initialState:IItemCardStore = {
    cardArr:['1','2'],
    cardObj:{
        '1':{ src: "images/house.svg", text: "Квартира", id: "1" },
        '2':{ src: "images/house.svg", text: "Дача", id: "2" }
    }
}
export const cardsReducer = (state = initialState, action:ItemCardAction):IItemCardStore=>{
    switch(action.type){
        case ItemCardActionTypes.ADD_ITEM_CARD:
            const id = String(Date.now());
            return (
                {
                    cardArr:[...state.cardArr,id],
                    cardObj:{
                        ...state.cardObj,
                        [id]:{id:id,src:action.payload.src,text:action.payload.text}
                    }
                }
            )
        case ItemCardActionTypes.DELETE_ITEM_CARD:
            const cardObjAsArr = Object.entries(state.cardObj);
            cardObjAsArr.filter(item=>item[1].id !== action.payload)
            return (
                {
                    cardArr:state.cardArr.filter(item => item!==action.payload),
                    cardObj:Object.fromEntries(cardObjAsArr)
                }
            )
        case ItemCardActionTypes.EDIT_ITEM_CARD:
            return(
                {
                    cardArr:state.cardArr,
                    cardObj:{
                        ...state.cardObj,
                        [action.payload.id]:action.payload
                    }
                }
            )
        default:
            return state
    }
}