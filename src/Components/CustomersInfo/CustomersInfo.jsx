import React from "react";
import ClientLogo1 from "../../assets/images/ClientLogo1.png";
import ClientLogo2 from "../../assets/images/ClientLogo2.png";
import ClientLogo3 from "../../assets/images/ClientLogo3.png";
import ClientLogo4 from "../../assets/images/ClientLogo4.png";
import ClientLogo5 from "../../assets/images/ClientLogo5.png";
import ClientLogo6 from "../../assets/images/ClientLogo6.png";

const CustomersInfo = () => {
  return (
    <div className="bg-Silver px-60 mt-16 py-8 flex justify-end">
      <div className="max-w-[768px]">
        <p className="text-xl opacity-75">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>

        <h3 className="text-2xl font-medium text-PrimaryGreen mt-3">
          Tim Smith
        </h3>

        <p className="text-xl text-TextGray mt-2">
          British Dragon Boat Racing Association
        </p>

        <div className="flex gap-10 mt-6">
          <img src={ClientLogo1} alt="Client Logo" />
          <img src={ClientLogo2} alt="Client Logo" />
          <img src={ClientLogo3} alt="Client Logo" />
          <img src={ClientLogo4} alt="Client Logo" />
          <img src={ClientLogo5} alt="Client Logo" />
          <img src={ClientLogo6} alt="Client Logo" />

          <h3 className="text-xl font-medium text-PrimaryGreen mt-3">
            Meet all customers →
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CustomersInfo;
