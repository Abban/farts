import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: process.env.VUE_APP_API_URL,
    key: process.env.VUE_APP_API_KEY,
    version: "v3"
});

export function getPosts(limit = 10, page = 0) {
    return api.posts.browse({limit, page});
}

export function getPost(id) {
    return api.posts.read({id});
}