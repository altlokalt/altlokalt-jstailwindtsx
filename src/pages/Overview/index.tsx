import React from "react";

import {
  Img,
  Text,
  CheckBox,
  Line,
  Input,
  List,
  SelectBox,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images";

const OverviewPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_111 flex font-inter mx-[auto] relative w-[100%]">
        <aside className="flex flex-col md:hidden justify-start mt-[auto] md:px-[20px] w-[18%]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="bg-white_A700 flex flex-col md:gap-[40px] gap-[562px] items-center justify-start p-[31px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col md:gap-[40px] gap-[64px] items-start justify-start md:w-[100%] w-[86%]">
                <div className="flex flex-row gap-[10px] items-end justify-start p-[3px] md:w-[100%] w-[90%]">
                  <Img
                    src="images/img_vector_blue_a402.svg"
                    className="h-[29px] w-[29px]"
                    alt="Vector"
                  />
                  <Text
                    className="font-bold mt-[7px] text-gray_991 text-left w-[auto]"
                    variant="body58"
                  >
                    Apart.
                  </Text>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[32px] items-start justify-start w-[166px]">
                    <div className="flex flex-row gap-[20px] items-center justify-start pb-[8px] pr-[11px] w-[166px]">
                      <Img
                        src="images/img_grid_blue_a403.svg"
                        className="h-[24px] w-[24px]"
                        alt="grid"
                      />
                      <Text
                        className="font-semibold text-blue_A403 text-left w-[auto]"
                        variant="body78"
                      >
                        Dashboard
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] items-center justify-start pb-[8px] w-[166px]">
                      <Img
                        src="images/img_file_gray_456.svg"
                        className="h-[24px] w-[24px]"
                        alt="file"
                      />
                      <Text
                        className="font-normal not-italic text-gray_456 text-left w-[auto]"
                        variant="body78"
                      >
                        Property
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] items-center justify-start pb-[8px] w-[166px]">
                      <Img
                        src="images/img_file_gray_456_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="file One"
                      />
                      <Text
                        className="font-normal not-italic text-gray_456 text-left w-[auto]"
                        variant="body78"
                      >
                        Report
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] items-center justify-start pb-[8px] w-[166px]">
                      <Img
                        src="images/img_settings_gray_456.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings"
                      />
                      <Text
                        className="font-normal not-italic text-gray_456 text-left w-[auto]"
                        variant="body78"
                      >
                        Statistic
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] items-center justify-start pb-[8px] w-[166px]">
                      <Img
                        src="images/img_lock_gray_456.svg"
                        className="h-[24px] w-[24px]"
                        alt="lock"
                      />
                      <Text
                        className="font-normal not-italic text-gray_456 text-left w-[auto]"
                        variant="body78"
                      >
                        Agent
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] items-center justify-start pb-[8px] w-[166px]">
                      <Img
                        src="images/img_user_gray_456.svg"
                        className="h-[24px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="font-normal not-italic text-gray_456 text-left w-[auto]"
                        variant="body78"
                      >
                        Account
                      </Text>
                    </div>
                    <CheckBox
                      className="font-normal leading-[normal] not-italic text-[14px] text-gray_456 text-left"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="Message"
                      name="Message"
                    ></CheckBox>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[39px] items-center justify-start mb-[9px] w-[100%]">
                <Line className="bg-bluegray_60 h-[1px] w-[100%]" />
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <div className="bg-bluegray_60 h-[40px] rounded-[10px] w-[40px]"></div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-gray_912 text-left w-[auto]"
                      variant="body78"
                    >
                      Albert Flores
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_456 text-left w-[auto]"
                      variant="body78"
                    >
                      @annatte.black
                    </Text>
                  </div>
                  <Img
                    src="images/img_arrowdown_blue_a403.svg"
                    className="h-[24px] mt-[10px] w-[24px]"
                    alt="arrowdown"
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start ml-[-1px] p-[24px] md:px-[20px] w-[83%] z-[1]">
          <Text
            className="font-semibold md:ml-[0] ml-[7px] md:mt-[0] mt-[6px] text-gray_912 text-left w-[auto]"
            variant="body48"
          >
            Dashboard
          </Text>
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="font-normal leading-[normal] not-italic p-[0] text-[12px] placeholder:text-gray_556 text-gray_556 text-left w-[100%]"
            wrapClassName="bg-white_A700 flex mb-[2px] md:ml-[0] md:w-[100%] ml-[161px] pb-[10px] pl-[19px] pr-[35px] pt-[14px] rounded-[10px] sm:ml-[0] sm:pr-[20px] sm:w-[100%] w-[40%]"
            name="GroupNinetyTwo"
            placeholder="Search type of keywords"
            prefix={
              <Img
                src="images/img_search_gray_456.svg"
                className="cursor-pointer mr-[17px] my-[auto]"
                alt="search"
              />
            }
            suffix={
              inputvalue?.length > 0 ? (
                <CloseSVG
                  color="#a7a7a7"
                  className="cursor-pointer ml-[10px] my-[auto]"
                  onClick={() => setInputvalue("")}
                />
              ) : (
                ""
              )
            }
          ></Input>
          <Img
            src="images/img_lock_gray_456_24x24.svg"
            className="h-[24px] md:ml-[0] ml-[280px] md:mt-[0] mt-[7px] w-[24px]"
            alt="lock One"
          />
          <Img
            src="images/img_settings_gray_456_24x24.svg"
            className="h-[24px] md:ml-[0] ml-[16px] md:mt-[0] mt-[7px] w-[24px]"
            alt="settings One"
          />
          <Img
            src="images/img_notification_gray_456.svg"
            className="h-[24px] md:ml-[0] ml-[16px] md:mt-[0] mt-[7px] w-[24px]"
            alt="notification"
          />
        </div>
        <div className="flex flex-col items-center justify-end ml-[undefinedpx] mr-[32px] mt-[auto] md:px-[20px] w-[78%] z-[1]">
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
            <List
              className="bg-white_A700 md:flex-1 flex-col gap-[20.5px] grid p-[20px] rounded-[15px] md:w-[100%] w-[32%]"
              orientation="vertical"
            >
              <div className="flex items-center justify-start my-[0] w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_754 text-left w-[auto]"
                    variant="body78"
                  >
                    Properties for Sale
                  </Text>
                  <div className="flex flex-row items-start justify-between mt-[5px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_991 text-left w-[auto]"
                      variant="body58"
                    >
                      24.214
                    </Text>
                    <div className="flex flex-row gap-[8px] items-center justify-between w-[21%]">
                      <Text
                        className="font-normal not-italic text-green_A701 text-right w-[auto]"
                        variant="body87"
                      >
                        1.01%
                      </Text>
                      <Img
                        src="images/img_arrowup_green_a701.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowup"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-normal mt-[8px] not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Tagert 2.000/month
                  </Text>
                  <Img
                    src="images/img_graphs.png"
                    className="h-[51px] sm:h-[auto] mt-[14px] object-cover md:w-[100%] w-[auto]"
                    alt="Graphs"
                  />
                </div>
              </div>
              <Line className="self-center h-[3px] bg-gray_111 w-[100%]" />
              <div className="flex items-center justify-start my-[0] w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_754 text-left w-[auto]"
                    variant="body78"
                  >
                    Properties for Rent
                  </Text>
                  <div className="flex flex-row items-start justify-between mt-[5px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_991 text-left w-[auto]"
                      variant="body58"
                    >
                      13.754
                    </Text>
                    <div className="flex flex-row gap-[8px] items-center justify-between w-[21%]">
                      <Text
                        className="font-normal not-italic text-red_509 text-right w-[auto]"
                        variant="body87"
                      >
                        1.01%
                      </Text>
                      <Img
                        src="images/img_location_red_509.svg"
                        className="h-[24px] w-[24px]"
                        alt="location"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-normal mt-[8px] not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Tagert 2.000/month
                  </Text>
                  <Img
                    src="images/img_graphs_yellow_910.png"
                    className="h-[51px] sm:h-[auto] mt-[14px] object-cover md:w-[100%] w-[auto]"
                    alt="Graphs One"
                  />
                </div>
              </div>
            </List>
            <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[15px] rounded-[15px] md:w-[100%] w-[66%]">
              <div className="flex flex-col items-start justify-start mb-[18px] md:w-[100%] w-[99%]">
                <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <Text
                    className="font-medium text-gray_912 text-left w-[auto]"
                    variant="body64"
                  >
                    Revenue
                  </Text>
                  <SelectBox
                    className="border-[1px] border-bluegray_60 border-solid font-normal leading-[normal] not-italic py-[8px] rounded-[8px] text-[12px] text-gray_754 text-left w-[auto]"
                    placeholderClassName="text-gray_754"
                    name="Date"
                    placeholder="2021 -2022"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_456.svg"
                        className="h-[20px] mr-[5px] w-[20px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[27px] w-[100%]">
                  <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_456 text-left w-[auto]"
                      variant="body87"
                    >
                      4M
                    </Text>
                    <Text
                      className="font-normal mt-[35px] not-italic text-gray_456 text-left w-[auto]"
                      variant="body87"
                    >
                      3M
                    </Text>
                    <Text
                      className="font-normal mt-[35px] not-italic text-gray_456 text-left w-[auto]"
                      variant="body87"
                    >
                      2M
                    </Text>
                    <Text
                      className="font-normal h-[15px] mt-[36px] not-italic text-gray_456 text-left w-[auto]"
                      variant="body87"
                    >
                      1M
                    </Text>
                    <Text
                      className="font-normal mt-[35px] not-italic text-gray_456 text-left w-[auto]"
                      variant="body87"
                    >
                      0
                    </Text>
                  </div>
                  <div className="h-[205px] relative md:w-[100%] w-[94%]">
                    <Img
                      src="images/img_line.svg"
                      className="h-[204px] m-[auto] w-[auto]"
                      alt="Line"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[4px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group431.png')",
                      }}
                    >
                      <div className="flex flex-col items-center justify-start mb-[143px] md:ml-[0] ml-[128px] md:w-[100%] w-[16%]">
                        <Button className="bg-gray_754 cursor-pointer font-semibold leading-[normal] min-w-[101px] py-[8px] rounded-[10px] text-[14px] text-center text-white_A700 w-[auto]">
                          $3.125.326
                        </Button>
                        <div className="bg-blue_A403 h-[15px] mt-[5px] outline outline-[3px] outline-white_A700 rounded-[7px] w-[15px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[35px] items-start justify-start max-w-[649px] ml-[auto] mt-[16px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Jan
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Feb
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Mar
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Apr
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    May
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Jun
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Jul
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Aug
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Sep
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Oct
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Nov
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_456 text-left w-[auto]"
                    variant="body87"
                  >
                    Dec
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start mt-[40px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
              <div className="flex flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[99%]">
                <Text
                  className="font-medium text-gray_912 text-left w-[auto]"
                  variant="body64"
                >
                  New Properties
                </Text>
                <Button className="bg-blue_A403 cursor-pointer font-normal leading-[normal] min-w-[144px] not-italic py-[11px] rounded-[10px] text-[14px] text-center text-white_A700 w-[auto]">
                  + Add Property
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[15px] w-[100%]">
                  <div className="flex flex-col gap-[17px] items-center justify-start mb-[7px] md:w-[100%] w-[98%]">
                    <div className="bg-bluegray_60 h-[120px] rounded-[10px] w-[100%]"></div>
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[97%]">
                      <Text
                        className="font-medium text-gray_991 text-left w-[auto]"
                        variant="body78"
                      >
                        Big Tree Apartments
                      </Text>
                      <Text
                        className="font-normal mt-[8px] not-italic text-gray_456 text-left w-[auto]"
                        variant="body87"
                      >
                        Soho, New York
                      </Text>
                      <div className="flex flex-row items-start justify-between mt-[19px] w-[100%]">
                        <div className="flex flex-row items-start justify-evenly w-[auto]">
                          <Img
                            src="images/img_offer_gray_456.svg"
                            className="h-[14px] w-[14px]"
                            alt="offer"
                          />
                          <Text
                            className="font-normal not-italic text-gray_456 text-left w-[auto]"
                            variant="body98"
                          >
                            Sell - Apartment
                          </Text>
                        </div>
                        <Text
                          className="font-semibold text-blue_A403 text-right w-[auto]"
                          variant="body78"
                        >
                          $1.240.000
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[15px] w-[100%]">
                  <div className="flex flex-col gap-[17px] items-center justify-start mb-[7px] md:w-[100%] w-[98%]">
                    <div className="bg-bluegray_60 h-[120px] rounded-[10px] w-[100%]"></div>
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[97%]">
                      <Text
                        className="font-medium text-gray_991 text-left w-[auto]"
                        variant="body78"
                      >
                        MayShower Realty Rental
                      </Text>
                      <Text
                        className="font-normal mt-[8px] not-italic text-gray_456 text-left w-[auto]"
                        variant="body87"
                      >
                        Soho, New York
                      </Text>
                      <div className="flex flex-row items-start justify-between mt-[19px] w-[100%]">
                        <div className="flex flex-row items-start justify-evenly w-[auto]">
                          <Img
                            src="images/img_offer_gray_456.svg"
                            className="h-[14px] w-[14px]"
                            alt="offer One"
                          />
                          <Text
                            className="font-normal not-italic text-gray_456 text-left w-[auto]"
                            variant="body98"
                          >
                            Sell - Apartment
                          </Text>
                        </div>
                        <Text
                          className="font-semibold text-blue_A403 text-right w-[auto]"
                          variant="body78"
                        >
                          $1.240.000
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[15px] w-[100%]">
                  <div className="flex flex-col gap-[17px] items-center justify-start mb-[7px] md:w-[100%] w-[98%]">
                    <div className="bg-bluegray_60 h-[120px] rounded-[10px] w-[100%]"></div>
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[97%]">
                      <Text
                        className="font-medium text-gray_991 text-left w-[auto]"
                        variant="body78"
                      >
                        GreyJade Apartment Rental
                      </Text>
                      <Text
                        className="font-normal mt-[8px] not-italic text-gray_456 text-left w-[auto]"
                        variant="body87"
                      >
                        Soho, New York
                      </Text>
                      <div className="flex flex-row items-start justify-between mt-[19px] w-[100%]">
                        <div className="flex flex-row items-start justify-evenly w-[auto]">
                          <Img
                            src="images/img_offer_gray_456.svg"
                            className="h-[14px] w-[14px]"
                            alt="offer Two"
                          />
                          <Text
                            className="font-normal not-italic text-gray_456 text-left w-[auto]"
                            variant="body98"
                          >
                            Sell - Apartment
                          </Text>
                        </div>
                        <Text
                          className="font-semibold text-blue_A403 text-right w-[auto]"
                          variant="body78"
                        >
                          $1.240.000
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[15px] w-[100%]">
                  <div className="flex flex-col gap-[17px] items-center justify-start mb-[7px] md:w-[100%] w-[98%]">
                    <div className="bg-bluegray_60 h-[120px] rounded-[10px] w-[100%]"></div>
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[97%]">
                      <Text
                        className="font-medium text-gray_991 text-left w-[auto]"
                        variant="body78"
                      >
                        Studio Plaza Apartments
                      </Text>
                      <Text
                        className="font-normal mt-[8px] not-italic text-gray_456 text-left w-[auto]"
                        variant="body87"
                      >
                        Soho, New York
                      </Text>
                      <div className="flex flex-row items-start justify-between mt-[19px] w-[100%]">
                        <div className="flex flex-row items-start justify-evenly w-[auto]">
                          <Img
                            src="images/img_offer_gray_456.svg"
                            className="h-[14px] w-[14px]"
                            alt="offer Three"
                          />
                          <Text
                            className="font-normal not-italic text-gray_456 text-left w-[auto]"
                            variant="body98"
                          >
                            Sell - Apartment
                          </Text>
                        </div>
                        <Text
                          className="font-semibold text-blue_A403 text-right w-[auto]"
                          variant="body78"
                        >
                          $1.240.000
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between mt-[32px] w-[100%]">
            <div className="bg-white_A700 flex md:flex-1 items-center justify-end p-[18px] rounded-[15px] md:w-[100%] w-[66%]">
              <div className="flex flex-col items-center justify-start mt-[4px] w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-medium text-gray_912 text-left w-[auto]"
                    variant="body64"
                  >
                    Transactions
                  </Text>
                  <Text
                    className="font-medium mt-[4px] text-blue_A403 text-right w-[auto]"
                    variant="body78"
                  >
                    Show All
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[23px] md:w-[100%] w-[97%]">
                  <Text
                    className="font-normal not-italic text-gray_754 text-left w-[auto]"
                    variant="body87"
                  >
                    Name
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[109px] not-italic text-gray_754 text-left w-[auto]"
                    variant="body87"
                  >
                    Agent Name
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[99px] not-italic text-gray_754 text-left w-[auto]"
                    variant="body87"
                  >
                    Address
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[170px] not-italic text-gray_754 text-left w-[auto]"
                    variant="body87"
                  >
                    Availability
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[56px] not-italic text-gray_754 text-left w-[auto]"
                    variant="body87"
                  >
                    Price
                  </Text>
                </div>
                <List
                  className="flex-col gap-[16px] grid items-center mt-[38px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start md:mt-[0] my-[2px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-gray_991 text-left w-[auto]"
                        variant="body87"
                      >
                        The Bungalow
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_456 text-left w-[auto]"
                        variant="body98"
                      >
                        Rent - Ware House
                      </Text>
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[53px] text-gray_991 text-left w-[auto]"
                      variant="body87"
                    >
                      Savannah Nguyen
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[66px] not-italic text-gray_754 text-left w-[auto]"
                      variant="body87"
                    >
                      Chinatown, New York
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[94px] not-italic text-gray_456 text-left w-[auto]"
                      variant="body87"
                    >
                      Jul 01, 2022
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[48px] text-gray_991 text-left w-[auto]"
                      variant="body87"
                    >
                      $1,200k
                    </Text>
                  </div>
                  <Line className="self-center h-[1px] bg-bluegray_60 w-[100%]" />
                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:mt-[0] my-[2px] sm:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-gray_991 text-left w-[auto]"
                        variant="body87"
                      >
                        Orchard House
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_456 text-left w-[auto]"
                        variant="body98"
                      >
                        Rent - House
                      </Text>
                    </div>
                    <Text
                      className="font-medium text-gray_991 text-left w-[auto]"
                      variant="body87"
                    >
                      Theresa Webb
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_754 text-left w-[auto]"
                      variant="body87"
                    >
                      Northwest, Washington D.C.
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_456 text-left w-[auto]"
                      variant="body87"
                    >
                      Jul 01, 2022
                    </Text>
                    <Text
                      className="font-medium text-gray_991 text-left w-[auto]"
                      variant="body87"
                    >
                      $1,200k
                    </Text>
                  </div>
                  <Line className="self-center h-[1px] bg-bluegray_60 w-[100%]" />
                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:mt-[0] my-[2px] sm:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-gray_991 text-left w-[auto]"
                        variant="body87"
                      >
                        The Coach House
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_456 text-left w-[auto]"
                        variant="body98"
                      >
                        Sale - Office
                      </Text>
                    </div>
                    <Text
                      className="font-medium text-gray_991 text-left w-[auto]"
                      variant="body87"
                    >
                      Brooklyn Simmons
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_754 text-left w-[auto]"
                      variant="body87"
                    >
                      Lower East Side, New York
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_456 text-left w-[auto]"
                      variant="body87"
                    >
                      Jul 01, 2022
                    </Text>
                    <Text
                      className="font-medium text-gray_991 text-left w-[auto]"
                      variant="body87"
                    >
                      $1,200k
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[17px] rounded-[15px] md:w-[100%] w-[33%]">
              <div className="flex flex-col gap-[21px] items-center justify-start mb-[12px] mt-[7px] w-[100%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-medium text-gray_991 text-left w-[auto]"
                    variant="body64"
                  >
                    Top Agent
                  </Text>
                  <Text
                    className="font-medium mt-[2px] text-blue_A403 text-right w-[auto]"
                    variant="body78"
                  >
                    Show All
                  </Text>
                </div>
                <List
                  className="flex-col gap-[18px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                    <div className="flex items-center justify-start w-[auto]">
                      <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                        <div className="bg-bluegray_60 h-[42px] rounded-[8px] w-[42px]"></div>
                        <div className="flex flex-col gap-[9px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_991 text-left tracking-[-0.28px] w-[auto]"
                            variant="body78"
                          >
                            Jane Cooper
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_456 text-left tracking-[-0.24px] w-[auto]"
                            variant="body87"
                          >
                            12 Sale, 30 Rent
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-medium text-blue_A403 text-right tracking-[-0.28px] w-[auto]"
                      variant="body78"
                    >
                      $2,500
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                    <div className="flex items-center justify-start w-[auto]">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                        <div className="bg-bluegray_60 h-[42px] rounded-[8px] w-[42px]"></div>
                        <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_991 text-left tracking-[-0.28px] w-[auto]"
                            variant="body78"
                          >
                            Robert Fox
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_456 text-left tracking-[-0.24px] w-[auto]"
                            variant="body87"
                          >
                            12 Sale, 30 Rent
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-medium text-blue_A403 text-right tracking-[-0.28px] w-[auto]"
                      variant="body78"
                    >
                      $1,200
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                    <div className="flex items-center justify-start w-[auto]">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                        <div className="bg-bluegray_60 h-[42px] rounded-[8px] w-[42px]"></div>
                        <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_991 text-left tracking-[-0.28px] w-[auto]"
                            variant="body78"
                          >
                            Jenny Wilson
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_456 text-left tracking-[-0.24px] w-[auto]"
                            variant="body87"
                          >
                            12 Sale, 30 Rent
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-medium text-blue_A403 text-right tracking-[-0.28px] w-[auto]"
                      variant="body78"
                    >
                      $3,600
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                    <div className="flex items-center justify-start w-[auto]">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                        <div className="bg-bluegray_60 h-[42px] rounded-[8px] w-[42px]"></div>
                        <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_991 text-left tracking-[-0.28px] w-[auto]"
                            variant="body78"
                          >
                            Kristin Watson
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_456 text-left tracking-[-0.24px] w-[auto]"
                            variant="body87"
                          >
                            12 Sale, 30 Rent
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-medium text-blue_A403 text-right tracking-[-0.28px] w-[auto]"
                      variant="body78"
                    >
                      $2,300
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
