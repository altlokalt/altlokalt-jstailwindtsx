import React from "react";

import { Img, Text, Line, Input, Radio, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const MusicPlayPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-bluegray_972 flex font-dmsans mx-[auto] pr-[181px] sm:pr-[20px] md:pr-[40px] relative w-[100%]">
        <aside className="flex flex-col md:hidden justify-start mt-[auto] w-[16%]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex flex-row items-start justify-evenly w-[100%]">
              <div className="bg-gray_1008 flex flex-1 flex-col gap-[39px] items-start justify-start mb-[540px] py-[132px] w-[100%]">
                <div className="flex flex-col gap-[48px] items-start justify-start md:ml-[0] ml-[32px] md:w-[100%] w-[43%]">
                  <div className="flex items-center justify-start md:w-[100%] w-[99%]">
                    <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_grid_bluegray_340.svg"
                        className="h-[24px] w-[24px]"
                        alt="grid"
                      />
                      <Text
                        className="font-bold text-gray_554 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Discover
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start md:w-[100%] w-[89%]">
                    <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_map_bluegray_340.svg"
                        className="h-[24px] w-[24px]"
                        alt="map"
                      />
                      <Text
                        className="font-bold text-gray_554 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Browse
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start md:w-[100%] w-[89%]">
                    <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_computer_bluegray_340_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="computer"
                      />
                      <Text
                        className="font-bold mt-[2px] text-gray_554 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Playlist
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start md:w-[100%] w-[85%]">
                    <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_chartstatistics.svg"
                        className="h-[24px] w-[24px]"
                        alt="ChartStatistics"
                      />
                      <Text
                        className="font-bold text-gray_554 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Charts
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_save_bluegray_340.svg"
                        className="h-[24px] w-[24px]"
                        alt="save"
                      />
                      <Text
                        className="font-bold text-gray_554 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Premium
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-bluegray_831 h-[1px] w-[100%]" />
                <div className="flex flex-col gap-[48px] items-start justify-start mb-[999px] md:ml-[0] ml-[32px] md:w-[100%] w-[65%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_plus_bluegray_340.svg"
                        className="h-[24px] w-[24px]"
                        alt="plus"
                      />
                      <Text
                        className="font-bold mt-[2px] text-gray_554 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Created Playlist
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start md:w-[100%] w-[77%]">
                    <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_favorite_bluegray_340.svg"
                        className="h-[24px] w-[24px]"
                        alt="favorite"
                      />
                      <Text
                        className="font-bold mt-[2px] text-gray_554 text-left tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Liked Song
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-bluegray_831 h-[2211px] mt-[80px] w-[1px]" />
            </div>
          </div>
        </aside>
        <div className="flex flex-col items-center justify-start ml-[-257px] w-[89%] z-[1]">
          <div
            className="bg-cover bg-no-repeat flex h-[80px] items-center justify-start p-[12px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group1345.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[97%]">
              <div className="bg-bluegray_832 h-[40px] md:mt-[0] my-[8px] rounded-[50%] w-[40px]"></div>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[82%]">
                <Text
                  className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  Musiku
                </Text>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_340 text-bluegray_340 text-left tracking-[0.08px] w-[100%]"
                  wrapClassName="bg-gray_1009 flex md:ml-[0] md:w-[100%] ml-[92px] pl-[16px] pr-[35px] py-[17px] rounded-[8px] sm:ml-[0] sm:pr-[20px] sm:w-[100%] w-[77%]"
                  name="Search"
                  placeholder="Search"
                  prefix={
                    <Img
                      src="images/img_search_bluegray_340.svg"
                      className="cursor-pointer mr-[8px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#9a9ab0"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <div className="flex h-[24px] items-center justify-start md:ml-[0] ml-[60px] w-[24px]">
                  <Img
                    src="images/img_alarm_bluegray_340.svg"
                    className="h-[24px] w-[24px]"
                    alt="alarm"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-between md:ml-[0] ml-[28px] md:w-[100%] w-[13%]">
                <div className="bg-bluegray_832 h-[40px] rounded-[50%] w-[40px]"></div>
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Richard Frank
                  </Text>
                  <Text
                    className="font-normal mt-[3px] not-italic text-gray_554 text-left tracking-[0.10px] w-[auto]"
                    variant="body87"
                  >
                    richard@musiku.com
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-bluegray_831 h-[1px] w-[100%]" />
        </div>
        <div className="bg-bluegray_972 flex items-center justify-end ml-[-257px] mt-[auto] pb-[41px] md:px-[20px] w-[89%] z-[1]">
          <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
            <Line className="bg-bluegray_831 h-[1px] w-[100%]" />
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[85%]">
              <Img
                src="images/img_pause.svg"
                className="h-[24px] w-[auto]"
                alt="Pause"
              />
              <div className="flex items-center justify-start md:ml-[0] ml-[72px] md:w-[100%] w-[55%]">
                <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                      variant="body48"
                    >
                      Sunday Morning
                    </Text>
                    <Text
                      className="font-medium mb-[3px] sm:ml-[0] ml-[25px] sm:mt-[0] mt-[7px] text-left text-white_A700 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Maroon Five
                    </Text>
                    <Text
                      className="font-medium mb-[3px] sm:ml-[0] ml-[256px] sm:mt-[0] mt-[7px] text-left text-white_A700 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      02:44 / 04:30
                    </Text>
                  </div>
                  <div className="h-[8px] overflow-hidden relative w-[100%]">
                    <div className="w-full h-full absolute bg-gray_335 rounded-[4px]"></div>
                    <div
                      className="h-full absolute bg-yellow_806  rounded-[2px]"
                      style={{ width: "61%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_volume_white_a700_24x24.svg"
                className="h-[24px] md:ml-[0] ml-[66px] w-[24px]"
                alt="volume"
              />
              <Img
                src="images/img_actions.svg"
                className="h-[24px] md:ml-[0] ml-[56px] w-[auto]"
                alt="Actions"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end ml-[undefinedpx] mr-[48px] mt-[auto] w-[68%] z-[1]">
          <div className="bg-gradient72  flex items-start justify-start p-[38px] sm:px-[20px] rounded-[8px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-center justify-start mb-[4px] md:ml-[0] ml-[2px] md:w-[100%] w-[77%]">
              <div className="bg-gray_335 h-[320px] rounded-[8px] w-[320px]"></div>
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[49%]">
                <Text
                  className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  Song
                </Text>
                <Text
                  className="font-bold mt-[13px] text-left text-white_A700 tracking-[0.24px] w-[auto]"
                  variant="body19"
                >
                  Sunday Morning
                </Text>
                <Text
                  className="font-normal mt-[7px] not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  Maroon Five
                </Text>
                <div className="flex flex-row gap-[23px] items-center justify-start mt-[29px] md:w-[100%] w-[68%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
                    variant="body48"
                  >
                    04:20
                  </Text>
                  <Radio
                    value="31Mei2020"
                    className="font-normal not-italic sm:text-[20px] md:text-[22px] text-[24px] text-left text-white_A700 tracking-[0.12px]"
                    inputClassName="bg-white_A700 h-[8px] mr-[5px] w-[8px]"
                    checked={false}
                    name="31Mei2020"
                    label="31 Mei 2020 "
                  ></Radio>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start mt-[46px] md:w-[100%] w-[96%]">
                  <Button
                    className="bg-white_A700 flex items-center justify-center px-[24px] py-[12px] rounded-[8px] sm:px-[20px] text-center"
                    rightIcon={
                      <Img
                        src="images/img_play_yellow_913.svg"
                        className="ml-[8px] text-center"
                        alt="Play"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-bold font-dmsans text-[16px] text-left text-yellow_913 tracking-[0.08px]">
                      Play Now
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center outline outline-[1px] outline-white_A700 px-[24px] py-[12px] rounded-[8px] sm:px-[20px] text-center"
                    rightIcon={
                      <Img
                        src="images/img_favorite_white_a700_24x24.svg"
                        className="ml-[8px] text-center"
                        alt="favorite"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-bold font-mulish text-[16px] text-left text-white_A700 tracking-[0.08px]">
                      Add to Playlist
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[56px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start md:w-[100%] w-[auto]">
              <Text
                className="md:ml-[0] ml-[2px] text-left text-white_A700 tracking-[0.20px] w-[auto]"
                variant="body26"
              >
                Sunday Morning Lyrics
              </Text>
              <Text
                className="font-normal leading-[120.00%] not-italic text-left text-white_A700 tracking-[0.08px]"
                variant="body69"
              >
                Sunday morning, rain is falling
                <br />
                <br />
                Steal some covers, share some skin
                <br />
                <br />
                Clouds are shrouding us in moments unforgettable
                <br />
                <br />
                You twist to fit the mold that I am in
                <br />
                <br />
                But things just get so crazy
                <br />
                <br />
                Living life gets hard to do
                <br />
                <br />
                And I would gladly hit the road, get up and go if I knew
                <br />
                <br />
                That someday it would lead me back to you
                <br />
                <br />
                That someday it would lead me back to you
                <br />
                <br />
                That may be all I need
                <br />
                <br />
                In darkness she is all I see
                <br />
                <br />
                Come and rest your bones with me
                <br />
                <br />
                Driving slow on Sunday morning
              </Text>
            </div>
            <div className="bg-gray_1008 flex md:flex-1 flex-col gap-[41px] items-start justify-start p-[24px] sm:px-[20px] rounded-[8px] md:w-[100%] w-[37%]">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[7px] md:w-[100%] w-[63%]">
                <Text
                  className="font-bold text-left text-yellow_913 tracking-[0.15px] w-[auto]"
                  variant="body37"
                >
                  Featured Song
                </Text>
                <div className="flex flex-col items-start justify-start mt-[28px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                    variant="body48"
                  >
                    Daylight
                  </Text>
                  <Text
                    className="font-normal mt-[2px] not-italic text-left text-yellow_913 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Maroon Five
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start mt-[21px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                    variant="body48"
                  >
                    She will be Loved
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-yellow_913 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Maroon Five
                  </Text>
                </div>
                <div className="flex flex-col gap-[5px] items-center justify-start mt-[21px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                    variant="body48"
                  >
                    Animals
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-yellow_913 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Maroon Five
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mb-[4px] md:ml-[0] ml-[7px] md:w-[100%] w-[75%]">
                <Text
                  className="font-bold text-left text-yellow_913 tracking-[0.15px] w-[auto]"
                  variant="body37"
                >
                  Popular Song
                </Text>
                <div className="flex items-center justify-start mt-[25px] md:w-[100%] w-[60%]">
                  <div className="flex flex-col gap-[5px] justify-start w-[100%]">
                    <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                        variant="body48"
                      >
                        #1
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                        variant="body48"
                      >
                        This Love
                      </Text>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] ml-[46px] not-italic text-left text-yellow_913 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Maroon Five
                    </Text>
                  </div>
                </div>
                <List
                  className="flex-col gap-[21px] grid items-center mt-[21px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[5px] justify-start w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                          variant="body48"
                        >
                          #1
                        </Text>
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                          variant="body48"
                        >
                          Beautiful Mistakes
                        </Text>
                      </div>
                      <Text
                        className="font-normal md:ml-[0] ml-[46px] not-italic text-left text-yellow_913 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Maroon Five
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[63%]">
                    <div className="flex flex-col gap-[5px] justify-start w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                          variant="body48"
                        >
                          #1
                        </Text>
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                          variant="body48"
                        >
                          Memories
                        </Text>
                      </div>
                      <Text
                        className="font-normal md:ml-[0] ml-[46px] not-italic text-left text-yellow_913 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Maroon Five
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start mt-[53px] w-[100%]">
            <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="font-bold text-left text-white_A700 tracking-[0.15px] w-[auto]"
                  variant="body37"
                >
                  More from Maroon Five
                </Text>
                <Text
                  className="font-bold text-right text-yellow_913 tracking-[0.08px] w-[auto]"
                  variant="body69"
                >
                  See All
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                  <div className="bg-gray_335 h-[200px] rounded-[8px] w-[200px]"></div>
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                    variant="body48"
                  >
                    Sunday Morning
                  </Text>
                  <Text
                    className="font-bold text-center text-yellow_913 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Maroon Five
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                  <div className="bg-gray_335 h-[200px] rounded-[8px] w-[200px]"></div>
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                    variant="body48"
                  >
                    Sunday Morning
                  </Text>
                  <Text
                    className="font-bold text-center text-yellow_913 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Maroon Five
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                  <div className="bg-gray_335 h-[200px] rounded-[8px] w-[200px]"></div>
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                    variant="body48"
                  >
                    Sunday Morning
                  </Text>
                  <Text
                    className="font-bold text-center text-yellow_913 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Maroon Five
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                  <div className="bg-gray_335 h-[200px] rounded-[8px] w-[200px]"></div>
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                    variant="body48"
                  >
                    Sunday Morning
                  </Text>
                  <Text
                    className="font-bold text-center text-yellow_913 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Maroon Five
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                  <div className="bg-gray_335 h-[200px] rounded-[8px] w-[200px]"></div>
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                    variant="body48"
                  >
                    Sunday Morning
                  </Text>
                  <Text
                    className="font-bold text-center text-yellow_913 tracking-[0.08px] w-[auto]"
                    variant="body69"
                  >
                    Maroon Five
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayPage;
