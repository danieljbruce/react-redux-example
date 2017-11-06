/**
 * Created by danielbruce on 2017-10-09.
 */

/**
 * Created by danielbruce on 2017-10-07.
 */

export function fillBalance(address, balance) {
    return {
        type: 'FILL_BALANCE',
        address,
        balance
    };
}