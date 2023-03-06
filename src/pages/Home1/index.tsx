import React from "react";

import { Img, Text, Line, Input, Button, SelectBox, List } from "components";
import { CloseSVG } from "../../assets/images";

const Home1Page: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_104 flex font-urbanist items-start justify-end mx-[auto] pr-[181px] sm:pr-[20px] md:pr-[40px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mr-[auto] w-[100%]">
          <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[18%]">
            <aside className="flex flex-col md:hidden justify-start w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col justify-start mb-[41px] md:w-[100%] w-[99%]">
                    <div className="flex flex-row gap-[8px] items-center justify-center md:ml-[0] ml-[36px] md:w-[100%] w-[64%]">
                      <Img
                        src="images/img_logo.svg"
                        className="h-[24px] w-[auto]"
                        alt="Logo"
                      />
                      <Img
                        src="images/img_ticket_indigo_a206.svg"
                        className="h-[14px] w-[auto]"
                        alt="ticket"
                      />
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex h-[48px] items-start justify-start mt-[63px] p-[12px] rounded-[8px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group514.svg')",
                      }}
                    >
                      <div className="flex flex-row gap-[12px] items-center justify-start md:ml-[0] ml-[4px] w-[auto]">
                        <Img
                          src="images/img_grid_indigo_a206.svg"
                          className="h-[24px] w-[24px]"
                          alt="grid"
                        />
                        <Text
                          className="font-semibold text-indigo_A206 text-left w-[auto]"
                          variant="body78"
                        >
                          Dashboard
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[16px] mt-[28px] md:w-[100%] w-[50%]">
                      <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_trash_bluegray_228.svg"
                          className="h-[24px] w-[24px]"
                          alt="trash"
                        />
                        <Text
                          className="font-semibold text-bluegray_441 text-left w-[auto]"
                          variant="body78"
                        >
                          Explore
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start mt-[40px] w-[auto]">
                        <Img
                          src="images/img_volume_bluegray_228.svg"
                          className="h-[24px] w-[24px]"
                          alt="volume"
                        />
                        <Text
                          className="font-semibold text-bluegray_441 text-left w-[auto]"
                          variant="body78"
                        >
                          My Order
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start mt-[40px] w-[auto]">
                        <Img
                          src="images/img_user_bluegray_228.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="font-semibold text-bluegray_441 text-left w-[auto]"
                          variant="body78"
                        >
                          Message
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start mt-[40px] w-[auto]">
                        <Img
                          src="images/img_user_bluegray_228_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="user One"
                        />
                        <Text
                          className="font-semibold text-bluegray_441 text-left w-[auto]"
                          variant="body78"
                        >
                          My Profile
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start mt-[470px] w-[auto]">
                        <Img
                          src="images/img_arrowleft_red_508.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrowleft"
                        />
                        <Text
                          className="font-semibold text-left text-red_508 w-[auto]"
                          variant="body78"
                        >
                          Logout
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="bg-white_A700 h-[105px] w-[100%]"></div>
          </div>
          <div className="flex md:flex-1 flex-col md:gap-[40px] gap-[88px] items-center justify-start md:w-[100%] w-[83%]">
            <div className="flex md:h-[270px] h-[80px] justify-end relative w-[100%]">
              <Text
                className="font-bold mb-[9px] ml-[75px] mt-[auto] text-bluegray_948 text-left w-[auto]"
                variant="body48"
              >
                Find Your Best Real Estate
              </Text>
              <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] sm:pr-[20px] pr-[40px] w-[100%]">
                <Line className="bg-indigo_55 md:h-[1px] h-[80px] md:w-[100%] w-[1px]" />
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="flex-1 font-medium p-[0] text-[14px] placeholder:text-bluegray_228 text-bluegray_228 text-left w-[100%]"
                  wrapClassName="bg-gray_110 flex gap-[16px] md:ml-[0] md:mt-[0] md:w-[100%] ml-[39px] my-[18px] pl-[16px] pr-[40px] py-[10px] rounded-[12px] sm:ml-[0] sm:mt-[0] sm:pr-[20px] sm:w-[100%] w-[400px]"
                  name="Frame33899"
                  placeholder="Search here ..."
                  prefix={
                    <Img
                      src="images/img_search_bluegray_441.svg"
                      className="cursor-pointer mr-[16px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#a9b4cd"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <div
                  className="bg-cover bg-no-repeat flex h-[24px] items-end justify-start md:ml-[0] ml-[606px] pb-[16px] pl-[16px] w-[24px]"
                  style={{
                    backgroundImage:
                      "url('images/img_notification_bluegray_948.svg')",
                  }}
                >
                  <div className="bg-red_710 border-[1px] border-solid border-white_A700 h-[8px] rounded-[50%] w-[8px]"></div>
                </div>
                <div className="bg-gray_400 h-[44px] md:ml-[0] ml-[40px] md:mt-[0] my-[18px] rounded-[50%] w-[44px]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] items-center justify-start md:w-[100%] w-[94%]">
              <div className="bg-white_A700 flex items-center justify-start p-[14px] rounded-[16px] w-[100%]">
                <div className="flex flex-col gap-[24px] items-center justify-start my-[10px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                    <Button className="bg-white_A700 border-[1px] border-indigo_55 border-solid flex h-[40px] items-center justify-center p-[12px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_volume_bluegray_947.svg"
                        className="h-[16px]"
                        alt="volume One"
                      />
                    </Button>
                    <SelectBox
                      className="border-[1px] border-indigo_55 border-solid md:flex-1 font-semibold md:ml-[0] ml-[12px] pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_948 text-left md:w-[100%] w-[16%]"
                      placeholderClassName="text-bluegray_948"
                      name="Filter"
                      placeholder="Rent a Building"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_948.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Button className="bg-white_A700 border-[1px] border-indigo_55 border-solid flex h-[40px] items-center justify-center md:ml-[0] ml-[40px] p-[12px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_calendar_bluegray_948.svg"
                        className="h-[16px]"
                        alt="calendar"
                      />
                    </Button>
                    <SelectBox
                      className="border-[1px] border-indigo_55 border-solid md:flex-1 font-semibold md:ml-[0] ml-[12px] pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_441 text-left md:w-[100%] w-[15%]"
                      placeholderClassName="text-bluegray_441"
                      name="Filter One"
                      placeholder="Date"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_948.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Button className="bg-white_A700 border-[1px] border-indigo_55 border-solid flex h-[40px] items-center justify-center md:ml-[0] ml-[40px] p-[12px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_eye_bluegray_948.svg"
                        className="h-[16px]"
                        alt="eye"
                      />
                    </Button>
                    <SelectBox
                      className="border-[1px] border-indigo_55 border-solid md:flex-1 font-semibold md:ml-[0] ml-[12px] pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_441 text-left md:w-[100%] w-[17%]"
                      placeholderClassName="text-bluegray_441"
                      name="Filter Two"
                      placeholder="Location"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_948.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Button className="bg-indigo_A206 cursor-pointer font-bold md:ml-[0] ml-[40px] px-[16px] py-[9px] rounded-[8px] text-[16px] text-center text-white_A700 w-[143px]">
                      Search
                    </Button>
                    <Button className="border-[1px] border-indigo_55 border-solid flex h-[40px] items-center justify-center md:ml-[0] ml-[114px] p-[12px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_menu_bluegray_948.svg"
                        className="h-[16px]"
                        alt="menu"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                    <Line className="bg-gray_120 h-[1px] w-[100%]" />
                    <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between w-[100%]">
                      <List
                        className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[auto]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] w-[auto]">
                          <Img
                            src="images/img_frame33903.svg"
                            className="h-[180px] w-[320px]"
                            alt="Frame33903"
                          />
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                              <div className="flex flex-row items-start justify-between w-[100%]">
                                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_948 text-left w-[auto]"
                                    variant="body69"
                                  >
                                    Star Sun Hotel & Apartment
                                  </Text>
                                  <div className="flex flex-row gap-[9.71px] items-center justify-center w-[auto]">
                                    <div className="flex h-[16px] items-center justify-start w-[16px]">
                                      <Img
                                        src="images/img_eye_bluegray_948.svg"
                                        className="h-[16px] w-[16px]"
                                        alt="eye One"
                                      />
                                    </div>
                                    <Text
                                      className="font-medium text-bluegray_441 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Jl Letda Nasir 45 RT 001/02
                                    </Text>
                                  </div>
                                </div>
                                <Button className="bg-indigo_A200_1e cursor-pointer font-bold mb-[20px] min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A206 w-[auto]">
                                  $80
                                </Button>
                              </div>
                              <div className="flex flex-row gap-[25px] items-start justify-start w-[auto]">
                                <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                                  <div className="flex h-[16px] items-center justify-start w-[16px]">
                                    <Img
                                      src="images/img_car_indigo_107.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="car"
                                    />
                                  </div>
                                  <Text
                                    className="font-semibold text-bluegray_948 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    2
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                                  <div className="flex h-[16px] items-center justify-start w-[16px]">
                                    <Img
                                      src="images/img_user_indigo_107.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="user Two"
                                    />
                                  </div>
                                  <Text
                                    className="font-semibold text-bluegray_948 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    3
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                                  <div
                                    className="bg-cover bg-no-repeat flex h-[16px] items-center justify-start w-[16px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_lightbuildingsize.svg')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_airplane_indigo_107.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="airplane"
                                    />
                                  </div>
                                  <Text
                                    className="font-semibold text-bluegray_948 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    24M
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] w-[auto]">
                          <div className="bg-bluegray_101 h-[180px] rounded-[8px] w-[100%]"></div>
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                              <div className="flex flex-row items-start justify-between w-[100%]">
                                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_948 text-left w-[auto]"
                                    variant="body69"
                                  >
                                    Star Sun Hotel & Apartment
                                  </Text>
                                  <div className="flex flex-row gap-[9.71px] items-center justify-center w-[auto]">
                                    <div className="flex h-[16px] items-center justify-start w-[16px]">
                                      <Img
                                        src="images/img_eye_bluegray_948.svg"
                                        className="h-[16px] w-[16px]"
                                        alt="eye Two"
                                      />
                                    </div>
                                    <Text
                                      className="font-medium text-bluegray_441 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Jl Letda Nasir 45 RT 001/02
                                    </Text>
                                  </div>
                                </div>
                                <Button className="bg-indigo_A200_1e cursor-pointer font-bold mb-[20px] min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A206 w-[auto]">
                                  $80
                                </Button>
                              </div>
                              <div className="flex flex-row gap-[25px] items-start justify-start w-[auto]">
                                <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                                  <div className="flex h-[16px] items-center justify-start w-[16px]">
                                    <Img
                                      src="images/img_car_indigo_107.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="car One"
                                    />
                                  </div>
                                  <Text
                                    className="font-semibold text-bluegray_948 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    2
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                                  <div className="flex h-[16px] items-center justify-start w-[16px]">
                                    <Img
                                      src="images/img_user_indigo_107.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="user Three"
                                    />
                                  </div>
                                  <Text
                                    className="font-semibold text-bluegray_948 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    3
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                                  <div
                                    className="bg-cover bg-no-repeat flex h-[16px] items-center justify-start w-[16px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_lightbuildingsize.svg')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_airplane_indigo_107.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="airplane One"
                                    />
                                  </div>
                                  <Text
                                    className="font-semibold text-bluegray_948 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    24M
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] w-[auto]">
                          <div className="bg-bluegray_101 h-[180px] rounded-[8px] w-[100%]"></div>
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                              <div className="flex flex-row items-start justify-between w-[100%]">
                                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_948 text-left w-[auto]"
                                    variant="body69"
                                  >
                                    Star Sun Hotel & Apartment
                                  </Text>
                                  <div className="flex flex-row gap-[9.71px] items-center justify-center w-[auto]">
                                    <div className="flex h-[16px] items-center justify-start w-[16px]">
                                      <Img
                                        src="images/img_eye_bluegray_948.svg"
                                        className="h-[16px] w-[16px]"
                                        alt="eye Three"
                                      />
                                    </div>
                                    <Text
                                      className="font-medium text-bluegray_441 text-left w-[auto]"
                                      variant="body78"
                                    >
                                      Jl Letda Nasir 45 RT 001/02
                                    </Text>
                                  </div>
                                </div>
                                <Button className="bg-indigo_A200_1e cursor-pointer font-bold mb-[20px] min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A206 w-[auto]">
                                  $80
                                </Button>
                              </div>
                              <div className="flex flex-row gap-[25px] items-start justify-start w-[auto]">
                                <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                                  <div className="flex h-[16px] items-center justify-start w-[16px]">
                                    <Img
                                      src="images/img_car_indigo_107.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="car Two"
                                    />
                                  </div>
                                  <Text
                                    className="font-semibold text-bluegray_948 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    2
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                                  <div className="flex h-[16px] items-center justify-start w-[16px]">
                                    <Img
                                      src="images/img_user_indigo_107.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="user Four"
                                    />
                                  </div>
                                  <Text
                                    className="font-semibold text-bluegray_948 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    3
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                                  <div
                                    className="bg-cover bg-no-repeat flex h-[16px] items-center justify-start w-[16px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_lightbuildingsize.svg')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_airplane_indigo_107.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="airplane Two"
                                    />
                                  </div>
                                  <Text
                                    className="font-semibold text-bluegray_948 text-left w-[auto]"
                                    variant="body78"
                                  >
                                    24M
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                      <Button className="bg-white_A700 flex h-[40px] items-center justify-center md:mt-[0] my-[121px] p-[12px] rounded-[50%] shadow-bs92 w-[40px]">
                        <Img
                          src="images/img_arrowdown_bluegray_948.svg"
                          className="h-[16px]"
                          alt="arrowright"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex items-center justify-start p-[24px] sm:px-[20px] rounded-[16px] w-[100%]">
                <div className="flex flex-col gap-[34px] items-center justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                    <Button className="bg-bluegray_900_1e cursor-pointer font-bold mb-[4px] min-w-[82px] px-[16px] py-[8px] rounded-[6px] text-[14px] text-bluegray_948 text-center w-[auto]">
                      Popular
                    </Button>
                    <div className="flex items-center justify-center md:ml-[0] ml-[16px] px-[16px] py-[8px] w-[auto]">
                      <Text
                        className="font-bold text-bluegray_441 text-left w-[auto]"
                        variant="body78"
                      >
                        Recommended
                      </Text>
                    </div>
                    <div className="flex items-center justify-center md:ml-[0] ml-[16px] px-[16px] py-[8px] w-[auto]">
                      <Text
                        className="font-bold text-bluegray_441 text-left w-[auto]"
                        variant="body78"
                      >
                        Nearest
                      </Text>
                    </div>
                    <SelectBox
                      className="border-[1px] border-indigo_55 border-solid md:flex-1 font-semibold md:ml-[0] ml-[521px] pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_948 text-left md:w-[100%] w-[14%]"
                      placeholderClassName="text-bluegray_948"
                      name="Filter Three"
                      placeholder="Most Recent"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_948.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Button className="border-[1px] border-indigo_55 border-solid flex h-[40px] items-center justify-center md:ml-[0] ml-[40px] p-[12px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_volume_bluegray_948.svg"
                        className="h-[16px]"
                        alt="volume Two"
                      />
                    </Button>
                  </div>
                  <div className="md:gap-[20px] gap-[59px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[97%]">
                    <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-start w-[100%]">
                      <div className="bg-bluegray_101 h-[134px] rounded-[8px] w-[41%]"></div>
                      <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                        <Button className="bg-indigo_A200_1e cursor-pointer font-bold min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A206 w-[auto]">
                          $80
                        </Button>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-bluegray_948 text-left w-[auto]"
                            variant="body69"
                          >
                            Metro Jayakarta Hotel & Spa
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div className="flex h-[16px] items-center justify-start w-[16px]">
                              <Img
                                src="images/img_eye_bluegray_948.svg"
                                className="h-[16px] w-[16px]"
                                alt="eye Four"
                              />
                            </div>
                            <Text
                              className="font-normal not-italic text-bluegray_441 text-left tracking-[0.14px] w-[auto]"
                              variant="body78"
                            >
                              Kemal Ataturk Avenue, 10294, Indonesia
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[30px] items-start justify-start w-[auto]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div className="flex h-[16px] items-center justify-start w-[16px]">
                              <Img
                                src="images/img_car_indigo_107.svg"
                                className="h-[16px] w-[16px]"
                                alt="car Three"
                              />
                            </div>
                            <Text
                              className="font-semibold text-bluegray_749 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body87"
                            >
                              2
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div className="flex h-[16px] items-center justify-start w-[16px]">
                              <Img
                                src="images/img_user_indigo_107.svg"
                                className="h-[16px] w-[16px]"
                                alt="user Five"
                              />
                            </div>
                            <Text
                              className="font-semibold text-bluegray_749 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body87"
                            >
                              3
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div
                              className="bg-cover bg-no-repeat flex h-[16px] items-center justify-start w-[16px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_lightbuildingsize.svg')",
                              }}
                            >
                              <Img
                                src="images/img_airplane_indigo_107.svg"
                                className="h-[16px] w-[16px]"
                                alt="airplane Three"
                              />
                            </div>
                            <Text
                              className="font-semibold text-bluegray_749 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body87"
                            >
                              24m
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-start w-[100%]">
                      <div className="bg-bluegray_101 h-[134px] rounded-[8px] w-[41%]"></div>
                      <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                        <Button className="bg-indigo_A200_1e cursor-pointer font-bold min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A206 w-[auto]">
                          $80
                        </Button>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-bluegray_948 text-left w-[auto]"
                            variant="body69"
                          >
                            Metro Jayakarta Hotel & Spa
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div className="flex h-[16px] items-center justify-start w-[16px]">
                              <Img
                                src="images/img_eye_bluegray_948.svg"
                                className="h-[16px] w-[16px]"
                                alt="eye Five"
                              />
                            </div>
                            <Text
                              className="font-normal not-italic text-bluegray_441 text-left tracking-[0.14px] w-[auto]"
                              variant="body78"
                            >
                              Kemal Ataturk Avenue, 10294, Indonesia
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[30px] items-start justify-start w-[auto]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div className="flex h-[16px] items-center justify-start w-[16px]">
                              <Img
                                src="images/img_car_indigo_107.svg"
                                className="h-[16px] w-[16px]"
                                alt="car Four"
                              />
                            </div>
                            <Text
                              className="font-semibold text-bluegray_749 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body87"
                            >
                              2
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div className="flex h-[16px] items-center justify-start w-[16px]">
                              <Img
                                src="images/img_user_indigo_107.svg"
                                className="h-[16px] w-[16px]"
                                alt="user Six"
                              />
                            </div>
                            <Text
                              className="font-semibold text-bluegray_749 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body87"
                            >
                              3
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div
                              className="bg-cover bg-no-repeat flex h-[16px] items-center justify-start w-[16px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_lightbuildingsize.svg')",
                              }}
                            >
                              <Img
                                src="images/img_airplane_indigo_107.svg"
                                className="h-[16px] w-[16px]"
                                alt="airplane Four"
                              />
                            </div>
                            <Text
                              className="font-semibold text-bluegray_749 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body87"
                            >
                              24m
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-start w-[100%]">
                      <div className="bg-bluegray_101 h-[134px] rounded-[8px] w-[41%]"></div>
                      <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                        <Button className="bg-indigo_A200_1e cursor-pointer font-bold min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A206 w-[auto]">
                          $80
                        </Button>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-bluegray_948 text-left w-[auto]"
                            variant="body69"
                          >
                            Metro Jayakarta Hotel & Spa
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div className="flex h-[16px] items-center justify-start w-[16px]">
                              <Img
                                src="images/img_eye_bluegray_948.svg"
                                className="h-[16px] w-[16px]"
                                alt="eye Six"
                              />
                            </div>
                            <Text
                              className="font-normal not-italic text-bluegray_441 text-left tracking-[0.14px] w-[auto]"
                              variant="body78"
                            >
                              Kemal Ataturk Avenue, 10294, Indonesia
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[30px] items-start justify-start w-[auto]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div className="flex h-[16px] items-center justify-start w-[16px]">
                              <Img
                                src="images/img_car_indigo_107.svg"
                                className="h-[16px] w-[16px]"
                                alt="car Five"
                              />
                            </div>
                            <Text
                              className="font-semibold text-bluegray_749 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body87"
                            >
                              2
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div className="flex h-[16px] items-center justify-start w-[16px]">
                              <Img
                                src="images/img_user_indigo_107.svg"
                                className="h-[16px] w-[16px]"
                                alt="user Seven"
                              />
                            </div>
                            <Text
                              className="font-semibold text-bluegray_749 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body87"
                            >
                              3
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div
                              className="bg-cover bg-no-repeat flex h-[16px] items-center justify-start w-[16px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_lightbuildingsize.svg')",
                              }}
                            >
                              <Img
                                src="images/img_airplane_indigo_107.svg"
                                className="h-[16px] w-[16px]"
                                alt="airplane Five"
                              />
                            </div>
                            <Text
                              className="font-semibold text-bluegray_749 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body87"
                            >
                              24m
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-start w-[100%]">
                      <div className="bg-bluegray_101 h-[134px] rounded-[8px] w-[41%]"></div>
                      <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                        <Button className="bg-indigo_A200_1e cursor-pointer font-bold min-w-[45px] px-[8px] py-[4px] rounded-[8px] text-[16px] text-center text-indigo_A206 w-[auto]">
                          $80
                        </Button>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-bluegray_948 text-left w-[auto]"
                            variant="body69"
                          >
                            Metro Jayakarta Hotel & Spa
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div className="flex h-[16px] items-center justify-start w-[16px]">
                              <Img
                                src="images/img_eye_bluegray_948.svg"
                                className="h-[16px] w-[16px]"
                                alt="eye Seven"
                              />
                            </div>
                            <Text
                              className="font-normal not-italic text-bluegray_441 text-left tracking-[0.14px] w-[auto]"
                              variant="body78"
                            >
                              Kemal Ataturk Avenue, 10294, Indonesia
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[30px] items-start justify-start w-[auto]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div className="flex h-[16px] items-center justify-start w-[16px]">
                              <Img
                                src="images/img_car_indigo_107.svg"
                                className="h-[16px] w-[16px]"
                                alt="car Six"
                              />
                            </div>
                            <Text
                              className="font-semibold text-bluegray_749 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body87"
                            >
                              2
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div className="flex h-[16px] items-center justify-start w-[16px]">
                              <Img
                                src="images/img_user_indigo_107.svg"
                                className="h-[16px] w-[16px]"
                                alt="user Eight"
                              />
                            </div>
                            <Text
                              className="font-semibold text-bluegray_749 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body87"
                            >
                              3
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <div
                              className="bg-cover bg-no-repeat flex h-[16px] items-center justify-start w-[16px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_lightbuildingsize.svg')",
                              }}
                            >
                              <Img
                                src="images/img_airplane_indigo_107.svg"
                                className="h-[16px] w-[16px]"
                                alt="airplane Six"
                              />
                            </div>
                            <Text
                              className="font-semibold text-bluegray_749 text-left tracking-[0.12px] uppercase w-[auto]"
                              variant="body87"
                            >
                              24m
                            </Text>
                          </div>
                        </div>
                      </div>
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

export default Home1Page;
