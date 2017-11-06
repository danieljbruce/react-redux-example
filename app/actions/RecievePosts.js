/**
 * Created by danielbruce on 2017-10-09.
 */
export function receivePosts(post) {
    return {
        type: 'RECIEVE_POST',
        post
    };
}
