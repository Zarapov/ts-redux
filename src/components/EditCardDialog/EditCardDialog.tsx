import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const EditCardDialog: React.FC<{ id?: string }> = ({ id }) => {
    const cards = useTypedSelector(store => store.cards.cardObj);
    const { name, image } = useTypedSelector(store => store.editCardDialog);
    const { changeImage, changeName, hideModalWindow, editItemCard, addItemCard } = useActions();
    useEffect(() => {
        changeImage(id ? cards[id].src : "images/house.svg");
        changeName(id ? cards[id].text : "");
    }, [])
    return (
        <div>
            <div>

            </div>
            <div>

            </div>
            <div>
                <label htmlFor='objectName'>Название</label>
                <input id='objectName' placeholder='Введите название' value={name} onChange={e => changeName(e.target.value)} />
            </div>
            <div className='btn-group'>
                <button type='button' className='btn btn-cancel' onClick={hideModalWindow}>Отмена</button>
                {
                    id ?
                        <button 
                        type='button' 
                        className='btn btn-confirm' 
                        onClick={e => {
                            editItemCard({ id: id, src: image, text: name });
                            hideModalWindow()}
                            }>
                                Сохранить
                        </button> :
                        <button
                            type='button'
                            className='btn btn-confirm'
                            onClick={e => {
                                addItemCard({ src: image, text: name }); 
                                hideModalWindow();
                            }
                            }>
                                Добавить
                        </button>
                }
            </div>
        </div>
    )
}
export default EditCardDialog;