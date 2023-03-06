import React from "react";

import { Text, Img, Button, List, Line, SelectBox } from "components";

const RawPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-white_A700 flex items-center justify-center w-[100%]">
              <div className="bg-white_A700 border-b-[1px] border-black_900 border-solid flex items-center justify-center w-[100%]">
                <div className="flex flex-col items-center justify-center w-[100%]">
                  <div className="h-[36px] relative w-[100%]">
                    <div className="flex flex-row gap-[22px] h-[100%] items-center justify-center ml-[auto] mr-[40px] my-[auto] sm:pl-[20px] pl-[22px] py-[8px] w-[auto]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_51 text-left w-[auto]"
                          variant="body91"
                        >
                          <span className="text-gray_51 text-[11px] font-inter">
                            Become a{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-white_A700 text-[11px] font-inter font-semibold underline"
                          >
                            Zola vendor
                          </a>
                        </Text>
                      </div>
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_51 text-left w-[auto]"
                          variant="body91"
                        >
                          <span className="text-gray_51 text-[11px] font-inter">
                            Shop{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-white_A700 text-[11px] font-inter font-semibold underline"
                          >
                            Zola Home
                          </a>
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bg-teal_901 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[10px] w-[100%]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-center text-cyan_A100 w-[auto]"
                          variant="body82"
                        >
                          FREE SHIPPING EVERY DAY details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[16px] w-[100%]">
                      <ul className="flex md:flex-1 sm:flex-col flex-row md:hidden items-start justify-start md:ml-[0] ml-[24px] sm:pr-[20px] pr-[380px] md:pr-[40px] md:w-[100%] w-[45%] common-row-list">
                        <li className="sm:w-[100%] sm:my-[10px] w-[31%]">
                          <div className="flex flex-row gap-[0.97px] items-center justify-start">
                            <a
                              className="capitalize cursor-pointer font-semibold text-[13px] text-black_900 text-center w-[auto]"
                              href="javascript:"
                            >
                              Plan your wedding
                            </a>
                            <Img
                              src="images/img_arrowdown_black_900_20x20.svg"
                              className="h-[20px] w-[20px]"
                              alt="arrowdown"
                            />
                          </div>
                        </li>
                        <li className="ml-[32px] sm:w-[100%] sm:my-[10px] w-[38%]">
                          <div className="flex flex-row gap-[4.59px] items-center justify-start">
                            <a
                              className="capitalize cursor-pointer font-semibold text-[13px] text-black_900 text-left w-[auto]"
                              href="javascript:"
                            >
                              Community and advice
                            </a>
                            <Img
                              src="images/img_arrowdown_black_900_20x20.svg"
                              className="h-[20px] w-[20px]"
                              alt="arrowdown One"
                            />
                          </div>
                        </li>
                        <li className="mt-[3px] mb-[1px] ml-[32px] sm:w-[100%] sm:my-[10px] w-[auto]">
                          <a
                            className="cursor-pointer font-semibold text-[13px] text-black_900 text-left"
                            href="javascript:"
                          >
                            Find a couple
                          </a>
                        </li>
                      </ul>
                      <Img
                        src="images/img_svg_black_900.svg"
                        className="h-[24px] w-[auto]"
                        alt="svg"
                      />
                      <div className="flex md:flex-1 flex-row items-center justify-center sm:pl-[20px] md:pl-[40px] pl-[541px] md:w-[100%] w-[45%]">
                        <Img
                          src="images/img_search_white_a700.svg"
                          className="h-[44px] rounded-[50%] w-[44px]"
                          alt="search"
                        />
                        <Button className="bg-white_A700 flex h-[44px] items-center justify-center p-[13px] rounded-[50%] w-[44px]">
                          <Img
                            src="images/img_vector_black_900.svg"
                            className="h-[16px]"
                            alt="Vector"
                          />
                        </Button>
                        <Button className="bg-white_A700 border-[1px] border-black_900 border-solid cursor-pointer font-semibold min-w-[78px] ml-[8px] pb-[11.42px] pl-[17px] pr-[17.81px] pt-[9.58px] rounded-[22px] text-[15px] text-black_900 text-center w-[auto]">
                          Log in
                        </Button>
                        <Button className="bg-black_900 cursor-pointer font-semibold min-w-[117px] ml-[8px] pb-[11.42px] pl-[17px] pr-[17.11px] pt-[9.58px] rounded-[22px] text-[15px] text-center text-white_A700 w-[auto]">
                          Get started
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="border-black_900 border-solid border-t-[1px] flex items-center justify-end p-[16px] w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start sm:px-[20px] md:px-[40px] px-[681px] md:w-[100%] w-[96%]">
                      <Text
                        className="font-normal sm:mt-[0] mt-[4px] not-italic text-black_900 text-left w-[auto]"
                        variant="body82"
                      >
                        Real wedding inspiration
                      </Text>
                      <div className="flex flex-row items-center justify-center sm:ml-[0] ml-[33px] sm:w-[100%] w-[26%]">
                        <Text
                          className="font-normal mt-[3px] not-italic text-black_900 text-left w-[auto]"
                          variant="body82"
                        >
                          Explore vendors
                        </Text>
                        <Img
                          src="images/img_arrowdown_black_900.svg"
                          className="h-[5px] ml-[4px] w-[auto]"
                          alt="arrowdown Two"
                        />
                      </div>
                      <Text
                        className="font-normal sm:ml-[0] ml-[32px] sm:mt-[0] mt-[3px] not-italic text-black_900 text-left w-[auto]"
                        variant="body82"
                      >
                        Become a vendor
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start pb-[16px] w-[100%]">
            <div className="border-b-[1px] border-black_900 border-solid flex md:flex-col flex-row md:gap-[40px] gap-[64px] items-start justify-start w-[100%]">
              <div className="border-black_900 border-r-[1px] border-solid h-[799px] md:px-[20px] w-[67%]"></div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[64px] pt-[7px] md:px-[20px] md:w-[100%] w-[27%]">
                <Text
                  className="font-medium text-gray_904 text-left tracking-[-0.40px] w-[auto]"
                  variant="body64"
                >
                  Wedding venues and vendors
                </Text>
                <div className="flex items-start justify-start mt-[26px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal leading-[48.00px] md:max-w-[100%] max-w-[403px] not-italic text-black_900 text-left tracking-[-1.92px]"
                    variant="body23"
                  >
                    <span className="md:text-[40px] sm:text-[34px] text-black_900 text-[44px] font-inter">
                      Let’s find your (other){" "}
                    </span>
                    <span className="md:text-[40px] sm:text-[34px] text-black_900 text-[44px] font-inter font-medium">
                      perfect match
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col gap-[4px] items-start justify-start mt-[23px] sm:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start pr-[4px] py-[4px] w-[100%]">
                    <div className="bg-black_900 h-[8px] mb-[40px] sm:mt-[0] mt-[7px] rounded-[3px] w-[7px]"></div>
                    <Text
                      className="sm:flex-1 font-normal leading-[32.00px] not-italic text-gray_904 text-left sm:w-[100%] w-[95%]"
                      variant="body60"
                    >
                      Discover, inquire with, and book vendors who are right for
                      you
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-start pr-[2px] py-[2px] w-[100%]">
                    <div className="bg-black_900 h-[8px] sm:mt-[0] my-[8px] rounded-[50%] w-[8px]"></div>
                    <Text
                      className="font-normal sm:mt-[0] mt-[4px] not-italic text-gray_904 text-left w-[auto]"
                      variant="body64"
                    >
                      Transparent pricing and vendors for every budget
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-start pr-[2px] py-[2px] w-[100%]">
                    <div className="bg-black_900 h-[8px] sm:mt-[0] my-[8px] rounded-[50%] w-[8px]"></div>
                    <Text
                      className="font-normal sm:mt-[0] mt-[4px] not-italic text-gray_904 text-left w-[auto]"
                      variant="body64"
                    >
                      No ads, just pre-screened vendors you can trust
                    </Text>
                  </div>
                </div>
                <Button className="bg-black_900 cursor-pointer font-semibold min-w-[146px] mt-[32px] pb-[17.42px] pl-[28px] pr-[27.52px] pt-[15.58px] sm:px-[20px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                  Take our quiz
                </Button>
              </div>
            </div>
            <div className="border-b-[1px] border-black_900 border-solid flex items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex md:flex-col flex-row gap-[8px] items-center justify-center max-w-[1200px] mx-[auto] p-[24px] md:px-[20px] w-[100%]">
                <List
                  className="bg-gray_106 md:flex-1 sm:flex-col flex-row gap-[12.5px] grid md:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] md:ml-[0] ml-[32px] p-[7px] rounded-[28px] md:w-[100%] w-[85%]"
                  orientation="horizontal"
                >
                  <div className="flex sm:flex-col flex-row gap-[-2px] items-center justify-start pr-[2px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[6px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[81.98px] py-[8px] sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_location.svg"
                        className="h-[25px] w-[25px]"
                        alt="location"
                      />
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_800 text-left w-[auto]"
                          variant="body73"
                        >
                          New York, NY
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_close.svg"
                      className="h-[24px] w-[24px]"
                      alt="close"
                    />
                  </div>
                  <Line className="self-center h-[28px] bg-gray_401 w-[1px]" />
                  <div className="flex sm:flex-col flex-row gap-[-2px] items-center justify-start pr-[2px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[6px] items-center justify-start pr-[7px] py-[7px] sm:w-[100%] w-[96%]">
                      <Img
                        src="images/img_location_black_900.svg"
                        className="h-[25px] mb-[3px] w-[25px]"
                        alt="location One"
                      />
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_800 text-left w-[auto]"
                          variant="body78"
                        >
                          Venues
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_close.svg"
                      className="h-[24px] w-[24px]"
                      alt="close One"
                    />
                  </div>
                </List>
                <Button className="bg-black_900 cursor-pointer font-semibold min-w-[100px] mr-[32px] pb-[17.42px] pl-[25px] pr-[24.92px] pt-[15.58px] sm:px-[20px] rounded-[28px] text-[15px] text-center text-white_A700 w-[auto]">
                  Search
                </Button>
              </div>
            </div>
            <div className="border-b-[1px] border-black_900 border-solid flex items-center justify-start w-[100%]">
              <div className="md:h-[207px] h-[287px] p-[37px] md:px-[20px] relative w-[100%]">
                <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[95%]">
                  <div className="flex flex-col gap-[28px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_904 text-left w-[auto]"
                      variant="body40"
                    >
                      Explore wedding vendors by category
                    </Text>
                    <List
                      className="sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 grid-cols-10 md:grid-cols-5 justify-center w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-col gap-[12px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_901 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_arrowup_bluegray_802.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="arrowup"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_900 text-center w-[auto]"
                          variant="body82"
                        >
                          Venues
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_901 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_camera_bluegray_802.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="camera"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_900 text-center w-[auto]"
                          variant="body82"
                        >
                          Photographers
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_901 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_camera_bluegray_802_64x64.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="camera One"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_900 text-center w-[auto]"
                          variant="body82"
                        >
                          Videographers
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_901 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_user_bluegray_802.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="user"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_900 text-center w-[auto]"
                          variant="body82"
                        >
                          Florists
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_901 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_globe_bluegray_802.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="globe"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_900 text-center w-[auto]"
                          variant="body82"
                        >
                          Beauty
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_901 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_menu_bluegray_802_64x64.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="menu"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_900 text-center w-[auto]"
                          variant="body82"
                        >
                          Planners
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_901 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_music_bluegray_802.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="music"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_900 text-center w-[auto]"
                          variant="body82"
                        >
                          Bands and DJs
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_901 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_volume_bluegray_802_64x64.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="volume"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_900 text-center w-[auto]"
                          variant="body82"
                        >
                          Catering
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-center justify-start pb-[16px] px-[16px] w-[100%]">
                        <div className="bg-light_blue_901 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_weddingcakea9ac9b82svg.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="weddingcakea9ac9b82svg"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_900 text-center w-[auto]"
                          variant="body87"
                        >
                          Cakes and desserts
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_901 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_champagneglass.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="champagneglass"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_900 text-center w-[auto]"
                          variant="body87"
                        >
                          Bar and beverage
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="absolute border-b-[1px] border-gray_925 border-solid flex h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[26px] w-[49%]">
                  <div className="flex items-end justify-start sm:pl-[20px] pl-[216px] md:pl-[40px] w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start sm:pr-[20px] pr-[24px] py-[24px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-black font-inter text-left text-orange_51 uppercase w-[auto]"
                        variant="body32"
                      >
                        Første slipp til NATTEN!
                      </Text>
                      <Text
                        className="font-bold font-poppins mb-[38px] text-left text-orange_51 w-[auto]"
                        variant="body60"
                      >
                        11.23.2021
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-[1px] border-black_900 border-solid flex items-center justify-start mt-[16px] pb-[16px] px-[16px] w-[100%]">
              <div className="bg-light_blue_901 flex items-center justify-start max-w-[1888px] mx-[auto] p-[40px] md:px-[20px] rounded-[16px] w-[100%]">
                <div className="flex flex-col gap-[32px] items-center justify-start my-[16px] w-[100%]">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start pr-[2px] pt-[2px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body39"
                      >
                        Shuffle your way to your dream team
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[5px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body73"
                      >
                        Discover local vendors to bring your wedding to life.
                      </Text>
                      <a
                        className="font-semibold text-[15px] text-center text-white_A700 underline w-[auto]"
                        href="javascript:"
                      >
                        Already booked? Add them here
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start pr-[1194px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                      <div className="flex md:flex-1 flex-row items-start justify-evenly md:w-[100%] w-[35%]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Wedding in
                        </Text>
                        <div className="flex flex-row gap-[9.06px] items-start justify-start pt-[2px] w-[auto]">
                          <a
                            className="font-semibold text-[15px] text-center text-white_A700 underline w-[auto]"
                            href="javascript:"
                          >
                            New York, NY
                          </a>
                          <Img
                            src="images/img_edit.svg"
                            className="h-[16px] w-[16px]"
                            alt="edit"
                          />
                        </div>
                      </div>
                      <div className="flex items-start justify-start md:ml-[0] ml-[16px] pb-[0.84px] pr-[6.7px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body73"
                        >
                          | Starting price: $19,950
                        </Text>
                      </div>
                      <Button
                        className="bg-gray_51 border-[1px] border-light_blue_901 border-solid flex items-center justify-center md:ml-[0] ml-[16px] pl-[25px] pr-[28px] py-[19px] rounded-[28px] sm:ml-[0] sm:px-[20px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_call_light_blue_901.svg"
                            className="mr-[11px] text-center"
                            alt="call"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-center text-light_blue_901">
                          Shuffle vendors
                        </div>
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="md:gap-[20px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[17px] items-center justify-start py-[18px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_900 text-center w-[auto]"
                                variant="body87"
                              >
                                Venues
                              </Text>
                              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_103.svg"
                                  className="h-[286px] w-[428px]"
                                  alt="div Four"
                                />
                                <Text
                                  className="font-semibold text-black_900 text-center w-[auto]"
                                  variant="body73"
                                >
                                  Etcetera Etcetera
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_800.svg"
                                className="h-[47px] w-[428px]"
                                alt="div One"
                              />
                              <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-center w-[100%]">
                                <a
                                  className="font-semibold sm:ml-[0] ml-[172px] text-[14px] text-black_900 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold mr-[170px] sm:mt-[0] mt-[2px] text-black_900 text-center w-[auto]"
                                  variant="body98"
                                >
                                  Venues
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[15px] items-center justify-start py-[19px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_900 text-center w-[auto]"
                                variant="body82"
                              >
                                Photographers
                              </Text>
                              <div className="flex flex-col items-center justify-start sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_103.svg"
                                  className="h-[286px] w-[428px]"
                                  alt="div Five"
                                />
                                <div className="flex flex-col gap-[8px] items-center justify-start pl-[122.88px] pr-[123.13px] pt-[16px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-semibold text-black_900 text-center w-[auto]"
                                    variant="body73"
                                  >
                                    Photography By Verdi
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-center text-gray_600 w-[auto]"
                                    variant="body82"
                                  >
                                    Starting price $3,500
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_800.svg"
                                className="h-[47px] w-[428px]"
                                alt="div One One"
                              />
                              <div className="flex flex-row gap-[9.34px] items-center justify-start pl-[149.56px] pr-[147.09px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                <a
                                  className="font-semibold text-[14px] text-black_900 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold text-black_900 text-center w-[auto]"
                                  variant="body87"
                                >
                                  Photographers
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[15px] items-center justify-start py-[19px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_900 text-center w-[auto]"
                                variant="body82"
                              >
                                Videographers
                              </Text>
                              <div className="flex flex-col items-center justify-start sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_103_286x428.svg"
                                  className="h-[286px] w-[428px]"
                                  alt="div Six"
                                />
                                <div className="flex flex-col gap-[8px] items-center justify-start pl-[78.38px] pr-[78.63px] pt-[16px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-semibold text-black_900 text-center w-[auto]"
                                    variant="body73"
                                  >
                                    J&S Media Wedding Films & Photo
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-center text-gray_600 w-[auto]"
                                    variant="body82"
                                  >
                                    Starting price $4,500
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_800.svg"
                                className="h-[47px] w-[428px]"
                                alt="div One Two"
                              />
                              <div className="flex flex-row gap-[11.44px] items-center justify-start pl-[150.67px] pr-[151.89px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                <a
                                  className="font-semibold text-[14px] text-black_900 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold text-black_900 text-center w-[auto]"
                                  variant="body91"
                                >
                                  Videographers
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start py-[19px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_900 text-center w-[auto]"
                                variant="body87"
                              >
                                Catering
                              </Text>
                              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_103.svg"
                                  className="h-[286px] w-[428px]"
                                  alt="div Seven"
                                />
                                <Text
                                  className="font-semibold text-black_900 text-center w-[auto]"
                                  variant="body73"
                                >
                                  Pinch Food Design
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_800.svg"
                                className="h-[47px] w-[428px]"
                                alt="div One Three"
                              />
                              <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-center w-[100%]">
                                <a
                                  className="font-semibold sm:ml-[0] ml-[168px] text-[14px] text-black_900 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold mr-[169px] sm:mt-[0] mt-[3px] text-black_900 text-center w-[auto]"
                                  variant="body98"
                                >
                                  Catering
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[44px] items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start py-[18px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_900 text-center w-[auto]"
                                variant="body82"
                              >
                                Cakes and desserts
                              </Text>
                              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_103_286x428.svg"
                                  className="h-[286px] w-[428px]"
                                  alt="div Eight"
                                />
                                <Text
                                  className="font-semibold text-black_900 text-center w-[auto]"
                                  variant="body73"
                                >
                                  Conti&#39;s Pastry Shoppe
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_800.svg"
                                className="h-[47px] w-[428px]"
                                alt="div One Four"
                              />
                              <div className="flex flex-row gap-[11.55px] items-center justify-start pl-[136.42px] pr-[139.03px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                <a
                                  className="font-semibold text-[14px] text-black_900 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold text-black_900 text-center w-[auto]"
                                  variant="body91"
                                >
                                  Cakes and desserts
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[17px] items-center justify-start py-[18px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_900 text-center w-[auto]"
                                variant="body87"
                              >
                                Florists
                              </Text>
                              <div className="flex flex-col items-center justify-start sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_103.svg"
                                  className="h-[286px] w-[428px]"
                                  alt="div Nine"
                                />
                                <div className="flex flex-col gap-[8px] items-center justify-start pl-[18.61px] pr-[18.41px] pt-[16px] sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-semibold leading-[24.00px] md:max-w-[100%] max-w-[366px] text-black_900 text-center"
                                    variant="body69"
                                  >
                                    Enchanted Designs Long Island (Photo Booths
                                    and Flower Walls)
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-center text-gray_600 w-[auto]"
                                    variant="body87"
                                  >
                                    Starting price $350
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_800.svg"
                                className="h-[47px] w-[428px]"
                                alt="div One Five"
                              />
                              <div className="flex flex-row gap-[10.61px] items-center justify-start pl-[175.06px] pr-[174.33px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                <a
                                  className="font-semibold text-[14px] text-black_900 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold text-black_900 text-center w-[auto]"
                                  as="h2"
                                  variant="h2"
                                >
                                  Florists
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start py-[18px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_900 text-center w-[auto]"
                                variant="body82"
                              >
                                Bands and DJs
                              </Text>
                              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_103.svg"
                                  className="h-[286px] w-[428px]"
                                  alt="div Ten"
                                />
                                <Text
                                  className="font-semibold leading-[24.00px] md:max-w-[100%] max-w-[341px] text-black_900 text-center"
                                  variant="body69"
                                >
                                  VSmusic4u Professional Wedding Ceremony &
                                  Cocktail Musicians
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_800.svg"
                                className="h-[47px] w-[428px]"
                                alt="div One Six"
                              />
                              <div className="flex flex-row gap-[12.34px] items-center justify-start pl-[150.11px] pr-[151.55px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                <a
                                  className="font-semibold text-[14px] text-black_900 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold text-black_900 text-center w-[auto]"
                                  variant="body91"
                                >
                                  Bands and DJs
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[44px] items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start py-[19px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_900 text-center w-[auto]"
                                variant="body87"
                              >
                                Beauty
                              </Text>
                              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_gray_103.svg"
                                  className="h-[286px] w-[428px]"
                                  alt="div Eleven"
                                />
                                <Text
                                  className="font-semibold text-black_900 text-center w-[auto]"
                                  variant="body73"
                                >
                                  Alessarro Beauty
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_800.svg"
                                className="h-[47px] w-[428px]"
                                alt="div One Seven"
                              />
                              <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-center w-[100%]">
                                <a
                                  className="font-semibold sm:ml-[0] ml-[173px] text-[14px] text-black_900 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold mr-[172px] sm:mt-[0] mt-[3px] text-black_900 text-center w-[auto]"
                                  variant="body98"
                                >
                                  Beauty
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
              <div className="border-b-[1px] border-black_900 border-solid flex md:flex-1 items-center justify-start p-[12px] md:px-[20px] md:w-[100%] w-[67%]">
                <div className="bg-pink_700 h-[925px] rounded-[16px] w-[100%]"></div>
              </div>
              <div className="bg-white_A700 border-b-[1px] border-black_900 border-l-[1px] border-solid flex md:flex-1 flex-col gap-[163px] md:gap-[40px] items-center justify-end p-[40px] md:px-[20px] md:w-[100%] w-[34%]">
                <div className="flex items-start justify-start mt-[24px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal leading-[48.00px] md:max-w-[100%] max-w-[438px] not-italic text-black_900 text-left tracking-[-1.92px]"
                    variant="body19"
                  >
                    <span className="md:text-[44px] sm:text-[38px] text-black_900 text-[48px] font-inter">
                      The difference is in the{" "}
                    </span>
                    <span className="md:text-[44px] sm:text-[38px] text-black_900 text-[48px] font-inter font-medium">
                      details
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                  <div className="border-b-[1px] border-black_900 border-solid flex flex-col gap-[16px] items-start justify-start py-[34px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-start w-[100%]">
                      <Text
                        className="font-semibold text-black_900 text-left w-[auto]"
                        variant="body73"
                      >
                        The fun way to find your favorites
                      </Text>
                      <Img
                        src="images/img_arrowright_black_900_27x30.svg"
                        className="h-[22px] w-[auto]"
                        alt="arrowright"
                      />
                    </div>
                    <Text
                      className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[549px] not-italic text-black_900 text-left"
                      variant="body69"
                    >
                      Take our quiz to discover vendors that are a perfect fit.
                      Or use our smart filters to find exactly what you want.
                    </Text>
                    <Button className="bg-black_900 cursor-pointer font-semibold min-w-[130px] pb-[10.86px] pl-[20px] pr-[19.52px] pt-[10.14px] rounded-[22px] text-[14px] text-center text-white_A700 w-[auto]">
                      Take our quiz
                    </Button>
                  </div>
                  <div className="border-b-[1px] border-gray_401 border-solid flex items-start justify-start sm:pr-[20px] pr-[34px] py-[34px] w-[100%]">
                    <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[53%]">
                      <Text
                        className="font-normal not-italic text-gray_600 text-left w-[auto]"
                        variant="body78"
                      >
                        Only vendors who match our values
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_600.svg"
                        className="h-[22px] w-[auto]"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] border-gray_401 border-solid flex items-start justify-start sm:pr-[20px] pr-[34px] py-[34px] w-[100%]">
                    <div className="flex flex-row items-center justify-start md:w-[100%] w-[57%]">
                      <Text
                        className="font-normal not-italic text-gray_600 text-left w-[auto]"
                        variant="body73"
                      >
                        Curate and connect from one open tab
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_600.svg"
                        className="h-[22px] w-[auto]"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] border-gray_401 border-solid flex items-start justify-start sm:pr-[20px] pr-[34px] py-[34px] w-[100%]">
                    <div className="flex flex-row items-center justify-start md:w-[100%] w-[46%]">
                      <Text
                        className="font-normal not-italic text-gray_600 text-left w-[auto]"
                        variant="body73"
                      >
                        Get inspired by Real Weddings
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_600.svg"
                        className="h-[22px] w-[auto]"
                        alt="arrowright Three"
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-end sm:pr-[20px] pr-[34px] py-[34px] w-[100%]">
                    <div className="flex flex-row items-center justify-start mr-[auto] md:w-[100%] w-[26%]">
                      <Text
                        className="font-normal not-italic text-gray_600 text-left w-[auto]"
                        variant="body78"
                      >
                        Ask the experts
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_600.svg"
                        className="h-[22px] ml-[4px] w-[auto]"
                        alt="arrowright Four"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-[1px] border-black_900 border-solid flex flex-col items-start justify-start p-[64px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1792px] mx-[auto] pl-[2px] pt-[2px] w-[100%]">
                <Text
                  className="font-normal sm:ml-[0] ml-[14px] not-italic text-gray_904 text-left w-[auto]"
                  variant="body40"
                >
                  Popular locations
                </Text>
                <Button className="bg-black_900 cursor-pointer font-semibold min-w-[106px] pl-[17px] pr-[17.72px] py-[12px] rounded-[22px] text-[13px] text-center text-white_A700 w-[auto]">
                  Get started
                </Button>
              </div>
              <div className="gap-[40px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start pl-[16px] py-[40px] md:w-[100%] w-[auto]">
                <div className="flex items-center justify-end p-[30px] sm:px-[20px] w-[100%]">
                  <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[95px] mt-[212px] pl-[17px] pr-[18.34px] py-[9px] rounded-[19px] text-[13px] text-black_900 text-center w-[auto]">
                    New york
                  </Button>
                </div>
                <div className="flex items-center justify-end p-[30px] sm:px-[20px] w-[100%]">
                  <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[87px] mt-[212px] pl-[18px] pr-[16.84px] py-[9px] rounded-[19px] text-[13px] text-black_900 text-center w-[auto]">
                    Chicago
                  </Button>
                </div>
                <div className="flex items-center justify-end p-[30px] sm:px-[20px] w-[100%]">
                  <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[109px] mt-[212px] pl-[16px] pr-[17.28px] py-[9px] rounded-[19px] text-[13px] text-black_900 text-center w-[auto]">
                    Los angeles
                  </Button>
                </div>
                <div className="flex items-center justify-end p-[30px] sm:px-[20px] w-[100%]">
                  <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[112px] mt-[212px] pl-[18px] pr-[17.63px] py-[9px] rounded-[19px] text-[13px] text-black_900 text-center w-[auto]">
                    Philadelphia
                  </Button>
                </div>
                <div className="flex items-center justify-end p-[30px] sm:px-[20px] w-[100%]">
                  <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[72px] mt-[212px] pl-[17px] pr-[16.86px] py-[9px] rounded-[19px] text-[13px] text-black_900 text-center w-[auto]">
                    Dallas
                  </Button>
                </div>
                <div className="flex items-center justify-end p-[30px] sm:px-[20px] w-[100%]">
                  <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[74px] mt-[212px] pl-[18px] pr-[18.3px] py-[9px] rounded-[19px] text-[13px] text-black_900 text-center w-[auto]">
                    Miami
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-b-[1px] border-black_900 border-solid flex items-center justify-start w-[100%]">
              <List
                className="sm:flex-col flex-row gap-[16.5px] grid md:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] justify-center max-w-[1888px] mx-[auto] md:px-[20px] py-[16px] w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-evenly sm:ml-[0] w-[100%]">
                  <div className="bg-teal_300 h-[470px] w-[50%]"></div>
                  <div className="bg-light_blue_901 flex md:flex-1 flex-col items-start justify-center p-[48px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[50%]">
                    <Text
                      className="font-medium mt-[97px] text-cyan_A100 text-left tracking-[0.20px] w-[auto]"
                      variant="body25"
                    >
                      Get inspired
                    </Text>
                    <Text
                      className="font-normal leading-[22.86px] mt-[8px] not-italic text-cyan_A100 text-left sm:w-[100%] w-[94%]"
                      variant="body69"
                    >
                      Explore photos of real, recent weddings and find the
                      vendors behind your faves.
                    </Text>
                    <Button className="bg-cyan_A100 cursor-pointer font-semibold mb-[96px] min-w-[182px] mt-[32px] pb-[11.42px] pl-[18px] pr-[17.48px] pt-[9.58px] rounded-[22px] text-[15px] text-bluegray_908 text-center w-[auto]">
                      Scroll real weddings
                    </Button>
                  </div>
                </div>
                <Line className="self-center h-[502px] bg-black_900 w-[1px]" />
                <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-evenly sm:ml-[0] w-[100%]">
                  <div className="bg-cyan_900 h-[470px] w-[50%]"></div>
                  <div className="bg-cyan_900 flex md:flex-1 flex-col items-start justify-center p-[48px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[50%]">
                    <Text
                      className="font-medium leading-[44.00px] mt-[74px] text-left text-light_green_100 tracking-[0.20px] sm:w-[100%] w-[93%]"
                      variant="body25"
                    >
                      Premium quality, perfectly priced
                    </Text>
                    <Text
                      className="font-normal leading-[22.86px] mt-[15px] not-italic text-left text-light_green_100 sm:w-[100%] w-[91%]"
                      variant="body69"
                    >
                      Highly customizable designs for every wedding moment.
                    </Text>
                    <Button className="bg-light_green_100 cursor-pointer font-semibold mb-[74px] min-w-[187px] mt-[32px] pb-[11.42px] pl-[17px] pr-[17.69px] pt-[9.58px] rounded-[22px] text-[15px] text-center text-cyan_900 w-[auto]">
                      Choose free samples
                    </Button>
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-bluegray_908 flex items-center justify-start max-w-[1888px] mt-[16px] mx-[auto] p-[104px] md:px-[20px] rounded-[16px] w-[100%]">
              <div className="flex items-center justify-start md:w-[100%] w-[83%]">
                <div className="flex flex-col gap-[20px] items-center justify-start px-[165px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex items-start justify-start pl-[49.11px] pr-[48.92px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal leading-[48.00px] md:max-w-[100%] max-w-[532px] not-italic text-center text-white_A700 tracking-[-1.92px]"
                      variant="body19"
                    >
                      <span className="md:text-[44px] sm:text-[38px] text-white_A700 text-[48px] font-inter">
                        Our team is{" "}
                      </span>
                      <span className="md:text-[44px] sm:text-[38px] text-white_A700 text-[48px] font-inter font-medium">
                        always
                      </span>
                      <span className="md:text-[44px] sm:text-[38px] text-white_A700 text-[48px] font-inter">
                        {" "}
                        here to support you
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="border-b-[1px] border-solid border-white_A700 flex items-center justify-start w-[100%]">
                      <SelectBox
                        className="font-normal not-italic py-[34px] sm:text-[38px] md:text-[44px] text-[48px] text-left text-white_A700 sm:w-[100%] w-[97%]"
                        placeholderClassName="text-white_A700"
                        name="button"
                        placeholder="FAQ"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_white_a700_5x8.svg"
                            className="h-[16px] mr-[0] w-[16px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                    <SelectBox
                      className="font-normal not-italic py-[35px] sm:text-[36px] md:text-[42px] text-[46px] text-left text-white_A700 sm:w-[100%] w-[97%]"
                      placeholderClassName="text-white_A700"
                      name="button One"
                      placeholder="Advice"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_white_a700_5x8.svg"
                          className="h-[16px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_51 border-black_900 border-solid border-t-[1px] flex items-center justify-start w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="border-b-[1px] border-black_900 border-solid flex items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start sm:pr-[20px] pr-[311px] md:pr-[40px] w-[100%]">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 p-[40px] sm:px-[20px] md:w-[100%] w-[79%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[20px] items-start justify-start sm:ml-[0] sm:mt-[0] my-[20px] w-[100%]">
                      <Text
                        className="font-medium text-gray_904 text-left w-[auto]"
                        variant="body60"
                      >
                        Plan your wedding
                      </Text>
                      <div className="flex flex-col items-start justify-start mb-[56px] pr-[2px] py-[2px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_804 text-left w-[auto]"
                          variant="body78"
                        >
                          Venues and vendors
                        </Text>
                        <Text
                          className="font-normal mt-[12px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body73"
                        >
                          Guest list
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body73"
                        >
                          Wedding websites
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body78"
                        >
                          Registry
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body78"
                        >
                          Invites and paper
                        </Text>
                        <Text
                          className="font-normal mt-[12px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body73"
                        >
                          Boutique
                        </Text>
                        <Text
                          className="font-normal mt-[10px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body73"
                        >
                          Albums
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[22px] items-start justify-start mb-[21px] sm:ml-[0] sm:mt-[0] mt-[18px] pb-[85px] w-[100%]">
                      <Text
                        className="font-medium text-gray_904 text-left w-[auto]"
                        variant="body60"
                      >
                        About
                      </Text>
                      <div className="flex flex-col items-start justify-start pr-[2px] py-[2px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_804 text-left w-[auto]"
                          variant="body73"
                        >
                          Our story
                        </Text>
                        <Text
                          className="font-normal mt-[10px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body73"
                        >
                          Become a Zola vendor
                        </Text>
                        <Text
                          className="font-normal mt-[12px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body78"
                        >
                          Refer a friend
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body78"
                        >
                          Reviews
                        </Text>
                        <Text
                          className="font-normal mt-[12px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body73"
                        >
                          Careers
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body78"
                        >
                          Press
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[21px] items-start justify-start sm:ml-[0] sm:mt-[0] my-[19px] pb-[87px] w-[100%]">
                      <Text
                        className="font-medium text-gray_904 text-left w-[auto]"
                        variant="body60"
                      >
                        Advice and support
                      </Text>
                      <div className="flex flex-col items-start justify-end pr-[2px] py-[2px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_804 text-left w-[auto]"
                          variant="body78"
                        >
                          Expert advice
                        </Text>
                        <Text
                          className="font-normal mt-[10px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body69"
                        >
                          FAQs
                        </Text>
                        <Text
                          className="font-normal mt-[12px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body78"
                        >
                          Track order
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body78"
                        >
                          Start a return
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body73"
                        >
                          Return policy
                        </Text>
                        <Text
                          className="font-normal mt-[10px] not-italic text-gray_804 text-left w-[auto]"
                          variant="body73"
                        >
                          Contact us
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex md:flex-1 flex-col items-start justify-center p-[40px] sm:px-[20px] md:w-[100%] w-[22%]">
                    <Img
                      src="images/img_svg_black_900.svg"
                      className="h-[20px] mt-[20px] w-[auto]"
                      alt="svg One"
                    />
                    <Text
                      className="font-medium mt-[23px] text-gray_904 text-left w-[auto]"
                      variant="body64"
                    >
                      For all the days along the way
                    </Text>
                    <div className="flex flex-col gap-[8px] items-start justify-start mt-[37px] w-[auto]">
                      <div className="flex flex-row items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-black_900 text-left w-[auto]"
                          variant="body73"
                        >
                          Log in
                        </Text>
                        <Img
                          src="images/img_arrowright_black_900_27x30.svg"
                          className="h-[22px] w-[auto]"
                          alt="arrowright Five"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-black_900 text-left w-[auto]"
                          variant="body73"
                        >
                          Find a couple
                        </Text>
                        <Img
                          src="images/img_arrowright_black_900_27x30.svg"
                          className="h-[22px] w-[auto]"
                          alt="arrowright Six"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[4px] items-start justify-start mb-[82px] mt-[40px] pb-[6.84px] pr-[8.3px] w-[auto]">
                      <Button className="bg-black_900 cursor-pointer font-semibold min-w-[117px] pb-[11.45px] pl-[17px] pr-[17.11px] pt-[9.55px] rounded-[22px] text-[15px] text-center text-white_A700 w-[auto]">
                        Get started
                      </Button>
                      <Img
                        src="images/img_appstorebadgeb853888asvg.svg"
                        className="h-[44px] w-[131px]"
                        alt="appstorebadgeb853888asvg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between p-[34px] sm:px-[20px] w-[100%]">
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start pb-[5px] md:px-[20px] md:w-[100%] w-[34%]">
                  <Text
                    className="font-normal md:mt-[0] mt-[20px] not-italic text-black_900 text-left w-[auto]"
                    variant="body82"
                  >
                    Privacy
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[23px] md:mt-[0] mt-[19px] not-italic text-black_900 text-left w-[auto]"
                    variant="body87"
                  >
                    Terms
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[26px] md:mt-[0] mt-[20px] not-italic text-black_900 text-left w-[auto]"
                    variant="body82"
                  >
                    Do Not Sell / Share My Personal Information
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[30px] md:mt-[0] mt-[20px] not-italic text-black_900 text-left w-[auto]"
                    variant="body82"
                  >
                    Web accessibility
                  </Text>
                  <Img
                    src="images/img_trash_black_902.svg"
                    className="h-[50px] md:ml-[0] ml-[25px] w-[50px]"
                    alt="trash"
                  />
                </div>
                <div className="flex items-start justify-start md:px-[20px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body82"
                  >
                    © 2023 Zola, Inc. All rights reserved.
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

export default RawPage;
