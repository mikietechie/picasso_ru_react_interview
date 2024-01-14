import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <nav className="container-fluid">
            <div className="row">
                <div className="col-12 py-1">
                    <h1><Link to="/" className="">Picasso Posts</Link></h1>
                </div>
            </div>
        </nav>
    )
}
