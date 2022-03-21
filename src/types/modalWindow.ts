export interface IModalWindow{
    height?:string;
    width?:string;
    children:React.ReactNode|null;
    visibility?:boolean;
    title?:string|null;
}
export enum ModalWindowActionTypes{
    SHOW_MODAL_WINDOW="SHOW_MODAL_WINDOW",
    HIDE_MODAL_WINDOW="HIDE_MODAL_WINDOW",
}
interface IShowModalWindow{
    type:ModalWindowActionTypes.SHOW_MODAL_WINDOW;
    payload:IModalWindow;
}
interface IHideModalWindow{
    type:ModalWindowActionTypes.HIDE_MODAL_WINDOW;
}
export type ModalWindowAction = IShowModalWindow|IHideModalWindow;