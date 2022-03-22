import { IEditCardDialog, EditCardDialogAction, EditCardDialogActionTypes } from "../../types/editCardDialog";

const initialState:IEditCardDialog = {
    name:"",
    image:""
}

export const editCardDialogReducer = (state=initialState,action:EditCardDialogAction):IEditCardDialog => {
    switch(action.type){
        case EditCardDialogActionTypes.CHANGE_IMAGE:
            return {...state,image:action.payload}
        case EditCardDialogActionTypes.CHANGE_NAME:
            return {...state,name:action.payload}
        default: return state
    }
}