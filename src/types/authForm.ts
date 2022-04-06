export interface IAuthState {
    activeTab: string;
    authLogin: string;
    authPassword: string;
    regLogin: string;
    regPassword: string;
    regRepeatPassword: string;
    message:string;
}

export enum AuthFormActionTypes {
    SELECT_TAB = "SELECT_TAB",
    CHANGE_AUTH_LOGIN = "CHANGE_AUTH_LOGIN",
    CHANGE_AUTH_PASSWORD = "CHANGE_AUTH_PASSWORD",
    CHANGE_REG_LOGIN = "CHANGE_REG_LOGIN",
    CHANGE_REG_PASSWORD = "CHANGE_REG_PASSWORD",
    CHANGE_REG_REPEAT_PASSWORD = "CHANGE_REG_REPEAT_PASSWORD",
    CHANGE_CHECK_PASSWORD = "CHANGE_CHECK_PASSWORD",
    SET_MESSAGE = "SET_MESSAGE",
    CLEAR_MESSAGE = "CLEAR_MESSAGE",
}
interface SelectTabAction {
    type: AuthFormActionTypes.SELECT_TAB;
    payload: string;
}
interface ChangeAuthLoginAction {
    type: AuthFormActionTypes.CHANGE_AUTH_LOGIN;
    payload: string;
}
interface ChangeAuthPasswordAction {
    type: AuthFormActionTypes.CHANGE_AUTH_PASSWORD;
    payload: string;
}
interface ChangeRegLoginAction {
    type: AuthFormActionTypes.CHANGE_REG_LOGIN;
    payload: string;
}
interface ChangeRegPasswordAction {
    type: AuthFormActionTypes.CHANGE_REG_PASSWORD;
    payload: string;
}
interface ChangeRegRepeatPasswordAction {
    type: AuthFormActionTypes.CHANGE_REG_REPEAT_PASSWORD;
    payload: string;
}
interface SetMessageAction {
    type: AuthFormActionTypes.SET_MESSAGE;
    payload: string;
}
interface ClearMessageAction {
    type: AuthFormActionTypes.CLEAR_MESSAGE;
}
export type AuthFormAction = SelectTabAction |
    ChangeAuthLoginAction |
    ChangeAuthPasswordAction |
    ChangeRegLoginAction |
    ChangeRegPasswordAction |
    ChangeRegRepeatPasswordAction|
    SetMessageAction |
    ClearMessageAction
