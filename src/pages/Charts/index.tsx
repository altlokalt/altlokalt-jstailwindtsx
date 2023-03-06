import React from "react";

import { Img, Text, Line, List, Input } from "components";
import { CloseSVG } from "../../assets/images";

const ChartsPage: React.FC = () => {
  const [inputvalue, setInputvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-bluegray_972 font-dmsans h-[1140px] mx-[auto] pr-[180px] sm:pr-[20px] md:pr-[40px] relative w-[100%]">
        <div className="absolute bottom-[0] flex items-center justify-end left-[0] w-[86%]">
          <div className="flex md:flex-col flex-row gap-[39px] items-start justify-between w-[100%]">
            <aside className="flex flex-col md:hidden justify-start w-[257px]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-row items-start justify-evenly w-[100%]">
                  <div className="bg-gray_1008 flex flex-1 flex-col items-start justify-start mb-[1092px] py-[132px] w-[100%]">
                    <div className="flex flex-col gap-[48px] items-start justify-start md:ml-[0] ml-[32px] md:w-[100%] w-[43%]">
                      <div className="flex items-center justify-start w-[100%]">
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
                      <div className="flex items-center justify-start md:w-[100%] w-[90%]">
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
                      <div className="flex items-center justify-start md:w-[100%] w-[90%]">
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
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[16px] mt-[32px] md:w-[100%] w-[88%]">
                      <div className="bg-yellow_913 flex flex-row gap-[16px] items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                        <Img
                          src="images/img_chartstatistics_white_a700.svg"
                          className="h-[24px] w-[24px]"
                          alt="ChartStatistics"
                        />
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Charts
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:ml-[0] ml-[32px] mt-[32px] md:w-[100%] w-[43%]">
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
                    <Line className="bg-bluegray_831 h-[1px] mt-[39px] w-[100%]" />
                    <div className="flex flex-col gap-[48px] items-start justify-start mb-[447px] md:ml-[0] ml-[32px] mt-[39px] md:w-[100%] w-[65%]">
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
            <div className="flex flex-1 flex-col items-start justify-start md:mt-[0] mt-[133px] w-[100%]">
              <div className="flex items-center justify-start w-[10%] md:w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.15px] w-[auto]"
                    variant="body37"
                  >
                    Charts
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end ml-[auto] mt-[44px] md:w-[100%] w-[81%]">
                <Text
                  className="font-normal mb-[2px] not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  Title
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[240px] md:mt-[0] mt-[2px] not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  Plays
                </Text>
                <Text
                  className="font-normal mb-[2px] md:ml-[0] ml-[200px] not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  Albums
                </Text>
                <Text
                  className="font-normal mb-[2px] md:ml-[0] ml-[160px] not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
                  variant="body48"
                >
                  Duration
                </Text>
              </div>
              <List
                className="flex-col gap-[16px] grid items-center mt-[36px] w-[100%]"
                orientation="vertical"
              >
                <div className="bg-gray_1008 flex flex-1 items-start justify-start p-[12px] rounded-[8px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[94%]">
                    <div className="bg-bluegray_832 h-[120px] w-[13%]"></div>
                    <div className="flex flex-col gap-[10px] items-start justify-start md:ml-[0] ml-[24px] md:mt-[0] mt-[29px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                        variant="body48"
                      >
                        Sunday Morning
                      </Text>
                      <Text
                        className="font-bold text-left text-yellow_913 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Maroon Five
                      </Text>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] ml-[76px] md:mt-[0] mt-[56px] not-italic text-gray_554 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      22.12 M
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[204px] md:mt-[0] mt-[58px] not-italic text-center text-gray_554 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Songs for Jane
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[173px] md:mt-[0] mt-[55px] not-italic text-center text-gray_554 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      04.56
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_1008 flex flex-1 items-start justify-start p-[12px] rounded-[8px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[94%]">
                    <div className="bg-bluegray_832 h-[120px] w-[13%]"></div>
                    <div className="flex flex-col gap-[10px] items-start justify-start md:ml-[0] ml-[24px] md:mt-[0] mt-[29px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                        variant="body48"
                      >
                        Sunday Morning
                      </Text>
                      <Text
                        className="font-bold text-left text-yellow_913 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Maroon Five
                      </Text>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] ml-[76px] md:mt-[0] mt-[56px] not-italic text-gray_554 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      22.12 M
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[204px] md:mt-[0] mt-[58px] not-italic text-center text-gray_554 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Songs for Jane
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[173px] md:mt-[0] mt-[55px] not-italic text-center text-gray_554 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      04.56
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_1008 flex flex-1 items-start justify-start p-[12px] rounded-[8px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[94%]">
                    <div className="bg-bluegray_832 h-[120px] w-[13%]"></div>
                    <div className="flex flex-col gap-[10px] items-start justify-start md:ml-[0] ml-[24px] md:mt-[0] mt-[29px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                        variant="body48"
                      >
                        Sunday Morning
                      </Text>
                      <Text
                        className="font-bold text-left text-yellow_913 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Maroon Five
                      </Text>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] ml-[76px] md:mt-[0] mt-[56px] not-italic text-gray_554 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      22.12 M
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[204px] md:mt-[0] mt-[58px] not-italic text-center text-gray_554 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Songs for Jane
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[173px] md:mt-[0] mt-[55px] not-italic text-center text-gray_554 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      04.56
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_1008 flex flex-1 items-start justify-start p-[12px] rounded-[8px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[94%]">
                    <div className="bg-bluegray_832 h-[120px] w-[13%]"></div>
                    <div className="flex flex-col gap-[10px] items-start justify-start md:ml-[0] ml-[24px] md:mt-[0] mt-[29px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                        variant="body48"
                      >
                        Sunday Morning
                      </Text>
                      <Text
                        className="font-bold text-left text-yellow_913 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Maroon Five
                      </Text>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] ml-[76px] md:mt-[0] mt-[56px] not-italic text-gray_554 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      22.12 M
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[204px] md:mt-[0] mt-[58px] not-italic text-center text-gray_554 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Songs for Jane
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[173px] md:mt-[0] mt-[55px] not-italic text-center text-gray_554 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      04.56
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_1008 flex flex-1 items-start justify-start p-[12px] rounded-[8px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[94%]">
                    <div className="bg-bluegray_832 h-[120px] w-[13%]"></div>
                    <div className="flex flex-col gap-[10px] items-start justify-start md:ml-[0] ml-[24px] md:mt-[0] mt-[29px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                        variant="body48"
                      >
                        Sunday Morning
                      </Text>
                      <Text
                        className="font-bold text-left text-yellow_913 tracking-[0.08px] w-[auto]"
                        variant="body69"
                      >
                        Maroon Five
                      </Text>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] ml-[76px] md:mt-[0] mt-[56px] not-italic text-gray_554 text-left tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      22.12 M
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[204px] md:mt-[0] mt-[58px] not-italic text-center text-gray_554 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      Songs for Jane
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[173px] md:mt-[0] mt-[55px] not-italic text-center text-gray_554 tracking-[0.08px] w-[auto]"
                      variant="body69"
                    >
                      04.56
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_1008 flex flex-1 items-center justify-start p-[12px] rounded-[8px] w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between md:w-[100%] w-[97%]">
                    <div className="bg-bluegray_832 h-[120px] w-[12%]"></div>
                    <div className="flex flex-col gap-[5px] items-start justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 tracking-[0.12px] w-[auto]"
                        variant="body48"
                      >
                        Sunday Morning
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                        <Text
                          className="font-bold sm:mt-[0] mt-[16px] text-left text-yellow_913 tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Maroon Five
                        </Text>
                        <Text
                          className="font-normal mb-[15px] sm:ml-[0] ml-[163px] not-italic text-gray_554 text-left tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          22.12 M
                        </Text>
                        <Text
                          className="font-normal mb-[15px] sm:ml-[0] ml-[143px] not-italic text-center text-gray_554 tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          Songs for Jane
                        </Text>
                        <Text
                          className="font-normal mb-[16px] sm:ml-[0] ml-[105px] not-italic text-center text-gray_554 tracking-[0.08px] w-[auto]"
                          variant="body69"
                        >
                          04.56
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="absolute bg-bluegray_972 bottom-[0] flex items-center justify-end left-[0] pb-[41px] md:px-[20px] w-[89%]">
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
        <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[89%]">
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
      </div>
    </>
  );
};

export default ChartsPage;
