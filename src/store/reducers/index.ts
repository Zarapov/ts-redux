import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReducer";
import { editCardDialogReducer } from "./editCardDialogReducer";
import { modalWindowReducer } from "./modalWindowReducer";

export const rootReducer = combineReducers({
    cards:cardsReducer,
    modalWindow:modalWindowReducer,
    editCardDialog:editCardDialogReducer,
})
export type RootState = ReturnType<typeof rootReducer>;