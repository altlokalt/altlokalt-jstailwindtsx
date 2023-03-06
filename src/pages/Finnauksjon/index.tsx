import React from "react";

import { Img, Input, Button, Line, Text } from "components";
import { CloseSVG } from "../../assets/images";

const FinnauksjonPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_982 flex font-quicksand items-start justify-end mx-[auto] sm:pr-[20px] pr-[211px] md:pr-[40px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start mr-[auto] w-[100%]">
          <div className="bg-gray_921 flex md:flex-1 flex-col items-center justify-start mb-[162px] p-[24px] sm:px-[20px] shadow-bs98 md:w-[100%] w-[9%]">
            <div className="bg-orange_A208 md:h-[40px] h-[72px] p-[10px] relative rounded-[50%] w-[72px]">
              <Img
                src="images/img_star1_40x40.svg"
                className="absolute h-[40px] left-[18%] top-[14%] w-[40px]"
                alt="StarOne"
              />
              <Img
                src="images/img_star2_40x40.svg"
                className="absolute bottom-[14%] h-[40px] right-[18%] w-[40px]"
                alt="StarTwo"
              />
            </div>
            <Img
              src="images/img_menu_orange_a208.svg"
              className="h-[516px] mt-[158px] w-[56px]"
              alt="menu"
            />
            <Img
              src="images/img_phsignout.svg"
              className="h-[32px] mb-[18px] mt-[180px] w-[32px]"
              alt="phsignout"
            />
          </div>
          <div className="flex md:flex-1 flex-col gap-[42px] items-center justify-start md:mt-[0] mt-[32px] md:w-[100%] w-[90%]">
            <header className="flex items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[14px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                  wrapClassName="bg-bluegray_957 flex md:w-[100%] pl-[24px] pr-[35px] py-[18px] rounded-[28px] shadow-bs99 sm:px-[20px] sm:w-[100%] w-[40%]"
                  name="form"
                  placeholder="Search..."
                  prefix={
                    <Img
                      src="images/img_search_white_a700_24x24.svg"
                      className="cursor-pointer mr-[16px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#ffffff"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <Button className="bg-bluegray_957 flex h-[48px] items-center justify-center md:ml-[0] ml-[259px] md:mt-[0] my-[4px] p-[12px] rounded-[50%] shadow-bs100 w-[48px]">
                  <Img
                    src="images/img_notification_white_a700_52x52.svg"
                    className=""
                    alt="notification"
                  />
                </Button>
                <Button className="bg-bluegray_957 flex h-[48px] items-center justify-center md:ml-[0] ml-[24px] md:mt-[0] my-[4px] p-[12px] rounded-[50%] shadow-bs100 w-[48px]">
                  <Img
                    src="images/img_map_white_a700.svg"
                    className="h-[19px]"
                    alt="map"
                  />
                </Button>
                <Line className="bg-bluegray_829 md:h-[1px] h-[50px] md:ml-[0] ml-[42px] md:mt-[0] my-[3px] md:w-[100%] w-[1px]" />
                <ul className="flex md:flex-1 flex-row sm:hidden items-center justify-start md:ml-[0] ml-[42px] md:w-[100%] w-[24%] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[16%]">
                    <div className="bg-gray_446 h-[46px] rounded-[50%] w-[46px]"></div>
                  </li>
                  <li className="mt-[3px] mb-[2px] ml-[12px] sm:w-[100%] sm:my-[10px] w-[47%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start">
                      <a
                        className="cursor-pointer hover:font-medium font-semibold text-[16px] text-left text-white_A700 w-[auto]"
                        href="javascript:"
                      >
                        William Ainsworth
                      </a>
                      <a
                        className="cursor-pointer hover:font-medium font-medium text-[12px] text-gray_311 text-left hover:text-white_A700 w-[auto]"
                        href="javascript:"
                      >
                        william@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="ml-[74px] sm:w-[100%] sm:my-[10px] w-[9%] my-[11px]">
                    <Img
                      src="images/img_arrowdown_gray_336.svg"
                      className="h-[24px]"
                      alt="arrowdown"
                    />
                  </li>
                </ul>
              </div>
            </header>
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[42px] items-center justify-start w-[100%]">
                <Line className="bg-orange_A208 h-[1px] w-[99%]" />
                <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[99%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body30"
                    >
                      Find & Collect Best Items
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_311 text-left w-[auto]"
                      variant="body69"
                    >
                      choose our this best assets now...!
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-center sm:w-[100%] w-[auto]">
                    <div className="bg-orange_A208 flex flex-row gap-[12px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] rounded-[28px] w-[auto]">
                      <div className="bg-white_A700 flex items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_cut_orange_a208.svg"
                          className="h-[18px] w-[auto]"
                          alt="cut"
                        />
                      </div>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        Abstract
                      </Text>
                    </div>
                    <div className="bg-orange_A200_33 flex flex-row gap-[12px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] rounded-[28px] w-[auto]">
                      <div className="bg-white_A700 flex items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_vector_orange_a208.svg"
                          className="h-[18px] w-[19px]"
                          alt="Vector"
                        />
                      </div>
                      <Text
                        className="font-medium text-gray_311 text-left w-[auto]"
                        variant="body78"
                      >
                        Avatar
                      </Text>
                    </div>
                    <div className="bg-orange_A200_33 flex flex-row gap-[12px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] rounded-[28px] w-[auto]">
                      <div className="bg-white_A700 flex items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_calculator_orange_a208.svg"
                          className="h-[16px] w-[auto]"
                          alt="calculator"
                        />
                      </div>
                      <Text
                        className="font-medium text-gray_311 text-left w-[auto]"
                        variant="body78"
                      >
                        Games
                      </Text>
                    </div>
                    <div className="bg-orange_A200_33 flex flex-row gap-[12px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] rounded-[28px] w-[auto]">
                      <div className="bg-white_A700 flex items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_user_orange_a208.svg"
                          className="h-[18px] w-[18px]"
                          alt="user"
                        />
                      </div>
                      <Text
                        className="font-medium text-gray_311 text-left w-[auto]"
                        variant="body78"
                      >
                        Memes
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="gap-[19px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-bluegray_955 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_446 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_favorite_bluegray_955.svg"
                          className=""
                          alt="favorite"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A705 w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-white_A705 text-[32px] font-quicksand">
                              0.57
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              ETH
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center mt-[2px] w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star"
                            />
                            <Text
                              className="font-medium text-gray_311 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-gray_311 text-left w-[auto]"
                            variant="body64"
                          >
                            Red And Blue Collide
                          </Text>
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[264px] not-italic text-gray_311 text-left"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-center text-indigo_A106 w-[268px]">
                          Place A Bid Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_955 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_446 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_favorite_bluegray_955.svg"
                          className=""
                          alt="favorite One"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A705 w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-white_A705 text-[32px] font-quicksand">
                              0.35
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              ETH
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center mt-[2px] w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star One"
                            />
                            <Text
                              className="font-medium text-gray_311 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-gray_311 text-left w-[auto]"
                            variant="body64"
                          >
                            Lovely Pink Smoke
                          </Text>
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[264px] not-italic text-gray_311 text-left"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-center text-indigo_A106 w-[268px]">
                          Place A Bid Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_955 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_446 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-orange_A208 flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_lightbulb_white_a700_40x40.svg"
                          className=""
                          alt="lightbulb"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A705 w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-white_A705 text-[32px] font-quicksand">
                              0.20
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              ETH
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center mt-[2px] w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star Two"
                            />
                            <Text
                              className="font-medium text-gray_311 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-gray_311 text-left w-[auto]"
                            variant="body64"
                          >
                            Violet Star In The Sky
                          </Text>
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[264px] not-italic text-gray_311 text-left"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-center text-indigo_A106 w-[268px]">
                          Place A Bid Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_955 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_446 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_favorite_bluegray_955.svg"
                          className=""
                          alt="favorite Two"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A705 w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-white_A705 text-[32px] font-quicksand">
                              0.73
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              ETH
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center mt-[2px] w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star Three"
                            />
                            <Text
                              className="font-medium text-gray_311 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-gray_311 text-left w-[auto]"
                            variant="body64"
                          >
                            Striking Color Coral
                          </Text>
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[264px] not-italic text-gray_311 text-left"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-center text-indigo_A106 w-[268px]">
                          Place A Bid Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_955 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_446 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-orange_A208 flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_lightbulb_white_a700_40x40.svg"
                          className=""
                          alt="lightbulb One"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A705 w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-white_A705 text-[32px] font-quicksand">
                              0.46
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              ETH
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center mt-[2px] w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star Four"
                            />
                            <Text
                              className="font-medium text-gray_311 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-gray_311 text-left w-[auto]"
                            variant="body64"
                          >
                            Red And Blue Collide
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_311 text-left w-[auto]"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-center text-indigo_A106 w-[268px]">
                          Place A Bid Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_955 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_446 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_favorite_bluegray_955.svg"
                          className=""
                          alt="favorite Three"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A705 w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-white_A705 text-[32px] font-quicksand">
                              0.32
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              ETH
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center mt-[2px] w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star Five"
                            />
                            <Text
                              className="font-medium text-gray_311 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-gray_311 text-left w-[auto]"
                            variant="body64"
                          >
                            Lovely Pink Smoke
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_311 text-left w-[auto]"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-center text-indigo_A106 w-[268px]">
                          Place A Bid Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_955 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_446 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_favorite_bluegray_955.svg"
                          className=""
                          alt="favorite Four"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A705 w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-white_A705 text-[32px] font-quicksand">
                              0.18
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              ETH
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center mt-[2px] w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star Six"
                            />
                            <Text
                              className="font-medium text-gray_311 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-gray_311 text-left w-[auto]"
                            variant="body64"
                          >
                            Violet Star In The Sky
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_311 text-left w-[auto]"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-center text-indigo_A106 w-[268px]">
                          Place A Bid Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_955 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-gray_446 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_favorite_bluegray_955.svg"
                          className=""
                          alt="favorite Five"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A705 w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-white_A705 text-[32px] font-quicksand">
                              0.29
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              ETH
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center mt-[2px] w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star Seven"
                            />
                            <Text
                              className="font-medium text-gray_311 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-gray_311 text-left w-[auto]"
                            variant="body64"
                          >
                            Striking Color Coral
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_311 text-left w-[auto]"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-center text-indigo_A106 w-[268px]">
                          Place A Bid Now
                        </Button>
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

export default FinnauksjonPage;
