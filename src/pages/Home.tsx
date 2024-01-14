import React, { useEffect, useState } from "react";
import { IPost } from "../shared/types";
import { X } from "../shared/service";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export const HomePage: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        loadPosts()
    }, [])

    const loadPosts = async () => {
        setPosts(await X.getPosts())
    }

    const loadNext = () => {
        setPosts([...posts, ...posts.slice(0, 10)])
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 mb-4">
                    <h1 className="text-center">Posts List</h1>
                </div>
                <div className="col-12">
                    <ul className="list-unstyled">
                        <InfiniteScroll
                            dataLength={posts.length}
                            next={loadNext}
                            hasMore={posts.length < 250}
                            loader={<h4>Loading...</h4>}
                            endMessage={
                                <p className="text-center text-warning">
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                        >
                        {
                            posts.map((post, index) => (
                                <li className="mb-3 post-item" key={index}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">{index+1}. {post.title}</h4>
                                            <p>{post.body}</p>
                                            <Link to={`/post/${post.id}`} className="btn btn-primary float-end">
                                                <i className="fa fa-eye"></i>&nbsp;View
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                        </InfiniteScroll>
                    </ul>
                </div>
            </div>
        </div>
    )
}