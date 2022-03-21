import { IModalWindow, ModalWindowAction, ModalWindowActionTypes } from "../../types/modalWindow"; 

const initialState:IModalWindow = {
    visibility:false,
    children:null,
    title:null
}

export const modalWindowReducer = (state = initialState,action:ModalWindowAction):IModalWindow => {
    switch(action.type){
        case ModalWindowActionTypes.SHOW_MODAL_WINDOW:
            return {...action.payload,visibility:true}
        case ModalWindowActionTypes.HIDE_MODAL_WINDOW:
            return initialState
        default: return state;
    }
}