import React from 'react';
import './Tabs.css';
interface ITab {
    id: string;
    title: string;
}
interface ITabs {
    currentTab: string;
    tabs: ITab[];
    onClick: (id: string) => {};
}
const Tabs: React.FC<ITabs> = ({ currentTab, tabs, onClick }) => {
    const onClickHandler = (event:React.MouseEvent<HTMLDivElement>) => {
        const id = (event.target as Element).id;
        if (id==="") return;
        onClick(id);
    }
    return (
        <div className='tabs-block' onClick={e =>  onClickHandler(e) }>
            {
                tabs.map(tab => {
                    return <span
                        key={tab.id}
                        id={tab.id}
                        className={currentTab === tab.id ? "tabs-selected" : ""}
                    >
                        {tab.title}
                    </span>
                })
            }
        </div>
    )
}
export default Tabs;