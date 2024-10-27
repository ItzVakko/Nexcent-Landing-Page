import React from "react";
import BusinessIcon1 from "../../assets/images/BusinessIcon1.png";
import BusinessIcon2 from "../../assets/images/BusinessIcon2.png";
import BusinessIcon3 from "../../assets/images/BusinessIcon3.png";
import BusinessIcon4 from "../../assets/images/BusinessIcon4.png";

const BusinessStats = () => {
  return (
    <div className="bg-Silver w-full h-72 px-60 py-16 flex justify-between items-center">
      <div>
        <h2 className="text-4xl font-medium text-TitleGray">
          Helping a local
          <br />
          <span className="text-PrimaryGreen">business reinvent itself</span>
          <p className="text-xl text-TextGray mt-3">
            We reached here with our hard work and dedication
          </p>
        </h2>
      </div>

      <div className="flex">
        <div>
          <div className="flex gap-4 mr-28 mb-8">
            <img src={BusinessIcon1} alt="BusinessIcon" />
            <div>
              <h2 className="text-4xl font-medium text-TitleGray">2,245,341</h2>
              <p className="text-xl text-TextGray">Members</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={BusinessIcon3} alt="BusinessIcon" />
            <div>
              <h2 className="text-4xl font-medium text-TitleGray">828,867</h2>
              <p className="text-xl text-TextGray">Event Bookings</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 mb-8">
            <img src={BusinessIcon2} alt="BusinessIcon" />
            <div>
              <h2 className="text-4xl font-medium text-TitleGray">46,328</h2>
              <p className="text-xl text-TextGray">Clubs</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={BusinessIcon4} alt="BusinessIcon" />
            <div>
              <h2 className="text-4xl font-medium text-TitleGray">1,926,436</h2>
              <p className="text-xl text-TextGray">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStats;
