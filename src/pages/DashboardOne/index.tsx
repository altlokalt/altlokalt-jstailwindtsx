import React from "react";

import { Img, Text, Button, Input, List, Line } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardOnePage: React.FC = () => {
  function handleNavigate6() {
    window.location.href = "https://www.facebook.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-poppins gap-[17px] items-center mx-[auto] pr-[113px] sm:pr-[20px] md:pr-[40px] w-[100%]">
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
                        <div className="flex h-[16px] items-center justify-start w-[16px]">
                          <Img
                            src="images/img_arrowright_gray_665.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_menu_indigo_500_376x103.svg"
                      className="h-[376px] w-[100%]"
                      alt="Menu One"
                    />
                  </div>
                </div>
              </div>
              <Button
                className="common-pointer bg-indigo_500 flex h-[56px] items-center justify-center p-[12px] rounded-[10px] w-[56px]"
                onClick={handleNavigate6}
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
        <div className="flex-1 md:h-[1461px] h-[976px] sm:h-[Infinitypx] relative w-[100%]">
          <div className="absolute bg-white_A700 flex flex-col gap-[8px] h-[100%] inset-y-[0] justify-start left-[0] my-[auto] pb-[18px] rounded-[20px] w-[94%]">
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
            <Line className="bg-gradient1  h-[837px] md:ml-[0] ml-[914px] w-[1px]" />
          </div>
          <div className="absolute bottom-[4%] flex flex-col gap-[40px] items-center justify-start right-[0] sm:w-[100%] w-[433px]">
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex flex-row items-center justify-between w-[100%]">
                <Text
                  className="font-semibold text-gray_901 text-left w-[auto]"
                  variant="body60"
                >
                  Today’s Schedule
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
                <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row gap-[24px] items-center justify-start my-[0] pr-[16px] py-[8px] rounded-[10px] w-[100%]">
                  <div className="bg-gray_127 flex flex-col h-[72px] md:h-[auto] items-center justify-center p-[8px] rounded-[10px] w-[72px]">
                    <Text
                      className="font-semibold text-center text-indigo_500 w-[auto]"
                      variant="body64"
                    >
                      Tue
                    </Text>
                    <Text
                      className="font-semibold text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      18
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-[24px] items-center justify-between w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[246px]">
                      <Text
                        className="font-medium text-gray_901 text-left w-[auto]"
                        variant="body69"
                      >
                        Meeting Add Final OKR and KPI
                      </Text>
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                          variant="body87"
                        >
                          26 April 2022
                        </Text>
                        <div className="bg-gray_900_b2 h-[12px] w-[1%]"></div>
                        <Text
                          className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                          variant="body87"
                        >
                          09:30 - 10:00
                        </Text>
                        <div className="bg-gray_900_b2 h-[12px] w-[1%]"></div>
                        <Text
                          className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                          variant="body87"
                        >
                          20 People
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowright_gray_901.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowright One"
                    />
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-gradient  w-[100%]" />
                <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row gap-[24px] items-center justify-start my-[0] pr-[16px] py-[8px] rounded-[10px] w-[100%]">
                  <div className="bg-gray_127 flex flex-col h-[72px] md:h-[auto] items-center justify-center p-[8px] rounded-[10px] w-[72px]">
                    <Text
                      className="font-semibold text-center text-indigo_500 w-[auto]"
                      variant="body64"
                    >
                      Tue
                    </Text>
                    <Text
                      className="font-semibold text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      18
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-[24px] items-center justify-between w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[246px]">
                      <Text
                        className="font-medium text-gray_901 text-left w-[auto]"
                        variant="body69"
                      >
                        Stand Up Meeting
                      </Text>
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                          variant="body87"
                        >
                          26 April 2022
                        </Text>
                        <div className="bg-gray_900_b2 h-[12px] w-[1%]"></div>
                        <Text
                          className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                          variant="body87"
                        >
                          13:00 - 14:00
                        </Text>
                        <div className="bg-gray_900_b2 h-[12px] w-[1%]"></div>
                        <Text
                          className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                          variant="body87"
                        >
                          10 People
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowright_gray_901.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowright Two"
                    />
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-gradient  w-[100%]" />
                <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row gap-[24px] items-center justify-start my-[0] pr-[16px] py-[8px] rounded-[10px] w-[100%]">
                  <div className="bg-gray_127 flex flex-col h-[72px] md:h-[auto] items-center justify-center p-[8px] rounded-[10px] w-[72px]">
                    <Text
                      className="font-semibold text-center text-indigo_500 w-[auto]"
                      variant="body64"
                    >
                      Tue
                    </Text>
                    <Text
                      className="font-semibold text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      18
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-[24px] items-center justify-between w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[246px]">
                      <Text
                        className="font-medium text-gray_901 text-left w-[auto]"
                        variant="body69"
                      >
                        Meeting Mobile Apps
                      </Text>
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                          variant="body87"
                        >
                          26 April 2022
                        </Text>
                        <div className="bg-gray_900_b2 h-[12px] w-[1%]"></div>
                        <Text
                          className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                          variant="body87"
                        >
                          14:20 - 15:30
                        </Text>
                        <div className="bg-gray_900_b2 h-[12px] w-[1%]"></div>
                        <Text
                          className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                          variant="body87"
                        >
                          8 People
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowright_gray_901.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowright Three"
                    />
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-gradient  w-[100%]" />
                <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row gap-[24px] items-center justify-start my-[0] pr-[16px] py-[8px] rounded-[10px] w-[100%]">
                  <div className="bg-gray_127 flex flex-col h-[72px] md:h-[auto] items-center justify-center p-[8px] rounded-[10px] w-[72px]">
                    <Text
                      className="font-semibold text-center text-indigo_500 w-[auto]"
                      variant="body64"
                    >
                      Tue
                    </Text>
                    <Text
                      className="font-semibold text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      18
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-[24px] items-center justify-between w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[247px]">
                      <Text
                        className="font-medium text-gray_901 text-left w-[auto]"
                        variant="body69"
                      >
                        Stand Up Meeting Mobile Apps
                      </Text>
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                          variant="body87"
                        >
                          26 April 2022
                        </Text>
                        <div className="bg-gray_900_b2 h-[12px] w-[1%]"></div>
                        <Text
                          className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                          variant="body87"
                        >
                          15:40 - 16:00
                        </Text>
                        <div className="bg-gray_900_b2 h-[12px] w-[1%]"></div>
                        <Text
                          className="font-normal not-italic text-gray_900_b2 text-left w-[auto]"
                          variant="body87"
                        >
                          5 People
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowright_gray_901.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowright Four"
                    />
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex flex-row items-center justify-between w-[100%]">
                <Text
                  className="font-semibold text-gray_901 text-left w-[auto]"
                  variant="body60"
                >
                  Activity Feed
                </Text>
                <Text
                  className="font-normal not-italic text-indigo_500 text-left w-[auto]"
                  variant="body69"
                >
                  See All
                </Text>
              </div>
              <div className="flex items-start justify-start w-[100%]">
                <List
                  className="flex-col gap-[22px] grid w-[95%]"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-start sm:w-[100%] w-[auto]">
                    <div className="bg-gray_400 h-[40px] rounded-[50%] w-[40px]"></div>
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                      <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Marvel Park
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_b2 text-left w-[auto]"
                          variant="body69"
                        >
                          update progress on
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Baros Teams
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-black_900_b2 text-left w-[auto]"
                        variant="body78"
                      >
                        10 mins ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-start sm:w-[100%] w-[auto]">
                    <div className="bg-gray_400 h-[40px] rounded-[50%] w-[40px]"></div>
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                      <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Christina
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_b2 text-left w-[auto]"
                          variant="body69"
                        >
                          update progress on
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Rexxo Teams
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-black_900_b2 text-left w-[auto]"
                        variant="body78"
                      >
                        11 mins ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-start sm:w-[100%] w-[auto]">
                    <div className="bg-gray_400 h-[40px] rounded-[50%] w-[40px]"></div>
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                      <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Regina Lee
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_b2 text-left w-[auto]"
                          variant="body69"
                        >
                          update progress on
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Arrow Teams
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-black_900_b2 text-left w-[auto]"
                        variant="body78"
                      >
                        12 mins ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-start sm:w-[100%] w-[auto]">
                    <div className="bg-gray_400 h-[40px] rounded-[50%] w-[40px]"></div>
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                      <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Jhonny
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900_b2 text-left w-[auto]"
                          variant="body69"
                        >
                          update progress on
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Baros Teams
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-black_900_b2 text-left w-[auto]"
                        variant="body78"
                      >
                        15 mins ago
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col gap-[24px] items-center justify-start left-[2%] max-w-[735px] w-[100%]">
            <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[24px] items-start justify-start max-w-[735px] w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <Text
                    className="font-semibold text-gray_901 text-left w-[auto]"
                    variant="body60"
                  >
                    Task Summary
                  </Text>
                  <Text
                    className="font-normal not-italic text-indigo_500 text-left w-[auto]"
                    variant="body69"
                  >
                    See All
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[32px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] justify-start w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-row gap-[12px] items-center justify-start py-[12px] rounded-[15px] w-[213px]">
                    <div className="flex items-center justify-start w-[65%]">
                      <div className="flex flex-col gap-[3px] items-start justify-start w-[137px]">
                        <Text
                          className="font-medium text-gray_501 text-left w-[auto]"
                          variant="body64"
                        >
                          To-Do
                        </Text>
                        <Text
                          className="font-semibold text-gray_1006 text-left w-[auto]"
                          variant="body41"
                        >
                          80
                        </Text>
                      </div>
                    </div>
                    <div className="h-[64px] relative w-[64px]">
                      <CircularProgressbar
                        className="h-[64px] m-[auto] overflow-visible w-[64px]"
                        value={24}
                        counterClockwise
                        strokeWidth={14}
                        styles={{
                          trail: { strokeWidth: 14, stroke: "#f1f4fa" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(90deg)",
                            stroke: "#413fbd",
                          },
                        }}
                      ></CircularProgressbar>
                      <Text
                        className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-indigo_500 text-left w-[max-content]"
                        variant="body87"
                      >
                        +30 %
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[96px] bg-gradient70  w-[1px]" />
                  <div className="bg-white_A700 flex flex-1 flex-row gap-[12px] items-center justify-start py-[12px] rounded-[15px] w-[100%]">
                    <div className="flex items-center justify-start w-[62%]">
                      <div className="flex flex-col gap-[3px] items-start justify-start w-[121px]">
                        <Text
                          className="font-medium text-gray_501 text-left w-[auto]"
                          variant="body64"
                        >
                          In Progress
                        </Text>
                        <Text
                          className="font-semibold text-gray_1006 text-left w-[auto]"
                          variant="body41"
                        >
                          158
                        </Text>
                      </div>
                    </div>
                    <div className="h-[64px] relative w-[64px]">
                      <CircularProgressbar
                        className="h-[64px] m-[auto] overflow-visible w-[64px]"
                        value={49}
                        counterClockwise
                        strokeWidth={14}
                        styles={{
                          trail: { strokeWidth: 14, stroke: "#f1f4fa" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(180deg)",
                            stroke: "#ffb620",
                          },
                        }}
                      ></CircularProgressbar>
                      <Text
                        className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-left text-yellow_805 w-[max-content]"
                        variant="body87"
                      >
                        +50 %
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[96px] bg-gradient70  w-[1px]" />
                  <div className="bg-white_A700 flex flex-1 flex-row gap-[12px] items-center justify-start py-[12px] rounded-[15px] w-[100%]">
                    <div className="flex items-center justify-start w-[62%]">
                      <div className="flex flex-col gap-[3px] items-start justify-start w-[121px]">
                        <Text
                          className="font-medium text-gray_501 text-left w-[auto]"
                          variant="body64"
                        >
                          Completed
                        </Text>
                        <Text
                          className="font-semibold text-gray_1006 text-left w-[auto]"
                          variant="body41"
                        >
                          15
                        </Text>
                      </div>
                    </div>
                    <div className="h-[64px] relative w-[64px]">
                      <CircularProgressbar
                        className="h-[64px] m-[auto] overflow-visible w-[64px]"
                        value={40}
                        counterClockwise
                        strokeWidth={14}
                        styles={{
                          trail: { strokeWidth: 14, stroke: "#f1f4fa" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(143deg)",
                            stroke: "#1ad598",
                          },
                        }}
                      ></CircularProgressbar>
                      <Text
                        className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] text-left text-teal_A400 w-[max-content]"
                        variant="body87"
                      >
                        +40 %
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[16px] items-start justify-center max-w-[734px] py-[16px] rounded-[20px] w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-start w-[100%]">
                  <Text
                    className="flex-1 font-medium text-gray_1006 text-left w-[auto]"
                    variant="body69"
                  >
                    Task name
                  </Text>
                  <Text
                    className="font-medium text-center text-gray_1006 w-[auto]"
                    variant="body69"
                  >
                    Member
                  </Text>
                  <Text
                    className="font-medium text-gray_1006 text-left w-[auto]"
                    variant="body69"
                  >
                    Task Progress
                  </Text>
                  <Text
                    className="font-medium text-gray_1006 text-left w-[auto]"
                    variant="body69"
                  >
                    Action
                  </Text>
                </div>
                <Line className="bg-gray_341 h-[1px] w-[100%]" />
                <List
                  className="flex-col gap-[8px] grid items-start w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-[38px] items-center justify-start my-[0] w-[100%]">
                    <Text
                      className="flex-1 font-normal not-italic text-gray_1006 text-left w-[auto]"
                      variant="body69"
                    >
                      Wireframe website B2B
                    </Text>
                    <div className="flex relative w-[10%] md:w-[100%]">
                      <div className="flex my-[auto] w-[74%]">
                        <div className="bg-gray_400 h-[31px] my-[auto] rounded-[16px] w-[32px]"></div>
                        <div className="bg-gray_501 h-[31px] ml-[-12.7px] my-[auto] rounded-[16px] w-[32px] z-[1]"></div>
                      </div>
                      <Button className="bg-gray_400 cursor-pointer font-medium ml-[-13.54px] my-[auto] py-[5px] rounded-[16px] text-[14px] text-center text-white_A700 w-[32px] z-[1]">
                        +3
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-between w-[144px]">
                      <div className="h-[8px] overflow-hidden relative w-[auto]">
                        <div className="w-full h-full absolute bg-blue_58 rounded-[4px]"></div>
                        <div
                          className="h-full absolute bg-indigo_500  rounded-[4px]"
                          style={{ width: "86%" }}
                        ></div>
                      </div>
                      <Text
                        className="font-normal not-italic text-black_918 text-left w-[auto]"
                        variant="body69"
                      >
                        89%
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-row gap-[8px] items-center justify-start pr-[12px] py-[8px] rounded-[10px] w-[103px]">
                      <Text
                        className="font-normal not-italic text-gray_1006 text-left w-[auto]"
                        variant="body69"
                      >
                        Details
                      </Text>
                      <Img
                        src="images/img_warning.svg"
                        className="h-[16px] w-[16px]"
                        alt="warning"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-[38px] items-center justify-start my-[0] w-[100%]">
                    <Text
                      className="flex-1 font-normal not-italic text-gray_1006 text-left w-[auto]"
                      variant="body69"
                    >
                      Hi - Fidelity Mobile App
                    </Text>
                    <div className="flex relative w-[10%] md:w-[100%]">
                      <div className="flex my-[auto] w-[74%]">
                        <div className="bg-gray_400 h-[31px] my-[auto] rounded-[16px] w-[32px]"></div>
                        <div className="bg-gray_501 h-[31px] ml-[-12.7px] my-[auto] rounded-[16px] w-[32px] z-[1]"></div>
                      </div>
                      <Button className="bg-gray_400 cursor-pointer font-medium ml-[-13.54px] my-[auto] py-[5px] rounded-[16px] text-[14px] text-center text-white_A700 w-[32px] z-[1]">
                        +3
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-between w-[144px]">
                      <div className="h-[8px] overflow-hidden relative w-[auto]">
                        <div className="w-full h-full absolute bg-blue_58 rounded-[4px]"></div>
                        <div
                          className="h-full absolute bg-indigo_500  rounded-[4px]"
                          style={{ width: "69%" }}
                        ></div>
                      </div>
                      <Text
                        className="font-normal not-italic text-black_918 text-left w-[auto]"
                        variant="body69"
                      >
                        70%
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-row gap-[8px] items-center justify-start pr-[12px] py-[8px] rounded-[10px] w-[103px]">
                      <Text
                        className="font-normal not-italic text-gray_1006 text-left w-[auto]"
                        variant="body69"
                      >
                        Details
                      </Text>
                      <Img
                        src="images/img_warning.svg"
                        className="h-[16px] w-[16px]"
                        alt="warning One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-[38px] items-center justify-start my-[0] w-[100%]">
                    <Text
                      className="flex-1 font-normal not-italic text-gray_1006 text-left w-[auto]"
                      variant="body69"
                    >
                      PMS Apps Journey
                    </Text>
                    <div className="flex relative w-[10%] sm:w-[100%]">
                      <div className="flex my-[auto] w-[74%]">
                        <div className="bg-gray_400 h-[31px] my-[auto] rounded-[16px] w-[32px]"></div>
                        <div className="bg-gray_501 h-[31px] ml-[-12.7px] my-[auto] rounded-[16px] w-[32px] z-[1]"></div>
                      </div>
                      <Button className="bg-gray_400 cursor-pointer font-medium ml-[-13.54px] my-[auto] py-[5px] rounded-[16px] text-[14px] text-center text-white_A700 w-[32px] z-[1]">
                        +5
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-between w-[144px]">
                      <div className="h-[8px] overflow-hidden relative w-[auto]">
                        <div className="w-full h-full absolute bg-blue_58 rounded-[4px]"></div>
                        <div
                          className="h-full absolute bg-indigo_500  rounded-[4px]"
                          style={{ width: "76%" }}
                        ></div>
                      </div>
                      <Text
                        className="font-normal not-italic text-black_918 text-left w-[auto]"
                        variant="body69"
                      >
                        75%
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-row gap-[8px] items-center justify-start pr-[12px] py-[8px] rounded-[10px] w-[103px]">
                      <Text
                        className="font-normal not-italic text-gray_1006 text-left w-[auto]"
                        variant="body69"
                      >
                        Details
                      </Text>
                      <Img
                        src="images/img_warning.svg"
                        className="h-[16px] w-[16px]"
                        alt="warning Two"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-[38px] items-center justify-start my-[0] w-[100%]">
                    <Text
                      className="flex-1 font-normal not-italic text-gray_1006 text-left w-[auto]"
                      variant="body69"
                    >
                      Wireframe Mobile Arrow App{" "}
                    </Text>
                    <div className="flex relative w-[10%] md:w-[100%]">
                      <div className="flex my-[auto] w-[74%]">
                        <div className="bg-gray_400 h-[31px] my-[auto] rounded-[16px] w-[32px]"></div>
                        <div className="bg-gray_501 h-[31px] ml-[-12.7px] my-[auto] rounded-[16px] w-[32px] z-[1]"></div>
                      </div>
                      <Button className="bg-gray_400 cursor-pointer font-medium ml-[-13.54px] my-[auto] py-[5px] rounded-[16px] text-[14px] text-center text-white_A700 w-[32px] z-[1]">
                        +2
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-between w-[144px]">
                      <div className="h-[8px] overflow-hidden relative w-[auto]">
                        <div className="w-full h-full absolute bg-blue_58 rounded-[4px]"></div>
                        <div
                          className="h-full absolute bg-indigo_500  rounded-[4px]"
                          style={{ width: "67%" }}
                        ></div>
                      </div>
                      <Text
                        className="font-normal not-italic text-black_918 text-left w-[auto]"
                        variant="body69"
                      >
                        65%
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-row gap-[8px] items-center justify-start pr-[12px] py-[8px] rounded-[10px] w-[103px]">
                      <Text
                        className="font-normal not-italic text-gray_1006 text-left w-[auto]"
                        variant="body69"
                      >
                        Details
                      </Text>
                      <Img
                        src="images/img_warning.svg"
                        className="h-[16px] w-[16px]"
                        alt="warning Three"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-[38px] items-center justify-start my-[0] w-[100%]">
                    <Text
                      className="flex-1 font-normal not-italic text-gray_1006 text-left w-[auto]"
                      variant="body69"
                    >
                      Usability Testing Mobile Apps Baros
                    </Text>
                    <div className="flex relative w-[10%] md:w-[100%]">
                      <div className="flex my-[auto] w-[74%]">
                        <div className="bg-gray_400 h-[31px] my-[auto] rounded-[16px] w-[32px]"></div>
                        <div className="bg-gray_501 h-[31px] ml-[-12.7px] my-[auto] rounded-[16px] w-[32px] z-[1]"></div>
                      </div>
                      <Button className="bg-gray_400 cursor-pointer font-medium ml-[-13.54px] my-[auto] py-[5px] rounded-[16px] text-[14px] text-center text-white_A700 w-[32px] z-[1]">
                        +4
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-between w-[144px]">
                      <div className="h-[8px] overflow-hidden relative w-[auto]">
                        <div className="w-full h-full absolute bg-blue_58 rounded-[4px]"></div>
                        <div
                          className="h-full absolute bg-indigo_500  rounded-[4px]"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <Text
                        className="font-normal not-italic text-black_918 text-left w-[auto]"
                        variant="body69"
                      >
                        50%
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-row gap-[8px] items-center justify-start pr-[12px] py-[8px] rounded-[10px] w-[103px]">
                      <Text
                        className="font-normal not-italic text-gray_1006 text-left w-[auto]"
                        variant="body69"
                      >
                        Details
                      </Text>
                      <Img
                        src="images/img_warning.svg"
                        className="h-[16px] w-[16px]"
                        alt="warning Four"
                      />
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="font-semibold text-gray_901 text-left w-[auto]"
                  variant="body60"
                >
                  Teams
                </Text>
                <Text
                  className="font-normal not-italic text-indigo_500 text-left w-[auto]"
                  variant="body69"
                >
                  See All
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] justify-start w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 flex-col gap-[8px] items-start justify-start pb-[16px] rounded-[10px] w-[100%]">
                  <div className="bg-gray_400 h-[157px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"></div>
                  <div className="flex flex-col gap-[4px] items-start justify-center px-[8px] w-[100%]">
                    <Text
                      className="font-medium text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      Arrow Teams
                    </Text>
                    <Text
                      className="bg-orange_50 font-normal justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-left text-yellow_900 w-[56px]"
                      variant="body78"
                    >
                      HR
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start px-[8px] w-[100%]">
                    <div className="flex flex-1 flex-row gap-[8px] items-center justify-start w-[100%]">
                      <div className="h-[10px] overflow-hidden relative w-[64%]">
                        <div className="w-full h-full absolute bg-blue_58 rounded-[5px]"></div>
                        <div
                          className="h-full absolute bg-indigo_500  rounded-[5px]"
                          style={{ width: "84%" }}
                        ></div>
                      </div>
                      <Text
                        className="font-medium text-gray_901 text-right w-[auto]"
                        variant="body78"
                      >
                        89%
                      </Text>
                    </div>
                    <div className="flex relative w-[36%]">
                      <div className="flex my-[auto] w-[74%]">
                        <div className="bg-gray_400 h-[32px] my-[auto] rounded-[50%] w-[32px]"></div>
                        <div className="bg-gray_501 h-[32px] ml-[-13px] my-[auto] rounded-[50%] w-[32px] z-[1]"></div>
                      </div>
                      <Text
                        className="bg-gray_400 flex font-medium h-[32px] items-center justify-center ml-[-14px] my-[auto] rounded-[50%] text-center text-white_A700 w-[32px] z-[1]"
                        variant="body78"
                      >
                        +2
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-[292px] bg-gradient70  w-[1px]" />
                <div className="bg-white_A700 flex flex-1 flex-col gap-[8px] items-start justify-start pb-[16px] rounded-[10px] w-[100%]">
                  <div className="bg-gray_400 h-[157px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"></div>
                  <div className="flex flex-col gap-[4px] items-start justify-center px-[8px] w-[100%]">
                    <Text
                      className="font-medium text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      Baros Teams
                    </Text>
                    <Text
                      className="bg-bluegray_50 font-normal justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-green_600 text-left w-[56px]"
                      variant="body78"
                    >
                      B2B
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start px-[8px] w-[100%]">
                    <div className="flex flex-1 flex-row gap-[8px] items-center justify-start w-[100%]">
                      <div className="h-[10px] overflow-hidden relative w-[64%]">
                        <div className="w-full h-full absolute bg-blue_58 rounded-[5px]"></div>
                        <div
                          className="h-full absolute bg-indigo_500  rounded-[5px]"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                      <Text
                        className="font-medium text-gray_901 text-right w-[auto]"
                        variant="body78"
                      >
                        78%
                      </Text>
                    </div>
                    <div className="flex relative w-[36%]">
                      <div className="flex my-[auto] w-[74%]">
                        <div className="bg-gray_400 h-[32px] my-[auto] rounded-[50%] w-[32px]"></div>
                        <div className="bg-gray_501 h-[32px] ml-[-13px] my-[auto] rounded-[50%] w-[32px] z-[1]"></div>
                      </div>
                      <Text
                        className="bg-gray_400 flex font-medium h-[32px] items-center justify-center ml-[-14px] my-[auto] rounded-[50%] text-center text-white_A700 w-[32px] z-[1]"
                        variant="body78"
                      >
                        +2
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-[292px] bg-gradient70  w-[1px]" />
                <div className="bg-white_A700 flex flex-1 flex-col gap-[8px] items-start justify-start pb-[16px] rounded-[10px] w-[100%]">
                  <div className="bg-gray_400 h-[157px] rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"></div>
                  <div className="flex flex-col gap-[4px] items-start justify-center px-[8px] w-[100%]">
                    <Text
                      className="font-medium text-gray_901 text-left w-[auto]"
                      variant="body69"
                    >
                      Rexxo Teams
                    </Text>
                    <Text
                      className="bg-blue_50 font-normal justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-left text-light_blue_A700 w-[56px]"
                      variant="body78"
                    >
                      Tech
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start px-[8px] w-[100%]">
                    <div className="flex flex-1 flex-row gap-[8px] items-center justify-start w-[100%]">
                      <div className="h-[10px] overflow-hidden relative w-[64%]">
                        <div className="w-full h-full absolute bg-blue_58 rounded-[5px]"></div>
                        <div
                          className="h-full absolute bg-indigo_500  rounded-[5px]"
                          style={{ width: "74%" }}
                        ></div>
                      </div>
                      <Text
                        className="font-medium text-gray_901 text-right w-[auto]"
                        variant="body78"
                      >
                        70%
                      </Text>
                    </div>
                    <div className="flex relative w-[36%]">
                      <div className="flex my-[auto] w-[74%]">
                        <div className="bg-gray_400 h-[32px] my-[auto] rounded-[50%] w-[32px]"></div>
                        <div className="bg-gray_501 h-[32px] ml-[-13px] my-[auto] rounded-[50%] w-[32px] z-[1]"></div>
                      </div>
                      <Text
                        className="bg-gray_400 flex font-medium h-[32px] items-center justify-center ml-[-14px] my-[auto] rounded-[50%] text-center text-white_A700 w-[32px] z-[1]"
                        variant="body78"
                      >
                        +2
                      </Text>
                    </div>
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

export default DashboardOnePage;
