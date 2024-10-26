import React from "react";
import Logo1 from "../../assets/images/ClientLogo1.png";
import Logo2 from "../../assets/images/ClientLogo2.png";
import Logo3 from "../../assets/images/ClientLogo3.png";
import Logo4 from "../../assets/images/ClientLogo4.png";
import Logo5 from "../../assets/images/ClientLogo5.png";
import Logo6 from "../../assets/images/ClientLogo6.png";
import Logo7 from "../../assets/images/ClientLogo7.png";

const OurClients = () => {
  return (
    <div className="mt-10 px-60">
      <h2 className="text-4xl font-medium text-TitleGray text-center">
        Our Clients
      </h2>

      <p className="text-xl text-TextGray mt-4 text-center">
        We have been working with some Fortune 500+ clients
      </p>

      <div className="flex justify-between mt-10">
        <img src={Logo1} alt="client-logo" />
        <img src={Logo2} alt="client-logo" />
        <img src={Logo3} alt="client-logo" />
        <img src={Logo4} alt="client-logo" />
        <img src={Logo5} alt="client-logo" />
        <img src={Logo6} alt="client-logo" />
        <img src={Logo7} alt="client-logo" />
      </div>
    </div>
  );
};

export default OurClients;
