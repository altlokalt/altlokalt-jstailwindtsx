import React from "react";

import { Img, Text, Button, Input, List, Line } from "components";
import { CloseSVG } from "../../assets/images";

const JobFinderPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_105 flex font-dmsans items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[284px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-gray_929 flex flex-col justify-start p-[19px] w-[100%]">
                <div className="bg-bluegray_101 flex items-center justify-end md:ml-[0] ml-[13px] mr-[30px] p-[27px] sm:px-[20px] md:w-[100%] w-[83%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] mt-[5px] w-[24px]"
                    alt="checkmark"
                  />
                </div>
                <div className="flex flex-col gap-[11px] items-center justify-start md:ml-[0] ml-[73px] mt-[18px] md:w-[100%] w-[41%]">
                  <div className="bg-bluegray_101 flex flex-col gap-[18px] h-[96px] items-center justify-end rounded-[50%] w-[96px]">
                    <Img
                      src="images/img_checkmark_bluegray_952.svg"
                      className="h-[24px] mt-[35px] w-[24px]"
                      alt="checkmark One"
                    />
                    <div className="bg-gray_448 flex items-start justify-start px-[6px] py-[4px] rounded-[4px] w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_929 tracking-[0.60px] w-[auto]"
                        variant="body98"
                      >
                        OPEN TO WORK
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium text-center text-white_A700 w-[auto]"
                    variant="body78"
                  >
                    Zanadin Dinata
                  </Text>
                </div>
                <Text
                  className="font-normal md:ml-[0] ml-[62px] mt-[4px] not-italic text-center text-white_A700_90 w-[auto]"
                  variant="body78"
                >
                  zanadin@mail.com
                </Text>
                <div className="flex flex-col md:gap-[40px] gap-[63px] items-center justify-start mb-[13px] mt-[38px] mx-[auto] md:w-[100%] w-[96%]">
                  <div className="flex flex-col gap-[12px] items-start justify-start w-[236px]">
                    <div className="bg-white_A700_33 flex flex-row gap-[12px] items-center justify-start p-[12px] rounded-[8px] w-[100%]">
                      <Img
                        src="images/img_trash_white_a700_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash"
                      />
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        Job List
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-start p-[12px] w-[100%]">
                      <Img
                        src="images/img_menu_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="menu"
                      />
                      <Text
                        className="font-medium text-left text-white_A700_7e w-[auto]"
                        variant="body69"
                      >
                        Application
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-start p-[12px] w-[100%]">
                      <Img
                        src="images/img_file_white_a700_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="file"
                      />
                      <Text
                        className="font-medium text-left text-white_A700_7e w-[auto]"
                        variant="body69"
                      >
                        Message
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-start p-[12px] w-[100%]">
                      <Img
                        src="images/img_user_white_a700_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="font-medium text-left text-white_A700_7e w-[auto]"
                        variant="body69"
                      >
                        My Profile
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-start p-[12px] w-[100%]">
                      <Img
                        src="images/img_settings_white_a700_29x29.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings"
                      />
                      <Text
                        className="font-medium text-left text-white_A700_7e w-[auto]"
                        variant="body69"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_400_63 flex flex-col items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[69%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                        <Button className="bg-gray_400_6f flex h-[32px] items-center justify-center p-[6px] rounded-[4px] w-[32px]">
                          <Img
                            src="images/img_group1.svg"
                            className="h-[20px]"
                            alt="GroupOne"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-left text-white_A700_7e w-[auto]"
                            variant="body98"
                          >
                            Type of Employment
                          </Text>
                          <Text
                            className="font-medium text-left text-white_A700_a2 w-[auto]"
                            variant="body87"
                          >
                            Full Time Jobs
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start mt-[20px] md:w-[100%] w-[60%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                        <Button className="bg-gray_400_6f flex h-[32px] items-center justify-center p-[6px] rounded-[4px] w-[32px]">
                          <Img
                            src="images/img_volume_gray_448.svg"
                            className="h-[20px]"
                            alt="volume"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-left text-white_A700_7e w-[auto]"
                            variant="body98"
                          >
                            Experience Level
                          </Text>
                          <Text
                            className="font-medium text-left text-white_A700_a2 w-[auto]"
                            variant="body87"
                          >
                            Mid Level
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start mt-[20px] md:w-[100%] w-[63%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                        <Button className="bg-gray_400_6f flex h-[32px] items-center justify-center p-[6px] rounded-[4px] w-[32px]">
                          <Img
                            src="images/img_camera_gray_448.svg"
                            className="h-[20px]"
                            alt="camera"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-left text-white_A700_7e w-[auto]"
                            variant="body98"
                          >
                            Salary Range
                          </Text>
                          <Text
                            className="font-medium text-left text-white_A700_a2 w-[auto]"
                            variant="body87"
                          >
                            $3000-$5000
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start mt-[19px] md:w-[100%] w-[64%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                        <Button className="bg-gray_400_6f flex h-[32px] items-center justify-center p-[6px] rounded-[4px] w-[32px]">
                          <Img
                            src="images/img_location_gray_448.svg"
                            className="h-[20px]"
                            alt="location"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-left text-white_A700_7e w-[auto]"
                            variant="body98"
                          >
                            Location
                          </Text>
                          <Text
                            className="font-medium mt-[2px] text-left text-white_A700_a2 w-[auto]"
                            variant="body87"
                          >
                            South East Asia
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start mt-[20px] md:w-[100%] w-[59%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                        <Button className="bg-gray_400_6f flex h-[32px] items-center justify-center p-[6px] rounded-[4px] w-[32px]">
                          <Img
                            src="images/img_file_gray_448.svg"
                            className="h-[20px]"
                            alt="file One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-left text-white_A700_7e w-[auto]"
                            variant="body98"
                          >
                            Onsite / Remote
                          </Text>
                          <Text
                            className="font-medium mt-[3px] text-left text-white_A700_a2 w-[auto]"
                            variant="body87"
                          >
                            Remote Job
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-white_A700 cursor-pointer font-medium leading-[normal] mt-[24px] px-[16px] py-[8px] rounded-[8px] text-[16px] text-center text-gray_929 w-[204px]">
                      Edit Preferences
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <div className="bg-white_A700 border-b-[1px] border-gray_300 border-solid flex items-center justify-end p-[22px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[2px] md:w-[100%] w-[98%]">
                <div className="flex flex-col gap-[9px] justify-start md:mt-[0] mt-[3px] md:w-[100%] w-[25%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-bold text-gray_929 text-left w-[auto]"
                      variant="body56"
                    >
                      Job List
                    </Text>
                    <Text
                      className="font-bold text-gray_900_6c text-left w-[auto]"
                      variant="body56"
                    >
                      Saved Jobs
                    </Text>
                  </div>
                  <div className="bg-deep_orange_404 h-[8px] md:ml-[0] ml-[38px] mr-[215px] rounded-[50%] w-[8px]"></div>
                </div>
                <Text
                  className="font-bold md:ml-[0] ml-[56px] md:mt-[0] mt-[6px] text-gray_900_6c text-left w-[auto]"
                  variant="body56"
                >
                  Applied Jobs
                </Text>
                <div className="flex flex-row gap-[16px] items-center justify-between mb-[2px] md:ml-[0] ml-[350px] md:w-[100%] w-[26%]">
                  <Img
                    src="images/img_settings_gray_337.svg"
                    className="h-[24px] w-[24px]"
                    alt="settings Two"
                  />
                  <Img
                    src="images/img_notification_gray_337.svg"
                    className="h-[24px] w-[24px]"
                    alt="notification"
                  />
                  <div className="flex flex-row gap-[8px] items-center justify-between p-[8px] w-[197px]">
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <Button className="bg-bluegray_101 flex h-[32px] items-center justify-center p-[4px] rounded-[50%] w-[32px]">
                        <Img
                          src="images/img_checkmark_bluegray_952.svg"
                          className="h-[24px]"
                          alt="checkmark Two"
                        />
                      </Button>
                      <Text
                        className="font-medium text-gray_983 text-left tracking-[0.32px] w-[auto]"
                        variant="body69"
                      >
                        Zanadin Winata
                      </Text>
                    </div>
                    <Img
                      src="images/img_checkmark_bluegray_140.svg"
                      className="h-[16px] w-[16px]"
                      alt="checkmark Three"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly md:w-[100%] w-[98%]">
              <div className="flex flex-col items-start justify-start md:mt-[0] mt-[24px] md:w-[100%] w-[55%]">
                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start md:w-[100%] w-[95%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-normal leading-[normal] not-italic p-[0] text-[16px] placeholder:text-gray_929 text-gray_929 text-left w-[100%]"
                    wrapClassName="bg-white_A700 flex gap-[8px] p-[12px] rounded-[8px] sm:w-[100%] w-[328px]"
                    name="Frame47764"
                    placeholder="Digital Product Designer"
                    prefix={
                      <Img
                        src="images/img_search_gray_449.svg"
                        className="cursor-pointer mr-[8px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#111111"
                          className="cursor-pointer ml-[10px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                  ></Input>
                  <Input
                    className="font-normal leading-[normal] not-italic p-[0] text-[16px] placeholder:text-gray_929 text-gray_929 text-left w-[100%]"
                    wrapClassName="bg-white_A700 flex p-[12px] rounded-[8px] sm:w-[100%] w-[176px]"
                    name="country"
                    placeholder="Indonesia"
                    prefix={
                      <Img
                        src="images/img_location_gray_450.svg"
                        className="mr-[8px] my-[auto]"
                        alt="location"
                      />
                    }
                    suffix={
                      <Img
                        src="images/img_checkmark_bluegray_141.svg"
                        className="ml-[32px] my-[auto]"
                        alt="checkmark"
                      />
                    }
                  ></Input>
                  <Button className="bg-white_A700 flex h-[48px] items-center justify-center p-[12px] rounded-[8px] w-[48px]">
                    <Img
                      src="images/img_camera_gray_451.svg"
                      className="h-[24px]"
                      alt="camera One"
                    />
                  </Button>
                </div>
                <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[23px] md:w-[100%] w-[95%]">
                  <Text
                    className="font-medium text-gray_929 text-left w-[auto]"
                    variant="body69"
                  >
                    Showing 56 Jobs
                  </Text>
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      variant="body69"
                    >
                      Sort by:
                    </Text>
                    <Text
                      className="font-medium text-gray_929 text-left w-[auto]"
                      variant="body69"
                    >
                      Newest Jobs
                    </Text>
                    <Img
                      src="images/img_arrowdown_gray_929.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="h-[210px] md:h-[224px] sm:h-[307px] mt-[14px] relative sm:w-[100%] w-[95%]">
                  <div className="flex flex-col gap-[20px] h-[100%] justify-start m-[auto] w-[95%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[72px] md:w-[100%] w-[30%]">
                      <Text
                        className="font-bold text-gray_929 text-left w-[auto]"
                        variant="body64"
                      >
                        UI/UX Designer
                      </Text>
                      <div className="flex flex-row gap-[8px] items-center justify-start mt-[3px] w-[auto]">
                        <Text
                          className="font-medium text-deep_orange_404 text-left w-[auto]"
                          variant="body87"
                        >
                          Shopee
                        </Text>
                        <div className="bg-gray_452 h-[4px] rounded-[50%] w-[4px]"></div>
                        <Text
                          className="font-normal not-italic text-gray_415 text-left w-[auto]"
                          variant="body87"
                        >
                          Jakarta, Indonesia
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal leading-[22.00px] not-italic text-gray_659 text-left w-[100%]"
                        variant="body78"
                      >
                        Fusce magna quam, commodo mattis accumsan eu, varius id
                        massa. Suspendisse pulvinar, metus ut luctus consequat,
                        nisl felis euismod tortor, a consequat odio nunc sit
                        amet justo.
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[73px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Full Time
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[76px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Mid Level
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[109px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          $3000-$5000
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[78px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Indonesia
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[61px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Onsite
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[1px] border-gray_338 border-solid flex flex-row sm:gap-[40px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[12px] rounded-[12px] w-[100%]">
                    <Button className="bg-bluegray_101 flex h-[56px] items-center justify-center mb-[126px] ml-[4px] mt-[4px] p-[16px] rounded-[8px] w-[56px]">
                      <Img
                        src="images/img_checkmark_bluegray_952.svg"
                        className="h-[24px]"
                        alt="checkmark Four"
                      />
                    </Button>
                    <Button className="bg-white_A700 flex h-[32px] items-center justify-center mb-[154px] p-[6px] rounded-[4px] w-[32px]">
                      <Img
                        src="images/img_computer_gray_453.svg"
                        className="h-[20px]"
                        alt="computer"
                      />
                    </Button>
                  </div>
                </div>
                <div className="h-[219px] md:h-[226px] mt-[16px] relative w-[100%]">
                  <div className="absolute backdrop-opacity-[0.5] bg-gray_600_6c blur-[100.00px] bottom-[0] h-[203px] inset-x-[0] mx-[auto] rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[0] w-[88%]"></div>
                  <div className="absolute bg-white_A700 flex inset-x-[0] items-start justify-start mx-[auto] p-[12px] rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[0] top-[0] w-[100%]">
                    <div className="flex flex-col items-start justify-start mb-[8px] md:ml-[0] ml-[4px] md:w-[100%] w-[94%]">
                      <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-between w-[100%]">
                        <Button className="bg-bluegray_101 flex h-[56px] items-center justify-center sm:mt-[0] mt-[4px] p-[16px] rounded-[8px] w-[56px]">
                          <Img
                            src="images/img_checkmark_bluegray_952.svg"
                            className="h-[24px]"
                            alt="checkmark Five"
                          />
                        </Button>
                        <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[auto]">
                          <div className="flex flex-row items-end justify-between w-[100%]">
                            <Text
                              className="font-bold mt-[11px] text-gray_929 text-left w-[auto]"
                              variant="body64"
                            >
                              Product Designer
                            </Text>
                            <Button className="bg-white_A700 flex h-[32px] items-center justify-center mb-[3px] p-[6px] rounded-[4px] w-[32px]">
                              <Img
                                src="images/img_bookmark_deep_orange_404.svg"
                                className="h-[20px]"
                                alt="bookmark"
                              />
                            </Button>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-start mt-[3px] w-[auto]">
                            <Text
                              className="font-medium text-deep_orange_404 text-left w-[auto]"
                              variant="body87"
                            >
                              Gojek
                            </Text>
                            <div className="bg-gray_452 h-[4px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal not-italic text-gray_415 text-left w-[auto]"
                              variant="body87"
                            >
                              Jakarta, Indonesia
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[22.00px] mt-[16px] not-italic text-gray_659 text-left w-[100%]"
                        variant="body78"
                      >
                        Fusce magna quam, commodo mattis accumsan eu, varius id
                        massa. Suspendisse pulvinar, metus ut luctus consequat,
                        nisl felis euismod tortor, a consequat odio nunc sit
                        amet justo.
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start mt-[12px] sm:w-[100%] w-[auto]">
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[73px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Full Time
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[76px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Mid Level
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[109px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          $3000-$5000
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[78px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Indonesia
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[61px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Onsite
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[210px] md:h-[217px] sm:h-[301px] mt-[7px] relative sm:w-[100%] w-[95%]">
                  <div className="flex flex-col gap-[21px] h-[100%] justify-start m-[auto] w-[95%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[72px] md:w-[100%] w-[29%]">
                      <Text
                        className="font-bold text-gray_929 text-left w-[auto]"
                        variant="body64"
                      >
                        UI Designer
                      </Text>
                      <div className="flex flex-row gap-[8px] items-center justify-start mt-[3px] w-[auto]">
                        <Text
                          className="font-medium text-deep_orange_404 text-left w-[auto]"
                          variant="body87"
                        >
                          Lazada
                        </Text>
                        <div className="bg-gray_452 h-[4px] rounded-[50%] w-[4px]"></div>
                        <Text
                          className="font-normal not-italic text-gray_415 text-left w-[auto]"
                          variant="body87"
                        >
                          Jakarta, Indonesia
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal leading-[22.00px] not-italic text-gray_659 text-left w-[100%]"
                        variant="body78"
                      >
                        Fusce magna quam, commodo mattis accumsan eu, varius id
                        massa. Suspendisse pulvinar, metus ut luctus consequat,
                        nisl felis euismod tortor, a consequat odio nunc sit
                        amet justo.
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[73px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Full Time
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[76px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Mid Level
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[109px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          $3000-$5000
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[78px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Indonesia
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[61px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Onsite
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[1px] border-gray_338 border-solid flex flex-row sm:gap-[40px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[12px] rounded-[12px] w-[100%]">
                    <Button className="bg-bluegray_101 flex h-[56px] items-center justify-center mb-[126px] ml-[4px] mt-[4px] p-[16px] rounded-[8px] w-[56px]">
                      <Img
                        src="images/img_checkmark_bluegray_952.svg"
                        className="h-[24px]"
                        alt="checkmark Six"
                      />
                    </Button>
                    <Button className="bg-white_A700 flex h-[32px] items-center justify-center mb-[154px] p-[6px] rounded-[4px] w-[32px]">
                      <Img
                        src="images/img_computer_gray_453.svg"
                        className="h-[20px]"
                        alt="computer One"
                      />
                    </Button>
                  </div>
                </div>
                <div className="h-[210px] md:h-[226px] sm:h-[312px] mt-[16px] relative sm:w-[100%] w-[95%]">
                  <div className="flex flex-col gap-[21px] h-[100%] justify-start m-[auto] w-[95%]">
                    <div className="flex flex-col gap-[6px] items-start justify-start md:ml-[0] ml-[72px] md:w-[100%] w-[27%]">
                      <Text
                        className="font-bold text-gray_929 text-left w-[auto]"
                        variant="body64"
                      >
                        UX Designer
                      </Text>
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <Text
                          className="font-medium text-deep_orange_404 text-left w-[auto]"
                          variant="body87"
                        >
                          Ebay
                        </Text>
                        <div className="bg-gray_452 h-[4px] rounded-[50%] w-[4px]"></div>
                        <Text
                          className="font-normal not-italic text-gray_415 text-left w-[auto]"
                          variant="body87"
                        >
                          Jakarta, Indonesia
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal leading-[22.00px] not-italic text-gray_659 text-left w-[100%]"
                        variant="body78"
                      >
                        Fusce magna quam, commodo mattis accumsan eu, varius id
                        massa. Suspendisse pulvinar, metus ut luctus consequat,
                        nisl felis euismod tortor, a consequat odio nunc sit
                        amet justo.
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[73px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Full Time
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[76px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Mid Level
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[109px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          $3000-$5000
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[78px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Indonesia
                        </Button>
                        <Button className="bg-gray_448 cursor-pointer font-normal leading-[normal] min-w-[61px] not-italic px-[12px] py-[4px] rounded-[12px] text-[12px] text-center text-white_A700 w-[auto]">
                          Onsite
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[1px] border-gray_338 border-solid flex flex-row sm:gap-[40px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[12px] rounded-[12px] w-[100%]">
                    <Button className="bg-bluegray_101 flex h-[56px] items-center justify-center mb-[126px] ml-[4px] mt-[4px] p-[16px] rounded-[8px] w-[56px]">
                      <Img
                        src="images/img_checkmark_bluegray_952.svg"
                        className="h-[24px]"
                        alt="checkmark Seven"
                      />
                    </Button>
                    <Button className="bg-white_A700 flex h-[32px] items-center justify-center mb-[154px] p-[6px] rounded-[4px] w-[32px]">
                      <Img
                        src="images/img_bookmark_deep_orange_404.svg"
                        className="h-[20px]"
                        alt="bookmark One"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex items-center justify-start mb-[93px] md:w-[100%] w-[46%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="md:h-[144px] h-[185px] relative w-[100%]">
                    <div className="absolute bg-gray_338 flex inset-x-[0] items-center justify-start mx-[auto] p-[28px] sm:px-[20px] top-[0] w-[100%]">
                      <Img
                        src="images/img_checkmark_bluegray_952.svg"
                        className="h-[24px] mb-[64px] w-[24px]"
                        alt="checkmark Eight"
                      />
                    </div>
                    <Text
                      className="absolute bottom-[4%] font-medium left-[6%] text-gray_929 text-left w-[auto]"
                      variant="body87"
                    >
                      12 Applicants
                    </Text>
                    <Text
                      className="absolute bottom-[4%] font-normal not-italic right-[6%] text-gray_415 text-right w-[auto]"
                      variant="body87"
                    >
                      Posted 6 days ago
                    </Text>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[112px] inset-x-[0] items-center justify-start mx-[auto] p-[44px] sm:px-[20px] md:px-[40px] w-[112px]"
                      style={{
                        backgroundImage: "url('images/img_group498.svg')",
                      }}
                    >
                      <Img
                        src="images/img_checkmark_bluegray_952.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark Nine"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[24px] md:w-[100%] w-[88%]">
                    <Text
                      className="font-bold mt-[2px] text-gray_929 text-left w-[auto]"
                      variant="body48"
                    >
                      Product Designer
                    </Text>
                    <Button className="bg-gray_105 flex h-[40px] items-center justify-center p-[8px] rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_bookmark_deep_orange_404.svg"
                        className="h-[24px]"
                        alt="bookmark Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-start mt-[7px] w-[auto]">
                    <Text
                      className="font-medium text-deep_orange_404 text-left w-[auto]"
                      variant="body69"
                    >
                      Gojek
                    </Text>
                    <div className="bg-gray_452 h-[4px] rounded-[50%] w-[4px]"></div>
                    <Text
                      className="font-normal not-italic text-gray_415 text-left w-[auto]"
                      variant="body69"
                    >
                      Jakarta, Indonesia
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-start mt-[7px] w-[auto]">
                    <Img
                      src="images/img_signal_gray_929.svg"
                      className="h-[16px] w-[16px]"
                      alt="signal"
                    />
                    <Text
                      className="font-normal not-italic text-gray_929 text-left w-[auto]"
                      variant="body78"
                    >
                      Tangerang Selatan, Banten, Indonesia
                    </Text>
                  </div>
                  <List
                    className="flex-col gap-[10px] grid mt-[46px] w-[71%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[66px] items-center justify-start md:w-[100%] w-[94%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                        <Button className="bg-gray_400_6f flex h-[48px] items-center justify-center p-[9px] rounded-[4px] w-[48px]">
                          <Img
                            src="images/img_group1.svg"
                            className="h-[30px]"
                            alt="GroupOne One"
                          />
                        </Button>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_900_7e text-left w-[auto]"
                            variant="body98"
                          >
                            Type of Employment
                          </Text>
                          <Text
                            className="font-medium text-gray_900_a3 text-left w-[auto]"
                            variant="body87"
                          >
                            Full Time Job
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                        <Button className="bg-gray_400_6f flex h-[48px] items-center justify-center p-[9px] rounded-[4px] w-[48px]">
                          <Img
                            src="images/img_location_gray_448.svg"
                            className="h-[30px]"
                            alt="location Two"
                          />
                        </Button>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_900_7e text-left w-[auto]"
                            variant="body98"
                          >
                            Location
                          </Text>
                          <Text
                            className="font-medium text-gray_900_a3 text-left w-[auto]"
                            variant="body87"
                          >
                            Indonesia
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-gray_200 rotate-[-180deg] w-[100%]" />
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                        <Button className="bg-gray_400_6f flex h-[48px] items-center justify-center p-[9px] rounded-[4px] w-[48px]">
                          <Img
                            src="images/img_volume_gray_448.svg"
                            className="h-[30px]"
                            alt="volume One"
                          />
                        </Button>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_900_7e text-left w-[auto]"
                            variant="body98"
                          >
                            Experience Level
                          </Text>
                          <Text
                            className="font-medium text-gray_900_a3 text-left w-[auto]"
                            variant="body87"
                          >
                            All Level
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                        <Button className="bg-gray_400_6f flex h-[48px] items-center justify-center p-[9px] rounded-[4px] w-[48px]">
                          <Img
                            src="images/img_file_gray_448.svg"
                            className="h-[30px]"
                            alt="file Two"
                          />
                        </Button>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_900_7e text-left w-[auto]"
                            variant="body98"
                          >
                            Onsite / Remote
                          </Text>
                          <Text
                            className="font-medium text-gray_900_a3 text-left w-[auto]"
                            variant="body87"
                          >
                            Onsite
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-row gap-[10px] items-center justify-start mt-[20px] w-[auto]">
                    <Button className="bg-gray_400_6f flex h-[48px] items-center justify-center p-[9px] rounded-[4px] w-[48px]">
                      <Img
                        src="images/img_camera_gray_448.svg"
                        className="h-[30px]"
                        alt="camera Two"
                      />
                    </Button>
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_900_7e text-left w-[auto]"
                        variant="body98"
                      >
                        Salary Range
                      </Text>
                      <Text
                        className="font-medium text-gray_900_a3 text-left w-[auto]"
                        variant="body87"
                      >
                        $2000-$3000
                      </Text>
                    </div>
                  </div>
                  <div className="border-b-[1px] border-gray_200 border-solid flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[24px] sm:w-[100%] w-[508px]">
                    <Button className="border-b-[2px] border-gray_448 border-solid cursor-pointer font-medium leading-[normal] pb-[12px] pt-[8px] px-[16px] text-[16px] text-center text-gray_448 w-[100%]">
                      Company
                    </Button>
                    <List
                      className="sm:flex-col flex-row gap-[1px] grid grid-cols-2 sm:w-[100%] w-[67%]"
                      orientation="horizontal"
                    >
                      <div className="flex items-center justify-center pb-[12px] pt-[8px] px-[16px] w-[100%]">
                        <Text
                          className="font-medium text-gray_455 text-left w-[auto]"
                          variant="body69"
                        >
                          Job Desc
                        </Text>
                      </div>
                      <div className="flex items-center justify-center pb-[12px] pt-[8px] px-[16px] w-[100%]">
                        <Text
                          className="font-medium text-gray_455 text-left w-[auto]"
                          variant="body69"
                        >
                          Responsibilites
                        </Text>
                      </div>
                    </List>
                  </div>
                  <div className="h-[312px] mt-[16px] relative w-[100%]">
                    <Text
                      className="absolute font-normal inset-x-[0] leading-[24.00px] mx-[auto] not-italic text-gray_659 text-left top-[0]"
                      variant="body78"
                    >
                      In hac habitasse platea dictumst. Aliquam libero risus,
                      eleifend a magna id, porta finibus felis. Suspendisse
                      semper leo non ligula convallis, non aliquam lorem dictum.
                      Vestibulum non diam posuere, sollicitudin elit ultricies,
                      bibendum diam. Aenean in elit urna. Nam consequat nisl in
                      ipsum viverra commodo. Aenean sed nunc in lectus auctor
                      ullamcorper. Nullam aliquet felis quis velit dapibus, eget
                      pellentesque nisl pharetra.
                      <br />
                      Nulla semper sit amet libero ut finibus. Nam accumsan,
                      lorem convallis suscipit blandit, erat dui malesuada
                      purus, nec gravida eros mi et dolor. Ut bibendum auctor
                      arcu, non sollicitudin nisl. Integer placerat, lorem et
                      ornare aliquet, eros diam placerat diam, vel bibendum dui
                      lectus vitae libero.
                    </Text>
                    <div className="absolute bg-gradient67  bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] p-[32px] sm:px-[20px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start mt-[56px] sm:w-[100%] w-[444px]">
                        <Button className="bg-deep_orange_404 cursor-pointer font-medium leading-[normal] sm:px-[20px] px-[24px] py-[12px] rounded-[8px] text-[16px] text-center text-white_A700 w-[100%]">
                          Apply Job
                        </Button>
                        <Button className="bg-gray_209 cursor-pointer font-medium leading-[normal] sm:px-[20px] px-[24px] py-[12px] rounded-[8px] text-[16px] text-center text-gray_929 w-[100%]">
                          Message
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

export default JobFinderPage;
