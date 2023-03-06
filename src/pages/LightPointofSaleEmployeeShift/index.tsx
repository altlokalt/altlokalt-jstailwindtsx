import React from "react";

import { List, Text, Img, Button, Line } from "components";

const LightPointofSaleEmployeeShiftPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_72 flex font-mulish h-[786px] justify-end mx-[auto] pr-[180px] sm:pr-[20px] md:pr-[40px] relative w-[100%]">
        <List
          className="flex-col gap-[16px] grid ml-[144px] mt-[auto] w-[79%]"
          orientation="vertical"
        >
          <div className="bg-white_A700 flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-center justify-start my-[8px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Shift 1 (06 AM -12 AM)
                </Text>
                <div className="flex h-[40px] items-center justify-start md:ml-[0] ml-[959px] p-[8px] w-[40px]">
                  <div className="flex h-[24px] items-center justify-start w-[24px]">
                    <Img
                      src="images/img_16pencil.svg"
                      className="h-[24px] w-[24px]"
                      alt="16pencil"
                    />
                  </div>
                </div>
                <div className="flex h-[40px] items-center justify-start md:ml-[0] ml-[16px] p-[8px] w-[40px]">
                  <div className="flex h-[24px] items-center justify-start w-[24px]">
                    <Img
                      src="images/img_plus_bluegray_340.svg"
                      className="h-[24px] w-[24px]"
                      alt="plus"
                    />
                  </div>
                </div>
              </div>
              <div className="md:gap-[20px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[99%]">
                <div className="bg-white_A700 border-[1px] border-indigo_56 border-solid flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_avatargeneral.svg"
                      className="h-[64px] w-[64px]"
                      alt="AvatarGeneral"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Brooklyn Simmons
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[40px] w-[40px]"
                          alt="overflowmenu"
                        />
                      </div>
                      <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[44%]">
                        <Button className="bg-gray_124 cursor-pointer font-bold px-[8px] py-[3px] rounded-[4px] text-[12px] text-bluegray_340 text-center tracking-[0.10px] w-[54px]">
                          Admin
                        </Button>
                        <Text
                          className="font-bold text-deep_purple_503 text-left tracking-[0.07px] w-[auto]"
                          variant="body78"
                        >
                          Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border-[1px] border-indigo_56 border-solid flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_avatargeneral.svg"
                      className="h-[64px] w-[64px]"
                      alt="AvatarGeneral One"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Dianne Russell
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[40px] w-[40px]"
                          alt="overflowmenu One"
                        />
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[47%]">
                        <Button className="bg-teal_59 cursor-pointer font-bold px-[8px] py-[3px] rounded-[4px] text-[12px] text-center text-teal_408 tracking-[0.10px] w-[63px]">
                          Cashier
                        </Button>
                        <Text
                          className="font-bold mt-[3px] text-deep_purple_503 text-left tracking-[0.07px] w-[auto]"
                          variant="body78"
                        >
                          Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border-[1px] border-indigo_56 border-solid flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_avatargeneral.svg"
                      className="h-[64px] w-[64px]"
                      alt="AvatarGeneral Two"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Esther Howard
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[40px] w-[40px]"
                          alt="overflowmenu Two"
                        />
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[40%]">
                        <Button className="bg-lime_104 cursor-pointer font-bold px-[8px] py-[3px] rounded-[4px] text-[12px] text-center text-yellow_804 tracking-[0.10px] w-[45px]">
                          Chef
                        </Button>
                        <Text
                          className="font-bold mt-[3px] text-deep_purple_503 text-left tracking-[0.07px] w-[auto]"
                          variant="body78"
                        >
                          Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border-[1px] border-indigo_56 border-solid flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_avatargeneral.svg"
                      className="h-[64px] w-[64px]"
                      alt="AvatarGeneral Three"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Jenny Wilson
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[40px] w-[40px]"
                          alt="overflowmenu Three"
                        />
                      </div>
                      <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[50%]">
                        <Button className="bg-deep_purple_105 cursor-pointer font-bold px-[8px] py-[3px] rounded-[4px] text-[12px] text-center text-deep_purple_801 tracking-[0.10px] w-[71px]">
                          Waitress
                        </Button>
                        <Text
                          className="font-bold text-deep_purple_503 text-left tracking-[0.07px] w-[auto]"
                          variant="body78"
                        >
                          Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border-[1px] border-indigo_56 border-solid flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_avatargeneral.svg"
                      className="h-[64px] w-[64px]"
                      alt="AvatarGeneral Four"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Theresa Webb
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[40px] w-[40px]"
                          alt="overflowmenu Four"
                        />
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[54%]">
                        <Button className="border-[1px] border-deep_purple_503 border-solid cursor-pointer font-bold px-[8px] py-[3px] rounded-[4px] text-[12px] text-center text-deep_purple_801 tracking-[0.10px] w-[82px]">
                          Dishwasher
                        </Button>
                        <Text
                          className="font-bold mt-[3px] text-deep_purple_503 text-left tracking-[0.07px] w-[auto]"
                          variant="body78"
                        >
                          Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border-[1px] border-indigo_56 border-solid flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_avatargeneral.svg"
                      className="h-[64px] w-[64px]"
                      alt="AvatarGeneral Five"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Ronald Richards
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[40px] w-[40px]"
                          alt="overflowmenu Five"
                        />
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[40%]">
                        <Button className="bg-lime_104 cursor-pointer font-bold px-[8px] py-[3px] rounded-[4px] text-[12px] text-center text-yellow_804 tracking-[0.10px] w-[45px]">
                          Chef
                        </Button>
                        <Text
                          className="font-bold mt-[3px] text-deep_purple_503 text-left tracking-[0.07px] w-[auto]"
                          variant="body78"
                        >
                          Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
            <div className="flex flex-col items-center justify-start my-[8px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Shift 2 (01 PM - 11 PM)
                </Text>
                <div className="flex h-[40px] items-center justify-start md:ml-[0] ml-[957px] p-[8px] w-[40px]">
                  <div className="flex h-[24px] items-center justify-start w-[24px]">
                    <Img
                      src="images/img_16pencil.svg"
                      className="h-[24px] w-[24px]"
                      alt="16pencil One"
                    />
                  </div>
                </div>
                <div className="flex h-[40px] items-center justify-start md:ml-[0] ml-[16px] p-[8px] w-[40px]">
                  <div className="flex h-[24px] items-center justify-start w-[24px]">
                    <Img
                      src="images/img_plus_bluegray_340.svg"
                      className="h-[24px] w-[24px]"
                      alt="plus One"
                    />
                  </div>
                </div>
              </div>
              <div className="gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[24px] md:w-[100%] w-[99%]">
                <div className="bg-white_A700 border-[1px] border-indigo_56 border-solid flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_avatargeneral.svg"
                      className="h-[64px] w-[64px]"
                      alt="AvatarGeneral One"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Leslie Alexander
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[40px] w-[40px]"
                          alt="overflowmenu One"
                        />
                      </div>
                      <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[44%]">
                        <Button className="bg-gray_124 cursor-pointer font-bold px-[8px] py-[3px] rounded-[4px] text-[12px] text-bluegray_340 text-center tracking-[0.10px] w-[54px]">
                          Admin
                        </Button>
                        <Text
                          className="font-bold text-deep_purple_503 text-left tracking-[0.07px] w-[auto]"
                          variant="body78"
                        >
                          Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border-[1px] border-indigo_56 border-solid flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_avatargeneral.svg"
                      className="h-[64px] w-[64px]"
                      alt="AvatarGeneral One One"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Floyd Miles
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[40px] w-[40px]"
                          alt="overflowmenu One One"
                        />
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[47%]">
                        <Button className="bg-teal_59 cursor-pointer font-bold px-[8px] py-[3px] rounded-[4px] text-[12px] text-center text-teal_408 tracking-[0.10px] w-[63px]">
                          Cashier
                        </Button>
                        <Text
                          className="font-bold mt-[3px] text-deep_purple_503 text-left tracking-[0.07px] w-[auto]"
                          variant="body78"
                        >
                          Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border-[1px] border-indigo_56 border-solid flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_avatargeneral.svg"
                      className="h-[64px] w-[64px]"
                      alt="AvatarGeneral Two One"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Kristin Watson
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[40px] w-[40px]"
                          alt="overflowmenu Two One"
                        />
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[40%]">
                        <Button className="bg-lime_104 cursor-pointer font-bold px-[8px] py-[3px] rounded-[4px] text-[12px] text-center text-yellow_804 tracking-[0.10px] w-[45px]">
                          Chef
                        </Button>
                        <Text
                          className="font-bold mt-[3px] text-deep_purple_503 text-left tracking-[0.07px] w-[auto]"
                          variant="body78"
                        >
                          Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[32px] md:w-[100%] w-[99%]">
                <div className="bg-white_A700 border-[1px] border-indigo_56 border-solid flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_avatargeneral.svg"
                      className="h-[64px] w-[64px]"
                      alt="AvatarGeneral Three One"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Devon Lane
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[40px] w-[40px]"
                          alt="overflowmenu Three One"
                        />
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[94%]">
                        <Button className="bg-deep_purple_105 cursor-pointer font-bold px-[8px] py-[3px] rounded-[4px] text-[12px] text-center text-deep_purple_801 tracking-[0.10px] w-[71px]">
                          Waitress
                        </Button>
                        <Text
                          className="font-bold mt-[3px] text-deep_purple_503 text-left tracking-[0.07px] w-[auto]"
                          variant="body78"
                        >
                          Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 border-[1px] border-indigo_56 border-solid flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_avatargeneral.svg"
                      className="h-[64px] w-[64px]"
                      alt="AvatarGeneral Four One"
                    />
                    <div className="flex flex-col items-center justify-start w-[auto]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Marvin McKinney
                        </Text>
                        <Img
                          src="images/img_overflowmenu_bluegray_340.svg"
                          className="h-[40px] w-[40px]"
                          alt="overflowmenu Four One"
                        />
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[98%]">
                        <Button className="border-[1px] border-deep_purple_503 border-solid cursor-pointer font-bold px-[8px] py-[3px] rounded-[4px] text-[12px] text-center text-deep_purple_801 tracking-[0.10px] w-[82px]">
                          Dishwasher
                        </Button>
                        <Text
                          className="font-bold mt-[4px] text-deep_purple_503 text-left tracking-[0.07px] w-[auto]"
                          variant="body78"
                        >
                          Details
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-[96px] justify-end relative w-[100%]">
                  <Text
                    className="font-bold mb-[19px] ml-[auto] mr-[59px] mt-[auto] text-deep_purple_503 text-left tracking-[0.07px] w-[auto]"
                    variant="body78"
                  >
                    Details
                  </Text>
                  <div className="absolute bg-white_A700 border-[1px] border-indigo_56 border-solid flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[16px] rounded-[8px] w-[100%]">
                    <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                      <Img
                        src="images/img_avatargeneral.svg"
                        className="h-[64px] w-[64px]"
                        alt="AvatarGeneral Five One"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Jerome Bell
                          </Text>
                          <Img
                            src="images/img_overflowmenu_bluegray_340.svg"
                            className="h-[40px] w-[40px]"
                            alt="overflowmenu Five One"
                          />
                        </div>
                        <Button className="bg-lime_104 cursor-pointer font-bold px-[8px] py-[3px] rounded-[4px] text-[12px] text-center text-yellow_804 tracking-[0.10px] w-[45px]">
                          Chef
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
        <div className="absolute bottom-[0] flex left-[0] md:w-[100%] w-[89%]">
          <aside className="flex flex-col md:hidden justify-start my-[auto] w-[8%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-row items-end justify-evenly w-[100%]">
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[28px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col gap-[56px] items-center justify-start mt-[108px] md:w-[100%] w-[43%]">
                    <div className="flex h-[24px] items-center justify-start w-[24px]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <Img
                          src="images/img_grid_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="grid"
                        />
                      </div>
                    </div>
                    <div className="flex h-[24px] items-center justify-start w-[24px]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <Img
                          src="images/img_chartstatistics.svg"
                          className="h-[24px] w-[24px]"
                          alt="ChartStatistics"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_music_bluegray_340.svg"
                      className="h-[24px] w-[24px]"
                      alt="music"
                    />
                    <div className="flex h-[24px] items-center justify-start w-[24px]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <Img
                          src="images/img_file_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="file"
                        />
                      </div>
                    </div>
                    <div className="flex h-[24px] items-center justify-start w-[24px]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <Img
                          src="images/img_computer_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="computer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[56px] items-center justify-start mt-[40px] w-[56px]">
                    <Button className="bg-deep_purple_503 flex h-[56px] items-center justify-center p-[16px] rounded-[8px] w-[56px]">
                      <Img
                        src="images/img_user_white_a700_56x56.svg"
                        className="h-[24px]"
                        alt="user"
                      />
                    </Button>
                  </div>
                  <Img
                    src="images/img_search_bluegray_340_24x24.svg"
                    className="h-[24px] mb-[80px] mt-[212px] w-[24px]"
                    alt="search"
                  />
                </div>
                <Line className="bg-gray_332 h-[863px] mt-[57px] w-[1px]" />
              </div>
            </div>
          </aside>
          <div className="flex flex-col items-center justify-start ml-[-113px] mr-[auto] w-[100%] z-[1]">
            <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[18px] w-[100%]">
              <div className="flex md:flex-1 flex-row gap-[8px] items-end justify-center md:ml-[0] ml-[13px] w-[10%] md:w-[100%]">
                <div className="bg-gray_335 h-[40px] rounded-[8px] w-[40px]"></div>
                <Text
                  className="font-bold my-[4px] text-gray_981 text-left tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  Dazzie
                </Text>
              </div>
              <div className="flex h-[24px] items-center justify-start md:ml-[0] ml-[1016px] w-[24px]">
                <Img
                  src="images/img_alarm_bluegray_340.svg"
                  className="h-[24px] w-[24px]"
                  alt="alarm"
                />
              </div>
              <div className="flex md:flex-1 items-center justify-start md:ml-[0] ml-[28px] md:w-[100%] w-[9%]">
                <div className="flex flex-row gap-[16px] items-start justify-between w-[100%]">
                  <div className="bg-gray_400 h-[41px] rounded-[20px] w-[40px]"></div>
                  <div className="flex flex-col items-start justify-start mt-[2px] w-[auto]">
                    <Text
                      className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Sumanto
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_340 text-left tracking-[0.10px] w-[auto]"
                      variant="body87"
                    >
                      Cashier
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-gray_332 h-[1px] w-[100%]" />
          </div>
          <div className="flex flex-row md:gap-[40px] items-end justify-between ml-[undefinedpx] mr-[32px] mt-[120px] w-[88%] z-[1]">
            <Text
              className="font-bold mt-[7px] text-gray_981 text-left tracking-[0.12px] w-[auto]"
              variant="body48"
            >
              Employee Shift
            </Text>
            <Button className="bg-deep_purple_503 cursor-pointer font-bold min-w-[139px] sm:px-[20px] px-[24px] py-[11px] rounded-[8px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[auto]">
              Create New
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightPointofSaleEmployeeShiftPage;
