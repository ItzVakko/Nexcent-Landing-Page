import React from "react";
import LearnDesignIllustration from "../../assets/images/LearnDesignIllustration.png";

const LearnDesign = () => {
  return (
    <div className="px-60 mt-16 flex justify-between items-center">
      <img
        src={LearnDesignIllustration}
        alt="Learn Design Illustration"
        className="w-[550px] h-auto"
      />

      <div className="max-w-[800px]">
        <h2 className="text-4xl font-medium text-TitleGray">
          How to design your site footer like
          <br />
          we did
        </h2>
        <p className="text-xl text-TextGray mt-6">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="text-xl bg-PrimaryGreen text-white py-3 px-6 rounded-md mt-8">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LearnDesign;
