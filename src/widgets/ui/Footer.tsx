import React from "react";

export const Footer: React.FC = () => {
    const date = new Date()
    return (
        <footer className="container-fluid pt-3">
            <div className="row">
                <div className="col-12">
                    <p className="text-center">
                        <a href="https://mikeio.web.app/">Mike Zinyoni {date.getFullYear()}</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
