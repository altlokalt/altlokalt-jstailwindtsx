import React from "react";

import { Img, Text, Button, Line, SelectBox, List } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const OnePage: React.FC = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray_58 flex flex-col font-mulish gap-[100px] sm:gap-[40px] md:gap-[40px] items-center justify-end mx-[auto] w-[100%]">
        <div className="bg-indigo_505 flex items-center justify-start p-[30px] sm:px-[20px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[70px] items-center justify-start max-w-[1141px] mb-[53px] mx-[auto] md:px-[20px] w-[100%]">
            <header className="flex md:hidden items-center justify-center w-[100%]">
              <ul className="flex flex-row md:hidden items-center justify-center w-[100%] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[7%] my-[4px]">
                  <div className="header-row ">
                    <Img
                      src="images/img_offer_white_a700_24x73.svg"
                      className="h-[24px]"
                      alt="offer"
                    />
                    <div className="mobile-menu">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </li>
                <li className="mt-[7px] mb-[6px] ml-[95px] sm:w-[100%] sm:my-[10px] sm:hidden w-[auto]">
                  <a
                    className="cursor-pointer hover:font-bold font-semibold sm:hidden text-[14px] text-left text-white_A700 tracking-[1.58px]"
                    href="javascript:"
                  >
                    Home
                  </a>
                </li>
                <li className="mt-[6px] mb-[7px] ml-[22px] sm:w-[100%] sm:my-[10px] sm:hidden w-[auto]">
                  <a
                    className="cursor-pointer hover:font-bold font-semibold sm:hidden text-[14px] text-left text-white_A700 tracking-[1.58px]"
                    href="javascript:"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-[8px] mb-[5px] ml-[20px] sm:w-[100%] sm:my-[10px] sm:hidden w-[auto]">
                  <a
                    className="cursor-pointer hover:font-bold font-semibold sm:hidden text-[14px] text-left text-white_A700 tracking-[1.58px]"
                    href="javascript:"
                  >
                    Jobs
                  </a>
                </li>
                <li className="mt-[8px] mb-[5px] ml-[21px] sm:w-[100%] sm:my-[10px] sm:hidden w-[auto]">
                  <a
                    className="cursor-pointer hover:font-bold font-semibold sm:hidden text-[14px] text-left text-white_A700 tracking-[1.58px]"
                    href="javascript:"
                  >
                    Support
                  </a>
                </li>
                <li className="mt-[8px] mb-[7px] ml-[493px] sm:w-[100%] sm:my-[10px] sm:hidden w-[auto]">
                  <a
                    className="cursor-pointer hover:font-bold font-bold sm:hidden text-[12px] text-left text-white_A700 tracking-[1.35px]"
                    href="javascript:"
                  >
                    SIGN IN
                  </a>
                </li>
                <li className="ml-[22px] sm:w-[100%] sm:my-[10px] sm:hidden text-center">
                  <Button className="bg-light_blue_A201 border-[1px] border-light_blue_A201 border-solid cursor-pointer font-bold sm:hidden py-[8px] rounded-[5px] text-[12px] text-center text-white_A700 tracking-[1.35px]">
                    SIGN UP
                  </Button>
                </li>
              </ul>
            </header>
            <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[49%]">
                <Text
                  className="font-semibold leading-[70.00px] text-left text-white_A700 tracking-[1.00px] w-[100%]"
                  variant="body13"
                >
                  Find the perfect job that you deserve
                </Text>
                <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between mt-[30px] w-[100%]">
                  <div className="bg-white_A700 flex sm:flex-1 flex-row items-center justify-start p-[9px] rounded-[8px] shadow-bs123 sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_search_bluegray_145.svg"
                      className="h-[18px] ml-[7px] w-[18px]"
                      alt="search"
                    />
                    <Text
                      className="font-normal ml-[12px] not-italic text-gray_564 text-left tracking-[1.00px] w-[auto]"
                      variant="body78"
                    >
                      Job Title
                    </Text>
                    <Line className="bg-indigo_60 h-[32px] ml-[72px] w-[1px]" />
                    <Img
                      src="images/img_location_bluegray_145.svg"
                      className="h-[18px] ml-[51px] w-[auto]"
                      alt="location"
                    />
                    <SelectBox
                      className="font-normal leading-[normal] ml-[13px] not-italic text-[14px] text-gray_564 text-left tracking-[1.00px] sm:w-[100%] w-[25%]"
                      placeholderClassName="text-gray_564"
                      name="Group1611"
                      placeholder="NewYork"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_145.svg"
                          className="h-[4px] mr-[0] w-[8px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <Button className="bg-light_blue_A201 cursor-pointer font-bold leading-[normal] min-w-[166px] py-[16px] rounded-[8px] text-[14px] text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]">
                    search
                  </Button>
                </div>
                <Text
                  className="font-normal mt-[31px] not-italic text-indigo_109 text-left tracking-[1.00px] w-[auto]"
                  variant="body78"
                >
                  Praesent molestie, ipsum id fermentum aliquam, diam risus
                  mattis
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[75px] items-center justify-start mt-[42px] md:w-[100%] w-[83%]">
                  <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 tracking-[1.00px] w-[auto]"
                      variant="body39"
                    >
                      6M+
                    </Text>
                    <Text
                      className="font-normal leading-[18.00px] not-italic text-indigo_109 text-left tracking-[1.00px] w-[100%]"
                      variant="body78"
                    >
                      Million daily active user
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 tracking-[1.00px] w-[auto]"
                      variant="body39"
                    >
                      10K+
                    </Text>
                    <Text
                      className="font-normal leading-[18.00px] not-italic text-indigo_109 text-left tracking-[1.00px] w-[100%]"
                      variant="body78"
                    >
                      Open job posution
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 tracking-[1.00px] w-[auto]"
                      variant="body39"
                    >
                      2M+
                    </Text>
                    <Text
                      className="font-normal leading-[18.00px] not-italic text-indigo_109 text-left tracking-[1.00px] w-[100%]"
                      variant="body78"
                    >
                      Million daily stories shared
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[412px] relative md:w-[100%] w-[47%]">
                <Img
                  src="images/img_image_indigo_702.svg"
                  className="absolute h-[412px] inset-[0] justify-center m-[auto] w-[auto]"
                  alt="Image"
                />
                <div className="absolute bg-white_A700 flex flex-row gap-[12px] items-center justify-evenly p-[11px] right-[0] rounded-[8px] shadow-bs123 top-[10%] w-[41%]">
                  <Button className="bg-light_blue_A201 flex h-[51px] items-center justify-center p-[15px] rounded-[25px] w-[51px]">
                    <Img
                      src="images/img_globe_white_a700.svg"
                      className="h-[20px]"
                      alt="globe"
                    />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_975 text-left tracking-[1.00px] w-[auto]"
                      variant="body48"
                    >
                      99+
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-gray_564 text-left tracking-[1.00px] w-[auto]"
                      variant="body78"
                    >
                      Job For Countries
                    </Text>
                  </div>
                </div>
                <div className="absolute bg-white_A700 bottom-[8%] flex flex-row gap-[12px] items-center justify-start left-[0] p-[11px] rounded-[8px] shadow-bs123 w-[39%]">
                  <Button className="bg-light_blue_A201 flex h-[51px] items-center justify-center p-[8px] rounded-[25px] w-[51px]">
                    <Img src="images/img_path.svg" className="" alt="Path" />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_975 text-left tracking-[1.00px] w-[auto]"
                      variant="body48"
                    >
                      15k+
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-gray_564 text-left tracking-[1.00px] w-[auto]"
                      variant="body78"
                    >
                      Companies Job
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start max-w-[1141px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[11px] items-center justify-start md:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-bluegray_975 text-center tracking-[1.00px] w-[auto]"
                variant="body39"
              >
                How It Works
              </Text>
              <Text
                className="font-normal leading-[28.00px] not-italic text-center text-gray_564 tracking-[1.00px] w-[100%]"
                variant="body69"
              >
                Pellentesque consequat congue erat. Cras non metus pretium,
                vulputate eros vel, ornare est.
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between w-[100%]">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[29px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[66%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-row gap-[19px] items-center justify-start sm:ml-[0] p-[19px] rounded-[8px] shadow-bs123 w-[100%]">
                  <Button className="bg-light_blue_A201 flex h-[40px] items-center justify-center my-[19px] p-[8px] rounded-[50%] w-[40px]">
                    <Img src="images/img_user_20.svg" className="" alt="user" />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_975 text-left tracking-[1.00px] w-[auto]"
                      variant="body69"
                    >
                      Register Your Account
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] mt-[3px] not-italic text-gray_564 text-left tracking-[1.00px] w-[100%]"
                      variant="body78"
                    >
                      Aenean euismod aliquam porta qui Nunc pretium mauris vel
                      dolor.
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-row gap-[19px] items-center justify-center sm:ml-[0] p-[19px] rounded-[8px] shadow-bs123 w-[100%]">
                  <Button className="bg-light_blue_A201 flex h-[40px] items-center justify-center my-[19px] p-[10px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_calculator_white_a700_40x40.svg"
                      className=""
                      alt="calculator"
                    />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_975 text-left tracking-[1.00px] w-[auto]"
                      variant="body69"
                    >
                      Apply For Dream Job
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] mt-[3px] not-italic text-gray_564 text-left tracking-[1.00px] w-[100%]"
                      variant="body78"
                    >
                      Donec pellentesque blandit neque, sed interdum magna
                      semper.
                    </Text>
                  </div>
                </div>
              </List>
              <div className="bg-white_A700 flex md:flex-1 flex-row gap-[19px] items-center justify-center p-[19px] rounded-[8px] shadow-bs123 md:w-[100%] w-[32%]">
                <Button className="bg-light_blue_A201 flex h-[40px] items-center justify-center my-[19px] p-[8px] rounded-[50%] w-[40px]">
                  <Img
                    src="images/img_file_white_a700_40x40.svg"
                    className=""
                    alt="file"
                  />
                </Button>
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-medium text-bluegray_975 text-left tracking-[1.00px] w-[auto]"
                    variant="body69"
                  >
                    Upload Your Resume
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] mt-[3px] not-italic text-gray_564 text-left tracking-[1.00px] w-[100%]"
                    variant="body78"
                  >
                    Mauris condimentum vulputate neq nulla sit amet sagittis
                    integer.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_217 flex md:flex-col flex-row md:gap-[40px] items-center justify-between p-[69px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:mt-[0] my-[14px] relative md:w-[100%] w-[49%]">
            <Img
              src="images/img_image_gray_343.svg"
              className="h-[415px] my-[auto] w-[auto]"
              alt="Image One"
            />
            <div className="bg-white_A700 flex flex-col items-center justify-center ml-[-59px] mt-[39px] p-[20px] rounded-[8px] shadow-bs123 w-[32%] z-[1]">
              <Text
                className="font-medium text-bluegray_975 text-center tracking-[0.67px] w-[auto]"
                variant="body69"
              >
                Found 250+ Jobs
              </Text>
              <div className="flex flex-row gap-[12px] items-center justify-center mt-[7px] md:w-[100%] w-[50%]">
                <Img
                  src="images/img_facebook_indigo_505.svg"
                  className="h-[16px] w-[auto]"
                  alt="facebook"
                />
                <Img
                  src="images/img_facebook_indigo_505.svg"
                  className="h-[16px] w-[auto]"
                  alt="twitter"
                />
                <Img
                  src="images/img_facebook_indigo_505.svg"
                  className="h-[16px] w-[auto]"
                  alt="linkedin"
                />
              </div>
              <Text
                className="font-normal mt-[9px] not-italic text-center text-light_blue_A201 tracking-[1.00px] w-[auto]"
                variant="body78"
              >
                <span className="text-light_blue_A201 text-[14px] font-mulish">
                  +20
                </span>
                <span className="text-gray_564 text-[14px] font-mulish">
                  {" "}
                  Glants
                </span>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[41%]">
            <Text
              className="font-semibold leading-[42.00px] text-bluegray_975 text-left tracking-[1.00px] sm:w-[100%] w-[79%]"
              variant="body39"
            >
              Help you to get the best job that fits you
            </Text>
            <Text
              className="font-normal leading-[28.00px] mt-[10px] not-italic text-gray_564 text-left tracking-[1.00px] w-[100%]"
              variant="body69"
            >
              Quisque efficitur lorem vel arcu laoreet, quis euismod neque
              semper. Vestibulum nisl lacus.
            </Text>
            <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[2px] mt-[30px] md:w-[100%] w-[63%]">
              <Img
                src="images/img_checkmark_teal_312.svg"
                className="h-[8px] w-[auto]"
                alt="checkmark"
              />
              <Text
                className="font-normal not-italic text-bluegray_975 text-left tracking-[1.00px] w-[auto]"
                variant="body78"
              >
                Bring to the table win-win survival
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[2px] mt-[15px] md:w-[100%] w-[74%]">
              <Img
                src="images/img_checkmark_teal_312.svg"
                className="h-[8px] w-[auto]"
                alt="checkmark One"
              />
              <Text
                className="font-normal not-italic text-bluegray_975 text-left tracking-[1.00px] w-[auto]"
                variant="body78"
              >
                Capitalize on low hanging fruit to identify
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[2px] mt-[15px] md:w-[100%] w-[66%]">
              <Img
                src="images/img_checkmark_teal_312.svg"
                className="h-[8px] w-[auto]"
                alt="checkmark Two"
              />
              <Text
                className="font-normal not-italic text-bluegray_975 text-left tracking-[1.00px] w-[auto]"
                variant="body78"
              >
                But I must explain to you how all this
              </Text>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start max-w-[1141px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[8px] items-center justify-start pt-[3px] md:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-bluegray_975 text-center tracking-[1.00px] w-[auto]"
                variant="body39"
              >
                Explore by Category
              </Text>
              <Text
                className="font-normal leading-[28.00px] not-italic text-center text-gray_564 tracking-[1.00px] w-[100%]"
                variant="body69"
              >
                Aliquam sed molestie sem, eget congue erat. Orci varius natoque
                penatibus et magnis.
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[20px] rounded-[8px] shadow-bs123 w-[100%]">
                <Button className="bg-light_blue_A201 flex h-[50px] items-center justify-center p-[10px] rounded-[50%] w-[50px]">
                  <Img
                    src="images/img_settings_white_a700_50x50.svg"
                    className="h-[28px]"
                    alt="settings"
                  />
                </Button>
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-bluegray_975 text-center tracking-[1.00px] w-[auto]"
                    variant="body69"
                  >
                    Digital Marketing
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] mt-[8px] not-italic text-center text-gray_564 tracking-[1.00px] w-[100%]"
                    variant="body78"
                  >
                    Vivamus dignissim dictum libero curabitur ut.
                  </Text>
                  <Text
                    className="font-normal mt-[23px] not-italic text-center text-light_blue_A201 tracking-[1.00px] w-[auto]"
                    variant="body87"
                  >
                    200k+ posted new jobs
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[20px] rounded-[8px] shadow-bs123 w-[100%]">
                <Button className="bg-light_blue_A201 flex h-[50px] items-center justify-center p-[6px] rounded-[50%] w-[50px]">
                  <Img
                    src="images/img_location_white_a700_50x50.svg"
                    className=""
                    alt="location One"
                  />
                </Button>
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-bluegray_975 text-center tracking-[1.00px] w-[auto]"
                    variant="body69"
                  >
                    Art & Design
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] mt-[8px] not-italic text-center text-gray_564 tracking-[1.00px] w-[100%]"
                    variant="body78"
                  >
                    Nullam sit amet eleifend nibh, id faucibus magna.
                  </Text>
                  <Text
                    className="font-normal mt-[23px] not-italic text-center text-light_blue_A201 tracking-[1.00px] w-[auto]"
                    variant="body87"
                  >
                    500k+ posted new jobs
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[20px] rounded-[8px] shadow-bs123 w-[100%]">
                <Button className="bg-light_blue_A201 flex h-[50px] items-center justify-center p-[9px] rounded-[50%] w-[50px]">
                  <Img
                    src="images/img_lock_white_a700_50x50.svg"
                    className=""
                    alt="lock"
                  />
                </Button>
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-bluegray_975 text-center tracking-[1.00px] w-[auto]"
                    variant="body69"
                  >
                    UI/UX Designer
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] mt-[8px] not-italic text-center text-gray_564 tracking-[1.00px] w-[100%]"
                    variant="body78"
                  >
                    Fusce rutrum augue in ligula maximus eleifend.
                  </Text>
                  <Text
                    className="font-normal mt-[23px] not-italic text-center text-light_blue_A201 tracking-[1.00px] w-[auto]"
                    variant="body87"
                  >
                    650k+ posted new jobs
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[20px] rounded-[8px] shadow-bs123 w-[100%]">
                <Button className="bg-light_blue_A201 flex h-[50px] items-center justify-center p-[11px] rounded-[50%] w-[50px]">
                  <Img
                    src="images/img_arrowright_white_a700_50x50.svg"
                    className=""
                    alt="arrowright"
                  />
                </Button>
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-bluegray_975 text-center tracking-[1.00px] w-[auto]"
                    variant="body69"
                  >
                    Finance & Account
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] mt-[10px] not-italic text-center text-gray_564 tracking-[1.00px] w-[100%]"
                    variant="body78"
                  >
                    Fusce facilisis sit amet nulla eget fermentum.
                  </Text>
                  <Text
                    className="font-normal mt-[23px] not-italic text-center text-light_blue_A201 tracking-[1.00px] w-[auto]"
                    variant="body87"
                  >
                    400k+ posted new jobs
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-gray_217 flex md:flex-col flex-row md:gap-[40px] items-center justify-between p-[69px] sm:px-[20px] md:px-[40px] w-[100%]">
          <List
            className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[49%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-col gap-[18px] items-center justify-end p-[16px] rounded-[8px] shadow-bs123 w-[100%]">
              <Text
                className="font-normal leading-[26.00px] mt-[4px] not-italic text-gray_564 text-left tracking-[1.00px] sm:w-[100%] w-[97%]"
                variant="body69"
              >
                “Vestibulum tempor nisl id finibus est sed dictum deo Proin ac
                orci quis metus in dictum elementum eu vele sapien. Morbi dolor
                nisl, at condimentum eget”
              </Text>
              <div className="flex flex-row gap-[9px] items-center justify-start md:w-[100%] w-[97%]">
                <div className="bg-gray_344 h-[50px] rounded-[50%] w-[50px]"></div>
                <Text
                  className="font-medium text-bluegray_975 text-left tracking-[1.00px] w-[auto]"
                  variant="body69"
                >
                  Quiche Hollandaise
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[18px] items-start justify-end p-[16px] rounded-[8px] shadow-bs123 w-[100%]">
              <Text
                className="font-normal leading-[26.00px] md:ml-[0] ml-[4px] mt-[4px] not-italic text-gray_564 text-left tracking-[1.00px] sm:w-[100%] w-[97%]"
                variant="body69"
              >
                “Curabitur vel odio sem en Duis ullamcorper quis est at iaculis.
                Sed rhoncus, at purus sed semper interdu malesuada, nisl sapien
                dui gravida velit ac”
              </Text>
              <div className="flex flex-row gap-[9px] items-center justify-start mr-[auto] pr-[2px] md:w-[100%] w-[68%]">
                <div className="bg-gray_344 h-[50px] rounded-[50%] w-[50px]"></div>
                <Text
                  className="font-medium text-bluegray_975 text-left tracking-[1.00px] w-[auto]"
                  variant="body69"
                >
                  Hans Down
                </Text>
              </div>
            </div>
          </List>
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] my-[14px] pt-[3px] md:w-[100%] w-[41%]">
            <Text
              className="font-semibold text-bluegray_975 text-left tracking-[1.00px] w-[auto]"
              variant="body39"
            >
              What our customers say
            </Text>
            <Text
              className="font-normal leading-[28.00px] mt-[6px] not-italic text-gray_564 text-left tracking-[1.00px] w-[100%]"
              variant="body69"
            >
              Phasellus malesuada erat ut lectus accumsan varius. Nullam non
              quam sed elit tincidunt rhoncus.
            </Text>
            <Text
              className="font-medium mt-[60px] text-bluegray_975 text-center tracking-[0.67px] w-[auto]"
              variant="body69"
            >
              150 people loves
            </Text>
            <Img
              src="images/img_users.svg"
              className="h-[56px] mt-[7px] w-[auto]"
              alt="Users"
            />
            <Img
              src="images/img_icons.svg"
              className="h-[40px] md:ml-[0] ml-[98px] mt-[30px] w-[auto]"
              alt="Icons"
            />
          </div>
        </div>
        <div className="bg-indigo_505 flex flex-col items-center justify-start max-w-[1141px] mx-[auto] p-[50px] md:px-[20px] rounded-[50px] w-[100%]">
          <Text
            className="font-semibold leading-[42.00px] text-center text-light_blue_A201 tracking-[1.00px] sm:w-[100%] w-[39%]"
            variant="body39"
          >
            <span className="md:text-[28px] sm:text-[26px] text-light_blue_A201 text-[30px] font-mulish">
              Subscribe
            </span>
            <span className="md:text-[28px] sm:text-[26px] text-white_A700 text-[30px] font-mulish">
              {" "}
              newsletter & get company news.
            </span>
          </Text>
          <Text
            className="font-normal leading-[28.00px] mt-[20px] not-italic text-center text-white_A700 tracking-[1.00px] sm:w-[100%] w-[44%]"
            variant="body69"
          >
            Vivamus tincidunt magna feugiat eros egestas luctus. Nulla vehicula
            magna ac blandit vestibulum.
          </Text>
          <div className="bg-white_A700 flex flex-row gap-[275px] sm:gap-[40px] items-center justify-end mt-[39px] p-[9px] rounded-[24px] md:w-[100%] w-[54%]">
            <Text
              className="font-normal not-italic text-bluegray_145 text-left tracking-[1.00px] w-[auto]"
              variant="body87"
            >
              Enter your mail address
            </Text>
            <Button className="bg-light_blue_A201 cursor-pointer font-bold leading-[normal] min-w-[102px] py-[7px] rounded-[15px] text-[12px] text-center text-white_A700 tracking-[1.00px] uppercase w-[auto]">
              search
            </Button>
          </div>
        </div>
        <div className="bg-white_A700 flex items-center justify-end pb-[53px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[67px] items-center justify-start w-[100%]">
            <Line className="bg-gray_201 h-[1px] w-[100%]" />
            <div className="flex flex-col gap-[20px] items-start justify-start max-w-[1113px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[87%]">
                <Img
                  src="images/img_offer_bluegray_833.svg"
                  className="h-[24px] md:mt-[0] mt-[5px] w-[auto]"
                  alt="offer One"
                />
                <Text
                  className="font-normal md:ml-[0] ml-[414px] not-italic text-bluegray_975 text-left tracking-[0.69px] w-[auto]"
                  variant="body69"
                >
                  Company
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[120px] not-italic text-bluegray_975 text-left tracking-[0.69px] w-[auto]"
                  variant="body69"
                >
                  Policy
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[149px] not-italic text-bluegray_975 text-left tracking-[0.69px] w-[auto]"
                  variant="body69"
                >
                  Contact Us
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[37px] items-start justify-start md:mt-[0] mt-[3px] md:w-[100%] w-[42%]">
                  <Text
                    className="font-normal leading-[30.00px] not-italic text-gray_564 text-left tracking-[0.88px] w-[100%]"
                    variant="body78"
                  >
                    Morbi convallis bibendum urna ut viverra. Maecenas quis
                    consequat libero, a feugiat eros. Nunc ut lacinia tortor
                    morbi ultricies laoreet ullamcorper phasellus semper.
                  </Text>
                  <div className="flex flex-row gap-[12px] items-center justify-start md:w-[100%] w-[27%]">
                    <Img
                      src="images/img_facebook_indigo_505.svg"
                      className="h-[16px] w-[auto]"
                      alt="facebook One"
                    />
                    <Img
                      src="images/img_facebook_indigo_505.svg"
                      className="h-[16px] w-[auto]"
                      alt="twitter One"
                    />
                    <Img
                      src="images/img_facebook_indigo_505.svg"
                      className="h-[16px] w-[auto]"
                      alt="linkedin One"
                    />
                    <Img
                      src="images/img_facebook_indigo_505.svg"
                      className="common-pointer h-[16px] w-[auto]"
                      onClick={() => googleSignIn()}
                      alt="google"
                    />
                    <Img
                      src="images/img_lightbulb_indigo_505.svg"
                      className="h-[16px] w-[auto]"
                      alt="lightbulb"
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[57%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[94%]">
                    <List
                      className="flex-col gap-[10px] grid sm:mt-[0] mt-[5px] w-[auto]"
                      orientation="vertical"
                    >
                      <div className="flex flex-row items-start justify-between md:w-[100%] w-[91%]">
                        <div className="flex flex-row gap-[17px] items-start justify-start mt-[2px] w-[36%]">
                          <Line className="bg-gray_564 h-[16px] mt-[2px] w-[6px]" />
                          <Text
                            className="font-normal not-italic text-gray_564 text-left tracking-[0.47px] w-[auto]"
                            variant="body78"
                          >
                            About Us
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[17px] items-start justify-start mb-[2px] w-[22%]">
                          <Line className="bg-gray_564 h-[16px] mt-[2px] w-[6px]" />
                          <Text
                            className="font-normal not-italic text-gray_564 text-left tracking-[0.47px] w-[auto]"
                            variant="body78"
                          >
                            FAQ
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <div className="flex flex-row gap-[17px] items-start justify-start mt-[2px] w-[31%]">
                          <Line className="bg-gray_564 h-[16px] mt-[2px] w-[6px]" />
                          <Text
                            className="font-normal not-italic text-gray_564 text-left tracking-[0.47px] w-[auto]"
                            variant="body78"
                          >
                            Features
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[17px] items-start justify-start mb-[2px] w-[29%]">
                          <Line className="bg-gray_564 h-[16px] mt-[2px] w-[6px]" />
                          <Text
                            className="font-normal not-italic text-gray_564 text-left tracking-[0.47px] w-[auto]"
                            variant="body78"
                          >
                            Contact
                          </Text>
                        </div>
                      </div>
                    </List>
                    <Text
                      className="font-normal leading-[26.00px] mb-[3px] not-italic text-gray_564 text-left tracking-[0.88px]"
                      variant="body78"
                    >
                      455 West Orchard Street <br />
                      Kings Mountain, NC 28086
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[3px] md:w-[100%] w-[90%]">
                    <div className="flex flex-row gap-[17px] items-start justify-start sm:mt-[0] mt-[9px] sm:w-[100%] w-[21%]">
                      <Line className="bg-gray_564 h-[16px] mt-[2px] w-[6px]" />
                      <Text
                        className="font-normal not-italic text-gray_564 text-left tracking-[0.47px] w-[auto]"
                        variant="body78"
                      >
                        How it Works
                      </Text>
                    </div>
                    <Line className="bg-gray_564 h-[16px] sm:h-[6px] mb-[2px] sm:ml-[0] ml-[78px] sm:mt-[0] mt-[9px] sm:w-[100%] w-[6px]" />
                    <Text
                      className="font-normal sm:ml-[0] ml-[17px] sm:mt-[0] mt-[7px] not-italic text-gray_564 text-left tracking-[0.47px] w-[auto]"
                      variant="body78"
                    >
                      Shopping
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[107px] not-italic text-gray_564 text-left tracking-[0.88px] w-[auto]"
                      variant="body78"
                    >
                      Phone: (272) 211-7370
                    </Text>
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[390px] mt-[5px] not-italic text-gray_564 text-left tracking-[0.88px] w-[auto]"
                    variant="body78"
                  >
                    <span className="text-gray_564 text-[14px] font-mulish">
                      E-Mail:
                    </span>
                    <span className="text-bluegray_454 text-[14px] font-mulish">
                      {" "}
                    </span>
                    <span className="text-indigo_505 text-[14px] font-mulish">
                      support@yourbrand.com
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnePage;
