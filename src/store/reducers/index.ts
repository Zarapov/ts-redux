import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReducer";
import { modalWindowReducer } from "./modalWindowReducer";

export const rootReducer = combineReducers({
    cards:cardsReducer,
    modalWindow:modalWindowReducer,
})
export type RootState = ReturnType<typeof rootReducer>;