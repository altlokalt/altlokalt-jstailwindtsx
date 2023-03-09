import React from "react";

import { Img, Text, CheckBox, Input, Button, Line, List } from "components";
import { CloseSVG } from "../../assets/images";

const LiveSaleswhatnotPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray_984 flex font-clashgrotesk items-center justify-end mx-[auto] sm:pr-[20px] pr-[32px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[32px] items-start justify-between max-w-[1408px] mx-[auto] md:px-[20px] w-[100%]">
          <aside className="flex flex-col md:hidden justify-start w-[227px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-bluegray_959 flex flex-col md:gap-[40px] gap-[64px] h-[875px] md:h-[auto] items-start justify-start p-[32px] sm:px-[20px] w-[auto]">
                <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                  <Img
                    src="images/img_edit_white_a700.svg"
                    className="h-[24px] w-[24px]"
                    alt="edit"
                  />
                  <Text
                    className="font-medium text-center text-white_A700 tracking-[-0.96px] w-[auto]"
                    variant="body48"
                  >
                    Sumrain
                  </Text>
                </div>
                <div className="flex flex-col font-satoshi gap-[32px] items-start justify-start w-[auto]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700_99 tracking-[0.60px] w-[auto]"
                      variant="body87"
                    >
                      MENU
                    </Text>
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                      <div className="bg-indigo_A107 flex flex-row gap-[12px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                        <Img
                          src="images/img_car_white_a700_16x16.svg"
                          className="h-[16px] w-[16px]"
                          alt="car"
                        />
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.16px] w-[auto]"
                          variant="body69"
                        >
                          Dashboard
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start p-[16px] w-[100%]">
                        <Img
                          src="images/img_signal_16x16.svg"
                          className="h-[16px] w-[16px]"
                          alt="signal"
                        />
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.14px] w-[auto]"
                          variant="body78"
                        >
                          Stream Manager
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start p-[16px] w-[100%]">
                        <Img
                          src="images/img_chart.svg"
                          className="h-[16px] w-[16px]"
                          alt="chart"
                        />
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.14px] w-[auto]"
                          variant="body78"
                        >
                          Insights
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start p-[16px] w-[100%]">
                        <Img
                          src="images/img_settings_white_a700_16x16.svg"
                          className="h-[16px] w-[16px]"
                          alt="settings"
                        />
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.14px] w-[auto]"
                          variant="body78"
                        >
                          Community
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start p-[16px] w-[100%]">
                        <Img
                          src="images/img_volume_16x16.svg"
                          className="h-[16px] w-[16px]"
                          alt="volume"
                        />
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.14px] w-[auto]"
                          variant="body78"
                        >
                          Content
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start p-[16px] w-[100%]">
                        <Img
                          src="images/img_trash_white_a700_16x16.svg"
                          className="h-[16px] w-[16px]"
                          alt="trash"
                        />
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.14px] w-[auto]"
                          variant="body78"
                        >
                          Rewards
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700_99 tracking-[0.60px] w-[auto]"
                      variant="body87"
                    >
                      SETTINGS\`
                    </Text>
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                      <div className="flex flex-row gap-[12px] items-center justify-start p-[16px] w-[163px]">
                        <Img
                          src="images/img_settings_16x16.svg"
                          className="h-[16px] w-[16px]"
                          alt="settings Two"
                        />
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.14px] w-[auto]"
                          variant="body78"
                        >
                          Settings
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start p-[16px] w-[163px]">
                        <Img
                          src="images/img_settings_1.svg"
                          className="h-[16px] w-[16px]"
                          alt="settings Four"
                        />
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.14px] w-[auto]"
                          variant="body78"
                        >
                          Extenstions
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start p-[16px] w-[163px]">
                        <Img
                          src="images/img_map_white_a700_16x16.svg"
                          className="h-[16px] w-[16px]"
                          alt="map"
                        />
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.14px] w-[auto]"
                          variant="body78"
                        >
                          Creator Camp
                        </Text>
                      </div>
                      <CheckBox
                        className="font-medium text-[14px] text-left text-white_A700 tracking-[-0.14px]"
                        inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                        label="Safety Center"
                        name="SafetyCenter"
                      ></CheckBox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col font-satoshi gap-[16px] items-center justify-start md:mt-[0] mt-[32px] w-[100%]">
            <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[80%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-normal not-italic p-[0] text-[16px] text-left placeholder:text-white_A700_99 text-white_A700_99 tracking-[-0.16px] w-[100%]"
                    wrapClassName="bg-bluegray_959 flex gap-[12px] md:w-[100%] pl-[16px] pr-[22px] py-[16px] rounded-[12px] sm:pr-[20px] sm:w-[100%] w-[404px]"
                    name="menuitem"
                    placeholder="Search everything"
                    prefix={
                      <Img
                        src="images/img_search_white_a700_16x16.svg"
                        className="cursor-pointer mr-[12px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#99ffffff"
                          className="cursor-pointer ml-[10px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                  ></Input>
                  <Button className="bg-bluegray_959 flex h-[48px] items-center justify-center md:ml-[0] ml-[254px] p-[16px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_notification_white_a700_48x48.svg"
                      className="h-[16px]"
                      alt="notification"
                    />
                  </Button>
                  <Button
                    className="bg-indigo_A107 flex items-center justify-center md:ml-[0] min-w-[143px] ml-[32px] p-[16px] rounded-[12px] sm:ml-[0] text-center w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_video.svg"
                        className="mr-[12px] text-center"
                        alt="video"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[-0.16px]">
                      Start stream
                    </div>
                  </Button>
                  <Line className="bg-white_A700_68 md:h-[1px] h-[48px] md:ml-[0] ml-[32px] md:w-[100%] w-[1px]" />
                </div>
                <div className="flex flex-row gap-[32px] items-center justify-start w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <div className="bg-bluegray_101 h-[48px] rounded-[50%] w-[48px]"></div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.16px] w-[auto]"
                        variant="body69"
                      >
                        Arfi Ganteng
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700_99 tracking-[-0.12px] w-[auto]"
                        variant="body87"
                      >
                        @arfi.ganteng
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_arrowdown_4.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                <div className="bg-bluegray_959 flex flex-1 h-[419px] md:h-[auto] items-start justify-start max-w-[737px] p-[32px] sm:px-[20px] rounded-[16px] w-[100%]">
                  <div className="bg-bluegray_960 flex flex-col gap-[105px] md:gap-[40px] items-center justify-start rounded-[12px] w-[100%]">
                    <div className="bg-gradient68  flex flex-row sm:gap-[40px] items-start justify-between p-[32px] sm:px-[20px] w-[100%]">
                      <div className="bg-bluegray_959 flex flex-row gap-[8px] items-center justify-start mb-[33px] px-[12px] py-[8px] rounded-[14px] w-[auto]">
                        <div className="bg-red_711 h-[8px] rounded-[50%] w-[8px]"></div>
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.12px] w-[auto]"
                          variant="body87"
                        >
                          Live
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[16px] items-center justify-start mb-[18px] w-[auto]">
                        <div className="bg-red_613 h-[32px] rounded-[50%] w-[32px]"></div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <CheckBox
                            className="font-medium text-[16px] text-left text-white_A700 tracking-[-0.16px]"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="dota2"
                            name="dotaTwo"
                          ></CheckBox>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 tracking-[-0.12px] w-[auto]"
                            variant="body87"
                          >
                            @dota2_official
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient68  flex sm:flex-col flex-row gap-[32px] items-end justify-between p-[32px] sm:px-[20px] w-[100%]">
                      <Text
                        className="font-medium leading-[140.00%] sm:mt-[0] mt-[11px] text-left text-white_A700 tracking-[-0.72px] w-[auto]"
                        variant="body64"
                      >
                        SECRET vs TUNDRA - TI11 GRAND FINAL 🏆 - THE
                        INTERNATIONAL 2022 DOTA2
                      </Text>
                      <Button
                        className="bg-bluegray_959 flex items-center justify-center min-w-[126px] mt-[29px] px-[12px] py-[8px] rounded-[16px] sm:mt-[0] text-center w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_eye_white_a700_16x16.svg"
                            className="mr-[8px] text-center"
                            alt="eye"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]">
                          232k watching
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-bluegray_959 flex sm:flex-1 flex-col gap-[24px] items-start justify-start p-[32px] sm:px-[20px] rounded-[16px] sm:w-[100%] w-[auto]">
                  <div className="flex flex-row gap-[24px] items-center justify-between w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 tracking-[-0.18px] w-[auto]"
                      variant="body64"
                    >
                      Following
                    </Text>
                    <Text
                      className="font-medium text-left text-white_A700_99 tracking-[-0.14px] w-[auto]"
                      variant="body78"
                    >
                      See all
                    </Text>
                  </div>
                  <List
                    className="flex-col gap-[16px] grid items-start w-[auto]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row items-center justify-between my-[0] w-[332px]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <div className="bg-amber_A200 h-[48px] rounded-[50%] w-[48px]"></div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <CheckBox
                            className="font-medium text-[16px] text-left text-white_A700 tracking-[-0.16px]"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Shroud"
                            name="Shroud"
                          ></CheckBox>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 tracking-[-0.12px] w-[auto]"
                            variant="body87"
                          >
                            @shroud
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_984 flex flex-row gap-[8px] items-center justify-start px-[12px] py-[8px] rounded-[14px] w-[auto]">
                        <div className="bg-red_711 h-[8px] rounded-[50%] w-[8px]"></div>
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.12px] w-[auto]"
                          variant="body87"
                        >
                          Live
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between my-[0] w-[332px]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <div className="bg-yellow_703 h-[48px] rounded-[50%] w-[48px]"></div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <CheckBox
                            className="font-medium text-[16px] text-left text-white_A700 tracking-[-0.16px]"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Dyrus"
                            name="Dyrus"
                          ></CheckBox>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 tracking-[-0.12px] w-[auto]"
                            variant="body87"
                          >
                            @dyrus_lol
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_984 flex flex-row gap-[8px] items-center justify-start px-[12px] py-[8px] rounded-[14px] w-[auto]">
                        <div className="bg-red_711 h-[8px] rounded-[50%] w-[8px]"></div>
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.12px] w-[auto]"
                          variant="body87"
                        >
                          Live
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between my-[0] w-[332px]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <div className="bg-cyan_A702 h-[48px] rounded-[50%] w-[48px]"></div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <CheckBox
                            className="font-medium text-[16px] text-left text-white_A700 tracking-[-0.16px]"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Mr. Beast"
                            name="MrBeast"
                          ></CheckBox>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 tracking-[-0.12px] w-[auto]"
                            variant="body87"
                          >
                            @mr_beast
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_984 flex flex-row gap-[8px] items-center justify-start px-[12px] py-[8px] rounded-[14px] w-[auto]">
                        <div className="bg-red_711 h-[8px] rounded-[50%] w-[8px]"></div>
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.12px] w-[auto]"
                          variant="body87"
                        >
                          Live
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between my-[0] w-[332px]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <div className="bg-red_348 h-[48px] rounded-[50%] w-[48px]"></div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <CheckBox
                            className="font-medium text-[16px] text-left text-white_A700 tracking-[-0.16px]"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="MILYHYA"
                            name="MILYHYA"
                          ></CheckBox>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 tracking-[-0.12px] w-[auto]"
                            variant="body87"
                          >
                            @milyhya_asli
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_984 flex flex-row gap-[8px] items-center justify-start px-[12px] py-[8px] rounded-[14px] w-[auto]">
                        <div className="bg-red_711 h-[8px] rounded-[50%] w-[8px]"></div>
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.12px] w-[auto]"
                          variant="body87"
                        >
                          Live
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between my-[0] w-[332px]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <div className="bg-black_902 h-[48px] rounded-[50%] w-[48px]"></div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <CheckBox
                            className="font-medium text-[16px] text-left text-white_A700 tracking-[-0.16px]"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="ONE OK ROCK"
                            name="ONEOKROCK"
                          ></CheckBox>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 tracking-[-0.12px] w-[auto]"
                            variant="body87"
                          >
                            @oneokrock_official
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_984 flex flex-row gap-[8px] items-center justify-start px-[12px] py-[8px] rounded-[14px] w-[auto]">
                        <div className="bg-red_711 h-[8px] rounded-[50%] w-[8px]"></div>
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.12px] w-[auto]"
                          variant="body87"
                        >
                          Live
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-bluegray_959 flex flex-col gap-[24px] h-[445px] md:h-[auto] items-start justify-start max-w-[1149px] p-[32px] sm:px-[20px] rounded-[16px] w-[100%]">
              <div className="flex flex-row gap-[24px] items-center justify-between w-[100%]">
                <Text
                  className="font-bold text-left text-white_A700 tracking-[-0.18px] w-[auto]"
                  variant="body64"
                >
                  Channel you might like
                </Text>
                <Text
                  className="font-medium text-left text-white_A700_99 tracking-[-0.14px] w-[auto]"
                  variant="body78"
                >
                  Show more
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start overflow-auto md:w-[100%] w-[auto]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                  <div className="bg-teal_907 flex flex-col gap-[122px] md:gap-[40px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                    <div className="bg-gray_984 flex flex-row gap-[8px] items-center justify-start px-[12px] py-[8px] rounded-[14px] w-[auto]">
                      <div className="bg-red_711 h-[8px] rounded-[50%] w-[8px]"></div>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.12px] w-[auto]"
                        variant="body87"
                      >
                        Live
                      </Text>
                    </div>
                    <Button
                      className="bg-gray_984 flex items-center justify-center min-w-[126px] px-[12px] py-[8px] rounded-[16px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_eye_white_a700_16x16.svg"
                          className="mr-[8px] text-center"
                          alt="eye"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]">
                        232k watching
                      </div>
                    </Button>
                  </div>
                  <div className="bg-bluegray_959 flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 tracking-[-0.56px] w-[auto]"
                      variant="body78"
                    >
                      Live now with all of our members singing with you the
                      legendary “Through The Fire and Flames”!!!🔥🔥🔥
                    </Text>
                    <div className="flex flex-row items-center justify-between w-[332px]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <div className="bg-gray_660 h-[42px] rounded-[50%] w-[42px]"></div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <CheckBox
                            className="font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Dragon Force"
                            name="DragonForce"
                          ></CheckBox>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 tracking-[-0.12px] w-[auto]"
                            variant="body87"
                          >
                            @dragonforce_official
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A107 flex items-center justify-center min-w-[81px] px-[12px] py-[8px] rounded-[8px] text-center w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_plus_white_a700_14x14.svg"
                            className="mr-[8px] text-center"
                            alt="plus"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]">
                          Follow
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                  <div className="bg-bluegray_529 flex flex-col gap-[122px] md:gap-[40px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                    <div className="bg-gray_984 flex flex-row gap-[8px] items-center justify-start px-[12px] py-[8px] rounded-[14px] w-[auto]">
                      <div className="bg-red_711 h-[8px] rounded-[50%] w-[8px]"></div>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.12px] w-[auto]"
                        variant="body87"
                      >
                        Live
                      </Text>
                    </div>
                    <Button
                      className="bg-gray_984 flex items-center justify-center min-w-[126px] px-[12px] py-[8px] rounded-[16px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_eye_white_a700_16x16.svg"
                          className="mr-[8px] text-center"
                          alt="eye"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]">
                        232k watching
                      </div>
                    </Button>
                  </div>
                  <div className="bg-bluegray_959 flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 tracking-[-0.56px] w-[auto]"
                      variant="body78"
                    >
                      ERUN: Unity Gaming vs Army Geniuses Game 1 - BTS Pro
                      Series 13 SEA: Groups w/ Ares & 343
                    </Text>
                    <div className="flex flex-row items-center justify-between w-[332px]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <div className="bg-bluegray_961 h-[42px] rounded-[50%] w-[42px]"></div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <CheckBox
                            className="font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="BeyondTheSummit"
                            name="BeyondTheSummit One"
                          ></CheckBox>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 tracking-[-0.12px] w-[auto]"
                            variant="body87"
                          >
                            @bydsmt
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A107 flex items-center justify-center min-w-[81px] px-[12px] py-[8px] rounded-[8px] text-center w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_plus_white_a700_14x14.svg"
                            className="mr-[8px] text-center"
                            alt="plus"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]">
                          Follow
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                  <div className="bg-gray_753 flex flex-col gap-[122px] md:gap-[40px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                    <div className="bg-gray_984 flex flex-row gap-[8px] items-center justify-start px-[12px] py-[8px] rounded-[14px] w-[auto]">
                      <div className="bg-red_711 h-[8px] rounded-[50%] w-[8px]"></div>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.12px] w-[auto]"
                        variant="body87"
                      >
                        Live
                      </Text>
                    </div>
                    <Button
                      className="bg-gray_984 flex items-center justify-center min-w-[126px] px-[12px] py-[8px] rounded-[16px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_eye_white_a700_16x16.svg"
                          className="mr-[8px] text-center"
                          alt="eye"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]">
                        232k watching
                      </div>
                    </Button>
                  </div>
                  <div className="bg-bluegray_959 flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 tracking-[-0.56px] w-[auto]"
                      variant="body78"
                    >
                      [Charity] GoBald for cancer charity stream !welcome
                      !charity !goals
                    </Text>
                    <div className="flex flex-row items-center justify-between w-[332px]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <div className="bg-deep_orange_116 h-[42px] rounded-[50%] w-[42px]"></div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <CheckBox
                            className="font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="VerifiedPsycho"
                            name="VerifiedPsycho"
                          ></CheckBox>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 tracking-[-0.12px] w-[auto]"
                            variant="body87"
                          >
                            @verifiedpycho
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A107 flex items-center justify-center min-w-[81px] px-[12px] py-[8px] rounded-[8px] text-center w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_plus_white_a700_14x14.svg"
                            className="mr-[8px] text-center"
                            alt="plus"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]">
                          Follow
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                  <div className="bg-indigo_408 flex flex-col gap-[122px] md:gap-[40px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                    <div className="bg-gray_984 flex flex-row gap-[8px] items-center justify-start px-[12px] py-[8px] rounded-[14px] w-[auto]">
                      <div className="bg-red_711 h-[8px] rounded-[50%] w-[8px]"></div>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.12px] w-[auto]"
                        variant="body87"
                      >
                        Live
                      </Text>
                    </div>
                    <Button
                      className="bg-gray_984 flex items-center justify-center min-w-[126px] px-[12px] py-[8px] rounded-[16px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_eye_white_a700_16x16.svg"
                          className="mr-[8px] text-center"
                          alt="eye"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]">
                        232k watching
                      </div>
                    </Button>
                  </div>
                  <div className="bg-bluegray_959 flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 tracking-[-0.56px] w-[auto]"
                      variant="body78"
                    >
                      Echo x Vault of the Incarnates | Race to World First - Day
                      2 | !giveaway !drops
                    </Text>
                    <div className="flex flex-row items-center justify-between w-[332px]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <div className="bg-deep_orange_A402 h-[42px] rounded-[50%] w-[42px]"></div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <CheckBox
                            className="font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Echo_Esports"
                            name="EchoEsports"
                          ></CheckBox>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 tracking-[-0.12px] w-[auto]"
                            variant="body87"
                          >
                            echo_esports
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A107 flex items-center justify-center min-w-[81px] px-[12px] py-[8px] rounded-[16px] text-center w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_plus_white_a700_14x14.svg"
                            className="mr-[8px] text-center"
                            alt="plus"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[12px] text-left text-white_A700 tracking-[-0.12px]">
                          Follow
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveSaleswhatnotPage;
