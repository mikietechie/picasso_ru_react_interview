import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { X } from "../shared/service";
import { IComment, IPost, IUser } from "../shared/types";

export const PostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [post, setPost] = useState<IPost>()
    const [user, setUser] = useState<IUser>()
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        loadData()
    }, [id])

    const loadData = async () => {
        let data: IPost | null = null
        try {
            data = await X.getPost(parseInt(id!))
        } catch (error) {
            console.log(error)
        }
        if (!data?.id) {
            navigate("/404")
            return
        }
        setPost(data)
        const [commentsData, userData] = await Promise.all([
            await X.getComments(data.id),
            await X.getUser(data.id)
        ])
        setUser(userData)
        setComments(commentsData)
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 mb-4">
                    <h1 className="text-center">{post?.title}</h1>
                </div>
                <div className="col-12 mb-3">
                    <p>{post?.body}</p>
                </div>
                <div className="col-12 mb-3">
                    <p>{post?.body}</p>
                </div>
                <div className="col-12 mb-3">
                    <p className="text-end">
                        <b>Post By {user?.name}</b>
                    </p>
                </div>
                <div className="col-12 mb-3">
                    <h3 className="comments mb-3">Comments</h3>
                    <ul>
                        {
                            comments.map((comment, index) => (
                                <li key={index+1} className="mb-1">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-text">
                                                <p className="mb-2">{comment.body}</p>
                                                <p>By {comment.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-12">
                    <Link to={`/`} className="btn btn-primary float-end">
                        <i className="fa fa-chevron-left"></i>&nbsp;Back
                    </Link>
                </div>
            </div>
        </div>
    )
}