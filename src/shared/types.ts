export interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

export interface IUser {
    id: 1
    name: string
    username: string
    address: {
        city: string
    }
}

export interface IComment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}