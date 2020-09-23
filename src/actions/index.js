
export const withdrawMoney = (amount) => {

    return {
        type: 'WITHDRAW_MONEY',
        payload: amount
    }
}