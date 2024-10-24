import React from "react";
import ComCard from "./ComCard";
import ComLogo1 from "../../assets/images/ComIcon1.png";
import ComLogo2 from "../../assets/images/ComIcon2.png";
import ComLogo3 from "../../assets/images/ComIcon3.png";

const ComSystem = () => {
  return (
    <div className="mt-20 px-60">
      <h2 className="text-5xl font-medium text-TitleGray text-center">
        Manage your entire community
        <br />
        in a single system
      </h2>

      <p className="text-xl text-TextGray mt-4 text-center">
        Who is Nexcent suitable for?
      </p>

      <div className="flex justify-between mt-6">
        <ComCard
          logo={ComLogo1}
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <ComCard
          logo={ComLogo2}
          title="National Associations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <ComCard
          logo={ComLogo3}
          title="Clubs And Groups"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
      </div>
    </div>
  );
};

export default ComSystem;
