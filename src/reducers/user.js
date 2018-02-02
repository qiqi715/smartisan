var user = {
    uid: 0,
    name: ""
};
export default function(state=user, action) {
    switch (action.type) {
        case 'USER_UPDATE':
            return action.payload;
        default:
            return state;
    }
}