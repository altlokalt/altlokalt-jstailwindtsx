import React from "react";

import { Button, Img, Text, List, CheckBox, Input, Switch } from "components";

const Homepage2DarkPage: React.FC = () => {
  function handleNavigate29() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate30() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div
        className="bg-cover bg-gray_930 bg-no-repeat flex font-dmsans h-[6907px] items-start justify-start mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_0104homepage2dark.png')" }}
      >
        <div className="flex flex-col items-end justify-start md:px-[20px] w-[100%]">
          <div className="flex flex-col items-center justify-start md:w-[100%] w-[95%]">
            <header className="flex items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[19px] w-[100%]">
                <div className="flex items-center justify-start md:ml-[0] ml-[235px] w-[auto]">
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Button className="bg-indigo_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_lightbulb.svg"
                        className=""
                        alt="lightbulb"
                      />
                    </Button>
                    <Text
                      className="capitalize font-bold text-left text-white_A700 w-[auto]"
                      variant="body30"
                    >
                      Binasea
                    </Text>
                  </div>
                </div>
                <ul className="flex sm:flex-1 sm:flex-col flex-row gap-[40px] sm:hidden items-center justify-start md:ml-[0] ml-[220px] sm:w-[100%] w-[auto] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[12%] my-[1px]">
                    <div className="flex flex-row gap-[8px] items-center justify-between">
                      <a
                        className="capitalize cursor-pointer font-bold text-[18px] text-left text-white_A700 w-[auto]"
                        href="javascript:"
                      >
                        Home
                      </a>
                      <Img
                        src="images/img_arrowdown_10x10.svg"
                        className="h-[10px] w-[10px]"
                        alt="arrowdown"
                      />
                    </div>
                  </li>
                  <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[15%]">
                    <div className="flex flex-row gap-[8px] items-center justify-center pt-[2px]">
                      <a
                        className="capitalize cursor-pointer font-bold text-[18px] text-left text-white_A700 w-[auto]"
                        href="javascript:"
                      >
                        Explore
                      </a>
                      <Img
                        src="images/img_arrowdown_10x10.svg"
                        className="h-[10px] w-[10px]"
                        alt="arrowdown One"
                      />
                    </div>
                  </li>
                  <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[12%]">
                    <div className="flex flex-row gap-[8px] items-center justify-center pt-[2px]">
                      <a
                        className="capitalize cursor-pointer font-bold text-[18px] text-left text-white_A700 w-[auto]"
                        href="javascript:"
                      >
                        Pages
                      </a>
                      <Img
                        src="images/img_arrowdown_10x10.svg"
                        className="h-[10px] w-[10px]"
                        alt="arrowdown Two"
                      />
                    </div>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                    <a
                      className="capitalize cursor-pointer font-bold text-[18px] text-left text-white_A700"
                      href="javascript:"
                    >
                      Create
                    </a>
                  </li>
                  <li className="mt-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      className="capitalize cursor-pointer font-bold text-[18px] text-left text-white_A700"
                      href="javascript:"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                    <a
                      className="capitalize cursor-pointer font-bold text-[18px] text-left text-white_A700"
                      href="javascript:"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="flex flex-row gap-[12px] items-start justify-start md:ml-[0] ml-[97px] w-[auto]">
                  <Button className="bg-gray_931 border-[1px] border-bluegray_918 border-solid cursor-pointer font-bold min-w-[192px] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 w-[auto]">
                    Connect Wallet
                  </Button>
                  <Button className="bg-gray_931 border-[1px] border-bluegray_918 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[50%] w-[48px]">
                    <Img
                      src="images/img_car_gray_408.svg"
                      className="h-[24px]"
                      alt="car"
                    />
                  </Button>
                  <Button className="bg-gray_931 border-[1px] border-bluegray_918 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[50%] w-[48px]">
                    <Img
                      src="images/img_subtract.svg"
                      className=""
                      alt="Subtract"
                    />
                  </Button>
                </div>
              </div>
            </header>
            <div className="h-[732px] relative md:w-[100%] w-[74%]">
              <Img
                src="images/img_background.svg"
                className="absolute h-[732px] inset-y-[0] my-[auto] right-[7%] w-[auto]"
                alt="Background"
              />
              <div className="absolute bottom-[17%] flex flex-col md:gap-[40px] gap-[60px] items-start justify-start left-[0] w-[45%]">
                <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                  <Text
                    className="font-poppins leading-[80.00px] text-black_902 text-left w-[100%]"
                    variant="body3"
                  >
                    <span className="md:text-[48px] text-white_A700 text-[70px] font-dmsans font-bold">
                      Defind, Collect and Sell Super
                    </span>
                    <span className="md:text-[48px] text-gray_930 text-[70px] font-dmsans font-bold">
                      {" "}
                    </span>
                    <span className="md:text-[48px] text-white_A700 text-[70px] font-dmsans font-bold">
                      Rate NFT
                    </span>
                    <span className="md:text-[48px] text-black_902 text-[70px] font-dmsans font-bold">
                      {" "}
                    </span>
                  </Text>
                  <Text
                    className="font-dmsans font-normal leading-[26.00px] not-italic text-gray_410 text-left w-[100%]"
                    variant="body60"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam.
                  </Text>
                </div>
                <div className="flex flex-row gap-[12px] items-center justify-start md:w-[100%] w-[57%]">
                  <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[170px] py-[13px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                    Explore now
                  </Button>
                  <Button className="border-[2px] border-solid border-white_A700 cursor-pointer font-bold min-w-[170px] py-[13px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                    Creat
                  </Button>
                </div>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat bottom-[12%] flex h-[508px] items-center justify-end pt-[360px] right-[0] shadow-bs28 w-[32%]"
                style={{ backgroundImage: "url('images/defaultNoData.png')" }}
              >
                <div className="bg-black_900_7f flex flex-col gap-[5px] items-start justify-start p-[12px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <Img
                    src="images/img_avatar.svg"
                    className="h-[36px] md:ml-[0] ml-[12px] w-[auto]"
                    alt="Avatar"
                  />
                  <div className="flex flex-row items-end justify-between mb-[12px] md:ml-[0] ml-[12px] md:w-[100%] w-[95%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start mt-[15px] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body60"
                      >
                        “The Monkey sad ”
                      </Text>
                      <Text
                        className="capitalize font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body78"
                      >
                        @SolvadorDali
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[9px] items-end justify-start w-[31%]">
                      <Text
                        className="capitalize font-normal not-italic text-left text-white_A700_90 w-[auto]"
                        variant="body78"
                      >
                        Current bid
                      </Text>
                      <Button className="bg-white_A700 cursor-pointer font-bold min-w-[120px] mr-[2px] px-[12px] py-[8px] rounded-[16px] text-[20px] text-center text-indigo_A700 w-[auto]">
                        1.56 wETH
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[107px] md:gap-[40px] justify-start md:w-[100%] w-[76%]">
              <Text
                className="capitalize font-bold md:ml-[0] ml-[26px] text-left text-white_A700 w-[auto]"
                variant="body30"
              >
                All categories
              </Text>
              <Img
                src="images/img_nextprev.svg"
                className="h-[40px] mb-[70px] w-[auto]"
                alt="NextPrev"
              />
            </div>
          </div>
          <div className="mt-[99px] overflow-auto overflow-x-auto w-[100%]">
            <div className="flex flex-col gap-[40px] items-center justify-start w-[auto]">
              <div className="flex flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[67%]">
                <Text
                  className="capitalize font-bold text-left text-white_A700 w-[auto]"
                  variant="body30"
                >
                  Live Auctions
                </Text>
                <div className="flex flex-row items-end justify-evenly w-[auto]">
                  <Text
                    className="font-bold mb-[4px] mt-[8px] text-left text-white_A700 w-[auto]"
                    variant="body60"
                  >
                    Explore
                  </Text>
                  <Img
                    src="images/img_arrowright_white_a700_40x40.svg"
                    className="h-[40px] w-[40px]"
                    alt="arrowright"
                  />
                </div>
              </div>
              <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start md:w-[100%] w-[auto]">
                <div className="bg-gradient24  h-[512px] p-[20px] rounded-[15px] w-[100%]"></div>
                <div className="bg-gradient24  h-[512px] p-[20px] rounded-[15px] w-[100%]"></div>
                <div className="bg-gradient24  h-[512px] p-[20px] rounded-[15px] w-[100%]"></div>
                <div className="bg-gradient24  h-[512px] p-[20px] rounded-[15px] w-[100%]"></div>
                <div className="bg-gradient24  h-[512px] p-[20px] rounded-[15px] w-[100%]"></div>
              </div>
              <Img
                src="images/img_nextpre.svg"
                className="h-[16px] w-[148px]"
                alt="Nextpre"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[28px] items-center justify-start mt-[100px] md:w-[100%] w-[70%]">
            <Text
              className="capitalize font-bold text-left text-white_A700 w-[auto]"
              variant="body30"
            >
              Create and sell NFTs
            </Text>
            <div className="flex md:flex-col flex-row gap-[30px] items-end justify-between w-[100%]">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[75%]"
                orientation="horizontal"
              >
                <div className="bg-gradient24  flex items-center justify-start sm:ml-[0] sm:mt-[0] mt-[12px] p-[24px] sm:px-[20px] rounded-[16px] shadow-bs29 w-[100%]">
                  <div className="flex flex-col gap-[14px] items-center justify-start my-[16px] w-[100%]">
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[auto]">
                      <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[11px] rounded-[12px] w-[50px]">
                        <Img
                          src="images/img_volume_white_a700.svg"
                          className="h-[28px]"
                          alt="volume"
                        />
                      </Button>
                      <Text
                        className="font-bold text-center text-white_A700 w-[auto]"
                        variant="body60"
                      >
                        Set up your wallet
                      </Text>
                    </div>
                    <Text
                      className="capitalize font-normal leading-[22.00px] not-italic text-center text-gray_410 w-[100%]"
                      variant="body78"
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient24  border-[2px] border-indigo_A700 border-solid flex items-center justify-start mb-[12px] sm:ml-[0] p-[24px] sm:px-[20px] rounded-[16px] shadow-bs29 w-[100%]">
                  <div className="flex flex-col gap-[16px] items-center justify-start my-[16px] w-[100%]">
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[auto]">
                      <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[11px] rounded-[12px] w-[50px]">
                        <Img
                          src="images/img_settings_white_a700.svg"
                          className="h-[28px]"
                          alt="settings"
                        />
                      </Button>
                      <Text
                        className="font-bold text-center text-white_A700 w-[auto]"
                        variant="body60"
                      >
                        Create Your collection
                      </Text>
                    </div>
                    <Text
                      className="capitalize font-normal leading-[22.00px] not-italic text-center text-gray_410 w-[100%]"
                      variant="body78"
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient24  flex items-center justify-start sm:ml-[0] sm:mt-[0] mt-[12px] p-[24px] sm:px-[20px] rounded-[16px] shadow-bs29 w-[100%]">
                  <div className="flex flex-col gap-[16px] items-center justify-start my-[16px] w-[100%]">
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[auto]">
                      <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[11px] rounded-[12px] w-[50px]">
                        <Img
                          src="images/img_user_white_a700_50x50.svg"
                          className="h-[28px]"
                          alt="user"
                        />
                      </Button>
                      <Text
                        className="font-bold text-center text-white_A700 w-[auto]"
                        variant="body60"
                      >
                        Add Your NFTs
                      </Text>
                    </div>
                    <Text
                      className="capitalize font-normal leading-[22.00px] not-italic text-center text-gray_410 w-[100%]"
                      variant="body78"
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque
                    </Text>
                  </div>
                </div>
              </List>
              <div className="bg-gradient24  flex md:flex-1 items-center justify-start md:mt-[0] mt-[12px] p-[24px] sm:px-[20px] rounded-[16px] shadow-bs29 md:w-[100%] w-[24%]">
                <div className="flex flex-col gap-[16px] items-center justify-start my-[16px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-center justify-start w-[auto]">
                    <div className="bg-indigo_A700 flex h-[50px] items-center justify-start p-[11px] rounded-[12px] w-[50px]">
                      <div className="flex h-[28px] items-center justify-end w-[28px]">
                        <div className="flex h-[25px] items-center justify-start w-[25px]">
                          <Img
                            src="images/img_star2.svg"
                            className="h-[25px] outline outline-[0.5px] outline-white_A700 rounded-bl-[1px] rounded-br-[1px] w-[25px]"
                            alt="StarTwo"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-bold text-center text-white_A700 w-[auto]"
                      variant="body60"
                    >
                      List them for sale
                    </Text>
                  </div>
                  <Text
                    className="capitalize font-normal leading-[22.00px] not-italic text-center text-gray_410 w-[100%]"
                    variant="body78"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[100px] md:gap-[40px] items-center justify-start mt-[100px] md:w-[100%] w-[74%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[99%]">
              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                <Text
                  className="capitalize font-bold text-left text-white_A700 w-[auto]"
                  variant="body30"
                >
                  Hot Picks
                </Text>
                <Img
                  src="images/img_fire.svg"
                  className="h-[32px] w-[32px]"
                  alt="fire"
                />
              </div>
              <div className="h-[1600px] sm:h-[415px] md:h-[831px] mt-[23px] relative w-[100%]">
                <List
                  className="absolute bottom-[0] flex-col gap-[30px] grid inset-x-[0] items-start mx-[auto] w-[auto]"
                  orientation="vertical"
                >
                  <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start my-[0] md:w-[100%] w-[auto]">
                    <div className="bg-gradient24  h-[486px] p-[20px] rounded-[15px] w-[100%]"></div>
                    <div className="bg-gradient24  h-[486px] p-[20px] rounded-[15px] w-[100%]"></div>
                    <div className="bg-gradient24  h-[486px] p-[20px] rounded-[15px] w-[100%]"></div>
                    <div className="bg-gradient24  h-[486px] p-[20px] rounded-[15px] w-[100%]"></div>
                  </div>
                  <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start my-[0] md:w-[100%] w-[auto]">
                    <div className="bg-gradient24  h-[486px] p-[20px] rounded-[15px] w-[100%]"></div>
                    <div className="bg-gradient24  h-[486px] p-[20px] rounded-[15px] w-[100%]"></div>
                    <div className="bg-gradient24  h-[486px] p-[20px] rounded-[15px] w-[100%]"></div>
                    <div className="bg-gradient24  h-[486px] p-[20px] rounded-[15px] w-[100%]"></div>
                  </div>
                  <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start my-[0] md:w-[100%] w-[auto]">
                    <div className="bg-gradient24  h-[486px] p-[20px] rounded-[15px] w-[100%]"></div>
                    <div className="bg-gradient24  h-[486px] p-[20px] rounded-[15px] w-[100%]"></div>
                    <div className="bg-gradient24  h-[486px] p-[20px] rounded-[15px] w-[100%]"></div>
                    <div className="bg-gradient24  h-[486px] p-[20px] rounded-[15px] w-[100%]"></div>
                  </div>
                </List>
                <div className="absolute flex flex-col gap-[8px] inset-x-[0] justify-start mx-[auto] top-[0] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1410px] mr-[49px] w-[100%]">
                    <div className="flex md:flex-1 md:flex-col flex-row gap-[16px] items-center justify-center md:w-[100%] w-[auto]">
                      <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[115px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[1.40px] uppercase w-[auto]">
                        3D model{" "}
                      </Button>
                      <Button className="bg-gray_931 border-[1px] border-gray_707 border-solid cursor-pointer font-bold min-w-[151px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_707 tracking-[1.40px] uppercase w-[auto]">
                        Anime/manga{" "}
                      </Button>
                      <Button className="bg-gray_931 border-[1px] border-gray_707 border-solid cursor-pointer font-bold min-w-[131px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_707 tracking-[1.40px] uppercase w-[auto]">
                        Cyber Punk{" "}
                      </Button>
                      <Button className="bg-gray_931 border-[1px] border-gray_707 border-solid cursor-pointer font-bold min-w-[112px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_707 tracking-[1.40px] uppercase w-[auto]">
                        pixel art{" "}
                      </Button>
                      <Button className="bg-gray_931 border-[1px] border-gray_707 border-solid cursor-pointer font-bold min-w-[84px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_707 tracking-[1.40px] uppercase w-[auto]">
                        music{" "}
                      </Button>
                      <Button className="bg-gray_931 border-[1px] border-gray_707 border-solid cursor-pointer font-bold min-w-[115px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_707 tracking-[1.40px] uppercase w-[auto]">
                        abstract{" "}
                      </Button>
                      <Button className="bg-gray_931 border-[1px] border-gray_707 border-solid cursor-pointer font-bold min-w-[99px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_707 tracking-[1.40px] uppercase w-[auto]">
                        2D Arts{" "}
                      </Button>
                    </div>
                    <Button
                      className="bg-gray_931 border-[1px] border-gray_707 border-solid flex items-center justify-center pl-[20px] pr-[16px] py-[9px] rounded-[21px] text-center"
                      rightIcon={
                        <Img
                          src="images/img_arrowdown_white_a700.svg"
                          className="text-center"
                          alt="arrow_down"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700">
                        Recently create
                      </div>
                    </Button>
                  </div>
                  <div className="flex items-start justify-start md:ml-[0] ml-[1233px] w-[auto]">
                    <div className="bg-gray_931 border-[1px] border-gray_707 border-solid flex flex-col gap-[11px] items-center justify-center p-[8px] rounded-[16px] shadow-bs30 w-[100%]">
                      <div className="flex flex-col justify-start mt-[14px] w-[100%]">
                        <Text
                          className="font-bold md:ml-[0] ml-[12px] text-gray_707 text-left w-[auto]"
                          variant="body69"
                        >
                          Sort by
                        </Text>
                        <div className="flex flex-col gap-[2px] items-start justify-start mt-[4px] w-[auto]">
                          <CheckBox
                            className="font-bold text-[14px] text-left text-white_A700"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Recently added"
                            name="Recentlyadded"
                          ></CheckBox>
                          <div className="flex h-[38px] md:h-[auto] items-center justify-start pl-[12px] pr-[8px] py-[6px] w-[210px]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body78"
                            >
                              Price: Low to Hight
                            </Text>
                          </div>
                          <Input
                            className="font-bold pl-[12px] pr-[8px] py-[6px] text-[14px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                            wrapClassName="bg-gray_707 md:h-[auto] rounded-[6px] sm:h-[auto] w-[210px]"
                            name="PriceHight"
                            placeholder="Price: Hight to Low"
                          ></Input>
                          <div className="flex h-[38px] md:h-[auto] items-center justify-start pl-[12px] pr-[8px] py-[6px] w-[210px]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body78"
                            >
                              Auction ending soon
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[12px] md:w-[100%] w-[89%]">
                        <Text
                          className="font-bold text-gray_707 text-left w-[auto]"
                          variant="body69"
                        >
                          Option
                        </Text>
                        <div className="flex flex-col gap-[2px] items-start justify-start mt-[4px] w-[186px]">
                          <div className="flex flex-row gap-[24px] h-[38px] md:h-[auto] items-center justify-between w-[186px]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body78"
                            >
                              Show lazy minted
                            </Text>
                            <Switch
                              onColor="#3749e8"
                              offColor="#e5e5e5"
                              onHandleColor="#ffffff"
                              offHandleColor="#3749e8"
                              value={true}
                              className="w-[auto]"
                            />
                          </div>
                          <div className="flex flex-row h-[38px] md:h-[auto] items-center justify-between w-[186px]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body78"
                            >
                              Verified only
                            </Text>
                            <Switch
                              onColor="#3749e8"
                              offColor="#e5e5e5"
                              onHandleColor="#ffffff"
                              offHandleColor="#3749e8"
                              value={false}
                              className="w-[auto]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient25  items-center justify-center md:ml-[0] ml-[638px] mt-[40px] p-[2px] rounded-[23px] sm:ml-[0] text-center">
                <div className="bg-gray_930 border-solid cursor-pointer font-bold p-[12px] rounded-[23px] text-[14px] text-center text-white_A700">
                  <div className="bg-gradient25  items-center justify-center md:ml-[0] ml-[638px] mt-[40px] p-[2px] rounded-[23px] sm:ml-[0] text-center">
                    Load more
                  </div>
                </div>
              </Button>
            </div>
            <div className="flex flex-col gap-[188px] md:gap-[40px] items-center justify-start md:w-[100%] w-[99%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[97%]">
                <Text
                  className="capitalize font-bold text-left text-white_A700 w-[auto]"
                  variant="body30"
                >
                  Popular collection
                </Text>
                <div className="flex flex-row items-end justify-evenly sm:w-[100%] w-[auto]">
                  <Text
                    className="font-bold mb-[3px] mt-[9px] text-left text-white_A700 w-[auto]"
                    variant="body60"
                  >
                    Explore
                  </Text>
                  <Img
                    src="images/img_arrowright_white_a700_39x40.svg"
                    className="h-[39px] w-[40px]"
                    alt="arrowright One"
                  />
                </div>
              </div>
              <Img
                src="images/img_nextpre_gray_707.svg"
                className="h-[47px] mb-[140px] w-[auto]"
                alt="NextPre One"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[100px] md:gap-[40px] items-center justify-start mt-[100px] md:w-[100%] w-[70%]">
            <div className="flex flex-col gap-[40px] items-start justify-start md:w-[100%] w-[auto]">
              <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                <Text
                  className="capitalize font-bold text-left text-white_A700 w-[auto]"
                  variant="body30"
                >
                  Top seller
                </Text>
              </div>
              <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-gradient24  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs29 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-end justify-center w-[55%]">
                      <div className="flex h-[20px] items-center justify-start mt-[30px] w-[20px]">
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start mb-[2px] w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Roxanne Wallaker
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_plus_white_a700_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="plus"
                      />
                      <Text
                        className="font-bold text-gray_410 text-right w-[auto]"
                        variant="body78"
                      >
                        #1
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient24  hover:border-[1px] border-[1px] hover:border-indigo_A700 border-indigo_A700 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs29 shadow-bs29 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-end justify-center w-[46%]">
                      <div className="flex h-[20px] items-center justify-start mt-[30px] w-[20px]">
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark One"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start mb-[2px] w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Winifred Clem
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_plus_white_a700_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="plus One"
                      />
                      <Text
                        className="font-bold text-gray_410 text-right w-[auto]"
                        variant="body78"
                      >
                        #2
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient24  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs29 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-end justify-center w-[56%]">
                      <div className="flex h-[20px] items-center justify-start mt-[30px] w-[20px]">
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark Two"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start mb-[2px] w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Angelica Sherman
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_plus_white_a700_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="plus Two"
                      />
                      <Text
                        className="font-bold text-gray_410 text-right w-[auto]"
                        variant="body78"
                      >
                        #3
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient24  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs29 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-end justify-center w-[44%]">
                      <div className="flex h-[20px] items-center justify-start mt-[30px] w-[20px]">
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark Three"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start mb-[2px] w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Hayden Yates
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_plus_white_a700_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="plus Three"
                      />
                      <Text
                        className="font-bold text-gray_410 text-right w-[auto]"
                        variant="body78"
                      >
                        #4
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient24  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs29 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-end justify-center w-[47%]">
                      <div className="flex h-[20px] items-center justify-start mt-[30px] w-[20px]">
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark Four"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start mb-[2px] w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Rowena Tillery
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_plus_white_a700_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="plus Four"
                      />
                      <Text
                        className="font-bold text-gray_410 text-right w-[auto]"
                        variant="body78"
                      >
                        #5
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient24  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs29 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="flex h-[20px] items-center justify-start w-[20px]">
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark Five"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Roderick Norman
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        className="h-[20px] w-[20px]"
                        alt="checkmark One"
                      />
                      <Text
                        className="font-bold text-gray_410 text-right w-[auto]"
                        variant="body78"
                      >
                        #6
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient24  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs29 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="flex h-[20px] items-center justify-start w-[20px]">
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark Six"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Virginia Richards
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_plus_white_a700_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="plus Five"
                      />
                      <Text
                        className="font-bold text-gray_410 text-right w-[auto]"
                        variant="body78"
                      >
                        #7
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient24  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs29 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="flex h-[20px] items-center justify-start w-[20px]">
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark Seven"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Barbara Moore
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_plus_white_a700_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="plus Six"
                      />
                      <Text
                        className="font-bold text-gray_410 text-right w-[auto]"
                        variant="body78"
                      >
                        #8
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient24  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs29 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="flex h-[20px] items-center justify-start w-[20px]">
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark Eight"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Virginia Richards
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_plus_white_a700_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="plus Seven"
                      />
                      <Text
                        className="font-bold text-gray_410 text-right w-[auto]"
                        variant="body78"
                      >
                        #9
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient24  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs29 shadow-bs29 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="flex h-[20px] items-center justify-start w-[20px]">
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark Nine"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Colin Fennimore
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_plus_white_a700_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="plus Eight"
                      />
                      <Text
                        className="font-bold text-gray_410 text-right w-[auto]"
                        variant="body78"
                      >
                        #10
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient24  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs29 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-end justify-center w-[60%]">
                      <div className="flex h-[20px] items-center justify-start mt-[30px] w-[20px]">
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark Ten"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start mb-[2px] w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Ebenezer Anderson
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_plus_white_a700_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="plus Nine"
                      />
                      <Text
                        className="font-bold text-gray_410 text-right w-[auto]"
                        variant="body78"
                      >
                        #11
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient24  hover:border-[1px] hover:border-indigo_A700 hover:border-solid hover:cursor-pointer flex flex-1 flex-row items-center justify-between p-[16px] rounded-[12px] hover:shadow-bs29 hover:w-[100%] w-[100%]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Img
                          src="images/img_checkmark_indigo_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="checkmark Eleven"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          Simona Davidson
                        </Text>
                        <Text
                          className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          1.56 wETH
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-end justify-start w-[auto]">
                      <Img
                        src="images/img_plus_white_a700_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="plus Ten"
                      />
                      <Text
                        className="font-bold text-gray_410 text-right w-[auto]"
                        variant="body78"
                      >
                        #12
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Text
                className="capitalize font-bold text-left text-white_A700 w-[auto]"
                variant="body30"
              >
                Explore
              </Text>
              <div className="flex items-start justify-start mt-[19px] md:w-[100%] w-[auto]">
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-center md:w-[100%] w-[auto]">
                  <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[115px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[1.40px] uppercase w-[auto]">
                    3D model{" "}
                  </Button>
                  <Button className="bg-gray_931 border-[1px] border-gray_707 border-solid cursor-pointer font-bold min-w-[151px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_707 tracking-[1.40px] uppercase w-[auto]">
                    Anime/manga{" "}
                  </Button>
                  <Button className="bg-gray_931 border-[1px] border-gray_707 border-solid cursor-pointer font-bold min-w-[131px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_707 tracking-[1.40px] uppercase w-[auto]">
                    Cyber Punk{" "}
                  </Button>
                  <Button className="bg-gray_931 border-[1px] border-gray_707 border-solid cursor-pointer font-bold min-w-[112px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_707 tracking-[1.40px] uppercase w-[auto]">
                    pixel art{" "}
                  </Button>
                  <Button className="bg-gray_931 border-[1px] border-gray_707 border-solid cursor-pointer font-bold min-w-[84px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_707 tracking-[1.40px] uppercase w-[auto]">
                    music{" "}
                  </Button>
                  <Button className="bg-gray_931 border-[1px] border-gray_707 border-solid cursor-pointer font-bold min-w-[115px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_707 tracking-[1.40px] uppercase w-[auto]">
                    abstract{" "}
                  </Button>
                  <Button className="bg-gray_931 border-[1px] border-gray_707 border-solid cursor-pointer font-bold min-w-[99px] px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-gray_707 tracking-[1.40px] uppercase w-[auto]">
                    2D Arts{" "}
                  </Button>
                </div>
              </div>
              <List
                className="flex-col gap-[30px] grid items-start mt-[40px] md:w-[100%] w-[auto]"
                orientation="vertical"
              >
                <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[428px] items-center justify-end pt-[300px] w-[24%]"
                    style={{ backgroundImage: "url('images/img_03.svg')" }}
                  >
                    <div className="md:h-[110px] h-[128px] relative w-[100%]">
                      <div className="absolute bg-black_900_26 bottom-[0] flex flex-row gap-[21px] inset-x-[0] items-center justify-between mx-[auto] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            “The Monkey sad ”
                          </Text>
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body78"
                          >
                            @SolvadorDali
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[8px] items-end justify-start my-[4px] w-[auto]">
                          <Text
                            className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                            variant="body78"
                          >
                            Current bid
                          </Text>
                          <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[89px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            1.56wETH
                          </Button>
                        </div>
                      </div>
                      <Img
                        src="images/img_close_gray_410.svg"
                        className="absolute h-[36px] left-[6%] top-[0] w-[auto]"
                        alt="close"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[428px] items-center justify-end pt-[260px] w-[24%]"
                    style={{ backgroundImage: "url('images/img_03.svg')" }}
                  >
                    <div className="flex flex-col gap-[8px] justify-start w-[100%]">
                      <Button className="bg-white_A700 cursor-pointer font-normal min-w-[136px] md:ml-[0] ml-[13px] mr-[180px] not-italic px-[12px] py-[6px] rounded-[8px] shadow-bs31 text-[12px] text-center text-gray_930 w-[auto]">
                        Creator: Daniel Rose
                      </Button>
                      <div className="md:h-[110px] h-[128px] relative w-[100%]">
                        <div className="absolute bg-black_900_26 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[20px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body60"
                            >
                              “Herbert Little”
                            </Text>
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                              variant="body78"
                            >
                              @Sidney Hall
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[8px] items-end justify-start my-[4px] w-[auto]">
                            <Text
                              className="capitalize font-normal not-italic text-left text-white_A700_a2 w-[auto]"
                              variant="body78"
                            >
                              Current bid
                            </Text>
                            <Button className="bg-indigo_A700 cursor-pointer font-bold min-w-[89px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                              1.56wETH
                            </Button>
                          </div>
                        </div>
                        <Img
                          src="images/img_close_gray_410.svg"
                          className="absolute h-[36px] left-[6%] top-[0] w-[auto]"
                          alt="close One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <Button className="bg-gradient25  items-center justify-center mt-[40px] p-[2px] rounded-[23px] text-center">
                <div className="bg-gray_930 border-solid cursor-pointer font-bold p-[12px] rounded-[23px] text-[14px] text-center text-white_A700">
                  <div className="bg-gradient25  items-center justify-center mt-[40px] p-[2px] rounded-[23px] text-center">
                    Load more
                  </div>
                </div>
              </Button>
            </div>
          </div>
          <footer className="bg-gray_700_63 flex items-center justify-center mt-[80px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mb-[99px] mt-[96px] mx-[auto] w-[74%]">
              <ul className="flex flex-col items-start justify-start md:w-[100%] w-[22%] common-column-list">
                <li className="w-[63%]">
                  <div className="cursor-pointer flex flex-row gap-[12px] items-center justify-start">
                    <Button className="bg-indigo_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_lightbulb.svg"
                        className=""
                        alt="lightbulb One"
                      />
                    </Button>
                    <Text
                      className="capitalize font-bold text-left text-white_A700 w-[auto]"
                      variant="body30"
                    >
                      Binasea
                    </Text>
                  </div>
                </li>
                <li className="mt-[18px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal leading-[24.00px] not-italic text-[16px] text-gray_410 text-left"
                    href="javascript:"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam.
                  </a>
                </li>
                <li className="mt-[24px] w-[100%]">
                  <div className="cursor-pointer flex flex-row gap-[12px] items-center justify-between">
                    <Button
                      className="common-pointer bg-bluegray_918 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate29}
                    >
                      <Img
                        src="images/img_twitter_white_a700_40x40.svg"
                        className="h-[24px]"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="common-pointer bg-bluegray_918 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]"
                      onClick={handleNavigate30}
                    >
                      <Img
                        src="images/img_facebook_white_a700_40x40.svg"
                        className="h-[24px]"
                        alt="facebook"
                      />
                    </Button>
                    <Button className="bg-bluegray_918 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_send_white_a700.svg"
                        className=""
                        alt="send"
                      />
                    </Button>
                    <Button className="bg-bluegray_918 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_vector_white_a700_40x40.svg"
                        className=""
                        alt="Vector"
                      />
                    </Button>
                    <Button className="bg-bluegray_918 flex h-[40px] items-center justify-center p-[7px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_music_white_a700_40x40.svg"
                        className="h-[24px]"
                        alt="music Two"
                      />
                    </Button>
                    <Button className="bg-bluegray_918 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_user_white_a700_40x40.svg"
                        className=""
                        alt="user One"
                      />
                    </Button>
                  </div>
                </li>
                <li className="mt-[33px] w-[auto]">
                  <a
                    className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_707 text-left"
                    href="javascript:"
                  >
                    Copyright © 2022 Avitex. All rights reserved.
                  </a>
                </li>
              </ul>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[65%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body64"
                  >
                    Maketplace
                  </Text>
                  <ul className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="capitalize cursor-pointer font-normal not-italic text-gray_410 text-left"
                        variant="body78"
                      >
                        Explore
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_410 text-left"
                        href="javascript:"
                      >
                        Item Detail
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_410 text-left"
                        href="javascript:"
                      >
                        Live Auditon
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body64"
                  >
                    Stats
                  </Text>
                  <ul className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="capitalize cursor-pointer font-normal not-italic text-gray_410 text-left"
                        variant="body78"
                      >
                        Ranking
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_410 text-left"
                        href="javascript:"
                      >
                        Ativity
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_410 text-left"
                        href="javascript:"
                      >
                        Auther
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body64"
                  >
                    Resoure
                  </Text>
                  <ul className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="capitalize cursor-pointer font-normal not-italic text-gray_410 text-left"
                        variant="body78"
                      >
                        Blogs
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_410 text-left"
                        href="javascript:"
                      >
                        Help and Center
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="capitalize cursor-pointer font-normal not-italic text-[14px] text-gray_410 text-left"
                        href="javascript:"
                      >
                        FaQs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start w-[104px]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body64"
                  >
                    My account
                  </Text>
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Text
                      className="capitalize font-normal not-italic text-gray_410 text-left w-[auto]"
                      variant="body78"
                    >
                      Profile
                    </Text>
                    <Text
                      className="capitalize font-normal not-italic text-gray_410 text-left w-[auto]"
                      variant="body78"
                    >
                      My wallet
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[34%]">
                  <Text
                    className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                    variant="body64"
                  >
                    Subscribe Us
                  </Text>
                  <Text
                    className="font-normal font-urbanist leading-[22.00px] mt-[21px] not-italic text-gray_410 text-left"
                    variant="body78"
                  >
                    Signup for our newsletter to get the latest news
                    <br />
                    in your inbox.
                  </Text>
                  <div className="flex flex-row font-dmsans items-center justify-between mt-[16px] outline outline-[1px] outline-bluegray_200_6c pl-[20px] rounded-[23px] w-[100%]">
                    <Text
                      className="capitalize font-normal not-italic text-gray_410 text-left w-[auto]"
                      variant="body78"
                    >
                      Info@yourgmail.com
                    </Text>
                    <div className="bg-indigo_A700 flex h-[46px] items-center justify-start outline outline-[1px] outline-indigo_A700 p-[13px] rounded-bl-[0] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[46px]">
                      <Img
                        src="images/img_arrowright_white_a700_20x20.svg"
                        className="h-[20px] w-[20px]"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Homepage2DarkPage;
