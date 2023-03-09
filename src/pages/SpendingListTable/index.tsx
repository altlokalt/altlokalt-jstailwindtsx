import React from "react";

import {
  Img,
  Text,
  Button,
  Input,
  SelectBox,
  Line,
  List,
  CheckBox,
} from "components";

const SpendingListTablePage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 font-poppins h-[1220px] mx-[auto] px-[10px] relative w-[100%]">
        <div className="absolute bottom-[0] h-[1433px] inset-x-[0] max-w-[1985px] mx-[auto] md:px-[20px] w-[100%]">
          <Img
            src="images/img_pagebackground.png"
            className="absolute h-[1433px] inset-[0] justify-center m-[auto] object-cover w-[97%]"
            alt="pageBackground"
          />
          <div className="absolute bottom-[4%] flex flex-col gap-[43px] items-center justify-start right-[0] w-[90%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[14%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-semibold md:ml-[0] ml-[20px] text-black_908 text-left w-[auto]"
                      variant="body39"
                    >
                      Spendings
                    </Text>
                    <div className="flex flex-row gap-[35px] items-start justify-start mt-[2px] w-[100%]">
                      <Text
                        className="font-semibold mb-[2px] text-green_506 text-left w-[auto]"
                        variant="body64"
                      >
                        Credit /
                      </Text>
                      <Text
                        className="font-normal mt-[2px] not-italic text-gray_667 text-left w-[auto]"
                        variant="body64"
                      >
                        Spendings List
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[1255px] md:w-[100%] w-[auto]">
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
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[5px] w-[100%]">
                <Input
                  className="flex-1 font-medium leading-[normal] p-[0] text-[18px] placeholder:text-bluegray_913 text-bluegray_913 text-left w-[100%]"
                  wrapClassName="bg-white_A700 flex md:w-[100%] pb-[12px] pl-[10px] pr-[35px] pt-[16px] rounded-[12px] shadow-bs124 sm:pr-[20px] sm:w-[100%] w-[14%]"
                  name="bntViewAnalytics"
                  placeholder="View Analytics"
                  prefix={
                    <Img
                      src="images/img_graph_1.svg"
                      className="mr-[35px] my-[auto]"
                      alt="graph 1"
                    />
                  }
                ></Input>
                <Input
                  className="flex-1 font-medium leading-[normal] p-[0] text-[18px] placeholder:text-bluegray_913 text-bluegray_913 text-left w-[100%]"
                  wrapClassName="bg-white_A700 flex md:ml-[0] md:w-[100%] ml-[54px] pl-[9px] pr-[34px] py-[14px] rounded-[12px] shadow-bs124 sm:ml-[0] sm:pr-[20px] sm:w-[100%] w-[14%]"
                  name="btnDownload"
                  placeholder="Download PDF"
                  prefix={
                    <Img
                      src="images/img_close_red_a212.svg"
                      className="mr-[35px] my-[auto]"
                      alt="close"
                    />
                  }
                ></Input>
                <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:ml-[0] ml-[987px] p-[16px] rounded-[12px] shadow-bs124 md:w-[100%] w-[4%]">
                  <Img
                    src="images/img_settings_bluegray_913.svg"
                    className="h-[24px] w-[24px]"
                    alt="settings"
                  />
                </div>
                <SelectBox
                  className="bg-white_A700 md:flex-1 font-medium leading-[normal] md:ml-[0] ml-[38px] sm:pl-[20px] pl-[35px] py-[14px] rounded-[12px] shadow-bs124 text-[18px] text-bluegray_913 text-right md:w-[100%] w-[9%]"
                  placeholderClassName="text-bluegray_913"
                  name="sort"
                  placeholder="Latest"
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
              <div className="flex md:flex-col flex-row gap-[46px] items-center justify-start md:ml-[0] ml-[11px] mt-[30px] md:w-[100%] w-[94%]">
                <div className="border-[2px] border-gray_332 border-solid h-[19px] rounded-[3px] w-[19px]"></div>
                <div className="h-[70px] relative md:w-[100%] w-[97%]">
                  <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] pt-[21px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[40px] gap-[79px] items-start justify-start md:w-[100%] w-[80%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[84%]">
                          <div className="flex flex-row gap-[30px] items-center justify-between mb-[2px] md:w-[100%] w-[17%]">
                            <Text
                              className="font-medium text-black_902 text-left w-[auto]"
                              variant="body64"
                            >
                              Date Published
                            </Text>
                            <Img
                              src="images/img_mail_bluegray_146.svg"
                              className="h-[14px] w-[auto]"
                              alt="mail"
                            />
                          </div>
                          <div className="flex flex-row gap-[47px] items-start justify-center md:ml-[0] ml-[131px] md:mt-[0] mt-[2px] md:w-[100%] w-[23%]">
                            <Text
                              className="font-medium text-black_902 text-left w-[auto]"
                              variant="body64"
                            >
                              Yesterday Spending
                            </Text>
                            <Img
                              src="images/img_mail_bluegray_146.svg"
                              className="h-[14px] mt-[3px] w-[auto]"
                              alt="mail One"
                            />
                          </div>
                          <div className="flex flex-row gap-[10px] items-start justify-center md:ml-[0] ml-[61px] md:mt-[0] mt-[2px] md:w-[100%] w-[17%]">
                            <Text
                              className="font-medium text-black_902 text-left w-[auto]"
                              variant="body64"
                            >
                              Today Spending
                            </Text>
                            <Img
                              src="images/img_mail_bluegray_146.svg"
                              className="h-[14px] mt-[3px] w-[auto]"
                              alt="mail Two"
                            />
                          </div>
                          <div className="flex flex-row gap-[30px] items-start justify-between md:ml-[0] ml-[88px] md:mt-[0] mt-[2px] md:w-[100%] w-[17%]">
                            <Text
                              className="font-medium text-black_902 text-left w-[auto]"
                              variant="body64"
                            >
                              Total Spending
                            </Text>
                            <Img
                              src="images/img_mail_bluegray_146.svg"
                              className="h-[14px] mt-[3px] w-[auto]"
                              alt="mail Three"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-[20px] items-start justify-between md:mt-[0] mt-[2px] md:w-[100%] w-[11%]">
                          <Text
                            className="font-medium text-black_902 text-left w-[auto]"
                            variant="body64"
                          >
                            Remaining
                          </Text>
                          <Img
                            src="images/img_mail_bluegray_146.svg"
                            className="h-[14px] mt-[3px] w-[auto]"
                            alt="mail Four"
                          />
                        </div>
                      </div>
                      <Line className="bg-blue_60 h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="absolute flex flex-row gap-[10px] h-[max-content] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[5%]">
                    <Text
                      className="font-medium text-black_902 text-left w-[auto]"
                      variant="body64"
                    >
                      Ads ID
                    </Text>
                    <Img
                      src="images/img_location_bluegray_146.svg"
                      className="h-[14px] w-[auto]"
                      alt="location"
                    />
                  </div>
                </div>
              </div>
              <List
                className="flex-col gap-[1px] grid items-center md:ml-[0] ml-[11px] w-[97%]"
                orientation="vertical"
              >
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="h-[74px] relative md:w-[100%] w-[97%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end my-[auto] pt-[16px] right-[0] w-[96%]">
                      <div className="flex flex-col gap-[15px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            26 March 2020, 12:42 AM
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[118px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $4,521.21
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[212px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $5,415.51
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[205px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $245,173.02
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[153px] text-green_506 text-left w-[auto]"
                            variant="body69"
                          >
                            $67,234.66
                          </Text>
                          <Button className="border-[1px] border-gray_200 border-solid flex h-[42px] items-center justify-center md:ml-[0] ml-[149px] p-[7px] rounded-[12px] w-[42px]">
                            <Img
                              src="images/img_graph_1.svg"
                              className="h-[28px]"
                              alt="graphOne One"
                            />
                          </Button>
                        </div>
                        <Line className="bg-blue_60 h-[1px] w-[100%]" />
                      </div>
                    </div>
                    <CheckBox
                      className="absolute font-normal inset-y-[0] leading-[normal] left-[0] my-[auto] not-italic text-[16px] text-bluegray_836 text-left"
                      inputClassName="border-[2px] border-gray_332 border-solid h-[19px] mr-[5px] rounded-[3px] w-[19px]"
                      label="#ADS01231"
                      name="ADS01231"
                    ></CheckBox>
                  </div>
                  <Img
                    src="images/img_user_bluegray_836.svg"
                    className="h-[24px] w-[24px]"
                    alt="user"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="h-[74px] relative md:w-[100%] w-[97%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end my-[auto] pt-[16px] right-[0] w-[96%]">
                      <div className="flex flex-col gap-[15px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            26 March 2020, 12:42 AM
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[118px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $5,123.66
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[207px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $2,515.55
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[202px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $662,235.22
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[160px] text-green_506 text-left w-[auto]"
                            variant="body69"
                          >
                            $212,552.22
                          </Text>
                          <Button className="border-[1px] border-gray_200 border-solid flex h-[42px] items-center justify-center md:ml-[0] ml-[135px] p-[7px] rounded-[12px] w-[42px]">
                            <Img
                              src="images/img_graph_1.svg"
                              className="h-[28px]"
                              alt="graphOne Two"
                            />
                          </Button>
                        </div>
                        <Line className="bg-blue_60 h-[1px] w-[100%]" />
                      </div>
                    </div>
                    <CheckBox
                      className="absolute font-normal inset-y-[0] leading-[normal] left-[0] my-[auto] not-italic text-[16px] text-bluegray_836 text-left"
                      inputClassName="border-[2px] border-gray_332 border-solid h-[19px] mr-[5px] rounded-[3px] w-[19px]"
                      label="#ADS01221"
                      name="ADS01221"
                    ></CheckBox>
                  </div>
                  <Img
                    src="images/img_user_bluegray_836.svg"
                    className="h-[24px] w-[24px]"
                    alt="user One"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="h-[74px] relative md:w-[100%] w-[97%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end my-[auto] pt-[16px] right-[0] w-[96%]">
                      <div className="flex flex-col gap-[15px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            26 March 2020, 12:42 AM
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[118px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $2,515.55
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[207px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $5,415.51
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[205px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $245,173.02
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[153px] text-green_506 text-left w-[auto]"
                            variant="body69"
                          >
                            $67,234.66
                          </Text>
                          <Button className="border-[1px] border-gray_200 border-solid flex h-[42px] items-center justify-center md:ml-[0] ml-[149px] p-[7px] rounded-[12px] w-[42px]">
                            <Img
                              src="images/img_graph_1.svg"
                              className="h-[28px]"
                              alt="graphOne Three"
                            />
                          </Button>
                        </div>
                        <Line className="bg-blue_60 h-[1px] w-[100%]" />
                      </div>
                    </div>
                    <CheckBox
                      className="absolute font-normal inset-y-[0] leading-[normal] left-[0] my-[auto] not-italic text-[16px] text-bluegray_836 text-left"
                      inputClassName="border-[2px] border-gray_332 border-solid h-[19px] mr-[5px] rounded-[3px] w-[19px]"
                      label="#ADS01445"
                      name="ADS01445"
                    ></CheckBox>
                  </div>
                  <Img
                    src="images/img_user_bluegray_836.svg"
                    className="h-[24px] w-[24px]"
                    alt="user Two"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="h-[74px] relative md:w-[100%] w-[97%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end my-[auto] pt-[16px] right-[0] w-[96%]">
                      <div className="flex flex-col gap-[15px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            26 March 2020, 12:42 AM
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[118px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $6,235.33
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[204px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $2,412.55
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[202px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $245,173.02
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[153px] text-green_506 text-left w-[auto]"
                            variant="body69"
                          >
                            $67,234.66
                          </Text>
                          <Button className="border-[1px] border-gray_200 border-solid flex h-[42px] items-center justify-center md:ml-[0] ml-[149px] p-[7px] rounded-[12px] w-[42px]">
                            <Img
                              src="images/img_graph_1.svg"
                              className="h-[28px]"
                              alt="graphOne Four"
                            />
                          </Button>
                        </div>
                        <Line className="bg-blue_60 h-[1px] w-[100%]" />
                      </div>
                    </div>
                    <CheckBox
                      className="absolute font-normal inset-y-[0] leading-[normal] left-[0] my-[auto] not-italic text-[16px] text-bluegray_836 text-left"
                      inputClassName="border-[2px] border-gray_332 border-solid h-[19px] mr-[5px] rounded-[3px] w-[19px]"
                      label="#ADS01251"
                      name="ADS01251"
                    ></CheckBox>
                  </div>
                  <Img
                    src="images/img_user_bluegray_836.svg"
                    className="h-[24px] w-[24px]"
                    alt="user Three"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="h-[74px] relative md:w-[100%] w-[97%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end my-[auto] pt-[16px] right-[0] w-[96%]">
                      <div className="flex flex-col gap-[15px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            26 March 2020, 12:42 AM
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[118px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $4,521.21
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[212px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $5,415.51
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[205px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $245,173.02
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[153px] text-green_506 text-left w-[auto]"
                            variant="body69"
                          >
                            $67,234.66
                          </Text>
                          <Button className="border-[1px] border-gray_200 border-solid flex h-[42px] items-center justify-center md:ml-[0] ml-[149px] p-[7px] rounded-[12px] w-[42px]">
                            <Img
                              src="images/img_graph_1.svg"
                              className="h-[28px]"
                              alt="graphOne Five"
                            />
                          </Button>
                        </div>
                        <Line className="bg-blue_60 h-[1px] w-[100%]" />
                      </div>
                    </div>
                    <CheckBox
                      className="absolute font-normal inset-y-[0] leading-[normal] left-[0] my-[auto] not-italic text-[16px] text-bluegray_836 text-left"
                      inputClassName="border-[2px] border-gray_332 border-solid h-[19px] mr-[5px] rounded-[3px] w-[19px]"
                      label="#ADS01551"
                      name="ADS01551"
                    ></CheckBox>
                  </div>
                  <Img
                    src="images/img_user_bluegray_836.svg"
                    className="h-[24px] w-[24px]"
                    alt="user Four"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="h-[74px] relative md:w-[100%] w-[97%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end my-[auto] pt-[16px] right-[0] w-[96%]">
                      <div className="flex flex-col gap-[15px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            26 March 2020, 12:42 AM
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[118px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $4,521.21
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[212px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $5,415.51
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[205px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $245,173.02
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[153px] text-green_506 text-left w-[auto]"
                            variant="body69"
                          >
                            $67,234.66
                          </Text>
                          <Button className="border-[1px] border-gray_200 border-solid flex h-[42px] items-center justify-center md:ml-[0] ml-[149px] p-[7px] rounded-[12px] w-[42px]">
                            <Img
                              src="images/img_graph_1.svg"
                              className="h-[28px]"
                              alt="graphOne Six"
                            />
                          </Button>
                        </div>
                        <Line className="bg-blue_60 h-[1px] w-[100%]" />
                      </div>
                    </div>
                    <CheckBox
                      className="absolute font-normal inset-y-[0] leading-[normal] left-[0] my-[auto] not-italic text-[16px] text-bluegray_836 text-left"
                      inputClassName="border-[2px] border-gray_332 border-solid h-[19px] mr-[5px] rounded-[3px] w-[19px]"
                      label="#ADS05125"
                      name="ADS05125"
                    ></CheckBox>
                  </div>
                  <Img
                    src="images/img_user_bluegray_836.svg"
                    className="h-[24px] w-[24px]"
                    alt="user Five"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="h-[74px] relative md:w-[100%] w-[97%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end my-[auto] pt-[16px] right-[0] w-[96%]">
                      <div className="flex flex-col gap-[15px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            26 March 2020, 12:42 AM
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[118px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $4,521.21
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[212px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $5,415.51
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[205px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $245,173.02
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[153px] text-green_506 text-left w-[auto]"
                            variant="body69"
                          >
                            $67,234.66
                          </Text>
                          <Button className="border-[1px] border-gray_200 border-solid flex h-[42px] items-center justify-center md:ml-[0] ml-[149px] p-[7px] rounded-[12px] w-[42px]">
                            <Img
                              src="images/img_graph_1.svg"
                              className="h-[28px]"
                              alt="graphOne Seven"
                            />
                          </Button>
                        </div>
                        <Line className="bg-blue_60 h-[1px] w-[100%]" />
                      </div>
                    </div>
                    <CheckBox
                      className="absolute font-normal inset-y-[0] leading-[normal] left-[0] my-[auto] not-italic text-[16px] text-bluegray_836 text-left"
                      inputClassName="border-[2px] border-gray_332 border-solid h-[19px] mr-[5px] rounded-[3px] w-[19px]"
                      label="#ADS01235"
                      name="ADS01235"
                    ></CheckBox>
                  </div>
                  <Img
                    src="images/img_user_bluegray_836.svg"
                    className="h-[24px] w-[24px]"
                    alt="user Six"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="h-[74px] relative md:w-[100%] w-[97%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end my-[auto] pt-[16px] right-[0] w-[96%]">
                      <div className="flex flex-col gap-[15px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            26 March 2020, 12:42 AM
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[118px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $4,521.21
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[212px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $5,415.51
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[205px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $245,173.02
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[153px] text-green_506 text-left w-[auto]"
                            variant="body69"
                          >
                            $67,234.66
                          </Text>
                          <Button className="border-[1px] border-gray_200 border-solid flex h-[42px] items-center justify-center md:ml-[0] ml-[149px] p-[7px] rounded-[12px] w-[42px]">
                            <Img
                              src="images/img_graph_1.svg"
                              className="h-[28px]"
                              alt="graphOne Eight"
                            />
                          </Button>
                        </div>
                        <Line className="bg-blue_60 h-[1px] w-[100%]" />
                      </div>
                    </div>
                    <CheckBox
                      className="absolute font-normal inset-y-[0] leading-[normal] left-[0] my-[auto] not-italic text-[16px] text-bluegray_836 text-left"
                      inputClassName="border-[2px] border-gray_332 border-solid h-[19px] mr-[5px] rounded-[3px] w-[19px]"
                      label="#ADS01125"
                      name="ADS01125"
                    ></CheckBox>
                  </div>
                  <Img
                    src="images/img_user_bluegray_836.svg"
                    className="h-[24px] w-[24px]"
                    alt="user Seven"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="h-[74px] relative md:w-[100%] w-[97%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end my-[auto] pt-[16px] right-[0] w-[96%]">
                      <div className="flex flex-col gap-[15px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            26 March 2020, 12:42 AM
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[118px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $4,521.21
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[212px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $5,415.51
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[205px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $245,173.02
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[153px] text-green_506 text-left w-[auto]"
                            variant="body69"
                          >
                            $67,234.66
                          </Text>
                          <Button className="border-[1px] border-gray_200 border-solid flex h-[42px] items-center justify-center md:ml-[0] ml-[149px] p-[7px] rounded-[12px] w-[42px]">
                            <Img
                              src="images/img_graph_1.svg"
                              className="h-[28px]"
                              alt="graphOne Nine"
                            />
                          </Button>
                        </div>
                        <Line className="bg-blue_60 h-[1px] w-[100%]" />
                      </div>
                    </div>
                    <CheckBox
                      className="absolute font-normal inset-y-[0] leading-[normal] left-[0] my-[auto] not-italic text-[16px] text-bluegray_836 text-left"
                      inputClassName="border-[2px] border-gray_332 border-solid h-[19px] mr-[5px] rounded-[3px] w-[19px]"
                      label="#ADS01231"
                      name="ADS01231 One"
                    ></CheckBox>
                  </div>
                  <Img
                    src="images/img_user_bluegray_836.svg"
                    className="h-[24px] w-[24px]"
                    alt="user Eight"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="h-[74px] relative md:w-[100%] w-[97%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end my-[auto] pt-[16px] right-[0] w-[96%]">
                      <div className="flex flex-col gap-[15px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            26 March 2020, 12:42 AM
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[118px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $4,521.21
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[212px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $5,415.51
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[205px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $245,173.02
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[153px] text-green_506 text-left w-[auto]"
                            variant="body69"
                          >
                            $67,234.66
                          </Text>
                          <Button className="border-[1px] border-gray_200 border-solid flex h-[42px] items-center justify-center md:ml-[0] ml-[149px] p-[7px] rounded-[12px] w-[42px]">
                            <Img
                              src="images/img_graph_1.svg"
                              className="h-[28px]"
                              alt="graphOne Ten"
                            />
                          </Button>
                        </div>
                        <Line className="bg-blue_60 h-[1px] w-[100%]" />
                      </div>
                    </div>
                    <CheckBox
                      className="absolute font-normal inset-y-[0] leading-[normal] left-[0] my-[auto] not-italic text-[16px] text-bluegray_836 text-left"
                      inputClassName="border-[2px] border-gray_332 border-solid h-[19px] mr-[5px] rounded-[3px] w-[19px]"
                      label="#ADS01231"
                      name="ADS01231 Two"
                    ></CheckBox>
                  </div>
                  <Img
                    src="images/img_user_bluegray_836.svg"
                    className="h-[24px] w-[24px]"
                    alt="user Nine"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="h-[74px] relative md:w-[100%] w-[97%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end my-[auto] pt-[16px] right-[0] w-[96%]">
                      <div className="flex flex-col gap-[15px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end ml-[auto] md:w-[100%] w-[89%]">
                          <Text
                            className="font-normal md:mt-[0] mt-[3px] not-italic text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            26 March 2020, 12:42 AM
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[118px] md:mt-[0] mt-[2px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $4,521.21
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[212px] md:mt-[0] mt-[2px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $5,415.51
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[205px] md:mt-[0] mt-[2px] text-bluegray_836 text-left w-[auto]"
                            variant="body69"
                          >
                            $245,173.02
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[153px] md:mt-[0] mt-[2px] text-green_506 text-left w-[auto]"
                            variant="body69"
                          >
                            $67,234.66
                          </Text>
                          <Button className="border-[1px] border-gray_200 border-solid flex h-[42px] items-center justify-center md:ml-[0] ml-[149px] p-[7px] rounded-[12px] w-[42px]">
                            <Img
                              src="images/img_graph_1.svg"
                              className="h-[28px]"
                              alt="graphOne Eleven"
                            />
                          </Button>
                        </div>
                        <Line className="bg-blue_60 h-[1px] w-[100%]" />
                      </div>
                    </div>
                    <CheckBox
                      className="absolute font-normal leading-[normal] left-[0] not-italic text-[16px] text-bluegray_836 text-left top-[26%]"
                      inputClassName="border-[2px] border-gray_332 border-solid h-[19px] mr-[5px] rounded-[3px] w-[19px]"
                      label="#ADS01231"
                      name="ADS01231 Three"
                    ></CheckBox>
                  </div>
                  <Img
                    src="images/img_user_bluegray_836.svg"
                    className="h-[24px] w-[24px]"
                    alt="user Ten"
                  />
                </div>
              </List>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[62px] w-[100%]">
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
            <div className="bg-white_A700 flex flex-col items-center justify-start mb-[340px] pb-[436px] w-[90%]">
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
                src="images/img_menus_white_a700_597x105.svg"
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
                className="absolute h-[16px] inset-x-[0] mx-[auto] top-[40%] w-[16px]"
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

export default SpendingListTablePage;
