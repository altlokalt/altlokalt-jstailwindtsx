import React from "react";

import { Img, Button, Text, CheckBox, Input, List } from "components";

const WwwneighbourlyconzbyhtmltodesignFREEversionTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_66 flex flex-col font-roboto gap-[30px] items-center justify-start mx-[auto] pb-[30px] w-[100%]">
        <div className="h-[623px] md:px-[20px] relative w-[100%]">
          <header className="flex items-center justify-center mb-[-10px] mx-[auto] w-[100%] z-[1]">
            <div className="bg-white_A700 border-b-[1px] border-bluegray_101 border-solid flex items-center justify-center shadow-bs61 w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[78%]">
                <Img
                  src="images/img_logogreensvg.svg"
                  className="h-[30px] sm:ml-[0] ml-[14px] w-[auto]"
                  alt="logogreensvg"
                />
                <div className="flex flex-row items-center justify-center mr-[14px] pl-[9px] py-[9px] sm:w-[100%] w-[auto]">
                  <Button className="bg-cyan_604 border-[1px] border-cyan_604 border-solid cursor-pointer font-normal min-w-[68px] not-italic pb-[4.39px] pl-[11px] pr-[10.33px] pt-[3px] rounded-[5px] text-[14px] text-center text-white_A700 w-[auto]">
                    Sign up
                  </Button>
                  <div className="flex flex-row gap-[-1px] items-start justify-start ml-[3px] w-[auto]">
                    <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal min-w-[63px] not-italic pb-[4.39px] pl-[11px] pr-[10.88px] pt-[3px] rounded-bl-[5px] rounded-br-[0] rounded-tl-[5px] rounded-tr-[0] text-[14px] text-center text-cyan_604 w-[auto]">
                      Sign in
                    </Button>
                    <Text
                      className="bg-white_A700 border-[1px] border-bluegray_101 border-solid font-normal h-[30px] justify-center not-italic sm:pl-[20px] pl-[33px] pr-[10px] py-[6px] rounded-bl-[0] rounded-br-[5px] rounded-tl-[0] rounded-tr-[5px] text-center text-cyan_604 w-[151px]"
                      variant="body78"
                    >
                      Sign in with Stuff
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="md:h-[561px] sm:h-[581px] h-[582px] mt-[auto] mx-[auto] w-[100%]">
            <div className="bg-gray_208 border-b-[1px] border-bluegray_101 border-solid flex h-[100%] items-center justify-start mt-[9px] mx-[auto] shadow-bs61 w-[100%]">
              <div className="flex items-center justify-start md:w-[100%] w-[78%]">
                <div className="flex items-center justify-start px-[15px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start pl-[19.41px] pr-[20.45px] sm:pr-[20px] py-[7.5px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-center text-gray_748 w-[auto]"
                        variant="body69"
                      >
                        Home
                      </Text>
                    </div>
                    <div className="flex md:flex-1 items-end justify-end p-[10px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal mr-[12px] not-italic text-center text-gray_505 w-[auto]"
                        variant="body69"
                      >
                        Messages
                      </Text>
                    </div>
                    <div className="flex md:flex-1 items-end justify-end p-[10px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal mr-[11px] not-italic text-center text-gray_505 w-[auto]"
                        variant="body69"
                      >
                        Neighbours
                      </Text>
                    </div>
                    <div className="flex items-start justify-start pl-[19.41px] sm:pr-[20px] pr-[21.17px] py-[7.5px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-center text-gray_748 w-[auto]"
                        variant="body69"
                      >
                        Market
                      </Text>
                    </div>
                    <div className="flex items-start justify-start pl-[19.41px] pr-[20.88px] sm:pr-[20px] py-[7.5px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-center text-gray_748 w-[auto]"
                        variant="body69"
                      >
                        Businesses
                      </Text>
                    </div>
                    <div className="flex md:flex-1 items-end justify-end p-[10px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal mr-[12px] not-italic text-center text-gray_505 w-[auto]"
                        variant="body69"
                      >
                        Groups
                      </Text>
                    </div>
                    <div className="flex md:flex-1 items-end justify-start p-[9px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal mb-[2px] mr-[13px] not-italic text-center text-gray_505 w-[auto]"
                        variant="body69"
                      >
                        Events
                      </Text>
                    </div>
                    <div className="flex items-start justify-start pl-[20.41px] sm:pl-[20px] pr-[19.95px] py-[7.5px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-center text-gray_748 w-[auto]"
                        variant="body69"
                      >
                        Property
                      </Text>
                    </div>
                    <div className="flex items-start justify-start pl-[20.41px] sm:pl-[20px] pr-[19.47px] py-[7.5px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-center text-gray_748 w-[auto]"
                        variant="body69"
                      >
                        Publications
                      </Text>
                    </div>
                    <CheckBox
                      className="font-normal md:ml-[0] ml-[15px] not-italic text-[16px] text-center text-gray_748"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="More"
                      name="More"
                    ></CheckBox>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-gray_748 flex flex-col md:gap-[40px] gap-[60px] h-[100%] inset-[0] items-center justify-center m-[auto] pt-[100px] w-[100%]">
              <div className="flex items-center justify-start md:w-[100%] w-[78%]">
                <div className="flex items-center justify-start px-[195px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[12px] items-center justify-start pb-[3px] px-[3px] md:w-[100%] w-[97%]">
                      <Img
                        src="images/img_logosvg.svg"
                        className="h-[56px] w-[auto]"
                        alt="logosvg"
                      />
                      <Text
                        className="font-normal not-italic text-center text-white_A700 w-[auto]"
                        variant="body55"
                      >
                        Public Local Noticeboards
                      </Text>
                    </div>
                    <Text
                      className="font-normal mt-[29px] not-italic text-center text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Find your Noticeboard
                    </Text>
                    <div className="bg-gray_208 h-[117px] md:h-[124px] mt-[7px] relative rounded-[10px] shadow-bs62 w-[100%]">
                      <div className="absolute bg-gray_208 h-[117px] inset-[0] justify-center m-[auto] rounded-[10px] shadow-bs62 w-[99%]"></div>
                      <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                        <div className="flex flex-col gap-[15px] items-center justify-start sm:px-[20px] md:px-[40px] px-[79px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid md:h-[19px] h-[41px] p-[11px] relative rounded-[5px] w-[100%]">
                            <Img
                              src="images/img_location_bluegray_101.svg"
                              className="h-[16px] ml-[auto] my-[auto] w-[16px]"
                              alt="location"
                            />
                            <div className="absolute flex h-[max-content] inset-[0] items-start justify-center m-[auto] sm:w-[100%] w-[97%]">
                              <Input
                                className="font-normal leading-[normal] not-italic text-[16px] placeholder:text-gray_505 text-gray_505 text-left w-[100%]"
                                wrapClassName="sm:w-[100%] w-[96%]"
                                name="Group1722"
                                placeholder="Enter a suburb..."
                              ></Input>
                            </div>
                          </div>
                          <Button className="bg-cyan_604 border-[1px] border-cyan_604 border-solid cursor-pointer font-normal min-w-[360px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-white_A700 w-[auto]">
                            Find your Neighbourhood
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <div className="md:h-[136px] h-[150px] relative w-[100%]">
                  <div className="absolute bg-gray_208 bottom-[0] flex inset-x-[0] items-end justify-end mx-[auto] w-[100%]">
                    <div className="flex items-center justify-start mt-[34px] md:w-[100%] w-[2%]">
                      <div className="bg-gradient46  h-[79px] w-[100%]"></div>
                    </div>
                  </div>
                  <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[78%]">
                    <List
                      className="sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="bg-gray_208 border-bluegray_101 border-solid border-y-[1px] md:h-[118px] h-[132px] mb-[3px] sm:ml-[0] relative w-[100%]">
                        <div className="absolute bottom-[0] flex md:h-[115px] h-[98px] inset-x-[0] justify-end mx-[auto] w-[100%]">
                          <div className="bg-gray_208 border-bluegray_101 border-solid border-y-[1px] h-[115px] mt-[auto] mx-[auto] w-[100%]"></div>
                          <div className="absolute bottom-[0] flex flex-col gap-[21px] inset-x-[0] items-center justify-start mx-[auto] px-[5px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-center text-gray_748 w-[auto]"
                              variant="body69"
                            >
                              Community News
                            </Text>
                            <Text
                              className="not-italic text-center text-gray_748 w-[auto]"
                              variant="body79"
                            >
                              What’s happening nearby
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bg-light_green_704 border-[2px] border-solid border-white_A700 h-[70px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[70px]"></div>
                      </div>
                      <div className="bg-gray_208 border-bluegray_101 border-solid border-y-[1px] md:h-[118px] h-[132px] mb-[3px] sm:ml-[0] relative w-[100%]">
                        <div className="absolute bottom-[0] flex md:h-[115px] h-[98px] inset-x-[0] justify-end mx-[auto] w-[100%]">
                          <div className="bg-gray_208 border-bluegray_101 border-solid border-y-[1px] h-[115px] mt-[auto] mx-[auto] w-[100%]"></div>
                          <div className="absolute bottom-[0] flex flex-col gap-[21px] inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
                            <Text
                              className="font-normal not-italic text-center text-gray_748 w-[auto]"
                              variant="body69"
                            >
                              Messages and Posts
                            </Text>
                            <Text
                              className="not-italic text-center text-gray_748 w-[auto]"
                              variant="body79"
                            >
                              Neighbours talking together
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bg-light_green_704 border-[2px] border-solid border-white_A700 h-[70px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[70px]"></div>
                      </div>
                      <div className="bg-gray_208 border-bluegray_101 border-solid border-y-[1px] md:h-[118px] h-[132px] mb-[3px] sm:ml-[0] relative w-[100%]">
                        <div className="absolute bottom-[0] flex md:h-[115px] h-[98px] inset-x-[0] justify-end mx-[auto] w-[100%]">
                          <div className="bg-gray_208 border-bluegray_101 border-solid border-y-[1px] h-[115px] mt-[auto] mx-[auto] w-[100%]"></div>
                          <div className="absolute bottom-[0] flex flex-col gap-[22px] inset-x-[0] items-center justify-start mx-[auto] px-[14px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-center text-gray_748 w-[auto]"
                              variant="body69"
                            >
                              Lost Pets
                            </Text>
                            <Text
                              className="not-italic text-center text-gray_748 w-[auto]"
                              variant="body79"
                            >
                              Help find missing pets
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bg-light_green_704 border-[2px] border-solid border-white_A700 h-[70px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[70px]"></div>
                      </div>
                      <div className="bg-gray_208 border-bluegray_101 border-solid border-y-[1px] md:h-[119px] h-[131px] mb-[4px] sm:ml-[0] relative w-[100%]">
                        <div className="absolute bottom-[0] flex md:h-[115px] h-[97px] inset-x-[0] justify-end mx-[auto] w-[100%]">
                          <div className="bg-gray_208 border-bluegray_101 border-solid border-y-[1px] h-[115px] mt-[auto] mx-[auto] w-[100%]"></div>
                          <div className="absolute bottom-[0] flex flex-col gap-[21px] inset-x-[0] items-center justify-start mx-[auto] px-[5px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-center text-gray_748 w-[auto]"
                              variant="body69"
                            >
                              Free Stuff
                            </Text>
                            <Text
                              className="not-italic text-center text-gray_748 w-[auto]"
                              variant="body79"
                            >
                              Clean out unwanted stuff
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bg-light_green_704 border-[2px] border-solid border-white_A700 h-[70px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[70px]"></div>
                      </div>
                      <div className="bg-gray_208 border-bluegray_101 border-solid border-y-[1px] md:h-[118px] h-[132px] mb-[3px] sm:ml-[0] relative w-[100%]">
                        <div className="absolute bottom-[0] flex md:h-[115px] h-[98px] inset-x-[0] justify-end mx-[auto] w-[100%]">
                          <div className="bg-gray_208 border-bluegray_101 border-solid border-y-[1px] h-[115px] mt-[auto] mx-[auto] w-[100%]"></div>
                          <div className="absolute bottom-[0] flex flex-col gap-[23px] inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
                            <Text
                              className="font-normal not-italic text-center text-gray_748 w-[auto]"
                              variant="body69"
                            >
                              Items for Sale
                            </Text>
                            <Text
                              className="not-italic text-center text-gray_748 w-[auto]"
                              variant="body79"
                            >
                              Trade between neighbours
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bg-light_green_704 border-[2px] border-solid border-white_A700 h-[70px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[70px]"></div>
                      </div>
                      <div className="bg-gray_208 border-bluegray_101 border-solid border-y-[1px] md:h-[115px] h-[136px] sm:ml-[0] relative w-[100%]">
                        <div className="absolute bottom-[0] flex h-[102px] md:h-[115px] inset-x-[0] justify-end mx-[auto] w-[100%]">
                          <div className="bg-gray_208 border-bluegray_101 border-solid border-y-[1px] h-[115px] mt-[auto] mx-[auto] w-[100%]"></div>
                          <div className="absolute bottom-[0] flex flex-col gap-[-11.41px] inset-x-[0] items-center justify-start mx-[auto] pb-[1.59px] pl-[4.83px] pr-[3.5px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-center text-gray_748 w-[auto]"
                              variant="body69"
                            >
                              Crime and Safety Info
                            </Text>
                            <Text
                              className="not-italic text-center text-gray_748 w-[auto]"
                              variant="body79"
                            >
                              Create safer communities
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bg-light_green_704 border-[2px] border-solid border-white_A700 h-[70px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[70px]"></div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start max-w-[1170px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
            <div className="flex md:flex-1 flex-col items-center justify-start pb-[15px] md:w-[100%] w-[72%]">
              <div className="flex flex-col gap-[27px] items-start justify-start md:w-[100%] w-[97%]">
                <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="bg-gray_208 border-b-[1px] border-bluegray_101 border-solid flex items-start justify-start p-[12px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal mb-[2px] md:ml-[0] ml-[2px] not-italic text-bluegray_919 text-left w-[auto]"
                      variant="body69"
                    >
                      Public Notices
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-end p-[15px] w-[100%]">
                    <Text
                      className="font-normal leading-[25.60px] mt-[3px] not-italic text-gray_748 text-left w-[100%]"
                      variant="body69"
                    >
                      1,300 neighbourhoods across New Zealand are using
                      Neighbourly. Our members have helped us create these
                      public noticeboards, available to everyone. Become a
                      member to connect with your neighbours and interact with
                      your neighbourhood.
                    </Text>
                    <Button className="bg-cyan_604 border-[1px] border-cyan_604 border-solid cursor-pointer font-normal min-w-[196px] not-italic pb-[8.39px] pl-[30px] pr-[30.97px] pt-[7px] sm:px-[20px] rounded-[5px] text-[18px] text-center text-white_A700 w-[auto]">
                      Join Neighbourly
                    </Button>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-gray_748 text-left w-[auto]"
                  variant="body39"
                >
                  Popular Neighbourhoods
                </Text>
              </div>
              <div className="flex items-center justify-start mt-[10px] pb-[15px] px-[15px] w-[100%]">
                <div className="flex items-center justify-start mb-[15px] w-[100%]">
                  <div className="md:gap-[20px] gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="flex md:h-[52px] h-[90px] justify-end pt-[38px] relative w-[100%]">
                        <div className="bg-gradient47  h-[45px] mt-[auto] mx-[auto] w-[100%]"></div>
                        <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[7px] w-[100%]">
                          <Text
                            className="font-normal ml-[2px] my-[6px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Remuera - Auckland
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[23px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            77 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[23px] w-[20%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            5 Events
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[9px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="flex md:h-[52px] h-[90px] justify-end pt-[38px] relative w-[100%]">
                        <div className="bg-gradient47  h-[45px] mt-[auto] mx-[auto] w-[100%]"></div>
                        <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[7px] w-[100%]">
                          <Text
                            className="font-normal ml-[2px] my-[6px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Mount Eden - Auckland
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[23px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            57 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[23px] w-[20%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            9 Events
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[9px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="bg-gradient47  flex items-center justify-start pt-[38px] w-[100%]">
                        <div className="flex flex-row items-center justify-between p-[7px] w-[100%]">
                          <Text
                            className="font-normal mb-[4px] ml-[2px] mt-[8px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Tawa - Wellington
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Two"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[23px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            43 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[23px] w-[20%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            5 Events
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="flex md:h-[52px] h-[90px] justify-end pt-[38px] relative w-[100%]">
                        <div className="bg-gradient47  h-[45px] mt-[auto] mx-[auto] w-[100%]"></div>
                        <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[7px] w-[100%]">
                          <Text
                            className="font-normal ml-[2px] my-[6px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            St Heliers - Auckland
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Three"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[23px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            59 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[23px] w-[20%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            6 Events
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="flex md:h-[52px] h-[90px] justify-end pt-[38px] relative w-[100%]">
                        <div className="bg-gradient47  h-[45px] mt-[auto] mx-[auto] w-[100%]"></div>
                        <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[7px] w-[100%]">
                          <Text
                            className="font-normal ml-[2px] my-[6px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Mount Roskill - Auckland
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Four"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[23px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            42 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[23px] w-[20%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            5 Events
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="flex md:h-[52px] h-[90px] justify-end pt-[38px] relative w-[100%]">
                        <div className="bg-gradient47  h-[45px] mt-[auto] mx-[auto] w-[100%]"></div>
                        <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[7px] w-[100%]">
                          <Text
                            className="font-normal mb-[4px] ml-[2px] mt-[8px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Karori - Wellington
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Five"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[22px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            25 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[22px] w-[22%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            11 Events
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="bg-gradient47  flex items-center justify-start pt-[38px] w-[100%]">
                        <div className="flex flex-row items-center justify-between p-[7px] w-[100%]">
                          <Text
                            className="font-normal mb-[4px] ml-[2px] mt-[8px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Papamoa Beach - Papamoa
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Six"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[23px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            24 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[23px] w-[20%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            2 Events
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="bg-gradient47  flex items-center justify-start pt-[38px] w-[100%]">
                        <div className="flex flex-row items-center justify-between p-[7px] w-[100%]">
                          <Text
                            className="font-normal ml-[2px] my-[6px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Blenheim
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Seven"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[25px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            19 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[25px] w-[18%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            1 Event
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="bg-gradient47  flex items-center justify-start pt-[38px] w-[100%]">
                        <div className="flex flex-row items-center justify-between p-[7px] w-[100%]">
                          <Text
                            className="font-normal mb-[4px] ml-[2px] mt-[8px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Rangiora
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Eight"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[22px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            37 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            10 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[22px] w-[20%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            7 Events
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="bg-gradient47  flex items-center justify-start pt-[38px] w-[100%]">
                        <div className="flex flex-row items-center justify-between p-[7px] w-[100%]">
                          <Text
                            className="font-normal ml-[2px] my-[6px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Henderson - Auckland
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Nine"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[25px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            29 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[25px] w-[18%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            1 Event
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="bg-gradient47  flex items-center justify-start pt-[38px] w-[100%]">
                        <div className="flex flex-row items-center justify-between p-[7px] w-[100%]">
                          <Text
                            className="font-normal ml-[2px] my-[6px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Levin
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Ten"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[25px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            22 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[25px] w-[18%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            1 Event
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="flex md:h-[52px] h-[90px] justify-end pt-[38px] relative w-[100%]">
                        <div className="bg-gradient47  h-[45px] mt-[auto] mx-[auto] w-[100%]"></div>
                        <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[7px] w-[100%]">
                          <Text
                            className="font-normal ml-[2px] my-[6px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Mount Albert - Auckland
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Eleven"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[23px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            36 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[23px] w-[20%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            2 Events
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="flex md:h-[52px] h-[90px] justify-end pt-[38px] relative w-[100%]">
                        <div className="bg-gradient47  h-[45px] mt-[auto] mx-[auto] w-[100%]"></div>
                        <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[7px] w-[100%]">
                          <Text
                            className="font-normal mb-[4px] ml-[2px] mt-[8px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Onehunga - Auckland
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Twelve"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[25px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            45 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[25px] w-[18%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            1 Event
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="bg-gradient47  flex items-center justify-start pt-[38px] w-[100%]">
                        <div className="flex flex-row items-center justify-between p-[7px] w-[100%]">
                          <Text
                            className="font-normal ml-[2px] my-[6px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Havelock North
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Thirteen"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[25px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            22 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[25px] w-[18%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            1 Event
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="bg-gradient47  flex items-center justify-start pt-[38px] w-[100%]">
                        <div className="flex flex-row items-center justify-between p-[7px] w-[100%]">
                          <Text
                            className="font-normal mb-[4px] ml-[2px] mt-[8px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Mount Wellington - Auckland
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Fourteen"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[23px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            42 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[23px] w-[20%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            3 Events
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-1 flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] rounded-tl-[5px] rounded-tr-[5px] shadow-bs61 w-[100%]">
                      <div className="flex md:h-[52px] h-[90px] justify-end pt-[38px] relative w-[100%]">
                        <div className="bg-gradient47  h-[45px] mt-[auto] mx-[auto] w-[100%]"></div>
                        <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[7px] w-[100%]">
                          <Text
                            className="font-normal mb-[4px] ml-[2px] mt-[8px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body60"
                          >
                            Grey Lynn - Auckland
                          </Text>
                          <Img
                            src="images/img_arrowleft_white_a700.svg"
                            className="h-[16px] w-[16px]"
                            alt="arrowleft Fifteen"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                        <div className="flex flex-row items-start justify-center ml-[22px] w-[21%]">
                          <div className="flex font-inter items-start justify-start mb-[3px] w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mr-[2px] my-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            45 Posts
                          </Text>
                        </div>
                        <div className="flex items-end justify-start w-[auto]">
                          <Text
                            className="font-normal mb-[2px] mr-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            4 Articles
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-center mr-[22px] w-[22%]">
                          <div className="flex font-inter items-start justify-start w-[16px]">
                            <Text
                              className="font-normal not-italic text-gray_505 text-left w-[auto]"
                              variant="body78"
                            >
                              
                            </Text>
                          </div>
                          <Text
                            className="font-normal font-roboto mb-[2px] not-italic text-gray_748 text-left w-[auto]"
                            variant="body78"
                          >
                            12 Events
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal mb-[10px] min-w-[368px] not-italic py-[11px] rounded-[5px] text-[16px] text-center text-cyan_604 w-[auto]">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_208 border-bluegray_101 border-solid border-t-[1px] flex items-end justify-start p-[7px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[0] rounded-tr-[0] md:w-[100%] w-[97%]">
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[72%]">
                  <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-row items-center justify-start p-[9px] rounded-bl-[5px] rounded-br-[0] rounded-tl-[5px] rounded-tr-[0] sm:w-[100%] w-[17%]">
                    <div className="flex font-inter items-start justify-start w-[16px]">
                      <Text
                        className="font-normal not-italic text-gray_505 text-left w-[auto]"
                        variant="body78"
                      >
                        
                      </Text>
                    </div>
                    <Text
                      className="font-normal font-roboto mb-[2px] not-italic text-gray_505 text-left w-[auto]"
                      variant="body78"
                    >
                      Previous
                    </Text>
                  </div>
                  <Button className="bg-cyan_604 border-[1px] border-cyan_604 border-solid cursor-pointer font-normal min-w-[29px] not-italic pb-[8.39px] pl-[11px] pr-[10.88px] pt-[7px] text-[14px] text-center text-white_A700 w-[auto]">
                    1
                  </Button>
                  <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal min-w-[29px] not-italic pb-[8.39px] pl-[11px] pr-[10.88px] pt-[7px] text-[14px] text-center text-cyan_604 w-[auto]">
                    2
                  </Button>
                  <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal min-w-[29px] not-italic pb-[8.39px] pl-[11px] pr-[10.88px] pt-[7px] text-[14px] text-center text-cyan_604 w-[auto]">
                    3
                  </Button>
                  <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal min-w-[29px] not-italic pb-[8.39px] pl-[11px] pr-[10.88px] pt-[7px] text-[14px] text-center text-cyan_604 w-[auto]">
                    4
                  </Button>
                  <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal min-w-[29px] not-italic pb-[8.39px] pl-[11px] pr-[10.88px] pt-[7px] text-[14px] text-center text-cyan_604 w-[auto]">
                    5
                  </Button>
                  <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal min-w-[29px] not-italic pb-[8.39px] pl-[11px] pr-[10.88px] pt-[7px] text-[14px] text-center text-cyan_604 w-[auto]">
                    6
                  </Button>
                  <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal min-w-[29px] not-italic pb-[8.39px] pl-[11px] pr-[10.88px] pt-[7px] text-[14px] text-center text-cyan_604 w-[auto]">
                    7
                  </Button>
                  <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal min-w-[29px] not-italic pb-[8.39px] pl-[11px] pr-[10.88px] pt-[7px] text-[14px] text-center text-cyan_604 w-[auto]">
                    8
                  </Button>
                  <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal min-w-[29px] not-italic pb-[8.39px] pl-[11px] pr-[10.88px] pt-[7px] text-[14px] text-center text-cyan_604 w-[auto]">
                    9
                  </Button>
                  <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal not-italic pb-[8.39px] pl-[11px] pr-[10.73px] pt-[7px] text-[14px] text-center text-cyan_604 w-[37px]">
                    10
                  </Button>
                  <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal not-italic pb-[8.39px] pl-[11px] pr-[10.73px] pt-[7px] text-[14px] text-center text-cyan_604 w-[37px]">
                    11
                  </Button>
                  <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid cursor-pointer font-normal not-italic pb-[8.39px] pl-[11px] pr-[10.73px] pt-[7px] text-[14px] text-center text-cyan_604 w-[37px]">
                    12
                  </Button>
                  <Button className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex h-[38px] items-center justify-center pb-[16.09px] pt-[18.3px] px-[17px] w-[38px]">
                    <Img
                      src="images/img_span_gray_505.svg"
                      className="h-[4px]"
                      alt="span"
                    />
                  </Button>
                  <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-row items-center justify-center p-[9px] rounded-bl-[0] rounded-br-[5px] rounded-tl-[0] rounded-tr-[5px] sm:w-[100%] w-[13%]">
                    <Text
                      className="font-normal mb-[2px] not-italic text-cyan_604 text-left w-[auto]"
                      variant="body78"
                    >
                      Next
                    </Text>
                    <div className="flex font-inter items-start justify-start mx-[2px] w-[16px]">
                      <Text
                        className="font-normal not-italic text-cyan_604 text-left w-[auto]"
                        variant="body78"
                      >
                        
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[29%]">
              <Text
                className="border-b-[1px] border-gray_209 border-solid font-normal md:ml-[0] ml-[14px] not-italic sm:pr-[20px] pr-[35px] py-[8px] text-left text-light_green_704 w-[auto]"
                variant="body69"
              >
                Browse Neighbourhoods
              </Text>
              <List
                className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex-col gap-[1px] grid items-center md:ml-[0] ml-[14px] mt-[5px] rounded-[5px] shadow-bs61 w-[91%]"
                orientation="vertical"
              >
                <div className="flex items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="border-b-[1px] border-gray_209 border-solid flex flex-row items-center justify-between p-[13px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_748 text-left w-[auto]"
                      variant="body69"
                    >
                      Auckland Region
                    </Text>
                    <Img
                      src="images/img_aheading1after.svg"
                      className="h-[11px] w-[11px]"
                      alt="aheading1after"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="border-b-[1px] border-gray_209 border-solid flex flex-row items-center justify-between p-[13px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_748 text-left w-[auto]"
                      variant="body69"
                    >
                      Bay of Plenty Region
                    </Text>
                    <Img
                      src="images/img_aheading1after.svg"
                      className="h-[11px] w-[11px]"
                      alt="aheading2after"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="border-b-[1px] border-gray_209 border-solid flex flex-row items-center justify-between p-[13px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_748 text-left w-[auto]"
                      variant="body69"
                    >
                      Canterbury Region
                    </Text>
                    <Img
                      src="images/img_aheading1after.svg"
                      className="h-[11px] w-[11px]"
                      alt="aheading3after"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="border-b-[1px] border-gray_209 border-solid flex flex-row items-center justify-between p-[13px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_748 text-left w-[auto]"
                      variant="body69"
                    >
                      Hawkes Bay - Gisborne Region
                    </Text>
                    <Img
                      src="images/img_aheading1after.svg"
                      className="h-[11px] w-[11px]"
                      alt="aheading4after"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="border-b-[1px] border-gray_209 border-solid flex flex-row items-center justify-between p-[13px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_748 text-left w-[auto]"
                      variant="body69"
                    >
                      Manawatu - Wanganui Region
                    </Text>
                    <Img
                      src="images/img_aheading1after.svg"
                      className="h-[11px] w-[11px]"
                      alt="aheading5after"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="border-b-[1px] border-gray_209 border-solid flex flex-row items-center justify-between p-[13px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_748 text-left w-[auto]"
                      variant="body69"
                    >
                      Nelson Marlborough Region
                    </Text>
                    <Img
                      src="images/img_aheading1after.svg"
                      className="h-[11px] w-[11px]"
                      alt="aheading6after"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="border-b-[1px] border-gray_209 border-solid flex flex-row items-center justify-between p-[13px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_748 text-left w-[auto]"
                      variant="body69"
                    >
                      Northland Region
                    </Text>
                    <Img
                      src="images/img_aheading1after.svg"
                      className="h-[11px] w-[11px]"
                      alt="aheading7after"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="border-b-[1px] border-gray_209 border-solid flex flex-row items-center justify-between p-[13px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_748 text-left w-[auto]"
                      variant="body69"
                    >
                      Otago - Southland Region
                    </Text>
                    <Img
                      src="images/img_aheading1after.svg"
                      className="h-[11px] w-[11px]"
                      alt="aheading8after"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="border-b-[1px] border-gray_209 border-solid flex flex-row items-center justify-between p-[13px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_748 text-left w-[auto]"
                      variant="body69"
                    >
                      Taranaki Region
                    </Text>
                    <Img
                      src="images/img_aheading1after.svg"
                      className="h-[11px] w-[11px]"
                      alt="aheading9after"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="border-b-[1px] border-gray_209 border-solid flex flex-row items-center justify-between p-[13px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_748 text-left w-[auto]"
                      variant="body69"
                    >
                      Waikato Region
                    </Text>
                    <Img
                      src="images/img_aheading1after.svg"
                      className="h-[11px] w-[11px]"
                      alt="aheading10after"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="border-b-[1px] border-gray_209 border-solid flex flex-row items-center justify-between p-[13px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_748 text-left w-[auto]"
                      variant="body69"
                    >
                      Wellington Region
                    </Text>
                    <Img
                      src="images/img_aheading1after.svg"
                      className="h-[11px] w-[11px]"
                      alt="aheading11after"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[5px] shadow-bs61 w-[100%]">
                  <div className="border-b-[1px] border-gray_209 border-solid flex flex-row items-center justify-between p-[13px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_748 text-left w-[auto]"
                      variant="body69"
                    >
                      West Coast Region
                    </Text>
                    <Img
                      src="images/img_aheading1after.svg"
                      className="h-[11px] w-[11px]"
                      alt="aheading12after"
                    />
                  </div>
                </div>
              </List>
              <Text
                className="font-normal md:ml-[0] ml-[14px] mt-[16px] not-italic text-gray_505 text-left w-[auto]"
                variant="body87"
              >
                Advertisement
              </Text>
              <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[14px] mt-[618px] pr-[8px] py-[8px] md:w-[100%] w-[auto]">
                <Text
                  className="font-normal not-italic text-gray_505 text-left w-[auto]"
                  variant="body78"
                >
                  © Neighbourly 2023
                </Text>
                <Text
                  className="font-normal leading-[19.20px] mb-[64px] not-italic text-gray_505 text-left w-[100%]"
                  variant="body87"
                >
                  About Mobile Privacy Safety Guidelines Help Terms Leads
                  Organisations Businesses Contact us Blog
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WwwneighbourlyconzbyhtmltodesignFREEversionTwoPage;
