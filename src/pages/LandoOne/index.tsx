import React from "react";

import { Text, Img, Line, List, Button } from "components";

const LandoOnePage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-[auto] pb-[185px] w-[100%]">
        <div className="flex flex-col items-center w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-bluegray_901 flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[9px] w-[100%]">
              <div className="flex flex-row gap-[24px] items-center justify-start mb-[6px] md:ml-[0] ml-[254px] w-[auto]">
                <div className="flex items-end justify-start p-[2px] w-[auto]">
                  <Text
                    className="font-semibold my-[14px] text-left text-white_A700_e5 tracking-[0.80px] w-[auto]"
                    variant="body69"
                  >
                    TOP 10
                  </Text>
                </div>
                <div className="flex flex-row gap-[5px] items-start justify-between w-[24%]">
                  <Text
                    className="font-semibold mb-[2px] text-center text-white_A700_a0 w-[auto]"
                    variant="body82"
                  >
                    Search
                  </Text>
                  <Img
                    src="images/img_search_16x16.svg"
                    className="h-[16px] w-[16px]"
                    alt="search One"
                  />
                </div>
              </div>
              <Img
                src="images/img_logopng.png"
                className="md:flex-1 h-[53px] sm:h-[auto] md:ml-[0] ml-[148px] md:mt-[0] mt-[7px] object-cover md:w-[100%] w-[9%]"
                alt="logopng"
              />
              <ul className="flex md:flex-1 flex-row sm:hidden items-start justify-center md:ml-[0] ml-[111px] md:w-[100%] w-[14%] common-row-list">
                <li className="mt-[1px] mb-[3px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-semibold text-[13px] text-left text-white_A700 underline"
                    href="javascript:"
                  >
                    English • Español
                  </a>
                </li>
                <li className="mt-[1px] ml-[11px] sm:w-[100%] sm:my-[10px] w-[1%]">
                  <Line className="bg-gray_200_7f h-[20px] w-[1px]" />
                </li>
                <li className="mb-[2px] ml-[8px] mr-[11px] sm:w-[100%] sm:my-[10px] w-[30%]">
                  <div className="flex flex-row items-start justify-center">
                    <a
                      className="cursor-pointer font-semibold text-[13px] text-left text-white_A700 hover:underline w-[auto]"
                      href="javascript:"
                    >
                      About
                    </a>
                    <Img
                      src="images/img_minimize.svg"
                      className="h-[15px] ml-[4px] mt-[2px] w-[16px]"
                      alt="minimize"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </header>
          <div className="flex flex-col items-end justify-start mt-[2px] w-[100%]">
            <div
              className="bg-cover bg-gradient2  bg-no-repeat flex flex-col md:px-[20px] relative w-[100%]"
              style={{
                backgroundImage: "url('images/img_sectiontopmatter.png')",
              }}
            >
              <div
                className="bg-cover bg-gradient3  bg-no-repeat flex h-[502px] items-center justify-start mx-[auto] pt-[8px] px-[8px] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_sectionmostpopular.png')",
                }}
              >
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[94%]">
                  <Text
                    className="text-center text-white_A700 w-[auto]"
                    variant="body22"
                  >
                    Most Popular Films (English)
                  </Text>
                  <div className="md:h-[376px] h-[438px] relative w-[100%]">
                    <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] p-[37px] sm:px-[20px] top-[0] w-[100%]">
                      <Text
                        className="mb-[179px] text-center text-white_A700 w-[auto]"
                        variant="body94"
                      >
                        Global Top 10
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[25%] p-[10px] w-[46%]">
                      <Text
                        className="font-normal leading-[27.00px] not-italic text-center text-white_A700_e5 sm:w-[100%] w-[43%]"
                        variant="body64"
                      >
                        Weekly Top 10 lists of the most-watched TV and films.
                      </Text>
                      <Text
                        className="font-semibold mt-[22px] text-center text-red_A701 w-[auto]"
                        variant="body68"
                      >
                        Or, see Top 10 lists by country
                      </Text>
                      <div className="flex flex-row gap-[18px] items-start justify-end mb-[62px] ml-[auto] mt-[31px] py-[4px] md:w-[100%] w-[49%]">
                        <Text
                          className="font-semibold mt-[3px] text-left text-white_A700 w-[auto]"
                          variant="body61"
                        >
                          Invest with GitHub Sponsors
                        </Text>
                        <Img
                          src="images/img_svg.svg"
                          className="h-[20px] mt-[2px] w-[20px]"
                          alt="svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-gradient4  bg-no-repeat flex h-[460px] items-center justify-start mt-[-9px] mx-[auto] p-[42px] sm:px-[20px] md:px-[40px] w-[100%] z-[1]"
                style={{
                  backgroundImage: "url('images/img_sectionweeklylists.png')",
                }}
              >
                <div className="flex items-center justify-start mb-[43px] md:w-[100%] w-[90%]">
                  <div className="flex flex-col items-center justify-start pt-[3px] px-[3px] w-[100%]">
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
                          alt="svg One"
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
                          alt="svg Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[8px] items-start justify-end ml-[auto] mt-[528px] pr-[8px] md:px-[20px] md:w-[100%] w-[78%]">
              <div className="flex flex-col gap-[-1px] items-start justify-start md:mt-[0] mt-[201px] pb-[16.5px] px-[8px] sm:w-[100%] w-[auto]">
                <div className="flex flex-col font-lato gap-[18px] items-start justify-start pr-[4px] py-[4px] w-[100%]">
                  <Text
                    className="font-black text-left text-white_A700 w-[auto]"
                    variant="body11"
                  >
                    Focus on quality
                  </Text>
                  <div className="border-[4px] border-light_green_600 border-solid h-[8px] mb-[37px] w-[32%]"></div>
                </div>
                <Text
                  className="font-normal font-roboto leading-[38.50px] md:max-w-[100%] max-w-[463px] not-italic text-gray_603 text-left"
                  variant="body56"
                >
                  Becoming an Envato Author means that, like us, you care deeply
                  about the high quality of the products you sell to our global
                  audience.
                </Text>
              </div>
              <div className="flex items-start justify-end md:w-[100%] w-[58%]">
                <List
                  className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 grid-cols-2 mt-[65px] w-[87%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Img
                      src="images/img_div_182x280.png"
                      className="h-[182px] md:h-[auto] object-cover w-[100%]"
                      alt="div"
                    />
                    <Img
                      src="images/img_div_190x280.png"
                      className="h-[190px] md:h-[auto] mt-[18px] object-cover w-[100%]"
                      alt="div One"
                    />
                    <Img
                      src="images/img_div_88x280.png"
                      className="h-[88px] md:h-[auto] mt-[16px] object-cover w-[100%]"
                      alt="div Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Img
                      src="images/img_div_158x280.png"
                      className="h-[158px] md:h-[auto] object-cover w-[100%]"
                      alt="div One"
                    />
                    <Img
                      src="images/img_div_1.png"
                      className="h-[158px] md:h-[auto] mt-[16px] object-cover w-[100%]"
                      alt="div One One"
                    />
                    <Img
                      src="images/img_div_134x280.png"
                      className="h-[134px] md:h-[auto] mt-[28px] object-cover w-[100%]"
                      alt="div Two One"
                    />
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col font-lato gap-[28px] items-center justify-start max-w-[1168px] mt-[193px] mx-[auto] pt-[5px] md:px-[20px] w-[100%]">
              <Text
                className="font-black text-center text-white_A700 w-[auto]"
                variant="body19"
              >
                Tools and support when you need it.
              </Text>
              <div className="flex md:flex-col flex-row font-roboto gap-[16px] items-start justify-between pb-[8px] px-[8px] w-[100%]">
                <div className="flex md:flex-1 flex-col items-center justify-start mb-[8px] px-[18px] md:w-[100%] w-[24%]">
                  <Img
                    src="images/img_forumsed052a75.svg"
                    className="h-[126px] w-[190px]"
                    alt="forumsed052aSeventyFive"
                  />
                  <Text
                    className="font-bold mt-[46px] text-center text-white_A700 w-[auto]"
                    variant="body48"
                  >
                    Forums
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] mt-[32px] not-italic text-center text-gray_603 sm:w-[100%] w-[99%]"
                    variant="body69"
                  >
                    Join the discussion with fellow authors to get help and
                    feedback.
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[31px] items-center justify-start mb-[8px] px-[17px] md:w-[100%] w-[24%]">
                  <div className="flex flex-col gap-[48px] items-center justify-start md:w-[100%] w-[81%]">
                    <Img
                      src="images/img_envatohelp6c0d.svg"
                      className="h-[126px] w-[190px]"
                      alt="envatohelp6c0d"
                    />
                    <Text
                      className="font-bold text-center text-white_A700 w-[auto]"
                      variant="body48"
                    >
                      Envato Help Team
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-center text-gray_603 w-[100%]"
                    variant="body69"
                  >
                    Chat to our Help Team about how you can make the most of
                    Envato.
                  </Text>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 grid-cols-2 mb-[8px] md:w-[100%] w-[50%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start px-[19px] w-[100%]">
                    <Img
                      src="images/img_analyticsa66a6.svg"
                      className="h-[126px] w-[190px]"
                      alt="analyticsa66aSix"
                    />
                    <Text
                      className="font-bold mt-[48px] text-center text-white_A700 w-[auto]"
                      variant="body48"
                    >
                      Analytics
                    </Text>
                    <Text
                      className="font-normal leading-[24.00px] mt-[30px] not-italic text-center text-gray_603 w-[100%]"
                      variant="body69"
                    >
                      Check your dashboard to monitor sales and best times to
                      market.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start px-[9px] w-[100%]">
                    <Img
                      src="images/img_insights6c1b55.svg"
                      className="h-[126px] w-[190px]"
                      alt="insights6c1bFiftyFive"
                    />
                    <Text
                      className="font-bold mt-[48px] text-center text-white_A700 w-[auto]"
                      variant="body48"
                    >
                      Daily insights
                    </Text>
                    <Text
                      className="font-normal leading-[24.00px] mt-[30px] not-italic text-center text-gray_603 sm:w-[100%] w-[99%]"
                      variant="body69"
                    >
                      Stay on top of the game with helpful articles from our
                      community.
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col font-inter justify-start mt-[59px] py-[54px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end px-[200px] md:px-[20px] md:w-[100%] w-[88%]">
                <Img
                  src="images/img_top10png.png"
                  className="h-[55px] sm:h-[auto] mb-[3px] object-cover md:w-[100%] w-[6%]"
                  alt="top10png"
                />
                <div className="flex items-start justify-start md:ml-[0] ml-[11px] md:mt-[0] mt-[2px] w-[248px]">
                  <div className="border-b-[2px] border-red_A701 border-solid flex flex-row items-center justify-between w-[100%]">
                    <div className="border-b-[2px] border-red_A701 border-solid flex items-start justify-start pb-[2px] pr-[2px] w-[auto]">
                      <div className="flex items-start justify-start px-[10px] w-[auto]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body41"
                          >
                            Bransje
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_downarrowpng.png"
                      className="h-[10px] md:h-[auto] object-cover w-[auto]"
                      alt="downarrowpng"
                    />
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[38px] md:mt-[0] my-[2px] text-center text-white_A700 w-[auto]"
                  variant="body22"
                >
                  ved
                </Text>
                <div className="flex items-start justify-start md:ml-[0] ml-[25px] md:mt-[0] mt-[8px] w-[auto]">
                  <div className="border-b-[2px] border-red_A701 border-solid flex flex-row items-center justify-between pb-[2px] pr-[2px] w-[100%]">
                    <div className="flex items-start justify-start px-[10px] w-[auto]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body41"
                        >
                          Tønsberg{" "}
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_downarrowpng.png"
                      className="h-[10px] md:h-[auto] mr-[6px] object-cover w-[auto]"
                      alt="downarrowpng One"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[456px] md:h-[472px] md:ml-[0] ml-[120px] mt-[16px] md:px-[20px] relative md:w-[100%] w-[93%]">
                <Text
                  className="font-normal ml-[auto] mr-[320px] mt-[2px] not-italic text-center text-white_A700_a0 w-[auto]"
                  variant="body82"
                >
                  Some titles may not be available in all regions. Some
                  territories are included in the countries list for
                  convenience.
                </Text>
                <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] shadow-bs3 w-[100%]">
                  <div className="bg-black_900_99 flex md:flex-col flex-row md:gap-[20px] items-center justify-end w-[100%]">
                    <div className="bg-gradient6  flex md:flex-1 items-center justify-start shadow-bs4 md:w-[100%] w-[78%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[818.3px] md:w-[100%] w-[auto]">
                        <div className="flex flex-col md:gap-[40px] gap-[66px] items-center justify-start pb-[24px] w-[100%]">
                          <Img
                            src="images/img_1png.png"
                            className="h-[256px] md:h-[auto] object-cover w-[256px]"
                            alt="1png"
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
                          <div className="absolute bg-gradient7  bottom-[0] flex inset-x-[0] items-end justify-end mx-[auto] p-[16px] w-[100%]">
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
              </div>
              <div className="bg-black_900_99 border-[2px] border-solid border-white_A700_0c flex flex-col gap-[35px] justify-end mb-[23px] md:ml-[0] ml-[193px] mr-[53px] mt-[66px] p-[2px] md:px-[20px] rounded-[8px] md:w-[100%] w-[84%]">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[14px] mr-[66px] mt-[37px] md:w-[100%] w-[94%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[auto]">
                    <div className="flex relative md:w-[100%] w-[51%]">
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
                            <div className="flex flex-row items-center justify-start w-[100%]">
                              <div className="flex items-start justify-start ml-[2px] px-[2px] w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-bold text-left text-white_A700 w-[auto]"
                                    variant="body73"
                                  >
                                    Bransje (Norsk)
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_downarrowpng.png"
                                className="h-[8px] md:h-[auto] ml-[3px] object-cover w-[8%]"
                                alt="downarrowpng Two"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="border-b-[2px] border-gray_900_99 border-solid cursor-pointer font-bold min-w-[117px] pl-[12px] pr-[19.66px] py-[5px] text-[14px] text-center text-white_A700_89 tracking-[0.35px] uppercase w-[auto]">
                      BEtydning
                    </Button>
                    <Text
                      className="border-b-[2px] border-gray_900_99 border-solid font-bold pl-[166.72px] sm:pl-[20px] md:pl-[40px] pr-[1.28px] py-[5px] text-right text-white_A700_89 tracking-[0.35px] uppercase w-[auto]"
                      variant="body78"
                    >
                      starter på (Estimat NOK){" "}
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
                      <a
                        className="font-semibold md:ml-[0] ml-[40px] text-[17px] text-left text-white_A700_e5 underline w-[auto]"
                        href="https://www.facebook.com/groups/253553386043620/user/100063557171889/?__cft__[0]=AZVkjvmSL1VHLzmJgfPACplmzlYTpeq89RJyyDbtqGILJDJhZdJzpemgXWOCPTeUxLxORbZclJ1Z-nNySJVMELfW9_rR_bEsApMsS3XVj-_vAUR9eLLbHELuOnzpvycrDAsn8EbUXAPDGaG1SB3wcrk2ibHWgrAFbzwBri0tOgekaDC--qKuhCMtcmmBIJNAiIapdpEuneHuB33c6fPqD11r&__tn__=-UC%2CP-R"
                        rel="noreferrer"
                        target="_blank"
                      >
                        HomeMadeShop.no
                      </a>
                      <div className="flex items-start justify-start md:ml-[0] ml-[273px] py-[8px] w-[auto]">
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
                            alt="div Two"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                        <Text
                          className="font-normal my-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                          variant="body64"
                        >
                          5,000
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
                        className="font-semibold md:ml-[0] ml-[38px] text-left text-white_A700_e5 w-[auto]"
                        variant="body68"
                      >
                        noasarkbarneklaer.no
                      </Text>
                      <div className="flex items-start justify-start md:ml-[0] ml-[257px] pb-[8px] w-[auto]">
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
                            alt="div Three"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                        <Text
                          className="font-normal mb-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                          variant="body64"
                        >
                          2,000
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
                        className="font-semibold md:ml-[0] ml-[37px] text-left text-white_A700_e5 w-[auto]"
                        variant="body68"
                      >
                        Minfuel.no
                      </Text>
                      <div className="flex items-start justify-start md:ml-[0] ml-[348px] pb-[8px] w-[auto]">
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
                            alt="div Four"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[11px] items-end justify-end md:w-[100%] w-[31%]">
                        <Text
                          className="font-normal mb-[9px] not-italic text-right text-white_A700_e5 w-[auto]"
                          variant="body68"
                        >
                          GRATIS
                        </Text>
                        <div className="h-[8px] mb-[13px] mt-[9px] overflow-hidden relative w-[25%]">
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
                        className="font-semibold md:ml-[0] ml-[37px] md:mt-[0] mt-[2px] text-left text-white_A700_e5 w-[auto]"
                        variant="body68"
                      >
                        hybel.no
                      </Text>
                      <div className="flex items-start justify-start md:ml-[0] ml-[365px] pb-[8px] w-[auto]">
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
                            alt="div Five"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                        <Text
                          className="font-normal mb-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                          variant="body64"
                        >
                          8,000
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
                        className="font-semibold md:ml-[0] ml-[38px] md:mt-[0] mt-[2px] text-left text-white_A700_e5 w-[auto]"
                        variant="body68"
                      >
                        MatPlanlegger.no
                      </Text>
                      <div className="flex items-start justify-start md:ml-[0] ml-[291px] pb-[8px] w-[auto]">
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
                      <div className="flex md:flex-1 flex-row gap-[11px] items-end justify-end md:w-[100%] w-[31%]">
                        <Text
                          className="font-normal mb-[8px] not-italic text-right text-white_A700_e5 w-[auto]"
                          variant="body64"
                        >
                          20
                        </Text>
                        <div className="h-[8px] mb-[13px] mt-[9px] overflow-hidden relative w-[25%]">
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
                        bekk.no/jobb
                      </Text>
                      <div className="flex items-start justify-start md:ml-[0] ml-[327px] pb-[8px] w-[auto]">
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
                          10,000
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
                        usn.no
                      </Text>
                      <div className="flex items-start justify-start md:ml-[0] ml-[380px] pb-[8px] w-[auto]">
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
                      <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                        <Text
                          className="font-normal mb-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                          variant="body64"
                        >
                          310,000
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
                        className="font-semibold md:ml-[0] ml-[38px] text-left text-white_A700_e5 w-[auto]"
                        variant="body68"
                      >
                        Størsenter.no
                      </Text>
                      <div className="flex items-start justify-start md:ml-[0] ml-[324px] pb-[8px] w-[auto]">
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
                            alt="div Nine"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[11px] items-center justify-end md:w-[100%] w-[31%]">
                        <Text
                          className="font-normal mb-[6px] not-italic text-right text-white_A700_e5 w-[auto]"
                          variant="body64"
                        >
                          6,000
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
                        className="font-semibold md:ml-[0] ml-[38px] text-left text-white_A700_e5 w-[auto]"
                        variant="body68"
                      >
                        animevariantno
                      </Text>
                      <div className="flex items-start justify-start md:ml-[0] ml-[308px] pb-[8px] w-[auto]">
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
                            alt="div Ten"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[11px] items-end justify-end md:w-[100%] w-[31%]">
                        <Text
                          className="font-normal mb-[9px] not-italic text-right text-white_A700_e5 w-[auto]"
                          variant="body68"
                        >
                          500
                        </Text>
                        <div className="h-[8px] mb-[13px] mt-[9px] overflow-hidden relative w-[25%]">
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
                        className="font-semibold md:ml-[0] ml-[34px] text-left text-white_A700_e5 w-[auto]"
                        variant="body68"
                      >
                        Fristrøm.no
                      </Text>
                      <div className="flex items-start justify-start md:ml-[0] ml-[341px] pb-[8px] w-[auto]">
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
                            alt="div Eleven"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[11px] items-end justify-end md:w-[100%] w-[31%]">
                        <Text
                          className="font-normal mb-[8px] not-italic text-right text-white_A700_e5 w-[auto]"
                          variant="body64"
                        >
                          100
                        </Text>
                        <div className="h-[8px] mb-[13px] mt-[9px] overflow-hidden relative w-[25%]">
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
                <div className="border-gray_909 border-solid border-t-[2px] flex md:flex-col flex-row md:gap-[40px] gap-[79px] items-center justify-start mb-[21px] mr-[auto] pl-[15px] pt-[15px] md:w-[100%] w-[79%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[21px] items-start justify-end md:ml-[0] ml-[277px] md:w-[100%] w-[auto]"
                    style={{
                      backgroundImage: "url('images/img_group389.svg')",
                    }}
                  >
                    <Text
                      className="font-semibold mt-[3px] text-center text-gray_300_cc w-[auto]"
                      variant="body82"
                    >
                      Last ned for deling
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-center text-white_A700_e5 sm:w-[100%] w-[43%]"
                    variant="body69"
                  >
                    Noen bedrifter er tatt med på fylkeslisten for enkelhets
                    skyld, her ser du de ti beste bedriftene basert på Bransje
                    og hvor stor betydning de har for lokalbefolkningen
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray_903 flex font-ibmplexsans items-start justify-start max-w-[1456px] mt-[592px] mx-[auto] pb-[128px] pt-[64px] md:px-[20px] shadow-bs5 w-[100%]">
              <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[15px] items-center justify-end w-[100%]">
                  <Text
                    className="font-bold mt-[7px] text-center text-gray_50 w-[auto]"
                    variant="body35"
                  >
                    Join a community of 20 million software creators building on
                    Replit
                  </Text>
                  <Text
                    className="font-normal not-italic text-center text-gray_50 w-[auto]"
                    variant="body60"
                  >
                    Share to, learn from, and remix the work of top builders
                    around the world
                  </Text>
                </div>
                <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start md:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[26px] justify-start overflow-auto pt-[3px] w-[100%]">
                    <Text
                      className="font-medium md:ml-[0] ml-[52px] text-gray_50 text-left w-[auto]"
                      variant="body56"
                    >
                      Featured work
                    </Text>
                    <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                      <List
                        className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start sm:pr-[20px] pr-[2144px] md:pr-[40px] w-[auto]"
                        orientation="horizontal"
                      >
                        <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col items-start justify-start p-[17px] rounded-[16px] shadow-bs6 w-[100%]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-medium text-gray_50 text-left w-[auto]"
                              variant="body60"
                            >
                              SSSPICY!
                            </Text>
                          </div>
                          <Img
                            src="images/img_span_bluegray_902.svg"
                            className="h-[206px] mt-[16px] w-[366px]"
                            alt="span"
                          />
                          <div className="flex flex-row gap-[124.03px] items-center justify-start mt-[16px] w-[auto]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-bluegray_902 flex h-[32px] items-center justify-start rounded-[50%] w-[32px]">
                                <div className="h-[32px] rounded-[50%] w-[32px]"></div>
                              </div>
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
                        <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col items-start justify-start p-[17px] rounded-[16px] shadow-bs6 w-[100%]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-medium text-gray_50 text-left w-[auto]"
                              variant="body60"
                            >
                              Stripe Checkout
                            </Text>
                          </div>
                          <Img
                            src="images/img_span_bluegray_902.svg"
                            className="h-[206px] mt-[16px] w-[366px]"
                            alt="span One"
                          />
                          <div className="flex flex-row gap-[137.03px] items-center justify-start mt-[16px] w-[auto]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-bluegray_902 flex h-[32px] items-center justify-start rounded-[50%] w-[32px]">
                                <div className="h-[32px] rounded-[50%] w-[32px]"></div>
                              </div>
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
                        <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col items-start justify-start p-[17px] rounded-[16px] shadow-bs6 w-[100%]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-medium text-gray_50 text-left w-[auto]"
                              variant="body60"
                            >
                              Blob Generator
                            </Text>
                          </div>
                          <Img
                            src="images/img_span_bluegray_902.svg"
                            className="h-[206px] mt-[16px] w-[366px]"
                            alt="span Two"
                          />
                          <div className="flex flex-row gap-[178.09px] items-center justify-start mt-[16px] w-[auto]">
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
                        <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col items-start justify-start p-[17px] rounded-[16px] shadow-bs6 w-[100%]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-medium text-gray_50 text-left w-[auto]"
                              variant="body60"
                            >
                              Cursor Hangout
                            </Text>
                          </div>
                          <Img
                            src="images/img_span_bluegray_902.svg"
                            className="h-[206px] mt-[16px] w-[366px]"
                            alt="span Three"
                          />
                          <div className="flex items-start justify-start mt-[16px] w-[auto]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <div className="bg-bluegray_902 flex h-[32px] items-center justify-start rounded-[50%] w-[32px]">
                                <div className="h-[32px] rounded-[50%] w-[32px]"></div>
                              </div>
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
                      </List>
                    </div>
                  </div>
                  <div className="overflow-x-auto w-[100%]">
                    <div className="flex flex-col gap-[24px] justify-end overflow-auto w-[100%]">
                      <Text
                        className="font-medium md:ml-[0] ml-[52px] mr-[1168px] mt-[5px] text-gray_50 text-left w-[auto]"
                        variant="body56"
                      >
                        What people are saying
                      </Text>
                      <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                        <div className="gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[448px] w-[auto]">
                          <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col gap-[59px] items-center justify-end p-[17px] rounded-[16px] shadow-bs6 w-[100%]">
                            <Text
                              className="font-normal leading-[22.40px] mt-[2px] not-italic text-gray_50 text-left sm:w-[100%] w-[97%]"
                              variant="body78"
                            >
                              &quot;Tightly integrated code generation, editing
                              and output - well executed. Sets a high bar for
                              computing education.&quot;
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
                          <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col gap-[14px] items-start justify-end p-[17px] rounded-[16px] shadow-bs6 w-[100%]">
                            <Text
                              className="font-normal leading-[22.40px] mt-[2px] not-italic text-gray_50 text-left sm:w-[100%] w-[93%]"
                              variant="body78"
                            >
                              &quot;The team at Replit are on fire as always -
                              constantly seeing initiatives like this coming out
                              that make me so excited to get coding and bring
                              new ideas into my workshops and lessons 🔥&quot;
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
                          <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col gap-[59px] items-start justify-end p-[17px] rounded-[16px] shadow-bs6 w-[100%]">
                            <Text
                              className="font-normal leading-[22.40px] mt-[2px] not-italic text-gray_50 text-left sm:w-[100%] w-[88%]"
                              variant="body78"
                            >
                              &quot;What Replit is doing in the DevEx space is a
                              truly revolution and it will change how we develop
                              apps.&quot;
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
                          <div className="bg-gradient8  border-[1px] border-bluegray_902 border-solid flex flex-col gap-[14px] items-center justify-end p-[17px] rounded-[16px] shadow-bs6 w-[100%]">
                            <Text
                              className="font-normal leading-[22.40px] mt-[2px] not-italic text-gray_50 text-left w-[100%]"
                              variant="body78"
                            >
                              &quot;Lately, every time I open Replit, something
                              new is added. I can really appreciate Replit when
                              I think of the tremendous development costs I
                              would have incurred if I had to make something
                              like this myself.
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
                        With the Replit mobile app, you can build and run your
                        projects from anywhere in the world.
                      </Text>
                      <Img
                        src="images/img_div_gray_504.svg"
                        className="h-[68px] mr-[94px] mt-[8px] w-[480px]"
                        alt="div Twelve"
                      />
                    </div>
                    <Img
                      src="images/img_div_orange_800.svg"
                      className="flex-1 h-[687px] w-[100%]"
                      alt="div Thirteen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end mt-[511px] pt-[64px] w-[100%]">
            <div className="flex flex-row gap-[12px] items-center justify-start sm:px-[20px] md:px-[40px] px-[596px] w-[100%]">
              <Img
                src="images/img_top10png_55x52.png"
                className="h-[55px] md:h-[auto] object-cover w-[17%]"
                alt="top10png One"
              />
              <div className="flex items-start justify-start w-[auto]">
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
                    alt="downarrowpng Three"
                  />
                </div>
              </div>
            </div>
            <Text
              className="font-normal mt-[11px] not-italic text-center text-white_A700_a0 w-[auto]"
              variant="body82"
            >
              Some titles may not be available in all regions. Some territories
              are included in the countries list for convenience.
            </Text>
            <div className="h-[1085px] sm:h-[477px] md:h-[593px] max-w-[1392px] mt-[21px] mx-[auto] md:px-[20px] relative w-[100%]">
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
                          alt="AAAABRsyEFlNAD One"
                        />
                        <div className="absolute bg-gradient7  bottom-[0] flex inset-x-[0] items-end justify-end mx-[auto] p-[15px] w-[100%]">
                          <Img
                            src="images/img_download.svg"
                            className="h-[20px] mt-[6px] w-[20px]"
                            alt="download One"
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
                            alt="AAAABcZ9SxXLEh One"
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
                            alt="AAAABTwwA9x3Dt One"
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
                            alt="AAAABbUFeKjAVpV One"
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
                            alt="AAAABQYCxrICBLNine One"
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
                            alt="AAAABfzGGME0NZX One"
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
                            alt="AAAABShh0VrDSxH One"
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
                            alt="AAAABXFeQJY4kMn One"
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
                            alt="AAAABTY0qEiSSI One"
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
                            alt="AAAABY3zNgIbAOS One"
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
                                alt="downarrowpng Four"
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
                            alt="div Fourteen"
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
                            alt="div Fifteen"
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
                            alt="div Sixteen"
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
                            alt="div Seventeen"
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
                            alt="div Eighteen"
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
                            alt="div Nineteen"
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
                            alt="div Twenty"
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
                            alt="div TwentyOne"
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
                            alt="div TwentyTwo"
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
                            alt="div TwentyThree"
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
                      alt="download Two"
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
                      , based on hours viewed in their first 28 days on Netflix.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end mt-[55px] sm:px-[20px] md:px-[40px] px-[62px] w-[100%]">
          <div className="flex items-center justify-start md:w-[100%] w-[93%]">
            <div className="bg-gray_902 border-[1px] border-bluegray_904 border-solid flex md:flex-col flex-row md:gap-[40px] items-center justify-between rounded-[8px] w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[201px] md:gap-[40px] items-start justify-end p-[64px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[50%]">
                <Text
                  className="font-medium leading-[32.00px] mt-[4px] text-left text-white_A700 sm:w-[100%] w-[88%]"
                  variant="body51"
                >
                  <span className="md:text-[21px] sm:text-[19px] text-white_A700 text-[23px] font-inter">
                    GitHub Sponsors
                  </span>
                  <span className="md:text-[21px] sm:text-[19px] text-blue_50_7f text-[23px] font-inter">
                    {" "}
                    lets you support your favorite open source maintainers and
                    projects.
                  </span>
                </Text>
                <div className="flex flex-row gap-[18px] items-start justify-start mr-[auto] py-[4px] md:w-[100%] w-[59%]">
                  <Text
                    className="font-semibold mt-[3px] text-left text-white_A700 w-[auto]"
                    variant="body61"
                  >
                    Invest with GitHub Sponsors
                  </Text>
                  <Img
                    src="images/img_svg.svg"
                    className="h-[20px] mt-[2px] w-[20px]"
                    alt="svg Three"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[50%]">
                <div className="md:h-[126px] h-[456px] sm:pl-[20px] pl-[36px] relative w-[100%]">
                  <div className="absolute bg-gray_902 border-[1px] border-bluegray_904 border-solid h-[149px] md:h-[58px] left-[8%] p-[14px] rounded-[6px] shadow-bs7 top-[0] w-[29%]">
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
                  <div className="absolute bg-gray_902 border-[1px] border-bluegray_904 border-solid md:h-[58px] h-[98px] inset-x-[0] mx-[auto] rounded-[6px] shadow-bs7 top-[0] w-[29%]">
                    <div className="absolute flex items-center justify-start pb-[10.78px] pl-[1.04px] pr-[1.86px] pt-[10.86px] right-[20%] top-[0] w-[auto]">
                      <Text
                        className="font-normal not-italic text-blue_50_7f text-left w-[auto]"
                        variant="body78"
                      >
                        sindresorhus
                      </Text>
                    </div>
                    <Button
                      className="absolute bg-gray_911 border-[1px] border-gray_100_19 border-solid bottom-[13%] flex items-center justify-center min-w-[111px] pb-[9.18px] pt-[9.16px] px-[14.11px] right-[9%] rounded-[6px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_computer.svg"
                          className="mr-[4px] text-center right-[2%] absolute"
                          alt="computer"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-bluegray_103 text-center">
                        Sponsor
                      </div>
                    </Button>
                  </div>
                  <div className="absolute bg-gray_902 border-[1px] border-bluegray_904 border-solid flex items-end justify-start pb-[14px] px-[14px] right-[6%] rounded-[6px] shadow-bs7 top-[0] w-[29%]">
                    <Button
                      className="bg-gray_911 border-[1px] border-gray_100_19 border-solid flex items-center justify-center min-w-[111px] mr-[3px] pb-[9.18px] pt-[9.16px] px-[14.11px] rounded-[6px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_computer.svg"
                          className="mr-[4px] text-center"
                          alt="computer"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-bluegray_103 text-center">
                        Sponsor
                      </div>
                    </Button>
                  </div>
                  <div className="absolute bg-gray_902 border-[1px] border-bluegray_904 border-solid bottom-[18%] h-[215px] md:h-[58px] left-[15%] p-[14px] rounded-[6px] shadow-bs7 w-[29%]">
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
                  <div className="absolute bg-gray_902 border-[1px] border-bluegray_904 border-solid h-[215px] md:h-[58px] p-[14px] right-[27%] rounded-[6px] shadow-bs7 top-[23%] w-[29%]">
                    <div className="absolute bottom-[26%] flex items-center justify-start pb-[9.39px] pl-[1.04px] pr-[2.2px] pt-[8.86px] right-[24%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-blue_50_7f text-left w-[auto]"
                        variant="body78"
                      >
                        Homebrew
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
                  <div className="absolute bg-gray_902 border-[1px] border-bluegray_904 border-solid h-[215px] md:h-[58px] pl-[14px] py-[14px] right-[0] rounded-[6px] shadow-bs7 top-[12%] w-[26%]">
                    <div className="absolute bottom-[25%] flex items-start justify-start pb-[12.99px] pl-[1.04px] pr-[5.57px] pt-[12.86px] right-[6%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-blue_50_7f text-left w-[auto]"
                        variant="body78"
                      >
                        CommandPost
                      </Text>
                    </div>
                    <Button
                      className="absolute bg-gray_911 border-[1px] border-gray_100_19 border-solid bottom-[7%] flex items-center justify-center min-w-[109px] pb-[9.18px] pt-[9.16px] px-[14.11px] right-[0] rounded-[6px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_computer.svg"
                          className="mr-[4px] text-center right-[2%] absolute"
                          alt="computer"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-bluegray_103 text-center">
                        Sponsor
                      </div>
                    </Button>
                  </div>
                  <div className="absolute bg-gray_902 border-[1px] border-bluegray_904 border-solid bottom-[0] h-[75px] left-[24%] rounded-[6px] shadow-bs7 w-[29%]"></div>
                  <div className="absolute bg-gray_902 border-[1px] border-bluegray_904 border-solid bottom-[0] h-[126px] right-[17%] rounded-[6px] shadow-bs7 w-[29%]"></div>
                  <div className="absolute bg-gray_902 border-[1px] border-bluegray_904 border-solid bottom-[0] h-[177px] md:h-[34px] sm:pl-[20px] md:pl-[40px] pl-[52px] pt-[52px] right-[0] rounded-[6px] shadow-bs7 w-[16%]">
                    <div className="absolute bottom-[14%] flex items-end justify-start pb-[2.92px] pl-[1.04px] pr-[3.64px] pt-[2.86px] right-[0] w-[auto]">
                      <Text
                        className="font-normal h-[17px] not-italic text-blue_50_7f text-left w-[auto]"
                        variant="body78"
                      >
                        curl
                      </Text>
                    </div>
                    <div className="absolute bg-gray_911 border-[1px] border-gray_100_19 border-solid bottom-[0] flex items-end justify-end pb-[9.18px] pt-[9.16px] px-[14.11px] right-[0] rounded-[6px] w-[auto]">
                      <div className="flex flex-row gap-[5px] items-end justify-end w-[100%]">
                        <Img
                          src="images/img_computer.svg"
                          className="h-[7px] mt-[18px] w-[auto]"
                          alt="computer"
                        />
                        <Text
                          className="font-medium mt-[9px] text-bluegray_103 text-center w-[auto]"
                          variant="body78"
                        >
                          Sponsor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-[217px] pl-[9px] w-[100%]">
          <footer className="bg-gray_907 flex items-center justify-center md:px-[20px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[868px] items-center justify-center mt-[112px] w-[100%]">
              <div className="flex flex-col items-center justify-start pt-[3px] px-[3px] md:w-[100%] w-[86%]">
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
                  Whether you’re scaling your startup or just learning how to
                  code, GitHub is your home. Join the world’s largest developer
                  platform to build the innovations that empower humanity. Let’s
                  build from here.
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
                      alt="svg Four"
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
                      alt="svg Five"
                    />
                  </div>
                </div>
              </div>
              <Img
                src="images/img_svg_gray_907_35x1503.png"
                className="h-[35px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                alt="svg Six"
              />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LandoOnePage;
