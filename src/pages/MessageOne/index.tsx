import React from "react";

import { Text, Img, Button, Input, List, Line, CheckBox } from "components";
import { CloseSVG } from "../../assets/images";

const MessageOnePage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_919 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-[20px] md:gap-[20px] items-center mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[302px]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="bg-gray_55 border-[1px] border-gray_106 border-solid flex flex-col gap-[50px] items-start justify-start py-[34px] w-[100%]">
              <div className="flex items-end justify-start md:ml-[0] ml-[34px] pl-[4px] py-[4px] md:w-[100%] w-[59%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-black_906 text-left tracking-[0.18px] w-[auto]"
                    variant="body64"
                  >
                    Kevin Cranel
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                    variant="body78"
                  >
                    @kecrane
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start px-[18px] w-[100%]">
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[16px] not-italic text-black_906 text-left tracking-[0.12px] w-[auto]"
                    variant="body87"
                  >
                    GENERAL
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[2px] md:w-[100%] w-[55%]">
                        <Img
                          src="images/img_clock_gray_509.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock"
                        />
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Dashboard
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_900_5f flex font-outfit items-start justify-end p-[8px] rounded-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[46%]">
                        <Img
                          src="images/img_user_1.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="font-medium mt-[2px] text-gray_920 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Message
                        </Text>
                      </div>
                    </div>
                    <div className="flex font-urbanist items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[44%]">
                        <Img
                          src="images/img_settings.svg"
                          className="h-[24px] w-[24px]"
                          alt="settings"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Settings
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_922 text-left tracking-[0.12px] w-[auto]"
                    variant="body87"
                  >
                    MARKETPLACE
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[2px] md:w-[100%] w-[42%]">
                        <Img
                          src="images/img_user_gray_509.svg"
                          className="h-[24px] w-[24px]"
                          alt="user One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Market
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[3px] md:w-[100%] w-[51%]">
                        <Img
                          src="images/img_mail.svg"
                          className="h-[24px] w-[24px]"
                          alt="mail"
                        />
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Active Bid
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[39%]">
                        <Img
                          src="images/img_clock_gray_509_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Saved
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_922 text-left tracking-[0.12px] w-[auto]"
                    variant="body87"
                  >
                    MY PROFILE
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[3px] md:w-[100%] w-[51%]">
                        <Img
                          src="images/img_user_gray_509_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="user Two"
                        />
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Collection
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[4px] md:w-[100%] w-[39%]">
                        <Img
                          src="images/img_computer_gray_509.svg"
                          className="h-[24px] w-[24px]"
                          alt="computer"
                        />
                        <Text
                          className="font-normal not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          Wallet
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] pr-[4px] md:w-[100%] w-[41%]">
                        <Img
                          src="images/img_clock_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock Two"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.18px] w-[auto]"
                          variant="body64"
                        >
                          History
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-urbanist md:h-[243px] h-[258px] md:ml-[0] ml-[34px] relative w-[78%]">
                <div className="absolute bg-gray_920 bottom-[0] h-[233px] inset-x-[0] mx-[auto] rounded-[15px] w-[234px]"></div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[91%]">
                  <Button className="bg-white_A700 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] shadow-bs20 w-[50px]">
                    <Img
                      src="images/img_question.svg"
                      className="h-[24px]"
                      alt="question"
                    />
                  </Button>
                  <Text
                    className="font-normal mt-[16px] not-italic text-left text-white_A700 tracking-[0.18px] w-[auto]"
                    variant="body64"
                  >
                    Help Center
                  </Text>
                  <div className="flex flex-col gap-[29px] items-center justify-start mt-[10px] w-[100%]">
                    <Text
                      className="font-normal leading-[25.20px] not-italic text-center text-gray_406 tracking-[0.14px]"
                      variant="body78"
                    >
                      Having trouble in Enefti?
                      <br />
                      Please contact us for more question
                    </Text>
                    <Button className="bg-white_A700 cursor-pointer font-normal min-w-[206px] not-italic py-[11px] rounded-[10px] text-[14px] text-center text-gray_920 tracking-[0.14px] w-[auto]">
                      Go To Help Center
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-evenly md:px-[20px] w-[100%]">
          <div className="md:h-[1074px] h-[1076px] relative md:w-[100%] w-[34%]">
            <div className="absolute bg-white_A700 flex h-[max-content] inset-[0] items-center justify-center m-[auto] outline outline-[0.5px] outline-gray_106 p-[24px] sm:px-[20px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_509 text-gray_509 text-left tracking-[0.14px] w-[100%]"
                wrapClassName="bg-gray_55 flex mb-[974px] pl-[16px] pr-[35px] py-[16px] rounded-[15px] sm:pr-[20px] sm:w-[100%] w-[94%]"
                name="SearchInput"
                placeholder="Search chat"
                prefix={
                  <Img
                    src="images/img_search_gray_509.svg"
                    className="cursor-pointer mr-[16px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#93989a"
                      className="cursor-pointer ml-[10px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
            </div>
            <List
              className="absolute bottom-[0] flex-col font-urbanist gap-[0.5px] grid inset-x-[0] items-center mx-[auto] w-[100%]"
              orientation="vertical"
            >
              <div className="bg-gray_900_67 flex flex-1 items-center justify-start my-[0] p-[20px] w-[100%]">
                <div className="flex flex-row items-center justify-between md:w-[100%] w-[93%]">
                  <div className="flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[56px] w-[auto]">
                    <div className="flex flex-col gap-[5px] items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                        variant="body69"
                      >
                        Jenny Wilson
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                        variant="body78"
                      >
                        How are you?
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-normal not-italic text-gray_509 text-right tracking-[0.12px] w-[auto]"
                    variant="body87"
                  >
                    16:00
                  </Text>
                </div>
              </div>
              <Line className="self-center h-[1px] bg-gray_106 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] w-[83%]">
                <div className="flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[56px] w-[auto]">
                  <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Kristin Watson
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      Wow, this is really epic
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-gray_509 text-right tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  18:00
                </Text>
              </div>
              <Line className="self-center h-[1px] bg-gray_106 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] w-[83%]">
                <div className="flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[56px] w-[auto]">
                  <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Darlene Robertson
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      Wow, this is really epic
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-gray_509 text-right tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  08:00
                </Text>
              </div>
              <Line className="self-center h-[1px] bg-gray_106 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] w-[83%]">
                <div className="flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[56px] w-[auto]">
                  <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Arlene McCoy
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      perfect!
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-gray_509 text-right tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  11:00
                </Text>
              </div>
              <Line className="self-center h-[1px] bg-gray_106 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] w-[83%]">
                <div className="flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[56px] w-[auto]">
                  <div className="flex flex-col items-start justify-end md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Ralph Edwards
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      I&#39;ll be there in 2 mins
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-gray_509 text-right tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  11:30
                </Text>
              </div>
              <Line className="self-center h-[1px] bg-gray_106 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] w-[83%]">
                <div className="flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[56px] w-[auto]">
                  <div className="flex flex-col gap-[5px] items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Darrell Steward
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      Haha that&#39;s terrifying 😂
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-gray_509 text-right tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  13:00
                </Text>
              </div>
              <Line className="self-center h-[1px] bg-gray_106 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] w-[83%]">
                <div className="flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[56px] w-[auto]">
                  <div className="flex flex-col items-start justify-end md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Kathryn Murphy
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      woohoooo
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-gray_509 text-right tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  09:30
                </Text>
              </div>
              <Line className="self-center h-[1px] bg-gray_106 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] w-[83%]">
                <div className="flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[56px] w-[auto]">
                  <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Eleanor Pena
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      omg, this is amazing
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-gray_509 text-right tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  09:00
                </Text>
              </div>
              <Line className="self-center h-[1px] bg-gray_106 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] w-[83%]">
                <div className="flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[56px] w-[auto]">
                  <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      aww
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-gray_509 text-right tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  12:00
                </Text>
              </div>
              <Line className="self-center h-[1px] bg-gray_106 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] w-[83%]">
                <div className="flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[56px] w-[auto]">
                  <div className="flex flex-col gap-[5px] items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Wade Warren
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      Haha oh man
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-gray_509 text-right tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  12:30
                </Text>
              </div>
              <Line className="self-center h-[1px] bg-gray_106 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] w-[83%]">
                <div className="flex items-end justify-start w-[auto]">
                  <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Theresa Webb
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      just ideas for next time
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-gray_509 text-right tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  14:00
                </Text>
              </div>
              <Line className="self-center h-[1px] bg-gray_106 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] w-[83%]">
                <div className="flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[56px] w-[auto]">
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                      variant="body69"
                    >
                      Albertus Marque
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      Hahahaha, Impossible
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-gray_509 text-right tracking-[0.12px] w-[auto]"
                  variant="body87"
                >
                  14:00
                </Text>
              </div>
            </List>
          </div>
          <div className="bg-gray_55 flex md:flex-1 font-urbanist items-center justify-start mb-[2px] md:w-[100%] w-[67%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start outline outline-[0.5px] outline-gray_106 p-[27px] sm:px-[20px] w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[7px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_906 text-left tracking-[0.18px] w-[auto]"
                    variant="body64"
                  >
                    Jenny Wilson
                  </Text>
                  <Text
                    className="font-normal mt-[2px] not-italic text-green_602 text-left tracking-[0.14px] w-[auto]"
                    variant="body78"
                  >
                    Online
                  </Text>
                </div>
                <Img
                  src="images/img_search_gray_509.svg"
                  className="h-[24px] md:ml-[0] ml-[473px] w-[24px]"
                  alt="search"
                />
                <Img
                  src="images/img_clock_2.svg"
                  className="h-[24px] md:ml-[0] ml-[20px] w-[24px]"
                  alt="clock Three"
                />
                <Img
                  src="images/img_overflowmenu_gray_509.svg"
                  className="h-[24px] md:ml-[0] ml-[20px] w-[24px]"
                  alt="overflowmenu"
                />
              </div>
              <div className="flex flex-col gap-[28px] items-start justify-start mt-[50px] md:w-[100%] w-[92%]">
                <div className="flex flex-col gap-[14px] items-start justify-start md:w-[100%] w-[56%]">
                  <div className="bg-gray_106 border-[1px] border-gray_310 border-solid flex items-center justify-end p-[9px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
                    <Text
                      className="font-normal leading-[25.20px] not-italic text-gray_900_ab text-left tracking-[0.14px]"
                      variant="body78"
                    >
                      Amateurs think about how much money they can make.
                      <br />
                      Professionals think about how much money they could lose
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                    variant="body87"
                  >
                    4:32 Am
                  </Text>
                </div>
                <div className="flex flex-col gap-[10px] items-end justify-start md:ml-[0] ml-[105px] md:w-[100%] w-[85%]">
                  <div className="bg-gray_920 flex items-center justify-end p-[13px] rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
                    <Text
                      className="font-normal leading-[25.20px] not-italic text-left text-white_A700_ab tracking-[0.14px]"
                      variant="body78"
                    >
                      The price of a commodity will never go to zero. When you
                      invest in commodities futures,
                      <br />
                      you are not buying a piece of paper that says you own an
                      intangible of the company that
                      <br />
                      can go bankrupt 😌.{" "}
                    </Text>
                  </div>
                  <CheckBox
                    className="font-normal not-italic text-[12px] text-gray_509 text-left tracking-[0.12px]"
                    inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                    label="4:10 Am"
                    name="410Am"
                  ></CheckBox>
                </div>
                <div className="bg-gray_106 border-[1px] border-gray_310 border-solid flex items-center justify-end p-[9px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal leading-[25.20px] not-italic text-gray_900_ab text-left tracking-[0.14px]"
                    variant="body78"
                  >
                    Amateurs think about how much money they can make.
                    <br />
                    Professionals think about how much money they could lose
                  </Text>
                </div>
                <div className="flex flex-col gap-[14px] items-start justify-start md:w-[100%] w-[90%]">
                  <div className="bg-gray_106 border-[1px] border-gray_310 border-solid flex items-center justify-end p-[9px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
                    <Text
                      className="font-normal leading-[25.20px] not-italic text-gray_900_ab text-left tracking-[0.14px]"
                      variant="body78"
                    >
                      It&#39;s not always easy to do what&#39;s not popular, but
                      that&#39;s where you make your money.
                      <br />
                      Buy stocks that look bad to less careful investors and
                      hang on until their real value is recognized.
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                    variant="body87"
                  >
                    4:26 Am
                  </Text>
                </div>
                <div className="flex flex-col gap-[10px] items-end justify-start md:ml-[0] ml-[87px] md:w-[100%] w-[88%]">
                  <div className="bg-gray_920 flex items-center justify-end p-[13px] rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
                    <Text
                      className="font-normal leading-[25.20px] not-italic text-left text-white_A700_ab tracking-[0.14px]"
                      variant="body78"
                    >
                      99%+ of traders don&#39;t care about Ferraris and yachts.
                      They just want to pay their bills, save a<br />
                      little extra money, and sleep well at night. The only way
                      to do that is to bat 70% or more.
                      <br />
                      Anything less, and these goals are nothing more than
                      fantasy.
                    </Text>
                  </div>
                  <CheckBox
                    className="font-normal not-italic text-[12px] text-gray_509 text-left tracking-[0.12px]"
                    inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                    label="5:22 Am"
                    name="522Am"
                  ></CheckBox>
                </div>
              </div>
              <div className="bg-white_A700 flex font-outfit items-center justify-start mt-[188px] outline outline-[0.5px] outline-gray_106 p-[16px] w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_509 text-gray_509 text-left tracking-[0.14px] w-[100%]"
                  wrapClassName="bg-gray_55 flex pb-[13px] pl-[14px] pr-[22px] pt-[16px] rounded-[15px] sm:pr-[20px] sm:w-[100%] w-[96%]"
                  name="typingfield"
                  placeholder="Write message"
                  prefix={
                    <Img
                      src="images/img_paperclip2.svg"
                      className="mr-[16px] my-[auto]"
                      alt="paperclip-2"
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_videocamera.svg"
                      className="ml-[35px] my-[auto]"
                      alt="video_camera"
                    />
                  }
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageOnePage;
