/**
 * Created by danielbruce on 2017-10-07.
 */

// window.store.dispatch({"type": "ADD_ETHEREUM_ADDRESS", "address":"0xb794f5ea0ba39494ce839613fffba74279579268"})
export function addEthereumAddress(address) {
    return {
        type: 'ADD_ETHEREUM_ADDRESS',
        address
    };
}