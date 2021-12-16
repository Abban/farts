import {PostOrPage, PostsOrPages} from '@tryghost/content-api';
import api from "@/resources/api";

export function getPosts(limit: number = 10, page: number = 0): Promise<PostsOrPages> {
    return api.posts.browse({limit, page});
}

export function getPost(id: string): Promise<PostOrPage> {
    return api.posts.read({id});
}