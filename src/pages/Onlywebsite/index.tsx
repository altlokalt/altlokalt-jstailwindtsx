import React from "react";

import { Text, Button, Img, List, Input } from "components";

const OnlywebsitePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_919 flex font-urbanist items-center justify-end mx-[auto] pl-[17px] pt-[17px] w-[100%]">
        <div className="flex flex-col gap-[34px] items-center justify-end max-w-[1546px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[27px] justify-start md:w-[100%] w-[98%]">
            <div className="bg-gray_55 flex flex-row items-start justify-start mr-[1288px] p-[6px] rounded-[8px] md:w-[100%] w-[15%]">
              <Text
                className="font-normal ml-[10px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                variant="body78"
              >
                leverandor
              </Text>
              <Text
                className="font-normal ml-[20px] not-italic text-gray_509 text-left tracking-[0.14px] w-[auto]"
                variant="body78"
              >
                &gt;
              </Text>
              <Text
                className="font-normal ml-[8px] mt-[2px] not-italic text-gray_920 text-left tracking-[0.14px] w-[auto]"
                variant="body78"
              >
                websiteonly
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-roboto md:gap-[40px] items-start justify-between md:ml-[0] ml-[28px] md:w-[100%] w-[99%]">
              <div className="flex items-center justify-start md:mt-[0] mt-[20px] md:w-[100%] w-[21%]">
                <div className="flex flex-col gap-[106px] md:gap-[40px] items-center justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="bg-pink_900_7f font-medium h-[34px] pb-[2px] pl-[14px] sm:pr-[20px] pr-[33px] pt-[6px] rounded-[17px] text-left text-white_A700 w-[141px]"
                      variant="body56"
                    >
                      12 ansatt
                    </Text>
                    <div className="flex items-center justify-start w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body60"
                      >
                        +50{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[14px] items-start justify-start md:w-[100%] w-[96%]">
                    <div className="flex items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[75%]">
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body12"
                        >
                          SIMP AS
                        </Text>
                        <div className="flex flex-row gap-[50px] items-center justify-start md:w-[100%] w-[79%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            ENERGI
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Gratis
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-between w-[100%]">
                      <Button className="bg-red_501 cursor-pointer font-black leading-[normal] min-w-[221px] py-[7px] rounded-[15px] shadow-bs17 sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[auto]">
                        Følg firma
                      </Button>
                      <Img
                        src="images/img_plus_gray_604.svg"
                        className="h-[39px] mt-[2px] w-[auto]"
                        alt="plus"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_921 flex flex-col font-quicksand gap-[21px] h-[358px] items-start justify-center p-[24px] sm:px-[20px] rounded-[8px] w-[358px]">
                <Text
                  className="font-medium mt-[2px] text-left text-white_A700 w-[auto]"
                  variant="body48"
                >
                  Nylig lagt til
                </Text>
                <List
                  className="flex-col gap-[16px] grid items-center mb-[8px] pt-[66px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex relative w-[310px]">
                    <div className="flex flex-row gap-[8px] items-center justify-between my-[auto] w-[auto]">
                      <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_305 text-left w-[auto]"
                          variant="body78"
                        >
                          Mat planlegging innen ditt budsjett
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                          variant="body87"
                        >
                          matplan AS
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] ml-[-5px] my-[auto] w-[24px] z-[1]"
                      alt="overflowmenu"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[310px]">
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_305 text-left w-[auto]"
                          variant="body78"
                        >
                          Finn billig drivstfoff nær deg
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                          variant="body87"
                        >
                          minfuel AS
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu One"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[310px]">
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_305 text-left w-[auto]"
                          variant="body78"
                        >
                          Nett samling av bilde & malerie
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                          variant="body87"
                        >
                          Vestfold kunst
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Two"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[310px]">
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_305 text-left w-[auto]"
                          variant="body78"
                        >
                          Kjøp og salg av nft{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                          variant="body87"
                        >
                          Valiantlynx.com
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Three"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[39px] items-start justify-start w-[100%]">
              <Text
                className="font-semibold text-left text-white_A700 tracking-[0.34px] w-[auto]"
                variant="body60"
              >
                Utførske de lokale selskaper
              </Text>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] w-[100%]">
                <div className="flex md:flex-col flex-row gap-[39px] items-center justify-start md:w-[100%] w-[96%]">
                  <List
                    className="sm:flex-col flex-row gap-[39px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[34%]"
                    orientation="horizontal"
                  >
                    <div className="flex items-start justify-start outline outline-[0.5px] outline-gray_106 p-[14px] rounded-[14px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-start justify-start mb-[9px] md:ml-[0] ml-[2px] md:w-[100%] w-[53%]">
                        <Img
                          src="images/img_user_white_a700.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                          variant="body69"
                        >
                          Category
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start outline outline-[0.5px] outline-gray_106 p-[14px] rounded-[14px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start mb-[9px] md:ml-[0] ml-[2px] md:w-[100%] w-[54%]">
                        <Img
                          src="images/img_note2.svg"
                          className="h-[24px] w-[24px]"
                          alt="noteTwo"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                          variant="body69"
                        >
                          Collection
                        </Text>
                      </div>
                    </div>
                  </List>
                  <List
                    className="sm:flex-col flex-row md:gap-[40px] gap-[440px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[65%]"
                    orientation="horizontal"
                  >
                    <div className="flex items-start justify-start outline outline-[0.5px] outline-gray_106 p-[14px] rounded-[14px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-start justify-start mb-[9px] md:ml-[0] ml-[2px] md:w-[100%] w-[80%]">
                        <Img
                          src="images/img_clock_white_a700_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                          variant="body69"
                        >
                          Location parameter
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start outline outline-[0.5px] outline-gray_106 p-[14px] rounded-[14px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start mb-[9px] md:ml-[0] ml-[2px] md:w-[100%] w-[54%]">
                        <Img
                          src="images/img_menu_white_a700.svg"
                          className="h-[24px] w-[24px]"
                          alt="menu"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                          variant="body69"
                        >
                          Filter & Sort
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <List
                  className="flex-col font-roboto gap-[25px] grid items-center md:ml-[0] ml-[3px] mt-[35px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start pb-[37px] sm:pr-[20px] pr-[37px] w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[8px] rounded-[25px] shadow-bs18 md:w-[100%] w-[20%]">
                      <div className="flex flex-col items-start justify-start my-[3px] md:w-[100%] w-[99%]">
                        <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body64"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_604 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus_white_a700_35x35.svg"
                              className="h-[31px]"
                              alt="plus One"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium mt-[131px] text-black_902 text-left w-[auto]"
                          variant="body64"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[72px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_501 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body64"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body78"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-end md:ml-[0] ml-[64px] p-[8px] rounded-[25px] shadow-bs18 md:w-[100%] w-[20%]">
                      <div className="flex flex-col items-start justify-start mt-[4px] md:w-[100%] w-[267px]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body64"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_604 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus_white_a700_35x35.svg"
                              className="h-[31px]"
                              alt="plus One"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium mt-[131px] text-black_902 text-left w-[auto]"
                          variant="body64"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[76px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_501 bottom-[0] flex items-center justify-end p-[8px] right-[1%] rounded-[15px] shadow-bs19 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body64"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] w-[100%]"
                            variant="body78"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-end md:ml-[0] ml-[64px] p-[8px] rounded-[15px] shadow-bs18 md:w-[100%] w-[20%]">
                      <div className="flex flex-col items-start justify-start mt-[4px] md:w-[100%] w-[96%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body64"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_604 flex h-[35px] items-center justify-center rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[35px]">
                            <Img
                              src="images/img_plus_white_a700_35x35.svg"
                              className="h-[31px]"
                              alt="plus Two"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium mt-[131px] text-black_902 text-left w-[auto]"
                          variant="body64"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[76px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_501 bottom-[0] flex items-center justify-end p-[8px] right-[1%] rounded-[15px] shadow-bs19 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body64"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] w-[100%]"
                            variant="body78"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:ml-[0] ml-[64px] p-[8px] rounded-[25px] shadow-bs18 md:w-[100%] w-[20%]">
                      <div className="flex flex-col items-start justify-start mb-[9px] mt-[3px] md:w-[100%] w-[99%]">
                        <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body64"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_604 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus_white_a700_35x35.svg"
                              className="h-[31px]"
                              alt="plus Three"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium mt-[131px] text-black_902 text-left w-[auto]"
                          variant="body64"
                        >
                          Breaking Bad
                        </Text>
                        <div className="h-[66px] md:h-[69px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_501 bottom-[3%] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body64"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium h-[100%] inset-[0] justify-center m-[auto] text-gray_604 text-left sm:w-[100%] w-[98%]"
                            variant="body78"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center md:ml-[0] ml-[30px] md:mt-[0] my-[124px] rounded-[19px] w-[47px]">
                      <Img
                        src="images/img_arrowright_white_a700_13x7.svg"
                        className="h-[13px] w-[auto]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start pb-[24px] sm:pr-[20px] pr-[24px] w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[8px] rounded-[25px] shadow-bs18 md:w-[100%] w-[20%]">
                      <div className="flex flex-col items-start justify-start my-[2px] md:w-[100%] w-[99%]">
                        <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body64"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_604 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus_white_a700_35x35.svg"
                              className="h-[31px]"
                              alt="plus Two"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium mt-[131px] text-black_902 text-left w-[auto]"
                          variant="body64"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[74px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_501 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body64"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body78"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-end md:ml-[0] ml-[64px] p-[8px] rounded-[25px] shadow-bs18 md:w-[100%] w-[20%]">
                      <div className="flex flex-col items-start justify-start mt-[4px] md:w-[100%] w-[267px]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body64"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_604 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus_white_a700_35x35.svg"
                              className="h-[31px]"
                              alt="plus One One"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium mt-[131px] text-black_902 text-left w-[auto]"
                          variant="body64"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[76px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_501 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body64"
                            >
                              watch
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] w-[100%]"
                            variant="body78"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-end md:ml-[0] ml-[64px] p-[8px] rounded-[15px] shadow-bs18 md:w-[100%] w-[20%]">
                      <div className="flex flex-col items-start justify-start mt-[4px] md:w-[100%] w-[96%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body64"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_604 flex h-[35px] items-center justify-center rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[35px]">
                            <Img
                              src="images/img_plus_white_a700_35x35.svg"
                              className="h-[31px]"
                              alt="plus Two One"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium mt-[131px] text-black_902 text-left w-[auto]"
                          variant="body64"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[76px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_501 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body64"
                            >
                              watch
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] w-[100%]"
                            variant="body78"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:ml-[0] ml-[64px] p-[8px] rounded-[25px] shadow-bs18 md:w-[100%] w-[20%]">
                      <div className="flex flex-col items-start justify-start my-[2px] md:w-[100%] w-[99%]">
                        <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body64"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_604 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus_white_a700_35x35.svg"
                              className="h-[31px]"
                              alt="plus Three One"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium mt-[131px] text-black_902 text-left w-[auto]"
                          variant="body64"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[73px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_501 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body64"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body78"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[143px] md:ml-[0] ml-[22px] md:mt-[0] mt-[105px] rounded-[19px] w-[47px]">
                      <Img
                        src="images/img_arrowright_white_a700_13x7.svg"
                        className="h-[13px] w-[auto]"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start pb-[38px] sm:pr-[20px] pr-[38px] md:w-[100%] w-[98%]">
                    <div className="bg-white_A700 flex items-center justify-start mb-[9px] p-[8px] rounded-[25px] shadow-bs18 md:w-[100%] w-[21%]">
                      <div className="flex flex-col items-start justify-start my-[3px] md:w-[100%] w-[99%]">
                        <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body64"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_604 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus_white_a700_35x35.svg"
                              className="h-[31px]"
                              alt="plus Three"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium mt-[131px] text-black_902 text-left w-[auto]"
                          variant="body64"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[72px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_501 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body64"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body78"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex items-center justify-start mb-[9px] md:ml-[0] ml-[64px] p-[8px] rounded-[25px] shadow-bs18 md:w-[100%] w-[21%]">
                      <div className="flex flex-col items-start justify-start my-[2px] md:w-[100%] w-[99%]">
                        <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body64"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_604 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus_white_a700_35x35.svg"
                              className="h-[31px]"
                              alt="plus One Two"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium mt-[131px] text-black_902 text-left w-[auto]"
                          variant="body64"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[74px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_501 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body64"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body78"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex items-center justify-start mb-[9px] md:ml-[0] ml-[64px] p-[8px] rounded-[15px] shadow-bs18 md:w-[100%] w-[21%]">
                      <div className="flex flex-col items-start justify-start my-[3px] md:w-[100%] w-[99%]">
                        <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body64"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_604 flex h-[35px] items-center justify-center rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[35px]">
                            <Img
                              src="images/img_plus_white_a700_35x35.svg"
                              className="h-[31px]"
                              alt="plus Two Two"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium mt-[131px] text-black_902 text-left w-[auto]"
                          variant="body64"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[72px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_501 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body64"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body78"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex items-center justify-start mb-[9px] md:ml-[0] ml-[64px] p-[8px] rounded-[25px] shadow-bs18 md:w-[100%] w-[21%]">
                      <div className="flex flex-col items-start justify-start mb-[6px] mt-[3px] md:w-[100%] w-[99%]">
                        <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body64"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_604 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus_white_a700_35x35.svg"
                              className="h-[31px]"
                              alt="plus Three Two"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-medium mt-[131px] text-black_902 text-left w-[auto]"
                          variant="body64"
                        >
                          Breaking Bad
                        </Text>
                        <div className="h-[69px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_501 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs19 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body64"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_604 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body78"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[143px] md:ml-[0] ml-[42px] md:mt-[0] mt-[114px] rounded-[19px] w-[47px]">
                      <Img
                        src="images/img_arrowright_white_a700_13x7.svg"
                        className="h-[13px] w-[auto]"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                </List>
                <Input
                  className="font-normal not-italic pb-[13px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[8px] text-[14px] text-center placeholder:text-gray_920 text-gray_920 tracking-[0.14px] w-[100%]"
                  wrapClassName="md:ml-[0] ml-[794px] mt-[37px] outline outline-[0.5px] outline-gray_920 rounded-[8px] sm:ml-[0] sm:w-[100%] w-[12%]"
                  name="Button"
                  placeholder="Load More"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlywebsitePage;
