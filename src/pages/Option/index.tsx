import React from "react";

import {
  Text,
  Img,
  Button,
  Input,
  SelectBox,
  FloatingInput,
  List,
  PagerIndicator,
  Line,
} from "components";

const OptionPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-white_A700 flex items-center justify-center w-[100%]">
              <div className="bg-white_A700 border-b-[1px] border-black_900 border-solid flex items-center justify-center w-[100%]">
                <div className="flex flex-col items-center justify-center w-[100%]">
                  <div className="h-[36px] relative w-[100%]">
                    <div className="flex flex-row gap-[22px] h-[100%] items-center justify-center ml-[auto] mr-[40px] my-[auto] sm:pl-[20px] pl-[22px] py-[8px] w-[auto]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_51 text-left w-[auto]"
                          variant="body91"
                        >
                          <span className="text-gray_51 text-[11px] font-inter">
                            Become a{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-white_A700 text-[11px] font-inter font-semibold underline"
                          >
                            Zola vendor
                          </a>
                        </Text>
                      </div>
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_51 text-left w-[auto]"
                          variant="body91"
                        >
                          <span className="text-gray_51 text-[11px] font-inter">
                            Shop{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-white_A700 text-[11px] font-inter font-semibold underline"
                          >
                            Zola Home
                          </a>
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bg-teal_901 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[10px] w-[100%]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-center text-cyan_A100 w-[auto]"
                          variant="body82"
                        >
                          FREE SHIPPING EVERY DAY details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[16px] w-[100%]">
                      <ul className="flex md:flex-1 sm:flex-col flex-row md:hidden items-start justify-start md:ml-[0] ml-[24px] sm:pr-[20px] pr-[380px] md:pr-[40px] md:w-[100%] w-[45%] common-row-list">
                        <li className="sm:w-[100%] sm:my-[10px] w-[31%]">
                          <div className="flex flex-row gap-[0.97px] items-center justify-start">
                            <a
                              className="capitalize cursor-pointer font-semibold text-[13px] text-black_900 text-center w-[auto]"
                              href="javascript:"
                            >
                              Plan your wedding
                            </a>
                            <Img
                              src="images/img_arrowdown_black_900_20x20.svg"
                              className="h-[20px] w-[20px]"
                              alt="arrowdown"
                            />
                          </div>
                        </li>
                        <li className="ml-[32px] sm:w-[100%] sm:my-[10px] w-[38%]">
                          <div className="flex flex-row gap-[4.59px] items-center justify-start">
                            <a
                              className="capitalize cursor-pointer font-semibold text-[13px] text-black_900 text-left w-[auto]"
                              href="javascript:"
                            >
                              Community and advice
                            </a>
                            <Img
                              src="images/img_arrowdown_black_900_20x20.svg"
                              className="h-[20px] w-[20px]"
                              alt="arrowdown One"
                            />
                          </div>
                        </li>
                        <li className="mt-[3px] mb-[1px] ml-[32px] sm:w-[100%] sm:my-[10px] w-[auto]">
                          <a
                            className="cursor-pointer font-semibold text-[13px] text-black_900 text-left"
                            href="javascript:"
                          >
                            Find a couple
                          </a>
                        </li>
                      </ul>
                      <Img
                        src="images/img_svg_black_900.svg"
                        className="h-[24px] w-[auto]"
                        alt="svg"
                      />
                      <div className="flex md:flex-1 flex-row items-center justify-center sm:pl-[20px] md:pl-[40px] pl-[541px] md:w-[100%] w-[45%]">
                        <Img
                          src="images/img_search_white_a700.svg"
                          className="h-[44px] rounded-[50%] w-[44px]"
                          alt="search"
                        />
                        <Button className="bg-white_A700 flex h-[44px] items-center justify-center p-[13px] rounded-[50%] w-[44px]">
                          <Img
                            src="images/img_vector_black_900.svg"
                            className="h-[16px]"
                            alt="Vector"
                          />
                        </Button>
                        <Button className="bg-white_A700 border-[1px] border-black_900 border-solid cursor-pointer font-semibold min-w-[78px] ml-[8px] pb-[11.42px] pl-[17px] pr-[17.81px] pt-[9.58px] rounded-[22px] text-[15px] text-black_900 text-center w-[auto]">
                          Log in
                        </Button>
                        <Button className="bg-black_900 cursor-pointer font-semibold min-w-[117px] ml-[8px] pb-[11.42px] pl-[17px] pr-[17.11px] pt-[9.58px] rounded-[22px] text-[15px] text-center text-white_A700 w-[auto]">
                          Get started
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="border-black_900 border-solid border-t-[1px] flex items-center justify-end p-[16px] w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start sm:px-[20px] md:px-[40px] px-[679px] md:w-[100%] w-[96%]">
                      <Text
                        className="font-normal sm:mt-[0] mt-[4px] not-italic text-black_900 text-left w-[auto]"
                        variant="body82"
                      >
                        Real wedding inspiration
                      </Text>
                      <div className="flex flex-row gap-[6px] items-center justify-center sm:ml-[0] ml-[33px] sm:w-[100%] w-[27%]">
                        <Text
                          className="font-semibold mt-[3px] text-black_900 text-left w-[auto]"
                          variant="body82"
                        >
                          Explore vendors
                        </Text>
                        <Img
                          src="images/img_arrowdown_black_900.svg"
                          className="h-[5px] w-[auto]"
                          alt="arrowdown Two"
                        />
                      </div>
                      <Text
                        className="font-normal sm:ml-[0] ml-[32px] sm:mt-[0] mt-[3px] not-italic text-black_900 text-left w-[auto]"
                        variant="body82"
                      >
                        Become a vendor
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
            <div className="bg-gray_102 flex flex-col justify-end w-[100%]">
              <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start md:ml-[0] ml-[260px] mr-[auto] mt-[39px] pt-[4px] md:px-[20px] md:w-[100%] w-[auto]">
                <Input
                  className="font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
                  wrapClassName="bg-white_A700 border-[2px] border-bluegray_101 border-solid flex md:w-[100%] pl-[10px] pr-[12px] py-[13px] rounded-[4px] sm:w-[100%] w-[40%]"
                  name="div"
                  placeholder="New York, NY"
                  prefix={
                    <Img
                      src="images/img_location.svg"
                      className="my-[auto]"
                      alt="location"
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_close.svg"
                      className="my-[auto]"
                      alt="close"
                    />
                  }
                ></Input>
                <Input
                  className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
                  wrapClassName="bg-white_A700 border-[2px] border-bluegray_101 border-solid flex md:w-[100%] pl-[10px] pr-[12px] py-[13px] rounded-[4px] sm:w-[100%] w-[40%]"
                  name="div One"
                  placeholder="Venues"
                  prefix={
                    <Img
                      src="images/img_location_black_900.svg"
                      className="my-[auto]"
                      alt="location"
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_close.svg"
                      className="my-[auto]"
                      alt="close"
                    />
                  }
                ></Input>
                <Button className="bg-black_900 cursor-pointer font-semibold min-w-[133px] py-[12px] rounded-[22px] text-[15px] text-center text-white_A700 w-[auto]">
                  Search
                </Button>
              </div>
              <div className="bg-gray_102 flex items-center justify-start mt-[20px] w-[100%]">
                <div className="bg-gray_102 flex items-center justify-start sm:px-[20px] px-[250px] md:px-[40px] w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[20px] items-center justify-center max-w-[1420px] mx-[auto] pl-[10px] py-[10px] w-[100%]">
                    <div className="bg-gray_102 flex md:flex-1 md:flex-col flex-row gap-[8px] items-start justify-start md:mt-[0] my-[31px] sm:pr-[20px] pr-[300px] md:pr-[40px] md:w-[100%] w-[auto]">
                      <SelectBox
                        className="bg-white_A700 border-[1px] border-gray_401 border-solid font-normal not-italic px-[17px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center w-[10%] md:w-[100%]"
                        placeholderClassName="text-black_900"
                        name="button"
                        placeholder="Price"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_black_900.svg"
                            className="h-[16px] w-[14px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <SelectBox
                        className="bg-white_A700 border-[1px] border-gray_401 border-solid font-normal not-italic px-[17px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center md:w-[100%] w-[15%]"
                        placeholderClassName="text-black_900"
                        name="button One"
                        placeholder="Availability"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_black_900.svg"
                            className="h-[16px] w-[14px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <SelectBox
                        className="bg-white_A700 border-[1px] border-gray_401 border-solid font-normal not-italic px-[17px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center md:w-[100%] w-[13%]"
                        placeholderClassName="text-black_900"
                        name="button Two"
                        placeholder="Capacity"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_black_900.svg"
                            className="h-[16px] w-[14px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <SelectBox
                        className="bg-white_A700 border-[1px] border-gray_401 border-solid font-normal not-italic px-[17px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center md:w-[100%] w-[18%]"
                        placeholderClassName="text-black_900"
                        name="button Three"
                        placeholder="Indoor/outdoor"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_black_900.svg"
                            className="h-[16px] w-[14px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <SelectBox
                        className="bg-white_A700 border-[1px] border-gray_401 border-solid font-normal not-italic px-[17px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center md:w-[100%] w-[15%]"
                        placeholderClassName="text-black_900"
                        name="button Four"
                        placeholder="Venue type"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_black_900.svg"
                            className="h-[16px] w-[14px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <SelectBox
                        className="bg-white_A700 border-[1px] border-gray_401 border-solid font-normal not-italic px-[17px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center md:w-[100%] w-[13%]"
                        placeholderClassName="text-black_900"
                        name="button Five"
                        placeholder="Included"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_black_900.svg"
                            className="h-[16px] w-[14px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <Button className="bg-white_A700 border-[1px] border-gray_401 border-solid cursor-pointer font-normal min-w-[116px] not-italic pl-[18px] pr-[17.16px] py-[13px] rounded-[16px] text-[15px] text-black_900 text-center w-[auto]">
                        More filters
                      </Button>
                    </div>
                    <FloatingInput
                      className="placeholder:bg-gray_102 bg-transparent border-[0] flex-1 font-semibold placeholder:left-[20px] text-[14px] text-center placeholder:text-cyan_900 text-white_A700 placeholder:top-[0] top-[0] w-[100%]"
                      name="div Two"
                      labelClasses="bg-gray_102 left-[20px] top-[0] text-cyan_900"
                      focusedClasses="translate-y-[22px] scale-[1]"
                      wrapperClasses="mt-[20px] mb-[30px] sm:w-[100%] sm:mx-[0] w-[12%] top-[0]"
                      labelText="New"
                      defaultText="Save this search"
                    ></FloatingInput>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[1420px] mt-[24px] mx-[auto] md:px-[20px] w-[100%]">
                <div className="bg-gray_102 flex items-center justify-start pb-[65px] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[99%]">
                      <Text
                        className="capitalize font-normal not-italic text-gray_800 text-left w-[auto]"
                        variant="body56"
                      >
                        Showing 250 results
                      </Text>
                      <div className="flex flex-row gap-[10.13px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-[auto]"
                          variant="body78"
                        >
                          Sort by
                        </Text>
                        <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                          <SelectBox
                            className="bg-white_A700 border-[1px] border-gray_306 border-solid font-normal leading-[normal] not-italic pl-[13px] sm:pr-[20px] pr-[33px] py-[12.5px] rounded-[4px] text-[14px] text-black_900 text-left w-[100%]"
                            placeholderClassName="text-black_900"
                            name="input"
                            placeholder="Best match"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_black_900.svg"
                                className="h-[16px] w-[16px]"
                                alt="arrow_down"
                              />
                            }
                          ></SelectBox>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start mt-[10px] p-[10px] w-[100%]">
                      <div className="flex flex-col gap-[40px] items-center justify-start mb-[20px] w-[100%]">
                        <List
                          className="flex-col gap-[40px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex-1 gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between my-[0] w-[100%]">
                            <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                              <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                      <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                        <Img
                                          src="images/img_ffac3ae5523b4.png"
                                          className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                          alt="ffac3ae5523bFour"
                                        />
                                        <PagerIndicator
                                          className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                          count={5}
                                          activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                          activeIndex={1}
                                          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                          selectedWrapperCss="inline-block mx-[4.00px]"
                                          unselectedWrapperCss="inline-block mx-[4.00px]"
                                        />
                                        <Img
                                          src="images/img_arrowdown.svg"
                                          className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                          alt="arrowdown Three"
                                        />
                                        <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                          Quick responder
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[8px] items-start justify-start pt-[12px] w-[auto]">
                                <div className="flex items-start justify-start pl-[8.39px] pr-[204.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    venue • Brooklyn, NY
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-gray_904 text-left w-[auto]"
                                  variant="body64"
                                >
                                  501 Union
                                </Text>
                                <div className="flex flex-col items-start justify-start w-[100%]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal leading-[18.00px] md:max-w-[100%] max-w-[292px] not-italic text-gray_904 text-left"
                                      variant="body78"
                                    >
                                      <span className="text-gray_904 text-[14px] font-inter">
                                        Up to 160 guests{" "}
                                      </span>
                                      <span className="text-gray_904 text-[10px] font-inter">
                                        •
                                      </span>
                                      <span className="text-gray_904 text-[14px] font-inter">
                                        {" "}
                                        Limited services{" "}
                                      </span>
                                      <span className="text-gray_904 text-[10px] font-inter">
                                        •
                                      </span>
                                      <span className="text-gray_904 text-[14px] font-inter">
                                        {" "}
                                        Indoor & outdoor
                                      </span>
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    Starts at $5,000
                                  </Text>
                                  <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[195px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                    <Img
                                      src="images/img_thumbsup.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="thumbsup"
                                    />
                                    <Text
                                      className="font-semibold text-gray_904 text-left w-[auto]"
                                      variant="body82"
                                    >
                                      1 Recommendation
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                              <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                      <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                        <Img
                                          src="images/img_57617edd4ab54.png"
                                          className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                          alt="57617edd4abFiftyFour"
                                        />
                                        <PagerIndicator
                                          className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                          count={5}
                                          activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                          activeIndex={1}
                                          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                          selectedWrapperCss="inline-block mx-[4.00px]"
                                          unselectedWrapperCss="inline-block mx-[4.00px]"
                                        />
                                        <Img
                                          src="images/img_arrowdown.svg"
                                          className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                          alt="arrowdown One"
                                        />
                                        <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                          Quick responder
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[8px] items-start justify-start pb-[18px] pt-[12px] w-[auto]">
                                <div className="flex items-start justify-start pl-[8.39px] pr-[163.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    venue • Long Island City, NY
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-gray_904 text-left w-[auto]"
                                  variant="body64"
                                >
                                  Sound River Studios
                                </Text>
                                <div className="flex flex-col items-start justify-start w-[100%]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                      variant="body82"
                                    >
                                      Up to 250 guests • Raw space • Indoor &
                                      outdoor
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    Starts at $8,000
                                  </Text>
                                  <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[185px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                    <Img
                                      src="images/img_thumbsup.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="thumbsup One"
                                    />
                                    <Text
                                      className="font-semibold text-gray_904 text-left w-[auto]"
                                      variant="body82"
                                    >
                                      6 Recommendations
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                              <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                      <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                        <Img
                                          src="images/img_46eab33a59b84.png"
                                          className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                          alt="46eab33a59bEightyFour"
                                        />
                                        <PagerIndicator
                                          className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                          count={5}
                                          activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                          activeIndex={1}
                                          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                          selectedWrapperCss="inline-block mx-[4.00px]"
                                          unselectedWrapperCss="inline-block mx-[4.00px]"
                                        />
                                        <Img
                                          src="images/img_arrowdown.svg"
                                          className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                          alt="arrowdown Two"
                                        />
                                        <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                          Quick responder
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[8px] items-start justify-start pb-[40px] pt-[12px] w-[auto]">
                                <div className="flex items-start justify-start pl-[8.39px] pr-[204.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    venue • Brooklyn, NY
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-gray_904 text-left w-[auto]"
                                  variant="body61"
                                >
                                  Brooklyn Winery
                                </Text>
                                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                      variant="body82"
                                    >
                                      Up to 165 guests • All-inclusive • Indoor
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[4px] items-center justify-start pr-[185px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                    <Img
                                      src="images/img_thumbsup.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="thumbsup Two"
                                    />
                                    <Text
                                      className="font-semibold text-gray_904 text-left w-[auto]"
                                      variant="body82"
                                    >
                                      4 Recommendations
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                              <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                      <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                        <Img
                                          src="images/img_7fafc5153bb74.png"
                                          className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                          alt="7fafc5153bbSeventyFour"
                                        />
                                        <PagerIndicator
                                          className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                          count={5}
                                          activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                          activeIndex={1}
                                          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                          selectedWrapperCss="inline-block mx-[4.00px]"
                                          unselectedWrapperCss="inline-block mx-[4.00px]"
                                        />
                                        <Img
                                          src="images/img_arrowdown.svg"
                                          className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                          alt="arrowdown Three"
                                        />
                                        <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                          Quick responder
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[8px] items-start justify-start pb-[18px] pt-[12px] w-[auto]">
                                <div className="flex items-start justify-start pl-[8.39px] pr-[204.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    venue • Brooklyn, NY
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-gray_904 text-left w-[auto]"
                                  variant="body64"
                                >
                                  MyMoon Restaurant + Event Venue
                                </Text>
                                <div className="flex flex-col items-start justify-start w-[100%]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                      variant="body82"
                                    >
                                      Up to 166 guests • All-inclusive • Indoor
                                      & outdoor
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    Starts at $11,000
                                  </Text>
                                  <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[186px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                    <Img
                                      src="images/img_thumbsup.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="thumbsup Three"
                                    />
                                    <Text
                                      className="font-semibold text-gray_904 text-left w-[auto]"
                                      variant="body82"
                                    >
                                      2 Recommendations
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between my-[0] w-[100%]">
                            <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                              <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                      <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                        <Img
                                          src="images/img_ebda28ec57d94.png"
                                          className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                          alt="ebda28ec57dNinetyFour"
                                        />
                                        <PagerIndicator
                                          className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                          count={5}
                                          activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                          activeIndex={1}
                                          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                          selectedWrapperCss="inline-block mx-[4.00px]"
                                          unselectedWrapperCss="inline-block mx-[4.00px]"
                                        />
                                        <Img
                                          src="images/img_arrowdown.svg"
                                          className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                          alt="arrowdown Four"
                                        />
                                        <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                          Quick responder
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[8px] items-start justify-start pb-[18px] pt-[12px] w-[auto]">
                                <div className="flex items-start justify-start pl-[8.39px] pr-[204.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    venue • Brooklyn, NY
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-gray_904 text-left w-[auto]"
                                  variant="body64"
                                >
                                  99 Scott
                                </Text>
                                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                      variant="body82"
                                    >
                                      Up to 400 guests • Raw space • Indoor &
                                      outdoor
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    Starts at $12,000
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                              <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                      <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                        <Img
                                          src="images/img_31548768defa4.png"
                                          className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                          alt="31548768defaFour"
                                        />
                                        <PagerIndicator
                                          className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                          count={5}
                                          activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                          activeIndex={1}
                                          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                          selectedWrapperCss="inline-block mx-[4.00px]"
                                          unselectedWrapperCss="inline-block mx-[4.00px]"
                                        />
                                        <Img
                                          src="images/img_arrowdown.svg"
                                          className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                          alt="arrowdown One One"
                                        />
                                        <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                          Quick responder
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[8px] items-start justify-start pt-[12px] w-[auto]">
                                <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    venue • New York, NY
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-gray_904 text-left w-[auto]"
                                  variant="body64"
                                >
                                  Penthouse 45
                                </Text>
                                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal leading-[18.00px] md:max-w-[100%] max-w-[285px] not-italic text-gray_904 text-left"
                                      variant="body78"
                                    >
                                      <span className="text-gray_904 text-[14px] font-inter">
                                        Up to 75 guests{" "}
                                      </span>
                                      <span className="text-gray_904 text-[10px] font-inter">
                                        •
                                      </span>
                                      <span className="text-gray_904 text-[14px] font-inter">
                                        {" "}
                                        Limited services{" "}
                                      </span>
                                      <span className="text-gray_904 text-[10px] font-inter">
                                        •
                                      </span>
                                      <span className="text-gray_904 text-[14px] font-inter">
                                        {" "}
                                        Indoor & outdoor
                                      </span>
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    Starts at $5,000
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                              <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                      <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                        <Img
                                          src="images/img_f3fba4f306f24.png"
                                          className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                          alt="f3fba4f306fTwentyFour"
                                        />
                                        <PagerIndicator
                                          className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                          count={5}
                                          activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                          activeIndex={1}
                                          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                          selectedWrapperCss="inline-block mx-[4.00px]"
                                          unselectedWrapperCss="inline-block mx-[4.00px]"
                                        />
                                        <Img
                                          src="images/img_arrowdown.svg"
                                          className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                          alt="arrowdown Two One"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[8px] items-start justify-start pb-[18px] pt-[12px] w-[auto]">
                                <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    venue • New York, NY
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-gray_904 text-left w-[auto]"
                                  variant="body64"
                                >
                                  Pera Soho
                                </Text>
                                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                      variant="body82"
                                    >
                                      Up to 220 guests • All-inclusive • Indoor
                                      & outdoor
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body87"
                                  >
                                    Starts at $12,500
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-light_green_100 flex flex-1 flex-col items-center justify-start p-[44px] sm:px-[20px] md:px-[40px] rounded-[20px] w-[100%]">
                              <Img
                                src="images/img_search_cyan_900.svg"
                                className="h-[60px] w-[60px]"
                                alt="search Two"
                              />
                              <div className="flex flex-col items-center justify-start mt-[11px] md:w-[100%] w-[92%]">
                                <Text
                                  className="font-normal not-italic text-center text-cyan_900 tracking-[-1.28px] w-[auto]"
                                  variant="body39"
                                >
                                  How much
                                </Text>
                                <div className="flex flex-col items-center justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-center text-cyan_900 tracking-[-1.28px] w-[auto]"
                                    variant="body40"
                                  >
                                    should you spend
                                  </Text>
                                  <div className="flex items-start justify-start pb-[0.19px] pl-[11.88px] pr-[13.69px] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-center text-cyan_900 tracking-[-1.28px] w-[auto]"
                                      variant="body39"
                                    >
                                      <span className="md:text-[28px] sm:text-[26px] text-cyan_900 text-[30px] font-inter">
                                        on your{" "}
                                      </span>
                                      <span className="md:text-[28px] sm:text-[26px] text-cyan_900 text-[30px] font-inter font-medium">
                                        venue?
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Button className="bg-light_green_100 border-[1px] border-cyan_900 border-solid cursor-pointer font-semibold mb-[16px] min-w-[186px] mt-[23px] pb-[11.42px] pl-[17px] pr-[16.39px] pt-[9.58px] rounded-[22px] text-[15px] text-center text-cyan_900 w-[auto]">
                                Take the budget quiz
                              </Button>
                            </div>
                          </div>
                        </List>
                        <div className="gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_6171bba281064.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="6171bba281064"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Five"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[18px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[204.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • Brooklyn, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                The Dumbo Loft
                              </Text>
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 140 guests • Raw space • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $3,000
                                </Text>
                                <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[186px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup One"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    2 Recommendations
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_54880f6105d04.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="54880f6105dFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Six"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[18px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[204.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • Brooklyn, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                The W Loft
                              </Text>
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 90 guests • Raw space • Indoor &
                                    outdoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $2,500
                                </Text>
                                <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[186px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Two"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    2 Recommendations
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_1811add8cd554.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="1811add8cd554"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Seven"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[204.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • Brooklyn, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Dobbin St
                              </Text>
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal leading-[18.00px] md:max-w-[100%] max-w-[295px] not-italic text-gray_904 text-left"
                                    variant="body78"
                                  >
                                    <span className="text-gray_904 text-[14px] font-inter">
                                      Up to 200 guests{" "}
                                    </span>
                                    <span className="text-gray_904 text-[10px] font-inter">
                                      •
                                    </span>
                                    <span className="text-gray_904 text-[14px] font-inter">
                                      {" "}
                                      Limited services{" "}
                                    </span>
                                    <span className="text-gray_904 text-[10px] font-inter">
                                      •
                                    </span>
                                    <span className="text-gray_904 text-[14px] font-inter">
                                      {" "}
                                      Indoor & outdoor
                                    </span>
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $5,500
                                </Text>
                                <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[186px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Three"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    2 Recommendations
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_44cf9e1e46e54.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="44cf9e1e46eFiftyFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Eight"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[18px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                Tribeca Rooftop
                              </Text>
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 300 guests • All-inclusive • Indoor &
                                    outdoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $45,000
                                </Text>
                                <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[195px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Four"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    1 Recommendation
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_e08df77909e04.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="e08df77909eFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Nine"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[46px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Bryant Park Grill
                              </Text>
                              <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 220 guests • All-inclusive • Indoor &
                                    outdoor
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[4px] items-center justify-start pr-[185px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Five"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    6 Recommendations
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_75b59cc8469b4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="75b59cc8469bFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Ten"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold leading-[24.00px] md:max-w-[100%] max-w-[323px] text-gray_904 text-left"
                                variant="body60"
                              >
                                Francesca&#39;s Touch of Class Events - Premium
                                Yacht Charters
                              </Text>
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 1200 guests • All-inclusive
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $6,000
                                </Text>
                                <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[195px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Six"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    1 Recommendation
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_c83daa934b784.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="c83daa934b784"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Eleven"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[50px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                Triangle Loft
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 180 guests • Limited services • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $15,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_3b7d4bae6f5f4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="3b7d4bae6f5fFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Twelve"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[46px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                Robert
                              </Text>
                              <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 120 guests • All-inclusive • Indoor
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[4px] items-center justify-start pr-[195px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Seven"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    1 Recommendation
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_356bf96346504.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="356bf96346504"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Thirteen"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[40px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                Ramscale Penthouse
                              </Text>
                              <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 80 guests • Raw space • Indoor &
                                    outdoor
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[4px] items-center justify-start pr-[185px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Eight"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    3 Recommendations
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_f03c0c3de12b4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="f03c0c3de12bFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Fourteen"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                Peasant Restaurant
                              </Text>
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal leading-[18.00px] md:max-w-[100%] max-w-[285px] not-italic text-gray_904 text-left"
                                    variant="body78"
                                  >
                                    <span className="text-gray_904 text-[14px] font-inter">
                                      Up to 75 guests{" "}
                                    </span>
                                    <span className="text-gray_904 text-[10px] font-inter">
                                      •
                                    </span>
                                    <span className="text-gray_904 text-[14px] font-inter">
                                      {" "}
                                      Limited services{" "}
                                    </span>
                                    <span className="text-gray_904 text-[10px] font-inter">
                                      •
                                    </span>
                                    <span className="text-gray_904 text-[14px] font-inter">
                                      {" "}
                                      Indoor & outdoor
                                    </span>
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $20,000
                                </Text>
                                <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[195px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Nine"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    1 Recommendation
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_c8be9c30f6a74.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="c8be9c30f6aSeventyFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Fifteen"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[18px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                The Sanctuary RI
                              </Text>
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 300 guests • All-inclusive • Indoor &
                                    outdoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $10,000
                                </Text>
                                <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[186px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Ten"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    2 Recommendations
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_0141b93078df4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="0141b93078dfFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Sixteen"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[40px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                The Lofts At Prince
                              </Text>
                              <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 45 guests • Limited services
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[4px] items-center justify-start pr-[186px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Eleven"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    2 Recommendations
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_f80556c67bf54.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="f80556c67bfFiftyFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Seventeen"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[22px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Gran Morsi
                              </Text>
                              <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 110 guests • All-inclusive • Indoor &
                                    outdoor
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[4px] items-center justify-start pr-[195px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Twelve"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    1 Recommendation
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_4300b66f99934.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="4300b66f99934"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Eighteen"
                                      />
                                      <Button
                                        className="absolute bg-cyan_A100 flex items-center justify-center left-[2%] min-w-[80px] px-[8px] py-[5px] rounded-[4px] shadow-bs10 text-center top-[4%] w-[auto]"
                                        leftIcon={
                                          <Img
                                            src="images/img_trendingup3f8197cbsvg.svg"
                                            className="mr-[4px] text-center right-[1%] absolute"
                                            alt="trending-up.3f8197cb..svg"
                                          />
                                        }
                                      >
                                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[11px] text-bluegray_908 text-left">
                                          Trending
                                        </div>
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                620 Loft & Garden
                              </Text>
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 120 guests • Raw space • Indoor &
                                    outdoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $11,500
                                </Text>
                                <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[195px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Thirteen"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    1 Recommendation
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_c2548bb8fd464.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="c2548bb8fd464"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Nineteen"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Altesi
                              </Text>
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 70 guests • All-inclusive • Indoor &
                                    outdoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $5,000
                                </Text>
                                <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[195px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Fourteen"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    1 Recommendation
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_9f76b548d6fb4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="9f76b548d6fbFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Twenty"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[26px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                45 Downing
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 100 guests • Limited services • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $5,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_d24d26c389844.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="d24d26c389844"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown TwentyOne"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[26px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                The Raines Law Room Chelsea
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 75 guests • All-inclusive • Indoor &
                                    outdoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $2,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_27d0c6dc8fd74.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="27d0c6dc8fdSeventyFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown TwentyTwo"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[26px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                New York Marble Cemetery
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 150 guests • Raw space • Outdoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $3,500
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_00a2f1cdf1624.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="00a2f1cdf1624"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown TwentyThree"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Harding&#39;s
                              </Text>
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 100 guests • All-inclusive • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $12,000
                                </Text>
                                <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[185px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Fifteen"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    4 Recommendations
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_2370c7a3d1944.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="2370c7a3d1944"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown TwentyFour"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[26px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Go Sailing NYC
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 6 guests • All-inclusive • Outdoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $600
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_ca7fdaa6e44f4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="ca7fdaa6e44fFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown TwentyFive"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start py-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                The Pier Sixty Collection
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 800 guests • All-inclusive • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $22,500
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_1d3892477c8b4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="1d3892477c8bFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown TwentySix"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[34px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Il Fiorista
                              </Text>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Up to 75 guests • All-inclusive • Indoor
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_50ba2176bf684.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="50ba2176bf684"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown TwentySeven"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[34px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Dear Irving Gramercy
                              </Text>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Up to 100 guests • All-inclusive • Indoor
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_8e2382a8e4874.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="8e2382a8e4874"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown TwentyEight"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[34px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                The Altman Building
                              </Text>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Up to 350 guests • Limited services • Indoor
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_3abc6c2f2f034.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="3abc6c2f2f034"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown TwentyNine"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[34px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold leading-[24.00px] md:max-w-[100%] max-w-[261px] text-gray_904 text-left"
                                variant="body60"
                              >
                                The Raines Law Room at The William
                              </Text>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Up to 100 guests • All-inclusive • Indoor &
                                  outdoor
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_0f7907f3d6704.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="0f7907f3d6704"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Thirty"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[58px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                NoMo SoHo
                              </Text>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Up to 120 guests • All-inclusive • Indoor &
                                  outdoor
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_795fb7a2eb234.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="795fb7a2eb234"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown ThirtyOne"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[40px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                The Standard, East Village
                              </Text>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal leading-[18.00px] md:max-w-[100%] max-w-[287px] not-italic text-gray_904 text-left"
                                  variant="body78"
                                >
                                  <span className="text-gray_904 text-[14px] font-inter">
                                    Up to 50 guests{" "}
                                  </span>
                                  <span className="text-gray_904 text-[10px] font-inter">
                                    •
                                  </span>
                                  <span className="text-gray_904 text-[14px] font-inter">
                                    {" "}
                                    Limited services{" "}
                                  </span>
                                  <span className="text-gray_904 text-[10px] font-inter">
                                    •
                                  </span>
                                  <span className="text-gray_904 text-[14px] font-inter">
                                    {" "}
                                    Indoor & outdoor
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_b6b4357777a14.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="b6b4357777aFourteen"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown ThirtyTwo"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[34px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold leading-[24.00px] md:max-w-[100%] max-w-[330px] text-gray_904 text-left"
                                variant="body60"
                              >
                                Red Rooster Harlem/Ginny&#39;s Supper Club
                              </Text>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Up to 110 guests • All-inclusive • Indoor
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_a699b468816d4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="a699b468816dFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown ThirtyThree"
                                      />
                                      <Button
                                        className="absolute bg-cyan_A100 flex items-center justify-center left-[2%] min-w-[80px] px-[8px] py-[5px] rounded-[4px] shadow-bs10 text-center top-[4%] w-[auto]"
                                        leftIcon={
                                          <Img
                                            src="images/img_trendingup3f8197cbsvg.svg"
                                            className="mr-[4px] text-center right-[1%] absolute"
                                            alt="trending-up.3f8197cb..svg"
                                          />
                                        }
                                      >
                                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[11px] text-bluegray_908 text-left">
                                          Trending
                                        </div>
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[42px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Home Studios Inc
                              </Text>
                              <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 150 guests • Limited services • Indoor
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[4px] items-center justify-start pr-[195px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Sixteen"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    1 Recommendation
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_22fcfcf315694.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="22fcfcf315694"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown ThirtyFour"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold leading-[24.00px] md:max-w-[100%] max-w-[270px] text-gray_904 text-left"
                                variant="body60"
                              >
                                Library Hotel by Library Hotel Collection
                              </Text>
                              <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal leading-[18.00px] md:max-w-[100%] max-w-[287px] not-italic text-gray_904 text-left"
                                    variant="body78"
                                  >
                                    <span className="text-gray_904 text-[14px] font-inter">
                                      Up to 30 guests{" "}
                                    </span>
                                    <span className="text-gray_904 text-[10px] font-inter">
                                      •
                                    </span>
                                    <span className="text-gray_904 text-[14px] font-inter">
                                      {" "}
                                      Limited services{" "}
                                    </span>
                                    <span className="text-gray_904 text-[10px] font-inter">
                                      •
                                    </span>
                                    <span className="text-gray_904 text-[14px] font-inter">
                                      {" "}
                                      Indoor & outdoor
                                    </span>
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[4px] items-center justify-start pr-[185px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Seventeen"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    3 Recommendations
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_ec8ea732753b4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="ec8ea732753bFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown ThirtyFive"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[46px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                One Fifth
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 200 guests • Limited services • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $10,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_08a2c9bffb984.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="08a2c9bffb984"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown ThirtySix"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[68px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                St. Regis New York
                              </Text>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Up to 220 guests • All-inclusive • Indoor
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_a93a7478ef1f4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="a93a7478ef1fFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown ThirtySeven"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start py-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                New Museum
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 200 guests • Raw space • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $14,500
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_c1a23ff2e3304.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="c1a23ff2e3304"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown ThirtyEight"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start py-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                85 Broad
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 150 guests • Limited services • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $6,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_a979efd93ddb4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="a979efd93ddbFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown ThirtyNine"
                                      />
                                      <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[2%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                        Quick responder
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start py-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                The Farm Soho Rooftop
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 50 guests • Limited services • Outdoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $3,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_25c5b54a8ed74.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="25c5b54a8edSeventyFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Forty"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start py-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                HK Hall
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 300 guests • Limited services • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $50,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_6b69bd9eb36a4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="6b69bd9eb36aFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FortyOne"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[26px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Maison Sun LLC
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 50 guests • All-inclusive • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $15,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_dbae5740ab794.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="dbae5740ab794"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FortyTwo"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Bottino
                              </Text>
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 100 guests • All-inclusive • Indoor &
                                    outdoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $10,000
                                </Text>
                                <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[185px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Eighteen"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    3 Recommendations
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_89885b0d62a94.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="89885b0d62aNinetyFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FortyThree"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[26px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                The Wren
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 20 guests • Limited services • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $3,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_a92f9e2f28ee4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="a92f9e2f28eeFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FortyFour"
                                      />
                                      <Button
                                        className="absolute bg-cyan_A100 flex items-center justify-center left-[2%] min-w-[80px] px-[8px] py-[5px] rounded-[4px] shadow-bs10 text-center top-[4%] w-[auto]"
                                        leftIcon={
                                          <Img
                                            src="images/img_trendingup3f8197cbsvg.svg"
                                            className="mr-[4px] text-center right-[1%] absolute"
                                            alt="trending-up.3f8197cb..svg"
                                          />
                                        }
                                      >
                                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[11px] text-bluegray_908 text-left">
                                          Trending
                                        </div>
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[26px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Osteria Morini New York City
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 70 guests • Limited services • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $1,500
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_03d3e15b13754.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="03d3e15b13754"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FortyFive"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start py-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                The Russian Tea Room
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 250 guests • Limited services • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $5,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_796961f233bc4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="796961f233bcFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FortySix"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start py-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                New York City Fire Museum
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 150 guests • Raw space • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $2,500
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_7db5a585ade54.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="7db5a585adeFiftyFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FortySeven"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start py-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                The Penrose
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 220 guests • Limited services • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $3,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_e080095f78564.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="e080095f78564"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FortyEight"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[34px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                West Edge
                              </Text>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Up to 220 guests • Raw space • Indoor
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_6074fd54a3684.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="6074fd54a3684"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FortyNine"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[36px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                Bobo West Village
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 80 guests • All-inclusive • Indoor &
                                    outdoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $6,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_02bdbc59aef94.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="02bdbc59aefNinetyFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown Fifty"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[58px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                SIXTY LES Hotel
                              </Text>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body82"
                                >
                                  Up to 50 guests • Raw space • Indoor & outdoor
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_41c861c612614.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="41c861c612614"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FiftyOne"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start py-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold leading-[24.00px] md:max-w-[100%] max-w-[326px] text-gray_904 text-left"
                                variant="body60"
                              >
                                Millennium Broadway Hotel - Times Square
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 100 guests • Limited services • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $29,600
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_d9f7f76719b54.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="d9f7f76719bFiftyFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FiftyTwo"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[36px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                The Penn Club
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 145 guests • Limited services • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $37,500
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_9e7914e111b74.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="9e7914e111bSeventyFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FiftyThree"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[26px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                Boulud Sud
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 175 guests • All-inclusive • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $4,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_90d79231b1604.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="90d79231b1604"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FiftyFour"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body61"
                              >
                                48 Wall Street
                              </Text>
                              <div className="flex flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 499 guests • All-inclusive • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal mt-[5px] not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $55,000
                                </Text>
                                <div className="flex flex-row gap-[4px] items-center justify-start mt-[9px] pr-[195px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="thumbsup Nineteen"
                                  />
                                  <Text
                                    className="font-semibold text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    1 Recommendation
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_76f7feb6733f4.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="76f7feb6733fFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FiftyFive"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[26px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                Bar Boulud
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 100 guests • All-inclusive • Indoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $4,000
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[180.44px] sm:pl-[20px] pl-[291px] md:pl-[40px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                    <div className="bg-gray_103 h-[224px] relative rounded-[4px] w-[100%]">
                                      <Img
                                        src="images/img_03a2831421a84.png"
                                        className="h-[224px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                        alt="03a2831421aEightyFour"
                                      />
                                      <PagerIndicator
                                        className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                        count={5}
                                        activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                        activeIndex={1}
                                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                        selectedWrapperCss="inline-block mx-[4.00px]"
                                        unselectedWrapperCss="inline-block mx-[4.00px]"
                                      />
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                        alt="arrowdown FiftySix"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[26px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start pl-[8.39px] pr-[199.61px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body87"
                                >
                                  venue • New York, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-gray_904 text-left w-[auto]"
                                variant="body64"
                              >
                                House of the Redeemer
                              </Text>
                              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                    variant="body82"
                                  >
                                    Up to 100 guests • Raw space • Indoor &
                                    outdoor
                                  </Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_904 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Starts at $4,000
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[40px] items-center justify-start mt-[20px] md:w-[100%] w-[99%]">
                      <Line className="bg-bluegray_101 border-gray_201 border-solid border-t-[2px] h-[2px] w-[100%]" />
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start sm:px-[20px] md:px-[40px] px-[496px] w-[100%]">
                        <div className="flex sm:flex-1 flex-row items-start justify-center sm:mt-[0] mt-[4px] sm:w-[100%] w-[14%]">
                          <Img
                            src="images/img_arrowleft_bluegray_101.svg"
                            className="h-[16px] mt-[2px] w-[16px]"
                            alt="arrowleft"
                          />
                          <a
                            className="capitalize font-semibold text-[16px] text-bluegray_101 text-center underline w-[auto]"
                            href="javascript:"
                          >
                            Back
                          </a>
                        </div>
                        <div className="flex sm:flex-1 flex-row items-start justify-start sm:ml-[0] ml-[28px] px-[8px] sm:w-[100%] w-[59%]">
                          <Text
                            className="bg-gray_800 flex font-semibold h-[32px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[32px]"
                            variant="body69"
                          >
                            1
                          </Text>
                          <Text
                            className="font-semibold ml-[26px] mt-[4px] text-black_900 text-center w-[auto]"
                            variant="body69"
                          >
                            2
                          </Text>
                          <Text
                            className="font-semibold ml-[37px] mt-[4px] text-black_900 text-center w-[auto]"
                            variant="body69"
                          >
                            3
                          </Text>
                          <Text
                            className="font-semibold ml-[36px] mt-[4px] text-black_900 text-center w-[auto]"
                            variant="body69"
                          >
                            4
                          </Text>
                          <Text
                            className="font-semibold ml-[37px] mt-[4px] text-black_900 text-center w-[auto]"
                            variant="body69"
                          >
                            5
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-row items-start justify-center sm:ml-[0] ml-[28px] sm:mt-[0] mt-[4px] sm:w-[100%] w-[14%]">
                          <a
                            className="capitalize font-semibold text-[16px] text-black_900 text-center underline w-[auto]"
                            href="javascript:"
                          >
                            Next
                          </a>
                          <Img
                            src="images/img_arrowright_black_900.svg"
                            className="h-[16px] mt-[2px] w-[16px]"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[100%]">
                  <div className="flex flex-col gap-[15px] justify-start mt-[39px] w-[100%]">
                    <Text
                      className="font-medium md:ml-[0] ml-[9px] text-gray_904 text-left tracking-[0.20px] w-[auto]"
                      variant="body35"
                    >
                      Location flexible? Discover vendors nearby
                    </Text>
                    <div className="h-[398px] relative w-[100%]">
                      <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[99%]">
                        <List
                          className="sm:flex-col flex-row gap-[12px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center pb-[6px] px-[6px] w-[100%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-start justify-start mb-[70px] sm:ml-[0] w-[auto]">
                            <div className="flex flex-row items-start justify-between pb-[182.45px] sm:pl-[20px] pl-[294px] md:pl-[40px] w-[auto]">
                              <div className="flex items-start justify-start w-[100%]">
                                <div className="bg-gray_103 flex items-center justify-start rounded-[4px] w-[100%]">
                                  <Img
                                    src="images/img_b3a90a198e794.png"
                                    className="h-[226px] md:h-[auto] object-cover rounded-[4px] w-[100%]"
                                    alt="b3a90a198e794"
                                  />
                                </div>
                              </div>
                              <Img
                                src="images/img_arrowdown.svg"
                                className="h-[44px] w-[44px]"
                                alt="arrowdown FiftySeven"
                              />
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start pb-[16px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="capitalize font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body91"
                                >
                                  venue • Mount Kisco, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold leading-[24.00px] md:max-w-[100%] max-w-[297px] text-black_900 text-left"
                                variant="body60"
                              >
                                Holiday Inn Mount Kisco (Mount Kisco Events
                                Center)
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start mb-[64px] sm:ml-[0] w-[auto]">
                            <div className="flex flex-row items-start justify-between pb-[182.45px] sm:pl-[20px] pl-[294px] md:pl-[40px] w-[auto]">
                              <div className="flex items-start justify-start w-[100%]">
                                <div className="bg-gray_103 flex items-center justify-start rounded-[4px] w-[100%]">
                                  <Img
                                    src="images/img_a3d7cb4186804.png"
                                    className="h-[226px] md:h-[auto] object-cover rounded-[4px] w-[100%]"
                                    alt="a3d7cb4186804"
                                  />
                                </div>
                              </div>
                              <Img
                                src="images/img_arrowdown.svg"
                                className="h-[44px] w-[44px]"
                                alt="arrowdown FiftyEight"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start py-[12px] w-[100%]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="capitalize font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body91"
                                >
                                  venue • White Plains, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold mt-[6px] text-black_900 text-left w-[auto]"
                                variant="body61"
                              >
                                Kanopi
                              </Text>
                              <div className="flex flex-row gap-[4px] items-center justify-start mt-[14px] sm:pr-[20px] pr-[216px] md:pr-[40px] w-[auto]">
                                <Img
                                  src="images/img_thumbsup_black_900.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="thumbsup Twenty"
                                />
                                <Text
                                  className="font-semibold text-black_900 text-left w-[auto]"
                                  variant="body91"
                                >
                                  1 Recommendation
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start mb-[94px] sm:ml-[0] w-[auto]">
                            <div className="flex flex-row items-start justify-between pb-[182.45px] sm:pl-[20px] pl-[294px] md:pl-[40px] w-[auto]">
                              <div className="flex items-start justify-start w-[100%]">
                                <div className="bg-gray_103 flex items-center justify-start rounded-[4px] w-[100%]">
                                  <Img
                                    src="images/img_eb0f7492a3814.png"
                                    className="h-[226px] md:h-[auto] object-cover rounded-[4px] w-[100%]"
                                    alt="eb0f7492a3814"
                                  />
                                </div>
                              </div>
                              <Img
                                src="images/img_arrowdown.svg"
                                className="h-[44px] w-[44px]"
                                alt="arrowdown FiftyNine"
                              />
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start pb-[16px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="capitalize font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body91"
                                >
                                  venue • Mamaroneck, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-black_900 text-left w-[auto]"
                                variant="body61"
                              >
                                Mamaroneck Beach & Yacht Club
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start mb-[94px] sm:ml-[0] w-[auto]">
                            <div className="flex flex-row items-start justify-between pb-[182.45px] sm:pl-[20px] pl-[294px] md:pl-[40px] w-[auto]">
                              <div className="flex items-start justify-start w-[100%]">
                                <div className="bg-gray_103 flex items-center justify-start rounded-[4px] w-[100%]">
                                  <Img
                                    src="images/img_8cb4b082a3604.png"
                                    className="h-[226px] md:h-[auto] object-cover rounded-[4px] w-[100%]"
                                    alt="8cb4b082a3604"
                                  />
                                </div>
                              </div>
                              <Img
                                src="images/img_arrowdown.svg"
                                className="h-[44px] w-[44px]"
                                alt="arrowdown Sixty"
                              />
                            </div>
                            <div className="flex flex-col gap-[4px] items-start justify-start pb-[16px] pt-[12px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="capitalize font-normal not-italic text-gray_602 text-left w-[auto]"
                                  variant="body91"
                                >
                                  venue • Scarsdale, NY
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-black_900 text-left w-[auto]"
                                variant="body64"
                              >
                                The Scarsdale Woman&#39;s Club
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                      <Img
                        src="images/img_clock_white_a700.svg"
                        className="absolute h-[30px] right-[0] top-[28%] w-[30px]"
                        alt="clock"
                      />
                      <Img
                        src="images/img_checkmark.svg"
                        className="absolute h-[30px] left-[0] top-[28%] w-[30px]"
                        alt="checkmark"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end mb-[59px] pt-[60px] w-[100%]">
                    <Text
                      className="font-medium md:ml-[0] ml-[9px] text-gray_904 text-left tracking-[0.20px] w-[auto]"
                      variant="body35"
                    >
                      Get inspired by real weddings
                    </Text>
                    <div className="h-[326px] md:h-[341px] mt-[15px] relative w-[100%]">
                      <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[99%]">
                        <List
                          className="sm:flex-col flex-row gap-[12px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center pb-[6px] px-[6px] w-[100%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-1 flex-col items-center justify-start mb-[20px] sm:ml-[0] rounded-[4px] shadow-bs1 w-[100%]">
                            <Img
                              src="images/img_ccb316cdc1e24.png"
                              className="h-[225px] sm:h-[auto] object-cover rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                              alt="ccb316cdc1eTwentyFour"
                            />
                            <div className="flex flex-row gap-[64.85px] items-center justify-start px-[20px] py-[21.5px] w-[auto]">
                              <Text
                                className="font-semibold md:max-w-[100%] max-w-[161px] text-black_900 text-left"
                                variant="body82"
                              >
                                Classy Celebration at the Brooklyn Botanic
                                Garden
                              </Text>
                              <Img
                                src="images/img_checkmark_purple_500.svg"
                                className="h-[16px] w-[72px]"
                                alt="checkmark One"
                              />
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start mb-[20px] sm:ml-[0] rounded-[4px] shadow-bs1 w-[100%]">
                            <Img
                              src="images/img_2b6c841cf69c4.png"
                              className="h-[225px] sm:h-[auto] object-cover rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                              alt="2b6c841cf69cFour"
                            />
                            <div className="flex flex-row gap-[31.74px] items-center justify-start px-[20px] py-[21.5px] w-[auto]">
                              <Text
                                className="font-semibold md:max-w-[100%] max-w-[194px] text-black_900 text-left"
                                variant="body82"
                              >
                                Industrial Wedding at St. Augustine Church & 26
                                Bridge
                              </Text>
                              <Img
                                src="images/img_user.svg"
                                className="h-[16px] w-[72px]"
                                alt="user"
                              />
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start mb-[20px] sm:ml-[0] rounded-[4px] shadow-bs1 w-[100%]">
                            <Img
                              src="images/img_86498f73ace14.png"
                              className="h-[225px] sm:h-[auto] object-cover rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                              alt="86498f73aceFourteen"
                            />
                            <div className="flex flex-row gap-[30px] items-start justify-start px-[20px] py-[29.5px] w-[auto]">
                              <Text
                                className="font-semibold text-black_900 text-left w-[auto]"
                                variant="body82"
                              >
                                Industrial Spring Soirée in Brooklyn
                              </Text>
                              <Img
                                src="images/img_contrast.svg"
                                className="h-[16px] w-[48px]"
                                alt="contrast"
                              />
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start mb-[20px] sm:ml-[0] rounded-[4px] shadow-bs1 w-[100%]">
                            <Img
                              src="images/img_381a7aed453a4.png"
                              className="h-[225px] sm:h-[auto] object-cover rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                              alt="381a7aed453aFour"
                            />
                            <div className="flex flex-row gap-[54.94px] items-center justify-start px-[20px] py-[20.5px] w-[auto]">
                              <Text
                                className="font-semibold md:max-w-[100%] max-w-[195px] text-black_900 text-left"
                                variant="body78"
                              >
                                Winsome Backyard Fête in the Hudson Valley
                              </Text>
                              <Img
                                src="images/img_contrast_white_a700.svg"
                                className="h-[16px] w-[48px]"
                                alt="contrast One"
                              />
                            </div>
                          </div>
                        </List>
                      </div>
                      <Img
                        src="images/img_clock_white_a700.svg"
                        className="absolute h-[30px] right-[0] top-[36%] w-[30px]"
                        alt="clock One"
                      />
                      <Img
                        src="images/img_checkmark.svg"
                        className="absolute h-[30px] left-[0] top-[36%] w-[30px]"
                        alt="checkmark Two"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:ml-[0] ml-[14px] mt-[32px] md:w-[100%] w-[99%]">
                      <Text
                        className="font-semibold text-black_900 text-left w-[auto]"
                        variant="body61"
                      >
                        View all real weddings in New York, NY
                      </Text>
                      <Img
                        src="images/img_arrowright_black_900_27x30.svg"
                        className="h-[27px] w-[auto]"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex items-center justify-start max-w-[1420px] mx-[auto] pb-[10px] px-[10px] md:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] gap-[60.75px] items-start justify-start mb-[50px] md:w-[100%] w-[auto]">
                <Text
                  className="font-medium leading-[40.00px] md:max-w-[100%] max-w-[379px] text-gray_904 text-left"
                  variant="body35"
                >
                  Wedding Venues in New York, NY
                </Text>
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                  <div className="border-black_900 border-solid border-y-[1px] flex flex-col items-start justify-start pb-[21px] px-[20px] md:w-[100%] w-[auto]">
                    <div className="flex items-start justify-end p-[21px] sm:px-[20px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold md:ml-[0] ml-[14px] text-black_900 text-left w-[auto]"
                        variant="body73"
                      >
                        How much does it cost to book a wedding venue in New
                        York, NY?
                      </Text>
                    </div>
                    <Text
                      className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[911px] not-italic text-gray_804 text-left"
                      variant="body69"
                    >
                      The cost of a wedding venue varies widely by location,
                      number of guests, and many other details of the wedding
                      package. New York, NY offers a range of options that can
                      fit most budgets. Raw venue space rentals (which only
                      include the space itself) start at $500 and average
                      $6,000. All-inclusive packages start at $100 and average
                      $7,500.
                    </Text>
                  </div>
                  <List
                    className="flex-col gap-[1px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="border-b-[1px] border-black_900 border-solid flex md:flex-1 flex-col items-start justify-start pb-[21px] px-[20px] md:w-[100%] w-[auto]">
                      <div className="flex items-start justify-end p-[21px] sm:px-[20px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold md:ml-[0] ml-[14px] text-black_900 text-left w-[auto]"
                          variant="body73"
                        >
                          What venue settings are available in New York, NY?
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_804 text-left w-[auto]"
                        variant="body78"
                      >
                        New York offers a wide range of venues, including Urban
                        Locations, Restaurants, Breweries and Ballrooms, Banquet
                        Halls.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-black_900 border-solid flex md:flex-1 flex-col items-start justify-start pb-[21px] px-[20px] md:w-[100%] w-[auto]">
                      <div className="flex items-start justify-end p-[21px] sm:px-[20px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold md:ml-[0] ml-[14px] text-black_900 text-left w-[auto]"
                          variant="body73"
                        >
                          What are some of the top venues available in New York,
                          NY?
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_804 text-left w-[auto]"
                        variant="body78"
                      >
                        Some of the most popular venues in this area include
                        Dobbin St, The Green Building and 501 Union.
                      </Text>
                    </div>
                  </List>
                  <div className="border-b-[1px] border-black_900 border-solid flex flex-col items-start justify-start pb-[21px] px-[20px] md:w-[100%] w-[auto]">
                    <div className="flex items-start justify-end p-[21px] sm:px-[20px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold md:ml-[0] ml-[14px] text-black_900 text-left w-[auto]"
                        variant="body73"
                      >
                        What else should I consider when booking a venue?
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[894px] not-italic text-black_900 text-left"
                        variant="body69"
                      >
                        It all depends on what you&#39;re looking for, but you
                        may want to consider things like whether the venue has
                        an on-site bridal suite (63% in New York do) or whether
                        the venue provides an event coordinator (58% in New York
                        do!)
                      </Text>
                      <Text
                        className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[893px] not-italic text-black_900 text-left"
                        variant="body69"
                      >
                        Additionally, some venues work with certain caterers and
                        require a minimum food and beverage spend in addition to
                        the space rentals. Others might have a recommended list
                        of preferred caterers that they&#39;d like you to work
                        with.
                      </Text>
                    </div>
                  </div>
                  <div className="border-b-[1px] border-black_900 border-solid flex flex-col items-start justify-start pb-[21px] px-[20px] md:w-[100%] w-[auto]">
                    <div className="flex items-start justify-start p-[21px] sm:px-[20px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold md:ml-[0] ml-[14px] text-black_900 text-left w-[auto]"
                        variant="body73"
                      >
                        Which other New York vendors will I need?
                      </Text>
                    </div>
                    <div className="flex items-start justify-start pr-[3px] py-[3px] w-[100%]">
                      <div className="flex flex-col items-start justify-start mb-[10px] md:w-[100%] w-[91%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[86%]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            New York Photographers
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[128px] not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            New York Videographers
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[129px] not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            New York Florists
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[16px] md:w-[100%] w-[97%]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body73"
                          >
                            New York Wedding Planners
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[94px] not-italic text-black_900 text-left w-[auto]"
                            variant="body73"
                          >
                            New York Bands & DJs
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[132px] md:mt-[0] mt-[2px] not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            New York Beauty Professionals
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[15px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body73"
                          >
                            New York Caterers
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[160px] not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            New York Cakes & Desserts
                          </Text>
                          <Text
                            className="font-normal sm:ml-[0] ml-[110px] sm:mt-[0] mt-[2px] not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            New York Bar Services & Beverages
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b-[1px] border-black_900 border-solid flex flex-col items-start justify-start pb-[21px] px-[20px] md:w-[100%] w-[auto]">
                    <div className="flex items-start justify-end p-[21px] sm:px-[20px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold md:ml-[0] ml-[14px] mt-[2px] text-black_900 text-left w-[auto]"
                        variant="body73"
                      >
                        Where are some other venues nearby?
                      </Text>
                    </div>
                    <div className="flex items-start justify-start pr-[3px] py-[3px] w-[100%]">
                      <div className="flex flex-col items-start justify-start mb-[10px] md:w-[100%] w-[84%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[97%]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            Bronx, NY Venues
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[175px] not-italic text-black_900 text-left w-[auto]"
                            variant="body73"
                          >
                            Brooklyn, NY Venues
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[146px] not-italic text-black_900 text-left w-[auto]"
                            variant="body73"
                          >
                            Irvington, NY Venues
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[16px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body73"
                          >
                            Mamaroneck, NY Venues
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body73"
                          >
                            Manhattan, NY Venues
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body73"
                          >
                            Mount Kisco, NY Venues
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[18px] md:w-[100%] w-[99%]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            Peekskill, NY Venues
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[156px] not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            Port Chester, NY Venues
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[130px] not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            Pound Ridge, NY Venues
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[17px] md:w-[100%] w-[97%]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            Purchase, NY Venues
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body73"
                          >
                            Queens, NY Venues
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            Scarsdale, NY Venues
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[16px] md:w-[100%] w-[95%]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            Staten Island, NY Venues
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[127px] not-italic text-black_900 text-left w-[auto]"
                            variant="body73"
                          >
                            White Plains, NY Venues
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[121px] not-italic text-black_900 text-left w-[auto]"
                            variant="body78"
                          >
                            Yonkers, NY Venues
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 border-gray_600 border-solid border-t-[1px] flex items-center justify-end p-[30px] sm:px-[20px] w-[100%]">
            <div className="flex items-center justify-start max-w-[1180px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-end pt-[15px] px-[15px] md:w-[100%] w-[42%]">
                  <Img
                    src="images/img_svg_bluegray_908.svg"
                    className="h-[20px] mt-[5px] w-[auto]"
                    alt="svg One"
                  />
                  <Text
                    className="font-normal mt-[16px] not-italic text-black_900 text-left w-[auto]"
                    variant="body78"
                  >
                    For all the days along the way
                  </Text>
                  <Text
                    className="font-semibold md:ml-[0] ml-[122px] mt-[25px] text-black_900 text-left tracking-[1.20px] w-[auto]"
                    variant="body91"
                  >
                    @ZOLA
                  </Text>
                  <div className="flex items-start justify-end mt-[17px] pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal mt-[2px] not-italic text-black_900 text-left w-[auto]"
                      variant="body91"
                    >
                      © 2023 Zola, Inc. All rights reserved.
                    </Text>
                  </div>
                  <div className="flex items-start justify-start mt-[5px] w-[100%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] w-[57%]">
                      <div className="flex flex-row items-start justify-evenly w-[100%]">
                        <Text
                          className="capitalize font-normal mt-[5px] not-italic text-black_900 text-left w-[auto]"
                          variant="body91"
                        >
                          Privacy Policy
                        </Text>
                        <div className="flex items-start justify-start pl-[3px] pr-[2.34px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body91"
                          >
                            <span className="text-black_900 text-[11px] font-inter">
                              /{" "}
                            </span>
                            <span className="text-black_900 text-[11px] font-inter capitalize">
                              Terms of Use
                            </span>
                          </Text>
                        </div>
                        <div className="flex items-start justify-start pl-[3px] pr-[4.52px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body91"
                          >
                            <span className="text-black_900 text-[11px] font-inter">
                              /{" "}
                            </span>
                            <span className="text-black_900 text-[11px] font-inter capitalize">
                              Web Accessibility
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-start pl-[3px] pr-[8.75px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-[auto]"
                          variant="body91"
                        >
                          <span className="text-black_900 text-[11px] font-inter">
                            /{" "}
                          </span>
                          <span className="text-black_900 text-[11px] font-inter capitalize">
                            Do Not Sell or Share My Personal Information
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[1px] grid grid-cols-2 md:w-[100%] w-[33%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[19px] items-start justify-end mb-[29px] sm:ml-[0] w-[100%]">
                    <Text
                      className="font-normal md:ml-[0] ml-[14px] mt-[19px] not-italic text-black_900 text-left tracking-[0.20px] w-[auto]"
                      variant="body68"
                    >
                      About Zola
                    </Text>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[14px] pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                      <Text
                        className="capitalize font-normal not-italic text-black_900 text-left w-[auto]"
                        variant="body91"
                      >
                        Our Story
                      </Text>
                      <Text
                        className="capitalize font-normal mt-[15px] not-italic text-black_900 text-left w-[auto]"
                        variant="body98"
                      >
                        Press
                      </Text>
                      <Text
                        className="capitalize font-normal mt-[15px] not-italic text-black_900 text-left w-[auto]"
                        variant="body91"
                      >
                        Jobs
                      </Text>
                      <Text
                        className="capitalize font-normal mt-[16px] not-italic text-black_900 text-left w-[auto]"
                        variant="body91"
                      >
                        Wedding Vendors
                      </Text>
                      <Text
                        className="capitalize font-normal mt-[13px] not-italic text-black_900 text-left w-[auto]"
                        variant="body91"
                      >
                        Refer a Friend
                      </Text>
                      <Text
                        className="capitalize font-normal mb-[12px] mt-[15px] not-italic text-black_900 text-left w-[auto]"
                        variant="body91"
                      >
                        Zola Reviews
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-end sm:ml-[0] w-[100%]">
                    <Text
                      className="font-normal md:ml-[0] ml-[14px] mt-[21px] not-italic text-black_900 text-left tracking-[0.20px] w-[auto]"
                      variant="body68"
                    >
                      Help
                    </Text>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[14px] pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                      <Text
                        className="capitalize font-normal not-italic text-black_900 text-left w-[auto]"
                        variant="body91"
                      >
                        Expert Advice
                      </Text>
                      <Text
                        className="capitalize font-normal mt-[15px] not-italic text-black_900 text-left w-[auto]"
                        variant="body91"
                      >
                        Find a Couple on Zola
                      </Text>
                      <Text
                        className="capitalize font-normal mt-[13px] not-italic text-black_900 text-left w-[auto]"
                        variant="body87"
                      >
                        FAQs
                      </Text>
                      <Text
                        className="capitalize font-normal mt-[14px] not-italic text-black_900 text-left w-[auto]"
                        variant="body91"
                      >
                        Track Order
                      </Text>
                      <Text
                        className="capitalize font-normal mt-[15px] not-italic text-black_900 text-left w-[auto]"
                        variant="body91"
                      >
                        Start A Return
                      </Text>
                      <Text
                        className="capitalize font-normal mt-[16px] not-italic text-black_900 text-left w-[auto]"
                        variant="body91"
                      >
                        Return Policy
                      </Text>
                      <Text
                        className="capitalize font-normal my-[13px] not-italic text-black_900 text-left w-[auto]"
                        variant="body91"
                      >
                        Contact Us
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-1 flex-col gap-[17px] items-center justify-end p-[6px] md:w-[100%] w-[25%]">
                  <Text
                    className="font-normal mt-[14px] not-italic text-black_900 text-left tracking-[0.20px] w-[auto]"
                    variant="body68"
                  >
                    Download the Zola App
                  </Text>
                  <Img
                    src="images/img_appstorebadgeb853888asvg.svg"
                    className="h-[60px] w-[149px]"
                    alt="appstorebadgeb853888asvg"
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

export default OptionPage;
