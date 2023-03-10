import React from "react";

import { Text, Img, Button, Line, Input, List } from "components";
import { CloseSVG } from "../../assets/images";

const OwnerpreviewPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");
  const [inputvalue1, setInputvalue1] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_919 flex flex-col font-urbanist gap-[33px] justify-start mx-[auto] p-[10px] w-[100%]">
        <div className="bg-gray_55 flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[10px] mr-[1361px] mt-[2px] p-[5px] md:px-[20px] rounded-[8px] md:w-[100%] w-[13%]">
          <Text
            className="font-normal md:ml-[0] ml-[10px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
            variant="body78"
          >
            owners
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[42px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
            variant="body78"
          >
            &gt;
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[8px] md:mt-[0] mt-[3px] not-italic text-gray_920 text-left tracking-[0.14px] w-[auto]"
            variant="body78"
          >
            preview
          </Text>
        </div>
        <div className="flex items-center max-w-[1565px] mb-[60px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="md:h-[1351px] h-[1803px] sm:h-[764px] relative w-[100%]">
            <div className="absolute flex flex-col left-[0] top-[0] md:w-[100%] w-[73%]">
              <Img
                src="images/img_group33879.svg"
                className="h-[260px] mx-[auto] w-[auto]"
                alt="Group33879"
              />
              <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between mt-[-84px] mx-[auto] w-[95%] z-[1]">
                <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-center mb-[268px] p-[18px] rounded-[15px] shadow-bs21 md:w-[100%] w-[23%]">
                  <div className="flex items-center justify-start mt-[132px] md:w-[100%] w-[87%]">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_906 text-left tracking-[0.20px] w-[auto]"
                        variant="body60"
                      >
                        Eleanor Pena
                      </Text>
                      <div className="flex flex-row gap-[9px] items-start justify-between w-[100%]">
                        <Text
                          className="font-normal mt-[2px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                          variant="body87"
                        >
                          0x864784f44ajf84bskw4w...
                        </Text>
                        <Img
                          src="images/img_copy.svg"
                          className="h-[18px] w-[18px]"
                          alt="copy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[9px] w-[100%]">
                    <Text
                      className="font-normal leading-[25.20px] not-italic text-center text-gray_509 tracking-[0.14px] w-[100%]"
                      variant="body78"
                    >
                      Dedicated to create amazing for art exhibition information
                      please check link below:
                    </Text>
                    <div className="flex flex-row gap-[6px] items-center justify-start mt-[21px] py-[2px] md:w-[100%] w-[83%]">
                      <Img
                        src="images/img_globe_black_906.svg"
                        className="h-[18px] w-[18px]"
                        alt="globe"
                      />
                      <Text
                        className="font-normal not-italic text-black_906 text-left tracking-[0.12px] w-[auto]"
                        variant="body87"
                      >
                        weloveart.com/kevincranel
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-between mt-[22px] md:w-[100%] w-[87%]">
                      <Button className="bg-gray_920 cursor-pointer font-normal min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                        Edit Profile
                      </Button>
                      <Button className="flex h-[32px] items-center justify-center outline outline-[0.5px] outline-gray_106 p-[7px] rounded-[8px] w-[32px]">
                        <Img
                          src="images/img_arrowup.svg"
                          className="h-[18px]"
                          alt="arrowup"
                        />
                      </Button>
                      <Button className="flex h-[32px] items-center justify-center outline outline-[0.5px] outline-gray_106 p-[7px] rounded-[8px] w-[32px]">
                        <Img
                          src="images/img_camera_black_906.svg"
                          className="h-[18px]"
                          alt="camera"
                        />
                      </Button>
                    </div>
                    <Line className="bg-gray_106 h-[1px] mt-[24px] w-[100%]" />
                    <Text
                      className="font-normal mt-[27px] not-italic text-center text-gray_509 tracking-[0.14px] w-[auto]"
                      variant="body78"
                    >
                      Joined November 2021
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] items-center justify-start md:mt-[0] mt-[118px] md:w-[100%] w-[75%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <div className="flex sm:flex-1 flex-row gap-[12px] items-center justify-between sm:w-[100%] w-[44%]">
                      <Button
                        className="bg-black_906 flex items-center justify-center pl-[12px] pr-[13px] py-[9px] rounded-[18px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_grid.svg"
                            className="mr-[10px] text-center"
                            alt="grid"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700 tracking-[0.14px]">
                          Created
                        </div>
                      </Button>
                      <div className="flex flex-row gap-[10px] items-center justify-center p-[8px] w-[auto]">
                        <Img
                          src="images/img_folder.svg"
                          className="h-[20px] ml-[4px] w-[20px]"
                          alt="folder"
                        />
                        <Text
                          className="font-normal mr-[4px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                          variant="body78"
                        >
                          Collection
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-center p-[7px] w-[auto]">
                        <Img
                          src="images/img_clock_24x24.svg"
                          className="h-[20px] ml-[4px] w-[20px]"
                          alt="clock"
                        />
                        <Text
                          className="font-normal mr-[5px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                          variant="body78"
                        >
                          History
                        </Text>
                      </div>
                    </div>
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="flex-1 font-normal not-italic p-[0] text-[12px] placeholder:text-gray_509 text-gray_509 text-left tracking-[0.12px] w-[100%]"
                      wrapClassName="bg-gray_55 flex pl-[14px] pr-[35px] py-[10px] rounded-[8px] sm:pr-[20px] sm:w-[100%] w-[26%]"
                      name="SearchInput"
                      placeholder="Search by name"
                      prefix={
                        <Img
                          src="images/img_search_gray_509.svg"
                          className="cursor-pointer mr-[14px] my-[auto]"
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
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[175px] md:gap-[40px] justify-start p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                          <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            Ended
                          </Button>
                          <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_favorite.svg"
                              className=""
                              alt="favorite"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start mb-[3px] mr-[30px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                            variant="body69"
                          >
                            Diehard BATTERY-SILVER
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                            variant="body87"
                          >
                            By Ralph Edwards
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[175px] md:gap-[40px] justify-start p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                          <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            2h 4m 32s
                          </Button>
                          <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_favorite.svg"
                              className=""
                              alt="favorite One"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-col items-start justify-start mb-[4px] mr-[30px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                            variant="body69"
                          >
                            Dayco Serpentine Belt
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                            variant="body87"
                          >
                            By Marvin McKinney
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[175px] md:gap-[40px] justify-start p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                          <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            Ended
                          </Button>
                          <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_favorite.svg"
                              className=""
                              alt="favorite Two"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-col items-start justify-start mb-[4px] mr-[30px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                            variant="body69"
                          >
                            Bosch Spark Plug
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                            variant="body87"
                          >
                            By Guy Hawkins
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[175px] md:gap-[40px] justify-start p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                          <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            Ended
                          </Button>
                          <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_favorite.svg"
                              className=""
                              alt="favorite Three"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start mb-[3px] mr-[30px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                            variant="body69"
                          >
                            Fram Oil Filter
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                            variant="body87"
                          >
                            By Jerome Bell
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[175px] md:gap-[40px] justify-start p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                          <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            2h 4m 32s
                          </Button>
                          <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_favorite.svg"
                              className=""
                              alt="favorite Four"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start mb-[3px] mr-[30px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                            variant="body69"
                          >
                            Fram Oil Filter
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                            variant="body87"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[175px] md:gap-[40px] justify-start p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                          <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            2h 4m 32s
                          </Button>
                          <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_favorite.svg"
                              className=""
                              alt="favorite Five"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start mb-[3px] mr-[30px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                            variant="body69"
                          >
                            Mad Ballot Holder
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                            variant="body87"
                          >
                            By Angelina Cruzz
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[1803px] md:h-[764px] inset-[0] justify-center m-[auto] md:w-[100%] w-[98%]">
              <div className="h-[1803px] md:h-[764px] m-[auto] w-[100%]">
                <div className="absolute bg-white_A700 flex flex-col gap-[28px] items-center justify-center outline outline-[0.5px] outline-gray_106 p-[13px] right-[1%] top-[0] w-[27%]">
                  <div className="flex flex-col gap-[24px] justify-start mt-[29px] md:w-[100%] w-[95%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Text
                        className="font-semibold text-black_906 text-left w-[auto]"
                        variant="body64"
                      >
                        Utvalgt Bedrift/Selskap
                      </Text>
                      <Text
                        className="font-semibold text-gray_920 text-right tracking-[0.14px] w-[auto]"
                        variant="body78"
                      >
                        Se Alt
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-start justify-start md:ml-[0] ml-[6px] mr-[26px] pb-[14px] px-[14px] rounded-[15px] shadow-bs23 md:w-[100%] w-[92%]">
                      <div className="md:h-[152px] h-[204px] md:ml-[0] ml-[2px] relative w-[99%]">
                        <Img
                          src="images/img_group33922.svg"
                          className="absolute h-[152px] left-[2%] top-[0] w-[auto]"
                          alt="Group33922"
                        />
                        <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                          <div className="flex flex-row items-end justify-evenly w-[100%]">
                            <div className="flex flex-col justify-start mt-[28px] pb-[7px] pr-[7px] w-[60%]">
                              <div className="h-[18px] mr-[10px] relative w-[95%]">
                                <Text
                                  className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-black_906 text-center tracking-[0.14px] w-[max-content]"
                                  variant="body78"
                                >
                                  Minfuel - Alt innen Energi
                                </Text>
                                <Img
                                  src="images/img_checkmark_blue_a201.svg"
                                  className="absolute h-[18px] right-[0] top-[0] w-[18px]"
                                  alt="checkmark"
                                />
                              </div>
                              <Text
                                className="font-normal md:ml-[0] ml-[27px] mt-[3px] not-italic text-center text-gray_509 tracking-[0.12px] w-[auto]"
                                variant="body87"
                              >
                                @minfuel
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[6px] items-center justify-start mb-[4px] w-[39%]">
                              <div className="font-roboto md:h-[28px] h-[29px] relative w-[100%]">
                                <div className="absolute bg-red_501 h-[28px] inset-[0] justify-center m-[auto] rounded-[14px] shadow-bs19 w-[100%]"></div>
                                <Text
                                  className="absolute font-black inset-x-[0] mx-[auto] text-left text-white_A700 top-[0] w-[max-content]"
                                  variant="body64"
                                >
                                  Nettsted
                                </Text>
                              </div>
                              <Button className="bg-gray_920 cursor-pointer font-normal font-outfit min-w-[81px] not-italic py-[8px] rounded-[16px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                F??lg dem
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray_106 h-[1px] mt-[10px] w-[85%]" />
                      <Text
                        className="font-normal leading-[21.60px] mt-[11px] not-italic text-gray_509 text-left tracking-[0.12px] sm:w-[100%] w-[85%]"
                        variant="body87"
                      >
                        Hvor mye Koster det ?? kj??re fra A til B? i henhold til
                        din biltype! f.eks oslo til halden....
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-center justify-start mb-[20px] md:w-[100%] w-[98%]">
                    <div className="flex flex-row items-start justify-between md:w-[100%] w-[99%]">
                      <Text
                        className="font-semibold text-black_906 text-left w-[auto]"
                        variant="body64"
                      >
                        Nylig lagt til AS/ENK
                      </Text>
                      <Text
                        className="font-semibold text-gray_920 text-right tracking-[0.14px] w-[auto]"
                        variant="body78"
                      >
                        Se Alt
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[19px] items-center justify-start w-[100%]">
                      <List
                        className="flex-col gap-[14.5px] grid items-center pb-[10px] w-[99%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                          <div className="flex font-urbanist items-end justify-start mb-[10px] w-[auto]">
                            <div className="flex flex-col items-start justify-start pt-[2px] md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                variant="body69"
                              >
                                Veihjelp AS #4390
                              </Text>
                              <Text
                                className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                variant="body87"
                              >
                                From Ragnarok
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-red_501 cursor-pointer font-black font-roboto leading-[normal] min-w-[111px] mt-[12px] py-[8px] rounded-[15px] shadow-bs19 text-[18px] text-center text-white_A700 w-[auto]">
                            Nettsted
                          </Button>
                        </div>
                        <Line className="self-center h-[1px] bg-gray_106 w-[78%]" />
                        <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                          <div className="flex font-urbanist items-end justify-start mb-[10px] w-[auto]">
                            <div className="flex flex-col gap-[5px] items-start justify-start md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                variant="body69"
                              >
                                Vestfold Kunst #3486
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                variant="body87"
                              >
                                From Doodles
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-red_501 cursor-pointer font-black font-roboto leading-[normal] min-w-[111px] mt-[12px] py-[8px] rounded-[15px] shadow-bs19 text-[18px] text-center text-white_A700 w-[auto]">
                            Nettsted
                          </Button>
                        </div>
                        <Line className="self-center h-[1px] bg-gray_106 w-[78%]" />
                        <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                          <div className="flex font-urbanist items-end justify-start mb-[10px] w-[auto]">
                            <div className="flex flex-col items-start justify-start mr-[2px] md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                variant="body69"
                              >
                                Minfuel.no #2766
                              </Text>
                              <Text
                                className="font-normal mt-[5px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                variant="body87"
                              >
                                From Minfuel23
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-red_501 cursor-pointer font-black font-roboto leading-[normal] min-w-[111px] mt-[12px] py-[8px] rounded-[15px] shadow-bs19 text-[18px] text-center text-white_A700 w-[auto]">
                            Nettsted
                          </Button>
                        </div>
                        <Line className="self-center h-[1px] bg-gray_106 w-[78%]" />
                        <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                          <div className="flex font-urbanist items-end justify-start mb-[10px] w-[auto]">
                            <div className="flex flex-col items-start justify-start pt-[2px] md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                variant="body69"
                              >
                                Valiantlynx #2761
                              </Text>
                              <Text
                                className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                variant="body87"
                              >
                                From valiantlynx
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-red_501 cursor-pointer font-black font-roboto leading-[normal] min-w-[111px] mt-[12px] py-[8px] rounded-[15px] shadow-bs19 text-[18px] text-center text-white_A700 w-[auto]">
                            Nettsted
                          </Button>
                        </div>
                        <Line className="self-center h-[1px] bg-gray_106 w-[78%]" />
                        <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                          <div className="flex font-urbanist items-end justify-start mb-[10px] w-[auto]">
                            <div className="flex flex-col items-start justify-end md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                variant="body69"
                              >
                                Sammadag AS #22
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                variant="body87"
                              >
                                From altlokaltstudio
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-red_501 cursor-pointer font-black font-roboto leading-[normal] min-w-[111px] mt-[12px] py-[8px] rounded-[15px] shadow-bs19 text-[18px] text-center text-white_A700 w-[auto]">
                            Nettsted
                          </Button>
                        </div>
                      </List>
                      <div className="flex flex-row gap-[20px] items-start justify-between w-[100%]">
                        <div className="font-urbanist md:h-[243px] h-[281px] relative w-[65%]">
                          <div className="absolute flex items-end justify-start left-[2%] top-[0] w-[72%]">
                            <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                variant="body69"
                              >
                                Husvask ENK #3723
                              </Text>
                              <Text
                                className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                variant="body87"
                              >
                                From vestfoldvask
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bottom-[0] md:h-[243px] h-[258px] inset-x-[0] mx-[auto] pr-[3px] w-[100%]">
                            <div className="absolute bg-gray_920 bottom-[0] h-[233px] inset-x-[0] mx-[auto] rounded-[15px] w-[234px]"></div>
                            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[90%]">
                              <Button className="bg-white_A700 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] shadow-bs20 w-[50px]">
                                <Img
                                  src="images/img_question.svg"
                                  className="h-[24px]"
                                  alt="question"
                                />
                              </Button>
                              <Text
                                className="font-normal mt-[14px] not-italic text-left text-white_A700 tracking-[0.18px] w-[auto]"
                                variant="body64"
                              >
                                Kundesenter
                              </Text>
                              <div className="flex flex-col gap-[54px] items-center justify-start mt-[12px] w-[100%]">
                                <Text
                                  className="font-normal leading-[25.20px] not-italic text-center text-gray_406 tracking-[0.14px]"
                                  variant="body78"
                                >
                                  Har du st??tt p?? problemer?
                                  <br />
                                  V??rs??snill kontakt oss
                                </Text>
                                <Button className="bg-white_A700 cursor-pointer font-normal min-w-[206px] not-italic py-[11px] rounded-[10px] text-[14px] text-center text-gray_920 tracking-[0.14px] w-[auto]">
                                  G?? til hjelpesenteret
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-red_501 cursor-pointer font-black font-roboto leading-[normal] mb-[230px] min-w-[111px] mt-[12px] py-[8px] rounded-[15px] shadow-bs19 text-[18px] text-center text-white_A700 w-[auto]">
                          Nettsted
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 tracking-[0.34px] w-[auto]"
                      variant="body32"
                    >
                      S??k etter en lokale leverand??r
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[21px] md:w-[100%] w-[70%]">
                      <Button
                        className="flex items-center justify-center outline outline-[0.5px] outline-gray_106 p-[16px] rounded-[14px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_user_white_a700.svg"
                            className="mr-[10px] text-center"
                            alt="user"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                          Category
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center ml-[24px] outline outline-[0.5px] outline-gray_106 pl-[16px] pr-[17px] py-[16px] rounded-[14px] sm:ml-[0] text-center"
                        leftIcon={
                          <Img
                            src="images/img_note2.svg"
                            className="mr-[10px] text-center"
                            alt="note-2"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                          Collection
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center ml-[24px] outline outline-[0.5px] outline-gray_106 pl-[16px] pr-[17px] py-[16px] rounded-[14px] sm:ml-[0] text-center"
                        leftIcon={
                          <Img
                            src="images/img_clock_white_a700_24x24.svg"
                            className="mr-[10px] text-center"
                            alt="clock"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                          Price Range
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center ml-[447px] outline outline-[0.5px] outline-gray_106 pl-[16px] pr-[17px] py-[16px] rounded-[14px] sm:ml-[0] text-center"
                        leftIcon={
                          <Img
                            src="images/img_menu_white_a700.svg"
                            className="mr-[10px] text-center"
                            alt="menu"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                          Filter & Sort
                        </div>
                      </Button>
                    </div>
                    <div className="flex items-center justify-start mt-[30px] w-[100%]">
                      <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row gap-[12px] items-center justify-start md:w-[100%] w-[74%]">
                          <List
                            className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 md:w-[100%] w-[95%]"
                            orientation="horizontal"
                          >
                            <div className="bg-white_A700 flex flex-col gap-[175px] md:gap-[40px] justify-start sm:ml-[0] p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                              <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                                <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                  Ended
                                </Button>
                                <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                  <Img
                                    src="images/img_favorite.svg"
                                    className=""
                                    alt="favorite Six"
                                  />
                                </Button>
                              </div>
                              <div className="flex flex-col gap-[6px] items-start justify-start mb-[3px] mr-[30px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Diehard BATTERY-SILVER
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                  variant="body87"
                                >
                                  By Ralph Edwards
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col gap-[175px] md:gap-[40px] justify-start sm:ml-[0] p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                              <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                                <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                  2h 4m 32s
                                </Button>
                                <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                  <Img
                                    src="images/img_favorite.svg"
                                    className=""
                                    alt="favorite Seven"
                                  />
                                </Button>
                              </div>
                              <div className="flex flex-col items-start justify-start mb-[4px] mr-[30px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Dayco Serpentine Belt
                                </Text>
                                <Text
                                  className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                  variant="body87"
                                >
                                  By Marvin McKinney
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col gap-[175px] md:gap-[40px] justify-start sm:ml-[0] p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                              <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                                <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                  Ended
                                </Button>
                                <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                  <Img
                                    src="images/img_favorite.svg"
                                    className=""
                                    alt="favorite Eight"
                                  />
                                </Button>
                              </div>
                              <div className="flex flex-col items-start justify-start mb-[4px] mr-[30px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Bosch Spark Plug
                                </Text>
                                <Text
                                  className="font-normal mt-[4px] not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                  variant="body87"
                                >
                                  By Guy Hawkins
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col gap-[175px] md:gap-[40px] justify-start sm:ml-[0] p-[14px] rounded-[15px] shadow-bs21 w-[100%]">
                              <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[51%]">
                                <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                  Ended
                                </Button>
                                <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                  <Img
                                    src="images/img_favorite.svg"
                                    className=""
                                    alt="favorite Nine"
                                  />
                                </Button>
                              </div>
                              <div className="flex flex-col gap-[6px] items-start justify-start mb-[3px] mr-[30px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-black_906 text-left tracking-[0.16px] w-[auto]"
                                  variant="body69"
                                >
                                  Fram Oil Filter
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_509 text-left tracking-[0.12px] w-[auto]"
                                  variant="body87"
                                >
                                  By Jerome Bell
                                </Text>
                              </div>
                            </div>
                          </List>
                          <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center md:mt-[0] my-[119px] rounded-[19px] w-[47px]">
                            <Img
                              src="images/img_arrowright_white_a700_13x7.svg"
                              className="h-[13px] w-[auto]"
                              alt="arrowright"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row font-roboto md:gap-[20px] items-start justify-start pb-[22px] sm:pr-[20px] pr-[22px] w-[100%]">
                          <List
                            className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 md:mt-[0] mt-[4px] md:w-[100%] w-[35%]"
                            orientation="horizontal"
                          >
                            <div className="bg-white_A700 flex items-center justify-start p-[6px] rounded-[25px] shadow-bs18 w-[100%]">
                              <div className="flex flex-col items-start justify-start my-[5px] md:w-[100%] w-[98%]">
                                <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                                  <div className="md:h-[43px] h-[47px] relative w-[30%]">
                                    <div className="absolute bg-gray_400_90 h-[29px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                                    <Text
                                      className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[70%]"
                                      variant="body64"
                                    >
                                      Horten
                                    </Text>
                                  </div>
                                  <div className="bg-gray_604 flex items-center justify-start mb-[11px] rounded-[10px] w-[14%]">
                                    <Img
                                      src="images/img_plus_white_a700_35x35.svg"
                                      className="h-[32px] w-[auto]"
                                      alt="plus"
                                    />
                                  </div>
                                </div>
                                <Text
                                  className="font-medium mt-[123px] text-black_902 text-left sm:w-[100%] w-[40%]"
                                  variant="body64"
                                >
                                  Breaking Bad
                                </Text>
                                <div className="md:h-[60px] h-[67px] relative w-[100%]">
                                  <div className="absolute bg-red_501 bottom-[0] flex items-end justify-start p-[3px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                                    <Text
                                      className="font-black my-[6px] text-left text-white_A700 w-[auto]"
                                      variant="body64"
                                    >
                                      Nettsted
                                    </Text>
                                  </div>
                                  <Text
                                    className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] sm:w-[100%] w-[98%]"
                                    variant="body78"
                                  >
                                    In publishing and graphic design, Lorem
                                    ipsum is a placeholder text ....
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex items-center justify-end p-[8px] rounded-[25px] shadow-bs18 w-[100%]">
                              <div className="flex flex-col items-start justify-start mt-[4px] md:w-[100%] w-[97%]">
                                <div className="flex flex-row items-start justify-between w-[100%]">
                                  <div className="md:h-[42px] h-[46px] relative w-[30%]">
                                    <div className="absolute bg-gray_400_90 h-[28px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                                    <Text
                                      className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[71%]"
                                      variant="body64"
                                    >
                                      Horten
                                    </Text>
                                  </div>
                                  <div className="bg-gray_604 flex items-center justify-start mb-[11px] rounded-[10px] w-[13%]">
                                    <Img
                                      src="images/img_plus_white_a700_35x35.svg"
                                      className="h-[31px] w-[auto]"
                                      alt="plus One"
                                    />
                                  </div>
                                </div>
                                <Text
                                  className="font-medium mt-[119px] text-black_902 text-left sm:w-[100%] w-[40%]"
                                  variant="body64"
                                >
                                  Breaking Bad
                                </Text>
                                <div className="md:h-[58px] h-[68px] relative w-[100%]">
                                  <div className="absolute bg-red_501 bottom-[0] flex items-end justify-start p-[3px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                                    <Text
                                      className="font-black my-[5px] text-left text-white_A700 w-[auto]"
                                      variant="body64"
                                    >
                                      Nettsted
                                    </Text>
                                  </div>
                                  <Text
                                    className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] w-[100%]"
                                    variant="body78"
                                  >
                                    In publishing and graphic design, Lorem
                                    ipsum is a placeholder text ....
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                          <List
                            className="md:flex-1 sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 grid-cols-2 mb-[3px] md:ml-[0] ml-[30px] md:w-[100%] w-[34%]"
                            orientation="horizontal"
                          >
                            <div className="bg-white_A700 flex items-center justify-end p-[8px] rounded-[15px] shadow-bs18 w-[100%]">
                              <div className="flex flex-col items-start justify-start mt-[4px] md:w-[100%] w-[97%]">
                                <div className="flex flex-row items-start justify-between w-[100%]">
                                  <div className="md:h-[42px] h-[46px] relative w-[30%]">
                                    <div className="absolute bg-gray_400_90 h-[28px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                                    <Text
                                      className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[71%]"
                                      variant="body64"
                                    >
                                      Horten
                                    </Text>
                                  </div>
                                  <div className="bg-gray_604 flex items-center justify-start mb-[11px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[13%]">
                                    <Img
                                      src="images/img_plus_white_a700_35x35.svg"
                                      className="h-[31px] w-[auto]"
                                      alt="plus Two"
                                    />
                                  </div>
                                </div>
                                <Text
                                  className="font-medium mt-[119px] text-black_902 text-left sm:w-[100%] w-[40%]"
                                  variant="body64"
                                >
                                  Breaking Bad
                                </Text>
                                <div className="md:h-[58px] h-[68px] relative w-[100%]">
                                  <div className="absolute bg-red_501 bottom-[0] flex items-end justify-start p-[4px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                                    <Text
                                      className="font-black my-[4px] text-left text-white_A700 w-[auto]"
                                      variant="body64"
                                    >
                                      Nettsted
                                    </Text>
                                  </div>
                                  <Text
                                    className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] w-[100%]"
                                    variant="body78"
                                  >
                                    In publishing and graphic design, Lorem
                                    ipsum is a placeholder text ....
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex items-center justify-start p-[6px] rounded-[25px] shadow-bs18 w-[100%]">
                              <div className="flex flex-col items-start justify-start mb-[12px] mt-[5px] md:w-[100%] w-[98%]">
                                <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                                  <div className="md:h-[43px] h-[47px] relative w-[30%]">
                                    <div className="absolute bg-gray_400_90 h-[29px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                                    <Text
                                      className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[70%]"
                                      variant="body64"
                                    >
                                      Horten
                                    </Text>
                                  </div>
                                  <div className="bg-gray_604 flex items-center justify-start mb-[11px] rounded-[10px] w-[13%]">
                                    <Img
                                      src="images/img_plus_white_a700_35x35.svg"
                                      className="h-[32px] w-[auto]"
                                      alt="plus Three"
                                    />
                                  </div>
                                </div>
                                <Text
                                  className="font-medium mt-[123px] text-black_902 text-left sm:w-[100%] w-[39%]"
                                  variant="body64"
                                >
                                  Breaking Bad
                                </Text>
                                <div className="h-[60px] relative w-[100%]">
                                  <div className="absolute bg-red_501 bottom-[3%] flex items-end justify-start p-[2px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                                    <Text
                                      className="font-black my-[7px] text-left text-white_A700 w-[auto]"
                                      variant="body64"
                                    >
                                      Nettsted
                                    </Text>
                                  </div>
                                  <Text
                                    className="absolute font-medium h-[100%] inset-[0] justify-center m-[auto] text-gray_604 text-left sm:w-[100%] w-[98%]"
                                    variant="body78"
                                  >
                                    In publishing and graphic design, Lorem
                                    ipsum is a placeholder text ....
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                          <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[143px] md:ml-[0] ml-[15px] md:mt-[0] mt-[121px] rounded-[19px] w-[47px]">
                            <Img
                              src="images/img_arrowright_white_a700_13x7.svg"
                              className="h-[13px] w-[auto]"
                              alt="arrowright One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[41%] font-outfit h-[124px] md:h-[68px] pl-[20px] py-[20px] right-[31%] sm:w-[100%] w-[33%]">
                <div className="bg-white_A700 h-[66px] mt-[2px] mx-[auto] outline outline-[0.5px] outline-gray_106 w-[97%]"></div>
                <Input
                  value={inputvalue1}
                  onChange={(e) => setInputvalue1(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_509 text-gray_509 text-left tracking-[0.14px] w-[100%]"
                  wrapClassName="absolute bg-white_A700 border-[1px] border-gray_310 border-solid flex inset-y-[0] my-[auto] pl-[16px] pr-[35px] py-[16px] right-[0] rounded-[15px] sm:pr-[20px] sm:w-[100%] w-[94%]"
                  name="SearchInput One"
                  placeholder="Search items, collections, and users"
                  prefix={
                    <Img
                      src="images/img_search_gray_509.svg"
                      className="cursor-pointer mr-[16px] right-[3%] absolute my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue1?.length > 0 ? (
                      <CloseSVG
                        color="#93989a"
                        className="cursor-pointer ml-[10px] left-[6%] absolute my-[auto]"
                        onClick={() => setInputvalue1("")}
                      />
                    ) : (
                      ""
                    )
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

export default OwnerpreviewPage;
