import React from "react";

import { Text, List, Img, Button } from "components";

const PrPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-roboto items-start justify-start mx-[auto] pb-[316px] w-[100%]">
        <div className="flex items-center sm:pr-[20px] pr-[37px] w-[100%]">
          <div className="md:h-[2222px] h-[2223px] sm:h-[2429px] max-w-[1561px] mx-[auto] md:px-[20px] relative w-[100%]">
            <div className="absolute bg-gray_56 md:h-[2222px] h-[2223px] sm:h-[2429px] inset-[0] justify-center m-[auto] w-[100%]">
              <div className="bg-gray_56 h-[2222px] m-[auto] w-[100%]"></div>
              <div className="absolute flex flex-col gap-[32px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <div className="h-[1320px] sm:h-[1530px] md:h-[846px] relative w-[100%]">
                  <div className="absolute h-[1320px] sm:h-[1530px] md:h-[846px] inset-[0] justify-center m-[auto] w-[100%]">
                    <div className="absolute bg-gray_56 flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[98%]">
                      <div className="bg-gray_56 h-[474px] w-[100%]"></div>
                    </div>
                    <div className="absolute bg-gray_56 bottom-[0] sm:h-[1530px] md:h-[846px] h-[904px] inset-x-[0] mx-[auto] w-[100%]">
                      <div className="absolute md:h-[846px] h-[904px] inset-[0] justify-center m-[auto] md:w-[100%] w-[98%]">
                        <div className="absolute bg-gray_56 bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] sm:pr-[20px] pr-[29px] pt-[29px] w-[100%]">
                          <div className="flex flex-col gap-[26px] items-start justify-start mt-[493px] pt-[36px] md:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[1092.73px] md:gap-[40px] items-start justify-start sm:px-[20px] md:px-[40px] px-[48px] md:w-[100%] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_933 text-left w-[auto]"
                                  variant="body32"
                                >
                                  Produsenter
                                </Text>
                              </div>
                              <Text
                                className="bg-bluegray_51 font-medium justify-center pl-[19px] py-[8px] rounded-[8px] text-center text-gray_933 w-[auto]"
                                variant="body69"
                              >
                                Se alle
                              </Text>
                            </div>
                            <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start pb-[8px] sm:px-[20px] md:px-[40px] px-[48px] md:w-[100%] w-[auto]">
                              <div className="flex flex-col gap-[9px] items-start justify-start md:w-[100%] w-[49%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_933 text-left tracking-[0.03px] w-[auto]"
                                    variant="body60"
                                  >
                                    altlokalt.com annonser
                                  </Text>
                                </div>
                                <div className="bg-gradient26  flex items-center justify-start rounded-[8px] w-[100%]">
                                  <div className="bg-white_A700 border-[1px] border-black_902 border-solid flex items-start justify-start pb-[148px] sm:pl-[20px] pl-[213.33px] md:pl-[40px] pr-[8px] pt-[8px] rounded-[8px] w-[auto]">
                                    <div className="bg-gray_900_7a h-[24px] relative rounded-[4px] w-[100%]">
                                      <div className="absolute bg-gray_900_7a h-[24px] inset-[0] justify-center m-[auto] rounded-[4px] w-[97%]"></div>
                                      <Text
                                        className="absolute font-medium h-[max-content] inset-y-[0] my-[auto] right-[0] text-left text-white_A700 w-[auto]"
                                        variant="body78"
                                      >
                                        16 Leverandører
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[9px] items-start justify-start md:w-[100%] w-[49%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_933 text-left tracking-[0.03px] w-[auto]"
                                    variant="body60"
                                  >
                                    altlokalt.com Databaser
                                  </Text>
                                </div>
                                <div className="bg-gradient26  flex items-center justify-start rounded-[8px] w-[100%]">
                                  <div className="flex flex-col gap-[104px] md:gap-[40px] items-start justify-start pb-[148px] pl-[205.36px] sm:pl-[20px] md:pl-[40px] pr-[8px] pt-[8px] rounded-[8px] w-[auto]">
                                    <Text
                                      className="bg-gray_900_7a font-medium h-[24px] sm:pl-[20px] pl-[28px] py-[3px] rounded-[4px] text-left text-white_A700 w-[106px]"
                                      variant="body78"
                                    >
                                      246 Kampanjer
                                    </Text>
                                    <div className="flex items-center justify-start pb-[12px] pl-[16px] pr-[20px] w-[auto]">
                                      <div className="flex items-center justify-start pl-[4px] pr-[12.21px] py-[4px] w-[auto]">
                                        <Text
                                          className="font-medium text-center text-white_A700 w-[auto]"
                                          variant="body69"
                                        >
                                          125 heftig avslag
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col gap-[18px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[auto]">
                          <div className="flex flex-row gap-[1162.16px] md:gap-[40px] items-start justify-start sm:px-[20px] md:px-[40px] px-[48px] md:w-[100%] w-[auto]">
                            <div className="flex items-center justify-start pb-[3px] w-[auto]">
                              <Text
                                className="font-bold text-gray_933 text-left w-[auto]"
                                variant="body32"
                              >
                                .Ekspert
                              </Text>
                            </div>
                            <div className="bg-gray_900_14 flex items-start justify-start p-[9px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-medium md:ml-[0] ml-[36px] text-center text-gray_933 w-[auto]"
                                variant="body69"
                              >
                                Se alle
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                            <div className="flex md:flex-col flex-row gap-[16px] items-start justify-end pb-[8px] pl-[8px] w-[100%]">
                              <List
                                className="md:flex-1 sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[30%]"
                                orientation="horizontal"
                              >
                                <div className="bg-bluegray_900_4c flex items-start justify-end sm:ml-[0] p-[8px] rounded-[8px] w-[100%]">
                                  <div className="flex items-end justify-start mt-[152px] pl-[2px] py-[2px] md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-medium text-left text-white_A700 w-[auto]"
                                      variant="body69"
                                    >
                                      7
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-bluegray_900_4c flex items-start justify-end sm:ml-[0] p-[8px] rounded-[8px] w-[100%]">
                                  <div className="flex items-end justify-start mt-[152px] pl-[2px] py-[2px] md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-medium text-left text-white_A700 w-[auto]"
                                      variant="body69"
                                    >
                                      4
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-bluegray_900_4c flex items-start justify-end sm:ml-[0] p-[8px] rounded-[8px] w-[100%]">
                                  <div className="flex items-end justify-start mt-[152px] pl-[2px] py-[2px] md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-medium text-left text-white_A700 w-[auto]"
                                      variant="body69"
                                    >
                                      0
                                    </Text>
                                  </div>
                                </div>
                              </List>
                              <List
                                className="md:flex-1 sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 grid-cols-4 md:w-[100%] w-[40%]"
                                orientation="horizontal"
                              >
                                <div className="h-[192px] relative rounded-[8px] shadow-bs34 w-[100%]">
                                  <div className="bg-gray_708 flex h-[100%] items-center justify-start m-[auto] rounded-[8px] w-[100%]">
                                    <Img
                                      src="images/img_group4_white_a700.svg"
                                      className="h-[192px] rounded-[8px] w-[auto]"
                                      alt="div"
                                    />
                                  </div>
                                  <div className="absolute bottom-[4%] flex flex-col items-center justify-start left-[6%] pt-[4px] w-[47%]">
                                    <div className="flex items-start justify-start p-[2px] w-[100%]">
                                      <Text
                                        className="font-medium md:ml-[0] ml-[21px] text-left text-white_A700 w-[auto]"
                                        variant="body69"
                                      >
                                        2
                                      </Text>
                                    </div>
                                    <div className="flex items-end justify-end w-[100%]">
                                      <Text
                                        className="font-medium text-left text-white_A700 w-[auto]"
                                        variant="body69"
                                      >
                                        1,141
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute bg-yellow_700 h-[24px] right-[6%] rounded-[50%] top-[4%] w-[24px]"></div>
                                </div>
                                <div className="h-[192px] relative rounded-[8px] shadow-bs34 w-[100%]">
                                  <div className="bg-gray_708 flex h-[100%] items-center justify-start m-[auto] rounded-[8px] w-[100%]">
                                    <Img
                                      src="images/img_group4_white_a700.svg"
                                      className="h-[192px] rounded-[8px] w-[auto]"
                                      alt="div One"
                                    />
                                  </div>
                                  <div className="absolute bottom-[4%] flex flex-col items-center justify-start left-[6%] pt-[4px] w-[51px]">
                                    <div className="flex items-end justify-start p-[2px] w-[100%]">
                                      <Text
                                        className="font-medium mr-[15px] text-left text-white_A700 w-[auto]"
                                        variant="body69"
                                      >
                                        0
                                      </Text>
                                    </div>
                                    <div className="flex items-end justify-start pl-[2px] py-[2px] w-[100%]">
                                      <Text
                                        className="font-medium text-left text-white_A700 w-[auto]"
                                        variant="body69"
                                      >
                                        870
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute bg-yellow_700 h-[24px] right-[6%] rounded-[50%] top-[4%] w-[24px]"></div>
                                </div>
                                <div className="h-[192px] relative rounded-[8px] shadow-bs34 w-[100%]">
                                  <div className="bg-gray_708 flex h-[100%] items-center justify-start m-[auto] rounded-[8px] w-[100%]">
                                    <Img
                                      src="images/img_group4_white_a700.svg"
                                      className="h-[192px] rounded-[8px] w-[auto]"
                                      alt="div Two"
                                    />
                                  </div>
                                  <div className="absolute bottom-[4%] flex flex-col items-center justify-start left-[6%] pt-[4px] w-[51px]">
                                    <div className="flex items-end justify-start p-[2px] w-[100%]">
                                      <Text
                                        className="font-medium mr-[15px] text-left text-white_A700 w-[auto]"
                                        variant="body69"
                                      >
                                        7
                                      </Text>
                                    </div>
                                    <div className="flex items-end justify-start pl-[2px] py-[2px] w-[100%]">
                                      <Text
                                        className="font-medium text-left text-white_A700 w-[auto]"
                                        variant="body69"
                                      >
                                        893
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute bg-yellow_700 h-[24px] right-[6%] rounded-[50%] top-[4%] w-[24px]"></div>
                                </div>
                                <div className="h-[192px] relative rounded-[8px] shadow-bs34 w-[100%]">
                                  <div className="bg-gray_708 flex h-[100%] items-center justify-start m-[auto] rounded-[8px] w-[100%]">
                                    <Img
                                      src="images/img_group4_white_a700.svg"
                                      className="h-[192px] rounded-[8px] w-[auto]"
                                      alt="div Three"
                                    />
                                  </div>
                                  <div className="absolute bottom-[4%] flex flex-col items-center justify-start left-[6%] pt-[4px] w-[51px]">
                                    <div className="flex items-end justify-start p-[2px] w-[100%]">
                                      <Text
                                        className="font-medium mr-[15px] text-left text-white_A700 w-[auto]"
                                        variant="body69"
                                      >
                                        0
                                      </Text>
                                    </div>
                                    <div className="flex items-end justify-start p-[2px] w-[100%]">
                                      <Text
                                        className="font-medium text-left text-white_A700 w-[auto]"
                                        variant="body69"
                                      >
                                        971
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute bg-yellow_700 h-[24px] right-[6%] rounded-[50%] top-[4%] w-[24px]"></div>
                                </div>
                              </List>
                              <List
                                className="md:flex-1 sm:flex-col flex-row gap-[16px] grid grid-cols-2 md:w-[100%] w-[20%]"
                                orientation="horizontal"
                              >
                                <div className="bg-bluegray_900_4c flex items-start justify-end p-[8px] rounded-[8px] w-[100%]">
                                  <div className="flex items-end justify-start mt-[152px] pl-[2px] py-[2px] md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-medium text-left text-white_A700 w-[auto]"
                                      variant="body69"
                                    >
                                      2
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-bluegray_900_4c flex items-start justify-end p-[8px] rounded-[8px] w-[100%]">
                                  <div className="flex items-end justify-start mt-[152px] pl-[2px] py-[2px] md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-medium text-left text-white_A700 w-[auto]"
                                      variant="body69"
                                    >
                                      3
                                    </Text>
                                  </div>
                                </div>
                              </List>
                              <div className="bg-bluegray_900_4c flex md:flex-1 flex-col gap-[30px] items-start justify-end p-[8px] rounded-[8px] md:w-[100%] w-[7%]">
                                <div className="bg-gray_900_8e h-[80px] md:ml-[0] ml-[3px] mt-[42px] rounded-[50%] w-[80px]"></div>
                                <div className="flex items-end justify-start p-[2px] md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-medium text-left text-white_A700 w-[auto]"
                                    variant="body69"
                                  >
                                    1
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col gap-[26px] inset-x-[0] items-center justify-end mx-[auto] pt-[36px] top-[29%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[1167.1px] md:gap-[40px] items-start justify-start max-w-[1561px] sm:px-[20px] md:px-[40px] px-[48px] w-[100%]">
                          <div className="flex sm:flex-1 items-start justify-start sm:w-[100%] w-[auto]">
                            <Text
                              className="font-bold text-gray_933 text-left w-[auto]"
                              variant="body32"
                            >
                              Leverandører
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_312 font-medium h-[40px] justify-center pl-[27px] pr-[35px] sm:px-[20px] py-[10px] rounded-[8px] text-center text-gray_933 w-[114px]"
                            variant="body69"
                          >
                            Se alle
                          </Text>
                        </div>
                        <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-end pb-[8px] pl-[8px] w-[100%]">
                            <div className="flex relative md:w-[100%] w-[44%]">
                              <div className="flex flex-col gap-[9px] items-start justify-start my-[auto] w-[57%]">
                                <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-medium text-gray_933 text-left tracking-[0.03px] w-[auto]"
                                    variant="body60"
                                  >
                                    altlokalt.com Databaser(minfuel)
                                  </Text>
                                </div>
                                <div className="bg-gradient26  flex items-center justify-start rounded-[8px] md:w-[100%] w-[86%]">
                                  <div className="bg-gradient27  h-[180px] relative rounded-[8px] w-[100%]">
                                    <div className="absolute flex h-[100%] inset-[0] items-center justify-start m-[auto] pb-[148px] sm:pl-[20px] pl-[221.27px] md:pl-[40px] pr-[8px] pt-[8px] rounded-[8px] w-[auto]">
                                      <div className="bg-gradient28  flex flex-col gap-[20px] items-start justify-start pb-[53px] pl-[46.69px] pr-[46.31px] pt-[52.2px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[auto]">
                                        <Text
                                          className="bg-gray_900_7a font-medium h-[24px] justify-center pl-[28px] pr-[24px] sm:px-[20px] py-[3px] rounded-[4px] text-left text-white_A700 w-[90px]"
                                          variant="body78"
                                        >
                                          Gratis
                                        </Text>
                                        <div className="flex flex-col gap-[14.8px] items-start justify-start w-[auto]">
                                          <Text
                                            className="font-bold text-left text-white_A700 tracking-[0.17px] w-[auto]"
                                            variant="body32"
                                          >
                                            Coming soon
                                          </Text>
                                          <Text
                                            className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                            variant="body69"
                                          >
                                            2 days 16 hours and 22 minutes
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0] flex items-center justify-start pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                      <div className="flex items-center justify-start pl-[4px] pr-[12.21px] py-[4px] w-[auto]">
                                        <Text
                                          className="font-medium text-center text-white_A700 w-[auto]"
                                          variant="body69"
                                        >
                                          Rask responder
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[9px] items-center justify-start ml-[-37px] my-[auto] w-[49%] z-[1]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_933 text-left tracking-[0.03px] w-[auto]"
                                    variant="body60"
                                  >
                                    Hobbyister
                                  </Text>
                                </div>
                                <div className="bg-gradient26  flex items-center justify-start rounded-[8px] w-[100%]">
                                  <div className="bg-gradient27  flex items-center justify-start rounded-[8px] w-[100%]">
                                    <div className="flex items-start justify-start pb-[148px] sm:pl-[20px] pl-[228.69px] md:pl-[40px] pr-[8px] pt-[8px] rounded-[8px] w-[auto]">
                                      <div className="flex flex-col gap-[104px] md:gap-[40px] justify-start w-[100%]">
                                        <div className="flex flex-row items-start justify-between mr-[8px] md:w-[100%] w-[98%]">
                                          <Text
                                            className="bg-yellow_600 font-medium justify-center mb-[6px] pb-[3.8px] pl-[8px] pr-[8.17px] pt-[2.2px] rounded-[4px] text-gray_933 text-left text-shadow-ts2 w-[auto]"
                                            variant="body78"
                                          >
                                            Nytt
                                          </Text>
                                          <Text
                                            className="bg-gray_900_7a font-medium h-[24px] mt-[4px] pl-[3px] py-[3px] rounded-[4px] text-left text-white_A700 w-[83px]"
                                            variant="body78"
                                          >
                                            Leverandører
                                          </Text>
                                        </div>
                                        <div className="flex items-center justify-start md:ml-[0] ml-[120px] pb-[12px] pl-[16px] pr-[20px] w-[auto]">
                                          <div className="flex items-center justify-start pl-[4px] pr-[12.21px] py-[4px] w-[auto]">
                                            <Text
                                              className="font-medium text-center text-white_A700 w-[auto]"
                                              variant="body69"
                                            >
                                              1 comment
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start md:w-[100%] w-[22%]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-gray_933 text-left tracking-[0.03px] w-[auto]"
                                  variant="body60"
                                >
                                  Leie inn Database
                                </Text>
                              </div>
                              <div className="bg-gradient26  flex items-center justify-start rounded-[8px] w-[100%]">
                                <div className="bg-gradient27  h-[180px] relative rounded-[8px] w-[100%]">
                                  <div className="m-[auto] overflow-x-auto w-[100%]">
                                    <div className="bg-gradient27  flex md:flex-col flex-row md:gap-[40px] items-center justify-between overflow-auto rounded-[8px] w-[100%]">
                                      <div className="flex flex-row items-start justify-between pb-[148px] sm:pl-[20px] pl-[221.28px] md:pl-[40px] pr-[8px] pt-[8px] w-[auto]">
                                        <Text
                                          className="bg-yellow_600 font-medium justify-center pb-[3.8px] pl-[8px] pr-[8.17px] pt-[2.2px] rounded-[4px] text-gray_933 text-left text-shadow-ts2 w-[auto]"
                                          variant="body78"
                                        >
                                          Nyttig
                                        </Text>
                                        <Text
                                          className="bg-gray_900_7a font-medium h-[24px] p-[3px] rounded-[4px] text-left text-white_A700 w-[90px]"
                                          variant="body78"
                                        >
                                          Leverandører
                                        </Text>
                                      </div>
                                      <div className="bg-gradient27  h-[180px] rounded-[8px] w-[100%]"></div>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[0] flex items-center justify-start pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                    <div className="flex items-center justify-start pl-[4px] pr-[12.48px] py-[4px] w-[auto]">
                                      <Text
                                        className="font-medium text-center text-white_A700 w-[auto]"
                                        variant="body69"
                                      >
                                        4 comments
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start md:w-[100%] w-[22%]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-gray_933 text-left tracking-[0.03px] w-[auto]"
                                  variant="body60"
                                >
                                  Kjøp Database
                                </Text>
                              </div>
                              <div className="bg-gradient26  flex items-center justify-start rounded-[8px] w-[100%]">
                                <div className="bg-gradient27  flex items-center justify-start rounded-[8px] w-[100%]">
                                  <div className="flex flex-row items-start justify-between pb-[148px] sm:pl-[20px] pl-[221.28px] md:pl-[40px] pr-[8px] pt-[8px] rounded-[8px] w-[auto]">
                                    <Text
                                      className="bg-yellow_600 font-medium justify-center pb-[3.8px] pl-[8px] pr-[8.17px] pt-[2.2px] rounded-[4px] text-gray_933 text-left text-shadow-ts2 w-[auto]"
                                      variant="body78"
                                    >
                                      NYTT
                                    </Text>
                                    <Text
                                      className="bg-gray_900_7a font-medium h-[24px] p-[3px] rounded-[4px] text-left text-white_A700 w-[90px]"
                                      variant="body78"
                                    >
                                      Leverandører
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="overflow-x-auto w-[9%]">
                              <div className="flex flex-col gap-[9px] items-start justify-start overflow-auto w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_933 text-left tracking-[0.03px] w-[auto]"
                                    variant="body60"
                                  >
                                    servicerelatert
                                  </Text>
                                </div>
                                <div className="h-[180px] relative w-[100%]">
                                  <div className="bg-gradient26  h-[180px] m-[auto] rounded-[8px] w-[100%]"></div>
                                  <div className="absolute bg-gray_900_8e bottom-[14%] h-[80px] left-[11%] rounded-[50%] w-[80px]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gray_56 md:h-[474px] h-[475px] inset-x-[0] mx-[auto] top-[0] md:w-[100%] w-[98%]">
                    <Img
                      src="images/img_div_474x843.png"
                      className="absolute h-[474px] inset-y-[0] my-[auto] object-cover right-[0] w-[843px]"
                      alt="div Fifteen"
                    />
                    <div className="absolute flex flex-col gap-[57px] inset-x-[0] justify-start mx-[auto] sm:pl-[20px] pl-[31px] top-[9%] w-[99%]">
                      <div className="md:ml-[0] ml-[12px] overflow-x-auto w-[100%]">
                        <div className="flex flex-col md:gap-[40px] gap-[92px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_933 text-left w-[auto]"
                            variant="body19"
                          >
                            Velkommen til AltLokalt.no
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_933 text-left w-[auto]"
                            variant="body48"
                          >
                            Offisielt nettsted for AltLokalt.no - Her skal det
                            være veldig enkelt å Finne den eksakte lokale
                            leverandører som tilbyr ditt produkt og tjeneste!
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-blue_500 cursor-pointer font-medium min-w-[196px] mr-[1261px] pb-[13.25px] pl-[20.08px] sm:pl-[20px] pr-[19.92px] pt-[11.75px] rounded-[8px] text-[18px] text-center text-white_A700 w-[auto]">
                        Være med innsiden
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex sm:pr-[20px] md:pr-[40px] pr-[919.2px] relative md:w-[100%] w-[1518px]">
                  <div className="flex flex-col gap-[40px] items-start justify-center my-[auto] sm:pl-[20px] md:pl-[40px] pl-[41px] py-[41px] w-[42%]">
                    <div className="flex flex-col gap-[12.8px] items-start justify-start mt-[205px] sm:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_933 text-left w-[auto]"
                        variant="body32"
                      >
                        Handle Lokalt! e-handeltorget Der Du Bor!
                      </Text>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-normal leading-[28.00px] not-italic text-gray_933 text-left"
                          variant="body48"
                        >
                          Absolutt Alt rundt deg & Direkte fra de lokale
                          tilbyder!
                          <br />
                          Støtte din lokale hobbyister, gründere,
                          små/mellomstore bedrifter, familiebedrift,
                          næringlivet, kommune oversikt.
                          <br />
                          Disse partnere promoterer hele tiden arrangementer,
                          stillingsannonser, produkter, tjenester osv.
                          <br />
                          Få gode rabatter, god service og kvalitetstid, og spar
                          ikke minst på lommeboken
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[20px] items-center justify-start mb-[245px] pr-[169.15px] sm:pr-[20px] md:pr-[40px] sm:w-[100%] w-[auto]">
                      <Button className="bg-blue_500 cursor-pointer font-medium min-w-[100px] pb-[12.5px] pl-[20px] pr-[19.85px] pt-[11px] rounded-[8px] text-[18px] text-center text-white_A700 w-[auto]">
                        Bli med
                      </Button>
                      <div className="flex flex-row gap-[5.31px] items-center justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_709 text-left w-[auto]"
                          variant="body69"
                        >
                          Oppfattet! Ta meg ditt
                        </Text>
                        <div className="flex items-start justify-start pl-[8px] pr-[7.69px] py-[8px] w-[auto]">
                          <Text
                            className="font-medium text-blue_500 text-center w-[auto]"
                            variant="body69"
                          >
                            Logg in
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start ml-[-597px] mr-[auto] mt-[auto] px-[16px] w-[95%] z-[1]">
                    <Text
                      className="font-normal leading-[16.00px] md:ml-[0] ml-[592px] not-italic text-center text-gray_709 sm:w-[100%] w-[27%]"
                      variant="body78"
                    >
                      <span className="text-gray_709 text-[14px] font-roboto">
                        Komme i Kontakt med lokale folk som bare kan, eller
                        tilbyr det du er ute etter, i Hele ditt byen{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_500 text-[14px] font-roboto underline"
                      >
                        ALTLOKALT.com
                      </a>
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end mt-[11px] pb-[2px] px-[2px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-center text-gray_512 w-[auto]"
                        variant="body98"
                      >
                        Kjøp direkte fra din lokale leverandør eller tilbyder!
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[55px] not-italic text-center text-gray_512 w-[auto]"
                        variant="body98"
                      >
                        •
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[38px] not-italic text-center text-gray_512 w-[auto]"
                        variant="body98"
                      >
                        ALT DU MÅTE TRENGER TIL DITT HVERDAGEN
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[39px] not-italic text-center text-gray_512 w-[auto]"
                        variant="body98"
                      >
                        •
                      </Text>
                      <a
                        className="font-normal sm:ml-[0] ml-[2px] mr-[204px] not-italic text-[10px] text-center text-gray_512 underline w-[auto]"
                        href="javascript:"
                      >
                        handle direkte fra lokale Ekspert, leverandørerde,
                        produsenter! Inkluderende lokale tjenester og
                        servicerelaterte yrker som man kan leie inn
                      </a>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[303px] md:w-[100%] w-[57%]">
                      <Text
                        className="font-normal mb-[2px] md:ml-[0] ml-[59px] not-italic text-center text-gray_512 w-[auto]"
                        variant="body98"
                      >
                        Terms{" "}
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[5px] not-italic text-center text-gray_512 w-[auto]"
                        variant="body98"
                      >
                        Alt i samme plattform
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[45px] not-italic text-center text-gray_512 w-[auto]"
                        variant="body98"
                      >
                        Vi sørger for samme og neste dags levering
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[61px] not-italic text-center text-gray_512 w-[auto]"
                        variant="body98"
                      >
                        DMCA & Complaints Policy •
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] p-[9px] top-[0] w-[98%]">
              <div className="flex items-center justify-start pl-[8px] pr-[12.01px] md:w-[100%] w-[auto]">
                <div className="flex flex-row items-start justify-end ml-[auto] w-[10%]">
                  <div className="flex items-center justify-start py-[8px] w-[auto]">
                    <Text
                      className="font-medium text-center text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Sign in
                    </Text>
                  </div>
                  <Text
                    className="font-medium ml-[3px] mt-[11px] text-left text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    or
                  </Text>
                  <div className="flex items-start justify-start ml-[11px] py-[10px] w-[auto]">
                    <Text
                      className="font-medium text-center text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Join
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_925 flex flex-col font-inter items-end justify-start mt-[276px] pb-[35px] md:px-[20px] md:w-[100%] w-[90%]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex md:flex-col flex-row gap-[20px] items-start justify-end overflow-auto sm:pl-[20px] md:pl-[40px] pl-[438px] w-[100%]">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[19px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[80%]"
                orientation="horizontal"
              >
                <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-between sm:ml-[0] w-[100%]">
                  <Text
                    className="font-normal leading-[50.00px] not-italic text-left text-orange_51 uppercase w-[auto]"
                    variant="body15"
                  >
                    Slottsfjell partner
                  </Text>
                  <Img
                    src="images/img_airplane.svg"
                    className="h-[78px] sm:mt-[0] mt-[3px] w-[auto]"
                    alt="airplane"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-between sm:ml-[0] w-[100%]">
                  <Text
                    className="font-normal leading-[50.00px] not-italic text-left text-orange_51 uppercase w-[auto]"
                    variant="body15"
                  >
                    Slottsfjell partner
                  </Text>
                  <Img
                    src="images/img_airplane.svg"
                    className="h-[78px] sm:mt-[0] mt-[3px] w-[auto]"
                    alt="airplane One"
                  />
                </div>
              </List>
              <div className="flex sm:flex-1 items-start justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="font-normal leading-[50.00px] md:max-w-[100%] max-w-[364px] not-italic text-left text-orange_51 uppercase"
                  variant="body15"
                >
                  Slottsfjell partner
                </Text>
              </div>
            </div>
          </div>
          <Img
            src="images/img_622a1bccb639a45.svg"
            className="h-[82px] mt-[30px] w-[350px]"
            alt="622a1bccb639aFortyFive"
          />
          <div className="flex flex-col gap-[45px] items-center justify-start mt-[30px] md:w-[100%] w-[85%]">
            <Img
              src="images/img_div_red_a703.svg"
              className="h-[72px] w-[auto]"
              alt="div Sixteen"
            />
            <Img
              src="images/img_div_black_902.svg"
              className="h-[62px] w-[auto]"
              alt="div Seventeen"
            />
          </div>
          <div className="flex sm:flex-col flex-row font-poppins gap-[26px] items-center justify-center mt-[55px] w-[100%]">
            <Text
              className="font-bold sm:ml-[0] ml-[514px] text-left text-orange_51 w-[auto]"
              variant="body39"
            >
              Til alle partnere
            </Text>
            <Img
              src="images/img_arrowright_deep_orange_300.svg"
              className="h-[33px] mr-[602px] w-[auto]"
              alt="arrowright"
            />
          </div>
        </div>
        <div className="flex font-roboto items-end mt-[57px] pl-[119px] sm:pl-[20px] md:pl-[40px] w-[100%]">
          <footer className="flex items-center justify-center w-[100%]">
            <div className="flex flex-col items-center justify-center mb-[20px] ml-[115px] mr-[3px] sm:pr-[20px] pr-[29px] pt-[29px] w-[92%]">
              <Text
                className="font-normal not-italic text-gray_607 text-left w-[auto]"
                variant="body69"
              >
                Questions? Contact us.
              </Text>
              <div className="flex items-start justify-start mt-[28px] pb-[15px] pr-[15px] md:w-[100%] w-[76%]">
                <ul className="flex flex-col items-start justify-start md:w-[100%] w-[88%] common-column-list">
                  <li className="w-[97%]">
                    <div className="cursor-pointer flex md:flex-col flex-row md:gap-[20px] items-start justify-end">
                      <Text
                        className="font-normal not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        FAQ
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[226px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        Help Center
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[181px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body87"
                      >
                        Account
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[205px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        Media Center
                      </Text>
                    </div>
                  </li>
                  <li className="mt-[13px] w-[100%]">
                    <div className="cursor-pointer flex md:flex-col flex-row md:gap-[20px] items-start justify-end">
                      <Text
                        className="font-normal not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        Investor Relations
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[145px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body87"
                      >
                        Jobs
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[223px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        Netflix Shop
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[179px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        Redeem Gift Cards
                      </Text>
                    </div>
                  </li>
                  <li className="mt-[14px] w-[93%]">
                    <div className="cursor-pointer flex md:flex-col flex-row md:gap-[20px] items-start justify-start">
                      <Text
                        className="font-normal not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        Buy Gift Cards
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[167px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        Ways to Watch
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[164px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body87"
                      >
                        Terms of Use
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[178px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        Privacy
                      </Text>
                    </div>
                  </li>
                  <li className="mt-[13px] w-[95%]">
                    <div className="cursor-pointer flex md:flex-col flex-row md:gap-[20px] items-start justify-start">
                      <Text
                        className="font-normal not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        Cookie Preferences
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[137px] md:mt-[0] mt-[2px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body87"
                      >
                        Corporate Information
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[131px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        Contact Us
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[185px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        Speed Test
                      </Text>
                    </div>
                  </li>
                  <li className="mt-[14px] w-[82%]">
                    <div className="cursor-pointer flex md:flex-col flex-row md:gap-[20px] items-start justify-start">
                      <Text
                        className="font-normal not-italic text-gray_607 text-left w-[auto]"
                        variant="body87"
                      >
                        Legal Notices
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[176px] not-italic text-gray_607 text-left w-[auto]"
                        variant="body82"
                      >
                        Only on Netflix
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[165px] not-italic text-gray_607 text-left sm:w-[100%] w-[29%]"
                        variant="body82"
                      >
                        Do Not Sell or Share My Personal Information
                      </Text>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-start mt-[20px] w-[10%] md:w-[100%]">
                <div className="bg-black_902 border-[1px] border-bluegray_919 border-solid flex items-start justify-start md:pl-[40px] pl-[51px] pr-[27px] sm:px-[20px] py-[12px] rounded-[2px] w-[auto]">
                  <div className="flex items-start justify-start pb-[0.09px] pr-[4px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_607 text-left w-[auto]"
                      variant="body82"
                    >
                      English
                    </Text>
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

export default PrPage;
