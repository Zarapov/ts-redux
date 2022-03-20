import { ModalWindowActionTypes, ModalWindowAction, IModalWindow } from "../../types/modalWindow";

export const showModalWindow = (content:IModalWindow):ModalWindowAction => {
    return {type:ModalWindowActionTypes.SHOW_MODAL_WINDOW,payload:content}
}
export const hideModalWindow = ():ModalWindowAction => {
    return {type:ModalWindowActionTypes.HIDE_MODAL_WINDOW}
}