import React from "react";

import { Img, Text, Line, Button, Switch, List } from "components";

const CityTempPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-ubuntu items-center justify-end mx-[auto] pt-[16px] px-[16px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between max-w-[1362px] mt-[2px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="md:h-[884px] sm:h-[912px] h-[980px] relative md:w-[100%] w-[20%]">
            <div className="md:h-[884px] sm:h-[912px] h-[980px] m-[auto] w-[100%]">
              <div className="absolute bg-gray_78 flex flex-col h-[100%] inset-y-[0] justify-end left-[0] my-[auto] p-[15px] rounded-[20px] w-[93%]">
                <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[28px] mr-[50px] mt-[82px] md:w-[100%] w-[63%]">
                  <Img
                    src="images/img_bookmark_indigo_a209.svg"
                    className="h-[30px] w-[auto]"
                    alt="bookmark"
                  />
                  <Text
                    className="font-bold text-indigo_907 text-left w-[auto]"
                    variant="body44"
                  >
                    HouSmart.
                  </Text>
                </div>
                <div className="flex flex-col gap-[52px] items-center justify-start md:ml-[0] ml-[19px] mr-[86px] mt-[165px] md:w-[100%] w-[50%]">
                  <div className="md:h-[19px] h-[22px] relative w-[97%]">
                    <div className="absolute flex flex-row gap-[26px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
                      <Img
                        src="images/img_computer_indigo_309.svg"
                        className="h-[16px] w-[auto]"
                        alt="computer"
                      />
                      <Text
                        className="font-normal not-italic text-indigo_309 text-left w-[auto]"
                        variant="body69"
                      >
                        Devices
                      </Text>
                    </div>
                    <Img
                      src="images/img_signal_indigo_309.svg"
                      className="absolute bottom-[0] h-[11px] left-[2%] w-[auto]"
                      alt="signal"
                    />
                  </div>
                  <div className="sm:h-[107px] h-[168px] md:h-[79px] relative w-[100%]">
                    <div className="absolute md:h-[73px] h-[93px] inset-x-[0] mx-[auto] top-[0] w-[99%]">
                      <div className="absolute flex items-center justify-start right-[0] top-[0] w-[auto]">
                        <Text
                          className="font-normal not-italic text-indigo_309 text-left w-[auto]"
                          variant="body69"
                        >
                          Statistic
                        </Text>
                      </div>
                      <div className="absolute flex flex-col md:gap-[40px] gap-[60px] h-[100%] inset-y-[0] justify-start left-[0] my-[auto] w-[83%]">
                        <Img
                          src="images/img_user_indigo_309.svg"
                          className="h-[14px] w-[auto]"
                          alt="user"
                        />
                        <Text
                          className="font-normal md:ml-[0] ml-[44px] not-italic text-indigo_309 text-left w-[auto]"
                          variant="body69"
                        >
                          Users
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col md:gap-[40px] gap-[68px] inset-x-[0] justify-start mx-[auto] w-[100%]">
                      <Img
                        src="images/img_checkmark_indigo_309.svg"
                        className="h-[20px] w-[20px]"
                        alt="checkmark"
                      />
                      <Text
                        className="font-normal md:ml-[0] ml-[46px] not-italic text-indigo_309 text-left w-[auto]"
                        variant="body69"
                      >
                        Security
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo_A209 flex flex-col gap-[26px] items-start justify-end mb-[5px] mt-[258px] p-[22px] sm:px-[20px] rounded-[10px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    Contact Support
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[2px] not-italic text-left text-white_A700"
                    variant="body87"
                  >
                    Any questions or <br />
                    inquiries let us know
                  </Text>
                </div>
              </div>
              <div className="absolute bg-white_A700 h-[58px] right-[0] rounded-[20px] top-[25%] w-[96%]"></div>
            </div>
            <div className="absolute flex flex-col gap-[25px] justify-start left-[12%] top-[23%] w-[38%]">
              <Img
                src="images/img_home_indigo_a209.svg"
                className="h-[18px] w-[auto]"
                alt="home"
              />
              <Text
                className="font-normal md:ml-[0] ml-[48px] not-italic text-indigo_907 text-left w-[auto]"
                variant="body69"
              >
                Rooms
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[79%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[99%]">
              <Img
                src="images/img_search_bluegray_233.svg"
                className="h-[17px] w-[auto]"
                alt="search"
              />
              <Text
                className="font-normal md:ml-[0] ml-[32px] md:mt-[0] mt-[11px] not-italic text-indigo_309 text-left w-[auto]"
                variant="body78"
              >
                Looking for room?
              </Text>
              <div className="bg-indigo_907 h-[30px] md:ml-[0] ml-[810px] md:mt-[0] mt-[12px] rounded-[50%] w-[30px]"></div>
              <Img
                src="images/img_notification_indigo_907.svg"
                className="h-[20px] md:ml-[0] ml-[23px] md:mt-[0] mt-[5px] w-[auto]"
                alt="notification"
              />
            </div>
            <Line className="bg-blue_59 h-[2px] md:ml-[0] ml-[4px] mt-[5px] w-[66%]" />
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[64px] w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start md:w-[100%] w-[67%]">
                <div className="flex flex-col gap-[26px] items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-indigo_907 text-left w-[auto]"
                    variant="body48"
                  >
                    <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-ubuntu font-bold">
                      Hello
                    </span>
                    <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-ubuntu">
                      , Alex
                    </span>
                    <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-ubuntu">
                      ander !
                    </span>
                  </Text>
                  <div className="bg-gray_1014 flex items-end justify-end p-[16px] rounded-[20px] w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[50px] items-center justify-end mr-[4px] mt-[3px] md:w-[100%] w-[93%]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[59%]">
                        <Text
                          className="font-bold md:ml-[0] ml-[2px] text-left text-white_A700 w-[auto]"
                          variant="body35"
                        >
                          Living Rooms
                        </Text>
                        <Text
                          className="font-medium mt-[41px] text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          3 Devices in room
                        </Text>
                        <Text
                          className="font-normal mt-[15px] not-italic text-gray_458 text-left"
                          variant="body69"
                        >
                          In the room the living room has several devices <br />
                          that can be connected easily and quickly.
                        </Text>
                        <div className="flex flex-row items-end justify-between mt-[15px] w-[100%]">
                          <div className="flex flex-col gap-[14px] items-start justify-start mt-[25px] w-[45%]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body78"
                            >
                              Electricity usage
                            </Text>
                            <div className="bg-white_A700 flex items-start justify-end p-[6px] rounded-[10px] w-[100%]">
                              <div className="flex flex-row gap-[11px] items-center justify-start md:ml-[0] ml-[5px] mr-[auto] md:w-[100%] w-[76%]">
                                <Button className="bg-indigo_A209 flex h-[42px] items-center justify-center p-[11px] rounded-[10px] w-[42px]">
                                  <Img
                                    src="images/img_reply_white_a700.svg"
                                    className=""
                                    alt="reply"
                                  />
                                </Button>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-indigo_907 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    94 kwh
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-indigo_309 text-left w-[auto]"
                                    variant="body98"
                                  >
                                    Intensity days
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[44px] justify-start w-[45%]">
                            <Img
                              src="images/img_group4.svg"
                              className="h-[13px] md:ml-[0] ml-[24px] w-[auto]"
                              alt="GroupFour"
                            />
                            <div className="bg-white_A700 flex items-start justify-end p-[6px] rounded-[10px] w-[100%]">
                              <div className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[5px] mr-[auto] md:w-[100%] w-[82%]">
                                <div className="bg-indigo_A209 h-[42px] rounded-[10px] w-[42px]"></div>
                                <div className="flex flex-col items-start justify-start mt-[4px] w-[auto]">
                                  <Text
                                    className="font-medium text-indigo_907 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    35%
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-indigo_309 text-left w-[auto]"
                                    variant="body98"
                                  >
                                    Montly capacity
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo_A209 flex items-center justify-start p-[23px] sm:px-[20px] rounded-[20px] md:w-[100%] w-[34%]">
                        <div className="flex flex-col items-start justify-start mb-[19px] mt-[12px] md:w-[100%] w-[96%]">
                          <div className="flex flex-row gap-[49px] items-start justify-start md:w-[100%] w-[95%]">
                            <Img
                              src="images/img_settings_white_a700_87x87.svg"
                              className="h-[87px] w-[87px]"
                              alt="settings"
                            />
                            <Img
                              src="images/img_menu_white_a700_39x12.svg"
                              className="h-[39px] mt-[10px] w-[auto]"
                              alt="menu"
                            />
                          </div>
                          <Text
                            className="font-bold mt-[48px] text-left text-white_A700 w-[auto]"
                            variant="body69"
                          >
                            <span className="text-white_A700 text-[16px] font-ubuntu">
                              LIVING{" "}
                            </span>
                            <span className="text-white_A700 text-[16px] font-ubuntu font-normal not-italic">
                              ROOM
                            </span>
                          </Text>
                          <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] w-[53%]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body30"
                            >
                              -05
                            </Text>
                            <div className="border-[1px] border-solid border-white_A700 h-[6px] ml-[12px] mt-[18px] rounded-[50%] w-[6px]"></div>
                            <Text
                              className="font-normal ml-[2px] mt-[17px] not-italic text-left text-white_A700 w-[auto]"
                              variant="body69"
                            >
                              c
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[21px] not-italic text-left text-white_A700"
                            variant="body87"
                          >
                            Power saving using this tool <br />
                            is about 45% .
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[98%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[336px] items-center justify-end p-[10px] md:w-[100%] w-[33%]"
                    style={{
                      backgroundImage:
                        "url('images/img_imagehere_indigo_907.svg')",
                    }}
                  >
                    <div className="bg-white_A700 flex items-start justify-start mt-[191px] p-[18px] rounded-[20px] md:w-[100%] w-[96%]">
                      <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] ml-[2px] md:w-[100%] w-[82%]">
                        <div className="flex flex-row gap-[6px] items-end justify-between w-[100%]">
                          <Text
                            className="font-medium text-indigo_907 text-left w-[auto]"
                            variant="body69"
                          >
                            Workspace
                          </Text>
                          <Text
                            className="font-light mt-[6px] text-indigo_309 text-left w-[auto]"
                            variant="body98"
                          >
                            4 Devices
                          </Text>
                        </div>
                        <Text
                          className="font-normal mt-[23px] not-italic text-indigo_309 text-left w-[auto]"
                          variant="body98"
                        >
                          53% of Montly Goals
                        </Text>
                        <Text
                          className="font-normal mt-[11px] not-italic text-indigo_309 text-left w-[auto]"
                          variant="body98"
                        >
                          Monitoring ON
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:mt-[0] mt-[34px] md:w-[100%] w-[59%]">
                    <Text
                      className="font-medium md:ml-[0] ml-[6px] text-indigo_907 text-left w-[auto]"
                      variant="body69"
                    >
                      Smart Area in Home
                    </Text>
                    <div className="h-[39px] md:h-[53px] md:ml-[0] ml-[5px] mt-[14px] relative sm:w-[100%] w-[95%]">
                      <Text
                        className="font-normal m-[auto] not-italic text-indigo_309 text-left"
                        variant="body78"
                      >
                        Select the next section to see how much electricity
                        intensity <br />
                        is being used at this time.
                      </Text>
                      <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[85%]">
                        <Img
                          src="images/img_bed.svg"
                          className="h-[28px] w-[auto]"
                          alt="Bed"
                        />
                        <Img
                          src="images/img_vector_indigo_907.svg"
                          className="h-[25px] mt-[4px] w-[25px]"
                          alt="Vector"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[39px] w-[100%]">
                      <div className="bg-gray_78 flex flex-col gap-[12px] items-center justify-center p-[27px] sm:px-[20px] rounded-[10px] w-[auto]">
                        <Text
                          className="capitalize font-medium mt-[77px] text-indigo_907 text-left tracking-[0.60px] w-[auto]"
                          variant="body87"
                        >
                          Bedrooms
                        </Text>
                        <Text
                          className="font-normal mb-[3px] not-italic text-center text-indigo_309"
                          variant="body98"
                        >
                          5 Devices
                          <br />
                          Connected
                        </Text>
                      </div>
                      <div className="bg-gray_78 flex flex-col items-center justify-end p-[30px] sm:px-[20px] rounded-[10px] w-[29%]">
                        <Img
                          src="images/img_calculator_indigo_907.svg"
                          className="h-[24px] mt-[31px] w-[auto]"
                          alt="calculator"
                        />
                        <Text
                          className="capitalize font-medium mt-[18px] text-indigo_907 text-left tracking-[0.60px] w-[auto]"
                          variant="body87"
                        >
                          Kitchen
                        </Text>
                        <Text
                          className="font-normal mt-[12px] not-italic text-center text-indigo_309"
                          variant="body98"
                        >
                          2 Devices
                          <br />
                          Connected
                        </Text>
                      </div>
                      <div className="bg-gray_78 flex flex-col gap-[12px] items-center justify-center p-[22px] sm:px-[20px] rounded-[10px] w-[auto]">
                        <Text
                          className="capitalize font-medium mt-[82px] text-indigo_907 text-left tracking-[0.60px] w-[auto]"
                          variant="body87"
                        >
                          Study Room
                        </Text>
                        <Text
                          className="font-normal mb-[8px] not-italic text-center text-indigo_309"
                          variant="body98"
                        >
                          3 Devices
                          <br />
                          Connected
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[6px] md:w-[100%] w-[25%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-indigo_907 text-left w-[auto]"
                    variant="body48"
                  >
                    My Devices
                  </Text>
                  <div className="flex flex-row gap-[20px] items-start justify-between mt-[28px] md:w-[100%] w-[98%]">
                    <div className="md:h-[149px] h-[164px] relative w-[46%]">
                      <div className="absolute border-[1px] border-blue_59 border-solid flex flex-col gap-[15px] h-[max-content] inset-[0] items-center justify-center m-[auto] p-[26px] sm:px-[20px] rounded-[20px] w-[100%]">
                        <Text
                          className="font-medium mt-[48px] text-indigo_907 text-left w-[auto]"
                          variant="body87"
                        >
                          AC
                        </Text>
                        <Switch
                          onColor="#25396f"
                          offColor="#e9eaf0"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="w-[64%]"
                        />
                      </div>
                      <Img
                        src="images/img_signal_bluegray_233.svg"
                        className="absolute bottom-[0] h-[13px] left-[21%] w-[auto]"
                        alt="signal One"
                      />
                      <Img
                        src="images/img_airplane_indigo_907.svg"
                        className="absolute h-[20px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                        alt="airplane"
                      />
                    </div>
                    <div className="md:h-[149px] h-[154px] relative w-[46%]">
                      <div className="absolute border-[1px] border-blue_59 border-solid flex flex-col gap-[15px] h-[max-content] inset-[0] items-center justify-center m-[auto] p-[26px] sm:px-[20px] rounded-[20px] w-[100%]">
                        <Text
                          className="font-medium mt-[48px] text-bluegray_233 text-left w-[auto]"
                          variant="body87"
                        >
                          Television
                        </Text>
                        <Switch
                          onColor="#25396f"
                          offColor="#e9eaf0"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={false}
                          className="w-[64%]"
                        />
                      </div>
                      <Img
                        src="images/img_computer_bluegray_233.svg"
                        className="absolute h-[18px] left-[37%] top-[0] w-[auto]"
                        alt="computer One"
                      />
                    </div>
                  </div>
                  <div className="border-[1px] border-blue_59 border-solid flex flex-row items-center justify-start mt-[11px] p-[6px] rounded-[20px] md:w-[100%] w-[98%]">
                    <Img
                      src="images/img_camera_bluegray_233.svg"
                      className="h-[20px] ml-[18px] mt-[66px] w-[19px]"
                      alt="camera"
                    />
                    <Text
                      className="font-medium ml-[15px] text-bluegray_233 text-left w-[auto]"
                      variant="body78"
                    >
                      Wifi Hotspot
                    </Text>
                    <Switch
                      onColor="#25396f"
                      offColor="#e9eaf0"
                      onHandleColor="#ffffff"
                      offHandleColor="#ffffff"
                      value={false}
                      className="mb-[31px] ml-[38px] mt-[35px] w-[17%]"
                    />
                  </div>
                  <div className="border-[1px] border-blue_59 border-solid flex flex-row items-center justify-between mt-[20px] p-[29px] sm:px-[20px] rounded-[20px] md:w-[100%] w-[98%]">
                    <Text
                      className="font-medium ml-[30px] text-bluegray_233 text-left w-[auto]"
                      variant="body78"
                    >
                      Lamps
                    </Text>
                    <Switch
                      onColor="#25396f"
                      offColor="#e9eaf0"
                      onHandleColor="#ffffff"
                      offHandleColor="#ffffff"
                      value={false}
                      className="mb-[9px] mt-[13px] w-[auto]"
                    />
                  </div>
                  <Text
                    className="font-medium mt-[55px] text-indigo_907 text-left w-[auto]"
                    variant="body48"
                  >
                    Friend at home
                  </Text>
                  <List
                    className="flex-col gap-[30px] grid items-center mt-[38px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <div className="bg-indigo_907 h-[40px] rounded-[10px] w-[40px]"></div>
                      <Text
                        className="font-normal ml-[21px] not-italic text-indigo_907 text-left w-[auto]"
                        variant="body69"
                      >
                        Smith Walker
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_458.svg"
                        className="h-[12px] ml-[94px] w-[auto]"
                        alt="arrowright"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <div className="bg-indigo_907 h-[40px] rounded-[10px] w-[40px]"></div>
                      <Text
                        className="font-normal ml-[21px] not-italic text-indigo_907 text-left w-[auto]"
                        variant="body69"
                      >
                        Wesker Adrian
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_458.svg"
                        className="h-[12px] ml-[85px] w-[auto]"
                        alt="arrowright One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <div className="bg-indigo_907 h-[40px] rounded-[10px] w-[40px]"></div>
                      <Text
                        className="font-normal ml-[21px] not-italic text-indigo_907 text-left w-[auto]"
                        variant="body69"
                      >
                        Elia Hadid
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_458.svg"
                        className="h-[12px] ml-[117px] w-[auto]"
                        alt="arrowright Two"
                      />
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityTempPage;
