import React from "react";
import StarRating from "./Stars";


export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: props.Name,
            ReleaseDate: props.ReleaseDate,
            Image: props.Image,
            Synopsis: props.Synopsis,
            Rating: props.Rating
        }
    }

    render() {
        return(
            <div className="Movie">
            <div className="MovieName">
                <h3>{this.state.Name}</h3>
                <img src={this.state.Image}/>
                <div className="Date">
                    <h4>{this.state.ReleaseDate}</h4>
                </div>
                <div className="Text">
                <p>{this.state.Synopsis}</p>
            </div>     
                <StarRating/>
            </div>
            </div>
        );
    }
}