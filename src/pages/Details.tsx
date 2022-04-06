import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useTypedSelector } from '../hooks/useTypedSelector';
interface IStateLocation{
    id?:string;
}
const Details:React.FC = () => {
    const cards = useTypedSelector(store => store.cards.cards);
    const location = useLocation();
    const id = (location?.state as IStateLocation)?.id || null;
    if(id){
        return(
            <>
                <Header/>
                <div className='content-block'>
                    <h1>Информация по объекту {cards[id].title+" id: "+id}</h1>
    
                </div>
            </>
        )
    }
    return <Navigate to="/main"/>
}
export default Details;