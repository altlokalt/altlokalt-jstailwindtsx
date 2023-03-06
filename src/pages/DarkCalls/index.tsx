import React from "react";

import { Text, Img, List, Line, Input, Button } from "components";

const DarkCallsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-abel items-start justify-end mx-[auto] sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start mr-[auto] md:w-[100%] w-[92%]">
          <div className="bg-gray_973 flex flex-col gap-[10px] items-center justify-start py-[22px] shadow-bs102 md:w-[100%] w-[17%]">
            <div className="flex flex-col gap-[28px] justify-start md:w-[100%] w-[84%]">
              <Text
                className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                variant="body58"
              >
                Calls
              </Text>
              <div className="flex items-center justify-start md:ml-[0] ml-[37px] md:w-[100%] w-[86%]">
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_555 text-left w-[auto]"
                      variant="body78"
                    >
                      Patrick Hendricks
                    </Text>
                    <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                      <Img
                        src="images/img_clock_teal_a700.svg"
                        className="h-[12px] w-[12px]"
                        alt="clock"
                      />
                      <Text
                        className="font-normal not-italic text-gray_555 text-left w-[auto]"
                        variant="body87"
                      >
                        13 Aug, 2021, 01:0...
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-normal not-italic text-gray_555 text-left w-[auto]"
                    variant="body87"
                  >
                    02:34
                  </Text>
                  <Img
                    src="images/img_videocamera_green_410.svg"
                    className="h-[20px] w-[20px]"
                    alt="videocamera"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start mb-[388px] pt-[14px] px-[14px] w-[100%]">
              <List
                className="flex-col gap-[11.5px] grid items-center pt-[59px] w-[93%]"
                orientation="vertical"
              >
                <div className="flex items-center justify-start my-[0] w-[100%]">
                  <div className="flex flex-row items-start justify-start w-[100%]">
                    <div className="flex h-[29px] items-center justify-start mt-[3px] w-[29px]">
                      <Text
                        className="bg-pink_407 flex font-normal h-[29px] items-center justify-center not-italic rounded-[14px] text-center text-white_A700 w-[29px]"
                        variant="body78"
                      >
                        RL
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-[8px] w-[44%]">
                      <Text
                        className="font-normal not-italic text-gray_555 text-left w-[auto]"
                        variant="body78"
                      >
                        Robert Ledonne
                      </Text>
                      <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                        <Img
                          src="images/img_clock_teal_a700.svg"
                          className="h-[12px] w-[12px]"
                          alt="clock One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_555 text-left w-[auto]"
                          variant="body87"
                        >
                          13 Aug, 2021, 04:3...
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal ml-[36px] mt-[9px] not-italic text-gray_555 text-left w-[auto]"
                      variant="body87"
                    >
                      01:40
                    </Text>
                    <Img
                      src="images/img_videocamera_green_410.svg"
                      className="h-[20px] ml-[21px] mt-[9px] w-[20px]"
                      alt="videocamera One"
                    />
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-bluegray_913 w-[100%]" />
                <div className="flex items-center justify-start ml-[37px] my-[0] md:w-[100%] w-[86%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_555 text-left w-[auto]"
                        variant="body78"
                      >
                        Steven Jury
                      </Text>
                      <div className="flex flex-row items-start justify-evenly mt-[2px] w-[100%]">
                        <Img
                          src="images/img_arrowright_pink_407.svg"
                          className="h-[12px] w-[12px]"
                          alt="arrowright"
                        />
                        <Text
                          className="font-normal not-italic text-gray_555 text-left w-[auto]"
                          variant="body87"
                        >
                          13 Aug, 2021, 06:4...
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_555 text-left w-[auto]"
                      variant="body87"
                    >
                      01:02
                    </Text>
                    <Img
                      src="images/img_call_green_410.svg"
                      className="h-[22px] w-[22px]"
                      alt="call"
                    />
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-bluegray_913 w-[100%]" />
                <div className="flex items-center justify-start ml-[37px] my-[0] md:w-[100%] w-[85%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_555 text-left w-[auto]"
                        variant="body78"
                      >
                        Bella Cote
                      </Text>
                      <div className="flex flex-row items-start justify-evenly mt-[3px] w-[100%]">
                        <Img
                          src="images/img_clock_teal_a700.svg"
                          className="h-[12px] w-[12px]"
                          alt="clock Two"
                        />
                        <Text
                          className="font-normal not-italic text-gray_555 text-left w-[auto]"
                          variant="body87"
                        >
                          13 Aug, 2021, 04:3...
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_555 text-left w-[auto]"
                      variant="body87"
                    >
                      00:40
                    </Text>
                    <Img
                      src="images/img_videocamera_green_410.svg"
                      className="h-[20px] w-[20px]"
                      alt="videocamera Two"
                    />
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-bluegray_913 w-[100%]" />
                <div className="flex items-center justify-start ml-[37px] my-[0] md:w-[100%] w-[86%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_555 text-left tracking-[0.10px] w-[auto]"
                        variant="body78"
                      >
                        Nicholas Staten
                      </Text>
                      <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                        <Img
                          src="images/img_arrowright_pink_407.svg"
                          className="h-[12px] w-[12px]"
                          alt="arrowright One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_555 text-left w-[auto]"
                          variant="body87"
                        >
                          13 Aug, 2021, 01:0...
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_555 text-left w-[auto]"
                      variant="body87"
                    >
                      05:20
                    </Text>
                    <Img
                      src="images/img_call_green_410.svg"
                      className="h-[22px] w-[22px]"
                      alt="call One"
                    />
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-bluegray_913 w-[100%]" />
                <div className="flex items-center justify-start ml-[37px] my-[0] md:w-[100%] w-[85%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_555 text-left w-[auto]"
                        variant="body78"
                      >
                        Jessica Lewis
                      </Text>
                      <div className="flex flex-row items-start justify-evenly mt-[3px] w-[100%]">
                        <Img
                          src="images/img_clock_teal_a700.svg"
                          className="h-[12px] w-[12px]"
                          alt="clock Three"
                        />
                        <Text
                          className="font-normal not-italic text-gray_555 text-left w-[auto]"
                          variant="body87"
                        >
                          13 Aug, 2021, 11:3...
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_555 text-left w-[auto]"
                      variant="body87"
                    >
                      06:05
                    </Text>
                    <Img
                      src="images/img_videocamera_green_410.svg"
                      className="h-[20px] w-[20px]"
                      alt="videocamera Three"
                    />
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-bluegray_913 w-[100%]" />
                <div className="flex items-center justify-start ml-[37px] my-[0] md:w-[100%] w-[85%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_555 text-left w-[auto]"
                        variant="body78"
                      >
                        John Foss
                      </Text>
                      <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                        <Img
                          src="images/img_clock_teal_a700.svg"
                          className="h-[12px] w-[12px]"
                          alt="clock Four"
                        />
                        <Text
                          className="font-normal not-italic text-gray_555 text-left w-[auto]"
                          variant="body87"
                        >
                          13 Aug, 2021, 17:3...
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_555 text-left w-[auto]"
                      variant="body87"
                    >
                      02:34
                    </Text>
                    <Img
                      src="images/img_videocamera_green_410.svg"
                      className="h-[20px] w-[20px]"
                      alt="videocamera Four"
                    />
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-bluegray_913 w-[100%]" />
                <div className="flex items-center justify-start ml-[37px] my-[0] md:w-[100%] w-[86%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_555 text-left w-[auto]"
                        variant="body78"
                      >
                        Steven Jury
                      </Text>
                      <div className="flex flex-row items-start justify-evenly mt-[2px] w-[100%]">
                        <Img
                          src="images/img_arrowright_pink_407.svg"
                          className="h-[12px] w-[12px]"
                          alt="arrowright Two"
                        />
                        <Text
                          className="font-normal not-italic text-gray_555 text-left w-[auto]"
                          variant="body87"
                        >
                          12 Aug, 2021, 07:3...
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_555 text-left w-[auto]"
                      variant="body87"
                    >
                      04:50
                    </Text>
                    <Img
                      src="images/img_call_green_410.svg"
                      className="h-[22px] w-[22px]"
                      alt="call Two"
                    />
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-bluegray_913 w-[100%]" />
                <div className="flex items-center justify-start my-[0] w-[100%]">
                  <div className="flex flex-row items-start justify-start w-[100%]">
                    <div className="flex h-[29px] items-center justify-start mt-[3px] w-[29px]">
                      <Text
                        className="bg-pink_407 flex font-normal h-[29px] items-center justify-center not-italic rounded-[14px] text-center text-white_A700 w-[29px]"
                        variant="body78"
                      >
                        RL
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-[8px] w-[44%]">
                      <Text
                        className="font-normal not-italic text-gray_555 text-left w-[auto]"
                        variant="body78"
                      >
                        Robert Ledonne
                      </Text>
                      <div className="flex flex-row items-start justify-evenly mt-[4px] w-[100%]">
                        <Img
                          src="images/img_clock_teal_a700.svg"
                          className="h-[12px] w-[12px]"
                          alt="clock Five"
                        />
                        <Text
                          className="font-normal not-italic text-gray_555 text-left w-[auto]"
                          variant="body87"
                        >
                          11 Aug, 2021, 04:3...
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal ml-[36px] mt-[9px] not-italic text-gray_555 text-left w-[auto]"
                      variant="body87"
                    >
                      02:30
                    </Text>
                    <Img
                      src="images/img_videocamera_green_410.svg"
                      className="h-[20px] ml-[21px] mt-[9px] w-[20px]"
                      alt="videocamera Five"
                    />
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-bluegray_913 w-[100%]" />
                <div className="flex items-center justify-start ml-[37px] my-[0] md:w-[100%] w-[85%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_555 text-left w-[auto]"
                        variant="body78"
                      >
                        Bella Cote
                      </Text>
                      <div className="flex flex-row items-start justify-evenly mt-[3px] w-[100%]">
                        <Img
                          src="images/img_clock_teal_a700.svg"
                          className="h-[12px] w-[12px]"
                          alt="clock Six"
                        />
                        <Text
                          className="font-normal not-italic text-gray_555 text-left w-[auto]"
                          variant="body87"
                        >
                          11 Aug, 2021, 02:3...
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_555 text-left w-[auto]"
                      variant="body87"
                    >
                      02:34
                    </Text>
                    <Img
                      src="images/img_videocamera_green_410.svg"
                      className="h-[20px] w-[20px]"
                      alt="videocamera Six"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col gap-[52px] items-center justify-start md:mt-[0] mt-[124px] md:w-[100%] w-[84%]">
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
                  name="time Twelve"
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
              <div className="flex flex-row items-start justify-start mt-[89px] md:w-[100%] w-[21%]">
                <Text
                  className="mt-[48px] not-italic text-gray_555 text-left w-[auto]"
                  variant="body86"
                >
                  10:15 am
                </Text>
                <Img
                  src="images/img_arrowup_gray_842.svg"
                  className="h-[24px] mb-[40px] ml-[69px] w-[auto]"
                  alt="arrowup"
                />
                <Img
                  src="images/img_arrowup_gray_842.svg"
                  className="h-[24px] mb-[40px] ml-[132px] w-[auto]"
                  alt="arrowup One"
                />
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
                            alt="clock Seven"
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
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Line className="bg-bluegray_919 h-[1px] w-[100%]" />
              <div className="bg-bluegray_900_7f flex md:flex-col flex-row md:gap-[20px] items-center justify-end p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_user_gray_555_15x15.svg"
                  className="h-[22px] w-[22px]"
                  alt="user"
                />
                <Img
                  src="images/img_user_gray_555_22x22.svg"
                  className="h-[22px] md:ml-[0] ml-[21px] w-[22px]"
                  alt="user One"
                />
                <div className="flex md:flex-1 items-center justify-start mb-[2px] md:ml-[0] ml-[18px] md:w-[100%] w-[88%]">
                  <Input
                    className="font-normal leading-[normal] not-italic pl-[16px] pr-[12px] py-[12px] text-[14px] placeholder:text-gray_555 text-gray_555 text-left w-[100%]"
                    wrapClassName="bg-bluegray_919 border-[1px] border-bluegray_919 border-solid rounded-[6px] w-[100%]"
                    name="Typeyourmessage One"
                    placeholder="Type your message..."
                  ></Input>
                </div>
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

export default DarkCallsPage;
