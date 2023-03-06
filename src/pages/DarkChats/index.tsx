import React from "react";

import { Text, Button, Img, Input, Line } from "components";
import { CloseSVG } from "../../assets/images";

const DarkChatsPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex font-abel items-start justify-end mx-[auto] sm:px-[20px] md:px-[40px] px-[75px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start mr-[auto] md:w-[100%] w-[92%]">
          <div className="bg-gray_973 flex items-center justify-start py-[22px] shadow-bs102 md:w-[100%] w-[17%]">
            <div className="flex flex-col items-center justify-start mb-[126px] w-[100%]">
              <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] w-[84%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-normal not-italic text-bluegray_222 text-left w-[auto]"
                    variant="body58"
                  >
                    Chats
                  </Text>
                  <Button className="bg-green_400_20 flex items-center justify-center p-[7px] rounded-[3px] w-[31px]">
                    <Img
                      src="images/img_plus_green_410.svg"
                      className="h-[13px]"
                      alt="plus"
                    />
                  </Button>
                </div>
                <div className="flex items-center justify-start w-[100%]">
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
              </div>
              <div className="flex flex-col justify-start mt-[38px] w-[100%]">
                <Text
                  className="font-normal md:ml-[0] ml-[23px] not-italic text-gray_555 text-left uppercase w-[auto]"
                  variant="body91"
                >
                  Favourites
                </Text>
                <div className="bg-green_410 flex flex-row items-end justify-end mt-[15px] p-[5px] w-[100%]">
                  <Img
                    src="images/img_car_teal_a700.svg"
                    className="h-[10px] mt-[19px] w-[10px]"
                    alt="car"
                  />
                  <Text
                    className="font-normal ml-[8px] my-[5px] not-italic text-left text-white_A700 w-[auto]"
                    variant="body78"
                  >
                    Bella Cote
                  </Text>
                  <div className="flex items-center justify-start mb-[4px] ml-[140px] mr-[19px] mt-[7px] w-[auto]">
                    <Text
                      className="bg-gray_100_3f h-[18px] justify-center not-italic px-[4px] py-[2px] rounded-[4px] text-left text-white_A700 w-[20px]"
                      variant="body95"
                    >
                      18
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[8px] items-end justify-start md:ml-[0] ml-[43px] mt-[11px] md:w-[100%] w-[26%]">
                  <Img
                    src="images/img_car_teal_a700.svg"
                    className="h-[10px] mt-[12px] w-[10px]"
                    alt="car One"
                  />
                  <Text
                    className="font-normal mb-[4px] not-italic text-bluegray_222 text-left tracking-[-0.40px] w-[auto]"
                    variant="body78"
                  >
                    Steven Jury
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start md:ml-[0] ml-[24px] mt-[9px] md:w-[100%] w-[35%]">
                  <div className="flex h-[29px] items-center justify-start w-[29px]">
                    <div className="flex h-[29px] items-center justify-start w-[29px]">
                      <div className="bg-green_410 md:h-[18px] h-[29px] pl-[5px] pt-[5px] relative rounded-[14px] w-[29px]">
                        <Text
                          className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic text-left text-white_A700 tracking-[-0.40px] w-[max-content]"
                          variant="body78"
                        >
                          JP
                        </Text>
                        <div className="absolute bg-teal_A700 border-[2px] border-gray_973 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_222 text-left tracking-[-0.40px] w-[auto]"
                    variant="body78"
                  >
                    James Pinard
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-start justify-start md:ml-[0] ml-[43px] mt-[15px] md:w-[100%] w-[32%]">
                  <Img
                    src="images/img_car_teal_a700.svg"
                    className="h-[10px] mt-[13px] w-[10px]"
                    alt="car Two"
                  />
                  <Text
                    className="font-normal mb-[5px] not-italic text-bluegray_222 text-left tracking-[-0.40px] w-[auto]"
                    variant="body78"
                  >
                    Alissa Richards
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[53px] items-center justify-start mt-[53px] md:w-[100%] w-[84%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_555 text-left uppercase w-[auto]"
                        variant="body91"
                      >
                        DIRECT MESSAGES
                      </Text>
                      <Button className="bg-green_400_20 flex items-center justify-center p-[7px] rounded-[3px] w-[31px]">
                        <Img
                          src="images/img_plus_green_410.svg"
                          className="h-[13px]"
                          alt="plus One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[8px] items-start justify-start md:ml-[0] ml-[19px] mt-[18px] md:w-[100%] w-[41%]">
                      <Img
                        src="images/img_car_teal_a700.svg"
                        className="h-[10px] mt-[13px] w-[10px]"
                        alt="car Three"
                      />
                      <Text
                        className="font-normal mb-[5px] not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        Nicholas Staten
                      </Text>
                    </div>
                    <div className="flex flex-row items-end justify-end ml-[auto] mt-[15px] md:w-[100%] w-[93%]">
                      <Img
                        src="images/img_car_teal_a700.svg"
                        className="h-[10px] mt-[12px] w-[10px]"
                        alt="car Four"
                      />
                      <Text
                        className="font-normal mb-[4px] ml-[8px] not-italic text-bluegray_222 text-left tracking-[-0.10px] w-[auto]"
                        variant="body78"
                      >
                        Kathryn Swarey
                      </Text>
                      <div className="flex items-center justify-start ml-[119px] my-[2px] w-[auto]">
                        <Text
                          className="bg-gray_500_2d h-[19px] justify-center not-italic px-[4px] py-[2px] rounded-[4px] text-gray_555 text-left tracking-[-0.10px] w-[14px]"
                          variant="body95"
                        >
                          8
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-start justify-start md:ml-[0] ml-[19px] mt-[15px] md:w-[100%] w-[41%]">
                      <Img
                        src="images/img_car_teal_a700.svg"
                        className="h-[10px] mt-[13px] w-[10px]"
                        alt="car Five"
                      />
                      <Text
                        className="font-normal mb-[5px] not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        Robert Ledonne
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-end justify-start md:ml-[0] ml-[19px] mt-[16px] md:w-[100%] w-[32%]">
                      <Img
                        src="images/img_car_teal_a700.svg"
                        className="h-[10px] mt-[12px] w-[10px]"
                        alt="car Six"
                      />
                      <Text
                        className="font-normal mb-[4px] not-italic text-bluegray_222 text-left tracking-[-0.10px] w-[auto]"
                        variant="body78"
                      >
                        Steven Jury
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start mt-[10px] md:w-[100%] w-[45%]">
                      <div className="flex h-[29px] items-center justify-start w-[29px]">
                        <div className="flex h-[29px] items-center justify-start w-[29px]">
                          <div className="bg-green_410 flex flex-row h-[29px] items-center justify-end pl-[5px] pt-[5px] rounded-[14px] w-[29px]">
                            <Text
                              className="font-normal mb-[5px] not-italic text-left text-white_A700 tracking-[-0.40px] w-[auto]"
                              variant="body78"
                            >
                              JL
                            </Text>
                            <div className="bg-teal_A700 border-[2px] border-gray_973 border-solid h-[10px] mt-[13px] rounded-[50%] w-[10px]"></div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_222 text-left tracking-[-0.10px] w-[auto]"
                        variant="body78"
                      >
                        Jessica Lewis
                      </Text>
                    </div>
                    <div className="flex flex-row items-end justify-end ml-[auto] mt-[15px] md:w-[100%] w-[93%]">
                      <Img
                        src="images/img_car_teal_a700.svg"
                        className="h-[10px] mt-[13px] w-[10px]"
                        alt="car Seven"
                      />
                      <Text
                        className="font-normal mb-[5px] ml-[8px] not-italic text-bluegray_222 text-left tracking-[-0.10px] w-[auto]"
                        variant="body78"
                      >
                        John Foss
                      </Text>
                      <div className="flex items-center justify-start mb-[4px] ml-[147px] w-[auto]">
                        <Text
                          className="bg-gray_500_2d h-[19px] justify-center not-italic px-[4px] py-[2px] rounded-[4px] text-gray_555 text-left tracking-[-0.10px] w-[14px]"
                          variant="body95"
                        >
                          5
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-start justify-start md:ml-[0] ml-[19px] mt-[14px] md:w-[100%] w-[39%]">
                      <Img
                        src="images/img_car_teal_a700.svg"
                        className="h-[10px] mt-[13px] w-[10px]"
                        alt="car Eight"
                      />
                      <Text
                        className="font-normal mb-[5px] not-italic text-bluegray_222 text-left w-[auto]"
                        variant="body78"
                      >
                        Gloria Underhill
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_555 text-left uppercase w-[auto]"
                        variant="body91"
                      >
                        Channels
                      </Text>
                      <Button className="bg-green_400_20 flex items-center justify-center p-[7px] rounded-[3px] w-[31px]">
                        <Img
                          src="images/img_plus_green_410.svg"
                          className="h-[13px]"
                          alt="plus Two"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-end justify-start mt-[13px] w-[100%]">
                      <Button className="bg-bluegray_900_3f cursor-pointer font-normal h-[29px] leading-[normal] not-italic py-[5px] rounded-[14px] text-[14px] text-bluegray_222 text-center tracking-[-0.30px] w-[29px]">
                        #
                      </Button>
                      <Text
                        className="font-normal ml-[8px] my-[5px] not-italic text-bluegray_222 text-left tracking-[-0.10px] w-[auto]"
                        variant="body78"
                      >
                        Landing Design
                      </Text>
                      <div className="flex items-center justify-start mb-[4px] ml-[116px] mt-[7px] w-[auto]">
                        <Text
                          className="bg-gray_500_2d h-[18px] justify-center not-italic px-[4px] rounded-[4px] text-gray_555 text-left tracking-[-0.10px] w-[20px]"
                          variant="body95"
                        >
                          12
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-end justify-start mt-[10px] md:w-[100%] w-[47%]">
                      <Button className="bg-bluegray_900_3f cursor-pointer font-normal h-[29px] leading-[normal] not-italic py-[5px] rounded-[14px] text-[14px] text-bluegray_222 text-center tracking-[-0.30px] w-[29px]">
                        #
                      </Button>
                      <Text
                        className="font-normal my-[5px] not-italic text-bluegray_222 text-left tracking-[-0.30px] w-[auto]"
                        variant="body78"
                      >
                        Design Phase 2
                      </Text>
                    </div>
                    <div className="flex flex-row items-end justify-start mt-[9px] w-[100%]">
                      <Button className="bg-bluegray_900_3f cursor-pointer font-normal h-[29px] leading-[normal] not-italic py-[5px] rounded-[14px] text-[14px] text-bluegray_222 text-center tracking-[-0.30px] w-[29px]">
                        #
                      </Button>
                      <Text
                        className="font-normal ml-[8px] my-[5px] not-italic text-bluegray_222 text-left tracking-[-0.10px] w-[auto]"
                        variant="body78"
                      >
                        Brand Suggestion
                      </Text>
                      <div className="flex items-center justify-start mb-[4px] ml-[103px] mt-[7px] w-[auto]">
                        <Text
                          className="bg-gray_500_2d h-[18px] justify-center not-italic px-[4px] rounded-[4px] text-gray_555 text-left tracking-[-0.10px] w-[20px]"
                          variant="body95"
                        >
                          85
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start mt-[10px] md:w-[100%] w-[35%]">
                      <Button className="bg-bluegray_900_3f cursor-pointer font-normal h-[29px] leading-[normal] not-italic py-[5px] rounded-[14px] text-[14px] text-bluegray_222 text-center tracking-[-0.30px] w-[29px]">
                        #
                      </Button>
                      <Text
                        className="font-normal not-italic text-bluegray_222 text-left tracking-[-0.10px] w-[auto]"
                        variant="body78"
                      >
                        Reporting
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
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

export default DarkChatsPage;
