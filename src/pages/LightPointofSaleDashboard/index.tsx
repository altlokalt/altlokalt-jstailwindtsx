import React from "react";

import { Input, Img, Text, Line, List, Button, SelectBox } from "components";
import { CloseSVG } from "../../assets/images";

const LightPointofSaleDashboardPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_72 flex font-mulish h-[1098px] justify-end mx-[auto] pr-[181px] sm:pr-[20px] md:pr-[40px] relative w-[100%]">
        <div className="flex md:flex-col flex-row gap-[32px] h-[100%] items-start justify-start ml-[144px] mt-[auto] w-[78%]">
          <div className="bg-white_A700 flex items-center justify-start py-[24px] rounded-[8px] md:w-[100%] w-[66%]">
            <div className="flex flex-col items-center justify-start mb-[8px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_340 text-bluegray_340 text-left tracking-[0.11px] w-[100%]"
                wrapClassName="bg-gray_72 flex gap-[10px] max-w-[800px] px-[16px] py-[8px] rounded-[8px] w-[100%]"
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
              <div className="h-[39px] md:h-[66px] mt-[31px] relative w-[100%]">
                <div className="flex flex-row h-[100%] items-start justify-between ml-[auto] mr-[48px] w-[67%]">
                  <Text
                    className="font-bold text-center text-gray_554 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Food
                  </Text>
                  <Text
                    className="font-bold text-center text-gray_554 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Drinks
                  </Text>
                  <Text
                    className="font-bold text-center text-gray_554 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Snack
                  </Text>
                  <Text
                    className="font-bold text-center text-gray_554 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Packages
                  </Text>
                </div>
                <div className="absolute h-[39px] inset-[0] justify-center m-[auto] w-[100%]">
                  <div className="flex flex-col gap-[14px] items-center justify-start mb-[-4px] mt-[auto] w-[20%] z-[1]">
                    <Text
                      className="font-bold h-[21px] text-center text-gray_981 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      All
                    </Text>
                    <Line className="bg-deep_purple_503 h-[4px] w-[100%]" />
                  </div>
                  <Line className="bg-deep_purple_105 h-[4px] mt-[auto] mx-[auto] w-[100%]" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[39px] md:w-[100%] w-[97%]">
                <Text
                  className="font-bold text-gray_981 text-left tracking-[0.07px] w-[auto]"
                  variant="body48"
                >
                  Food
                </Text>
                <div className="gap-[16px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[22px] w-[100%]">
                  <div className="bg-white_A700 border-[1px] border-deep_purple_105 border-solid flex flex-1 flex-col gap-[15px] justify-start p-[8px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_335 h-[166px] rounded-[8px] w-[100%]"></div>
                    <div className="flex flex-col gap-[6px] items-start justify-start mb-[6px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Sashimi
                      </Text>
                      <Text
                        className="font-bold text-left text-teal_308 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        $22
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-[1px] border-deep_purple_503 border-solid flex flex-1 flex-col gap-[17px] justify-start p-[8px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_335 h-[166px] rounded-[8px] w-[100%]"></div>
                    <div className="flex flex-col items-start justify-start mb-[6px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Unagi - Grilled Eel
                      </Text>
                      <Text
                        className="font-bold mt-[4px] text-left text-teal_308 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        $22
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-[1px] border-deep_purple_503 border-solid flex flex-1 flex-col gap-[15px] justify-start p-[8px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_335 h-[166px] rounded-[8px] w-[100%]"></div>
                    <div className="flex flex-col gap-[6px] items-start justify-start mb-[6px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Soba - Buckwheat Noodles
                      </Text>
                      <Text
                        className="font-bold text-left text-teal_308 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        $22
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-[1px] border-deep_purple_105 border-solid flex flex-1 flex-col gap-[17px] justify-start p-[8px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_335 h-[166px] rounded-[8px] w-[100%]"></div>
                    <div className="flex flex-col items-start justify-start mb-[6px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Onigiri - Rice Balls
                      </Text>
                      <Text
                        className="font-bold mt-[4px] text-left text-teal_308 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        $22
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-[1px] border-deep_purple_503 border-solid flex flex-1 flex-col gap-[15px] justify-start p-[8px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_335 h-[166px] rounded-[8px] w-[100%]"></div>
                    <div className="flex flex-col gap-[6px] items-start justify-start mb-[6px] md:ml-[0] ml-[7px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Yakitori - Grilled Chicken
                      </Text>
                      <Text
                        className="font-bold text-left text-teal_308 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        $22
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-[1px] border-deep_purple_105 border-solid flex flex-1 flex-col gap-[17px] justify-start p-[8px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_335 h-[166px] rounded-[8px] w-[100%]"></div>
                    <div className="flex flex-col items-start justify-start mb-[6px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Miso Soup
                      </Text>
                      <Text
                        className="font-bold mt-[4px] text-left text-teal_308 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        $22
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-bold mt-[31px] text-gray_981 text-left tracking-[0.07px] w-[auto]"
                  variant="body48"
                >
                  Drinks
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[22px] w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 border-[1px] border-deep_purple_105 border-solid flex flex-1 flex-col gap-[16px] items-center justify-start p-[8px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_335 h-[166px] rounded-[8px] w-[100%]"></div>
                    <div className="flex flex-col gap-[8px] items-start justify-start mb-[8px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Amazake
                      </Text>
                      <Text
                        className="font-bold text-left text-teal_308 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        $22
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-[1px] border-deep_purple_105 border-solid flex flex-1 flex-col gap-[16px] items-center justify-start p-[8px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_335 h-[166px] rounded-[8px] w-[100%]"></div>
                    <div className="flex flex-col gap-[8px] items-start justify-start mb-[8px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Royal Milk Tea
                      </Text>
                      <Text
                        className="font-bold text-left text-teal_308 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        $22
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-[1px] border-deep_purple_503 border-solid flex flex-1 flex-col gap-[16px] items-center justify-start p-[8px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_335 h-[166px] rounded-[8px] w-[100%]"></div>
                    <div className="flex flex-col gap-[8px] items-start justify-start mb-[8px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Flavored Soymilk Drinks
                      </Text>
                      <Text
                        className="font-bold text-left text-teal_308 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        $22
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[32%]">
            <div className="bg-white_A700 flex items-center justify-start p-[4px] rounded-[8px] w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[8px] items-end justify-between my-[19px] md:w-[100%] w-[97%]">
                <div className="flex flex-col items-center justify-start sm:w-[100%] w-[97%]">
                  <div className="flex flex-row items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Current Order
                    </Text>
                    <Button className="bg-white_A700 cursor-pointer font-bold min-w-[114px] ml-[99px] sm:px-[20px] px-[24px] py-[11px] rounded-[8px] text-[16px] text-center text-red_431 tracking-[0.08px] w-[auto]">
                      Clear All
                    </Button>
                    <div className="flex h-[40px] items-center justify-start ml-[8px] p-[8px] w-[40px]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <Img
                          src="images/img_refresh_bluegray_340.svg"
                          className="h-[24px] w-[24px]"
                          alt="refresh"
                        />
                      </div>
                    </div>
                  </div>
                  <Line className="bg-indigo_56 h-[1px] mt-[16px] w-[100%]" />
                  <div className="flex items-center justify-start mt-[23px] md:w-[100%] w-[98%]">
                    <div className="flex flex-row gap-[24px] items-start justify-between w-[100%]">
                      <div className="bg-gray_335 h-[64px] mb-[2px] rounded-[8px] w-[64px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <div className="flex flex-row gap-[32px] items-start justify-between w-[100%]">
                          <Text
                            className="font-bold leading-[120.00%] mb-[6px] text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Soba - Buckwheat Noodles
                          </Text>
                          <div className="flex flex-row gap-[16px] items-center justify-start mt-[20px] w-[auto]">
                            <Button className="bg-deep_purple_503 flex h-[24px] items-center justify-center p-[4px] rounded-[2px] w-[24px]">
                              <Img
                                src="images/img_menu_white_a700_24x24.svg"
                                className="h-[16px]"
                                alt="menu"
                              />
                            </Button>
                            <Text
                              className="font-semibold text-bluegray_919 text-center tracking-[0.11px] w-[auto]"
                              variant="body78"
                            >
                              1
                            </Text>
                            <Button className="bg-deep_purple_503 flex h-[24px] items-center justify-center p-[4px] rounded-[2px] w-[24px]">
                              <Img
                                src="images/img_plus_white_a700_35x35.svg"
                                className="h-[16px]"
                                alt="plus"
                              />
                            </Button>
                          </div>
                        </div>
                        <Text
                          className="font-bold text-left text-teal_308 tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          $22
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[22px] md:w-[100%] w-[98%]">
                    <div className="bg-gray_335 h-[64px] rounded-[8px] w-[64px]"></div>
                    <div className="flex flex-col items-start justify-start ml-[24px] w-[auto]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Unagi - Grilled Eel
                      </Text>
                      <Text
                        className="font-bold mt-[4px] text-left text-teal_308 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        $22
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[16px] items-center justify-start ml-[44px] w-[auto]">
                      <Button className="bg-deep_purple_503 flex h-[24px] items-center justify-center p-[4px] rounded-[2px] w-[24px]">
                        <Img
                          src="images/img_menu_white_a700_24x24.svg"
                          className="h-[16px]"
                          alt="menu One"
                        />
                      </Button>
                      <Text
                        className="font-semibold text-bluegray_919 text-center tracking-[0.11px] w-[auto]"
                        variant="body78"
                      >
                        1
                      </Text>
                      <Button className="bg-deep_purple_503 flex h-[24px] items-center justify-center p-[4px] rounded-[2px] w-[24px]">
                        <Img
                          src="images/img_plus_white_a700_35x35.svg"
                          className="h-[16px]"
                          alt="plus One"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-start mt-[24px] md:w-[100%] w-[98%]">
                    <div className="flex flex-row gap-[24px] items-start justify-between w-[100%]">
                      <div className="bg-gray_335 h-[64px] mb-[2px] rounded-[8px] w-[64px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <div className="flex flex-row gap-[32px] items-start justify-between w-[100%]">
                          <Text
                            className="font-bold leading-[120.00%] mb-[6px] text-gray_981 text-left tracking-[0.08px] w-[auto]"
                            variant="body69"
                          >
                            Yakitori - Grilled Chicken
                          </Text>
                          <div className="flex flex-row gap-[16px] items-center justify-start mt-[20px] w-[auto]">
                            <Button className="bg-deep_purple_503 flex h-[24px] items-center justify-center p-[4px] rounded-[2px] w-[24px]">
                              <Img
                                src="images/img_menu_white_a700_24x24.svg"
                                className="h-[16px]"
                                alt="menu Two"
                              />
                            </Button>
                            <Text
                              className="font-semibold text-bluegray_919 text-center tracking-[0.11px] w-[auto]"
                              variant="body78"
                            >
                              1
                            </Text>
                            <Button className="bg-deep_purple_503 flex h-[24px] items-center justify-center p-[4px] rounded-[2px] w-[24px]">
                              <Img
                                src="images/img_plus_white_a700_35x35.svg"
                                className="h-[16px]"
                                alt="plus Two"
                              />
                            </Button>
                          </div>
                        </div>
                        <Text
                          className="font-bold text-left text-teal_308 tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          $22
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex h-[242px] items-center justify-start sm:mt-[0] mt-[80px] pb-[114px] sm:w-[100%] w-[2%]"
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
            <div className="bg-white_A700 flex flex-col gap-[20px] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
              <Text
                className="font-bold mt-[9px] text-gray_981 text-left tracking-[0.08px] w-[auto]"
                variant="body69"
              >
                Select available promo to apply
              </Text>
              <SelectBox
                className="font-bold mb-[8px] outline outline-[1px] outline-deep_purple_503 sm:px-[20px] px-[24px] py-[8px] rounded-[8px] text-[16px] text-deep_purple_503 text-left tracking-[0.08px] w-[100%]"
                placeholderClassName="text-deep_purple_503"
                name="offer"
                placeholder="20% Off Entire Order"
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
            <div className="bg-white_A700 flex flex-col items-center justify-end p-[14px] rounded-[8px] w-[100%]">
              <div className="flex flex-row items-center justify-between mt-[9px] md:w-[100%] w-[99%]">
                <Text
                  className="font-bold text-gray_554 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Sub Total
                </Text>
                <Text
                  className="font-bold text-gray_981 text-right tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  $88
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-[13px] md:w-[100%] w-[99%]">
                <Text
                  className="font-bold text-gray_554 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Tax Total
                </Text>
                <Text
                  className="font-bold text-gray_981 text-right tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  $4
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-[13px] md:w-[100%] w-[99%]">
                <Text
                  className="font-bold text-gray_554 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Discount
                </Text>
                <Text
                  className="font-bold text-gray_981 text-right tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  - 20%
                </Text>
              </div>
              <Line className="bg-indigo_56 h-[1px] mt-[22px] w-[99%]" />
              <div className="flex flex-row items-center justify-between mt-[22px] md:w-[100%] w-[99%]">
                <Text
                  className="font-bold text-gray_554 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Total
                </Text>
                <Text
                  className="font-bold text-gray_981 text-right tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  $32
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 flex items-center justify-start p-[16px] w-[100%]">
              <div className="flex flex-col gap-[24px] items-start justify-start my-[8px] w-[100%]">
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Payment Mode
                  </Text>
                  <Img
                    src="images/img_overflowmenu_bluegray_340.svg"
                    className="h-[40px] w-[40px]"
                    alt="overflowmenu"
                  />
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[83%]">
                  <Button className="bg-white_A700 cursor-pointer font-bold min-w-[87px] outline outline-[1px] outline-deep_purple_105 sm:px-[20px] px-[24px] py-[11px] rounded-[8px] text-[16px] text-center text-deep_purple_503 tracking-[0.08px] w-[auto]">
                    Cash
                  </Button>
                  <Button className="bg-white_A700 cursor-pointer font-bold min-w-[85px] outline outline-[1px] outline-deep_purple_105 sm:px-[20px] px-[24px] py-[11px] rounded-[8px] text-[16px] text-center text-deep_purple_503 tracking-[0.08px] w-[auto]">
                    Card
                  </Button>
                  <Button className="bg-white_A700 cursor-pointer font-bold min-w-[115px] outline outline-[1px] outline-deep_purple_503 sm:px-[20px] px-[24px] py-[11px] rounded-[8px] text-[16px] text-center text-deep_purple_503 tracking-[0.08px] w-[auto]">
                    E-Wallet
                  </Button>
                </div>
                <Button className="bg-deep_purple_503 cursor-pointer font-bold sm:px-[20px] px-[24px] py-[14px] rounded-[8px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[368px]">
                  Pay Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex left-[0] md:w-[100%] w-[89%]">
          <aside className="flex flex-col md:hidden justify-start my-[auto] w-[8%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-row items-end justify-evenly w-[100%]">
                <div className="bg-white_A700 flex flex-1 flex-col gap-[40px] items-center justify-center p-[28px] sm:px-[20px] w-[100%]">
                  <div className="flex h-[56px] items-center justify-start mt-[92px] w-[56px]">
                    <Button className="bg-deep_purple_503 flex h-[56px] items-center justify-center p-[16px] rounded-[8px] w-[56px]">
                      <Img
                        src="images/img_qrcode_white_a700.svg"
                        className="h-[24px]"
                        alt="qrcode"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[80px] md:w-[100%] w-[43%]">
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
                      className="h-[24px] mt-[56px] w-[24px]"
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
                      className="h-[24px] mt-[593px] w-[24px]"
                      alt="search One"
                    />
                  </div>
                </div>
                <Line className="bg-gray_332 h-[1205px] mt-[80px] w-[1px]" />
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

export default LightPointofSaleDashboardPage;
