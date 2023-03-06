import React from "react";

import { Text, Img, Line, Button } from "components";

const RealEstateOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_58 flex sm:flex-col md:flex-col flex-row font-manrope gap-[14px] items-start mx-[auto] pr-[111px] sm:pr-[20px] md:pr-[40px] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start w-[266px]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="h-[1024px] md:h-[213px] sm:h-[784px] relative w-[100%]">
              <div className="h-[1024px] md:h-[213px] m-[auto] w-[100%]">
                <div className="absolute h-[1024px] md:h-[213px] inset-[0] justify-center m-[auto] w-[97%]">
                  <div className="absolute bg-light_blue_909 h-[1024px] md:h-[93px] inset-y-[0] left-[0] my-[auto] p-[40px] sm:px-[20px] shadow-bs112 w-[94%]">
                    <div className="absolute h-[149px] md:h-[83px] left-[4%] top-[25%] w-[48%]">
                      <div className="absolute flex flex-col gap-[15px] inset-x-[0] justify-start mx-[auto] top-[0] w-[97%]">
                        <Text
                          className="font-medium md:ml-[0] ml-[57px] text-indigo_308 text-left w-[auto]"
                          variant="body64"
                        >
                          Saved
                        </Text>
                        <Img
                          src="images/img_bookmark_indigo_308.svg"
                          className="h-[32px] w-[32px]"
                          alt="bookmark"
                        />
                      </div>
                      <div className="absolute bottom-[0] flex flex-col gap-[26px] inset-x-[0] justify-start mx-[auto] w-[100%]">
                        <Text
                          className="font-medium md:ml-[0] ml-[57px] text-indigo_308 text-left w-[auto]"
                          variant="body64"
                        >
                          Profile
                        </Text>
                        <Img
                          src="images/img_search_indigo_308.svg"
                          className="h-[32px] w-[32px]"
                          alt="search"
                        />
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-[36px] justify-start left-[4%] top-[38%] w-[54%]">
                      <Text
                        className="font-medium md:ml-[0] ml-[57px] text-indigo_308 text-left w-[auto]"
                        variant="body64"
                      >
                        Settings
                      </Text>
                      <Img
                        src="images/img_settings_indigo_308.svg"
                        className="h-[32px] w-[32px]"
                        alt="settings One"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_vector_213x257.png"
                    className="absolute bottom-[15%] h-[213px] inset-x-[0] mx-[auto] object-cover w-[auto]"
                    alt="Vector"
                  />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat flex h-[208px] inset-x-[0] items-end justify-start mx-[auto] p-[26px] sm:px-[20px] top-[0] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_vector_213x257.png')",
                  }}
                >
                  <div className="flex flex-col gap-[46px] items-start justify-start mb-[5px] mt-[13px] md:w-[100%] w-[94%]">
                    <div className="flex flex-row gap-[17px] items-start justify-start md:w-[100%] w-[73%]">
                      <div className="md:h-[23px] h-[34px] ml-[2px] my-[2px] relative w-[34px]">
                        <Img
                          src="images/img_vector_blue_404.svg"
                          className="absolute bottom-[0] h-[15px] inset-x-[0] mx-[auto] w-[auto]"
                          alt="Vector One"
                        />
                        <Img
                          src="images/img_vector_white_a700_19x34.svg"
                          className="absolute h-[19px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                          alt="Vector Two"
                        />
                      </div>
                      <Text
                        className="mt-[6px] text-left text-white_A700 w-[auto]"
                        variant="body52"
                      >
                        Realyta
                      </Text>
                    </div>
                    <div className="flex flex-row items-end justify-between w-[100%]">
                      <div className="flex flex-row gap-[25px] items-start justify-start w-[auto]">
                        <Img
                          src="images/img_settings_white_a700_32x32.svg"
                          className="h-[32px] mt-[18px] w-[32px]"
                          alt="settings Two"
                        />
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body64"
                        >
                          Dashboard
                        </Text>
                      </div>
                      <Line className="bg-blue_405 h-[32px] mt-[18px] w-[6px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[4%] flex flex-col md:gap-[40px] gap-[561px] items-start justify-start left-[15%] w-[51%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-medium md:ml-[0] ml-[57px] text-indigo_308 text-left w-[auto]"
                    variant="body64"
                  >
                    Message
                  </Text>
                  <Img
                    src="images/img_frame_indigo_308.svg"
                    className="h-[32px] mt-[2px] w-[32px]"
                    alt="Frame"
                  />
                </div>
                <div className="flex flex-col gap-[107px] md:gap-[40px] justify-start md:w-[100%] w-[89%]">
                  <Text
                    className="font-medium md:ml-[0] ml-[57px] text-deep_orange_115 text-left w-[auto]"
                    variant="body64"
                  >
                    Logout
                  </Text>
                  <Img
                    src="images/img_arrowleft_deep_orange_115.svg"
                    className="h-[32px] w-[32px]"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-1 h-[1024px] relative w-[100%]">
          <div className="flex flex-row sm:gap-[40px] h-[100%] items-start justify-between ml-[35px] mt-[38px] w-[53%]">
            <Text
              className="font-bold text-bluegray_958 text-left w-[auto]"
              variant="body35"
            >
              Explore Estate
            </Text>
            <Button className="bg-blue_405 flex h-[46px] items-center justify-center p-[10px] rounded-[10px] shadow-bs113 w-[46px]">
              <Img
                src="images/img_search_white_a700_46x46.svg"
                className="h-[26px]"
                alt="search One"
              />
            </Button>
          </div>
          <div className="absolute h-[1024px] inset-[0] justify-center m-[auto] w-[100%]">
            <div className="absolute bottom-[3%] md:h-[730px] h-[880px] left-[0] md:w-[100%] w-[64%]">
              <div className="flex flex-col m-[auto] w-[100%]">
                <div className="flex items-center justify-start mx-[auto] w-[100%]">
                  <div className="flex flex-col gap-[233px] md:gap-[40px] items-center justify-start w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[26px] items-start justify-between mx-[auto] w-[100%]">
                        <div className="bg-white_A700 flex md:flex-1 items-start justify-start rounded-[15px] shadow-bs104 md:w-[100%] w-[auto]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mb-[9px] md:ml-[0] ml-[9px] md:w-[100%] w-[73%]">
                            <div className="bg-gray_400 h-[110px] sm:mt-[0] mt-[9px] rounded-[9px] w-[33%]"></div>
                            <Img
                              src="images/img_star_yellow_909.svg"
                              className="h-[20px] sm:ml-[0] ml-[20px] sm:mt-[0] mt-[89px] w-[20px]"
                              alt="star"
                            />
                            <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[38px] sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-bluegray_958 text-left w-[auto]"
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
                                className="font-medium md:ml-[0] ml-[33px] mt-[9px] text-bluegray_958 text-left w-[auto]"
                                variant="body82"
                              >
                                5.0 (13 Reviews)
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="font-bold md:mt-[0] mt-[2px] text-light_blue_909 text-right w-[auto]"
                          variant="body69"
                        >
                          $110,000
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between mt-[-1.67px] mx-[auto] w-[100%] z-[1]">
                        <div className="h-[151px] relative md:w-[100%] w-[88%]">
                          <Text
                            className="font-bold mb-[-6.33px] ml-[247px] text-bluegray_958 text-left w-[auto] z-[1]"
                            variant="body60"
                          >
                            Gozali Estate
                          </Text>
                          <div className="bg-white_A700 flex items-start justify-start mt-[auto] mx-[auto] p-[10px] rounded-[15px] shadow-bs104 w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:w-[100%] w-[66%]">
                              <div className="bg-gray_400 h-[110px] rounded-[9px] w-[37%]"></div>
                              <Img
                                src="images/img_star_yellow_909.svg"
                                className="h-[20px] sm:ml-[0] ml-[20px] sm:mt-[0] mt-[80px] w-[20px]"
                                alt="star One"
                              />
                              <div className="flex flex-col gap-[9px] justify-start sm:ml-[0] ml-[38px] sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_446 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Fully furnished and ready to use
                                </Text>
                                <Text
                                  className="font-medium md:ml-[0] ml-[33px] text-bluegray_958 text-left w-[auto]"
                                  variant="body82"
                                >
                                  4.6 (28 Reviews)
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="font-bold md:mt-[0] mt-[2px] text-light_blue_909 text-right w-[auto]"
                          variant="body69"
                        >
                          $123,000
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[7px] justify-start w-[100%]">
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[247px] md:w-[100%] w-[69%]">
                          <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                            <Text
                              className="font-bold text-bluegray_958 text-left w-[auto]"
                              variant="body60"
                            >
                              Taroka Estate
                            </Text>
                            <Text
                              className="font-bold mt-[2px] text-light_blue_909 text-right w-[auto]"
                              variant="body69"
                            >
                              $110,000
                            </Text>
                          </div>
                          <Text
                            className="font-medium mt-[5px] text-bluegray_446 text-left w-[auto]"
                            variant="body82"
                          >
                            Cheap, affordable, and friendly neighbours
                          </Text>
                          <Text
                            className="font-medium md:ml-[0] ml-[33px] mt-[9px] text-bluegray_958 text-left w-[auto]"
                            variant="body82"
                          >
                            5.0 (13 Reviews)
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-row gap-[20px] items-start justify-start mr-[97px] p-[10px] rounded-[15px] shadow-bs104 md:w-[100%] w-[88%]">
                          <div className="bg-gray_400 h-[110px] rounded-[9px] w-[25%]"></div>
                          <Img
                            src="images/img_star_yellow_909.svg"
                            className="h-[20px] mt-[80px] w-[20px]"
                            alt="star Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-[-88.95px] mx-[auto] w-[100%] z-[1]">
                  <div className="flex flex-col gap-[29px] justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[247px] md:w-[100%] w-[69%]">
                      <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-bluegray_958 text-left w-[auto]"
                          variant="body60"
                        >
                          Raidit Estate
                        </Text>
                        <Text
                          className="font-bold text-light_blue_909 text-right w-[auto]"
                          variant="body69"
                        >
                          $123,000
                        </Text>
                      </div>
                      <Text
                        className="font-medium mt-[5px] text-bluegray_446 text-left w-[auto]"
                        variant="body82"
                      >
                        Fully furnished and ready to use
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[33px] mt-[9px] text-bluegray_958 text-left w-[auto]"
                        variant="body82"
                      >
                        4.6 (28 Reviews)
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-row gap-[20px] items-start justify-start mr-[97px] p-[10px] rounded-[15px] shadow-bs104 md:w-[100%] w-[88%]">
                      <div className="bg-gray_400 h-[110px] rounded-[9px] w-[25%]"></div>
                      <Img
                        src="images/img_star_yellow_909.svg"
                        className="h-[20px] mt-[80px] w-[20px]"
                        alt="star Three"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-[-NaNpx] mx-[auto] w-[100%] z-[1]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <div className="flex flex-row gap-[311px] sm:gap-[40px] items-start justify-end ml-[auto] md:w-[100%] w-[69%]">
                      <Text
                        className="font-bold text-bluegray_958 text-left w-[auto]"
                        variant="body60"
                      >
                        Tempani Estate
                      </Text>
                      <Text
                        className="font-bold text-light_blue_909 text-right w-[auto]"
                        variant="body69"
                      >
                        $115,500
                      </Text>
                    </div>
                    <div className="h-[139px] mr-[97px] mt-[3px] relative md:w-[100%] w-[88%]">
                      <Text
                        className="font-medium mb-[-8.21px] ml-[auto] mr-[191px] text-bluegray_446 text-left w-[auto] z-[1]"
                        variant="body82"
                      >
                        Strategic place, in the middle of the city
                      </Text>
                      <div className="bg-white_A700 flex flex-row items-start justify-start mt-[auto] mx-[auto] p-[10px] rounded-[15px] shadow-bs104 w-[100%]">
                        <div className="bg-gray_400 h-[110px] rounded-[9px] w-[25%]"></div>
                        <Img
                          src="images/img_star_yellow_909.svg"
                          className="h-[20px] ml-[20px] mt-[80px] w-[20px]"
                          alt="star Four"
                        />
                        <Text
                          className="font-medium ml-[72px] mt-[7px] text-bluegray_958 text-left w-[auto]"
                          variant="body82"
                        >
                          5.0 (13 Reviews)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[34%] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                <div className="flex flex-col gap-[10px] justify-start w-[100%]">
                  <div className="flex flex-col gap-[6px] items-start justify-start md:ml-[0] ml-[247px] md:w-[100%] w-[69%]">
                    <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                      <Text
                        className="font-bold text-bluegray_958 text-left w-[auto]"
                        variant="body60"
                      >
                        Inomasa Estate
                      </Text>
                      <Text
                        className="font-bold mt-[2px] text-light_blue_909 text-right w-[auto]"
                        variant="body69"
                      >
                        $150,000
                      </Text>
                    </div>
                    <Text
                      className="font-medium text-bluegray_446 text-left w-[auto]"
                      variant="body82"
                    >
                      Clean design and modern architecture
                    </Text>
                  </div>
                  <div className="md:h-[130px] h-[133px] mr-[97px] relative md:w-[100%] w-[88%]">
                    <div className="absolute bg-white_A700 flex flex-row gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] p-[10px] rounded-[15px] shadow-bs104 w-[100%]">
                      <div className="bg-gray_400 h-[110px] rounded-[9px] w-[25%]"></div>
                      <Img
                        src="images/img_star_yellow_909.svg"
                        className="h-[20px] mt-[80px] w-[20px]"
                        alt="star Five"
                      />
                    </div>
                    <Text
                      className="absolute font-medium inset-x-[0] mx-[auto] text-bluegray_958 text-left top-[0] w-[max-content]"
                      variant="body82"
                    >
                      4.6 (28 Reviews)
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[1024px] inset-y-[0] my-[auto] right-[0] sm:w-[100%] w-[42%]">
              <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[40px] sm:px-[20px] shadow-bs112 w-[87%]">
                <div className="bg-gray_400 flex items-center justify-start p-[28px] sm:px-[20px] rounded-[9px] w-[100%]">
                  <div className="flex flex-col gap-[153px] md:gap-[40px] justify-start mb-[58px] mt-[54px] md:w-[100%] w-[98%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <div className="bg-blue_405 flex h-[15px] items-center justify-start md:ml-[0] ml-[202px] mr-[80px] p-[4px] rounded-[7px] shadow-bs114 w-[15px]">
                        <div className="bg-white_A700 h-[7px] rounded-[3px] w-[7px]"></div>
                      </div>
                      <div className="flex flex-col justify-start md:ml-[0] ml-[36px] mt-[55px] md:w-[100%] w-[78%]">
                        <Text
                          className="font-bold md:ml-[0] ml-[159px] text-center text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          $110,000
                        </Text>
                        <Img
                          src="images/img_rectangle6_blue_405.svg"
                          className="h-[52px] mr-[128px] w-[auto]"
                          alt="RectangleSix"
                        />
                      </div>
                      <div className="bg-blue_405 flex h-[15px] items-center justify-start md:ml-[0] ml-[65px] mr-[217px] mt-[192px] p-[4px] rounded-[7px] shadow-bs114 w-[15px]">
                        <div className="bg-white_A700 h-[7px] rounded-[3px] w-[7px]"></div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[102px] w-[100%]">
                        <div className="flex flex-col md:gap-[40px] gap-[65px] justify-start mb-[12px] w-[77%]">
                          <Text
                            className="font-bold md:ml-[0] ml-[154px] text-center text-white_A700 w-[auto]"
                            variant="body69"
                          >
                            $124,000
                          </Text>
                          <Img
                            src="images/img_rectangle6_blue_405.svg"
                            className="h-[52px] mr-[125px] w-[auto]"
                            alt="RectangleSix One"
                          />
                        </div>
                        <div className="bg-blue_405 flex h-[15px] items-center justify-start mt-[137px] p-[4px] rounded-[7px] shadow-bs114 w-[15px]">
                          <div className="bg-white_A700 h-[7px] rounded-[3px] w-[7px]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_405 flex h-[15px] items-center justify-start md:ml-[0] ml-[80px] mr-[202px] p-[4px] rounded-[7px] shadow-bs114 w-[15px]">
                      <div className="bg-white_A700 h-[7px] rounded-[3px] w-[7px]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col gap-[20px] justify-start right-[0] top-[31%] w-[50%]">
                <Text
                  className="font-bold md:ml-[0] ml-[179px] text-center text-white_A700 w-[auto]"
                  variant="body69"
                >
                  $115,000
                </Text>
                <Img
                  src="images/img_rectangle6_blue_405.svg"
                  className="h-[52px] mr-[147px] w-[auto]"
                  alt="RectangleSix Two"
                />
              </div>
              <div className="absolute bottom-[12%] flex flex-col md:gap-[40px] gap-[93px] justify-start right-[0] w-[50%]">
                <Text
                  className="font-bold md:ml-[0] ml-[177px] text-center text-white_A700 w-[auto]"
                  variant="body69"
                >
                  $100,000
                </Text>
                <Img
                  src="images/img_rectangle6_blue_405.svg"
                  className="h-[52px] mr-[150px] w-[auto]"
                  alt="RectangleSix Three"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealEstateOnePage;
