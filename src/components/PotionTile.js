import React from "react";

function PotionTile({className, potion, onClick, children }) {
  return (
    <div className={className}>
      <div onClick={() => onClick(potion.id)} className="image-wrapper">
        <img className="image" alt={potion.name} src={potion.image_url} />
      </div>
      {children}
    </div>
  );
}

export default PotionTile;
