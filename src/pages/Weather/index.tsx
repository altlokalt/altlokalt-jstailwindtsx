import React from "react";

import { Img, Text, Button, Line, List, SelectBox } from "components";

const WeatherPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_992 flex sm:flex-col md:flex-col flex-row font-sfprotext sm:gap-[20px] md:gap-[20px] items-start justify-start mx-[auto] sm:w-[100%] md:w-[100%] w-[auto]">
        <Img
          src="images/img_frame2609189.svg"
          className="h-[100%] rounded-bl-[0] rounded-br-[32px] rounded-tl-[0] rounded-tr-[32px] w-[96px]"
          alt="Frame2609189"
        />
        <div className="flex flex-col md:gap-[40px] gap-[64px] items-start justify-start md:px-[20px] px-[64px] py-[32px] md:w-[100%] w-[auto]">
          <div className="flex flex-col md:gap-[40px] gap-[64px] items-start justify-start md:w-[100%] w-[auto]">
            <header className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[32px] items-start justify-start w-[auto]">
                <div className="bg-gray_457 h-[92px] rounded-[24px] w-[92px]"></div>
                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                  <Text
                    className="font-light text-left text-white_A700 w-[auto]"
                    variant="body60"
                  >
                    Hi, Arlene McCoy
                  </Text>
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body19"
                  >
                    Welcome back!
                  </Text>
                </div>
              </div>
              <ul className="flex flex-row gap-[16px] h-[48px] md:h-[auto] sm:hidden items-center justify-end w-[auto] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] text-center">
                  <Button
                    className="bg-yellow_911 flex items-center justify-center p-[16px] rounded-[12px] text-center"
                    leftIcon={
                      <Img
                        src="images/img_plus_24x24.svg"
                        className="mr-[12px] text-center"
                        alt="plus"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-bold text-[16px] text-left text-white_A700">
                      Add Device
                    </div>
                  </Button>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[14%]">
                  <Img
                    src="images/img_eye_white_a700_48x48.svg"
                    className="h-[48px] rounded-[12px] w-[48px]"
                    alt="eye"
                  />
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[14%]">
                  <Img
                    src="images/img_frame2608692.svg"
                    className="h-[48px] rounded-[12px] w-[48px]"
                    alt="Frame2608692"
                  />
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[14%]">
                  <Img
                    src="images/img_alarm_white_a700_48x48.svg"
                    className="h-[48px] rounded-[12px] w-[48px]"
                    alt="alarm"
                  />
                </li>
              </ul>
            </header>
            <div className="bg-gray_457 flex items-start justify-start p-[42px] sm:px-[20px] md:px-[40px] rounded-[24px] w-[100%]">
              <div className="flex flex-col gap-[4px] items-start justify-start mb-[7px] md:ml-[0] ml-[21px] w-[auto]">
                <div className="flex flex-col font-sfprodisplay relative w-[100%]">
                  <Text
                    className="mx-[auto] text-left text-white_A700 w-[auto]"
                    variant="body83"
                  >
                    14°
                  </Text>
                  <div className="flex flex-row font-sfprotext gap-[8px] items-center justify-between mt-[-5.41px] w-[auto] z-[1]">
                    <div className="flex flex-row gap-[3px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        H:{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        26°
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        L:
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body69"
                      >
                        -16°
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-light font-sfprotext text-left text-white_A700 w-[auto]"
                  variant="body48"
                >
                  Montral, Canada
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[36px] items-start justify-start md:w-[100%] w-[auto]">
            <div className="flex sm:flex-col flex-row gap-[40px] items-center justify-start sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  variant="body69"
                >
                  Living Room
                </Text>
                <Line className="bg-yellow_911 h-[4px] w-[36%]" />
              </div>
              <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                  variant="body69"
                >
                  Kidchen Room
                </Text>
                <Line className="bg-gray_992 h-[4px] w-[33%]" />
              </div>
              <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                  variant="body69"
                >
                  Bedroom
                </Text>
                <Line className="bg-gray_992 h-[4px] w-[52%]" />
              </div>
              <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                  variant="body69"
                >
                  Dining Rooom
                </Text>
                <Line className="bg-gray_992 h-[4px] w-[34%]" />
              </div>
              <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                  variant="body69"
                >
                  Family Room
                </Text>
                <Line className="bg-gray_992 h-[4px] w-[38%]" />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start max-w-[1216px] w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-gray_993 flex flex-1 flex-col gap-[32px] items-center justify-start p-[16px] rounded-[24px] w-[100%]">
                <div className="bg-gray_457 h-[169px] rounded-[24px] w-[100%]"></div>
                <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                  <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Smart Lighting
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                      variant="body78"
                    >
                      4 Lamps
                    </Text>
                  </div>
                  <Img
                    src="images/img_switch.svg"
                    className="h-[31px] w-[51px]"
                    alt="Switch"
                  />
                </div>
              </div>
              <div className="bg-gray_993 flex flex-1 flex-col gap-[32px] items-center justify-start p-[16px] rounded-[24px] w-[100%]">
                <div className="bg-gray_457 h-[169px] rounded-[24px] w-[100%]"></div>
                <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                  <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Smart TV
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                      variant="body78"
                    >
                      1 Device
                    </Text>
                  </div>
                  <Img
                    src="images/img_switch.svg"
                    className="h-[31px] w-[51px]"
                    alt="Switch One"
                  />
                </div>
              </div>
              <div className="bg-gray_993 flex flex-1 flex-col gap-[32px] items-center justify-start p-[16px] rounded-[24px] w-[100%]">
                <div className="bg-gray_457 h-[169px] rounded-[24px] w-[100%]"></div>
                <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                  <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Camera
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                      variant="body78"
                    >
                      8 Device
                    </Text>
                  </div>
                  <Img
                    src="images/img_volume_gray_661.svg"
                    className="h-[31px] w-[51px]"
                    alt="volume"
                  />
                </div>
              </div>
              <div className="bg-gray_993 flex flex-1 flex-col gap-[32px] items-center justify-start p-[16px] rounded-[24px] w-[100%]">
                <div className="bg-gray_457 h-[169px] rounded-[24px] w-[100%]"></div>
                <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                  <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Wifi
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                      variant="body78"
                    >
                      2 Device
                    </Text>
                  </div>
                  <Img
                    src="images/img_volume_gray_661.svg"
                    className="h-[31px] w-[51px]"
                    alt="volume One"
                  />
                </div>
              </div>
              <div className="bg-gray_993 flex flex-1 flex-col gap-[32px] items-center justify-start p-[16px] rounded-[24px] w-[100%]">
                <div className="bg-gray_457 h-[169px] rounded-[24px] w-[100%]"></div>
                <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                  <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Air purifier
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                      variant="body78"
                    >
                      2 Device
                    </Text>
                  </div>
                  <Img
                    src="images/img_volume_gray_661.svg"
                    className="h-[31px] w-[51px]"
                    alt="volume Two"
                  />
                </div>
              </div>
            </List>
            <List
              className="sm:flex-col flex-row gap-[32px] grid md:grid-cols-1 grid-cols-2 justify-start max-w-[1216px] w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-gray_993 flex sm:flex-1 flex-col gap-[48px] items-start justify-start p-[24px] sm:px-[20px] rounded-[24px] sm:w-[100%] w-[440px]">
                <div className="flex flex-row gap-[24px] items-center justify-between w-[100%]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body69"
                  >
                    Power Usage
                  </Text>
                  <Text
                    className="font-bold text-center text-white_A700 w-[auto]"
                    variant="body48"
                  >
                    30,4 kWh
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex sm:flex-1 flex-col gap-[27px] items-end justify-start sm:w-[100%] w-[13%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        500
                      </Text>
                      <Text
                        className="font-normal mt-[30px] not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        400
                      </Text>
                      <Text
                        className="font-normal mt-[29px] not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        300
                      </Text>
                      <Text
                        className="font-normal mt-[30px] not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        200
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        100
                      </Text>
                      <Text
                        className="font-normal mt-[30px] not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        50
                      </Text>
                      <Text
                        className="font-normal mt-[30px] not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[24px] h-[100%] items-start justify-start w-[100%]">
                    <div className="h-[300px] relative w-[100%]">
                      <div className="h-[300px] m-[auto] w-[100%]">
                        <Img
                          src="images/img_chart_white_a700.svg"
                          className="absolute h-[100%] inset-[0] justify-center m-[auto] w-[320px]"
                          alt="Chart"
                        />
                        <Img
                          src="images/img_chart_yellow_911.svg"
                          className="absolute bottom-[0] h-[223px] inset-x-[0] mx-[auto] w-[320px]"
                          alt="chart One"
                        />
                      </div>
                      <div className="absolute bottom-[0] flex flex-col gap-[8px] h-[281px] md:h-[auto] items-center justify-start right-[22%] w-[auto]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[43px] items-center justify-start p-[8px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group39444.svg')",
                          }}
                        >
                          <Text
                            className="font-bold mb-[7px] text-left text-white_A700 w-[auto]"
                            variant="body69"
                          >
                            349 kwh
                          </Text>
                        </div>
                        <Img
                          src="images/img_frame2609235.svg"
                          className="h-[100%] w-[12px]"
                          alt="Frame2609235"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_343 text-left w-[auto]"
                        variant="body78"
                      >
                        1
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_343 text-left w-[auto]"
                        variant="body78"
                      >
                        2
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_343 text-left w-[auto]"
                        variant="body78"
                      >
                        3
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_343 text-left w-[auto]"
                        variant="body78"
                      >
                        4
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_343 text-left w-[auto]"
                        variant="body78"
                      >
                        5
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_343 text-left w-[auto]"
                        variant="body78"
                      >
                        6
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_343 text-left w-[auto]"
                        variant="body78"
                      >
                        7
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_993 flex flex-1 flex-col gap-[48px] items-start justify-start p-[24px] sm:px-[20px] rounded-[24px] w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                  <div className="flex flex-row gap-[24px] items-center justify-start w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body69"
                    >
                      Power Comsumtion
                    </Text>
                    <SelectBox
                      className="bg-white_A700_19 font-normal h-[30px] not-italic p-[12px] rounded-[8px] text-[14px] text-left text-white_A700 sm:w-[100%] w-[42%]"
                      placeholderClassName="text-white_A700"
                      name="Frame2608850"
                      placeholder="Week"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_white_a700_16x16.svg"
                          className="h-[16px] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <Text
                    className="font-bold text-center text-white_A700 w-[auto]"
                    variant="body48"
                  >
                    30,4 kWh
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[27px] items-end justify-start md:w-[100%] w-[7%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        500
                      </Text>
                      <Text
                        className="font-normal mt-[30px] not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        400
                      </Text>
                      <Text
                        className="font-normal mt-[29px] not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        300
                      </Text>
                      <Text
                        className="font-normal mt-[30px] not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        200
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        100
                      </Text>
                      <Text
                        className="font-normal mt-[30px] not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        50
                      </Text>
                      <Text
                        className="font-normal mt-[30px] not-italic text-bluegray_343 text-right w-[auto]"
                        variant="body78"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[24px] h-[100%] items-start justify-start w-[100%]">
                    <div className="h-[322px] relative w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex h-[43px] items-center justify-start mb-[-21.28px] ml-[auto] mr-[183px] p-[8px] w-[auto] z-[1]"
                        style={{
                          backgroundImage:
                            "url('images/img_group39444_blue_403.svg')",
                        }}
                      >
                        <Text
                          className="font-bold mb-[7px] text-center text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          214 KWh
                        </Text>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[300px] items-center justify-end mt-[auto] mx-[auto] pt-[26px] sm:px-[20px] px-[26px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group532.svg')",
                        }}
                      >
                        <Img
                          src="images/img_group39441.svg"
                          className="h-[269px] mt-[4px] w-[567px]"
                          alt="Group39441"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%] md:w-[100%]">
                        <Text
                          className="flex-1 font-normal not-italic text-bluegray_343 text-center w-[auto]"
                          variant="body78"
                        >
                          1
                        </Text>
                        <Text
                          className="flex-1 font-normal not-italic text-bluegray_343 text-center w-[auto]"
                          variant="body78"
                        >
                          2
                        </Text>
                        <Text
                          className="flex-1 font-normal not-italic text-bluegray_343 text-center w-[auto]"
                          variant="body78"
                        >
                          3
                        </Text>
                        <Text
                          className="flex-1 font-normal not-italic text-bluegray_343 text-center w-[auto]"
                          variant="body78"
                        >
                          4
                        </Text>
                        <Text
                          className="flex-1 font-normal not-italic text-bluegray_343 text-center w-[auto]"
                          variant="body78"
                        >
                          5
                        </Text>
                        <Text
                          className="flex-1 font-normal not-italic text-bluegray_343 text-center w-[auto]"
                          variant="body78"
                        >
                          6
                        </Text>
                        <Text
                          className="flex-1 font-normal not-italic text-bluegray_343 text-center w-[auto]"
                          variant="body78"
                        >
                          7
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherPage;
