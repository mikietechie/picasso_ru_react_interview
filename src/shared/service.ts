import { IComment, IPost, IUser } from "./types";

const URL = "https://jsonplaceholder.typicode.com"

export class X {
    /** An api helper service for fetching api data */

    public static async getPosts(): Promise<IPost[]> {
        const data = await (await fetch(`${URL}/posts`)).json()
        return data as IPost[]
    }

    public static async getPost(postID: number): Promise<IPost> {
        const data = await (await fetch(`${URL}/posts/${postID}`)).json()
        return data as IPost
    }

    public static async getUser(userID: number): Promise<IUser> {
        const data = await (await fetch(`${URL}/users/${userID}`)).json()
        return data as IUser
    }

    public static async getComments(postID: number): Promise<IComment[]> {
        const data = await (await fetch(`${URL}/posts/${postID}/comments`)).json()
        return data as IComment[]
    }
}
