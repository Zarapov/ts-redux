import React from 'react';
import { ITariffCalc, ITariffState } from '../../types/payments';


const formatValue = (value: string): string => {
    return (value.replace(/[^0-9.]/g, ''))
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const resultCalc = ({PT, PP, T}:ITariffState): number => {
    PT = PT.replace(/\s/g, '');
    PP = PP.replace(/\s/g, '');
    T = T.replace(/\s/g, '');
    if (PT === "" || PP === "" || T === "") return 0;
    if (isNaN(Number(PT)) ||
        isNaN(Number(PP)) ||
        isNaN(Number(T))) return 0;
    return (Number(PT) - Number(PP)) * Number(T);
}

const TariffCalc: React.FC<ITariffCalc> = ({ state, onChange }) => {
    let result = resultCalc(state);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.dataset.id === undefined) return;
        result = resultCalc({...state, [e.target.dataset.id]: formatValue(e.target.value)});
        onChange(
            {
                ...state,
                [e.target.dataset.id]: formatValue(e.target.value),
                result
            }
        )
    }
    return (
        <div>
            <span>( </span>
            <input type="text" style={{ width: "150px" }} placeholder='ПТ'
                data-id="PT"
                value={state.PT}
                onChange={e => onChangeHandler(e)} />
            <span> - </span>
            <input type="text" style={{ width: "150px" }} placeholder='ПП'
                data-id="PP"
                value={state.PP}
                onChange={e => onChangeHandler(e)}
            />
            <span> ) &times;&nbsp;</span>
            <input type="text" style={{ width: "100px" }} placeholder='Т'
                data-id="T"
                value={state.T}
                onChange={e => onChangeHandler(e)}
            />
            <span> = </span>
            <span>{result.toLocaleString("ru-RU")} руб.</span>
        </div>
    )
}
export default TariffCalc;