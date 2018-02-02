
export default function(state=[], action) {
    switch (action.type) {
        case 'ITEMS_UPDATE':
            return action.payload;
        default:
            return state;
    }
}