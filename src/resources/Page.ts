import {PostOrPage} from '@tryghost/content-api';
import api from "@/resources/api";

export function getPage(id: string): Promise<PostOrPage> {
    return api.posts.read({id});
}