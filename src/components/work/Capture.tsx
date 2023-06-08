import React from "react";
import Button from "../variants/Button";
import { useNavigate } from "react-router-dom";

const Capture = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-moon-light p-16 text-[#fff]">
      <p className="text-center font-druk-wide font-[700] leading-relaxed text-night text-xl">
        Want to capture the action? <br />
        Lets Shoot.
      </p>

      <div className="flex justify-center mt-5">
        <Button
          onClick={() => navigate("/book_us")}
          label="Book Us"
          variant="dark"
          extraClass="px-10"
        />
      </div>
    </div>
  );
};

export default Capture;
