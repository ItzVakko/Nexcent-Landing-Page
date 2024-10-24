import React from "react";
import PixelGradeIllustration from "../../assets/images/PixelGradeIllustration.png";

const PixelGrade = () => {
  return (
    <div className="flex justify-between items-center px-60 mt-20">
      <img
        src={PixelGradeIllustration}
        alt="pixelgrade-illustration"
        className="max-w-[500px] w-full h-auto"
      />

      <div className="max-w-[750px]">
        <h2 className="text-5xl font-medium text-TitleGray">
          The unseen of spending three
          <br /> years at Pixelgrade
        </h2>
        <p className="text-xl text-TextGray mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>

        <button className="text-xl bg-PrimaryGreen text-white py-3 px-6 rounded-md mt-8">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PixelGrade;
