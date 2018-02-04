
export default function(state=[], action) {
    switch (action.type) {
        case 'ADDRESS_UPDATE':
            return action.payload;
        default:
            return state;
    }
}