import React from 'react';
import AuthBlock from '../../components/AuthBlock/AuthBlock';
import RegBlock from '../../components/RegBlock/RegBlock';
import Tabs from '../../components/Tabs/Tabs';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import "./Authentication.css";
const tabs = [
    { id: "auth", title: "Авторизация" },
    { id: "reg", title: "Регистрация" },
]

const Authentication: React.FC = () => {
    const auth = useTypedSelector(state => state.authForm);
    const { selectTab } = useActions();
    return (
        <div className='auth-block'>
            <Tabs currentTab={auth.activeTab} tabs={tabs} onClick={selectTab} />
            {
                auth.activeTab === "auth" &&
                <AuthBlock />
            }
            {
                auth.activeTab === "reg" &&
                <RegBlock />
            }

        </div>
    )
}
export default Authentication