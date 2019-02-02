import { push } from 'connected-react-router';

export function goToLogin() {
    return function (dispatch) {
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(push('/stockitems'));
        }, 1000);
    };
}
