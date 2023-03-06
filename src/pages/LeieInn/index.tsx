import React from "react";

import { Text, Img, Button, Input, List } from "components";
import { CloseSVG } from "../../assets/images";

const LeieInnPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex font-dmsans items-center justify-end mx-[auto] sm:pl-[20px] pl-[31px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between max-w-[1408px] mx-[auto] md:px-[20px] w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:mt-[0] mt-[55px] w-[239px]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex flex-row items-end justify-start md:w-[100%] w-[21%]">
                <Text
                  className="font-normal font-poetsenone not-italic text-center text-green_611 tracking-[-0.64px] w-[auto]"
                  variant="body35"
                >
                  S
                </Text>
                <Text
                  className="font-bold font-montserrat mt-[16px] text-bluegray_919 text-left tracking-[-0.36px] w-[auto]"
                  variant="body64"
                >
                  tay.
                </Text>
              </div>
              <div className="flex flex-col gap-[33px] items-start justify-start mt-[61px] w-[100%]">
                <div className="flex flex-col gap-[48px] items-start justify-start md:ml-[0] ml-[13px] md:w-[100%] w-[52%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                    <Img
                      src="images/img_grid_gray_542.svg"
                      className="h-[24px] w-[24px]"
                      alt="grid"
                    />
                    <Text
                      className="font-bold text-gray_542 text-left tracking-[-0.32px] w-[auto]"
                      variant="body69"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[72%]">
                    <Img
                      src="images/img_user_gray_542.svg"
                      className="h-[24px] w-[24px]"
                      alt="user"
                    />
                    <Text
                      className="font-bold text-gray_542 text-left tracking-[-0.32px] w-[auto]"
                      variant="body69"
                    >
                      Profile
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_129 flex items-start justify-start p-[13px] rounded-[12px] w-[100%]">
                  <div className="flex flex-row gap-[15px] items-start justify-start md:w-[100%] w-[42%]">
                    <Img
                      src="images/img_menu_green_611.svg"
                      className="h-[24px] w-[24px]"
                      alt="menu"
                    />
                    <Text
                      className="font-bold mt-[3px] text-green_611 text-left tracking-[-0.32px] w-[auto]"
                      variant="body69"
                    >
                      Listing
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[13px] md:w-[100%] w-[43%]">
                  <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_settings_gray_542.svg"
                      className="h-[24px] w-[24px]"
                      alt="settings"
                    />
                    <Text
                      className="font-bold mt-[3px] text-gray_542 text-left tracking-[-0.32px] w-[auto]"
                      variant="body69"
                    >
                      Settings
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start mt-[47px] md:w-[100%] w-[98%]">
                    <Img
                      src="images/img_star_gray_542.svg"
                      className="h-[24px] w-[24px]"
                      alt="star"
                    />
                    <Text
                      className="font-bold text-gray_542 text-left tracking-[-0.32px] w-[auto]"
                      variant="body69"
                    >
                      Favorite
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-start justify-start mt-[48px] w-[100%]">
                    <Img
                      src="images/img_user_gray_542_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="user One"
                    />
                    <Text
                      className="font-bold mt-[3px] text-gray_542 text-left tracking-[-0.32px] w-[auto]"
                      variant="body69"
                    >
                      Support
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[294px] md:h-[387px] md:ml-[0] ml-[2px] mt-[93px] relative w-[98%]">
                <div className="bg-gradient71  flex h-[100%] items-center justify-start m-[auto] rounded-tl-[32px] rounded-tr-[32px] shadow-bs119 w-[100%]">
                  <Img
                    src="images/img_card.svg"
                    className="h-[294px] rounded-tl-[32px] rounded-tr-[32px] w-[auto]"
                    alt="Card"
                  />
                </div>
                <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[80%]">
                  <Img
                    src="images/img_volume_white_a700_40x40.svg"
                    className="h-[40px] w-[40px]"
                    alt="volume"
                  />
                  <Text
                    className="font-bold font-montserrat leading-[28.00px] mt-[16px] text-center text-white_A700 tracking-[-0.40px]"
                    variant="body60"
                  >
                    Upgrade to
                    <br />
                    Pro Account and Get 30% Off
                  </Text>
                  <Button className="bg-white_A700 cursor-pointer font-bold font-dmsans min-w-[115px] mt-[24px] py-[12px] rounded-[25px] text-[16px] text-center text-green_611 w-[auto]">
                    Get Now
                  </Button>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-[43px] items-center justify-start md:mt-[0] mt-[53px] w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-medium p-[0] text-[14px] placeholder:text-gray_542 text-gray_542 text-left w-[100%]"
                wrapClassName="bg-white_A700 border-[1px] border-black_900_1e border-solid flex pl-[20px] pr-[35px] py-[17px] rounded-[16px] sm:pr-[20px] w-[100%]"
                name="Search"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search_gray_542.svg"
                    className="cursor-pointer mr-[16px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#979797"
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
              <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-bold text-bluegray_919 text-left tracking-[-0.64px] w-[auto]"
                    variant="body35"
                  >
                    All Listing
                  </Text>
                  <div className="flex flex-row gap-[8px] items-center justify-start mt-[3px] w-[auto]">
                    <Img
                      src="images/img_sort_green_611.svg"
                      className="h-[24px] w-[24px]"
                      alt="sort"
                    />
                    <Text
                      className="font-bold text-gray_542 text-left tracking-[-0.32px] w-[auto]"
                      variant="body69"
                    >
                      Filter
                    </Text>
                  </div>
                </div>
                <List
                  className="flex-col gap-[23px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 border-[1px] border-green_611 border-solid flex flex-1 items-center justify-start p-[12px] rounded-[12px] shadow-bs120 w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between my-[5px] md:w-[100%] w-[98%]">
                      <Img
                        src="images/img_image_gray_400_160x136.svg"
                        className="h-[160px] w-[auto]"
                        alt="Image One"
                      />
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold mt-[12px] text-gray_1007 text-left tracking-[-0.24px] w-[auto]"
                            variant="body48"
                          >
                            Belina Home Stay
                          </Text>
                          <Img
                            src="images/img_overflowmenu_bluegray_232.svg"
                            className="h-[24px] w-[24px]"
                            alt="overflowmenu"
                          />
                        </div>
                        <Text
                          className="font-normal mt-[5px] not-italic text-gray_542 text-left tracking-[-0.28px] w-[auto]"
                          variant="body78"
                        >
                          <span className="text-gray_1007 text-[14px] font-dmsans font-medium">
                            Bali,
                          </span>
                          <span className="text-gray_542 text-[14px] font-dmsans font-medium">
                            {" "}
                          </span>
                          <span className="text-gray_542 text-[14px] font-dmsans">
                            Indonesia
                          </span>
                        </Text>
                        <div className="flex flex-row items-end justify-between mt-[52px] md:w-[100%] w-[99%]">
                          <div className="flex flex-row items-end justify-evenly w-[auto]">
                            <Text
                              className="font-bold text-green_611 text-left tracking-[-0.24px] w-[auto]"
                              variant="body48"
                            >
                              $900
                            </Text>
                            <Text
                              className="font-normal mb-[3px] mt-[13px] not-italic text-gray_1007 text-left tracking-[-0.22px] w-[auto]"
                              variant="body91"
                            >
                              /month
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[11px] not-italic text-gray_542 text-left tracking-[-0.28px] w-[auto]"
                            variant="body78"
                          >
                            Added 15 min ago
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start p-[12px] rounded-[12px] shadow-bs120 w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between my-[4px] md:w-[100%] w-[98%]">
                      <Img
                        src="images/img_image_gray_400_160x136.svg"
                        className="h-[160px] w-[auto]"
                        alt="Image Two"
                      />
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold mt-[12px] text-gray_1007 text-left tracking-[-0.24px] w-[auto]"
                            variant="body48"
                          >
                            Alila Home Stay
                          </Text>
                          <Img
                            src="images/img_overflowmenu_bluegray_232.svg"
                            className="h-[24px] w-[24px]"
                            alt="overflowmenu One"
                          />
                        </div>
                        <Text
                          className="font-normal mt-[5px] not-italic text-gray_542 text-left tracking-[-0.28px] w-[auto]"
                          variant="body78"
                        >
                          <span className="text-gray_1007 text-[14px] font-dmsans font-medium">
                            Bali,
                          </span>
                          <span className="text-gray_542 text-[14px] font-dmsans font-medium">
                            {" "}
                          </span>
                          <span className="text-gray_542 text-[14px] font-dmsans">
                            Indonesia
                          </span>
                        </Text>
                        <div className="flex flex-row items-end justify-between mt-[52px] md:w-[100%] w-[99%]">
                          <div className="flex flex-row items-end justify-evenly w-[auto]">
                            <Text
                              className="font-bold text-green_611 text-left tracking-[-0.24px] w-[auto]"
                              variant="body48"
                            >
                              $850
                            </Text>
                            <Text
                              className="font-normal mb-[3px] mt-[13px] not-italic text-gray_1007 text-left tracking-[-0.22px] w-[auto]"
                              variant="body91"
                            >
                              /month
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[11px] not-italic text-gray_542 text-right tracking-[-0.28px] w-[auto]"
                            variant="body78"
                          >
                            Added 35 min ago
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start p-[12px] rounded-[12px] shadow-bs120 w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between my-[4px] md:w-[100%] w-[98%]">
                      <Img
                        src="images/img_image_gray_400_160x136.svg"
                        className="h-[161px] w-[auto]"
                        alt="Image Three"
                      />
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold mt-[12px] text-gray_1007 text-left tracking-[-0.24px] w-[auto]"
                            variant="body48"
                          >
                            Azura Home Stay
                          </Text>
                          <Img
                            src="images/img_overflowmenu_bluegray_232.svg"
                            className="h-[24px] w-[24px]"
                            alt="overflowmenu Two"
                          />
                        </div>
                        <Text
                          className="font-normal mt-[5px] not-italic text-gray_542 text-left tracking-[-0.28px] w-[auto]"
                          variant="body78"
                        >
                          <span className="text-gray_1007 text-[14px] font-dmsans font-medium">
                            Bali,
                          </span>
                          <span className="text-gray_542 text-[14px] font-dmsans font-medium">
                            {" "}
                          </span>
                          <span className="text-gray_542 text-[14px] font-dmsans">
                            Indonesia
                          </span>
                        </Text>
                        <div className="flex flex-row items-end justify-between mt-[52px] md:w-[100%] w-[99%]">
                          <div className="flex flex-row items-end justify-evenly w-[auto]">
                            <Text
                              className="font-bold text-green_611 text-left tracking-[-0.24px] w-[auto]"
                              variant="body48"
                            >
                              $530
                            </Text>
                            <Text
                              className="font-normal mb-[3px] mt-[13px] not-italic text-gray_1007 text-left tracking-[-0.22px] w-[auto]"
                              variant="body91"
                            >
                              /month
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[11px] not-italic text-gray_542 text-right tracking-[-0.28px] w-[auto]"
                            variant="body78"
                          >
                            Added 45 min ago
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start p-[12px] rounded-[12px] shadow-bs120 w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between my-[4px] md:w-[100%] w-[98%]">
                      <Img
                        src="images/img_image_gray_400_160x136.svg"
                        className="h-[160px] w-[auto]"
                        alt="Image Four"
                      />
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold mt-[10px] text-gray_1007 text-left tracking-[-0.24px] w-[auto]"
                            variant="body48"
                          >
                            Baity Home Stay
                          </Text>
                          <Img
                            src="images/img_overflowmenu_bluegray_232.svg"
                            className="h-[24px] w-[24px]"
                            alt="overflowmenu Three"
                          />
                        </div>
                        <Text
                          className="font-normal mt-[8px] not-italic text-gray_542 text-left tracking-[-0.28px] w-[auto]"
                          variant="body78"
                        >
                          <span className="text-gray_1007 text-[14px] font-dmsans font-medium">
                            Bali,
                          </span>
                          <span className="text-gray_542 text-[14px] font-dmsans font-medium">
                            {" "}
                          </span>
                          <span className="text-gray_542 text-[14px] font-dmsans">
                            Indonesia
                          </span>
                        </Text>
                        <div className="flex flex-row items-end justify-between mt-[53px] md:w-[100%] w-[99%]">
                          <div className="flex flex-row items-end justify-evenly w-[auto]">
                            <Text
                              className="font-bold text-green_611 text-left tracking-[-0.24px] w-[auto]"
                              variant="body48"
                            >
                              $900
                            </Text>
                            <Text
                              className="font-normal mb-[4px] mt-[13px] not-italic text-gray_1007 text-left tracking-[-0.22px] w-[auto]"
                              variant="body91"
                            >
                              /month
                            </Text>
                          </div>
                          <Text
                            className="font-normal mb-[3px] mt-[10px] not-italic text-gray_542 text-left tracking-[-0.28px] w-[auto]"
                            variant="body78"
                          >
                            Added 15 min ago
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="bg-gray_58 flex flex-1 flex-col gap-[33px] items-center justify-center mb-[75px] p-[37px] sm:px-[20px] w-[100%]">
            <div className="flex flex-row items-center justify-between mt-[16px] md:w-[100%] w-[99%]">
              <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                <Img
                  src="images/img_clock_gray_400.svg"
                  className="h-[54px] w-[54px]"
                  alt="clock"
                />
                <Text
                  className="font-bold text-gray_1007 text-left tracking-[-0.70px] w-[auto]"
                  variant="body60"
                >
                  Nasyiya Ulfa
                </Text>
              </div>
              <Img
                src="images/img_computer_gray_1007.svg"
                className="h-[32px] w-[32px]"
                alt="computer"
              />
            </div>
            <div className="flex items-center justify-start mb-[22px] md:w-[100%] w-[99%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex h-[321px] justify-end relative w-[100%]">
                  <div className="backdrop-opacity-[0.5] bg-black_900_31 blur-[32.00px] h-[35px] mb-[98px] mt-[auto] mx-[auto] w-[75%]"></div>
                  <Img
                    src="images/img_image_gray_400_321x364.svg"
                    className="absolute h-[321px] inset-[0] justify-center m-[auto] w-[auto]"
                    alt="Image Five"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-[43px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold text-gray_1007 text-left tracking-[-0.32px] w-[auto]"
                    variant="body35"
                  >
                    Belina Home Stay
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_542 text-left tracking-[-0.40px] w-[auto]"
                    variant="body60"
                  >
                    <span className="text-gray_1007 text-[20px] font-dmsans font-medium">
                      Bali,
                    </span>
                    <span className="text-gray_542 text-[20px] font-dmsans font-medium">
                      {" "}
                    </span>
                    <span className="text-gray_542 text-[20px] font-dmsans">
                      Indonesia
                    </span>
                  </Text>
                </div>
                <div className="flex items-center justify-start md:ml-[0] ml-[58px] mt-[38px] md:w-[100%] w-[67%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                      <Button className="bg-bluegray_66 flex h-[48px] items-center justify-center p-[12px] rounded-[50%] w-[48px]">
                        <Img
                          src="images/img_bedroom.svg"
                          className="h-[24px]"
                          alt="Bedroom"
                        />
                      </Button>
                      <Button className="bg-bluegray_66 flex h-[48px] items-center justify-center p-[12px] rounded-[50%] w-[48px]">
                        <Img
                          src="images/img_alarm_green_611.svg"
                          className="h-[24px]"
                          alt="alarm"
                        />
                      </Button>
                      <Button className="bg-bluegray_66 flex h-[48px] items-center justify-center p-[12px] rounded-[50%] w-[48px]">
                        <Img
                          src="images/img_signal_green_611.svg"
                          className="h-[24px]"
                          alt="signal"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[3px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_542 text-left tracking-[-0.24px] w-[auto]"
                        variant="body87"
                      >
                        2 Bedroom
                      </Text>
                      <Text
                        className="font-normal not-italic text-center text-gray_542 tracking-[-0.24px] w-[auto]"
                        variant="body87"
                      >
                        1 Bathroom
                      </Text>
                      <Text
                        className="font-normal not-italic text-center text-gray_542 tracking-[-0.24px] w-[auto]"
                        variant="body87"
                      >
                        Free Wifi
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start mt-[41px] w-[100%]">
                  <Text
                    className="font-bold text-gray_1007 text-left tracking-[-0.32px] w-[auto]"
                    variant="body69"
                  >
                    Description
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] not-italic text-gray_542 text-left tracking-[-0.28px] w-[100%]"
                    variant="body78"
                  >
                    <span className="text-gray_542 text-[14px] font-dmsans">
                      Featuring an outdoor swimming pool and a fitness centre,
                      The Ravic offers accomodation and good place to everyone.
                      Enjoy...{" "}
                    </span>
                    <span className="text-green_611 text-[14px] font-dmsans font-bold">
                      See More
                    </span>
                  </Text>
                </div>
                <div className="flex flex-row items-end justify-between mt-[43px] w-[100%]">
                  <div className="flex flex-row items-start justify-evenly mt-[18px] w-[auto]">
                    <Text
                      className="font-bold text-green_611 text-left tracking-[-0.32px] w-[auto]"
                      variant="body35"
                    >
                      $900
                    </Text>
                    <Text
                      className="font-normal mt-[21px] not-italic text-gray_1007 text-left tracking-[-0.22px] w-[auto]"
                      variant="body91"
                    >
                      /month
                    </Text>
                  </div>
                  <Button className="bg-green_611 cursor-pointer font-bold min-w-[200px] py-[19px] rounded-[12px] text-[16px] text-center text-white_A700 tracking-[-0.24px] w-[auto]">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeieInnPage;
