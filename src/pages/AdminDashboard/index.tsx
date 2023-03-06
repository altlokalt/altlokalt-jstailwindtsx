import React from "react";

import { Img, Text, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AdminDashboardPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_985 flex font-inter items-center justify-end mx-[auto] pt-[23px] sm:px-[20px] px-[23px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between max-w-[1098px] mt-[23px] mx-[auto] md:px-[20px] w-[100%]">
          <Img
            src="images/img_sidenav.svg"
            className="h-[304px] md:mt-[0] mt-[82px] w-[auto]"
            alt="SideNav"
          />
          <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[auto]">
            <header className="flex items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700_87 w-[auto]"
                    variant="body78"
                  >
                    Good day, Shin Ryujin
                  </Text>
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    variant="body30"
                  >
                    Dashboard
                  </Text>
                </div>
                <ul className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-between md:w-[100%] w-[45%] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-medium leading-[normal] p-[0] text-[12px] text-center placeholder:text-white_A700_7e text-white_A700_7e w-[100%]"
                      wrapClassName="bg-gray_986 flex px-[22px] py-[19px] rounded-[27px] sm:px-[20px] sm:w-[100%] w-[auto]"
                      name="GroupSeventyEight"
                      placeholder="Search"
                      prefix={
                        <Img
                          src="images/img_search_white_a700_11x14.svg"
                          className="cursor-pointer mr-[15px] my-[auto]"
                          alt="search"
                        />
                      }
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer ml-[10px] my-[auto]"
                            onClick={() => setInputvalue("")}
                            color="#7effffff"
                          />
                        ) : inputvalue?.length > 0 ? (
                          <CloseSVG
                            color="#7effffff"
                            className="cursor-pointer ml-[10px] my-[auto]"
                            onClick={() => setInputvalue("")}
                          />
                        ) : (
                          ""
                        )
                      }
                    ></Input>
                  </li>
                  <li className="mt-[6px] mb-[26px] sm:w-[100%] sm:my-[10px] w-[auto]">
                    <Img
                      src="images/img_notification_bluegray_755.svg"
                      className="h-[20px]"
                      alt="notification"
                    />
                  </li>
                  <li className="mt-[5px] mb-[4px] sm:w-[100%] sm:my-[10px] w-[11%]">
                    <div className="bg-white_A700 h-[45px] rotate-[-90deg] rounded-[22px] shadow-bs106 w-[45px]"></div>
                  </li>
                </ul>
              </div>
            </header>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[27px] md:w-[100%] w-[87%]">
              <div className="flex items-center justify-start md:w-[100%] w-[14%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-left text-white_A700_87 w-[auto]"
                    variant="body87"
                  >
                    Total Income
                  </Text>
                  <Text
                    className="font-semibold mt-[2px] text-left text-white_A700 w-[auto]"
                    variant="body30"
                  >
                    $1800
                  </Text>
                  <Text
                    className="bg-red_432 font-bold h-[18px] mt-[8px] pl-[5px] pr-[11px] py-[2px] rounded-[9px] text-left text-white_A700 w-[43px]"
                    variant="body98"
                  >
                    -7,6%
                  </Text>
                </div>
              </div>
              <div className="border-[1px] border-solid border-white_A700_33 flex items-start justify-end md:ml-[0] ml-[79px] p-[25px] sm:px-[20px] rounded-[25px] md:w-[100%] w-[28%]">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[35px] mt-[2px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-left text-white_A700_87 w-[auto]"
                    variant="body87"
                  >
                    Total Expense
                  </Text>
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    variant="body30"
                  >
                    8.50k
                  </Text>
                  <Text
                    className="bg-indigo_A207 font-bold h-[18px] justify-center mt-[8px] px-[4px] py-[2px] rounded-[9px] text-center text-white_A700 w-[44px]"
                    variant="body98"
                  >
                    +12,6%
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start md:ml-[0] ml-[78px] w-[10%] md:w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-left text-white_A700_87 w-[auto]"
                    variant="body87"
                  >
                    Total Product
                  </Text>
                  <Text
                    className="font-semibold mt-[2px] text-left text-white_A700 w-[auto]"
                    variant="body30"
                  >
                    29k
                  </Text>
                  <Text
                    className="bg-indigo_A207 font-bold h-[18px] justify-center mt-[8px] px-[8px] py-[2px] rounded-[9px] text-center text-white_A700 w-[43px]"
                    variant="body98"
                  >
                    +345
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start md:ml-[0] ml-[174px] md:w-[100%] w-[12%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-left text-white_A700_87 w-[auto]"
                    variant="body87"
                  >
                    Total Bonus
                  </Text>
                  <Text
                    className="font-semibold mt-[2px] text-left text-white_A700 w-[auto]"
                    variant="body30"
                  >
                    4.37k
                  </Text>
                  <Text
                    className="bg-red_432 font-bold h-[18px] mt-[8px] pl-[5px] pr-[11px] py-[2px] rounded-[9px] text-left text-white_A700 w-[43px]"
                    variant="body98"
                  >
                    -7,6%
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[20px] items-start justify-between mt-[20px] w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] w-[66%]">
                <div className="bg-gray_986 flex items-center justify-start p-[15px] rounded-[17px] w-[100%]">
                  <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[99%]">
                      <Text
                        className="font-semibold md:mt-[0] mt-[3px] text-left text-white_A700 w-[auto]"
                        variant="body64"
                      >
                        Revenue
                      </Text>
                      <div className="flex flex-row gap-[9px] items-start justify-center md:ml-[0] ml-[281px] md:w-[100%] w-[38%]">
                        <Button
                          className="border-[1px] border-solid border-white_A700_33 flex items-center justify-center px-[14px] py-[8px] rounded-[16px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_polygon_1_white_a700.svg"
                              className="ml-[2px] text-center"
                              alt="Polygon 1"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-semibold leading-[normal] text-[12px] text-left text-white_A700">
                            01/01/2021
                          </div>
                        </Button>
                        <Text
                          className="font-semibold mt-[10px] text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          to
                        </Text>
                        <Button
                          className="border-[1px] border-solid border-white_A700_33 flex items-center justify-center px-[14px] py-[8px] rounded-[16px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_polygon_1_white_a700.svg"
                              className="ml-[3px] text-center"
                              alt="Polygon 1"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-semibold leading-[normal] text-[12px] text-left text-white_A700">
                            31/12/2021
                          </div>
                        </Button>
                      </div>
                      <Img
                        src="images/img_group31.svg"
                        className="h-[12px] md:ml-[0] ml-[21px] md:mt-[0] mt-[11px] w-[auto]"
                        alt="GroupThirtyOne"
                      />
                    </div>
                    <div className="bg-gray_985 flex items-center justify-start p-[5px] rounded-[10px] w-[100%]">
                      <div className="flex flex-col gap-[19px] justify-start mb-[6px] md:w-[100%] w-[96%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-evenly mr-[11px] md:w-[100%] w-[99%]">
                          <div className="flex flex-col gap-[29px] items-start justify-start sm:mt-[0] mt-[33px] sm:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-right text-white_A700 w-[auto]"
                              variant="body91"
                            >
                              $400k
                            </Text>
                            <Text
                              className="font-normal not-italic text-right text-white_A700 w-[auto]"
                              variant="body91"
                            >
                              $300k
                            </Text>
                            <Text
                              className="font-normal not-italic text-right text-white_A700 w-[auto]"
                              variant="body91"
                            >
                              $200k
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[2px] not-italic text-right text-white_A700 w-[auto]"
                              variant="body91"
                            >
                              $100k
                            </Text>
                            <Text
                              className="font-normal h-[14px] md:ml-[0] ml-[21px] not-italic text-right text-white_A700 w-[auto]"
                              variant="body91"
                            >
                              $0
                            </Text>
                          </div>
                          <div className="md:h-[133px] h-[172px] relative sm:w-[100%] w-[94%]">
                            <Img
                              src="images/img_group49.svg"
                              className="absolute bottom-[0] h-[129px] inset-x-[0] mx-[auto] w-[auto]"
                              alt="GroupFortyNine"
                            />
                            <Text
                              className="font-medium mt-[6px] mx-[auto] text-center text-white_A700 w-[auto]"
                              variant="body87"
                            >
                              Total Revenue Over Time
                            </Text>
                            <div
                              className="absolute bg-cover bg-no-repeat flex h-[133px] inset-x-[0] items-end justify-end mx-[auto] p-[25px] sm:px-[20px] top-[0] w-[99%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group509.png')",
                              }}
                            >
                              <div className="flex flex-col gap-[9px] items-center justify-start mr-[128px] mt-[14px] md:w-[100%] w-[17%]">
                                <div className="bg-gray_986 border-[1px] border-solid border-white_A700_33 flex flex-col items-center justify-start p-[8px] rounded-[24px] w-[100%]">
                                  <Text
                                    className="font-semibold text-center text-white_A700 w-[auto]"
                                    variant="body82"
                                  >
                                    $265k
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                    as="h2"
                                    variant="h2"
                                  >
                                    01 -08-2021
                                  </Text>
                                </div>
                                <div className="bg-white_A700 h-[10px] rounded-[50%] w-[10px]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end ml-[auto] md:w-[100%] w-[94%]">
                          <Text
                            className="font-normal not-italic text-center text-white_A700 w-[auto]"
                            variant="body91"
                          >
                            Jan
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[28px] not-italic text-center text-white_A700 w-[auto]"
                            variant="body91"
                          >
                            Feb
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[28px] not-italic text-center text-white_A700 w-[auto]"
                            variant="body91"
                          >
                            Mar
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[27px] not-italic text-center text-white_A700 w-[auto]"
                            variant="body91"
                          >
                            Apr
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[28px] not-italic text-center text-white_A700 w-[auto]"
                            variant="body91"
                          >
                            May
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[29px] not-italic text-center text-white_A700 w-[auto]"
                            variant="body91"
                          >
                            Jun
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[28px] not-italic text-center text-white_A700 w-[auto]"
                            variant="body91"
                          >
                            Jul
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[28px] sm:mt-[0] mt-[2px] not-italic text-center text-white_A700 w-[auto]"
                            variant="body91"
                          >
                            Aug
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[27px] not-italic text-center text-white_A700 w-[auto]"
                            variant="body91"
                          >
                            Sep
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[28px] not-italic text-center text-white_A700 w-[auto]"
                            variant="body91"
                          >
                            Oct
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[27px] not-italic text-center text-white_A700 w-[auto]"
                            variant="body91"
                          >
                            Nov
                          </Text>
                          <Text
                            className="font-normal mb-[2px] sm:ml-[0] ml-[27px] not-italic text-center text-white_A700 w-[auto]"
                            variant="body91"
                          >
                            Des
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                  <div className="flex flex-col relative md:w-[100%] w-[49%]">
                    <div className="bg-gray_986 flex items-center justify-end mx-[auto] p-[15px] rounded-[17px] w-[100%]">
                      <div className="flex flex-col gap-[17px] items-center justify-start mt-[6px] w-[100%]">
                        <div className="flex flex-row items-end justify-between md:w-[100%] w-[97%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            Visits by Devices
                          </Text>
                          <Img
                            src="images/img_group31.svg"
                            className="h-[12px] mb-[3px] mt-[6px] w-[auto]"
                            alt="GroupThirtyOne One"
                          />
                        </div>
                        <div className="bg-gray_985 flex flex-col items-center justify-start p-[12px] rounded-[10px] w-[100%]">
                          <Text
                            className="font-medium text-center text-white_A700 w-[auto]"
                            variant="body87"
                          >
                            Devices
                          </Text>
                          <div className="font-poppins h-[141px] md:h-[159px] mt-[18px] relative w-[141px]">
                            <Text
                              className="font-semibold m-[auto] text-center text-white_A700"
                              variant="body64"
                            >
                              <span className="md:text-[21px] sm:text-[19px] text-white_A700 text-[23px] font-inter">
                                64%
                                <br />
                              </span>
                              <span className="text-white_A700 text-[13px] font-inter">
                                Mobile
                              </span>
                            </Text>
                            <CircularProgressbar
                              className="absolute border-solid h-[141px] inset-[0] justify-center m-[auto] overflow-visible w-[141px]"
                              value={63}
                              counterClockwise
                              strokeWidth={10}
                              styles={{
                                trail: { strokeWidth: 10, stroke: "" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(90deg)",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                          <div className="flex font-inter items-center justify-start mb-[7px] mt-[26px] md:w-[100%] w-[92%]">
                            <List
                              className="flex-col gap-[9px] grid items-center w-[100%]"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 flex-row items-start justify-between my-[0] w-[100%]">
                                <div className="flex flex-row items-start justify-evenly w-[auto]">
                                  <div className="bg-orange_309 h-[10px] mb-[4px] rounded-[50%] w-[10px]"></div>
                                  <Text
                                    className="font-medium text-left text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    Desktop
                                  </Text>
                                </div>
                                <Text
                                  className="font-medium text-right text-white_A700 w-[auto]"
                                  variant="body87"
                                >
                                  64%
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-row items-center justify-between my-[0] w-[100%]">
                                <div className="flex flex-row items-start justify-evenly w-[auto]">
                                  <div className="bg-teal_410 h-[10px] my-[2px] rounded-[50%] w-[10px]"></div>
                                  <Text
                                    className="font-medium text-left text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    Mobile
                                  </Text>
                                </div>
                                <Text
                                  className="font-medium text-right text-white_A700 w-[auto]"
                                  variant="body87"
                                >
                                  36%
                                </Text>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[340px] h-[377px] mt-[-10.41px] mx-[auto] w-[100%] z-[1]">
                      <div className="md:h-[350px] h-[377px] m-[auto] w-[100%]">
                        <div className="md:h-[350px] h-[377px] m-[auto] w-[100%]">
                          <div className="absolute bg-gray_986 bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] p-[15px] rounded-[17px] w-[100%]">
                            <div className="flex flex-col gap-[23px] items-end justify-start mt-[7px] w-[100%]">
                              <div className="flex flex-row gap-[64px] items-end justify-end ml-[auto] md:w-[100%] w-[39%]">
                                <div className="bg-indigo_A207 flex items-center justify-end rounded-[9px] w-[auto]">
                                  <Text
                                    className="font-bold mt-[2px] text-center text-white_A700 w-[auto]"
                                    variant="body98"
                                  >
                                    +2,6%
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_group31.svg"
                                  className="h-[12px] mt-[6px] w-[auto]"
                                  alt="GroupThirtyOne Two"
                                />
                              </div>
                              <div className="bg-gray_985 flex items-center justify-start p-[10px] rounded-[10px] w-[100%]">
                                <div className="flex flex-col gap-[19px] items-center justify-start mb-[4px] md:w-[100%] w-[97%]">
                                  <Text
                                    className="font-medium text-center text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    Customers
                                  </Text>
                                  <div className="flex flex-col items-start justify-start w-[100%]">
                                    <div className="flex flex-row gap-[10px] items-start justify-between md:w-[100%] w-[98%]">
                                      <div className="flex flex-col items-start justify-start w-[auto]">
                                        <Text
                                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                          variant="body87"
                                        >
                                          10%
                                        </Text>
                                        <Text
                                          className="font-normal md:ml-[0] ml-[4px] mt-[44px] not-italic text-left text-white_A700 w-[auto]"
                                          variant="body87"
                                        >
                                          5%
                                        </Text>
                                        <Text
                                          className="font-normal md:ml-[0] ml-[4px] mt-[48px] not-italic text-left text-white_A700 w-[auto]"
                                          variant="body87"
                                        >
                                          0%
                                        </Text>
                                      </div>
                                      <Img
                                        src="images/img_group49_white_a700.svg"
                                        className="h-[62px] mt-[8px] w-[auto]"
                                        alt="GroupFortyNine One"
                                      />
                                    </div>
                                    <div className="flex flex-row items-center justify-end ml-[auto] mt-[22px] md:w-[100%] w-[90%]">
                                      <Text
                                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                        variant="body91"
                                      >
                                        22/07
                                      </Text>
                                      <Text
                                        className="font-normal ml-[34px] not-italic text-left text-white_A700 w-[auto]"
                                        variant="body91"
                                      >
                                        24/07
                                      </Text>
                                      <Text
                                        className="font-normal ml-[35px] not-italic text-left text-white_A700 w-[auto]"
                                        variant="body91"
                                      >
                                        26/07
                                      </Text>
                                      <Text
                                        className="font-normal ml-[39px] not-italic text-left text-white_A700 w-[auto]"
                                        variant="body91"
                                      >
                                        28/07
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[4px] mt-[23px] md:w-[100%] w-[63%]">
                                      <div className="flex flex-row items-start justify-evenly w-[46%]">
                                        <div className="bg-orange_309 h-[10px] my-[2px] rounded-[50%] w-[10px]"></div>
                                        <Text
                                          className="font-medium text-left text-white_A700 w-[auto]"
                                          variant="body87"
                                        >
                                          First Time
                                        </Text>
                                      </div>
                                      <div className="flex flex-row items-start justify-evenly w-[44%]">
                                        <div className="bg-teal_410 h-[10px] my-[2px] rounded-[50%] w-[10px]"></div>
                                        <Text
                                          className="font-medium text-left text-white_A700 w-[auto]"
                                          variant="body87"
                                        >
                                          Returning
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_group62.png"
                            className="absolute h-[94px] object-cover right-[11%] top-[0] w-[auto]"
                            alt="GroupSixtyTwo"
                          />
                        </div>
                        <Text
                          className="absolute font-semibold left-[6%] text-left text-white_A700 top-[13%] w-[auto]"
                          variant="body64"
                        >
                          Repeat Customer
                        </Text>
                      </div>
                      <Img
                        src="images/img_group61.png"
                        className="absolute h-[39px] object-cover right-[11%] top-[15%] w-[auto]"
                        alt="GroupSixtyOne"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[17px] items-center justify-start md:w-[100%] w-[49%]">
                    <div className="bg-gray_986 flex items-center justify-end p-[15px] rounded-[17px] w-[100%]">
                      <div className="flex flex-col gap-[18px] items-center justify-start mt-[5px] w-[100%]">
                        <div className="flex flex-row items-start justify-start md:w-[100%] w-[97%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            Visitors
                          </Text>
                          <Text
                            className="bg-red_432 font-bold h-[18px] justify-center ml-[13px] px-[8px] py-[2px] rounded-[9px] text-center text-white_A700 w-[43px]"
                            variant="body98"
                          >
                            -7,6%
                          </Text>
                          <Img
                            src="images/img_group31.svg"
                            className="h-[12px] ml-[149px] mt-[7px] w-[auto]"
                            alt="GroupThirtyOne Three"
                          />
                        </div>
                        <div className="bg-gray_985 flex flex-col gap-[14px] items-center justify-start p-[12px] rounded-[10px] w-[100%]">
                          <Text
                            className="font-medium text-center text-white_A700 w-[auto]"
                            variant="body87"
                          >
                            Visitors Over Time
                          </Text>
                          <div className="h-[213px] md:h-[218px] mb-[6px] relative w-[94%]">
                            <Img
                              src="images/img_group49_white_a700_116x209.svg"
                              className="absolute h-[116px] right-[0] top-[0] w-[auto]"
                              alt="GroupFortyNine Two"
                            />
                            <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                              <div className="flex flex-col gap-[10px] justify-start w-[100%]">
                                <div className="flex flex-row gap-[26px] items-center justify-between mr-[7px] md:w-[100%] w-[98%]">
                                  <div className="flex flex-col gap-[44px] items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                      variant="body91"
                                    >
                                      30k
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                      variant="body91"
                                    >
                                      20k
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                      variant="body91"
                                    >
                                      10k
                                    </Text>
                                    <Text
                                      className="font-normal md:ml-[0] ml-[7px] not-italic text-left text-white_A700 w-[auto]"
                                      variant="body91"
                                    >
                                      0k
                                    </Text>
                                  </div>
                                  <div className="md:h-[175px] h-[185px] relative w-[81%]">
                                    <Img
                                      src="images/img_group45.svg"
                                      className="absolute bottom-[0] h-[175px] inset-x-[0] mx-[auto] w-[auto]"
                                      alt="GroupFortyFive"
                                    />
                                    <div className="absolute bg-gray_986 border-[1px] border-solid border-white_A700_33 flex flex-col items-center justify-start p-[9px] right-[14%] rounded-[24px] top-[0] w-[auto]">
                                      <Text
                                        className="font-medium text-center text-white_A700 w-[auto]"
                                        variant="body82"
                                      >
                                        23,6k
                                      </Text>
                                      <Text
                                        className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                        as="h2"
                                        variant="h2"
                                      >
                                        26 -07-2021
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-end ml-[auto] md:w-[100%] w-[86%]">
                                  <Text
                                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                    variant="body91"
                                  >
                                    22/07
                                  </Text>
                                  <Text
                                    className="font-normal ml-[28px] not-italic text-left text-white_A700 w-[auto]"
                                    variant="body91"
                                  >
                                    24/07
                                  </Text>
                                  <Text
                                    className="font-normal ml-[28px] not-italic text-left text-white_A700 w-[auto]"
                                    variant="body91"
                                  >
                                    26/07
                                  </Text>
                                  <Text
                                    className="font-normal ml-[28px] not-italic text-left text-white_A700 w-[auto]"
                                    variant="body91"
                                  >
                                    28/07
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_986 flex items-center justify-start p-[15px] rounded-[17px] w-[100%]">
                      <div className="flex flex-col gap-[17px] items-center justify-start mb-[2px] mt-[6px] w-[100%]">
                        <div className="flex flex-row items-end justify-between md:w-[100%] w-[97%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            History
                          </Text>
                          <div className="flex flex-col items-center justify-start mb-[3px] mt-[6px] w-[auto]">
                            <div className="bg-white_A700 h-[4px] rounded-[50%] w-[4px]"></div>
                            <div className="bg-white_A700 h-[4px] mt-[4px] rounded-[50%] w-[4px]"></div>
                          </div>
                        </div>
                        <div className="bg-gray_985 flex items-center justify-end p-[11px] rounded-[10px] w-[100%]">
                          <List
                            className="flex-col gap-[12px] grid items-center mt-[4px] w-[97%]"
                            orientation="vertical"
                          >
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[7px] items-center justify-start w-[100%]">
                                <div className="flex flex-row items-start justify-between w-[100%]">
                                  <Text
                                    className="font-medium text-left text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    January
                                  </Text>
                                  <Text
                                    className="font-medium text-right text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    $10,000 / $20,000
                                  </Text>
                                </div>
                                <div className="h-[8px] overflow-hidden relative w-[100%]">
                                  <div className="w-full h-full absolute bg-orange_300_75 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-orange_309  rounded-[4px]"
                                    style={{ width: "56%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[7px] items-center justify-start w-[100%]">
                                <div className="flex flex-row items-start justify-between w-[100%]">
                                  <Text
                                    className="font-medium text-left text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    February
                                  </Text>
                                  <Text
                                    className="font-medium text-right text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    $14,000 / $20,000
                                  </Text>
                                </div>
                                <div className="h-[8px] overflow-hidden relative w-[100%]">
                                  <div className="w-full h-full absolute bg-teal_400_75 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-teal_410  rounded-[4px]"
                                    style={{ width: "68%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[7px] items-center justify-start w-[100%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Text
                                    className="font-medium text-left text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    March
                                  </Text>
                                  <Text
                                    className="font-medium text-right text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    $4,000 / $20,000
                                  </Text>
                                </div>
                                <div className="h-[8px] overflow-hidden relative w-[100%]">
                                  <div className="w-full h-full absolute bg-orange_300_75 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-orange_309  rounded-[4px]"
                                    style={{ width: "32%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Text
                                    className="font-medium text-left text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    April
                                  </Text>
                                  <Text
                                    className="font-medium text-right text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    $12,000 / $20,000
                                  </Text>
                                </div>
                                <div className="h-[8px] overflow-hidden relative w-[100%]">
                                  <div className="w-full h-full absolute bg-teal_400_75 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-teal_410  rounded-[4px]"
                                    style={{ width: "62%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Text
                                    className="font-medium text-left text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    May
                                  </Text>
                                  <Text
                                    className="font-medium text-right text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    $14,000 / $30,000
                                  </Text>
                                </div>
                                <div className="h-[8px] overflow-hidden relative w-[100%]">
                                  <div className="w-full h-full absolute bg-orange_300_75 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-orange_309  rounded-[4px]"
                                    style={{ width: "48%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Text
                                    className="font-medium text-left text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    June
                                  </Text>
                                  <Text
                                    className="font-medium text-right text-white_A700 w-[auto]"
                                    variant="body87"
                                  >
                                    $5,000 / $8,000
                                  </Text>
                                </div>
                                <div className="h-[8px] overflow-hidden relative w-[100%]">
                                  <div className="w-full h-full absolute bg-teal_400_75 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-teal_410  rounded-[4px]"
                                    style={{ width: "74%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col relative md:w-[100%] w-[32%]">
                <div className="bg-gray_986 flex items-center justify-start mx-[auto] p-[14px] rounded-[17px] w-[100%]">
                  <div className="flex flex-col items-center justify-start mt-[6px] w-[100%]">
                    <div className="flex flex-row items-start justify-start md:w-[100%] w-[97%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body64"
                      >
                        Sales
                      </Text>
                      <Text
                        className="bg-indigo_A207 font-bold h-[18px] justify-center ml-[13px] px-[3px] py-[2px] rounded-[9px] text-center text-white_A700 w-[43px]"
                        variant="body98"
                      >
                        +12,6%
                      </Text>
                      <Img
                        src="images/img_group31.svg"
                        className="h-[12px] ml-[168px] mt-[7px] w-[auto]"
                        alt="GroupThirtyOne Four"
                      />
                    </div>
                    <div className="h-[44px] md:h-[64px] mt-[20px] relative w-[100%]">
                      <div className="absolute flex items-center justify-start right-[0] top-[25%] w-[95%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-inter font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body87"
                          >
                            This Week
                          </Text>
                          <Text
                            className="font-normal font-poppins not-italic text-right text-white_A700 w-[auto]"
                            variant="body87"
                          >
                            <span className="text-white_A700 text-[12px] font-inter font-medium">
                              Total:
                            </span>
                            <span className="text-white_A700 text-[12px] font-inter">
                              {" "}
                              $303.50
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bg-gray_985 flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[6px] rounded-[22px] w-[50%]">
                        <div className="flex flex-row gap-[13px] items-center justify-between md:w-[100%] w-[97%]">
                          <Button className="bg-orange_309 cursor-pointer font-semibold leading-[normal] min-w-[64px] py-[8px] rounded-[16px] text-[12px] text-center text-gray_985 w-[auto]">
                            Weekly
                          </Button>
                          <Text
                            className="font-normal not-italic text-right text-white_A700_87 w-[auto]"
                            variant="body87"
                          >
                            Monthly
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_985 md:h-[208px] h-[213px] mt-[15px] p-[4px] relative rounded-[10px] w-[100%]">
                      <Text
                        className="font-medium mt-[8px] mx-[auto] text-left text-white_A700 w-[auto]"
                        variant="body87"
                      >
                        Sales Over Time
                      </Text>
                      <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[2%] w-[91%]">
                        <div className="flex flex-col gap-[9px] items-end justify-start w-[100%]">
                          <div className="flex flex-row gap-[10px] items-start justify-between mr-[5px] md:w-[100%] w-[99%]">
                            <div className="flex flex-col gap-[25px] items-start justify-start mt-[39px] w-[auto]">
                              <Text
                                className="font-normal not-italic text-right text-white_A700 w-[auto]"
                                variant="body91"
                              >
                                $300
                              </Text>
                              <Text
                                className="font-normal not-italic text-right text-white_A700 w-[auto]"
                                variant="body91"
                              >
                                $200
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[2px] not-italic text-right text-white_A700 w-[auto]"
                                variant="body91"
                              >
                                $100
                              </Text>
                              <Text
                                className="font-normal h-[14px] md:ml-[0] ml-[15px] not-italic text-right text-white_A700 w-[auto]"
                                variant="body91"
                              >
                                $0
                              </Text>
                            </div>
                            <div className="h-[136px] mb-[34px] relative w-[85%]">
                              <Img
                                src="images/img_group55.png"
                                className="h-[81px] mb-[-33.8px] mx-[auto] object-cover w-[auto] z-[1]"
                                alt="GroupFiftyFive"
                              />
                              <Img
                                src="images/img_group49_white_a700_89x216.svg"
                                className="h-[89px] mt-[auto] mx-[auto] w-[auto]"
                                alt="GroupFortyNine Three"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row gap-[71px] items-center justify-end ml-[auto] md:w-[100%] w-[91%]">
                            <Text
                              className="font-normal not-italic text-center text-white_A700 w-[auto]"
                              variant="body91"
                            >
                              22/07
                            </Text>
                            <Text
                              className="font-normal not-italic text-center text-white_A700 w-[auto]"
                              variant="body91"
                            >
                              24/07
                            </Text>
                            <Text
                              className="font-normal not-italic text-center text-white_A700 w-[auto]"
                              variant="body91"
                            >
                              26/07
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:h-[343px] h-[377px] mt-[-7.25px] mx-[auto] w-[100%] z-[1]">
                  <div className="absolute bg-gray_986 bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] p-[15px] rounded-[17px] w-[100%]">
                    <div className="flex flex-col gap-[18px] items-center justify-start mb-[2px] mt-[5px] w-[100%]">
                      <div className="flex flex-row items-end justify-between md:w-[100%] w-[97%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body64"
                        >
                          Date
                        </Text>
                        <div className="flex flex-col items-center justify-start mb-[2px] mt-[7px] w-[auto]">
                          <div className="bg-white_A700 h-[4px] rounded-[50%] w-[4px]"></div>
                          <div className="bg-white_A700 h-[4px] mt-[4px] rounded-[50%] w-[4px]"></div>
                        </div>
                      </div>
                      <div className="bg-gray_985 h-[272px] rounded-[10px] w-[100%]"></div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[72%]">
                    <Img
                      src="images/img_group121.svg"
                      className="h-[12px] w-[auto]"
                      alt="Group121 One"
                    />
                    <Text
                      className="font-semibold mt-[92px] text-center text-white_A700 w-[auto]"
                      variant="body61"
                    >
                      July 2021
                    </Text>
                    <div className="flex flex-col gap-[16px] items-center justify-start mt-[15px] w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between md:w-[100%] w-[99%]">
                        <Text
                          className="font-medium text-center text-white_A700 w-[auto]"
                          variant="body98"
                        >
                          Sun
                        </Text>
                        <Text
                          className="font-medium text-center text-white_A700 w-[auto]"
                          variant="body98"
                        >
                          Mon
                        </Text>
                        <Text
                          className="font-medium text-center text-white_A700 w-[auto]"
                          variant="body98"
                        >
                          Tue
                        </Text>
                        <Text
                          className="font-medium text-center text-white_A700 w-[auto]"
                          variant="body98"
                        >
                          Wed
                        </Text>
                        <Text
                          className="font-medium text-center text-white_A700 w-[auto]"
                          variant="body98"
                        >
                          Thu
                        </Text>
                        <Text
                          className="font-medium h-[13px] text-center text-white_A700 w-[auto]"
                          variant="body98"
                        >
                          Fri
                        </Text>
                        <Text
                          className="font-medium text-center text-white_A700 w-[auto]"
                          variant="body98"
                        >
                          Sat
                        </Text>
                      </div>
                      <div className="flex h-[167px] justify-end relative w-[100%]">
                        <div className="bg-orange_309 h-[30px] mb-[64px] ml-[63px] mt-[auto] rounded-[50%] w-[30px]"></div>
                        <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                          <List
                            className="flex-col gap-[22px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex md:flex-1 flex-row items-center justify-between mr-[3px] my-[0] md:w-[100%] w-[99%]">
                              <Text
                                className="font-semibold text-center text-white_A700_87 w-[auto]"
                                variant="body87"
                              >
                                29
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700_87 w-[auto]"
                                variant="body87"
                              >
                                30
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700_87 w-[auto]"
                                variant="body87"
                              >
                                31
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                1
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                2
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                3
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                4
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-row items-center justify-between mx-[auto] my-[0] md:w-[100%] w-[97%]">
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                5
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                6
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                7
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                8
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                9
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                10
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                11
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-row items-center justify-between my-[0] md:w-[100%] w-[99%]">
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                12
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                13
                              </Text>
                              <Text
                                className="font-semibold text-center text-gray_986 w-[auto]"
                                variant="body87"
                              >
                                14
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                15
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                16
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                17
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                18
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between my-[0] w-[100%]">
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                19
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                20
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                21
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                22
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                23
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                24
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                25
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-row items-center justify-between mr-[5px] my-[0] md:w-[100%] w-[98%]">
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                26
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                27
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                28
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                29
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                30
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                31
                              </Text>
                              <Text
                                className="font-semibold text-center text-white_A700_87 w-[auto]"
                                variant="body87"
                              >
                                1
                              </Text>
                            </div>
                          </List>
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
    </>
  );
};

export default AdminDashboardPage;
