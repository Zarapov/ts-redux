export interface IEditCardDialog{
    image:string;
    name:string;
    error:boolean;
}
export enum EditCardDialogActionTypes {
    CHANGE_NAME="CHANGE_NAME",
    CHANGE_IMAGE="CHANGE_IMAGE",
    SET_INPUT_ERROR="SET_INPUT_ERROR",
}
interface IChangeNameAction{
    type:EditCardDialogActionTypes.CHANGE_NAME,
    payload:string
}
interface IChangeImageAction{
    type:EditCardDialogActionTypes.CHANGE_IMAGE,
    payload:string
}
interface ISetInputErrorAction{
    type:EditCardDialogActionTypes.SET_INPUT_ERROR,
    payload:boolean
}
export type EditCardDialogAction = IChangeImageAction|IChangeNameAction|ISetInputErrorAction;