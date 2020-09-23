
const reducer = (state, action) => {

    console.log(action);
    switch (action.type) {
        case 'WITHDRAW_MONEY':
            return {...state, totalAmount: state.totalAmount - action.payload}
        default:
            return state;
    }

    return state;
};

export default reducer;