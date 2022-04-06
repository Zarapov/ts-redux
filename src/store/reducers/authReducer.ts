import { AuthAction,AuthActionTypes, IAuthState } from "../../types/auth"; 

const userFromStorage = localStorage.getItem("user");
const user = userFromStorage?JSON.parse(userFromStorage):null;
const initialState:IAuthState = user?
    {isLoggedIn:true,user}:
    {isLoggedIn:false,user:null}
export const authReducer = (state=initialState,action:AuthAction):IAuthState =>{
    switch(action.type){
        case AuthActionTypes.REGISTER_SUCCESS:
            return {...state,isLoggedIn:false}
        case AuthActionTypes.REGISTER_FAIL:
            return {...state,isLoggedIn:false}
        case AuthActionTypes.LOGIN_SUCCESS:
            return {...state,isLoggedIn:true,user:action.payload.user}
        case AuthActionTypes.LOGIN_FAIL:
            return {...state,isLoggedIn:false,user:null}
        case AuthActionTypes.LOGOUT:
            return {...state,isLoggedIn:false,user:null}
        default: return state;
    }
}