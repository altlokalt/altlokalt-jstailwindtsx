import React from "react";

import { Text, Img, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const HttpswwwneighbourlyconzpublicmarketPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_66 flex flex-col font-roboto items-center justify-end mx-[auto] pt-[48px] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-gray_208 flex items-center justify-center px-[157px] sm:px-[20px] md:px-[40px] w-[100%]">
            <ul className="flex md:flex-col flex-row md:hidden items-center justify-center w-[100%] common-row-list">
              <li className="sm:w-[100%] sm:my-[10px] w-[6%]">
                <div className="flex items-start justify-start pl-[12px] pr-[14.35px] py-[8px]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[13px] hover:text-gray_700_7f text-gray_748 text-left w-[auto]"
                    href="javascript:"
                  >
                    Home
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[6%]">
                <div className="flex items-start justify-start pl-[12px] pr-[13.79px] py-[8px]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[13px] hover:text-gray_700_7f text-gray_748 text-left w-[auto]"
                    href="javascript:"
                  >
                    Market
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[8%]">
                <div className="flex items-start justify-start pl-[12px] pr-[11.6px] py-[8px]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[14px] hover:text-gray_700_7f text-gray_748 text-left w-[auto]"
                    href="javascript:"
                  >
                    Businesses
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[7%]">
                <div className="flex items-start justify-start pl-[12px] pr-[10.91px] py-[8px]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[14px] hover:text-gray_700_7f text-gray_748 text-left w-[auto]"
                    href="javascript:"
                  >
                    Property
                  </a>
                </div>
              </li>
              <li className="ml-[1px] sm:w-[100%] sm:my-[10px] w-[9%]">
                <div className="flex items-start justify-start pl-[12px] pr-[15.5px] py-[8px]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[13px] hover:text-gray_700_7f text-gray_748 text-left w-[auto]"
                    href="javascript:"
                  >
                    Publications
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                <div className="flex flex-row gap-[8px] items-center justify-start pl-[12px] pr-[15.81px] py-[8px]">
                  <Img
                    src="images/img_lock_gray_748.svg"
                    className="h-[16px] w-[16px]"
                    alt="lock"
                  />
                  <a
                    className="cursor-pointer font-normal not-italic text-[13px] text-gray_700_7f text-left w-[auto]"
                    href="javascript:"
                  >
                    Messages
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                <div className="flex flex-row gap-[8px] items-center justify-start pl-[12px] pr-[16.6px] py-[8px]">
                  <Img
                    src="images/img_lock_gray_748.svg"
                    className="h-[16px] w-[16px]"
                    alt="lock One"
                  />
                  <a
                    className="cursor-pointer font-normal not-italic text-[13px] text-gray_700_7f text-left w-[auto]"
                    href="javascript:"
                  >
                    Neighbours
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[8%]">
                <div className="flex flex-row gap-[8px] items-center justify-start pl-[12px] pr-[12.91px] py-[8px]">
                  <Img
                    src="images/img_lock_gray_748.svg"
                    className="h-[16px] w-[16px]"
                    alt="lock Two"
                  />
                  <a
                    className="cursor-pointer font-normal not-italic text-[14px] text-gray_700_7f text-left w-[auto]"
                    href="javascript:"
                  >
                    Groups
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[8%]">
                <div className="flex flex-row gap-[8px] items-center justify-start pl-[12px] pr-[12.8px] py-[8px]">
                  <Img
                    src="images/img_lock_gray_748.svg"
                    className="h-[16px] w-[16px]"
                    alt="lock Three"
                  />
                  <a
                    className="cursor-pointer font-normal not-italic text-[14px] text-gray_700_7f text-left w-[auto]"
                    href="javascript:"
                  >
                    Events
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[14%]">
                <div className="flex items-start justify-start pl-[12px] pr-[11.65px] py-[8px]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[14px] hover:text-gray_700_7f text-gray_748 text-left w-[auto]"
                    href="javascript:"
                  >
                    Other Neighbourhoods
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                <div className="flex items-start justify-start pl-[12px] pr-[11.94px] py-[8px]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[14px] hover:text-gray_700_7f text-gray_748 text-left w-[auto]"
                    href="javascript:"
                  >
                    Death Notices
                  </a>
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                <div className="flex items-start justify-start pl-[12px] pr-[17.39px] py-[8px]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[13px] hover:text-gray_700_7f text-gray_748 text-left w-[auto]"
                    href="javascript:"
                  >
                    Organisations
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
          <div className="bg-gradient51  flex items-center justify-start p-[16px] w-[100%]">
            <div className="flex flex-col items-center justify-start max-w-[1200px] mx-[auto] md:px-[20px] px-[328px] w-[100%]">
              <Img
                src="images/img_neighbourlymarketlogosvg.svg"
                className="h-[48px] w-[auto]"
                alt="neighbourlymarketlogosvg"
              />
              <Text
                className="font-normal mt-[16px] not-italic text-center text-white_A700 w-[auto]"
                variant="body73"
              >
                Your local market for buying, selling and giving away stuff
              </Text>
              <div className="bg-gray_208 flex items-center justify-start mt-[13px] p-[8px] rounded-[8px] w-[100%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal leading-[normal] not-italic p-[0] text-[16px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                  wrapClassName="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex pb-[9px] pl-[12px] pr-[10px] pt-[12px] rounded-[4px] w-[100%]"
                  name="input"
                  placeholder="Search Neighbourly Market"
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#757575"
                      />
                    ) : (
                      <Img
                        src="images/img_search_gray_505.svg"
                        className="cursor-pointer ml-[35px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                ></Input>
              </div>
              <Button className="bg-gradient52  border-[1px] border-black_900_14 border-solid cursor-pointer font-bold min-w-[176px] mt-[12px] pb-[17.4px] pl-[34.8px] pr-[35.94px] pt-[16.6px] sm:px-[20px] rounded-[4px] shadow-bs66 text-[20px] text-center text-white_A700 w-[auto]">
                List an item
              </Button>
            </div>
          </div>
          <div className="h-[14334px] md:px-[20px] relative w-[100%]">
            <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] pb-[4px] pr-[4px] w-[81%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly mb-[12px] w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[8px] items-center justify-start md:w-[100%] w-[50%]">
                  <List
                    className="sm:flex-col flex-row gap-[4px] grid sm:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start sm:ml-[0] w-[100%]">
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[96%]">
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              packing
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[70px]"
                              variant="body78"
                            >
                              $1,400.00
                            </Text>
                          </div>
                          <div className="flex items-center justify-start p-[3px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[10px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Mini golden doodles - avail March 9th
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $20.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Microwave - Panasonic
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[15px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[548px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-center justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[6px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Louis Vuitton Monogram Canvas Bag
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $80.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Futon Bed/Sofa for sale in Epuni
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[365px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $67.00
                            </Text>
                          </div>
                          <div className="flex items-center justify-start p-[10px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[3px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Book a Trial clean to test our Service
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <Img
                          src="images/img_divadmarketitem23.svg"
                          className="h-[277px] w-[300px]"
                          alt="divadmarketitemTwentyThree"
                        />
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex h-[286px] items-start justify-start p-[8px] w-[286px]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[246px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[43px]"
                              variant="body78"
                            >
                              $6.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Durian Aroma Paste. 30ml.
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex h-[286px] items-start justify-start p-[8px] w-[286px]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[246px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Natives for your planting projects
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                              variant="body82"
                            >
                              $175.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Lazy boy chairs
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[16px] items-center justify-start mt-[15px] w-[100%]">
                          <div className="flex flex-col items-center justify-start md:w-[100%] w-[96%]">
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end rounded-[4px] shadow-bs67 w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                                  variant="body82"
                                >
                                  Negotiable
                                </Text>
                              </div>
                              <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Online midweek Garage Sale - Otaki Electrical
                                  Appliances
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[15px] rounded-[4px] shadow-bs67 w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                                  variant="body82"
                                >
                                  $30.00
                                </Text>
                              </div>
                              <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Peace lily plant
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                                  variant="body82"
                                >
                                  $100.00
                                </Text>
                              </div>
                              <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  New Panels
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_divadmarketitem23.svg"
                            className="h-[277px] w-[300px]"
                            alt="divadmarketitemFortySeven"
                          />
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[70px]"
                              variant="body78"
                            >
                              $1,000.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              English Piano
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[549px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Support frame
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[70px]"
                              variant="body78"
                            >
                              $1,000.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Labradoodle puppies (golden)
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                              variant="body82"
                            >
                              $150.00
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              {"Sony Compact Disc Player {5 Discs} $150.00"}
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[373px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              HALF PRICE TUESDAY IN THE PUKEKOHE IHC OP SHOP
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                              variant="body82"
                            >
                              $300.00
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Caroma Invisi Series 2 toilet cistern system
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                              variant="body82"
                            >
                              $100.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Terra Lana wool batts
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[263px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $40.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Panasonic 50&quot; Plasma Television
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[155px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $39.95
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Lenovo LP40 Noise Reduction Ear buds - Brand New!
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[15px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Help
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $20.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Tiger worms for sale
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $40.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              3 tier glass and chrome shelf unit.
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $30.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              3 in 1 Art Easel
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              doors - solid wood from villa reno - 11 doors with
                              keys - free
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Free boxes
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[16px] items-center justify-start mb-[7px] sm:ml-[0] w-[100%]">
                      <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[96%]">
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Re: Piano
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $20.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Mini/Bar fridge Heir
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <Img
                          src="images/img_divadmarketitem23.svg"
                          className="h-[277px] w-[300px]"
                          alt="divadmarketitemEleven"
                        />
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[318px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $25.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Sunbeam Iron
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              6 burner BBQ
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[15px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[43px]"
                              variant="body78"
                            >
                              $4.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Foaming Soap
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-start justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[280px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Free Folders, various kinds plus box of files for
                              filing drawers.
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[297px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $10.00
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              New Zealand Gourmet Shiraz Salt. 150gm. LAST ONE.
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[288px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[70px]"
                              variant="body78"
                            >
                              $8,200.00
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              A Grade 20&#39;HC New Build 1 Trip - Slate Grey
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Online Midweek Garage Sale - General household
                              Items
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $45.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Drum Pump
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[70px]"
                              variant="body78"
                            >
                              $4,000.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Mercury outboard 7.5hp
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[331px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Security System and cctv Install
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Fridge Freezer
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Home gardener rotary hoe
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[15px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                              variant="body82"
                            >
                              $520.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Single trundle bed and mattress
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $60.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Suitcase Samsonite $60
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                              variant="body82"
                            >
                              $700.00
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              10 DELL 24 inch screens plus stand and power leads
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[86px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Desk top
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[15px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex h-[286px] items-start justify-start p-[8px] w-[286px]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[246px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $10.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Tie and dye kit
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[131px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              OPUS ORCHESTRA
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[168px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Sony VHS recorder/player FREE
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] w-[100%]">
                          <div className="flex flex-col relative w-[100%]">
                            <Img
                              src="images/img_divadmarketitem23.svg"
                              className="h-[278px] mx-[auto] w-[300px]"
                              alt="divadmarketitemEightyThree"
                            />
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[-0.01px] mx-[auto] rounded-[4px] shadow-bs67 w-[97%] z-[1]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[469px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[43px]"
                                  variant="body78"
                                >
                                  $6.00
                                </Text>
                              </div>
                              <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Rengarenga (native lily)
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_divadmarketitem23.svg"
                            className="h-[278px] w-[300px]"
                            alt="divadmarketitemNinetyFive"
                          />
                          <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                            <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                              <Text
                                className="bg-gray_208 font-normal h-[24px] mb-[469px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                                variant="body82"
                              >
                                $60.00
                              </Text>
                            </div>
                            <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                              <Text
                                className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                variant="body69"
                              >
                                Tall Green Glass Jug
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex h-[286px] items-start justify-start p-[8px] w-[286px]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[246px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Celebration time with family and friends
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[99%]">
                    <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-between w-[100%]">
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex sm:flex-1 flex-col items-center justify-start sm:mt-[0] my-[6px] rounded-[4px] shadow-bs67 sm:w-[100%] w-[auto]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                            variant="body78"
                          >
                            Free
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            single lounge chair- FREE
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_divadmarketitem23.svg"
                        className="h-[278px] w-[300px]"
                        alt="divadmarketitem107"
                      />
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[8px] grid sm:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] sm:mt-[0] mt-[10px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              wooden platter. Excellent condition 1 x1.2m. Free
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[15px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $10.00
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Cable tidy - 1.5m x 12mm - brand new in box
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex h-[286px] items-start justify-start p-[8px] w-[286px]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[246px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[43px]"
                              variant="body78"
                            >
                              $5.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Crocs
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $10.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              succulents for sale
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $10.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              wetsuit-10 dollars
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                              variant="body82"
                            >
                              $100.00
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              2x Fluteline File Rack Lever Arch Metal Black
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Battery Power Pack
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $40.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Old Bus Seat
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 w-[100%]">
                            <div className="bg-gray_208 flex items-start justify-start p-[8px] w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start mb-[174px] p-[3px] rounded-[4px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_748 text-left w-[auto]"
                                  variant="body82"
                                >
                                  $15.00
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                              <Text
                                className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                variant="body69"
                              >
                                HOME DECOR
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-start justify-start rounded-[4px] shadow-bs67 w-[100%]">
                            <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                              <Text
                                className="bg-gray_208 font-normal h-[24px] mb-[262px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                                variant="body82"
                              >
                                $15.00
                              </Text>
                            </div>
                            <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                              <Text
                                className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                variant="body69"
                              >
                                CROSS STITCH Kit Chinese &quot;Tolerance&quot;
                                Size 41x43cm
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $30.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Roman blind
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[16px] items-center justify-start mb-[190px] sm:ml-[0] w-[100%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-col items-center justify-start md:w-[100%] w-[96%]">
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end rounded-[4px] shadow-bs67 w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                                  variant="body82"
                                >
                                  Negotiable
                                </Text>
                              </div>
                              <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Black fabric 2-core electric cable x 10m
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                                  variant="body82"
                                >
                                  $20.00
                                </Text>
                              </div>
                              <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Approximately 30- 40 light bulbs. Shifting.
                                  Must go.
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                                  variant="body82"
                                >
                                  $30.00
                                </Text>
                              </div>
                              <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  26 inch mountain bike
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                                  variant="body82"
                                >
                                  $20.00
                                </Text>
                              </div>
                              <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  swimming fins and paddles
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] w-[100%]">
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[161px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                                  variant="body82"
                                >
                                  $90.00
                                </Text>
                              </div>
                              <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  100% pure cotton sheet, 300 Count KING SET,
                                  NEW
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_divadmarketitem23.svg"
                              className="h-[278px] w-[300px]"
                              alt="divadmarketitem131"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start md:w-[100%] w-[96%]">
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                                  variant="body78"
                                >
                                  Free
                                </Text>
                              </div>
                              <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Jam Jars
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-start justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[140px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                                  variant="body82"
                                >
                                  $175.00
                                </Text>
                              </div>
                              <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Metal shelving (clip on)
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[162px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                                  variant="body82"
                                >
                                  $20.00
                                </Text>
                              </div>
                              <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Women Lace High Heel Shoe Blue/White UK8 /
                                  26CM
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[70px]"
                                  variant="body78"
                                >
                                  $2,000.00
                                </Text>
                              </div>
                              <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Papillon Puppy Girl
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                              <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                                <Text
                                  className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[43px]"
                                  variant="body78"
                                >
                                  $1.00
                                </Text>
                              </div>
                              <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                                  variant="body69"
                                >
                                  Pavers
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 md:w-[100%] w-[97%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Free stuffs
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[4px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[96%]">
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[440px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Russell Hobbs kettle. FREE
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                              variant="body82"
                            >
                              $250.00
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Men&#39;s Footjoy Hyperflex BOA Golf Shoes - Size
                              8 Wide
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $15.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Fireplace Screen
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                              variant="body82"
                            >
                              $150.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              iPhone 11
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[15px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[468px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              &quot;Yucca&quot; palm
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Garage Sale
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex h-[286px] items-start justify-start p-[8px] w-[286px]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[246px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $15.00
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              French Dijon Mustard In Stone Jar. 250ml. LAST JAR
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex h-[286px] items-start justify-start p-[8px] w-[286px]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[246px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[43px]"
                              variant="body78"
                            >
                              $8.00
                            </Text>
                          </div>
                          <div className="flex items-center justify-start p-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[12px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              NZ Lavender Sugar. 90gm. LAST JAR!
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                              variant="body82"
                            >
                              Negotiable
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Clock
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[15px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $80.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Varnished Louver Doors
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                              variant="body78"
                            >
                              Free
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Wanting to re home my cat please
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $70.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Hoya Plant
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[70px]"
                              variant="body78"
                            >
                              $2,000.00
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              ISTOBAL Car Hoist 2,500 kg Single Phase 240 Volts
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[78px]"
                              variant="body78"
                            >
                              $17,500.00
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Nissan Leaf EV 2017, 30 kWh, 53,000 km
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[469px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                              variant="body82"
                            >
                              $280.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Vintage Singer Sewing Machine
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_divadmarketitem23.svg"
                        className="h-[278px] w-[300px]"
                        alt="divadmarketitemFiftyNine"
                      />
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                          variant="body82"
                        >
                          $850.00
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Optimist
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[830px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                          variant="body82"
                        >
                          $28.00
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Two large activity tubes
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                          variant="body82"
                        >
                          Negotiable
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          gas fire and water heating jug
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex h-[286px] items-start justify-start p-[8px] w-[286px]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[246px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                          variant="body82"
                        >
                          $99.00
                        </Text>
                      </div>
                      <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          8 Tennis racquets and carry bag for $99
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                          variant="body82"
                        >
                          Negotiable
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Maple Trees
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                          variant="body82"
                        >
                          Negotiable
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          50 L plastic Storage bins wit lids
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[173px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                          variant="body82"
                        >
                          $95.00
                        </Text>
                      </div>
                      <div className="flex items-center justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Sony Ambue Ear Cuffs - Brand New
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[15px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                          variant="body82"
                        >
                          Negotiable
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Love Birds
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[121px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                          variant="body82"
                        >
                          $35.00
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Crystal Bowl
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[78px]"
                          variant="body78"
                        >
                          $10,610.00
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          2006 Toyota Harrier 4WD – RX350
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[15px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[469px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                          variant="body82"
                        >
                          $26.99
                        </Text>
                      </div>
                      <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          MP Women&#39;s Training Woven Shorts - Magenta
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                          variant="body82"
                        >
                          Negotiable
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          3 decent books
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[43px]"
                          variant="body78"
                        >
                          $5.00
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Hebes for sale $5
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[70px]"
                          variant="body78"
                        >
                          $2,600.00
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          mtd yardmanrideon mower
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                          variant="body82"
                        >
                          $10.00
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          new slippers
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                          variant="body82"
                        >
                          $50.00
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          Old F&P dryer for sale
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                          variant="body82"
                        >
                          $25.00
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          3 x frames
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[149px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                          variant="body82"
                        >
                          $399.00
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          TCL 40” TV
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                          variant="body78"
                        >
                          Free
                        </Text>
                      </div>
                      <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          FREE CUPBOARD HINGES
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_divadmarketitem23.svg"
                      className="h-[278px] mt-[16px] w-[300px]"
                      alt="divadmarketitem143"
                    />
                    <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                      <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_208 font-normal h-[24px] mb-[159px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                          variant="body82"
                        >
                          $80.00
                        </Text>
                      </div>
                      <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                          variant="body69"
                        >
                          LOWA Lenggries Mens Sneakers UK7.5 US8.5 EU41.5 266mm
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] w-[96%]">
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 w-[100%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                            variant="body82"
                          >
                            $100.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Slazenger Cricket Bat Size 6
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[15px] rounded-[4px] shadow-bs67 w-[100%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[70px]"
                            variant="body78"
                          >
                            $6,500.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Heartway mobility scooter
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[191px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $15.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Bike Basket
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[78px]"
                            variant="body78"
                          >
                            $10,500.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            CAR FOR SALE
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[339px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                            variant="body78"
                          >
                            Free
                          </Text>
                        </div>
                        <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Free old square cast iron porcelain bathtub
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[332px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                            variant="body82"
                          >
                            Negotiable
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Architect/Draughtsmans table
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                            variant="body78"
                          >
                            Free
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Some free plant
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[15px] rounded-[4px] shadow-bs67 w-[100%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                            variant="body78"
                          >
                            Free
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            large pots with plants in them
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 w-[100%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[252px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[78px]"
                            variant="body78"
                          >
                            $14,200.00
                          </Text>
                        </div>
                        <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            20&#39;GP Second Hand - Running Reefer - CRXU5254520
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <Img
                          src="images/img_divadmarketitem23.svg"
                          className="h-[278px] w-[300px]"
                          alt="divadmarketitemThirtyFive"
                        />
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[370px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[43px]"
                              variant="body78"
                            >
                              $3.00
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Cuban lily Bulbs (Scilla peruviana | Blue) for
                              sale
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $40.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Hoya carnosa plant
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                            variant="body82"
                          >
                            $100.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Reading glasses for near sighted
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $90.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Barkers Voucher
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                            variant="body82"
                          >
                            $200.00
                          </Text>
                        </div>
                        <div className="flex items-end justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[13px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            China Cabinet and carved coffee table
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[121px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                            variant="body82"
                          >
                            Negotiable
                          </Text>
                        </div>
                        <div className="flex items-center justify-start p-[5px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[8px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Household Furniture and Garage Sale
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[171px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $50.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Framed picture: Map of the world
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $50.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Ladies Leather Coat. $50.
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $50.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Electric Pump
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex h-[286px] items-start justify-start p-[8px] w-[286px]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[246px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $45.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              Concerto toilet seat
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_divadmarketitem23.svg"
                          className="h-[278px] w-[300px]"
                          alt="divadmarketitemSeventyOne"
                        />
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                            variant="body82"
                          >
                            Negotiable
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Garage sale
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $50.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Pram $50
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[276px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $20.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Draft stoppers
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                            variant="body78"
                          >
                            Free
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Free rocks and big pebbles
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[43px]"
                            variant="body78"
                          >
                            $0.50
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            50 c DVDs
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end mt-[15px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[164px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $85.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Rustic Slim Wooden Planter Box
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[43px]"
                            variant="body78"
                          >
                            $5.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            yellow plums and yellow nashi
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[121px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $40.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Crystal Bowl
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[469px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $69.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Wholesale carpet and install
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                            variant="body82"
                          >
                            Negotiable
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Queen sized bed base
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                            variant="body78"
                          >
                            Free
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Garage Clearance
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[74px]"
                            variant="body82"
                          >
                            Negotiable
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Household Items
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic p-[3px] rounded-[4px] text-gray_748 text-left w-[43px]"
                            variant="body78"
                          >
                            $8.00
                          </Text>
                        </div>
                        <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            NCEA 3 Chemistry - fold out notes - RRP $25
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $50.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              26 inch mountain bike
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_divadmarketitem23.svg"
                          className="h-[278px] w-[300px]"
                          alt="divadmarketitem119"
                        />
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-end rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[341px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $30.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            black Clarks school shoes
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[161px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $90.00
                          </Text>
                        </div>
                        <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            100% pure cotton sheet, 300 Count KING SET, NEW
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $10.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            ROYAL ALBERT PLATE
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex h-[286px] items-start justify-start p-[8px] w-[286px]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[246px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                            variant="body82"
                          >
                            $69.00
                          </Text>
                        </div>
                        <div className="flex items-end justify-start pl-[12px] py-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            FULL COLOUR BUSINESS CARDS - FREE DESIGN & SETUP
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic pl-[4px] pr-[7px] py-[3px] rounded-[4px] text-gray_748 text-left w-[58px]"
                            variant="body82"
                          >
                            $300.00
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Ladies Road Bike
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] md:w-[100%] w-[96%]">
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $40.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              School Desk & Chair.
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start rounded-[4px] shadow-bs67 w-[100%]">
                          <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_208 font-normal h-[24px] mb-[174px] not-italic px-[5px] py-[3px] rounded-[4px] text-gray_748 text-left w-[50px]"
                              variant="body82"
                            >
                              $15.00
                            </Text>
                          </div>
                          <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                              variant="body69"
                            >
                              HANDBAG NEW
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-bluegray_101 border-solid flex flex-col items-center justify-start mt-[16px] rounded-[4px] shadow-bs67 md:w-[100%] w-[96%]">
                        <div className="bg-gray_208 flex items-start justify-start p-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_208 font-normal h-[24px] mb-[103px] not-italic px-[4px] py-[3px] rounded-[4px] text-gray_748 text-left w-[36px]"
                            variant="body78"
                          >
                            Free
                          </Text>
                        </div>
                        <div className="flex items-start justify-start p-[12px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold my-[2px] text-black_902 text-left w-[auto]"
                            variant="body69"
                          >
                            Washing machine
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="absolute bg-white_A700 border-b-[1px] border-bluegray_101 border-solid bottom-[7%] flex inset-x-[0] items-center justify-start mx-[auto] p-[8px] w-[100%]">
              <div className="flex items-center justify-start md:w-[100%] w-[80%]">
                <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                  <Img
                    src="images/img_logogreensvg.svg"
                    className="h-[24px] w-[118px]"
                    alt="logogreensvg"
                  />
                  <div className="flex flex-row gap-[17px] items-center justify-between pl-[8px] w-[12%]">
                    <Text
                      className="font-normal not-italic text-center text-cyan_604 w-[auto]"
                      variant="body78"
                    >
                      Sign in
                    </Text>
                    <Button className="bg-gradient52  border-[1px] border-black_900_14 border-solid cursor-pointer font-normal min-w-[67px] not-italic pb-[5.6px] pl-[9.8px] pr-[9.61px] pt-[4.4px] rounded-[4px] shadow-bs66 text-[14px] text-center text-white_A700 w-[auto]">
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1232px] mx-[auto] p-[2px] md:px-[20px] w-[100%]">
          <Text
            className="font-normal sm:ml-[0] ml-[13px] sm:mt-[0] mt-[2px] not-italic text-gray_505 text-left w-[auto]"
            variant="body82"
          >
            © Neighbourly 2023
          </Text>
          <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-[20px] items-start justify-center mb-[11px] mr-[13px] sm:w-[100%] w-[auto]">
            <Text
              className="font-normal sm:mt-[0] mt-[2px] not-italic text-gray_505 text-left w-[auto]"
              variant="body91"
            >
              About
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[9px] sm:mt-[0] mt-[2px] not-italic text-gray_505 text-left w-[auto]"
              variant="body91"
            >
              Mobile
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[9px] sm:mt-[0] mt-[2px] not-italic text-gray_505 text-left w-[auto]"
              variant="body87"
            >
              Privacy
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[8px] not-italic text-gray_505 text-left w-[auto]"
              variant="body87"
            >
              Safety
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[8px] not-italic text-gray_505 text-left w-[auto]"
              variant="body87"
            >
              Guidelines
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[8px] not-italic text-gray_505 text-left w-[auto]"
              variant="body87"
            >
              Help
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[7px] sm:mt-[0] mt-[2px] not-italic text-gray_505 text-left w-[auto]"
              variant="body91"
            >
              Terms
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[9px] sm:mt-[0] mt-[3px] not-italic text-gray_505 text-left w-[auto]"
              variant="body91"
            >
              Organisations
            </Text>
            <Text
              className="font-normal sm:ml-[0] ml-[13px] mr-[3px] sm:mt-[0] mt-[2px] not-italic text-gray_505 text-left w-[auto]"
              variant="body91"
            >
              Contact us
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default HttpswwwneighbourlyconzpublicmarketPage;
