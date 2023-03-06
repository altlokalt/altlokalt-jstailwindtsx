import React from "react";

import { Text, Img, Line, List, Button, RatingBar } from "components";

const IPadminiElevenPage: React.FC = () => {
  return (
    <>
      <div className="bg-bluegray_973 font-lato h-[656px] mx-[auto] overflow-auto pl-[20px] pt-[20px] relative rotate-[-90deg] w-[100%]">
        <div className="absolute bg-gray_1012 bottom-[0] flex items-center justify-start p-[15px] md:px-[20px] right-[2%] rounded-[19px] w-[74%]">
          <div className="flex flex-col gap-[26px] items-center justify-start mb-[563px] md:w-[100%] w-[97%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[97%]">
              <Text
                className="font-black rotate-[90deg] text-left text-white_A700 w-[auto]"
                variant="body39"
              >
                Courses
              </Text>
              <div className="bg-bluegray_973 flex flex-row items-center justify-between md:ml-[0] ml-[153px] p-[8px] rounded-[20px] md:w-[100%] w-[46%]">
                <Text
                  className="ml-[18px] not-italic rotate-[90deg] text-left text-white_A700_75 w-[auto]"
                  variant="body76"
                >
                  Search...
                </Text>
                <div className="h-[43px] relative w-[22%]">
                  <div className="absolute bg-indigo_A207 h-[43px] inset-y-[0] my-[auto] right-[0] rotate-[90deg] rounded-[16px] w-[91%]"></div>
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
                className="h-[46px] md:ml-[0] ml-[18px] w-[auto]"
                alt="GroupFortyOne"
              />
              <Img
                src="images/img_arrowdown_bluegray_451.svg"
                className="h-[11px] md:ml-[0] ml-[13px] w-[11px]"
                alt="arrowdown"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[20px] items-end justify-between w-[100%]">
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[40px] items-end justify-between md:w-[100%] w-[70%]">
                <div className="h-[48px] relative sm:w-[100%] w-[45%]">
                  <Img
                    src="images/img_search_11x14.svg"
                    className="h-[11px] mb-[-5.46px] ml-[auto] mr-[89px] w-[auto] z-[1]"
                    alt="search Two"
                  />
                  <div className="bg-bluegray_973 flex items-start justify-end mt-[auto] mx-[auto] p-[12px] rounded-[11px] w-[100%]">
                    <Text
                      className="font-normal md:ml-[0] ml-[7px] not-italic rotate-[90deg] text-left text-white_A700_75 w-[auto]"
                      variant="body82"
                    >
                      Find Courses
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[20px] items-center justify-between sm:mt-[0] mt-[5px] sm:w-[100%] w-[44%]">
                  <Text
                    className="font-normal not-italic rotate-[90deg] text-left text-white_A700 w-[auto]"
                    variant="body82"
                  >
                    Category
                  </Text>
                  <div className="bg-bluegray_973 flex flex-row items-center justify-between p-[10px] rounded-[11px] w-[70%]">
                    <Text
                      className="font-normal ml-[10px] my-[3px] not-italic rotate-[90deg] text-left text-white_A700_75 w-[auto]"
                      variant="body82"
                    >
                      All Categories
                    </Text>
                    <Img
                      src="images/img_mail_white_a700_12x9.svg"
                      className="h-[12px] w-[auto]"
                      alt="mail"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-row gap-[20px] items-center justify-between md:mt-[0] mt-[5px] md:w-[100%] w-[29%]">
                <Text
                  className="font-normal not-italic rotate-[90deg] text-left text-white_A700 w-[auto]"
                  variant="body82"
                >
                  Status
                </Text>
                <div className="bg-bluegray_973 flex flex-row items-center justify-between p-[10px] rounded-[11px] w-[75%]">
                  <Text
                    className="font-normal h-[16px] ml-[10px] my-[3px] not-italic rotate-[90deg] text-left text-white_A700_75 w-[auto]"
                    variant="body82"
                  >
                    All
                  </Text>
                  <Img
                    src="images/img_mail_white_a700_12x9.svg"
                    className="h-[12px] w-[auto]"
                    alt="mail One"
                  />
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
            <div className="absolute bg-bluegray_974 bottom-[23%] flex flex-row gap-[34px] items-center justify-end sm:pl-[20px] md:pl-[40px] pl-[58px] right-[0] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[60%]">
              <Text
                className="font-bold rotate-[90deg] text-left text-white_A700 w-[auto]"
                variant="body73"
              >
                Courses
              </Text>
              <Line className="bg-amber_401 h-[58px] w-[5px]" />
            </div>
            <Img
              src="images/img_group38_white_a700.svg"
              className="absolute h-[280px] inset-y-[0] left-[0] my-[auto] w-[auto]"
              alt="GroupThirtyEight"
            />
            <div className="absolute flex flex-col gap-[59px] items-start justify-start right-[11%] top-[8%] w-[auto]">
              <Text
                className="font-normal not-italic rotate-[90deg] text-left text-white_A700_87 w-[auto]"
                variant="body73"
              >
                Overview
              </Text>
              <Text
                className="font-normal not-italic rotate-[90deg] text-left text-white_A700_87 w-[auto]"
                variant="body73"
              >
                Profile
              </Text>
            </div>
            <Text
              className="absolute bottom-[2%] font-normal not-italic right-[15%] rotate-[90deg] text-left text-white_A700_87 w-[auto]"
              variant="body73"
            >
              Settings
            </Text>
          </div>
        </div>
        <div className="absolute bottom-[0] flex md:flex-col flex-row font-lato gap-[9px] items-center justify-between max-w-[949px] md:px-[20px] right-[0] w-[100%]">
          <div className="h-[189px] sm:h-[298px] relative md:w-[100%] w-[77%]">
            <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start left-[15%] my-[auto] w-[56%]">
              <div className="flex flex-row gap-[35px] items-start justify-between w-[100%]">
                <Text
                  className="font-bold mt-[22px] rotate-[90deg] text-left text-white_A700 w-[auto]"
                  variant="body64"
                >
                  Your courses
                </Text>
                <div className="md:h-[126px] h-[189px] relative w-[66%]">
                  <div className="absolute bottom-[0] h-[126px] right-[0] w-[78%]">
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
                  <Img
                    src="images/img_minimize_deep_orange_503_96x92.svg"
                    className="absolute h-[96px] left-[0] top-[0] w-[auto]"
                    alt="minimize"
                  />
                </div>
              </div>
            </div>
            <div className="absolute md:h-[126px] h-[189px] inset-y-[0] left-[0] my-[auto] w-[40%]">
              <div className="absolute md:h-[126px] h-[189px] inset-[0] justify-center m-[auto] w-[100%]">
                <div className="absolute bg-bluegray_973 bottom-[0] flex items-end justify-start p-[14px] right-[0] rounded-[10px] shadow-bs122 w-[70%]">
                  <Img
                    src="images/img_group79.svg"
                    className="h-[3px] mb-[93px] w-[auto]"
                    alt="GroupSeventyNine One"
                  />
                </div>
                <Img
                  src="images/img_group128.svg"
                  className="absolute h-[96px] left-[0] top-[0] w-[auto]"
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
            <div className="absolute flex sm:flex-col flex-row gap-[11px] h-[100%] inset-y-[0] items-start justify-between my-[auto] right-[0] w-[33%]">
              <Img
                src="images/img_file_amber_401.svg"
                className="h-[20px] w-[auto]"
                alt="file"
              />
              <List
                className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 grid-cols-2 sm:mt-[0] mt-[63px] w-[100%]"
                orientation="horizontal"
              >
                <div className="h-[126px] relative w-[100%]">
                  <div className="absolute bg-bluegray_973 flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[14px] rounded-[10px] shadow-bs122 w-[100%]">
                    <Img
                      src="images/img_group79.svg"
                      className="h-[3px] mb-[93px] w-[auto]"
                      alt="GroupSeventyNine Two"
                    />
                  </div>
                  <div className="absolute bottom-[0] flex items-center justify-start right-[0] rotate-[90deg] w-[94%]">
                    <div className="flex flex-row gap-[37px] items-start justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start mt-[19px] w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body82"
                        >
                          HTML
                        </Text>
                        <Text
                          className="font-normal mt-[2px] not-italic text-left text-white_A700_90 w-[auto]"
                          variant="body98"
                        >
                          Programming
                        </Text>
                      </div>
                      <div className="h-[94px] relative w-[94px]">
                        <div className="absolute bg-amber_400_6c h-[94px] inset-[0] justify-center m-[auto] rotate-[-30deg] rounded-[50%] w-[94px]"></div>
                        <div className="absolute bg-amber_401 h-[68px] inset-[0] justify-center m-[auto] rotate-[90deg] rounded-[50%] w-[68px]"></div>
                        <Text
                          className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-left text-white_A700 w-[max-content]"
                          variant="body98"
                        >
                          67%
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[126px] relative w-[100%]">
                  <div className="absolute bg-bluegray_973 flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[14px] rounded-[10px] shadow-bs122 w-[100%]">
                    <Img
                      src="images/img_group79.svg"
                      className="h-[3px] mb-[93px] w-[auto]"
                      alt="GroupSeventyNine Three"
                    />
                  </div>
                  <div className="absolute bottom-[0] flex items-center justify-start right-[0] rotate-[90deg] w-[94%]">
                    <div className="flex flex-row gap-[33px] items-start justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start mt-[20px] w-[auto]">
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
                      <div className="h-[94px] relative w-[94px]">
                        <div className="absolute bg-deep_purple_A200_6c1 h-[94px] inset-[0] justify-center m-[auto] rotate-[-30deg] rounded-[50%] w-[94px]"></div>
                        <div className="absolute bg-deep_purple_A209 h-[68px] inset-[0] justify-center m-[auto] rotate-[90deg] rounded-[50%] w-[68px]"></div>
                        <Text
                          className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-left text-white_A700 w-[max-content]"
                          variant="body98"
                        >
                          36%
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="h-[189px] relative md:w-[100%] w-[23%]">
            <Button className="border-[1px] border-solid border-white_A700_6c cursor-pointer font-bold leading-[normal] min-w-[87px] ml-[55px] mt-[18px] py-[6px] rounded-[10px] text-[12px] text-center text-gray_125 w-[auto]">
              Browse All
            </Button>
            <div className="absolute flex h-[100%] inset-[0] items-start justify-center m-[auto] pb-[92px] sm:pr-[20px] md:pr-[40px] pr-[92px] w-[100%]">
              <Img
                src="images/img_notification_deep_purple_a210.svg"
                className="h-[96px] w-[auto]"
                alt="notification One"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex font-lato h-[max-content] inset-y-[0] items-center justify-start my-[auto] md:px-[20px] right-[0] w-[75%]">
          <div className="flex flex-col gap-[17px] justify-start w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[20px] md:w-[100%] w-[90%]">
              <Text
                className="font-bold mt-[4px] rotate-[90deg] text-left text-white_A700 w-[auto]"
                variant="body64"
              >
                Trending Courses
              </Text>
              <Button className="border-[1px] border-solid border-white_A700_6c cursor-pointer font-bold leading-[normal] min-w-[87px] py-[6px] rounded-[10px] text-[12px] text-center text-gray_125 w-[auto]">
                Browse All
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-bluegray_973 flex flex-1 items-center justify-start pb-[15px] rotate-[90deg] rounded-[10px] shadow-bs122 w-[100%]">
                <div className="flex flex-col gap-[9px] items-center justify-start w-[100%]">
                  <div className="bg-gray_400 h-[140px] rounded-[10px] w-[100%]"></div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[87%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
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
                      <Img
                        src="images/img_group79_white_a700.svg"
                        className="h-[3px] mt-[3px] w-[auto]"
                        alt="GroupSeventyNine Four"
                      />
                    </div>
                    <div className="flex flex-row items-end justify-between mt-[2px] w-[100%]">
                      <div className="flex items-center justify-evenly mb-[2px] mt-[12px] w-[auto]">
                        <RatingBar
                          className="border-[1px] border-amber_401 border-solid"
                          value={4}
                          starCount={5}
                          activeColor="#facd2c"
                          size={11}
                        ></RatingBar>
                      </div>
                      <Button className="bg-indigo_A207 cursor-pointer font-bold leading-[normal] min-w-[61px] py-[5px] rounded-[6px] text-[12px] text-center text-white_A700 w-[auto]">
                        $49
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-bluegray_973 flex flex-1 items-center justify-start pb-[15px] rotate-[90deg] rounded-[10px] shadow-bs122 w-[100%]">
                <div className="flex flex-col gap-[9px] items-center justify-start w-[100%]">
                  <div className="bg-gray_400 h-[140px] rounded-[10px] w-[100%]"></div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[87%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body82"
                        >
                          Adobe Illustrator
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-left text-white_A700_90 w-[auto]"
                          variant="body98"
                        >
                          Design
                        </Text>
                      </div>
                      <Img
                        src="images/img_group79_white_a700.svg"
                        className="h-[3px] mt-[3px] w-[auto]"
                        alt="GroupSeventyNine Five"
                      />
                    </div>
                    <div className="flex flex-row items-end justify-between mt-[2px] w-[100%]">
                      <div className="flex items-center justify-evenly mb-[2px] mt-[12px] w-[auto]">
                        <RatingBar
                          className="border-[1px] border-amber_401 border-solid"
                          value={4}
                          starCount={5}
                          activeColor="#facd2c"
                          size={11}
                        ></RatingBar>
                      </div>
                      <Button className="bg-indigo_A207 cursor-pointer font-bold leading-[normal] min-w-[61px] py-[5px] rounded-[6px] text-[12px] text-center text-white_A700 w-[auto]">
                        $24
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-bluegray_973 flex flex-1 items-center justify-start pb-[15px] rotate-[90deg] rounded-[10px] shadow-bs122 w-[100%]">
                <div className="flex flex-col gap-[9px] items-center justify-start w-[100%]">
                  <div className="bg-gray_400 h-[140px] rounded-[10px] w-[100%]"></div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[87%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body82"
                        >
                          HTML
                        </Text>
                        <Text
                          className="font-normal mt-[2px] not-italic text-left text-white_A700_90 w-[auto]"
                          variant="body98"
                        >
                          Programming
                        </Text>
                      </div>
                      <Img
                        src="images/img_group79_white_a700.svg"
                        className="h-[3px] mt-[3px] w-[auto]"
                        alt="GroupSeventyNine Six"
                      />
                    </div>
                    <div className="flex flex-row items-end justify-between mt-[2px] w-[100%]">
                      <div className="flex items-center justify-evenly mb-[2px] mt-[12px] w-[auto]">
                        <RatingBar
                          className="border-[1px] border-amber_401 border-solid"
                          value={4}
                          starCount={5}
                          activeColor="#facd2c"
                          size={11}
                        ></RatingBar>
                      </div>
                      <Button className="bg-indigo_A207 cursor-pointer font-bold leading-[normal] min-w-[61px] py-[5px] rounded-[6px] text-[12px] text-center text-white_A700 w-[auto]">
                        $74
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-bluegray_973 flex flex-1 items-center justify-start pb-[15px] rotate-[90deg] rounded-[10px] shadow-bs122 w-[100%]">
                <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                  <div className="bg-gray_400 h-[140px] rounded-[10px] w-[100%]"></div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[87%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
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
                      <Img
                        src="images/img_group79_white_a700.svg"
                        className="h-[3px] mt-[2px] w-[auto]"
                        alt="GroupSeventyNine Seven"
                      />
                    </div>
                    <div className="flex flex-row items-end justify-between mt-[2px] w-[100%]">
                      <div className="flex items-center justify-evenly mb-[2px] mt-[12px] w-[auto]">
                        <RatingBar
                          className="border-[1px] border-amber_401 border-solid"
                          value={4}
                          starCount={5}
                          activeColor="#facd2c"
                          size={11}
                        ></RatingBar>
                      </div>
                      <Button className="bg-indigo_A207 cursor-pointer font-bold leading-[normal] min-w-[61px] py-[5px] rounded-[6px] text-[12px] text-center text-white_A700 w-[auto]">
                        $24
                      </Button>
                    </div>
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

export default IPadminiElevenPage;
