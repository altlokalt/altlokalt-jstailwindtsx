import React from "react";

import { Line, Img, Text, List, Button } from "components";

const AuksjonPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_979 font-quicksand h-[1962px] mx-[auto] p-[9px] relative w-[100%]">
        <div className="absolute h-[1024px] left-[0] md:px-[20px] top-[2%] w-[7%]">
          <Line className="bg-gray_980 h-[5px] mt-[100px] mx-[auto] w-[100%]" />
          <Img
            src="images/img_sidebar.svg"
            className="absolute h-[1024px] inset-[0] justify-center m-[auto] w-[auto]"
            alt="Sidebar"
          />
        </div>
        <div className="absolute h-[1409px] md:h-[830px] left-[8%] md:px-[20px] top-[10%] md:w-[100%] w-[73%]">
          <div className="flex flex-col gap-[23px] h-[100%] items-center justify-start ml-[24px] my-[auto] w-[69%]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <Text
                className="font-medium text-left text-white_A700 w-[auto]"
                variant="body48"
              >
                Hot Live Auction
              </Text>
              <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                <Text
                  className="font-medium text-left text-white_A700 w-[auto]"
                  variant="body87"
                >
                  Show More
                </Text>
                <Img
                  src="images/img_arrowright_gray_311.svg"
                  className="h-[18px] w-[18px]"
                  alt="arrowright"
                />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[16px] grid md:grid-cols-1 grid-cols-2 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div
                  className="bg-cover bg-gray_300 bg-no-repeat h-[200px] md:h-[434px] relative w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_maskgroup_248x493.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle21.png"
                    className="h-[200px] m-[auto] object-cover rounded-[12px] w-[100%]"
                    alt="RectangleTwentyOne"
                  />
                  <div className="absolute bg-bluegray_500 flex inset-x-[0] items-start justify-end mx-[auto] p-[19px] rounded-[12px] top-[0] w-[100%]">
                    <div className="bg-black_900_51 border-[1px] border-solid border-white_A700 flex items-center justify-end mb-[64px] mt-[243px] p-[20px] rounded-[8px] md:w-[100%] w-[76%]">
                      <div className="flex flex-col gap-[6px] items-start justify-start mt-[4px] md:w-[100%] w-[92%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            18h : 17m : 29s
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            17.53 ETH
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[71px] items-center justify-start md:w-[100%] w-[95%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body87"
                          >
                            Time Reamining
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body87"
                          >
                            Highest Bid
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div
                  className="bg-cover bg-gray_300 bg-no-repeat h-[200px] md:h-[434px] relative w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_maskgroup_248x493.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle21.png"
                    className="h-[200px] m-[auto] object-cover rounded-[12px] w-[100%]"
                    alt="RectangleTwentyOne One"
                  />
                  <div className="absolute bg-bluegray_500 flex inset-x-[0] items-start justify-end mx-[auto] p-[19px] rounded-[12px] top-[0] w-[100%]">
                    <div className="bg-black_900_51 border-[1px] border-solid border-white_A700 flex items-center justify-end mb-[76px] mt-[231px] p-[20px] rounded-[8px] md:w-[100%] w-[76%]">
                      <div className="flex flex-col gap-[6px] items-start justify-start mt-[4px] md:w-[100%] w-[92%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            18h : 17m : 29s
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body64"
                          >
                            17.53 ETH
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[71px] items-center justify-start md:w-[100%] w-[95%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body87"
                          >
                            Time Reamining
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body87"
                          >
                            Highest Bid
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="absolute h-[1409px] md:h-[830px] inset-[0] justify-center m-[auto] w-[100%]">
            <div className="absolute h-[371px] left-[2%] top-[13%] md:w-[100%] w-[76%]">
              <div className="absolute bg-gray_914 flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] pb-[24px] rounded-[12px] w-[24%]">
                <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                  <div className="md:h-[156px] h-[173px] relative w-[100%]">
                    <Img
                      src="images/img_maskgroup.svg"
                      className="absolute h-[156px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                      alt="Maskgroup"
                    />
                    <Img
                      src="images/img_search_bluegray_701.svg"
                      className="absolute bottom-[0] h-[42px] left-[5%] w-[auto]"
                      alt="search"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[90%]">
                    <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_send.svg"
                          className="h-[24px] w-[24px]"
                          alt="send"
                        />
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body64"
                        >
                          1.40ETH
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body78"
                        >
                          320
                        </Text>
                        <Img
                          src="images/img_profile.svg"
                          className="h-[28px] w-[60px]"
                          alt="profile"
                        />
                      </div>
                    </div>
                    <Text
                      className="font-medium leading-[24.00px] mt-[14px] text-bluegray_104 text-left w-[100%]"
                      variant="body69"
                    >
                      Your Brain social media addiction
                    </Text>
                    <Button
                      className="border-[1px] border-blue_303 border-solid flex items-center justify-center mt-[20px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[10px] text-center"
                          alt="upload"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_303 text-left">
                        Place Your Bid
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray_914 flex h-[100%] inset-y-[0] items-center justify-start left-[25%] my-[auto] pb-[24px] rounded-[12px] w-[24%]">
                <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                  <div className="md:h-[156px] h-[173px] relative w-[100%]">
                    <Img
                      src="images/img_maskgroup.svg"
                      className="absolute h-[156px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                      alt="Maskgroup One"
                    />
                    <Img
                      src="images/img_search_bluegray_701.svg"
                      className="absolute bottom-[0] h-[42px] left-[5%] w-[auto]"
                      alt="search One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[90%]">
                    <div className="flex flex-row gap-[19px] items-center justify-between md:w-[100%] w-[98%]">
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_send.svg"
                          className="h-[24px] w-[24px]"
                          alt="send One"
                        />
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body64"
                        >
                          1.50ETH
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body78"
                        >
                          175
                        </Text>
                        <Img
                          src="images/img_profile.svg"
                          className="h-[28px] w-[60px]"
                          alt="profile One"
                        />
                      </div>
                    </div>
                    <Text
                      className="font-medium leading-[24.00px] mt-[14px] text-bluegray_104 text-left w-[100%]"
                      variant="body69"
                    >
                      Land damaged by me and nature
                    </Text>
                    <Button
                      className="border-[1px] border-blue_303 border-solid flex items-center justify-center mt-[20px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[10px] text-center"
                          alt="upload"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_303 text-left">
                        Place Your Bid
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray_914 flex h-[100%] inset-y-[0] items-center justify-start my-[auto] pb-[24px] right-[25%] rounded-[12px] w-[24%]">
                <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                  <div className="md:h-[156px] h-[173px] relative w-[100%]">
                    <Img
                      src="images/img_maskgroup.svg"
                      className="absolute h-[156px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                      alt="Maskgroup Two"
                    />
                    <Img
                      src="images/img_search_bluegray_701.svg"
                      className="absolute bottom-[0] h-[42px] left-[5%] w-[auto]"
                      alt="search Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[90%]">
                    <div className="flex flex-row gap-[20px] items-center justify-between md:w-[100%] w-[99%]">
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_send.svg"
                          className="h-[24px] w-[24px]"
                          alt="send Two"
                        />
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body64"
                        >
                          1.32ETH
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body78"
                        >
                          105
                        </Text>
                        <Img
                          src="images/img_profile.svg"
                          className="h-[28px] w-[60px]"
                          alt="profile Two"
                        />
                      </div>
                    </div>
                    <Text
                      className="font-medium leading-[24.00px] mt-[14px] text-bluegray_104 text-left w-[100%]"
                      variant="body69"
                    >
                      Aurora Wave Dark Purple Magma Tone
                    </Text>
                    <Button
                      className="border-[1px] border-blue_303 border-solid flex items-center justify-center mt-[20px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[10px] text-center"
                          alt="upload"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_303 text-left">
                        Place Your Bid
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-gray_914 flex h-[100%] items-center justify-start ml-[auto] my-[auto] pb-[24px] rounded-[12px] w-[24%]">
                <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                  <div className="md:h-[156px] h-[173px] relative w-[100%]">
                    <Img
                      src="images/img_maskgroup.svg"
                      className="absolute h-[156px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                      alt="Maskgroup Three"
                    />
                    <Img
                      src="images/img_search_bluegray_701.svg"
                      className="absolute bottom-[0] h-[42px] left-[5%] w-[auto]"
                      alt="search Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[90%]">
                    <div className="flex flex-row gap-[21px] items-center justify-between md:w-[100%] w-[98%]">
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_send.svg"
                          className="h-[24px] w-[24px]"
                          alt="send Three"
                        />
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body64"
                        >
                          1.86ETH
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body78"
                        >
                          157
                        </Text>
                        <Img
                          src="images/img_profile.svg"
                          className="h-[28px] w-[60px]"
                          alt="profile Three"
                        />
                      </div>
                    </div>
                    <Text
                      className="font-medium leading-[24.00px] mt-[14px] text-bluegray_104 text-left w-[100%]"
                      variant="body69"
                    >
                      Ancient coins from china&#39;s past
                    </Text>
                    <div className="border-[1px] border-blue_303 border-solid flex flex-row gap-[10px] items-center justify-center mt-[20px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] w-[208px]">
                      <Text
                        className="font-medium text-blue_303 text-left w-[auto]"
                        variant="body78"
                      >
                        Place Your Bid
                      </Text>
                      <Img
                        src="images/img_upload.svg"
                        className="h-[20px] w-[20px]"
                        alt="upload"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient10  flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[94px] sm:px-[20px] md:px-[40px] w-[100%]">
                <Button className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[42px] items-center justify-center mb-[75px] mt-[66px] rounded-[50%] w-[42px]">
                  <Img
                    src="images/img_arrowright_white_a700_13x7.svg"
                    className=""
                    alt="arrowright One"
                  />
                </Button>
              </div>
            </div>
            <div className="absolute flex flex-col gap-[17px] items-center justify-start right-[0] top-[0] w-[auto]">
              <div className="bg-gray_921 flex flex-col gap-[21px] h-[358px] items-start justify-center p-[24px] sm:px-[20px] rounded-[8px] w-[358px]">
                <Text
                  className="font-medium mt-[2px] text-left text-white_A700 w-[auto]"
                  variant="body48"
                >
                  Popular Creators
                </Text>
                <List
                  className="flex-col gap-[16px] grid items-center mb-[8px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row items-center justify-between w-[310px]">
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_305 text-left w-[auto]"
                          variant="body78"
                        >
                          Sing Forever
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                          variant="body87"
                        >
                          650 assets
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[310px]">
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_305 text-left w-[auto]"
                          variant="body78"
                        >
                          Entertaiment Hyperio
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                          variant="body87"
                        >
                          513 assets
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu One"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[310px]">
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_305 text-left w-[auto]"
                          variant="body78"
                        >
                          Extender The Best Choice
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                          variant="body87"
                        >
                          427 assets
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Two"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[310px]">
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_305 text-left w-[auto]"
                          variant="body78"
                        >
                          Forever In Midnight{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_203 text-left w-[auto]"
                          variant="body87"
                        >
                          391 assets
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Three"
                    />
                  </div>
                </List>
              </div>
              <div className="bg-gray_921 flex flex-col gap-[23px] items-start justify-end p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                <Text
                  className="font-medium text-left text-white_A700 w-[auto]"
                  variant="body48"
                >
                  Our Videos
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex h-[160px] items-center justify-start p-[64px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[98%]"
                  style={{ backgroundImage: "url('images/img_group59.svg')" }}
                >
                  <Button className="bg-white_A700_33 flex items-center justify-center outline outline-[1px] outline-white_A700 p-[10px] rounded-[15px] w-[31px]">
                    <Img src="images/img_ic.svg" className="" alt="ic" />
                  </Button>
                </div>
              </div>
              <div className="bg-gray_921 flex items-center justify-end p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body48"
                  >
                    Recent Viewed
                  </Text>
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <div className="flex flex-col gap-[16px] items-center justify-start w-[48%]">
                      <div className="bg-bluegray_500 h-[186px] rounded-[8px] w-[100%]"></div>
                      <div className="bg-bluegray_500 h-[130px] rounded-[8px] w-[100%]"></div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-center justify-start w-[48%]">
                      <div className="bg-bluegray_500 h-[100px] rounded-[8px] w-[100%]"></div>
                      <div className="bg-bluegray_500 h-[100px] rounded-[8px] w-[100%]"></div>
                      <div className="bg-bluegray_500 h-[100px] rounded-[8px] w-[100%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex items-center justify-start left-[2%] top-[0] w-[70%]">
              <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body35"
                  >
                    Welcome Back, Albert
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_200 text-left w-[auto]"
                    variant="body69"
                  >
                    A happy day with your favorite event
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 md:flex-col flex-row gap-[4px] items-center justify-center md:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                      <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_music_white_a700.svg"
                          className=""
                          alt="music"
                        />
                      </Button>
                      <Text
                        className="font-semibold text-cyan_A700 text-left w-[auto]"
                        variant="body69"
                      >
                        Music Concert
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                      <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_link.svg"
                          className="h-[21px]"
                          alt="link"
                        />
                      </Button>
                      <Text
                        className="font-medium text-gray_311 text-left w-[auto]"
                        variant="body69"
                      >
                        Clubbing Party
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                      <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_location_bluegray_704.svg"
                          className=""
                          alt="location"
                        />
                      </Button>
                      <Text
                        className="font-medium text-gray_311 text-left w-[auto]"
                        variant="body69"
                      >
                        Games Live
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                      <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_volume_bluegray_705.svg"
                          className="h-[20px]"
                          alt="volume"
                        />
                      </Button>
                      <Text
                        className="font-medium text-gray_311 text-left w-[auto]"
                        variant="body69"
                      >
                        Festival
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body87"
                    >
                      Show More
                    </Text>
                    <Img
                      src="images/img_arrowright_gray_311.svg"
                      className="h-[18px] w-[18px]"
                      alt="arrowright Two"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex font-rubik items-center justify-start left-[0] w-[71%]">
              <div className="flex flex-col gap-[28px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body41"
                >
                  Top Collectibles
                </Text>
                <List
                  className="sm:flex-col flex-row font-roboto gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-1 flex-col justify-end p-[22px] sm:px-[20px] rounded-[40px] w-[100%]">
                    <Button className="bg-gray_752 cursor-pointer font-normal leading-[normal] min-w-[108px] md:ml-[0] ml-[115px] mr-[16px] mt-[21px] not-italic py-[8px] rounded-[16px] text-[14px] text-center text-white_A700 w-[auto]">
                      03h 06m 34s{" "}
                    </Button>
                    <div className="md:h-[204px] h-[42px] md:ml-[0] ml-[17px] mr-[186px] mt-[162px] relative w-[15%]">
                      <div className="bg-white_A700 h-[42px] m-[auto] rounded-[21px] w-[100%]"></div>
                      <Img
                        src="images/img_polygon1.svg"
                        className="absolute h-[21px] inset-y-[0] my-[auto] right-[19%] w-[auto]"
                        alt="PolygonOne"
                      />
                    </div>
                    <div className="flex font-rubik items-center justify-start mb-[9px] md:ml-[0] ml-[7px] mt-[47px] md:w-[100%] w-[97%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[128px] items-center justify-start md:w-[100%] w-[92%]">
                          <Text
                            className="font-medium text-gray_553 text-left w-[auto]"
                            variant="body78"
                          >
                            Dirty Coin
                          </Text>
                          <Text
                            className="font-medium text-gray_553 text-left w-[auto]"
                            variant="body78"
                          >
                            125{" "}
                          </Text>
                        </div>
                        <Text
                          className="font-medium mt-[9px] text-left text-white_A700 w-[auto]"
                          variant="body60"
                        >
                          Dirty Coin #50
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[28px] w-[100%]">
                          <Text
                            className="font-medium text-gray_553 text-left w-[auto]"
                            variant="body64"
                          >
                            Current bid
                          </Text>
                          <Text
                            className="font-medium text-gray_553 text-left w-[auto]"
                            variant="body64"
                          >
                            <span className="text-white_A700 text-[18px] font-rubik">
                              15.20
                            </span>
                            <span className="text-gray_553 text-[18px] font-rubik">
                              {" "}
                              ETH
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col justify-end p-[25px] sm:px-[20px] rounded-[40px] w-[100%]">
                    <Button className="bg-gray_752 cursor-pointer font-normal leading-[normal] min-w-[108px] md:ml-[0] ml-[111px] mr-[12px] mt-[17px] not-italic py-[8px] rounded-[16px] text-[14px] text-center text-white_A700 w-[auto]">
                      03h 06m 34s{" "}
                    </Button>
                    <div className="md:h-[204px] h-[42px] md:ml-[0] ml-[13px] mr-[182px] mt-[162px] relative w-[16%]">
                      <div className="bg-white_A700 h-[42px] m-[auto] rounded-[21px] w-[100%]"></div>
                      <Img
                        src="images/img_polygon1.svg"
                        className="absolute h-[21px] inset-[0] justify-center m-[auto] w-[auto]"
                        alt="PolygonTwo"
                      />
                    </div>
                    <div className="flex font-rubik items-center justify-start mb-[6px] mr-[2px] mt-[47px] md:w-[100%] w-[98%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[109px] items-center justify-start md:w-[100%] w-[94%]">
                          <Text
                            className="font-medium text-gray_553 text-left w-[auto]"
                            variant="body78"
                          >
                            DzCutie Coin
                          </Text>
                          <Text
                            className="font-medium text-gray_553 text-left w-[auto]"
                            variant="body78"
                          >
                            108{" "}
                          </Text>
                        </div>
                        <Text
                          className="font-medium mt-[9px] text-left text-white_A700 w-[auto]"
                          variant="body60"
                        >
                          DzCutie Coin #100
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[28px] w-[100%]">
                          <Text
                            className="font-medium text-gray_553 text-left w-[auto]"
                            variant="body64"
                          >
                            Current bid
                          </Text>
                          <Text
                            className="font-medium text-gray_553 text-left w-[auto]"
                            variant="body64"
                          >
                            <span className="text-white_A700 text-[18px] font-rubik">
                              11.05
                            </span>
                            <span className="text-gray_553 text-[18px] font-rubik">
                              {" "}
                              ETH
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col items-end justify-end p-[25px] sm:px-[20px] rounded-[40px] w-[100%]">
                    <Button className="bg-gray_752 cursor-pointer font-normal leading-[normal] min-w-[108px] mr-[13px] mt-[17px] not-italic py-[8px] rounded-[16px] text-[14px] text-center text-white_A700 w-[auto]">
                      03h 06m 34s{" "}
                    </Button>
                    <div className="md:h-[204px] h-[42px] mr-[182px] mt-[162px] relative w-[16%]">
                      <div className="bg-white_A700 h-[42px] m-[auto] rounded-[21px] w-[100%]"></div>
                      <Img
                        src="images/img_polygon1.svg"
                        className="absolute h-[21px] inset-[0] justify-center m-[auto] w-[auto]"
                        alt="PolygonThree"
                      />
                    </div>
                    <div className="flex font-rubik items-center justify-start mb-[6px] mr-[10px] mt-[47px] md:w-[100%] w-[95%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[132px] items-center justify-start md:w-[100%] w-[93%]">
                          <Text
                            className="font-medium text-gray_553 text-left w-[auto]"
                            variant="body78"
                          >
                            Kolo Coin
                          </Text>
                          <Text
                            className="font-medium text-gray_553 text-left w-[auto]"
                            variant="body78"
                          >
                            99
                          </Text>
                        </div>
                        <Text
                          className="font-medium mt-[9px] text-left text-white_A700 w-[auto]"
                          variant="body60"
                        >
                          Kolo Coin #150
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[28px] w-[100%]">
                          <Text
                            className="font-medium text-gray_553 text-left w-[auto]"
                            variant="body64"
                          >
                            Current bid
                          </Text>
                          <Text
                            className="font-medium text-gray_553 text-left w-[auto]"
                            variant="body64"
                          >
                            <span className="text-white_A700 text-[18px] font-rubik">
                              9.99
                            </span>
                            <span className="text-gray_553 text-[18px] font-rubik">
                              {" "}
                              ETH
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gray_921 flex md:flex-col flex-row md:gap-[20px] items-center justify-start left-[7%] p-[14px] md:px-[20px] top-[2%] w-[75%]">
          <div className="bg-bluegray_955 flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[18px] md:mt-[0] my-[10px] p-[8px] rounded-[26px] md:w-[100%] w-[39%]">
            <Img
              src="images/img_search_white_a700_24x24.svg"
              className="h-[24px] ml-[16px] w-[24px]"
              alt="search Four"
            />
            <Line className="bg-bluegray_528 h-[36px] w-[1px]" />
            <Text
              className="font-medium text-left text-white_A700 w-[auto]"
              variant="body78"
            >
              Search...
            </Text>
          </div>
          <Button className="bg-bluegray_956 flex h-[52px] items-center justify-center md:ml-[0] ml-[278px] md:mt-[0] my-[10px] p-[14px] rounded-[50%] w-[52px]">
            <Img
              src="images/img_car_white_a700_52x52.svg"
              className="h-[24px]"
              alt="car"
            />
          </Button>
          <Button className="bg-bluegray_956 flex h-[52px] items-center justify-center md:ml-[0] ml-[16px] md:mt-[0] my-[10px] p-[14px] rounded-[50%] w-[52px]">
            <Img
              src="images/img_notification_white_a700_52x52.svg"
              className="h-[24px]"
              alt="notification"
            />
          </Button>
          <Line className="bg-bluegray_828 md:h-[1px] h-[72px] md:ml-[0] ml-[24px] md:w-[100%] w-[1px]" />
          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[24px] md:w-[100%] w-[24%]">
            <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
              <div className="bg-bluegray_500 h-[52px] rounded-[50%] w-[52px]"></div>
              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body64"
                >
                  Albert Kennedy
                </Text>
                <Text
                  className="font-normal not-italic text-gray_305 text-left w-[auto]"
                  variant="body78"
                >
                  albert@gmail.com
                </Text>
              </div>
            </div>
            <Img
              src="images/img_arrowdown_gray_334.svg"
              className="h-[18px] w-[18px]"
              alt="arrowdown"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuksjonPage;
