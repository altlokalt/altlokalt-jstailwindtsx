import React from "react";

import { Img, Text, Line, Button, List } from "components";

const WithheaderPage: React.FC = () => {
  function handleNavigate26() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-gray_52 flex font-roboto items-center justify-end mx-[auto] pr-[10px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[37px] items-start justify-between max-w-[2259px] mx-[auto] md:px-[20px] w-[100%]">
          <Img
            src="images/img_aside.svg"
            className="h-[1409px] w-[auto]"
            alt="aside"
          />
          <div className="flex md:flex-1 flex-col gap-[13px] justify-start md:mt-[0] mt-[26px] md:w-[100%] w-[auto]">
            <header className="flex items-center justify-center md:ml-[0] ml-[674px] w-[100%]">
              <div className="bg-white_A700 flex items-center justify-center sm:px-[20px] md:px-[40px] px-[82px] shadow-bs11 w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center md:w-[100%] w-[97%]">
                  <div className="h-[76px] relative md:w-[100%] w-[79%]">
                    <Img
                      src="images/img_1png_60x100.png"
                      className="absolute h-[60px] inset-y-[0] left-[0] my-[auto] object-cover w-[11%]"
                      alt="1png"
                    />
                    <div className="absolute flex h-[100%] inset-y-[0] items-start justify-start my-[auto] right-[0] w-[auto]">
                      <ul className="flex sm:flex-col flex-row sm:hidden items-center justify-start w-[71%] common-row-list">
                        <li className="sm:w-[100%] sm:my-[10px] w-[17%]">
                          <div className="flex items-start justify-start p-[20px]">
                            <a
                              className="cursor-pointer font-normal my-[9px] not-italic text-[14px] text-gray_917 text-left tracking-[-0.24px] w-[auto]"
                              href="javascript:"
                            >
                              Nyheter
                            </a>
                          </div>
                        </li>
                        <li className="sm:w-[100%] sm:my-[10px] w-[16%]">
                          <div className="flex items-start justify-start p-[20px]">
                            <a
                              className="cursor-pointer font-normal my-[9px] not-italic text-[14px] text-gray_917 text-left tracking-[-0.24px] w-[auto]"
                              href="javascript:"
                            >
                              Læring
                            </a>
                          </div>
                        </li>
                        <li className="sm:w-[100%] sm:my-[10px] w-[21%]">
                          <div className="flex items-start justify-start p-[20px]">
                            <a
                              className="cursor-pointer font-normal my-[9px] not-italic text-[14px] text-gray_917 text-left tracking-[-0.24px] w-[auto]"
                              href="javascript:"
                            >
                              FirmaAnbud
                            </a>
                          </div>
                        </li>
                        <li className="mt-[28px] mb-[30px] ml-[15px] sm:w-[100%] sm:my-[10px] w-[auto]">
                          <a
                            className="cursor-pointer font-normal not-italic text-[14px] text-gray_917 text-left tracking-[-0.24px]"
                            href="javascript:"
                          >
                            Gründervekst Live
                          </a>
                        </li>
                        <li className="ml-[14px] sm:w-[100%] sm:my-[10px] w-[26%]">
                          <div className="flex items-start justify-start p-[20px]">
                            <a
                              className="cursor-pointer font-normal my-[9px] not-italic text-[14px] text-gray_917 text-left tracking-[-0.24px] w-[auto]"
                              href="javascript:"
                            >
                              Om Gründervekst
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-end pl-[15px] py-[15px] md:w-[100%] w-[22%]">
                    <Line className="bg-gray_900_33 h-[24px] my-[11px] w-[1px]" />
                    <div className="flex flex-row gap-[20.33px] items-center justify-start pl-[12px] py-[5px] w-[auto]">
                      <Text
                        className="font-semibold text-center text-gray_917 w-[auto]"
                        variant="body78"
                      >
                        Logg på
                      </Text>
                      <Button className="bg-indigo_A400 border-[1px] border-indigo_A400 border-solid cursor-pointer font-medium min-w-[125px] pl-[20px] sm:pr-[20px] pr-[21.72px] rounded-[7px] text-[14px] text-center text-white_A700 w-[auto]">
                        Registrer deg
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-col font-inter items-center justify-start w-[100%]">
              <div className="flex flex-col relative w-[100%]">
                <div
                  className="bg-cover bg-gradient14  bg-no-repeat flex flex-col gap-[5px] h-[690px] items-center justify-start mx-[auto] p-[47px] sm:px-[20px] md:px-[40px] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_sectiontopmatter.png')",
                  }}
                >
                  <div className="h-[332px] relative md:w-[100%] w-[68%]">
                    <Text
                      className="mb-[-22.06px] mx-[auto] text-center text-white_A700 w-[auto] z-[1]"
                      variant="body22"
                    >
                      Most Popular Films (English)
                    </Text>
                    <div className="flex flex-col gap-[15px] items-center justify-end mt-[auto] mx-[auto] p-[12px] w-[100%]">
                      <Text
                        className="mt-[25px] text-center text-white_A700 w-[auto]"
                        variant="body94"
                      >
                        Global Top 10
                      </Text>
                      <div className="flex flex-col gap-[22px] items-center justify-end p-[9px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal leading-[27.00px] not-italic text-center text-white_A700_e5 sm:w-[100%] w-[43%]"
                          variant="body64"
                        >
                          Weekly Top 10 lists of the most-watched TV and films.
                        </Text>
                        <Text
                          className="font-semibold text-center text-red_A701 w-[auto]"
                          variant="body68"
                        >
                          Or, see Top 10 lists by country
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_onlinesamfunn.png"
                    className="h-[210px] md:h-[auto] mb-[47px] object-cover w-[71%]"
                    alt="Onlinesamfunn"
                  />
                </div>
                <div
                  className="bg-cover bg-gradient4  bg-no-repeat flex h-[1254px] items-center justify-start mt-[-0.5px] mx-[auto] sm:px-[20px] px-[290px] md:px-[40px] w-[100%] z-[1]"
                  style={{
                    backgroundImage: "url('images/img_sectionweeklylists.png')",
                  }}
                >
                  <div className="flex flex-col justify-end pt-[49px] md:w-[100%] w-[97%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end sm:px-[20px] px-[256px] md:px-[40px] w-[100%]">
                      <Img
                        src="images/img_top10png_55x52.png"
                        className="md:flex-1 h-[55px] sm:h-[auto] object-cover md:w-[100%] w-[6%]"
                        alt="top10png"
                      />
                      <div className="flex items-start justify-start md:ml-[0] ml-[12px] md:mt-[0] mt-[3px] w-[auto]">
                        <div className="border-b-[2px] border-red_A701 border-solid flex flex-row gap-[8px] items-center justify-between pb-[2px] pr-[2px] w-[100%]">
                          <div className="flex items-start justify-start px-[10px] w-[auto]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body41"
                              >
                                Films (English)
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_downarrowpng.png"
                            className="h-[10px] md:h-[auto] mr-[5px] object-cover w-[auto]"
                            alt="downarrowpng"
                          />
                        </div>
                      </div>
                      <Text
                        className="mb-[2px] md:ml-[0] ml-[30px] text-center text-white_A700 w-[auto]"
                        variant="body22"
                      >
                        in
                      </Text>
                      <div className="flex items-start justify-start md:ml-[0] ml-[13px] md:mt-[0] mt-[6px] w-[auto]">
                        <div className="border-b-[2px] border-red_A701 border-solid flex flex-row gap-[8px] items-center justify-start pb-[2px] pr-[2px] w-[100%]">
                          <div className="flex items-start justify-start px-[10px] w-[auto]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body41"
                              >
                                Films (English)
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_downarrowpng.png"
                            className="h-[10px] md:h-[auto] object-cover w-[6%]"
                            alt="downarrowpng One"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] ml-[442px] mr-[380px] mt-[23px] not-italic text-center text-white_A700_a0 w-[auto]"
                      variant="body82"
                    >
                      Some titles may not be available in all regions. Some
                      territories are included in the countries list for
                      convenience.
                    </Text>
                    <div className="h-[1085px] sm:h-[477px] md:h-[593px] md:ml-[0] ml-[91px] mr-[29px] mt-[21px] relative md:w-[100%] w-[93%]">
                      <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] shadow-bs3 top-[0] w-[100%]">
                        <div className="bg-black_900_99 flex md:flex-col flex-row md:gap-[20px] items-center justify-end w-[100%]">
                          <div className="bg-gradient6  flex md:flex-1 items-center justify-start shadow-bs4 md:w-[100%] w-[78%]">
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[818.3px] md:w-[100%] w-[auto]">
                              <div className="flex flex-col md:gap-[40px] gap-[66px] items-center justify-start pb-[23px] w-[100%]">
                                <Img
                                  src="images/img_1png.png"
                                  className="h-[256px] md:h-[auto] object-cover w-[256px]"
                                  alt="1png One"
                                />
                                <div className="flex flex-col items-center justify-end p-[2px] md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-semibold leading-[25.00px] mt-[5px] text-center text-white_A700_e5 sm:w-[100%] w-[85%]"
                                    variant="body60"
                                  >
                                    <span className="text-white_A700_e5 text-[20px] font-inter">
                                      Watched for{" "}
                                    </span>
                                    <span className="text-white_A700_e5 text-[20px] font-inter font-black">
                                      51.23 million hours
                                    </span>
                                    <span className="text-white_A700_e5 text-[20px] font-inter">
                                      {" "}
                                      this week.
                                    </span>
                                  </Text>
                                  <Text
                                    className="font-semibold mt-[3px] text-center text-red_A701 w-[auto]"
                                    variant="body68"
                                  >
                                    Watch now
                                  </Text>
                                </div>
                              </div>
                              <div className="h-[456px] relative w-[100%]">
                                <Img
                                  src="images/img_aaaabrsyeflnad.png"
                                  className="h-[456px] m-[auto] object-cover w-[100%]"
                                  alt="AAAABRsyEFlNAD"
                                />
                                <div className="absolute bg-gradient7  bottom-[0] flex inset-x-[0] items-end justify-end mx-[auto] p-[15px] w-[100%]">
                                  <Img
                                    src="images/img_download.svg"
                                    className="h-[20px] mt-[6px] w-[20px]"
                                    alt="download"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <List
                            className="md:flex-1 sm:flex-col flex-row grid grid-cols-9 md:w-[100%] w-[23%]"
                            orientation="horizontal"
                          >
                            <div className="bg-gradient6  flex items-start justify-start shadow-bs4 w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="h-[456px] relative w-[100%]">
                                  <Img
                                    src="images/img_aaaabcz9sxxleh.png"
                                    className="h-[456px] m-[auto] object-cover w-[100%]"
                                    alt="AAAABcZ9SxXLEh"
                                  />
                                  <Text
                                    className="absolute font-semibold right-[9%] text-center text-white_A700_72 top-[1%] w-[auto]"
                                    variant="body69"
                                  >
                                    2
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gradient6  flex items-start justify-start shadow-bs4 w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="h-[456px] relative w-[100%]">
                                  <Img
                                    src="images/img_aaaabtwwa9x3dt.png"
                                    className="h-[456px] m-[auto] object-cover w-[100%]"
                                    alt="AAAABTwwA9x3Dt"
                                  />
                                  <Text
                                    className="absolute font-semibold right-[9%] text-center text-white_A700_72 top-[1%] w-[auto]"
                                    variant="body69"
                                  >
                                    3
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gradient6  flex items-start justify-start shadow-bs4 w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="h-[456px] relative w-[100%]">
                                  <Img
                                    src="images/img_aaaabbufekjavpv.png"
                                    className="h-[456px] m-[auto] object-cover w-[100%]"
                                    alt="AAAABbUFeKjAVpV"
                                  />
                                  <Text
                                    className="absolute font-semibold right-[9%] text-center text-white_A700_72 top-[1%] w-[auto]"
                                    variant="body69"
                                  >
                                    4
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gradient6  flex items-start justify-start shadow-bs4 w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="h-[456px] relative w-[100%]">
                                  <Img
                                    src="images/img_aaaabqycxricbl9.png"
                                    className="h-[456px] m-[auto] object-cover w-[100%]"
                                    alt="AAAABQYCxrICBLNine"
                                  />
                                  <Text
                                    className="absolute font-semibold right-[9%] text-center text-white_A700_72 top-[1%] w-[auto]"
                                    variant="body69"
                                  >
                                    5
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gradient6  flex items-start justify-start shadow-bs4 w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="h-[456px] relative w-[100%]">
                                  <Img
                                    src="images/img_aaaabfzggme0nzx.png"
                                    className="h-[456px] m-[auto] object-cover w-[100%]"
                                    alt="AAAABfzGGME0NZX"
                                  />
                                  <Text
                                    className="absolute font-semibold right-[9%] text-center text-white_A700_72 top-[1%] w-[auto]"
                                    variant="body69"
                                  >
                                    6
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gradient6  flex items-start justify-start shadow-bs4 w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="h-[456px] relative w-[100%]">
                                  <Img
                                    src="images/img_aaaabshh0vrdsxh.png"
                                    className="h-[456px] m-[auto] object-cover w-[100%]"
                                    alt="AAAABShh0VrDSxH"
                                  />
                                  <Text
                                    className="absolute font-semibold right-[9%] text-center text-white_A700_72 top-[1%] w-[auto]"
                                    variant="body69"
                                  >
                                    7
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gradient6  flex items-start justify-start shadow-bs4 w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="h-[456px] relative w-[100%]">
                                  <Img
                                    src="images/img_aaaabxfeqjy4kmn.png"
                                    className="h-[456px] m-[auto] object-cover w-[100%]"
                                    alt="AAAABXFeQJY4kMn"
                                  />
                                  <Text
                                    className="absolute font-semibold right-[9%] text-center text-white_A700_72 top-[1%] w-[auto]"
                                    variant="body69"
                                  >
                                    8
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gradient6  flex items-start justify-start shadow-bs4 w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="h-[456px] relative w-[100%]">
                                  <Img
                                    src="images/img_aaaabty0qeissi.png"
                                    className="h-[456px] m-[auto] object-cover w-[100%]"
                                    alt="AAAABTY0qEiSSI"
                                  />
                                  <Text
                                    className="absolute font-semibold right-[9%] text-center text-white_A700_72 top-[1%] w-[auto]"
                                    variant="body69"
                                  >
                                    9
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gradient6  flex items-start justify-start shadow-bs4 w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="h-[456px] relative w-[100%]">
                                  <Img
                                    src="images/img_aaaaby3zngibaos.png"
                                    className="h-[456px] m-[auto] object-cover w-[100%]"
                                    alt="AAAABY3zNgIbAOS"
                                  />
                                  <Text
                                    className="absolute font-semibold right-[9%] text-center text-white_A700_72 top-[1%] w-[auto]"
                                    variant="body69"
                                  >
                                    10
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                      <div className="bg-black_902 flex md:flex-col flex-row md:gap-[20px] h-[100%] items-center justify-center m-[auto] p-[12px] w-[35%]">
                        <Img
                          src="images/img_leftarrowpng.png"
                          className="h-[14px] sm:h-[auto] md:ml-[0] ml-[7px] object-cover md:w-[100%] w-[3%]"
                          alt="leftarrowpng"
                        />
                        <Text
                          className="font-semibold md:ml-[0] ml-[62px] md:mt-[0] mt-[3px] text-left text-white_A700 tracking-[0.80px] uppercase w-[auto]"
                          variant="body69"
                        >
                          February 6 - February 12, 2023
                        </Text>
                        <Img
                          src="images/img_rightarrowpng.png"
                          className="h-[14px] sm:h-[auto] md:ml-[0] ml-[64px] mr-[7px] object-cover md:w-[100%] w-[3%]"
                          alt="rightarrowpng"
                        />
                      </div>
                      <div className="absolute bg-black_900_99 border-[2px] border-solid border-white_A700_0c bottom-[0] flex flex-col gap-[24px] inset-x-[0] items-center justify-end mx-[auto] p-[14px] rounded-[8px] w-[74%]">
                        <div className="flex flex-col items-center justify-start mt-[252px] md:w-[100%] w-[95%]">
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[auto]">
                            <div className="flex relative md:w-[100%] w-[53%]">
                              <div className="border-b-[2px] border-gray_900_99 border-solid flex items-start justify-start my-[auto] p-[7px] w-[auto]">
                                <Text
                                  className="font-bold md:ml-[0] ml-[10px] text-center text-white_A700_89 tracking-[0.35px] uppercase w-[auto]"
                                  variant="body78"
                                >
                                  #
                                </Text>
                              </div>
                              <div className="border-b-[2px] border-gray_908 border-solid h-[32px] ml-[-4px] my-[auto] sm:w-[100%] w-[88%] z-[1]">
                                <div className="absolute border-b-[2px] border-gray_908 border-solid h-[32px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                                <div className="absolute flex h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[auto]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <div className="flex flex-row gap-[9px] items-center justify-start w-[100%]">
                                      <div className="flex items-start justify-start ml-[2px] px-[2px] w-[auto]">
                                        <div className="flex items-start justify-start w-[auto]">
                                          <Text
                                            className="font-bold text-left text-white_A700 w-[auto]"
                                            variant="body73"
                                          >
                                            Films (English)
                                          </Text>
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_downarrowpng.png"
                                        className="h-[8px] md:h-[auto] object-cover w-[8%]"
                                        alt="downarrowpng Two"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Button className="border-b-[2px] border-gray_900_99 border-solid cursor-pointer font-bold min-w-[156px] pl-[12px] pr-[19.66px] py-[5px] text-[14px] text-center text-white_A700_89 tracking-[0.35px] uppercase w-[auto]">
                              Weeks in Top 10
                            </Button>
                            <Text
                              className="border-b-[2px] border-gray_900_99 border-solid font-bold pl-[166.72px] sm:pl-[20px] md:pl-[40px] pr-[1.28px] py-[5px] text-right text-white_A700_89 tracking-[0.35px] uppercase w-[auto]"
                              variant="body78"
                            >
                              Hours viewed
                            </Text>
                          </div>
                          <List
                            className="flex-col md:gap-[20px] grid items-start md:w-[100%] w-[auto]"
                            orientation="vertical"
                          >
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end my-[0] pl-[17px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-center text-white_A700_89 w-[auto]"
                                variant="body69"
                              >
                                1
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[40px] text-left text-white_A700_e5 w-[auto]"
                                variant="body68"
                              >
                                Your Place or Mine
                              </Text>
                              <div className="flex items-start justify-start md:ml-[0] ml-[283px] py-[8px] w-[auto]">
                                <div className="flex flex-row gap-[8.8px] items-center justify-start sm:pl-[20px] pl-[21.34px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-right text-white_A700_e5 w-[auto]"
                                    variant="body69"
                                  >
                                    1
                                  </Text>
                                  <Img
                                    src="images/img_div_red_a701.png"
                                    className="h-[15px] md:h-[auto] object-cover w-[116px]"
                                    alt="div"
                                  />
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                                <Text
                                  className="font-normal my-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                                  variant="body64"
                                >
                                  51,230,000
                                </Text>
                                <div className="bg-white_A700_26 flex items-center justify-start mb-[12px] mt-[16px] rounded-[2px] w-[25%]">
                                  <div className="bg-white_A700_99 h-[8px] rounded-[2px] w-[100%]"></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end my-[0] pl-[16px] w-[100%]">
                              <Text
                                className="font-normal md:mt-[0] mt-[3px] not-italic text-center text-white_A700_89 w-[auto]"
                                variant="body69"
                              >
                                2
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[38px] md:mt-[0] mt-[2px] text-left text-white_A700_e5 w-[auto]"
                                variant="body68"
                              >
                                True Spirit
                              </Text>
                              <div className="flex items-start justify-start md:ml-[0] ml-[350px] pb-[8px] w-[auto]">
                                <div className="flex flex-row gap-[8.8px] items-center justify-start pl-[19.34px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-right text-white_A700_e5 w-[auto]"
                                    variant="body69"
                                  >
                                    2
                                  </Text>
                                  <Img
                                    src="images/img_div_red_a701_15x116.png"
                                    className="h-[15px] md:h-[auto] object-cover w-[116px]"
                                    alt="div One"
                                  />
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                                <Text
                                  className="font-normal mb-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                                  variant="body64"
                                >
                                  20,730,000
                                </Text>
                                <div className="h-[8px] mb-[12px] mt-[9px] overflow-hidden relative w-[25%]">
                                  <div className="w-full h-full absolute bg-white_A700_26 rounded-[2px]"></div>
                                  <div
                                    className="h-full absolute bg-white_A700_99  rounded-[2px]"
                                    style={{ width: "40%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end my-[0] pl-[16px] w-[100%]">
                              <Text
                                className="font-normal md:mt-[0] mt-[3px] not-italic text-center text-white_A700_89 w-[auto]"
                                variant="body69"
                              >
                                3
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[37px] md:mt-[0] mt-[2px] text-left text-white_A700_e5 w-[auto]"
                                variant="body68"
                              >
                                You People
                              </Text>
                              <div className="flex items-start justify-start md:ml-[0] ml-[344px] pb-[8px] w-[auto]">
                                <div className="flex flex-row gap-[8.8px] items-center justify-start pl-[18.34px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-right text-white_A700_e5 w-[auto]"
                                    variant="body69"
                                  >
                                    3
                                  </Text>
                                  <Img
                                    src="images/img_div_15x116.png"
                                    className="h-[15px] md:h-[auto] object-cover w-[116px]"
                                    alt="div Two"
                                  />
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-row gap-[11px] items-end justify-end md:w-[100%] w-[31%]">
                                <Text
                                  className="font-normal mb-[7px] not-italic text-right text-white_A700_e5 w-[auto]"
                                  variant="body68"
                                >
                                  20,400,000
                                </Text>
                                <div className="h-[8px] mb-[12px] mt-[9px] overflow-hidden relative w-[25%]">
                                  <div className="w-full h-full absolute bg-white_A700_26 rounded-[2px]"></div>
                                  <div
                                    className="h-full absolute bg-white_A700_99  rounded-[2px]"
                                    style={{ width: "40%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end my-[0] pl-[16px] w-[100%]">
                              <Text
                                className="font-normal md:mt-[0] mt-[3px] not-italic text-center text-white_A700_89 w-[auto]"
                                variant="body69"
                              >
                                4
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[37px] text-left text-white_A700_e5 w-[auto]"
                                variant="body68"
                              >
                                Bloodshot
                              </Text>
                              <div className="flex items-start justify-start md:ml-[0] ml-[352px] pb-[8px] w-[auto]">
                                <div className="flex flex-row gap-[8.8px] items-center justify-start pl-[18.34px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-right text-white_A700_e5 w-[auto]"
                                    variant="body69"
                                  >
                                    3
                                  </Text>
                                  <Img
                                    src="images/img_div_15x116.png"
                                    className="h-[15px] md:h-[auto] object-cover w-[116px]"
                                    alt="div Three"
                                  />
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                                <Text
                                  className="font-normal mb-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                                  variant="body64"
                                >
                                  14,380,000
                                </Text>
                                <div className="h-[8px] mb-[12px] mt-[9px] overflow-hidden relative w-[25%]">
                                  <div className="w-full h-full absolute bg-white_A700_26 rounded-[2px]"></div>
                                  <div
                                    className="h-full absolute bg-white_A700_99  rounded-[2px]"
                                    style={{ width: "28%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end my-[0] pl-[16px] w-[100%]">
                              <Text
                                className="font-normal md:mt-[0] mt-[3px] not-italic text-center text-white_A700_89 w-[auto]"
                                variant="body69"
                              >
                                5
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[38px] text-left text-white_A700_e5 w-[auto]"
                                variant="body68"
                              >
                                Minions: The Rise of Gru
                              </Text>
                              <div className="flex items-start justify-start md:ml-[0] ml-[236px] pb-[8px] w-[auto]">
                                <div className="flex flex-row gap-[8.8px] items-center justify-start pl-[19.34px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-right text-white_A700_e5 w-[auto]"
                                    variant="body69"
                                  >
                                    2
                                  </Text>
                                  <Img
                                    src="images/img_div_red_a701_15x116.png"
                                    className="h-[15px] md:h-[auto] object-cover w-[116px]"
                                    alt="div Four"
                                  />
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                                <Text
                                  className="font-normal mb-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                                  variant="body64"
                                >
                                  11,500,000
                                </Text>
                                <div className="h-[8px] mb-[12px] mt-[9px] overflow-hidden relative w-[25%]">
                                  <div className="w-full h-full absolute bg-white_A700_26 rounded-[2px]"></div>
                                  <div
                                    className="h-full absolute bg-white_A700_99  rounded-[2px]"
                                    style={{ width: "22%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end my-[0] pl-[16px] w-[100%]">
                              <Text
                                className="font-normal md:mt-[0] mt-[3px] not-italic text-center text-white_A700_89 w-[auto]"
                                variant="body69"
                              >
                                6
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[38px] md:mt-[0] mt-[2px] text-left text-white_A700_e5 w-[auto]"
                                variant="body68"
                              >
                                Lyle, Lyle, Crocodile
                              </Text>
                              <div className="flex items-start justify-start md:ml-[0] ml-[273px] pb-[8px] w-[auto]">
                                <div className="flex flex-row gap-[8.8px] items-center justify-start sm:pl-[20px] pl-[21.34px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-right text-white_A700_e5 w-[auto]"
                                    variant="body69"
                                  >
                                    1
                                  </Text>
                                  <Img
                                    src="images/img_div_red_a701.png"
                                    className="h-[15px] md:h-[auto] object-cover w-[116px]"
                                    alt="div Five"
                                  />
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                                <Text
                                  className="font-normal mb-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                                  variant="body64"
                                >
                                  9,110,000
                                </Text>
                                <div className="h-[8px] mb-[12px] mt-[9px] overflow-hidden relative w-[25%]">
                                  <div className="w-full h-full absolute bg-white_A700_26 rounded-[2px]"></div>
                                  <div
                                    className="h-full absolute bg-white_A700_99  rounded-[2px]"
                                    style={{ width: "18%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end my-[0] pl-[16px] w-[100%]">
                              <Text
                                className="font-normal md:mt-[0] mt-[3px] not-italic text-center text-white_A700_89 w-[auto]"
                                variant="body69"
                              >
                                7
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[38px] md:mt-[0] mt-[2px] text-left text-white_A700_e5 w-[auto]"
                                variant="body68"
                              >
                                Pamela, a love story
                              </Text>
                              <div className="flex items-start justify-start md:ml-[0] ml-[272px] pb-[8px] w-[auto]">
                                <div className="flex flex-row gap-[8.8px] items-center justify-start pl-[19.34px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-right text-white_A700_e5 w-[auto]"
                                    variant="body69"
                                  >
                                    2
                                  </Text>
                                  <Img
                                    src="images/img_div_red_a701_15x116.png"
                                    className="h-[15px] md:h-[auto] object-cover w-[116px]"
                                    alt="div Six"
                                  />
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                                <Text
                                  className="font-normal mb-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                                  variant="body64"
                                >
                                  8,710,000
                                </Text>
                                <div className="h-[8px] mb-[12px] mt-[9px] overflow-hidden relative w-[25%]">
                                  <div className="w-full h-full absolute bg-white_A700_26 rounded-[2px]"></div>
                                  <div
                                    className="h-full absolute bg-white_A700_99  rounded-[2px]"
                                    style={{ width: "17%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end my-[0] pl-[16px] w-[100%]">
                              <Text
                                className="font-normal md:mt-[0] mt-[3px] not-italic text-center text-white_A700_89 w-[auto]"
                                variant="body69"
                              >
                                8
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[38px] md:mt-[0] mt-[2px] text-left text-white_A700_e5 w-[auto]"
                                variant="body68"
                              >
                                Sniper: Ultimate Kill
                              </Text>
                              <div className="flex items-start justify-start md:ml-[0] ml-[274px] pb-[8px] w-[auto]">
                                <div className="flex flex-row gap-[8.8px] items-center justify-start sm:pl-[20px] pl-[21.34px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-right text-white_A700_e5 w-[auto]"
                                    variant="body69"
                                  >
                                    1
                                  </Text>
                                  <Img
                                    src="images/img_div_red_a701.png"
                                    className="h-[15px] md:h-[auto] object-cover w-[116px]"
                                    alt="div Seven"
                                  />
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                                <Text
                                  className="font-normal mb-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                                  variant="body64"
                                >
                                  6,760,000
                                </Text>
                                <div className="h-[8px] mb-[12px] mt-[9px] overflow-hidden relative w-[25%]">
                                  <div className="w-full h-full absolute bg-white_A700_26 rounded-[2px]"></div>
                                  <div
                                    className="h-full absolute bg-white_A700_99  rounded-[2px]"
                                    style={{ width: "13%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end my-[0] pl-[16px] w-[100%]">
                              <Text
                                className="font-normal md:mt-[0] mt-[3px] not-italic text-center text-white_A700_89 w-[auto]"
                                variant="body69"
                              >
                                9
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[38px] md:mt-[0] mt-[2px] text-left text-white_A700_e5 w-[auto]"
                                variant="body68"
                              >
                                Enough
                              </Text>
                              <div className="flex items-start justify-start md:ml-[0] ml-[373px] pb-[8px] w-[auto]">
                                <div className="flex flex-row gap-[8.8px] items-center justify-start pl-[19.34px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-right text-white_A700_e5 w-[auto]"
                                    variant="body69"
                                  >
                                    2
                                  </Text>
                                  <Img
                                    src="images/img_div_red_a701_15x116.png"
                                    className="h-[15px] md:h-[auto] object-cover w-[116px]"
                                    alt="div Eight"
                                  />
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-row gap-[11px] items-end justify-end md:w-[100%] w-[31%]">
                                <Text
                                  className="font-normal mb-[7px] not-italic text-right text-white_A700_e5 w-[auto]"
                                  variant="body68"
                                >
                                  5,400,000
                                </Text>
                                <div className="h-[8px] mb-[12px] mt-[9px] overflow-hidden relative w-[25%]">
                                  <div className="w-full h-full absolute bg-white_A700_26 rounded-[2px]"></div>
                                  <div
                                    className="h-full absolute bg-white_A700_99  rounded-[2px]"
                                    style={{ width: "11%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end my-[0] pl-[12px] w-[100%]">
                              <Text
                                className="font-normal md:mt-[0] mt-[3px] not-italic text-center text-white_A700_89 w-[auto]"
                                variant="body69"
                              >
                                10
                              </Text>
                              <Text
                                className="font-semibold md:ml-[0] ml-[34px] md:mt-[0] mt-[2px] text-left text-white_A700_e5 w-[auto]"
                                variant="body68"
                              >
                                Sniper: Ghost Shooter
                              </Text>
                              <div className="flex items-start justify-start md:ml-[0] ml-[254px] pb-[8px] w-[auto]">
                                <div className="flex flex-row gap-[8.8px] items-center justify-start pl-[19.34px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-right text-white_A700_e5 w-[auto]"
                                    variant="body69"
                                  >
                                    2
                                  </Text>
                                  <Img
                                    src="images/img_div_red_a701_15x116.png"
                                    className="h-[15px] md:h-[auto] object-cover w-[116px]"
                                    alt="div Nine"
                                  />
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                                <Text
                                  className="font-normal mb-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                                  variant="body64"
                                >
                                  5,390,000
                                </Text>
                                <div className="h-[8px] mb-[12px] mt-[9px] overflow-hidden relative w-[25%]">
                                  <div className="w-full h-full absolute bg-white_A700_26 rounded-[2px]"></div>
                                  <div
                                    className="h-full absolute bg-white_A700_99  rounded-[2px]"
                                    style={{ width: "11%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                        <div className="border-gray_909 border-solid border-t-[2px] flex md:flex-col flex-row gap-[57px] items-center justify-end pl-[15px] pt-[15px] w-[100%]">
                          <div className="flex md:flex-1 flex-row gap-[6px] items-center justify-center md:w-[100%] w-[21%]">
                            <Text
                              className="font-semibold ml-[2px] text-center text-gray_300_cc w-[auto]"
                              variant="body82"
                            >
                              Download shareable images
                            </Text>
                            <Img
                              src="images/img_download_gray_304.svg"
                              className="h-[20px] w-[20px]"
                              alt="download One"
                            />
                          </div>
                          <Text
                            className="sm:flex-1 font-normal leading-[24.00px] not-italic text-center text-white_A700_e5 sm:w-[100%] w-[35%]"
                            variant="body69"
                          >
                            <span className="text-white_A700_e5 text-[16px] font-inter">
                              The{" "}
                            </span>
                            <span className="text-white_A700_e5 text-[16px] font-inter font-bold">
                              Top 10 most popular Films (English)
                            </span>
                            <span className="text-white_A700_e5 text-[16px] font-inter">
                              , based on hours viewed in their first 28 days on
                              Netflix.
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col relative w-[100%]">
                <div
                  className="bg-cover bg-gradient4  bg-no-repeat h-[2244px] sm:h-[2317px] md:h-[2406px] mx-[auto] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_sectionglobalreach.png')",
                  }}
                >
                  <Img
                    src="defaultNoData.png"
                    className="absolute h-[2139px] inset-x-[0] mx-[auto] object-cover top-[0] w-[100%]"
                    alt="createfromframe One"
                  />
                  <div className="absolute flex flex-col gap-[55px] h-[100%] inset-[0] items-center justify-center m-[auto] pt-[55px] w-[71%]">
                    <Text
                      className="font-bold leading-[36.00px] text-center text-white_A700 sm:w-[100%] w-[37%]"
                      variant="body48"
                    >
                      Titles in the Global Top 10 from February 6 - February 12,
                      2023 were also popular in countries around the world:
                    </Text>
                    <div className="flex flex-col gap-[109px] md:gap-[40px] items-center justify-end pt-[23px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-center text-white_A700_a0 w-[auto]"
                        variant="body82"
                      >
                        <span className="text-white_A700_a0 text-[13px] font-inter">
                          Includes countries and territories that have a “Top 10
                          Row” on Netflix. Countries are grouped by regions
                          defined by the{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-red_A700_b2 text-[13px] font-inter font-semibold underline"
                        >
                          United Nations Statistics Division
                        </a>
                        <span className="text-white_A700_a0 text-[13px] font-inter">
                          .
                        </span>
                      </Text>
                      <div className="bg-gray_903 flex flex-col font-ibmplexsans gap-[40px] items-start justify-start pb-[128px] pt-[64px] shadow-bs5 md:w-[100%] w-[auto]">
                        <div className="flex flex-col gap-[15px] items-center justify-end w-[100%]">
                          <Text
                            className="font-bold mt-[7px] text-center text-gray_50 w-[auto]"
                            variant="body35"
                          >
                            Join a community of 20 million software creators
                            building on Replit
                          </Text>
                          <Text
                            className="font-normal not-italic text-center text-gray_50 w-[auto]"
                            variant="body60"
                          >
                            Share to, learn from, and remix the work of top
                            builders around the world
                          </Text>
                        </div>
                        <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start md:w-[100%] w-[auto]">
                          <div className="flex flex-col gap-[26px] justify-start pt-[3px] w-[100%]">
                            <Text
                              className="font-medium md:ml-[0] ml-[52px] text-gray_50 text-left w-[auto]"
                              variant="body56"
                            >
                              Featured work
                            </Text>
                            <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                              <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start sm:pr-[20px] pr-[2144px] md:pr-[40px] w-[auto]">
                                <List
                                  className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[1248px]"
                                  orientation="horizontal"
                                >
                                  <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col gap-[238px] md:gap-[40px] items-start justify-end p-[16px] rounded-[16px] shadow-bs6 w-[100%]">
                                    <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                                      <Text
                                        className="font-medium text-gray_50 text-left w-[auto]"
                                        variant="body60"
                                      >
                                        SSSPICY!
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[124.03px] items-center justify-start w-[auto]">
                                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                        <div className="h-[32px] rounded-[50%] w-[32px]"></div>
                                        <div className="flex items-center justify-start w-[auto]">
                                          <Text
                                            className="font-medium text-gray_50 text-left w-[auto]"
                                            variant="body78"
                                          >
                                            torcado
                                          </Text>
                                        </div>
                                      </div>
                                      <Text
                                        className="bg-gray_910 font-normal justify-center not-italic pl-[8px] pr-[7.7px] py-[4px] rounded-[13px] text-left text-red_102 w-[auto]"
                                        variant="body78"
                                      >
                                        Award-Winning Game
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col gap-[238px] md:gap-[40px] items-start justify-end p-[16px] rounded-[16px] shadow-bs6 w-[100%]">
                                    <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                                      <Text
                                        className="font-medium text-gray_50 text-left w-[auto]"
                                        variant="body60"
                                      >
                                        Stripe Checkout
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[137.03px] items-center justify-start w-[auto]">
                                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                        <div className="h-[32px] rounded-[50%] w-[32px]"></div>
                                        <div className="flex items-center justify-start w-[auto]">
                                          <Text
                                            className="font-medium text-gray_50 text-left w-[auto]"
                                            variant="body78"
                                          >
                                            stripe
                                          </Text>
                                        </div>
                                      </div>
                                      <Text
                                        className="bg-light_green_900 font-normal justify-center not-italic pl-[8px] pr-[7.89px] py-[4px] rounded-[13px] text-amber_200 text-left w-[auto]"
                                        variant="body78"
                                      >
                                        Payments Integration
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col gap-[238px] md:gap-[40px] items-start justify-end p-[16px] rounded-[16px] shadow-bs6 w-[100%]">
                                    <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                                      <Text
                                        className="font-medium text-gray_50 text-left w-[auto]"
                                        variant="body60"
                                      >
                                        Blob Generator
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[178.09px] items-center justify-start w-[auto]">
                                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                        <div className="h-[32px] rounded-[50%] w-[32px]"></div>
                                        <div className="flex items-center justify-start w-[auto]">
                                          <Text
                                            className="font-medium text-gray_50 text-left w-[auto]"
                                            variant="body78"
                                          >
                                            omar
                                          </Text>
                                        </div>
                                      </div>
                                      <Text
                                        className="bg-light_green_901 font-normal justify-center not-italic pl-[8px] pr-[7.61px] py-[4px] rounded-[13px] text-left text-lime_300 w-[auto]"
                                        variant="body78"
                                      >
                                        Creative Coding
                                      </Text>
                                    </div>
                                  </div>
                                </List>
                                <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col gap-[238px] md:gap-[40px] items-start justify-end pl-[16px] py-[16px] rounded-[16px] shadow-bs6 md:w-[100%] w-[240px]">
                                  <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-medium text-gray_50 text-left w-[auto]"
                                      variant="body60"
                                    >
                                      Cursor Hangout
                                    </Text>
                                  </div>
                                  <div className="flex items-start justify-start w-[auto]">
                                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                      <div className="h-[32px] rounded-[50%] w-[32px]"></div>
                                      <div className="flex items-center justify-start w-[auto]">
                                        <Text
                                          className="font-medium text-gray_50 text-left w-[auto]"
                                          variant="body78"
                                        >
                                          techpandapro
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[24px] justify-end w-[100%]">
                            <Text
                              className="font-medium md:ml-[0] ml-[52px] mr-[1224px] mt-[5px] text-gray_50 text-left w-[auto]"
                              variant="body56"
                            >
                              What people are saying
                            </Text>
                            <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                              <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[448px] w-[auto]">
                                <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col gap-[59px] items-center justify-end p-[17px] rounded-[16px] shadow-bs6 md:w-[100%] w-[38%]">
                                  <Text
                                    className="font-normal leading-[22.40px] mt-[2px] not-italic text-gray_50 text-left sm:w-[100%] w-[97%]"
                                    variant="body78"
                                  >
                                    &quot;Tightly integrated code generation,
                                    editing and output - well executed. Sets a
                                    high bar for computing education.&quot;
                                  </Text>
                                  <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      @CrunchingData
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col gap-[14px] items-start justify-end p-[17px] rounded-[16px] shadow-bs6 md:w-[100%] w-[38%]">
                                  <Text
                                    className="font-normal leading-[22.40px] mt-[2px] not-italic text-gray_50 text-left sm:w-[100%] w-[93%]"
                                    variant="body78"
                                  >
                                    &quot;The team at Replit are on fire as
                                    always - constantly seeing initiatives like
                                    this coming out that make me so excited to
                                    get coding and bring new ideas into my
                                    workshops and lessons 🔥&quot;
                                  </Text>
                                  <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      @tanyahowden
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col gap-[59px] items-start justify-end p-[17px] rounded-[16px] shadow-bs6 md:w-[100%] w-[38%]">
                                  <Text
                                    className="font-normal leading-[22.40px] mt-[2px] not-italic text-gray_50 text-left sm:w-[100%] w-[88%]"
                                    variant="body78"
                                  >
                                    &quot;What Replit is doing in the DevEx
                                    space is a truly revolution and it will
                                    change how we develop apps.&quot;
                                  </Text>
                                  <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      @adamar
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col gap-[14px] items-start justify-end pl-[17px] py-[17px] rounded-[16px] shadow-bs6 md:w-[100%] w-[23%]">
                                  <Text
                                    className="font-normal leading-[22.40px] mt-[2px] not-italic text-gray_50 text-left w-[100%]"
                                    variant="body78"
                                  >
                                    &quot;Lately, every time I open Replit,
                                    something new is added. I can really
                                    appreciate Replit when I think of the
                                    tremendous development costs I would have
                                    incurred if I had to make something like
                                    this myself.
                                  </Text>
                                  <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      @happylogica
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row gap-[142px] md:gap-[40px] items-center justify-start pb-[128px] pl-[118px] sm:pl-[20px] md:pl-[40px] pr-[16px] pt-[64px] md:w-[100%] w-[auto]">
                            <div className="flex flex-col justify-start pr-[7px] pt-[7px] md:w-[100%] w-[45%]">
                              <Text
                                className="font-bold md:ml-[0] ml-[130px] text-center text-gray_50 w-[auto]"
                                variant="body35"
                              >
                                Don&#39;t try this at home
                              </Text>
                              <Text
                                className="font-normal leading-[32.00px] md:ml-[0] ml-[71px] mt-[9px] not-italic text-center text-gray_50 sm:w-[100%] w-[77%]"
                                variant="body60"
                              >
                                With the Replit mobile app, you can build and
                                run your projects from anywhere in the world.
                              </Text>
                              <Img
                                src="images/img_div_gray_504.svg"
                                className="h-[68px] mr-[94px] mt-[8px] w-[480px]"
                                alt="div Ten"
                              />
                            </div>
                            <Img
                              src="images/img_div_orange_800.svg"
                              className="flex-1 h-[687px] w-[100%]"
                              alt="div Eleven"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-gradient4  bg-no-repeat flex flex-col md:gap-[40px] gap-[81px] h-[1936px] justify-start mt-[-157.84px] mx-[auto] p-[28px] sm:px-[20px] w-[100%] z-[1]"
                  style={{
                    backgroundImage: "url('images/img_sectionmostpopular.png')",
                  }}
                >
                  <div className="flex flex-col md:gap-[40px] gap-[85px] justify-start md:ml-[0] ml-[99px] mt-[12px] pt-[53px] md:w-[100%] w-[77%]">
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[320px] pt-[3px] px-[3px] md:w-[100%] w-[80%]">
                      <Text
                        className="leading-[68.00px] text-center text-white_A700 tracking-[-1.92px] sm:w-[100%] w-[65%]"
                        variant="body6"
                      >
                        The place for anyone from anywhere to build anything
                      </Text>
                      <Text
                        className="font-normal leading-[28.00px] mt-[23px] not-italic text-bluegray_400 text-center sm:w-[100%] w-[55%]"
                        variant="body61"
                      >
                        Whether you’re scaling your startup or just learning how
                        to code, GitHub is your home. Join the world’s largest
                        developer platform to build the innovations that empower
                        humanity. Let’s build from here.
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[8px] items-start justify-start mt-[45px] md:w-[100%] w-[auto]">
                        <div className="bg-gradient5  flex flex-row gap-[6px] items-center justify-start p-[14px] rounded-[6px] md:w-[100%] w-[43%]">
                          <Text
                            className="font-bold ml-[23px] mt-[4px] text-center text-gray_907 w-[auto]"
                            variant="body61"
                          >
                            Sign up for GitHub
                          </Text>
                          <Img
                            src="images/img_svg_gray_907.svg"
                            className="h-[20px] w-[20px]"
                            alt="svg"
                          />
                        </div>
                        <div className="flex flex-row gap-[10px] items-center justify-center p-[14px] rounded-[6px] md:w-[100%] w-[56%]">
                          <Text
                            className="font-bold ml-[24px] mt-[4px] text-center text-white_A700 w-[auto]"
                            variant="body61"
                          >
                            Start a free enterprise trial
                          </Text>
                          <Img
                            src="images/img_svg.svg"
                            className="h-[20px] mr-[15px] w-[20px]"
                            alt="svg One"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_902 border-[1px] border-bluegray_904 border-solid flex md:flex-col flex-row gap-[193px] md:gap-[40px] items-center justify-start mr-[673px] rounded-[8px] md:w-[100%] w-[58%]">
                      <div className="flex flex-col gap-[201px] md:gap-[40px] items-start justify-end pl-[12px] py-[12px] md:w-[100%] w-[49%]">
                        <Text
                          className="font-medium leading-[32.00px] md:ml-[0] ml-[52px] mt-[56px] text-left text-white_A700 sm:w-[100%] w-[89%]"
                          variant="body51"
                        >
                          <span className="md:text-[21px] sm:text-[19px] text-white_A700 text-[23px] font-inter">
                            GitHub Sponsors
                          </span>
                          <span className="md:text-[21px] sm:text-[19px] text-blue_50_7f text-[23px] font-inter">
                            {" "}
                            lets you support your favorite open source
                            maintainers and projects.
                          </span>
                        </Text>
                        <div className="flex flex-row gap-[18px] items-start justify-center md:ml-[0] ml-[52px] py-[4px] md:w-[100%] w-[70%]">
                          <Text
                            className="font-semibold mt-[3px] text-left text-white_A700 w-[auto]"
                            variant="body61"
                          >
                            Invest with GitHub Sponsors
                          </Text>
                          <Img
                            src="images/img_svg.svg"
                            className="h-[20px] mt-[2px] w-[20px]"
                            alt="svg Two"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-start md:w-[100%] w-[31%]">
                        <div className="md:h-[372px] h-[404px] sm:pl-[20px] pl-[36px] relative w-[100%]">
                          <div className="absolute flex items-center justify-start right-[0] top-[0] w-[88%]">
                            <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                              <div className="flex flex-row gap-[9px] items-start justify-between w-[100%]">
                                <div className="bg-gray_902 border-[1px] border-bluegray_904 border-solid h-[149px] md:h-[58px] p-[14px] relative rounded-[6px] shadow-bs7 w-[73%]">
                                  <div className="absolute flex h-[max-content] inset-y-[0] items-start justify-start my-[auto] pb-[5.65px] pl-[1.04px] pr-[4.3px] pt-[4.86px] right-[32%] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-blue_50_7f text-left w-[auto]"
                                      variant="body78"
                                    >
                                      ESLint
                                    </Text>
                                  </div>
                                  <Button
                                    className="absolute bg-gray_911 border-[1px] border-gray_100_19 border-solid bottom-[9%] flex items-center justify-center min-w-[111px] pb-[9.18px] pt-[9.16px] px-[14.11px] right-[9%] rounded-[6px] text-center w-[auto]"
                                    leftIcon={
                                      <Img
                                        src="images/img_computer.svg"
                                        className="mr-[4px] text-center right-[10%] absolute"
                                        alt="computer"
                                      />
                                    }
                                  >
                                    <div className="bg-transparent cursor-pointer font-medium text-[14px] text-bluegray_103 text-center">
                                      Sponsor
                                    </div>
                                  </Button>
                                </div>
                                <div className="bg-gray_902 border-[1px] border-bluegray_904 border-solid md:h-[108px] h-[98px] mb-[50px] relative rounded-[6px] shadow-bs7 w-[24%]">
                                  <div className="absolute flex items-end justify-start pb-[10.78px] pl-[1.04px] pr-[1.86px] pt-[10.86px] right-[0] top-[0] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-blue_50_7f text-left w-[auto]"
                                      variant="body78"
                                    >
                                      sindresorhus
                                    </Text>
                                  </div>
                                  <div className="absolute bg-gray_911 border-[1px] border-gray_100_19 border-solid bottom-[13%] h-[58px] pb-[9.18px] pt-[9.16px] px-[14.11px] right-[0] rounded-[3px] w-[11%]"></div>
                                </div>
                              </div>
                              <div className="bg-gray_902 border-[1px] border-bluegray_904 border-solid h-[215px] md:h-[58px] md:ml-[0] ml-[59px] mr-[8px] p-[14px] relative rounded-[6px] shadow-bs7 w-[73%]">
                                <div className="absolute bottom-[25%] flex items-center justify-start pb-[11.67px] pl-[1.04px] pr-[1.15px] pt-[10.86px] right-[20%] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-blue_50_7f text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Nick DeJesus
                                  </Text>
                                </div>
                                <Button
                                  className="absolute bg-gray_911 border-[1px] border-gray_100_19 border-solid bottom-[7%] flex items-center justify-center min-w-[111px] pb-[9.18px] pt-[9.16px] px-[14.11px] right-[9%] rounded-[6px] text-center w-[auto]"
                                  leftIcon={
                                    <Img
                                      src="images/img_computer.svg"
                                      className="mr-[4px] text-center right-[10%] absolute"
                                      alt="computer"
                                    />
                                  }
                                >
                                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-bluegray_103 text-center">
                                    Sponsor
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-gray_902 border-[1px] border-bluegray_904 border-solid bottom-[20%] h-[215px] right-[0] shadow-bs7 w-[1%]"></div>
                          <div className="absolute bottom-[0] flex flex-row items-end justify-between right-[0] w-[46%]">
                            <div className="bg-gray_902 border-[1px] border-bluegray_904 border-solid h-[23px] mt-[50px] rounded-[6px] shadow-bs7 w-[100%]"></div>
                            <div className="bg-gray_902 border-[1px] border-bluegray_904 border-solid h-[74px] shadow-bs7 w-[1%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_903 flex font-ibmplexsans items-start justify-start max-w-[2082px] mb-[53px] mr-[16px] pb-[64px] pl-[36px] md:pr-[40px] pr-[82px] pt-[68px] sm:px-[20px] w-[100%]">
                    <div className="flex items-center justify-start pb-[20px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[9px] items-start justify-between w-[100%]">
                        <div className="flex sm:flex-1 flex-col gap-[16px] items-start justify-start pb-[116.03px] sm:w-[100%] w-[auto]">
                          <div className="flex flex-col gap-[-1px] h-[131px] md:h-[auto] items-start justify-start pb-[10.39px] pr-[164.33px] sm:pr-[20px] md:pr-[40px] sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_svg_gray_50.svg"
                              className="h-[40px] w-[110px]"
                              alt="svg Three"
                            />
                            <Text
                              className="font-normal not-italic text-gray_404 text-left w-[auto]"
                              variant="body78"
                            >
                              Copyright © 2023 Replit, Inc. All rights reserved.
                            </Text>
                            <div className="flex font-sourcesanspro items-start justify-start md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal mb-[15px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body78"
                              >
                                Chat with Us
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[11.61px] items-start justify-start sm:w-[100%] w-[auto]">
                            <List
                              className="flex-col font-ibmplexsans gap-[11px] grid items-center w-[100%]"
                              orientation="vertical"
                            >
                              <div className="flex sm:flex-1 flex-row gap-[8px] items-start justify-start sm:pr-[20px] pr-[401.16px] md:pr-[40px] pt-[0.39px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_twitter.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="twitter"
                                />
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Twitter
                                  </Text>
                                </div>
                              </div>
                              <div className="flex sm:flex-1 flex-row gap-[8px] items-start justify-start sm:pr-[20px] pr-[404.56px] md:pr-[40px] pt-[0.39px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_music_gray_404.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="music"
                                />
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    TikTok
                                  </Text>
                                </div>
                              </div>
                            </List>
                            <div className="flex flex-row font-ibmplexsans gap-[8px] items-start justify-start sm:pr-[20px] pr-[380.48px] md:pr-[40px] pt-[0.39px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_instagram.svg"
                                className="h-[16px] w-[16px]"
                                alt="instagram"
                              />
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Instagram
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-semibold font-sourcesanspro text-center text-deep_purple_A700 w-[auto]"
                              variant="body78"
                            >
                              Free Account
                            </Text>
                            <div className="flex flex-row font-ibmplexsans gap-[8px] items-start justify-start sm:pr-[20px] pr-[384.75px] md:pr-[40px] pt-[0.39px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_facebook_gray_404.svg"
                                className="common-pointer h-[16px] w-[16px]"
                                onClick={handleNavigate26}
                                alt="facebook"
                              />
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Facebook
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-deep_purple_400 cursor-pointer font-semibold font-sourcesanspro min-w-[94px] py-[11px] rounded-[6px] text-[18px] text-center text-white_A700 w-[auto]">
                              Pricing
                            </Button>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[10px] justify-start md:w-[100%] w-[77%]">
                          <div className="flex md:flex-col flex-row gap-[16px] items-start justify-between md:ml-[0] ml-[7px] w-[100%]">
                            <List
                              className="md:flex-1 sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[47%]"
                              orientation="horizontal"
                            >
                              <div className="flex flex-col gap-[12px] items-start justify-start pb-[130px] w-[auto]">
                                <Text
                                  className="font-medium text-gray_50 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Replit
                                </Text>
                                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Mobile app
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Blog
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    About
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Careers
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Teams for Education
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Pricing
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[12px] items-start justify-start pb-[130px] w-[auto]">
                                <Text
                                  className="font-medium text-gray_50 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Legal
                                </Text>
                                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Terms of Service
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Privacy
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Subprocessors
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    DPA
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    US Student DPA
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Student Privacy
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[12px] items-start justify-start pb-[104px] w-[auto]">
                                <Text
                                  className="font-medium text-gray_50 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Features
                                </Text>
                                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    IDE
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Multiplayer
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Community
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Teams
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Hosting
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Ghostwriter
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Bounties
                                  </Text>
                                </div>
                              </div>
                            </List>
                            <div className="h-[338px] relative md:w-[100%] w-[52%]">
                              <div className="absolute flex flex-col gap-[12px] items-start justify-start left-[0] top-[0] w-[auto]">
                                <Text
                                  className="font-medium text-gray_50 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Handy links
                                </Text>
                                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Languages
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Docs
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Support
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Forum
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Status
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Import from Glitch
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Import from Heroku
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    AI Comparison
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Brand Kit
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Replit India
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Partnerships
                                  </Text>
                                </div>
                              </div>
                              <div className="absolute flex font-inter h-[100%] inset-y-[0] items-start justify-start my-[auto] sm:px-[20px] px-[24px] right-[0] w-[74%]">
                                <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start md:w-[100%] w-[73%]">
                                  <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[48%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Product
                                    </Text>
                                    <div className="flex flex-col font-notosans items-start justify-start w-[100%]">
                                      <Text
                                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body78"
                                      >
                                        Features
                                      </Text>
                                      <Text
                                        className="font-normal mt-[14px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body78"
                                      >
                                        Security
                                      </Text>
                                      <Text
                                        className="font-normal mt-[12px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body78"
                                      >
                                        Team
                                      </Text>
                                      <Text
                                        className="font-normal mt-[16px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body82"
                                      >
                                        Enterprise
                                      </Text>
                                      <Text
                                        className="font-normal mt-[14px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body82"
                                      >
                                        Customer stories
                                      </Text>
                                      <Text
                                        className="font-normal mt-[15px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body78"
                                      >
                                        The ReadME Project
                                      </Text>
                                      <Text
                                        className="font-normal mt-[14px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body82"
                                      >
                                        Pricing
                                      </Text>
                                      <Text
                                        className="font-normal mt-[12px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body78"
                                      >
                                        Resources
                                      </Text>
                                      <Text
                                        className="font-normal mt-[14px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body78"
                                      >
                                        Roadmap
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-[16px] items-start justify-start pl-[3px] py-[3px] sm:w-[100%] w-[48%]">
                                    <Text
                                      className="font-normal md:ml-[0] ml-[20px] not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body82"
                                    >
                                      Company
                                    </Text>
                                    <div className="flex flex-col font-notosans items-start justify-start mb-[77px] md:ml-[0] ml-[20px] md:w-[100%] w-[auto]">
                                      <Text
                                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body82"
                                      >
                                        About
                                      </Text>
                                      <Text
                                        className="font-normal mt-[15px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body78"
                                      >
                                        Blog
                                      </Text>
                                      <Text
                                        className="font-normal mt-[12px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body78"
                                      >
                                        Careers
                                      </Text>
                                      <Text
                                        className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body78"
                                      >
                                        Press
                                      </Text>
                                      <Text
                                        className="font-normal mt-[14px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body82"
                                      >
                                        Inclusion
                                      </Text>
                                      <Text
                                        className="font-normal mt-[15px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body78"
                                      >
                                        Social Impact
                                      </Text>
                                      <Text
                                        className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                                        variant="body78"
                                      >
                                        Shop
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start md:w-[100%] w-[91%]">
                            <div className="flex items-center justify-start md:w-[100%] w-[69%]">
                              <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                                <div className="gap-[15px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Clojure
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Haskell
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Kotlin
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      QBasic
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Forth
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      LOLCODE
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      BrainF
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Emoticon
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Bloop
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Unlambda
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      CoffeeScript
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Scheme
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      APL
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Lua
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Ruby
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Roy
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Python
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Node.js
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      JavaScript
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Deno (beta)
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Golang
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      C++
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      C
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      C#
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal h-[18px] not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      F#
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      HTML, CSS, JS
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Rust
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Swift
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Python (with Turtle)
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Basic (beta)
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      R
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Bash
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Crystal
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Julia
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Elixir
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Nim
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Dart
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Reason Node.js
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal h-[18px] not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Tcl
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Erlang
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      TypeScript
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Pygame
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Love2D
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Emacs Lisp (Elisp)
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      PHP Web Server
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      SQLite
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Java
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      PHP CLI
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Pyxel
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Raku
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Scala (beta)
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Nix (beta)
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_404 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    Kaboom (beta)
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col font-inter gap-[15px] items-start justify-start md:mt-[0] mt-[19px] pl-[2px] py-[2px] md:w-[100%] w-[16%]">
                              <Text
                                className="font-normal md:ml-[0] ml-[21px] not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body78"
                              >
                                Support
                              </Text>
                              <div className="flex flex-col font-notosans items-start justify-start mb-[113px] md:ml-[0] ml-[21px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Docs
                                </Text>
                                <Text
                                  className="font-normal mt-[16px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Community Forum
                                </Text>
                                <Text
                                  className="font-normal mt-[12px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Professional Services
                                </Text>
                                <Text
                                  className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Skills
                                </Text>
                                <Text
                                  className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Status
                                </Text>
                                <Text
                                  className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Contact GitHub
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col font-inter gap-[18px] items-start justify-start mb-[153px] md:ml-[0] ml-[12px] md:mt-[0] mt-[23px] md:w-[100%] w-[16%]">
                              <Text
                                className="font-normal md:ml-[0] ml-[22px] not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body78"
                              >
                                Platform
                              </Text>
                              <div className="flex flex-col font-notosans items-start justify-start mb-[22px] md:ml-[0] ml-[22px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Developer API
                                </Text>
                                <Text
                                  className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Partners
                                </Text>
                                <Text
                                  className="font-normal mt-[13px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Electron
                                </Text>
                                <Text
                                  className="font-normal mt-[15px] not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body78"
                                >
                                  GitHub Desktop
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithheaderPage;
