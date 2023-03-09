import React from "react";

import { Img, Button, Text, PagerIndicator, Input } from "components";

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-urbanist sm:gap-[20px] md:gap-[20px] items-center mx-[auto] sm:pr-[20px] pr-[220px] md:pr-[40px] w-[100%]">
        <div className="bg-gray_58 flex items-start justify-start p-[23px] md:px-[20px] md:w-[100%] w-[51%]">
          <div className="flex flex-col md:gap-[40px] gap-[79px] justify-start mb-[77px] md:ml-[0] ml-[37px] md:w-[100%] w-[73%]">
            <div className="flex flex-col gap-[130px] md:gap-[40px] justify-start mr-[32px] md:w-[100%] w-[94%]">
              <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[28%]">
                <Img
                  src="images/img_logo.svg"
                  className="h-[24px] w-[auto]"
                  alt="Logo"
                />
                <Img
                  src="images/img_ticket_indigo_a206.svg"
                  className="h-[14px] w-[auto]"
                  alt="ticket"
                />
              </div>
              <div className="bg-bluegray_101 flex items-start justify-end md:ml-[0] ml-[44px] p-[43px] sm:px-[20px] md:px-[40px] rounded-bl-[0] rounded-br-[80px] rounded-tl-[0] rounded-tr-[0] md:w-[100%] w-[91%]">
                <Button className="bg-gradient66  cursor-pointer font-bold md:ml-[0] ml-[65px] mt-[351px] sm:px-[20px] px-[24px] py-[13px] rounded-[8px] text-[16px] text-bluegray_948 text-center w-[161px]">
                  Virtual Tour
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[40px] md:w-[100%] w-[92%]">
              <Text
                className="font-bold text-bluegray_948 text-left tracking-[0.48px] w-[auto]"
                variant="body19"
              >
                View Detail with AR
              </Text>
              <Text
                className="font-bold leading-[30.00px] mt-[24px] text-bluegray_441 text-left tracking-[0.20px] sm:w-[100%] w-[83%]"
                variant="body60"
              >
                You can view interior details with our built-in AR system
              </Text>
              <PagerIndicator
                className="flex h-[8px] mt-[32px] w-[80px]"
                count={3}
                activeCss="inline-block cursor-pointer h-[8px] bg-indigo_A206 w-[48px] rounded-[4px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-blue_103 w-[8px]"
                selectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
              />
            </div>
          </div>
        </div>
        <div className="md:h-[344px] h-[352px] md:ml-[0] ml-[140px] relative md:w-[100%] w-[33%]">
          <div className="absolute bg-white_A700 flex h-[max-content] inset-[0] items-center justify-end m-[auto] p-[40px] sm:px-[20px] rounded-[16px] shadow-bs92 w-[auto]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <Text
                className="font-bold md:ml-[0] ml-[3px] text-bluegray_948 text-left w-[auto]"
                variant="body48"
              >
                Forgot Password
              </Text>
              <Text
                className="font-semibold md:ml-[0] ml-[3px] mt-[16px] text-bluegray_441 text-left w-[auto]"
                variant="body78"
              >
                Enter your email account to reset your password
              </Text>
              <div className="flex flex-col gap-[15px] items-start justify-start mt-[43px] w-[100%]">
                <Text
                  className="font-normal not-italic text-bluegray_948 text-left tracking-[0.14px] w-[auto]"
                  variant="body78"
                >
                  Your Email
                </Text>
                <Input
                  className="font-bold sm:px-[20px] px-[24px] py-[13px] text-[16px] placeholder:text-bluegray_948 text-bluegray_948 text-center w-[100%]"
                  wrapClassName="border-[1px] border-bluegray_948 border-solid rounded-[8px] w-[366px]"
                  name="Button"
                  placeholder="Albertflorest@gmail.com |"
                ></Input>
              </div>
              <Button className="bg-indigo_A206 cursor-pointer font-bold mt-[24px] sm:px-[20px] px-[24px] py-[13px] rounded-[8px] text-[18px] text-center text-white_A700 w-[366px]">
                Reset Password
              </Button>
            </div>
          </div>
          <Button className="absolute bg-bluegray_948 flex h-[36px] items-center justify-center p-[6px] right-[0] rounded-[50%] top-[0] w-[36px]">
            <Img
              src="images/img_close_white_a700.svg"
              className="h-[24px]"
              alt="close"
            />
          </Button>
        </div>
        <Text
          className="font-semibold md:ml-[0] ml-[54px] text-bluegray_948 text-right tracking-[0.12px] w-[auto]"
          variant="body87"
        >
          Login
        </Text>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
