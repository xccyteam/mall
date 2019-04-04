import { getItem, setItem, removeItem } from '../../utils/storage';
const token = getItem('auth-token');
export default function Token(state = token, action) {
    switch (action.type) {
        case 'SETTOKEN':
            setItem('auth-token', action.token)
            return action.token
        case 'DELTOKEN':
            removeItem('auth-token');
            return ''
        default:
            return state;
    }
};