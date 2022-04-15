import React from 'react';
import { useActions } from '../../hooks/useAction';
import "./ConfirmDialog.css";
interface IConfirmDialog{
    confirmFC:()=>void;
    confirmText?:string;
}
const ConfirmDialog: React.FC<IConfirmDialog> = ({confirmFC,confirmText="Подтвердить"}) => {
    const {hideModalWindow} = useActions();
    return (
        <div className="btn-group confirm-dialog">
            <button type="button" className="btn btn-cancel" onClick={hideModalWindow}>Отмена</button>
            <button
                type="button"
                className="btn btn-confirm"
                onClick={() => {
                    confirmFC();
                    hideModalWindow();
                }}>
                {confirmText}
            </button>
        </div>
    )
}
export default ConfirmDialog;