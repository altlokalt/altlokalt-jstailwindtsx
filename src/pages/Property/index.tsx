import React from "react";

import { Img, Line, Input, Text } from "components";

const PropertyPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_125 flex font-cocosharp items-center justify-end mx-[auto] pr-[20px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start max-w-[1420px] mx-[auto] md:px-[20px] w-[100%]">
          <aside className="flex flex-col md:hidden justify-start w-[105px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex items-start justify-start pr-[20px] py-[20px] w-[100%]">
                <div className="flex flex-col justify-start mb-[33px] mt-[17px] w-[100%]">
                  <div className="bg-gray_400 flex items-center justify-start md:ml-[0] ml-[16px] p-[13px] md:w-[100%] w-[82%]">
                    <Img
                      src="images/img_checkmark_bluegray_952.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark"
                    />
                  </div>
                  <div className="flex flex-row gap-[28px] items-center justify-start mt-[59px] md:w-[100%] w-[59%]">
                    <Line className="bg-teal_309 h-[38px] w-[2px]" />
                    <Img
                      src="images/img_grid_teal_309.svg"
                      className="h-[20px] w-[20px]"
                      alt="grid"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[28px] mt-[28px] md:w-[100%] w-[29%]">
                    <Img
                      src="images/img_calendar_bluegray_952.svg"
                      className="h-[20px] w-[20px]"
                      alt="calendar"
                    />
                    <Img
                      src="images/img_bag_bluegray_952.svg"
                      className="h-[20px] mt-[38px] w-[20px]"
                      alt="bag"
                    />
                    <Img
                      src="images/img_arrowdown_bluegray_952.svg"
                      className="h-[20px] mt-[38px] w-[20px]"
                      alt="arrowdown"
                    />
                    <Img
                      src="images/img_user_bluegray_952.svg"
                      className="h-[20px] mt-[38px] w-[20px]"
                      alt="user"
                    />
                    <Img
                      src="images/img_settings_bluegray_952.svg"
                      className="h-[20px] mt-[38px] w-[20px]"
                      alt="settings"
                    />
                    <Img
                      src="images/img_plus_bluegray_952.svg"
                      className="h-[24px] mt-[483px] w-[24px]"
                      alt="plus"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col items-center justify-start md:ml-[0] ml-[39px] md:mt-[0] mt-[17px] w-[100%]">
            <Input
              className="font-normal leading-[normal] not-italic p-[0] text-[18px] placeholder:text-black_900_75 text-black_900_75 text-left w-[100%]"
              wrapClassName="bg-white_A700 flex pl-[26px] pr-[27px] py-[29px] rounded-[16px] sm:px-[20px] w-[100%]"
              name="Group34591"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_refresh_bluegray_952.svg"
                  className="mr-[18px] my-[auto]"
                  alt="refresh"
                />
              }
              suffix={
                <Img
                  src="images/img_setting5.svg"
                  className="ml-[35px] my-[auto]"
                  alt="setting-5"
                />
              }
            ></Input>
            <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[9px] w-[100%]">
              <Text
                className="font-normal mt-[24px] not-italic text-black_900_7e text-left w-[auto]"
                variant="body64"
              >
                248 Result
              </Text>
              <Img
                src="images/img_computer_white_a700_30x77.svg"
                className="h-[30px] mb-[16px] w-[auto]"
                alt="computer"
              />
            </div>
            <div className="gap-[16px] sm:gap-[20px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[56px] w-[100%]">
              <div className="bg-white_A700 flex flex-1 flex-col gap-[29px] items-center justify-start p-[17px] rounded-[16px] w-[100%]">
                <div className="bg-black_900_33 flex items-center justify-start p-[113px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] my-[20px] w-[24px]"
                    alt="checkmark One"
                  />
                </div>
                <div className="flex items-center justify-start mb-[10px] md:w-[100%] w-[94%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_902 text-left w-[auto]"
                      variant="body60"
                    >
                      Parahyangan
                    </Text>
                    <div className="flex flex-row gap-[10px] items-start justify-start mt-[8px] md:w-[100%] w-[73%]">
                      <Img
                        src="images/img_signal_black_902.svg"
                        className="h-[24px] w-[24px]"
                        alt="signal"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-black_900_90 text-left w-[auto]"
                        variant="body78"
                      >
                        Lembang, Indonesia
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[23px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-deep_orange_217 text-left w-[auto]"
                        variant="body60"
                      >
                        $237.00
                      </Text>
                      <div className="flex flex-row gap-[6px] items-center justify-between w-[21%]">
                        <Img
                          src="images/img_star_amber_307.svg"
                          className="h-[20px] w-[20px]"
                          alt="star"
                        />
                        <Text
                          className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                          variant="body69"
                        >
                          4.9
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[29px] items-center justify-start p-[17px] rounded-[16px] w-[100%]">
                <div className="bg-black_900_33 flex items-center justify-start p-[110px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] my-[23px] w-[24px]"
                    alt="checkmark Two"
                  />
                </div>
                <div className="flex items-center justify-start mb-[10px] md:w-[100%] w-[94%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_902 text-left w-[auto]"
                      variant="body60"
                    >
                      Parahyangan
                    </Text>
                    <div className="flex flex-row gap-[10px] items-start justify-start mt-[8px] md:w-[100%] w-[73%]">
                      <Img
                        src="images/img_signal_black_902.svg"
                        className="h-[24px] w-[24px]"
                        alt="signal One"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-black_900_90 text-left w-[auto]"
                        variant="body78"
                      >
                        Lembang, Indonesia
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[23px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-deep_orange_217 text-left w-[auto]"
                        variant="body60"
                      >
                        $237.00
                      </Text>
                      <div className="flex flex-row gap-[6px] items-center justify-between w-[21%]">
                        <Img
                          src="images/img_star_amber_307.svg"
                          className="h-[20px] w-[20px]"
                          alt="star One"
                        />
                        <Text
                          className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                          variant="body69"
                        >
                          4.9
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[28px] items-center justify-start p-[17px] rounded-[16px] w-[100%]">
                <div className="bg-black_900_33 flex items-center justify-start p-[113px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] my-[20px] w-[24px]"
                    alt="checkmark Three"
                  />
                </div>
                <div className="flex items-center justify-start mb-[10px] md:w-[100%] w-[94%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_902 text-left w-[auto]"
                      variant="body60"
                    >
                      Parahyangan
                    </Text>
                    <div className="flex flex-row gap-[10px] items-start justify-start mt-[10px] md:w-[100%] w-[73%]">
                      <Img
                        src="images/img_signal_black_902.svg"
                        className="h-[24px] w-[24px]"
                        alt="signal Two"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-black_900_90 text-left w-[auto]"
                        variant="body78"
                      >
                        Lembang, Indonesia
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-deep_orange_217 text-left w-[auto]"
                        variant="body60"
                      >
                        $237.00
                      </Text>
                      <div className="flex flex-row gap-[6px] items-start justify-between w-[21%]">
                        <Img
                          src="images/img_star_amber_307.svg"
                          className="h-[20px] w-[20px]"
                          alt="star Two"
                        />
                        <Text
                          className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                          variant="body69"
                        >
                          4.9
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[28px] items-center justify-start p-[17px] rounded-[16px] w-[100%]">
                <div className="bg-black_900_33 flex items-center justify-start p-[110px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                  <Img
                    src="images/img_checkmark_bluegray_952.svg"
                    className="h-[24px] my-[23px] w-[24px]"
                    alt="checkmark Four"
                  />
                </div>
                <div className="flex items-center justify-start mb-[10px] md:w-[100%] w-[94%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_902 text-left w-[auto]"
                      variant="body60"
                    >
                      Parahyangan
                    </Text>
                    <div className="flex flex-row gap-[10px] items-start justify-start mt-[10px] md:w-[100%] w-[73%]">
                      <Img
                        src="images/img_signal_black_902.svg"
                        className="h-[24px] w-[24px]"
                        alt="signal Three"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-black_900_90 text-left w-[auto]"
                        variant="body78"
                      >
                        Lembang, Indonesia
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-deep_orange_217 text-left w-[auto]"
                        variant="body60"
                      >
                        $237.00
                      </Text>
                      <div className="flex flex-row gap-[6px] items-start justify-between w-[21%]">
                        <Img
                          src="images/img_star_amber_307.svg"
                          className="h-[20px] w-[20px]"
                          alt="star Three"
                        />
                        <Text
                          className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                          variant="body69"
                        >
                          4.9
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black_900_33 flex flex-1 flex-col gap-[35px] items-center justify-center mb-[161px] md:ml-[0] ml-[16px] md:mt-[0] mt-[17px] p-[194px] sm:px-[20px] md:px-[40px] rounded-[20px] w-[100%]">
            <Img
              src="images/img_checkmark_bluegray_952.svg"
              className="h-[24px] mt-[173px] w-[24px]"
              alt="checkmark Five"
            />
            <div className="bg-teal_300_63 flex h-[278px] items-center justify-start mb-[90px] p-[107px] sm:px-[20px] md:px-[40px] rounded-[50%] w-[278px]">
              <Img
                src="images/img_location_teal_310.svg"
                className="h-[64px] w-[64px]"
                alt="location"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyPage;
