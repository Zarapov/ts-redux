import {IAuthState, AuthFormActionTypes, AuthFormAction } from '../../types/authForm';

const initialState: IAuthState = {
    activeTab: "auth",
    authLogin: "",
    authPassword: "",
    regLogin: "",
    regPassword: "",
    regRepeatPassword: "",
    message:""
}

export const authFormReducer = (state = initialState, action: AuthFormAction): IAuthState => {
    switch (action.type) {
        case AuthFormActionTypes.SELECT_TAB:
            return {...state,activeTab:action.payload}
        case AuthFormActionTypes.CHANGE_AUTH_LOGIN:
            return {...state,authLogin:action.payload}
        case AuthFormActionTypes.CHANGE_AUTH_PASSWORD:
            return {...state,authPassword:action.payload}
        case AuthFormActionTypes.CHANGE_REG_LOGIN:
            return {...state,regLogin:action.payload}
        case AuthFormActionTypes.CHANGE_REG_PASSWORD:
            return {...state,regPassword:action.payload}
        case AuthFormActionTypes.CHANGE_REG_REPEAT_PASSWORD:
            return {...state,regRepeatPassword:action.payload}
        case AuthFormActionTypes.SET_MESSAGE:
            return {...state,message:action.payload}
        case AuthFormActionTypes.CLEAR_MESSAGE:
            return {...state,message:""}
        default: return state;
    }
}