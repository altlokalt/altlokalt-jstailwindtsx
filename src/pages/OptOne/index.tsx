import React from "react";

import { Text, Img, List, Button, Input, SelectBox } from "components";

const OptOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_903 font-inter h-[4555px] mx-[auto] pb-[25px] relative w-[100%]">
        <div className="flex flex-col h-[100%] items-center justify-start m-[auto] pb-[296px] w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-white_A700 flex items-center justify-center w-[100%]">
              <div className="bg-white_A700 border-b-[1px] border-black_900 border-solid h-[169px] relative w-[100%]">
                <div className="bg-white_A700 border-b-[1px] border-black_900 border-solid flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                  <div className="flex flex-col md:gap-[40px] gap-[76px] items-center justify-start w-[100%]">
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
                      <div className="absolute bg-teal_901 flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[9px] w-[100%]">
                        <div className="flex items-start justify-start md:ml-[0] ml-[840px] w-[auto]">
                          <Text
                            className="font-semibold text-center text-cyan_A100 w-[auto]"
                            variant="body82"
                          >
                            Få direkte kontakt{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="border-black_900 border-solid border-t-[1px] flex items-start justify-end p-[16px] w-[100%]">
                      <ul className="flex flex-row sm:hidden items-start justify-start md:ml-[0] ml-[92px] mr-[auto] md:w-[100%] w-[31%] common-row-list">
                        <li className="mt-[4px] mb-[2px] ml-[679px] sm:w-[100%] sm:my-[10px] w-[auto]">
                          <a
                            className="cursor-pointer font-normal hover:font-semibold not-italic text-[13px] text-black_900 text-left"
                            href="javascript:"
                          >
                            Real wedding inspiration
                          </a>
                        </li>
                        <li className="ml-[287px] sm:w-[100%] sm:my-[10px] w-[1%]">
                          <div className="flex flex-row items-center justify-between">
                            <a
                              className="cursor-pointer hover:font-semibold font-semibold mt-[3px] text-[13px] text-black_900 text-left w-[auto]"
                              href="javascript:"
                            >
                              Explore vendors
                            </a>
                            <Img
                              src="images/img_arrowdown_black_900.svg"
                              className="h-[5px] w-[auto]"
                              alt="arrowdown"
                            />
                          </div>
                        </li>
                        <li className="ml-[435px] sm:w-[100%] sm:my-[10px] w-[auto] my-[3px]">
                          <a
                            className="cursor-pointer font-normal hover:font-semibold not-italic text-[13px] text-black_900 text-left"
                            href="javascript:"
                          >
                            Become a vendor
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white_A700 flex inset-x-[0] items-center justify-start mx-[auto] top-[21%] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between p-[14px] w-[100%]">
                    <div className="flex md:flex-1 md:flex-col flex-row gap-[20px] items-start justify-start md:ml-[0] ml-[26px] pt-[4px] md:w-[100%] w-[auto]">
                      <List
                        className="sm:flex-col flex-row gap-[20px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[81%]"
                        orientation="horizontal"
                      >
                        <div className="bg-white_A700 border-[2px] border-bluegray_101 border-solid flex items-center justify-start p-[3px] rounded-[4px] w-[100%]">
                          <div className="flex flex-row items-end justify-start pr-[2px] md:w-[100%] w-[96%]">
                            <div className="flex flex-row gap-[6px] items-center justify-start pr-[6px] py-[6px] w-[93%]">
                              <Img
                                src="images/img_location.svg"
                                className="h-[25px] w-[25px]"
                                alt="location"
                              />
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_800 text-left w-[auto]"
                                  variant="body73"
                                >
                                  New York, NY
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_close.svg"
                              className="h-[24px] mb-[5px] mt-[9px] w-[24px]"
                              alt="close"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[2px] border-bluegray_101 border-solid flex items-center justify-start p-[3px] rounded-[4px] w-[100%]">
                          <div className="flex flex-row items-end justify-start pr-[2px] md:w-[100%] w-[96%]">
                            <div className="flex flex-row gap-[6px] items-center justify-start pr-[6px] py-[6px] w-[93%]">
                              <Img
                                src="images/img_location_black_900.svg"
                                className="h-[25px] w-[25px]"
                                alt="location One"
                              />
                              <div className="flex items-start justify-end w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_800 text-left w-[auto]"
                                  variant="body78"
                                >
                                  Venues
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_close.svg"
                              className="h-[24px] mb-[5px] mt-[9px] w-[24px]"
                              alt="close One"
                            />
                          </div>
                        </div>
                      </List>
                      <Button className="bg-black_900 cursor-pointer font-semibold min-w-[133px] py-[12px] rounded-[22px] text-[15px] text-center text-white_A700 w-[auto]">
                        Search
                      </Button>
                    </div>
                    <div className="flex md:flex-1 flex-row items-center justify-center mr-[24px] sm:pl-[20px] md:pl-[40px] pl-[541px] md:w-[100%] w-[45%]">
                      <Img
                        src="images/img_search_white_a700.svg"
                        className="h-[44px] rounded-[50%] w-[44px]"
                        alt="search One"
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
              </div>
            </div>
          </header>
          <div className="flex flex-col justify-start max-w-[1866px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex flex-col relative w-[100%]">
              <div className="bg-blue_100 flex flex-col mx-[auto] w-[100%]">
                <div className="bg-blue_100 flex items-center justify-start mx-[auto] p-[40px] sm:px-[20px] w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[40px] items-center justify-start sm:px-[20px] md:px-[40px] px-[70px] md:w-[100%] w-[81%]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-teal_901 w-[auto]"
                        variant="body73"
                      >
                        Videographers
                      </Text>
                      <Text
                        className="font-medium leading-[44.00px] mt-[8px] text-left text-teal_901 sm:w-[100%] w-[94%]"
                        variant="body25"
                      >
                        When it comes to wedding videographers, we’re as picky
                        as they come
                      </Text>
                      <Text
                        className="font-normal mt-[15px] not-italic text-left text-teal_901 w-[auto]"
                        variant="body78"
                      >
                        We&#39;ll help you find local videographers that fit
                        your wedding budget, location, and style—all
                        pre-screened to save you time.
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-[10px] items-center justify-start p-[18px] rounded-[20px] shadow-bs1 md:w-[100%] w-[29%]">
                      <Text
                        className="font-medium text-center text-gray_904 tracking-[0.20px] w-[auto]"
                        variant="body48"
                      >
                        Search vendors on Zola
                      </Text>
                      <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] w-[99%]">
                        <div className="flex flex-col gap-[12px] items-start justify-start sm:w-[100%] w-[auto]">
                          <Input
                            className="font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
                            wrapClassName="border-[2px] border-bluegray_101 border-solid flex pb-[2px] pt-[6px] px-[2px] rounded-[4px] w-[auto]"
                            name="div"
                            placeholder="New York, NY"
                            prefix={
                              <Img
                                src="images/img_location.svg"
                                className="mr-[6px] my-[auto]"
                                alt="location"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_close.svg"
                                className="ml-[35px] my-[auto]"
                                alt="close"
                              />
                            }
                          ></Input>
                          <Input
                            className="font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-gray_800 text-gray_800 text-left w-[100%]"
                            wrapClassName="border-[2px] border-bluegray_101 border-solid flex pb-[2px] pt-[6px] px-[2px] rounded-[4px] w-[auto]"
                            name="div One"
                            placeholder="Videographers"
                            prefix={
                              <Img
                                src="images/img_location_black_900.svg"
                                className="mr-[6px] my-[auto]"
                                alt="location"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_close.svg"
                                className="ml-[35px] my-[auto]"
                                alt="close"
                              />
                            }
                          ></Input>
                        </div>
                        <Button className="bg-black_900 cursor-pointer font-semibold min-w-[335px] pb-[11.42px] pl-[142.03px] pr-[141.97px] pt-[9.58px] sm:px-[20px] md:px-[40px] rounded-[22px] text-[15px] text-center text-white_A700 w-[auto]">
                          Search
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_102 flex items-center justify-start mt-[-40.39px] mx-[auto] pl-[6px] w-[100%] z-[1]">
                  <div className="bg-gray_102 flex items-center justify-start sm:px-[20px] px-[220px] md:px-[40px] w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[20px] items-end justify-start pl-[10px] pt-[10px] w-[100%]">
                      <div className="bg-gray_102 flex md:flex-1 md:flex-col flex-row gap-[8px] items-start justify-start mb-[2px] md:mt-[0] mt-[30px] sm:pr-[20px] pr-[300px] md:pr-[40px] md:w-[100%] w-[auto]">
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
                      <div className="md:h-[44px] h-[54px] md:mt-[0] mt-[20px] relative w-[161px]">
                        <div className="absolute bg-black_900 bottom-[0] flex items-center justify-start left-[0] pb-[11.42px] pl-[20px] pr-[19.98px] pt-[9.58px] rounded-[22px] w-[auto]">
                          <Text
                            className="font-semibold text-center text-white_A700 w-[auto]"
                            variant="body78"
                          >
                            Save this search
                          </Text>
                        </div>
                        <Text
                          className="absolute bg-light_green_100 font-normal not-italic pb-[1.58px] pl-[8px] pr-[9.14px] pt-[0.42px] right-[-1%] rounded-[4px] text-cyan_900 text-left top-[0] w-[auto]"
                          variant="body91"
                        >
                          New
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-end mt-[-44px] mx-[auto] p-[25px] sm:px-[20px] w-[78%] z-[1]">
                <div className="flex flex-col gap-[35px] items-start justify-start md:ml-[0] ml-[45px] mt-[55px] md:w-[100%] w-[79%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 tracking-[0.20px] w-[auto]"
                    variant="body39"
                  >
                    Videographers serving New York, NY
                  </Text>
                  <List
                    className="sm:flex-col flex-row md:gap-[40px] gap-[81px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start pb-[7px] w-[100%]">
                      <div className="flex items-start justify-start pb-[163.69px] sm:pl-[20px] pl-[266px] md:pl-[40px] w-[auto]">
                        <div className="flex items-start justify-start w-[310px]">
                          <div className="bg-gray_103 h-[207px] relative rounded-[4px] w-[100%]">
                            <Img
                              src="images/img_7671c2afd9784.png"
                              className="h-[207px] m-[auto] object-cover rounded-[4px] w-[100%]"
                              alt="7671c2afd9784"
                            />
                            <Img
                              src="images/img_arrowdown.svg"
                              className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                              alt="arrowdown One"
                            />
                            <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[3%] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[104px]">
                              Quick responder
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start pb-[8px] pt-[12px] w-[auto]">
                        <div className="flex items-start justify-start pl-[9.33px] pr-[132.67px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-red_A701 w-[auto]"
                            variant="body87"
                          >
                            videographer • New York, NY
                          </Text>
                        </div>
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body61"
                        >
                          Biery & Co Films
                        </Text>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body87"
                          >
                            Starts at $1,800
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-start pr-[160px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                            <Img
                              src="images/img_thumbsup_white_a700.svg"
                              className="h-[16px] w-[16px]"
                              alt="thumbsup"
                            />
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body82"
                            >
                              4 Recommendations
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start mr-[60px] pb-[7px] md:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[163.69px] sm:pl-[20px] pl-[266px] md:pl-[40px] w-[auto]">
                          <div className="flex items-start justify-start w-[auto]">
                            <div className="bg-gray_103 h-[207px] relative rounded-[4px] w-[100%]">
                              <Img
                                src="images/img_5ad6be74e4fc4.png"
                                className="h-[207px] m-[auto] object-cover rounded-[4px] w-[100%]"
                                alt="5ad6be74e4fcFour"
                              />
                              <Img
                                src="images/img_arrowdown.svg"
                                className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                                alt="arrowdown Two"
                              />
                              <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[3%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                                Quick responder
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start py-[12px] w-[100%]">
                          <div className="flex items-start justify-start pl-[9.33px] pr-[132.67px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-red_A701 w-[auto]"
                              variant="body87"
                            >
                              videographer • New York, NY
                            </Text>
                          </div>
                          <Text
                            className="font-semibold mt-[10px] text-left text-white_A700 w-[auto]"
                            variant="body61"
                          >
                            New York Wedding Films
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-start my-[14px] pr-[161px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                            <Img
                              src="images/img_thumbsup_white_a700.svg"
                              className="h-[16px] w-[16px]"
                              alt="thumbsup One"
                            />
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body82"
                            >
                              2 Recommendations
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[1px] border-black_900 border-solid cursor-pointer font-semibold min-w-[143px] md:ml-[0] ml-[227px] pb-[11.42px] pl-[19px] pr-[20.39px] sm:pr-[20px] pt-[9.58px] rounded-[22px] text-[14px] text-black_900 text-center w-[auto]">
                        View all (200+)
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start pb-[7px] w-[100%]">
                      <div className="flex items-start justify-start pb-[163.69px] sm:pl-[20px] pl-[266px] md:pl-[40px] w-[auto]">
                        <div className="flex items-start justify-start w-[auto]">
                          <div className="bg-gray_103 h-[207px] relative rounded-[4px] w-[100%]">
                            <Img
                              src="images/img_ee5e1c9029ae4.png"
                              className="h-[207px] m-[auto] object-cover rounded-[4px] w-[100%]"
                              alt="ee5e1c9029aeFour"
                            />
                            <Img
                              src="images/img_arrowdown.svg"
                              className="absolute h-[44px] right-[0] top-[0] w-[44px]"
                              alt="arrowdown Three"
                            />
                            <Button className="absolute bg-white_A700 cursor-pointer font-normal left-[3%] min-w-[104px] not-italic pl-[8px] pr-[10.77px] rounded-[4px] shadow-bs10 text-[11px] text-black_900 text-center top-[4%] w-[auto]">
                              Quick responder
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start pb-[34px] pt-[12px] w-[auto]">
                        <div className="flex items-start justify-start pl-[9.33px] pr-[137.67px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-red_A701 w-[auto]"
                            variant="body87"
                          >
                            videographer • Brooklyn, NY
                          </Text>
                        </div>
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body64"
                        >
                          Brindamour Studios
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body87"
                        >
                          Starts at $3,000
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-red_103 flex md:flex-col flex-row gap-[100px] md:gap-[40px] items-center justify-start md:ml-[0] ml-[256px] mr-[310px] mt-[477px] p-[20px] rounded-[20px] md:w-[100%] w-[70%]">
              <Img
                src="images/img_categorypageq.png"
                className="h-[250px] sm:h-[auto] object-cover rounded-[8px] md:w-[100%] w-[35%]"
                alt="categorypageq"
              />
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[43%]">
                <Text
                  className="font-normal not-italic text-gray_904 text-left tracking-[0.20px] w-[auto]"
                  variant="body39"
                >
                  Get personalized recommendations
                </Text>
                <Text
                  className="font-normal mt-[7px] not-italic text-black_900 text-left w-[auto]"
                  variant="body78"
                >
                  Start building your team with top picks based on your
                  preferences.
                </Text>
                <Button className="bg-black_900 cursor-pointer font-semibold min-w-[129px] mt-[2px] pb-[11.42px] pl-[20px] pr-[18.88px] pt-[9.58px] rounded-[22px] text-[14px] text-center text-white_A700 w-[auto]">
                  Take the quiz
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[256px] mt-[80px] md:w-[100%] w-[75%]">
              <Text
                className="font-normal not-italic text-left text-white_A700 tracking-[0.20px] w-[auto]"
                variant="body39"
              >
                Get the inside scoop
              </Text>
              <div className="flex md:flex-col flex-row gap-[29px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[57px] w-[100%]">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[12px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 pb-[5px] px-[5px] md:w-[100%] w-[73%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[14px] items-start justify-start sm:ml-[0] pb-[14px] w-[auto]">
                    <div className="bg-gray_104 flex items-center justify-start rounded-[4px] w-[100%]">
                      <Img
                        src="images/img_heronew1jpg.png"
                        className="h-[208px] md:h-[auto] object-cover rounded-[4px] w-[100%]"
                        alt="HeroNew1jpg"
                      />
                    </div>
                    <Text
                      className="capitalize font-semibold md:max-w-[100%] max-w-[307px] text-left text-white_A700"
                      variant="body64"
                    >
                      How to Find a Wedding Videographer Within Your Budget
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[14px] items-start justify-start sm:ml-[0] pb-[14px] w-[auto]">
                    <div className="bg-gray_104 flex items-center justify-start rounded-[4px] w-[100%]">
                      <Img
                        src="images/img_hero10questio.png"
                        className="h-[208px] md:h-[auto] object-cover rounded-[4px] w-[100%]"
                        alt="Hero10questio"
                      />
                    </div>
                    <Text
                      className="capitalize font-semibold md:max-w-[100%] max-w-[227px] text-left text-white_A700"
                      variant="body64"
                    >
                      10 Questions to Ask Your Wedding Videographer
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start sm:ml-[0] pb-[13px] w-[auto]">
                    <div className="bg-gray_104 flex items-center justify-start rounded-[4px] w-[100%]">
                      <Img
                        src="images/img_heronew33jpg.png"
                        className="h-[208px] md:h-[auto] object-cover rounded-[4px] w-[100%]"
                        alt="HeroNew33jpg"
                      />
                    </div>
                    <Text
                      className="capitalize font-semibold md:max-w-[100%] max-w-[262px] text-left text-white_A700"
                      variant="body61"
                    >
                      Are There Different Types of Wedding Videographers?
                    </Text>
                  </div>
                </List>
                <div className="bg-light_green_100 flex md:flex-1 flex-col items-center justify-start mb-[4px] p-[9px] rounded-[20px] md:w-[100%] w-[26%]">
                  <Img
                    src="images/img_search_black_900.svg"
                    className="h-[60px] w-[60px]"
                    alt="search Three"
                  />
                  <div className="flex flex-col items-center justify-start mt-[11px] md:w-[100%] w-[72%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-center tracking-[-1.28px] w-[auto]"
                      variant="body39"
                    >
                      How much
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900 text-center tracking-[-1.28px] w-[auto]"
                        variant="body40"
                      >
                        should you spend
                      </Text>
                      <div className="flex items-start justify-start pb-[0.19px] pl-[11.88px] pr-[13.69px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_900 text-center tracking-[-1.28px] w-[auto]"
                          variant="body39"
                        >
                          <span className="md:text-[28px] sm:text-[26px] text-black_900 text-[30px] font-inter">
                            on your{" "}
                          </span>
                          <span className="md:text-[28px] sm:text-[26px] text-black_900 text-[30px] font-inter font-medium">
                            venue?
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-light_green_100 border-[1px] border-black_900 border-solid cursor-pointer font-semibold mb-[14px] min-w-[186px] mt-[23px] pb-[11.42px] pl-[17px] pr-[16.39px] pt-[9.58px] rounded-[22px] text-[15px] text-black_900 text-center w-[auto]">
                    Take the budget quiz
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex items-start justify-start md:ml-[0] ml-[83px] mr-[285px] mt-[65px] pb-[10px] px-[10px] md:w-[100%] w-[81%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] gap-[60.75px] items-start justify-start mb-[8px] md:w-[100%] w-[auto]">
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
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[16px] relative md:w-[100%] w-[99%]">
              <div className="bg-blue_52 flex items-start justify-start mx-[auto] px-[166px] sm:px-[20px] md:px-[40px] w-[100%]">
                <div className="flex flex-col gap-[35px] items-center justify-end p-[40px] sm:px-[20px] md:w-[100%] w-[96%]">
                  <Text
                    className="font-normal not-italic text-gray_904 text-left tracking-[0.20px] w-[auto]"
                    variant="body39"
                  >
                    Zola streamlines your search
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start md:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] w-[34%]">
                      <div className="bg-black_900_0c1 flex items-start justify-start pb-[26.84px] pt-[20px] px-[20px] rounded-[50px] w-[auto]">
                        <Img
                          src="images/img_file.svg"
                          className="h-[61px] w-[60px]"
                          alt="file"
                        />
                      </div>
                      <div className="md:h-[70px] h-[90px] relative w-[100%]">
                        <Text
                          className="absolute font-normal inset-x-[0] mx-[auto] not-italic text-center text-gray_904 top-[0] tracking-[0.20px] w-[max-content]"
                          variant="body60"
                        >
                          Handpicked vendors
                        </Text>
                        <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] pb-[1.53px] pl-[2.25px] pr-[2.05px] w-[auto]">
                          <Text
                            className="font-normal leading-[22.86px] md:max-w-[100%] max-w-[428px] not-italic text-black_900 text-center"
                            variant="body69"
                          >
                            <span className="text-black_900 text-[16px] font-inter">
                              All Zola vendors are proven to deliver outstanding
                              service and vow to have your best interest at
                              heart. Read our{" "}
                            </span>
                            <a
                              href="javascript:"
                              className="text-black_900 text-[16px] font-inter capitalize font-semibold underline"
                            >
                              Vendor Vows
                            </a>
                            <span className="text-black_900 text-[16px] font-inter">
                              .
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start md:w-[100%] w-[30%]">
                      <div className="bg-black_900_0c1 flex items-start justify-start pb-[26.84px] pt-[20px] px-[20px] rounded-[50px] w-[auto]">
                        <Img
                          src="images/img_volume_bluegray_802.svg"
                          className="h-[62px] w-[60px]"
                          alt="volume"
                        />
                      </div>
                      <Text
                        className="font-normal leading-[22.00px] mt-[12px] not-italic text-center text-gray_904 tracking-[0.20px] sm:w-[100%] w-[89%]"
                        variant="body60"
                      >
                        Everything you need, nothing you don&#39;t
                      </Text>
                      <Text
                        className="font-normal leading-[22.86px] not-italic text-black_900 text-center sm:w-[100%] w-[97%]"
                        variant="body69"
                      >
                        Sleek listings with big photos. No ads, no info
                        overload. All for the most intelligent, intuitive search
                        experience.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] w-[35%]">
                      <div className="bg-black_900_0c1 flex items-start justify-start pb-[26.84px] pt-[20px] px-[20px] rounded-[50px] w-[auto]">
                        <Img
                          src="images/img_menu_bluegray_802.svg"
                          className="h-[61px] w-[60px]"
                          alt="menu"
                        />
                      </div>
                      <div className="md:h-[69px] h-[88px] relative w-[100%]">
                        <Text
                          className="absolute font-normal inset-x-[0] mx-[auto] not-italic text-center text-gray_904 top-[0] tracking-[0.20px] w-[max-content]"
                          variant="body60"
                        >
                          Fast-tracked inquiries
                        </Text>
                        <Text
                          className="absolute bottom-[0] font-normal inset-x-[0] leading-[22.86px] mx-[auto] not-italic text-black_900 text-center w-[100%]"
                          variant="body69"
                        >
                          We&#39;ll let you know if your guest count and budget
                          are a fit before you even reach out. Save your time
                          for the vendors right for you.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_903 flex font-roboto items-start justify-end mt-[-39.38px] mx-[auto] p-[95px] sm:px-[20px] md:px-[40px] w-[100%] z-[1]">
                <div className="flex flex-col gap-[49px] items-center justify-start md:ml-[0] ml-[161px] pt-[16px] px-[16px] md:w-[100%] w-[76%]">
                  <Text
                    className="font-semibold mt-[5px] text-center text-white_A700 w-[auto]"
                    variant="body30"
                  >
                    Din tid. Dine mål. Din nabolag - Alt i én app
                  </Text>
                  <List
                    className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                      <Img
                        src="images/img_giftssvg.svg"
                        className="h-[136px] w-[136px]"
                        alt="Giftssvg"
                      />
                      <Text
                        className="font-extrabold mt-[2px] text-center text-white_A700 w-[auto]"
                        variant="body48"
                      >
                        Bli en leveringsbud
                      </Text>
                      <div className="flex flex-col gap-[18px] items-center justify-start mt-[25px] w-[100%]">
                        <Text
                          className="font-normal leading-[22.40px] not-italic text-center text-white_A700 sm:w-[100%] w-[75%]"
                          variant="body60"
                        >
                          Som leveringssjåfør vil du tjene pålitelige penger –
                          ved å jobbe når som helst og hvor som helst
                        </Text>
                        <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[75px] pl-[17px] pr-[17.25px] py-[8px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                          Tjene
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-start w-[100%]">
                      <Img
                        src="images/img_alcoholsvg.svg"
                        className="h-[136px] md:ml-[0] ml-[125px] w-[136px]"
                        alt="Alcoholsvg"
                      />
                      <Text
                        className="font-extrabold md:ml-[0] ml-[144px] mt-[7px] text-center text-white_A700 w-[auto]"
                        variant="body48"
                      >
                        Bli en partner
                      </Text>
                      <div className="flex flex-col gap-[18px] items-center justify-start mt-[20px] w-[100%]">
                        <Text
                          className="font-normal leading-[22.40px] not-italic text-center text-white_A700 sm:w-[100%] w-[75%]"
                          variant="body60"
                        >
                          Utvid virksomheten din og nå nye kunder ved å
                          samarbeide med oss.
                        </Text>
                        <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[107px] pl-[17px] pr-[17.38px] py-[8px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                          Din butikk
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-start w-[100%]">
                      <Img
                        src="images/img_dogfoodbowlsvg_gray_402.svg"
                        className="h-[136px] md:ml-[0] ml-[125px] w-[136px]"
                        alt="DogFoodBowlsvg"
                      />
                      <Text
                        className="font-extrabold md:ml-[0] ml-[163px] mt-[7px] text-center text-white_A700 w-[auto]"
                        variant="body48"
                      >
                        Prøv appen
                      </Text>
                      <div className="flex flex-col gap-[18px] items-center justify-start mt-[20px] w-[100%]">
                        <Text
                          className="font-normal leading-[22.40px] not-italic text-center text-white_A700 sm:w-[100%] w-[84%]"
                          variant="body60"
                        >
                          Opplev det beste nabolaget ditt har å tilby, alt i én
                          app
                        </Text>
                        <Button className="bg-indigo_A200 cursor-pointer font-bold min-w-[103px] pl-[16px] pr-[16.64px] py-[8px] rounded-[18px] text-[16px] text-center text-white_A700 w-[auto]">
                          App Store
                        </Button>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1400px] mt-[22px] mx-[auto] md:px-[20px] rounded-[4px] w-[100%]">
            <div className="flex md:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start p-[20px] md:w-[100%] w-[44%]">
              <div className="bg-teal_51 flex h-[85px] items-center justify-start sm:mt-[0] my-[7px] rounded-[42px] w-[85px]">
                <Img
                  src="images/img_trash.svg"
                  className="h-[85px] rounded-[50%] w-[85px]"
                  alt="trash"
                />
              </div>
              <Text
                className="font-medium text-gray_904 text-left w-[auto]"
                variant="body48"
              >
                We&#39;re busy adding more great vendors.
              </Text>
            </div>
            <div className="bg-light_green_100 flex md:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start sm:px-[20px] px-[30px] md:w-[100%] w-[34%]">
              <div className="flex flex-col gap-[10.84px] items-start justify-start pb-[20.16px] pt-[19px] w-[auto]">
                <Text
                  className="font-normal leading-[22.86px] md:max-w-[100%] max-w-[183px] not-italic text-black_900 text-left"
                  variant="body69"
                >
                  While you’re here, start your save the dates
                </Text>
                <Button className="bg-black_900 cursor-pointer font-semibold min-w-[210px] pb-[11.42px] pl-[38.14px] pr-[39.86px] pt-[9.58px] sm:px-[20px] rounded-[22px] text-[16px] text-center text-white_A700 w-[auto]">
                  Get free samples
                </Button>
              </div>
              <div className="md:h-[114px] h-[140px] pl-[45.07px] pr-[104.53px] sm:px-[20px] md:px-[40px] py-[12.6px] relative w-[180px]">
                <div className="absolute bg-blue_700 h-[106px] inset-[0] justify-center m-[auto] rounded-[53px] w-[78%]"></div>
                <div className="absolute bg-white_A700 flex h-[max-content] inset-[0] items-center justify-center m-[auto] rounded-[8px] shadow-bs12 w-[50%]">
                  <div className="h-[114px] relative w-[100%]">
                    <Img
                      src="images/img_div_114x89.png"
                      className="h-[114px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="div Four"
                    />
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[66%]">
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[52%]">
                        <Img
                          src="images/img_div_12x22.png"
                          className="h-[12px] md:h-[auto] rounded-[50%] w-[74%]"
                          alt="div Five"
                        />
                        <Text
                          className="mt-[3px] not-italic text-center text-gray_703 tracking-[0.70px] w-[auto]"
                          variant="body9"
                        >
                          nicki and elizabeth
                        </Text>
                        <Text
                          className="not-italic text-center text-gray_703 tracking-[1.30px] w-[auto]"
                          variant="body89"
                        >
                          SAVE THE DATE
                        </Text>
                      </div>
                      <Img
                        src="images/img_div_59x58.png"
                        className="h-[59px] md:h-[auto] mt-[4px] object-cover rounded-[8px] sm:w-[100%] w-[58px]"
                        alt="div Six"
                      />
                      <Text
                        className="mt-[4px] not-italic text-center text-gray_703 tracking-[0.70px] w-[auto]"
                        variant="body9"
                      >
                        june 29, 2024 | san francisco, ca
                      </Text>
                      <Text
                        className="not-italic text-center text-gray_703 w-[auto]"
                        variant="body65"
                      >
                        invitation to come
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gray_903 font-roboto h-[436px] inset-x-[0] max-w-[1900px] mx-[auto] md:px-[20px] top-[23%] w-[100%]">
          <div className="absolute bg-gray_903 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[30px] sm:px-[20px] w-[97%]">
            <div className="flex flex-col gap-[40px] items-center justify-start mt-[101px] pb-[28px] sm:pr-[20px] pr-[28px] md:w-[100%] w-[68%]">
              <div className="flex flex-col gap-[30px] items-center justify-start p-[2px] md:w-[100%] w-[auto]">
                <Text
                  className="font-black font-lato text-center text-white_A700 w-[auto]"
                  variant="body19"
                >
                  Hva kan du finne?
                </Text>
                <Text
                  className="font-normal font-roboto mb-[19px] not-italic text-center text-white_A700 w-[auto]"
                  variant="body56"
                >
                  Alt som er lokalt hentet, fra nettsider, selskaper, butikker
                  til leverandører du ikke visste eksisterte.
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mb-[4px] sm:px-[20px] px-[40px] md:w-[100%] w-[98%]">
                <div className="flex relative md:w-[100%] w-[23%]">
                  <div className="border-b-[3px] border-light_green_600 border-solid flex items-center justify-start my-[auto] pb-[23px] pl-[28px] pr-[27.48px] pt-[17px] sm:px-[20px] w-[auto]">
                    <Text
                      className="font-medium text-left text-light_green_602 w-[auto]"
                      variant="body69"
                    >
                      Hederlige omtaler
                    </Text>
                  </div>
                  <Text
                    className="font-medium ml-[-9px] my-[auto] text-left text-white_A700 w-[auto] z-[1]"
                    variant="body69"
                  >
                    Oppstart
                  </Text>
                </div>
                <Text
                  className="font-medium md:ml-[0] ml-[34px] text-left text-white_A700 w-[auto]"
                  variant="body69"
                >
                  Statlig & Private
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[44px] text-left text-white_A700 w-[auto]"
                  variant="body69"
                >
                  Nettside
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[114px] text-left text-white_A700 w-[auto]"
                  variant="body69"
                >
                  Kommune
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[84px] text-left text-white_A700 w-[auto]"
                  variant="body69"
                >
                  AS
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[130px] text-left text-white_A700 w-[auto]"
                  variant="body69"
                >
                  ENK
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute border-solid border-t-[1px] border-white_A700 flex font-inter inset-x-[0] items-center justify-end mx-[auto] p-[15px] top-[8%] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-center md:w-[100%] w-[97%]">
              <Text
                className="font-extrabold md:ml-[0] ml-[652px] text-left text-white_A700 w-[auto]"
                variant="body69"
              >
                Virkelig inspirasjon
              </Text>
              <SelectBox
                className="font-extrabold md:ml-[0] ml-[49px] text-[16px] text-left text-white_A700 w-[10%] md:w-[100%]"
                placeholderClassName="text-white_A700"
                name="MoreOptions"
                placeholder="Utforsk leverandører"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_white_a700_5x8.svg"
                    className="h-[5px] mr-[35px] w-[8px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Text
                className="font-extrabold md:ml-[0] ml-[45px] mr-[600px] md:mt-[0] mt-[3px] text-left text-white_A700 w-[auto]"
                variant="body69"
              >
                Bli en leverandør
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptOnePage;
