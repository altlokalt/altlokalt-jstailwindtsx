import React from "react";

import { Text, Button, Img, Line, List, Input } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CloseSVG } from "../../assets/images";

const AnalyticsPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-center justify-end mx-[auto] w-[100%]">
        <div className="bg-gray_57 md:h-[2317px] h-[2437px] md:px-[20px] relative w-[100%]">
          <div className="flex h-[100%] items-center justify-start ml-[auto] mr-[50px] my-[auto] w-[83%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[17%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-black_908 text-left w-[auto]"
                        variant="body39"
                      >
                        Analytics
                      </Text>
                      <div className="flex flex-row gap-[18px] items-start justify-start mt-[3px] w-[100%]">
                        <Text
                          className="font-semibold text-green_506 text-left w-[auto]"
                          variant="body64"
                        >
                          Analytics /
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_667 text-left w-[auto]"
                          variant="body64"
                        >
                          Summary View
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-end justify-start md:ml-[0] ml-[1056px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_902 text-right w-[auto]"
                      variant="body60"
                    >
                      09:62 AM
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-gray_607 text-right w-[auto]"
                      variant="body78"
                    >
                      Monday, 3 Augusut 2020
                    </Text>
                  </div>
                  <Button className="border-[1px] border-bluegray_800_1e border-solid flex items-center justify-center md:ml-[0] ml-[38px] p-[14px] rounded-[12px] w-[4%]">
                    <Img
                      src="images/img_ticket_bluegray_834.svg"
                      className="h-[28px]"
                      alt="ticket"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between mt-[45px] w-[100%]">
                <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[29px] sm:px-[20px] rounded-[14px] shadow-bs124 md:w-[100%] w-[49%]">
                  <div className="flex flex-col gap-[41px] items-center justify-start mb-[8px] w-[100%]">
                    <div className="flex flex-col gap-[19px] items-center justify-start w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                        <Text
                          className="font-medium mb-[2px] text-black_902 text-left w-[auto]"
                          variant="body60"
                        >
                          Click Summary
                        </Text>
                        <div className="flex items-center justify-start mt-[3px] w-[auto]">
                          <div className="flex flex-col justify-start w-[100%]">
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-medium text-bluegray_344 text-left w-[auto]"
                                variant="body78"
                              >
                                Monthly
                              </Text>
                              <Text
                                className="font-medium text-bluegray_344 text-left w-[auto]"
                                variant="body78"
                              >
                                Weekly
                              </Text>
                              <Text
                                className="font-semibold text-green_506 text-left w-[auto]"
                                variant="body78"
                              >
                                Daily
                              </Text>
                            </div>
                            <div className="bg-green_506 h-[4px] md:ml-[0] ml-[179px] mr-[14px] mt-[2px] rounded-[2px] w-[4%]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-black_902 text-left w-[auto]"
                          variant="body32"
                        >
                          867,123k
                        </Text>
                        <Img
                          src="images/img_download_green_506.svg"
                          className="h-[13px] sm:ml-[0] ml-[19px] w-[auto]"
                          alt="download"
                        />
                        <Text
                          className="font-semibold sm:ml-[0] ml-[17px] text-green_506 text-right w-[auto]"
                          variant="body78"
                        >
                          <span className="text-green_506 text-[14px] font-poppins">
                            +9%{" "}
                          </span>
                          <span className="text-green_506 text-[14px] font-poppins font-normal not-italic">
                            from last month
                          </span>
                        </Text>
                        <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-semibold leading-[normal] mb-[6px] min-w-[184px] sm:ml-[0] ml-[162px] py-[16px] rounded-[22px] text-[16px] text-center text-green_506 w-[auto]">
                          Download CSV
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                      <div className="md:h-[295px] h-[308px] relative w-[100%]">
                        <div className="absolute md:h-[295px] h-[304px] inset-y-[0] left-[0] my-[auto] md:w-[100%] w-[96%]">
                          <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-[auto]">
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
                          <Img
                            src="images/img_lines.svg"
                            className="absolute h-[295px] inset-[0] justify-center m-[auto] w-[auto]"
                            alt="lines"
                          />
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[233px] items-start justify-end pt-[23px] sm:px-[20px] px-[23px] right-[0] w-[92%]"
                          style={{
                            backgroundImage: "url('images/img_group525.svg')",
                          }}
                        >
                          <div className="md:h-[188px] h-[210px] md:ml-[0] ml-[113px] relative w-[24%]">
                            <div className="absolute bottom-[0] h-[188px] left-[19%] w-[11%]">
                              <Line className="absolute bg-deep_orange_51 h-[188px] inset-y-[0] my-[auto] right-[33%] w-[2px]" />
                              <div className="absolute bg-bluegray_835 h-[15px] inset-x-[0] mx-[auto] outline outline-[3px] outline-white_A700 rounded-[7px] shadow-bs125 top-[33%] w-[15px]"></div>
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat flex h-[89px] inset-x-[0] items-start justify-start mx-[auto] p-[14px] top-[0] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_tooltip.svg')",
                              }}
                            >
                              <div className="flex flex-col items-start justify-start mb-[17px] mt-[4px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  675,451
                                </Text>
                                <Text
                                  className="font-light text-gray_510 text-left w-[auto]"
                                  variant="body87"
                                >
                                  5 March 2020
                                </Text>
                              </div>
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
                          className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          04
                        </Text>
                        <Text
                          className="font-semibold md:ml-[0] ml-[26px] text-gray_1010 text-left w-[auto]"
                          variant="body78"
                        >
                          05
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[25px] not-italic text-black_900_7f text-left w-[auto]"
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
                          className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
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
                          className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          10
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          11
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          12
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
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
                          className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
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
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col gap-[35px] items-center justify-start mb-[31px] pt-[28px] rounded-[14px] shadow-bs124 md:w-[100%] w-[49%]">
                  <div className="flex flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[93%]">
                    <Text
                      className="font-medium text-black_902 text-left w-[auto]"
                      variant="body60"
                    >
                      🔥 Most Performed Ads
                    </Text>
                    <Img
                      src="images/img_overflowmenu_bluegray_913.svg"
                      className="h-[24px] mt-[4px] w-[24px]"
                      alt="overflowmenu"
                    />
                  </div>
                  <List
                    className="flex-col gap-[1px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700 flex flex-1 items-center justify-start pt-[20px] rounded-[14px] w-[100%]">
                      <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[89%]">
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[42%]">
                            <Text
                              className="font-normal not-italic text-green_506 text-left w-[auto]"
                              variant="body69"
                            >
                              #ADS001245
                            </Text>
                            <Text
                              className="font-medium mt-[6px] text-bluegray_913 text-left w-[auto]"
                              variant="body64"
                            >
                              50% OFF Floor Lamp Get it Now!
                            </Text>
                            <Img
                              src="images/img_social.svg"
                              className="h-[17px] mt-[22px] w-[auto]"
                              alt="social"
                            />
                          </div>
                          <div className="flex items-center justify-start md:ml-[0] ml-[89px] md:w-[100%] w-[19%]">
                            <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                              <Img
                                src="images/img_volume_light_green_404.svg"
                                className="h-[28px] w-[28px]"
                                alt="volume"
                              />
                              <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body60"
                                >
                                  $63.04
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Conversion
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-start md:ml-[0] ml-[41px] md:w-[100%] w-[21%]">
                            <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                              <Img
                                src="images/img_eye_teal_413.svg"
                                className="h-[28px] w-[28px]"
                                alt="eye"
                              />
                              <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body60"
                                >
                                  5,412k
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Engagement
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-gray_209 h-[1px] rounded-[1px] w-[100%]" />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start pt-[20px] rounded-[14px] w-[100%]">
                      <div className="flex flex-col gap-[31px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[89%]">
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[45%]">
                            <Text
                              className="font-normal not-italic text-green_506 text-left w-[auto]"
                              variant="body69"
                            >
                              #ADS001245
                            </Text>
                            <Text
                              className="font-medium mt-[6px] text-bluegray_913 text-left w-[auto]"
                              variant="body64"
                            >
                              $632 Target Gift Card on New Ye..
                            </Text>
                            <Img
                              src="images/img_eye_cyan_305.svg"
                              className="h-[15px] mt-[23px] w-[auto]"
                              alt="eye One"
                            />
                          </div>
                          <div className="flex items-center justify-start md:ml-[0] ml-[69px] md:w-[100%] w-[19%]">
                            <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                              <Img
                                src="images/img_volume_light_green_404.svg"
                                className="h-[28px] w-[28px]"
                                alt="volume One"
                              />
                              <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body60"
                                >
                                  $21.51
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Conversion
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-start md:ml-[0] ml-[41px] md:w-[100%] w-[21%]">
                            <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                              <Img
                                src="images/img_eye_teal_413.svg"
                                className="h-[28px] w-[28px]"
                                alt="eye One"
                              />
                              <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body60"
                                >
                                  2,415
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Engagement
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-gray_209 h-[1px] rounded-[1px] w-[100%]" />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-end pt-[20px] rounded-[14px] w-[100%]">
                      <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[89%]">
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[42%]">
                            <Text
                              className="font-normal not-italic text-green_506 text-left w-[auto]"
                              variant="body69"
                            >
                              #ADS001245
                            </Text>
                            <Text
                              className="font-medium mt-[6px] text-bluegray_913 text-left w-[auto]"
                              variant="body64"
                            >
                              50% OFF Floor Lamp Get it Now!
                            </Text>
                            <Img
                              src="images/img_social_pink_500.svg"
                              className="h-[17px] mt-[22px] w-[auto]"
                              alt="social One"
                            />
                          </div>
                          <div className="flex items-center justify-start md:ml-[0] ml-[89px] md:w-[100%] w-[19%]">
                            <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                              <Img
                                src="images/img_volume_light_green_404.svg"
                                className="h-[28px] w-[28px]"
                                alt="volume Two"
                              />
                              <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body60"
                                >
                                  $67.44
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Conversion
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-start md:ml-[0] ml-[41px] md:w-[100%] w-[21%]">
                            <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                              <Img
                                src="images/img_eye_teal_413.svg"
                                className="h-[28px] w-[28px]"
                                alt="eye Two"
                              />
                              <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-black_902 text-left w-[auto]"
                                  variant="body60"
                                >
                                  7,345
                                </Text>
                                <Text
                                  className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Engagement
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-gray_209 h-[1px] rounded-[1px] w-[100%]" />
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between mt-[8px] w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[19px] items-center justify-start md:mt-[0] mt-[31px] md:w-[100%] w-[49%]">
                  <div className="bg-white_A700 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[14px] shadow-bs124 w-[100%]">
                    <div className="flex flex-col items-center justify-start mb-[8px] w-[100%]">
                      <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] w-[99%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                          <Text
                            className="font-medium mb-[2px] text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            Conversion Summary
                          </Text>
                          <div className="flex sm:flex-1 items-center justify-start sm:mt-[0] mt-[3px] sm:w-[100%] w-[auto]">
                            <div className="flex flex-col justify-start w-[100%]">
                              <div className="flex flex-row items-center justify-between w-[100%]">
                                <Text
                                  className="font-medium text-bluegray_344 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Monthly
                                </Text>
                                <Text
                                  className="font-medium text-bluegray_344 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Weekly
                                </Text>
                                <Text
                                  className="font-semibold text-green_506 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Daily
                                </Text>
                              </div>
                              <div className="bg-green_506 h-[4px] md:ml-[0] ml-[179px] mr-[14px] mt-[2px] rounded-[2px] w-[4%]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-black_902 text-left w-[auto]"
                            variant="body32"
                          >
                            951,123k
                          </Text>
                          <Img
                            src="images/img_location_red_512.svg"
                            className="h-[13px] sm:ml-[0] ml-[25px] w-[auto]"
                            alt="location"
                          />
                          <Text
                            className="font-semibold sm:ml-[0] ml-[19px] text-red_513 text-right w-[auto]"
                            variant="body78"
                          >
                            <span className="text-red_513 text-[14px] font-poppins">
                              -2%{" "}
                            </span>
                            <span className="text-red_513 text-[14px] font-poppins font-normal not-italic">
                              from last month
                            </span>
                          </Text>
                          <Button className="border-[1px] border-gray_400 border-solid cursor-pointer font-semibold leading-[normal] mb-[6px] min-w-[184px] sm:ml-[0] ml-[162px] py-[16px] rounded-[22px] text-[16px] text-center text-green_506 w-[auto]">
                            Download CSV
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[16px] justify-start mt-[2px] w-[100%]">
                        <div className="h-[347px] relative w-[100%]">
                          <div className="absolute bottom-[1%] md:h-[295px] h-[304px] left-[0] md:w-[100%] w-[96%]">
                            <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-[auto]">
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
                            <Img
                              src="images/img_lines.svg"
                              className="absolute h-[295px] inset-[0] justify-center m-[auto] w-[auto]"
                              alt="lines One"
                            />
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex h-[100%] inset-y-[0] items-end justify-end my-[auto] pt-[25px] sm:px-[20px] px-[25px] right-[0] w-[92%]"
                            style={{
                              backgroundImage: "url('images/img_group524.svg')",
                            }}
                          >
                            <div className="md:h-[230px] h-[322px] mr-[85px] relative w-[24%]">
                              <div className="absolute bottom-[0] md:h-[230px] h-[237px] left-[19%] w-[11%]">
                                <Line className="absolute bg-deep_orange_51 h-[230px] inset-y-[0] my-[auto] right-[33%] w-[2px]" />
                                <div className="absolute bg-bluegray_835 h-[15px] inset-x-[0] mx-[auto] outline outline-[3px] outline-white_A700 rounded-[7px] shadow-bs125 top-[0] w-[15px]"></div>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex h-[89px] inset-x-[0] items-start justify-start mx-[auto] p-[14px] top-[0] w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_tooltip.svg')",
                                }}
                              >
                                <div className="flex flex-col items-start justify-start mb-[17px] mt-[4px] md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-medium text-black_902 text-left w-[auto]"
                                    variant="body69"
                                  >
                                    675,451
                                  </Text>
                                  <Text
                                    className="font-light text-gray_510 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    5 March 2020
                                  </Text>
                                </div>
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
                            className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
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
                            className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
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
                            className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            10
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[26px] text-black_902 text-left w-[auto]"
                            variant="body78"
                          >
                            11
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[25px] not-italic text-black_900_7f text-left w-[auto]"
                            variant="body78"
                          >
                            12
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
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
                            className="font-normal md:ml-[0] ml-[26px] not-italic text-black_900_7f text-left w-[auto]"
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
                  </div>
                  <div className="bg-white_A700 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[14px] shadow-bs124 w-[100%]">
                    <div className="flex flex-col md:gap-[40px] gap-[76px] items-center justify-start mb-[26px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body60"
                        >
                          Goal Statistic
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_913.svg"
                          className="h-[24px] mt-[3px] w-[24px]"
                          alt="overflowmenu One"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[92%]">
                        <div className="flex flex-col gap-[115px] md:gap-[40px] justify-start sm:mt-[0] mt-[10px] sm:w-[100%] w-[42%]">
                          <div className="h-[268px] relative w-[268px]">
                            <CircularProgressbar
                              className="absolute border-solid h-[147px] inset-[0] justify-center m-[auto] overflow-visible w-[147px]"
                              value={48}
                              strokeWidth={1}
                              styles={{
                                trail: { strokeWidth: 50, stroke: "" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(0deg)",
                                },
                              }}
                            ></CircularProgressbar>
                            <CircularProgressbar
                              className="absolute border-solid h-[206px] inset-[0] justify-center m-[auto] overflow-visible w-[206px]"
                              value={64}
                              strokeWidth={1}
                              styles={{
                                trail: { strokeWidth: 50, stroke: "" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(0deg)",
                                },
                              }}
                            ></CircularProgressbar>
                            <CircularProgressbar
                              className="absolute border-solid h-[268px] inset-[0] justify-center m-[auto] overflow-visible w-[268px]"
                              value={73}
                              strokeWidth={1}
                              styles={{
                                trail: { strokeWidth: 50, stroke: "" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(0deg)",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                          <div className="border-[17px] border-dashed border-gray_459 flex h-[188px] items-center justify-start md:ml-[0] ml-[49px] pb-[52px] rounded-[50%] w-[188px]">
                            <div
                              className="bg-cover bg-no-repeat flex h-[135px] items-end justify-end p-[22px] sm:px-[20px] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group523.png')",
                              }}
                            >
                              <Text
                                className="font-semibold mr-[35px] mt-[45px] text-black_902 text-left w-[auto]"
                                variant="body39"
                              >
                                56%
                              </Text>
                            </div>
                          </div>
                        </div>
                        <List
                          className="flex-col gap-[40px] grid sm:w-[100%] w-[47%]"
                          orientation="vertical"
                        >
                          <div className="flex items-center justify-start my-[0] w-[100%]">
                            <div className="flex flex-col gap-[19px] items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                                <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] w-[51%]">
                                  <Button className="bg-pink_500_26 flex h-[47px] items-center justify-center p-[14px] rounded-[12px] w-[47px]">
                                    <Img
                                      src="images/img_instagram_pink_500.svg"
                                      className="h-[18px]"
                                      alt="instagram"
                                    />
                                  </Button>
                                  <Text
                                    className="font-medium text-black_902 text-left w-[auto]"
                                    variant="body69"
                                  >
                                    Instagram
                                  </Text>
                                </div>
                                <Line className="bg-gray_300 h-[1px] md:ml-[0] ml-[2px] w-[100%]" />
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
                          <div className="h-[195px] my-[0] relative w-[100%]">
                            <Line className="bg-gray_300 h-[1px] mt-[67px] mx-[auto] w-[100%]" />
                            <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                                <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] w-[49%]">
                                  <Button className="bg-indigo_400_26 flex h-[47px] items-center justify-center p-[14px] rounded-[12px] w-[47px]">
                                    <Img
                                      src="images/img_facebook_indigo_409.svg"
                                      className=""
                                      alt="facebook"
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
                          <div className="h-[196px] my-[0] relative w-[100%]">
                            <Line className="bg-gray_300 h-[1px] mt-[68px] mx-[auto] w-[100%]" />
                            <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                              <div className="flex flex-col gap-[41px] items-start justify-start w-[100%]">
                                <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] w-[41%]">
                                  <Button className="bg-cyan_300_26 flex h-[47px] items-center justify-center p-[13px] rounded-[12px] w-[47px]">
                                    <Img
                                      src="images/img_twitter_cyan_305.svg"
                                      className=""
                                      alt="twitter"
                                    />
                                  </Button>
                                  <Text
                                    className="font-medium text-black_902 text-left w-[auto]"
                                    variant="body69"
                                  >
                                    Twitter
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                                  <div className="flex flex-row items-center justify-between w-[100%]">
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
                                  <div className="flex flex-row items-center justify-between w-[100%]">
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
                                  <div className="flex flex-row items-center justify-between w-[100%]">
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
                                  <div className="flex flex-row items-center justify-between w-[100%]">
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start md:w-[100%] w-[49%]">
                  <div className="bg-white_A700 flex flex-col gap-[37px] justify-end p-[20px] rounded-[14px] shadow-bs124 w-[100%]">
                    <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[11px] mx-[auto] md:w-[100%] w-[98%]">
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
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[20px] mr-[51px] md:w-[100%] w-[90%]">
                      <Img
                        src="images/img_bars.svg"
                        className="h-[155px] w-[auto]"
                        alt="bars"
                      />
                      <div className="flex flex-row items-center justify-between mt-[21px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          01
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          02
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          03
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          04
                        </Text>
                        <Text
                          className="font-semibold text-gray_1010 text-left w-[auto]"
                          variant="body78"
                        >
                          05
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          06
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          07
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          08
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          09
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          10
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          11
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          12
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          13
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          14
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_7f text-left w-[auto]"
                          variant="body78"
                        >
                          15
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[41px] items-start justify-end ml-[auto] mt-[45px] md:w-[100%] w-[43%]">
                        <div className="flex items-center justify-start w-[27%]">
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
                        <div className="flex items-center justify-start w-[25%]">
                          <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[11px] items-center justify-start md:w-[100%] w-[93%]">
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
                        <div className="flex items-center justify-start w-[20%]">
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
                  <div className="flex md:flex-col flex-row gap-[39px] items-center justify-between w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[21px] sm:px-[20px] rounded-[14px] shadow-bs124 md:w-[100%] w-[48%]">
                      <div className="flex flex-row gap-[26px] items-end justify-between mb-[15px] mt-[18px] md:w-[100%] w-[97%]">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
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
                        <div className="flex flex-col gap-[19px] items-start justify-start mb-[2px] mt-[8px] w-[45%]">
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
                    <div className="bg-white_A700 flex md:flex-1 flex-row items-center justify-between p-[30px] sm:px-[20px] rounded-[14px] shadow-bs124 md:w-[100%] w-[48%]">
                      <div className="flex items-center justify-start my-[7px] w-[auto]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900_100 text-left w-[auto]"
                            variant="body64"
                          >
                            Total Audience
                          </Text>
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-semibold text-bluegray_913 text-left w-[auto]"
                              variant="body30"
                            >
                              412,531
                            </Text>
                            <Img
                              src="images/img_download_green_506.svg"
                              className="h-[9px] w-[auto]"
                              alt="download One"
                            />
                            <Text
                              className="font-semibold h-[21px] text-green_506 text-left w-[auto]"
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
                  <List
                    className="sm:flex-col flex-row gap-[39px] grid md:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-[20px] rounded-[14px] shadow-bs124 w-[100%]">
                      <div className="flex flex-col gap-[5px] items-start justify-start mb-[7px] mt-[10px] w-[auto]">
                        <Text
                          className="font-medium text-bluegray_900_100 text-left w-[auto]"
                          variant="body64"
                        >
                          Spends Yesterday
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_913 text-left w-[auto]"
                          variant="body30"
                        >
                          $4,567
                        </Text>
                      </div>
                      <Img
                        src="images/img_car_green_506.svg"
                        className="h-[60px] mr-[16px] w-[60px]"
                        alt="car"
                      />
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-[20px] rounded-[14px] shadow-bs124 w-[100%]">
                      <div className="flex flex-col gap-[5px] items-center justify-start mb-[7px] mt-[10px] w-[auto]">
                        <Text
                          className="font-medium text-bluegray_900_100 text-left w-[auto]"
                          variant="body64"
                        >
                          Spends Today
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_913 text-left w-[auto]"
                          variant="body30"
                        >
                          $5,245
                        </Text>
                      </div>
                      <Img
                        src="images/img_car_green_506.svg"
                        className="h-[60px] mr-[16px] w-[60px]"
                        alt="car One"
                      />
                    </div>
                  </List>
                  <div className="bg-white_A700 flex flex-col gap-[27px] items-center justify-end pt-[32px] rounded-[14px] shadow-bs124 w-[100%]">
                    <div className="flex flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[93%]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        Treding Ads
                      </Text>
                      <Img
                        src="images/img_overflowmenu_bluegray_913.svg"
                        className="h-[24px] w-[24px]"
                        alt="overflowmenu Three"
                      />
                    </div>
                    <List
                      className="flex-col gap-[1px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="bg-white_A700 flex flex-1 items-center justify-start pt-[38px] rounded-[14px] w-[100%]">
                        <div className="flex flex-col gap-[29px] justify-start w-[100%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[36px] md:w-[100%] w-[84%]">
                            <div className="flex flex-col gap-[5px] items-start justify-start sm:mt-[0] mt-[3px] sm:w-[100%] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_913 text-left w-[auto]"
                                variant="body64"
                              >
                                Game Online Vouchers 20% OFF
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_542 text-left w-[auto]"
                                variant="body78"
                              >
                                Published on 5 June 2020
                              </Text>
                            </div>
                            <div className="flex items-center justify-start sm:w-[100%] w-[26%]">
                              <div className="flex flex-row gap-[29px] items-start justify-between w-[100%]">
                                <div
                                  className="bg-cover bg-no-repeat flex h-[44px] items-center justify-start mt-[3px] pb-[5px] w-[52%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group520.svg')",
                                  }}
                                >
                                  <Img
                                    src="images/img_call_green_506.svg"
                                    className="h-[39px] w-[auto]"
                                    alt="call"
                                  />
                                </div>
                                <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-black_902 text-left w-[auto]"
                                    variant="body60"
                                  >
                                    672k
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Visitors
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Line className="bg-gray_209 h-[1px] rounded-[1px] w-[100%]" />
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 items-center justify-start pt-[38px] rounded-[14px] w-[100%]">
                        <div className="flex flex-col gap-[29px] justify-start w-[100%]">
                          <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[36px] md:w-[100%] w-[84%]">
                            <div className="flex flex-col gap-[5px] items-start justify-start mt-[3px] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_913 text-left w-[auto]"
                                variant="body64"
                              >
                                15% OFF Granite Stone
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_542 text-left w-[auto]"
                                variant="body78"
                              >
                                Published on 5 June 2020
                              </Text>
                            </div>
                            <div className="flex items-center justify-start w-[26%]">
                              <div className="flex flex-row gap-[29px] items-start justify-between w-[100%]">
                                <div
                                  className="bg-cover bg-no-repeat flex h-[44px] items-center justify-start mt-[3px] pb-[5px] w-[52%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group521.svg')",
                                  }}
                                >
                                  <Img
                                    src="images/img_vector7.svg"
                                    className="h-[39px] w-[auto]"
                                    alt="VectorSeven"
                                  />
                                </div>
                                <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-black_902 text-left w-[auto]"
                                    variant="body60"
                                  >
                                    672k
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Visitors
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Line className="bg-gray_209 h-[1px] rounded-[1px] w-[100%]" />
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 items-center justify-end pt-[39px] rounded-[14px] w-[100%]">
                        <div className="flex flex-col gap-[28px] justify-start w-[100%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[36px] md:w-[100%] w-[84%]">
                            <div className="flex flex-col gap-[6px] items-start justify-start sm:mt-[0] mt-[3px] sm:w-[100%] w-[auto]">
                              <Text
                                className="font-medium text-bluegray_913 text-left w-[auto]"
                                variant="body64"
                              >
                                50% OFF Floor Lamp Get it Now!
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_542 text-left w-[auto]"
                                variant="body78"
                              >
                                Published on 5 June 2020
                              </Text>
                            </div>
                            <div className="flex items-center justify-start sm:w-[100%] w-[26%]">
                              <div className="flex flex-row gap-[29px] items-start justify-between w-[100%]">
                                <div
                                  className="bg-cover bg-no-repeat flex h-[44px] items-center justify-start mt-[3px] pb-[5px] w-[52%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group520.svg')",
                                  }}
                                >
                                  <Img
                                    src="images/img_call_green_506.svg"
                                    className="h-[39px] w-[auto]"
                                    alt="call One"
                                  />
                                </div>
                                <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-black_902 text-left w-[auto]"
                                    variant="body60"
                                  >
                                    672k
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Visitors
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Line className="bg-gray_209 h-[1px] rounded-[1px] w-[100%]" />
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col inset-[0] justify-center m-[auto] w-[100%]">
            <header className="flex items-center justify-center mx-[auto] w-[100%]">
              <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[31px] sm:px-[20px] w-[100%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[16px] placeholder:text-gray_511 text-gray_511 text-left w-[100%]"
                  wrapClassName="border-[1px] border-gray_338 border-solid flex md:w-[100%] px-[35px] py-[15px] rounded-[12px] sm:px-[20px] sm:w-[100%] w-[28%]"
                  name="searchbox"
                  placeholder="Search here"
                  prefix={
                    <Img
                      src="images/img_search_bluegray_835.svg"
                      className="cursor-pointer mr-[24px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#aaaaaa"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <Button className="bg-green_506 cursor-pointer font-semibold leading-[normal] min-w-[214px] md:ml-[0] ml-[220px] py-[16px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                  + New Campaign
                </Button>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[15px] grid grid-cols-3 mb-[2px] md:ml-[0] ml-[39px] md:w-[100%] w-[11%]"
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
                        alt="file"
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
                <div className="bg-white_A700 flex md:flex-1 flex-row gap-[23px] items-center justify-center md:ml-[0] ml-[30px] sm:pl-[20px] pl-[21px] rounded-[12px] md:w-[100%] w-[14%]">
                  <Text
                    className="font-semibold text-bluegray_913 text-left w-[auto]"
                    variant="body69"
                  >
                    Samuel Anderson
                  </Text>
                  <div className="bg-gray_400 h-[56px] rounded-[12px] w-[56px]"></div>
                </div>
                <Button
                  className="border-[1px] border-gray_130 border-solid flex items-center justify-center md:ml-[0] ml-[30px] mr-[19px] pl-[16px] pr-[17px] py-[14px] rounded-[12px] sm:ml-[0] text-center"
                  rightIcon={
                    <Img
                      src="images/img_arrowdown_bluegray_455.svg"
                      className="ml-[9px] text-center"
                      alt="arrow_down"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-semibold leading-[normal] text-[18px] text-bluegray_913 text-left">
                    EN
                  </div>
                </Button>
              </div>
            </header>
            <aside className="flex flex-col md:hidden justify-start mb-[auto] mt-[-120px] w-[14%] z-[1]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="md:h-[2434px] h-[2437px] relative w-[100%]">
                  <div className="md:h-[2434px] h-[2437px] m-[auto] w-[100%]">
                    <div className="absolute bg-white_A700 flex flex-col h-[100%] inset-[0] items-center justify-center m-[auto] pb-[1444px] w-[98%]">
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
                        src="images/img_menus.svg"
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
                    <Img
                      src="images/img_arrowleft_green_506.svg"
                      className="absolute h-[16px] right-[0] top-[19%] w-[16px]"
                      alt="arrowleft"
                    />
                  </div>
                  <Line className="absolute bg-bluegray_121 h-[1769px] right-[3%] top-[0] w-[1px]" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;
