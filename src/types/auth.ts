export interface IUser {
    id: string;
    username: string;
    roles: string[];
    accessToken: string;
}
export interface IAuthState{
    isLoggedIn:boolean;
    user:IUser|null;
}
export enum AuthActionTypes {
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAIL = "LOGIN_FAIL",
    REGISTER_SUCCESS = "REGISTER_SUCCESS",
    REGISTER_FAIL = "REGISTER_FAIL",
    LOGOUT = "LOGOUT",
}

interface LoginSuccessAction {
    type: AuthActionTypes.LOGIN_SUCCESS;
    payload: { user: IUser };
}
interface LoginFailAction {
    type: AuthActionTypes.LOGIN_FAIL;
}
interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
}
interface RegisterSuccessAction {
    type: AuthActionTypes.REGISTER_SUCCESS;
}
interface RegisterFailAction {
    type: AuthActionTypes.REGISTER_FAIL;
}
export type AuthAction = LoginSuccessAction |
    LoginFailAction |
    LogoutAction |
    RegisterSuccessAction |
    RegisterFailAction