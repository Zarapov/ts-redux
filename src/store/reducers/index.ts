import { combineReducers } from "redux";
import { authFormReducer } from "./authFormReducer";
import { cardsReducer } from "./cardsReducer";
import { editCardDialogReducer } from "./editCardDialogReducer";
import { modalWindowReducer } from "./modalWindowReducer";
import { authReducer } from './authReducer';
import { cardImagesReducer } from "./cardImagesReducer";

export const rootReducer = combineReducers({
    cards:cardsReducer,
    modalWindow:modalWindowReducer,
    editCardDialog:editCardDialogReducer,
    authForm:authFormReducer,
    auth:authReducer,
    cardImages:cardImagesReducer
})
export type RootState = ReturnType<typeof rootReducer>;