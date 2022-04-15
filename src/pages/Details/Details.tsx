import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Payments from '../../components/Payments/Payments';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import "./Details.css";
interface IStateLocation {
    id?: string;
}

const Details: React.FC = () => {
    const cards = useTypedSelector(store => store.cards.cards);
    const location = useLocation();
    const id = (location?.state as IStateLocation)?.id || null;
    if (id) {
        return (
            <>
                <Header />
                <div className='content-block'>
                    <h1>Информация по объекту</h1>
                    <div className='flex-wrapper flex-center details'>
                        <img src={process.env.REACT_APP_CARD_IMAGES_PATH + cards[id].image} alt="" />
                        <div className='information'>
                            <h2>{cards[id].title}</h2>
                            <label htmlFor='description'>Описание:</label>
                            <textarea id='description' />
                        </div>
                        <Payments id={id}/>
                    </div>
                </div>
            </>
        )
    }
    return <Navigate to="/main" />
}
export default Details;