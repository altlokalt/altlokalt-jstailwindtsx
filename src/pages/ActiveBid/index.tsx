import React from "react";

import { Text, Img, Button, Input, SelectBox, List } from "components";
import { CloseSVG } from "../../assets/images";

const ActiveBidPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_919 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[302px]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="bg-gray_55 border-[1px] border-gray_106 border-solid flex flex-col items-start justify-start py-[34px] w-[100%]">
              <div className="flex items-end justify-start md:ml-[0] ml-[34px] pl-[4px] py-[4px] md:w-[100%] w-[59%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-black_906 text-left tracking-[0.18px] w-[auto]"
                    variant="body64"
                  >
                    Kevin Cranel
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                    variant="body78"
                  >
                    @kecrane
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start mt-[50px] px-[18px] w-[100%]">
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_922 text-left tracking-[0.12px] w-[auto]"
                    variant="body87"
                  >
                    GENERAL
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[2px] md:w-[100%] w-[55%]">
                        <Img
                          src="images/img_clock_gray_509.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock"
                        />
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Dashboard
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[46%]">
                        <Img
                          src="images/img_car.svg"
                          className="h-[24px] w-[24px]"
                          alt="car"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Message
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[44%]">
                        <Img
                          src="images/img_settings.svg"
                          className="h-[24px] w-[24px]"
                          alt="settings"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Settings
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_922 text-left tracking-[0.12px] w-[auto]"
                    variant="body87"
                  >
                    MARKETPLACE
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[2px] md:w-[100%] w-[42%]">
                        <Img
                          src="images/img_user_gray_509.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Market
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_900_5f flex font-outfit items-start justify-start p-[10px] rounded-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[51%]">
                        <Img
                          src="images/img_camera_gray_920.svg"
                          className="h-[24px] w-[24px]"
                          alt="camera"
                        />
                        <Text
                          className="font-medium text-gray_920 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Active Bid
                        </Text>
                      </div>
                    </div>
                    <div className="flex font-urbanist items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[39%]">
                        <Img
                          src="images/img_clock_gray_509_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Saved
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_922 text-left tracking-[0.12px] w-[auto]"
                    variant="body87"
                  >
                    MY PROFILE
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[3px] md:w-[100%] w-[51%]">
                        <Img
                          src="images/img_user_gray_509_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="user One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Collection
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[4px] md:w-[100%] w-[39%]">
                        <Img
                          src="images/img_computer_gray_509.svg"
                          className="h-[24px] w-[24px]"
                          alt="computer"
                        />
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Wallet
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] pr-[4px] md:w-[100%] w-[41%]">
                        <Img
                          src="images/img_clock_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock Two"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          History
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-urbanist h-[258px] md:h-[294px] mb-[2px] md:ml-[0] ml-[34px] mt-[49px] relative w-[78%]">
                <div className="absolute bg-gray_920 bottom-[0] h-[233px] inset-x-[0] mx-[auto] rounded-[15px] w-[234px]"></div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[91%]">
                  <Button className="bg-white_A700 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] shadow-bs20 w-[50px]">
                    <Img
                      src="images/img_question.svg"
                      className="h-[24px]"
                      alt="question"
                    />
                  </Button>
                  <Text
                    className="font-normal mt-[16px] not-italic text-left text-white_A700 tracking-[0.18px] w-[auto]"
                    variant="body64"
                  >
                    Help Center
                  </Text>
                  <div className="flex flex-col gap-[29px] items-center justify-start mt-[10px] w-[100%]">
                    <Text
                      className="font-normal leading-[25.20px] not-italic text-center text-gray_406 tracking-[0.14px]"
                      variant="body78"
                    >
                      Having trouble in Enefti?
                      <br />
                      Please contact us for more question
                    </Text>
                    <Button className="bg-white_A700 cursor-pointer font-normal min-w-[206px] not-italic py-[11px] rounded-[10px] text-[14px] text-center text-gray_920 tracking-[0.14px] w-[auto]">
                      Go To Help Center
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_106 p-[34px] sm:px-[20px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_509 text-gray_509 text-left tracking-[0.14px] w-[100%]"
              wrapClassName="bg-white_A700 border-[1px] border-gray_310 border-solid flex md:mt-[0] md:w-[100%] my-[2px] pl-[16px] pr-[35px] py-[16px] rounded-[15px] sm:mt-[0] sm:pr-[20px] sm:w-[100%] w-[45%]"
              name="SearchInput"
              placeholder="Search items, collections, and users"
              prefix={
                <Img
                  src="images/img_search_gray_509.svg"
                  className="cursor-pointer mr-[16px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#93989a"
                    className="cursor-pointer ml-[10px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <div className="flex md:flex-1 flex-row font-urbanist gap-[30px] items-center justify-center md:mt-[0] my-[2px] md:w-[100%] w-[32%]">
              <Button
                className="flex items-center justify-center outline outline-[0.5px] outline-gray_106 pl-[16px] pr-[20px] py-[16px] rounded-[10px] text-center"
                leftIcon={
                  <Img
                    src="images/img_sort.svg"
                    className="mr-[10px] text-center"
                    alt="sort"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-black_906 text-left tracking-[0.16px]">
                  3,421 ETH
                </div>
              </Button>
              <Button className="flex h-[52px] items-center justify-center outline outline-[0.5px] outline-gray_106 p-[14px] rounded-[50%] w-[52px]">
                <Img
                  src="images/img_lock.svg"
                  className="h-[24px]"
                  alt="lock"
                />
              </Button>
              <SelectBox
                className="sm:w-[100%] w-[27%]"
                placeholderClassName=""
                name="user Two"
                placeholder=""
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_907.svg"
                    className="h-[24px] mr-[0] w-[24px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
            </div>
          </div>
          <div className="flex flex-col font-urbanist items-start justify-start md:w-[100%] w-[94%]">
            <Text
              className="font-normal not-italic text-left text-white_A700 tracking-[0.34px] w-[auto]"
              variant="body32"
            >
              Active Bid
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[22px] w-[100%]">
              <Button
                className="flex items-center justify-center outline outline-[0.5px] outline-gray_106 pl-[16px] pr-[17px] py-[16px] rounded-[14px] text-center"
                leftIcon={
                  <Img
                    src="images/img_clock_1.svg"
                    className="mr-[10px] text-center"
                    alt="clock"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                  On Going
                </div>
              </Button>
              <Button
                className="flex items-center justify-center ml-[24px] outline outline-[0.5px] outline-gray_106 p-[16px] rounded-[14px] sm:ml-[0] text-center"
                leftIcon={
                  <Img
                    src="images/img_user_white_a700.svg"
                    className="mr-[10px] text-center"
                    alt="user"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                  Category
                </div>
              </Button>
              <Button
                className="flex items-center justify-center ml-[24px] outline outline-[0.5px] outline-gray_106 pl-[16px] pr-[17px] py-[16px] rounded-[14px] sm:ml-[0] text-center"
                leftIcon={
                  <Img
                    src="images/img_note2.svg"
                    className="mr-[10px] text-center"
                    alt="note-2"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                  Collection
                </div>
              </Button>
              <Button
                className="flex items-center justify-center ml-[24px] outline outline-[0.5px] outline-gray_106 pl-[16px] pr-[17px] py-[16px] rounded-[14px] sm:ml-[0] text-center"
                leftIcon={
                  <Img
                    src="images/img_clock_white_a700_24x24.svg"
                    className="mr-[10px] text-center"
                    alt="clock"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                  Price Range
                </div>
              </Button>
              <Button
                className="flex items-center justify-center ml-[288px] outline outline-[0.5px] outline-gray_106 pl-[16px] pr-[17px] py-[16px] rounded-[14px] sm:ml-[0] text-center"
                leftIcon={
                  <Img
                    src="images/img_menu_white_a700.svg"
                    className="mr-[10px] text-center"
                    alt="menu"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                  Filter & Sort
                </div>
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[30px] w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col gap-[122px] md:gap-[40px] items-end justify-start p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                <div className="flex items-center justify-start md:w-[100%] w-[51%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                      2h 4m 32s
                    </Button>
                    <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                      <Img
                        src="images/img_clock_white_a700_30x30.svg"
                        className=""
                        alt="clock Three"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start mb-[4px] w-[100%]">
                  <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Dayco Serpentine Belt
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                      variant="body87"
                    >
                      By Marvin McKinney
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                        variant="body98"
                      >
                        Your Bid
                      </Text>
                      <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-[16px] w-[16px]"
                          alt="sort"
                        />
                        <Text
                          className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                          variant="body78"
                        >
                          18,99 ETH
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_920 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                      Place a Bid
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[122px] md:gap-[40px] items-end justify-start p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                <div className="flex items-center justify-start md:w-[100%] w-[51%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                      2h 4m 32s
                    </Button>
                    <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                      <Img
                        src="images/img_clock_white_a700_30x30.svg"
                        className=""
                        alt="clock Four"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start mb-[4px] w-[100%]">
                  <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Bosch Spark Plug
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                      variant="body87"
                    >
                      By Guy Hawkins
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                        variant="body98"
                      >
                        Your Bid
                      </Text>
                      <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-[16px] w-[16px]"
                          alt="sort One"
                        />
                        <Text
                          className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                          variant="body78"
                        >
                          8,99 ETH
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_920 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                      Place a Bid
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[122px] md:gap-[40px] items-end justify-start p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                <div className="flex items-center justify-start md:w-[100%] w-[51%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                      2h 4m 32s
                    </Button>
                    <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                      <Img
                        src="images/img_clock_white_a700_30x30.svg"
                        className=""
                        alt="clock Five"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start mb-[4px] w-[100%]">
                  <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Valvoline Engine Oil
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                      variant="body87"
                    >
                      By Albert Flores
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                        variant="body98"
                      >
                        Your Bid
                      </Text>
                      <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-[16px] w-[16px]"
                          alt="sort Two"
                        />
                        <Text
                          className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                          variant="body78"
                        >
                          51,23 ETH
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_920 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                      Place a Bid
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[122px] md:gap-[40px] items-end justify-start p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                <div className="flex items-center justify-start md:w-[100%] w-[51%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                      2h 4m 32s
                    </Button>
                    <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                      <Img
                        src="images/img_clock_white_a700_30x30.svg"
                        className=""
                        alt="clock Six"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start mb-[4px] w-[100%]">
                  <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Fram Oil Filter
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                      variant="body87"
                    >
                      By Jerome Bell
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                        variant="body98"
                      >
                        Your Bid
                      </Text>
                      <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-[16px] w-[16px]"
                          alt="sort Three"
                        />
                        <Text
                          className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                          variant="body78"
                        >
                          25,00 ETH
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_920 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                      Place a Bid
                    </Button>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveBidPage;
