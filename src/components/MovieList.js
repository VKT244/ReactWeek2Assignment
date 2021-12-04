import React from "react";
import Movie from './Movie';
import ReviewList from './ReviewList';
import Stars from './Stars';


export default class MovieList extends React.Component {
    render() {
        let MovieOne = {
            Name: 'Space Jam: A New Legacy',
            ReleaseDate: 'IN THEATERS 07-16-2021',
            Image: './Images/SpaceJam.jpeg',
            Synopsis: 'A rogue artificial intelligence kidnaps the son of famed basketball player LeBron James, who then has to work with Bugs Bunny to win a basketball game.',
            Rating: <div> Ratings: <Stars /> </div>
        };

        let MovieTwo = {
            Name: 'Eternals',
            ReleaseDate: 'IN THEATERS 11-05-2021',
            Image: './Images/Eternals.jpeg',
            Synopsis: 'The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years, reunite to battle the evil Deviants.',
            Rating: <div> Ratings: <Stars /> </div>
};

        let MovieThree = {
            Name: 'Clifford the Big Red Dog',
            ReleaseDate: 'IN THEATERS 11-10-2021',
            Image: './Images/Clifford.jpeg',
            Synopsis: "A young girl's love for a tiny puppy named Clifford makes the dog grow to an enormous size.",
            Rating: <div> Ratings: <Stars /> </div>
};

return (
    <div className="container">
        <Movie {...MovieOne}/>
        <div>
            <ReviewList/>
        </div>

        <Movie {...MovieTwo}/>
        <div>
            <ReviewList/>
        </div>

        <Movie {...MovieThree}/>
        <div>
            <ReviewList/>
        </div>

    </div>
);

    }
}