import { AuthFormAction, AuthFormActionTypes } from '../../types/authForm';

export const selectTab = (payload: string): AuthFormAction => {
    return { type: AuthFormActionTypes.SELECT_TAB, payload }
}
export const changeAuthLogin = (payload: string): AuthFormAction => {
    return { type: AuthFormActionTypes.CHANGE_AUTH_LOGIN, payload }
}
export const changeAuthPassword = (payload: string): AuthFormAction => {
    return { type: AuthFormActionTypes.CHANGE_AUTH_PASSWORD, payload }
}
export const changeRegLogin = (payload: string): AuthFormAction => {
    return { type: AuthFormActionTypes.CHANGE_REG_LOGIN, payload }
}
export const changeRegPassword = (payload: string): AuthFormAction => {
    return { type: AuthFormActionTypes.CHANGE_REG_PASSWORD, payload }
}
export const changeRegRepeatPassword = (payload: string): AuthFormAction => {
    return { type: AuthFormActionTypes.CHANGE_REG_REPEAT_PASSWORD, payload }
}
export const setMessage = (message: string): AuthFormAction => {
    return { type: AuthFormActionTypes.SET_MESSAGE, payload: message }
}
export const clearMessage = (): AuthFormAction => {
    return { type: AuthFormActionTypes.CLEAR_MESSAGE }
}