import React from "react";

const Pet = props => {
  const { name, animal, breed, media, location, id } = props;
  let data = "";
  if (media.length) {
    data = media[0].small;
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={data} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} -${breed} - ${location}`}</h2>
        <h2>{breed}</h2>
      </div>
    </a>
  );
};

export default Pet;
