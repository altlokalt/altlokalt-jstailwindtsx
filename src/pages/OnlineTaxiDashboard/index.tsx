import React from "react";

import { Img, Text, Line, Button, List } from "components";

const OnlineTaxiDashboardPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_104 flex font-poppins items-start justify-end mx-[auto] pr-[181px] sm:pr-[20px] md:pr-[40px] w-[100%]">
        <div className="flex flex-col gap-[40px] items-center justify-end w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <div className="bg-white_A700 flex items-center justify-center pb-[24px] sm:px-[20px] px-[24px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center md:w-[100%] w-[92%]">
                <div className="md:h-[31px] h-[35px] relative md:w-[100%] w-[9%]">
                  <Img
                    src="images/img_location_orange_310.svg"
                    className="absolute h-[31px] left-[0] top-[0] w-[auto]"
                    alt="location"
                  />
                  <Text
                    className="absolute bottom-[0] font-semibold right-[0] text-black_902 text-left w-[auto]"
                    variant="body64"
                  >
                    nlineTaxi
                  </Text>
                </div>
                <Line className="bg-bluegray_142 md:h-[1px] h-[56px] md:ml-[0] ml-[40px] md:mt-[0] mt-[24px] md:w-[100%] w-[1px]" />
                <div className="flex flex-col gap-[38px] justify-start mb-[11px] md:ml-[0] ml-[38px] md:w-[100%] w-[49%]">
                  <Line className="bg-orange_310 h-[6px] mr-[514px] rounded-[1px] w-[17%]" />
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[11px] md:w-[100%] w-[99%]">
                    <div className="flex flex-row gap-[8px] items-center justify-start sm:w-[100%] w-[14%]">
                      <Img
                        src="images/img_home_orange_310.svg"
                        className="h-[24px] w-[24px]"
                        alt="home"
                      />
                      <Text
                        className="font-medium text-left text-orange_310 w-[auto]"
                        variant="body69"
                      >
                        Home
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-start justify-center sm:w-[100%] w-[18%]">
                      <Img
                        src="images/img_volume_bluegray_621.svg"
                        className="h-[24px] mb-[2px] w-[24px]"
                        alt="volume"
                      />
                      <Text
                        className="font-normal mt-[2px] not-italic text-bluegray_621 text-left w-[auto]"
                        variant="body69"
                      >
                        Message
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-center sm:w-[100%] w-[16%]">
                      <Img
                        src="images/img_call_bluegray_621.svg"
                        className="h-[24px] w-[24px]"
                        alt="call"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_621 text-left w-[auto]"
                        variant="body69"
                      >
                        Statistic
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-start justify-center sm:w-[100%] w-[13%]">
                      <Img
                        src="images/img_location_bluegray_621.svg"
                        className="h-[24px] mb-[2px] w-[24px]"
                        alt="location One"
                      />
                      <div className="flex items-center justify-start mt-[2px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_621 text-left w-[auto]"
                          variant="body69"
                        >
                          Maps
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-start justify-between sm:w-[100%] w-[15%]">
                      <Img
                        src="images/img_setting.svg"
                        className="h-[24px] mb-[2px] w-[24px]"
                        alt="Setting"
                      />
                      <div className="flex items-center justify-start mt-[2px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_621 text-left w-[auto]"
                          variant="body69"
                        >
                          Setting
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[24px] items-end justify-between md:ml-[0] ml-[249px] md:w-[100%] w-[19%]">
                  <Img
                    src="images/img_notification_gray_1005.svg"
                    className="h-[24px] mb-[2px] mt-[6px] w-[24px]"
                    alt="notification"
                  />
                  <ul className="flex flex-row sm:hidden items-end justify-between w-[80%] common-row-list">
                    <li className="sm:w-[100%] sm:my-[10px] w-[18%]">
                      <div className="bg-gray_400 h-[32px] w-[32px]"></div>
                    </li>
                    <li className="mt-[6px] mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                      <a
                        className="cursor-pointer font-medium text-[16px] text-bluegray_971 text-left"
                        href="javascript:"
                      >
                        Karina Igniaz
                      </a>
                    </li>
                    <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[8px]">
                      <Img
                        src="images/img_arrowdown_16x16.svg"
                        className="h-[16px]"
                        alt="arrowdown"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start md:w-[100%] w-[95%]">
            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[35%]">
              <div className="bg-white_A700 flex items-center justify-end p-[22px] sm:px-[20px] rounded-[10px] w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="bg-white_A700 border-[1px] border-gray_339 border-solid flex items-center justify-start p-[24px] sm:px-[20px] rounded-[10px] w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[66%]">
                        <div className="bg-white_A700 flex h-[24px] items-center justify-start mb-[4px] p-[6px] w-[24px]">
                          <div className="bg-black_902 h-[12px] rounded-[50%] w-[12px]"></div>
                        </div>
                        <Text
                          className="font-semibold text-bluegray_971 text-left w-[auto]"
                          variant="body64"
                        >
                          2356 Gg. Ranggo Road
                        </Text>
                      </div>
                      <Line className="bg-bluegray_65 h-[1px] mt-[13px] w-[100%]" />
                      <div className="flex flex-row gap-[16px] items-center justify-start mt-[14px] md:w-[100%] w-[49%]">
                        <Img
                          src="images/img_location_orange_310_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="location Two"
                        />
                        <Text
                          className="font-medium text-bluegray_143 text-left w-[auto]"
                          variant="body64"
                        >
                          End Destination
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[22px] items-start justify-start mt-[24px] md:w-[100%] w-[64%]">
                    <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[89%]">
                      <Button className="bg-white_A700 border-[1px] border-gray_340 border-solid flex h-[40px] items-center justify-center mb-[8px] mt-[4px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_home_black_902.svg"
                          className="h-[24px]"
                          alt="home Two"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_971 text-left w-[auto]"
                          variant="body64"
                        >
                          Home
                        </Text>
                        <Text
                          className="font-medium text-gray_561 text-left w-[auto]"
                          variant="body69"
                        >
                          2356 Gg. Ranggo Road
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                      <Button className="bg-white_A700 border-[1px] border-gray_340 border-solid flex h-[40px] items-center justify-center mb-[8px] mt-[5px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_bag_black_902.svg"
                          className="h-[24px]"
                          alt="bag"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_971 text-left w-[auto]"
                          variant="body64"
                        >
                          Work
                        </Text>
                        <Text
                          className="font-medium mt-[2px] text-gray_561 text-left w-[auto]"
                          variant="body69"
                        >
                          2134 Gg. Cikoekoeloe Road
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start mt-[22px] md:w-[100%] w-[76%]">
                    <Text
                      className="font-semibold text-bluegray_971 text-left w-[auto]"
                      variant="body69"
                    >
                      Recent
                    </Text>
                    <List
                      className="flex-col gap-[15px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-1 flex-row gap-[16px] items-start justify-start md:w-[100%] w-[80%]">
                        <div className="bg-white_A700 flex h-[24px] items-center justify-start p-[6px] w-[24px]">
                          <div className="bg-black_902 h-[12px] rounded-[50%] w-[12px]"></div>
                        </div>
                        <Text
                          className="font-medium text-gray_561 text-left w-[auto]"
                          variant="body69"
                        >
                          2134 Gg. Cikoekoeloe Road
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-[16px] items-start justify-start w-[100%]">
                        <div className="bg-white_A700 flex h-[24px] items-center justify-start p-[6px] w-[24px]">
                          <div className="bg-black_902 h-[12px] rounded-[50%] w-[12px]"></div>
                        </div>
                        <Text
                          className="font-medium text-gray_561 text-left w-[auto]"
                          variant="body69"
                        >
                          5464 Lingakr Soedirman City Road
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[23px] items-center justify-end p-[24px] sm:px-[20px] rounded-[10px] shadow-bs111 w-[100%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-bluegray_971 text-left w-[auto]"
                    variant="body64"
                  >
                    Top Drivers
                  </Text>
                  <Img
                    src="images/img_frame2.svg"
                    className="h-[24px] w-[24px]"
                    alt="FrameTwo"
                  />
                </div>
                <List
                  className="flex-col gap-[21px] grid items-start md:w-[100%] w-[424px]"
                  orientation="vertical"
                >
                  <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                    <div className="flex flex-row gap-[24px] items-center justify-start w-[37%]">
                      <div className="bg-gray_400 h-[32px] rounded-[50%] w-[32px]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_971 text-left w-[auto]"
                        variant="body78"
                      >
                        Ari Indiriandra
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[16px] items-center justify-between w-[26%]">
                      <Text
                        className="font-normal not-italic text-gray_440 text-left w-[auto]"
                        variant="body78"
                      >
                        View detail
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_440.svg"
                        className="h-[16px] w-[16px]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                    <div className="flex flex-row gap-[24px] items-start justify-start w-[36%]">
                      <div className="bg-gray_400 h-[32px] rounded-[50%] w-[32px]"></div>
                      <Text
                        className="font-normal mt-[3px] not-italic text-bluegray_971 text-left w-[auto]"
                        variant="body78"
                      >
                        Arya Laksana
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[16px] items-start justify-between mt-[3px] w-[26%]">
                      <Text
                        className="font-normal not-italic text-gray_440 text-left w-[auto]"
                        variant="body78"
                      >
                        View detail
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_440.svg"
                        className="h-[16px] mt-[4px] w-[16px]"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                    <div className="flex flex-row gap-[24px] items-center justify-start w-[38%]">
                      <div className="bg-gray_400 h-[32px] rounded-[50%] w-[32px]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_971 text-left w-[auto]"
                        variant="body78"
                      >
                        Kamdun Storia
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[16px] items-start justify-between w-[26%]">
                      <Text
                        className="font-normal not-italic text-gray_440 text-left w-[auto]"
                        variant="body78"
                      >
                        View detail
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_440.svg"
                        className="h-[16px] mt-[2px] w-[16px]"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <Img
              src="images/img_group9381.svg"
              className="h-[716px] w-[auto]"
              alt="Group9381"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineTaxiDashboardPage;
