import React from "react";

import { Img, Text, Button, Input, List, Line, SelectBox } from "components";
import { CloseSVG } from "../../assets/images";

const SchedulePage: React.FC = () => {
  function handleNavigate31() {
    window.location.href = "https://www.facebook.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-poppins gap-[17px] items-center mx-[auto] pr-[151px] sm:pr-[20px] md:pr-[40px] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start w-[103px]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[28px] h-[1024px] md:h-[auto] items-center justify-between py-[32px] w-[auto]">
              <div className="flex flex-col gap-[48px] items-center justify-center w-[auto]">
                <Img
                  src="images/img_logo_68x103.png"
                  className="h-[68px] md:h-[auto] object-cover w-[100%]"
                  alt="Logo"
                />
                <div className="flex items-center justify-center w-[103px]">
                  <div className="flex flex-col gap-[23px] items-end justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-end ml-[auto] md:w-[100%] w-[72%]">
                      <Text
                        className="font-semibold text-bluegray_800 text-center w-[auto]"
                        variant="body69"
                      >
                        Menu
                      </Text>
                      <div className="bg-gray_100 flex h-[24px] md:h-[auto] items-center justify-center py-[8px] rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[27px]">
                        <Img
                          src="images/img_stroke1.svg"
                          className="h-[9px] w-[auto]"
                          alt="StrokeOne"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_menu_indigo_500.svg"
                      className="h-[376px] w-[100%]"
                      alt="Menu One"
                    />
                  </div>
                </div>
              </div>
              <Button
                className="common-pointer bg-indigo_500 flex h-[56px] items-center justify-center p-[12px] rounded-[10px] w-[56px]"
                onClick={handleNavigate31}
              >
                <Img
                  src="images/img_facebook.svg"
                  className="h-[32px]"
                  alt="facebook"
                />
              </Button>
              <Img
                src="images/img_bottom.svg"
                className="h-[136px] w-[100%]"
                alt="Bottom"
              />
            </div>
          </div>
        </aside>
        <div className="flex-1 h-[976px] relative w-[100%]">
          <div className="h-[976px] m-[auto] w-[100%]">
            <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] pb-[18px] rounded-[20px] w-[97%]">
              <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                <header className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between p-[24px] sm:px-[20px] w-[100%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="flex-1 font-normal not-italic p-[0] text-[18px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="bg-gray_100 flex gap-[24px] max-w-[799px] px-[24px] py-[12px] rounded-[10px] sm:px-[20px] w-[100%]"
                    name="Search"
                    placeholder="General Search..."
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer mr-[24px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#adadad"
                          className="cursor-pointer ml-[10px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                  ></Input>
                  <div className="flex sm:flex-1 flex-row gap-[32px] items-center justify-start sm:w-[100%] w-[auto]">
                    <List
                      className="sm:flex-col flex-row gap-[8px] grid grid-cols-2 justify-start w-[auto]"
                      orientation="horizontal"
                    >
                      <div className="flex h-[64px] items-start justify-start p-[11px] w-[100%]">
                        <div className="md:h-[32px] h-[39px] md:ml-[0] ml-[2px] relative w-[79%]">
                          <Img
                            src="images/img_volume.svg"
                            className="absolute bottom-[0] h-[32px] inset-x-[0] mx-[auto] w-[32px]"
                            alt="volume"
                          />
                          <div className="absolute flex items-center justify-start right-[0] top-[0] w-[49%]">
                            <div className="bg-red_A700 h-[18px] p-[4px] relative rounded-[8px] w-[16px]">
                              <div className="absolute bg-red_A700 bottom-[3%] h-[16px] inset-x-[0] mx-[auto] p-[4px] rounded-[50%] w-[16px]"></div>
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
                      <div className="flex h-[64px] items-center justify-end p-[13px] w-[100%]">
                        <div className="md:h-[32px] h-[37px] relative w-[37px]">
                          <Img
                            src="images/img_music.svg"
                            className="absolute bottom-[0] h-[32px] left-[0] w-[32px]"
                            alt="music"
                          />
                          <div className="absolute flex h-[18px] items-center justify-start right-[0] top-[0] w-[18px]">
                            <div className="bg-red_A700 h-[18px] p-[3.36px] relative rounded-[50%] w-[18px]">
                              <div className="absolute bg-red_A700 h-[18px] inset-[0] m-[auto] p-[3.36px] rounded-[50%] w-[18px]"></div>
                              <Text
                                className="absolute font-medium h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                                variant="body87"
                              >
                                10
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                    <Line className="bg-bluegray_100 h-[40px] w-[1px]" />
                    <ul className="flex flex-row gap-[13px] sm:hidden items-center justify-center w-[auto] common-row-list">
                      <li className="sm:w-[100%] sm:my-[10px] w-[21%]">
                        <div className="bg-gray_400 h-[40px] rounded-[50%] w-[40px]"></div>
                      </li>
                      <li className="mt-[8px] mb-[7px] sm:w-[100%] sm:my-[10px] w-[auto]">
                        <a
                          className="cursor-pointer font-semibold text-[16px] text-bluegray_800 text-left"
                          href="javascript:"
                        >
                          Alex Nordeus
                        </a>
                      </li>
                      <li className="sm:w-[100%] sm:my-[10px] w-[13%] my-[8px]">
                        <Img
                          src="images/img_arrowdown_bluegray_800.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrowdown"
                        />
                      </li>
                    </ul>
                  </div>
                </header>
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:ml-[0] ml-[24px] md:w-[100%] w-[42%]">
                  <div className="flex flex-col gap-[56px] items-start justify-start w-[auto]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-between py-[8px] w-[343px]">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="h-[100%] w-[24px]"
                          alt="arrowleft"
                        />
                        <SelectBox
                          className="font-normal not-italic text-[16px] text-gray_901 text-left w-[auto]"
                          placeholderClassName="text-gray_901"
                          name="aprilCounter"
                          placeholder="April 2022"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_gray_901.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                        <Img
                          src="images/img_arrowright.svg"
                          className="h-[100%] w-[24px]"
                          alt="arrowright"
                        />
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <div className="flex flex-row gap-[8px] h-[42px] md:h-[auto] items-start justify-between w-[343px]">
                          <div className="flex h-[42px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                            <Text
                              className="font-normal not-italic text-gray_901 text-left w-[auto]"
                              variant="body78"
                            >
                              Mon
                            </Text>
                          </div>
                          <div className="flex h-[42px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                            <Text
                              className="font-normal not-italic text-gray_901 text-left w-[auto]"
                              variant="body78"
                            >
                              Tue
                            </Text>
                          </div>
                          <div className="flex h-[42px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                            <Text
                              className="font-normal not-italic text-gray_901 text-left w-[auto]"
                              variant="body78"
                            >
                              Wed
                            </Text>
                          </div>
                          <div className="flex h-[42px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                            <Text
                              className="font-normal not-italic text-gray_901 text-left w-[auto]"
                              variant="body78"
                            >
                              Thu
                            </Text>
                          </div>
                          <div className="flex h-[42px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                            <Text
                              className="font-normal not-italic text-gray_901 text-left w-[auto]"
                              variant="body78"
                            >
                              Fri
                            </Text>
                          </div>
                          <div className="flex h-[42px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                            <Text
                              className="font-normal not-italic text-gray_901 text-left w-[auto]"
                              variant="body78"
                            >
                              Sat
                            </Text>
                          </div>
                          <div className="flex h-[42px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                            <Text
                              className="font-normal not-italic text-gray_901 text-left w-[auto]"
                              variant="body78"
                            >
                              Sun
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <div className="gap-[8px] grid grid-cols-7 justify-center min-h-[auto] w-[100%]">
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-black_900_4c text-center w-[auto]"
                                variant="body78"
                              >
                                27
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-black_900_4c text-center w-[auto]"
                                variant="body78"
                              >
                                28
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-black_900_4c text-center w-[auto]"
                                variant="body78"
                              >
                                29
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-black_900_4c text-center w-[auto]"
                                variant="body78"
                              >
                                30
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-black_900_4c text-center w-[auto]"
                                variant="body78"
                              >
                                31
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                1
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                2
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                3
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                4
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                5
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                6
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                7
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                8
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                9
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                10
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                11
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                12
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                13
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                14
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                15
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                16
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                17
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                18
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                19
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                20
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                21
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                22
                              </Text>
                            </div>
                            <div className="flex flex-1 h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                23
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[8px] h-[42px] md:h-[auto] items-center justify-between w-[100%]">
                            <div className="flex h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                24
                              </Text>
                            </div>
                            <div className="flex h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                25
                              </Text>
                            </div>
                            <Button className="bg-indigo_500 cursor-pointer flex-1 font-normal h-[42px] not-italic p-[4px] rounded-[8px] text-[14px] text-center text-white_A700 w-[42px]">
                              26
                            </Button>
                            <div className="flex h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                27
                              </Text>
                            </div>
                            <div className="flex h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                28
                              </Text>
                            </div>
                            <div className="flex h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                29
                              </Text>
                            </div>
                            <div className="flex h-[41px] md:h-[auto] items-center justify-center p-[4px] w-[42px]">
                              <Text
                                className="font-normal not-italic text-center text-gray_901 w-[auto]"
                                variant="body78"
                              >
                                30
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[343px]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-gray_901 text-left w-[auto]"
                          variant="body60"
                        >
                          List Schedule
                        </Text>
                        <Text
                          className="font-normal not-italic text-indigo_500 text-left w-[auto]"
                          variant="body69"
                        >
                          See All
                        </Text>
                      </div>
                      <List
                        className="flex-col gap-[8px] grid items-start w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center my-[0] py-[8px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_901 text-left w-[auto]"
                            variant="body69"
                          >
                            Stand Up Meeting B2B Team
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                            <Text
                              className="bg-bluegray_50 font-normal justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-green_600 text-left w-[56px]"
                              variant="body78"
                            >
                              B2B
                            </Text>
                            <div className="flex relative w-[21%]">
                              <div className="flex my-[auto] w-[74%]">
                                <div className="bg-gray_400 h-[31px] my-[auto] rounded-[16px] w-[32px]"></div>
                                <div className="bg-gray_501 h-[31px] ml-[-12.7px] my-[auto] rounded-[16px] w-[32px] z-[1]"></div>
                              </div>
                              <Button className="bg-gray_400 cursor-pointer font-medium ml-[-13.54px] my-[auto] py-[5px] rounded-[16px] text-[14px] text-center text-white_A700 w-[32px] z-[1]">
                                +4
                              </Button>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                              variant="body78"
                            >
                              09:00 - 09:30
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-[1px] bg-gradient  w-[100%]" />
                        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center my-[0] py-[8px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_901 text-left w-[auto]"
                            variant="body69"
                          >
                            Meeting Add Final OKR and KPI
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                            <Text
                              className="bg-orange_50 font-normal justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-left text-yellow_900 w-[56px]"
                              variant="body78"
                            >
                              HR
                            </Text>
                            <div className="flex relative w-[21%]">
                              <div className="flex my-[auto] w-[74%]">
                                <div className="bg-gray_400 h-[31px] my-[auto] rounded-[16px] w-[32px]"></div>
                                <div className="bg-gray_501 h-[31px] ml-[-12.7px] my-[auto] rounded-[16px] w-[32px] z-[1]"></div>
                              </div>
                              <Button className="bg-gray_400 cursor-pointer font-medium ml-[-13.54px] my-[auto] py-[5px] rounded-[16px] text-[14px] text-center text-white_A700 w-[32px] z-[1]">
                                +4
                              </Button>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                              variant="body78"
                            >
                              09:30 - 10:00
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-[1px] bg-gradient  w-[100%]" />
                        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center my-[0] py-[8px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_901 text-left w-[auto]"
                            variant="body69"
                          >
                            Stand Up Meeting
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                            <Text
                              className="bg-blue_50 font-normal justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-left text-light_blue_A700 w-[56px]"
                              variant="body78"
                            >
                              Tech
                            </Text>
                            <div className="flex relative w-[21%]">
                              <div className="flex my-[auto] w-[74%]">
                                <div className="bg-gray_400 h-[31px] my-[auto] rounded-[16px] w-[32px]"></div>
                                <div className="bg-gray_501 h-[31px] ml-[-12.7px] my-[auto] rounded-[16px] w-[32px] z-[1]"></div>
                              </div>
                              <Button className="bg-gray_400 cursor-pointer font-medium ml-[-13.54px] my-[auto] py-[5px] rounded-[16px] text-[14px] text-center text-white_A700 w-[32px] z-[1]">
                                +4
                              </Button>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                              variant="body78"
                            >
                              13:00 - 14:00
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-[1px] bg-gradient  w-[100%]" />
                        <div className="flex flex-1 flex-col gap-[8px] items-start justify-center my-[0] py-[8px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_901 text-left w-[auto]"
                            variant="body69"
                          >
                            Meeting Mobile Apps
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                            <Text
                              className="bg-blue_50 font-normal justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-left text-light_blue_A700 w-[56px]"
                              variant="body78"
                            >
                              Tech
                            </Text>
                            <div className="flex relative w-[21%]">
                              <div className="flex my-[auto] w-[74%]">
                                <div className="bg-gray_400 h-[31px] my-[auto] rounded-[16px] w-[32px]"></div>
                                <div className="bg-gray_501 h-[31px] ml-[-12.7px] my-[auto] rounded-[16px] w-[32px] z-[1]"></div>
                              </div>
                              <Button className="bg-gray_400 cursor-pointer font-medium ml-[-13.54px] my-[auto] py-[5px] rounded-[16px] text-[14px] text-center text-white_A700 w-[32px] z-[1]">
                                +4
                              </Button>
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                              variant="body78"
                            >
                              14:20 - 15:30
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <Line className="bg-gradient1  sm:h-[1px] h-[837px] sm:ml-[0] ml-[92px] sm:w-[100%] w-[1px]" />
                  <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start sm:ml-[0] ml-[52px] sm:mt-[0] mt-[122px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      07:00
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      08:00
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      09:00
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      10:00
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      11:00
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      12:00
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      13:00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[825px] right-[1%] top-[12%] w-[100%]">
              <div className="flex flex-col gap-[14px] items-start justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_901 text-left w-[auto]"
                  variant="body35"
                >
                  April
                </Text>
                <Text
                  className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                  variant="body69"
                >
                  Today is Wednesday, Apr 26th, 2022
                </Text>
              </div>
              <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                <SelectBox
                  className="border-[1px] border-gray_500 border-solid font-medium h-[48px] px-[16px] py-[8px] rounded-[8px] text-[16px] text-bluegray_700 text-left sm:w-[100%] w-[28%]"
                  placeholderClassName="text-bluegray_700"
                  name="Button"
                  placeholder="Day"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_bluegray_700.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Button
                  className="bg-indigo_500 flex items-center justify-center min-w-[235px] px-[16px] py-[8px] rounded-[8px] text-center w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="mr-[6px] text-center"
                      alt="plus"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[16px] text-left text-white_A700">
                    Create New Schedule
                  </div>
                </Button>
              </div>
            </div>
            <div className="absolute bg-bluegray_50 border-[1px] border-green_100 border-solid flex flex-col gap-[8px] h-[88px] md:h-[auto] items-start justify-start max-w-[749px] px-[16px] py-[12px] right-[0] rounded-[8px] top-[25%] w-[100%]">
              <Text
                className="font-medium text-gray_901 text-left w-[auto]"
                variant="body64"
              >
                Breakfast 🍟🥪
              </Text>
              <Text
                className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                variant="body69"
              >
                07:00 - 08:00
              </Text>
            </div>
            <div className="absolute bg-blue_51 border-[1px] border-blue_300 border-solid flex flex-row gap-[8px] md:h-[auto] h-[max-content] inset-y-[0] items-center justify-between max-w-[749px] my-[auto] px-[16px] py-[12px] right-[0] rounded-[8px] w-[100%]">
              <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_901 text-left w-[auto]"
                  variant="body64"
                >
                  Meeting
                </Text>
                <Text
                  className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                  variant="body69"
                >
                  09:00 - 10:00
                </Text>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                <Text
                  className="font-normal not-italic text-gray_901 text-left w-[auto]"
                  variant="body78"
                >
                  Member
                </Text>
                <div className="flex relative w-[56%]">
                  <div className="flex my-[auto] w-[73%]">
                    <div className="bg-gray_400 h-[40px] my-[auto] rounded-[50%] w-[40px]"></div>
                    <div className="bg-gray_501 h-[40px] ml-[-12.7px] my-[auto] rounded-[50%] w-[40px] z-[1]"></div>
                  </div>
                  <Text
                    className="bg-gray_400 flex font-medium h-[40px] items-center justify-center ml-[-13.54px] my-[auto] rounded-[50%] text-center text-white_A700 w-[40px] z-[1]"
                    variant="body78"
                  >
                    +4
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-orange_50 border-[1px] border-orange_100 border-solid bottom-[25%] flex flex-row gap-[8px] h-[88px] md:h-[auto] items-center justify-between max-w-[749px] px-[16px] py-[12px] right-[0] rounded-[8px] w-[100%]">
            <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
              <Text
                className="font-medium text-gray_901 text-left w-[auto]"
                variant="body64"
              >
                Stand Up Meeting
              </Text>
              <Text
                className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                variant="body69"
              >
                11:00 - 11:40
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
              <Text
                className="font-normal not-italic text-gray_901 text-left w-[auto]"
                variant="body78"
              >
                Member
              </Text>
              <div className="flex relative w-[56%]">
                <div className="flex my-[auto] w-[73%]">
                  <div className="bg-gray_400 h-[40px] my-[auto] rounded-[50%] w-[40px]"></div>
                  <div className="bg-gray_501 h-[40px] ml-[-12.7px] my-[auto] rounded-[50%] w-[40px] z-[1]"></div>
                </div>
                <Text
                  className="bg-gray_400 flex font-medium h-[40px] items-center justify-center ml-[-13.54px] my-[auto] rounded-[50%] text-center text-white_A700 w-[40px] z-[1]"
                  variant="body78"
                >
                  +4
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray_101 border-[1px] border-gray_400 border-solid bottom-[13%] flex flex-col gap-[8px] h-[88px] md:h-[auto] items-start justify-start max-w-[749px] px-[16px] py-[12px] right-[0] rounded-[8px] w-[100%]">
            <Text
              className="font-medium text-gray_901 text-left w-[auto]"
              variant="body64"
            >
              Break Lunch 🍔
            </Text>
            <Text
              className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
              variant="body69"
            >
              12:00 - 13:00
            </Text>
          </div>
          <Img
            src="images/img_time.svg"
            className="absolute h-[16px] right-[0] top-[45%] w-[766px]"
            alt="Time Seven"
          />
        </div>
      </div>
    </>
  );
};

export default SchedulePage;
