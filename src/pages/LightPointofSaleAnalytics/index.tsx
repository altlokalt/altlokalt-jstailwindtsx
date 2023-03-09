import React from "react";

import { List, Text, Img, SelectBox, Line, Button } from "components";

const LightPointofSaleAnalyticsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_72 flex font-mulish h-[1338px] justify-end mx-[auto] pr-[180px] sm:pr-[20px] md:pr-[40px] relative w-[100%]">
        <div className="flex flex-col h-[100%] items-center justify-end ml-[144px] mt-[auto] w-[79%]">
          <List
            className="sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] p-[16px] rounded-[8px] w-[100%]">
              <div className="flex flex-col gap-[14px] items-center justify-start my-[6px] w-[100%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Customer
                  </Text>
                  <div className="flex h-[16px] items-center justify-start w-[16px]">
                    <Img
                      src="images/img_arrowdown_red_431.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    1000
                  </Text>
                  <Text
                    className="font-bold text-red_431 text-right tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    -15%
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] p-[16px] rounded-[8px] w-[100%]">
              <div className="flex flex-col gap-[14px] items-center justify-start my-[6px] w-[100%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Orders
                  </Text>
                  <div className="flex h-[16px] items-center justify-start w-[16px]">
                    <Img
                      src="images/img_arrowdown_teal_308.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown One"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    1050
                  </Text>
                  <Text
                    className="font-bold text-right text-teal_308 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    +20%
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] p-[16px] rounded-[8px] w-[100%]">
              <div className="flex flex-col gap-[13px] items-center justify-start my-[6px] w-[100%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Revenue
                  </Text>
                  <div className="flex h-[16px] items-center justify-start w-[16px]">
                    <Img
                      src="images/img_arrowdown_teal_308.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown Two"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    $50.000
                  </Text>
                  <Text
                    className="font-bold text-right text-teal_308 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    +10%
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] p-[16px] rounded-[8px] w-[100%]">
              <div className="flex flex-col gap-[14px] items-center justify-start my-[6px] w-[100%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Nett Profit
                  </Text>
                  <div className="flex h-[16px] items-center justify-start w-[16px]">
                    <Img
                      src="images/img_arrowdown_teal_308.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown Three"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    $12.000
                  </Text>
                  <Text
                    className="font-bold text-right text-teal_308 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    +12%
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between mt-[40px] w-[100%]">
            <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[16px] rounded-[8px] md:w-[100%] w-[66%]">
              <div className="flex flex-col items-center justify-start mb-[15px] mt-[8px] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Earning
                  </Text>
                  <SelectBox
                    className="md:flex-1 font-bold md:ml-[0] ml-[515px] outline outline-[1px] outline-deep_purple_503 sm:px-[20px] px-[24px] py-[8px] rounded-[8px] text-[16px] text-deep_purple_503 text-left tracking-[0.08px] md:w-[100%] w-[22%]"
                    placeholderClassName="text-deep_purple_503"
                    name="Button"
                    placeholder="Weekly"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_deep_purple_503.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Img
                    src="images/img_overflowmenu_bluegray_340.svg"
                    className="h-[40px] md:ml-[0] ml-[16px] w-[40px]"
                    alt="overflowmenu"
                  />
                </div>
                <Line className="bg-indigo_56 h-[1px] mt-[16px] w-[100%]" />
                <div className="md:h-[1025px] h-[475px] sm:h-[588px] mt-[22px] relative w-[100%]">
                  <div className="absolute bottom-[0] md:h-[1003px] h-[428px] sm:h-[566px] inset-x-[0] mx-[auto] md:w-[100%] w-[98%]">
                    <div className="absolute flex flex-col gap-[32px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-gray_554 text-right tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          $50.000
                        </Text>
                        <Line className="bg-indigo_56 h-[1px] sm:mt-[0] my-[8px] w-[90%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-gray_554 text-right tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          $45.000
                        </Text>
                        <Line className="bg-indigo_56 h-[1px] sm:mt-[0] my-[8px] w-[90%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-gray_554 text-right tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          $40.000
                        </Text>
                        <Line className="bg-indigo_56 h-[1px] sm:mt-[0] my-[8px] w-[90%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-gray_554 text-right tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          $35.000
                        </Text>
                        <Line className="bg-indigo_56 h-[1px] sm:mt-[0] my-[8px] w-[90%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-gray_554 text-right tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          $20.000
                        </Text>
                        <Line className="bg-indigo_56 h-[1px] sm:mt-[0] my-[8px] w-[90%]" />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-gray_554 text-right tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          $10.000
                        </Text>
                        <Line className="bg-indigo_56 h-[1px] sm:mt-[0] my-[8px] w-[90%]" />
                      </div>
                      <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between md:ml-[0] ml-[9px] md:w-[100%] w-[99%]">
                        <Text
                          className="font-semibold text-gray_554 text-right tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          $5.000
                        </Text>
                        <Line className="bg-indigo_56 h-[1px] md:mt-[0] my-[8px] w-[91%]" />
                      </div>
                      <div className="flex md:flex-col flex-row gap-[24px] items-center justify-end ml-[auto] md:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold text-gray_554 text-right tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          $0
                        </Text>
                        <Line className="bg-indigo_56 h-[1px] md:mt-[0] my-[8px] w-[95%]" />
                      </div>
                    </div>
                    <div className="absolute flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-y-[0] items-end justify-start my-[auto] right-[4%] w-[81%]">
                      <div className="flex flex-col gap-[16px] items-center justify-start md:mt-[0] mt-[341px] md:w-[100%] w-[5%]">
                        <div className="bg-indigo_307 h-[53px] rounded-[4px] w-[62%]"></div>
                        <Text
                          className="font-normal not-italic text-center text-gray_554 tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          Sun
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[16px] items-center justify-start md:ml-[0] ml-[76px] md:mt-[0] mt-[320px] md:w-[100%] w-[5%]">
                        <div className="bg-indigo_307 h-[74px] rounded-[4px] w-[56%]"></div>
                        <Text
                          className="font-normal not-italic text-center text-gray_554 tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          Mon
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[16px] items-center justify-start md:ml-[0] ml-[76px] md:mt-[0] mt-[250px] md:w-[100%] w-[4%]">
                        <div className="bg-indigo_307 h-[144px] rounded-[4px] w-[67%]"></div>
                        <Text
                          className="font-normal not-italic text-center text-gray_554 tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          Tue
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[15px] items-center justify-start md:ml-[0] ml-[76px] md:mt-[0] mt-[325px] md:w-[100%] w-[6%]">
                        <div className="bg-indigo_307 h-[69px] rounded-[4px] w-[50%]"></div>
                        <Text
                          className="font-normal not-italic text-center text-gray_554 tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          Wed
                        </Text>
                      </div>
                      <div className="md:h-[360px] sm:h-[422px] h-[428px] md:ml-[0] ml-[75px] relative md:w-[100%] w-[27%]">
                        <div className="absolute bottom-[0] flex flex-col gap-[15px] items-start justify-start right-[28%] w-[11%]">
                          <div className="bg-indigo_307 h-[170px] rounded-[4px] w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-center text-gray_554 tracking-[0.11px] w-[auto]"
                            variant="body78"
                          >
                            Fri
                          </Text>
                        </div>
                        <div className="absolute flex flex-col gap-[102px] md:gap-[40px] h-[100%] inset-[0] justify-center m-[auto] w-[100%]">
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[37px] md:w-[100%] w-[78%]">
                            <Text
                              className="font-bold text-center text-gray_981 tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              $34.000
                            </Text>
                            <div className="md:h-[63px] h-[66px] mt-[2px] relative w-[100%]">
                              <Img
                                src="images/img_container.svg"
                                className="absolute bottom-[0] h-[61px] inset-x-[0] mx-[auto] w-[auto]"
                                alt="Container"
                              />
                              <Text
                                className="absolute font-normal inset-x-[0] mx-[auto] not-italic text-center text-gray_554 top-[0] tracking-[0.11px] w-[max-content]"
                                variant="body78"
                              >
                                50 Order
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[15px] items-end justify-start md:w-[100%] w-[16%]">
                            <div className="bg-deep_purple_503 h-[203px] mr-[4px] rounded-[4px] w-[62%]"></div>
                            <Text
                              className="font-semibold text-center text-gray_981 tracking-[0.11px] w-[auto]"
                              variant="body78"
                            >
                              Thu
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[16px] items-start justify-start md:ml-[0] ml-[28px] md:mt-[0] mt-[360px] md:w-[100%] w-[4%]">
                        <div className="bg-indigo_307 h-[34px] md:ml-[0] ml-[4px] rounded-[4px] w-[70%]"></div>
                        <Text
                          className="font-normal not-italic text-center text-gray_554 tracking-[0.11px] w-[auto]"
                          variant="body78"
                        >
                          Sat
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[5px] items-end justify-start right-[0] top-[0] w-[auto]">
                    <Text
                      className="font-bold text-gray_981 text-right tracking-[0.12px] w-[auto]"
                      variant="body48"
                    >
                      1050
                    </Text>
                    <Text
                      className="font-semibold text-gray_554 text-right tracking-[0.11px] w-[auto]"
                      variant="body78"
                    >
                      Total Order
                    </Text>
                  </div>
                  <div className="absolute flex flex-col gap-[7px] items-start justify-start left-[0] top-[0] w-[auto]">
                    <Text
                      className="font-bold text-gray_981 text-left tracking-[0.12px] w-[auto]"
                      variant="body48"
                    >
                      $50.000
                    </Text>
                    <Text
                      className="font-semibold text-gray_554 text-left tracking-[0.11px] w-[auto]"
                      variant="body78"
                    >
                      Earning Overtime
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex md:flex-1 items-center justify-end p-[4px] rounded-[8px] md:w-[100%] w-[32%]">
              <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-between mb-[12px] mt-[20px] md:w-[100%] w-[97%]">
                <div className="flex flex-col items-center justify-start mb-[27px] sm:w-[100%] w-[97%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Item Sold
                    </Text>
                    <SelectBox
                      className="font-bold outline outline-[1px] outline-deep_purple_503 sm:px-[20px] px-[24px] py-[8px] rounded-[8px] text-[16px] text-deep_purple_503 text-left tracking-[0.08px] w-[auto]"
                      placeholderClassName="text-deep_purple_503"
                      name="Button One"
                      placeholder="Best Sellers"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_deep_purple_503.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <Line className="bg-indigo_56 h-[1px] mt-[16px] w-[100%]" />
                  <div className="flex flex-row items-center justify-start mt-[23px] md:w-[100%] w-[98%]">
                    <div className="bg-gray_335 h-[64px] rounded-[8px] w-[64px]"></div>
                    <Text
                      className="font-bold ml-[24px] text-gray_981 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Sashimi
                    </Text>
                    <Text
                      className="font-bold ml-[134px] text-gray_554 text-right tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      430 Items
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] w-[98%]">
                    <div className="bg-gray_335 h-[64px] rounded-[8px] w-[64px]"></div>
                    <Text
                      className="font-bold ml-[24px] text-gray_981 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Unagi - Grilled Eel
                    </Text>
                    <Text
                      className="font-bold ml-[57px] text-gray_554 text-right tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      200 Items
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] w-[98%]">
                    <div className="bg-gray_335 h-[64px] rounded-[8px] w-[64px]"></div>
                    <Text
                      className="font-bold leading-[120.00%] ml-[24px] text-gray_981 text-left tracking-[0.08px] sm:w-[100%] w-[42%]"
                      variant="body69"
                    >
                      Soba - Buckwheat Noodles
                    </Text>
                    <Text
                      className="font-bold ml-[46px] text-gray_554 text-right tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      180 Items
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] w-[98%]">
                    <div className="bg-gray_335 h-[64px] rounded-[8px] w-[64px]"></div>
                    <Text
                      className="font-bold ml-[24px] text-gray_981 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Onigiri - Rice Balls
                    </Text>
                    <Text
                      className="font-bold ml-[54px] text-gray_554 text-right tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      120 Items
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] w-[98%]">
                    <div className="bg-gray_335 h-[64px] rounded-[8px] w-[64px]"></div>
                    <Text
                      className="font-bold leading-[120.00%] ml-[24px] text-gray_981 text-left tracking-[0.08px] sm:w-[100%] w-[42%]"
                      variant="body69"
                    >
                      Yakitori - Grilled Chicken
                    </Text>
                    <Text
                      className="font-bold ml-[55px] text-gray_554 text-right tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      80 Items
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] md:w-[100%] w-[98%]">
                    <div className="bg-gray_335 h-[64px] rounded-[8px] w-[64px]"></div>
                    <Text
                      className="font-bold ml-[24px] text-gray_981 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Royal Milk Tea
                    </Text>
                    <Text
                      className="font-bold ml-[94px] text-gray_554 text-right tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      70 Items
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex h-[491px] items-center justify-start sm:mt-[0] mt-[80px] pb-[363px] sm:w-[100%] w-[2%]"
                  style={{ backgroundImage: "url('images/img_scroll.svg')" }}
                >
                  <Img
                    src="images/img_scrollbars.svg"
                    className="h-[128px] w-[auto]"
                    alt="ScrollBars"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex items-center justify-start mt-[32px] p-[16px] rounded-[8px] w-[100%]">
            <div className="flex flex-col gap-[16px] items-center justify-start my-[7px] w-[100%]">
              <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Latest Order
                </Text>
                <Img
                  src="images/img_overflowmenu_bluegray_340.svg"
                  className="h-[40px] w-[40px]"
                  alt="overflowmenu One"
                />
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <List
                  className="flex-col gap-[1px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                    <div className="h-[64px] relative w-[100%]">
                      <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                          <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:pl-[20px] pl-[22px] pr-[19px] py-[20px] w-[auto]">
                            <Text
                              className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              No.
                            </Text>
                          </div>
                          <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[258px]">
                            <Text
                              className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              Item
                            </Text>
                          </div>
                          <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[130px]">
                            <Text
                              className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                              variant="body69"
                            >
                              Quality
                            </Text>
                          </div>
                          <List
                            className="md:flex-1 sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[48%]"
                            orientation="horizontal"
                          >
                            <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:ml-[0] sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[194px]">
                              <Text
                                className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                                variant="body69"
                              >
                                Date
                              </Text>
                            </div>
                            <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:ml-[0] sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[194px]">
                              <Text
                                className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                                variant="body69"
                              >
                                Revenue
                              </Text>
                            </div>
                            <div className="bg-gray_72 flex h-[64px] md:h-[auto] items-start justify-center sm:ml-[0] sm:pl-[20px] pl-[22px] pr-[16px] py-[20px] w-[194px]">
                              <Text
                                className="font-bold text-gray_900_a2 text-left tracking-[0.08px] w-[auto]"
                                variant="body69"
                              >
                                Net Profit
                              </Text>
                            </div>
                          </List>
                          <div className="bg-gray_72 h-[64px] sm:px-[20px] px-[22px] py-[20px] w-[16%]"></div>
                        </div>
                      </div>
                      <Line className="absolute bg-indigo_56 h-[1px] inset-x-[0] mx-[auto] top-[0] w-[100%]" />
                    </div>
                    <Line className="bg-indigo_56 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
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
                            Sashimi
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[130px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[20px]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            30
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            February 14 2021
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $293.01
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $710.68
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[195px]">
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
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
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
                            Unagi - Grilled Eel
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[130px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[20px]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            30
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            February 14 2021
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $739.65
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $779.58
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[195px]">
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
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
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
                            Soba - Buckwheat Noodles
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[130px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[20px]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            30
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            February 14 2021
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $779.58
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $105.55
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[195px]">
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
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                      <div className="bg-white_A700 flex items-center justify-center px-[16px] py-[18px] w-[67px]">
                        <Text
                          className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          04
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[258px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Onigiri - Rice Balls
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[130px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[20px]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            30
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            February 14 2021
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $589.99
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $475.22
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[195px]">
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
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                      <div className="bg-white_A700 flex items-center justify-center px-[16px] py-[18px] w-[67px]">
                        <Text
                          className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          05
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[258px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Sashimi
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[130px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[20px]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            30
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            February 14 2021
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $406.27
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $767.50
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[195px]">
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
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
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
                            Yakitori - Grilled Chicken
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[130px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[20px]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            30
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            February 14 2021
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $396.84
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $948.55
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[195px]">
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
                  <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
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
                            Royal Milk Tea
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[130px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[20px]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            30
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            February 14 2021
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $767.50
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $106.58
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[195px]">
                        <div className="flex h-[100%] items-center justify-end w-[100%]">
                          <Img
                            src="images/img_overflowmenu_bluegray_340.svg"
                            className="h-[24px] w-[24px]"
                            alt="overflowmenu Eight"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start my-[0] w-[100%]">
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
                            Flavored Soymilk Drinks
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[130px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[20px]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            30
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            February 14 2021
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $778.35
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start sm:pl-[20px] pl-[22px] pr-[16px] py-[18px] w-[194px]">
                        <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            $778.35
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start px-[20px] py-[16px] w-[195px]">
                        <div className="flex h-[100%] items-center justify-end w-[100%]">
                          <Img
                            src="images/img_overflowmenu_bluegray_340.svg"
                            className="h-[24px] w-[24px]"
                            alt="overflowmenu Nine"
                          />
                        </div>
                      </div>
                    </div>
                    <Line className="bg-indigo_56 h-[1px] w-[100%]" />
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
                  <div className="flex h-[24px] items-center justify-start mt-[108px] w-[24px]">
                    <div className="flex h-[24px] items-center justify-start w-[24px]">
                      <Img
                        src="images/img_grid_bluegray_340.svg"
                        className="h-[24px] w-[24px]"
                        alt="grid"
                      />
                    </div>
                  </div>
                  <div className="flex h-[56px] items-center justify-start w-[56px]">
                    <Button className="bg-deep_purple_503 flex h-[56px] items-center justify-center p-[16px] rounded-[8px] w-[56px]">
                      <Img
                        src="images/img_chartstatistics_white_a700.svg"
                        className="h-[24px]"
                        alt="ChartStatistics"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[80px] md:w-[100%] w-[43%]">
                    <Img
                      src="images/img_music_bluegray_340.svg"
                      className="h-[24px] w-[24px]"
                      alt="music"
                    />
                    <div className="flex h-[24px] items-center justify-start mt-[56px] w-[24px]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <Img
                          src="images/img_file_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="file"
                        />
                      </div>
                    </div>
                    <div className="flex h-[24px] items-center justify-start mt-[56px] w-[24px]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <Img
                          src="images/img_computer_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="computer"
                        />
                      </div>
                    </div>
                    <div className="flex h-[24px] items-center justify-start mt-[56px] w-[24px]">
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
                      className="h-[24px] mt-[875px] w-[24px]"
                      alt="search"
                    />
                  </div>
                </div>
                <Line className="bg-gray_332 h-[1487px] mt-[80px] w-[1px]" />
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

export default LightPointofSaleAnalyticsPage;
