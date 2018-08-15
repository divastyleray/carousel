import React from "react";
import PropTypes from "prop-types";

const Carousel = props => {
  const { imagesList } = props;

  return (
    <ul id="carousel">
      {
        imagesList.hits.map( (item, index) => {
          return (
            <li key={index}>
              <img src={item.webformatURL} alt={item.tags} />
              <div className="imgName">Image {index+1}</div>
            </li>
          )
        })
      }
    </ul>
  );
}

Carousel.propTypes = {
  imagesList: PropTypes.object.isRequired
};


export default Carousel;