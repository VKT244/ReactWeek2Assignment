import React from 'react';


export default class ReviewForm extends React.Component{
    state = {
        review: '',
        reviews: []
    };

    saveInput = (e) => {
        this.setState({review: e.target.value});
    };

AddReview = () => {
    let {reviews, review} = this.state; 
    reviews.push(review); 
    this.setState({review: review});
};

render() {
    return (
        <form>
            <label> Write a review:
                <input 
                type="text"
                onChange={this.saveInput}
                />
            </label>
            <button onClick={this.AddReview}> Submit </button>
            <ul>
            <h2>Reviews:</h2>
            {this.state.reviews.map((content, comment) => {
                return <li key={comment}> {content}</li>
            })}
            </ul>
        </form>
        );
    }
}
