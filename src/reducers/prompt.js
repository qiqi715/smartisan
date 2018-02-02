var data = {
    title: "提示",
    tip: "",
    show: false
};

export default function(state=data, action) {
    switch (action.type) {
        case 'PROMPT_UPDATE':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}