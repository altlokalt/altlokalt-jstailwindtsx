import React from "react";

import { Text, Button, Img, SelectBox, Line, Input } from "components";

const DarkSettingsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-abel items-start justify-end mx-[auto] sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mr-[auto] md:w-[100%] w-[92%]">
          <div className="bg-gray_973 flex items-center justify-start py-[15px] shadow-bs102 md:w-[100%] w-[17%]">
            <div className="flex flex-col gap-[27px] items-center justify-start mb-[350px] w-[100%]">
              <div className="flex flex-col justify-start md:w-[100%] w-[92%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="not-italic text-left text-white_A700 w-[auto]"
                    variant="body62"
                  >
                    Settings
                  </Text>
                  <Button className="bg-bluegray_913 flex h-[29px] items-center justify-center p-[7px] rounded-[14px] w-[29px]">
                    <Img
                      src="images/img_edit_gray_555.svg"
                      className="h-[15px]"
                      alt="edit"
                    />
                  </Button>
                </div>
                <Button className="bg-bluegray_913 flex h-[29px] items-center justify-center md:ml-[0] ml-[145px] mr-[101px] mt-[127px] p-[7px] rounded-[14px] w-[29px]">
                  <Img
                    src="images/img_camera_gray_555.svg"
                    className="h-[15px]"
                    alt="camera"
                  />
                </Button>
                <div className="flex flex-row items-end justify-center md:ml-[0] ml-[97px] mt-[20px] md:w-[100%] w-[28%]">
                  <div className="bg-teal_A700 h-[9px] my-[5px] rounded-[4px] w-[9px]"></div>
                  <SelectBox
                    className="font-normal leading-[normal] ml-[4px] not-italic text-[15px] text-gray_555 text-left sm:w-[100%] w-[83%]"
                    placeholderClassName="text-gray_555"
                    name="Group1629"
                    placeholder="Active"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_555.svg"
                        className="h-[15px] mr-[0] w-[15px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-bluegray_913 flex flex-col gap-[13px] items-center justify-start w-[100%]">
                  <Line className="bg-bluegray_913 h-[1px] w-[100%]" />
                  <div className="flex flex-col gap-[12px] items-center justify-end w-[100%]">
                    <div className="flex flex-row items-center justify-start md:w-[100%] w-[87%]">
                      <Img
                        src="images/img_user_gray_555_14x14.svg"
                        className="h-[14px] w-[14px]"
                        alt="user"
                      />
                      <Text
                        className="font-normal ml-[16px] not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        Personal Info
                      </Text>
                      <Img
                        src="images/img_arrowup_white_a700_12x12.svg"
                        className="h-[12px] ml-[148px] w-[12px]"
                        alt="arrowup"
                      />
                    </div>
                    <div className="flex flex-col gap-[217px] md:gap-[40px] items-center justify-start w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <Line className="bg-bluegray_913 h-[1px] w-[100%]" />
                        </div>
                      </div>
                      <Line className="bg-bluegray_913 h-[1px] w-[100%]" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-[20px] md:w-[100%] w-[87%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_555 text-left w-[auto]"
                        variant="body73"
                      >
                        Name
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        Adam Zampa
                      </Text>
                    </div>
                    <div className="bg-green_400_20 flex items-center justify-end mb-[15px] p-[7px] rounded-[3px] w-[12%]">
                      <Img
                        src="images/img_edit_green_410.svg"
                        className="h-[13px] mt-[2px] w-[13px]"
                        alt="edit One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start mt-[23px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_555 text-left w-[auto]"
                    variant="body73"
                  >
                    Email
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                    variant="body78"
                  >
                    adc@123.com
                  </Text>
                </div>
                <div className="flex flex-col gap-[6px] items-start justify-start mt-[23px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_555 text-left w-[auto]"
                    variant="body73"
                  >
                    Location
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                    variant="body78"
                  >
                    California, USA
                  </Text>
                </div>
                <div className="h-[185px] mt-[17px] relative w-[100%]">
                  <div className="flex flex-col items-center justify-start mb-[-1px] mx-[auto] w-[100%] z-[1]">
                    <Line className="bg-bluegray_913 h-[1px] w-[100%]" />
                    <div className="bg-gray_973 flex flex-col items-center justify-end pt-[13px] w-[100%]">
                      <SelectBox
                        className="border-b-[1px] border-bluegray_913 font-normal leading-[normal] not-italic pb-[14px] text-[14px] text-bluegray_222 text-left w-[100%]"
                        placeholderClassName="text-bluegray_222"
                        name="Group1624"
                        placeholder="Themes"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_white_a700_12x12.svg"
                            className="h-[12px] mr-[20px] w-[12px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <Line className="bg-bluegray_913 h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="h-[139px] mt-[auto] mx-[auto] w-[100%]">
                    <div className="flex flex-col items-center justify-start mb-[-1px] mx-[auto] w-[100%] z-[1]">
                      <Line className="bg-bluegray_913 h-[1px] w-[100%]" />
                      <div className="bg-gray_973 flex flex-col items-center justify-end pt-[14px] w-[100%]">
                        <SelectBox
                          className="border-b-[1px] border-bluegray_913 font-normal leading-[normal] not-italic pb-[13px] text-[14px] text-bluegray_222 text-left w-[100%]"
                          placeholderClassName="text-bluegray_222"
                          name="Group1626"
                          placeholder="Privacy"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_white_a700_12x12.svg"
                              className="h-[12px] mr-[20px] w-[12px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                        <Line className="bg-bluegray_913 h-[1px] w-[100%]" />
                      </div>
                    </div>
                    <div className="h-[93px] mt-[auto] mx-[auto] w-[100%]">
                      <div className="flex flex-col items-center justify-start mb-[-1px] mx-[auto] w-[100%] z-[1]">
                        <Line className="bg-bluegray_913 h-[1px] w-[100%]" />
                        <div className="bg-gray_973 flex flex-col items-center justify-end pt-[14px] w-[100%]">
                          <SelectBox
                            className="border-b-[1px] border-bluegray_913 font-normal leading-[normal] not-italic pb-[13px] text-[14px] text-bluegray_222 text-left w-[100%]"
                            placeholderClassName="text-bluegray_222"
                            name="Group1628"
                            placeholder="Security"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_white_a700_12x12.svg"
                                className="h-[12px] mr-[20px] w-[12px]"
                                alt="arrow_down"
                              />
                            }
                          ></SelectBox>
                          <Line className="bg-bluegray_913 h-[1px] w-[100%]" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[auto] mx-[auto] w-[100%]">
                        <Line className="bg-bluegray_913 h-[1px] w-[100%]" />
                        <div className="bg-gray_973 flex flex-row gap-[16px] items-center justify-evenly p-[13px] w-[100%]">
                          <Img
                            src="images/img_question_gray_555.svg"
                            className="h-[14px] w-[14px]"
                            alt="question"
                          />
                          <SelectBox
                            className="sm:flex-1 font-normal leading-[normal] not-italic text-[14px] text-bluegray_222 text-left sm:w-[100%] w-[84%]"
                            placeholderClassName="text-bluegray_222"
                            name="Group1631"
                            placeholder="Help"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_gray_555_12x12.svg"
                                className="h-[12px] mr-[0] w-[12px]"
                                alt="arrow_down"
                              />
                            }
                          ></SelectBox>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[52px] items-center justify-start md:w-[100%] w-[84%]">
            <div className="flex flex-col gap-[31px] items-center justify-start w-[100%]">
              <div className="bg-bluegray_900_0c flex items-center justify-start pt-[22px] w-[100%]">
                <div className="flex flex-col gap-[26px] items-center justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[97%]">
                    <Img
                      src="images/img_car_teal_a700.svg"
                      className="h-[38px] w-[38px]"
                      alt="car"
                    />
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[16px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body64"
                      >
                        Bella Cote
                      </Text>
                      <Text
                        className="mt-[3px] not-italic text-gray_555 text-left w-[auto]"
                        variant="body80"
                      >
                        Online
                      </Text>
                    </div>
                    <Img
                      src="images/img_search_bluegray_222.svg"
                      className="h-[22px] md:ml-[0] ml-[1133px] w-[22px]"
                      alt="search"
                    />
                    <Img
                      src="images/img_call_bluegray_222.svg"
                      className="h-[22px] md:ml-[0] ml-[30px] w-[22px]"
                      alt="call"
                    />
                    <Img
                      src="images/img_videocamera_bluegray_222.svg"
                      className="h-[22px] md:ml-[0] ml-[31px] w-[22px]"
                      alt="videocamera"
                    />
                    <Img
                      src="images/img_info_bluegray_222.svg"
                      className="h-[22px] md:ml-[0] ml-[29px] w-[22px]"
                      alt="info"
                    />
                    <Img
                      src="images/img_overflowmenu_bluegray_222.svg"
                      className="h-[22px] md:ml-[0] ml-[30px] w-[22px]"
                      alt="overflowmenu"
                    />
                  </div>
                  <Line className="bg-bluegray_919 h-[1px] w-[100%]" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[95%]">
                <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="bg-gray_853 font-normal h-[47px] not-italic pl-[19px] sm:pr-[20px] pr-[35px] py-[13px] rounded-[3px] text-left text-shadow-ts6 text-white_A700_cc w-[162px]"
                    variant="body73"
                  >
                    Good morning 😊
                  </Text>
                  <Text
                    className="not-italic text-gray_555 text-left w-[auto]"
                    variant="body86"
                  >
                    10:07 am
                  </Text>
                </div>
                <div className="flex items-center justify-start md:ml-[0] ml-[1007px] mt-[25px] md:w-[100%] w-[31%]">
                  <div className="flex flex-col gap-[12px] justify-start w-[100%]">
                    <div className="bg-green_400_3a flex items-start justify-end p-[11px] rounded-[3px] w-[100%]">
                      <Text
                        className="font-normal md:ml-[0] ml-[7px] mt-[2px] not-italic text-left text-white_A700_cc w-[auto]"
                        variant="body73"
                      >
                        Good morning, How are you? What about our next meeting?
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[7px] items-start justify-end ml-[auto] md:w-[100%] w-[15%]">
                      <Img
                        src="images/img_cursor.svg"
                        className="h-[14px] w-[14px]"
                        alt="cursor"
                      />
                      <Text
                        className="not-italic text-gray_555 text-left w-[auto]"
                        variant="body86"
                      >
                        10:12 am
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-[26px] md:w-[100%] w-[55%]">
                  <Input
                    className="font-normal leading-[normal] not-italic pl-[19px] sm:pr-[20px] pr-[35px] py-[13px] text-[15px] text-left placeholder:text-white_A700_cc text-white_A700_cc w-[100%]"
                    wrapClassName="bg-gray_853 rounded-[3px] shadow-bs102 sm:w-[100%] w-[60%]"
                    name="time Two"
                    placeholder="Yeah everything is fine. Our next meeting tomorrow at 10.00 AM"
                  ></Input>
                  <Input
                    className="font-normal leading-[normal] not-italic pl-[19px] sm:pr-[20px] pr-[35px] py-[13px] text-[15px] text-left placeholder:text-white_A700_cc text-white_A700_cc w-[100%]"
                    wrapClassName="bg-gray_853 mt-[9px] rounded-[3px] shadow-bs102 w-[100%]"
                    name="msgFour"
                    placeholder="Hey, I&#39;m going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁."
                  ></Input>
                  <Text
                    className="mt-[10px] not-italic text-gray_555 text-left w-[auto]"
                    variant="body86"
                  >
                    10:13 am
                  </Text>
                </div>
                <div className="flex items-center justify-start md:ml-[0] ml-[1298px] mt-[26px] md:w-[100%] w-[11%]">
                  <div className="flex flex-col gap-[12px] justify-start w-[100%]">
                    <Text
                      className="bg-green_400_3a font-normal h-[46px] not-italic pb-[11px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[14px] rounded-[3px] text-left text-white_A700_cc w-[155px]"
                      variant="body73"
                    >
                      Wow that&#39;s great
                    </Text>
                    <div className="flex flex-row gap-[7px] items-start justify-end ml-[auto] md:w-[100%] w-[43%]">
                      <Img
                        src="images/img_cursor.svg"
                        className="h-[14px] w-[14px]"
                        alt="cursor One"
                      />
                      <Text
                        className="not-italic text-gray_555 text-left w-[auto]"
                        variant="body86"
                      >
                        10:14 am
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-[27px] md:w-[100%] w-[22%]">
                  <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                      <Img
                        src="images/img_chatimg1.svg"
                        className="h-[99px] w-[auto]"
                        alt="ChatImgOne"
                      />
                      <Img
                        src="images/img_chatimg1.svg"
                        className="h-[99px] w-[auto]"
                        alt="ChatImgTwo"
                      />
                    </div>
                    <Text
                      className="not-italic text-gray_555 text-left w-[auto]"
                      variant="body86"
                    >
                      10:15 am
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-start md:ml-[0] ml-[1080px] mt-[25px] md:w-[100%] w-[26%]">
                  <div className="flex flex-col gap-[11px] justify-start w-[100%]">
                    <div className="bg-green_400_3a flex items-center justify-end p-[11px] rounded-[3px] w-[100%]">
                      <div className="border-[1px] border-green_410 border-solid flex items-center justify-start p-[17px] rounded-[6px] md:w-[100%] w-[95%]">
                        <div className="flex flex-row items-start justify-start w-[100%]">
                          <Button className="bg-green_400_33 flex h-[38px] items-center justify-center p-[8px] rounded-[50%] w-[38px]">
                            <Img
                              src="images/img_clock_green_410.svg"
                              className="h-[20px]"
                              alt="clock"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start ml-[16px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                              variant="body78"
                            >
                              design-phase-1-approved.pdf
                            </Text>
                            <Text
                              className="font-normal mt-[3px] not-italic text-gray_555 text-left w-[auto]"
                              variant="body82"
                            >
                              12.5 MB
                            </Text>
                          </div>
                          <Img
                            src="images/img_download_gray_555.svg"
                            className="h-[20px] ml-[71px] mt-[6px] w-[20px]"
                            alt="download"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[7px] items-start justify-end ml-[auto] md:w-[100%] w-[18%]">
                      <Img
                        src="images/img_cursor.svg"
                        className="h-[14px] w-[14px]"
                        alt="cursor Two"
                      />
                      <Text
                        className="not-italic text-gray_555 text-left w-[auto]"
                        variant="body86"
                      >
                        10:16 am
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-[27px] md:w-[100%] w-[auto]">
                  <Text
                    className="bg-gray_853 font-normal h-[47px] not-italic pl-[19px] sm:pr-[20px] pr-[33px] py-[13px] rounded-[3px] text-left text-shadow-ts6 text-white_A700_cc w-[97px]"
                    variant="body73"
                  >
                    typing...
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Line className="bg-bluegray_919 h-[1px] w-[100%]" />
              <div className="bg-bluegray_900_7f flex md:flex-col flex-row md:gap-[20px] items-center justify-end p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_user_gray_555_15x15.svg"
                  className="h-[22px] w-[22px]"
                  alt="user One"
                />
                <Img
                  src="images/img_user_gray_555_22x22.svg"
                  className="h-[22px] md:ml-[0] ml-[21px] w-[22px]"
                  alt="user Two"
                />
                <Input
                  className="flex-1 font-normal leading-[normal] not-italic pl-[16px] pr-[12px] py-[12px] text-[14px] placeholder:text-gray_555 text-gray_555 text-left w-[100%]"
                  wrapClassName="bg-bluegray_919 border-[1px] border-bluegray_919 border-solid mb-[2px] md:ml-[0] md:w-[100%] ml-[18px] rounded-[6px] sm:ml-[0] sm:w-[100%] w-[88%]"
                  name="Typeyourmessage One"
                  placeholder="Type your message..."
                ></Input>
                <Img
                  src="images/img_microphone_gray_555.svg"
                  className="h-[22px] md:ml-[0] ml-[18px] w-[22px]"
                  alt="microphone"
                />
                <Button className="bg-green_410 border-[1px] border-green_410 border-solid flex h-[43px] items-center justify-center mb-[2px] md:ml-[0] ml-[15px] p-[10px] rounded-[6px] w-[43px]">
                  <Img
                    src="images/img_send_white_a700_43x43.svg"
                    className="h-[22px]"
                    alt="send"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DarkSettingsPage;
