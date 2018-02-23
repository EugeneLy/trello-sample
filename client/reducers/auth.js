import { AUTH_USER,
         AUTH_ERROR,
         UNAUTH_USER,
         STARTAUTH_USER,
         ENDAUTH_USER,
         STARTREGST_USER,
         ENDREGST_USER} from '../actions/types';

const initialSatte = { error: '', message: '', authenticated: false, authprocess: false};

export default function (state = initialSatte, action) {
    console.log(state);
    switch(action.type) {
        case AUTH_USER:
            return { error: '', message: '', authenticated: true };
        case UNAUTH_USER:
            return { authenticated: false };
        case AUTH_ERROR:
            return { error: action.payload, authprocess: state.authprocess, regstprocess: state.regstprocess};
        case STARTAUTH_USER:
            return { authprocess: true };
        case ENDAUTH_USER:
            return { authprocess: false };
        case STARTREGST_USER:
            return { regstprocess: true };
        case ENDREGST_USER:
            return { regstprocess: false };
    }

    return state;
}