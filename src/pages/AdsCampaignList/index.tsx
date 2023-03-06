import React from "react";

import { Text, Button, Img, Input, SelectBox, List, Line } from "components";

const AdsCampaignListPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 font-poppins h-[1333px] mx-[auto] px-[10px] relative w-[100%]">
        <div className="absolute bottom-[0] h-[1561px] inset-x-[0] max-w-[1980px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="absolute bg-gray_57 h-[1561px] inset-[0] justify-center m-[auto] w-[97%]"></div>
          <div className="absolute bottom-[4%] flex flex-col gap-[48px] items-center justify-start right-[0] w-[89%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-black_908 text-left w-[auto]"
                    variant="body39"
                  >
                    Campaign
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_667 text-left w-[auto]"
                    variant="body64"
                  >
                    Current campaign list
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[1272px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal md:ml-[0] ml-[101px] not-italic text-black_902 text-right w-[auto]"
                    variant="body60"
                  >
                    09:62 AM
                  </Text>
                  <Text
                    className="font-normal mr-[20px] mt-[3px] not-italic text-gray_607 text-right w-[auto]"
                    variant="body78"
                  >
                    Monday, 3 Augusut 2020
                  </Text>
                </div>
                <Button className="border-[1px] border-bluegray_800_1e border-solid flex items-center justify-center md:ml-[0] ml-[38px] p-[14px] rounded-[12px] w-[4%]">
                  <Img
                    src="images/img_ticket_bluegray_834.svg"
                    className="h-[28px]"
                    alt="ticket"
                  />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <Input
                  className="flex-1 font-medium leading-[normal] p-[0] text-[18px] placeholder:text-bluegray_913 text-bluegray_913 text-left w-[100%]"
                  wrapClassName="bg-white_A700 flex md:w-[100%] pl-[9px] pr-[34px] py-[14px] rounded-[12px] shadow-bs124 sm:pr-[20px] sm:w-[100%] w-[12%]"
                  name="sort"
                  placeholder="Boookmark"
                  prefix={
                    <Img
                      src="images/img_bookmark_bluegray_835.svg"
                      className="mr-[35px] my-[auto]"
                      alt="bookmark"
                    />
                  }
                ></Input>
                <div className="bg-white_A700 flex md:flex-1 flex-row gap-[21px] items-center justify-center md:ml-[0] ml-[36px] p-[13px] rounded-[12px] shadow-bs124 md:w-[100%] w-[9%]">
                  <Img
                    src="images/img_play_green_506.svg"
                    className="h-[25px] ml-[12px] rounded-[2px] w-[25px]"
                    alt="play"
                  />
                  <Text
                    className="font-medium mr-[12px] text-bluegray_913 text-left w-[auto]"
                    variant="body64"
                  >
                    Start
                  </Text>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-row gap-[24px] items-center justify-center md:ml-[0] ml-[36px] p-[13px] rounded-[12px] shadow-bs124 md:w-[100%] w-[9%]">
                  <Img
                    src="images/img_signal_bluegray_440.svg"
                    className="h-[18px] ml-[12px] w-[auto]"
                    alt="signal"
                  />
                  <Text
                    className="font-medium mr-[10px] text-bluegray_913 text-left w-[auto]"
                    variant="body64"
                  >
                    Pause
                  </Text>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-row gap-[21px] items-center justify-center md:ml-[0] ml-[36px] p-[11px] rounded-[12px] shadow-bs124 md:w-[100%] w-[9%]">
                  <div className="bg-red_513 h-[18px] ml-[11px] my-[7px] rounded-[2px] w-[18px]"></div>
                  <Text
                    className="font-medium mr-[26px] mt-[6px] text-bluegray_913 text-left w-[auto]"
                    variant="body64"
                  >
                    Stop
                  </Text>
                </div>
                <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:ml-[0] ml-[773px] p-[16px] rounded-[12px] shadow-bs124 md:w-[100%] w-[4%]">
                  <Img
                    src="images/img_settings_bluegray_913.svg"
                    className="h-[24px] w-[24px]"
                    alt="settings"
                  />
                </div>
                <SelectBox
                  className="bg-white_A700 md:flex-1 font-medium leading-[normal] md:ml-[0] ml-[38px] sm:pl-[20px] pl-[26px] py-[14px] rounded-[12px] shadow-bs124 text-[18px] text-bluegray_913 text-right md:w-[100%] w-[9%]"
                  placeholderClassName="text-bluegray_913"
                  name="sort One"
                  placeholder="Newest"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_bluegray_455.svg"
                      className="h-[24px] mr-[17px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <List
                className="flex-col gap-[1px] grid items-center w-[97%]"
                orientation="vertical"
              >
                <div className="h-[172px] sm:h-[264px] md:h-[397px] relative w-[100%]">
                  <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[14px] w-[93%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[39px] md:w-[100%] w-[23%]">
                      <Text
                        className="font-normal not-italic text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        #ADS001245
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[20px] mt-[6px] text-bluegray_913 text-left w-[auto]"
                        variant="body60"
                      >
                        50% OFF Floor Lamp Get it Now!
                      </Text>
                      <div className="flex flex-row gap-[31px] items-center justify-start md:ml-[0] ml-[3px] mt-[11px] md:w-[100%] w-[70%]">
                        <Img
                          src="images/img_checkmark_gray_607.svg"
                          className="h-[10px] w-[auto]"
                          alt="checkmark"
                        />
                        <Text
                          className="font-normal not-italic text-gray_607 text-left w-[auto]"
                          variant="body78"
                        >
                          Published on 5 March 2020
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[132px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        $63.04
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Today Spends
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[62px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        $652.86
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Total Spends
                      </Text>
                    </div>
                    <div className="h-[51px] md:ml-[0] ml-[77px] relative md:w-[100%] w-[21%]">
                      <div className="absolute border-[1px] border-gray_200 border-solid flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[14px] rounded-[12px] w-[auto]">
                        <Text
                          className="font-medium mr-[3px] text-gray_756 text-left w-[auto]"
                          variant="body78"
                        >
                          https://eclan.io/campaign0123...
                        </Text>
                      </div>
                      <Img
                        src="images/img_file_bluegray_440.svg"
                        className="absolute h-[22px] inset-y-[0] left-[0] my-[auto] w-[22px]"
                        alt="file"
                      />
                    </div>
                  </div>
                  <div className="absolute h-[81px] inset-y-[0] left-[0] my-[auto] outline outline-[1px] outline-indigo_61 rounded-[40px] w-[81px]">
                    <div className="h-[81px] m-[auto] outline outline-[3px] outline-green_506 rounded-[40px] w-[81px]"></div>
                    <Text
                      className="absolute font-bold h-[max-content] inset-y-[0] my-[auto] right-[30%] text-green_506 text-left w-[auto]"
                      variant="body69"
                    >
                      71%
                    </Text>
                  </div>
                  <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[25%]">
                    <Button className="bg-green_500_19 cursor-pointer font-medium leading-[normal] min-w-[192px] py-[13px] rounded-[12px] text-[16px] text-center text-green_506 w-[auto]">
                      On Going
                    </Button>
                    <Button className="border-[1px] border-bluegray_400_48 border-solid flex h-[51px] items-center justify-center sm:ml-[0] ml-[39px] p-[8px] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_play_green_506.svg"
                        className="h-[25px]"
                        alt="play One"
                      />
                    </Button>
                    <Button className="border-[1px] border-bluegray_400_48 border-solid flex h-[51px] items-center justify-center sm:ml-[0] ml-[30px] p-[16px] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_signal_bluegray_440.svg"
                        className=""
                        alt="signal One"
                      />
                    </Button>
                    <div className="border-[1px] border-red_500_48 border-solid flex h-[51px] items-center justify-start sm:ml-[0] ml-[10px] p-[16px] rounded-[25px] w-[51px]">
                      <div className="bg-red_513 h-[18px] rounded-[2px] w-[18px]"></div>
                    </div>
                  </div>
                </div>
                <div className="h-[172px] sm:h-[264px] md:h-[397px] relative w-[100%]">
                  <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[14px] shadow-bs126 w-[93%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[39px] md:w-[100%] w-[25%]">
                      <Text
                        className="font-normal not-italic text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        #ADS001245
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[20px] mt-[6px] text-bluegray_913 text-left w-[auto]"
                        variant="body60"
                      >
                        $632 Target Gift Card on New Year
                      </Text>
                      <div className="flex flex-row gap-[31px] items-center justify-start md:ml-[0] ml-[3px] mt-[11px] md:w-[100%] w-[64%]">
                        <Img
                          src="images/img_checkmark_gray_607.svg"
                          className="h-[10px] w-[auto]"
                          alt="checkmark One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_607 text-left w-[auto]"
                          variant="body78"
                        >
                          Published on 5 March 2020
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[98px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        $63.04
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Today Spends
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[62px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        $652.86
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Total Spends
                      </Text>
                    </div>
                    <div className="h-[51px] md:ml-[0] ml-[77px] relative md:w-[100%] w-[21%]">
                      <div className="absolute border-[1px] border-gray_200 border-solid flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[14px] rounded-[12px] w-[auto]">
                        <Text
                          className="font-medium mr-[3px] text-gray_756 text-left w-[auto]"
                          variant="body78"
                        >
                          https://eclan.io/campaign0123...
                        </Text>
                      </div>
                      <Img
                        src="images/img_file_bluegray_440.svg"
                        className="absolute h-[22px] inset-y-[0] left-[0] my-[auto] w-[22px]"
                        alt="file One"
                      />
                    </div>
                  </div>
                  <div className="absolute h-[81px] inset-y-[0] left-[0] my-[auto] outline outline-[1px] outline-indigo_61 rounded-[40px] w-[81px]">
                    <div className="h-[81px] m-[auto] outline outline-[3px] outline-green_506 rounded-[40px] w-[81px]"></div>
                    <Text
                      className="absolute font-bold h-[max-content] inset-y-[0] my-[auto] right-[23%] text-green_506 text-left w-[auto]"
                      variant="body69"
                    >
                      44%
                    </Text>
                  </div>
                  <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[25%]">
                    <Button className="bg-red_500_26 cursor-pointer font-medium leading-[normal] min-w-[192px] py-[13px] rounded-[12px] text-[16px] text-center text-red_513 w-[auto]">
                      Expired
                    </Button>
                    <Button className="border-[1px] border-bluegray_400_48 border-solid flex h-[51px] items-center justify-center sm:ml-[0] ml-[39px] p-[8px] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_play_green_506.svg"
                        className="h-[25px]"
                        alt="play Two"
                      />
                    </Button>
                    <Button className="border-[1px] border-bluegray_400_48 border-solid flex h-[51px] items-center justify-center sm:ml-[0] ml-[30px] p-[16px] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_signal_bluegray_440.svg"
                        className=""
                        alt="signal Two"
                      />
                    </Button>
                    <div className="border-[1px] border-red_500_48 border-solid flex h-[51px] items-center justify-start sm:ml-[0] ml-[10px] p-[16px] rounded-[25px] w-[51px]">
                      <div className="bg-red_513 h-[18px] rounded-[2px] w-[18px]"></div>
                    </div>
                  </div>
                </div>
                <div className="h-[172px] sm:h-[264px] md:h-[397px] relative w-[100%]">
                  <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[14px] w-[93%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[39px] md:w-[100%] w-[17%]">
                      <Text
                        className="font-normal not-italic text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        #ADS001245
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[20px] mt-[4px] text-bluegray_913 text-left w-[auto]"
                        variant="body60"
                      >
                        15% OFF Granite Stone
                      </Text>
                      <div className="flex flex-row gap-[31px] items-center justify-start md:ml-[0] ml-[3px] mt-[13px] md:w-[100%] w-[97%]">
                        <Img
                          src="images/img_checkmark_gray_607.svg"
                          className="h-[10px] w-[auto]"
                          alt="checkmark Two"
                        />
                        <Text
                          className="font-normal not-italic text-gray_607 text-left w-[auto]"
                          variant="body78"
                        >
                          Published on 5 March 2020
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[225px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        $63.04
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Today Spends
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[62px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        $652.86
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Total Spends
                      </Text>
                    </div>
                    <div className="h-[51px] md:ml-[0] ml-[77px] relative md:w-[100%] w-[21%]">
                      <div className="absolute border-[1px] border-gray_200 border-solid flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[14px] rounded-[12px] w-[auto]">
                        <Text
                          className="font-medium mr-[3px] text-gray_756 text-left w-[auto]"
                          variant="body78"
                        >
                          https://eclan.io/campaign0123...
                        </Text>
                      </div>
                      <Img
                        src="images/img_file_bluegray_440.svg"
                        className="absolute h-[22px] inset-y-[0] left-[0] my-[auto] w-[22px]"
                        alt="file Two"
                      />
                    </div>
                  </div>
                  <div className="absolute h-[81px] inset-y-[0] left-[0] my-[auto] outline outline-[1px] outline-indigo_61 rounded-[40px] w-[81px]">
                    <div className="h-[81px] m-[auto] outline outline-[3px] outline-green_506 rounded-[40px] w-[81px]"></div>
                    <Text
                      className="absolute font-bold h-[max-content] inset-y-[0] my-[auto] right-[26%] text-green_506 text-left w-[auto]"
                      variant="body69"
                    >
                      90%
                    </Text>
                  </div>
                  <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[25%]">
                    <Button className="bg-green_500_19 cursor-pointer font-medium leading-[normal] min-w-[192px] py-[13px] rounded-[12px] text-[16px] text-center text-green_506 w-[auto]">
                      On Going
                    </Button>
                    <Button className="border-[1px] border-bluegray_400_48 border-solid flex h-[51px] items-center justify-center sm:ml-[0] ml-[39px] p-[8px] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_play_green_506.svg"
                        className="h-[25px]"
                        alt="play Three"
                      />
                    </Button>
                    <Button className="border-[1px] border-bluegray_400_48 border-solid flex h-[51px] items-center justify-center sm:ml-[0] ml-[30px] p-[16px] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_signal_bluegray_440.svg"
                        className=""
                        alt="signal Three"
                      />
                    </Button>
                    <div className="border-[1px] border-red_500_48 border-solid flex h-[51px] items-center justify-start sm:ml-[0] ml-[10px] p-[16px] rounded-[25px] w-[51px]">
                      <div className="bg-red_513 h-[18px] rounded-[2px] w-[18px]"></div>
                    </div>
                  </div>
                </div>
                <div className="h-[172px] sm:h-[264px] md:h-[397px] relative w-[100%]">
                  <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[14px] w-[93%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[39px] md:w-[100%] w-[23%]">
                      <Text
                        className="font-normal not-italic text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        #ADS001245
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[20px] mt-[4px] text-bluegray_913 text-left w-[auto]"
                        variant="body60"
                      >
                        Game Online Vouchers 20% OFF
                      </Text>
                      <div className="flex flex-row gap-[31px] items-center justify-start md:ml-[0] ml-[3px] mt-[13px] md:w-[100%] w-[69%]">
                        <Img
                          src="images/img_checkmark_gray_607.svg"
                          className="h-[10px] w-[auto]"
                          alt="checkmark Three"
                        />
                        <Text
                          className="font-normal not-italic text-gray_607 text-left w-[auto]"
                          variant="body78"
                        >
                          Published on 5 March 2020
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[125px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        $63.04
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Today Spends
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[62px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        $652.86
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Total Spends
                      </Text>
                    </div>
                    <div className="h-[51px] md:ml-[0] ml-[77px] relative md:w-[100%] w-[21%]">
                      <div className="absolute border-[1px] border-gray_200 border-solid flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[14px] rounded-[12px] w-[auto]">
                        <Text
                          className="font-medium mr-[3px] text-gray_756 text-left w-[auto]"
                          variant="body78"
                        >
                          https://eclan.io/campaign0123...
                        </Text>
                      </div>
                      <Img
                        src="images/img_file_bluegray_440.svg"
                        className="absolute h-[22px] inset-y-[0] left-[0] my-[auto] w-[22px]"
                        alt="file Three"
                      />
                    </div>
                  </div>
                  <div className="absolute h-[81px] inset-y-[0] left-[0] my-[auto] outline outline-[1px] outline-indigo_61 rounded-[40px] w-[81px]">
                    <div className="h-[81px] m-[auto] outline outline-[3px] outline-green_506 rounded-[40px] w-[81px]"></div>
                    <Text
                      className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-green_506 text-left w-[max-content]"
                      variant="body69"
                    >
                      29%
                    </Text>
                  </div>
                  <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[25%]">
                    <Button className="bg-gray_700_33 cursor-pointer font-medium leading-[normal] min-w-[192px] py-[13px] rounded-[12px] text-[16px] text-center text-gray_811 w-[auto]">
                      Expired
                    </Button>
                    <Button className="border-[1px] border-bluegray_400_48 border-solid flex h-[51px] items-center justify-center sm:ml-[0] ml-[39px] p-[8px] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_play_green_506.svg"
                        className="h-[25px]"
                        alt="play Four"
                      />
                    </Button>
                    <Button className="border-[1px] border-bluegray_400_48 border-solid flex h-[51px] items-center justify-center sm:ml-[0] ml-[30px] p-[16px] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_signal_bluegray_440.svg"
                        className=""
                        alt="signal Four"
                      />
                    </Button>
                    <div className="border-[1px] border-red_500_48 border-solid flex h-[51px] items-center justify-start sm:ml-[0] ml-[10px] p-[16px] rounded-[25px] w-[51px]">
                      <div className="bg-red_513 h-[18px] rounded-[2px] w-[18px]"></div>
                    </div>
                  </div>
                </div>
                <div className="h-[172px] sm:h-[264px] md:h-[397px] relative w-[100%]">
                  <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[14px] w-[93%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[39px] md:w-[100%] w-[23%]">
                      <Text
                        className="font-normal not-italic text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        #ADS001245
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[20px] mt-[6px] text-bluegray_913 text-left w-[auto]"
                        variant="body60"
                      >
                        50% OFF Floor Lamp Get it Now!
                      </Text>
                      <div className="flex flex-row gap-[31px] items-center justify-start md:ml-[0] ml-[3px] mt-[11px] md:w-[100%] w-[70%]">
                        <Img
                          src="images/img_checkmark_gray_607.svg"
                          className="h-[10px] w-[auto]"
                          alt="checkmark Four"
                        />
                        <Text
                          className="font-normal not-italic text-gray_607 text-left w-[auto]"
                          variant="body78"
                        >
                          Published on 5 March 2020
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[132px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        $63.04
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Today Spends
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[62px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        $652.86
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Total Spends
                      </Text>
                    </div>
                    <div className="h-[51px] md:ml-[0] ml-[77px] relative md:w-[100%] w-[21%]">
                      <div className="absolute border-[1px] border-gray_200 border-solid flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[14px] rounded-[12px] w-[auto]">
                        <Text
                          className="font-medium mr-[3px] text-gray_756 text-left w-[auto]"
                          variant="body78"
                        >
                          https://eclan.io/campaign0123...
                        </Text>
                      </div>
                      <Img
                        src="images/img_file_bluegray_440.svg"
                        className="absolute h-[22px] inset-y-[0] left-[0] my-[auto] w-[22px]"
                        alt="file Four"
                      />
                    </div>
                  </div>
                  <div className="absolute h-[81px] inset-y-[0] left-[0] my-[auto] outline outline-[1px] outline-indigo_61 rounded-[40px] w-[81px]">
                    <div className="h-[81px] m-[auto] outline outline-[3px] outline-green_506 rounded-[40px] w-[81px]"></div>
                    <Text
                      className="absolute font-bold h-[max-content] inset-y-[0] my-[auto] right-[25%] text-green_506 text-left w-[auto]"
                      variant="body69"
                    >
                      44%
                    </Text>
                  </div>
                  <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[25%]">
                    <Button className="bg-green_500_19 cursor-pointer font-medium leading-[normal] min-w-[192px] py-[13px] rounded-[12px] text-[16px] text-center text-green_506 w-[auto]">
                      On Going
                    </Button>
                    <Button className="border-[1px] border-bluegray_400_48 border-solid flex h-[51px] items-center justify-center sm:ml-[0] ml-[39px] p-[8px] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_play_green_506.svg"
                        className="h-[25px]"
                        alt="play Five"
                      />
                    </Button>
                    <Button className="border-[1px] border-bluegray_400_48 border-solid flex h-[51px] items-center justify-center sm:ml-[0] ml-[30px] p-[16px] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_signal_bluegray_440.svg"
                        className=""
                        alt="signal Five"
                      />
                    </Button>
                    <div className="border-[1px] border-red_500_48 border-solid flex h-[51px] items-center justify-start sm:ml-[0] ml-[10px] p-[16px] rounded-[25px] w-[51px]">
                      <div className="bg-red_513 h-[18px] rounded-[2px] w-[18px]"></div>
                    </div>
                  </div>
                </div>
                <div className="h-[172px] sm:h-[264px] md:h-[394px] relative w-[100%]">
                  <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[14px] w-[93%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[40px] md:w-[100%] w-[25%]">
                      <Text
                        className="font-normal not-italic text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        #ADS001245
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[20px] mt-[4px] text-bluegray_913 text-left w-[auto]"
                        variant="body60"
                      >
                        $632 Target Gift Card on New Year
                      </Text>
                      <div className="flex flex-row gap-[31px] items-start justify-start md:ml-[0] ml-[3px] mt-[14px] md:w-[100%] w-[64%]">
                        <Img
                          src="images/img_checkmark_gray_607.svg"
                          className="h-[10px] mt-[5px] w-[auto]"
                          alt="checkmark Five"
                        />
                        <Text
                          className="font-normal not-italic text-gray_607 text-left w-[auto]"
                          variant="body78"
                        >
                          Published on 5 March 2020
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[98px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        $63.04
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Today Spends
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[62px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body60"
                      >
                        $652.86
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        Total Spends
                      </Text>
                    </div>
                    <div className="h-[51px] md:ml-[0] ml-[77px] relative md:w-[100%] w-[21%]">
                      <div className="absolute border-[1px] border-gray_200 border-solid flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[12px] rounded-[12px] w-[auto]">
                        <Text
                          className="font-medium mb-[5px] mr-[5px] text-gray_756 text-left w-[auto]"
                          variant="body78"
                        >
                          https://eclan.io/campaign0123...
                        </Text>
                      </div>
                      <Img
                        src="images/img_file_bluegray_440.svg"
                        className="absolute h-[22px] inset-y-[0] left-[0] my-[auto] w-[22px]"
                        alt="file Five"
                      />
                    </div>
                  </div>
                  <div className="absolute h-[81px] inset-y-[0] left-[0] my-[auto] outline outline-[1px] outline-indigo_61 rounded-[40px] w-[81px]">
                    <div className="h-[81px] m-[auto] outline outline-[3px] outline-green_506 rounded-[40px] w-[81px]"></div>
                    <Text
                      className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-green_506 text-left w-[max-content]"
                      variant="body69"
                    >
                      87%
                    </Text>
                  </div>
                  <div className="absolute flex sm:flex-col flex-row sm:gap-[20px] h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[25%]">
                    <Button className="bg-green_500_19 cursor-pointer font-medium leading-[normal] min-w-[192px] py-[13px] rounded-[12px] text-[16px] text-center text-green_506 w-[auto]">
                      On Going
                    </Button>
                    <Button className="border-[1px] border-bluegray_400_48 border-solid flex h-[51px] items-center justify-center sm:ml-[0] ml-[39px] p-[8px] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_play_green_506.svg"
                        className="h-[25px]"
                        alt="play Six"
                      />
                    </Button>
                    <Button className="border-[1px] border-bluegray_400_48 border-solid flex h-[51px] items-center justify-center sm:ml-[0] ml-[30px] p-[16px] rounded-[25px] w-[51px]">
                      <Img
                        src="images/img_signal_bluegray_440.svg"
                        className=""
                        alt="signal Six"
                      />
                    </Button>
                    <div className="border-[1px] border-red_500_48 border-solid flex h-[51px] items-center justify-start sm:ml-[0] ml-[10px] p-[16px] rounded-[25px] w-[51px]">
                      <div className="bg-red_513 h-[18px] rounded-[2px] w-[18px]"></div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="font-medium text-bluegray_836 text-left w-[auto]"
                  variant="body69"
                >
                  Showing 10 from 160 data
                </Text>
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[34%]">
                  <div className="bg-gray_700_26 flex flex-row gap-[30px] items-center justify-end p-[5px] rounded-[12px] sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_rewind_gray_659.svg"
                      className="h-[24px] w-[24px]"
                      alt="rewind"
                    />
                    <Text
                      className="font-medium my-[8px] text-gray_659 text-left w-[auto]"
                      variant="body64"
                    >
                      Previous
                    </Text>
                  </div>
                  <div className="h-[53px] relative sm:w-[100%] w-[42%]">
                    <div className="absolute bg-green_500_26 flex flex-row gap-[39px] h-[100%] inset-y-[0] items-center justify-end my-[auto] p-[13px] right-[0] rounded-[12px] w-[92%]">
                      <Text
                        className="font-medium text-green_506 text-left w-[auto]"
                        variant="body64"
                      >
                        2
                      </Text>
                      <Text
                        className="font-medium text-green_506 text-left w-[auto]"
                        variant="body64"
                      >
                        3
                      </Text>
                      <Text
                        className="font-medium mr-[14px] text-green_506 text-left w-[auto]"
                        variant="body64"
                      >
                        4
                      </Text>
                    </div>
                    <div className="absolute bg-green_506 flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[13px] rounded-[12px] w-[26%]">
                      <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body64"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="border-[1px] border-green_506 border-solid flex items-center justify-center pl-[21px] pr-[20px] py-[13px] rounded-[12px] sm:pl-[20px] text-center"
                    rightIcon={
                      <Img
                        src="images/img_arrowright_green_506.svg"
                        className="ml-[10px] text-center"
                        alt="arrow_right"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[18px] text-green_506 text-left">
                      Next
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex inset-x-[0] mx-[auto] top-[0] w-[100%]">
            <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-end m-[auto] p-[31px] sm:px-[20px] w-[97%]">
              <div className="h-[56px] relative md:w-[100%] w-[28%]">
                <div className="absolute border-[1px] border-gray_338 border-solid flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[15px] rounded-[12px] w-[auto]">
                  <Text
                    className="font-normal md:ml-[0] ml-[50px] not-italic text-gray_511 text-left w-[auto]"
                    variant="body69"
                  >
                    Search here
                  </Text>
                </div>
                <Img
                  src="images/img_search_bluegray_835.svg"
                  className="absolute h-[24px] inset-y-[0] left-[0] my-[auto] w-[24px]"
                  alt="search"
                />
              </div>
              <Button className="bg-green_506 cursor-pointer font-semibold leading-[normal] min-w-[214px] md:ml-[0] ml-[300px] py-[16px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                + New Campaign
              </Button>
              <List
                className="sm:flex-col flex-row gap-[15px] grid grid-cols-3 mb-[2px] md:ml-[0] ml-[59px] md:w-[100%] w-[12%]"
                orientation="horizontal"
              >
                <div className="h-[56px] relative w-[100%]">
                  <Button className="absolute bg-white_A700 flex h-[56px] inset-[0] items-center justify-center m-[auto] p-[14px] rounded-[12px] w-[56px]">
                    <Img
                      src="images/img_notification_gray_1015.svg"
                      className="h-[28px]"
                      alt="notification"
                    />
                  </Button>
                  <div className="absolute h-[21px] right-[0] top-[4%] w-[51%]">
                    <div className="absolute bg-green_506 h-[21px] inset-[0] justify-center m-[auto] outline outline-[3px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                    <Text
                      className="absolute font-semibold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                      variant="body78"
                    >
                      12
                    </Text>
                  </div>
                </div>
                <div className="h-[56px] relative w-[100%]">
                  <Button className="absolute bg-white_A700 flex h-[56px] inset-[0] items-center justify-center m-[auto] p-[14px] rounded-[12px] w-[56px]">
                    <Img
                      src="images/img_file_gray_1016.svg"
                      className="h-[28px]"
                      alt="file Six"
                    />
                  </Button>
                  <div className="absolute h-[21px] right-[0] top-[4%] w-[51%]">
                    <div className="absolute bg-green_506 h-[21px] inset-[0] justify-center m-[auto] outline outline-[3px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                    <Text
                      className="absolute font-semibold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                      variant="body78"
                    >
                      4
                    </Text>
                  </div>
                </div>
                <div className="h-[56px] relative w-[100%]">
                  <Button className="absolute bg-white_A700 flex h-[56px] inset-[0] items-center justify-center m-[auto] p-[14px] rounded-[12px] w-[56px]">
                    <Img
                      src="images/img_television_gray_1017.svg"
                      className="h-[28px]"
                      alt="television"
                    />
                  </Button>
                  <div className="absolute h-[21px] right-[0] top-[4%] w-[51%]">
                    <div className="absolute bg-green_506 h-[21px] inset-[0] justify-center m-[auto] outline outline-[3px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                    <Text
                      className="absolute font-semibold h-[100%] inset-y-[0] my-[auto] right-[17%] text-center text-white_A700 w-[auto]"
                      variant="body78"
                    >
                      76
                    </Text>
                  </div>
                </div>
              </List>
              <div className="h-[56px] md:ml-[0] ml-[50px] mr-[38px] relative md:w-[100%] w-[14%]">
                <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[15px] rounded-[12px] w-[auto]">
                  <Text
                    className="font-semibold md:ml-[0] ml-[5px] text-bluegray_913 text-left w-[auto]"
                    variant="body69"
                  >
                    Samuel Anderson
                  </Text>
                </div>
                <div className="absolute bg-gray_400 h-[56px] inset-y-[0] my-[auto] right-[0] rounded-[12px] w-[56px]"></div>
              </div>
            </div>
            <Button
              className="border-[1px] border-gray_130 border-solid flex items-center justify-center ml-[undefinedpx] pl-[16px] pr-[17px] py-[14px] rounded-[12px] text-center z-[1]"
              rightIcon={
                <Img
                  src="images/img_arrowdown_bluegray_455.svg"
                  className="ml-[undefinedpx] text-center left-[0] z-[1]"
                  alt="arrow_down"
                />
              }
            >
              <div className="bg-transparent cursor-pointer font-semibold leading-[normal] ml-[-29px] my-[auto] text-[18px] text-bluegray_913 text-left z-[1]">
                EN
              </div>
            </Button>
          </div>
        </div>
        <aside className="absolute bottom-[0] flex flex-col md:hidden justify-start left-[1%] md:px-[20px] w-[13%]">
          <div className="flex flex-row gap-[11px] items-start justify-between w-[100%]">
            <div className="bg-white_A700 flex flex-col items-center justify-start mb-[208px] pb-[568px] w-[90%]">
              <div className="bg-white_A700 flex items-center justify-end p-[8px] w-[100%]">
                <div className="flex flex-col items-center justify-start mt-[23px] md:w-[100%] w-[40%]">
                  <Img
                    src="images/img_trash_green_506.svg"
                    className="h-[32px] w-[auto]"
                    alt="trash"
                  />
                  <Text
                    className="font-bold text-gray_1018 text-left w-[auto]"
                    variant="body35"
                  >
                    Eclan
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_menus_white_a700.svg"
                className="h-[597px] mt-[45px] w-[auto]"
                alt="menus"
              />
              <div className="flex flex-col items-start justify-start mt-[143px] md:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_565 text-left w-[auto]"
                  variant="body78"
                >
                  Eclan Dashboard
                </Text>
                <Text
                  className="font-normal not-italic text-gray_565 text-left w-[auto]"
                  variant="body78"
                >
                  ©All Rights Reserved
                </Text>
                <Text
                  className="font-normal mt-[22px] not-italic text-gray_565 text-left w-[auto]"
                  variant="body78"
                >
                  by Peterdraw
                </Text>
              </div>
            </div>
            <div className="h-[1769px] relative w-[6%]">
              <Img
                src="images/img_arrowleft_green_506.svg"
                className="absolute h-[16px] inset-x-[0] mx-[auto] top-[19%] w-[16px]"
                alt="arrowleft"
              />
              <Line className="absolute bg-bluegray_121 h-[1769px] inset-y-[0] my-[auto] right-[44%] w-[1px]" />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default AdsCampaignListPage;
