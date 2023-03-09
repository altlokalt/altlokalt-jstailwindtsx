import React from "react";

import { Text, Img, Button, Line } from "components";

const IPadminiEightPage: React.FC = () => {
  return (
    <>
      <div className="bg-bluegray_973 font-lato h-[655px] mx-[auto] pt-[17px] px-[17px] relative rotate-[-90deg] w-[100%]">
        <div className="absolute bg-gray_1012 bottom-[0] flex items-center justify-start p-[22px] md:px-[20px] right-[3%] rounded-[19px] w-[74%]">
          <div className="flex flex-col gap-[38px] items-center justify-start mb-[222px] md:w-[100%] w-[99%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[97%]">
              <Text
                className="font-black rotate-[90deg] text-left text-white_A700 w-[auto]"
                variant="body39"
              >
                Overview
              </Text>
              <div className="bg-bluegray_973 flex flex-row items-center justify-between md:ml-[0] ml-[127px] p-[8px] rounded-[20px] md:w-[100%] w-[46%]">
                <Text
                  className="ml-[18px] not-italic rotate-[90deg] text-left text-white_A700_75 w-[auto]"
                  variant="body76"
                >
                  Search...
                </Text>
                <div className="h-[43px] relative w-[22%]">
                  <div className="absolute bg-indigo_A207 h-[43px] inset-y-[0] my-[auto] right-[0] rotate-[90deg] rounded-[16px] w-[92%]"></div>
                  <Img
                    src="images/img_search_11x14.svg"
                    className="absolute h-[11px] left-[0] top-[14%] w-[auto]"
                    alt="search One"
                  />
                </div>
              </div>
              <Img
                src="images/img_notification_bluegray_450.svg"
                className="h-[23px] md:ml-[0] ml-[12px] w-[auto]"
                alt="notification"
              />
              <Img
                src="images/img_group41.svg"
                className="h-[46px] md:ml-[0] ml-[19px] w-[auto]"
                alt="GroupFortyOne"
              />
              <Img
                src="images/img_arrowdown_bluegray_451.svg"
                className="h-[11px] md:ml-[0] ml-[13px] w-[11px]"
                alt="arrowdown"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between w-[100%]">
              <div className="bg-bluegray_973 flex md:flex-1 items-center justify-start mb-[58px] pb-[15px] rounded-[26px] shadow-bs122 md:w-[100%] w-[54%]">
                <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                  <div className="bg-black_900_2d flex items-center justify-end p-[92px] sm:px-[20px] md:px-[40px] rounded-bl-[26px] rounded-br-[0] rounded-tl-[26px] rounded-tr-[26px] w-[100%]">
                    <Button className="bg-white_A700_23 flex items-center justify-center mt-[4px] p-[10px] rotate-[90deg] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_play_white_a700_50x51.svg"
                        className="h-[29px]"
                        alt="play"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-between md:w-[100%] w-[90%]">
                    <Text
                      className="font-bold rotate-[90deg] text-left text-white_A700 w-[auto]"
                      variant="body82"
                    >
                      26:30 - 1:10:13
                    </Text>
                    <Button className="bg-amber_401 cursor-pointer font-bold leading-[normal] min-w-[240px] py-[9px] rotate-[90deg] rounded-[10px] text-[14px] text-center text-gray_1013 w-[auto]">
                      Continue your recent courses &gt;
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:h-[361px] h-[364px] relative rotate-[90deg] md:w-[100%] w-[44%]">
                <div className="absolute bg-bluegray_973 flex flex-col h-[100%] inset-[0] items-end justify-center m-[auto] p-[18px] rounded-[26px] shadow-bs122 w-[98%]">
                  <Text
                    className="font-bold mt-[5px] text-left text-white_A700 w-[auto]"
                    variant="body64"
                  >
                    Ranking
                  </Text>
                  <div className="flex flex-row items-start justify-center mt-[15px] rotate-[-90deg] md:w-[100%] w-[70%]">
                    <Text
                      className="font-bold h-[16px] rotate-[90deg] text-center text-white_A700 w-[auto]"
                      variant="body82"
                    >
                      All
                    </Text>
                    <Text
                      className="font-normal ml-[56px] not-italic rotate-[90deg] text-center text-white_A700_87 w-[auto]"
                      variant="body82"
                    >
                      Average
                    </Text>
                    <Text
                      className="font-normal ml-[56px] not-italic rotate-[90deg] text-center text-white_A700_87 w-[auto]"
                      variant="body82"
                    >
                      Class
                    </Text>
                  </div>
                  <div className="bg-indigo_A207 h-[3px] mr-[227px] mt-[7px] w-[12%]"></div>
                  <Button className="bg-bluegray_974 cursor-pointer font-bold leading-[normal] mb-[3px] min-w-[300px] mt-[202px] py-[16px] rounded-[16px] text-[15px] text-center text-white_A700 w-[auto]">
                    View all (54)
                  </Button>
                </div>
                <div className="absolute h-[194px] md:h-[84px] inset-y-[0] left-[0] my-[auto] w-[95%]">
                  <div className="absolute flex flex-col inset-x-[0] mx-[auto] top-[0] w-[100%]">
                    <div className="flex flex-col mx-[auto] w-[100%]">
                      <div className="md:h-[65px] h-[72px] mx-[auto] w-[100%]">
                        <div className="absolute bg-bluegray_974 bottom-[0] h-[43px] right-[0] rounded-[6px] w-[93%]"></div>
                        <div className="absolute flex flex-row items-end justify-start left-[0] top-[0] w-[94%]">
                          <Img
                            src="images/img_settings_red_a106.svg"
                            className="h-[65px] w-[auto]"
                            alt="settings"
                          />
                          <Text
                            className="font-normal mb-[4px] ml-[21px] mt-[43px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            Floyd Miles
                          </Text>
                          <Text
                            className="font-bold mb-[6px] ml-[99px] mt-[42px] text-right text-white_A700 w-[auto]"
                            variant="body82"
                          >
                            98/100
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-center justify-start mt-[-35.41px] w-[94%] z-[1]">
                        <div className="flex flex-row items-end justify-start w-[100%]">
                          <Img
                            src="images/img_settings_red_a106.svg"
                            className="h-[71px] w-[71px]"
                            alt="settings One"
                          />
                          <Text
                            className="font-normal mb-[4px] ml-[21px] mt-[50px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            Bessie Cooper
                          </Text>
                          <Text
                            className="font-bold mb-[6px] ml-[81px] mt-[48px] text-right text-white_A700 w-[auto]"
                            variant="body82"
                          >
                            95/100
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[43px] h-[84px] mt-[-34.73px] mx-[auto] w-[100%] z-[1]">
                      <div className="absolute bg-bluegray_974 bottom-[0] h-[43px] right-[0] rounded-[6px] w-[93%]"></div>
                      <div className="absolute flex flex-row items-start justify-start left-[0] top-[0] w-[94%]">
                        <Img
                          src="images/img_settings_red_a106.svg"
                          className="h-[77px] w-[auto]"
                          alt="settings Two"
                        />
                        <Text
                          className="font-normal ml-[21px] mt-[55px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body78"
                        >
                          Darlene Robertson
                        </Text>
                        <Text
                          className="font-bold ml-[52px] mt-[55px] text-right text-white_A700 w-[auto]"
                          variant="body82"
                        >
                          88/100
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex items-center justify-start left-[0] w-[94%]">
                    <div className="flex flex-row items-end justify-start w-[100%]">
                      <Img
                        src="images/img_settings_red_a106.svg"
                        className="h-[84px] w-[auto]"
                        alt="settings Three"
                      />
                      <Text
                        className="font-normal mb-[4px] ml-[21px] mt-[62px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body78"
                      >
                        Guy Hawkins
                      </Text>
                      <Text
                        className="font-bold mb-[6px] ml-[89px] mt-[61px] text-right text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        86/100
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col font-nunito gap-[40px] justify-start left-[3%] md:px-[20px] top-[7%] w-[23%]">
          <Text
            className="font-black md:ml-[0] ml-[122px] rotate-[90deg] text-center text-indigo_A207 tracking-[1.60px] w-[auto]"
            variant="body35"
          >
            <span className="md:text-[30px] sm:text-[28px] text-indigo_A207 text-[32px] font-nunito">
              learn
            </span>
            <span className="md:text-[30px] sm:text-[28px] text-amber_401 text-[32px] font-nunito">
              y.
            </span>
          </Text>
          <div className="font-lato h-[280px] relative w-[100%]">
            <div className="absolute bg-bluegray_974 flex flex-row gap-[22px] items-center justify-end sm:pl-[20px] md:pl-[40px] pl-[58px] right-[0] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] top-[1%] w-[60%]">
              <Text
                className="font-bold rotate-[90deg] text-left text-white_A700 w-[auto]"
                variant="body73"
              >
                Overview
              </Text>
              <Line className="bg-amber_401 h-[58px] w-[5px]" />
            </div>
            <Img
              src="images/img_group38.svg"
              className="absolute h-[280px] inset-y-[0] left-[0] my-[auto] w-[auto]"
              alt="GroupThirtyEight"
            />
            <div className="absolute bottom-[2%] flex flex-col items-start justify-start right-[15%] w-[auto]">
              <Text
                className="font-normal not-italic rotate-[90deg] text-left text-white_A700_87 w-[auto]"
                variant="body73"
              >
                Profile
              </Text>
              <Text
                className="font-normal mt-[60px] not-italic rotate-[90deg] text-left text-white_A700_87 w-[auto]"
                variant="body73"
              >
                Settings
              </Text>
              <Text
                className="font-normal mt-[58px] not-italic rotate-[90deg] text-left text-white_A700_87 w-[auto]"
                variant="body73"
              >
                Course
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bg-bluegray_973 bottom-[0] flex font-lato items-center justify-end p-[18px] md:px-[20px] right-[4%] rotate-[90deg] rounded-[26px] shadow-bs122 w-[30%]">
          <div className="flex flex-col gap-[32px] items-center justify-start my-[3px] w-[100%]">
            <div className="flex flex-row items-start justify-between md:w-[100%] w-[95%]">
              <Text
                className="font-bold text-left text-white_A700 w-[auto]"
                variant="body64"
              >
                Your Skills
              </Text>
              <Button className="bg-indigo_A207 cursor-pointer font-bold leading-[normal] min-w-[67px] py-[6px] rounded-[9px] text-[14px] text-center text-white_A700 w-[auto]">
                65/100
              </Button>
            </div>
            <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
              <div className="flex flex-row items-center justify-between md:w-[100%] w-[97%]">
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body78"
                  >
                    Programming
                  </Text>
                  <Text
                    className="font-normal mt-[26px] not-italic text-left text-white_A700 w-[auto]"
                    variant="body78"
                  >
                    Design
                  </Text>
                  <Text
                    className="font-normal mt-[24px] not-italic text-left text-white_A700 w-[auto]"
                    variant="body78"
                  >
                    Javascript
                  </Text>
                  <Text
                    className="font-normal mt-[26px] not-italic text-left text-white_A700 w-[auto]"
                    variant="body78"
                  >
                    Photography
                  </Text>
                </div>
                <div className="flex flex-col gap-[33px] items-center justify-start w-[41%]">
                  <div className="h-[10px] overflow-hidden relative w-[100%]">
                    <div className="w-full h-full absolute bg-red_500_6c rounded-[5px]"></div>
                    <div
                      className="h-full absolute bg-red_511  rounded-[5px]"
                      style={{ width: "28%" }}
                    ></div>
                  </div>
                  <div className="h-[10px] overflow-hidden relative w-[100%]">
                    <div className="w-full h-full absolute bg-green_A200_6c rounded-[5px]"></div>
                    <div
                      className="h-full absolute bg-green_A203  rounded-[5px]"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <div className="h-[10px] overflow-hidden relative w-[100%]">
                    <div className="w-full h-full absolute bg-red_500_6c rounded-[5px]"></div>
                    <div
                      className="h-full absolute bg-red_511  rounded-[5px]"
                      style={{ width: "33%" }}
                    ></div>
                  </div>
                  <div className="h-[10px] overflow-hidden relative w-[100%]">
                    <div className="w-full h-full absolute bg-indigo_A200_6c rounded-[5px]"></div>
                    <div
                      className="h-full absolute bg-indigo_A207  rounded-[5px]"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[auto]">
                  <Text
                    className="font-bold text-right text-white_A700 w-[auto]"
                    variant="body87"
                  >
                    35/100
                  </Text>
                  <Text
                    className="font-bold mt-[28px] text-right text-white_A700 w-[auto]"
                    variant="body87"
                  >
                    65/100
                  </Text>
                  <Text
                    className="font-bold mt-[27px] text-right text-white_A700 w-[auto]"
                    variant="body87"
                  >
                    30/100
                  </Text>
                  <Text
                    className="font-bold mt-[29px] text-right text-white_A700 w-[auto]"
                    variant="body87"
                  >
                    40/100
                  </Text>
                </div>
              </div>
              <Button className="bg-bluegray_974 cursor-pointer font-bold leading-[normal] min-w-[300px] py-[14px] rounded-[16px] text-[15px] text-center text-white_A700 w-[auto]">
                View details
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] font-lato md:h-[167px] h-[327px] left-[20%] md:px-[20px] rotate-[90deg] sm:w-[100%] w-[45%]">
          <div className="flex flex-col m-[auto] w-[100%]">
            <div className="md:h-[167px] h-[188px] mx-[auto] w-[100%]">
              <div className="absolute md:h-[167px] h-[188px] inset-y-[0] my-[auto] right-[0] sm:w-[100%] w-[80%]">
                <div className="absolute bottom-[0] flex flex-col gap-[19px] inset-x-[0] justify-start mx-[auto] w-[100%]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body64"
                  >
                    Your courses
                  </Text>
                  <div className="h-[126px] md:ml-[0] ml-[201px] relative rotate-[-90deg] w-[51%]">
                    <div className="absolute bg-bluegray_973 flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[14px] rounded-[10px] shadow-bs122 w-[100%]">
                      <Img
                        src="images/img_group79.svg"
                        className="h-[3px] mb-[93px] w-[auto]"
                        alt="GroupSeventyNine"
                      />
                    </div>
                    <div className="absolute bottom-[0] h-[94px] right-[0] rotate-[90deg] w-[94%]">
                      <Text
                        className="absolute font-bold left-[0] text-left text-white_A700 top-[20%] w-[auto]"
                        variant="body82"
                      >
                        Adobe Illustrator
                      </Text>
                      <Text
                        className="absolute font-normal left-[0] not-italic text-left text-white_A700_90 top-[40%] w-[auto]"
                        variant="body98"
                      >
                        Design
                      </Text>
                      <div className="absolute h-[94px] inset-y-[0] my-[auto] right-[0] w-[94px]">
                        <div className="absolute bg-deep_orange_500_6c h-[94px] inset-[0] justify-center m-[auto] rotate-[-30deg] rounded-[50%] w-[94px]"></div>
                        <div className="absolute bg-deep_orange_503 h-[68px] inset-[0] justify-center m-[auto] rotate-[90deg] rounded-[50%] w-[68px]"></div>
                        <Text
                          className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-left text-white_A700 w-[max-content]"
                          variant="body98"
                        >
                          56%
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_minimize_deep_orange_503.svg"
                  className="absolute h-[95px] left-[35%] top-[0] w-[auto]"
                  alt="minimize"
                />
              </div>
              <div className="absolute md:h-[126px] h-[188px] inset-y-[0] left-[0] my-[auto] rotate-[-90deg] w-[58%]">
                <div className="absolute md:h-[126px] h-[188px] inset-[0] justify-center m-[auto] w-[100%]">
                  <div className="absolute bg-bluegray_973 bottom-[0] flex items-end justify-start p-[14px] right-[0] rounded-[10px] shadow-bs122 w-[70%]">
                    <Img
                      src="images/img_group79.svg"
                      className="h-[3px] mb-[93px] w-[auto]"
                      alt="GroupSeventyNine One"
                    />
                  </div>
                  <Img
                    src="images/img_group128.svg"
                    className="absolute h-[95px] left-[0] top-[0] w-[auto]"
                    alt="Group128"
                  />
                </div>
                <div className="absolute bottom-[0] flex items-center justify-start right-[0] rotate-[90deg] w-[66%]">
                  <div className="flex flex-row gap-[22px] items-start justify-between w-[100%]">
                    <div className="flex flex-col items-start justify-start mt-[19px] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        After Effects
                      </Text>
                      <Text
                        className="font-normal mt-[2px] not-italic text-left text-white_A700_90 w-[auto]"
                        variant="body98"
                      >
                        Video editing
                      </Text>
                    </div>
                    <div className="h-[94px] relative w-[94px]">
                      <div className="absolute bg-deep_purple_A200_6c h-[94px] inset-[0] justify-center m-[auto] rotate-[-30deg] rounded-[50%] w-[94px]"></div>
                      <div className="absolute bg-deep_purple_A208 h-[68px] inset-[0] justify-center m-[auto] rotate-[90deg] rounded-[50%] w-[68px]"></div>
                      <Text
                        className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-left text-white_A700 w-[max-content]"
                        variant="body98"
                      >
                        56%
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button className="border-[1px] border-solid border-white_A700_6c cursor-pointer font-bold leading-[normal] min-w-[87px] ml-[auto] mt-[-NaNpx] py-[6px] rotate-[-90deg] rounded-[10px] text-[12px] text-center text-gray_125 w-[auto] z-[1]">
              Browse All
            </Button>
            <div className="flex flex-col md:gap-[40px] gap-[62px] justify-start mt-[-69.73px] rotate-[-90deg] w-[58%] z-[1]">
              <Img
                src="images/img_file_amber_401.svg"
                className="h-[20px] w-[auto]"
                alt="file"
              />
              <div className="h-[126px] md:ml-[0] ml-[88px] relative w-[70%]">
                <div className="absolute bg-bluegray_973 flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[14px] rounded-[10px] shadow-bs122 w-[100%]">
                  <Img
                    src="images/img_group79.svg"
                    className="h-[3px] mb-[93px] w-[auto]"
                    alt="GroupSeventyNine Two"
                  />
                </div>
                <div className="absolute bottom-[0] h-[94px] right-[0] rotate-[90deg] w-[94%]">
                  <div className="absolute flex items-center justify-start left-[0] top-[20%] w-[58%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        HTML
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700_90 w-[auto]"
                        variant="body98"
                      >
                        Programming
                      </Text>
                    </div>
                  </div>
                  <div className="absolute h-[94px] inset-y-[0] my-[auto] right-[0] w-[94px]">
                    <div className="absolute bg-amber_400_6c h-[94px] inset-[0] justify-center m-[auto] rotate-[-30deg] rounded-[50%] w-[94px]"></div>
                    <div className="absolute bg-amber_401 h-[68px] inset-[0] justify-center m-[auto] rotate-[90deg] rounded-[50%] w-[68px]"></div>
                    <Text
                      className="absolute bottom-[39%] font-bold right-[32%] text-left text-white_A700 w-[auto]"
                      variant="body98"
                    >
                      67%
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] md:h-[126px] h-[208px] right-[0] rotate-[-90deg] w-[52%]">
            <div className="absolute bottom-[0] h-[126px] right-[0] w-[78%]">
              <div className="absolute bg-bluegray_973 flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[14px] rounded-[10px] shadow-bs122 w-[100%]">
                <Img
                  src="images/img_group79.svg"
                  className="h-[3px] mb-[93px] w-[auto]"
                  alt="GroupSeventyNine Three"
                />
              </div>
              <div className="absolute bottom-[0] h-[94px] right-[0] rotate-[90deg] w-[94%]">
                <div className="absolute flex items-center justify-start left-[0] top-[20%] w-[58%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body82"
                    >
                      Photoshop
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_90 w-[auto]"
                      variant="body98"
                    >
                      Photo editing
                    </Text>
                  </div>
                </div>
                <div className="absolute h-[94px] inset-y-[0] my-[auto] right-[0] w-[94px]">
                  <div className="absolute bg-deep_purple_A200_6c1 h-[94px] inset-[0] justify-center m-[auto] rotate-[-30deg] rounded-[50%] w-[94px]"></div>
                  <div className="absolute bg-deep_purple_A209 h-[68px] inset-[0] justify-center m-[auto] rotate-[90deg] rounded-[50%] w-[68px]"></div>
                  <Text
                    className="absolute bottom-[39%] font-bold right-[32%] text-left text-white_A700 w-[auto]"
                    variant="body98"
                  >
                    36%
                  </Text>
                </div>
              </div>
            </div>
            <Img
              src="images/img_group127.svg"
              className="absolute h-[116px] left-[0] top-[0] w-[auto]"
              alt="Group127"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IPadminiEightPage;
