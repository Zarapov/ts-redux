import { EditCardDialogActionTypes, EditCardDialogAction } from "../../types/editCardDialog";

export const changeImage = (img:string):EditCardDialogAction=>{
    return {type:EditCardDialogActionTypes.CHANGE_IMAGE,payload:img}
}
export const changeName = (value:string):EditCardDialogAction=>{
    return {type:EditCardDialogActionTypes.CHANGE_NAME,payload:value}
}
export const setError = (error:boolean):EditCardDialogAction=>{
    return {type:EditCardDialogActionTypes.SET_INPUT_ERROR,payload:error}
}