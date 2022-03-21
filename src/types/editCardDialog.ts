export interface IEditCardDialog{
    id?:string;
    image:string;
    name:string;
}
export enum EditCardDialogActionTypes {
    CHANGE_NAME="CHANGE_NAME",
    CHANGE_IMAGE="CHANGE_IMAGE",
}
interface IChangeNameAction{
    type:EditCardDialogActionTypes.CHANGE_NAME,
    payload:string
}
interface IChangeImageAction{
    type:EditCardDialogActionTypes.CHANGE_IMAGE,
    payload:string
}
export type EditCardDialogAction = IChangeImageAction|IChangeNameAction;