
export default function(state=[], action) {
    switch (action.type) {
        case 'ORDER_UPDATE':
            return action.payload;
        default:
            return state;
    }
}