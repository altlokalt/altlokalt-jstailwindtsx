import React from "react";

import { Text, Img, Button, RatingBar, Line, List } from "components";

const IPadminiTenPage: React.FC = () => {
  return (
    <>
      <div className="bg-bluegray_973 font-lato h-[656px] mx-[auto] pt-[20px] px-[20px] relative rotate-[-90deg] w-[100%]">
        <div className="absolute bg-gray_1012 bottom-[0] flex items-center justify-start p-[15px] md:px-[20px] right-[3%] rounded-[19px] w-[74%]">
          <div className="flex flex-col gap-[22px] items-start justify-start mb-[89px] md:w-[100%] w-[97%]">
            <div className="flex flex-col gap-[42px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[97%]">
                <Text
                  className="font-black rotate-[90deg] text-left text-white_A700 w-[auto]"
                  variant="body39"
                >
                  Course Detail
                </Text>
                <div className="bg-bluegray_973 flex flex-row items-center justify-between md:ml-[0] ml-[77px] p-[8px] rounded-[20px] md:w-[100%] w-[46%]">
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
                  className="h-[23px] md:ml-[0] ml-[11px] w-[auto]"
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
              <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 items-center justify-start rotate-[90deg] md:w-[100%] w-[54%]">
                  <div className="bg-bluegray_973 flex items-center justify-start pb-[15px] rounded-[26px] shadow-bs122 w-[100%]">
                    <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                      <div className="bg-black_900_2d flex items-center justify-end p-[92px] sm:px-[20px] md:px-[40px] rounded-bl-[26px] rounded-br-[0] rounded-tl-[26px] rounded-tr-[26px] w-[100%]">
                        <Button className="bg-white_A700_23 flex items-center justify-center mt-[4px] p-[10px] rounded-[25px] w-[51px]">
                          <Img
                            src="images/img_play_white_a700_50x51.svg"
                            className="h-[29px]"
                            alt="play"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between md:w-[100%] w-[89%]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body64"
                        >
                          #1 Introduction
                        </Text>
                        <Button className="bg-amber_401 cursor-pointer font-bold leading-[normal] min-w-[99px] py-[9px] rounded-[10px] text-[14px] text-center text-gray_1013 w-[auto]">
                          Play demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-bluegray_973 flex md:flex-1 flex-col gap-[26px] items-center justify-end p-[17px] rotate-[90deg] rounded-[26px] shadow-bs122 md:w-[100%] w-[43%]">
                  <div className="flex items-center justify-start mt-[8px] md:w-[100%] w-[95%]">
                    <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[5px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-black text-left text-white_A700 w-[auto]"
                            variant="body48"
                          >
                            After Effects
                          </Text>
                          <div className="flex items-center justify-evenly w-[auto]">
                            <RatingBar
                              className="border-[1px] border-amber_401 border-solid"
                              value={4}
                              starCount={5}
                              activeColor="#facd2c"
                              size={14}
                            ></RatingBar>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-normal mt-[2px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body68"
                          >
                            Video editing
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            (392 Ratings)
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[97%]">
                        <div className="flex flex-row items-start justify-between rotate-[-90deg] w-[100%]">
                          <Text
                            className="font-bold rotate-[90deg] text-left text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            Level
                          </Text>
                          <Text
                            className="font-normal not-italic rotate-[90deg] text-right text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            Beginner
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[14px] rotate-[-90deg] w-[100%]">
                          <Text
                            className="font-bold rotate-[90deg] text-left text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            Released
                          </Text>
                          <Text
                            className="font-normal not-italic rotate-[90deg] text-right text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            21 Jan 2021
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[15px] rotate-[-90deg] w-[100%]">
                          <Text
                            className="font-bold rotate-[90deg] text-left text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            Student
                          </Text>
                          <Text
                            className="font-normal not-italic rotate-[90deg] text-right text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            432
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-indigo_A207 cursor-pointer font-bold leading-[normal] min-w-[300px] py-[18px] rotate-[-90deg] rounded-[16px] text-[17px] text-center text-white_A700 w-[auto]">
                    Purchase ($49)
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-bluegray_973 flex flex-col gap-[12px] items-start justify-center p-[23px] sm:px-[20px] rotate-[90deg] rounded-[26px] shadow-bs122 md:w-[100%] w-[54%]">
              <Text
                className="font-bold md:ml-[0] ml-[6px] text-left text-white_A700 w-[auto]"
                variant="body64"
              >
                Description
              </Text>
              <div className="flex flex-col gap-[12px] items-start justify-start mb-[16px] md:ml-[0] ml-[6px] rotate-[-90deg] md:w-[100%] w-[auto]">
                <Text
                  className="font-normal not-italic rotate-[90deg] text-left text-white_A700_a2 w-[100%]"
                  variant="body78"
                >
                  This course is for Rails newbies and anyone looking to get a
                  solid foundation. It’s designed to teach you everything you
                  need to start building web applications in Rails right away.
                </Text>
                <a
                  className="font-bold rotate-[90deg] text-[12px] text-left text-white_A700 underline w-[auto]"
                  href="javascript:"
                >
                  See Details &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col font-nunito gap-[40px] justify-start left-[3%] md:px-[20px] top-[7%] w-[23%]">
          <Text
            className="font-black md:ml-[0] ml-[123px] rotate-[90deg] text-center text-indigo_A207 tracking-[1.60px] w-[auto]"
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
            <div className="absolute bg-bluegray_974 bottom-[23%] flex flex-row gap-[34px] items-center justify-end sm:pl-[20px] md:pl-[40px] pl-[58px] right-[0] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] w-[59%]">
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
        <div className="absolute bg-bluegray_973 bottom-[0] flex flex-col font-lato gap-[17px] items-center justify-end p-[17px] md:px-[20px] right-[4%] rotate-[90deg] rounded-[26px] shadow-bs122 w-[30%]">
          <div className="flex flex-col gap-[15px] items-start justify-start mt-[7px] md:w-[100%] w-[92%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              variant="body64"
            >
              Topics (13)
            </Text>
            <List
              className="flex-col gap-[10px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body78"
                >
                  #1 Introduction
                </Text>
                <Text
                  className="font-bold ml-[103px] text-right text-white_A700 w-[auto]"
                  variant="body78"
                >
                  5:14
                </Text>
                <Button className="border-[1px] border-solid border-white_A700 flex h-[27px] items-center justify-center ml-[21px] p-[5px] rounded-[9px] w-[27px]">
                  <Img
                    src="images/img_play_white_a700_27x27.svg"
                    className="h-[15px]"
                    alt="play One"
                  />
                </Button>
              </div>
              <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body78"
                >
                  #2 Tools
                </Text>
                <Text
                  className="font-bold ml-[148px] text-right text-white_A700 w-[auto]"
                  variant="body78"
                >
                  5:14
                </Text>
                <Button className="border-[1px] border-solid border-white_A700 flex h-[27px] items-center justify-center ml-[21px] p-[5px] rounded-[9px] w-[27px]">
                  <Img
                    src="images/img_play_white_a700_27x27.svg"
                    className="h-[15px]"
                    alt="play Two"
                  />
                </Button>
              </div>
              <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body78"
                >
                  #3 Workflow
                </Text>
                <Text
                  className="font-bold ml-[118px] text-right text-white_A700 w-[auto]"
                  variant="body78"
                >
                  5:14
                </Text>
                <Button className="border-[1px] border-solid border-white_A700 flex h-[27px] items-center justify-center ml-[21px] p-[5px] rounded-[9px] w-[27px]">
                  <Img
                    src="images/img_play_white_a700_27x27.svg"
                    className="h-[15px]"
                    alt="play Three"
                  />
                </Button>
              </div>
              <div className="flex flex-1 flex-row items-end justify-start w-[100%]">
                <Text
                  className="font-normal mb-[3px] mt-[6px] not-italic text-left text-white_A700 w-[auto]"
                  variant="body78"
                >
                  #4 Typography
                </Text>
                <Text
                  className="font-bold ml-[108px] my-[4px] text-right text-white_A700 w-[auto]"
                  variant="body78"
                >
                  5:14
                </Text>
                <Button className="border-[1px] border-solid border-white_A700 flex h-[27px] items-center justify-center ml-[21px] p-[5px] rounded-[9px] w-[27px]">
                  <Img
                    src="images/img_play_white_a700_27x27.svg"
                    className="h-[15px]"
                    alt="play Four"
                  />
                </Button>
              </div>
            </List>
          </div>
          <Button className="bg-bluegray_974 cursor-pointer font-bold leading-[normal] min-w-[300px] py-[14px] rounded-[16px] text-[15px] text-center text-white_A700 w-[auto]">
            View details
          </Button>
        </div>
        <div className="absolute bottom-[0] font-lato md:h-[186px] h-[218px] sm:h-[306px] left-[22%] md:px-[20px] rotate-[90deg] sm:w-[100%] w-[43%]">
          <div className="absolute bg-bluegray_973 bottom-[0] flex items-center justify-start p-[22px] sm:px-[20px] right-[0] rounded-[26px] shadow-bs122 w-[auto]">
            <Text
              className="font-bold mb-[113px] text-left text-white_A700 w-[auto]"
              variant="body64"
            >
              What will you get
            </Text>
          </div>
          <div className="absolute flex sm:flex-col flex-row gap-[23px] items-center justify-between left-[0] top-[0] w-[91%]">
            <div className="sm:h-[140px] h-[186px] md:h-[85px] relative sm:w-[100%] w-[48%]">
              <div className="absolute flex flex-col md:gap-[40px] gap-[88px] inset-x-[0] justify-start mx-[auto] top-[0] w-[100%]">
                <Img
                  src="images/img_play_amber_401.svg"
                  className="h-[25px] w-[auto]"
                  alt="play Five"
                />
                <Text
                  className="md:ml-[0] ml-[148px] text-left text-white_A700 w-[auto]"
                  variant="body71"
                >
                  13 Video
                </Text>
              </div>
              <div className="absolute bottom-[0] flex flex-col md:gap-[40px] gap-[95px] justify-start left-[0] w-[89%]">
                <Img
                  src="images/img_camera_amber_401.svg"
                  className="h-[26px] w-[auto]"
                  alt="camera"
                />
                <Text
                  className="md:ml-[0] ml-[147px] text-left text-white_A700 w-[auto]"
                  variant="body71"
                >
                  Exam
                </Text>
              </div>
            </div>
            <div className="sm:h-[143px] h-[186px] md:h-[90px] relative sm:w-[100%] w-[47%]">
              <div className="absolute flex flex-col md:gap-[40px] gap-[86px] inset-x-[0] justify-start mx-[auto] top-[0] w-[100%]">
                <Img
                  src="images/img_file_amber_401_27x29.svg"
                  className="h-[27px] w-[auto]"
                  alt="file"
                />
                <Text
                  className="md:ml-[0] ml-[120px] text-left text-white_A700 w-[auto]"
                  variant="body71"
                >
                  6 Document{" "}
                </Text>
              </div>
              <div className="absolute bottom-[0] flex flex-col md:gap-[40px] gap-[93px] justify-start left-[0] w-[95%]">
                <Img
                  src="images/img_settings_amber_401.svg"
                  className="h-[31px] w-[auto]"
                  alt="settings One"
                />
                <Text
                  className="md:ml-[0] ml-[120px] text-left text-white_A700 w-[auto]"
                  variant="body71"
                >
                  Certificate
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IPadminiTenPage;
