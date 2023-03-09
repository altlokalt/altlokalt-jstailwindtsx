import React from "react";

import { Text, Button, Img, Line, List, SelectBox, Input } from "components";

const Dashboard1Page: React.FC = () => {
  function handleNavigate5() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate9() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-poppins gap-[55px] items-start justify-start mx-[auto] px-[10px] w-[100%]">
        <div className="flex h-[2115px] justify-end md:px-[20px] relative md:w-[100%] w-[77%]">
          <div className="flex h-[100%] items-center justify-start mb-[54px] ml-[auto] mr-[4px] mt-[auto] w-[80%]">
            <div className="flex flex-col gap-[44px] items-center justify-start w-[100%]">
              <div className="flex items-center justify-start md:w-[100%] w-[99%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[8px] items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-black_908 text-left w-[auto]"
                      variant="body39"
                    >
                      Dashboard
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_667 text-left w-[auto]"
                      variant="body64"
                    >
                      Welcome to Eclan Ads Campaign Dashboard
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[585px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal md:ml-[0] ml-[91px] not-italic text-black_902 text-right w-[auto]"
                      variant="body60"
                    >
                      09:62 AM
                    </Text>
                    <Text
                      className="font-normal mr-[10px] mt-[3px] not-italic text-gray_607 text-right w-[auto]"
                      variant="body78"
                    >
                      Monday, 3 Augusut 2020
                    </Text>
                  </div>
                  <Button className="border-[1px] border-bluegray_800_1e border-solid flex items-center justify-center md:ml-[0] ml-[48px] p-[14px] rounded-[12px] w-[5%]">
                    <Img
                      src="images/img_ticket_bluegray_834.svg"
                      className="h-[28px]"
                      alt="ticket"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[65%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 items-end justify-start rounded-[14px] shadow-bs124 md:w-[100%] w-[45%]">
                      <div className="flex flex-row gap-[46px] items-end justify-end mb-[35px] ml-[auto] mt-[38px] md:w-[100%] w-[92%]">
                        <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-bluegray_900_100 text-left w-[auto]"
                            variant="body64"
                          >
                            Total Campaign
                          </Text>
                          <Text
                            className="font-semibold text-bluegray_913 text-left w-[auto]"
                            variant="body30"
                          >
                            67,124
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[19px] items-start justify-start mb-[2px] mt-[8px] w-[42%]">
                          <Img
                            src="images/img_vector6_green_506.svg"
                            className="h-[38px] w-[auto]"
                            alt="VectorSix"
                          />
                          <Text
                            className="font-normal md:ml-[0] ml-[3px] not-italic text-green_506 text-left w-[auto]"
                            variant="body87"
                          >
                            +4% from last week
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 flex-row items-center justify-between p-[10px] rounded-[14px] shadow-bs124 md:w-[100%] w-[45%]">
                      <div className="flex items-center justify-start my-[26px] w-[auto]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900_100 text-left w-[auto]"
                            variant="body64"
                          >
                            Total Audience
                          </Text>
                          <div className="flex flex-row items-center justify-start w-[100%]">
                            <Text
                              className="font-semibold text-bluegray_913 text-left w-[auto]"
                              variant="body30"
                            >
                              412,531
                            </Text>
                            <Img
                              src="images/img_download_green_506.svg"
                              className="h-[9px] ml-[35px] w-[auto]"
                              alt="download"
                            />
                            <Text
                              className="font-semibold h-[21px] ml-[6px] text-green_506 text-left w-[auto]"
                              variant="body78"
                            >
                              5%
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_grid_gray_111.svg"
                        className="h-[82px] mr-[10px] w-[auto]"
                        alt="grid"
                      />
                    </div>
                  </div>
                  <div className="h-[164px] md:h-[203px] mt-[39px] relative md:w-[100%] w-[99%]">
                    <div className="absolute h-[164px] inset-y-[0] my-[auto] right-[0] md:w-[100%] w-[96%]">
                      <div className="absolute bg-bluegray_835 flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[37px] sm:px-[20px] rounded-[14px] w-[99%]">
                        <div className="flex flex-col gap-[8px] items-end justify-start mr-[78px] mt-[2px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-right text-white_A700_9e w-[auto]"
                            variant="body64"
                          >
                            Spends Yesterday
                          </Text>
                          <Text
                            className="font-semibold text-right text-white_A700 w-[auto]"
                            variant="body32"
                          >
                            $4,567
                          </Text>
                        </div>
                      </div>
                      <div className="absolute h-[76px] inset-y-[0] my-[auto] right-[0] w-[76px]">
                        <Img
                          src="images/img_file_white_a700_76x66.svg"
                          className="h-[76px] ml-[auto] my-[auto] rounded-[12px] w-[auto]"
                          alt="file"
                        />
                        <div className="absolute bg-bluegray_976 flex flex-col gap-[5px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[18px] rounded-[12px] w-[76px]">
                          <Img
                            src="images/img_mail_white_a700_9x18.svg"
                            className="h-[9px] mt-[3px] w-[auto]"
                            alt="mail"
                          />
                          <Text
                            className="font-semibold text-right text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            -2%
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-bluegray_532 flex flex-row gap-[30px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[30px] sm:px-[20px] rounded-bl-[14px] rounded-br-[0] rounded-tl-[14px] rounded-tr-[0] w-[47%]">
                      <div
                        className="bg-cover bg-no-repeat flex h-[76px] items-center justify-start rounded-[12px] w-[76px]"
                        style={{
                          backgroundImage:
                            "url('images/img_icon_white_a700.svg')",
                        }}
                      >
                        <div className="bg-bluegray_458 flex flex-col gap-[5px] h-[76px] items-center justify-end p-[18px] rounded-[12px] w-[76px]">
                          <Img
                            src="images/img_mail_white_a700_9x18.svg"
                            className="h-[9px] mt-[3px] w-[auto]"
                            alt="mail One"
                          />
                          <Text
                            className="font-semibold text-right text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            +5%
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start mb-[7px] mt-[10px] w-[auto]">
                        <Text
                          className="font-medium md:ml-[0] ml-[2px] text-left text-white_A700_9e w-[auto]"
                          variant="body64"
                        >
                          Spends Today
                        </Text>
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body32"
                        >
                          $5,245
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="sm:h-[400px] h-[552px] md:h-[591px] mt-[39px] relative md:w-[100%] w-[97%]">
                    <div className="absolute bg-white_A700 flex sm:flex-col flex-row sm:gap-[40px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[4px] rounded-[14px] shadow-bs124 w-[97%]">
                      <div className="flex flex-row items-center justify-between mb-[26px] sm:ml-[0] ml-[48px] sm:mt-[0] mt-[493px] sm:w-[100%] w-[35%]">
                        <div className="flex flex-row gap-[11px] items-center justify-start w-[27%]">
                          <div className="bg-green_506 h-[20px] rounded-[8px] w-[20px]"></div>
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Click
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[21px] items-center justify-start w-[54%]">
                          <div className="bg-yellow_910 h-[20px] rounded-[8px] w-[20px]"></div>
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Conversions
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between mb-[26px] sm:mt-[0] mt-[493px] sm:w-[100%] w-[19%]">
                        <Text
                          className="font-medium text-bluegray_800_d6 text-left w-[auto]"
                          variant="body69"
                        >
                          View Details
                        </Text>
                        <Img
                          src="images/img_play_gray_460.svg"
                          className="h-[12px] w-[auto]"
                          alt="play"
                        />
                      </div>
                    </div>
                    <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                      <div className="flex flex-col gap-[17px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row gap-[37px] items-start justify-between mr-[30px] md:w-[100%] w-[97%]">
                          <div className="flex flex-col items-start justify-start md:mt-[0] mt-[15px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                              variant="body78"
                            >
                              1,000k
                            </Text>
                            <Text
                              className="font-normal mt-[39px] not-italic text-black_900_7f text-left w-[auto]"
                              variant="body78"
                            >
                              800k
                            </Text>
                            <Text
                              className="font-normal mt-[39px] not-italic text-black_900_7f text-left w-[auto]"
                              variant="body78"
                            >
                              600k
                            </Text>
                            <Text
                              className="font-normal mt-[39px] not-italic text-black_900_7f text-left w-[auto]"
                              variant="body78"
                            >
                              400k
                            </Text>
                            <Text
                              className="font-normal mt-[40px] not-italic text-black_900_7f text-left w-[auto]"
                              variant="body78"
                            >
                              200k
                            </Text>
                          </div>
                          <div className="h-[323px] relative md:w-[100%] w-[90%]">
                            <div className="absolute h-[323px] inset-[0] justify-center m-[auto] w-[100%]">
                              <Img
                                src="images/img_lines.svg"
                                className="absolute bottom-[1%] h-[295px] left-[0] w-[auto]"
                                alt="lines"
                              />
                              <Img
                                src="images/img_conversionsgraph.svg"
                                className="absolute h-[323px] inset-y-[0] my-[auto] right-[0] w-[auto]"
                                alt="conversionsGraph"
                              />
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat flex h-[max-content] inset-y-[0] items-end justify-start my-[auto] pt-[2px] px-[2px] right-[0] w-[94%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group525.svg')",
                              }}
                            >
                              <div className="flex flex-col justify-start mr-[121px] md:w-[100%] w-[23%]">
                                <div className="h-[89px] relative w-[100%]">
                                  <Img
                                    src="images/img_tooltip.svg"
                                    className="absolute h-[89px] inset-y-[0] my-[auto] right-[0] w-[auto]"
                                    alt="Vector"
                                  />
                                  <Text
                                    className="absolute font-medium left-[0] text-black_902 text-left top-[20%] w-[auto]"
                                    variant="body69"
                                  >
                                    675,451
                                  </Text>
                                  <Text
                                    className="absolute bottom-[35%] font-light left-[0] text-gray_510 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    10 March 2020
                                  </Text>
                                </div>
                                <div className="bg-bluegray_835 h-[15px] md:ml-[0] ml-[13px] mr-[117px] outline outline-[3px] outline-white_A700 rounded-[7px] shadow-bs125 w-[15px]"></div>
                                <Line className="bg-deep_orange_51 h-[188px] md:ml-[0] ml-[20px] mr-[123px] mt-[22px] w-[2px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[91%]">
                          <Text
                            className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            01
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[27px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            02
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            03
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[46px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            04
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            05
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            06
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            07
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[46px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            08
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            09
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[26px] text-gray_1010 text-left w-[auto]"
                            variant="body78"
                          >
                            10
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[45px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            11
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[21px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            12
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[31px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            13
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            14
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[46px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            15
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            16
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-row sm:gap-[40px] inset-x-[0] items-end justify-between mx-[auto] top-[5%] w-[98%]">
                      <Text
                        className="font-medium mb-[4px] text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        Overview
                      </Text>
                      <div className="flex items-center justify-start mt-[6px] w-[auto]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <div className="flex flex-row items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_344 text-left w-[auto]"
                              variant="body78"
                            >
                              Monthly
                            </Text>
                            <Text
                              className="font-medium ml-[28px] text-bluegray_344 text-left w-[auto]"
                              variant="body78"
                            >
                              Weekly
                            </Text>
                            <Text
                              className="font-semibold ml-[49px] text-green_506 text-left w-[auto]"
                              variant="body78"
                            >
                              Daily
                            </Text>
                          </div>
                          <div className="bg-green_506 h-[4px] md:ml-[0] ml-[199px] mr-[14px] mt-[2px] rounded-[2px] w-[4%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[624px] md:h-[680px] mt-[56px] relative md:w-[100%] w-[96%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[7px] rounded-[14px] shadow-bs124 w-[98%]">
                      <div className="flex flex-col md:gap-[40px] gap-[66px] justify-start mb-[59px] mt-[139px] md:w-[100%] w-[89%]">
                        <Img
                          src="images/img_ringprogressbar.svg"
                          className="h-[268px] md:ml-[0] ml-[234px] w-[268px]"
                          alt="ringProgressbar"
                        />
                        <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[24%]">
                            <div className="flex flex-row gap-[22px] items-start justify-between w-[100%]">
                              <Button className="border-[1px] border-pink_500 border-solid flex h-[47px] items-center justify-center p-[14px] rounded-[12px] w-[47px]">
                                <Img
                                  src="images/img_instagram_pink_500.svg"
                                  className="h-[18px]"
                                  alt="instagram"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-black_900_8c text-left w-[auto]"
                                  variant="body69"
                                >
                                  Instagram
                                </Text>
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body32"
                                >
                                  73%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[26%]">
                            <div className="flex flex-row items-start justify-between w-[100%]">
                              <Button
                                className="common-pointer border-[1px] border-indigo_409 border-solid flex h-[47px] items-center justify-center p-[14px] rounded-[12px] w-[47px]"
                                onClick={handleNavigate9}
                              >
                                <Img
                                  src="images/img_facebook_indigo_409.svg"
                                  className=""
                                  alt="facebook"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-black_900_8c text-left w-[auto]"
                                  variant="body69"
                                >
                                  Facebook
                                </Text>
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body32"
                                >
                                  64%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[21%]">
                            <div className="flex flex-row gap-[22px] items-start justify-between w-[100%]">
                              <Button
                                className="common-pointer border-[1px] border-cyan_305 border-solid flex h-[47px] items-center justify-center p-[13px] rounded-[12px] w-[47px]"
                                onClick={handleNavigate5}
                              >
                                <Img
                                  src="images/img_twitter_cyan_305.svg"
                                  className=""
                                  alt="twitter"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-black_900_8c text-left w-[auto]"
                                  variant="body69"
                                >
                                  Twitter
                                </Text>
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body32"
                                >
                                  48%
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-row sm:gap-[40px] inset-x-[0] items-start justify-between mx-[auto] top-[5%] w-[100%]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        Goal Statistic
                      </Text>
                      <Img
                        src="images/img_overflowmenu_bluegray_913.svg"
                        className="h-[24px] mt-[3px] w-[24px]"
                        alt="overflowmenu"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start md:w-[100%] w-[29%]">
                  <div className="flex flex-col gap-[39px] items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-col items-start justify-start p-[10px] rounded-[14px] shadow-bs124 w-[100%]">
                      <div className="flex flex-row items-start justify-between mt-[19px] w-[100%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body60"
                        >
                          Social Network Stats
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_913.svg"
                          className="h-[24px] mt-[3px] w-[24px]"
                          alt="overflowmenu One"
                        />
                      </div>
                      <List
                        className="flex-col gap-[30px] grid mt-[40px] w-[95%]"
                        orientation="vertical"
                      >
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                            <Button className="bg-pink_501 flex h-[63px] items-center justify-center p-[19px] rounded-[12px] w-[63px]">
                              <Img
                                src="images/img_camera_white_a700_63x63.svg"
                                className="h-[24px]"
                                alt="camera"
                              />
                            </Button>
                            <div className="flex flex-col gap-[11px] justify-start w-[auto]">
                              <Text
                                className="font-medium text-black_902 text-left w-[auto]"
                                variant="body69"
                              >
                                Instagram
                              </Text>
                              <div className="h-[10px] md:ml-[0] ml-[20px] overflow-hidden relative rotate-[-90deg] w-[92%]">
                                <div className="w-full h-full absolute bg-indigo_62 rounded-[5px]"></div>
                                <div
                                  className="h-full absolute bg-pink_500  rounded-[5px]"
                                  style={{ width: "57%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                            <Button className="bg-indigo_409 flex h-[63px] items-center justify-center p-[19px] rounded-[12px] w-[63px]">
                              <Img
                                src="images/img_facebook_white_a700_63x63.svg"
                                className=""
                                alt="facebook Two"
                              />
                            </Button>
                            <div className="flex flex-col gap-[13px] items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-black_902 text-left w-[auto]"
                                variant="body69"
                              >
                                Facebook
                              </Text>
                              <Img
                                src="images/img_bars_indigo_62.svg"
                                className="h-[10px] w-[auto]"
                                alt="bars One"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                            <Button className="bg-cyan_305 flex h-[63px] items-center justify-center p-[19px] rounded-[12px] w-[63px]">
                              <Img
                                src="images/img_twitter_white_a700_63x63.svg"
                                className=""
                                alt="twitter Two"
                              />
                            </Button>
                            <div className="flex flex-col gap-[14px] justify-start w-[auto]">
                              <Text
                                className="font-medium text-black_902 text-left w-[auto]"
                                variant="body69"
                              >
                                Twitter
                              </Text>
                              <div className="h-[10px] md:ml-[0] ml-[20px] overflow-hidden relative rotate-[-90deg] w-[92%]">
                                <div className="w-full h-full absolute bg-indigo_62 rounded-[5px]"></div>
                                <div
                                  className="h-full absolute bg-cyan_305  rounded-[5px]"
                                  style={{ width: "85%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-row gap-[14px] items-center justify-center mb-[9px] md:ml-[0] ml-[114px] mt-[41px] md:w-[100%] w-[34%]">
                        <Text
                          className="font-medium text-bluegray_800_49 text-left w-[auto]"
                          variant="body69"
                        >
                          Show more
                        </Text>
                        <Img
                          src="images/img_vector_gray_461.svg"
                          className="h-[6px] w-[auto]"
                          alt="Vector One"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-start justify-end p-[10px] rounded-[14px] shadow-bs124 w-[100%]">
                      <div className="flex flex-row items-start justify-between mt-[22px] w-[100%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body60"
                        >
                          Ads Engagement
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_913.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu Two"
                        />
                      </div>
                      <Img
                        src="images/img_bars_gray_202.svg"
                        className="h-[155px] md:ml-[0] ml-[11px] mt-[37px] w-[auto]"
                        alt="bars Three"
                      />
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[3px] mt-[21px] md:w-[100%] w-[96%]">
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          Sun
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          Mon
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          Tue
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          Wed
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          Thu
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          Fri
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          Sat
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mb-[10px] md:ml-[0] ml-[14px] mr-[auto] mt-[45px] md:w-[100%] w-[87%]">
                        <div className="flex items-center justify-start w-[25%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[11px] items-center justify-start md:w-[100%] w-[90%]">
                              <div className="bg-pink_500 h-[20px] rounded-[8px] w-[20px]"></div>
                              <Text
                                className="font-medium text-black_902 text-left w-[auto]"
                                variant="body69"
                              >
                                45%
                              </Text>
                            </div>
                            <Text
                              className="font-normal not-italic text-black_900_49 text-left w-[auto]"
                              variant="body78"
                            >
                              Instagram
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center justify-start ml-[51px] w-[27%]">
                          <div className="flex flex-col gap-[6px] items-end justify-start w-[100%]">
                            <div className="flex flex-row gap-[21px] items-center justify-between mr-[5px] md:w-[100%] w-[94%]">
                              <div className="bg-indigo_409 h-[20px] rounded-[8px] w-[20px]"></div>
                              <Text
                                className="font-medium text-black_902 text-left w-[auto]"
                                variant="body69"
                              >
                                52%
                              </Text>
                            </div>
                            <Text
                              className="font-normal not-italic text-black_900_49 text-left w-[auto]"
                              variant="body78"
                            >
                              Facebook
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center justify-start ml-[41px] w-[19%]">
                          <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[11px] items-center justify-between w-[100%]">
                              <div className="bg-cyan_305 h-[20px] rounded-[8px] w-[20px]"></div>
                              <Text
                                className="font-medium text-black_902 text-left w-[auto]"
                                variant="body69"
                              >
                                3%
                              </Text>
                            </div>
                            <Text
                              className="font-normal not-italic text-black_900_49 text-left w-[auto]"
                              variant="body78"
                            >
                              Twitter
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col gap-[37px] items-center justify-end pt-[32px] rounded-[14px] shadow-bs124 w-[100%]">
                    <div className="flex flex-row items-start justify-between md:w-[100%] w-[95%]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        Summary Goal
                      </Text>
                      <Img
                        src="images/img_overflowmenu_bluegray_913.svg"
                        className="h-[24px] w-[24px]"
                        alt="overflowmenu Three"
                      />
                    </div>
                    <div className="md:h-[162px] h-[739px] relative w-[100%]">
                      <List
                        className="absolute flex-col gap-[40px] grid left-[3%] top-[0] w-[90%]"
                        orientation="vertical"
                      >
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex flex-col gap-[19px] items-center justify-start w-[100%]">
                            <div className="flex flex-col gap-[20px] justify-start w-[100%]">
                              <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] w-[48%]">
                                <Button className="bg-pink_500_26 flex h-[47px] items-center justify-center p-[14px] rounded-[12px] w-[47px]">
                                  <Img
                                    src="images/img_instagram_pink_500.svg"
                                    className="h-[18px]"
                                    alt="instagram Four"
                                  />
                                </Button>
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Instagram
                                </Text>
                              </div>
                              <Line className="bg-gray_300 h-[1px] md:ml-[0] ml-[22px] w-[94%]" />
                            </div>
                            <div className="flex flex-col items-center justify-start w-[100%]">
                              <div className="flex flex-row items-start justify-between w-[100%]">
                                <Text
                                  className="font-medium text-black_900_b2 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Ad Campaign
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_b2 text-right w-[auto]"
                                  variant="body78"
                                >
                                  <span className="text-black_900_b2 text-[14px] font-poppins">
                                    6,788/
                                  </span>
                                  <span className="text-black_900_b2 text-[14px] font-poppins font-medium">
                                    8,000
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-between mt-[6px] w-[100%]">
                                <Text
                                  className="font-medium text-black_900_b2 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Comments
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_b2 text-right w-[auto]"
                                  variant="body78"
                                >
                                  <span className="text-black_900_b2 text-[14px] font-poppins">
                                    452/
                                  </span>
                                  <span className="text-black_900_b2 text-[14px] font-poppins font-medium">
                                    800
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-between mt-[7px] w-[100%]">
                                <Text
                                  className="font-medium text-black_900_b2 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Likes
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_b2 text-right w-[auto]"
                                  variant="body78"
                                >
                                  <span className="text-black_900_b2 text-[14px] font-poppins">
                                    8,325/
                                  </span>
                                  <span className="text-black_900_b2 text-[14px] font-poppins font-medium">
                                    10,000
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-between mt-[7px] w-[100%]">
                                <Text
                                  className="font-medium text-black_900_b2 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Bookmarked
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_b2 text-right w-[auto]"
                                  variant="body78"
                                >
                                  <span className="text-black_900_b2 text-[14px] font-poppins">
                                    5,622/5
                                  </span>
                                  <span className="text-black_900_b2 text-[14px] font-poppins font-medium">
                                    ,000
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[195px] relative w-[100%]">
                          <Line className="bg-gray_300 h-[1px] ml-[auto] mt-[67px] w-[94%]" />
                          <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                            <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] w-[46%]">
                                <Button className="bg-indigo_400_26 flex h-[47px] items-center justify-center p-[14px] rounded-[12px] w-[47px]">
                                  <Img
                                    src="images/img_facebook_indigo_409.svg"
                                    className=""
                                    alt="facebook Four"
                                  />
                                </Button>
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Facebook
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[100%]">
                                <div className="flex flex-row items-start justify-between w-[100%]">
                                  <Text
                                    className="font-medium text-black_900_b2 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Ad Campaign
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-black_900_b2 text-right w-[auto]"
                                    variant="body78"
                                  >
                                    <span className="text-black_900_b2 text-[14px] font-poppins">
                                      6,788/
                                    </span>
                                    <span className="text-black_900_b2 text-[14px] font-poppins font-medium">
                                      8,000
                                    </span>
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between mt-[6px] w-[100%]">
                                  <Text
                                    className="font-medium text-black_900_b2 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Comments
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-black_900_b2 text-right w-[auto]"
                                    variant="body78"
                                  >
                                    <span className="text-black_900_b2 text-[14px] font-poppins">
                                      452/
                                    </span>
                                    <span className="text-black_900_b2 text-[14px] font-poppins font-medium">
                                      800
                                    </span>
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between mt-[7px] w-[100%]">
                                  <Text
                                    className="font-medium text-black_900_b2 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Likes
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-black_900_b2 text-right w-[auto]"
                                    variant="body78"
                                  >
                                    <span className="text-black_900_b2 text-[14px] font-poppins">
                                      8,325/
                                    </span>
                                    <span className="text-black_900_b2 text-[14px] font-poppins font-medium">
                                      10,000
                                    </span>
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between mt-[7px] w-[100%]">
                                  <Text
                                    className="font-medium text-black_900_b2 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Shares
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-black_900_b2 text-right w-[auto]"
                                    variant="body78"
                                  >
                                    <span className="text-black_900_b2 text-[14px] font-poppins">
                                      5,622/5
                                    </span>
                                    <span className="text-black_900_b2 text-[14px] font-poppins font-medium">
                                      ,000
                                    </span>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[196px] relative w-[100%]">
                          <Line className="bg-gray_300 h-[1px] ml-[auto] mt-[68px] w-[94%]" />
                          <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                            <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] w-[39%]">
                                <Button className="bg-cyan_300_26 flex h-[47px] items-center justify-center p-[13px] rounded-[12px] w-[47px]">
                                  <Img
                                    src="images/img_twitter_cyan_305.svg"
                                    className=""
                                    alt="twitter Four"
                                  />
                                </Button>
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Twitter
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[100%]">
                                <div className="flex flex-row items-start justify-between w-[100%]">
                                  <Text
                                    className="font-medium text-black_900_b2 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Ad Campaign
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-black_900_b2 text-right w-[auto]"
                                    variant="body78"
                                  >
                                    <span className="text-black_900_b2 text-[14px] font-poppins">
                                      6,788/
                                    </span>
                                    <span className="text-black_900_b2 text-[14px] font-poppins font-medium">
                                      8,000
                                    </span>
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between mt-[6px] w-[100%]">
                                  <Text
                                    className="font-medium text-black_900_b2 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Comments
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-black_900_b2 text-right w-[auto]"
                                    variant="body78"
                                  >
                                    <span className="text-black_900_b2 text-[14px] font-poppins">
                                      452/
                                    </span>
                                    <span className="text-black_900_b2 text-[14px] font-poppins font-medium">
                                      800
                                    </span>
                                  </Text>
                                </div>
                                <div className="flex flex-row items-start justify-between w-[100%]">
                                  <Text
                                    className="font-medium mt-[8px] text-black_900_b2 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Likes
                                  </Text>
                                  <Text
                                    className="font-normal mb-[8px] not-italic text-black_900_b2 text-right w-[auto]"
                                    variant="body78"
                                  >
                                    <span className="text-black_900_b2 text-[14px] font-poppins">
                                      8,325/
                                    </span>
                                    <span className="text-black_900_b2 text-[14px] font-poppins font-medium">
                                      10,000
                                    </span>
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between mt-[8px] w-[100%]">
                                  <Text
                                    className="font-medium text-black_900_b2 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Shares
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-black_900_b2 text-right w-[auto]"
                                    variant="body78"
                                  >
                                    <span className="text-black_900_b2 text-[14px] font-poppins">
                                      5,622/5
                                    </span>
                                    <span className="text-black_900_b2 text-[14px] font-poppins font-medium">
                                      ,000
                                    </span>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="absolute bg-gradient67  bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] p-[23px] sm:px-[20px] rounded-[14px] w-[100%]">
                        <div className="flex items-center justify-start mt-[92px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-medium text-green_506 text-right w-[auto]"
                            variant="body69"
                          >
                            See More Reviews
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[2115px] inset-[0] justify-center m-[auto] w-[100%]">
            <div className="absolute flex right-[0] top-[0] md:w-[100%] w-[96%]">
              <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-end m-[auto] p-[31px] sm:px-[20px] w-[98%]">
                <div className="h-[56px] relative md:w-[100%] w-[36%]">
                  <div className="absolute border-[1px] border-gray_338 border-solid flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[15px] rounded-[12px] w-[auto]">
                    <Text
                      className="font-normal md:ml-[0] ml-[50px] not-italic text-gray_511 text-left w-[auto]"
                      variant="body69"
                    >
                      Search here
                    </Text>
                  </div>
                  <Img
                    src="images/img_search_bluegray_835.svg"
                    className="absolute h-[24px] inset-y-[0] left-[0] my-[auto] w-[23px]"
                    alt="search"
                  />
                </div>
                <List
                  className="sm:flex-col flex-row gap-[35px] grid grid-cols-3 mb-[2px] md:ml-[0] ml-[136px] md:w-[100%] w-[16%]"
                  orientation="horizontal"
                >
                  <div className="h-[56px] relative w-[100%]">
                    <Button className="absolute bg-white_A700 flex h-[56px] inset-[0] items-center justify-center m-[auto] p-[14px] rounded-[12px] w-[56px]">
                      <Img
                        src="images/img_notification_gray_1015.svg"
                        className="h-[28px]"
                        alt="notification"
                      />
                    </Button>
                    <div className="absolute h-[21px] right-[0] top-[4%] w-[51%]">
                      <div className="absolute bg-green_506 h-[21px] inset-[0] justify-center m-[auto] outline outline-[3px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                      <Text
                        className="absolute font-semibold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                        variant="body78"
                      >
                        12
                      </Text>
                    </div>
                  </div>
                  <div className="h-[56px] relative w-[100%]">
                    <Button className="absolute bg-white_A700 flex h-[56px] inset-[0] items-center justify-center m-[auto] p-[14px] rounded-[12px] w-[56px]">
                      <Img
                        src="images/img_file_gray_1016.svg"
                        className="h-[28px]"
                        alt="file One"
                      />
                    </Button>
                    <div className="absolute h-[21px] right-[0] top-[4%] w-[51%]">
                      <div className="absolute bg-green_506 h-[21px] inset-[0] justify-center m-[auto] outline outline-[3px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                      <Text
                        className="absolute font-semibold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                        variant="body78"
                      >
                        4
                      </Text>
                    </div>
                  </div>
                  <div className="h-[56px] relative w-[100%]">
                    <Button className="absolute bg-white_A700 flex h-[56px] inset-[0] items-center justify-center m-[auto] p-[14px] rounded-[12px] w-[56px]">
                      <Img
                        src="images/img_television_gray_1017.svg"
                        className="h-[28px]"
                        alt="television"
                      />
                    </Button>
                    <div className="absolute h-[21px] right-[0] top-[4%] w-[51%]">
                      <div className="absolute bg-green_506 h-[21px] inset-[0] justify-center m-[auto] outline outline-[3px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                      <Text
                        className="absolute font-semibold h-[100%] inset-y-[0] my-[auto] right-[17%] text-center text-white_A700 w-[auto]"
                        variant="body78"
                      >
                        76
                      </Text>
                    </div>
                  </div>
                </List>
                <Button className="bg-green_506 cursor-pointer font-semibold leading-[normal] min-w-[214px] md:ml-[0] ml-[59px] mr-[62px] py-[16px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                  + New Campaign
                </Button>
              </div>
              <SelectBox
                className="border-[1px] border-gray_130 border-solid font-semibold leading-[normal] ml-[-44px] my-[auto] pl-[6px] py-[14px] rounded-[12px] text-[18px] text-bluegray_913 text-left sm:w-[100%] w-[6%] z-[1]"
                placeholderClassName="text-bluegray_913"
                name="language"
                placeholder="EN"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_bluegray_455.svg"
                    className="h-[24px] mr-[7px] w-[24px] right-[0] ml-[undefinedpx] z-[1]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
            </div>
            <div className="absolute flex flex-row gap-[11px] h-[100%] inset-y-[0] items-start justify-between left-[0] my-[auto] w-[17%]">
              <div className="bg-white_A700 flex flex-col items-center justify-start pb-[1122px] w-[90%]">
                <div className="bg-white_A700 flex items-center justify-end p-[8px] w-[100%]">
                  <div className="flex flex-col items-center justify-start mt-[23px] md:w-[100%] w-[40%]">
                    <Img
                      src="images/img_trash_green_506.svg"
                      className="h-[32px] w-[auto]"
                      alt="trash"
                    />
                    <Text
                      className="font-bold text-gray_1018 text-left w-[auto]"
                      variant="body35"
                    >
                      Eclan
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_menus_green_506.svg"
                  className="h-[597px] mt-[45px] w-[auto]"
                  alt="menus"
                />
                <div className="flex flex-col items-start justify-start mt-[143px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_565 text-left w-[auto]"
                    variant="body78"
                  >
                    Eclan Dashboard
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_565 text-left w-[auto]"
                    variant="body78"
                  >
                    ©All Rights Reserved
                  </Text>
                  <Text
                    className="font-normal mt-[22px] not-italic text-gray_565 text-left w-[auto]"
                    variant="body78"
                  >
                    by Peterdraw
                  </Text>
                </div>
              </div>
              <div className="h-[1769px] relative w-[6%]">
                <Img
                  src="images/img_arrowleft_green_506.svg"
                  className="absolute h-[16px] inset-x-[0] mx-[auto] top-[12%] w-[16px]"
                  alt="arrowleft"
                />
                <Line className="absolute bg-bluegray_121 h-[1769px] inset-y-[0] my-[auto] right-[44%] w-[1px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-center md:px-[20px] md:w-[100%] w-[21%]">
          <Line className="bg-bluegray_121 h-[1769px] sm:h-[1px] mb-[507px] sm:w-[100%] w-[1px]" />
          <div className="bg-white_A700 flex flex-col items-center justify-start pb-[1325px] sm:w-[100%] w-[96%]">
            <div className="flex flex-col relative w-[100%]">
              <div className="bg-white_A700 flex items-end justify-start mx-[auto] p-[30px] sm:px-[20px] w-[100%]">
                <div className="flex flex-row items-start justify-between ml-[auto] my-[16px] md:w-[100%] w-[95%]">
                  <Text
                    className="font-semibold text-bluegray_913 text-left w-[auto]"
                    variant="body64"
                  >
                    Profile
                  </Text>
                  <Img
                    src="images/img_close_red_513_24x24.svg"
                    className="h-[24px] mt-[2px] w-[24px]"
                    alt="close"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[31px] items-center justify-start mt-[-7px] mx-[auto] w-[76%] z-[1]">
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[65%]">
                  <Img
                    src="images/img_profilepicture.svg"
                    className="h-[179px] w-[auto]"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-semibold md:ml-[0] ml-[3px] mt-[17px] text-bluegray_913 text-right w-[auto]"
                    variant="body56"
                  >
                    Samuel Anderson
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[73px] mt-[6px] not-italic text-bluegray_900_100 text-right w-[auto]"
                    variant="body64"
                  >
                    Admin
                  </Text>
                </div>
                <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <Input
                      className="font-medium leading-[normal] p-[0] text-[14px] placeholder:text-bluegray_835 text-bluegray_835 text-left w-[100%]"
                      wrapClassName="bg-bluegray_800_14 flex pl-[27px] pr-[35px] py-[18px] rounded-[12px] sm:px-[20px] w-[100%]"
                      name="ig"
                      placeholder="/samuelanderson.404"
                      prefix={
                        <Img
                          src="images/img_camera_bluegray_835.svg"
                          className="mr-[23px] my-[auto]"
                          alt="camera"
                        />
                      }
                    ></Input>
                    <Input
                      className="font-medium leading-[normal] p-[0] text-[14px] placeholder:text-bluegray_835 text-bluegray_835 text-left w-[100%]"
                      wrapClassName="bg-bluegray_800_14 flex pl-[33px] pr-[35px] py-[18px] rounded-[12px] sm:px-[20px] w-[100%]"
                      name="fb"
                      placeholder="/samuel.404nderson"
                      prefix={
                        <Img
                          src="images/img_facebook_bluegray_835.svg"
                          className="mr-[28px] my-[auto]"
                          alt="facebook"
                        />
                      }
                    ></Input>
                    <Input
                      className="font-medium leading-[normal] p-[0] text-[14px] placeholder:text-bluegray_835 text-bluegray_835 text-left w-[100%]"
                      wrapClassName="bg-bluegray_800_14 flex pl-[27px] pr-[35px] py-[18px] rounded-[12px] sm:px-[20px] w-[100%]"
                      name="tw"
                      placeholder="/talksamuel.404"
                      prefix={
                        <Img
                          src="images/img_twitter_bluegray_835.svg"
                          className="mr-[23px] my-[auto]"
                          alt="twitter"
                        />
                      }
                    ></Input>
                  </div>
                  <Button className="border-[2px] border-gray_342 border-solid cursor-pointer font-semibold leading-[normal] min-w-[315px] py-[22px] rounded-[14px] text-[18px] text-bluegray_835 text-center w-[auto]">
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
            <Line className="bg-gray_200 h-[1px] mt-[54px] w-[76%]" />
            <div className="bg-deep_orange_A202 flex items-center justify-start mt-[53px] rounded-[12px] md:w-[100%] w-[76%]">
              <div
                className="bg-cover bg-no-repeat flex h-[133px] items-end justify-start p-[10px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group1332.svg')" }}
              >
                <div className="flex flex-row gap-[56px] items-center justify-end ml-[auto] my-[29px] md:w-[100%] w-[94%]">
                  <Text
                    className="font-semibold text-left text-white_A700 sm:w-[100%] w-[60%]"
                    variant="body64"
                  >
                    Ad Campaign Tutorials Video
                  </Text>
                  <Button className="bg-white_A700_42 flex h-[54px] items-center justify-center p-[15px] rounded-[50%] w-[54px]">
                    <Img
                      src="images/img_contrast_white_a700_54x54.svg"
                      className=""
                      alt="contrast"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard1Page;
