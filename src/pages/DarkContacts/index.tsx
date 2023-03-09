import React from "react";

import { Text, Button, Img, Input, List, Line } from "components";
import { CloseSVG } from "../../assets/images";

const DarkContactsPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex font-abel items-start justify-end mx-[auto] sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start mr-[auto] md:w-[100%] w-[92%]">
          <div className="bg-bluegray_913 flex items-end justify-start sm:pl-[20px] pl-[22px] py-[22px] shadow-bs102 md:w-[100%] w-[17%]">
            <div className="flex flex-col items-start justify-start mb-[26px] w-[100%]">
              <div className="flex flex-row items-start justify-between md:w-[100%] w-[92%]">
                <Text
                  className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                  variant="body58"
                >
                  Contacts
                </Text>
                <Button className="bg-green_400_20 flex items-center justify-center p-[7px] rounded-[3px] w-[31px]">
                  <Img
                    src="images/img_plus_green_410.svg"
                    className="h-[13px]"
                    alt="plus"
                  />
                </Button>
              </div>
              <div className="flex items-center justify-start mt-[19px] md:w-[100%] w-[92%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_555 text-gray_555 text-left w-[100%]"
                  wrapClassName="bg-bluegray_913 flex pl-[16px] pr-[17px] py-[11px] rounded-[4px] w-[100%]"
                  name="SearchBtn"
                  placeholder="Search here.."
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#8f9198"
                      />
                    ) : (
                      <Img
                        src="images/img_search_bluegray_222_15x15.svg"
                        className="cursor-pointer ml-[35px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                ></Input>
              </div>
              <List
                className="flex-col gap-[34px] grid items-center mt-[46px] w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[21px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[17px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-green_410 text-left w-[auto]"
                        variant="body87"
                      >
                        A
                      </Text>
                      <Line className="bg-bluegray_913 h-[1px] my-[7px] w-[92%]" />
                    </div>
                    <div className="flex flex-row items-center justify-between ml-[auto] md:w-[100%] w-[78%]">
                      <Text
                        className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        Adam Zampa
                      </Text>
                      <Img
                        src="images/img_user_gray_555_15x15.svg"
                        className="h-[15px] w-[15px]"
                        alt="user"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[21px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-green_410 text-left w-[auto]"
                        variant="body87"
                      >
                        B
                      </Text>
                      <Line className="bg-bluegray_913 h-[1px] my-[7px] w-[92%]" />
                    </div>
                    <div className="flex flex-row items-start justify-between ml-[auto] md:w-[100%] w-[78%]">
                      <Text
                        className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        Bella Cote
                      </Text>
                      <Img
                        src="images/img_user_gray_555_15x15.svg"
                        className="h-[15px] mt-[3px] w-[15px]"
                        alt="user One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-green_410 text-left w-[auto]"
                        variant="body87"
                      >
                        D
                      </Text>
                      <Line className="bg-bluegray_913 h-[1px] my-[7px] w-[92%]" />
                    </div>
                    <div className="flex flex-row items-start justify-between ml-[auto] md:w-[100%] w-[78%]">
                      <Text
                        className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        Dobert Ledonne
                      </Text>
                      <Img
                        src="images/img_user_gray_555_15x15.svg"
                        className="h-[15px] mt-[2px] w-[15px]"
                        alt="user Two"
                      />
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex items-center justify-start mt-[36px] w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[17px] items-center justify-between w-[100%]">
                    <Text
                      className="font-normal not-italic text-green_410 text-left w-[auto]"
                      variant="body87"
                    >
                      F
                    </Text>
                    <Line className="bg-bluegray_913 h-[1px] my-[7px] w-[92%]" />
                  </div>
                  <div className="flex flex-row items-start justify-between ml-[auto] mt-[20px] md:w-[100%] w-[78%]">
                    <Text
                      className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                      variant="body78"
                    >
                      Fenrick Beriwck
                    </Text>
                    <Img
                      src="images/img_user_gray_555_15x15.svg"
                      className="h-[15px] mt-[2px] w-[15px]"
                      alt="user Three"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[21px] md:w-[100%] w-[92%]">
                    <div className="flex h-[29px] items-center justify-start w-[29px]">
                      <Button className="bg-green_410 cursor-pointer font-normal h-[29px] leading-[normal] not-italic py-[5px] rounded-[14px] text-[14px] text-center text-white_A700 w-[29px]">
                        FP
                      </Button>
                    </div>
                    <Text
                      className="font-normal ml-[8px] not-italic text-bluegray_222 text-left w-[auto]"
                      variant="body78"
                    >
                      Fidel Pinard
                    </Text>
                    <Img
                      src="images/img_user_gray_555_15x15.svg"
                      className="h-[15px] ml-[137px] w-[15px]"
                      alt="user Four"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between ml-[auto] mt-[21px] md:w-[100%] w-[78%]">
                    <Text
                      className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                      variant="body78"
                    >
                      Floria Underhill
                    </Text>
                    <Img
                      src="images/img_user_gray_555_15x15.svg"
                      className="h-[15px] mt-[2px] w-[15px]"
                      alt="user Five"
                    />
                  </div>
                </div>
              </div>
              <List
                className="flex-col gap-[36px] grid items-center mt-[35px] w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-green_410 text-left w-[auto]"
                        variant="body87"
                      >
                        I
                      </Text>
                      <Line className="bg-bluegray_913 h-[1px] my-[7px] w-[92%]" />
                    </div>
                    <div className="flex flex-row items-start justify-between ml-[auto] md:w-[100%] w-[78%]">
                      <Text
                        className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        Iris Lewis
                      </Text>
                      <Img
                        src="images/img_user_gray_555_15x15.svg"
                        className="h-[15px] mt-[2px] w-[15px]"
                        alt="user Six"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[17px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-green_410 text-left w-[auto]"
                        variant="body87"
                      >
                        J
                      </Text>
                      <Line className="bg-bluegray_913 h-[1px] my-[7px] w-[92%]" />
                    </div>
                    <div className="flex flex-row items-start justify-between ml-[auto] md:w-[100%] w-[78%]">
                      <Text
                        className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        John Foss
                      </Text>
                      <Img
                        src="images/img_user_gray_555_15x15.svg"
                        className="h-[15px] mt-[2px] w-[15px]"
                        alt="user Seven"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[21px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-green_410 text-left w-[auto]"
                        variant="body87"
                      >
                        K
                      </Text>
                      <Line className="bg-bluegray_913 h-[1px] my-[7px] w-[92%]" />
                    </div>
                    <div className="flex flex-row items-center justify-between ml-[auto] md:w-[100%] w-[78%]">
                      <Text
                        className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        Kathryn Swarey
                      </Text>
                      <Img
                        src="images/img_user_gray_555_15x15.svg"
                        className="h-[15px] w-[15px]"
                        alt="user Eight"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-green_410 text-left w-[auto]"
                        variant="body87"
                      >
                        N
                      </Text>
                      <Line className="bg-bluegray_913 h-[1px] my-[7px] w-[92%]" />
                    </div>
                    <div className="flex flex-row items-start justify-between ml-[auto] md:w-[100%] w-[78%]">
                      <Text
                        className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        Nicholas Staten
                      </Text>
                      <Img
                        src="images/img_user_gray_555_15x15.svg"
                        className="h-[15px] mt-[3px] w-[15px]"
                        alt="user Nine"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[21px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-green_410 text-left w-[auto]"
                        variant="body87"
                      >
                        P
                      </Text>
                      <Line className="bg-bluegray_913 h-[1px] my-[7px] w-[92%]" />
                    </div>
                    <div className="flex flex-row items-start justify-between ml-[auto] md:w-[100%] w-[78%]">
                      <Text
                        className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        Patrick Hendricks
                      </Text>
                      <Img
                        src="images/img_user_gray_555_15x15.svg"
                        className="h-[15px] mt-[3px] w-[15px]"
                        alt="user Ten"
                      />
                    </div>
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
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Line className="bg-bluegray_919 h-[1px] w-[100%]" />
              <div className="bg-bluegray_900_7f flex md:flex-col flex-row md:gap-[20px] items-center justify-end p-[24px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_user_gray_555_15x15.svg"
                  className="h-[22px] w-[22px]"
                  alt="user Eleven"
                />
                <Img
                  src="images/img_user_gray_555_22x22.svg"
                  className="h-[22px] md:ml-[0] ml-[21px] w-[22px]"
                  alt="user Twelve"
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

export default DarkContactsPage;
