import React from "react";
import Card from "./Card";
import { cardsData } from "../Data";

const Cards = () => {
    return ( <div className="container d-flex mt-3 mb-5">
        <div className="row">
            {
                cardsData.map(((data, index) => {
                return <Card  key={index} imgUrl={data.imgUrl} title={data.title} description={data.description} buttonLabel={data.buttonLabel}>
                    </Card>
                }))
            }
        </div>
        
    </div>
    );
}
export default Cards