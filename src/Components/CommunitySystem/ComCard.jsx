import React from "react";

const ComCard = ({ logo, title, description }) => {
  return (
    <div className="w-[390px] h-[310px] shadow-custom">
      <img src={logo} alt="community-icon" className="mx-auto mt-6" />
      <h2 className="text-4xl font-medium text-TitleGray text-center mt-4">
        {title}
      </h2>
      <p className="text-xl text-TextGray mt-4 text-center">{description}</p>
    </div>
  );
};

export default ComCard;
