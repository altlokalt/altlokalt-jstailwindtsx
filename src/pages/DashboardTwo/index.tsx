import React from "react";

import { Text, Img, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const DashboardTwoPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_216 flex font-montserrat items-center justify-end mx-[auto] sm:pr-[20px] pr-[38px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between max-w-[1582px] mx-[auto] md:px-[20px] w-[100%]">
          <aside className="flex flex-col md:hidden justify-start w-[94px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex flex-col gap-[47px] items-center justify-center p-[16px] shadow-bs115 w-[100%]">
                <div className="flex flex-row items-end justify-center mt-[36px] md:w-[100%] w-[40px]">
                  <Text
                    className="font-normal font-poetsenone not-italic text-center text-gray_863 tracking-[-0.64px] w-[auto]"
                    variant="body35"
                  >
                    N
                  </Text>
                  <Text
                    className="font-bold font-montserrat h-[22px] mb-[2px] mt-[14px] text-gray_654 text-left tracking-[-0.36px] w-[auto]"
                    variant="body64"
                  >
                    FT
                  </Text>
                </div>
                <Img
                  src="images/img_menubar.svg"
                  className="h-[475px] mb-[360px] w-[auto]"
                  alt="MenuBar"
                />
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="flex-1 font-medium p-[0] text-[14px] placeholder:text-gray_654 text-gray_654 text-left w-[100%]"
                wrapClassName="bg-white_A700 flex md:w-[100%] pl-[18px] pr-[35px] py-[17px] rounded-[27px] sm:pr-[20px] sm:w-[100%] w-[47%]"
                name="Search"
                placeholder="Search Artwork"
                prefix={
                  <Img
                    src="images/img_search_gray_654.svg"
                    className="cursor-pointer mr-[16px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#828282"
                      className="cursor-pointer ml-[10px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
              <Text
                className="font-semibold md:ml-[0] ml-[114px] md:mt-[0] mt-[18px] text-black_919 text-left tracking-[-0.16px] w-[auto]"
                variant="body69"
              >
                Monday. 6 September 2021
              </Text>
              <div className="flex md:flex-1 flex-row gap-[28px] items-center justify-center md:ml-[0] ml-[187px] md:w-[100%] w-[14%]">
                <Img
                  src="images/img_clock_gray_400.svg"
                  className="h-[54px] w-[54px]"
                  alt="clock"
                />
                <Text
                  className="font-semibold text-black_919 text-left tracking-[-0.20px] w-[auto]"
                  variant="body60"
                >
                  Hi, Edward!
                </Text>
              </div>
              <Img
                src="images/img_iconnotification.svg"
                className="h-[32px] md:ml-[0] ml-[27px] md:mt-[0] mt-[11px] w-[32px]"
                alt="IconNotification"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[45px] md:w-[100%] w-[99%]">
              <div className="h-[320px] relative md:w-[100%] w-[51%]">
                <div className="absolute bg-gray_863 flex h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[24px] sm:px-[20px] rounded-[27px] w-[95%]">
                  <div className="flex flex-col items-center justify-start my-[18px] md:w-[100%] w-[55%]">
                    <Text
                      className="font-bold leading-[48.00px] text-center text-white_A700 tracking-[-0.32px] w-[100%]"
                      variant="body35"
                    >
                      Sell & Buy NFT Digital Artworks
                    </Text>
                    <Text
                      className="font-medium leading-[28.00px] mt-[4px] text-center text-gray_654 sm:w-[100%] w-[89%]"
                      variant="body78"
                    >
                      Create and sell your own collectible and become hte
                      richest NFT in the world{" "}
                    </Text>
                    <Button className="bg-white_A700 cursor-pointer font-bold min-w-[180px] mt-[16px] py-[17px] rounded-[27px] text-[16px] text-black_919 text-center w-[auto]">
                      Explore Now
                    </Button>
                  </div>
                </div>
                <Img
                  src="images/img_images.svg"
                  className="absolute h-[265px] inset-y-[0] my-[auto] right-[0] w-[auto]"
                  alt="Images"
                />
              </div>
              <div className="md:h-[105px] h-[320px] relative md:w-[100%] w-[45%]">
                <div className="h-[320px] md:h-[92px] m-[auto] w-[100%]">
                  <div className="h-[320px] md:h-[83px] m-[auto] w-[100%]">
                    <div className="absolute h-[320px] md:h-[83px] inset-[0] justify-center m-[auto] w-[100%]">
                      <div className="absolute bg-white_A700 flex flex-col inset-y-[0] left-[0] my-[auto] p-[30px] sm:px-[20px] rounded-[24px] shadow-bs116 sm:w-[100%] w-[94%]">
                        <div className="flex flex-col w-[49%]">
                          <div className="h-[106px] md:h-[83px] mx-[auto] w-[100%]">
                            <Text
                              className="absolute font-bold left-[0] text-black_919 text-left top-[0] tracking-[-0.24px] w-[auto]"
                              variant="body48"
                            >
                              Top Sellers
                            </Text>
                            <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-end justify-start mx-[auto] w-[100%]">
                              <div className="h-[83px] relative w-[17%]">
                                <div className="flex flex-col gap-[20px] items-start justify-start mb-[-14.3px] ml-[2px] w-[42%] z-[1]">
                                  <div className="bg-bluegray_919 h-[15px] outline outline-[1px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                                  <Text
                                    className="font-semibold text-left text-white_A700 tracking-[-0.12px] w-[auto]"
                                    variant="body87"
                                  >
                                    1
                                  </Text>
                                </div>
                                <div className="bg-gray_400 h-[48px] mt-[auto] mx-[auto] rounded-[50%] w-[48px]"></div>
                              </div>
                              <div className="flex flex-col gap-[6px] items-start justify-start ml-[28px] mt-[40px] w-[auto]">
                                <Text
                                  className="font-bold text-black_919 text-left tracking-[-0.14px] w-[auto]"
                                  variant="body78"
                                >
                                  Esther Howard
                                </Text>
                                <Text
                                  className="font-medium text-gray_654 text-left tracking-[-0.14px] w-[auto]"
                                  variant="body78"
                                >
                                  0.0000321 BTC
                                </Text>
                              </div>
                              <Button className="bg-gray_654 flex h-[32px] items-center justify-center mb-[8px] ml-[69px] mt-[43px] p-[8px] rounded-[50%] w-[32px]">
                                <Img
                                  src="images/img_lightbulb_white_a700_32x32.svg"
                                  className="h-[16px]"
                                  alt="lightbulb"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-row items-end justify-start mt-[-22.52px] mx-[auto] w-[100%] z-[1]">
                            <div className="h-[94px] relative w-[17%]">
                              <div className="flex flex-col gap-[30px] items-start justify-start mb-[-14.23px] ml-[3px] w-[42%] z-[1]">
                                <div className="bg-gray_863 h-[15px] outline outline-[1px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                                <Text
                                  className="font-semibold text-center text-white_A700 tracking-[-0.12px] w-[auto]"
                                  variant="body87"
                                >
                                  2
                                </Text>
                              </div>
                              <div className="bg-gray_400 h-[48px] mt-[auto] mx-[auto] rounded-[50%] w-[48px]"></div>
                            </div>
                            <div className="flex flex-col gap-[5px] items-start justify-start ml-[28px] mt-[52px] w-[auto]">
                              <Text
                                className="font-bold text-black_919 text-left tracking-[-0.14px] w-[auto]"
                                variant="body78"
                              >
                                Guy Hawkins
                              </Text>
                              <Text
                                className="font-medium text-gray_654 text-left tracking-[-0.14px] w-[auto]"
                                variant="body78"
                              >
                                0.0000320 BTC
                              </Text>
                            </div>
                            <Button className="bg-gray_457 flex h-[32px] items-center justify-center mb-[8px] ml-[71px] mt-[54px] p-[8px] rounded-[50%] w-[32px]">
                              <Img
                                src="images/img_favorite_white_a700_32x32.svg"
                                className="h-[16px]"
                                alt="favorite"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-row items-end justify-start mb-[8px] mt-[-33.92px] w-[49%] z-[1]">
                          <div className="h-[105px] relative w-[17%]">
                            <div className="flex flex-col gap-[41px] items-start justify-start mb-[-13.36px] ml-[3px] w-[42%] z-[1]">
                              <div className="bg-gray_654 h-[15px] outline outline-[1px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                              <Text
                                className="font-semibold text-center text-white_A700 tracking-[-0.12px] w-[auto]"
                                variant="body87"
                              >
                                3
                              </Text>
                            </div>
                            <div className="bg-gray_400 h-[48px] mt-[auto] mx-[auto] rounded-[50%] w-[48px]"></div>
                          </div>
                          <div className="flex flex-col gap-[6px] items-start justify-start ml-[28px] mt-[62px] w-[auto]">
                            <Text
                              className="font-bold text-black_919 text-left tracking-[-0.14px] w-[auto]"
                              variant="body78"
                            >
                              Robert Fox
                            </Text>
                            <Text
                              className="font-medium text-gray_654 text-left tracking-[-0.14px] w-[auto]"
                              variant="body78"
                            >
                              0.0000319 BTC
                            </Text>
                          </div>
                          <Button className="bg-gray_654 flex h-[32px] items-center justify-center mb-[8px] ml-[76px] mt-[65px] p-[8px] rounded-[50%] w-[32px]">
                            <Img
                              src="images/img_lightbulb_white_a700_32x32.svg"
                              className="h-[16px]"
                              alt="lightbulb One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="absolute h-[32px] right-[0] top-[8%] w-[14%]">
                        <div className="absolute border-[1px] border-black_900_0c border-solid flex h-[100%] inset-y-[0] items-start justify-end left-[0] my-[auto] p-[8px] rounded-[8px] w-[auto]">
                          <Text
                            className="font-medium md:ml-[0] ml-[3px] text-black_919 text-right w-[auto]"
                            variant="body87"
                          >
                            View All
                          </Text>
                        </div>
                        <Img
                          src="images/img_arrowright_black_919.svg"
                          className="absolute bottom-[22%] h-[16px] right-[0] w-[16px]"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                    <div className="absolute flex flex-row items-end justify-start right-[0] top-[17%] w-[46%]">
                      <div className="md:h-[50px] h-[83px] relative w-[18%]">
                        <div className="absolute bg-gray_400 bottom-[0] h-[48px] inset-x-[0] mx-[auto] rounded-[50%] w-[48px]"></div>
                        <div className="absolute flex flex-col gap-[20px] items-start justify-start left-[0] top-[0] w-[42%]">
                          <div className="bg-gray_457 h-[15px] outline outline-[1px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                          <Text
                            className="font-semibold text-center text-white_A700 tracking-[-0.12px] w-[auto]"
                            variant="body87"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[6px] items-start justify-start ml-[27px] mt-[39px] w-[auto]">
                        <Text
                          className="font-bold text-black_919 text-left tracking-[-0.14px] w-[auto]"
                          variant="body78"
                        >
                          Esther Howard
                        </Text>
                        <Text
                          className="font-medium text-gray_654 text-left tracking-[-0.14px] w-[auto]"
                          variant="body78"
                        >
                          0.0000231 BTC
                        </Text>
                      </div>
                      <Button className="bg-gray_654 flex h-[32px] items-center justify-center mb-[8px] ml-[71px] mt-[43px] p-[8px] rounded-[50%] w-[32px]">
                        <Img
                          src="images/img_lightbulb_white_a700_32x32.svg"
                          className="h-[16px]"
                          alt="lightbulb Two"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute flex flex-row h-[max-content] inset-y-[0] items-end justify-start my-[auto] right-[0] w-[46%]">
                    <div className="md:h-[61px] h-[92px] relative w-[18%]">
                      <div className="absolute bg-gray_400 bottom-[0] h-[48px] inset-x-[0] mx-[auto] rounded-[50%] w-[48px]"></div>
                      <div className="absolute flex flex-col gap-[31px] items-start justify-start left-[0] top-[0] w-[42%]">
                        <div className="bg-gray_457 h-[15px] outline outline-[1px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                        <Text
                          className="font-semibold text-center text-white_A700 tracking-[-0.12px] w-[auto]"
                          variant="body87"
                        >
                          5
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-start ml-[27px] mt-[50px] w-[auto]">
                      <Text
                        className="font-bold text-black_919 text-left tracking-[-0.14px] w-[auto]"
                        variant="body78"
                      >
                        Marvin McKinney
                      </Text>
                      <Text
                        className="font-medium text-gray_654 text-left tracking-[-0.14px] w-[auto]"
                        variant="body78"
                      >
                        0.0000131 BTC
                      </Text>
                    </div>
                    <Button className="bg-gray_654 flex h-[32px] items-center justify-center mb-[8px] ml-[53px] mt-[52px] p-[8px] rounded-[50%] w-[32px]">
                      <Img
                        src="images/img_lightbulb_white_a700_32x32.svg"
                        className="h-[16px]"
                        alt="lightbulb Three"
                      />
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-[12%] flex flex-row items-end justify-start right-[0] w-[46%]">
                  <div className="h-[105px] md:h-[71px] relative w-[18%]">
                    <div className="absolute bg-gray_400 bottom-[0] h-[48px] inset-x-[0] mx-[auto] rounded-[50%] w-[48px]"></div>
                    <div className="absolute flex flex-col gap-[41px] items-start justify-start left-[0] top-[0] w-[42%]">
                      <div className="bg-gray_457 h-[15px] outline outline-[1px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                      <Text
                        className="font-semibold text-center text-white_A700 tracking-[-0.12px] w-[auto]"
                        variant="body87"
                      >
                        6
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start ml-[27px] mt-[63px] w-[auto]">
                    <Text
                      className="font-bold text-black_919 text-left tracking-[-0.14px] w-[auto]"
                      variant="body78"
                    >
                      Courtney Henry
                    </Text>
                    <Text
                      className="font-medium mt-[4px] text-gray_654 text-left tracking-[-0.14px] w-[auto]"
                      variant="body78"
                    >
                      0.0000124 BTC
                    </Text>
                  </div>
                  <Button className="bg-gray_457 flex h-[32px] items-center justify-center mb-[8px] ml-[64px] mt-[65px] p-[8px] rounded-[50%] w-[32px]">
                    <Img
                      src="images/img_favorite_white_a700_32x32.svg"
                      className="h-[16px]"
                      alt="favorite One"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[42px] items-center justify-between mt-[36px] w-[100%]">
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[52%]">
                <div className="flex flex-col gap-[28px] items-center justify-start w-[100%]">
                  <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                    <Text
                      className="font-bold mt-[2px] text-black_919 text-left tracking-[-0.24px] w-[auto]"
                      variant="body48"
                    >
                      Trending NFT
                    </Text>
                    <div className="h-[32px] relative w-[15%]">
                      <div className="absolute border-[1px] border-black_900_0c border-solid flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[8px] rounded-[8px] w-[auto]">
                        <Text
                          className="font-medium mr-[3px] text-black_919 text-right w-[auto]"
                          variant="body87"
                        >
                          View More
                        </Text>
                      </div>
                      <Img
                        src="images/img_arrowright_black_919.svg"
                        className="absolute bottom-[22%] h-[16px] right-[0] w-[16px]"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[48px] grid md:grid-cols-1 grid-cols-2 justify-center w-[99%]"
                    orientation="horizontal"
                  >
                    <div className="h-[378px] relative w-[100%]">
                      <div className="absolute bg-white_A700 flex flex-col h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[12px] rounded-[24px] w-[95%]">
                        <Img
                          src="images/img_image_gray_400.svg"
                          className="h-[261px] w-[auto]"
                          alt="Image Seven"
                        />
                        <Text
                          className="font-bold mt-[12px] text-black_919 text-left tracking-[-0.16px] w-[auto]"
                          variant="body69"
                        >
                          Full Abstract
                        </Text>
                        <div className="flex flex-row gap-[12px] items-center justify-start mb-[7px] mt-[2px] md:w-[100%] w-[45%]">
                          <div className="bg-gray_400 h-[32px] my-[4px] rounded-[50%] w-[32px]"></div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-black_919 text-left tracking-[-0.12px] w-[auto]"
                              variant="body87"
                            >
                              Esther Howard
                            </Text>
                            <Text
                              className="font-medium text-gray_654 text-left tracking-[-0.12px] w-[auto]"
                              variant="body87"
                            >
                              Creator
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button className="absolute bg-white_A700 bottom-[5%] flex h-[40px] items-center justify-center p-[8px] right-[0] rounded-[12px] shadow-bs117 w-[40px]">
                        <Img
                          src="images/img_location_bluegray_919.svg"
                          className="h-[24px]"
                          alt="location"
                        />
                      </Button>
                    </div>
                    <div className="h-[378px] relative w-[100%]">
                      <div className="absolute bg-white_A700 flex flex-col h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[12px] rounded-[24px] w-[95%]">
                        <Img
                          src="images/img_image_gray_400.svg"
                          className="h-[261px] w-[auto]"
                          alt="Image Eight"
                        />
                        <Text
                          className="font-bold mt-[12px] text-black_919 text-left tracking-[-0.16px] w-[auto]"
                          variant="body69"
                        >
                          Lovely Abstract
                        </Text>
                        <div className="flex flex-row gap-[12px] items-center justify-start mb-[7px] mt-[2px] md:w-[100%] w-[42%]">
                          <div className="bg-gray_400 h-[32px] my-[4px] rounded-[50%] w-[32px]"></div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-black_919 text-left tracking-[-0.12px] w-[auto]"
                              variant="body87"
                            >
                              Guy Hawkins
                            </Text>
                            <Text
                              className="font-medium text-gray_654 text-left tracking-[-0.12px] w-[auto]"
                              variant="body87"
                            >
                              Creator
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button className="absolute bg-white_A700 bottom-[5%] flex h-[40px] items-center justify-center p-[8px] right-[0] rounded-[12px] shadow-bs117 w-[40px]">
                        <Img
                          src="images/img_location_bluegray_919.svg"
                          className="h-[24px]"
                          alt="location One"
                        />
                      </Button>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[46%]">
                <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                  <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                    <Text
                      className="font-bold text-black_919 text-left tracking-[-0.24px] w-[auto]"
                      variant="body48"
                    >
                      Live Auctions
                    </Text>
                    <div className="h-[32px] relative w-[17%]">
                      <div className="absolute border-[1px] border-black_900_0c border-solid flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[8px] rounded-[8px] w-[auto]">
                        <Text
                          className="font-medium md:ml-[0] ml-[5px] text-black_919 text-right w-[auto]"
                          variant="body87"
                        >
                          View More
                        </Text>
                      </div>
                      <Img
                        src="images/img_arrowright_black_919.svg"
                        className="absolute bottom-[22%] h-[16px] right-[0] w-[16px]"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                  <div className="md:h-[375px] h-[378px] relative md:w-[100%] w-[96%]">
                    <div className="absolute bg-white_A700 flex flex-col gap-[30px] h-[100%] inset-y-[0] justify-start left-[0] my-[auto] p-[25px] sm:px-[20px] rounded-[24px] w-[95%]">
                      <div className="md:h-[251px] h-[254px] mr-[264px] relative w-[51%]">
                        <div className="absolute bg-white_A700 flex flex-col h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[9px] rounded-[24px] shadow-bs118 w-[94%]">
                          <Img
                            src="images/img_image_gray_400.svg"
                            className="h-[150px] w-[auto]"
                            alt="Image Nine"
                          />
                          <Text
                            className="font-bold mt-[13px] text-black_919 text-left tracking-[-0.14px] w-[auto]"
                            variant="body78"
                          >
                            Fullcolor Abstract
                          </Text>
                          <div className="flex flex-row gap-[24px] items-start justify-start mb-[6px] mt-[11px] md:w-[100%] w-[50%]">
                            <div className="bg-gray_400 h-[32px] mb-[3px] rounded-[50%] w-[32px]"></div>
                            <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-black_919 text-left tracking-[-0.11px] w-[auto]"
                                variant="body91"
                              >
                                Robert Fox
                              </Text>
                              <Text
                                className="font-medium text-gray_654 text-left tracking-[-0.11px] w-[auto]"
                                variant="body91"
                              >
                                Creator
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_lock_white_a700.svg"
                          className="absolute bottom-[6%] h-[40px] right-[0] w-[auto]"
                          alt="lock"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-end mb-[2px] ml-[auto] md:w-[100%] w-[36%]">
                        <div className="flex items-center justify-start w-[23%]">
                          <Button className="bg-gray_111 cursor-pointer font-medium min-w-[44px] px-[12px] py-[8px] rounded-[12px] text-[16px] text-black_919 text-center w-[auto]">
                            02
                          </Button>
                        </div>
                        <Text
                          className="font-medium ml-[19px] mt-[5px] text-black_919 text-center w-[auto]"
                          variant="body78"
                        >
                          :
                        </Text>
                        <div className="flex items-center justify-start ml-[8px] w-[23%]">
                          <Button className="bg-gray_111 cursor-pointer font-medium min-w-[44px] px-[12px] py-[8px] rounded-[12px] text-[16px] text-black_919 text-center w-[auto]">
                            28
                          </Button>
                        </div>
                        <Text
                          className="font-medium ml-[8px] mt-[5px] text-black_919 text-center w-[auto]"
                          variant="body78"
                        >
                          :
                        </Text>
                        <div className="flex items-center justify-start ml-[19px] w-[43px]">
                          <Button className="bg-gray_111 cursor-pointer font-medium px-[12px] py-[8px] rounded-[12px] text-[16px] text-black_919 text-center w-[43px]">
                            25
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex right-[0] top-[7%] w-[46%]">
                      <div className="bg-white_A700 flex flex-col items-start justify-start my-[auto] p-[9px] rounded-[24px] shadow-bs118 w-[92%]">
                        <Img
                          src="images/img_image_gray_400.svg"
                          className="h-[150px] w-[auto]"
                          alt="Image Eleven"
                        />
                        <Text
                          className="font-bold mt-[13px] text-black_919 text-left tracking-[-0.14px] w-[auto]"
                          variant="body78"
                        >
                          Blue & Yellow Abstract
                        </Text>
                        <div className="flex flex-row gap-[23px] items-start justify-start mb-[6px] mt-[11px] md:w-[100%] w-[59%]">
                          <div className="bg-gray_400 h-[32px] mb-[3px] rounded-[50%] w-[32px]"></div>
                          <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-black_919 text-left tracking-[-0.11px] w-[auto]"
                              variant="body91"
                            >
                              Esther Howard
                            </Text>
                            <Text
                              className="font-medium text-gray_654 text-left tracking-[-0.11px] w-[auto]"
                              variant="body91"
                            >
                              Creator
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-white_A700 flex h-[40px] items-center justify-center mb-[15px] ml-[-15px] mt-[auto] p-[8px] rounded-[12px] shadow-bs117 w-[40px] z-[1]">
                        <Img
                          src="images/img_location_bluegray_919.svg"
                          className="h-[24px]"
                          alt="location Two"
                        />
                      </Button>
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

export default DashboardTwoPage;
