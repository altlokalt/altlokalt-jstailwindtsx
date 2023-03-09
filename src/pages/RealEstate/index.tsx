import React from "react";

import { Img, Text, Button, List, Line } from "components";

const RealEstatePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_58 flex font-manrope items-center justify-end mx-[auto] sm:pr-[20px] pr-[40px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1400px] mx-[auto] md:px-[20px] w-[100%]">
          <Img
            src="images/img_sidenavbar.svg"
            className="h-[1024px] w-[auto]"
            alt="sidenavbar"
          />
          <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[auto]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
              <Text
                className="font-bold text-bluegray_958 text-left w-[auto]"
                variant="body35"
              >
                Good Morning, Nesta!
              </Text>
              <Button className="bg-deep_purple_A705 flex h-[46px] items-center justify-center p-[8px] rounded-[10px] shadow-bs103 w-[46px]">
                <Img
                  src="images/img_settings_white_a700_46x46.svg"
                  className="h-[30px]"
                  alt="settings"
                />
              </Button>
            </div>
            <div className="flex h-[340px] md:h-[379px] justify-end mt-[39px] relative w-[100%]">
              <Text
                className="font-bold mb-[4px] mt-[auto] text-bluegray_958 text-left w-[auto]"
                variant="body48"
              >
                Popular Estate
              </Text>
              <div className="absolute bg-gray_400 border-[6px] border-solid border-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[15px] rounded-[25px] w-[100%]">
                <div className="flex flex-col gap-[9px] justify-start mb-[32px] w-[100%]">
                  <div className="md:h-[54px] h-[58px] relative w-[100%]">
                    <div className="absolute bg-white_A700 bottom-[0] flex inset-x-[0] items-start justify-start mx-[auto] p-[14px] rounded-[15px] shadow-bs104 w-[100%]">
                      <Img
                        src="images/img_search_bluegray_958.svg"
                        className="h-[26px] md:ml-[0] ml-[2px] w-[26px]"
                        alt="search"
                      />
                    </div>
                    <Text
                      className="absolute font-medium left-[5%] text-bluegray_446 text-left top-[0] w-[auto]"
                      variant="body78"
                    >
                      Find estate around your location
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:ml-[0] ml-[110px] md:w-[100%] w-[74%]">
                    <div className="flex flex-col gap-[7px] items-center justify-start md:mt-[0] mt-[30px] md:w-[100%] w-[12%]">
                      <Text
                        className="font-bold text-center text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        $115,000
                      </Text>
                      <Img
                        src="images/img_rectangle6.svg"
                        className="h-[52px] w-[auto]"
                        alt="RectangleSix"
                      />
                    </div>
                    <div className="flex flex-col gap-[34px] justify-start md:w-[100%] w-[70%]">
                      <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-deep_purple_A706 flex h-[15px] items-center justify-start mb-[34px] mt-[27px] p-[4px] rounded-[7px] shadow-bs105 w-[15px]">
                          <div className="bg-white_A700 h-[7px] rounded-[3px] w-[7px]"></div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[17%]">
                          <Text
                            className="font-bold text-center text-white_A700 w-[auto]"
                            variant="body69"
                          >
                            $150,000
                          </Text>
                          <Img
                            src="images/img_rectangle6.svg"
                            className="h-[52px] mt-[2px] w-[auto]"
                            alt="RectangleSix One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between ml-[auto] md:w-[100%] w-[59%]">
                        <div className="flex flex-col gap-[21px] items-center justify-start w-[30%]">
                          <Text
                            className="font-bold text-center text-white_A700 w-[auto]"
                            variant="body69"
                          >
                            $110,000
                          </Text>
                          <Img
                            src="images/img_rectangle6.svg"
                            className="h-[52px] w-[auto]"
                            alt="RectangleSix Two"
                          />
                        </div>
                        <div className="bg-deep_purple_A706 flex h-[15px] items-center justify-start mb-[27px] mt-[53px] p-[4px] rounded-[7px] shadow-bs105 w-[15px]">
                          <div className="bg-white_A700 h-[7px] rounded-[3px] w-[7px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[89px] w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[15px] shadow-bs104 w-[100%]">
                <div className="flex flex-col gap-[26px] items-center justify-start mb-[10px] w-[100%]">
                  <div className="bg-gray_400 flex flex-col items-start justify-end p-[9px] rounded-[9px] w-[100%]">
                    <Text
                      className="font-bold mt-[62px] text-bluegray_958 text-left w-[auto]"
                      variant="body60"
                    >
                      Murdiani Estate
                    </Text>
                    <Text
                      className="font-medium mt-[5px] text-bluegray_446 text-left w-[auto]"
                      variant="body82"
                    >
                      Cheap, affordable, and friendly neighbours
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[130px] mt-[9px] text-bluegray_958 text-left w-[auto]"
                      variant="body82"
                    >
                      5.0
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[25px] items-center justify-start md:w-[100%] w-[95%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Text
                        className="font-bold text-deep_purple_A705 text-left w-[auto]"
                        variant="body64"
                      >
                        $110,000
                      </Text>
                      <Text
                        className="font-medium mt-[2px] text-bluegray_958 text-left w-[auto]"
                        variant="body82"
                      >
                        5.0 (13 Reviews)
                      </Text>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-start md:w-[100%] w-[66%]">
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] mt-[12px] w-[20px]"
                            alt="star"
                          />
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] ml-[5px] mt-[12px] w-[20px]"
                            alt="star One"
                          />
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] ml-[5px] mt-[12px] w-[20px]"
                            alt="star Two"
                          />
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] ml-[5px] mt-[12px] w-[20px]"
                            alt="star Three"
                          />
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] ml-[5px] mt-[12px] w-[20px]"
                            alt="star Four"
                          />
                          <Text
                            className="font-bold mb-[7px] text-deep_purple_A705 text-left w-[auto]"
                            variant="body64"
                          >
                            View Details
                          </Text>
                        </div>
                        <Line className="bg-gray_213 h-[1px] mt-[24px] w-[100%]" />
                        <div className="bg-deep_purple_52 h-[54px] mt-[64px] rounded-[10px] w-[100%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[15px] shadow-bs104 w-[100%]">
                <div className="flex flex-col gap-[26px] items-center justify-start mb-[10px] w-[100%]">
                  <div className="bg-gray_400 flex flex-col items-start justify-end p-[9px] rounded-[9px] w-[100%]">
                    <Text
                      className="font-bold mt-[64px] text-bluegray_958 text-left w-[auto]"
                      variant="body60"
                    >
                      Tanapuri Estate
                    </Text>
                    <Text
                      className="font-medium mt-[3px] text-bluegray_446 text-left w-[auto]"
                      variant="body82"
                    >
                      Fully furnished and ready to use
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[130px] mt-[9px] text-bluegray_958 text-left w-[auto]"
                      variant="body82"
                    >
                      5.0
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[25px] items-center justify-start md:w-[100%] w-[95%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Text
                        className="font-bold text-deep_purple_A705 text-left w-[auto]"
                        variant="body64"
                      >
                        $115,000
                      </Text>
                      <Text
                        className="font-medium mt-[2px] text-bluegray_958 text-left w-[auto]"
                        variant="body82"
                      >
                        5.0 (13 Reviews)
                      </Text>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-start md:w-[100%] w-[66%]">
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] mt-[12px] w-[20px]"
                            alt="star One"
                          />
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] ml-[5px] mt-[12px] w-[20px]"
                            alt="star One One"
                          />
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] ml-[5px] mt-[12px] w-[20px]"
                            alt="star Two One"
                          />
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] ml-[5px] mt-[12px] w-[20px]"
                            alt="star Three One"
                          />
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] ml-[5px] mt-[12px] w-[20px]"
                            alt="star Four One"
                          />
                          <Text
                            className="font-bold mb-[7px] text-deep_purple_A705 text-left w-[auto]"
                            variant="body64"
                          >
                            View Details
                          </Text>
                        </div>
                        <Line className="bg-gray_213 h-[1px] mt-[24px] w-[100%]" />
                        <div className="bg-deep_purple_52 h-[54px] mt-[64px] rounded-[10px] w-[100%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[15px] shadow-bs104 w-[100%]">
                <div className="flex flex-col gap-[26px] items-center justify-start mb-[10px] w-[100%]">
                  <div className="bg-gray_400 flex flex-col items-start justify-end p-[9px] rounded-[9px] w-[100%]">
                    <Text
                      className="font-bold mt-[64px] text-bluegray_958 text-left w-[auto]"
                      variant="body60"
                    >
                      Gosang Estate
                    </Text>
                    <Text
                      className="font-medium mt-[3px] text-bluegray_446 text-left w-[auto]"
                      variant="body82"
                    >
                      Strategic place, in the middle of the city
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[130px] mt-[9px] text-bluegray_958 text-left w-[auto]"
                      variant="body82"
                    >
                      5.0
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[25px] items-center justify-start md:w-[100%] w-[95%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Text
                        className="font-bold text-deep_purple_A705 text-left w-[auto]"
                        variant="body64"
                      >
                        $155,000
                      </Text>
                      <Text
                        className="font-medium mt-[2px] text-bluegray_958 text-left w-[auto]"
                        variant="body82"
                      >
                        5.0 (13 Reviews)
                      </Text>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-start md:w-[100%] w-[66%]">
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] mt-[12px] w-[20px]"
                            alt="star Two"
                          />
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] ml-[5px] mt-[12px] w-[20px]"
                            alt="star One Two"
                          />
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] ml-[5px] mt-[12px] w-[20px]"
                            alt="star Two Two"
                          />
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] ml-[5px] mt-[12px] w-[20px]"
                            alt="star Three Two"
                          />
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] ml-[5px] mt-[12px] w-[20px]"
                            alt="star Four Two"
                          />
                          <Text
                            className="font-bold mb-[7px] text-deep_purple_A705 text-left w-[auto]"
                            variant="body64"
                          >
                            View Details
                          </Text>
                        </div>
                        <Line className="bg-gray_213 h-[1px] mt-[24px] w-[100%]" />
                        <div className="bg-deep_purple_52 h-[54px] mt-[64px] rounded-[10px] w-[100%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealEstatePage;
