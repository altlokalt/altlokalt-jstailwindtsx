import React from "react";

import { Img, Text, Line, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const DetailBuildingPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_104 flex font-urbanist items-start justify-end mx-[auto] pr-[181px] sm:pr-[20px] md:pr-[40px] w-[100%]">
        <div className="flex flex-col items-center justify-end w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
            <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[23px] sm:px-[20px] md:w-[100%] w-[18%]">
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
                  style={{ backgroundImage: "url('images/img_group514.svg')" }}
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
            <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[83%]">
              <div className="flex md:h-[270px] h-[80px] justify-end relative w-[100%]">
                <Text
                  className="font-bold ml-[154px] mt-[auto] text-bluegray_948 text-left w-[auto]"
                  variant="body48"
                >
                  Detail
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
              <div className="bg-white_A700 flex items-center justify-end p-[24px] sm:px-[20px] rounded-[16px] md:w-[100%] w-[94%]">
                <div className="flex md:flex-col flex-row gap-[24px] items-end justify-between mt-[2px] w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[24px] items-start justify-start md:w-[100%] w-[70%]">
                    <div className="flex md:flex-col flex-row gap-[24px] items-end justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[24px] items-start justify-start md:w-[100%] w-[71%]">
                        <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                          <Img
                            src="images/img_arrowleft_bluegray_948.svg"
                            className="h-[24px] w-[24px]"
                            alt="arrowleft One"
                          />
                          <div className="bg-bluegray_101 flex items-center justify-end p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                            <Button className="bg-gradient66  cursor-pointer font-bold mt-[236px] sm:px-[20px] px-[24px] py-[13px] rounded-[8px] text-[16px] text-bluegray_948 text-center w-[161px]">
                              Virtual Tour
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-bluegray_948 text-left w-[auto]"
                            variant="body69"
                          >
                            APARTMENT
                          </Text>
                          <Text
                            className="font-bold text-bluegray_948 text-left w-[auto]"
                            variant="body48"
                          >
                            Star Sun Hotel & Apartment
                          </Text>
                          <div className="flex flex-row gap-[9.71px] items-center justify-center w-[auto]">
                            <div className="flex h-[24px] items-center justify-start w-[24px]">
                              <Img
                                src="images/img_eye_bluegray_948.svg"
                                className="h-[24px] w-[24px]"
                                alt="eye"
                              />
                            </div>
                            <Text
                              className="font-medium text-bluegray_441 text-left w-[auto]"
                              variant="body69"
                            >
                              Jl Letda Nasir 45 RT 001/02
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[51px] md:w-[100%] w-[27%]">
                        <div className="bg-bluegray_101 h-[154px] rounded-[8px] w-[100%]"></div>
                        <div className="bg-black_900_7f flex items-center justify-end mt-[24px] p-[66px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body69"
                          >
                            +12
                          </Text>
                        </div>
                        <Img
                          src="images/img_frame33909.svg"
                          className="h-[24px] mt-[24px] w-[120px]"
                          alt="Frame33909"
                        />
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[12px] w-[auto]">
                          <Text
                            className="font-medium text-bluegray_948 text-left w-[auto]"
                            variant="body69"
                          >
                            Price
                          </Text>
                          <div className="flex flex-row gap-[2px] items-center justify-end w-[auto]">
                            <Text
                              className="font-bold text-indigo_A206 text-right w-[auto]"
                              variant="body48"
                            >
                              $80
                            </Text>
                            <Text
                              className="font-semibold text-bluegray_441 text-right w-[auto]"
                              variant="body78"
                            >
                              /night
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-bluegray_948 text-left w-[auto]"
                        variant="body64"
                      >
                        Facility
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-start justify-start md:w-[100%] w-[auto]">
                        <List
                          className="sm:flex-col flex-row md:gap-[40px] gap-[80px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[67%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                            <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                              <div className="flex h-[24px] items-center justify-start w-[24px]">
                                <Img
                                  src="images/img_car_indigo_107.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="car"
                                />
                              </div>
                              <Text
                                className="font-semibold text-bluegray_948 text-left w-[auto]"
                                variant="body69"
                              >
                                2 Beds
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                              <Img
                                src="images/img_save.svg"
                                className="h-[24px] w-[24px]"
                                alt="save"
                              />
                              <Text
                                className="font-semibold text-bluegray_948 text-left w-[auto]"
                                variant="body69"
                              >
                                Kitchen
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                            <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                              <div className="flex h-[24px] items-center justify-start w-[24px]">
                                <Img
                                  src="images/img_user_indigo_107.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="user Two"
                                />
                              </div>
                              <Text
                                className="font-semibold text-bluegray_948 text-left w-[auto]"
                                variant="body69"
                              >
                                3 Baths
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                              <Img
                                src="images/img_lightbalcony.svg"
                                className="h-[24px] w-[24px]"
                                alt="Lightbalcony"
                              />
                              <Text
                                className="font-semibold text-bluegray_948 text-left w-[auto]"
                                variant="body69"
                              >
                                Balcony
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                            <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                              <div
                                className="bg-cover bg-no-repeat flex h-[24px] items-center justify-start w-[24px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_lightbuildingsize.svg')",
                                }}
                              >
                                <Img
                                  src="images/img_airplane_indigo_107.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="airplane"
                                />
                              </div>
                              <Text
                                className="font-semibold text-bluegray_948 text-left w-[auto]"
                                variant="body69"
                              >
                                24M area
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                              <Img
                                src="images/img_signal_indigo_107.svg"
                                className="h-[24px] w-[24px]"
                                alt="signal"
                              />
                              <Text
                                className="font-semibold text-bluegray_948 text-left w-[auto]"
                                variant="body69"
                              >
                                Wifi
                              </Text>
                            </div>
                          </div>
                        </List>
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                          <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_computer_indigo_107.svg"
                              className="h-[24px] w-[24px]"
                              alt="computer"
                            />
                            <Text
                              className="font-semibold text-bluegray_948 text-left w-[auto]"
                              variant="body69"
                            >
                              Smooking Area
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_clock_indigo_107.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock"
                            />
                            <Text
                              className="font-semibold text-bluegray_948 text-left w-[auto]"
                              variant="body69"
                            >
                              Parking Area
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start max-w-[732px] w-[100%]">
                      <Text
                        className="font-bold text-bluegray_948 text-left w-[auto]"
                        variant="body64"
                      >
                        Description
                      </Text>
                      <Text
                        className="font-normal leading-[20.00px] md:max-w-[100%] max-w-[732px] not-italic text-bluegray_441 text-left tracking-[0.14px]"
                        variant="body78"
                      >
                        <span className="text-bluegray_441 text-[14px] font-urbanist">
                          Star Apartment by Star Hotel is an inn that has a room
                          concept in an apartment, which is comfortable and
                          clean. This apartment is located in a strategic area
                          of ​​Semarang City, thus providing easy access to
                          several famous places in Semarang City. With the
                          facilities and services in this apartment, you can
                          make this apartment your vacation accommodation with
                          your family or partner
                        </span>
                        <span className="text-bluegray_441 text-[14px] font-urbanist">
                          .
                        </span>
                        <span className="text-indigo_A206 text-[14px] font-urbanist font-semibold">
                          {" "}
                          Learn More
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start md:mt-[0] mt-[52px] md:w-[100%] w-[29%]">
                    <div className="bg-white_A700 border-[1px] border-indigo_55 border-solid flex items-center justify-start p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Img
                          src="images/img_user_bluegray_948.svg"
                          className="h-[24px] md:ml-[0] ml-[228px] w-[24px]"
                          alt="user Three"
                        />
                        <div className="bg-gray_120 h-[48px] mt-[23px] mx-[auto] rounded-[4px] w-[48px]"></div>
                        <Text
                          className="font-bold md:ml-[0] ml-[65px] mt-[19px] text-bluegray_948 text-left w-[auto]"
                          variant="body69"
                        >
                          Jaydon Lipshutz
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] ml-[103px] mt-[8px] text-bluegray_441 text-left w-[auto]"
                          variant="body78"
                        >
                          AGENT
                        </Text>
                        <div className="flex flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[31px] mt-[17px] w-[auto]">
                          <Img
                            src="images/img_eye_bluegray_952.svg"
                            className="h-[16px] w-[16px]"
                            alt="eye One"
                          />
                          <Text
                            className="font-medium text-bluegray_441 text-left w-[auto]"
                            variant="body87"
                          >
                            Ampera 3 no 8 Daerah Khusus
                          </Text>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] ml-[86px] mt-[10px] text-bluegray_948 text-left w-[auto]"
                          variant="body78"
                        >
                          12 Properties
                        </Text>
                        <div className="flex flex-row gap-[16px] items-center justify-between mt-[22px] w-[100%]">
                          <Button
                            className="bg-indigo_A404 flex items-center justify-center px-[16px] py-[9px] rounded-[4px] text-center w-[118px]"
                            leftIcon={
                              <Img
                                src="images/img_user_16x16.svg"
                                className="mr-[16px] text-center"
                                alt="user"
                              />
                            }
                          >
                            <div className="bg-transparent cursor-pointer font-semibold text-[12px] text-center text-white_A700 tracking-[0.12px]">
                              Message
                            </div>
                          </Button>
                          <Button
                            className="bg-light_green_617 flex items-center justify-center px-[16px] py-[9px] rounded-[4px] text-center w-[118px]"
                            leftIcon={
                              <Img
                                src="images/img_call_white_a700_16x16.svg"
                                className="mr-[16px] text-center"
                                alt="call"
                              />
                            }
                          >
                            <div className="bg-transparent cursor-pointer font-semibold text-[12px] text-center text-white_A700 tracking-[0.12px]">
                              Call
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_frame33905.svg"
                      className="h-[297px] mt-[23px] w-[auto]"
                      alt="Frame33905"
                    />
                    <Button className="bg-indigo_A206 cursor-pointer font-bold mt-[24px] sm:px-[20px] px-[24px] py-[13px] rounded-[8px] shadow-bs92 text-[16px] text-center text-white_A700 tracking-[0.16px] w-[302px]">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[98%]">
            <div className="bg-white_A700 h-[319px] w-[18%]"></div>
            <div className="bg-white_A700 flex items-center justify-end mb-[40px] md:mt-[0] mt-[14px] p-[24px] sm:px-[20px] rounded-[16px] md:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-bold text-bluegray_948 text-left w-[auto]"
                    variant="body64"
                  >
                    Review
                  </Text>
                  <Text
                    className="font-medium text-indigo_A206 text-left w-[auto]"
                    variant="body69"
                  >
                    View All
                  </Text>
                </div>
                <div className="flex flex-row gap-[12px] items-center justify-start mt-[9px] md:w-[100%] w-[17%]">
                  <Button className="bg-indigo_A206 cursor-pointer font-bold min-w-[47px] px-[12px] py-[4px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                    4.2
                  </Button>
                  <Text
                    className="font-medium text-bluegray_441 text-left w-[auto]"
                    variant="body69"
                  >
                    from 28 reviews
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between mt-[24px] w-[100%]">
                  <List
                    className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[auto]"
                    orientation="horizontal"
                  >
                    <div className="border-[1px] border-gray_120 border-solid flex items-center justify-center sm:ml-[0] p-[12px] rounded-[8px] w-[auto]">
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                        <div className="flex flex-row gap-[108px] items-center justify-between w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_948 text-left w-[auto]"
                            variant="body69"
                          >
                            Albert Flores
                          </Text>
                          <div className="bg-blue_57 flex flex-row items-center justify-center px-[8px] rounded-[4px] w-[auto]">
                            <Text
                              className="font-semibold h-[20px] text-indigo_A206 text-left w-[auto]"
                              variant="body78"
                            >
                              5.0
                            </Text>
                            <Text
                              className="font-normal not-italic text-indigo_A105 text-left tracking-[0.12px] w-[auto]"
                              variant="body87"
                            >
                              /5
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray_120 h-[1px] w-[100%]" />
                        <Text
                          className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[222px] not-italic text-bluegray_441 text-left tracking-[0.14px]"
                          variant="body78"
                        >
                          comfortable apartment, friendly staff, and very
                          careful with the covid protocol
                        </Text>
                      </div>
                    </div>
                    <div className="border-[1px] border-gray_120 border-solid flex items-center justify-center sm:ml-[0] p-[12px] rounded-[8px] w-[auto]">
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                        <div className="flex flex-row gap-[108px] items-center justify-between w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_948 text-left w-[auto]"
                            variant="body69"
                          >
                            Albert Flores
                          </Text>
                          <div className="bg-blue_57 flex flex-row items-center justify-center px-[8px] rounded-[4px] w-[auto]">
                            <Text
                              className="font-semibold h-[20px] text-indigo_A206 text-left w-[auto]"
                              variant="body78"
                            >
                              5.0
                            </Text>
                            <Text
                              className="font-normal not-italic text-indigo_A105 text-left tracking-[0.12px] w-[auto]"
                              variant="body87"
                            >
                              /5
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray_120 h-[1px] w-[100%]" />
                        <Text
                          className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[222px] not-italic text-bluegray_441 text-left tracking-[0.14px]"
                          variant="body78"
                        >
                          comfortable apartment, friendly staff, and very
                          careful with the covid protocol
                        </Text>
                      </div>
                    </div>
                    <div className="border-[1px] border-gray_120 border-solid flex items-center justify-center sm:ml-[0] p-[12px] rounded-[8px] w-[auto]">
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                        <div className="flex flex-row gap-[108px] items-center justify-between w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_948 text-left w-[auto]"
                            variant="body69"
                          >
                            Albert Flores
                          </Text>
                          <div className="bg-blue_57 flex flex-row items-center justify-center px-[8px] rounded-[4px] w-[auto]">
                            <Text
                              className="font-semibold h-[20px] text-indigo_A206 text-left w-[auto]"
                              variant="body78"
                            >
                              5.0
                            </Text>
                            <Text
                              className="font-normal not-italic text-indigo_A105 text-left tracking-[0.12px] w-[auto]"
                              variant="body87"
                            >
                              /5
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray_120 h-[1px] w-[100%]" />
                        <Text
                          className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[222px] not-italic text-bluegray_441 text-left tracking-[0.14px]"
                          variant="body78"
                        >
                          comfortable apartment, friendly staff, and very
                          careful with the covid protocol
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-start sm:ml-[0] w-[100%]">
                      <div className="border-[1px] border-gray_120 border-solid flex items-center justify-center p-[12px] rounded-[8px] w-[auto]">
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                          <div className="flex flex-row gap-[108px] items-center justify-center w-[auto]">
                            <Text
                              className="font-semibold text-bluegray_948 text-left w-[auto]"
                              variant="body69"
                            >
                              Albert Flores
                            </Text>
                            <div className="bg-blue_57 flex flex-row gap-[19px] items-center justify-between px-[8px] w-[auto]">
                              <Text
                                className="font-semibold text-indigo_A206 text-left w-[auto]"
                                variant="body78"
                              >
                                5.0
                              </Text>
                              <Text
                                className="font-normal not-italic text-indigo_A105 text-left tracking-[0.12px] w-[auto]"
                                variant="body87"
                              >
                                /5
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-gray_120 h-[1px] w-[100%]" />
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[137px] not-italic text-bluegray_441 text-left tracking-[0.14px]"
                            variant="body78"
                          >
                            comfortable apartment, friendly staff, and very
                            careful with the covid protocol
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <Button className="bg-white_A700 flex h-[40px] items-center justify-center md:mt-[0] my-[45px] p-[12px] rounded-[50%] shadow-bs92 w-[40px]">
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
        </div>
      </div>
    </>
  );
};

export default DetailBuildingPage;
