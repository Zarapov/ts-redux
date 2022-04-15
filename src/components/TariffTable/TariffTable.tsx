import React from 'react';
import { ITariffTableProps } from '../../types/payments';

const TariffTable: React.FC<ITariffTableProps> = ({ data, onRowClick, onDelete }) => {
    const tariffs = data?.map((el, elIndex) => {
        let resultSum = 0;
        return (
            [...el.tariffs.map((t, index) => {
                const tValue = (Number(t.PT.replace(/\s/g, '')) -
                    Number(t.PP.replace(/\s/g, '')));
                resultSum += tValue;
                return <span key={"T_" + index}>
                    {"T" + (index + 1) + ": " + tValue.toLocaleString("ru-RU")}
                </span>
            }), <span key={"result_" + elIndex}>{"Всего: " + resultSum.toLocaleString("ru-RU")}</span>]
        )
    }
    )
    return (
        <table className='tariffs-table'>
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Использовано электроэнергии (кВт*ч)</th>
                    <th>Стоимость (руб.)</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((el, index) =>
                        <tr key={"row_" + index} onClick={e => onRowClick(el.date)}>
                            <td>{el.date.year + "/" + el.date.month}</td>
                            <td className='tariffs'>{tariffs[index]}</td>
                            <td>{el.sum.toLocaleString("ru-RU")}</td>
                            <td><div className='trashbin' onClick={e=>{e.stopPropagation();onDelete(el.date)}}></div></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default TariffTable;