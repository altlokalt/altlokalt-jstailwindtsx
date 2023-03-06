import React from "react";

import { Text, Img, Button, Input, List, SelectBox } from "components";
import { CloseSVG } from "../../assets/images";

const HomeDarkPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_976 flex font-poppins items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between overflow-auto w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[290px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-gray_976 flex flex-col gap-[119px] md:gap-[40px] h-[1024px] md:h-[auto] items-center justify-between sm:px-[20px] px-[24px] py-[32px] w-[290px]">
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex flex-row gap-[24px] items-center justify-start py-[8px] w-[100%]">
                    <div className="flex h-[40px] items-center justify-start w-[40px]">
                      <div className="bg-red_434 h-[40px] rotate-[180deg] rounded-bl-[50%] rounded-br-[3px] rounded-tl-[3px] rounded-tr-[50%] w-[40px]"></div>
                    </div>
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Revoile.io
                    </Text>
                  </div>
                  <div className="md:h-[645px] h-[650px] relative w-[100%]">
                    <div className="absolute flex flex-col gap-[40px] h-[max-content] inset-[0] items-center justify-start m-[auto] w-[242px]">
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body64"
                        >
                          Menu
                        </Text>
                        <div className="flex flex-col gap-[16px] h-[239px] md:h-[auto] items-start justify-start w-[100%]">
                          <div className="bg-red_434 flex flex-row gap-[16px] h-[48px] md:h-[auto] items-center justify-start px-[16px] py-[10px] rounded-[10px] w-[100%]">
                            <Img
                              src="images/img_home_white_a700_24x24.svg"
                              className="h-[24px] w-[24px]"
                              alt="home"
                            />
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body69"
                            >
                              Home
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[24px] h-[48px] md:h-[auto] items-center justify-between px-[16px] py-[10px] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_calculator_white_a700.svg"
                                className="h-[24px] w-[24px]"
                                alt="calculator"
                              />
                              <Text
                                className="font-medium text-left text-white_A700_b2 w-[auto]"
                                variant="body69"
                              >
                                My Game
                              </Text>
                            </div>
                            <Text
                              className="bg-red_614 flex font-normal h-[24px] items-center justify-center not-italic rounded-[50%] text-center text-white_A700 w-[24px]"
                              variant="body87"
                            >
                              5
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[24px] h-[48px] md:h-[auto] items-center justify-between px-[16px] py-[10px] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_lock_white_a700_24x24.svg"
                                className="h-[24px] w-[24px]"
                                alt="lock"
                              />
                              <Text
                                className="font-medium text-left text-white_A700_b2 w-[auto]"
                                variant="body69"
                              >
                                Store
                              </Text>
                            </div>
                            <Text
                              className="bg-red_614 flex font-normal h-[24px] items-center justify-center not-italic rounded-[50%] text-center text-white_A700 w-[24px]"
                              variant="body87"
                            >
                              4
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[24px] h-[47px] md:h-[auto] items-center justify-between px-[16px] py-[10px] w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_alarm_red_434.svg"
                                className="h-[24px] w-[24px]"
                                alt="alarm"
                              />
                              <Text
                                className="font-medium text-left text-white_A700_b2 w-[auto]"
                                variant="body69"
                              >
                                Group
                              </Text>
                            </div>
                            <Text
                              className="bg-red_614 flex font-normal h-[24px] items-center justify-center not-italic rounded-[50%] text-center text-white_A700 w-[24px]"
                              variant="body87"
                            >
                              3
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                          <Text
                            className="font-medium text-left text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            Friend List (150)
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-red_434 w-[auto]"
                            variant="body69"
                          >
                            See All
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[100%]">
                          <Button className="bg-red_434 cursor-pointer flex-1 font-normal not-italic px-[8px] py-[10px] rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0] text-[14px] text-center text-white_A700 w-[100%]">
                            Active (100)
                          </Button>
                          <Button className="bg-gray_1010 cursor-pointer flex-1 font-normal not-italic px-[8px] py-[10px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] text-[14px] text-center text-white_A700_7f w-[100%]">
                            Inactive (50)
                          </Button>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[16px] h-[48px] md:h-[auto] items-center justify-start px-[16px] py-[10px] w-[100%]">
                            <div className="md:h-[32px] h-[34px] relative w-[16%]">
                              <div className="absolute bg-bluegray_101 h-[32px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[32px]"></div>
                              <div className="absolute bg-green_A702 bottom-[0] h-[12px] right-[0] rounded-[50%] w-[12px]"></div>
                            </div>
                            <Text
                              className="font-medium text-left text-white_A700_b2 w-[auto]"
                              variant="body69"
                            >
                              Shanty Aureliel
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] h-[48px] md:h-[auto] items-center justify-start px-[16px] py-[10px] w-[100%]">
                            <div className="md:h-[32px] h-[34px] relative w-[16%]">
                              <div className="absolute bg-bluegray_101 h-[32px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[32px]"></div>
                              <div className="absolute bg-green_A702 bottom-[0] h-[12px] right-[0] rounded-[50%] w-[12px]"></div>
                            </div>
                            <Text
                              className="font-medium text-left text-white_A700_b2 w-[auto]"
                              variant="body69"
                            >
                              Marco Marie
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] h-[48px] md:h-[auto] items-center justify-start px-[16px] py-[10px] w-[100%]">
                            <div className="md:h-[32px] h-[34px] relative w-[16%]">
                              <div className="absolute bg-bluegray_101 h-[32px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[32px]"></div>
                              <div className="absolute bg-green_A702 bottom-[0] h-[12px] right-[0] rounded-[50%] w-[12px]"></div>
                            </div>
                            <Text
                              className="font-medium text-left text-white_A700_b2 w-[auto]"
                              variant="body69"
                            >
                              Mathlide Redo
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] h-[48px] md:h-[auto] items-center justify-start px-[16px] py-[10px] w-[100%]">
                            <div className="md:h-[32px] h-[34px] relative w-[16%]">
                              <div className="absolute bg-bluegray_101 h-[32px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[32px]"></div>
                              <div className="absolute bg-green_A702 bottom-[0] h-[12px] right-[0] rounded-[50%] w-[12px]"></div>
                            </div>
                            <Text
                              className="font-medium text-left text-white_A700_b2 w-[auto]"
                              variant="body69"
                            >
                              Sarah Raulieane
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowleft_white_a700_40x40.svg"
                      className="absolute h-[40px] right-[0] top-[0] w-[40px]"
                      alt="arrowleft"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[16px] h-[48px] md:h-[auto] items-center justify-start px-[16px] py-[10px] w-[100%]">
                    <Img
                      src="images/img_settings_2.svg"
                      className="h-[24px] w-[24px]"
                      alt="settings"
                    />
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Settings
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] h-[48px] md:h-[auto] items-center justify-start px-[16px] py-[10px] w-[100%]">
                    <Img
                      src="images/img_logout.svg"
                      className="h-[24px] w-[24px]"
                      alt="Logout"
                    />
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Log Out
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-[31px] justify-start md:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[8px] justify-start w-[100%]">
              <div className="bg-gray_976 flex md:flex-col flex-row md:gap-[40px] h-[104px] md:h-[auto] items-center justify-between max-w-[1150px] mr-[394px] pb-[24px] pt-[40px] sm:px-[20px] px-[32px] w-[100%]">
                <div className="flex flex-1 md:flex-col flex-row gap-[12px] items-center justify-center max-w-[840px] w-[100%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="flex-1 font-normal not-italic p-[0] text-[18px] text-left placeholder:text-white_A700_99 text-white_A700_99 w-[100%]"
                    wrapClassName="bg-gray_1010 flex gap-[24px] px-[24px] py-[12px] rounded-[10px] sm:px-[20px] w-[100%]"
                    name="Search"
                    placeholder="Search"
                    prefix={
                      <Img
                        src="images/img_search_32x32.svg"
                        className="cursor-pointer mr-[24px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#99ffffff"
                          className="cursor-pointer ml-[10px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                  ></Input>
                  <List
                    className="sm:flex-col flex-row grid grid-cols-4 justify-start w-[auto]"
                    orientation="horizontal"
                  >
                    <div className="flex items-center justify-end p-[12px] w-[100%]">
                      <div className="md:h-[32px] h-[39px] relative w-[88%]">
                        <Img
                          src="images/img_cart_white_a700.svg"
                          className="absolute bottom-[0] h-[32px] left-[0] w-[32px]"
                          alt="cart"
                        />
                        <div className="absolute bg-red_A700 h-[18px] p-[3.36px] right-[0] rounded-[50%] top-[0] w-[18px]">
                          <div className="absolute bg-red_A700 h-[18px] inset-[0] m-[auto] p-[3.36px] rounded-[50%] w-[18px]"></div>
                          <Text
                            className="absolute font-normal h-[100%] inset-[0] justify-center m-[auto] not-italic text-center text-white_A700 w-[max-content]"
                            variant="body87"
                          >
                            12
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start p-[12px] w-[100%]">
                      <div className="md:h-[32px] h-[38px] relative w-[86%]">
                        <Img
                          src="images/img_lock_white_a700_32x32.svg"
                          className="absolute bottom-[0] h-[32px] left-[0] w-[32px]"
                          alt="lock One"
                        />
                        <div className="absolute flex h-[18px] items-center justify-start right-[0] top-[0] w-[18px]">
                          <div className="bg-red_A700 h-[18px] p-[3.36px] relative rounded-[50%] w-[18px]">
                            <div className="absolute bg-red_A700 h-[18px] inset-[0] m-[auto] p-[3.36px] rounded-[50%] w-[18px]"></div>
                            <Text
                              className="absolute font-normal h-[100%] inset-[0] justify-center m-[auto] not-italic text-center text-white_A700 w-[max-content]"
                              variant="body87"
                            >
                              12
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end p-[13px] w-[100%]">
                      <div className="md:h-[32px] h-[37px] relative w-[37px]">
                        <Img
                          src="images/img_car_white_a700_32x32.svg"
                          className="absolute bottom-[0] h-[32px] left-[0] w-[32px]"
                          alt="car"
                        />
                        <div className="absolute flex h-[18px] items-center justify-start right-[0] top-[0] w-[18px]">
                          <div className="bg-red_A700 h-[18px] p-[3.36px] relative rounded-[50%] w-[18px]">
                            <div className="absolute bg-red_A700 h-[18px] inset-[0] m-[auto] p-[3.36px] rounded-[50%] w-[18px]"></div>
                            <Text
                              className="absolute font-normal h-[100%] inset-[0] justify-center m-[auto] not-italic text-center text-white_A700 w-[max-content]"
                              variant="body87"
                            >
                              10
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end p-[12px] w-[100%]">
                      <div className="md:h-[32px] h-[39px] relative w-[91%]">
                        <Img
                          src="images/img_computer_white_a700_32x32.svg"
                          className="absolute bottom-[0] h-[32px] left-[0] w-[32px]"
                          alt="computer"
                        />
                        <div className="absolute bg-red_A700 h-[18px] p-[3.36px] right-[0] rounded-[50%] top-[0] w-[18px]">
                          <div className="absolute bg-red_A700 h-[18px] inset-[0] m-[auto] p-[3.36px] rounded-[50%] w-[18px]"></div>
                          <Text
                            className="absolute font-normal h-[100%] inset-[0] justify-center m-[auto] not-italic text-center text-white_A700 w-[max-content]"
                            variant="body87"
                          >
                            10
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex flex-row gap-[13px] items-center justify-center w-[auto]">
                  <div className="bg-bluegray_101 h-[40px] rounded-[50%] w-[40px]"></div>
                  <SelectBox
                    className="font-normal not-italic pt-[2px] text-[16px] text-left text-white_A700 sm:w-[100%] w-[76%]"
                    placeholderClassName="text-white_A700"
                    name="Group1636"
                    placeholder="Robert Anthony"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_frame_32x26.svg"
                        className="h-[24px] mr-[0] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[16px] grid md:grid-cols-1 grid-cols-2 justify-start md:ml-[0] ml-[32px] md:w-[100%] w-[auto]"
                orientation="horizontal"
              >
                <div className="bg-gradient73  flex items-center justify-end p-[24px] sm:px-[20px] rounded-[20px] w-[100%]">
                  <div className="flex flex-row gap-[24px] items-end justify-between max-w-[700px] mt-[183px] p-[8px] w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start">
                      <Text
                        className="bg-blue_A404 font-normal justify-center not-italic sm:px-[20px] px-[24px] py-[4px] rounded-[13px] text-left text-white_A700 w-[auto]"
                        variant="body87"
                      >
                        Sport
                      </Text>
                      <Text
                        className="capitalize font-bold text-left text-white_A700 w-[auto]"
                        variant="body35"
                      >
                        Sonic Racing
                      </Text>
                    </div>
                    <Button className="bg-red_434 cursor-pointer font-medium min-w-[111px] px-[16px] py-[8px] rounded-[10px] text-[14px] text-center text-white_A700 w-[auto]">
                      Check Now
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient73  flex items-center justify-end p-[24px] sm:px-[20px] rounded-[20px] w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[24px] items-end justify-between max-w-[700px] mt-[183px] p-[8px] w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start">
                      <Text
                        className="bg-blue_A404 font-normal justify-center not-italic sm:px-[20px] px-[24px] py-[4px] rounded-[13px] text-left text-white_A700 w-[auto]"
                        variant="body87"
                      >
                        Strategy
                      </Text>
                      <Text
                        className="capitalize font-bold text-left text-white_A700 w-[auto]"
                        variant="body35"
                      >
                        Cut The Rope Remastered
                      </Text>
                    </div>
                    <Button className="bg-red_434 cursor-pointer font-medium min-w-[111px] px-[16px] py-[8px] rounded-[10px] text-[14px] text-center text-white_A700 w-[auto]">
                      Check Now
                    </Button>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-[32px] items-start justify-start md:ml-[0] ml-[32px] md:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[16px] items-start justify-start max-w-[1220px] w-[100%]">
                <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    variant="body48"
                  >
                    Games Genres
                  </Text>
                  <Text
                    className="font-medium text-left text-red_434 w-[auto]"
                    variant="body69"
                  >
                    View All
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start w-[100%]">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[16px] grid grid-cols-2 md:w-[100%] w-[22%]"
                    orientation="horizontal"
                  >
                    <div className="bg-red_400_26 border-[1px] border-red_434 border-solid flex flex-row gap-[12px] items-center justify-center pl-[12px] sm:pr-[20px] md:pr-[40px] pr-[48px] py-[8px] rounded-[10px] w-[auto]">
                      <div className="bg-bluegray_101 h-[32px] rounded-[4px] w-[32px]"></div>
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        All
                      </Text>
                    </div>
                    <div className="border-[1px] border-gray_755 border-solid flex flex-row gap-[12px] items-center justify-start pl-[12px] pr-[16px] py-[8px] rounded-[10px] w-[auto]">
                      <div className="bg-bluegray_101 h-[32px] rounded-[4px] w-[32px]"></div>
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        Action
                      </Text>
                    </div>
                  </List>
                  <div className="border-[1px] border-gray_755 border-solid flex flex-row gap-[12px] items-center justify-start pl-[12px] pr-[16px] py-[8px] rounded-[10px] w-[auto]">
                    <div className="bg-bluegray_101 h-[32px] rounded-[4px] w-[32px]"></div>
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Simulation
                    </Text>
                  </div>
                  <div className="border-[1px] border-gray_755 border-solid flex flex-row gap-[12px] items-center justify-start pl-[12px] pr-[16px] py-[8px] rounded-[10px] w-[auto]">
                    <div className="bg-bluegray_101 h-[32px] rounded-[4px] w-[32px]"></div>
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Strategy
                    </Text>
                  </div>
                  <div className="border-[1px] border-gray_755 border-solid flex flex-row gap-[12px] items-center justify-start pl-[12px] pr-[16px] py-[8px] rounded-[10px] w-[auto]">
                    <div className="bg-bluegray_101 h-[32px] rounded-[4px] w-[32px]"></div>
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Sport
                    </Text>
                  </div>
                  <div className="border-[1px] border-gray_755 border-solid flex flex-row gap-[12px] items-center justify-start pl-[12px] pr-[16px] py-[8px] rounded-[10px] w-[auto]">
                    <div className="bg-bluegray_101 h-[32px] rounded-[4px] w-[32px]"></div>
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Adventure
                    </Text>
                  </div>
                  <div className="border-[1px] border-gray_755 border-solid flex flex-row gap-[12px] items-center justify-start pl-[12px] pr-[16px] py-[8px] rounded-[10px] w-[auto]">
                    <div className="bg-bluegray_101 h-[32px] rounded-[4px] w-[32px]"></div>
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      MMO
                    </Text>
                  </div>
                  <div className="border-[1px] border-solid border-white_A700 flex flex-row gap-[12px] items-center justify-start pl-[12px] pr-[16px] py-[8px] rounded-[10px] w-[auto]">
                    <div className="bg-bluegray_101 h-[32px] rounded-[4px] w-[32px]"></div>
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Role-Playing
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[40px] grid md:grid-cols-1 grid-cols-2 justify-start max-w-[1086px] w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_101 h-[64px] rounded-[10px] w-[64px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body64"
                        >
                          Gear Club Stradale
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f w-[auto]"
                          variant="body69"
                        >
                          Racing
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_1010 cursor-pointer font-medium min-w-[81px] px-[16px] py-[4px] rounded-[16px] text-[16px] text-blue_A404 text-center w-[auto]">
                      Install
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_101 h-[64px] rounded-[10px] w-[64px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body60"
                        >
                          Asphalt 8 : Airbone+
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f w-[auto]"
                          variant="body64"
                        >
                          Drive real cars motor
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_1010 cursor-pointer font-medium min-w-[81px] px-[16px] py-[4px] rounded-[16px] text-[16px] text-blue_A404 text-center w-[auto]">
                      Install
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_101 h-[64px] rounded-[10px] w-[64px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body60"
                        >
                          NBA 2K22
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f w-[auto]"
                          variant="body64"
                        >
                          Real 2K Basketball
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_1010 cursor-pointer font-medium min-w-[81px] px-[16px] py-[4px] rounded-[16px] text-[16px] text-blue_A404 text-center w-[auto]">
                      Install
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_101 h-[64px] rounded-[10px] w-[64px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body60"
                        >
                          Angry Bird
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f w-[auto]"
                          variant="body64"
                        >
                          Classic Singshot
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_1010 md:h-[30px] h-[32px] px-[16px] py-[4px] relative rounded-[16px] w-[81px]">
                      <div className="absolute bg-gray_1010 bottom-[2%] h-[30px] inset-x-[0] mx-[auto] px-[16px] py-[4px] rounded-[15px] w-[100%]"></div>
                      <Text
                        className="absolute font-medium inset-x-[0] mx-[auto] text-blue_A404 text-left top-[13%] w-[max-content]"
                        variant="body69"
                      >
                        Install
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_101 h-[64px] rounded-[10px] w-[64px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body60"
                        >
                          LEGO Star Wars
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f w-[auto]"
                          variant="body64"
                        >
                          RTS multiplayer
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_1010 cursor-pointer font-medium min-w-[81px] px-[16px] py-[4px] rounded-[16px] text-[16px] text-blue_A404 text-center w-[auto]">
                      Install
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_101 h-[64px] rounded-[10px] w-[64px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body60"
                        >
                          Sonic Racing
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f w-[auto]"
                          variant="body64"
                        >
                          Super Speed Racing
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_1010 cursor-pointer font-medium min-w-[81px] px-[16px] py-[4px] rounded-[16px] text-[16px] text-blue_A404 text-center w-[auto]">
                      Install
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_101 h-[64px] rounded-[10px] w-[64px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body60"
                        >
                          Bridge Constructor+
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f w-[auto]"
                          variant="body64"
                        >
                          Building games
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_1010 cursor-pointer font-medium min-w-[81px] px-[16px] py-[4px] rounded-[16px] text-[16px] text-blue_A404 text-center w-[auto]">
                      Install
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_101 h-[64px] rounded-[10px] w-[64px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body60"
                        >
                          Cut the Rope Remastered
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f w-[auto]"
                          variant="body64"
                        >
                          The Story Unfolds
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_1010 cursor-pointer font-medium min-w-[81px] px-[16px] py-[4px] rounded-[16px] text-[16px] text-blue_A404 text-center w-[auto]">
                      Install
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_101 h-[64px] rounded-[10px] w-[64px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body60"
                        >
                          Spongebob : Patty
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f w-[auto]"
                          variant="body64"
                        >
                          Save the Krabby Patty
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_1010 md:h-[30px] h-[32px] px-[16px] py-[4px] relative rounded-[16px] w-[81px]">
                      <div className="absolute bg-gray_1010 bottom-[2%] h-[30px] inset-x-[0] mx-[auto] px-[16px] py-[4px] rounded-[15px] w-[100%]"></div>
                      <Text
                        className="absolute font-medium inset-x-[0] mx-[auto] text-blue_A404 text-left top-[13%] w-[max-content]"
                        variant="body69"
                      >
                        Install
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_101 h-[64px] rounded-[10px] w-[64px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body60"
                        >
                          Alto’s Advantures
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f w-[auto]"
                          variant="body64"
                        >
                          The Spirit Mountain
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_1010 cursor-pointer font-medium min-w-[81px] px-[16px] py-[4px] rounded-[16px] text-[16px] text-blue_A404 text-center w-[auto]">
                      Install
                    </Button>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDarkPage;
