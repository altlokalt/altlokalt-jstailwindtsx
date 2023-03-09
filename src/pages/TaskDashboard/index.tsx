import React from "react";

import { Text, Button, SelectBox, Img, List, Input } from "components";
import { CloseSVG } from "../../assets/images";

const TaskDashboardPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-bluegray_962 font-plusjakartasans h-[874px] mx-[auto] relative w-[100%]">
        <div className="absolute bg-gray_988 bottom-[0] flex items-end justify-end pl-[48px] md:px-[20px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[56px] rounded-tr-[0] w-[83%]">
          <div className="flex md:flex-col flex-row gap-[48px] items-start justify-end w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[31px] items-center justify-start md:mt-[0] mt-[41px] md:w-[100%] w-[74%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[26px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[-1.20px] w-[auto]"
                    variant="body25"
                  >
                    Easy Way to FInd Your Comfort Place
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[30px] items-start justify-start sm:w-[100%] w-[auto]">
                      <Button className="bg-light_green_706 cursor-pointer font-bold min-w-[139px] p-[16px] rounded-[26px] text-[20px] text-bluegray_963 text-center w-[auto]">
                        Apartment
                      </Button>
                      <Button className="bg-bluegray_963 cursor-pointer font-bold min-w-[95px] p-[16px] rounded-[26px] text-[20px] text-center text-gray_440 w-[auto]">
                        House
                      </Button>
                      <Button className="bg-bluegray_963 cursor-pointer font-bold min-w-[114px] p-[16px] rounded-[26px] text-[20px] text-center text-gray_440 w-[auto]">
                        Cottage
                      </Button>
                    </div>
                    <div className="flex sm:flex-1 flex-row gap-[30px] items-start justify-start sm:w-[100%] w-[auto]">
                      <SelectBox
                        className="bg-bluegray_963 font-bold p-[16px] rounded-[27px] text-[20px] text-center text-gray_440 sm:w-[100%] w-[44%]"
                        placeholderClassName="text-gray_440"
                        name="Tab"
                        placeholder="Price"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_white_a700_22x22.svg"
                            className="h-[22px] w-[22px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <SelectBox
                        className="bg-bluegray_963 font-bold p-[16px] rounded-[27px] text-[20px] text-center text-gray_440 sm:w-[100%] w-[47%]"
                        placeholderClassName="text-gray_440"
                        name="Tab One"
                        placeholder="Room"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_white_a700_22x22.svg"
                            className="h-[22px] w-[22px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="md:h-[327px] sm:h-[378px] h-[457px] relative w-[100%]">
                  <div className="absolute bg-bluegray_962 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_101 h-[208px] rounded-[12px] w-[100%]"></div>
                    <div className="sm:h-[138px] h-[188px] md:h-[87px] mb-[11px] relative w-[85%]">
                      <div className="sm:h-[127px] h-[188px] md:h-[76px] m-[auto] w-[100%]">
                        <div className="absolute sm:h-[123px] h-[153px] md:h-[76px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                          <div className="absolute h-[116px] md:h-[76px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                            <Text
                              className="font-bold mt-[15px] text-left text-white_A700 w-[auto]"
                              variant="body60"
                            >
                              Jackobsen House
                            </Text>
                            <div className="absolute flex flex-col md:gap-[40px] gap-[80px] h-[100%] inset-[0] justify-center m-[auto] w-[100%]">
                              <Img
                                src="images/img_location_white_a700_20x24.svg"
                                className="h-[20px] w-[auto]"
                                alt="location"
                              />
                              <Text
                                className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                Jackobsen 134, South Indiana
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bottom-[0] flex flex-col md:gap-[40px] gap-[87px] justify-start left-[0] w-[46%]">
                            <Img
                              src="images/img_menu_white_a700_20x24.svg"
                              className="h-[20px] w-[auto]"
                              alt="menu"
                            />
                            <Text
                              className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                              variant="body87"
                            >
                              356 Sq. M.
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col md:gap-[40px] gap-[91px] justify-start left-[0] w-[54%]">
                          <Img
                            src="images/img_user_white_a700_20x24.svg"
                            className="h-[20px] w-[auto]"
                            alt="user"
                          />
                          <Text
                            className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body87"
                          >
                            Andreas Silva
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="absolute font-bold left-[0] text-left text-light_green_706 top-[28%] w-[auto]"
                        variant="body69"
                      >
                        $140,000
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[31px] items-center justify-start left-[12%] top-[0] w-[13%]">
                    <Img
                      src="images/img_bookmark_bluegray_962.svg"
                      className="h-[17px] w-[auto]"
                      alt="bookmark"
                    />
                    <div className="bg-white_A700_66 h-[32px] rounded-[50%] w-[32px]"></div>
                  </div>
                </div>
                <div className="md:h-[327px] sm:h-[378px] h-[457px] relative w-[100%]">
                  <div className="absolute bg-bluegray_962 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_101 h-[208px] rounded-[12px] w-[100%]"></div>
                    <div className="sm:h-[138px] h-[188px] md:h-[87px] mb-[11px] relative w-[85%]">
                      <div className="sm:h-[127px] h-[188px] md:h-[76px] m-[auto] w-[100%]">
                        <div className="absolute sm:h-[123px] h-[153px] md:h-[76px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                          <div className="absolute h-[116px] md:h-[76px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                            <Text
                              className="font-bold mt-[15px] text-left text-white_A700 w-[auto]"
                              variant="body60"
                            >
                              Jackobsen House
                            </Text>
                            <div className="absolute flex flex-col md:gap-[40px] gap-[80px] h-[100%] inset-[0] justify-center m-[auto] w-[100%]">
                              <Img
                                src="images/img_location_white_a700_20x24.svg"
                                className="h-[20px] w-[auto]"
                                alt="location One"
                              />
                              <Text
                                className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                Jackobsen 134, South Indiana
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bottom-[0] flex flex-col md:gap-[40px] gap-[87px] justify-start left-[0] w-[46%]">
                            <Img
                              src="images/img_menu_white_a700_20x24.svg"
                              className="h-[20px] w-[auto]"
                              alt="menu One"
                            />
                            <Text
                              className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                              variant="body87"
                            >
                              356 Sq. M.
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col md:gap-[40px] gap-[91px] justify-start left-[0] w-[54%]">
                          <Img
                            src="images/img_user_white_a700_20x24.svg"
                            className="h-[20px] w-[auto]"
                            alt="user One"
                          />
                          <Text
                            className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body87"
                          >
                            Andreas Silva
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="absolute font-bold left-[0] text-left text-light_green_706 top-[28%] w-[auto]"
                        variant="body69"
                      >
                        $140,000
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[31px] items-center justify-start left-[12%] top-[0] w-[13%]">
                    <Img
                      src="images/img_bookmark_bluegray_962.svg"
                      className="h-[17px] w-[auto]"
                      alt="bookmark One"
                    />
                    <div className="bg-white_A700_66 h-[32px] rounded-[50%] w-[32px]"></div>
                  </div>
                </div>
                <div className="md:h-[327px] sm:h-[378px] h-[457px] relative w-[100%]">
                  <div className="absolute bg-bluegray_962 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_101 h-[208px] rounded-[12px] w-[100%]"></div>
                    <div className="sm:h-[138px] h-[188px] md:h-[87px] mb-[11px] relative w-[85%]">
                      <div className="sm:h-[127px] h-[188px] md:h-[76px] m-[auto] w-[100%]">
                        <div className="absolute sm:h-[123px] h-[153px] md:h-[76px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                          <div className="absolute h-[116px] md:h-[76px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                            <Text
                              className="font-bold mt-[15px] text-left text-white_A700 w-[auto]"
                              variant="body60"
                            >
                              Jackobsen House
                            </Text>
                            <div className="absolute flex flex-col md:gap-[40px] gap-[80px] h-[100%] inset-[0] justify-center m-[auto] w-[100%]">
                              <Img
                                src="images/img_location_white_a700_20x24.svg"
                                className="h-[20px] w-[auto]"
                                alt="location Two"
                              />
                              <Text
                                className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body87"
                              >
                                Jackobsen 134, South Indiana
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bottom-[0] flex flex-col md:gap-[40px] gap-[87px] justify-start left-[0] w-[46%]">
                            <Img
                              src="images/img_menu_white_a700_20x24.svg"
                              className="h-[20px] w-[auto]"
                              alt="menu Two"
                            />
                            <Text
                              className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                              variant="body87"
                            >
                              356 Sq. M.
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col md:gap-[40px] gap-[91px] justify-start left-[0] w-[54%]">
                          <Img
                            src="images/img_user_white_a700_20x24.svg"
                            className="h-[20px] w-[auto]"
                            alt="user Two"
                          />
                          <Text
                            className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body87"
                          >
                            Andreas Silva
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="absolute font-bold left-[0] text-left text-light_green_706 top-[28%] w-[auto]"
                        variant="body69"
                      >
                        $140,000
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[31px] items-center justify-start left-[12%] top-[0] w-[13%]">
                    <Img
                      src="images/img_bookmark_bluegray_962.svg"
                      className="h-[17px] w-[auto]"
                      alt="bookmark Two"
                    />
                    <div className="bg-white_A700_66 h-[32px] rounded-[50%] w-[32px]"></div>
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-bluegray_962 flex md:flex-1 flex-col gap-[174px] md:gap-[40px] items-center justify-end pt-[40px] md:w-[100%] w-[23%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[75%]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  variant="body60"
                >
                  Recommended
                </Text>
                <Button className="bg-gray_100_7f cursor-pointer font-bold leading-[normal] min-w-[188px] mt-[30px] py-[22px] rounded-[8px] text-[20px] text-black_902 text-center w-[auto]">
                  Ontario
                </Button>
                <Button className="bg-gray_100_7f cursor-pointer font-bold leading-[normal] min-w-[188px] mt-[16px] py-[22px] rounded-[8px] text-[20px] text-black_902 text-center w-[auto]">
                  San Antonio
                </Button>
                <Button className="bg-gray_100_7f cursor-pointer font-bold leading-[normal] min-w-[188px] mt-[16px] py-[22px] rounded-[8px] text-[20px] text-black_902 text-center w-[auto]">
                  Oklahoma
                </Button>
                <div className="bg-gray_100_7f flex items-center justify-end mt-[16px] p-[20px] rounded-[8px] w-[100%]">
                  <Text
                    className="font-bold mt-[3px] text-black_902 text-center w-[auto]"
                    variant="body60"
                  >
                    Milwaukee
                  </Text>
                </div>
              </div>
              <div className="bg-light_green_811 flex flex-col items-center justify-center p-[31px] sm:px-[20px] w-[100%]">
                <Text
                  className="font-medium mt-[106px] text-center text-white_A700 tracking-[-0.72px] w-[auto]"
                  variant="body48"
                >
                  Best Offer
                </Text>
                <Text
                  className="font-bold mb-[27px] text-center text-white_A700 tracking-[-1.68px] w-[auto]"
                  variant="body11"
                >
                  70%
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:px-[20px] right-[3%] top-[3%] w-[75%]">
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_659 text-gray_659 text-left tracking-[0.08px] w-[100%]"
            wrapClassName="bg-gray_700_6c flex mb-[2px] md:w-[100%] pb-[9px] pl-[31px] pr-[24px] pt-[17px] rounded-[24px] sm:px-[20px] sm:w-[100%] w-[36%]"
            name="SearchBar"
            placeholder="Search what you need"
            suffix={
              inputvalue?.length > 0 ? (
                <CloseSVG
                  className="cursor-pointer ml-[35px] my-[auto]"
                  onClick={() => setInputvalue("")}
                  color="#7a7a7a"
                />
              ) : (
                <Img
                  src="images/img_search_white_a700_20x24.svg"
                  className="cursor-pointer ml-[35px] my-[auto]"
                  alt="search"
                />
              )
            }
          ></Input>
          <Img
            src="images/img_computer_bluegray_964.svg"
            className="h-[50px] md:ml-[0] ml-[461px] w-[auto]"
            alt="computer"
          />
          <Button className="bg-light_green_706 cursor-pointer font-semibold min-w-[160px] md:ml-[0] ml-[24px] md:mt-[0] mt-[2px] py-[13px] rounded-[24px] text-[16px] text-center text-white_A700 tracking-[-0.32px] w-[auto]">
            Become a Pro
          </Button>
        </div>
        <aside className="absolute bottom-[0] flex flex-col md:hidden justify-start left-[0] md:px-[20px] w-[20%]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="bg-light_green_706 flex flex-col gap-[16px] items-center justify-start p-[32px] sm:px-[20px] rounded-bl-[0] rounded-br-[56px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Img
                  src="images/img_computer_white_a700_25x47.svg"
                  className="h-[25px] w-[auto]"
                  alt="computer One"
                />
                <Text
                  className="font-bold text-center text-white_A700 tracking-[-0.96px] w-[auto]"
                  variant="body35"
                >
                  Qontrak
                </Text>
              </div>
              <div className="h-[410px] md:h-[474px] mt-[64px] relative w-[89%]">
                <div className="absolute bg-light_green_706 h-[45px] left-[0] rotate-[180deg] rounded-bl-[24px] rounded-br-[0] rounded-tl-[24px] rounded-tr-[0] top-[0] w-[86%]"></div>
                <div className="absolute flex flex-col gap-[28px] h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-start p-[11px] w-[100%]">
                    <Img
                      src="images/img_home_white_a700_20x19.svg"
                      className="h-[20px] ml-[13px] w-[19px]"
                      alt="home"
                    />
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start p-[11px] w-[100%]">
                    <Img
                      src="images/img_search_white_a700_20x24.svg"
                      className="h-[20px] ml-[13px] w-[20px]"
                      alt="search"
                    />
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Search
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start p-[11px] w-[100%]">
                    <Img
                      src="images/img_computer_white_a700_20x20.svg"
                      className="h-[20px] ml-[12px] w-[20px]"
                      alt="computer Two"
                    />
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Overview
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[18px] items-center justify-start p-[11px] w-[100%]">
                    <Img
                      src="images/img_computer_white_a700_20x17.svg"
                      className="h-[20px] ml-[14px] w-[auto]"
                      alt="computer Three"
                    />
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Saved
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-center justify-start p-[9px] w-[100%]">
                    <Img
                      src="images/img_settings_white_a700_19x17.svg"
                      className="h-[19px] ml-[15px] w-[auto]"
                      alt="settings"
                    />
                    <Text
                      className="font-medium mt-[4px] text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Settings
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start p-[9px] w-[100%]">
                    <Img
                      src="images/img_folder_white_a700.svg"
                      className="h-[18px] ml-[15px] w-[19px]"
                      alt="folder"
                    />
                    <Text
                      className="font-medium mt-[4px] text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Logout
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[30px] mt-[153px] md:w-[100%] w-[68%]">
                <div className="bg-bluegray_101 flex h-[80px] items-center justify-start p-[5px] rounded-[50%] w-[80px]">
                  <div className="bg-bluegray_101 h-[70px] rounded-[50%] w-[70px]"></div>
                </div>
                <Text
                  className="font-bold mt-[16px] text-center text-white_A700 tracking-[-0.60px] w-[auto]"
                  variant="body60"
                >
                  Max Alexander
                </Text>
                <Text
                  className="font-normal mt-[8px] not-italic text-center text-white_A700 w-[auto]"
                  variant="body78"
                >
                  Male | 32 years old
                </Text>
              </div>
            </div>
          </div>
        </aside>
        <div className="absolute bottom-[0] h-[525px] left-[21%] md:px-[20px] w-[19%]">
          <div className="flex flex-col md:gap-[40px] gap-[99px] items-center justify-start mb-[-64px] ml-[32px] w-[13%] z-[1]">
            <Img
              src="images/img_bookmark_bluegray_962.svg"
              className="h-[17px] w-[auto]"
              alt="bookmark Three"
            />
            <div className="bg-white_A700_66 h-[32px] rounded-[50%] w-[32px]"></div>
          </div>
          <div className="bg-bluegray_962 md:h-[208px] h-[441px] mt-[auto] mx-[auto] p-[16px] rounded-[8px] w-[100%]">
            <div className="absolute md:h-[208px] h-[361px] inset-x-[0] mx-[auto] top-[4%] w-[88%]">
              <div className="absolute flex md:h-[208px] h-[324px] inset-x-[0] justify-end mx-[auto] top-[0] w-[100%]">
                <div className="absolute bg-bluegray_101 h-[208px] inset-x-[0] mx-[auto] rounded-[12px] top-[0] w-[100%]"></div>
                <Text
                  className="font-bold mb-[75px] mt-[auto] text-left text-white_A700 w-[auto]"
                  variant="body60"
                >
                  Jackobsen House
                </Text>
                <div className="absolute bottom-[0] flex flex-col gap-[148px] md:gap-[40px] justify-start left-[0] w-[86%]">
                  <Img
                    src="images/img_location_white_a700_20x24.svg"
                    className="h-[20px] w-[auto]"
                    alt="location Three"
                  />
                  <Text
                    className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                    variant="body87"
                  >
                    Jackobsen 134, South Indiana
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col gap-[154px] md:gap-[40px] justify-start left-[0] w-[40%]">
                <Img
                  src="images/img_menu_white_a700_20x24.svg"
                  className="h-[20px] w-[auto]"
                  alt="menu Three"
                />
                <Text
                  className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                  variant="body87"
                >
                  356 Sq. M.
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[6%] flex flex-col items-start justify-start left-[4%] w-[41%]">
              <Img
                src="images/img_user_white_a700_20x24.svg"
                className="h-[20px] w-[auto]"
                alt="user Three"
              />
              <Text
                className="font-bold mt-[38px] text-left text-light_green_706 w-[auto]"
                variant="body69"
              >
                $140,000
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[32px] mt-[101px] not-italic text-left text-white_A700 w-[auto]"
                variant="body87"
              >
                Andreas Silva
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] h-[525px] inset-x-[0] mx-[auto] md:px-[20px] w-[19%]">
          <div className="flex flex-col md:gap-[40px] gap-[99px] items-center justify-start mb-[-64px] ml-[32px] w-[13%] z-[1]">
            <Img
              src="images/img_bookmark_bluegray_962.svg"
              className="h-[17px] w-[auto]"
              alt="bookmark Four"
            />
            <div className="bg-white_A700_66 h-[32px] rounded-[50%] w-[32px]"></div>
          </div>
          <div className="bg-bluegray_962 md:h-[208px] h-[441px] mt-[auto] mx-[auto] p-[16px] rounded-[8px] w-[100%]">
            <div className="absolute md:h-[208px] h-[361px] inset-x-[0] mx-[auto] top-[4%] w-[88%]">
              <div className="absolute flex md:h-[208px] h-[324px] inset-x-[0] justify-end mx-[auto] top-[0] w-[100%]">
                <div className="absolute bg-bluegray_101 h-[208px] inset-x-[0] mx-[auto] rounded-[12px] top-[0] w-[100%]"></div>
                <Text
                  className="font-bold mb-[75px] mt-[auto] text-left text-white_A700 w-[auto]"
                  variant="body60"
                >
                  Jackobsen House
                </Text>
                <div className="absolute bottom-[0] flex flex-col gap-[148px] md:gap-[40px] justify-start left-[0] w-[86%]">
                  <Img
                    src="images/img_location_white_a700_20x24.svg"
                    className="h-[20px] w-[auto]"
                    alt="location Four"
                  />
                  <Text
                    className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                    variant="body87"
                  >
                    Jackobsen 134, South Indiana
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col gap-[154px] md:gap-[40px] justify-start left-[0] w-[40%]">
                <Img
                  src="images/img_menu_white_a700_20x24.svg"
                  className="h-[20px] w-[auto]"
                  alt="menu Four"
                />
                <Text
                  className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                  variant="body87"
                >
                  356 Sq. M.
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[6%] flex flex-col items-start justify-start left-[4%] w-[41%]">
              <Img
                src="images/img_user_white_a700_20x24.svg"
                className="h-[20px] w-[auto]"
                alt="user Four"
              />
              <Text
                className="font-bold mt-[38px] text-left text-light_green_706 w-[auto]"
                variant="body69"
              >
                $140,000
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[32px] mt-[101px] not-italic text-left text-white_A700 w-[auto]"
                variant="body87"
              >
                Andreas Silva
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] h-[525px] md:px-[20px] right-[21%] w-[19%]">
          <div className="flex flex-col md:gap-[40px] gap-[99px] items-center justify-start mb-[-64px] ml-[32px] w-[13%] z-[1]">
            <Img
              src="images/img_bookmark_bluegray_962.svg"
              className="h-[17px] w-[auto]"
              alt="bookmark Five"
            />
            <div className="bg-white_A700_66 h-[32px] rounded-[50%] w-[32px]"></div>
          </div>
          <div className="bg-bluegray_962 md:h-[208px] h-[441px] mt-[auto] mx-[auto] p-[16px] rounded-[8px] w-[100%]">
            <div className="absolute md:h-[208px] h-[361px] inset-x-[0] mx-[auto] top-[4%] w-[88%]">
              <div className="absolute flex md:h-[208px] h-[324px] inset-x-[0] justify-end mx-[auto] top-[0] w-[100%]">
                <div className="absolute bg-bluegray_101 h-[208px] inset-x-[0] mx-[auto] rounded-[12px] top-[0] w-[100%]"></div>
                <Text
                  className="font-bold mb-[75px] mt-[auto] text-left text-white_A700 w-[auto]"
                  variant="body60"
                >
                  Jackobsen House
                </Text>
                <div className="absolute bottom-[0] flex flex-col gap-[148px] md:gap-[40px] justify-start left-[0] w-[86%]">
                  <Img
                    src="images/img_location_white_a700_20x24.svg"
                    className="h-[20px] w-[auto]"
                    alt="location Five"
                  />
                  <Text
                    className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                    variant="body87"
                  >
                    Jackobsen 134, South Indiana
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col gap-[154px] md:gap-[40px] justify-start left-[0] w-[40%]">
                <Img
                  src="images/img_menu_white_a700_20x24.svg"
                  className="h-[20px] w-[auto]"
                  alt="menu Five"
                />
                <Text
                  className="font-normal md:ml-[0] ml-[32px] not-italic text-left text-white_A700 w-[auto]"
                  variant="body87"
                >
                  356 Sq. M.
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[6%] flex flex-col items-start justify-start left-[4%] w-[41%]">
              <Img
                src="images/img_user_white_a700_20x24.svg"
                className="h-[20px] w-[auto]"
                alt="user Five"
              />
              <Text
                className="font-bold mt-[38px] text-left text-light_green_706 w-[auto]"
                variant="body69"
              >
                $140,000
              </Text>
              <Text
                className="font-normal md:ml-[0] ml-[32px] mt-[101px] not-italic text-left text-white_A700 w-[auto]"
                variant="body87"
              >
                Andreas Silva
              </Text>
            </div>
          </div>
        </div>
        <Img
          src="images/img_vector_light_green_707.png"
          className="absolute bottom-[18%] h-[190px] object-cover right-[0] w-[auto]"
          alt="Vector"
        />
      </div>
    </>
  );
};

export default TaskDashboardPage;
