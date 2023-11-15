import React from "react";

const Card = ({ imgUrl, title, description, buttonLabel }) => {
    return (
        <div className="col-12 col-sm-6 col-xl-3">
            <div className="card my-3 mx-1">
                <img src={imgUrl} className="card-img-top"></img>
                <div className="card-body">
                    <h5 className="card-title fw-bold" style={{ textAlign: "center" }}>{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-center py-3">
                        <a className="btn btn-primary">{buttonLabel}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Card;
