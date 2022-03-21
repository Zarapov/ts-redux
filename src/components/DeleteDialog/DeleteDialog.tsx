import React from 'react';
import { useActions } from '../../hooks/useAction';
interface IDeleteDialog{
    deleteFC:()=>void;
}
const DeleteDialog: React.FC<IDeleteDialog> = ({deleteFC}) => {
    const {hideModalWindow} = useActions();
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-cancel" onClick={hideModalWindow}>Отмена</button>
            <button
                type="button"
                className="btn btn-confirm"
                onClick={() => {
                    deleteFC();
                    hideModalWindow();
                }}>
                Удалить
            </button>
        </div>
    )
}
export default DeleteDialog;