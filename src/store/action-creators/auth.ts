import { Dispatch } from 'redux'
import AuthService from '../../services/auth.service';
import { AuthActionTypes, AuthAction, IUser} from '../../types/auth';
import { AuthFormAction, AuthFormActionTypes } from '../../types/authForm';
export const register = (username: string, password: string) => 
(dispatch: Dispatch<AuthAction|AuthFormAction>) => {
    return AuthService.register(username, password).then(
        (response) => {
            dispatch({
                type: AuthActionTypes.REGISTER_SUCCESS
            });
            dispatch({
                type: AuthFormActionTypes.SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message:string =
                (error?.response?.data?.message) ||
                error?.message || error.toString();
            dispatch({
                type: AuthActionTypes.REGISTER_FAIL,
            });
            dispatch({
                type: AuthFormActionTypes.SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};
export const login = (username: string, password: string) => (dispatch: Dispatch<AuthAction|AuthFormAction>) => {
    return AuthService.login(username, password).then(
        (data: IUser) => {
            dispatch({
                type: AuthActionTypes.LOGIN_SUCCESS,
                payload: { user: data },
            });
            return Promise.resolve();
        },
        (error) => {
            const message:string =
                (error?.response?.data?.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: AuthActionTypes.LOGIN_FAIL,
            });
            dispatch({
                type: AuthFormActionTypes.SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};
export const logout = () => (dispatch: Dispatch<AuthAction>) => {
    AuthService.logout();
    dispatch({
        type: AuthActionTypes.LOGOUT,
    });
};