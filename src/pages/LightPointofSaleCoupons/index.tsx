import React from "react";

import { Text, Button, Input, Img, List, Line, Switch } from "components";
import { CloseSVG } from "../../assets/images";

const LightPointofSaleCouponsPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_72 flex font-mulish h-[737px] justify-end mx-[auto] pr-[180px] sm:pr-[20px] md:pr-[40px] relative w-[100%]">
        <div className="flex flex-col gap-[32px] h-[100%] items-center justify-end ml-[144px] mt-[auto] w-[79%]">
          <div className="flex flex-row md:gap-[40px] items-end justify-between w-[100%]">
            <Text
              className="font-bold mt-[7px] text-gray_981 text-left tracking-[0.12px] w-[auto]"
              variant="body48"
            >
              Coupon
            </Text>
            <Button className="bg-deep_purple_503 cursor-pointer font-bold min-w-[139px] sm:px-[20px] px-[24px] py-[11px] rounded-[8px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[auto]">
              Create New
            </Button>
          </div>
          <div className="bg-white_A700 flex items-center justify-start p-[16px] rounded-[8px] w-[100%]">
            <div className="flex flex-col gap-[16px] items-center justify-start mb-[15px] mt-[8px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_340 text-bluegray_340 text-left tracking-[0.11px] w-[100%]"
                  wrapClassName="bg-gray_72 flex gap-[10px] max-w-[1120px] px-[16px] py-[8px] rounded-[8px] w-[100%]"
                  name="TextInput"
                  placeholder="Search Here..."
                  prefix={
                    <Img
                      src="images/img_search_bluegray_340.svg"
                      className="cursor-pointer mr-[8px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#9a9ab0"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <Img
                  src="images/img_menu_bluegray_340.svg"
                  className="h-[40px] w-[40px]"
                  alt="menu"
                />
                <Img
                  src="images/img_overflowmenu_bluegray_340.svg"
                  className="h-[40px] w-[40px]"
                  alt="overflowmenu"
                />
              </div>
              <div className="h-[519px] md:h-[NaNpx] relative w-[100%]">
                <List
                  className="absolute flex-col gap-[1px] grid inset-[0] items-center justify-center m-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                    <div className="h-[64px] relative w-[100%]">
                      <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                          <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[67px]">
                            <Text
                              className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              ID
                            </Text>
                          </div>
                          <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[258px]">
                            <Text
                              className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              Code
                            </Text>
                          </div>
                          <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[168px]">
                            <Text
                              className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              Discount
                            </Text>
                          </div>
                          <List
                            className="md:flex-1 sm:flex-col flex-row gap-[1px] grid grid-cols-2 md:w-[100%] w-[33%]"
                            orientation="horizontal"
                          >
                            <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:ml-[0] sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[198px]">
                              <Text
                                className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                                variant="body69"
                              >
                                Start Date
                              </Text>
                            </div>
                            <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:ml-[0] sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[198px]">
                              <Text
                                className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                                variant="body69"
                              >
                                End Date
                              </Text>
                            </div>
                          </List>
                          <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[187px]">
                            <Text
                              className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              Activate
                            </Text>
                          </div>
                          <div className="bg-gray_72 h-[64px] sm:px-[20px] px-[22px] py-[20px] w-[13%]"></div>
                        </div>
                      </div>
                      <Line className="absolute bg-indigo_56 h-[1px] inset-x-[0] mx-[auto] top-[0] w-[100%]" />
                    </div>
                    <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                        <div className="bg-white_A700 flex items-center justify-center px-[16px] py-[18px] w-[67px]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            01
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[258px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              20% Off Entire Order
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[168px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              20%
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 14 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 17 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[187px]">
                          <Switch
                            onColor="#2c95ee"
                            offColor="#e2e2ea"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={true}
                            className="w-[41%]"
                          />
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[156px]">
                          <div className="flex h-[100%] items-center justify-end w-[100%]">
                            <Img
                              src="images/img_overflowmenu_bluegray_340.svg"
                              className="h-[24px] w-[24px]"
                              alt="overflowmenu One"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                        <Button className="bg-white_A700 cursor-pointer font-normal not-italic px-[16px] py-[18px] text-[16px] text-center text-gray_981 tracking-[0.08px] w-[67px]">
                          02
                        </Button>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[258px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              10% Off Entire Item
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[168px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              10%
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 14 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 17 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[187px]">
                          <Switch
                            onColor="#2c95ee"
                            offColor="#e2e2ea"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={false}
                            className="w-[41%]"
                          />
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[156px]">
                          <div className="flex h-[100%] items-center justify-end w-[100%]">
                            <Img
                              src="images/img_overflowmenu_bluegray_340.svg"
                              className="h-[24px] w-[24px]"
                              alt="overflowmenu Two"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                        <Button className="bg-white_A700 cursor-pointer font-normal not-italic px-[16px] py-[18px] text-[16px] text-center text-gray_981 tracking-[0.08px] w-[67px]">
                          03
                        </Button>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[258px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              50% Off Entire Order
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[168px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              50%
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 14 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 17 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[187px]">
                          <Switch
                            onColor="#2c95ee"
                            offColor="#e2e2ea"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={false}
                            className="w-[41%]"
                          />
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[156px]">
                          <div className="flex h-[100%] items-center justify-end w-[100%]">
                            <Img
                              src="images/img_overflowmenu_bluegray_340.svg"
                              className="h-[24px] w-[24px]"
                              alt="overflowmenu Three"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                        <Button className="bg-white_A700 cursor-pointer font-normal not-italic px-[16px] py-[18px] text-[16px] text-center text-gray_981 tracking-[0.08px] w-[67px]">
                          04
                        </Button>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[258px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              10% Off Entire Order
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[168px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              10%
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 14 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 17 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[187px]">
                          <Switch
                            onColor="#2c95ee"
                            offColor="#e2e2ea"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={false}
                            className="w-[41%]"
                          />
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[156px]">
                          <div className="flex h-[100%] items-center justify-end w-[100%]">
                            <Img
                              src="images/img_overflowmenu_bluegray_340.svg"
                              className="h-[24px] w-[24px]"
                              alt="overflowmenu Four"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                        <Button className="bg-white_A700 cursor-pointer font-normal not-italic px-[16px] py-[18px] text-[16px] text-center text-gray_981 tracking-[0.08px] w-[67px]">
                          05
                        </Button>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[258px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              60% Off Entire Item
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[168px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              60%
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 14 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 17 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[187px]">
                          <Switch
                            onColor="#2c95ee"
                            offColor="#e2e2ea"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={true}
                            className="w-[41%]"
                          />
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[156px]">
                          <div className="flex h-[100%] items-center justify-end w-[100%]">
                            <Img
                              src="images/img_overflowmenu_bluegray_340.svg"
                              className="h-[24px] w-[24px]"
                              alt="overflowmenu Five"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                        <Button className="bg-white_A700 cursor-pointer font-normal not-italic px-[16px] py-[18px] text-[16px] text-center text-gray_981 tracking-[0.08px] w-[67px]">
                          06
                        </Button>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[258px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              70% Off Entire Item
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[168px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              70%
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 14 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 17 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[187px]">
                          <Switch
                            onColor="#2c95ee"
                            offColor="#e2e2ea"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={true}
                            className="w-[41%]"
                          />
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[156px]">
                          <div className="flex h-[100%] items-center justify-end w-[100%]">
                            <Img
                              src="images/img_overflowmenu_bluegray_340.svg"
                              className="h-[24px] w-[24px]"
                              alt="overflowmenu Six"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                        <Button className="bg-white_A700 cursor-pointer font-normal not-italic px-[16px] py-[18px] text-[16px] text-center text-gray_981 tracking-[0.08px] w-[67px]">
                          07
                        </Button>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[258px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              20% Off Entire Order
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[168px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              20%
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 14 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 17 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[187px]">
                          <Switch
                            onColor="#2c95ee"
                            offColor="#e2e2ea"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={true}
                            className="w-[41%]"
                          />
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[156px]">
                          <div className="flex h-[100%] items-center justify-end w-[100%]">
                            <Img
                              src="images/img_overflowmenu_bluegray_340.svg"
                              className="h-[24px] w-[24px]"
                              alt="overflowmenu Seven"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                        <Button className="bg-white_A700 cursor-pointer font-normal not-italic px-[16px] py-[18px] text-[16px] text-center text-gray_981 tracking-[0.08px] w-[67px]">
                          08
                        </Button>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[258px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              20% Off Entire Order
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[168px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              20%
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 14 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[198px]">
                          <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              February 17 2021
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[187px]">
                          <Switch
                            onColor="#2c95ee"
                            offColor="#e2e2ea"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={true}
                            className="w-[41%]"
                          />
                        </div>
                        <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[156px]">
                          <div className="flex h-[100%] items-center justify-end w-[100%]">
                            <Img
                              src="images/img_overflowmenu_bluegray_340.svg"
                              className="h-[24px] w-[24px]"
                              alt="overflowmenu Eight"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex left-[0] md:w-[100%] w-[89%]">
          <aside className="flex flex-col md:hidden justify-start my-[auto] w-[8%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-row items-end justify-evenly w-[100%]">
                <div className="bg-white_A700 flex flex-1 flex-col gap-[40px] items-center justify-center p-[28px] sm:px-[20px] w-[100%]">
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
                  </div>
                  <div className="flex h-[56px] items-center justify-start w-[56px]">
                    <Button className="bg-deep_purple_503 flex h-[56px] items-center justify-center p-[16px] rounded-[8px] w-[56px]">
                      <Img
                        src="images/img_computer_white_a700_56x56.svg"
                        className="h-[24px]"
                        alt="computer"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[171px] md:gap-[40px] items-center justify-start mb-[80px] md:w-[100%] w-[43%]">
                    <div className="flex h-[24px] items-center justify-start w-[24px]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <Img
                          src="images/img_user_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_search_bluegray_340_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="search One"
                    />
                  </div>
                </div>
                <Line className="bg-gray_332 h-[809px] mt-[54px] w-[1px]" />
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
        </div>
      </div>
    </>
  );
};

export default LightPointofSaleCouponsPage;
