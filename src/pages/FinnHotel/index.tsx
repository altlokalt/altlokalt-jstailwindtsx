import React from "react";

import {
  Img,
  Input,
  Text,
  Radio,
  Switch,
  Line,
  List,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images";

const FinnHotelPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-white_A700 flex font-ubuntu items-center justify-end mx-[auto] pt-[43px] sm:px-[20px] md:px-[40px] px-[43px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between max-w-[1335px] mt-[5px] mx-[auto] w-[100%]">
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-[0] mt-[5px] md:w-[100%] w-[53%]">
            <div className="flex md:flex-col flex-row gap-[36px] items-center justify-between w-[100%]">
              <Img
                src="images/img_menu_indigo_907.svg"
                className="h-[19px] w-[auto]"
                alt="menu"
              />
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-indigo_907 text-indigo_907 text-left w-[100%]"
                wrapClassName="bg-blue_59 flex md:w-[100%] pb-[25px] pl-[21px] pr-[35px] pt-[9px] rounded-[20px] sm:px-[20px] sm:w-[100%] w-[auto]"
                name="Group449"
                placeholder="Hotels UK"
                prefix={
                  <Img
                    src="images/img_search_blue_609.svg"
                    className="cursor-pointer mr-[16px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#25396f"
                      className="cursor-pointer ml-[10px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
            </div>
            <div className="flex md:flex-col flex-row font-abhayalibre md:gap-[40px] items-start justify-between mt-[35px] md:w-[100%] w-[99%]">
              <div className="h-[40px] relative md:w-[100%] w-[17%]">
                <Text
                  className="font-bold ml-[15px] mt-[5px] text-bluegray_233 text-left w-[auto]"
                  variant="body78"
                >
                  Any Price
                </Text>
                <div className="absolute border-[1px] border-bluegray_233 border-solid flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] p-[12px] rounded-[5px] w-[100%]">
                  <Img
                    src="images/img_polygon1_gray_400.svg"
                    className="h-[5px] md:ml-[0] ml-[83px] mt-[2px] w-[auto]"
                    alt="PolygonOne"
                  />
                  <Img
                    src="images/img_polygon1_gray_400.svg"
                    className="h-[5px] md:ml-[0] ml-[83px] my-[2px] w-[auto]"
                    alt="PolygonTwo"
                  />
                </div>
              </div>
              <div className="bg-blue_59 flex items-center justify-start p-[6px] rounded-[5px] md:w-[100%] w-[auto]">
                <div className="flex flex-col items-end justify-start mb-[7px] md:w-[100%] w-[85%]">
                  <div className="flex flex-row gap-[37px] items-end justify-between w-[100%]">
                    <Text
                      className="font-bold mb-[2px] text-indigo_907 text-left w-[auto]"
                      variant="body87"
                    >
                      2-4 Beds
                    </Text>
                    <Img
                      src="images/img_polygon3.svg"
                      className="h-[5px] mt-[7px] w-[auto]"
                      alt="PolygonThree"
                    />
                  </div>
                  <Img
                    src="images/img_polygon3.svg"
                    className="h-[5px] mt-[2px] w-[auto]"
                    alt="PolygonFour"
                  />
                </div>
              </div>
              <div className="h-[40px] relative md:w-[100%] w-[17%]">
                <Text
                  className="font-bold ml-[15px] mt-[4px] text-gray_458 text-left w-[auto]"
                  variant="body78"
                >
                  All Types
                </Text>
                <div className="absolute border-[1px] border-gray_458 border-solid flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] p-[12px] rounded-[5px] w-[100%]">
                  <Img
                    src="images/img_polygon1_gray_400_5x8.svg"
                    className="h-[5px] md:ml-[0] ml-[83px] mt-[2px] w-[auto]"
                    alt="PolygonOne One"
                  />
                  <Img
                    src="images/img_polygon1_gray_400_5x8.svg"
                    className="h-[5px] md:ml-[0] ml-[83px] my-[2px] w-[auto]"
                    alt="PolygonTwo One"
                  />
                </div>
              </div>
              <Img
                src="images/img_settings_blue_610.svg"
                className="h-[11px] md:mt-[0] mt-[17px] w-[auto]"
                alt="settings"
              />
              <div className="font-ubuntu h-[28px] md:mt-[0] mt-[4px] relative md:w-[100%] w-[41%]">
                <Radio
                  value="More"
                  className="absolute font-normal inset-x-[0] mx-[auto] not-italic text-[16px] text-blue_610 text-left top-[0]"
                  inputClassName="border-[1px] border-gray_458 border-solid h-[15px] mr-[5px] w-[15px]"
                  checked={false}
                  name="More"
                  label="More"
                ></Radio>
                <div className="absolute flex flex-row font-abhayalibre h-[100%] inset-y-[0] items-start justify-between my-[auto] right-[2%] w-[57%]">
                  <Switch
                    onColor="#afb5c3"
                    offColor="#afb5c3"
                    onHandleColor="#ffffff"
                    offHandleColor="#ffffff"
                    value={false}
                    className="mt-[3px] w-[auto]"
                  />
                  <Text
                    className="font-bold text-indigo_907 text-left w-[auto]"
                    variant="body78"
                  >
                    Best Hotels
                  </Text>
                  <Text
                    className="font-bold mt-[5px] text-gray_458 text-left w-[auto]"
                    variant="body98"
                  >
                    i
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-abel sm:gap-[40px] items-start justify-between mt-[32px] md:w-[100%] w-[97%]">
              <Text
                className="font-normal mb-[8px] not-italic text-indigo_907 text-left w-[auto]"
                variant="body48"
              >
                <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-abel">
                  1
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-abel">
                  3
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-abel">
                  1
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-abel">
                  {" "}
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-abel">
                  R
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-abel">
                  e
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-abel">
                  s
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-abel">
                  u
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-abel">
                  l
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-abel">
                  t
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_907 text-[24px] font-abel">
                  s
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-black_902 text-[24px] font-abel">
                  {" "}
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  i
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  n
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  {" "}
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  M
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  a
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  n
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  c
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  h
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  e
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  s
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  t
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  e
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  r
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  ,
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  {" "}
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  U
                </span>
                <span className="md:text-[22px] sm:text-[20px] text-indigo_309 text-[24px] font-abel">
                  K
                </span>
              </Text>
              <div className="flex font-abhayalibre items-center justify-start sm:mt-[0] mt-[10px] sm:w-[100%] w-[auto]">
                <div className="flex flex-row items-end justify-between w-[100%]">
                  <div className="flex flex-col items-end justify-start w-[auto]">
                    <div className="flex flex-row items-end justify-between mr-[2px] md:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_233 text-left w-[auto]"
                        variant="body78"
                      >
                        <span className="text-bluegray_233 text-[14px] font-abhayalibre">
                          S
                        </span>
                        <span className="text-bluegray_233 text-[14px] font-abhayalibre">
                          o
                        </span>
                        <span className="text-bluegray_233 text-[14px] font-abhayalibre">
                          r
                        </span>
                        <span className="text-bluegray_233 text-[14px] font-abhayalibre">
                          t
                        </span>
                        <span className="text-bluegray_233 text-[14px] font-abhayalibre">
                          {" "}
                        </span>
                        <span className="text-bluegray_233 text-[14px] font-abhayalibre">
                          b
                        </span>
                        <span className="text-bluegray_233 text-[14px] font-abhayalibre">
                          y
                        </span>
                        <span className="text-bluegray_233 text-[14px] font-abhayalibre">
                          :
                        </span>
                        <span className="text-black_902 text-[14px] font-abhayalibre">
                          {" "}
                        </span>
                        <span className="text-indigo_907 text-[14px] font-abhayalibre">
                          P
                        </span>
                        <span className="text-indigo_907 text-[14px] font-abhayalibre">
                          r
                        </span>
                        <span className="text-indigo_907 text-[14px] font-abhayalibre">
                          i
                        </span>
                        <span className="text-indigo_907 text-[14px] font-abhayalibre">
                          c
                        </span>
                        <span className="text-indigo_907 text-[14px] font-abhayalibre">
                          e
                        </span>
                      </Text>
                      <Img
                        src="images/img_polygon3_bluegray_233.svg"
                        className="h-[5px] mt-[8px] w-[auto]"
                        alt="PolygonThree One"
                      />
                      <div className="h-[1px] mb-[2px] mt-[10px] outline outline-[0.5px] outline-bluegray_233 w-[8%]"></div>
                    </div>
                    <div className="flex flex-row gap-[27px] items-start justify-end ml-[auto] md:w-[100%] w-[34%]">
                      <Img
                        src="images/img_polygon3_bluegray_233.svg"
                        className="h-[5px] w-[auto]"
                        alt="PolygonFour One"
                      />
                      <div className="h-[1px] outline outline-[0.5px] outline-bluegray_233 w-[30%]"></div>
                    </div>
                    <div className="h-[1px] outline outline-[0.5px] outline-bluegray_233 w-[8%]"></div>
                  </div>
                  <div className="h-[11px] mb-[2px] mt-[9px] outline outline-[0.5px] outline-blue_610 rotate-[90deg] w-[1%]"></div>
                  <Line className="bg-blue_610 h-[15px] mt-[7px] w-[1px]" />
                  <div className="h-[11px] mb-[2px] mt-[9px] outline outline-[0.5px] outline-blue_610 rotate-[90deg] w-[1%]"></div>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row font-abel gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[52px] w-[99%]"
              orientation="horizontal"
            >
              <div className="flex md:h-[283px] h-[287px] justify-end relative w-[100%]">
                <Line className="bg-indigo_59 h-[1px] mb-[32px] mt-[auto] mx-[auto] w-[97%]" />
                <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                  <Img
                    src="images/img_imagehere_indigo_907.svg"
                    className="h-[155px] md:ml-[0] ml-[2px] w-[auto]"
                    alt="imagehere"
                  />
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] mt-[6px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-abel font-normal not-italic text-indigo_907 text-left w-[auto]"
                      variant="body64"
                    >
                      311 Street City
                    </Text>
                    <Text
                      className="font-abhayalibre font-normal mt-[7px] not-italic text-bluegray_233 text-left w-[auto]"
                      variant="body78"
                    >
                      Manchester, UK
                    </Text>
                    <Text
                      className="font-abel font-normal mt-[11px] not-italic text-blue_610 text-left w-[auto]"
                      variant="body64"
                    >
                      $49,44/Night
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[31px] md:w-[100%] w-[75%]">
                    <Img
                      src="images/img_vector_gray_458.svg"
                      className="h-[16px] mt-[4px] w-[auto]"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal ml-[7px] not-italic text-gray_458 text-left w-[auto]"
                      variant="body87"
                    >
                      1
                    </Text>
                    <Img
                      src="images/img_settings_gray_458.svg"
                      className="h-[16px] ml-[12px] mt-[5px] w-[16px]"
                      alt="settings One"
                    />
                    <Text
                      className="font-normal ml-[10px] not-italic text-gray_458 text-left w-[auto]"
                      variant="body87"
                    >
                      2
                    </Text>
                    <Img
                      src="images/img_signal_gray_458.svg"
                      className="h-[15px] ml-[18px] mt-[5px] w-[auto]"
                      alt="signal"
                    />
                    <Img
                      src="images/img_user_gray_458.svg"
                      className="h-[18px] ml-[23px] w-[auto]"
                      alt="user"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:h-[283px] h-[287px] justify-end relative w-[100%]">
                <Line className="bg-indigo_59 h-[1px] mb-[32px] mt-[auto] mx-[auto] w-[98%]" />
                <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                  <Img
                    src="images/img_imagehere_indigo_907.svg"
                    className="h-[155px] w-[auto]"
                    alt="MaskGroup"
                  />
                  <Text
                    className="font-abel font-normal md:ml-[0] ml-[3px] mt-[6px] not-italic text-indigo_907 text-left w-[auto]"
                    variant="body64"
                  >
                    Last Drop Village
                  </Text>
                  <Text
                    className="font-abhayalibre font-normal md:ml-[0] ml-[3px] mt-[7px] not-italic text-bluegray_233 text-left w-[auto]"
                    variant="body78"
                  >
                    Manchester, UK
                  </Text>
                  <Text
                    className="font-abel font-normal md:ml-[0] ml-[3px] mt-[11px] not-italic text-blue_610 text-left w-[auto]"
                    variant="body64"
                  >
                    $61,13/Night
                  </Text>
                  <div className="flex flex-row font-abel items-start justify-start md:ml-[0] ml-[3px] mt-[31px] md:w-[100%] w-[76%]">
                    <Img
                      src="images/img_vector_gray_458.svg"
                      className="h-[16px] mt-[4px] w-[auto]"
                      alt="Vector One"
                    />
                    <Text
                      className="font-normal ml-[7px] not-italic text-gray_458 text-left w-[auto]"
                      variant="body87"
                    >
                      3
                    </Text>
                    <Img
                      src="images/img_settings_gray_458.svg"
                      className="h-[16px] ml-[12px] mt-[5px] w-[16px]"
                      alt="settings Two"
                    />
                    <Text
                      className="font-normal ml-[10px] not-italic text-gray_458 text-left w-[auto]"
                      variant="body87"
                    >
                      2
                    </Text>
                    <Img
                      src="images/img_signal_gray_458.svg"
                      className="h-[15px] ml-[18px] mt-[5px] w-[auto]"
                      alt="signal One"
                    />
                    <Img
                      src="images/img_user_gray_458.svg"
                      className="h-[18px] ml-[23px] w-[auto]"
                      alt="user One"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:h-[283px] h-[287px] justify-end relative w-[100%]">
                <Line className="bg-indigo_59 h-[1px] mb-[32px] mt-[auto] mx-[auto] w-[98%]" />
                <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                  <Img
                    src="images/img_imagehere_indigo_907.svg"
                    className="h-[155px] w-[auto]"
                    alt="MaskGroup One"
                  />
                  <Text
                    className="font-abel font-normal md:ml-[0] ml-[3px] mt-[6px] not-italic text-indigo_907 text-left w-[auto]"
                    variant="body64"
                  >
                    Wetern House Hotel
                  </Text>
                  <Text
                    className="font-abhayalibre font-normal md:ml-[0] ml-[3px] mt-[11px] not-italic text-bluegray_233 text-left w-[auto]"
                    variant="body78"
                  >
                    Manchester, UK
                  </Text>
                  <Text
                    className="font-abel font-normal md:ml-[0] ml-[3px] mt-[11px] not-italic text-blue_610 text-left w-[auto]"
                    variant="body64"
                  >
                    $25,64/Night
                  </Text>
                  <div className="flex flex-row font-abel items-start justify-start mt-[31px] md:w-[100%] w-[76%]">
                    <Img
                      src="images/img_vector_gray_458.svg"
                      className="h-[16px] mt-[4px] w-[auto]"
                      alt="Vector Two"
                    />
                    <Text
                      className="font-normal ml-[7px] not-italic text-gray_458 text-left w-[auto]"
                      variant="body87"
                    >
                      5
                    </Text>
                    <Img
                      src="images/img_settings_gray_458.svg"
                      className="h-[16px] ml-[12px] mt-[5px] w-[16px]"
                      alt="settings Three"
                    />
                    <Text
                      className="font-normal ml-[10px] not-italic text-gray_458 text-left w-[auto]"
                      variant="body87"
                    >
                      3
                    </Text>
                    <Img
                      src="images/img_signal_gray_458.svg"
                      className="h-[15px] ml-[17px] mt-[5px] w-[auto]"
                      alt="signal Two"
                    />
                    <Img
                      src="images/img_user_gray_458.svg"
                      className="h-[18px] ml-[23px] w-[auto]"
                      alt="user Two"
                    />
                  </div>
                </div>
              </div>
            </List>
            <List
              className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[48px] w-[98%]"
              orientation="horizontal"
            >
              <div className="flex md:h-[282px] h-[286px] justify-end relative w-[100%]">
                <Line className="bg-indigo_59 h-[1px] mb-[30px] mt-[auto] mx-[auto] w-[98%]" />
                <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                  <Img
                    src="images/img_imagehere_indigo_907.svg"
                    className="h-[155px] w-[auto]"
                    alt="MaskGroup Two"
                  />
                  <Text
                    className="font-abel font-normal md:ml-[0] ml-[3px] mt-[6px] not-italic text-indigo_907 text-left w-[auto]"
                    variant="body64"
                  >
                    Luxury Hotel
                  </Text>
                  <Text
                    className="font-abhayalibre font-normal md:ml-[0] ml-[3px] mt-[7px] not-italic text-bluegray_233 text-left w-[auto]"
                    variant="body78"
                  >
                    Manchester, UK
                  </Text>
                  <Text
                    className="font-abel font-normal md:ml-[0] ml-[3px] mt-[11px] not-italic text-blue_610 text-left w-[auto]"
                    variant="body64"
                  >
                    $79,44/Night
                  </Text>
                  <Img
                    src="images/img_4.svg"
                    className="h-[19px] mt-[32px] w-[auto]"
                    alt="Four"
                  />
                </div>
              </div>
              <div className="flex md:h-[283px] h-[286px] justify-end relative w-[100%]">
                <Line className="bg-indigo_59 h-[1px] mb-[30px] mt-[auto] mx-[auto] w-[98%]" />
                <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                  <Img
                    src="images/img_imagehere_indigo_907.svg"
                    className="h-[155px] w-[auto]"
                    alt="MaskGroup Three"
                  />
                  <Text
                    className="font-abel font-normal md:ml-[0] ml-[3px] mt-[6px] not-italic text-indigo_907 text-left w-[auto]"
                    variant="body64"
                  >
                    Saunton Sands
                  </Text>
                  <Text
                    className="font-abhayalibre font-normal md:ml-[0] ml-[3px] mt-[11px] not-italic text-bluegray_233 text-left w-[auto]"
                    variant="body78"
                  >
                    Manchester, UK
                  </Text>
                  <Text
                    className="font-abel font-normal md:ml-[0] ml-[3px] mt-[11px] not-italic text-blue_610 text-left w-[auto]"
                    variant="body64"
                  >
                    $62,91/Night
                  </Text>
                  <Img
                    src="images/img_4.svg"
                    className="h-[19px] md:ml-[0] ml-[3px] mt-[32px] w-[auto]"
                    alt="Five One"
                  />
                </div>
              </div>
              <div className="flex md:h-[282px] h-[286px] justify-end relative w-[100%]">
                <Line className="bg-indigo_59 h-[1px] mb-[30px] mt-[auto] mx-[auto] w-[98%]" />
                <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                  <Img
                    src="images/img_imagehere_indigo_907.svg"
                    className="h-[155px] w-[auto]"
                    alt="MaskGroup Four"
                  />
                  <Text
                    className="font-abel font-normal md:ml-[0] ml-[3px] mt-[6px] not-italic text-indigo_907 text-left w-[auto]"
                    variant="body64"
                  >
                    Talgarth Resort
                  </Text>
                  <Text
                    className="font-abhayalibre font-normal md:ml-[0] ml-[3px] mt-[7px] not-italic text-bluegray_233 text-left w-[auto]"
                    variant="body78"
                  >
                    Manchester, UK
                  </Text>
                  <Text
                    className="font-abel font-normal md:ml-[0] ml-[3px] mt-[11px] not-italic text-blue_610 text-left w-[auto]"
                    variant="body64"
                  >
                    $42,99/Night
                  </Text>
                  <Img
                    src="images/img_4.svg"
                    className="h-[19px] mt-[32px] w-[auto]"
                    alt="Icon"
                  />
                </div>
              </div>
            </List>
          </div>
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 font-abel h-[927px] items-center justify-center p-[40px] sm:px-[20px] md:w-[100%] w-[45%]"
            style={{
              backgroundImage: "url('images/img_image_gray_400_160x136.svg')",
            }}
          >
            <div className="flex flex-col justify-start my-[16px] md:w-[100%] w-[96%]">
              <div className="flex flex-col gap-[34px] justify-start mr-[13px] md:w-[100%] w-[98%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="sm:gap-[20px] gap-[308px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                    <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col relative w-[100%]">
                        <div className="bg-blue_610 flex items-start justify-start mx-[auto] p-[3px] rounded-[10px] w-[100%]">
                          <Text
                            className="font-normal mb-[17px] md:ml-[0] ml-[15px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            $35,41
                          </Text>
                        </div>
                        <Img
                          src="images/img_lightbulb_blue_610.svg"
                          className="h-[15px] mt-[-7px] mx-[auto] rounded-[2px] w-[15px] z-[1]"
                          alt="lightbulb"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                        <div className="bg-blue_610 h-[9px] rounded-[4px] w-[9px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col relative w-[100%]">
                        <div className="bg-blue_610 flex items-start justify-start mx-[auto] p-[3px] rounded-[10px] w-[100%]">
                          <Text
                            className="font-normal mb-[17px] md:ml-[0] ml-[15px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            $31,62
                          </Text>
                        </div>
                        <Img
                          src="images/img_lightbulb_blue_610.svg"
                          className="h-[15px] mt-[-7px] mx-[auto] rounded-[2px] w-[15px] z-[1]"
                          alt="lightbulb One"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                        <div className="bg-blue_610 h-[9px] rounded-[4px] w-[9px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col relative w-[100%]">
                        <div className="bg-blue_610 flex items-start justify-start mx-[auto] p-[3px] rounded-[10px] w-[100%]">
                          <Text
                            className="font-normal mb-[17px] md:ml-[0] ml-[15px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            $51,62
                          </Text>
                        </div>
                        <Img
                          src="images/img_lightbulb_blue_610.svg"
                          className="h-[15px] mt-[-7px] mx-[auto] rounded-[2px] w-[15px] z-[1]"
                          alt="lightbulb Two"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                        <div className="bg-blue_610 h-[9px] rounded-[4px] w-[9px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col relative w-[100%]">
                        <div className="bg-blue_610 flex items-start justify-start mx-[auto] p-[3px] rounded-[10px] w-[100%]">
                          <Text
                            className="font-normal mb-[17px] md:ml-[0] ml-[15px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            $14,62
                          </Text>
                        </div>
                        <Img
                          src="images/img_lightbulb_blue_610.svg"
                          className="h-[15px] mt-[-7px] mx-[auto] rounded-[2px] w-[15px] z-[1]"
                          alt="lightbulb Three"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                        <div className="bg-blue_610 h-[9px] rounded-[4px] w-[9px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[161px] md:w-[100%] w-[61%]">
                  <div className="md:h-[117px] h-[127px] relative w-[100%]">
                    <div className="absolute bg-white_A700 flex inset-x-[0] items-start justify-start mx-[auto] p-[7px] rounded-[10px] shadow-bs121 top-[0] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[86%]">
                        <Img
                          src="images/img_imagehere_indigo_907.svg"
                          className="h-[102px] w-[102px]"
                          alt="MaskGroup Five"
                        />
                        <div className="flex flex-col items-start justify-start w-[51%]">
                          <Text
                            className="font-abhayalibre font-normal not-italic text-indigo_309 text-left w-[auto]"
                            variant="body78"
                          >
                            311 Street City
                          </Text>
                          <Text
                            className="font-abel font-normal mt-[8px] not-italic text-blue_610 text-left w-[auto]"
                            variant="body64"
                          >
                            $49,44/Night
                          </Text>
                          <div className="flex flex-row font-abel items-start justify-between mt-[17px] w-[100%]">
                            <Img
                              src="images/img_vector_gray_458.svg"
                              className="h-[11px] mt-[4px] w-[auto]"
                              alt="Vector Three"
                            />
                            <Text
                              className="not-italic text-gray_458 text-left w-[auto]"
                              variant="body97"
                            >
                              3
                            </Text>
                            <Img
                              src="images/img_settings_gray_458.svg"
                              className="h-[11px] mt-[5px] w-[11px]"
                              alt="settings Four"
                            />
                            <Text
                              className="not-italic text-gray_458 text-left w-[auto]"
                              variant="body97"
                            >
                              2
                            </Text>
                            <Img
                              src="images/img_signal_gray_458.svg"
                              className="h-[11px] mt-[5px] w-[auto]"
                              alt="signal Three"
                            />
                            <Img
                              src="images/img_user_gray_458_13x14.svg"
                              className="h-[13px] w-[14px]"
                              alt="user Three"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_favorite_white_a700_22x22.svg"
                      className="absolute bottom-[0] h-[22px] inset-x-[0] mx-[auto] rounded-[3px] w-[22px]"
                      alt="favorite"
                    />
                  </div>
                  <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                    <div className="bg-blue_610 h-[9px] rounded-[4px] w-[9px]"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[8px] mt-[92px] md:w-[100%] w-[18%]">
                <div className="flex flex-col relative w-[100%]">
                  <div className="bg-blue_610 flex items-center justify-start mx-[auto] p-[3px] rounded-[10px] w-[100%]">
                    <Text
                      className="font-normal mb-[17px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body78"
                    >
                      $131,62
                    </Text>
                  </div>
                  <Img
                    src="images/img_lightbulb_blue_610.svg"
                    className="h-[15px] mt-[-7px] mx-[auto] rounded-[2px] w-[15px] z-[1]"
                    alt="lightbulb Four"
                  />
                </div>
                <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                  <div className="bg-blue_610 h-[9px] rounded-[4px] w-[9px]"></div>
                </div>
              </div>
              <div className="flex flex-row gap-[71px] items-start justify-end ml-[auto] mt-[7px] md:w-[100%] w-[41%]">
                <div className="flex flex-col items-center justify-start w-[43%]">
                  <div className="flex flex-col relative w-[100%]">
                    <div className="bg-blue_610 flex items-center justify-start mx-[auto] p-[3px] rounded-[10px] w-[100%]">
                      <Text
                        className="font-normal mb-[17px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body78"
                      >
                        $11,62
                      </Text>
                    </div>
                    <Img
                      src="images/img_lightbulb_blue_610.svg"
                      className="h-[15px] mt-[-7px] mx-[auto] rounded-[2px] w-[15px] z-[1]"
                      alt="lightbulb Five"
                    />
                  </div>
                  <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                    <div className="bg-blue_610 h-[9px] rounded-[4px] w-[9px]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-center justify-start mt-[2px] w-[22%]">
                  <Button className="bg-indigo_907 flex items-center justify-center p-[11px] rounded-[10px] w-[100%]">
                    <Img
                      src="images/img_location_white_a700_40x42.svg"
                      className="h-[14px]"
                      alt="location"
                    />
                  </Button>
                  <Img
                    src="images/img_cart_indigo_907.svg"
                    className="h-[80px] w-[auto]"
                    alt="cart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinnHotelPage;
