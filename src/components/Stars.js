import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return(
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onCLick={() => setRating(ratingValue)}
                        />]
                        <FaStar
                        color={ratingValue <= (hover || rating) ? "green" : "grey"}
                        size={40}
                        onMouseEnter = {() => setHover(ratingValue)}
                        onMouseLeave = {() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default StarRating; 