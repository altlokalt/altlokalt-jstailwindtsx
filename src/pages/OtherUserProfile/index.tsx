import React from "react";

import { Text, Img, Button, Input, SelectBox, Line } from "components";
import { CloseSVG } from "../../assets/images";

const OtherUserProfilePage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");
  const [inputvalue1, setInputvalue1] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_919 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-[20px] md:gap-[20px] items-center mx-[auto] w-[100%]">
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
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[3px] md:w-[100%] w-[51%]">
                        <Img
                          src="images/img_mail.svg"
                          className="h-[24px] w-[24px]"
                          alt="mail"
                        />
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Active Bid
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
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
              <div className="font-urbanist h-[258px] md:h-[292px] md:ml-[0] ml-[34px] mt-[49px] relative w-[78%]">
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
        <div className="flex flex-1 flex-col gap-[176px] md:gap-[40px] items-center justify-start md:px-[20px] w-[100%]">
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
          <div className="flex md:flex-col flex-row font-urbanist gap-[34px] items-start justify-between md:w-[100%] w-[95%]">
            <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-center mb-[272px] p-[18px] rounded-[15px] shadow-bs21 md:w-[100%] w-[23%]">
              <div className="flex items-center justify-start mt-[132px] md:w-[100%] w-[87%]">
                <div className="flex flex-col gap-[5px] items-center justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_906 text-left tracking-[0.20px] w-[auto]"
                    variant="body60"
                  >
                    Eleanor Pena
                  </Text>
                  <div className="flex flex-row gap-[9px] items-start justify-between w-[100%]">
                    <Text
                      className="font-normal mt-[2px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                      variant="body87"
                    >
                      0x864784f44ajf84bskw4w...
                    </Text>
                    <Img
                      src="images/img_copy.svg"
                      className="h-[18px] w-[18px]"
                      alt="copy"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-[8px] w-[100%]">
                <Text
                  className="font-normal leading-[25.20px] not-italic text-center text-gray_509 tracking-[0.14px] w-[100%]"
                  variant="body78"
                >
                  Dedicated to create amazing for art exhibition information
                  please check link below:
                </Text>
                <div className="flex flex-row gap-[6px] items-center justify-center mt-[21px] py-[2px] md:w-[100%] w-[45%]">
                  <Img
                    src="images/img_globe_black_906.svg"
                    className="h-[18px] w-[18px]"
                    alt="globe"
                  />
                  <Text
                    className="font-normal not-italic text-black_906 text-left tracking-[0.12px] w-[auto]"
                    variant="body87"
                  >
                    artistictea.io
                  </Text>
                </div>
                <div className="flex flex-row gap-[12px] items-center justify-between mt-[22px] md:w-[100%] w-[87%]">
                  <Button className="bg-gray_920 cursor-pointer font-normal min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                    Follow
                  </Button>
                  <Button className="flex h-[32px] items-center justify-center outline outline-[0.5px] outline-gray_106 p-[7px] rounded-[8px] w-[32px]">
                    <Img
                      src="images/img_arrowup.svg"
                      className="h-[18px]"
                      alt="arrowup"
                    />
                  </Button>
                  <Button className="flex h-[32px] items-center justify-center outline outline-[0.5px] outline-gray_106 p-[7px] rounded-[8px] w-[32px]">
                    <Img
                      src="images/img_camera_black_906.svg"
                      className="h-[18px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <Line className="bg-gray_106 h-[1px] mt-[24px] w-[100%]" />
                <Text
                  className="font-normal mt-[29px] not-italic text-center text-gray_509 tracking-[0.14px] w-[auto]"
                  variant="body78"
                >
                  Joined April 2021
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[34px] items-center justify-start md:mt-[0] mt-[118px] md:w-[100%] w-[75%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex sm:flex-1 flex-row gap-[12px] items-center justify-between sm:w-[100%] w-[44%]">
                  <Button
                    className="bg-black_906 flex items-center justify-center pl-[12px] pr-[13px] py-[9px] rounded-[18px] text-center"
                    leftIcon={
                      <Img
                        src="images/img_grid.svg"
                        className="mr-[10px] text-center"
                        alt="grid"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700 tracking-[0.14px]">
                      Created
                    </div>
                  </Button>
                  <div className="flex flex-row gap-[10px] items-center justify-center p-[8px] w-[auto]">
                    <Img
                      src="images/img_folder.svg"
                      className="h-[20px] ml-[4px] w-[20px]"
                      alt="folder"
                    />
                    <Text
                      className="font-normal mr-[4px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      Collection
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10px] items-center justify-center p-[7px] w-[auto]">
                    <Img
                      src="images/img_clock_24x24.svg"
                      className="h-[20px] ml-[4px] w-[20px]"
                      alt="clock Three"
                    />
                    <Text
                      className="font-normal mr-[5px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      History
                    </Text>
                  </div>
                </div>
                <Input
                  value={inputvalue1}
                  onChange={(e) => setInputvalue1(e?.target?.value)}
                  className="flex-1 font-normal not-italic p-[0] text-[12px] placeholder:text-gray_509 text-gray_509 text-left tracking-[0.12px] w-[100%]"
                  wrapClassName="border-[1px] border-gray_310 border-solid flex pl-[14px] pr-[35px] py-[10px] rounded-[8px] sm:pr-[20px] sm:w-[100%] w-[26%]"
                  name="SearchInput One"
                  placeholder="Search by name"
                  prefix={
                    <Img
                      src="images/img_search_gray_509.svg"
                      className="cursor-pointer mr-[14px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue1?.length > 0 ? (
                      <CloseSVG
                        color="#93989a"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue1("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <div className="gap-[19px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[122px] md:gap-[40px] items-end justify-start p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[51%]">
                      <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                        <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                          2h 4m 32s
                        </Button>
                        <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                          <Img
                            src="images/img_favorite.svg"
                            className=""
                            alt="favorite"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px] items-start justify-start mb-[4px] w-[100%]">
                      <div className="flex flex-col items-start justify-start pt-[2px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                          variant="body69"
                        >
                          Person Melirik Kesamping
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                          variant="body87"
                        >
                          By Eleanor Pena
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                            variant="body98"
                          >
                            Current Bid
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
                              2,42 ETH
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
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                          variant="body69"
                        >
                          Building Reflection Xd
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                          variant="body87"
                        >
                          By Eleanor Pena
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                            variant="body98"
                          >
                            Current Bid
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
                              52,12 ETH
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
                        <Text
                          className="bg-gray_900_26 font-normal h-[28px] not-italic pl-[10px] sm:pr-[20px] pr-[30px] py-[6px] rounded-[14px] text-left text-white_A700 tracking-[0.12px] w-[75px]"
                          variant="body87"
                        >
                          Ended
                        </Text>
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
                      <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                          variant="body69"
                        >
                          Natural Atomic Circle
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                          variant="body87"
                        >
                          By Eleanor Pena
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                            variant="body98"
                          >
                            Fixed Price
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
                              22,52 ETH
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
                        <Text
                          className="bg-gray_900_26 font-normal h-[28px] not-italic pl-[10px] sm:pr-[20px] pr-[30px] py-[6px] rounded-[14px] text-left text-white_A700 tracking-[0.12px] w-[75px]"
                          variant="body87"
                        >
                          Ended
                        </Text>
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
                          Uowaw Your Face is Good
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                          variant="body87"
                        >
                          By Eleanor Pena
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                            variant="body98"
                          >
                            Fixed Price
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
                              1,32 ETH
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
                            alt="clock Seven"
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
                          One Blooded Hand
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                          variant="body87"
                        >
                          By Eleanor Pena
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                            variant="body98"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                            <Img
                              src="images/img_sort.svg"
                              className="h-[16px] w-[16px]"
                              alt="sort Four"
                            />
                            <Text
                              className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                              variant="body78"
                            >
                              5,52 ETH
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
                            src="images/img_favorite.svg"
                            className=""
                            alt="favorite One"
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
                          Oldtown Artistic Alley
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                          variant="body87"
                        >
                          By Eleanor Pena
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_509 text-left tracking-[0.10px] w-[auto]"
                            variant="body98"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                            <Img
                              src="images/img_sort.svg"
                              className="h-[16px] w-[16px]"
                              alt="sort Five"
                            />
                            <Text
                              className="font-normal not-italic text-black_906 text-left tracking-[0.14px] w-[auto]"
                              variant="body78"
                            >
                              1,224 ETH
                            </Text>
                          </div>
                        </div>
                        <Button className="bg-gray_920 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                          Place a Bid
                        </Button>
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

export default OtherUserProfilePage;
