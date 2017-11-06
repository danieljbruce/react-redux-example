/**
 * Created by danielbruce on 2017-10-10.
 */

import fetch from 'isomorphic-fetch';
import filterTable from '../actions/index.js';

export function fetchData() {
    return function(dispatch) {
        return fetch('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true')
            .then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(function(json) {
                console.log(json);
                dispatch(filterTable('a'));
            });
    };
}
