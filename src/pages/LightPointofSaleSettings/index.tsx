import React from "react";

import { Text, Button, Input, SelectBox, Img, Line } from "components";

const LightPointofSaleSettingsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_72 flex font-mulish h-[881px] justify-end mx-[auto] pr-[181px] sm:pr-[20px] md:pr-[40px] relative w-[100%]">
        <div className="flex flex-col gap-[30px] h-[100%] items-start justify-end ml-[auto] mr-[32px] mt-[auto] w-[63%]">
          <Text
            className="font-bold text-gray_981 text-left tracking-[0.12px] w-[auto]"
            variant="body48"
          >
            Bussiness Information
          </Text>
          <div className="bg-white_A700 flex items-start justify-start p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
            <div className="flex flex-col items-start justify-start mb-[8px] md:w-[100%] w-[95%]">
              <div className="flex items-center justify-start md:w-[100%] w-[35%]">
                <div className="flex flex-row gap-[16px] items-end justify-between w-[100%]">
                  <div className="bg-gray_335 h-[104px] rounded-[8px] w-[104px]"></div>
                  <div className="flex flex-col gap-[20px] items-start justify-start mt-[22px] w-[auto]">
                    <Text
                      className="font-bold text-black_902 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Select your company logo
                    </Text>
                    <Button className="bg-deep_purple_503 cursor-pointer font-bold sm:px-[20px] px-[24px] py-[11px] rounded-[8px] text-[16px] text-center text-white_A700 tracking-[0.08px] w-[104px]">
                      Browse
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-center max-w-[916px] mt-[31px] w-[100%]">
                <div className="flex items-start justify-start px-[16px] w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Busines Name
                  </Text>
                </div>
                <Input
                  className="font-normal not-italic sm:px-[20px] px-[24px] py-[18px] text-[16px] placeholder:text-gray_981 text-gray_981 text-left tracking-[0.08px] w-[100%]"
                  wrapClassName="bg-white_A700 outline outline-[1px] outline-deep_purple_105 rounded-[8px] w-[100%]"
                  name="Frame590"
                  placeholder="Cappucincai cyin"
                ></Input>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-center max-w-[916px] mt-[23px] w-[100%]">
                <div className="flex items-start justify-start px-[16px] w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Phone Number
                  </Text>
                </div>
                <Input
                  className="font-normal not-italic sm:px-[20px] px-[24px] py-[18px] text-[16px] placeholder:text-gray_981 text-gray_981 text-left tracking-[0.08px] w-[100%]"
                  wrapClassName="bg-white_A700 outline outline-[1px] outline-deep_purple_105 rounded-[8px] w-[100%]"
                  name="Frame590 One"
                  placeholder="(208) 555-0112"
                ></Input>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-center max-w-[916px] mt-[23px] w-[100%]">
                <div className="flex items-start justify-start px-[16px] w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Email
                  </Text>
                </div>
                <Input
                  className="font-normal not-italic sm:px-[20px] px-[24px] py-[18px] text-[16px] placeholder:text-gray_981 text-gray_981 text-left tracking-[0.08px] w-[100%]"
                  wrapClassName="bg-white_A700 outline outline-[1px] outline-deep_purple_105 rounded-[8px] w-[100%]"
                  type="email"
                  name="email"
                  placeholder="capcyin@hello.com"
                ></Input>
              </div>
              <div className="flex flex-col gap-[23px] items-center justify-start mt-[24px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start max-w-[916px] w-[100%]">
                  <div className="flex items-start justify-start px-[16px] w-[100%]">
                    <Text
                      className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Country
                    </Text>
                  </div>
                  <SelectBox
                    className="bg-white_A700 font-normal h-[56px] not-italic outline outline-[1px] outline-deep_purple_105 p-[16px] rounded-[8px] text-[16px] text-gray_981 text-left tracking-[0.08px] w-[100%]"
                    placeholderClassName="text-gray_981"
                    name="country"
                    placeholder="Indonesia"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_bluegray_340.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
                <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-center w-[287px]">
                    <div className="flex items-start justify-start px-[16px] w-[100%]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Province
                      </Text>
                    </div>
                    <Input
                      className="font-normal not-italic sm:px-[20px] px-[24px] py-[18px] text-[16px] placeholder:text-gray_981 text-gray_981 text-left tracking-[0.08px] w-[100%]"
                      wrapClassName="bg-white_A700 outline outline-[1px] outline-deep_purple_105 rounded-[8px] w-[100%]"
                      name="Frame590 Two"
                      placeholder="Liyue"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-center w-[287px]">
                    <div className="flex items-start justify-start px-[16px] w-[100%]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        City
                      </Text>
                    </div>
                    <Input
                      className="font-normal not-italic sm:px-[20px] px-[24px] py-[18px] text-[16px] placeholder:text-gray_981 text-gray_981 text-left tracking-[0.08px] w-[100%]"
                      wrapClassName="bg-white_A700 outline outline-[1px] outline-deep_purple_105 rounded-[8px] w-[100%]"
                      name="Frame590 Three"
                      placeholder="Wangsu In"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-center w-[294px]">
                    <div className="flex items-start justify-start px-[16px] w-[100%]">
                      <Text
                        className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Postal Code
                      </Text>
                    </div>
                    <Input
                      className="font-normal not-italic sm:px-[20px] px-[24px] py-[18px] text-[16px] placeholder:text-gray_981 text-gray_981 text-left tracking-[0.08px] w-[100%]"
                      wrapClassName="bg-white_A700 outline outline-[1px] outline-deep_purple_105 rounded-[8px] w-[100%]"
                      name="zipcode"
                      placeholder="612211"
                    ></Input>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-center max-w-[916px] mt-[18px] w-[100%]">
                <div className="flex items-start justify-start px-[16px] w-[100%]">
                  <Text
                    className="font-bold text-gray_981 text-left tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Address
                  </Text>
                </div>
                <Button className="bg-white_A700 cursor-pointer font-normal not-italic outline outline-[1px] outline-deep_purple_105 sm:px-[20px] px-[24px] py-[18px] rounded-[8px] text-[16px] text-center text-gray_981 tracking-[0.08px] w-[100%]">
                  {" "}
                  Wangsu In Vilage No. 221
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex left-[0] md:w-[100%] w-[89%]">
          <div className="h-[1031px] my-[auto] w-[26%]">
            <div className="absolute flex flex-row h-[100%] inset-y-[0] items-end justify-evenly my-[auto] right-[0] w-[69%]">
              <div className="bg-white_A700 flex flex-col items-start justify-center p-[31px] sm:px-[20px] w-[100%]">
                <Text
                  className="font-bold mt-[90px] text-gray_981 text-left tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  Settings
                </Text>
                <Text
                  className="font-bold mt-[35px] text-bluegray_340 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Account
                </Text>
                <Text
                  className="font-bold mt-[29px] text-gray_981 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Bussiness Information
                </Text>
                <Text
                  className="font-bold mt-[30px] text-bluegray_340 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Preferences
                </Text>
                <Text
                  className="font-bold mt-[30px] text-bluegray_340 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Version
                </Text>
                <Text
                  className="font-bold mt-[31px] text-bluegray_340 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Integration
                </Text>
                <Text
                  className="font-bold mt-[28px] text-bluegray_340 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Database
                </Text>
                <Text
                  className="font-bold mb-[481px] mt-[31px] text-bluegray_340 text-left tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  Privacy
                </Text>
              </div>
              <Line className="bg-gray_332 h-[951px] mt-[80px] w-[1px]" />
            </div>
            <aside className="absolute flex flex-col md:hidden inset-y-[0] justify-start left-[0] my-[auto] w-[32%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-row items-end justify-evenly w-[100%]">
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[323px] md:gap-[40px] items-center justify-end p-[28px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[56px] items-center justify-start mt-[108px] md:w-[100%] w-[43%]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <div className="flex h-[24px] items-center justify-start w-[24px]">
                          <Img
                            src="images/img_grid_bluegray_340.svg"
                            className="h-[24px] w-[24px]"
                            alt="grid"
                          />
                        </div>
                      </div>
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
                        className="h-[24px] w-[24px]"
                        alt="music"
                      />
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <div className="flex h-[24px] items-center justify-start w-[24px]">
                          <Img
                            src="images/img_file_bluegray_340.svg"
                            className="h-[24px] w-[24px]"
                            alt="file"
                          />
                        </div>
                      </div>
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <div className="flex h-[24px] items-center justify-start w-[24px]">
                          <Img
                            src="images/img_computer_bluegray_340.svg"
                            className="h-[24px] w-[24px]"
                            alt="computer"
                          />
                        </div>
                      </div>
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <div className="flex h-[24px] items-center justify-start w-[24px]">
                          <Img
                            src="images/img_user_bluegray_340.svg"
                            className="h-[24px] w-[24px]"
                            alt="user"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_settings_deep_purple_503_56x56.svg"
                      className="h-[56px] mb-[64px] w-[56px]"
                      alt="settings One"
                    />
                  </div>
                  <Line className="bg-gray_332 h-[967px] mt-[64px] w-[1px]" />
                </div>
              </div>
            </aside>
          </div>
          <div className="flex flex-col items-center justify-start ml-[-361px] mr-[auto] w-[100%] z-[1]">
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

export default LightPointofSaleSettingsPage;
