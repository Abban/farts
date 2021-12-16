import GhostContentAPI, {PostOrPage, PostsOrPages} from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: process.env.VUE_APP_API_URL,
    key: process.env.VUE_APP_API_KEY,
    version: "v3"
});

export function getPosts(limit: number = 10, page: number = 0): Promise<PostsOrPages> {
    return api.posts.browse({limit, page});
}

export function getPost(id: string): Promise<PostOrPage> {
    return api.posts.read({id});
}