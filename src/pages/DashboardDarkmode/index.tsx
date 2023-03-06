import React from "react";

import { Img, Input, Button, Line, Text } from "components";
import { CloseSVG } from "../../assets/images";

const DashboardDarkmodePage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-bluegray_965 flex font-quicksand items-center justify-end mx-[auto] sm:pr-[20px] pr-[32px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[32px] items-start justify-between max-w-[1408px] mx-[auto] md:px-[20px] w-[100%]">
          <Img
            src="images/img_sidebar_bluegray_966.svg"
            className="h-[1024px] w-[auto]"
            alt="Sidebar"
          />
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-[0] mt-[32px] md:w-[100%] w-[auto]">
            <header className="flex items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-bluegray_229 text-bluegray_229 text-left w-[100%]"
                  wrapClassName="bg-gray_989 flex md:w-[100%] pl-[24px] pr-[35px] py-[18px] rounded-[28px] sm:px-[20px] sm:w-[100%] w-[40%]"
                  name="form"
                  placeholder="Search..."
                  prefix={
                    <Img
                      src="images/img_search_bluegray_230.svg"
                      className="cursor-pointer mr-[16px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#aeb4c0"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <Button className="bg-gray_990 flex h-[48px] items-center justify-center md:ml-[0] ml-[259px] md:mt-[0] my-[4px] p-[12px] rounded-[50%] w-[48px]">
                  <Img
                    src="images/img_notification_bluegray_229.svg"
                    className=""
                    alt="notification"
                  />
                </Button>
                <Button className="bg-gray_990 flex h-[48px] items-center justify-center md:ml-[0] ml-[24px] md:mt-[0] my-[4px] p-[12px] rounded-[50%] w-[48px]">
                  <Img
                    src="images/img_volume_bluegray_229.svg"
                    className="h-[19px]"
                    alt="volume"
                  />
                </Button>
                <Line className="bg-bluegray_530 md:h-[1px] h-[50px] md:ml-[0] ml-[42px] md:mt-[0] my-[3px] md:w-[100%] w-[1px]" />
                <ul className="flex md:flex-1 flex-row sm:hidden items-center justify-start md:ml-[0] ml-[42px] md:w-[100%] w-[24%] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[16%]">
                    <div className="bg-bluegray_342 h-[46px] rounded-[50%] w-[46px]"></div>
                  </li>
                  <li className="mt-[3px] mb-[2px] ml-[12px] sm:w-[100%] sm:my-[10px] w-[47%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start">
                      <a
                        className="cursor-pointer hover:font-medium font-semibold text-[16px] text-bluegray_63 text-left w-[auto]"
                        href="javascript:"
                      >
                        William Ainsworth
                      </a>
                      <a
                        className="cursor-pointer hover:font-medium font-medium text-[12px] text-bluegray_231 hover:text-bluegray_63 text-left w-[auto]"
                        href="javascript:"
                      >
                        william@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="ml-[74px] sm:w-[100%] sm:my-[10px] w-[9%] my-[11px]">
                    <Img
                      src="images/img_arrowdown_bluegray_531.svg"
                      className="h-[24px]"
                      alt="arrowdown"
                    />
                  </li>
                </ul>
              </div>
            </header>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[42px] w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[42px] items-start justify-start md:w-[100%] w-[49%]">
                <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                  <Text
                    className="font-bold text-bluegray_63 text-left w-[auto]"
                    variant="body30"
                  >
                    Good Morning, William!
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_63 text-left w-[auto]"
                    variant="body69"
                  >
                    Where do you want to live now? choose our this best room
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-center md:w-[100%] w-[auto]">
                  <div className="bg-bluegray_529 flex flex-row gap-[12px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] rounded-[28px] w-[auto]">
                    <div className="bg-white_A700 flex items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_reply_bluegray_756.svg"
                        className="h-[20px] w-[auto]"
                        alt="reply"
                      />
                    </div>
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Popular
                    </Text>
                  </div>
                  <div className="bg-blue_A200_28 flex flex-row gap-[12px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] rounded-[28px] w-[auto]">
                    <div className="bg-white_A700 flex items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_computer_bluegray_756.svg"
                        className="h-[18px] w-[auto]"
                        alt="computer"
                      />
                    </div>
                    <Text
                      className="font-medium text-bluegray_63 text-left w-[auto]"
                      variant="body78"
                    >
                      Apartement
                    </Text>
                  </div>
                  <div className="bg-blue_A200_28 flex flex-row gap-[12px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] rounded-[28px] w-[auto]">
                    <div className="bg-white_A700 flex items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_vector_bluegray_756.svg"
                        className="h-[19px] w-[auto]"
                        alt="Vector"
                      />
                    </div>
                    <Text
                      className="font-medium text-bluegray_63 text-left w-[auto]"
                      variant="body78"
                    >
                      Hotel
                    </Text>
                  </div>
                  <div className="bg-blue_A200_28 flex flex-row gap-[12px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] rounded-[28px] w-[auto]">
                    <div className="bg-white_A700 flex items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_home_bluegray_756.svg"
                        className="h-[18px] w-[auto]"
                        alt="home"
                      />
                    </div>
                    <Text
                      className="font-medium text-bluegray_63 text-left w-[auto]"
                      variant="body78"
                    >
                      Lodging
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-blue_A200_28 flex flex-row gap-[12px] items-center justify-center mb-[10px] md:mt-[0] mt-[113px] pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] rounded-[28px] w-[auto]">
                <div className="bg-white_A700 flex items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                  <Img
                    src="images/img_filter.svg"
                    className="h-[18px] w-[19px]"
                    alt="filter"
                  />
                </div>
                <Text
                  className="font-medium text-bluegray_63 text-left w-[auto]"
                  variant="body78"
                >
                  Filter
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-start mt-[32px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="gap-[18px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-bluegray_966 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_342 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_clock_white_a700_40x40.svg"
                          className=""
                          alt="clock"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-bluegray_63 text-left w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-bluegray_63 text-[32px] font-quicksand">
                              $15
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              /night
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star"
                            />
                            <Text
                              className="font-medium text-bluegray_63 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-start mt-[19px] w-[auto]">
                          <Img
                            src="images/img_location_gray_311.svg"
                            className="h-[24px] w-[24px]"
                            alt="location"
                          />
                          <Text
                            className="font-medium text-gray_311 text-left w-[auto]"
                            variant="body78"
                          >
                            Jakarta, Indonesia
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_63 text-left w-[auto]"
                            variant="body64"
                          >
                            Luxury Room Mid Space
                          </Text>
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[264px] not-italic text-gray_311 text-left"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-blue_A104 text-center w-[268px]">
                          Choose Room
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_966 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_342 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_clock_white_a700_40x40.svg"
                          className=""
                          alt="clock One"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-bluegray_63 text-left w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-bluegray_63 text-[32px] font-quicksand">
                              $12
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              /night
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star One"
                            />
                            <Text
                              className="font-medium text-bluegray_63 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-start mt-[19px] w-[auto]">
                          <Img
                            src="images/img_location_gray_311.svg"
                            className="h-[24px] w-[24px]"
                            alt="location One"
                          />
                          <Text
                            className="font-medium text-gray_311 text-left w-[auto]"
                            variant="body78"
                          >
                            New York, USA
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_63 text-left w-[auto]"
                            variant="body64"
                          >
                            One Single Bed Room
                          </Text>
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[264px] not-italic text-gray_311 text-left"
                            variant="body78"
                          >
                            Rure tempor cupidatat incididunt sint deserunt aute
                            id deserunt nisi....
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-blue_A104 text-center w-[268px]">
                          Choose Room
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_966 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_342 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_lightbulb_white_a700_40x40.svg"
                          className=""
                          alt="lightbulb"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-bluegray_63 text-left w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-bluegray_63 text-[32px] font-quicksand">
                              $10
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              /night
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star Two"
                            />
                            <Text
                              className="font-medium text-bluegray_63 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-start mt-[19px] w-[auto]">
                          <Img
                            src="images/img_location_gray_311.svg"
                            className="h-[24px] w-[24px]"
                            alt="location Two"
                          />
                          <Text
                            className="font-medium text-gray_311 text-left w-[auto]"
                            variant="body78"
                          >
                            Kyoto, Japan
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[19px] w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_63 text-left w-[auto]"
                            variant="body64"
                          >
                            Classical Warm Vibe
                          </Text>
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[264px] not-italic text-gray_311 text-left"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-blue_A104 text-center w-[268px]">
                          Choose Room
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_966 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_342 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_clock_white_a700_40x40.svg"
                          className=""
                          alt="clock Two"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-bluegray_63 text-left w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-bluegray_63 text-[32px] font-quicksand">
                              $13
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              /night
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star Three"
                            />
                            <Text
                              className="font-medium text-bluegray_63 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-start mt-[19px] w-[auto]">
                          <Img
                            src="images/img_location_gray_311.svg"
                            className="h-[24px] w-[24px]"
                            alt="location Three"
                          />
                          <Text
                            className="font-medium text-gray_311 text-left w-[auto]"
                            variant="body78"
                          >
                            Paris, France
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_63 text-left w-[auto]"
                            variant="body64"
                          >
                            Minimalist Modern Style
                          </Text>
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[264px] not-italic text-gray_311 text-left"
                            variant="body78"
                          >
                            Rure tempor cupidatat incididunt sint deserunt aute
                            id deserunt nisi....
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-blue_A104 text-center w-[268px]">
                          Choose Room
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_966 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_342 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_lightbulb_white_a700_40x40.svg"
                          className=""
                          alt="lightbulb One"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-bluegray_63 text-left w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-bluegray_63 text-[32px] font-quicksand">
                              $15
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              /night
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star Four"
                            />
                            <Text
                              className="font-medium text-bluegray_63 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-start mt-[16px] w-[auto]">
                          <Img
                            src="images/img_location_black_902.svg"
                            className="h-[24px] w-[24px]"
                            alt="location Four"
                          />
                          <Text
                            className="font-medium text-bluegray_63 text-left w-[auto]"
                            variant="body78"
                          >
                            Jakarta, Indonesia
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_63 text-left w-[auto]"
                            variant="body64"
                          >
                            User Experience Design
                          </Text>
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[264px] not-italic text-gray_311 text-left"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-blue_A104 text-center w-[268px]">
                          Choose Room
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_966 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_342 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_clock_white_a700_40x40.svg"
                          className=""
                          alt="clock Three"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-bluegray_63 text-left w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-bluegray_63 text-[32px] font-quicksand">
                              $15
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              /night
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star Five"
                            />
                            <Text
                              className="font-medium text-bluegray_63 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-start mt-[16px] w-[auto]">
                          <Img
                            src="images/img_location_black_902.svg"
                            className="h-[24px] w-[24px]"
                            alt="location Five"
                          />
                          <Text
                            className="font-medium text-bluegray_63 text-left w-[auto]"
                            variant="body78"
                          >
                            Jakarta, Indonesia
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_63 text-left w-[auto]"
                            variant="body64"
                          >
                            User Experience Design
                          </Text>
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[264px] not-italic text-gray_311 text-left"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-blue_A104 text-center w-[268px]">
                          Choose Room
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_966 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_342 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_clock_white_a700_40x40.svg"
                          className=""
                          alt="clock Four"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-bluegray_63 text-left w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-bluegray_63 text-[32px] font-quicksand">
                              $15
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              /night
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star Six"
                            />
                            <Text
                              className="font-medium text-bluegray_63 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-start mt-[16px] w-[auto]">
                          <Img
                            src="images/img_location_black_902.svg"
                            className="h-[24px] w-[24px]"
                            alt="location Six"
                          />
                          <Text
                            className="font-medium text-bluegray_63 text-left w-[auto]"
                            variant="body78"
                          >
                            Jakarta, Indonesia
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_63 text-left w-[auto]"
                            variant="body64"
                          >
                            User Experience Design
                          </Text>
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[264px] not-italic text-gray_311 text-left"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-blue_A104 text-center w-[268px]">
                          Choose Room
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_966 flex flex-1 flex-col gap-[16px] items-center justify-center p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_342 flex items-end justify-start p-[16px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_3d flex h-[40px] items-center justify-center mb-[108px] p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_clock_white_a700_40x40.svg"
                          className=""
                          alt="clock Five"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-bluegray_63 text-left w-[auto]"
                            variant="body48"
                          >
                            <span className="md:text-[30px] sm:text-[28px] text-bluegray_63 text-[32px] font-quicksand">
                              $15
                            </span>
                            <span className="text-gray_311 text-[14px] font-quicksand font-normal not-italic">
                              /night
                            </span>
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_star_orange_406.svg"
                              className="h-[24px] w-[24px]"
                              alt="star Seven"
                            />
                            <Text
                              className="font-medium text-bluegray_63 text-left w-[auto]"
                              variant="body69"
                            >
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-start mt-[16px] w-[auto]">
                          <Img
                            src="images/img_location_black_902.svg"
                            className="h-[24px] w-[24px]"
                            alt="location Seven"
                          />
                          <Text
                            className="font-medium text-bluegray_63 text-left w-[auto]"
                            variant="body78"
                          >
                            Jakarta, Indonesia
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_63 text-left w-[auto]"
                            variant="body64"
                          >
                            User Experience Design
                          </Text>
                          <Text
                            className="font-normal leading-[140.00%] md:max-w-[100%] max-w-[264px] not-italic text-gray_311 text-left"
                            variant="body78"
                          >
                            In a laoreet purus. Integer turpis quam, laoreet id
                            orci nec, ultrices...
                          </Text>
                        </div>
                        <Button className="border-[1px] border-blue_A104 border-solid cursor-pointer font-semibold leading-[normal] mt-[24px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] text-[16px] text-blue_A104 text-center w-[268px]">
                          Choose Room
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

export default DashboardDarkmodePage;
