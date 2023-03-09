import React from "react";

import { Img } from "components";

const HtmltodePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-[31px] justify-center mx-[auto] p-[44px] sm:px-[20px] md:px-[40px] w-[100%]">
        <Img
          src="images/img_close_black_902.svg"
          className="h-[40px] md:ml-[0] ml-[2436px] mt-[1435px] w-[40px]"
          alt="close"
        />
        <div className="bg-red_602 flex h-[81px] items-center justify-start mb-[4224px] md:ml-[0] ml-[2380px] mr-[15px] p-[20px] md:px-[20px] rounded-[40px] shadow-bs24 w-[81px]">
          <Img
            src="images/img_frame.svg"
            className="h-[40px] w-[40px]"
            alt="Frame"
          />
        </div>
      </div>
    </>
  );
};

export default HtmltodePage;
