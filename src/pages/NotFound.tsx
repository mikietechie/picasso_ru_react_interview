import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">

                    <div className="alert alert-warning py-5">
                        <h1 className="text-center mb-5">
                            <i className="fa fa-2x fa-warning"></i> &nbsp;Not Found
                        </h1>

                        <p className="text-center">
                            <Link to="/" className="btn btn-primary" >
                                <i className="fa fa-home"></i>&nbsp;Go Back Home
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}