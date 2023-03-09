import React from "react";

import { Img, Text, Button, Input, List, Line } from "components";
import { CloseSVG } from "../../assets/images";

const WwwfinnnobyhtmltodesignFREEversion21022023Page: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-white_A700 border-b-[1px] border-bluegray_108 border-solid flex items-center justify-center w-[100%]">
            <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-center sm:px-[20px] px-[31px] md:w-[100%] w-[67%]">
              <div className="border-b-[2px] border-solid border-white_A700 h-[49px] relative md:w-[100%] w-[23%]">
                <div className="absolute border-b-[2px] border-solid border-white_A700 flex h-[100%] inset-[0] items-start justify-center m-[auto] pr-[8px] py-[8px] w-[100%]">
                  <Img
                    src="images/img_ticket_white_a700.svg"
                    className="h-[32px] w-[auto]"
                    alt="ticket"
                  />
                </div>
                <Text
                  className="absolute font-bold h-[max-content] inset-y-[0] my-[auto] right-[0] text-gray_856 text-left w-[auto]"
                  variant="body91"
                >
                  Mulighetenes marked
                </Text>
              </div>
              <Button
                className="bg-white_A700 border-b-[2px] border-solid border-white_A700 flex items-center justify-center md:ml-[0] min-w-[107px] ml-[269px] pl-[10px] pr-[13.67px] py-[12px] sm:ml-[0] text-center w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_notification.svg"
                    className="mr-[8px] text-center"
                    alt="notification"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-bold text-[10px] text-gray_857 text-left">
                  Varslinger
                </div>
              </Button>
              <Button
                className="bg-white_A700 border-b-[2px] border-solid border-white_A700 flex items-center justify-center md:ml-[0] min-w-[116px] ml-[10px] pl-[10px] pr-[9.63px] py-[12px] sm:ml-[0] text-center w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_plus_bluegray_433.svg"
                    className="mr-[8px] text-center"
                    alt="plus"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-bold text-[11px] text-gray_857 text-left">
                  Ny annonse
                </div>
              </Button>
              <Button
                className="bg-white_A700 border-b-[2px] border-solid border-white_A700 flex items-center justify-center md:ml-[0] min-w-[107px] ml-[10px] pl-[10px] pr-[9.77px] py-[12px] sm:ml-[0] text-center w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_user_bluegray_434.svg"
                    className="mr-[8px] text-center"
                    alt="user"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-bold text-[11px] text-gray_857 text-left">
                  Meldinger
                </div>
              </Button>
              <Button
                className="bg-white_A700 border-b-[2px] border-solid border-white_A700 flex items-center justify-center md:ml-[0] min-w-[99px] ml-[9px] pl-[10px] pr-[9.3px] py-[12px] sm:ml-[0] text-center w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_location_bluegray_435.svg"
                    className="mr-[8px] text-center"
                    alt="location"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-bold text-[11px] text-gray_857 text-left">
                  Logg inn
                </div>
              </Button>
            </div>
          </div>
        </header>
        <div className="sm:h-[1970px] md:h-[2368px] h-[3223px] mt-[32px] md:px-[20px] relative w-[100%]">
          <div className="absolute bg-white_A700 sm:h-[1938px] md:h-[2336px] h-[3223px] inset-[0] justify-center m-[auto] md:w-[100%] w-[67%]">
            <div className="absolute bg-white_A700 flex flex-col gap-[32px] h-[100%] inset-[0] items-center justify-center m-[auto] pb-[14px] px-[14px] w-[100%]">
              <div className="flex flex-row gap-[8px] items-start justify-start pr-[3px] pt-[3px] md:w-[100%] w-[97%]">
                <Img
                  src="images/img_bag_light_blue_a401.svg"
                  className="h-[28px] w-[auto]"
                  alt="bag"
                />
                <Text
                  className="font-bold text-gray_856 text-left w-[auto]"
                  variant="body46"
                >
                  Torget
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mb-[950px] w-[100%]">
                <div className="flex items-center justify-start px-[16px] w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_800_89 text-gray_800_89 text-left w-[100%]"
                      wrapClassName="bg-white_A700 border-[1px] border-indigo_105 border-solid flex md:pr-[40px] pl-[9px] pr-[41px] py-[14.5px] rounded-[4px] sm:pr-[20px] w-[100%]"
                      name="Sk"
                      placeholder="Søk på torget"
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer ml-[35px] my-[auto]"
                            onClick={() => setInputvalue("")}
                            color="#89474445"
                          />
                        ) : (
                          <Img
                            src="images/img_search_gray_857.svg"
                            className="cursor-pointer ml-[35px] my-[auto]"
                            alt="search"
                          />
                        )
                      }
                    ></Input>
                  </div>
                </div>
                <div className="border-b-[1px] border-indigo_54 border-solid flex items-center justify-start mt-[32px] pb-[25px] md:w-[100%] w-[97%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[99%]">
                      <List
                        className="flex-col gap-[8px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start mr-[19px] my-[0] md:w-[100%] w-[98%]">
                          <div className="flex flex-row gap-[16px] items-center justify-start p-[11px] md:w-[100%] w-[21%]">
                            <Img
                              src="images/img_volume_gray_602.svg"
                              className="h-[25px] w-[24px]"
                              alt="volume"
                            />
                            <Text
                              className="font-normal not-italic text-gray_857 text-left w-[auto]"
                              variant="body87"
                            >
                              Antikviteter og kunst
                            </Text>
                          </div>
                          <div className="flex md:ml-[0] ml-[41px] sm:pr-[20px] md:pr-[40px] pr-[57px] relative md:w-[100%] w-[28%]">
                            <div className="flex flex-row gap-[16px] items-center justify-evenly my-[auto] p-[11px] w-[58%]">
                              <Img
                                src="images/img_mobile.svg"
                                className="h-[25px] w-[24px]"
                                alt="mobile"
                              />
                              <Text
                                className="font-normal not-italic text-gray_857 text-left w-[auto]"
                                variant="body87"
                              >
                                Nybrukt mobil
                              </Text>
                            </div>
                            <div className="bg-teal_58 border-[2px] border-green_A202 border-solid h-[36px] ml-[-3.32px] my-[auto] rounded-[4px] w-[21%] z-[1]">
                              <div className="absolute h-[36px] inset-y-[0] my-[auto] right-[0] w-[80%]">
                                <div className="bg-teal_58 border-[2px] border-green_A202 border-solid h-[36px] ml-[auto] my-[auto] rounded-[4px] w-[100%]"></div>
                                <Text
                                  className="absolute bottom-[25%] font-normal not-italic right-[14%] text-gray_856 text-left w-[auto]"
                                  variant="body91"
                                >
                                  Ny!
                                </Text>
                              </div>
                              <Img
                                src="images/img_offer_teal_58.svg"
                                className="absolute h-[22px] inset-y-[0] left-[0] my-[auto] w-[22px]"
                                alt="offer"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-center md:ml-[0] ml-[7px] p-[11px] md:w-[100%] w-[23%]">
                            <Img
                              src="images/img_home_gray_602.svg"
                              className="h-[25px] w-[24px]"
                              alt="home"
                            />
                            <Text
                              className="font-normal mr-[7px] not-italic text-gray_857 text-left w-[auto]"
                              variant="body87"
                            >
                              Hage, oppussing og hus
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-center md:ml-[0] ml-[36px] p-[11px] md:w-[100%] w-[20%]">
                            <Img
                              src="images/img_car_gray_602.svg"
                              className="h-[25px] w-[24px]"
                              alt="car"
                            />
                            <Text
                              className="font-normal mr-[7px] not-italic text-gray_857 text-left w-[auto]"
                              variant="body87"
                            >
                              Næringsvirksomhet
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start mr-[29px] my-[0] md:w-[100%] w-[97%]">
                          <div className="flex flex-row gap-[16px] items-center justify-evenly p-[11px] md:w-[100%] w-[16%]">
                            <Img
                              src="images/img_frame_gray_602.svg"
                              className="h-[25px] w-[24px]"
                              alt="Frame"
                            />
                            <Text
                              className="font-normal not-italic text-gray_857 text-left w-[auto]"
                              variant="body87"
                            >
                              Dyr og utstyr
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-center md:ml-[0] ml-[86px] p-[11px] md:w-[100%] w-[18%]">
                            <Img
                              src="images/img_cart_gray_602.svg"
                              className="h-[25px] w-[24px]"
                              alt="cart"
                            />
                            <Text
                              className="font-normal mr-[6px] not-italic text-gray_857 text-left w-[auto]"
                              variant="body87"
                            >
                              Foreldre og barn
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-center md:ml-[0] ml-[101px] p-[11px] md:w-[100%] w-[25%]">
                            <Img
                              src="images/img_file_gray_602.svg"
                              className="h-[25px] w-[24px]"
                              alt="file"
                            />
                            <Text
                              className="font-normal mr-[8px] not-italic text-gray_857 text-left w-[auto]"
                              variant="body87"
                            >
                              Klær, kosmetikk og tilbehør
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-center md:ml-[0] ml-[17px] p-[11px] md:w-[100%] w-[19%]">
                            <Img
                              src="images/img_frame_gray_602_25x24.svg"
                              className="h-[25px] w-[24px]"
                              alt="Frame One"
                            />
                            <Text
                              className="font-normal mr-[6px] not-italic text-gray_857 text-left w-[auto]"
                              variant="body87"
                            >
                              Sport og friluftsliv
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-end my-[0] w-[100%]">
                          <div className="flex md:flex-1 flex-row gap-[16px] items-center justify-start p-[11px] md:w-[100%] w-[23%]">
                            <Img
                              src="images/img_camera_gray_602.svg"
                              className="h-[25px] w-[24px]"
                              alt="camera"
                            />
                            <Text
                              className="font-normal not-italic text-gray_857 text-left w-[auto]"
                              variant="body87"
                            >
                              Elektronikk og hvitevarer
                            </Text>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[16px] items-center justify-center md:ml-[0] ml-[17px] p-[11px] md:w-[100%] w-[27%]">
                            <Img
                              src="images/img_settings_gray_602.svg"
                              className="h-[25px] w-[24px]"
                              alt="settings"
                            />
                            <Text
                              className="font-normal mr-[9px] not-italic text-gray_857 text-left w-[auto]"
                              variant="body87"
                            >
                              Fritid, hobby og underholdning
                            </Text>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[16px] items-center justify-center md:ml-[0] ml-[17px] p-[11px] md:w-[100%] w-[19%]">
                            <Img
                              src="images/img_bag_gray_602.svg"
                              className="h-[25px] w-[24px]"
                              alt="bag One"
                            />
                            <Text
                              className="font-normal mr-[6px] not-italic text-gray_857 text-left w-[auto]"
                              variant="body87"
                            >
                              Møbler og interiør
                            </Text>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[16px] items-center justify-center md:ml-[0] ml-[73px] p-[11px] md:w-[100%] w-[22%]">
                            <Img
                              src="images/img_cut_gray_602.svg"
                              className="h-[25px] w-[24px]"
                              alt="cut"
                            />
                            <Text
                              className="font-normal mr-[6px] not-italic text-gray_857 text-left w-[auto]"
                              variant="body87"
                            >
                              Utstyr til bil, båt og MC
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[40px] w-[100%]">
                  <List
                    className="flex-col gap-[39px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start my-[0] w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[97%]">
                        <Text
                          className="font-bold sm:mt-[0] mt-[2px] text-gray_856 text-left w-[auto]"
                          variant="body60"
                        >
                          Fiks ferdig - Frakt og betaling
                        </Text>
                        <div className="flex flex-row items-center justify-between pr-[4px] py-[4px] sm:w-[100%] w-[11%]">
                          <Text
                            className="font-normal not-italic text-gray_602 text-left w-[auto]"
                            variant="body98"
                          >
                            1 av 2
                          </Text>
                          <Img
                            src="images/img_arrowleft_gray_857.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft"
                          />
                          <Img
                            src="images/img_arrowleft_gray_857.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                      <div className="h-[179px] md:h-[959px] relative w-[100%]">
                        <div className="absolute flex md:flex-col flex-row gap-[16px] h-[100%] inset-[0] items-center justify-center m-[auto] pl-[16px] w-[100%]">
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Designlamper
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Populære merker: Barneklær
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[159px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Skinnkåpe
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[157px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Norske merker
                            </Text>
                          </div>
                          <div className="bg-gradient49  h-[179px] w-[2%]"></div>
                        </div>
                        <div className="absolute bg-gradient16  border-gray_312 border-l-[1px] border-solid h-[179px] inset-y-[0] left-[0] my-[auto] w-[2%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start my-[0] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[97%]">
                        <Text
                          className="font-bold mb-[2px] text-gray_856 text-left w-[auto]"
                          variant="body60"
                        >
                          Aktuelt nå
                        </Text>
                        <div className="flex flex-row items-center justify-between pr-[4px] py-[4px] w-[11%]">
                          <Text
                            className="font-normal not-italic text-gray_602 text-left w-[auto]"
                            variant="body98"
                          >
                            1 av 2
                          </Text>
                          <Img
                            src="images/img_arrowleft_gray_857.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft One"
                          />
                          <Img
                            src="images/img_arrowleft_gray_857.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowright One"
                          />
                        </div>
                      </div>
                      <div className="h-[179px] md:h-[959px] relative w-[100%]">
                        <div className="absolute flex md:flex-col flex-row gap-[16px] h-[100%] inset-[0] items-center justify-center m-[auto] pl-[16px] w-[100%]">
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Hjemmestrikket
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[157px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Business casual
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Vintersport
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Topptur-utstyr
                            </Text>
                          </div>
                          <div className="bg-gradient49  h-[179px] w-[2%]"></div>
                        </div>
                        <div className="absolute bg-gradient16  border-gray_312 border-l-[1px] border-solid h-[179px] inset-y-[0] left-[0] my-[auto] w-[2%]"></div>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col gap-[15px] justify-start mt-[40px] pt-[3px] w-[100%]">
                    <Text
                      className="font-bold md:ml-[0] ml-[17px] text-gray_856 text-left w-[auto]"
                      variant="body60"
                    >
                      Utvalgte temaer
                    </Text>
                    <div className="h-[88px] relative w-[100%]">
                      <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] pl-[16px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                            <div className="flex md:flex-1 flex-col gap-[8px] items-start justify-start md:w-[100%] w-[auto]">
                              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                <Text
                                  className="bg-gray_116 font-bold h-[40px] sm:pl-[20px] pl-[35px] pr-[20px] py-[12px] rounded-[20px] text-gray_856 text-left w-[151px]"
                                  variant="body87"
                                >
                                  Hjemmekontor
                                </Text>
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[130px] pl-[14px] pr-[19.84px] py-[11px] rounded-[20px] text-[12px] text-center text-gray_856 w-[auto]">
                                  Noise cancelling
                                </Button>
                                <Text
                                  className="bg-gray_116 font-bold h-[40px] sm:pl-[20px] pl-[35px] pr-[18px] py-[12px] rounded-[20px] text-gray_856 text-left w-[142px]"
                                  variant="body87"
                                >
                                  Spillkonsoller
                                </Text>
                                <Text
                                  className="bg-gray_116 font-bold h-[40px] sm:pl-[20px] pl-[35px] pr-[13px] py-[11px] rounded-[20px] text-gray_856 text-left w-[115px]"
                                  variant="body82"
                                >
                                  Brettspill
                                </Text>
                              </div>
                              <Text
                                className="bg-gray_116 font-bold h-[40px] sm:pl-[20px] pl-[35px] pr-[17px] py-[12px] rounded-[20px] text-gray_856 text-left w-[118px]"
                                variant="body87"
                              >
                                Puslespill
                              </Text>
                            </div>
                            <Text
                              className="bg-gray_116 font-bold h-[40px] mb-[48px] sm:pl-[20px] pl-[35px] pr-[13px] py-[11px] rounded-[20px] text-gray_856 text-left w-[106px]"
                              variant="body82"
                            >
                              Gaming
                            </Text>
                            <Text
                              className="bg-gray_116 font-bold h-[40px] mb-[48px] sm:pl-[20px] pl-[35px] pr-[20px] py-[12px] rounded-[20px] text-gray_856 text-left w-[155px]"
                              variant="body87"
                            >
                              Hjemmetrening
                            </Text>
                            <Text
                              className="bg-gray_116 font-bold h-[40px] mb-[48px] sm:pl-[20px] pl-[35px] pr-[14px] py-[11px] rounded-[20px] text-gray_856 text-left w-[87px]"
                              variant="body82"
                            >
                              Foto
                            </Text>
                            <div className="bg-gradient49  h-[88px] w-[2%]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-gradient16  border-gray_312 border-l-[1px] border-solid h-[88px] inset-y-[0] left-[0] my-[auto] w-[2%]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] justify-start mt-[40px] w-[100%]">
                    <Text
                      className="font-bold md:ml-[0] ml-[17px] text-gray_856 text-left w-[auto]"
                      variant="body58"
                    >
                      Klær
                    </Text>
                    <div className="h-[179px] md:h-[577px] relative w-[100%]">
                      <div className="absolute flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] pl-[16px] w-[100%]">
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[49%]"
                          orientation="horizontal"
                        >
                          <div className="flex items-start justify-end sm:ml-[0] w-[100%]">
                            <Text
                              className="font-bold mt-[157px] text-gray_857 text-left w-[auto]"
                              variant="body73"
                            >
                              Herreklær
                            </Text>
                          </div>
                          <div className="flex items-start justify-end sm:ml-[0] w-[100%]">
                            <Text
                              className="font-bold mt-[157px] text-gray_857 text-left w-[auto]"
                              variant="body73"
                            >
                              Barneklær
                            </Text>
                          </div>
                        </List>
                        <div className="flex md:flex-1 items-start justify-end md:ml-[0] ml-[16px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                            variant="body78"
                          >
                            Sportstøy
                          </Text>
                        </div>
                        <div className="bg-gradient49  h-[179px] md:ml-[0] ml-[241px] w-[2%]"></div>
                      </div>
                      <div className="absolute bg-gradient16  border-gray_312 border-l-[1px] border-solid h-[179px] inset-y-[0] left-[0] my-[auto] w-[2%]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] justify-start mt-[40px] w-[100%]">
                    <Text
                      className="font-bold md:ml-[0] ml-[17px] text-gray_856 text-left w-[auto]"
                      variant="body60"
                    >
                      Merker
                    </Text>
                    <div className="h-[88px] relative w-[100%]">
                      <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] pl-[16px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                            <div className="flex md:flex-1 flex-col gap-[8px] items-start justify-start md:w-[100%] w-[67%]">
                              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[59px] pl-[14px] pr-[13.91px] py-[11px] rounded-[20px] text-[13px] text-center text-gray_856 w-[auto]">
                                  Bolia
                                </Button>
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[94px] pl-[14px] pr-[17.45px] py-[11px] rounded-[20px] text-[12px] text-center text-gray_856 w-[auto]">
                                  Holzweiler
                                </Button>
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[65px] pl-[14px] pr-[16.16px] py-[11px] rounded-[20px] text-[12px] text-center text-gray_856 w-[auto]">
                                  Apple
                                </Button>
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[69px] pl-[14px] pr-[15.13px] py-[11px] rounded-[20px] text-[12px] text-center text-gray_856 w-[auto]">
                                  Swims
                                </Button>
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[80px] pl-[14px] pr-[13.77px] py-[11px] rounded-[20px] text-[13px] text-center text-gray_856 w-[auto]">
                                  Bergans
                                </Button>
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[63px] pl-[14px] pr-[13.16px] py-[11px] rounded-[20px] text-[13px] text-center text-gray_856 w-[auto]">
                                  Rolex
                                </Button>
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[63px] pl-[14px] pr-[15.73px] py-[11px] rounded-[20px] text-[12px] text-center text-gray_856 w-[auto]">
                                  Gucci
                                </Button>
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[92px] pl-[14px] pr-[14.52px] py-[11px] rounded-[20px] text-[13px] text-center text-gray_856 w-[auto]">
                                  Patagonia
                                </Button>
                              </div>
                              <div className="flex flex-row items-center justify-start md:w-[100%] w-[56%]">
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[80px] pl-[14px] pr-[13.19px] py-[11px] rounded-[20px] text-[13px] text-center text-gray_856 w-[auto]">
                                  Slettvoll
                                </Button>
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[52px] ml-[8px] pl-[14px] pr-[13.83px] py-[11px] rounded-[20px] text-[13px] text-center text-gray_856 w-[auto]">
                                  Hay
                                </Button>
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[65px] ml-[8px] pl-[14px] pr-[13.08px] py-[11px] rounded-[20px] text-[13px] text-center text-gray_856 w-[auto]">
                                  Ganni
                                </Button>
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[56px] ml-[7px] pl-[14px] pr-[13.39px] py-[11px] rounded-[20px] text-[13px] text-center text-gray_856 w-[auto]">
                                  Nike
                                </Button>
                                <Button className="bg-gray_116 cursor-pointer font-bold min-w-[72px] ml-[8px] pl-[14px] pr-[13.03px] py-[11px] rounded-[20px] text-[13px] text-center text-gray_856 w-[auto]">
                                  Stokke
                                </Button>
                              </div>
                            </div>
                            <Button className="bg-gray_116 cursor-pointer font-bold mb-[48px] min-w-[85px] md:ml-[0] ml-[7px] pl-[14px] pr-[17.48px] py-[11px] rounded-[20px] text-[12px] text-center text-gray_856 w-[auto]">
                              Mulberry
                            </Button>
                            <Button className="bg-gray_116 cursor-pointer font-bold mb-[48px] min-w-[59px] md:ml-[0] ml-[8px] pl-[14px] pr-[14.83px] py-[11px] rounded-[20px] text-[13px] text-center text-gray_856 w-[auto]">
                              IKEA
                            </Button>
                            <Button className="bg-gray_116 cursor-pointer font-bold mb-[48px] min-w-[57px] md:ml-[0] ml-[8px] pl-[14px] pr-[14.36px] py-[11px] rounded-[20px] text-[13px] text-center text-gray_856 w-[auto]">
                              Zara
                            </Button>
                            <div className="bg-gradient49  h-[88px] md:ml-[0] ml-[76px] w-[2%]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-gradient16  border-gray_312 border-l-[1px] border-solid h-[88px] inset-y-[0] left-[0] my-[auto] w-[2%]"></div>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[40px] grid items-center mt-[40px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between pt-[2px] md:w-[100%] w-[97%]">
                        <Text
                          className="font-bold text-gray_856 text-left w-[auto]"
                          variant="body60"
                        >
                          Hobby
                        </Text>
                        <div className="flex flex-row items-center justify-between mb-[2px] pr-[4px] py-[4px] w-[11%]">
                          <Text
                            className="font-normal not-italic text-gray_602 text-left w-[auto]"
                            variant="body98"
                          >
                            1 av 2
                          </Text>
                          <Img
                            src="images/img_arrowleft_gray_857.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Two"
                          />
                          <Img
                            src="images/img_arrowleft_gray_857.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowright Two"
                          />
                        </div>
                      </div>
                      <div className="h-[179px] md:h-[959px] relative w-[100%]">
                        <div className="absolute flex md:flex-col flex-row gap-[16px] h-[100%] inset-[0] items-center justify-center m-[auto] pl-[16px] w-[100%]">
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Ølbrygging
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[157px] text-gray_857 text-left w-[auto]"
                              variant="body73"
                            >
                              Bake
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Lage video
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[157px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Strikke
                            </Text>
                          </div>
                          <div className="bg-gradient49  h-[179px] w-[2%]"></div>
                        </div>
                        <div className="absolute bg-gradient16  border-gray_312 border-l-[1px] border-solid h-[179px] inset-y-[0] left-[0] my-[auto] w-[2%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between pt-[2px] md:w-[100%] w-[97%]">
                        <Text
                          className="font-bold text-gray_856 text-left w-[auto]"
                          variant="body60"
                        >
                          Pusse opp
                        </Text>
                        <div className="flex flex-row items-center justify-between mb-[2px] pr-[4px] py-[4px] w-[11%]">
                          <Text
                            className="font-normal not-italic text-gray_602 text-left w-[auto]"
                            variant="body98"
                          >
                            1 av 2
                          </Text>
                          <Img
                            src="images/img_arrowleft_gray_857.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Three"
                          />
                          <Img
                            src="images/img_arrowleft_gray_857.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowright Three"
                          />
                        </div>
                      </div>
                      <div className="h-[179px] md:h-[959px] relative w-[100%]">
                        <div className="absolute flex md:flex-col flex-row gap-[16px] h-[100%] inset-[0] items-center justify-center m-[auto] pl-[16px] w-[100%]">
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Kjøkken
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Maleutstyr
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Verktøy
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Malingsprøver
                            </Text>
                          </div>
                          <div className="bg-gradient49  h-[179px] w-[2%]"></div>
                        </div>
                        <div className="absolute bg-gradient16  border-gray_312 border-l-[1px] border-solid h-[179px] inset-y-[0] left-[0] my-[auto] w-[2%]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[97%]">
                        <Text
                          className="font-bold mb-[2px] text-gray_856 text-left w-[auto]"
                          variant="body60"
                        >
                          Småbarnsliv
                        </Text>
                        <div className="flex flex-row items-center justify-between pr-[4px] py-[4px] w-[11%]">
                          <Text
                            className="font-normal not-italic text-gray_602 text-left w-[auto]"
                            variant="body98"
                          >
                            1 av 2
                          </Text>
                          <Img
                            src="images/img_arrowleft_gray_857.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Four"
                          />
                          <Img
                            src="images/img_arrowleft_gray_857.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowright Four"
                          />
                        </div>
                      </div>
                      <div className="h-[179px] md:h-[959px] relative w-[100%]">
                        <div className="absolute flex md:flex-col flex-row gap-[16px] h-[100%] inset-[0] items-center justify-center m-[auto] pl-[16px] w-[100%]">
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[157px] text-gray_857 text-left w-[auto]"
                              variant="body73"
                            >
                              Mammaklær
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[160px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Sportsutstyr til barna
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[157px] text-gray_857 text-left w-[auto]"
                              variant="body73"
                            >
                              Barneklær
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-end pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold mt-[157px] text-gray_857 text-left w-[auto]"
                              variant="body78"
                            >
                              Leker
                            </Text>
                          </div>
                          <div className="bg-gradient49  h-[179px] w-[2%]"></div>
                        </div>
                        <div className="absolute bg-gradient16  border-gray_312 border-l-[1px] border-solid h-[179px] inset-y-[0] left-[0] my-[auto] w-[2%]"></div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
              <div className="flex flex-col gap-[24px] justify-start pt-[2px] px-[2px] w-[100%]">
                <Text
                  className="font-bold md:ml-[0] ml-[13px] text-gray_856 text-left w-[auto]"
                  variant="body60"
                >
                  Anbefalinger til deg
                </Text>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mx-[auto] md:w-[100%] w-[99%]">
                  <div className="flex flex-col relative md:w-[100%] w-[34%]">
                    <div className="bg-white_A700 flex flex-col items-center justify-start mx-[auto] p-[10px] rounded-[12px] w-[100%]">
                      <div className="bg-gray_67 border-[1px] border-indigo_105 border-solid flex items-start justify-start rounded-[8px] w-[301px]">
                        <Img
                          src="images/img_arrowdown_white_a700_44x44.svg"
                          className="h-[44px] w-[44px]"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start mb-[52px] pb-[8px] w-[auto]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-normal mt-[21px] not-italic text-gray_602 text-left w-[auto]"
                            variant="body98"
                          >
                            Tofte
                          </Text>
                          <Img
                            src="images/img_user_gray_602.svg"
                            className="h-[24px] mb-[10px] mr-[2px] w-[24px]"
                            alt="user"
                          />
                        </div>
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-gray_857 text-left w-[auto]"
                            variant="body78"
                          >
                            5 gram Gullbarre fra UBS 999,9 Fintgull
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start mt-[-0.01px] mx-[auto] p-[10px] rounded-[12px] w-[100%] z-[1]">
                      <div className="bg-gray_67 border-[1px] border-indigo_105 border-solid flex flex-col gap-[180px] md:gap-[40px] items-start justify-start rounded-[8px] w-[301px]">
                        <Img
                          src="images/img_arrowdown_white_a700_44x44.svg"
                          className="h-[44px] w-[44px]"
                          alt="arrowdown One"
                        />
                        <div className="bg-gradient50  flex items-start justify-start pb-[8px] pl-[16px] sm:pr-[20px] pr-[216.33px] md:pr-[40px] pt-[38px] w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            29 900 kr
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start mb-[8px] pb-[8px] w-[auto]">
                        <div className="flex flex-row items-start justify-between pb-[2px] pr-[2px] w-[100%]">
                          <Text
                            className="font-normal mt-[19px] not-italic text-gray_602 text-left w-[auto]"
                            variant="body91"
                          >
                            Ålesund
                          </Text>
                          <Img
                            src="images/img_user_gray_602.svg"
                            className="h-[24px] mb-[9px] w-[24px]"
                            alt="user One"
                          />
                        </div>
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-bold leading-[22.00px] md:max-w-[100%] max-w-[278px] text-gray_857 text-left"
                            variant="body73"
                          >
                            Brukt Brenderup 5375 NFH, Kassemål: 375x180cm, kr.
                            29.900,-
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[300px] sm:h-[440px] h-[872px] relative md:w-[100%] w-[67%]">
                    <div className="flex flex-col m-[auto] w-[100%]">
                      <div className="md:h-[300px] sm:h-[440px] h-[447px] mx-[auto] w-[100%]">
                        <div className="absolute bg-white_A700 flex flex-col h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[10px] rounded-[12px] w-[50%]">
                          <div className="bg-gray_67 border-[1px] border-indigo_105 border-solid flex flex-col gap-[180px] md:gap-[40px] items-start justify-start rounded-[8px] w-[301px]">
                            <Img
                              src="images/img_arrowdown_white_a700_44x44.svg"
                              className="h-[44px] w-[44px]"
                              alt="arrowdown Two"
                            />
                            <div className="bg-gradient50  flex items-start justify-start pb-[8px] pl-[16px] sm:pr-[20px] pr-[218.33px] md:pr-[40px] pt-[38px] w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body78"
                              >
                                14 500 kr
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[8px] items-start justify-start mb-[52px] pb-[8px] w-[auto]">
                            <div className="flex flex-row items-start justify-between pb-[2px] pr-[2px] w-[100%]">
                              <Text
                                className="font-normal mt-[19px] not-italic text-gray_602 text-left w-[auto]"
                                variant="body91"
                              >
                                Ålesund
                              </Text>
                              <Img
                                src="images/img_user_gray_602.svg"
                                className="h-[24px] mb-[9px] w-[24px]"
                                alt="user Two"
                              />
                            </div>
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-bold text-gray_857 text-left w-[auto]"
                                variant="body78"
                              >
                                Gaupen 1425N Boggihenger
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-white_A700 flex flex-col h-[100%] inset-y-[0] items-center justify-start my-[auto] p-[10px] right-[0] rounded-[12px] w-[50%]">
                          <div className="bg-gray_67 border-[1px] border-indigo_105 border-solid flex flex-col gap-[180px] md:gap-[40px] items-start justify-start rounded-[8px] w-[301px]">
                            <Img
                              src="images/img_arrowdown_white_a700_44x44.svg"
                              className="h-[44px] w-[44px]"
                              alt="arrowdown Three"
                            />
                            <div className="bg-gradient50  flex items-start justify-start pb-[8px] pl-[16px] sm:pr-[20px] pr-[225.33px] md:pr-[40px] pt-[38px] w-[auto]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body78"
                              >
                                2 400 kr
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[8px] items-start justify-start mb-[8px] pb-[8px] w-[auto]">
                            <div className="flex flex-row items-start justify-between w-[100%]">
                              <Text
                                className="font-normal mt-[21px] not-italic text-gray_602 text-left w-[auto]"
                                variant="body91"
                              >
                                Oslo
                              </Text>
                              <Img
                                src="images/img_user_gray_602.svg"
                                className="h-[24px] mb-[11px] mr-[3px] w-[24px]"
                                alt="user Three"
                              />
                            </div>
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-bold leading-[22.00px] md:max-w-[100%] max-w-[253px] text-gray_857 text-left"
                                variant="body69"
                              >
                                Innekattene Pierre og Pantoufle fra
                                Dyrebeskyttelsen Norge Oslo og Akershus
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col items-center justify-start mt-[-0.01px] p-[10px] rounded-[12px] w-[50%] z-[1]">
                        <div className="bg-gray_67 border-[1px] border-indigo_105 border-solid flex flex-col gap-[180px] md:gap-[40px] items-start justify-start rounded-[8px] w-[301px]">
                          <Img
                            src="images/img_arrowdown_white_a700_44x44.svg"
                            className="h-[44px] w-[44px]"
                            alt="arrowdown Four"
                          />
                          <div className="bg-gradient50  flex items-start justify-start pb-[8px] pl-[16px] sm:pr-[20px] pr-[220.33px] md:pr-[40px] pt-[38px] w-[auto]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body78"
                            >
                              51 799 kr
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start mb-[8px] pb-[8px] w-[auto]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-normal mt-[21px] not-italic text-gray_602 text-left w-[auto]"
                              variant="body91"
                            >
                              Høvik
                            </Text>
                            <Img
                              src="images/img_user_gray_602.svg"
                              className="h-[24px] mb-[11px] mr-[3px] w-[24px]"
                              alt="user Four"
                            />
                          </div>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-bold leading-[22.00px] md:max-w-[100%] max-w-[288px] text-gray_857 text-left"
                              variant="body69"
                            >
                              Transition Spire Carbon GX Huckleberry
                              endurosykkel
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-white_A700 bottom-[0] flex flex-col items-center justify-start p-[10px] right-[0] rounded-[12px] w-[50%]">
                      <div className="bg-gray_67 border-[1px] border-indigo_105 border-solid flex flex-col gap-[180px] md:gap-[40px] items-start justify-start rounded-[8px] w-[301px]">
                        <Img
                          src="images/img_arrowdown_white_a700_44x44.svg"
                          className="h-[44px] w-[44px]"
                          alt="arrowdown Five"
                        />
                        <div className="bg-gradient50  flex items-start justify-start pb-[8px] pl-[16px] sm:pr-[20px] pr-[247.33px] md:pr-[40px] pt-[38px] w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            50 kr
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start mb-[30px] pb-[8px] w-[auto]">
                        <div className="flex flex-row items-start justify-between pr-[4px] w-[100%]">
                          <Text
                            className="font-normal mt-[22px] not-italic text-gray_602 text-left w-[auto]"
                            variant="body91"
                          >
                            Sarpsborg
                          </Text>
                          <Img
                            src="images/img_user_gray_602.svg"
                            className="h-[24px] mb-[12px] w-[24px]"
                            alt="user Five"
                          />
                        </div>
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-gray_857 text-left w-[auto]"
                            variant="body78"
                          >
                            Audi A8 3.0 Quattro selges i deler
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray_117 border-[1px] border-indigo_105 border-solid flex inset-x-[0] items-center justify-start mx-[auto] p-[25px] sm:px-[20px] top-[26%] w-[100%]">
            <div className="flex items-center justify-start md:w-[100%] w-[66%]">
              <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start px-[16px] w-[100%]">
                <Img
                  src="images/img_car_bluegray_941.svg"
                  className="h-[18px] w-[100px]"
                  alt="car One"
                />
                <Text
                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                  variant="body87"
                >
                  FINN.no er en del av Schibsted. Schibsted er ansvarlig for
                  dine data på denne siden. Les mer
                </Text>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-white_A700 border-[1px] border-gray_312 border-solid flex items-center justify-center mt-[7px] md:px-[20px] w-[100%]">
          <div className="flex items-center justify-center mt-[33px] mx-[auto] w-[64%]">
            <div className="flex flex-col items-center justify-center w-[100%]">
              <div className="flex flex-col gap-[48px] items-center justify-start md:w-[100%] w-[99%]">
                <div className="flex md:flex-col flex-row gap-[16px] items-start justify-between w-[100%]">
                  <div className="flex flex-col gap-[11px] items-start justify-start md:mt-[0] mt-[16px] w-[auto]">
                    <Img
                      src="images/img_ticket_white_a700_32x93.svg"
                      className="h-[32px] w-[93px]"
                      alt="ticket One"
                    />
                    <Text
                      className="font-bold text-bluegray_746 text-left w-[auto]"
                      variant="body60"
                    >
                      Mulighetenes marked
                    </Text>
                  </div>
                  <ul className="flex md:flex-1 flex-col items-start justify-center p-[16px] md:w-[100%] w-[auto] common-column-list">
                    <li className="mt-[1px] w-[auto]">
                      <Text
                        className="cursor-pointer font-bold text-bluegray_746 text-left"
                        variant="body73"
                      >
                        For bedrifter
                      </Text>
                    </li>
                    <li className="mt-[11px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        Bli bedriftskunde
                      </a>
                    </li>
                    <li className="mt-[9px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal leading-[18.00px] not-italic text-[13px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        Informasjon og inspirasjon
                      </a>
                    </li>
                    <li className="mt-[10px] mb-[27px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        Admin for bedrifter
                      </a>
                    </li>
                  </ul>
                  <ul className="flex md:flex-1 flex-col items-start justify-center p-[16px] md:w-[100%] w-[auto] common-column-list">
                    <li className="mt-[1px] w-[auto]">
                      <Text
                        className="cursor-pointer font-bold text-bluegray_746 text-left"
                        variant="body73"
                      >
                        Om FINN
                      </Text>
                    </li>
                    <li className="mt-[11px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        Jobbe i FINN
                      </a>
                    </li>
                    <li className="mt-[11px] mb-[70px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[13px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        FINNspirasjon
                      </a>
                    </li>
                  </ul>
                  <ul className="flex md:flex-1 flex-col items-start justify-center p-[16px] md:w-[100%] w-[auto] common-column-list">
                    <li className="mt-[2px] w-[auto]">
                      <Text
                        className="cursor-pointer font-bold text-bluegray_746 text-left"
                        variant="body78"
                      >
                        Personvern
                      </Text>
                    </li>
                    <li className="mt-[12px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        Personvernerklæring
                      </a>
                    </li>
                    <li className="mt-[9px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        Personvern i FINN
                      </a>
                    </li>
                    <li className="mt-[9px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal leading-[18.00px] not-italic text-[12px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        Innstillinger for personvern
                      </a>
                    </li>
                    <li className="mt-[10px] mb-[1px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        Cookies
                      </a>
                    </li>
                  </ul>
                  <ul className="flex md:flex-1 flex-col items-start justify-center p-[16px] md:w-[100%] w-[auto] common-column-list">
                    <li className="mt-[3px] w-[auto]">
                      <Text
                        className="cursor-pointer font-bold text-bluegray_746 text-left"
                        variant="body78"
                      >
                        Få hjelp
                      </Text>
                    </li>
                    <li className="mt-[11px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        Kundeservice
                      </a>
                    </li>
                    <li className="mt-[12px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        Fiks ferdig
                      </a>
                    </li>
                    <li className="mt-[9px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        Brukervilkår
                      </a>
                    </li>
                    <li className="mt-[12px] mb-[18px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_746 text-left"
                        href="javascript:"
                      >
                        Annonseregler
                      </a>
                    </li>
                  </ul>
                </div>
                <Line className="bg-bluegray_746 border-bluegray_108 border-solid border-t-[1px] h-[1px] w-[99%]" />
              </div>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                <Img
                  src="images/img_div_gray_858.svg"
                  className="h-[80px] w-[auto]"
                  alt="div"
                />
                <div className="flex md:flex-1 flex-col items-start justify-end md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal leading-[16.00px] md:ml-[0] ml-[15px] mt-[32px] not-italic text-gray_602 text-left sm:w-[100%] w-[95%]"
                    variant="body98"
                  >
                    Innholdet er beskyttet etter åndsverkloven. Regelmessig,
                    systematisk eller kontinuerlig innhenting, lagring,
                    indeksering, distribusjon og all annen form for
                    sammenstilling av data tillates ikke uten eksplisitt,
                    skriftlig tillatelse fra FINN.no.
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[15px] mt-[2px] not-italic text-gray_602 text-left w-[auto]"
                    variant="body91"
                  >
                    © 1996–2023 FINN.no AS
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WwwfinnnobyhtmltodesignFREEversion21022023Page;
