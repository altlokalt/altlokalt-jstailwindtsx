import React from "react";

import {
  Img,
  Text,
  Button,
  PagerIndicator,
  Input,
  SelectBox,
} from "components";

const RegisterPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-urbanist items-start justify-end mx-[auto] pr-[157px] sm:pr-[20px] md:pr-[40px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1462px] mx-[auto] w-[100%]">
          <div className="bg-gray_58 flex md:flex-1 items-center justify-start p-[23px] sm:px-[20px] md:w-[100%] w-[49%]">
            <div className="flex flex-col md:gap-[40px] gap-[79px] justify-start mb-[77px] md:w-[100%] w-[85%]">
              <div className="flex flex-col gap-[129px] md:gap-[40px] justify-start w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[23%]">
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
                <div className="h-[486px] md:ml-[0] ml-[40px] relative sm:w-[100%] w-[93%]">
                  <div className="absolute bg-bluegray_101 flex flex-col gap-[40px] h-[100%] inset-y-[0] justify-center left-[0] my-[auto] p-[61px] sm:px-[20px] md:px-[40px] rounded-bl-[0] rounded-br-[80px] rounded-tl-[0] rounded-tr-[0] w-[70%]">
                    <div className="bg-gray_120 h-[36px] md:ml-[0] ml-[178px] mr-[31px] mt-[80px] rounded-[8px] w-[36px]"></div>
                    <Img
                      src="images/img_contrast_white_a700_26x22.svg"
                      className="h-[26px] mb-[182px] md:ml-[0] ml-[223px] w-[auto]"
                      alt="contrast"
                    />
                  </div>
                  <div className="absolute bg-bluegray_948 flex flex-row items-center justify-end left-[3%] p-[16px] rounded-[11px] top-[3%] w-[77%]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      variant="body96"
                    >
                      03.45
                    </Text>
                    <Img
                      src="images/img_computer_gray_120.svg"
                      className="h-[29px] ml-[66px] rounded-[6px] w-[79px]"
                      alt="computer"
                    />
                    <Button className="bg-gray_100_67 flex h-[29px] items-center justify-center ml-[16px] my-[3px] p-[8.07px] rounded-[6px] w-[29px]">
                      <Img
                        src="images/img_settings_white_a700_29x29.svg"
                        className="h-[13px]"
                        alt="settings"
                      />
                    </Button>
                    <Button className="bg-gray_100_67 flex h-[29px] items-center justify-center ml-[16px] my-[3px] p-[8.07px] rounded-[6px] w-[29px]">
                      <Img
                        src="images/img_lightbulb_white_a700.svg"
                        className="h-[13px]"
                        alt="lightbulb"
                      />
                    </Button>
                    <Button className="bg-gray_100_67 flex h-[29px] items-center justify-center ml-[16px] my-[3px] p-[8.07px] rounded-[6px] w-[29px]">
                      <Img
                        src="images/img_microphoneslash.svg"
                        className="h-[13px]"
                        alt="microphoneslash"
                      />
                    </Button>
                    <Button className="bg-red_508 flex h-[36px] items-center justify-center ml-[16px] p-[8px] rounded-[6px] w-[36px]">
                      <Img
                        src="images/img_alarm_white_a700.svg"
                        className="h-[19px]"
                        alt="alarm"
                      />
                    </Button>
                  </div>
                  <div className="absolute bg-white_A700 flex items-center justify-center sm:px-[20px] px-[24px] py-[8px] right-[0] rounded-bl-[0] rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shadow-bs92 top-[29%] w-[auto]">
                    <Text
                      className="font-medium leading-[140.00%] md:max-w-[100%] max-w-[194px] text-bluegray_948 text-left"
                      variant="body78"
                    >
                      I need a photo of your house building front view, because
                      it&#39;s not in the description
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[40px] md:w-[100%] w-[70%]">
                <Text
                  className="font-bold text-bluegray_948 text-left tracking-[0.48px] w-[auto]"
                  variant="body19"
                >
                  Free Consultation
                </Text>
                <Text
                  className="font-bold leading-[30.00px] mt-[24px] text-bluegray_441 text-left tracking-[0.20px] sm:w-[100%] w-[94%]"
                  variant="body60"
                >
                  Let your connect with the agent in our in-build-chat system to
                  connect agent
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
          <div className="flex md:flex-1 flex-col gap-[128px] md:gap-[40px] justify-start md:mt-[0] mt-[28px] md:w-[100%] w-[42%]">
            <Text
              className="font-semibold md:ml-[0] ml-[500px] text-bluegray_948 text-right tracking-[0.12px] w-[auto]"
              variant="body87"
            >
              Register
            </Text>
            <div className="flex flex-col items-start justify-start w-[100%]">
              <Text
                className="font-bold font-urbanist text-bluegray_948 text-left tracking-[0.36px] w-[auto]"
                variant="body30"
              >
                Create your Free Account
              </Text>
              <Text
                className="font-semibold font-urbanist mt-[17px] text-bluegray_441 text-left tracking-[0.14px] w-[auto]"
                variant="body78"
              >
                Sumbit your data for register
              </Text>
              <div className="flex flex-col font-urbanist gap-[13px] items-start justify-start mt-[51px] md:w-[100%] w-[74%]">
                <Text
                  className="font-medium text-bluegray_948 text-left w-[auto]"
                  variant="body78"
                >
                  Full Name
                </Text>
                <Input
                  className="font-semibold sm:px-[20px] px-[24px] py-[13px] text-[16px] placeholder:text-bluegray_948 text-bluegray_948 text-center w-[100%]"
                  wrapClassName="border-[1px] border-bluegray_948 border-solid rounded-[8px] sm:w-[100%] w-[446px]"
                  name="Button"
                  placeholder="Albert Florest |"
                ></Input>
              </div>
              <div className="flex flex-col font-urbanist gap-[11px] items-start justify-start mt-[27px] md:w-[100%] w-[74%]">
                <Text
                  className="font-medium text-bluegray_441 text-left w-[auto]"
                  variant="body78"
                >
                  Your Origin
                </Text>
                <SelectBox
                  className="border-[1px] border-bluegray_441 border-solid font-semibold sm:px-[20px] px-[24px] py-[13px] rounded-[8px] text-[16px] text-bluegray_948 text-center w-[100%]"
                  placeholderClassName="text-bluegray_948"
                  name="country"
                  placeholder="Semarang, Indonesia"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_bluegray_441.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <div className="flex flex-col font-urbanist gap-[13px] items-start justify-start mt-[25px] md:w-[100%] w-[74%]">
                <Text
                  className="font-medium text-bluegray_441 text-left w-[auto]"
                  variant="body78"
                >
                  Your Email
                </Text>
                <Input
                  className="font-semibold sm:px-[20px] px-[24px] py-[13px] text-[16px] placeholder:text-bluegray_948 text-bluegray_948 text-center w-[100%]"
                  wrapClassName="border-[1px] border-bluegray_441 border-solid rounded-[8px] sm:w-[100%] w-[446px]"
                  type="email"
                  name="email Three"
                  placeholder="Albertflorest@gmail.com"
                ></Input>
              </div>
              <div className="font-urbanist h-[118px] sm:h-[139px] md:h-[99px] mt-[21px] relative w-[100%]">
                <div className="absolute md:h-[78px] h-[93px] inset-x-[0] mx-[auto] top-[3%] w-[100%]">
                  <div className="absolute bg-indigo_A206 bottom-[0] flex items-center justify-center sm:px-[20px] px-[24px] py-[13px] right-[0] rounded-[8px] sm:w-[100%] w-[501px]">
                    <Text
                      className="font-bold text-center text-white_A700 w-[auto]"
                      variant="body64"
                    >
                      Get Started
                    </Text>
                  </div>
                  <div className="absolute flex flex-col gap-[13px] items-start justify-start left-[0] top-[0] w-[74%]">
                    <Text
                      className="font-medium text-bluegray_441 text-left w-[auto]"
                      variant="body78"
                    >
                      Password
                    </Text>
                    <Input
                      className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_948 text-bluegray_948 text-center w-[100%]"
                      wrapClassName="border-[1px] border-bluegray_441 border-solid flex px-[24px] py-[13px] rounded-[8px] sm:px-[20px] w-[100%]"
                      type="password"
                      name="password"
                      placeholder="*********"
                      suffix={
                        <Img
                          src="images/img_location_bluegray_441.svg"
                          className="ml-[35px] my-[auto]"
                          alt="location"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="absolute flex flex-col md:gap-[40px] gap-[85px] h-[100%] inset-y-[0] justify-start left-[0] my-[auto] w-[67%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[138px] not-italic text-bluegray_948 text-left tracking-[0.14px] w-[auto]"
                    variant="body78"
                  >
                    <span className="text-bluegray_948 text-[14px] font-urbanist">
                      I agree to Sewo
                    </span>
                    <span className="text-bluegray_948 text-[14px] font-urbanist">
                      {" "}
                    </span>
                    <span className="text-indigo_A206 text-[14px] font-urbanist font-semibold">
                      Security
                    </span>
                    <span className="text-bluegray_948 text-[14px] font-urbanist">
                      {" "}
                    </span>
                    <span className="text-bluegray_948 text-[14px] font-urbanist">
                      and
                    </span>
                    <span className="text-bluegray_948 text-[14px] font-urbanist">
                      {" "}
                    </span>
                    <span className="text-indigo_A206 text-[14px] font-urbanist font-semibold">
                      Privacy Policy
                    </span>
                  </Text>
                  <div className="bg-indigo_A206 flex h-[16px] items-center justify-start mr-[391px] p-[2px] rounded-[4px] w-[16px]">
                    <Img
                      src="images/img_checkmark_white_a700.svg"
                      className="h-[12px] w-[12px]"
                      alt="checkmark"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="font-inter font-normal md:ml-[0] ml-[273px] mt-[46px] not-italic text-bluegray_441 text-left w-[auto]"
                variant="body78"
              >
                <span className="text-bluegray_441 text-[14px] tracking-[0.14px] font-urbanist">
                  I have an acount?
                </span>
                <span className="text-indigo_A206 text-[14px] font-urbanist">
                  {" "}
                </span>
                <span className="text-indigo_A206 text-[14px] font-urbanist font-semibold">
                  Login
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
