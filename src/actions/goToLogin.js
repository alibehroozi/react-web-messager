import { push } from 'connected-react-router';
import { createAction } from 'redux-act';


export function goToLogin() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(push('/stockitems'));
        }, 1000);
    };
}
