import React from 'react';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import "./ModalWindow.css";

const ModalWindow:React.FC = ()=>{
    const {height,width,title,children} = useTypedSelector(store=>store.modalWindow);
    const {hideModalWindow} = useActions();
    const backgroundClickHandler = (e:React.MouseEvent):void=>{
        console.log(e);
        hideModalWindow();    
    }   
    return(
        <div className='modal-wrapper' onClick={e=>backgroundClickHandler(e)}>
            <div className='modal-window' style={{height,width}}>
                <div className='modal-title'>
                    <h2>{title}</h2>
                </div>
                <div className='modal-content'>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default ModalWindow;