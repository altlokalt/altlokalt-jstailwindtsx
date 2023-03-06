import React from "react";

import { Img, Text, Line, Button, List, SelectBox } from "components";

const HttpselementsenvatocomallitemsPage: React.FC = () => {
  function handleNavigate18() {
    window.location.href =
      "http://gigaland.on3-step.com/demo/?storefront=envato-element";
  }

  return (
    <>
      <div className="bg-gray_58 flex font-firasans items-center justify-start mx-[auto] w-[100%]">
        <div className="flex items-center justify-start w-[100%]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <header className="flex items-center justify-center md:px-[20px] w-[100%]">
              <div className="bg-white_A700 flex items-center justify-center sm:px-[20px] md:px-[40px] px-[59px] shadow-bs52 w-[100%]">
                <div className="flex flex-col items-center justify-center md:w-[100%] w-[99%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between md:w-[100%] w-[99%]">
                    <Img
                      src="images/img_a_light_green_613.svg"
                      className="h-[40px] md:mt-[0] my-[10px] w-[auto]"
                      alt="a"
                    />
                    <div className="h-[47px] md:h-[49px] mb-[2px] md:mt-[0] mt-[10px] relative md:w-[100%] w-[46%]">
                      <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                        <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                          <div className="bg-gray_65 border-gray_328 border-l-[1px] border-solid border-y-[1px] h-[47px] relative rounded-bl-[6px] rounded-br-[0] rounded-tl-[6px] rounded-tr-[0] w-[42%]">
                            <div className="absolute bg-gray_65 border-gray_328 border-l-[1px] border-solid border-y-[1px] h-[40px] left-[0] rounded-bl-[6px] rounded-br-[0] rounded-tl-[6px] rounded-tr-[0] top-[0] w-[40%]"></div>
                            <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] items-start justify-start m-[auto] w-[auto]">
                              <div className="flex flex-row gap-[9.03px] items-center justify-start pb-[9.4px] pt-[9px] px-[14px] w-[auto]">
                                <Text
                                  className="font-medium text-center text-gray_800 w-[auto]"
                                  variant="body78"
                                >
                                  All items
                                </Text>
                                <Img
                                  src="images/img_arrowdown_gray_800.svg"
                                  className="h-[5px] w-[auto]"
                                  alt="arrowdown"
                                />
                              </div>
                              <Line className="h-[1px] rounded-[1px] shadow-bs53 w-[100%]" />
                            </div>
                          </div>
                          <Button className="bg-gray_851 border-gray_851 border-r-[1px] border-solid border-y-[1px] flex h-[40px] items-center justify-center mb-[7px] pl-[12px] pr-[12.8px] py-[12px] rounded-bl-[0] rounded-br-[6px] rounded-tl-[0] rounded-tr-[6px] w-[40px]">
                            <Img
                              src="images/img_search_white_a700_40x41.svg"
                              className="h-[16px]"
                              alt="search"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="absolute bg-white_A700 border-[1px] border-gray_328 border-solid flex items-center justify-start p-[0.8px] right-[6%] top-[0] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-start pr-[12px] w-[auto]">
                          <div className="flex items-start justify-start pb-[11.4px] pl-[10px] pr-[12.85px] pt-[10px] sm:w-[100%] w-[auto]">
                            <Text
                              className="common-pointer font-medium text-gray_800 text-left w-[auto]"
                              variant="body78"
                              onClick={handleNavigate18}
                            >
                              http://gigaland.on3-step.com/demo/?storefront=envato-element
                            </Text>
                          </div>
                          <Img
                            src="images/img_close_gray_646.svg"
                            className="h-[14px] w-[14px]"
                            alt="close"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[31.17px] items-start justify-start md:mt-[0] my-[13px] pb-[0.6px] pl-[7px] pr-[6.88px] w-[auto]">
                      <Text
                        className="font-semibold text-gray_852 text-left w-[auto]"
                        variant="body82"
                      >
                        License
                      </Text>
                      <Text
                        className="font-semibold text-gray_852 text-left w-[auto]"
                        variant="body78"
                      >
                        Pricing
                      </Text>
                    </div>
                    <Button className="bg-pink_A401 cursor-pointer font-bold min-w-[227px] md:mt-[0] my-[10px] pb-[11.4px] pl-[30.8px] pr-[35.46px] pt-[7.6px] sm:px-[20px] rounded-[6px] text-[14px] text-center text-white_A700 w-[auto]">
                      Get unlimited downloads
                    </Button>
                    <div className="bg-white_A700 flex items-start justify-start py-[16px] w-[auto]">
                      <ul className="flex flex-row sm:hidden items-center justify-between pt-[3px] w-[100%] common-row-list">
                        <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                          <Img
                            src="images/img_eye_gray_852.svg"
                            className="h-[25px]"
                            alt="eye"
                          />
                        </li>
                        <li className="mt-[2px] mb-[5px] sm:w-[100%] sm:my-[10px] w-[auto]">
                          <div className="flex items-center justify-start">
                            <a
                              className="cursor-pointer font-bold text-[14px] text-center text-gray_851 w-[auto]"
                              href="javascript:"
                            >
                              gregory
                            </a>
                          </div>
                        </li>
                        <li className="mt-[6px] mb-[9px] sm:w-[100%] sm:my-[10px] w-[auto]">
                          <Img
                            src="images/img_arrowdown_gray_852.svg"
                            className="h-[9px]"
                            alt="arrowdown One"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white_A700 h-[60px] md:h-[741px] relative md:w-[100%] w-[99%]">
                    <div className="bg-white_A700 h-[60px] m-[auto] w-[99%]"></div>
                    <div className="absolute flex md:flex-col flex-row gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] pr-[4px] w-[100%]">
                      <div className="flex md:flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between p-[15px] md:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold md:mt-[0] my-[6px] text-gray_852 text-left w-[auto]"
                          variant="body78"
                        >
                          Stock Video
                        </Text>
                        <Text
                          className="font-semibold text-gray_852 text-left w-[auto]"
                          variant="body82"
                        >
                          Video Templates
                        </Text>
                        <Text
                          className="font-semibold md:mt-[0] my-[6px] text-gray_852 text-left w-[auto]"
                          variant="body78"
                        >
                          Music
                        </Text>
                        <Text
                          className="font-semibold text-gray_852 text-left w-[auto]"
                          variant="body82"
                        >
                          Sound Effects
                        </Text>
                        <Text
                          className="font-semibold text-gray_852 text-left w-[auto]"
                          variant="body82"
                        >
                          Graphic Templates
                        </Text>
                        <Text
                          className="font-semibold text-gray_852 text-left w-[auto]"
                          variant="body82"
                        >
                          Graphics
                        </Text>
                        <Text
                          className="font-semibold text-gray_852 text-left w-[auto]"
                          variant="body82"
                        >
                          Presentation Templates
                        </Text>
                        <Text
                          className="font-semibold text-gray_852 text-left w-[auto]"
                          variant="body82"
                        >
                          Photos
                        </Text>
                        <Text
                          className="font-semibold md:mt-[0] my-[6px] text-gray_852 text-left w-[auto]"
                          variant="body78"
                        >
                          Fonts
                        </Text>
                        <Text
                          className="font-semibold md:mt-[0] my-[6px] text-gray_852 text-left w-[auto]"
                          variant="body78"
                        >
                          Add-ons
                        </Text>
                        <Text
                          className="font-semibold md:mt-[0] my-[6px] text-gray_852 text-left w-[auto]"
                          variant="body78"
                        >
                          Web Templates
                        </Text>
                        <Text
                          className="font-semibold md:mt-[0] my-[6px] text-gray_852 text-left w-[auto]"
                          variant="body78"
                        >
                          CMS Templates
                        </Text>
                      </div>
                      <Text
                        className="font-semibold text-center text-gray_852 w-[auto]"
                        variant="body78"
                      >
                        More
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-col font-montserrat items-start justify-start md:w-[100%] w-[auto]">
              <div className="bg-gray_110 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[74.6px] py-[30px] md:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[13px] items-start justify-start max-w-[1371px] mx-[auto] pt-[4px] w-[100%]">
                  <Text
                    className="font-thin text-gray_800 text-left w-[auto]"
                    variant="body48"
                  >
                    Browse Millions Of Digital Assets
                  </Text>
                  <div className="flex font-firasans items-start justify-end pr-[4px] py-[4px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_544 text-left w-[auto]"
                      variant="body78"
                    >
                      Photos, fonts, graphics, add-ons and templates for
                      websites and presentations
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-firasans gap-[40px] items-center justify-start pb-[60px] pt-[40px] md:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[5.6px] items-start justify-start max-w-[1370px] mx-[auto] pt-[9.4px] md:px-[20px] w-[100%]">
                  <Text
                    className="font-bold text-bluegray_910 text-left w-[auto]"
                    variant="body87"
                  >
                    Browse by category
                  </Text>
                  <div className="flex items-start justify-start pr-[6px] py-[6px] w-[100%]">
                    <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[92%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="font-bold text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            Stock Video{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (3,900,988)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                        <Text
                          className="font-bold text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            Video Templates{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (72,768)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                        <Text
                          className="font-bold text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            Music{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (141,583)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                        <Text
                          className="font-bold text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            Sound Effects{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (621,117)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                        <Text
                          className="font-bold text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            Graphic Templates{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (226,998)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                        <Text
                          className="font-bold text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            Graphics{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (130,263)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                        <Text
                          className="font-bold text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            Presentation Templates{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (90,383)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                        <Text
                          className="font-bold text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            Photos{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (7,309,159)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                        <Text
                          className="font-bold text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            Fonts{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (34,589)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:w-[100%] w-[47%]">
                        <Text
                          className="font-bold text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            Add-ons{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (17,806)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                        <Text
                          className="font-bold sm:ml-[0] ml-[17px] text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            Web Templates{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (4,756)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                        <Text
                          className="font-bold sm:ml-[0] ml-[18px] text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            CMS Templates{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (1,201)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                        <Text
                          className="font-bold sm:ml-[0] ml-[18px] text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            WordPress{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (5,606)
                          </span>
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            {" "}
                          </span>
                          <span className="text-gray_544 text-[12px] font-firasans">
                            |
                          </span>
                        </Text>
                        <Text
                          className="font-bold sm:ml-[0] ml-[17px] text-indigo_A403 text-left w-[auto]"
                          variant="body87"
                        >
                          <span className="text-indigo_A403 text-[12px] font-firasans">
                            3D{" "}
                          </span>
                          <span className="text-gray_544 text-[10px] font-montserrat">
                            (176,386)
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-montserrat md:gap-[40px] gap-[60px] items-start justify-start sm:px-[20px] md:px-[40px] px-[74.6px] md:w-[100%] w-[auto]">
                  <List
                    className="flex-col md:gap-[40px] gap-[60px] grid items-center max-w-[1370px] mx-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[8px] items-end justify-between pb-[2px] w-[13%]">
                          <Text
                            className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            Stock Video
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mt-[8px] pl-[5.6px] pr-[5.15px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            3,900,988
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-firasans md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_div_474x843.png"
                            className="h-[100%] md:h-[180px] sm:h-[auto] object-cover rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[320px]"
                            alt="divmaskgroup"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Seascape of Caramoan Islands, Camarines Sur,
                                  Philippines
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By AlexTraveler
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_div_474x843.png"
                            className="h-[100%] md:h-[180px] sm:h-[auto] object-cover rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[320px]"
                            alt="divmaskgroup One"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Beautiful Gorgeous Girl in a Stunning Evening
                                  Green Dress Cheerful and Happy Walking and
                                  Playfully
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By photo_oles
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark One"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download One"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_div_474x843.png"
                            className="h-[100%] md:h-[180px] sm:h-[auto] object-cover rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[320px]"
                            alt="divmaskgroup Two"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Turntable vinyl record player
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By mahirkart
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Two"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Two"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_div_474x843.png"
                            className="h-[100%] md:h-[180px] sm:h-[auto] object-cover rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[320px]"
                            alt="divmaskgroup Three"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Svnafellsjkull Glacier in Iceland
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By sergeyxsp
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Three"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Three"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[10px] items-end justify-between w-[15%]">
                          <Text
                            className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            Video Templates
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mb-[2px] mt-[6px] pl-[5.6px] pr-[5.24px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            72,768
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft One"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-firasans md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_div_474x843.png"
                            className="h-[100%] md:h-[180px] sm:h-[auto] object-cover rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[320px]"
                            alt="divmaskgroup One"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  SEO and Development - Animation Icons (MOGRT)
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By IconsX
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark One"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download One"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_div_474x843.png"
                            className="h-[100%] md:h-[180px] sm:h-[auto] object-cover rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[320px]"
                            alt="divmaskgroup One One"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Smart Watch App Presentation for Final Cut Pro
                                  X
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By LaurentiuDorin
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark One One"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download One One"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_div_474x843.png"
                            className="h-[100%] md:h-[180px] sm:h-[auto] object-cover rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[320px]"
                            alt="divmaskgroup Two One"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Letter Board Flat Lay Kit
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By FluxVFX-templates
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Two One"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Two One"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_div_474x843.png"
                            className="h-[100%] md:h-[180px] sm:h-[auto] object-cover rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] w-[320px]"
                            alt="divmaskgroup Three One"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Fitness and Sports - Animation Icons (MOGRT)
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By IconsX
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Three One"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Three One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <List
                    className="flex-col gap-[59px] grid items-center max-w-[1370px] mx-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[7px] items-end justify-between pb-[2px] w-[8%]">
                          <Text
                            className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            Music
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mt-[8px] pl-[5.6px] pr-[5.17px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            141,583
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft Two"
                          />
                        </div>
                      </div>
                      <div className="font-firasans gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[10px] items-start justify-start px-[20px] py-[15px] rounded-[10px] shadow-bs52 w-[100%]">
                          <div className="flex flex-row gap-[314.51px] h-[42px] md:h-[auto] items-center justify-start sm:w-[100%] w-[auto]">
                            <Button className="bg-gray_940 flex h-[40px] items-center justify-center p-[12px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_vector_40x40.svg"
                                className=""
                                alt="Vector"
                              />
                            </Button>
                            <div className="flex flex-row items-start justify-end w-[11%]">
                              <div className="bg-bluegray_910 flex h-[14px] items-end justify-start p-[3px] rounded-[50%] w-[14px]">
                                <Img
                                  src="images/img_vector_bluegray_910.svg"
                                  className="h-[7px] w-[auto]"
                                  alt="Vector One"
                                />
                              </div>
                              <Text
                                className="font-semibold ml-[5px] text-bluegray_910 text-left w-[auto]"
                                variant="body87"
                              >
                                2:34
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start py-[3px] w-[100%]">
                            <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[56%]">
                              <Text
                                className="font-bold text-bluegray_910 text-left w-[auto]"
                                variant="body82"
                              >
                                Progress
                              </Text>
                              <div className="flex items-start justify-start mt-[4px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  <span className="text-gray_544 text-[12px] font-firasans">
                                    By{" "}
                                  </span>
                                  <span className="text-gray_544 text-[12px] font-firasans font-bold">
                                    BrownHouseMedia
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <a
                              className="font-semibold sm:ml-[0] ml-[11px] text-[11px] text-bluegray_910 text-center underline w-[auto]"
                              href="javascript:"
                            >
                              1 Track
                            </a>
                            <Text
                              className="font-normal sm:ml-[0] ml-[10px] not-italic text-bluegray_910 text-left w-[auto]"
                              variant="body87"
                            >
                              <span className="text-bluegray_910 text-[12px] font-firasans">
                                BPM
                              </span>
                              <span className="text-bluegray_910 text-[12px] font-firasans font-semibold">
                                {" "}
                                140
                              </span>
                            </Text>
                            <Img
                              src="images/img_videocamera_red_a208.svg"
                              className="h-[30px] sm:ml-[0] ml-[8px] w-[auto]"
                              alt="videocamera"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[10px] items-start justify-start px-[20px] py-[15px] rounded-[10px] shadow-bs52 w-[100%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Button className="bg-gray_940 flex h-[40px] items-center justify-center p-[12px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_vector_40x40.svg"
                                className=""
                                alt="Vector Two"
                              />
                            </Button>
                            <div className="flex flex-row items-start justify-end w-[auto]">
                              <div className="bg-bluegray_910 flex h-[14px] items-end justify-start p-[3px] rounded-[50%] w-[14px]">
                                <Img
                                  src="images/img_vector_bluegray_910.svg"
                                  className="h-[7px] w-[auto]"
                                  alt="Vector Three"
                                />
                              </div>
                              <Text
                                className="font-semibold ml-[5px] text-bluegray_910 text-left w-[auto]"
                                variant="body87"
                              >
                                2:37
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start py-[3px] w-[100%]">
                            <div className="flex sm:flex-1 flex-col gap-[6px] items-start justify-start sm:w-[100%] w-[56%]">
                              <Text
                                className="font-bold text-bluegray_910 text-left w-[auto]"
                                variant="body82"
                              >
                                Virtual Tour
                              </Text>
                              <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  <span className="text-gray_544 text-[12px] font-firasans">
                                    By{" "}
                                  </span>
                                  <span className="text-gray_544 text-[12px] font-firasans font-bold">
                                    BrownHouseMedia
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <a
                              className="font-semibold sm:ml-[0] ml-[11px] text-[11px] text-bluegray_910 text-center underline w-[auto]"
                              href="javascript:"
                            >
                              1 Track
                            </a>
                            <Text
                              className="font-normal sm:ml-[0] ml-[10px] not-italic text-bluegray_910 text-left w-[auto]"
                              variant="body87"
                            >
                              <span className="text-bluegray_910 text-[12px] font-firasans">
                                BPM
                              </span>
                              <span className="text-bluegray_910 text-[12px] font-firasans font-semibold">
                                {" "}
                                120
                              </span>
                            </Text>
                            <Img
                              src="images/img_videocamera_red_a208.svg"
                              className="h-[30px] sm:ml-[0] ml-[9px] w-[auto]"
                              alt="videocamera One"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[10px] items-start justify-start px-[20px] py-[15px] rounded-[10px] shadow-bs52 w-[100%]">
                          <div className="flex flex-row gap-[314.74px] h-[42px] md:h-[auto] items-center justify-start sm:w-[100%] w-[auto]">
                            <Button className="bg-gray_940 flex h-[40px] items-center justify-center p-[12px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_vector_40x40.svg"
                                className=""
                                alt="Vector Four"
                              />
                            </Button>
                            <div className="flex flex-row items-start justify-end w-[11%]">
                              <div className="bg-bluegray_910 flex h-[14px] items-end justify-start p-[3px] rounded-[50%] w-[14px]">
                                <Img
                                  src="images/img_vector_bluegray_910.svg"
                                  className="h-[7px] w-[auto]"
                                  alt="Vector Five"
                                />
                              </div>
                              <Text
                                className="font-semibold ml-[5px] text-bluegray_910 text-left w-[auto]"
                                variant="body87"
                              >
                                3:26
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start py-[3px] w-[100%]">
                            <div className="flex sm:flex-1 flex-col gap-[5px] items-start justify-start sm:w-[100%] w-[54%]">
                              <Text
                                className="font-bold text-bluegray_910 text-left w-[auto]"
                                variant="body82"
                              >
                                Upbeat & Exciting Hipster Music
                              </Text>
                              <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  <span className="text-gray_544 text-[12px] font-firasans">
                                    By{" "}
                                  </span>
                                  <span className="text-gray_544 text-[12px] font-firasans font-bold">
                                    TimMcMorris
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <a
                              className="font-semibold sm:ml-[0] ml-[11px] text-[11px] text-bluegray_910 text-center underline w-[auto]"
                              href="javascript:"
                            >
                              2 Tracks
                            </a>
                            <Text
                              className="font-normal sm:ml-[0] ml-[11px] not-italic text-bluegray_910 text-left w-[auto]"
                              variant="body87"
                            >
                              <span className="text-bluegray_910 text-[12px] font-firasans">
                                BPM
                              </span>
                              <span className="text-bluegray_910 text-[12px] font-firasans font-semibold">
                                {" "}
                                133
                              </span>
                            </Text>
                            <Img
                              src="images/img_videocamera_red_a208.svg"
                              className="h-[30px] sm:ml-[0] ml-[9px] w-[auto]"
                              alt="videocamera Two"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[8px] items-end justify-between pb-[2px] w-[13%]">
                          <Text
                            className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            Sound Effects
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mt-[7px] pl-[5.6px] pr-[5.3px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            621,117
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft Three"
                          />
                        </div>
                      </div>
                      <div className="font-firasans gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[10px] items-start justify-start px-[20px] py-[15px] rounded-[10px] shadow-bs52 w-[100%]">
                          <div className="flex flex-row gap-[314.74px] h-[40px] md:h-[auto] items-center justify-start sm:w-[100%] w-[auto]">
                            <Button className="bg-gray_940 flex h-[40px] items-center justify-center p-[12px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_vector_40x40.svg"
                                className=""
                                alt="Vector One"
                              />
                            </Button>
                            <div className="flex flex-row items-center justify-end w-[11%]">
                              <div className="bg-bluegray_910 flex h-[14px] items-end justify-start p-[3px] rounded-[50%] w-[14px]">
                                <Img
                                  src="images/img_vector_bluegray_910.svg"
                                  className="h-[7px] w-[auto]"
                                  alt="Vector One One"
                                />
                              </div>
                              <Text
                                className="font-semibold ml-[5px] text-bluegray_910 text-left w-[auto]"
                                variant="body91"
                              >
                                0:09
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] h-[37px] md:h-[auto] items-center justify-start sm:w-[100%] w-[auto]">
                            <div className="flex flex-col gap-[6px] items-start justify-start sm:w-[100%] w-[84%]">
                              <Text
                                className="font-bold text-bluegray_910 text-left w-[auto]"
                                variant="body82"
                              >
                                Cocktail Shaker
                              </Text>
                              <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  <span className="text-gray_544 text-[12px] font-firasans">
                                    By{" "}
                                  </span>
                                  <span className="text-gray_544 text-[12px] font-firasans font-bold">
                                    urbazon
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_videocamera_red_a208.svg"
                              className="h-[30px] w-[66px]"
                              alt="videocamera One"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[10px] items-start justify-start px-[20px] py-[15px] rounded-[10px] shadow-bs52 w-[100%]">
                          <div className="flex flex-row gap-[316.83px] h-[40px] md:h-[auto] items-center justify-start sm:w-[100%] w-[auto]">
                            <Button className="bg-gray_940 flex h-[40px] items-center justify-center p-[12px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_vector_40x40.svg"
                                className=""
                                alt="Vector Two One"
                              />
                            </Button>
                            <div className="flex flex-row items-start justify-end w-[10%]">
                              <div className="bg-bluegray_910 flex h-[14px] items-end justify-start p-[3px] rounded-[50%] w-[14px]">
                                <Img
                                  src="images/img_vector_bluegray_910.svg"
                                  className="h-[7px] w-[auto]"
                                  alt="Vector Three One"
                                />
                              </div>
                              <Text
                                className="font-semibold ml-[5px] text-bluegray_910 text-left w-[auto]"
                                variant="body87"
                              >
                                1:57
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] h-[37px] md:h-[auto] items-center justify-start sm:w-[100%] w-[auto]">
                            <div className="flex flex-col gap-[6px] items-start justify-start sm:w-[100%] w-[84%]">
                              <Text
                                className="font-bold text-bluegray_910 text-left w-[auto]"
                                variant="body82"
                              >
                                Calm Office
                              </Text>
                              <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  <span className="text-gray_544 text-[12px] font-firasans">
                                    By{" "}
                                  </span>
                                  <span className="text-gray_544 text-[12px] font-firasans font-bold">
                                    Sound-Ideas
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_videocamera_red_a208.svg"
                              className="h-[30px] w-[66px]"
                              alt="videocamera One One"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[10px] items-start justify-start px-[20px] py-[15px] rounded-[10px] shadow-bs52 w-[100%]">
                          <div className="flex flex-row gap-[316.6px] h-[40px] md:h-[auto] items-center justify-start sm:w-[100%] w-[auto]">
                            <Button className="bg-gray_940 flex h-[40px] items-center justify-center p-[12px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_vector_40x40.svg"
                                className=""
                                alt="Vector Four One"
                              />
                            </Button>
                            <div className="flex flex-row items-center justify-end w-[11%]">
                              <div className="bg-bluegray_910 flex h-[14px] items-end justify-start p-[3px] rounded-[50%] w-[14px]">
                                <Img
                                  src="images/img_vector_bluegray_910.svg"
                                  className="h-[7px] w-[auto]"
                                  alt="Vector Five One"
                                />
                              </div>
                              <Text
                                className="font-semibold ml-[5px] text-bluegray_910 text-left w-[auto]"
                                variant="body91"
                              >
                                0:01
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] h-[37px] md:h-[auto] items-center justify-start sm:w-[100%] w-[auto]">
                            <div className="flex flex-col gap-[5px] items-start justify-start sm:w-[100%] w-[84%]">
                              <Text
                                className="font-bold text-bluegray_910 text-left w-[auto]"
                                variant="body82"
                              >
                                Game Negative 3
                              </Text>
                              <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  <span className="text-gray_544 text-[12px] font-firasans">
                                    By{" "}
                                  </span>
                                  <span className="text-gray_544 text-[12px] font-firasans font-bold">
                                    GameChestAudio
                                  </span>
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_videocamera_red_a208.svg"
                              className="h-[30px] w-[66px]"
                              alt="videocamera Two One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <List
                    className="flex-col md:gap-[40px] gap-[60px] grid items-center max-w-[1370px] mx-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[8px] items-end justify-between w-[17%]">
                          <Text
                            className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            Graphic Templates
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mb-[2px] mt-[6px] pl-[5.6px] pr-[4.81px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            226,998
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft Four"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-firasans md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] pb-[67px] rounded-[10px] shadow-bs52 w-[100%]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Two"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Club Flyer
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By styleWish
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Two"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Two"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] pb-[67px] rounded-[10px] shadow-bs52 w-[100%]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup One Two"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Punk You! T-Shirt Design
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By BadSyxn
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark One Two"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download One Two"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] pb-[67px] rounded-[10px] shadow-bs52 w-[100%]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Two Two"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Art Deco Wedding Invitation Suite
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By graphicook
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Two Two"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Two Two"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] pb-[67px] rounded-[10px] shadow-bs52 w-[100%]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Three Two"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Wedding Invitation Art Deco
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By graphicook
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Three Two"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Three Two"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[29px] items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[7px] items-end justify-between w-[10%]">
                          <Text
                            className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            Graphics
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mb-[2px] mt-[6px] pl-[5.6px] pr-[5px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            130,263
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft Five"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-firasans md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_divmaskgroup.svg"
                            className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup Three"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Happy father and daughter skiing in snow.
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By masastarus
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Three"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Three"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_divmaskgroup.svg"
                            className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup One Three"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Happy kids celebrating Saint Martins day.
                                  Vector
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By masastarus
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark One Three"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download One Three"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_divmaskgroup.svg"
                            className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup Two Three"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Old Movie Title - Text Effect n° 3 of 6
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By ShinyPixel
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Two Three"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Two Three"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_divmaskgroup.svg"
                            className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup Three Three"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Cute unicorn with watermelon. Hello summer.
                                  Vector
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By masastarus
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Three Three"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Three Three"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex sm:flex-1 flex-row gap-[8px] items-end justify-between sm:w-[100%] w-[20%]">
                          <Text
                            className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            Presentation Templates
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mb-[2px] mt-[6px] pl-[5.6px] pr-[4.8px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            90,383
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft Six"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-firasans md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 w-[320px]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[10px] shadow-bs52 w-[auto]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Four"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  The X Note - Powerpoint Template
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By Slidehack
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Four"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Four"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 w-[320px]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[10px] shadow-bs52 w-[auto]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup One Four"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Be. Powerpoint Presentation Template
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By Pixasquare
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark One Four"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download One Four"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 w-[320px]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[10px] shadow-bs52 w-[auto]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Two Four"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Maxis - Google Slides templates
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By inspirasign
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Two Four"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Two Four"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 w-[320px]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[10px] shadow-bs52 w-[auto]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Three Four"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  SPLASH - Powerpoint Template
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By inspirasign
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Three Four"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Three Four"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1370px] mx-[auto] w-[100%]">
                    <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[6px] items-end justify-between pb-[2px] w-[10%]">
                        <Text
                          className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                          variant="body60"
                        >
                          Photos
                        </Text>
                        <Text
                          className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mt-[7px] pl-[5.6px] pr-[4.69px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                          variant="body98"
                        >
                          7,309,159
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                        <Text
                          className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                          variant="body87"
                        >
                          See more
                        </Text>
                        <Img
                          src="images/img_arrowleft_indigo_a403.svg"
                          className="h-[8px] w-[auto]"
                          alt="arrowleft Seven"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_div_186x1370.png"
                      className="h-[186px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                      alt="div One"
                    />
                  </div>
                  <List
                    className="flex-col gap-[59px] grid items-center max-w-[1370px] mx-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[6px] items-end justify-between w-[8%]">
                          <Text
                            className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            Fonts
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mb-[2px] mt-[7px] pl-[5.6px] pr-[5.15px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            34,589
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft Eight"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-firasans md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 w-[320px]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[10px] shadow-bs52 w-[auto]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Five"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Northden
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By Holismjd
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Five"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Five"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 w-[320px]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[10px] shadow-bs52 w-[auto]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup One Five"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  WinterLand Font
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By khurasan
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark One Five"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download One Five"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 w-[320px]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[10px] shadow-bs52 w-[auto]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Two Five"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Rockinsoda
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By Holismjd
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Two Five"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Two Five"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 w-[320px]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[10px] shadow-bs52 w-[auto]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Three Five"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Baker Street Ornaments
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By kimmydesign
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Three Five"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Three Five"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[8px] items-end justify-between pb-[2px] w-[10%]">
                          <Text
                            className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            Add-ons
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mt-[7px] pl-[5.6px] pr-[4.71px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            17,806
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft Nine"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-firasans md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <Img
                            src="images/img_divmaskgroup.svg"
                            className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup Six"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Desert Photoshop Action
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By 315700
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Six"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Six"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <Img
                            src="images/img_divmaskgroup.svg"
                            className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup One Six"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Dynamic Photoshop Action
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By AB-TheDesigner
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark One Six"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download One Six"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <Img
                            src="images/img_divmaskgroup.svg"
                            className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup Two Six"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Watercolor Photoshop Action
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By UnicDesign
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Two Six"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Two Six"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <Img
                            src="images/img_divmaskgroup.svg"
                            className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup Three Six"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Illustration Sketch Painting Photoshop Action
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By IndWorks
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Three Six"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Three Six"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[10px] items-end justify-between w-[14%]">
                          <Text
                            className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            Web Templates
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mb-[3px] mt-[7px] pl-[5.6px] pr-[5.5px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            4,756
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft Ten"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-firasans md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_divmaskgroup.svg"
                            className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup Seven"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Grand Restaurant HTML Template
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By max-themes
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Seven"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Seven"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_divmaskgroup.svg"
                            className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup One Seven"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Seppo - Corporate One Page HTML Template
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By CocoBasic
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark One Seven"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download One Seven"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_divmaskgroup.svg"
                            className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup Two Seven"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  BOUNCE - Responsive One Page Vcard Template
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By mutationthemes
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Two Seven"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Two Seven"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[10px] shadow-bs52 w-[auto]">
                          <Img
                            src="images/img_divmaskgroup.svg"
                            className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup Three Seven"
                          />
                          <div className="bg-white_A700 flex flex-row items-center justify-between p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  AllStore - MultiConcept eCommerce Shop
                                  Template
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By real-web
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Three Seven"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Three Seven"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[11px] items-end justify-between w-[14%]">
                          <Text
                            className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            CMS Templates
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mb-[3px] mt-[7px] pl-[5.6px] pr-[4.78px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            1,201
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft Eleven"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-firasans md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] pb-[67px] rounded-[10px] shadow-bs52 w-[100%]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Eight"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Sunmi - Electronics Responsive Shopify Theme
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By ShopiLaunch
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Eight"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Eight"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] pb-[67px] rounded-[10px] shadow-bs52 w-[100%]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup One Eight"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Sabil- MultiPurpose Unbounce Landing Page
                                  Template
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By Divine-Store
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark One Eight"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download One Eight"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] pb-[67px] rounded-[10px] shadow-bs52 w-[100%]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Two Eight"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  MolteStore - Multi Store Responsive Shopify
                                  Theme
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By ShopiLaunch
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Two Eight"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Two Eight"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] pb-[67px] rounded-[10px] shadow-bs52 w-[100%]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Three Eight"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  MooBoo - Fashion OpenCart Theme
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By Plaza-Themes
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Three Eight"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Three Eight"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[8px] items-end justify-between pb-[2px] w-[11%]">
                          <Text
                            className="font-bold font-firasans text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            WordPress
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mt-[7px] pl-[5.6px] pr-[5.57px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            5,606
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft Twelve"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-firasans md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 w-[320px]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[10px] shadow-bs52 w-[auto]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Nine"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Blogosphere - Multipurpose Blogging Theme
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By cmsmasters
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Nine"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Nine"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 w-[320px]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[10px] shadow-bs52 w-[auto]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup One Nine"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  WordPress Pinterest Feed Plugin
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By Elfsight
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark One Nine"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download One Nine"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 w-[320px]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[10px] shadow-bs52 w-[auto]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Two Nine"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Zox News - Professional WordPress News &
                                  Magazine
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By MVPThemes
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Two Nine"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Two Nine"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[281px] relative rounded-[10px] shadow-bs52 w-[320px]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[10px] shadow-bs52 w-[auto]">
                            <Img
                              src="images/img_divmaskgroup.svg"
                              className="h-[214px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                              alt="divmaskgroup Three Nine"
                            />
                          </div>
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-[auto] p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-col gap-[3px] items-start justify-start mb-[2px] ml-[3px] w-[auto]">
                              <div className="flex items-center justify-end md:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Amigos - Party & Celebration Event Agency
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By cmsmasters
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Three Nine"
                            />
                            <Img
                              src="images/img_download_red_a208.svg"
                              className="h-[20px] w-[20px]"
                              alt="download Three Nine"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[7px] items-end justify-start w-[6%]">
                          <Text
                            className="font-bold font-firasans h-[24px] text-gray_851 text-left w-[auto]"
                            variant="body60"
                          >
                            3D
                          </Text>
                          <Text
                            className="border-[1px] border-gray_544 border-solid font-bold font-montserrat mb-[2px] mt-[7px] px-[5.6px] py-[2.6px] rounded-[6px] text-gray_544 text-left w-[auto]"
                            variant="body98"
                          >
                            176,386
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6.82px] items-center justify-start pb-[2.8px] pt-[7.2px] w-[auto]">
                          <Text
                            className="font-bold text-indigo_A403 text-left tracking-[0.90px] uppercase w-[auto]"
                            variant="body87"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowleft_indigo_a403.svg"
                            className="h-[8px] w-[auto]"
                            alt="arrowleft Thirteen"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row font-firasans md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <Img
                            src="images/img_arrowleft_white_a700_28x22.svg"
                            className="h-[213px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup Ten"
                          />
                          <div className="bg-white_A700 flex flex-row gap-[25px] items-center justify-start pl-[18px] pr-[11px] py-[16px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[auto]">
                            <div className="flex flex-col gap-[3px] items-start justify-start w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Compass
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By PixelSquid360
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Ten"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <Img
                            src="images/img_arrowleft_white_a700_28x22.svg"
                            className="h-[213px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup One Ten"
                          />
                          <div className="bg-white_A700 flex flex-row gap-[25px] items-center justify-start pl-[18px] pr-[11px] py-[16px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[auto]">
                            <div className="flex flex-col gap-[3px] items-start justify-start w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Yellow Football Helmet
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By PixelSquid360
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark One Ten"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <Img
                            src="images/img_arrowleft_white_a700_28x22.svg"
                            className="h-[213px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup Two Ten"
                          />
                          <div className="bg-white_A700 flex flex-row gap-[25px] items-center justify-start pl-[18px] pr-[11px] py-[16px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[auto]">
                            <div className="flex flex-col gap-[3px] items-start justify-start w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Books and Hourglass
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By PixelSquid360
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Two Ten"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start rounded-[10px] shadow-bs52 md:w-[100%] w-[24%]">
                          <Img
                            src="images/img_arrowleft_white_a700_28x22.svg"
                            className="h-[213px] rounded-tl-[10px] rounded-tr-[10px] w-[320px]"
                            alt="divmaskgroup Three Ten"
                          />
                          <div className="bg-white_A700 flex flex-row gap-[25px] items-center justify-start pl-[18px] pr-[11px] py-[16px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[auto]">
                            <div className="flex flex-col gap-[3px] items-start justify-start w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_910 text-left w-[auto]"
                                  variant="body87"
                                >
                                  Eye Glasses
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_544 text-left w-[auto]"
                                  variant="body87"
                                >
                                  By PixelSquid360
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_bookmark_red_a208.svg"
                              className="h-[23px] w-[16px]"
                              alt="bookmark Three Ten"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-gray_940 flex font-montserrat items-start justify-start pb-[60px] pt-[50px] sm:px-[20px] md:px-[40px] px-[74.6px] md:w-[100%] w-[auto]">
              <div className="flex flex-col items-center justify-start max-w-[1370px] mx-[auto] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start pb-[6px] w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Text
                      className="font-bold text-gray_646 text-left tracking-[0.90px] uppercase w-[auto]"
                      variant="body87"
                    >
                      Envato Elements
                    </Text>
                    <div className="flex flex-col font-firasans gap-[15.6px] items-start justify-start pb-[9.8px] pr-[145.66px] sm:pr-[20px] md:pr-[40px] pt-[5.8px] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        About Elements
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        Monthly Free Files
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        License
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        Terms & Conditions
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start md:ml-[0] ml-[29px] w-[auto]">
                    <Text
                      className="font-bold text-gray_646 text-left tracking-[0.90px] uppercase w-[auto]"
                      variant="body87"
                    >
                      Meet Envato
                    </Text>
                    <div className="flex flex-col font-firasans gap-[15.6px] items-start justify-start pb-[9.8px] pr-[127.66px] sm:pr-[20px] md:pr-[40px] pt-[5.8px] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        About Envato
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        Explore our ecosystem
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        Careers
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start mb-[9px] md:ml-[0] ml-[29px] w-[auto]">
                    <Text
                      className="font-bold text-gray_646 text-left tracking-[0.90px] uppercase w-[auto]"
                      variant="body87"
                    >
                      Help
                    </Text>
                    <div className="flex flex-col font-firasans gap-[15.6px] items-start justify-start pb-[9.8px] pr-[146.66px] sm:pr-[20px] md:pr-[40px] pt-[5.8px] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        Help Center
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        Become an Affiliate
                      </Text>
                    </div>
                    <Text
                      className="font-bold text-gray_646 text-left tracking-[0.90px] uppercase w-[auto]"
                      variant="body87"
                    >
                      Author
                    </Text>
                    <div className="flex flex-col font-firasans gap-[15.6px] items-start justify-start pb-[9.8px] pr-[152.66px] sm:pr-[20px] md:pr-[40px] pt-[5.8px] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        Become an Author
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body82"
                      >
                        Author Sign In
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_bcorp.svg"
                    className="h-[113px] md:ml-[0] ml-[457px] md:mt-[0] mt-[102px] w-[auto]"
                    alt="BCorp"
                  />
                </div>
                <div className="flex font-firasans items-center justify-end w-[100%]">
                  <div className="flex flex-col items-center justify-start mt-[19px] w-[100%]">
                    <div className="border-gray_853 border-solid border-t-[1px] h-[20px] w-[99%]"></div>
                    <div className="flex md:flex-col flex-row gap-[29px] items-end justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[5.2px] items-start justify-start pt-[10px] md:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start pr-[4px] py-[4px] w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body82"
                          >
                            <span className="text-white_A700 text-[13px] font-firasans">
                              Envato Market{" "}
                            </span>
                            <span className="text-gray_646 text-[13px] font-firasans">
                              |
                            </span>
                          </Text>
                          <Text
                            className="font-bold sm:ml-[0] ml-[20px] text-left text-white_A700 w-[auto]"
                            variant="body82"
                          >
                            <span className="text-white_A700 text-[13px] font-firasans">
                              Envato Tuts+{" "}
                            </span>
                            <span className="text-gray_646 text-[13px] font-firasans">
                              |
                            </span>
                          </Text>
                          <Text
                            className="font-bold sm:ml-[0] ml-[21px] text-left text-white_A700 w-[auto]"
                            variant="body82"
                          >
                            <span className="text-white_A700 text-[13px] font-firasans">
                              Placeit{" "}
                            </span>
                            <span className="text-gray_646 text-[13px] font-firasans">
                              |
                            </span>
                          </Text>
                          <Text
                            className="font-bold sm:ml-[0] ml-[17px] text-left text-white_A700 w-[auto]"
                            variant="body82"
                          >
                            <span className="text-white_A700 text-[13px] font-firasans">
                              Mixkit{" "}
                            </span>
                            <span className="text-gray_646 text-[13px] font-firasans">
                              |
                            </span>
                          </Text>
                          <Text
                            className="font-bold sm:ml-[0] ml-[19px] text-left text-white_A700 w-[auto]"
                            variant="body82"
                          >
                            <span className="text-white_A700 text-[13px] font-firasans">
                              All Products{" "}
                            </span>
                            <span className="text-gray_646 text-[13px] font-firasans">
                              |
                            </span>
                          </Text>
                          <Text
                            className="font-bold sm:ml-[0] ml-[19px] text-left text-white_A700 w-[auto]"
                            variant="body82"
                          >
                            Sitemap
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_646 text-left tracking-[0.26px] w-[auto]"
                          variant="body87"
                        >
                          © 2023 Envato Elements Pty Ltd. Trademarks and brands
                          are the property of their respective owners.
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-start mb-[2px] md:mt-[0] mt-[22px] pl-[166.86px] sm:pl-[20px] md:pl-[40px] sm:w-[100%] w-[auto]">
                        <Img
                          src="images/img_ul_gray_646.svg"
                          className="h-[32px] w-[192px]"
                          alt="ul"
                        />
                        <div className="flex flex-row items-start justify-start pl-[5px] w-[auto]">
                          <Line className="bg-gray_853 h-[15px] w-[1px]" />
                          <div className="flex flex-row gap-[10px] items-center justify-start pr-[20px] w-[100%]">
                            <Img
                              src="images/img_search_white_a700_25x25.svg"
                              className="h-[25px] w-[25px]"
                              alt="search One"
                            />
                            <SelectBox
                              className="sm:flex-1 font-bold text-[14px] text-left text-white_A700 sm:w-[100%] w-[64%]"
                              placeholderClassName="text-white_A700"
                              name="language"
                              placeholder="English"
                              isSearchable={false}
                              isMulti={false}
                              indicator={
                                <Img
                                  src="images/img_arrowdown_white_a700_6x9.svg"
                                  className="h-[6px] mr-[0] w-[9px]"
                                  alt="arrow_down"
                                />
                              }
                            ></SelectBox>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HttpselementsenvatocomallitemsPage;
