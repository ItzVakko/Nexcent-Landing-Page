import React from "react";
import Logo from "../../assets/images/Logo.png";

const NavBar = () => {
  return (
    <div className="w-full h-20 py-12 px-32 flex justify-between items-center">
      <img src={Logo} alt="nexcent-logo" />

      <ul className="flex gap-14 text-PrimaryGray text-xl">
        <li>Home</li>
        <li>Service</li>
        <li>Feature</li>
        <li>Product</li>
        <li>Testimonial</li>
        <li>FAQ</li>
      </ul>

      <div>
        <button className="text-PrimaryGreen text-xl mr-6">Login</button>
        <button className="bg-PrimaryGreen text-white text-xl py-2.5 px-5 rounded-md">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
