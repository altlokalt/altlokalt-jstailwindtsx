import React from "react";

import { Text, Button, Img, List, SelectBox, Line } from "components";

const SocialNetworkCampaignListPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 font-poppins h-[1441px] mx-[auto] px-[10px] relative w-[100%]">
        <div className="absolute bottom-[0] h-[1688px] inset-x-[0] max-w-[1980px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="absolute bg-gray_57 h-[1688px] inset-[0] justify-center m-[auto] w-[97%]"></div>
          <div className="absolute bottom-[3%] flex flex-col items-center justify-start right-[0] w-[90%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[24%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Text
                      className="font-semibold text-black_908 text-left w-[auto]"
                      variant="body39"
                    >
                      Social Network Campaign
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[52px] items-start justify-start mt-[3px] md:w-[100%] w-[98%]">
                      <Text
                        className="font-semibold text-green_506 text-left w-[auto]"
                        variant="body64"
                      >
                        Campaign /{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_667 text-left w-[auto]"
                        variant="body64"
                      >
                        Social Network Campaign
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[1071px] md:w-[100%] w-[auto]">
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
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[63px] w-[100%]">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[52px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[34%]"
                orientation="horizontal"
              >
                <div className="h-[87px] sm:ml-[0] relative w-[100%]">
                  <div className="absolute bg-green_500_0a border-[1px] border-green_506 border-solid flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[16px] rounded-[12px] w-[98%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start mr-[27px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body64"
                      >
                        Show All
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        67,124 Campaign
                      </Text>
                    </div>
                  </div>
                  <Button className="absolute bg-green_506 flex h-[63px] inset-y-[0] items-center justify-center left-[0] my-[auto] p-[19px] rounded-[12px] w-[63px]">
                    <Img
                      src="images/img_volume_white_a700_63x63.svg"
                      className=""
                      alt="volume"
                    />
                  </Button>
                </div>
                <div className="h-[87px] sm:ml-[0] relative w-[100%]">
                  <div className="absolute bg-pink_500_0a flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[16px] rounded-[12px] w-[98%]">
                    <div className="flex flex-col items-start justify-start mr-[42px] mt-[2px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_902 text-left w-[auto]"
                        variant="body64"
                      >
                        Instagram
                      </Text>
                      <Text
                        className="font-normal mt-[2px] not-italic text-black_900_99 text-left w-[auto]"
                        variant="body78"
                      >
                        457 Campaign
                      </Text>
                    </div>
                  </div>
                  <Button className="absolute bg-pink_501 flex h-[63px] inset-y-[0] items-center justify-center left-[0] my-[auto] p-[19px] rounded-[12px] w-[63px]">
                    <Img
                      src="images/img_camera_white_a700_63x63.svg"
                      className="h-[24px]"
                      alt="camera"
                    />
                  </Button>
                </div>
              </List>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[60px] md:w-[100%] w-[33%]"
                orientation="horizontal"
              >
                <div className="bg-indigo_400_0a flex flex-row gap-[40px] items-center justify-start pr-[12px] py-[12px] rounded-[12px] w-[100%]">
                  <Button className="bg-indigo_409 flex h-[63px] items-center justify-center p-[19px] rounded-[12px] w-[63px]">
                    <Img
                      src="images/img_facebook_white_a700_63x63.svg"
                      className=""
                      alt="facebook"
                    />
                  </Button>
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-black_902 text-left w-[auto]"
                      variant="body64"
                    >
                      Facebook
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                      variant="body78"
                    >
                      125 Campaign
                    </Text>
                  </div>
                </div>
                <div className="bg-cyan_300_0a flex flex-row gap-[30px] items-center justify-start p-[10px] rounded-[12px] w-[100%]">
                  <Button className="bg-cyan_305 flex h-[63px] items-center justify-center my-[2px] p-[19px] rounded-[12px] w-[63px]">
                    <Img
                      src="images/img_twitter_white_a700_63x63.svg"
                      className=""
                      alt="twitter"
                    />
                  </Button>
                  <div className="flex flex-col gap-[5px] justify-start w-[auto]">
                    <Text
                      className="font-medium text-black_902 text-left w-[auto]"
                      variant="body64"
                    >
                      Twitter
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[10px] not-italic text-black_900_99 text-left w-[auto]"
                      variant="body78"
                    >
                      5125 Campaign
                    </Text>
                  </div>
                </div>
              </List>
              <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:ml-[0] ml-[305px] md:mt-[0] my-[15px] p-[16px] rounded-[12px] shadow-bs124 md:w-[100%] w-[4%]">
                <Img
                  src="images/img_settings_bluegray_913.svg"
                  className="h-[24px] w-[24px]"
                  alt="settings"
                />
              </div>
              <SelectBox
                className="bg-white_A700 md:flex-1 font-medium leading-[normal] md:ml-[0] ml-[38px] md:mt-[0] my-[15px] sm:pl-[20px] pl-[26px] py-[14px] rounded-[12px] shadow-bs124 text-[18px] text-bluegray_913 text-right md:w-[100%] w-[9%]"
                placeholderClassName="text-bluegray_913"
                name="sort"
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
              className="flex-col gap-[12px] grid items-center mt-[30px] w-[98%]"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between w-[100%]">
                <div className="h-[176px] md:h-[477px] relative md:w-[100%] w-[96%]">
                  <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[16px] rounded-[14px] w-[97%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[9%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_volume_light_green_404.svg"
                          className="h-[28px] w-[28px]"
                          alt="volume One"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
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
                            Conversion
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[118px] md:mt-[0] my-[42px] md:w-[100%] w-[11%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Img
                          src="images/img_eye_teal_413.svg"
                          className="h-[28px] w-[28px]"
                          alt="eye"
                        />
                        <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            5,412k
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Engagement
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[118px] md:w-[100%] w-[8%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_like1.svg"
                          className="h-[28px] w-[28px]"
                          alt="likeOne"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            4,625k
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Likes
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[118px] w-[10%] md:w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_lock_yellow_910.svg"
                          className="h-[28px] w-[28px]"
                          alt="lock"
                        />
                        <div className="flex flex-col justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            2,512
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[20px] mt-[4px] not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Comments
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[100px] h-[57px] md:ml-[0] ml-[89px] md:mt-[0] my-[43px] outline outline-[1px] outline-indigo_61 relative rounded-[28px] w-[57px]">
                      <div className="h-[57px] m-[auto] outline outline-[3px] outline-green_506 rounded-[28px] w-[57px]"></div>
                      <Text
                        className="absolute font-bold h-[max-content] inset-y-[0] my-[auto] right-[21%] text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        71%
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[19px] justify-start left-[0] top-[19%] w-[21%]">
                    <div className="flex flex-col gap-[6px] items-start justify-start md:ml-[0] ml-[20px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        #ADS001245
                      </Text>
                      <Text
                        className="font-medium text-bluegray_913 text-left w-[auto]"
                        variant="body60"
                      >
                        50% OFF Floor Lamp Get it Now!
                      </Text>
                    </div>
                    <Img
                      src="images/img_social_pink_500_17x121.svg"
                      className="h-[17px] w-[auto]"
                      alt="social"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_overflowmenu_bluegray_913.svg"
                  className="h-[24px] w-[24px]"
                  alt="overflowmenu"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between w-[100%]">
                <div className="h-[176px] md:h-[477px] relative md:w-[100%] w-[96%]">
                  <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[16px] rounded-[14px] w-[97%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[9%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_volume_light_green_404.svg"
                          className="h-[28px] w-[28px]"
                          alt="volume Two"
                        />
                        <div className="flex flex-col gap-[5px] items-center justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            $245.55
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Conversion
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[117px] md:mt-[0] my-[42px] md:w-[100%] w-[11%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Img
                          src="images/img_eye_teal_413.svg"
                          className="h-[28px] w-[28px]"
                          alt="eye One"
                        />
                        <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            2,412k
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Engagement
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[118px] md:w-[100%] w-[7%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_like1.svg"
                          className="h-[28px] w-[28px]"
                          alt="likeOne One"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            1,254
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Likes
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[135px] w-[10%] md:w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_lock_yellow_910.svg"
                          className="h-[28px] w-[28px]"
                          alt="lock One"
                        />
                        <div className="flex flex-col justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            6,125
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[20px] mt-[4px] not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Comments
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[100px] h-[57px] md:ml-[0] ml-[89px] md:mt-[0] my-[43px] outline outline-[1px] outline-indigo_61 relative rounded-[28px] w-[57px]">
                      <div className="h-[57px] m-[auto] outline outline-[3px] outline-green_506 rounded-[28px] w-[57px]"></div>
                      <Text
                        className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-green_506 text-left w-[max-content]"
                        variant="body69"
                      >
                        57%
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[21px] justify-start left-[0] top-[19%] w-[21%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[20px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        #ADS001245
                      </Text>
                      <Text
                        className="font-medium mt-[4px] text-bluegray_913 text-left w-[auto]"
                        variant="body60"
                      >
                        Game Online Vouchers 20% OFF
                      </Text>
                    </div>
                    <Img
                      src="images/img_social_pink_500_17x121.svg"
                      className="h-[17px] w-[auto]"
                      alt="social One"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_overflowmenu_bluegray_913.svg"
                  className="h-[24px] w-[24px]"
                  alt="overflowmenu One"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between w-[100%]">
                <div className="h-[176px] md:h-[435px] relative md:w-[100%] w-[96%]">
                  <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[16px] rounded-[14px] w-[97%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[9%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_volume_light_green_404.svg"
                          className="h-[28px] w-[28px]"
                          alt="volume Three"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            $6.156
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Conversion
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[118px] md:mt-[0] my-[42px] md:w-[100%] w-[11%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Img
                          src="images/img_eye_teal_413.svg"
                          className="h-[28px] w-[28px]"
                          alt="eye Two"
                        />
                        <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            123.412
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Engagement
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[118px] md:w-[100%] w-[7%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_like1.svg"
                          className="h-[28px] w-[28px]"
                          alt="likeOne Two"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            2,412k
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Likes
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[125px] w-[10%] md:w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_lock_yellow_910.svg"
                          className="h-[28px] w-[28px]"
                          alt="lock Two"
                        />
                        <div className="flex flex-col justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            6,04
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[20px] mt-[4px] not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Comments
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="h-[57px] md:ml-[0] ml-[89px] outline outline-[1px] outline-indigo_61 relative rounded-[28px] w-[57px]">
                      <div className="h-[57px] m-[auto] outline outline-[3px] outline-green_506 rounded-[28px] w-[57px]"></div>
                      <Text
                        className="absolute font-bold h-[max-content] inset-y-[0] my-[auto] right-[18%] text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        16%
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[21px] justify-start left-[0] top-[19%] w-[15%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[20px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        #ADS001245
                      </Text>
                      <Text
                        className="font-medium mt-[4px] text-bluegray_913 text-left w-[auto]"
                        variant="body60"
                      >
                        15% OFF Granite Stone
                      </Text>
                    </div>
                    <Img
                      src="images/img_social_pink_500_17x121.svg"
                      className="h-[17px] w-[auto]"
                      alt="social Two"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_overflowmenu_bluegray_913.svg"
                  className="h-[24px] w-[24px]"
                  alt="overflowmenu Two"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between w-[100%]">
                <div className="h-[176px] md:h-[477px] relative md:w-[100%] w-[96%]">
                  <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[16px] rounded-[14px] shadow-bs126 w-[97%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[9%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_volume_light_green_404.svg"
                          className="h-[28px] w-[28px]"
                          alt="volume Four"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
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
                            Conversion
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[118px] md:mt-[0] my-[42px] md:w-[100%] w-[11%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Img
                          src="images/img_eye_teal_413.svg"
                          className="h-[28px] w-[28px]"
                          alt="eye Three"
                        />
                        <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            5,412k
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Engagement
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[118px] md:w-[100%] w-[8%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_like1.svg"
                          className="h-[28px] w-[28px]"
                          alt="likeOne Three"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            4,625k
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Likes
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[118px] w-[10%] md:w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_lock_yellow_910.svg"
                          className="h-[28px] w-[28px]"
                          alt="lock Three"
                        />
                        <div className="flex flex-col justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            2,512
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[20px] mt-[4px] not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Comments
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[100px] h-[57px] md:ml-[0] ml-[89px] md:mt-[0] my-[43px] outline outline-[1px] outline-indigo_61 relative rounded-[28px] w-[57px]">
                      <div className="h-[57px] m-[auto] outline outline-[3px] outline-green_506 rounded-[28px] w-[57px]"></div>
                      <Text
                        className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-green_506 text-left w-[max-content]"
                        variant="body69"
                      >
                        87%
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[19px] justify-start left-[0] top-[19%] w-[23%]">
                    <div className="flex flex-col gap-[6px] items-start justify-start md:ml-[0] ml-[20px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        #ADS001245
                      </Text>
                      <Text
                        className="font-medium text-bluegray_913 text-left w-[auto]"
                        variant="body60"
                      >
                        $632 Target Gift Card on New Year
                      </Text>
                    </div>
                    <Img
                      src="images/img_social_pink_500_17x121.svg"
                      className="h-[17px] w-[auto]"
                      alt="social Three"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_overflowmenu_bluegray_913.svg"
                  className="h-[24px] w-[24px]"
                  alt="overflowmenu Three"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between w-[100%]">
                <div className="h-[176px] md:h-[477px] relative md:w-[100%] w-[96%]">
                  <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[16px] rounded-[14px] w-[97%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[9%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_volume_light_green_404.svg"
                          className="h-[28px] w-[28px]"
                          alt="volume Five"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
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
                            Conversion
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[118px] md:mt-[0] my-[42px] md:w-[100%] w-[11%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Img
                          src="images/img_eye_teal_413.svg"
                          className="h-[28px] w-[28px]"
                          alt="eye Four"
                        />
                        <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            5,412k
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Engagement
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[118px] md:w-[100%] w-[8%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_like1.svg"
                          className="h-[28px] w-[28px]"
                          alt="likeOne Four"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            4,625k
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Likes
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[118px] w-[10%] md:w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_lock_yellow_910.svg"
                          className="h-[28px] w-[28px]"
                          alt="lock Four"
                        />
                        <div className="flex flex-col justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            2,512
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[20px] mt-[4px] not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Comments
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[100px] h-[57px] md:ml-[0] ml-[89px] md:mt-[0] my-[43px] outline outline-[1px] outline-indigo_61 relative rounded-[28px] w-[57px]">
                      <div className="h-[57px] m-[auto] outline outline-[3px] outline-green_506 rounded-[28px] w-[57px]"></div>
                      <Text
                        className="absolute font-bold h-[max-content] inset-y-[0] my-[auto] right-[21%] text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        71%
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[19px] justify-start left-[0] top-[19%] w-[21%]">
                    <div className="flex flex-col gap-[6px] items-start justify-start md:ml-[0] ml-[20px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        #ADS001245
                      </Text>
                      <Text
                        className="font-medium text-bluegray_913 text-left w-[auto]"
                        variant="body60"
                      >
                        50% OFF Floor Lamp Get it Now!
                      </Text>
                    </div>
                    <Img
                      src="images/img_social_pink_500_17x121.svg"
                      className="h-[17px] w-[auto]"
                      alt="social Four"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_overflowmenu_bluegray_913.svg"
                  className="h-[24px] w-[24px]"
                  alt="overflowmenu Four"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between w-[100%]">
                <div className="h-[176px] md:h-[593px] relative md:w-[100%] w-[96%]">
                  <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[16px] rounded-[14px] w-[97%]">
                    <div className="flex items-center justify-start mb-[44px] md:mt-[0] mt-[37px] md:w-[100%] w-[9%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_volume_light_green_404.svg"
                          className="h-[28px] w-[28px]"
                          alt="volume Six"
                        />
                        <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
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
                            Conversion
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start mb-[44px] md:ml-[0] ml-[118px] md:mt-[0] mt-[37px] md:w-[100%] w-[11%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Img
                          src="images/img_eye_teal_413.svg"
                          className="h-[28px] w-[28px]"
                          alt="eye Five"
                        />
                        <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            5,412k
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Engagement
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start mb-[44px] md:ml-[0] ml-[118px] md:mt-[0] mt-[37px] md:w-[100%] w-[8%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_like1.svg"
                          className="h-[28px] w-[28px]"
                          alt="likeOne Five"
                        />
                        <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            4,625k
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Likes
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start mb-[44px] md:ml-[0] ml-[118px] md:mt-[0] mt-[37px] w-[10%] md:w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_lock_yellow_910.svg"
                          className="h-[28px] w-[28px]"
                          alt="lock Five"
                        />
                        <div className="flex flex-col gap-[11px] justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body60"
                          >
                            2,512
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[20px] not-italic text-black_900_99 text-left w-[auto]"
                            variant="body78"
                          >
                            Comments
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="h-[57px] md:ml-[0] ml-[89px] outline outline-[1px] outline-indigo_61 relative rounded-[28px] w-[57px]">
                      <div className="h-[57px] m-[auto] outline outline-[3px] outline-green_506 rounded-[28px] w-[57px]"></div>
                      <Text
                        className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-green_506 text-left w-[max-content]"
                        variant="body69"
                      >
                        30%
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[28px] justify-start left-[0] top-[19%] w-[21%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[20px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-green_506 text-left w-[auto]"
                        variant="body69"
                      >
                        #ADS001245
                      </Text>
                      <Text
                        className="font-medium text-bluegray_913 text-left w-[auto]"
                        variant="body60"
                      >
                        Game Online Vouchers 20% OFF
                      </Text>
                    </div>
                    <Img
                      src="images/img_social_pink_500_17x121.svg"
                      className="h-[17px] w-[auto]"
                      alt="social Five"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_overflowmenu_bluegray_913.svg"
                  className="h-[24px] w-[24px]"
                  alt="overflowmenu Five"
                />
              </div>
            </List>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[30px] w-[100%]">
              <Text
                className="font-medium text-bluegray_836 text-left w-[auto]"
                variant="body69"
              >
                Showing 10 from 160 data
              </Text>
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[34%]">
                <div className="border-[1px] border-green_506 border-solid flex flex-row gap-[30px] items-center justify-end p-[5px] rounded-[12px] sm:w-[100%] w-[auto]">
                  <Img
                    src="images/img_icchevron.svg"
                    className="h-[24px] w-[24px]"
                    alt="icchevron"
                  />
                  <Text
                    className="font-medium my-[8px] text-green_506 text-left w-[auto]"
                    variant="body64"
                  >
                    Previous
                  </Text>
                </div>
                <div className="bg-green_500_26 flex flex-row items-center justify-start px-[8px] rounded-[12px] sm:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-medium text-green_506 text-left w-[auto]"
                      variant="body64"
                    >
                      1
                    </Text>
                  </div>
                  <Text
                    className="font-medium ml-[51px] text-green_506 text-left w-[auto]"
                    variant="body64"
                  >
                    2
                  </Text>
                  <Button className="bg-green_506 cursor-pointer font-medium leading-[normal] min-w-[62px] ml-[28px] py-[13px] rounded-[12px] text-[18px] text-center text-white_A701 w-[auto]">
                    3
                  </Button>
                  <Text
                    className="font-medium ml-[19px] text-green_506 text-left w-[auto]"
                    variant="body64"
                  >
                    4
                  </Text>
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
                      alt="file"
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
            <div className="bg-white_A700 flex flex-col items-center justify-start mb-[81px] pb-[695px] w-[90%]">
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

export default SocialNetworkCampaignListPage;
