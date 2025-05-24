import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      <p className="text-sm text-gray-800">
        Copyright @ To Do App | All rights reserved.
      </p>

      <div className="flex gap-5">
        <img
          className="h-6 w-6"
          src="https://cdn-icons-png.freepik.com/256/15047/15047435.png?ga=GA1.1.1216306819.1739192753&semt=ais_hybrid"
          alt=""
        />
        <img
          className="h-6 w-6"
          src="https://cdn-icons-png.freepik.com/256/5969/5969020.png?ga=GA1.1.1216306819.1739192753&semt=ais_hybrid"
          alt=""
        />
        <img
          className="h-6 w-6"
          src="https://cdn-icons-png.freepik.com/256/2111/2111450.png?ga=GA1.1.1216306819.1739192753&semt=ais_hybrid"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
