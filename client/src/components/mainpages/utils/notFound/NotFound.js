import React from "react";
import { Link } from "react-router-dom";
// import { ImgNotFound } from "./image/png.jpg";
import "./notFound.css";
const NotFoundPage = () => {
    return (
        <div className="not__found">
            <h3 className="not__found--title">
                Then there will be a path that will lead you to success.
            </h3>
            {/* <img
                src={ImgNotFound}
                alt="Img Not Found"
                className="not__found--img"
            /> */}
            <p>
                <Link to="/" className="not__found--link">
                    Go Home
                </Link>
            </p>
        </div>
    );
};

export default NotFoundPage;
