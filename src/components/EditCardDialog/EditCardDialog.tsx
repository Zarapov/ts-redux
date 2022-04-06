import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import GallerySmall from '../GallerySmall/GallerySmall';
import "./EditCardDialog.css";

const EditCardDialog: React.FC<{ id?: string, list: string[] }> = ({ id, list }) => {
    const cards = useTypedSelector(store => store.cards.cards);
    const { name, image, error } = useTypedSelector(store => store.editCardDialog);
    const { changeImage, changeName, hideModalWindow, editItemCard, addItemCard, setError } = useActions();
    useEffect(() => {
        changeImage(id ? cards[id].image : "house.svg");
        changeName(id ? cards[id].title : "");
        setError(false);
    }, []);
    const confirm = (): void => {
        if(name===""){
            setError(true);
            return;
        }
        id ?
            editItemCard(id,{image,title:name}) :
            addItemCard({ image, title: name });
        hideModalWindow();
    }
    
    return (
        <>
            <div className='image-change'>
                <img src={`${process.env.REACT_APP_CARD_IMAGES_PATH}${image}`} alt="preview" />
                <GallerySmall current={image} elements={list} onSelect={changeImage} />
            </div>
            <div>
                <label htmlFor='objectName'>Название</label>
                <input
                    id='objectName'
                    className={`name-input${error?" input-error":""}`}
                    placeholder='Введите название'
                    value={name}
                    onChange={e => {changeName(e.target.value);setError(false);}}
                />
                {error?<span className='warning-span'>Поле не может быть пустым!</span>:null}
            </div>
            <div className='btn-group'>
                <button type='button' className='btn btn-cancel' onClick={hideModalWindow}>Отмена</button>
                <button
                    type='button'
                    className='btn btn-confirm'
                    onClick={confirm}>
                    {id ? 'Сохранить' : 'Добавить'}
                </button>
            </div>
        </>
    )
}
export default EditCardDialog;