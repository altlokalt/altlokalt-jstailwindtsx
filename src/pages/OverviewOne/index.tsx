import React from "react";

import { Img, Text, Line, Input, List, Button, SelectBox } from "components";

const OverviewOnePage: React.FC = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-sfprotext sm:gap-[20px] md:gap-[20px] items-start justify-start mx-[auto] sm:w-[100%] md:w-[100%] w-[auto]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[250px]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex flex-col h-[1281px] md:h-[auto] items-start justify-start w-[100%]">
              <div className="flex flex-col h-[101px] md:h-[auto] items-start justify-start w-[auto]">
                <div className="bg-black_902 flex flex-row gap-[12px] h-[100px] md:h-[auto] items-center justify-start sm:px-[20px] px-[24px] w-[250px]">
                  <Img
                    src="images/img_info_light_green_618.svg"
                    className="h-[52px] w-[52px]"
                    alt="info"
                  />
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body48"
                  >
                    Real Estate
                  </Text>
                </div>
                <Line className="bg-white_A700_19 h-[1px] w-[100%]" />
              </div>
              <div className="bg-black_902 flex flex-col gap-[24px] h-[100%] items-start justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start pt-[24px] w-[100%]">
                  <div className="flex items-start justify-start sm:px-[20px] px-[24px] py-[14px] w-[250px]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                      variant="body87"
                    >
                      MAIN MENU
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex items-center justify-start px-[12px] w-[250px]">
                      <div className="bg-light_green_618 flex flex-row gap-[12px] items-center justify-start p-[12px] rounded-[12px] w-[100%]">
                        <Img
                          src="images/img_signal_white_a700_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="signal"
                        />
                        <Text
                          className="flex-1 font-bold text-left text-white_A700 w-[auto]"
                          variant="body78"
                        >
                          Overview
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-between sm:px-[20px] px-[24px] py-[12px] w-[250px]">
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                        <Img
                          src="images/img_user_17.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                          variant="body78"
                        >
                          Inbox
                        </Text>
                      </div>
                      <div className="flex relative w-[56px]">
                        <div className="flex my-[auto] w-[72%]">
                          <div className="bg-gray_457 h-[24px] my-[auto] rounded-[50%] w-[24px]"></div>
                          <div className="bg-gray_457 h-[24px] ml-[-8px] my-[auto] rounded-[50%] w-[24px] z-[1]"></div>
                        </div>
                        <Text
                          className="bg-light_green_618 flex font-bold h-[24px] items-center justify-end ml-[-8px] my-[auto] rounded-[50%] text-center text-white_A700 w-[24px] z-[1]"
                          variant="body98"
                        >
                          +9
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-between sm:px-[20px] px-[24px] py-[12px] w-[250px]">
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[auto]">
                        <Img
                          src="images/img_notification_white_a700_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="notification"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                          variant="body78"
                        >
                          Notification
                        </Text>
                      </div>
                      <div className="flex items-start justify-start w-[24px]">
                        <Text
                          className="bg-light_green_618 flex font-bold h-[24px] items-center justify-end rounded-[50%] text-center text-white_A700 w-[24px]"
                          variant="body98"
                        >
                          +9
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start sm:px-[20px] px-[24px] py-[12px] w-[250px]">
                      <Img
                        src="images/img_car_gray_505.svg"
                        className="h-[24px] w-[24px]"
                        alt="car"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                        variant="body78"
                      >
                        Real Estate
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start sm:px-[20px] px-[24px] py-[12px] w-[250px]">
                      <Img
                        src="images/img_settings_white_a700_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                        variant="body78"
                      >
                        Customer
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start sm:px-[20px] px-[24px] py-[12px] w-[250px]">
                      <Img
                        src="images/img_bluetooth.svg"
                        className="h-[24px] w-[24px]"
                        alt="bluetooth"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                        variant="body78"
                      >
                        Toral Revenue
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start sm:px-[20px] px-[24px] py-[12px] w-[250px]">
                      <Img
                        src="images/img_link_white_a700.svg"
                        className="h-[24px] w-[24px]"
                        alt="link"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                        variant="body78"
                      >
                        Cart
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start sm:px-[20px] px-[24px] py-[12px] w-[250px]">
                      <Img
                        src="images/img_calendar_white_a700.svg"
                        className="h-[24px] w-[24px]"
                        alt="calendar"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                        variant="body78"
                      >
                        Calendar & Todos
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start sm:px-[20px] px-[24px] py-[12px] w-[250px]">
                      <Img
                        src="images/img_location_white_a700_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="location"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                        variant="body78"
                      >
                        Map
                      </Text>
                    </div>
                    <Line className="bg-white_A700_19 h-[1px] w-[100%]" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start sm:px-[20px] px-[24px] py-[14px] w-[250px]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                      variant="body87"
                    >
                      HELP & SUPPORT
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                    <div className="flex flex-row gap-[12px] items-start justify-start sm:px-[20px] px-[24px] py-[12px] w-[250px]">
                      <Img
                        src="images/img_contrast_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="contrast"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                        variant="body78"
                      >
                        Help & Center
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start sm:px-[20px] px-[24px] py-[12px] w-[250px]">
                      <Img
                        src="images/img_settings_white_a700_29x29.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings One"
                      />
                      <Text
                        className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                        variant="body78"
                      >
                        Setting
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="bg-gray_126 flex flex-1 flex-col items-start justify-start md:px-[20px] w-[100%]">
          <div className="flex items-center justify-start pb-[32px] w-[100%]">
            <div className="bg-gray_654 md:h-[400px] h-[440px] relative w-[100%]">
              <div className="absolute bg-gray_654 flex inset-x-[0] items-center justify-start mx-[auto] p-[32px] sm:px-[20px] top-[0] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1126px] mb-[288px] w-[100%]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body35"
                  >
                    Overview
                  </Text>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_757 text-bluegray_757 text-left w-[100%]"
                      wrapClassName="bg-white_A700 border-[1px] border-indigo_57 border-solid flex md:h-[auto] p-[12px] rounded-[12px] sm:h-[auto] sm:w-[100%] w-[350px]"
                      name="Searchbar"
                      placeholder="Search..."
                      prefix={
                        <Img
                          src="images/img_contrast_black_902.svg"
                          className="mr-[8px] my-[auto]"
                          alt="contrast"
                        />
                      }
                    ></Input>
                    <div className="bg-gray_457 h-[48px] rounded-[12px] w-[48px]"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[24px] inset-x-[0] items-center justify-start max-w-[1126px] mx-[auto] w-[100%]">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[49%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-[24px] shadow-bs36 w-[100%]">
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_967 text-left w-[auto]"
                        variant="body69"
                      >
                        Total Revenue
                      </Text>
                      <Img
                        src="images/img_lightbulb_black_902.svg"
                        className="h-[40px] rounded-[12px] w-[40px]"
                        alt="lightbulb"
                      />
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text
                        className="flex-1 font-bold text-bluegray_967 text-left w-[auto]"
                        variant="body35"
                      >
                        $ 987,543
                      </Text>
                      <Img
                        src="images/img_cursor_green_504.svg"
                        className="h-[24px] w-[24px]"
                        alt="cursor"
                      />
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-[24px] shadow-bs36 w-[100%]">
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_967 text-left w-[auto]"
                        variant="body69"
                      >
                        Total Profit
                      </Text>
                      <Img
                        src="images/img_volume_black_902_40x40.svg"
                        className="h-[40px] rounded-[12px] w-[40px]"
                        alt="volume"
                      />
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text
                        className="flex-1 font-bold text-bluegray_967 text-left w-[auto]"
                        variant="body35"
                      >
                        $ 176,928
                      </Text>
                      <Img
                        src="images/img_reply_red_a700.svg"
                        className="h-[24px] w-[24px]"
                        alt="reply"
                      />
                    </div>
                  </div>
                </List>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[49%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-[24px] shadow-bs36 w-[100%]">
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_967 text-left w-[auto]"
                        variant="body69"
                      >
                        Total Customer
                      </Text>
                      <Button className="bg-black_902 flex h-[40px] items-center justify-center p-[8px] rounded-[12px] w-[40px]">
                        <Img
                          src="images/img_user_18.svg"
                          className="h-[24px]"
                          alt="user One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text
                        className="flex-1 font-bold text-bluegray_967 text-left w-[auto]"
                        variant="body35"
                      >
                        9,876
                      </Text>
                      <Img
                        src="images/img_cursor_green_504.svg"
                        className="h-[24px] w-[24px]"
                        alt="cursor One"
                      />
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-[24px] shadow-bs36 w-[100%]">
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_967 text-left w-[auto]"
                        variant="body69"
                      >
                        Total real estate
                      </Text>
                      <Button className="bg-black_902 flex h-[40px] items-center justify-center p-[8px] rounded-[12px] w-[40px]">
                        <Img
                          src="images/img_settings_white_a700_40x40.svg"
                          className="h-[24px]"
                          alt="settings Two"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <Text
                        className="flex-1 font-bold text-bluegray_967 text-left w-[auto]"
                        variant="body35"
                      >
                        6,543
                      </Text>
                      <Img
                        src="images/img_reply_red_a700_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="reply One"
                      />
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start pb-[32px] pt-[48px] sm:px-[20px] px-[32px] md:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-start justify-start p-[24px] sm:px-[20px] rounded-[24px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Text
                      className="font-bold text-black_902 text-left w-[auto]"
                      variant="body60"
                    >
                      Total Revenue
                    </Text>
                    <SelectBox
                      className="bg-gray_75 font-normal h-[32px] not-italic p-[12px] rounded-[8px] text-[14px] text-black_902 text-left w-[auto]"
                      placeholderClassName="text-black_902"
                      name="Frame2608850"
                      placeholder="Day"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_black_902_16x16.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="md:h-[341px] h-[352px] sm:h-[563px] relative w-[100%]">
                    <div className="absolute md:h-[341px] h-[346px] sm:h-[563px] inset-[0] justify-center m-[auto] w-[100%]">
                      <div className="absolute flex flex-col items-start justify-start left-[0] top-[1%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_447 text-right w-[auto]"
                          variant="body78"
                        >
                          $ 900k
                        </Text>
                        <Text
                          className="font-normal mt-[33px] not-italic text-bluegray_447 text-right w-[auto]"
                          variant="body78"
                        >
                          $ 700k
                        </Text>
                        <Text
                          className="font-normal mt-[44px] not-italic text-bluegray_447 text-right w-[auto]"
                          variant="body78"
                        >
                          $ 500k
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[48px] mt-[43px] not-italic text-bluegray_447 text-right w-[auto]"
                          variant="body78"
                        >
                          $ 200k
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[2px] mt-[43px] not-italic text-bluegray_447 text-right w-[auto]"
                          variant="body78"
                        >
                          $ 100k
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[35px] mt-[37px] not-italic text-bluegray_447 text-right w-[auto]"
                          variant="body78"
                        >
                          0
                        </Text>
                      </div>
                      <div className="absolute flex flex-col gap-[24px] h-[100%] inset-y-[0] justify-start my-[auto] right-[0] w-[100%]">
                        <Img
                          src="images/img_group40610.svg"
                          className="h-[300px] w-[100%]"
                          alt="Group40610"
                        />
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[86%]">
                          <Text
                            className="font-normal not-italic text-bluegray_447 text-center w-[auto]"
                            variant="body78"
                          >
                            MON
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[23px] not-italic text-bluegray_447 text-center w-[auto]"
                            variant="body78"
                          >
                            TUE
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[100px] not-italic text-bluegray_447 text-center w-[auto]"
                            variant="body78"
                          >
                            WED
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[22px] not-italic text-bluegray_447 text-center w-[auto]"
                            variant="body78"
                          >
                            THU
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[67px] not-italic text-bluegray_447 text-center w-[auto]"
                            variant="body78"
                          >
                            FRI
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[68px] not-italic text-bluegray_447 text-center w-[auto]"
                            variant="body78"
                          >
                            SAT
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[63px] not-italic text-bluegray_447 text-center w-[auto]"
                            variant="body78"
                          >
                            SUN
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute h-[305px] right-[0] top-[0] md:w-[100%] w-[90%]">
                      <Img
                        src="images/img_group40632.png"
                        className="absolute bottom-[0] h-[275px] inset-x-[0] mx-[auto] object-cover w-[auto]"
                        alt="Group40632"
                      />
                      <div className="absolute flex flex-col gap-[16px] h-[100%] md:h-[auto] inset-y-[0] items-center justify-start my-[auto] right-[29%] w-[auto]">
                        <div className="md:h-[38px] h-[46px] relative w-[78px]">
                          <div className="absolute bg-black_902 flex inset-x-[0] items-center justify-end mx-[auto] px-[16px] py-[8px] rounded-[12px] top-[0] w-[auto]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body78"
                            >
                              $ 700k
                            </Text>
                          </div>
                          <Img
                            src="images/img_arrowdown_black_902_17x30.svg"
                            className="absolute bottom-[0] h-[17px] inset-x-[0] mx-[auto] rounded-[2px] w-[30px]"
                            alt="arrowdown One"
                          />
                        </div>
                        <Img
                          src="images/img_frame2609384.svg"
                          className="h-[100%] w-[16px]"
                          alt="Frame2609384"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-[40px] h-[458px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] rounded-[24px] w-[100%]">
                  <Text
                    className="font-bold text-bluegray_967 text-left w-[auto]"
                    variant="body60"
                  >
                    Customer statistics
                  </Text>
                  <div className="bg-white_A700 h-[200px] relative w-[200px]">
                    <Img
                      src="images/img_group40636.svg"
                      className="h-[200px] m-[auto] w-[199px]"
                      alt="Group40636"
                    />
                    <div className="absolute flex flex-col gap-[4px] h-[max-content] inset-[0] items-center justify-start m-[auto] w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_447 text-center w-[auto]"
                        variant="body60"
                      >
                        Total
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_967 text-center w-[auto]"
                        variant="body25"
                      >
                        9,876
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[16px] grid items-start w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row gap-[11px] items-center justify-start w-[115px]">
                        <div className="bg-light_green_618 h-[16px] rounded-[4px] w-[16px]"></div>
                        <Text
                          className="font-normal not-italic text-bluegray_967 text-left w-[auto]"
                          variant="body78"
                        >
                          New Customer
                        </Text>
                      </div>
                      <Text
                        className="font-bold text-bluegray_967 text-left w-[auto]"
                        variant="body78"
                      >
                        3,292
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row gap-[11px] items-center justify-start w-[71px]">
                        <div className="bg-deep_purple_504 h-[16px] rounded-[4px] w-[16px]"></div>
                        <Text
                          className="font-normal not-italic text-bluegray_967 text-left w-[auto]"
                          variant="body78"
                        >
                          Trading
                        </Text>
                      </div>
                      <Text
                        className="font-bold text-bluegray_967 text-left w-[auto]"
                        variant="body78"
                      >
                        3,192
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row gap-[11px] items-center justify-start w-[68px]">
                        <div className="bg-yellow_704 h-[16px] rounded-[4px] w-[16px]"></div>
                        <Text
                          className="font-normal not-italic text-bluegray_967 text-left w-[auto]"
                          variant="body78"
                        >
                          Traded
                        </Text>
                      </div>
                      <Text
                        className="font-bold text-bluegray_967 text-left w-[auto]"
                        variant="body78"
                      >
                        3,392
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col gap-[32px] items-start justify-start max-w-[1126px] w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                  <Text
                    className="flex-1 font-bold text-bluegray_967 text-left w-[auto]"
                    variant="body48"
                  >
                    Best selling real estate
                  </Text>
                  <Img
                    src="images/img_info_bluegray_967.svg"
                    className="h-[40px] w-[96px]"
                    alt="info One"
                  />
                </div>
                <div className="font-sfprodisplay gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[16px] items-center justify-start p-[24px] sm:px-[20px] rounded-[24px] w-[100%]">
                    <div className="bg-gray_457 h-[214px] rounded-[24px] w-[100%]"></div>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <div className="h-[24px] relative w-[100%]">
                          <Text
                            className="font-semibold ml-[auto] my-[auto] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Villas S1.A1.D1
                          </Text>
                          <Text
                            className="absolute font-semibold h-[100%] inset-y-[0] my-[auto] right-[0] text-light_green_618 text-right w-[auto]"
                            variant="body69"
                          >
                            $456,987
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-start w-[311px]">
                          <Img
                            src="images/img_eye_gray_663.svg"
                            className="h-[20px] w-[20px]"
                            alt="eye"
                          />
                          <Text
                            className="font-normal not-italic text-bluegray_757 text-left w-[auto]"
                            variant="body78"
                          >
                            Orient Commercial
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-indigo_57 h-[1px] w-[99%]" />
                      <div className="flex flex-row gap-[24px] items-start justify-start w-[224px]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_location_gray_663.svg"
                            className="h-[20px] w-[20px]"
                            alt="location One"
                          />
                          <Text
                            className="font-normal not-italic text-gray_663 text-left w-[auto]"
                            variant="body78"
                          >
                            2 Living room
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_grid_gray_663.svg"
                            className="h-[20px] w-[20px]"
                            alt="grid"
                          />
                          <Text
                            className="font-normal not-italic text-gray_663 text-left w-[auto]"
                            variant="body78"
                          >
                            5 Bedroom
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex-1 h-[386px] p-[24px] sm:px-[20px] rounded-[24px] w-[100%]"></div>
                  <div className="bg-white_A700 flex-1 h-[386px] p-[24px] sm:px-[20px] rounded-[24px] w-[100%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewOnePage;
