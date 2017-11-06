/**
 * Created by danielbruce on 2017-10-09.
 */

export function fillApiBalance(source, address, balance) {
    return {
        type: 'FILL_API_BALANCE',
        source,
        address,
        balance
    };
}
