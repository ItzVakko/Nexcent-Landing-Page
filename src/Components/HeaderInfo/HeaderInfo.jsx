import React from "react";
import HeaderInfoIllustration from "../../assets/images/HeaderInfoIllustration.png";

const HeaderInfo = () => {
  return (
    <div className="py-24 px-60 flex justify-between items-center">
      <div>
        <h1 className="text-6xl font-medium text-TitleGray">
          Lessons and insights <br />
          <span className="text-PrimaryGreen">from 8 years</span>
        </h1>

        <p className="text-xl mt-6 text-TextGray">
          Where to grow your business as a photographer: site or social media?
        </p>

        <button className="text-xl bg-PrimaryGreen text-white px-8 py-3.5 rounded-md mt-6">
          Register
        </button>
      </div>

      <img
        src={HeaderInfoIllustration}
        alt="header-info-illustration"
        className="max-w-[500px] w-full h-auto"
      />
    </div>
  );
};

export default HeaderInfo;
